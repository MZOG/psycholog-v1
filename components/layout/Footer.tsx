import Link from "next/link";
import { footerNav } from "@/lib/routes";

export function Footer() {
  return (
    <footer className="bg-sand px-gutter py-10">
      <div className="mx-auto flex max-w-content flex-col gap-6">
        <div className="flex flex-wrap justify-between gap-x-12 gap-y-6">
          <div className="flex flex-col gap-1 text-sm">
            <strong className="font-serif text-2xl font-medium">[IMIĘ I NAZWISKO] · psycholog</strong>
            <span>[ULICA I NUMER], [MIASTO]</span>
            <span>[TELEFON] · [E-MAIL]</span>
          </div>
          <nav aria-label="Menu w stopce" className="flex flex-wrap gap-x-6 text-sm">
            {footerNav.map(({ href, label }) => (
              <Link key={href} href={href} className="inline-flex min-h-11 items-center underline">
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="border-t border-line-strong pt-5 text-xs text-ink-soft">
          Nie jestem w stanie zapewnić pomocy w nagłym kryzysie. Jeśli Twoje życie jest zagrożone, zadzwoń pod
          numer 112 lub na telefon zaufania dla dorosłych 116 123.
        </p>
      </div>
    </footer>
  );
}
