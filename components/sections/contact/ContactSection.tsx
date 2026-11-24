import { IntroText } from "@/components/sections/shared/PageIntro";
import { Section } from "@/components/ui/Section";
import { ContactDetails } from "./ContactDetails";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <Section>
      <div className="mx-auto flex max-w-content flex-col gap-12">
        <IntroText
          eyebrow="Kontakt"
          title="Umów konsultację"
          lead="Napisz lub zadzwoń. Odpowiadam zwykle w ciągu [CZAS ODPOWIEDZI]. Nie podawaj w wiadomości szczegółów swojej sytuacji, porozmawiamy o nich na spotkaniu."
        />
        <div className="grid grid-fit-420 items-start gap-14">
          <ContactForm />
          <ContactDetails />
        </div>
      </div>
    </Section>
  );
}
