import { Media } from "@/components/ui/Media";

function DetailGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="font-serif text-h3 font-medium">{title}</h2>
      {children}
    </div>
  );
}

export function ContactDetails() {
  return (
    <div className="flex flex-col gap-6">
      <DetailGroup title="Dane kontaktowe">
        <span>Telefon: [TELEFON]</span>
        <span>E-mail: [E-MAIL]</span>
      </DetailGroup>
      <DetailGroup title="Gabinet">
        <span>[ULICA I NUMER], [KOD POCZTOWY] [MIASTO]</span>
        <span className="text-muted">[WSKAZÓWKI DOJAZDU I PARKOWANIA]</span>
      </DetailGroup>
      <DetailGroup title="Godziny przyjęć">
        <span>[DNI TYGODNIA]: [GODZINY]</span>
        <span className="text-muted">Spotkania online: [DNI I GODZINY]</span>
      </DetailGroup>
      <Media className="h-50" label="Miejsce na mapę dojazdu" placeholder="[MAPA DOJAZDU]" />
    </div>
  );
}
