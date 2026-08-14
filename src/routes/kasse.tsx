import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Lock, ShieldCheck, Truck } from "lucide-react";
import { formatCHF } from "@/data/products";
import { useCart } from "@/lib/cart";
import { PaymentCard } from "@/components/PaymentCard";

const SHIPPING_THRESHOLD = 79;
const SHIPPING_COST = 7.9;

export const Route = createFileRoute("/kasse")({
  head: () => ({
    meta: [
      { title: "Kasse — SENIVIA" },
      {
        name: "description",
        content: "Sichere Bestellung bei SENIVIA: Lieferadresse, Versand und Zahlung in einem Schritt.",
      },
      { property: "og:title", content: "Kasse — SENIVIA" },
      { property: "og:description", content: "Sichere Bestellung bei SENIVIA." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CheckoutPage,
});

function CheckoutPage() {
  const { detailed, subtotal, count, clear } = useCart();
  const navigate = useNavigate();
  const [method, setMethod] = useState<"card" | "twint" | "invoice">("card");
  const [card, setCard] = useState({ number: "", name: "", expiry: "", cvc: "" });
  const [email, setEmail] = useState("");

  const shipping = subtotal === 0 || subtotal >= SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  const total = subtotal + shipping;

  if (count === 0) {
    return (
      <div className="mx-auto max-w-2xl px-5 py-24 text-center">
        <p className="eyebrow text-bronze">Kasse</p>
        <h1 className="mt-4 text-4xl leading-tight">Ihr Warenkorb ist leer</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Legen Sie zuerst Produkte in den Warenkorb, um zur Kasse zu gehen.
        </p>
        <Link
          to="/shop"
          className="mt-9 inline-block rounded-full bg-primary px-7 py-4 text-[0.78rem] tracking-[0.16em] text-primary-foreground uppercase"
        >
          Produkte entdecken
        </Link>
      </div>
    );
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const order = {
      id: `SEN-${Math.floor(10500 + Math.random() * 900)}`,
      email,
      total,
      shipping,
      items: detailed.map((d) => ({ title: d.title, qty: d.line.qty, price: d.price })),
      method,
    };
    try {
      window.sessionStorage.setItem("senivia-last-order", JSON.stringify(order));
    } catch {
      /* ignore */
    }
    clear();
    navigate({ to: "/danke" });
  };

  return (
    <form onSubmit={submit} className="mx-auto max-w-6xl px-5 py-10 sm:py-14">
      <p className="eyebrow text-bronze">Kasse</p>
      <h1 className="mt-4 text-[1.9rem] leading-tight sm:text-4xl">Bestellung abschliessen</h1>

      <div className="mt-9 grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-12">
        <div className="min-w-0 space-y-5 sm:space-y-6">
          <Section title="1. Kontakt">
            <Input
              label="E-Mail"
              type="email"
              required
              value={email}
              onChange={setEmail}
              placeholder="name@example.ch"
            />
          </Section>

          <Section title="2. Lieferadresse">
            <div className="grid gap-4 sm:grid-cols-2">
              <Input label="Vorname" required />
              <Input label="Nachname" required />
              <div className="sm:col-span-2">
                <Input label="Strasse & Nr." required />
              </div>
              <Input label="PLZ" required />
              <Input label="Ort" required />
              <div className="sm:col-span-2">
                <Input label="Land" defaultValue="Schweiz" />
              </div>
            </div>
          </Section>

          <Section title="3. Versand">
            <div className="space-y-3">
              <Radio name="ship" defaultChecked title="Schweizer Post – Priority" hint="1–2 Werktage">
                {shipping === 0 ? "kostenlos" : formatCHF(shipping)}
              </Radio>
              <Radio name="ship" title="Abholung Zürich" hint="Nach Vereinbarung">
                kostenlos
              </Radio>
            </div>
          </Section>

          <Section title="4. Zahlung">
            <div className="flex flex-wrap gap-2">
              {(
                [
                  { id: "card", label: "Karte" },
                  { id: "twint", label: "TWINT" },
                  { id: "invoice", label: "Rechnung" },
                ] as const
              ).map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setMethod(m.id)}
                  className={`rounded-full px-5 py-2.5 text-sm transition-colors ${
                    method === m.id
                      ? "bg-primary text-primary-foreground"
                      : "border border-border bg-card hover:border-bronze/50"
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>

            {method === "card" && (
              <div className="mt-6 grid min-w-0 gap-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,260px)] sm:items-start">
                <div className="grid min-w-0 gap-4">
                  <Input
                    label="Kartennummer"
                    required
                    inputMode="numeric"
                    placeholder="4242 4242 4242 4242"
                    value={card.number}
                    onChange={(v) => setCard((c) => ({ ...c, number: v }))}
                  />
                  <Input
                    label="Karteninhaber"
                    required
                    value={card.name}
                    onChange={(v) => setCard((c) => ({ ...c, name: v }))}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      label="Gültig bis"
                      required
                      placeholder="MM/JJ"
                      value={card.expiry}
                      onChange={(v) => setCard((c) => ({ ...c, expiry: v }))}
                    />
                    <Input
                      label="CVC"
                      required
                      placeholder="123"
                      value={card.cvc}
                      onChange={(v) => setCard((c) => ({ ...c, cvc: v }))}
                    />
                  </div>
                </div>
                <PaymentCard number={card.number} name={card.name} expiry={card.expiry} />
              </div>
            )}

            {method === "twint" && (
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Nach der Bestellung erhalten Sie einen TWINT-Code zum Bezahlen mit Ihrem Smartphone.
              </p>
            )}
            {method === "invoice" && (
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Rechnung 30 Tage – nur für Lieferungen innerhalb der Schweiz.
              </p>
            )}
          </Section>
        </div>

        <aside className="h-fit rounded-[1.25rem] border border-border bg-card p-5 shadow-soft sm:rounded-3xl sm:p-7 lg:sticky lg:top-28">
          <h2 className="text-xl">Ihre Bestellung</h2>
          <ul className="mt-5 divide-y divide-border border-y border-border">
            {detailed.map((item) => (
              <li key={item.line.id} className="flex gap-3 py-3.5">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  width={120}
                  height={120}
                  className="h-16 w-16 shrink-0 rounded-sm bg-product-canvas object-contain"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm">{item.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">Menge {item.line.qty}</p>
                </div>
                <p className="shrink-0 text-sm">{formatCHF(item.price * item.line.qty)}</p>
              </li>
            ))}
          </ul>
          <dl className="mt-5 space-y-3 text-sm">
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
              <dd>{formatCHF(total)}</dd>
            </div>
          </dl>
          <button
            type="submit"
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-4 text-center text-[0.7rem] tracking-[0.1em] text-primary-foreground uppercase transition-colors hover:bg-forest-deep sm:px-6 sm:text-[0.78rem] sm:tracking-[0.16em]"
          >
            <Lock className="h-4 w-4" strokeWidth={1.7} />
            Kostenpflichtig bestellen
          </button>
          <ul className="mt-5 space-y-2.5 text-xs text-muted-foreground">
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-forest" strokeWidth={1.6} /> Sichere Bezahlung
            </li>
            <li className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-forest" strokeWidth={1.6} /> Versand ab CHF{" "}
              {SHIPPING_THRESHOLD} gratis
            </li>
          </ul>
          <Link
            to="/warenkorb"
            className="mt-5 block text-center text-xs tracking-wide text-muted-foreground underline underline-offset-4"
          >
            Zurück zum Warenkorb
          </Link>
        </aside>
      </div>
    </form>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-[1.25rem] border border-border bg-card p-5 shadow-soft sm:rounded-3xl sm:p-7">
      <h2 className="text-xl">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function Input({
  label,
  value,
  onChange,
  ...rest
}: {
  label: string;
  value?: string;
  onChange?: (v: string) => void;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value">) {
  return (
    <label className="block">
      <span className="text-[0.7rem] tracking-[0.14em] text-muted-foreground uppercase">
        {label}
      </span>
      <input
        {...rest}
        {...(onChange ? { value: value ?? "", onChange: (e) => onChange(e.target.value) } : {})}
        className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-bronze"
      />
    </label>
  );
}

function Radio({
  name,
  title,
  hint,
  children,
  defaultChecked,
}: {
  name: string;
  title: string;
  hint: string;
  children: React.ReactNode;
  defaultChecked?: boolean;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-3 rounded-sm border border-border px-4 py-3.5 has-checked:border-bronze">
      <input type="radio" name={name} defaultChecked={defaultChecked} className="accent-forest" />
      <span className="min-w-0 flex-1">
        <span className="block text-sm">{title}</span>
        <span className="mt-0.5 block text-xs text-muted-foreground">{hint}</span>
      </span>
      <span className="shrink-0 text-sm">{children}</span>
    </label>
  );
}