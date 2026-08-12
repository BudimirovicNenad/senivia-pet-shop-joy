import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Check, Mail, Package, Truck } from "lucide-react";
import { formatCHF } from "@/data/products";

type Order = {
  id: string;
  email: string;
  total: number;
  shipping: number;
  items: { title: string; qty: number; price: number }[];
  method: string;
};

export const Route = createFileRoute("/danke")({
  head: () => ({
    meta: [
      { title: "Danke für Ihre Bestellung — SENIVIA" },
      {
        name: "description",
        content: "Ihre SENIVIA Bestellung ist eingegangen. Bestätigung und Versandinfos folgen per E-Mail.",
      },
      { property: "og:title", content: "Danke für Ihre Bestellung — SENIVIA" },
      { property: "og:description", content: "Ihre SENIVIA Bestellung ist eingegangen." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ThankYouPage,
});

function ThankYouPage() {
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    try {
      const raw = window.sessionStorage.getItem("senivia-last-order");
      if (raw) setOrder(JSON.parse(raw) as Order);
    } catch {
      /* ignore */
    }
  }, []);

  return (
    <div className="bg-grain">
      <section className="bg-forest text-primary-foreground">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:py-24">
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/12">
            <Check className="h-7 w-7" strokeWidth={1.8} />
          </span>
          <p className="eyebrow mt-7 text-primary-foreground/70">Bestellung bestätigt</p>
          <h1 className="mt-4 text-[2rem] leading-tight sm:text-5xl">Vielen Dank!</h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
            Ihre Bestellung {order ? `${order.id} ` : ""}ist bei uns eingegangen. Sie erhalten in
            Kürze eine Bestätigung per E-Mail
            {order?.email ? ` an ${order.email}` : ""}.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-5 py-10 sm:py-14">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: Mail, title: "Bestätigung", text: "E-Mail mit allen Details" },
            { icon: Package, title: "Verpackung", text: "Versand innerhalb 24 h" },
            { icon: Truck, title: "Lieferung", text: "1–2 Werktage Schweiz" },
          ].map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-[1.25rem] border border-border bg-card p-5 shadow-soft sm:rounded-3xl"
            >
              <Icon className="h-5 w-5 text-forest" strokeWidth={1.6} />
              <p className="mt-3 text-[1.02rem]">{title}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>

        {order && (
          <div className="mt-6 rounded-[1.25rem] border border-border bg-card p-5 shadow-soft sm:rounded-3xl sm:p-7">
            <h2 className="text-xl">Übersicht {order.id}</h2>
            <ul className="mt-5 divide-y divide-border border-y border-border text-sm">
              {order.items.map((it) => (
                <li key={it.title} className="flex justify-between gap-4 py-3">
                  <span className="min-w-0">
                    {it.qty}× {it.title}
                  </span>
                  <span className="shrink-0">{formatCHF(it.price * it.qty)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex justify-between text-base">
              <span>Total</span>
              <span>{formatCHF(order.total)}</span>
            </div>
          </div>
        )}

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link
            to="/konto"
            className="rounded-full bg-primary px-7 py-3.5 text-[0.78rem] tracking-[0.16em] text-primary-foreground uppercase"
          >
            Bestellung im Konto
          </Link>
          <Link
            to="/shop"
            className="rounded-full border border-primary px-7 py-3.5 text-[0.78rem] tracking-[0.16em] text-primary uppercase"
          >
            Weiter einkaufen
          </Link>
        </div>
      </div>
    </div>
  );
}