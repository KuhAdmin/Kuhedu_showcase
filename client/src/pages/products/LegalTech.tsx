import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, FileText, Gavel } from "lucide-react";
import { Link } from "wouter";
import legalTechImg from "@assets/generated_images/digital_legal_technology_concept_with_digital_documents_and_security_lock.png";

export default function LegalTech() {
  return (
    <Layout>
      <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={legalTechImg} alt="Legal Tech Background" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/">
            <a className="inline-flex items-center text-slate-300 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </a>
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">AdvocatePro</h1>
            <p className="text-xl text-slate-200 leading-relaxed mb-8">
              The ultimate practice management solution for modern advocates. 
              Streamline your workflow, manage clients, and secure your documents.
            </p>
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-8">
              Request Demo
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-8">
            <div className="flex gap-4">
              <div className="bg-amber-100 p-3 rounded-lg h-fit">
                <Shield className="h-6 w-6 text-amber-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Bank-Grade Security</h3>
                <p className="text-slate-600">Your client data is sensitive. We protect it with enterprise-level encryption and security protocols.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-amber-100 p-3 rounded-lg h-fit">
                <FileText className="h-6 w-6 text-amber-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Document Automation</h3>
                <p className="text-slate-600">Generate standard legal documents in seconds with our smart template system.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-amber-100 p-3 rounded-lg h-fit">
                <Gavel className="h-6 w-6 text-amber-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Case Management</h3>
                <p className="text-slate-600">Track hearings, deadlines, and case history in one unified dashboard.</p>
              </div>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="bg-slate-100 p-8 rounded-2xl border border-slate-200">
              <h3 className="text-2xl font-bold font-heading mb-6">Designed for Advocates</h3>
              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Email Address</label>
                  <input type="email" placeholder="advocate@example.com" className="w-full p-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Firm Name</label>
                  <input type="text" placeholder="Legal Firm LLP" className="w-full p-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500" />
                </div>
                <Button className="w-full bg-slate-900 text-white hover:bg-slate-800">
                  Join Waitlist
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
