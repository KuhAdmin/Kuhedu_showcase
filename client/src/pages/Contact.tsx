import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { firstName, lastName, email, subject, message } = formData;
    const fullName = `${firstName} ${lastName}`.trim();
    const body = `Name: ${fullName}\nEmail: ${email}\n\nMessage:\n${message}`;
    
    const mailtoLink = `mailto:founder@kuhedu.com?subject=${encodeURIComponent(subject || "Contact Form Submission")}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">Get in Touch</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Have a project in mind? Want to partner with us? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold font-heading mb-8 text-slate-900">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Office Address</h3>
                    <p className="text-slate-600">Kolkata, West Bengal, India</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                    <p className="text-slate-600">founder@kuhedu.com</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Phone</h3>
                    <p className="text-slate-600">(+91) 98314 35653</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h2 className="text-2xl font-bold font-heading mb-6 text-slate-900">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">First Name</label>
                    <input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John" 
                      required
                      className="w-full p-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary" 
                      data-testid="input-firstName"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Last Name</label>
                    <input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe" 
                      required
                      className="w-full p-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary" 
                      data-testid="input-lastName"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com" 
                    required
                    className="w-full p-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary" 
                    data-testid="input-email"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?" 
                    required
                    className="w-full p-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary" 
                    data-testid="input-subject"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Message</label>
                  <textarea 
                    rows={4} 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..." 
                    required
                    className="w-full p-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    data-testid="input-message"
                  ></textarea>
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary text-white hover:bg-primary/90"
                  data-testid="button-sendMessage"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
