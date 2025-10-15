const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Import your actual services
const { OptionsFlowService, isMarketOpen, getLastTradingDay } = require('./optionsFlowService.js');

// Initialize services
const optionsFlowService = new OptionsFlowService(process.env.POLYGON_API_KEY);

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: ['https://efitrading.com', 'https://www.efitrading.com', 'http://localhost:3000'],
  credentials: true
}));
app.use(express.json());

// Copy your optionsFlowService and related files here
// For now, simple health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Bloomberg API Server is running',
    timestamp: new Date().toISOString(),
    parallel_processing: 'Available'
  });
});

// Options flow endpoint that will use parallel processing
app.get('/api/stream-options-flow', async (req, res) => {
  // Set up Server-Sent Events
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Access-Control-Allow-Origin': '*'
  });

  // Use actual parallel processing
  try {
    const allTrades = [];
    let currentSummary = {
      total_trades: 0,
      total_premium: 0,
      unique_symbols: 0,
      trade_types: { BLOCK: 0, SWEEP: 0, 'MULTI-LEG': 0, SPLIT: 0 },
      call_put_ratio: { calls: 0, puts: 0 },
      processing_time_ms: 0,
      message: 'Scanning in progress...'
    };

    // Progress callback to stream trades as they're found
    const onProgress = (newTrades, statusMessage, metadata) => {
      if (newTrades && newTrades.length > 0) {
        allTrades.push(...newTrades);
        
        // Update summary
        currentSummary.total_trades = allTrades.length;
        currentSummary.total_premium = allTrades.reduce((sum, trade) => sum + (trade.total_premium || 0), 0);
        
        // Stream the new trades immediately
        res.write(`data: ${JSON.stringify({
          type: 'trades',
          trades: newTrades,
          summary: currentSummary,
          message: statusMessage,
          metadata: metadata
        })}\n\n`);
      } else if (statusMessage) {
        // Stream progress updates
        res.write(`data: ${JSON.stringify({
          type: 'progress',
          message: statusMessage,
          metadata: metadata
        })}\n\n`);
      }
    };

    res.write(`data: ${JSON.stringify({
      type: 'status',
      message: '🔥 Starting ultra-fast parallel scan...',
      timestamp: new Date().toISOString()
    })}\n\n`);

    // Run the actual options flow scan using the service method
    const finalTrades = await optionsFlowService.fetchLiveOptionsFlowUltraFast(
      undefined, // For market-wide scan (all tickers)
      onProgress
    );

    // Send final results
    const finalSummary = {
      total_trades: finalTrades.length,
      total_premium: finalTrades.reduce((sum, trade) => sum + (trade.total_premium || 0), 0),
      unique_symbols: new Set(finalTrades.map(t => t.ticker)).size,
      trade_types: { BLOCK: 0, SWEEP: 0, 'MULTI-LEG': 0, SPLIT: 0 },
      call_put_ratio: { calls: 0, puts: 0 },
      processing_time_ms: 0,
      message: `Scan complete! Found ${finalTrades.length} trades`
    };

    res.write(`data: ${JSON.stringify({
      type: 'complete',
      trades: finalTrades,
      summary: finalSummary,
      market_info: {
        status: 'LIVE',
        is_live: true,
        data_date: new Date().toISOString().split('T')[0],
        market_open: isMarketOpen()
      }
    })}\n\n`);
    
    res.end();
  } catch (error) {
    console.error('❌ API Error:', error);
    res.write(`data: ${JSON.stringify({
      type: 'error',
      message: `Error: ${error.message}`,
      error: error.toString()
    })}\n\n`);
    res.end();
  }
});

app.listen(port, () => {
  console.log(`🚀 Bloomberg API Server running on port ${port}`);
  console.log(`✅ Parallel processing enabled`);
  console.log(`🔗 CORS enabled for efitrading.com`);
});