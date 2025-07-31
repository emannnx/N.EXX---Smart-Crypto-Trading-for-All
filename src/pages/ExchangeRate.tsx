import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, TrendingUp } from "lucide-react";

const ExchangeRate = () => {
  const exchangeRates = [
    { amount: "$1000 and above", rate: "NGN 1527/₦" },
    { amount: "$50 to $999", rate: "NGN 1524/₦" },
    { amount: "50$ and above", rate: "17.50 zar" },
  ];

  return (
    <Layout>
      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-6 text-glow"
            >
              Exchange <span className="text-primary">Rate</span>
            </motion.h1>
          </div>
        </section>

        {/* Exchange Table Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Exchange rate for all <span className="text-primary">Cryptocurrencies</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                The table below shows our competitive exchange rates.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-card rounded-lg border border-border overflow-hidden"
            >
              <Table>
                <TableHeader>
                  <TableRow className="border-border">
                    <TableHead className="text-lg font-semibold text-primary">Amount (USD)</TableHead>
                    <TableHead className="text-lg font-semibold text-primary">Naira Rate (NGN)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {exchangeRates.map((rate, index) => (
                    <TableRow key={index} className="border-border hover:bg-muted/20">
                      <TableCell className="font-medium text-base">{rate.amount}</TableCell>
                      <TableCell className="font-bold text-base text-secondary">{rate.rate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </motion.div>

            {/* Notice Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 p-4 bg-primary/10 border border-primary/20 rounded-lg"
            >
              <p className="text-primary font-semibold text-center">
                Kindly note that we do not accept any crypto payment below $50.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Support & Contact Section */}
        <section className="py-16 px-4 bg-muted/5">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Do you have any <span className="text-primary">question?</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                <Card className="bg-card/50 border-border hover:border-primary/30 transition-colors">
                  <CardContent className="p-6 text-center">
                    <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Email Support</h3>
                    <p className="text-muted-foreground">Admin@nexxglobal.net</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/50 border-border hover:border-primary/30 transition-colors">
                  <CardContent className="p-6 text-center">
                    <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Phone Support</h3>
                    <p className="text-muted-foreground">‪+27728897818‬</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 text-center border border-primary/20"
            >
              <TrendingUp className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Buy & Sell Bitcoin and other <span className="text-primary">Cryptocurrency</span> at the Best Rate
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Get the best rates, experience seamless transactions, and make the most of your digital investments with N.EXX™.
              </p>
              <a 
                  href="https://wa.me/27728897818?text=Hello%20N.EXX™%2C%20I%20would%20like%20to%20know%20more%20about%20your%20crypto%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <Button size="lg" className="neon-glow font-semibold">
                Start Trading Now
              </Button>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-card border-t border-border py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">N.EXX™</h3>
                <p className="text-muted-foreground">
                  Making crypto trading simple, secure, and sweet for everyone.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li><a href="/about" className="hover:text-primary transition-colors">About</a></li>
                  <li><a href="/exchange-rate" className="hover:text-primary transition-colors">Rate</a></li>
                  <li><a href="/market" className="hover:text-primary transition-colors">Sell</a></li>
                  <li><a href="/faq" className="hover:text-primary transition-colors">FAQ</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Admin@nexxglobal.net</li>
                  <li>‪+27728897818‬</li>
                  <li>Lagos, Nigeria</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/nexx_global?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-muted-foreground hover:text-primary transition-colors">
                    Instagram
                  </a>
                <a
                  href="https://wa.me/27728897818?text=Hello%20N.EXX™™%2C%20I%20would%20like%20to%20know%20more%20about%20your%20crypto%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                 className="text-muted-foreground hover:text-primary transition-colors">
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
              <p>&copy; 2024 N.EXX™. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Layout>
  );
};

export default ExchangeRate;