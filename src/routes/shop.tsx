import { createFileRoute, Link } from "@tanstack/react-router";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { needs, products, type NeedId } from "@/data/products";

type ShopSearch = { bedarf?: NeedId };

export const Route = createFileRoute("/shop")({
  validateSearch: (search: Record<string, unknown>): ShopSearch => {
    const bedarf = search["bedarf"];
    const valid = needs.some((n) => n.id === bedarf);
    return valid ? { bedarf: bedarf as NeedId } : {};
  },
  head: () => ({
    meta: [
      { title: "Alle Produkte — SENIVIA Shop" },
      {
        name: "description",
        content:
          "Das gesamte SENIVIA Sortiment für ältere Hunde und Katzen: Gelenke, Ernährung, Verdauung, Pflege und Zahnpflege.",
      },
      { property: "og:title", content: "Alle Produkte — SENIVIA Shop" },
      {
        property: "og:description",
        content: "Zwölf sorgfältig ausgewählte Produkte für die zweite Lebenshälfte.",
      },
    ],
  }),
  component: Shop,
});

function Shop() {
  const { bedarf } = Route.useSearch();
  const filtered = bedarf ? products.filter((p) => p.needs.includes(bedarf)) : products;
  const active = needs.find((n) => n.id === bedarf);

  return (
    <div className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
      <Reveal>
        <p className="eyebrow text-bronze">Sortiment</p>
        <h1 className="mt-3 text-[2rem] leading-tight sm:mt-4 sm:text-4xl">
          {active ? active.label : "Alle Produkte"}
        </h1>
        <p className="mt-3 max-w-xl text-[0.85rem] leading-relaxed text-muted-foreground sm:mt-4 sm:text-sm">
          {active
            ? active.description
            : "Zwölf Produkte, die wir für ältere Hunde und Katzen ausgewählt haben – erklärt statt versprochen."}
        </p>
      </Reveal>

      <div className="-mx-5 mt-7 flex snap-x gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:mt-9 sm:flex-wrap sm:overflow-visible sm:px-0">
        <Link
          to="/shop"
          search={{}}
          className={`shrink-0 snap-start rounded-full border px-4 py-2.5 text-[0.72rem] tracking-[0.1em] whitespace-nowrap uppercase transition-all duration-300 hover:-translate-y-0.5 sm:text-[0.75rem] sm:tracking-[0.12em] ${
            bedarf ? "border-border text-muted-foreground hover:border-sage" : "border-primary bg-primary text-primary-foreground"
          }`}
        >
          Alle
        </Link>
        {needs.map((need) => (
          <Link
            key={need.id}
            to="/shop"
            search={{ bedarf: need.id }}
            className={`shrink-0 snap-start rounded-full border px-4 py-2.5 text-[0.72rem] tracking-[0.1em] whitespace-nowrap uppercase transition-all duration-300 hover:-translate-y-0.5 sm:text-[0.75rem] sm:tracking-[0.12em] ${
              bedarf === need.id
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:border-sage"
            }`}
          >
            {need.label}
          </Link>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-6 lg:grid-cols-3">
        {filtered.map((product, i) => (
          <Reveal key={product.slug} delay={(i % 3) * 90} className="h-full">
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-sm text-muted-foreground">
          Für diesen Bedarf haben wir derzeit kein Produkt im Sortiment.
        </p>
      )}
    </div>
  );
}