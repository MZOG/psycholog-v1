import type { Metadata } from "next";
import { PriceList } from "@/components/sections/pricing/PriceList";
import { Process } from "@/components/sections/pricing/Process";
import { RulesAndFaq } from "@/components/sections/pricing/RulesAndFaq";
import { CtaBand } from "@/components/sections/shared/CtaBand";
import { PageIntro } from "@/components/sections/shared/PageIntro";

export const metadata: Metadata = { title: "Cennik i przebieg" };

export default function PricingPage() {
  return (
    <>
      <PageIntro
        eyebrow="Cennik i przebieg"
        title="Jasne zasady współpracy"
        lead="Wiesz z góry, ile kosztuje spotkanie i jak wygląda proces. Bez niespodzianek."
      />
      <PriceList />
      <Process />
      <RulesAndFaq />
      <CtaBand
        title="Masz pytania przed umówieniem wizyty?"
        text="Napisz do mnie, chętnie odpowiem."
        cta="Przejdź do kontaktu"
      />
    </>
  );
}
