import Link from "next/link";
import { routes } from "@/lib/routes";
import { NavLinks } from "./NavLinks";

export function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-b border-line px-gutter py-4.5">
      <Link href={routes.home} className="flex flex-col text-ink no-underline">
        <span className="font-serif text-logo leading-snug font-medium">[IMIĘ I NAZWISKO]</span>
        <span className="text-2xs tracking-label text-muted">PSYCHOLOG</span>
      </Link>
      <nav aria-label="Menu główne" className="flex flex-wrap items-center gap-x-7">
        <NavLinks />
      </nav>
    </header>
  );
}
