import { Section } from "@/components/ui/Section";

const prices = [
  { name: "Konsultacja psychologiczna", duration: "[CZAS TRWANIA] min", price: "[CENA] zł" },
  { name: "Psychoterapia indywidualna", duration: "[CZAS TRWANIA] min", price: "[CENA] zł" },
  { name: "Spotkanie online", duration: "[CZAS TRWANIA] min", price: "[CENA] zł" },
] as const;

export function PriceList() {
  return (
    <Section padding="pt-6 pb-section">
      <div className="mx-auto box-content flex max-w-content flex-col rounded-card border border-line bg-white">
        {prices.map((item) => (
          <div
            key={item.name}
            className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-line px-8 py-6 not-last:border-b"
          >
            <div className="flex flex-col">
              <strong className="font-serif text-h5 font-medium">{item.name}</strong>
              <span className="text-sm text-muted">{item.duration}</span>
            </div>
            <strong className="text-2xl">{item.price}</strong>
          </div>
        ))}
      </div>
    </Section>
  );
}
