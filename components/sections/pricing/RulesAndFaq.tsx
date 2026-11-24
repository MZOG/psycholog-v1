import { Section } from "@/components/ui/Section";
import { TitledList } from "@/components/ui/TitledList";

const faq = [
  {
    question: "Ile spotkań będzie potrzebnych?",
    answer:
      "To zależy od Twojej sytuacji. Po konsultacji powiem, czego możesz się spodziewać, a na bieżąco będziemy to weryfikować.",
  },
  {
    question: "Czy muszę wiedzieć, co powiedzieć?",
    answer: "Nie. Możemy zacząć od tego, co przychodzi Ci do głowy, a pytania będę zadawać ja.",
  },
  {
    question: "Czy mogę zrezygnować?",
    answer: "Tak, w każdej chwili. Wystarczy, że dasz mi znać.",
  },
] as const;

export function RulesAndFaq() {
  return (
    <Section>
      <div className="mx-auto grid max-w-content grid-fit-360 gap-14">
        <TitledList
          title="Zasady"
          items={[
            "Płatność: [FORMA I TERMIN PŁATNOŚCI]",
            "Odwołanie wizyty: [ZASADY, NP. NAJPÓŹNIEJ NA X GODZIN WCZEŚNIEJ]",
            "Poufność i ochrona danych osobowych: [ODSYŁACZ DO POLITYKI PRYWATNOŚCI]",
          ]}
        />
        <div className="flex flex-col gap-5">
          <h2 className="font-serif text-h2-sm leading-heading font-normal">Najczęstsze pytania</h2>
          {faq.map((item) => (
            <div key={item.question} className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold">{item.question}</h3>
              <p className="text-muted">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
