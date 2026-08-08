import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero-senior-dog.jpg";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

export const Route = createFileRoute("/hund")({
  head: () => ({
    meta: [
      { title: "Für ältere Hunde — SENIVIA" },
      {
        name: "description",
        content:
          "Produkte für Senior-Hunde: Gelenke und Beweglichkeit, sensible Verdauung, Fellpflege und Zahnpflege – ruhig erklärt.",
      },
      { property: "og:title", content: "Für ältere Hunde — SENIVIA" },
      {
        property: "og:description",
        content: "Beweglichkeit, Ernährung und Pflege für Hunde in der zweiten Lebenshälfte.",
      },
    ],
  }),
  component: DogPage,
});

function DogPage() {
  const dogProducts = products.filter((p) => p.species === "hund" || p.species === "beide");

  return (
    <div>
      <section className="bg-gradient-forest text-primary-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-primary-foreground/60">Hund</p>
            <h1 className="mt-4 text-4xl leading-tight sm:text-5xl">
              Wenn die Spaziergänge kürzer werden.
            </h1>
            <div className="rule-bronze mt-7" />
            <p className="mt-7 max-w-md text-[0.98rem] leading-relaxed text-primary-foreground/80">
              Ältere Hunde verändern sich langsam: Sie zögern beim Aufstehen, reagieren
              empfindlicher auf Futter, das Fell wird stumpfer. Für genau diese Themen haben wir
              unser Sortiment zusammengestellt.
            </p>
          </div>
          <img
            src={heroImage}
            alt="Älterer Golden Retriever ruht neben seiner Besitzerin"
            loading="lazy"
            width={1600}
            height={1104}
            className="w-full rounded-sm object-cover shadow-lift"
          />
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-2xl">Passende Produkte für Hunde</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dogProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}