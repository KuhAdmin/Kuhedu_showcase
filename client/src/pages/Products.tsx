import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/products/ProductCard";
import { motion } from "framer-motion";

import stemLabImg from "@assets/generated_images/virtual_science_laboratory_with_digital_overlays_for_stem_education.png";

export default function Products() {
  const products = [
    {
      id: "stemlab",
      title: "StemLab.site",
      description: "Virtual lab based experiments for STEM subjects. Empowering students with immersive scientific learning experiences including Physics, Chemistry, Biology, and Mathematics.",
      image: stemLabImg,
      link: "/products/stemlab",
      tags: ["EdTech", "Virtual Reality", "STEM"]
    }
  ];

  const upcomingProducts = [
    {
      title: "Coming Soon",
      description: "We're constantly innovating. Stay tuned for more exciting products in the pipeline.",
      status: "In Development"
    }
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
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">Our Products</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              From EdTech to LegalTech, we build innovative digital solutions that transform industries and empower users worldwide.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold font-heading mb-8 text-slate-900">Live Products</h2>
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

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold font-heading mb-8 text-slate-900">Upcoming Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-slate-100 border-2 border-dashed border-slate-300 rounded-xl p-8 flex flex-col items-center justify-center text-center min-h-[300px]"
              >
                <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold font-heading mb-2 text-slate-700">{product.title}</h3>
                <p className="text-slate-500 mb-4">{product.description}</p>
                <span className="text-xs font-medium px-3 py-1 bg-amber-100 text-amber-700 rounded-full">
                  {product.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
