import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Search, ShoppingBag, Menu, X, ArrowRight, Truck } from "lucide-react";
import { Logo } from "./Logo";
import { useCart } from "@/lib/cart";

const nav = [
  { to: "/hund", label: "Hund" },
  { to: "/shop", label: "Bedarf" },
  { to: "/box", label: "SENIVIA Box" },
  { to: "/berater", label: "Berater" },
  { to: "/ratgeber", label: "Ratgeber" },
  { to: "/ueber-uns", label: "Über SENIVIA" },
] as const;

export function Header() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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

      </div>

      {open && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <button
              type="button"
              aria-label="Menü schliessen"
              onClick={() => setOpen(false)}
              className="absolute inset-0 animate-fade-in bg-forest-deep/50 backdrop-blur-[2px]"
            />
            <nav
              className="absolute inset-y-0 right-0 flex w-[85%] max-w-sm animate-slide-in-right flex-col bg-cream shadow-lift"
              aria-label="Mobile Navigation"
            >
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-border px-5 py-4">
                <Logo tone="dark" />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Menü schliessen"
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-primary"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-5 py-5">
                <Link
                  to="/berater"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-full border border-border bg-card px-4 py-3 text-sm text-muted-foreground"
                >
                  <Search className="h-4 w-4 shrink-0 text-primary" />
                  <span className="min-w-0 truncate">Produkt finden · Berater</span>
                  <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-primary" />
                </Link>

                <ul className="mt-6 space-y-1">
                  {nav.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between rounded-2xl px-4 py-3.5 font-serif text-[1.35rem] text-foreground/85 transition-colors hover:bg-secondary/70 hover:text-primary"
                        activeProps={{ className: "bg-secondary text-primary" }}
                      >
                        {item.label}
                        <ArrowRight className="h-4 w-4 shrink-0 text-bronze" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-border px-5 py-5">
                <Link
                  to="/warenkorb"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-[0.85rem] font-medium text-primary-foreground"
                >
                  <ShoppingBag className="h-[1.05rem] w-[1.05rem]" />
                  Warenkorb
                  {count > 0 && (
                    <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-bronze px-1.5 text-[0.7rem]">
                      {count}
                    </span>
                  )}
                </Link>
                <p className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                  <Truck className="h-4 w-4 shrink-0 text-bronze" />
                  Versand in der Schweiz ab CHF 79 gratis
                </p>
              </div>
            </nav>
          </div>
        )}
    </header>
  );
}