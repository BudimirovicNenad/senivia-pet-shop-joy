import { createFileRoute, Link } from "@tanstack/react-router";
import { formatCHF } from "@/data/products";
import { useCart } from "@/lib/cart";

const SHIPPING_THRESHOLD = 79;
const SHIPPING_COST = 7.9;

export const Route = createFileRoute("/warenkorb")({
  head: () => ({
    meta: [
      { title: "Warenkorb — SENIVIA" },
      { name: "description", content: "Ihre Auswahl im SENIVIA Warenkorb – Versand innerhalb der Schweiz." },
      { property: "og:title", content: "Warenkorb — SENIVIA" },
      { property: "og:description", content: "Ihre Auswahl im SENIVIA Warenkorb." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { detailed, subtotal, setQty, remove, count } = useCart();
  const shipping = subtotal === 0 || subtotal >= SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;

  if (count === 0) {
    return (
      <div className="mx-auto max-w-2xl px-5 py-24 text-center">
        <p className="eyebrow text-bronze">Warenkorb</p>
        <h1 className="mt-4 text-4xl leading-tight">Noch nichts ausgewählt</h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Beginnen Sie mit einer SENIVIA Box oder lassen Sie sich vom Produktberater durch wenige
          Fragen führen.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link
            to="/box"
            className="rounded-sm bg-primary px-7 py-4 text-[0.8rem] tracking-[0.16em] text-primary-foreground uppercase"
          >
            Boxen ansehen
          </Link>
          <Link
            to="/berater"
            className="rounded-sm border border-primary px-7 py-4 text-[0.8rem] tracking-[0.16em] text-primary uppercase"
          >
            Berater starten
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-5 py-10 sm:py-16">
      <p className="eyebrow text-bronze">Warenkorb</p>
      <h1 className="mt-4 text-[1.9rem] leading-tight sm:text-4xl">Ihre Auswahl</h1>

      <div className="mt-10 grid gap-8 md:grid-cols-[1.6fr_1fr] md:gap-10">
        <ul className="divide-y divide-border border-y border-border">
          {detailed.map((item) => (
            <li key={item.line.id} className="flex gap-4 py-5 sm:gap-5 sm:py-6">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                width={160}
                height={160}
                className="h-20 w-20 shrink-0 rounded-sm object-cover sm:h-24 sm:w-24"
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="min-w-0 text-[1.02rem] leading-snug sm:text-lg">{item.title}</h2>
                  <p className="shrink-0 text-sm whitespace-nowrap">
                    {formatCHF(item.price * item.line.qty)}
                  </p>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{item.subtitle}</p>
                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
                  <div className="flex items-center rounded-sm border border-input">
                    <button
                      type="button"
                      aria-label="Menge verringern"
                      onClick={() => setQty(item.line.id, item.line.qty - 1)}
                      className="px-3 py-2 text-muted-foreground"
                    >
                      −
                    </button>
                    <span className="w-7 text-center text-sm">{item.line.qty}</span>
                    <button
                      type="button"
                      aria-label="Menge erhöhen"
                      onClick={() => setQty(item.line.id, item.line.qty + 1)}
                      className="px-3 py-2 text-muted-foreground"
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => remove(item.line.id)}
                    className="text-xs tracking-wide text-muted-foreground underline underline-offset-4"
                  >
                    Entfernen
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <aside className="h-fit rounded-sm border border-border bg-card p-5 sm:p-7">
          <h2 className="text-xl">Zusammenfassung</h2>
          <dl className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Zwischensumme</dt>
              <dd>{formatCHF(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Versand</dt>
              <dd>{shipping === 0 ? "kostenlos" : formatCHF(shipping)}</dd>
            </div>
            <div className="flex justify-between border-t border-border pt-3 text-base">
              <dt>Total</dt>
              <dd>{formatCHF(subtotal + shipping)}</dd>
            </div>
          </dl>

          {shipping > 0 && (
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              Noch {formatCHF(SHIPPING_THRESHOLD - subtotal)} bis zum kostenlosen Versand.
            </p>
          )}

          <button
            type="button"
            className="mt-7 w-full rounded-sm bg-primary px-6 py-4 text-[0.8rem] tracking-[0.16em] text-primary-foreground uppercase transition-colors hover:bg-forest-deep"
          >
            Zur Kasse
          </button>
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
            Bezahlung wird im nächsten Schritt aktiviert. Kauf ist auch ohne Kundenkonto möglich.
          </p>
        </aside>
      </div>
    </div>
  );
}