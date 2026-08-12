import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { useFavorites } from "@/lib/favorites";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/favoriten")({
  head: () => ({
    meta: [
      { title: "Favoriten — SENIVIA" },
      {
        name: "description",
        content: "Ihre gemerkten SENIVIA Produkte für ältere Hunde und Katzen an einem Ort.",
      },
      { property: "og:title", content: "Favoriten — SENIVIA" },
      { property: "og:description", content: "Ihre gemerkten SENIVIA Produkte an einem Ort." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: FavoritesPage,
});

function FavoritesPage() {
  const { ids, clear, count } = useFavorites();
  const saved = products.filter((p) => ids.includes(p.slug));

  return (
    <div className="mx-auto max-w-6xl px-5 py-10 sm:py-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow text-bronze">Merkliste</p>
          <h1 className="mt-4 text-[1.9rem] leading-tight sm:text-4xl">Ihre Favoriten</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            {count === 0
              ? "Noch keine Produkte gemerkt."
              : `${count} ${count === 1 ? "Produkt" : "Produkte"} gemerkt.`}
          </p>
        </div>
        {count > 0 && (
          <button
            type="button"
            onClick={clear}
            className="text-xs tracking-wide text-muted-foreground underline underline-offset-4"
          >
            Liste leeren
          </button>
        )}
      </div>

      {saved.length === 0 ? (
        <div className="mt-10 rounded-[1.5rem] border border-border bg-card px-6 py-14 text-center sm:mt-14 sm:rounded-3xl">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-sage/25">
            <Heart className="h-6 w-6 text-forest" strokeWidth={1.5} />
          </span>
          <h2 className="mt-6 text-2xl">Ihre Merkliste ist leer</h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            Tippen Sie auf das Herz bei einem Produkt, um es hier zu speichern – ideal, um in Ruhe zu
            vergleichen.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/shop"
              className="rounded-full bg-primary px-7 py-3.5 text-[0.78rem] tracking-[0.16em] text-primary-foreground uppercase"
            >
              Produkte entdecken
            </Link>
            <Link
              to="/box"
              className="rounded-full border border-primary px-7 py-3.5 text-[0.78rem] tracking-[0.16em] text-primary uppercase"
            >
              Boxen ansehen
            </Link>
          </div>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {saved.map((product, i) => (
            <Reveal key={product.slug} delay={i * 60}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}