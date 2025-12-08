import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold font-heading text-white tracking-tighter">Kuhedu</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Innovating the future through cutting-edge web and mobile solutions. 
            From EdTech to LegalTech, we build products that matter.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Products</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><Link href="/products/stemlab" className="hover:text-primary transition-colors">StemLab</Link></li>
            <li><Link href="/products/language-app" className="hover:text-primary transition-colors">LinguaConnect</Link></li>
            <li><Link href="/products/legal-tech" className="hover:text-primary transition-colors">AdvocatePro</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>Kolkata, India</li>
            <li>founder@kuhedu.com</li>
            <li>(+91) 99113 85653</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} Kuhedu Technologies (P) Ltd. All rights reserved.
      </div>
    </footer>
  );
}
