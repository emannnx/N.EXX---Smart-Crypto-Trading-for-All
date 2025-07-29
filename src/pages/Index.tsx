import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Heart, Bitcoin, TrendingUp, Users } from "lucide-react";
import Layout from "@/components/Layout";
import CryptoTicker from "@/components/CryptoTicker";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import heroProfessional from "@/assets/hero-professional.jpg";

const Index = () => {
  const pillars = [
    {
      icon: Zap,
      title: "Simple",
      description: "Easy-to-use platform for all crypto trading needs",
      color: "text-nexx-neon-yellow",
    },
    {
      icon: Heart,
      title: "Fun",
      description: "Enjoyable trading experience with gamified elements",
      color: "text-nexx-gold",
    },
    {
      icon: Shield,
      title: "Reliable",
      description: "Secure and trustworthy crypto trading platform",
      color: "text-nexx-neon-green",
    },
  ];

  const services = [
    {
      title: "Buy Bitcoin",
      description: "Purchase BTC with instant settlement",
      color: "bg-nexx-neon-green",
      icon: Bitcoin,
    },
    {
      title: "Sell USDT",
      description: "Convert USDT to local currency quickly",
      color: "bg-nexx-neon-yellow",
      icon: TrendingUp,
    },
    {
      title: "Convert Ethereum",
      description: "Swap ETH to other cryptocurrencies",
      color: "bg-nexx-gold",
      icon: ArrowRight,
    },
    {
      title: "Cash Any Crypto",
      description: "Convert any crypto to cash instantly",
      color: "bg-nexx-orange",
      icon: Users,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative pt-24 pb-12 overflow-hidden flex items-center justify-center"
        style={{ height: "90vh" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center h-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center justify-center w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center flex flex-col items-center justify-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Trade Wisely.{" "}
                <span className="text-transparent bg-clip-text gradient-primary">
                  Do it with N.EXX
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                We make crypto trading simple, secure, and sweet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="neon-glow text-lg px-8 py-3">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="secondary" size="lg" className="text-lg px-8 py-3">
                  Trade Now 
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl flex justify-center">
                <img
                  src={heroProfessional}
                  alt="Professional crypto trader using modern trading dashboard"
                  className="w-full h-auto max-w-md"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <CryptoTicker />


     

      {/* Services Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-secondary">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need for crypto trading in one place
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer"
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4`}>
                      <service.icon className="h-6 w-6 text-black" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

       {/* 3 Pillars Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-primary">N.EXX</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Built on three core principles that drive our platform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className={`w-16 h-16 mx-auto rounded-full bg-card border flex items-center justify-center ${pillar.color}`}>
                      <pillar.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-2xl">{pillar.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-lg">
                      {pillar.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Trusted by <span className="text-accent">Thousands</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">$1M+</div>
                <p className="text-muted-foreground">in trades processed</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-secondary mb-2">10K+</div>
                <p className="text-muted-foreground">satisfied customers</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                <p className="text-muted-foreground">customer support</p>
              </motion.div>
            </div>

            <div className="bg-card p-8 rounded-lg max-w-2xl mx-auto">
              <p className="text-lg italic mb-4">
                "N.EXX made crypto trading so simple for me. The platform is intuitive and the customer service is outstanding!"
              </p>
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mr-4">
                  JD
                </div>
                <div>
                  <p className="font-semibold">John Doe</p>
                  <p className="text-sm text-muted-foreground">Verified Trader</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">N.EXX</h3>
              <p className="text-muted-foreground mb-4">
                Smart crypto trading for everyone. Simple, secure, and sweet.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm">WhatsApp</Button>
                <Button variant="outline" size="sm">Instagram</Button>
                <Button variant="outline" size="sm">Twitter</Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="/about" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="/market" className="hover:text-primary transition-colors">Market</a></li>
                <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="/faq" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Buy Bitcoin</li>
                <li>Sell USDT</li>
                <li>Convert Ethereum</li>
                <li>Cash Any Crypto</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Lagos, Nigeria</li>
                <li>support@nexx.com</li>
                <li>+234 800 000 0000</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 N.EXX. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </Layout>
  );
};

export default Index;