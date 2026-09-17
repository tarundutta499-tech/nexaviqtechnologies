import React from "react";
import type { Metadata } from "next";
import AIPlatformView from "@/components/AIPlatformView";

export const metadata: Metadata = {
  title: "Nexaviq AI Quality Platform | 100% Automated Interaction Auditing",
  description: "AI-powered Quality Assurance and Conversation Intelligence platform for modern contact centers. Audit 100% of customer calls and chats against custom SOPs in seconds.",
};

export default function AIPlatformPage() {
  return <AIPlatformView />;
}
