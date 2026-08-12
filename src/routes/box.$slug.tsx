import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { bundleProducts, bundleValue, formatCHF, getBundle } from "@/data/products";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/box/$slug")({
  loader: ({ params }) => {
    const bundle = getBundle(params.slug);
    if (!bundle) throw notFound();
    return {
      slug: bundle.slug,
      name: bundle.name,
      subtitle: bundle.subtitle,
      intro: bundle.intro,
      price: bundle.price,
      image: bundle.image,
    };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Box nicht gefunden — SENIVIA" }, { name: "robots", content: "noindex" }],
      };
    }
    const url = `/box/${loaderData.slug}`;
    return {
      meta: [
        { title: `${loaderData.name} — SENIVIA Box` },
        { name: "description", content: loaderData.subtitle },
        { property: "og:title", content: `${loaderData.name} — SENIVIA Box` },
        { property: "og:description", content: loaderData.subtitle },
        { property: "og:type", content: "product" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: `SENIVIA Box ${loaderData.name}`,
            description: loaderData.intro,
            image: loaderData.image,
            sku: loaderData.slug,
            brand: { "@type": "Brand", name: "SENIVIA" },
            offers: {
              "@type": "Offer",
              price: loaderData.price.toFixed(2),
              priceCurrency: "CHF",
              availability: "https://schema.org/InStock",
              url,
            },
          }),
        },
      ],
    };
  },
  component: BoxDetail,
});

function BoxDetail() {
  const { slug } = Route.useParams();
  const bundle = getBundle(slug)!;
  const items = bundleProducts(bundle);
  const { add } = useCart();

  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <Link to="/box" className="text-[0.75rem] tracking-[0.14em] text-muted-foreground uppercase">
        ← Alle Boxen
      </Link>

      <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
        <figure className="overflow-hidden rounded-sm bg-card shadow-soft">
          <img
            src={bundle.image}
            alt={bundle.name}
            width={1200}
            height={900}
            className="aspect-square w-full bg-card object-contain p-4 sm:p-6"
          />
        </figure>

        <div>
          <p className="eyebrow text-bronze">SENIVIA Box</p>
          <h1 className="mt-4 text-4xl leading-tight">{bundle.name}</h1>
          <p className="mt-3 text-sm text-muted-foreground">{bundle.subtitle}</p>
          <div className="rule-bronze mt-7" />
          <p className="mt-7 text-[0.98rem] leading-relaxed">{bundle.intro}</p>

          <p className="mt-7 flex items-baseline gap-3">
            <span className="text-2xl">{formatCHF(bundle.price)}</span>
            <span className="text-sm text-muted-foreground line-through">
              {formatCHF(bundleValue(bundle))}
            </span>
            <span className="text-xs text-bronze">
              Sie sparen {formatCHF(bundleValue(bundle) - bundle.price)}
            </span>
          </p>

          <button
            type="button"
            onClick={() => add("bundle", bundle.slug)}
            className="mt-7 w-full rounded-sm bg-primary px-7 py-4 text-[0.8rem] tracking-[0.16em] text-primary-foreground uppercase transition-colors hover:bg-forest-deep sm:w-auto"
          >
            Box in den Warenkorb
          </button>

          <dl className="mt-9 space-y-4 border-t border-border pt-7 text-sm">
            <div>
              <dt className="eyebrow text-muted-foreground">Für wen</dt>
              <dd className="mt-2 leading-relaxed">{bundle.forWhom}</dd>
            </div>
            <div>
              <dt className="eyebrow text-muted-foreground">Versand</dt>
              <dd className="mt-2 leading-relaxed text-muted-foreground">
                Versand innerhalb der Schweiz, kostenlos ab CHF 79. Lieferung in 2–4 Werktagen.
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <section className="mt-20">
        <h2 className="text-2xl">Diese vier Produkte sind enthalten</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-4">
          {items.map((product) => (
            <article key={product.slug}>
              <Link to="/produkt/$slug" params={{ slug: product.slug }}>
                <img
                  src={product.image}
                  alt={`${product.brand} ${product.name}`}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="aspect-square w-full rounded-sm bg-card object-contain p-3"
                />
              </Link>
              <p className="eyebrow mt-4 text-muted-foreground">{product.brand}</p>
              <h3 className="mt-2 text-lg leading-snug">
                <Link to="/produkt/$slug" params={{ slug: product.slug }} className="hover:text-primary">
                  {product.name}
                </Link>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.tagline}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}