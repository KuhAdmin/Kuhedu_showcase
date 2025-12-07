import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroBg from "@assets/generated_images/abstract_technology_visualization_with_network_nodes_and_clean_lines_in_deep_blue_and_cyan.png";

export function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg}
          alt="Abstract Tech Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            Innovating from Kolkata to the World
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-heading text-white leading-tight tracking-tight">
            Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Digital Future</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-lg leading-relaxed">
            Kuhedu is a premier web and mobile development company crafting next-generation solutions in EdTech, LegalTech, and beyond.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 h-12 text-lg rounded-full">
              Explore Products
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 h-12 text-lg rounded-full">
              Contact Us
            </Button>
          </div>
        </motion.div>
        
        {/* Abstract visual element or empty space for the background to shine through */}
        <div className="hidden lg:block"></div>
      </div>
    </div>
  );
}
