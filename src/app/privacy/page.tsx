"use client";

import * as React from "react";
import PageWrapper from "@/components/PageWrapper";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, Eye, FileText, ChevronRight } from "lucide-react";

export default function Privacy() {
  const sections = [
    {
      title: "1. Information We Collect",
      content: "We collect information you provide directly to us when you create an account, place an order, or contact us for support. This may include your name, email address, phone number, and delivery address.",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "2. How We Use Your Data",
      content: "We use your data to process orders, improve our services, communicate with you, and ensure a safe and secure platform for all users and partners.",
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: "3. Data Sharing & Security",
      content: "Your data is only shared with partners necessary for fulfilling your order (e.g., restaurants and riders). We implement industry-standard security measures to protect your information.",
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: "4. Your Rights",
      content: "You have the right to access, correct, or delete your personal data at any time through your account settings or by contacting our support team.",
      icon: <ShieldCheck className="w-6 h-6" />
    }
  ];

  return (
    <PageWrapper>
      {/* Privacy Hero */}
      <section className="py-20 bg-gray-50/50 border-b relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#FE7622]/5 blur-3xl -z-10" />
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center mx-auto text-[#FE7622]"
          >
            <ShieldCheck className="w-10 h-10" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-black text-[#1E1E1E] font-outfit">Privacy Policy</h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Your privacy is our priority. Learn how we handle and protect your information at Pikup.
          </p>
          <p className="text-sm font-bold text-gray-400 tracking-widest uppercase">Last Updated: March 2024</p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-16">
            {sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group p-10 rounded-[32px] border border-transparent hover:border-gray-100 hover:bg-gray-50 transition-all shadow-sm"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-[#FE7622]/10 rounded-2xl text-[#FE7622] group-hover:bg-[#FE7622] group-hover:text-white transition-all">
                    {section.icon}
                  </div>
                  <div className="space-y-4 flex-1">
                    <h2 className="text-2xl font-bold text-[#1E1E1E] font-outfit">{section.title}</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">{section.content}</p>
                    <div className="flex items-center gap-2 text-[#FE7622] font-bold text-sm cursor-pointer hover:underline">
                      Learn More <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-24 p-12 rounded-[48px] bg-[#1E1E1E] text-white text-center space-y-6 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-[#FE7622]/10 blur-xl" />
             <h3 className="text-2xl font-bold font-outfit">Questions About Your Data?</h3>
             <p className="text-gray-400">Our Data Protection Officer is ready to assist you. Contact us at privacy@pikuphq.com.</p>
             <button className="bg-[#FE7622] px-8 py-4 rounded-2xl font-bold hover:bg-[#FF6B22] transition-all">
               Contact Privacy Team
             </button>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
