import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIChatbot from "@/components/AIChatbot";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Nexaviq Technologies | Customer Operations, Built to Scale",
    template: "%s | Nexaviq Technologies Pvt. Ltd."
  },
  description: "Nexaviq Technologies helps businesses scale customer experience and business operations through skilled teams, intelligent processes and AI-enabled delivery.",
  keywords: [
    "BPO Company",
    "BPO Services",
    "Business Process Outsourcing",
    "Customer Support Outsourcing",
    "Customer Service Outsourcing",
    "Chat Support Services",
    "Technical Support Outsourcing",
    "Back Office Outsourcing",
    "Call Center Outsourcing",
    "Outsourcing Services India",
    "AI-Powered BPO",
    "Customer Experience Outsourcing"
  ],
  authors: [{ name: "NEXAVIQ TECHNOLOGIES PVT. LTD." }],
  creator: "NEXAVIQ TECHNOLOGIES PVT. LTD.",
  metadataBase: new URL("https://nexaviqtechnologies.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexaviqtechnologies.com",
    title: "Nexaviq Technologies | Customer Operations, Built to Scale",
    description: "Nexaviq Technologies helps businesses scale customer experience and business operations through skilled teams, intelligent processes and AI-enabled delivery.",
    siteName: "Nexaviq Technologies Pvt. Ltd.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexaviq Technologies | Customer Operations, Built to Scale",
    description: "Nexaviq Technologies helps businesses scale customer experience and business operations through skilled teams, intelligent processes and AI-enabled delivery.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full scroll-smooth`}>
      <body className="font-sans antialiased min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white relative">
        <Navbar />
        <main className="flex-grow relative z-10">{children}</main>
        <Footer />
        <AIChatbot />
      </body>
    </html>
  );
}
