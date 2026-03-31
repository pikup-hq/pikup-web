import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Pikup - Revolutionizing Food Delivery", 
  description: "Your trusted platform for on-demand delivery services.", 
  keywords: "delivery, logistics, on-demand services, Pikup, food, food Delivery, chowdeck, chop, hungry, campus",
  robots: "index, follow", 
  twitter: {
    card: "summary_large_image",
    site: "@pikuphq", 
    title: "Pikup - Revolutionizing Food Delivery",
    description: "Fast, reliable delivery services at your fingertips.",
    images: "/font/favicon.png", 
  },
  alternates: {
    canonical: "https://pikup.ng", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} scroll-smooth`}>
      <body className="font-inter antialiased bg-background text-foreground">
        <LoadingScreen />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

