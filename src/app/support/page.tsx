"use client";

import * as React from "react";
import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import { 
  Mail, 
  MessageCircle, 
  Phone, 
  Search, 
  ArrowRight, 
  CheckCircle,
  HelpCircle,
  Clock,
  Send
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Support() {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactOptions = [
    { label: "Email Us", info: "hello@pikuphq.com", icon: <Mail className="w-6 h-6 text-[#FE7622]" /> },
    { label: "Call Us", info: "+234 (0) 123 456 789", icon: <Phone className="w-6 h-6 text-blue-600" /> },
    { label: "WhatsApp", info: "Chat with Support", icon: <MessageCircle className="w-6 h-6 text-green-600" /> },
  ];

  return (
    <PageWrapper>
      {/* Support Hero */}
      <section className="py-20 relative bg-white overflow-hidden border-b">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FE7622]/5 rounded-full blur-[100px] -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-black text-[#1E1E1E] font-outfit"
          >
            How can we <span className="text-[#FE7622]">help?</span>
          </motion.h1>
          <div className="max-w-2xl mx-auto relative group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-[#FE7622] group-focus-within:scale-110 transition-transform" />
            <input 
              type="text" 
              placeholder="Search help articles, orders, or topics..." 
              className="w-full pl-16 pr-8 py-5 rounded-[24px] bg-gray-50 border border-gray-100 focus:outline-none focus:ring-4 focus:ring-[#FE7622]/10 focus:bg-white transition-all text-lg shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { id: 1, title: "Orders & Delivery", icon: <Clock className="w-8 h-8" /> },
              { id: 2, title: "Account & Security", icon: <CheckCircle className="w-8 h-8" /> },
              { id: 3, title: "Payments & Pricing", icon: <HelpCircle className="w-8 h-8" /> },
            ].map((cat) => (
              <motion.div
                key={cat.id}
                whileHover={{ y: -10 }}
                className="p-10 rounded-[40px] border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-2xl hover:shadow-[#FE7622]/10 transition-all text-center space-y-6 group"
              >
                <div className="w-16 h-16 bg-[#FE7622]/10 rounded-2xl flex items-center justify-center mx-auto text-[#FE7622] group-hover:bg-[#FE7622] group-hover:text-white transition-all">
                  {cat.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#1E1E1E] font-outfit">{cat.title}</h3>
                <p className="text-gray-500">Find answers to common issues regarding your {cat.title.toLowerCase()}.</p>
                <div className="text-[#FE7622] font-bold inline-flex items-center gap-2 cursor-pointer group-hover:translate-x-1 transition-transform">
                  View Articles <ArrowRight className="w-5 h-5" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-gray-50" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-black text-[#1E1E1E] font-outfit leading-tight">Get in touch</h2>
                <p className="text-xl text-gray-500 max-w-md leading-relaxed">
                  Can’t find what you’re looking for? Our dedicated team is here to help you 24/7.
                </p>
              </div>

              <div className="space-y-6">
                {contactOptions.map((opt, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-6 p-6 rounded-[32px] bg-white border border-gray-100 shadow-sm"
                  >
                    <div className="p-4 bg-gray-50 rounded-2xl">
                      {opt.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">{opt.label}</p>
                      <p className="text-xl font-bold text-[#1E1E1E]">{opt.info}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 md:p-14 rounded-[48px] shadow-2xl shadow-gray-200/50 border border-gray-100 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FE7622]/5 rounded-bl-[100px] -z-10 group-hover:w-40 group-hover:h-40 transition-all" />
              
              <h3 className="text-3xl font-black text-[#1E1E1E] font-outfit mb-10">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-4 uppercase tracking-wide">Full Name</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full px-6 py-4 rounded-[20px] bg-gray-50 border border-transparent focus:border-[#FE7622]/30 focus:bg-white focus:outline-none transition-all shadow-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-4 uppercase tracking-wide">Email Address</label>
                    <input 
                      required 
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full px-6 py-4 rounded-[20px] bg-gray-50 border border-transparent focus:border-[#FE7622]/30 focus:bg-white focus:outline-none transition-all shadow-sm"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-4 uppercase tracking-wide">Topic</label>
                  <select className="w-full px-6 py-4 rounded-[20px] bg-gray-50 border border-transparent focus:border-[#FE7622]/30 focus:bg-white focus:outline-none transition-all shadow-sm appearance-none">
                    <option>General Support</option>
                    <option>Order Issue</option>
                    <option>Become a Partner</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-4 uppercase tracking-wide">Your Message</label>
                  <textarea 
                    required 
                    rows={4} 
                    placeholder="How can we help you today?" 
                    className="w-full px-6 py-4 rounded-[20px] bg-gray-50 border border-transparent focus:border-[#FE7622]/30 focus:bg-white focus:outline-none transition-all shadow-sm resize-none"
                  />
                </div>

                <button 
                  disabled={submitted}
                  className={`w-full py-5 rounded-[24px] font-bold text-lg flex items-center justify-center gap-3 transition-all ${
                    submitted ? "bg-green-600 text-white" : "bg-[#FE7622] text-white hover:bg-[#FF6B22] shadow-xl shadow-[#FE7622]/20"
                  }`}
                >
                  {submitted ? (
                    <>
                      <CheckCircle className="w-6 h-6 animate-pulse" /> Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl font-black text-[#1E1E1E] font-outfit">Frequently Asked Questions</h2>
            <p className="text-gray-500">Quick answers to common questions about using Pikup.</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-2">
             {[
               { q: "How do I track my order?", a: "You can track your order in real-time within the Pikup app. Simply go to the 'Active Orders' section to see the status of your delivery and the rider's location." },
               { q: "What should I do if my order is missing items?", a: "Please contact our support team immediately through the app or by using the form above. We will verify with the restaurant and ensure you are compensated or the missing items are delivered." },
               { q: "Can I cancel my order after placing it?", a: "Orders can be cancelled within 2 minutes of placement. After this point, the restaurant may have already started or even completed your preparation." }
             ].map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-none bg-gray-50 rounded-2xl px-6">
                <AccordionTrigger className="text-left font-bold text-lg py-5 hover:no-underline">{item.q}</AccordionTrigger>
                <AccordionContent className="text-gray-600 text-lg leading-relaxed pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
             ))}
          </Accordion>
        </div>
      </section>
    </PageWrapper>
  );
}
