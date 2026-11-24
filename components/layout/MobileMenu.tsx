"use client";

import { useEffect, useState } from "react";
import { NavLinks } from "./NavLinks";

/** Hamburger menu shown below the `lg` breakpoint. */
export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="menu-mobilne"
        aria-label={open ? "Zamknij menu" : "Otwórz menu"}
        onClick={() => setOpen((value) => !value)}
        className="-mr-2.5 flex size-11 cursor-pointer items-center justify-center rounded-button text-ink"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      <nav
        id="menu-mobilne"
        aria-label="Menu główne"
        hidden={!open}
        className="absolute inset-x-0 top-full z-50 flex-col border-b border-line bg-cream px-gutter pt-2 pb-6 shadow-[0_12px_24px_-16px_rgb(31_42_40/0.25)] [&:not([hidden])]:flex"
      >
        <NavLinks layout="mobile" onNavigate={() => setOpen(false)} />
      </nav>
    </div>
  );
}
