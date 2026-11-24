import { NumberedSteps } from "@/components/ui/NumberedSteps";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  { title: "Konsultacja", text: "Poznajemy się i omawiamy Twoją sytuację." },
  { title: "Ustalenia", text: "Decydujemy o formie, częstotliwości i celach pracy." },
  {
    title: "Regularne spotkania",
    text: "Pracujemy w ustalonym rytmie, a co jakiś czas sprawdzamy, dokąd zmierzamy.",
  },
  {
    title: "Zakończenie",
    text: "Kończymy wspólnie, gdy osiągniesz to, z czym przyszedłeś lub przyszłaś.",
  },
] as const;

export function Process() {
  return (
    <Section tone="white">
      <div className="mx-auto flex max-w-content flex-col gap-10">
        <SectionHeading>Przebieg współpracy</SectionHeading>
        <NumberedSteps steps={steps} className="grid-fit-240" />
      </div>
    </Section>
  );
}
