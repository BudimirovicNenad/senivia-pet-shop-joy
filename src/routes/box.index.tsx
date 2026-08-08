import { createFileRoute, Link } from "@tanstack/react-router";
import { bundles, bundleProducts, bundleValue, formatCHF } from "@/data/products";

export const Route = createFileRoute("/box/")({
  head: () => ({
    meta: [
      { title: "SENIVIA Box — Drei Premium-Sets" },
      {
        name: "description",
        content:
          "Drei sorgfältig zusammengestellte SENIVIA Boxen: Senior Mobility, Darm & Sensitiv und Zahn & Atem – je vier abgestimmte Produkte.",
      },
      { property: "og:title", content: "SENIVIA Box — Drei Premium-Sets" },
      {
        property: "og:description",
        content: "Vier abgestimmte Produkte pro Box – als Geschenk oder als Einstieg.",
      },
    ],
  }),
  component: BoxOverview,
});

function BoxOverview() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <p className="eyebrow text-bronze">SENIVIA Box</p>
      <h1 className="mt-4 max-w-2xl text-4xl leading-tight sm:text-5xl">
        Nicht mehr suchen. Zusammengestellt, was zusammen wirkt.
      </h1>
      <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
        Jede Box vereint vier Produkte für ein klares Thema – vom Grundfutter bis zum Snack. Später
        auch als regelmässige Lieferung erhältlich.
      </p>

      <div className="mt-14 space-y-16">
        {bundles.map((bundle, index) => (
          <article
            key={bundle.slug}
            className={`grid items-center gap-10 lg:grid-cols-2 ${
              index % 2 === 1 ? "lg:[&>figure]:order-2" : ""
            }`}
          >
            <figure className="overflow-hidden rounded-sm bg-card shadow-soft">
              <img
                src={bundle.image}
                alt={bundle.name}
                loading="lazy"
                width={1200}
                height={900}
                className="w-full object-cover"
              />
            </figure>
            <div>
              <h2 className="text-3xl leading-tight">{bundle.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{bundle.subtitle}</p>
              <div className="rule-bronze mt-6" />
              <p className="mt-6 text-[0.98rem] leading-relaxed">{bundle.intro}</p>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                {bundleProducts(bundle).map((product) => (
                  <li key={product.slug}>
                    · {product.brand} {product.name}{" "}
                    <span className="text-xs">({product.size})</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-lg">
                {formatCHF(bundle.price)}{" "}
                <span className="text-xs text-muted-foreground line-through">
                  {formatCHF(bundleValue(bundle))}
                </span>
              </p>
              <Link
                to="/box/$slug"
                params={{ slug: bundle.slug }}
                className="mt-6 inline-block rounded-sm bg-primary px-7 py-4 text-[0.8rem] tracking-[0.16em] text-primary-foreground uppercase transition-colors hover:bg-forest-deep"
              >
                Box ansehen
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}