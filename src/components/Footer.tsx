"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Our Vision", href: "/about#vision" },
        { label: "The Team", href: "/about#team" },
        { label: "Careers", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "/support" },
        { label: "Contact Us", href: "/support#contact" },
        { label: "FAQs", href: "/#faq" },
        { label: "Report Issue", href: "/support" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/privacy#terms" },
        { label: "Cookie Policy", href: "/privacy#cookies" },
      ],
    },
  ];

  return (
    <footer className="bg-[#1E1E1E] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block transition-transform active:scale-95">
              <Image
                src="/asserts/Frame 2.svg"
                width={120}
                height={120}
                alt="Pikup Logo"
                className="brightness-0 invert h-12 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-lg max-w-sm leading-relaxed">
              Revolutionizing food delivery by connecting you with the best local meals through an effortless experience.
            </p>
            <div className="flex space-x-4">
              {[Twitter, Instagram, Facebook, Linkedin].map((Icon, idx) => (
                <Link
                  key={idx}
                  href="#"
                  className="bg-white/10 p-3 rounded-full hover:bg-[#FE7622] transition-colors group"
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column, idx) => (
            <div key={idx} className="space-y-6">
              <h4 className="text-lg font-bold tracking-wider">{column.title}</h4>
              <ul className="space-y-4">
                {column.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[#FE7622] transition-colors flex items-center group gap-1"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 group-hover:translate-x-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="my-16 border-white/10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400 text-sm">
          <p>© {currentYear} Pikup HQ. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#FE7622]" /> Lagos, Nigeria
            </span>
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#FE7622]" /> hello@pikuphq.com
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
