import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
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
    <div className="mx-auto max-w-6xl px-5 py-14">
      <Reveal>
        <p className="eyebrow text-bronze">SENIVIA Box</p>
        <h1 className="mt-4 max-w-2xl text-4xl leading-tight sm:text-5xl">
          Nicht mehr suchen. Zusammengestellt, was zusammen wirkt.
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Jede Box vereint vier Produkte für ein klares Thema – vom Grundfutter bis zum Snack. Später
          auch als regelmässige Lieferung erhältlich.
        </p>
      </Reveal>

      <div className="mt-10 space-y-12 sm:mt-14 sm:space-y-16">
        {bundles.map((bundle, index) => (
          <Reveal key={bundle.slug} as="section">
          <article
            className={`group grid items-start gap-8 md:grid-cols-2 md:items-center md:gap-10 lg:gap-12 ${
              index % 2 === 1 ? "lg:[&>figure]:order-2" : ""
            }`}
          >
            <figure className="overflow-hidden rounded-[1.25rem] bg-product-canvas shadow-soft transition-all duration-300 group-hover:shadow-lift sm:rounded-3xl">
              <img
                src={bundle.image}
                alt={bundle.name}
                loading="lazy"
                width={1200}
                height={900}
                className="aspect-square w-full bg-product-canvas object-contain transition-transform duration-[900ms] ease-out group-hover:scale-[1.03] sm:aspect-[4/3] sm:object-cover"
              />
            </figure>
            <div>
              <h2 className="text-3xl leading-tight sm:text-4xl">{bundle.name}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{bundle.subtitle}</p>
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
              <p className="mt-6 text-2xl">
                {formatCHF(bundle.price)}{" "}
                <span className="text-sm text-muted-foreground line-through">
                  {formatCHF(bundleValue(bundle))}
                </span>
              </p>
              <Link
                to="/box/$slug"
                params={{ slug: bundle.slug }}
                className="mt-6 block w-full rounded-sm bg-primary px-7 py-4 text-center text-[0.8rem] tracking-[0.16em] text-primary-foreground uppercase transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest-deep hover:shadow-lift sm:inline-block sm:w-auto"
              >
                Box ansehen
              </Link>
            </div>
          </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}