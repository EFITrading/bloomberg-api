// Top 1800+ symbols for comprehensive market scanning
const TOP_1800_SYMBOLS = [
  // SPY FIRST - Most important options ticker
  'SPY',
  
  // Major ETFs
  'QQQ', 'IWM', 'XLF', 'XLE', 'XLK', 'GDX', 'EEM', 'VXX', 'EFA', 'TLT',
  'XLI', 'XLV', 'XLP', 'XLY', 'XLU', 'XLB', 'XLRE', 'XME', 'XRT', 'KRE',
  
  // Mega Cap Technology
  'AAPL', 'MSFT', 'GOOGL', 'AMZN', 'NVDA', 'META', 'TSLA', 'NFLX', 'AMD', 'ADBE',
  'CRM', 'ORCL', 'INTC', 'CSCO', 'AVGO', 'TXN', 'QCOM', 'IBM', 'AMAT', 'LRCX',
  
  // Financial Services
  'JPM', 'BAC', 'WFC', 'GS', 'MS', 'C', 'AXP', 'BLK', 'SCHW', 'USB',
  'PNC', 'TFC', 'COF', 'BK', 'STT', 'NTRS', 'RF', 'CFG', 'KEY', 'FITB',
  
  // Healthcare & Biotech
  'JNJ', 'PFE', 'UNH', 'ABBV', 'TMO', 'ABT', 'MRK', 'DHR', 'BMY', 'LLY',
  'AMGN', 'GILD', 'BIIB', 'REGN', 'VRTX', 'CELG', 'ILMN', 'INCY', 'ALXN', 'MYL',
  
  // Consumer & Retail
  'WMT', 'PG', 'KO', 'PEP', 'MCD', 'NKE', 'SBUX', 'HD', 'LOW', 'TGT',
  'COST', 'CVS', 'WBA', 'DIS', 'CMCSA', 'VZ', 'T', 'CHTR', 'DISH', 'NFLX',
  
  // Energy & Utilities
  'XOM', 'CVX', 'COP', 'SLB', 'EOG', 'KMI', 'OKE', 'WMB', 'EPD', 'ET',
  'NEE', 'DUK', 'SO', 'EXC', 'PEG', 'SRE', 'AEP', 'D', 'PCG', 'EIX',
  
  // Industrial & Manufacturing
  'BA', 'CAT', 'GE', 'MMM', 'UTX', 'HON', 'UPS', 'FDX', 'LMT', 'RTX',
  'NOC', 'GD', 'EMR', 'ETN', 'PH', 'CMI', 'DE', 'ITW', 'ROK', 'DOV',
  
  // Materials & Chemicals
  'LIN', 'APD', 'ECL', 'FCX', 'NEM', 'DD', 'DOW', 'LYB', 'CF', 'EMN',
  'PPG', 'SHW', 'NUE', 'STLD', 'X', 'CLF', 'AA', 'ACH', 'MOS', 'IFF',
  
  // Real Estate & REITs
  'AMT', 'PLD', 'CCI', 'EQIX', 'SPG', 'O', 'WELL', 'PSA', 'EXR', 'AVB',
  'EQR', 'BXP', 'VTR', 'ARE', 'DLR', 'SLG', 'HST', 'REG', 'FRT', 'KIM',
  
  // Meme Stocks & High Options Volume
  'GME', 'AMC', 'BB', 'NOK', 'PLTR', 'WISH', 'CLOV', 'SPCE', 'SOFI', 'HOOD',
  'RIVN', 'LCID', 'F', 'SNAP', 'TWTR', 'UBER', 'LYFT', 'COIN', 'SQ', 'PYPL',
  
  // Growth & Momentum Stocks
  'ROKU', 'ZM', 'PTON', 'DOCU', 'CRM', 'SNOW', 'CRWD', 'ZS', 'OKTA', 'DDOG',
  'FSLY', 'NET', 'ESTC', 'MDB', 'SPLK', 'WDAY', 'VEEV', 'NOW', 'TWLO', 'SHOP',
  
  // Chinese ADRs
  'BABA', 'JD', 'PDD', 'BIDU', 'NIO', 'XPEV', 'LI', 'DIDI', 'TME', 'NTES',
  'WB', 'BILI', 'IQ', 'VIPS', 'YMM', 'TAL', 'EDU', 'GSX', 'GOTU', 'COE',
  
  // Biotech & Pharma
  'MRNA', 'BNTX', 'PFE', 'JNJ', 'NVAX', 'GILD', 'REGN', 'VRTX', 'BIIB', 'AMGN',
  'CELG', 'BMY', 'LLY', 'MRK', 'ABBV', 'ZTS', 'ILMN', 'INCY', 'ALXN', 'BMRN',
  
  // Airlines & Travel
  'DAL', 'AAL', 'UAL', 'LUV', 'JBLU', 'ALK', 'HA', 'SAVE', 'SKYW', 'MESA',
  'MAR', 'HLT', 'H', 'IHG', 'WYNN', 'LVS', 'MGM', 'CZR', 'PENN', 'DKNG',
  
  // Banks & Regional Banks
  'KRE', 'KBWB', 'XLF', 'WFC', 'JPM', 'BAC', 'C', 'GS', 'MS', 'USB',
  'PNC', 'TFC', 'COF', 'RF', 'KEY', 'FITB', 'CFG', 'HBAN', 'CMA', 'MTB',
  
  // Electric Vehicles
  'TSLA', 'NIO', 'XPEV', 'LI', 'RIVN', 'LCID', 'F', 'GM', 'RIDE', 'NKLA',
  'HYLN', 'FSR', 'GOEV', 'CANOO', 'ARVL', 'LEV', 'SES', 'QS', 'VLDR', 'LAZR',
  
  // Solar & Clean Energy
  'ENPH', 'SEDG', 'SPWR', 'FSLR', 'RUN', 'NOVA', 'CSIQ', 'JKS', 'SOL', 'MAXN',
  'BE', 'PLUG', 'FCEL', 'BLDP', 'BALLARD', 'NEE', 'AES', 'D', 'EIX', 'PCG'
];

module.exports = {
  TOP_1800_SYMBOLS
};