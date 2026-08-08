import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-senior-dog.jpg";
import catImage from "@/assets/cat-senior.jpg";
import { ProductCard } from "@/components/ProductCard";
import { bundles, bundleValue, formatCHF, needs, products } from "@/data/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SENIVIA — Für noch viele schöne Jahre mit dir" },
      {
        name: "description",
        content:
          "Schweizer Premium-Shop für ältere Hunde und Katzen: Beweglichkeit, Ernährung, Pflege und Zahnpflege – sorgfältig ausgewählt und verständlich erklärt.",
      },
      { property: "og:title", content: "SENIVIA — Für noch viele schöne Jahre mit dir" },
      {
        property: "og:description",
        content: "Sorgfältig ausgewählte Produkte für mehr Wohlbefinden im Alter.",
      },
    ],
  }),
  component: Home,
});

const trust = [
  { title: "Sorgfältig ausgewählt", text: "Jedes Produkt wird einzeln geprüft, nicht einfach ins Regal gestellt." },
  { title: "Für ältere Tiere", text: "Ein Sortiment, das die zweite Lebenshälfte im Blick hat." },
  { title: "Schweizer Betreuung", text: "Persönliche Antworten auf Ihre Fragen – ruhig und ehrlich." },
  { title: "Sicher einkaufen", text: "Verschlüsselte Bezahlung, Kauf auch ohne Konto möglich." },
];

const reviews = [
  {
    quote:
      "Nach vier Wochen steht Emma morgens wieder ohne Zögern auf. Wir hätten nicht gedacht, dass so wenig so viel verändert.",
    author: "Barbara K.",
    pet: "Emma, Labrador, 11 Jahre",
  },
  {
    quote:
      "Endlich ein Shop, der nichts verspricht, sondern erklärt. Die Beratung per Mail war ausführlich und ehrlich.",
    author: "Marc D.",
    pet: "Fritz, Mischling, 13 Jahre",
  },
  {
    quote:
      "Die Zahnpflege-Box hat unseren Alltag gerettet. Mit der Fingerbürste lässt Mira es zum ersten Mal zu.",
    author: "Sibylle R.",
    pet: "Mira, Hauskatze, 14 Jahre",
  },
];

const articles = [
  {
    kicker: "Ernährung",
    title: "Was sich im Napf ändern sollte, wenn der Hund älter wird",
    text: "Weniger Energie, mehr Qualität: worauf es bei Senior-Ernährung wirklich ankommt.",
  },
  {
    kicker: "Beweglichkeit",
    title: "Erste Anzeichen nachlassender Gelenke erkennen",
    text: "Sechs Beobachtungen aus dem Alltag, die früher auffallen als jede Untersuchung.",
  },
  {
    kicker: "Alltag",
    title: "Ruhe, Schlaf und Sicherheit im Zuhause",
    text: "Kleine Anpassungen in der Wohnung, die älteren Tieren spürbar helfen.",
  },
];

