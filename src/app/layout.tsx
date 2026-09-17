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
    default: "Nexaviq Technologies | Customer Experience & Support Outsourcing Partner",
    template: "%s | Nexaviq Technologies"
  },
  description: "Enterprise-grade Business Process Outsourcing (BPO) & CX solutions. High-performing dedicated support teams, 24/7 Live Chat, Email Helpdesk, and Back-Office operations powered by Lean Six Sigma QA.",
  keywords: [
    "BPO", "Business Process Outsourcing", "Customer Service Outsourcing", "Live Chat Support", 
    "Email Support Services", "Helpdesk outsourcing", "SLA management", 
    "CX Outsourcing", "Customer Support Team", "Lean Six Sigma BPO", "Back Office Outsourcing"
  ],
  authors: [{ name: "Nexaviq Technologies" }],
  creator: "Nexaviq Technologies",
  metadataBase: new URL("https://nexaviqtechnologies.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexaviqtechnologies.com",
    title: "Nexaviq Technologies | Next-Gen BPO & Customer Experience Outsourcing",
    description: "Scale your customer operations with dedicated BPO teams, custom QA scorecards, 24/7 omnichannel coverage, and veteran SLA management.",
    siteName: "Nexaviq Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexaviq Technologies | Next-Gen BPO & CX Outsourcing",
    description: "Next-Gen BPO: Customer Service, 24/7 Live Chat, Email Support, and Back-Office operations built on Lean Six Sigma process excellence.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full scroll-smooth dark`}>
      <body className="font-sans antialiased min-h-screen bg-charcoal-950 text-slate-100 flex flex-col selection:bg-brand-blue-500 selection:text-white relative">
        <Navbar />
        <main className="flex-grow relative z-10">{children}</main>
        <Footer />
        <AIChatbot />
      </body>
    </html>
  );
}
