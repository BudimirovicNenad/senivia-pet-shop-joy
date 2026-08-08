import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { bundles, formatCHF, products, type NeedId, type Species } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/berater")({
  head: () => ({
    meta: [
      { title: "Produktberater — SENIVIA" },
      {
        name: "description",
        content:
          "Drei Fragen zu Tierart, Alter und Beobachtung – und wir zeigen Ihnen die passende SENIVIA Box und passende Einzelprodukte.",
      },
      { property: "og:title", content: "Produktberater — SENIVIA" },
      {
        property: "og:description",
        content: "In drei Fragen zur passenden Auswahl für Ihr älteres Tier.",
      },
    ],
  }),
  component: Berater,
});

const speciesOptions: { value: Species; label: string }[] = [
  { value: "hund", label: "Hund" },
  { value: "katze", label: "Katze" },
];

const ageOptions = [
  { value: "reif", label: "7–10 Jahre", note: "Erste Veränderungen, Vorsorge sinnvoll" },
  { value: "senior", label: "über 10 Jahre", note: "Deutlichere Anzeichen des Älterwerdens" },
];

const observationOptions: { value: NeedId; label: string; note: string }[] = [
  {
    value: "mobilitaet",
    label: "Steht schwerer auf, mag kürzere Wege",
    note: "Gelenke & Beweglichkeit",
  },
  {
    value: "verdauung",
    label: "Empfindlicher Magen, wechselnder Kot",
    note: "Darm & Verdauung",
  },
  { value: "zahnpflege", label: "Mundgeruch, Belag auf den Zähnen", note: "Zahn & Atem" },
  { value: "pflege", label: "Stumpfes Fell, trockene Haut", note: "Haut & Fell" },
  { value: "vitalitaet", label: "Weniger Energie, schläft mehr", note: "Vitalität" },
];

const needToBundle: Partial<Record<NeedId, string>> = {
  mobilitaet: "senior-mobility",
  vitalitaet: "senior-mobility",
  verdauung: "darm-sensitiv",
  pflege: "darm-sensitiv",
  ernaehrung: "darm-sensitiv",
  zahnpflege: "zahn-atem",
};

function Berater() {
  const [step, setStep] = useState(0);
  const [species, setSpecies] = useState<Species | null>(null);
  const [age, setAge] = useState<string | null>(null);
  const [need, setNeed] = useState<NeedId | null>(null);

  const reset = () => {
    setStep(0);
    setSpecies(null);
    setAge(null);
    setNeed(null);
  };

  const recommendedBundle = need ? bundles.find((b) => b.slug === needToBundle[need]) : undefined;
  const recommendedProducts = need
    ? products
        .filter((p) => p.needs.includes(need))
        .filter((p) => !species || p.species === species || p.species === "beide")
        .slice(0, 3)
    : [];

  return (
    <div className="mx-auto max-w-4xl px-5 py-16">
      <p className="eyebrow text-bronze">Produktberater</p>
      <h1 className="mt-4 max-w-2xl text-4xl leading-tight sm:text-5xl">
        Drei Fragen. Eine klare Empfehlung.
      </h1>
      <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
        Kein Ratespiel und keine Diagnose – nur eine Orientierung, welche Produkte zu Ihrer
        Beobachtung passen.
      </p>

      <div className="mt-12 rounded-sm border border-border bg-card p-7 sm:p-10">
        {step < 3 && (
          <p className="eyebrow text-muted-foreground">Frage {step + 1} von 3</p>
        )}

        {step === 0 && (
          <>
            <h2 className="mt-4 text-2xl">Für wen suchen Sie?</h2>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {speciesOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    setSpecies(option.value);
                    setStep(1);
                  }}
                  className="rounded-sm border border-border px-6 py-5 text-left text-lg transition-colors hover:border-primary hover:bg-secondary"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </>
        )}

        {step === 1 && (
          <>
            <h2 className="mt-4 text-2xl">Wie alt ist Ihr Tier?</h2>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {ageOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    setAge(option.value);
                    setStep(2);
                  }}
                  className="rounded-sm border border-border px-6 py-5 text-left transition-colors hover:border-primary hover:bg-secondary"
                >
                  <span className="text-lg">{option.label}</span>
                  <span className="mt-1 block text-xs text-muted-foreground">{option.note}</span>
                </button>
              ))}
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="mt-4 text-2xl">Was fällt Ihnen am meisten auf?</h2>
            <div className="mt-7 space-y-3">
              {observationOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    setNeed(option.value);
                    setStep(3);
                  }}
                  className="block w-full rounded-sm border border-border px-6 py-5 text-left transition-colors hover:border-primary hover:bg-secondary"
                >
                  <span className="text-[1.05rem]">{option.label}</span>
                  <span className="mt-1 block text-xs tracking-[0.12em] text-bronze uppercase">
                    {option.note}
                  </span>
                </button>
              ))}
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <p className="eyebrow text-muted-foreground">Unsere Empfehlung</p>
            {recommendedBundle && (
              <div className="mt-6 grid gap-7 sm:grid-cols-[1fr_1.2fr]">
                <img
                  src={recommendedBundle.image}
                  alt={recommendedBundle.name}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="w-full rounded-sm object-cover"
                />
                <div>
                  <h2 className="text-2xl leading-tight">{recommendedBundle.name}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {recommendedBundle.subtitle}
                  </p>
                  <p className="mt-4 text-[0.95rem] leading-relaxed">{recommendedBundle.intro}</p>
                  <p className="mt-4 text-lg">{formatCHF(recommendedBundle.price)}</p>
                  <Link
                    to="/box/$slug"
                    params={{ slug: recommendedBundle.slug }}
                    className="mt-5 inline-block rounded-sm bg-primary px-7 py-4 text-[0.8rem] tracking-[0.16em] text-primary-foreground uppercase"
                  >
                    Box ansehen
                  </Link>
                </div>
              </div>
            )}

            {recommendedProducts.length > 0 && (
              <div className="mt-12">
                <h3 className="text-xl">Oder einzeln beginnen</h3>
                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {recommendedProducts.map((product) => (
                    <ProductCard key={product.slug} product={product} />
                  ))}
                </div>
              </div>
            )}

            <p className="mt-10 text-xs leading-relaxed text-muted-foreground">
              {age === "senior"
                ? "Ab dem zweiten Lebensjahrzehnt empfehlen wir zusätzlich eine jährliche tierärztliche Kontrolle."
                : "Frühzeitig begonnen, wirken diese Produkte am besten begleitend zur Routine."}{" "}
              Diese Empfehlung ersetzt keine tierärztliche Beratung.
            </p>

            <button
              type="button"
              onClick={reset}
              className="mt-7 text-xs tracking-[0.14em] text-muted-foreground uppercase underline underline-offset-4"
            >
              Neu starten
            </button>
          </>
        )}

        {step > 0 && step < 3 && (
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            className="mt-8 text-xs tracking-[0.14em] text-muted-foreground uppercase underline underline-offset-4"
          >
            Zurück
          </button>
        )}
      </div>
    </div>
  );
}