import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-gradient-forest text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5">
        <div className="border-t border-primary-foreground/10" />
      </div>
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-10 sm:grid-cols-2 sm:py-16 md:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
            Für noch viele schöne Jahre mit dir. Sorgfältig ausgewählte Produkte für ältere Hunde und
            Katzen – aus der Schweiz.
          </p>
        </div>

        <div>
          <h3 className="eyebrow text-primary-foreground/60">Sortiment</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/75">
            <li><Link to="/hund" className="hover:text-primary-foreground">PSI</Link></li>
            <li><Link to="/katze" className="hover:text-primary-foreground">MAČKE</Link></li>
            <li><Link to="/shop" className="hover:text-primary-foreground">Alle Produkte</Link></li>
            <li><Link to="/box" className="hover:text-primary-foreground">SENIVIA BOX</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-primary-foreground/60">Service</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/75">
            <li><Link to="/berater" className="hover:text-primary-foreground">Produktberater</Link></li>
            <li><Link to="/ratgeber" className="hover:text-primary-foreground">Ratgeber</Link></li>
            <li><Link to="/ueber-uns" className="hover:text-primary-foreground">Über SENIVIA</Link></li>
            <li><Link to="/warenkorb" className="hover:text-primary-foreground">Warenkorb</Link></li>
            <li><Link to="/favoriten" className="hover:text-primary-foreground">Favoriten</Link></li>
            <li><Link to="/konto" className="hover:text-primary-foreground">Mein Konto</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-primary-foreground/60">Kontakt</h3>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/75">
            SENIVIA<br />
            Schweiz<br />
            <a href="mailto:hallo@senivia.ch" className="hover:text-primary-foreground">
              hallo@senivia.ch
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3 px-5 py-6 text-xs text-primary-foreground/55">
          <span>© {new Date().getFullYear()} SENIVIA · senivia.ch</span>
          <span>Versand Schweiz · Sichere Bezahlung · Preise in CHF</span>
        </div>
      </div>
    </footer>
  );
}