import { motion } from "framer-motion";
import { Target, Eye, Award, Users } from "lucide-react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import aboutOffice from "@/assets/about-office.jpg";

const About = () => {
  const milestones = [
    { year: "2023", title: "Founded", description: "N.EXX was born with a vision to simplify crypto trading" },
    { year: "2024", title: "Growth", description: "Reached 1,000+ satisfied customers" },
    { year: "2024", title: "Expansion", description: "Launched multiple cryptocurrency trading pairs" },
    { year: "2024", title: "Trust", description: "Processed over $1M in crypto trades" },
  ];

  const values = [
    {
      icon: Target,
      title: "Transparency",
      description: "Clear pricing, no hidden fees, complete honesty in all our dealings",
      color: "text-nexx-neon-green",
    },
    {
      icon: Users,
      title: "Speed",
      description: "Lightning-fast transactions and instant customer support responses",
      color: "text-nexx-neon-yellow",
    },
    {
      icon: Award,
      title: "Trust",
      description: "Building lasting relationships through reliable and secure services",
      color: "text-nexx-gold",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Who <span className="text-transparent bg-clip-text gradient-primary">We Are</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We're on a mission to make cryptocurrency trading accessible, simple, and secure for everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                N.EXX was founded with a simple belief: cryptocurrency trading shouldn't be complicated. 
                In a world where digital assets are becoming increasingly important, we saw the need for 
                a platform that bridges the gap between traditional finance and the crypto economy.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our team of financial experts and tech innovators came together to create a platform 
                that prioritizes user experience above all else. We believe that everyone deserves 
                access to the opportunities that cryptocurrency provides.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={aboutOffice} 
                  alt="Modern tech office environment with clean design"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-4xl font-bold text-white drop-shadow-lg">N.EXX</div>
                  <p className="text-white/90 text-lg drop-shadow-md">Building the future of crypto trading</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg">
                    To democratize cryptocurrency trading by providing a simple, secure, and 
                    accessible platform that empowers individuals to participate in the digital 
                    economy with confidence and ease.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                    <Eye className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg">
                    To become the leading cryptocurrency trading platform in Nigeria and beyond, 
                    known for our commitment to user experience, security, and innovation in the 
                    digital asset space.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-accent">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Key milestones in our company's growth
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className="flex-1">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-primary">{milestone.year}</CardTitle>
                      <CardDescription className="text-xl font-semibold text-foreground">
                        {milestone.title}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-8 h-8 bg-primary rounded-full mx-8 flex-shrink-0"></div>
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className={`w-16 h-16 mx-auto rounded-full bg-card border flex items-center justify-center ${value.color}`}>
                      <value.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-2xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-lg">
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