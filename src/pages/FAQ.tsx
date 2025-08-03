import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import Layout from "@/components/Layout";
import FirstPages from "../assets/FirstPages.png"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import faqSupport from "@/assets/faq-support.jpg";
import hoddie from "../assets/Hoddie.png"

const FAQ = () => {
  const faqs = [
    {
      question: "How does crypto trading work with N.EXX™?",
      answer: "Trading with N.EXX™ is simple. Contact us via WhatsApp or our contact form with the cryptocurrency you want to buy or sell. We'll provide you with the current market rate, and once you agree, we'll guide you through the secure transaction process. No complicated accounts or lengthy verification processes required."
    },
    {
      question: "What are your exchange rates?",
      answer: "We offer competitive rates that are updated in real-time based on current market conditions. Our rates are transparent with no hidden fees. Contact us for the latest rates on any cryptocurrency pair. We pride ourselves on offering some of the best rates in Nigeria."
    },
    {
      question: "How long does settlement take?",
      answer: "Most transactions are processed within 5 minutes, depending on the cryptocurrency and payment method used. Bitcoin and Ethereum may take a bit longer to confirm, while other assets typically settle more quickly. We’ll keep you informed every step of the way."
    },
    {
      question: "Is it safe to trade with N.EXX™?",
      answer: "Absolutely. Security is our top priority. We use industry-standard security protocols, secure wallets, and have processed over $1M in trades without any security incidents. All transactions are verified and we maintain full transparency throughout the process."
    },
    {
      question: "Do I need to create an account?",
      answer: "No! That's one of the things that makes N.EXX™ special. You don't need to create an account, go through lengthy KYC processes, or remember passwords. Simply contact us when you want to trade, and we'll handle everything for you."
    },
    {
      question: "What cryptocurrencies do you support?",
      answer: "We support all major cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), USDT, USDC, BNB, Solana (SOL), XRP, Cardano (ADA), and many others. If you have a specific cryptocurrency you'd like to trade, just ask us and we'll let you know if we support it."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept bank transfers, mobile money, and cash payments depending on your location and the amount. Our team will discuss the best payment method for your specific transaction when you contact us."
    },
    {
      question: "Are there any fees?",
      answer: "Our fees are built into the exchange rate we quote you, so there are no surprise charges. The rate we quote is the final rate you'll pay or receive. We believe in complete transparency with no hidden fees."
    },
    {
      question: "Can I trade large amounts?",
      answer: "Yes, we can handle both small and large transactions. For larger amounts, we may require additional verification for security purposes, but we'll guide you through the process. Contact us to discuss your specific needs."
    },
    {
      question: "What if I have an issue with my transaction?",
      answer: "Our customer support team is available 24/7 via WhatsApp for any issues or questions. We're committed to resolving any problems quickly and ensuring you have a smooth trading experience."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Frequently Asked <span className="text-transparent bg-clip-text gradient-primary">Questions</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about trading crypto with N.EXX™
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
                  src={FirstPages} 
                  alt="Friendly customer support representative providing helpful information"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <AccordionItem value={`item-${index}`} className="border border-border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <span className="text-lg font-semibold">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Still Have Questions?</CardTitle>
                <CardDescription className="text-lg">
                  Can't find what you're looking for? Our support team is here to help.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Contact Us
                  </motion.a>
                  <motion.a
                    href="https://wa.me/27728897818?text=Hello%20N.EXX™%2C%20I%20would%20like%20to%20know%20more%20about%20your%20crypto%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
                  >
                    WhatsApp Support
                  </motion.a>
                </div>
                
                <div className="mt-8 p-6 bg-primary/10 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Quick Support Facts:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Average response time: Under 5 minutes</li>
                    <li>• WhatsApp support available 24/7</li>
                    <li>• Email support available Monday-Saturday</li>
                    <li>• Over 99% customer satisfaction rate</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;