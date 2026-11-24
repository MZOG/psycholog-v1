import { Section } from "@/components/ui/Section";
import { TitledList } from "@/components/ui/TitledList";

export function Credentials() {
  return (
    <Section>
      <div className="mx-auto grid max-w-content grid-fit-360 gap-14">
        <TitledList
          title="Wykształcenie"
          items={[
            "[UCZELNIA, KIERUNEK, ROK UKOŃCZENIA]",
            "[SZKOLENIE Z PSYCHOTERAPII: NURT, OŚRODEK]",
            "[DODATKOWE KURSY I CERTYFIKATY]",
          ]}
        />
        <TitledList
          title="Doświadczenie i rozwój"
          items={[
            "[MIEJSCA PRACY LUB PRAKTYKI]",
            "[SUPERWIZJA: Z KIM I JAK CZĘSTO]",
            "[CZŁONKOSTWO W ORGANIZACJACH ZAWODOWYCH]",
          ]}
        />
      </div>
    </Section>
  );
}
