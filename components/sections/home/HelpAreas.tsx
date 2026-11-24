import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { routes } from "@/lib/routes";

const areas = [
  {
    title: "Lęk i napięcie",
    text: "Ciągłe zamartwianie się, napady paniki, trudność z odpoczynkiem. Uczymy się rozumieć, skąd bierze się to napięcie.",
  },
  {
    title: "Obniżony nastrój",
    text: "Brak energii, poczucie pustki, utrata zainteresowań. Wspólnie szukamy tego, co pomaga wrócić do siebie.",
  },
  {
    title: "Relacje",
    text: "Powtarzające się konflikty, trudność ze stawianiem granic, poczucie samotności w bliskości lub poza nią.",
  },
  {
    title: "Kryzysy i zmiany",
    text: "Rozstanie, strata, zmiana pracy, wypalenie. Czas, w którym dotychczasowe sposoby radzenia sobie przestają wystarczać.",
  },
] as const;

export function HelpAreas() {
  return (
    <Section tone="white">
      <div className="mx-auto flex max-w-content flex-col gap-10">
        <div className="flex max-w-narrow flex-col gap-3">
          <SectionHeading>W czym mogę pomóc</SectionHeading>
          <p className="text-muted">
            Z różnymi trudnościami przychodzą do mnie osoby, które chcą lepiej zrozumieć siebie i odzyskać poczucie
            wpływu na swoje życie.
          </p>
        </div>
        <div className="grid grid-fit-240 gap-6">
          {areas.map((area) => (
            <div key={area.title} className="flex flex-col gap-2.5 rounded-card border border-line bg-cream p-7">
              <h3 className="font-serif text-h4 font-medium">{area.title}</h3>
              <p className="text-md text-muted">{area.text}</p>
            </div>
          ))}
        </div>
        <Link
          href={routes.offer}
          className="inline-flex min-h-11 items-center self-start font-semibold text-accent underline"
        >
          Zobacz pełną ofertę
        </Link>
      </div>
    </Section>
  );
}
