import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Logo } from "./Logo";
import { useCart } from "@/lib/cart";

const nav = [
  { to: "/hund", label: "Hund" },
  { to: "/katze", label: "Katze" },
  { to: "/shop", label: "Bedarf" },
  { to: "/box", label: "SENIVIA Box" },
  { to: "/berater", label: "Berater" },
  { to: "/ratgeber", label: "Ratgeber" },
  { to: "/ueber-uns", label: "Über SENIVIA" },
] as const;

export function Header() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-forest-deep py-2 text-center text-[0.7rem] tracking-[0.14em] text-primary-foreground/80 uppercase">
        Schweizer Versand · Kostenlos ab CHF 79 · Persönliche Beratung
      </div>
      <div className="bg-gradient-forest">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
          <Link to="/" aria-label="SENIVIA Startseite">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-[0.82rem] tracking-wide text-primary-foreground/75 transition-colors hover:text-primary-foreground"
                activeProps={{ className: "text-primary-foreground" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/warenkorb"
              className="text-[0.82rem] tracking-wide text-primary-foreground/85 transition-colors hover:text-primary-foreground"
            >
              Warenkorb {count > 0 ? `(${count})` : ""}
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="text-[0.82rem] tracking-wide text-primary-foreground/85 lg:hidden"
              aria-expanded={open}
            >
              {open ? "Schliessen" : "Menü"}
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-primary-foreground/10 px-5 pb-5 lg:hidden">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block border-b border-primary-foreground/10 py-3 text-sm text-primary-foreground/85"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}