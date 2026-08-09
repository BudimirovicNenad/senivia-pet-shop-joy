import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
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
      <div className="bg-forest-deep text-primary-foreground/80">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-1 px-5 py-2 text-[0.68rem] tracking-[0.14em] uppercase sm:justify-between">
          <span>Schweizer Versand ab CHF 79 gratis</span>
          <span className="hidden sm:inline">30 Tage Rückgaberecht</span>
          <span className="hidden sm:inline">Persönliche Beratung</span>
        </div>
      </div>
      <div className="border-b border-border bg-card/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
          <Link to="/" aria-label="SENIVIA Startseite">
            <Logo tone="dark" />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-full px-3.5 py-2 text-[0.85rem] font-medium text-foreground/70 transition-colors hover:bg-secondary/70 hover:text-primary"
                activeProps={{ className: "bg-secondary text-primary" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/berater"
              aria-label="Produktberater"
              className="hidden h-10 w-10 items-center justify-center rounded-full text-primary transition-colors hover:bg-secondary lg:inline-flex"
            >
              <Search className="h-[1.15rem] w-[1.15rem]" />
            </Link>
            <Link
              to="/warenkorb"
              className="relative inline-flex h-10 items-center gap-2 rounded-full bg-primary px-4 text-[0.8rem] font-medium text-primary-foreground transition-colors hover:bg-forest-deep"
            >
              <ShoppingBag className="h-[1.05rem] w-[1.05rem]" />
              <span className="hidden sm:inline">Warenkorb</span>
              {count > 0 && (
                <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-bronze px-1.5 text-[0.7rem] text-primary-foreground">
                  {count}
                </span>
              )}
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-primary lg:hidden"
              aria-expanded={open}
              aria-label="Menü"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-border bg-card px-5 pb-5 lg:hidden">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block border-b border-border py-3 text-sm text-foreground/80"
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