import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, MessageCircle, Send } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import contactSupport from "@/assets/contact-support.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: "Lagos, Nigeria",
      color: "text-nexx-neon-green",
    },
    {
      icon: Mail,
      title: "Email",
      details: "support@nexx.com",
      color: "text-nexx-neon-yellow",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+234 800 000 0000",
      color: "text-nexx-gold",
    },
  ];

  return (
    <Layout>
      {/* Contact Header */}
      <section className="pt-24 pb-8 w-full max-w-full overflow-x-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 w-full max-w-full flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-3">
              Contact <span className="text-primary">N.EXX <span style={{fontSize:10}}>tm</span></span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
              We’re here to help. Reach out to us for support, questions, or feedback.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full flex justify-center mt-6"
          >
            <img
              src={contactSupport}
              alt="N.EXX <span style={{fontSize:10}}>tm</span> support team"
              className="rounded-2xl shadow-lg w-full max-w-xl object-cover"
              style={{ aspectRatio: "16/7" }}
            />
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-8 w-full max-w-full overflow-x-hidden bg-muted/50">
        <div className="container mx-auto px-4 w-full max-w-full">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {contactInfo.map((info) => (
              <Card key={info.title} className="text-center h-full hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className={`w-12 h-12 mx-auto rounded-full bg-card border flex items-center justify-center ${info.color}`}>
                    <info.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-base mt-2">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm font-medium text-foreground">
                    {info.details}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Quick Help */}
      <section className="py-16 w-full max-w-full overflow-x-hidden">
        <div className="container mx-auto px-4 w-full max-w-full">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-2/3"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What is this about?"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about how we can help you..."
                        rows={6}
                        required
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full neon-glow">
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Help & Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/3 space-y-8"
            >
              {/* WhatsApp Card */}
              <Card className="bg-green-500/10 border-green-500/20">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-green-400">WhatsApp Support</CardTitle>
                      <CardDescription>Get instant help via WhatsApp</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Need immediate assistance? Chat with our support team on WhatsApp for real-time help.
                  </p>
                  <Button
                    className="w-full bg-green-500 hover:bg-green-600 text-white"
                    onClick={() => window.open("https://wa.me/2348000000000", "_blank")}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Chat on WhatsApp
                  </Button>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card>
                <CardHeader>
                  <CardTitle>Office Hours</CardTitle>
                  <CardDescription>When we're available to help</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="text-primary font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="text-primary font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-muted-foreground">Closed</span>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                    <p className="text-sm">
                      <strong>Emergency Support:</strong> Our WhatsApp support is available 24/7 for urgent trading issues.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;