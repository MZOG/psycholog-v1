import { Section } from "@/components/ui/Section";

const forms = [
  {
    title: "Konsultacja psychologiczna",
    meta: "[CZAS TRWANIA] min",
    text: "Jednorazowe lub kilkuspotkaniowe omówienie Twojej sytuacji. Dobry początek, gdy nie wiesz, od czego zacząć, albo potrzebujesz zorientować się w swoich trudnościach.",
  },
  {
    title: "Psychoterapia indywidualna",
    meta: "[CZAS TRWANIA] min · regularnie, [CZĘSTOTLIWOŚĆ]",
    text: "Dłuższa, regularna praca nad powtarzającymi się trudnościami. Prowadzę ją w nurcie [NURT TERAPEUTYCZNY].",
  },
  {
    title: "Wsparcie psychologiczne",
    meta: "[CZAS TRWANIA] min",
    text: "Krótsza forma na trudny okres: żałobę, rozstanie, zmianę pracy lub przeciążenie. Skupiamy się na tym, co dzieje się tu i teraz.",
  },
  {
    title: "Spotkania online",
    meta: "[PLATFORMA]",
    text: "Każdą z powyższych form możesz wybrać w wersji online. Potrzebujesz tylko spokojnego miejsca i stabilnego połączenia.",
  },
] as const;

export function SupportForms() {
  return (
    <Section padding="pt-8 pb-section">
      <div className="mx-auto grid max-w-content grid-fit-320 gap-6">
        {forms.map((form) => (
          <div key={form.title} className="flex flex-col gap-3 rounded-card border border-line bg-white p-8">
            <h2 className="font-serif text-h3-lg leading-snug font-medium">{form.title}</h2>
            <div className="text-xs font-semibold text-accent">{form.meta}</div>
            <p className="text-muted">{form.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
