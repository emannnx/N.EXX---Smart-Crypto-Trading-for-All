import { useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import marketTrading from "@/assets/market-trading.jpg";
import AboutCap from "../assets/AboutCapN.nexx.png" 

const Market = () => {
  useEffect(() => {
    // TradingView Advanced Chart Widget
    const script1 = document.createElement("script");
    script1.type = "text/javascript";
    script1.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script1.async = true;
    script1.innerHTML = JSON.stringify({
      autosize: true,
      symbol: "BINANCE:BTCUSDT",
      interval: "D",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "en",
      enable_publishing: false,
      withdateranges: true,
      range: "YTD",
      hide_side_toolbar: false,
      allow_symbol_change: true,
      save_image: false,
      details: true,
      hotlist: true,
      calendar: false,
      support_host: "https://www.tradingview.com"
    });

    // TradingView Market Overview Widget
    const script2 = document.createElement("script");
    script2.type = "text/javascript";
    script2.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    script2.async = true;
    script2.innerHTML = JSON.stringify({
      colorTheme: "dark",
      dateRange: "12M",
      showChart: true,
      locale: "en",
      width: "100%",
      height: "100%",
      largeChartUrl: "",
      isTransparent: false,
      showSymbolLogo: true,
      showFloatingTooltip: false,
      plotLineColorGrowing: "rgba(136, 230, 0, 1)",
      plotLineColorFalling: "rgba(249, 12, 10, 1)",
      gridLineColor: "rgba(42, 46, 57, 0)",
      scaleFontColor: "rgba(134, 137, 147, 1)",
      belowLineFillColorGrowing: "rgba(136, 230, 0, 0.12)",
      belowLineFillColorFalling: "rgba(249, 12, 10, 0.12)",
      belowLineFillColorGrowingBottom: "rgba(136, 230, 0, 0)",
      belowLineFillColorFallingBottom: "rgba(249, 12, 10, 0)",
      symbolActiveColor: "rgba(136, 230, 0, 0.12)",
      tabs: [
        {
          title: "Indices",
          symbols: [
            { s: "FOREXCOM:SPXUSD", d: "S&P 500" },
            { s: "FOREXCOM:NSXUSD", d: "US 100" },
            { s: "FOREXCOM:DJI", d: "Dow 30" },
            { s: "INDEX:NKY", d: "Nikkei 225" },
            { s: "INDEX:DEU40", d: "DAX Index" },
            { s: "FOREXCOM:UKXGBP", d: "UK 100" }
          ],
          originalTitle: "Indices"
        },
        {
          title: "Crypto",
          symbols: [
            { s: "BINANCE:BTCUSDT", d: "Bitcoin" },
            { s: "BINANCE:ETHUSDT", d: "Ethereum" },
            { s: "BINANCE:BNBUSDT", d: "BNB" },
            { s: "BINANCE:SOLUSDT", d: "Solana" },
            { s: "BINANCE:XRPUSDT", d: "XRP" },
            { s: "BINANCE:ADAUSDT", d: "Cardano" }
          ],
          originalTitle: "Crypto"
        }
      ]
    });

    const chartContainer = document.getElementById("tradingview-chart");
    const overviewContainer = document.getElementById("tradingview-overview");

    if (chartContainer) {
      chartContainer.appendChild(script1);
    }
    
    if (overviewContainer) {
      overviewContainer.appendChild(script2);
    }

    return () => {
      // Cleanup
      if (chartContainer) {
        chartContainer.innerHTML = "";
      }
      if (overviewContainer) {
        overviewContainer.innerHTML = "";
      }
    };
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Live <span className="text-transparent bg-clip-text gradient-primary">Market</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Real-time cryptocurrency prices and advanced trading charts
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={AboutCap} 
                  alt="Professional trading workspace with multiple monitors showing real-time charts"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advanced Chart Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Advanced Trading Chart</CardTitle>
                <CardDescription>
                  Professional-grade charting tools with technical indicators, timeframes, and symbol switching
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div 
                  id="tradingview-chart" 
                  className="h-[600px] w-full"
                  style={{ minHeight: "600px" }}
                />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Market Overview Section */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Market Overview</CardTitle>
                <CardDescription>
                  Live market data with sparkline charts and performance metrics
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div 
                  id="tradingview-overview" 
                  className="h-[500px] w-full"
                  style={{ minHeight: "500px" }}
                />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Professional <span className="text-secondary">Trading Tools</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need for technical analysis and market insights
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="text-center h-full">
                <CardHeader>
                  <CardTitle className="text-primary">Candlestick Charts</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Professional OHLC candlestick charts for detailed price analysis
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="text-center h-full">
                <CardHeader>
                  <CardTitle className="text-secondary">Technical Indicators</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    RSI, MACD, Moving Averages, and 100+ other technical indicators
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="text-center h-full">
                <CardHeader>
                  <CardTitle className="text-accent">Multiple Timeframes</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    1 minute to 1 year timeframes for different trading strategies
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="text-center h-full">
                <CardHeader>
                  <CardTitle className="text-destructive">Live Data</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Real-time market data from major cryptocurrency exchanges
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trading Notice */}
      <section className="py-12 bg-primary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-4 text-primary">Ready to Start Trading?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Use these charts to analyze the market, then contact us to execute your trades with the best rates in Nigeria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Contact Us to Trade
              </motion.a>
              <motion.a
                href="https://wa.me/27728897818?text=Hello%20N.EXX%2C%20I%20would%20like%20to%20know%20more%20about%20your%20crypto%20services."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
              >
                WhatsApp Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Market;