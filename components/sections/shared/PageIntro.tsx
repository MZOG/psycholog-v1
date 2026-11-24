import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";

type IntroTextProps = {
  eyebrow: string;
  title: string;
  lead: string;
};

/** Eyebrow + H1 + lead paragraph used at the top of subpages. */
export function IntroText({ eyebrow, title, lead }: IntroTextProps) {
  return (
    <div className="flex max-w-intro flex-col gap-5">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="font-serif text-title leading-display font-normal text-balance">{title}</h1>
      <p className="text-pretty text-muted">{lead}</p>
    </div>
  );
}

export function PageIntro(props: IntroTextProps) {
  return (
    <Section padding="pt-section pb-10">
      <div className="mx-auto max-w-content">
        <IntroText {...props} />
      </div>
    </Section>
  );
}
