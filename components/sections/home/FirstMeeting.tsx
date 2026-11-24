import { NumberedSteps } from "@/components/ui/NumberedSteps";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    title: "Kontakt",
    text: "Piszesz lub dzwonisz. Odpowiadam zwykle w ciągu [CZAS ODPOWIEDZI] i ustalamy dogodny termin.",
  },
  {
    title: "Konsultacja",
    text: "Na pierwszym spotkaniu opowiadasz, z czym przychodzisz. Nie musisz niczego przygotowywać ani układać w całość.",
  },
  {
    title: "Wspólny plan",
    text: "Razem decydujemy, czy i w jakiej formie będziemy pracować. Ostateczna decyzja należy do Ciebie.",
  },
] as const;

export function FirstMeeting() {
  return (
    <Section>
      <div className="mx-auto flex max-w-content flex-col gap-10">
        <SectionHeading>Jak wygląda pierwsze spotkanie</SectionHeading>
        <NumberedSteps steps={steps} className="grid-fit-280" />
      </div>
    </Section>
  );
}
