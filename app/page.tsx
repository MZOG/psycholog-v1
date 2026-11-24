import type { Metadata } from "next";
import { FirstMeeting } from "@/components/sections/home/FirstMeeting";
import { HelpAreas } from "@/components/sections/home/HelpAreas";
import { HomeHero } from "@/components/sections/home/HomeHero";
import { CtaBand } from "@/components/sections/shared/CtaBand";

export const metadata: Metadata = { title: "Start" };

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HelpAreas />
      <FirstMeeting />
      <CtaBand
        title="Pierwszy krok bywa najtrudniejszy"
        text="Napisz do mnie, a wspólnie ustalimy termin konsultacji."
      />
    </>
  );
}
