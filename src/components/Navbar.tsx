"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const menus = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/about" },
  { title: "Support", path: "/support" },
  { title: "Privacy", path: "/privacy" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWaitlist = () => {
    window.open("https://play.google.com/store/apps/details?id=com.pikuphq.pikupuser");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex-shrink-0 transition-transform active:scale-95">
            <Image
              src="/asserts/Frame 2.svg"
              width={100}
              height={100}
              alt="logo"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {menus.map((item, id) => (
              <Link
                key={id}
                href={item.path}
                className="text-[#1E1E1E] font-medium text-[15px] hover:text-[#FE7622] transition-colors relative group"
              >
                {item.title}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FE7622] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <button
              onClick={handleWaitlist}
              className="bg-[#FE7622] text-white px-6 py-2.5 rounded-full font-bold text-sm tracking-wide shadow-lg shadow-[#FE7622]/20 hover:shadow-[#FE7622]/40 transition-all active:scale-90 flex items-center gap-2"
            >
              Get App <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#1E1E1E] p-2 focus:outline-none"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-0 right-0 glass shadow-2xl border-b"
          >
            <div className="px-6 py-10 flex flex-col space-y-6 text-center">
              {menus.map((item, id) => (
                <Link
                  key={id}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold text-[#1E1E1E] hover:text-[#FE7622] transition-colors"
                >
                  {item.title}
                </Link>
              ))}
              <div className="pt-4">
                <button
                  onClick={handleWaitlist}
                  className="w-full bg-[#FE7622] text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-[#FE7622]/20"
                >
                  Download Pikup App
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
