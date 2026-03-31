"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  ChevronRight, 
  Star, 
  ShieldCheck, 
  Zap, 
  Clock, 
  User, 
  UtensilsCrossed, 
  Bike 
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Marquee from "@/components/Marquee";
import PageWrapper from "@/components/PageWrapper";

export default function Home() {
  const handleWaitlist = () => {
    window.open("https://play.google.com/store/apps/details?id=com.pikuphq.pikupuser");
  };

  const services = [
    {
      title: "For Foodies",
      description: "Discover local gems and get them delivered hot to your doorstep. Satisfaction in every bite.",
      icon: <UtensilsCrossed className="w-8 h-8 text-white" />,
      color: "bg-[#FE7622]",
      image: "/asserts/mdi_food.svg"
    },
    {
      title: "For Partners",
      description: "Grow your reach and streamline your orders with our premium merchant tools.",
      icon: <User className="w-8 h-8 text-white" />,
      color: "bg-blue-600",
      image: "/asserts/Group.svg"
    },
    {
      title: "For Riders",
      description: "Earn on your own terms with flexible hours and reliable payouts. Join the fleet.",
      icon: <Bike className="w-8 h-8 text-white" />,
      color: "bg-green-600",
      image: "/asserts/carbon_delivery.svg"
    }
  ];

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative pt-12 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#FE7622]/10 px-4 py-2 rounded-full border border-[#FE7622]/20 text-[#FE7622] font-bold text-sm"
            >
              <Zap className="w-4 h-4 fill-[#FE7622]" />
              <span>THE REVOLUTION IS HERE</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-[#1E1E1E] leading-[1.1] tracking-tight font-outfit"
            >
              Experience <span className="text-[#FE7622]">Speed</span> <br />
              In Every <span className="relative">
                Order
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#FE7622]/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            >
              Join thousands of food lovers using Pikup to discover and enjoy the best meals from local vendors. Faster, fresher, and friendlier.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <button
                onClick={handleWaitlist}
                className="bg-[#FE7622] text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-[#FE7622]/30 hover:shadow-[#FE7622]/50 hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-3 group"
              >
                Download Now
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link
                href="/about"
                className="bg-white text-[#1E1E1E] px-10 py-5 rounded-2xl font-bold text-lg border-2 border-gray-100 hover:border-[#FE7622] transition-all flex items-center justify-center gap-3"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Hero Marquee */}
        <div className="mt-24">
          <Marquee />
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[#FE7622]/5 rounded-full blur-3xl -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-block bg-blue-50 px-4 py-2 rounded-lg text-blue-600 font-bold text-sm">
                WHY CHOOSE PIKUP
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#1E1E1E] leading-tight font-outfit">
                Say Goodbye To <br />
                <span className="text-[#FE7622]">Delayed Orders</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Pikup was built on a simple premise: your food should arrive when you need it. We’ve optimized every step of the delivery process.
              </p>
              
              <div className="space-y-4 pt-4">
                {[
                  { title: "Ultra Fast Tracking", sub: "Real-time updates on your meal's journey", icon: <Clock className="w-6 h-6" /> },
                  { title: "Safe Payments", sub: "Secure transactions with multiple options", icon: <ShieldCheck className="w-6 h-6" /> },
                  { title: "Premium Support", sub: "A dedicated team ready to help you 24/7", icon: <Star className="w-6 h-6" /> },
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors"
                  >
                    <div className="bg-[#FE7622]/10 p-3 rounded-xl text-[#FE7622]">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1E1E1E]">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#FE7622]/20 rounded-[40px] blur-3xl" />
              <Image
                src="/asserts/iPhone 16 Pro mockup natural titanium 1.svg"
                width={500}
                height={700}
                alt="Pikup App"
                className="relative z-10 mx-auto drop-shadow-2xl hover:rotate-2 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="service" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#1E1E1E] font-outfit">The Future of Delivery</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Tailored solutions for every member of our ecosystem.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="group relative bg-white p-10 rounded-[32px] border border-gray-100 hover:border-[#FE7622]/30 transition-all hover:-translate-y-2 shadow-sm"
              >
                <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#1E1E1E]">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-8">{service.description}</p>
                <div className="flex items-center text-[#FE7622] font-bold group-hover:gap-2 transition-all">
                  Get Started <ChevronRight className="w-5 h-5" />
                </div>
                <Image 
                  src={service.image} 
                  width={150} 
                  height={150} 
                  alt={service.title} 
                  className="absolute bottom-6 right-6 opacity-5 group-hover:scale-110 transition-transform grayscale"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block bg-[#FE7622]/10 px-4 py-2 rounded-lg text-[#FE7622] font-bold text-sm uppercase tracking-wider">
              FAQ
            </div>
            <h2 className="text-4xl font-black text-[#1E1E1E] font-outfit">Common Questions</h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              { q: "What is the Pikup app?", a: "Pikup is a next-gen food delivery platform designed to bring you meals from local restaurants, street vendors, and home kitchens, all through a convenient and easy-to-use app." },
              { q: "When will Pikup be available?", a: "Pikup is currently in its beta phase, and we're gearing up for a full launch soon! Beta testers will get early access before the official release." },
              { q: "How can I become a beta tester?", a: "Joining the beta is easy! Simply sign up for the waitlist using the link on this page, and we'll notify you if you're selected." },
              { q: "Is there a cost to join the beta?", a: "Nope! Joining the beta is completely free. You'll just need to download the app once we send you the instructions." }
            ].map((item, idx) => (
              <AccordionItem 
                key={idx} 
                value={`item-${idx}`}
                className="border rounded-2xl px-6 bg-gray-50/50 hover:bg-white hover:border-[#FE7622]/20 transition-all overflow-hidden"
              >
                <AccordionTrigger className="text-left font-bold text-lg py-6 hover:no-underline hover:text-[#FE7622]">
                  {idx + 1}. {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-lg leading-relaxed pb-6">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#1E1E1E] rounded-[48px] overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FE7622]/10 blur-[120px] -z-0" />
            
            <div className="grid lg:grid-cols-2 gap-12 p-12 md:p-20 relative z-10 items-center">
              <div className="space-y-8">
                <h3 className="text-white text-5xl md:text-6xl font-black leading-tight font-outfit">
                  Get Early Access <br />
                  To <span className="text-[#FE7622]">Pikup!</span>
                </h3>
                <p className="text-gray-400 text-xl leading-relaxed">
                  Be one of the first to experience the future of food delivery. Join our exclusive community of beta testers today.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 pt-4">
                  <button
                    onClick={handleWaitlist}
                    className="bg-[#FE7622] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-[#FF6B22] transition-all shadow-xl shadow-[#FE7622]/20"
                  >
                    Join the Waitlist
                  </button>
                  <Link href="/support" className="flex items-center gap-2 text-white font-bold hover:text-[#FE7622] transition-colors group">
                    Need help? <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
              
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/asserts/iPhone 16 Pro mockup natural titanium 1.svg"
                  width={400}
                  height={500}
                  alt="Pikup Waitlist"
                  className="mx-auto lg:ml-auto drop-shadow-[0_35px_35px_rgba(254,118,34,0.15)]"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
