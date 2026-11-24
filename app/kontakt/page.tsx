import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/contact/ContactSection";

export const metadata: Metadata = { title: "Kontakt" };

export default function ContactPage() {
  return <ContactSection />;
}
