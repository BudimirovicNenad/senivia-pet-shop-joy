import { createFileRoute, Link } from "@tanstack/react-router";
import { ProductCard } from "@/components/ProductCard";
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
    <div className="mx-auto max-w-6xl px-5 py-16">
      <p className="eyebrow text-bronze">Sortiment</p>
      <h1 className="mt-4 text-4xl leading-tight">{active ? active.label : "Alle Produkte"}</h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
        {active
          ? active.description
          : "Zwölf Produkte, die wir für ältere Hunde und Katzen ausgewählt haben – erklärt statt versprochen."}
      </p>

      <div className="mt-9 flex flex-wrap gap-2">
        <Link
          to="/shop"
          search={{}}
          className={`rounded-sm border px-4 py-2.5 text-[0.75rem] tracking-[0.12em] uppercase transition-colors ${
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
            className={`rounded-sm border px-4 py-2.5 text-[0.75rem] tracking-[0.12em] uppercase transition-colors ${
              bedarf === need.id
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:border-sage"
            }`}
          >
            {need.label}
          </Link>
        ))}
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.slug} product={product} />
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