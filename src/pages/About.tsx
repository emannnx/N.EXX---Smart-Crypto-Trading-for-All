import { motion } from "framer-motion";
import { Target, Eye, Award, Users } from "lucide-react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import aboutOffice from "@/assets/about-office.jpg";
import AboutCap from "../assets/AboutCapN.nexx.png"

const About = () => {
  const milestones = [
    { year: "2023", title: "Founded", description: "N.EXX™ was born with a vision to simplify crypto trading." },
    { year: "2024", title: "Growth", description: "Reached 1,000+ satisfied customers." },
    { year: "2024", title: "Expansion", description: "Launched multiple cryptocurrency trading pairs." },
    { year: "2024", title: "Trust", description: "Processed over $1M in crypto trades." },
  ];

  const values = [
    {
      icon: Target,
      title: "Transparency",
      description: "Clear pricing, no hidden fees, and complete honesty in all our dealings.",
      color: "text-nexx-neon-green",
    },
    {
      icon: Users,
      title: "Speed",
      description: "Lightning-fast transactions and instant customer support responses.",
      color: "text-nexx-neon-yellow",
    },
    {
      icon: Award,
      title: "Trust",
      description: "Building lasting relationships through reliable and secure services.",
      color: "text-nexx-gold",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-12 w-full max-w-full overflow-x-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 w-full max-w-full flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              <span className="block text-primary">About N.EXX™ </span>
              <span className="text-2xl md:text-3xl font-normal text-muted-foreground mt-2 block">
                Simple. Secure. For Everyone.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
              We’re on a mission to make cryptocurrency trading accessible, simple, and secure for everyone.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full flex justify-center mt-8"
          >
            <img
              src={AboutCap}
              alt="Modern tech office environment"
              className="rounded-2xl shadow-lg w-full max-w-2xl object-cover"
              style={{ aspectRatio: "16/7" }}
            />
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 w-full max-w-full overflow-x-hidden bg-muted/50">
        <div className="container mx-auto px-4 w-full max-w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Our <span className="text-primary">Mission & Vision</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              What drives us at N.EXX™ 
            </p>
          </motion.div>
          <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex-1"
            >
              <Card className="h-full flex flex-col items-center text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-2">Our Mission</CardTitle>
                <CardDescription className="text-base mb-2">
                  To democratize cryptocurrency trading by providing a simple, secure, and accessible platform that empowers individuals to participate in the digital economy with confidence and ease.
                </CardDescription>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex-1"
            >
              <Card className="h-full flex flex-col items-center text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Eye className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl mb-2">Our Vision</CardTitle>
                <CardDescription className="text-base mb-2">
                  To become the leading cryptocurrency trading platform in Nigeria and beyond, known for our commitment to user experience, security, and innovation in the digital asset space.
                </CardDescription>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline / Milestones */}
      <section className="py-16 w-full max-w-full overflow-x-hidden">
        <div className="container mx-auto px-4 w-full max-w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Our <span className="text-accent">Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Key milestones in our company's growth
            </p>
          </motion.div>
          <div className="flex flex-col gap-8 max-w-2xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year + milestone.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg border border-primary">
                  {milestone.year}
                </div>
                <div>
                  <div className="font-semibold text-primary">{milestone.title}</div>
                  <div className="text-muted-foreground text-base">{milestone.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-muted/50 w-full max-w-full overflow-x-hidden">
        <div className="container mx-auto px-4 w-full max-w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className={`w-14 h-14 mx-auto rounded-full bg-card border flex items-center justify-center ${value.color}`}>
                      <value.icon className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;