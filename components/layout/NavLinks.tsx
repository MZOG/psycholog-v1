"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav, routes } from "@/lib/routes";

type NavLinksProps = {
  layout: "desktop" | "mobile";
  /** Called after a link is clicked (used to close the mobile menu). */
  onNavigate?: () => void;
};

const styles = {
  desktop: {
    link: "box-content inline-flex min-h-11 items-center border-b-2 text-md no-underline",
    active: "border-accent font-semibold",
    idle: "border-transparent",
    cta: "ml-1 inline-flex min-h-11 items-center rounded-button bg-accent px-5 text-md font-semibold text-white no-underline",
  },
  mobile: {
    link: "flex min-h-12 items-center border-b border-line text-lg no-underline",
    active: "font-semibold text-accent",
    idle: "",
    cta: "mt-5 flex min-h-12 items-center justify-center rounded-button bg-accent px-5 font-semibold text-white no-underline",
  },
} as const;

export function NavLinks({ layout, onNavigate }: NavLinksProps) {
  const pathname = usePathname();
  const s = styles[layout];

  return (
    <>
      {mainNav.map(({ href, label }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            onClick={onNavigate}
            aria-current={active ? "page" : undefined}
            className={`${s.link} ${active ? s.active : s.idle}`}
          >
            {label}
          </Link>
        );
      })}
      <Link
        href={routes.contact}
        onClick={onNavigate}
        aria-current={pathname === routes.contact ? "page" : undefined}
        className={s.cta}
      >
        Kontakt
      </Link>
    </>
  );
}
