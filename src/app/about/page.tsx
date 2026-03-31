"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import { 
  Target, 
  Compass, 
  Heart, 
  Users, 
  History, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe
} from "lucide-react";

export default function About() {
  const values = [
    { title: "Customer Obsession", desc: "We start with the customer and work backwards.", icon: <Heart className="w-8 h-8" /> },
    { title: "Deliver with Speed", desc: "Speed matters in delivery. We bias for action.", icon: <Zap className="w-8 h-8" /> },
    { title: "Operational Excellence", desc: "We hold ourselves to the highest standards.", icon: <ShieldCheck className="w-8 h-8" /> },
    { title: "Community First", desc: "We support local businesses and vendors.", icon: <Globe className="w-8 h-8" /> },
  ];

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-[#FE7622]/10 px-4 py-2 rounded-full text-[#FE7622] font-bold text-sm"
          >
            <History className="w-4 h-4" />
            <span>OUR STORY</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-black text-[#1E1E1E] font-outfit leading-tight">
            The Journey to <br />
            <span className="text-[#FE7622]">Revolutionizing</span> Food
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            At Pikup, we’re revolutionizing food delivery. We believe ordering should be more than just a transaction—it should be an effortless, exciting, and delicious experience from start to finish.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-[#FE7622]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-[40px] shadow-sm border border-gray-100 space-y-6"
            >
              <div className="w-16 h-16 bg-[#FE7622]/10 rounded-2xl flex items-center justify-center text-[#FE7622]">
                <Target className="w-10 h-10" />
              </div>
              <h2 className="text-3xl font-black text-[#1E1E1E] font-outfit">Our Vision</h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                To become the most reliable and beloved food delivery ecosystem in Africa, where every craving is satisfied with just a tap.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-[40px] shadow-sm border border-gray-100 space-y-6"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                <Compass className="w-10 h-10" />
              </div>
              <h2 className="text-3xl font-black text-[#1E1E1E] font-outfit">Our Mission</h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                Empowering local vendors while providing users with a seamless, reliable, and delightful food journey through cutting-edge technology.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#1E1E1E] font-outfit">Our Core Values</h2>
            <p className="text-gray-500">The pillars that define the Pikup culture.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-[38px] border border-gray-100 hover:border-[#FE7622]/20 hover:bg-gray-50/50 transition-all text-center space-y-4"
              >
                <div className="bg-[#FE7622]/5 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto text-[#FE7622]">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1E1E1E]">{v.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team (Placeholders as requested) */}
      <section className="py-24 bg-gray-50" id="team">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#1E1E1E] font-outfit">Meet The Team</h2>
            <p className="text-gray-500">The brilliant minds behind the Pikup revolution.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[1, 2, 3].map((member) => (
              <motion.div
                key={member}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[40px] overflow-hidden shadow-sm border border-gray-100 p-8 text-center space-y-4"
              >
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto relative overflow-hidden mb-6 group">
                  <div className="absolute inset-0 bg-[#FE7622]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Users className="w-16 h-16 text-gray-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
                <h3 className="text-2xl font-bold text-[#1E1E1E]">Team Member {member}</h3>
                <p className="text-[#FE7622] font-medium font-outfit tracking-wider">FOUNDER & EXECUTIVE</p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Passionate about solving complex logistics problems and improving user experiences.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl font-black text-[#1E1E1E] font-outfit">Want to join us?</h2>
          <p className="text-xl text-gray-500 leading-relaxed">
            We’re always looking for passionate individuals who want to help shape the future of dining and delivery.
          </p>
          <button className="bg-[#1E1E1E] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-black transition-all flex items-center justify-center gap-3 mx-auto shadow-xl group">
             View Openings <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </PageWrapper>
  );
}
