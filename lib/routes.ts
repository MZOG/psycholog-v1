export const routes = {
  home: "/",
  about: "/o-mnie",
  offer: "/oferta",
  pricing: "/cennik",
  contact: "/kontakt",
} as const;

export const mainNav = [
  { href: routes.home, label: "Start" },
  { href: routes.about, label: "O mnie" },
  { href: routes.offer, label: "Oferta" },
  { href: routes.pricing, label: "Cennik i przebieg" },
] as const;

export const footerNav = [
  { href: routes.about, label: "O mnie" },
  { href: routes.offer, label: "Oferta" },
  { href: routes.pricing, label: "Cennik i przebieg" },
  { href: routes.contact, label: "Kontakt" },
] as const;
