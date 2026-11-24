"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav, routes } from "@/lib/routes";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {mainNav.map(({ href, label }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            aria-current={active ? "page" : undefined}
            className={`box-content inline-flex min-h-11 items-center border-b-2 text-md no-underline ${
              active ? "border-accent font-semibold" : "border-transparent"
            }`}
          >
            {label}
          </Link>
        );
      })}
      <Link
        href={routes.contact}
        aria-current={pathname === routes.contact ? "page" : undefined}
        className="ml-1 inline-flex min-h-11 items-center rounded-button bg-accent px-5 text-md font-semibold text-white no-underline"
      >
        Kontakt
      </Link>
    </>
  );
}