function Home() {
  const bestsellers = [
    "gelenk-gewebe-formel",
    "healthy-ageing",
    "sensitive-skin-stomach-lamm",
    "zahnpasta-2-in-1",
  ]
    .map((slug) => products.find((p) => p.slug === slug)!)
    .filter(Boolean);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-forest text-primary-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-[1fr_1.1fr] lg:py-24">
          <div>
            <p className="eyebrow text-primary-foreground/60">Schweizer Premium-Auswahl</p>
            <h1 className="mt-5 text-[2.6rem] leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
              Für noch viele schöne Jahre mit dir.
            </h1>
            <div className="rule-bronze mt-7" />
            <p className="mt-7 max-w-md text-[1.02rem] leading-relaxed text-primary-foreground/80">
              Sorgfältig ausgewählte Produkte für mehr Wohlbefinden, Komfort und Lebensqualität im
              höheren Alter – für Hunde und Katzen.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/box"
                className="rounded-sm bg-cream px-7 py-4 text-[0.8rem] tracking-[0.16em] text-primary uppercase transition-opacity hover:opacity-90"
              >
                SENIVIA Box entdecken
              </Link>
              <Link
                to="/berater"
                className="rounded-sm border border-primary-foreground/35 px-7 py-4 text-[0.8rem] tracking-[0.16em] text-primary-foreground uppercase transition-colors hover:border-primary-foreground"
              >
                Produkt finden
              </Link>
            </div>
          </div>
          <img
            src={heroImage}
            alt="Ältere Golden-Retriever-Hündin liegt entspannt neben ihrer Besitzerin auf dem Sofa"
            width={1600}
            height={1104}
            className="w-full rounded-sm object-cover shadow-lift"
          />
        </div>
      </section>

      {/* Trust */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map((item) => (
            <div key={item.title}>
              <h2 className="text-base">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Welt der Bedürfnisse */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="eyebrow text-bronze">Welt der Bedürfnisse</p>
        <h2 className="mt-4 max-w-xl text-3xl leading-tight sm:text-4xl">
          Wählen Sie nach dem, was Ihr Tier jetzt braucht.
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {needs.map((need) => (
            <Link
              key={need.id}
              to="/shop"
              search={{ bedarf: need.id }}
              className="group rounded-sm border border-border bg-card p-7 transition-colors hover:border-sage"
            >
              <h3 className="text-xl">{need.label}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{need.description}</p>
              <span className="mt-5 inline-block text-[0.75rem] tracking-[0.16em] text-primary uppercase">
                Ansehen →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Berater */}
      <section className="bg-secondary/60">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-5 py-16 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="eyebrow text-bronze">Produktberater</p>
            <h2 className="mt-4 max-w-lg text-3xl leading-tight sm:text-4xl">
              Was braucht Ihr Tier jetzt am meisten?
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
              Sechs ruhige Fragen – am Ende sehen Sie, welche Produkte zu Tierart, Alter und
              Bedürfnis passen. Eine Kaufhilfe, keine tierärztliche Diagnose.
            </p>
          </div>
          <Link
            to="/berater"
            className="rounded-sm bg-primary px-8 py-4 text-[0.8rem] tracking-[0.16em] text-primary-foreground uppercase transition-colors hover:bg-forest-deep"
          >
            Berater starten
          </Link>
        </div>
      </section>

      {/* Bestseller */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-bronze">Beliebt bei unseren Kundinnen</p>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">Häufig gewählt</h2>
          </div>
          <Link to="/shop" className="text-[0.78rem] tracking-[0.16em] text-primary uppercase">
            Alle Produkte →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {bestsellers.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      {/* Versprechen */}
      <section className="bg-gradient-forest text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-primary-foreground/60">Unser Versprechen</p>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
              Älter werden ist keine Krankheit.
            </h2>
            <div className="rule-bronze mt-7" />
          </div>
          <div className="space-y-5 text-[0.98rem] leading-relaxed text-primary-foreground/80">
            <p>
              SENIVIA ist aus einer einfachen Beobachtung entstanden: Sobald ein Tier grau wird,
              verändert sich der Ton in den Regalen. Plötzlich geht es um Defizite statt um gute Tage.
            </p>
            <p>
              Wir sehen das anders. Ein älteres Tier braucht keine Nachsicht, sondern die passende
              Unterstützung – bei Gelenken, bei der Verdauung, bei der Pflege. Deshalb nehmen wir nur
              Produkte auf, deren Zusammensetzung wir selbst verstehen und erklären können.
            </p>
            <Link
              to="/ueber-uns"
              className="inline-block text-[0.78rem] tracking-[0.16em] text-primary-foreground uppercase underline decoration-bronze decoration-1 underline-offset-8"
            >
              Mehr über SENIVIA
            </Link>
          </div>
        </div>
      </section>

      {/* SENIVIA Box */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="eyebrow text-bronze">SENIVIA Box</p>
        <h2 className="mt-4 max-w-xl text-3xl leading-tight sm:text-4xl">
          Drei Boxen, sorgfältig zusammengestellt.
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Jede Box vereint vier Produkte, die zusammen wirken – als Geschenk oder als Einstieg.
          Später auch als regelmässige Lieferung.
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {bundles.map((bundle) => (
            <Link
              key={bundle.slug}
              to="/box/$slug"
              params={{ slug: bundle.slug }}
              className="group overflow-hidden rounded-sm border border-border bg-card shadow-soft transition-shadow hover:shadow-lift"
            >
              <img
                src={bundle.image}
                alt={bundle.name}
                loading="lazy"
                width={1200}
                height={900}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="p-6">
                <h3 className="text-xl">{bundle.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {bundle.subtitle}
                </p>
                <p className="mt-5 text-base">
                  {formatCHF(bundle.price)}{" "}
                  <span className="text-xs text-muted-foreground line-through">
                    {formatCHF(bundleValue(bundle))}
                  </span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Erfahrungen */}
      <section className="bg-secondary/60">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="eyebrow text-bronze">Erfahrungen</p>
          <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">Was Kundinnen berichten</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {reviews.map((review) => (
              <figure key={review.author} className="rounded-sm border border-border bg-card p-7">
                <blockquote className="text-lg leading-relaxed">„{review.quote}“</blockquote>
                <figcaption className="mt-5 text-sm text-muted-foreground">
                  {review.author} · {review.pet}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Katze */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <img
            src={catImage}
            alt="Ältere getigerte Katze sitzt entspannt auf einem cremefarbenen Sessel am Fenster"
            loading="lazy"
            width={1200}
            height={900}
            className="w-full rounded-sm object-cover shadow-soft"
          />
          <div>
            <p className="eyebrow text-bronze">Auch für Katzen</p>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
              Sanfte Unterstützung für Senior-Katzen
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Katzen zeigen Beschwerden spät und leise. Unsere Auswahl für Katzen setzt auf milde
              Rezepturen, kleine Mengen und Anwendungen, die ohne Stress funktionieren.
            </p>
            <Link
              to="/katze"
              className="mt-7 inline-block rounded-sm border border-primary px-7 py-4 text-[0.8rem] tracking-[0.16em] text-primary uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Für Katzen ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* Ratgeber */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="eyebrow text-bronze">Ratgeber</p>
          <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">Wissen für die besten Jahre</h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {articles.map((article) => (
              <article key={article.title} className="border-t border-bronze/40 pt-6">
                <p className="eyebrow text-muted-foreground">{article.kicker}</p>
                <h3 className="mt-3 text-xl leading-snug">{article.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{article.text}</p>
                <Link
                  to="/ratgeber"
                  className="mt-4 inline-block text-[0.75rem] tracking-[0.16em] text-primary uppercase"
                >
                  Lesen →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-3xl px-5 py-20 text-center">
        <p className="eyebrow text-bronze">Newsletter</p>
        <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
          Wertvolle Hinweise für die besten Jahre
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Etwa einmal im Monat: Pflegehinweise, neue Produkte und ehrliche Empfehlungen.
        </p>
        <form
          className="mt-8 flex flex-col gap-3 sm:flex-row"
          onSubmit={(event) => event.preventDefault()}
        >
          <label htmlFor="newsletter-email" className="sr-only">
            E-Mail-Adresse
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="Ihre E-Mail-Adresse"
            className="flex-1 rounded-sm border border-input bg-card px-4 py-4 text-sm outline-none focus:border-sage"
          />
          <button
            type="submit"
            className="rounded-sm bg-primary px-7 py-4 text-[0.8rem] tracking-[0.16em] text-primary-foreground uppercase transition-colors hover:bg-forest-deep"
          >
            Anmelden
          </button>
        </form>
      </section>
    </>
  );
}