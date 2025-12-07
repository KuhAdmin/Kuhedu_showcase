import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/ui/Hero";
import { ProductCard } from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Import images
import stemLabImg from "@assets/generated_images/virtual_science_laboratory_with_digital_overlays_for_stem_education.png";
import languageAppImg from "@assets/generated_images/concept_art_for_language_learning_with_speech_bubbles_and_global_icons.png";
import legalTechImg from "@assets/generated_images/digital_legal_technology_concept_with_digital_documents_and_security_lock.png";

export default function Home() {
  const products = [
    {
      id: "stemlab",
      title: "StemLab.site",
      description: "Virtual lab based experiments for STEM subjects. Empowering students with immersive scientific learning experiences.",
      image: stemLabImg,
      link: "/products/stemlab",
      tags: ["EdTech", "Virtual Reality", "STEM"]
    },
    {
      id: "lingua",
      title: "LinguaConnect",
      description: "Master foreign languages like French and Spanish with our interactive learning platform designed for rapid fluency.",
      image: languageAppImg,
      link: "/products/language-app",
      tags: ["EdTech", "Language", "Mobile"]
    },
    {
      id: "legal",
      title: "AdvocatePro",
      description: "Comprehensive Legal Tech solution for advocates to manage cases, clients, and documentation securely.",
      image: legalTechImg,
      link: "/products/legal-tech",
      tags: ["LegalTech", "SaaS", "Enterprise"]
    }
  ];

  return (
    <Layout>
      <Hero />
      
      <section id="products" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-slate-900">Our Products</h2>
            <p className="text-lg text-slate-600">
              We build scalable, user-centric products that solve real-world problems across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-slate-900">Why Choose Kuhedu?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Technical Excellence</h3>
                    <p className="text-slate-600">We leverage the latest technologies to build robust, scalable, and secure applications.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">User-Centric Design</h3>
                    <p className="text-slate-600">Our design philosophy prioritizes user experience, ensuring intuitive and engaging interfaces.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Global Impact</h3>
                    <p className="text-slate-600">Headquartered in Kolkata, we serve clients and users around the globe with world-class solutions.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-cyan-400/20 rounded-2xl transform rotate-3 scale-105"></div>
              <div className="relative bg-slate-950 p-8 rounded-2xl text-white shadow-xl">
                <h3 className="text-2xl font-bold font-heading mb-4">Let's Build Something Great</h3>
                <p className="text-slate-400 mb-6">
                  Have an idea? Need a partner for your digital transformation? We are here to help.
                </p>
                <Button className="w-full bg-white text-slate-950 hover:bg-slate-200">Start a Project</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
