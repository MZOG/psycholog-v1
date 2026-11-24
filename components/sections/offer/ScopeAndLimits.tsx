import { Section } from "@/components/ui/Section";

const topics = [
  "Lęk, ataki paniki",
  "Obniżony nastrój",
  "Stres i wypalenie",
  "Trudności w relacjach",
  "Żałoba i strata",
  "Niska samoocena",
  "Kryzysy życiowe",
  "[INNE TRUDNOŚCI]",
] as const;

export function ScopeAndLimits() {
  return (
    <Section tone="white">
      <div className="mx-auto grid max-w-content grid-fit-360 gap-14">
        <div className="flex flex-col gap-5">
          <h2 className="font-serif text-h2-sm leading-heading font-normal">Z czym pracuję</h2>
          <ul className="grid grid-fit-220 gap-x-6 gap-y-3 text-muted">
            {topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="font-serif text-h2-sm leading-heading font-normal">Kiedy to nie jest właściwe miejsce</h2>
          <p className="text-pretty text-muted">
            Nie prowadzę pomocy w stanach nagłych. Jeśli Twoje życie lub zdrowie jest zagrożone, zadzwoń pod numer 112
            lub na telefon zaufania dla dorosłych w kryzysie emocjonalnym 116 123. Jeśli potrzebujesz diagnozy lub
            leczenia farmakologicznego, skontaktuj się z lekarzem psychiatrą.
          </p>
        </div>
      </div>
    </Section>
  );
}
