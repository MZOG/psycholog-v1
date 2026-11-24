import { Eyebrow } from "@/components/ui/Eyebrow";
import { Media } from "@/components/ui/Media";
import { Section } from "@/components/ui/Section";

export function AboutIntro() {
  return (
    <Section>
      <div className="mx-auto grid max-w-content grid-fit-360 items-start gap-14">
        <Media className="h-130" label="Miejsce na portret" placeholder="[ZDJĘCIE: portret]" />
        <div className="flex flex-col gap-4">
          <Eyebrow>O mnie</Eyebrow>
          <h1 className="font-serif text-title leading-display font-normal text-balance">
            Jestem [IMIĘ], psycholog z [LICZBA] latami praktyki
          </h1>
          <p className="text-pretty text-muted">
            [KRÓTKI AKAPIT O TYM, KIM JESTEŚ I Z KIM PRACUJESZ. Kilka zdań własnymi słowami, w pierwszej osobie.]
          </p>
          <p className="text-pretty text-muted">
            [DRUGI AKAPIT: dlaczego ten zawód i jak wygląda Twój styl pracy. Co może poczuć osoba, która do Ciebie
            przyjdzie.]
          </p>
        </div>
      </div>
    </Section>
  );
}
