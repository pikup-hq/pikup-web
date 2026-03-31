"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Utensils, Zap, ShoppingBag, Clock, Heart, Truck } from "lucide-react";

const marqueeItems = [
  { text: "Fast Delivery", icon: <Truck className="w-5 h-5" /> },
  { text: "Fresh Food", icon: <Utensils className="w-5 h-5" /> },
  { text: "Best Local Spots", icon: <Heart className="w-5 h-5 text-red-500 fill-red-500" /> },
  { text: "Instant Tracking", icon: <Zap className="w-5 h-5 text-amber-500 fill-amber-500" /> },
  { text: "Easy Orders", icon: <ShoppingBag className="w-5 h-5" /> },
  { text: "On Time", icon: <Clock className="w-5 h-5" /> },
];

export default function Marquee() {
  return (
    <div className="relative w-full overflow-hidden bg-[#FE7622]/5 py-4 border-y border-[#FE7622]/10 my-4 transform -rotate-1 scale-105">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* First set of items */}
        {marqueeItems.concat(marqueeItems).map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 mx-8 text-[#FE7622] font-bold text-lg uppercase tracking-wider"
          >
            {item.icon}
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
