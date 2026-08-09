import { createFileRoute } from "@tanstack/react-router";
import catImage from "@/assets/cat-senior.jpg";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { products } from "@/data/products";

export const Route = createFileRoute("/katze")({
  head: () => ({
    meta: [
      { title: "Für ältere Katzen — SENIVIA" },
      {
        name: "description",
        content:
          "Milde Produkte für Senior-Katzen: Vitalität, sensible Verdauung, Fellpflege und stressfreie Zahnpflege.",
      },
      { property: "og:title", content: "Für ältere Katzen — SENIVIA" },
      {
        property: "og:description",
        content: "Sanfte Unterstützung für Katzen in der zweiten Lebenshälfte.",
      },
    ],
  }),
  component: CatPage,
});

function CatPage() {
  const catProducts = products.filter((p) => p.species === "katze" || p.species === "beide");

  return (
    <div>
      <section className="bg-gradient-forest text-primary-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-7 px-5 py-12 sm:gap-10 sm:py-16 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-primary-foreground/60">Katze</p>
            <h1 className="mt-4 text-[2.1rem] leading-tight sm:text-5xl">
              Katzen zeigen wenig. Umso genauer schauen wir hin.
            </h1>
            <div className="rule-bronze mt-7" />
            <p className="mt-6 max-w-md text-[0.9rem] leading-relaxed text-primary-foreground/80 sm:mt-7 sm:text-[0.98rem]">
              Weniger Sprünge, mehr Schlaf, ein stumpferes Fell – bei Katzen sind die Zeichen des
              Älterwerdens leise. Unsere Auswahl setzt auf milde Rezepturen und Anwendungen ohne
              Stress.
            </p>
          </Reveal>
          <Reveal delay={140} className="overflow-hidden rounded-[1.25rem] sm:rounded-[1.75rem]">
          <img
            src={catImage}
            alt="Ältere getigerte Katze auf einem cremefarbenen Sessel"
            loading="lazy"
            width={1200}
            height={900}
            className="aspect-[4/3] w-full rounded-[1.25rem] object-cover shadow-lift transition-transform duration-[900ms] ease-out hover:scale-[1.04] sm:aspect-auto sm:rounded-[1.75rem]"
          />
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
        <Reveal>
          <h2 className="text-xl sm:text-2xl">Passende Produkte für Katzen</h2>
        </Reveal>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-6 lg:grid-cols-3">
          {catProducts.map((product, i) => (
            <Reveal key={product.slug} delay={(i % 3) * 90} className="h-full">
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}