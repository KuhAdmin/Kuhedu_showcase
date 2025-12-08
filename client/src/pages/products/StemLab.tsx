import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import stemLabImg from "@assets/generated_images/virtual_science_laboratory_with_digital_overlays_for_stem_education.png";

export default function StemLab() {
  return (
    <Layout>
      <div className="bg-slate-950 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={stemLabImg} alt="StemLab Background" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/" className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">StemLab.site</h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Revolutionizing science education with immersive virtual laboratory experiments. 
              Safe, accessible, and engaging STEM learning for students everywhere.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold font-heading mb-6 text-slate-900">Features</h2>
            <ul className="space-y-4">
              {[
                "Virtual Physics, Chemistry, and Biology Experiments",
                "Interactive Mathematics Lab with Geometry, Algebra... 2D/3D Visualizations",
                "Real-time data visualization and analysis",
                "Safe environment for hazardous experiments",
                "Accessible on web and mobile devices",
                "Curriculum-aligned content for schools"
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <h3 className="text-2xl font-bold font-heading mb-4">Impact</h3>
            <p className="text-slate-600 mb-6">
              StemLab brings the laboratory to the student, eliminating cost barriers and safety concerns associated with physical labs. 
              We are democratizing access to high-quality science education.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-1">25+</div>
                <div className="text-sm text-slate-500">Virtual Experiments</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-1">1K+</div>
                <div className="text-sm text-slate-500">Launch day Users</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
