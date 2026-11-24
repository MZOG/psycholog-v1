import type { Metadata } from "next";
import { ScopeAndLimits } from "@/components/sections/offer/ScopeAndLimits";
import { SupportForms } from "@/components/sections/offer/SupportForms";
import { CtaBand } from "@/components/sections/shared/CtaBand";
import { PageIntro } from "@/components/sections/shared/PageIntro";

export const metadata: Metadata = { title: "Oferta" };

export default function OfferPage() {
  return (
    <>
      <PageIntro
        eyebrow="Oferta"
        title="Formy wsparcia, z których możesz skorzystać"
        lead="Nie musisz wiedzieć, jakiej pomocy potrzebujesz. Na pierwszej konsultacji wspólnie to ustalimy."
      />
      <SupportForms />
      <ScopeAndLimits />
      <CtaBand
        title="Nie wiesz, co wybrać?"
        text="Zacznij od konsultacji. Razem dobierzemy formę, która pasuje do Twojej sytuacji."
      />
    </>
  );
}
