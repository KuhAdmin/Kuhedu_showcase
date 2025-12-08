import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Globe, MessageCircle, BookOpen } from "lucide-react";
import { Link } from "wouter";
import languageAppImg from "@assets/generated_images/concept_art_for_language_learning_with_speech_bubbles_and_global_icons.png";

export default function LanguageApp() {
  return (
    <Layout>
      <div className="bg-indigo-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={languageAppImg} alt="Language App Background" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-indigo-900/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/" className="inline-flex items-center text-indigo-200 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">LinguaConnect</h1>
            <p className="text-xl text-indigo-100 leading-relaxed mb-8">
              Breaking language barriers with AI-driven learning paths. 
              Master French, Spanish, and more with our interactive platform.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <Globe className="h-10 w-10 text-indigo-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Cultural Immersion</h3>
            <p className="text-slate-600">Learn not just the language, but the culture through curated content and real-world scenarios.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <MessageCircle className="h-10 w-10 text-indigo-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Conversational Practice</h3>
            <p className="text-slate-600">Practice speaking with AI chatbots that provide instant feedback on pronunciation and grammar.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <BookOpen className="h-10 w-10 text-indigo-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Structured Curriculum</h3>
            <p className="text-slate-600">From beginner to advanced, follow a structured path designed by linguistic experts.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
