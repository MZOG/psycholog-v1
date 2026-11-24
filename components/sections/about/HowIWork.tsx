import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const principles = [
  {
    title: "Bez oceniania",
    text: "Możesz mówić o tym, co trudne, bez obawy o ocenę. Tempo spotkań wyznaczasz Ty.",
  },
  {
    title: "Poufność",
    text: "Treść naszych rozmów pozostaje między nami, zgodnie z zasadami etyki zawodowej psychologa.",
  },
  {
    title: "Jasne zasady",
    text: "Od początku wiesz, jak wygląda współpraca: ile trwa spotkanie, ile kosztuje i jak ją zakończyć.",
  },
] as const;

export function HowIWork() {
  return (
    <Section tone="white">
      <div className="mx-auto flex max-w-content flex-col gap-10">
        <SectionHeading>Jak pracuję</SectionHeading>
        <div className="grid grid-fit-280 gap-10">
          {principles.map((item) => (
            <div key={item.title} className="flex flex-col gap-2">
              <h3 className="font-serif text-h4 font-medium">{item.title}</h3>
              <p className="text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
