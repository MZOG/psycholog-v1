import { ButtonLink } from "@/components/ui/ButtonLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Media } from "@/components/ui/Media";
import { Section } from "@/components/ui/Section";
import { routes } from "@/lib/routes";

export function HomeHero() {
  return (
    <Section>
      <div className="mx-auto grid max-w-content grid-fit-420 items-center gap-14">
        <div className="flex flex-col items-start gap-6">
          <Eyebrow>Psycholog · [MIASTO]</Eyebrow>
          <h1 className="font-serif text-display leading-display font-normal text-balance">
            Rozmowa, w której jest miejsce na to, co trudne
          </h1>
          <p className="max-w-lead text-xl text-pretty text-muted">
            Konsultacje psychologiczne i psychoterapia indywidualna dla dorosłych. Spotkania stacjonarnie w [MIASTO]
            oraz online.
          </p>
          <div className="flex flex-wrap gap-4">
            <ButtonLink href={routes.contact}>Umów pierwszą konsultację</ButtonLink>
            <ButtonLink href={routes.offer} variant="outline">
              Zobacz ofertę
            </ButtonLink>
          </div>
        </div>
        <Media
          className="h-110"
          label="Miejsce na zdjęcie gabinetu lub portret"
          placeholder="[ZDJĘCIE: portret lub gabinet]"
        />
      </div>
    </Section>
  );
}
