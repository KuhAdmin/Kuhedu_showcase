import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Users, Target, Lightbulb, Globe } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We push boundaries and embrace new technologies to create solutions that shape the future."
    },
    {
      icon: Users,
      title: "User-Centric",
      description: "Every product we build starts with understanding user needs and ends with exceeding their expectations."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We maintain the highest standards in code quality, design, and user experience."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "From Kolkata to the world, we build products that make a difference across borders."
    }
  ];

  const team = [
    { name: "Leadership Team", role: "Driving Vision & Strategy" },
    { name: "Engineering", role: "Building Robust Solutions" },
    { name: "Design", role: "Crafting Beautiful Experiences" },
    { name: "Product", role: "Shaping the Roadmap" }
  ];

  return (
    <Layout>
      <div className="bg-slate-950 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">About Kuhedu</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              We are an AI-first web and mobile development company headquartered in Kolkata, India, 
              dedicated to building innovative digital solutions that transform user experience.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold font-heading mb-6 text-slate-900">Our Story</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Founded with a vision to bridge the gap between technology and real-world impact, 
                  Kuhedu was incorporated to be a multi-product company serving users across education, 
                  legal, language learning and other high-impact sectors.
                </p>
                <p>
                  Our journey began with a simple belief: technology should empower, not complicate. 
                  This philosophy drives every product we create, from virtual STEM laboratories 
                  that make science accessible to students everywhere, to legal tech solutions 
                  that streamline the work of advocates to language learning in a scientific and engaging way.
                </p>
                <p>
                  Based in the vibrant city of Kolkata, we combine local talent with global 
                  ambitions, creating products that serve users around the world while staying 
                  true to our roots.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-cyan-400/20 rounded-2xl transform -rotate-3 scale-105"></div>
              <div className="relative bg-slate-100 p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4">
                    <div className="text-4xl font-bold text-primary mb-2">3+</div>
                    <div className="text-sm text-slate-600">Live Products</div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-4xl font-bold text-primary mb-2">20+</div>
                    <div className="text-sm text-slate-600">Active Labs</div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-4xl font-bold text-primary mb-2">2+</div>
                    <div className="text-sm text-slate-600">Years Experience</div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-4xl font-bold text-primary mb-2">India</div>
                    <div className="text-sm text-slate-600">Headquarters</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-heading mb-12 text-center text-slate-900">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">{value.title}</h3>
                <p className="text-slate-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-heading mb-12 text-center text-slate-900">Our Teams</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-950 text-white p-6 rounded-xl text-center"
              >
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">{dept.name.charAt(0)}</span>
                </div>
                <h3 className="text-lg font-bold mb-1">{dept.name}</h3>
                <p className="text-slate-400 text-sm">{dept.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
