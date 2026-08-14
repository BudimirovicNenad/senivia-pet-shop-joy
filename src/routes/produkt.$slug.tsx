import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { bundles, formatCHF, getProduct, needs, products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { ProductGallery } from "@/components/ProductGallery";
import { StickyBuyBar } from "@/components/StickyBuyBar";
import { FavoriteButton } from "@/components/FavoriteButton";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/produkt/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return {
      slug: product.slug,
      name: product.name,
      tagline: product.tagline,
      brand: product.brand,
      price: product.price,
      image: product.image,
      images: product.images ?? [product.image],
      sku: product.sku,
      barcode: product.barcode,
      description: product.description,
      size: product.size,
      rating: product.rating,
      reviews: product.reviews,
    };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Produkt nicht gefunden — SENIVIA" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${loaderData.name} — ${loaderData.brand} | SENIVIA`;
    const url = `/produkt/${loaderData.slug}`;
    const description = `${loaderData.tagline}. ${loaderData.description}`.slice(0, 155);
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
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
            name: loaderData.name,
            description: loaderData.description,
            image: loaderData.images,
            sku: loaderData.sku ?? loaderData.slug,
            ...(loaderData.barcode ? { gtin13: loaderData.barcode } : {}),
            size: loaderData.size,
            brand: { "@type": "Brand", name: loaderData.brand },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: loaderData.rating,
              reviewCount: loaderData.reviews,
            },
            offers: {
              "@type": "Offer",
              price: loaderData.price.toFixed(2),
              priceCurrency: "CHF",
              availability: "https://schema.org/InStock",
              url,
            },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Shop", item: "/shop" },
              { "@type": "ListItem", position: 2, name: loaderData.name, item: url },
            ],
          }),
        },
      ],
    };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const { slug } = Route.useParams();
  const product = getProduct(slug)!;
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const buyRef = useRef<HTMLDivElement>(null);

  const speciesLabel =
    product.species === "beide" ? "Für Hund und Katze" : product.species === "hund" ? "Für Hunde" : "Für Katzen";

  const inBundles = bundles.filter((b) => b.productSlugs.includes(product.slug));
  const related = products
    .filter((p) => p.slug !== product.slug && p.needs.some((n) => product.needs.includes(n)))
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <Link to="/shop" search={{}} className="text-[0.75rem] tracking-[0.14em] text-muted-foreground uppercase">
        ← Alle Produkte
      </Link>

      <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
        <ProductGallery
          images={product.images?.length ? product.images : [product.image]}
          alt={`${product.brand} ${product.name}`}
        />

        <div>
          <p className="eyebrow text-muted-foreground">{product.brand}</p>
          <h1 className="mt-4 text-4xl leading-tight">{product.name}</h1>
          <p className="mt-3 text-sm text-muted-foreground">{product.tagline}</p>

          <div className="mt-5 flex flex-wrap gap-2 text-[0.7rem] tracking-[0.12em] uppercase">
            <span className="rounded-sm bg-secondary px-3 py-1.5 text-secondary-foreground">
              {speciesLabel}
            </span>
            <span className="rounded-sm bg-secondary px-3 py-1.5 text-secondary-foreground">
              Senior-Lebensphase
            </span>
            <span className="rounded-sm bg-secondary px-3 py-1.5 text-secondary-foreground">
              {product.size}
            </span>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            {product.rating.toFixed(1)} / 5 · {product.reviews} Bewertungen
          </p>

          <p className="mt-6 text-2xl">{formatCHF(product.price)}</p>

          <div ref={buyRef} className="mt-6 flex flex-wrap items-center gap-3">
            <div className="flex items-center rounded-sm border border-input">
              <button
                type="button"
                aria-label="Menge verringern"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="px-4 py-3 text-muted-foreground"
              >
                −
              </button>
              <span className="w-8 text-center text-sm">{qty}</span>
              <button
                type="button"
                aria-label="Menge erhöhen"
                onClick={() => setQty((q) => q + 1)}
                className="px-4 py-3 text-muted-foreground"
              >
                +
              </button>
            </div>
            <button
              type="button"
              onClick={() => add("product", product.slug, qty)}
              className="flex-1 rounded-sm bg-primary px-7 py-4 text-[0.8rem] tracking-[0.16em] text-primary-foreground uppercase transition-colors hover:bg-forest-deep sm:flex-none"
            >
              In den Warenkorb
            </button>
            <FavoriteButton slug={product.slug} label={product.name} />
          </div>

          <ul className="mt-8 space-y-2.5 border-t border-border pt-7 text-sm">
            {product.benefits.map((benefit) => (
              <li key={benefit} className="flex gap-3">
                <span className="text-bronze">·</span>
                {benefit}
              </li>
            ))}
          </ul>

          {product.specs && product.specs.length > 0 && (
            <dl className="mt-8 grid gap-x-6 gap-y-2 border-t border-border pt-7 text-sm sm:grid-cols-2">
              {product.specs.map((spec) => (
                <div key={spec.label} className="flex justify-between gap-4 sm:block">
                  <dt className="text-muted-foreground">{spec.label}</dt>
                  <dd>{spec.value}</dd>
                </div>
              ))}
              {product.sku && (
                <div className="flex justify-between gap-4 sm:block">
                  <dt className="text-muted-foreground">Artikelnummer</dt>
                  <dd>{product.sku}</dd>
                </div>
              )}
              {product.barcode && (
                <div className="flex justify-between gap-4 sm:block">
                  <dt className="text-muted-foreground">EAN</dt>
                  <dd>{product.barcode}</dd>
                </div>
              )}
            </dl>
          )}
        </div>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-12">
        <div>
          <h2 className="text-2xl">Beschreibung</h2>
          <p className="mt-4 text-[0.98rem] leading-relaxed">{product.description}</p>

          <h3 className="mt-10 text-xl">Anwendung</h3>
          <p className="mt-3 text-[0.98rem] leading-relaxed text-muted-foreground">{product.usage}</p>

          <h3 className="mt-10 text-xl">Wichtiger Hinweis</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Ergänzungs- und Pflegeprodukte ersetzen keine tierärztliche Behandlung. Bei anhaltenden
            Beschwerden besprechen Sie die Anwendung bitte mit Ihrer Tierärztin oder Ihrem Tierarzt.
          </p>

          <p className="mt-8 text-xs text-muted-foreground">
            Fragen zu Zusammensetzung oder Anwendung? Unser Team hilft gerne weiter:{" "}
            <a
              href="mailto:hallo@senivia.ch"
              className="underline decoration-bronze underline-offset-4"
            >
              hallo@senivia.ch
            </a>
          </p>
        </div>

        <aside className="space-y-8">
          <div className="rounded-sm border border-border bg-card p-6">
            <h3 className="eyebrow text-muted-foreground">Bedarf</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {product.needs.map((needId) => {
                const need = needs.find((n) => n.id === needId)!;
                return (
                  <li key={needId}>
                    <Link
                      to="/shop"
                      search={{ bedarf: needId }}
                      className="underline decoration-sage underline-offset-4 hover:text-primary"
                    >
                      {need.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {inBundles.length > 0 && (
            <div className="rounded-sm border border-border bg-card p-6">
              <h3 className="eyebrow text-muted-foreground">Teil dieser Box</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {inBundles.map((bundle) => (
                  <li key={bundle.slug}>
                    <Link
                      to="/box/$slug"
                      params={{ slug: bundle.slug }}
                      className="underline decoration-sage underline-offset-4 hover:text-primary"
                    >
                      {bundle.name} · {formatCHF(bundle.price)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="rounded-sm border border-border bg-card p-6 text-sm text-muted-foreground">
            <h3 className="eyebrow text-muted-foreground">Versand & Rückgabe</h3>
            <p className="mt-4 leading-relaxed">
              Versand innerhalb der Schweiz, kostenlos ab CHF 79. Lieferung in 2–4 Werktagen.
              Ungeöffnete Produkte können innerhalb von 14 Tagen zurückgegeben werden.
            </p>
          </div>
        </aside>
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="text-2xl">Passt dazu</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {related.map((item) => (
              <ProductCard key={item.slug} product={item} />
            ))}
          </div>
        </section>
      )}

      <StickyBuyBar
        watchRef={buyRef}
        title={product.name}
        price={formatCHF(product.price)}
        action={
          <button
            type="button"
            onClick={() => add("product", product.slug, qty)}
            className="rounded-sm bg-primary px-5 py-3 text-[0.72rem] tracking-[0.14em] text-primary-foreground uppercase"
          >
            In den Warenkorb
          </button>
        }
      />
    </div>
  );
}