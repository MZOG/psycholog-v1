import type { Metadata } from "next";
import { AboutIntro } from "@/components/sections/about/AboutIntro";
import { Credentials } from "@/components/sections/about/Credentials";
import { HowIWork } from "@/components/sections/about/HowIWork";
import { CtaBand } from "@/components/sections/shared/CtaBand";

export const metadata: Metadata = { title: "O mnie" };

export default function AboutPage() {
  return (
    <>
      <AboutIntro />
      <HowIWork />
      <Credentials />
      <CtaBand
        title="Chcesz porozmawiać?"
        text="Na pierwszym spotkaniu sprawdzimy, czy ta forma pomocy jest dla Ciebie odpowiednia."
      />
    </>
  );
}
