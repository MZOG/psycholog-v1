import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section } from "@/components/ui/Section";
import { routes } from "@/lib/routes";

type CtaBandProps = {
  title: string;
  text: string;
  cta?: string;
};

export function CtaBand({ title, text, cta = "Umów konsultację" }: CtaBandProps) {
  return (
    <Section tone="accent">
      <div className="mx-auto flex max-w-narrow flex-col items-center gap-4">
        <h2 className="font-serif text-h2 leading-heading font-normal text-balance">{title}</h2>
        <p>{text}</p>
        <ButtonLink href={routes.contact} variant="inverse">
          {cta}
        </ButtonLink>
      </div>
    </Section>
  );
}
