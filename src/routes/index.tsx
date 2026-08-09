import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Truck,
  RotateCcw,
  ShieldCheck,
  HeartHandshake,
  Bone,
  Cat,
  Sparkles,
  Leaf,
  ArrowRight,
} from "lucide-react";
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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const service = [
  { icon: Truck, title: "Gratis Versand", text: "Ab CHF 79 in der Schweiz" },
  { icon: RotateCcw, title: "30 Tage Rückgabe", text: "Unkompliziert und kostenlos" },
  { icon: ShieldCheck, title: "Sichere Bezahlung", text: "Verschlüsselt, auch als Gast" },
  { icon: HeartHandshake, title: "Persönliche Beratung", text: "Wir antworten ehrlich" },
];

const needTint: Record<string, string> = {
  mobilitaet: "bg-sage/25",
  ernaehrung: "bg-secondary",
  verdauung: "bg-taupe/25",
  zahnpflege: "bg-sage/20",
  pflege: "bg-bronze/15",
  vitalitaet: "bg-secondary/70",
};

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

const values = [
  { icon: Leaf, title: "Sorgfältig ausgewählt", text: "Nur Produkte, deren Zusammensetzung wir erklären können." },
  { icon: Sparkles, title: "Für die zweite Lebenshälfte", text: "Ein Sortiment mit einem klaren Fokus: gute Tage." },
  { icon: HeartHandshake, title: "Schweizer Betreuung", text: "Ruhige, ehrliche Antworten auf Ihre Fragen." },
];

function Home() {
  const bestsellerSlugs = [
    "gelenk-gewebe-formel",
    "healthy-ageing",
    "sensitive-skin-stomach-lamm",
    "zahnpasta-2-in-1",
    "lachsoel",
  ];
  const bestsellers = bestsellerSlugs
    .map((slug) => products.find((p) => p.slug === slug)!)
    .filter(Boolean);

  return (
    <>
      {/* Hero — full-bleed Foto mit dunklem Verlauf */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImage}
          alt="Ältere Golden-Retriever-Hündin liegt entspannt neben ihrer Besitzerin"
          width={1600}
          height={1104}
          className="absolute inset-0 -z-10 h-full w-full object-cover object-[65%_center]"
        />
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(100deg, oklch(0.255 0.038 165.5 / 92%) 0%, oklch(0.255 0.038 165.5 / 72%) 42%, oklch(0.255 0.038 165.5 / 18%) 78%)",
          }}
        />
        <div className="mx-auto max-w-6xl px-5 py-24 sm:py-32 lg:py-40">
          <div className="max-w-xl text-primary-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-2 text-[0.74rem] tracking-[0.12em] uppercase backdrop-blur">
              <Leaf className="h-4 w-4 text-bronze" />
              Für Hunde und Katzen ab ca. 7 Jahren
            </span>
            <h1 className="mt-7 text-[2.6rem] leading-[1.03] font-medium sm:text-[3.4rem] lg:text-[4rem]">
              Für noch viele
              <br />
              schöne Jahre mit dir.
            </h1>
            <p className="mt-6 max-w-md text-[1.02rem] leading-relaxed text-primary-foreground/80">
              Sorgfältig ausgewählte Produkte für mehr Wohlbefinden, Komfort und Lebensqualität im
              höheren Alter.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/box"
                className="inline-flex items-center gap-2 rounded-full bg-cream px-7 py-4 text-[0.85rem] font-medium text-primary transition-opacity hover:opacity-90"
              >
                SENIVIA Box entdecken
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/shop"
                search={{}}
                className="rounded-full border border-primary-foreground/45 px-7 py-4 text-[0.85rem] font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Alle Produkte
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust-Streifen */}
      <div className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 py-7 sm:grid-cols-2 lg:grid-cols-4">
          {service.map((item) => (
            <div key={item.title} className="flex items-center gap-3.5">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage/25 text-primary">
                <item.icon className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.6} />
              </span>
              <div>
                <p className="text-sm font-medium">{item.title}</p>
                <p className="text-xs text-muted-foreground">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Species */}
      <section className="mx-auto max-w-6xl px-5 pt-20 pb-4">
        <div className="grid gap-5 sm:grid-cols-2">
          <Link
            to="/hund"
            className="group flex items-center justify-between gap-4 rounded-[1.75rem] bg-sage/25 p-8 transition-colors hover:bg-sage/40"
          >
            <div>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-card text-primary">
                <Bone className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <h2 className="mt-4 text-2xl">Für ältere Hunde</h2>
              <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                Gelenke, Ernährung, Pflege und Zahnpflege.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[0.8rem] font-medium text-primary">
                Entdecken <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
          <Link
            to="/katze"
            className="group flex items-center justify-between gap-4 rounded-[1.75rem] bg-taupe/25 p-8 transition-colors hover:bg-taupe/40"
          >
            <div>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-card text-primary">
                <Cat className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <h2 className="mt-4 text-2xl">Für ältere Katzen</h2>
              <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                Milde Rezepturen, kleine Mengen, ohne Stress.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[0.8rem] font-medium text-primary">
                Entdecken <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Needs */}
      <section className="mt-16 bg-secondary/45 py-20">
        <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-xl text-center">
          <p className="eyebrow text-bronze">Nach Bedarf einkaufen</p>
          <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">
            Wählen Sie, was Ihr Tier jetzt braucht.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Sechs Bereiche, in denen ältere Tiere am häufigsten Unterstützung brauchen.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {needs.map((need) => (
            <Link
              key={need.id}
              to="/shop"
              search={{ bedarf: need.id }}
              className="group rounded-[1.5rem] border border-border/70 bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <span
                className={`inline-flex h-11 w-11 items-center justify-center rounded-full text-primary ${needTint[need.id] ?? "bg-secondary"}`}
              >
                <Sparkles className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <h3 className="mt-4 text-xl">{need.label}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {need.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-[0.8rem] font-medium text-primary">
                Ansehen <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
        </div>
      </section>

      {/* Bestseller */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-xl text-center">
            <p className="eyebrow text-bronze">Beliebt bei unseren Kundinnen</p>
            <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">Häufig gewählt</h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {bestsellers.slice(0, 4).map((product, i) => (
              <ProductCard
                key={product.slug}
                product={product}
                badge={i === 0 ? "Bestseller" : undefined}
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/shop"
              search={{}}
              className="inline-flex items-center gap-2 rounded-full border border-primary/25 px-7 py-3.5 text-[0.82rem] font-medium text-primary transition-colors hover:border-primary"
            >
              Alle Produkte ansehen <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Boxen */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="eyebrow text-bronze">SENIVIA Box</p>
        <h2 className="mt-3 max-w-xl text-3xl leading-tight sm:text-4xl">
          Drei Boxen, sorgfältig zusammengestellt.
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Jede Box vereint vier Produkte, die zusammen wirken – als Geschenk oder als Einstieg.
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {bundles.map((bundle) => (
            <Link
              key={bundle.slug}
              to="/box/$slug"
              params={{ slug: bundle.slug }}
              className="group overflow-hidden rounded-[1.75rem] border border-border/70 bg-card p-3 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <img
                src={bundle.image}
                alt={bundle.name}
                loading="lazy"
                width={1200}
                height={900}
                className="aspect-[4/3] w-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="px-4 pt-5 pb-3">
                <h3 className="text-xl">{bundle.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {bundle.subtitle}
                </p>
                <p className="mt-5 text-lg">
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

      {/* Berater */}
      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="flex flex-col items-start gap-8 rounded-[2rem] bg-gradient-forest px-8 py-12 text-primary-foreground lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div>
            <p className="eyebrow text-primary-foreground/60">Produktberater</p>
            <h2 className="mt-3 max-w-lg text-3xl leading-tight sm:text-4xl">
              Was braucht Ihr Tier jetzt am meisten?
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-primary-foreground/75">
              Wenige ruhige Fragen – am Ende sehen Sie, welche Produkte zu Tierart, Alter und
              Bedürfnis passen. Eine Kaufhilfe, keine tierärztliche Diagnose.
            </p>
          </div>
          <Link
            to="/berater"
            className="inline-flex items-center gap-2 rounded-full bg-cream px-8 py-4 text-[0.85rem] font-medium text-primary transition-opacity hover:opacity-90"
          >
            Berater starten <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Werte + Katze */}
      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <img
            src={catImage}
            alt="Ältere getigerte Katze sitzt entspannt auf einem cremefarbenen Sessel am Fenster"
            loading="lazy"
            width={1200}
            height={900}
            className="w-full rounded-[2rem] object-cover shadow-soft"
          />
          <div>
            <p className="eyebrow text-bronze">Unser Versprechen</p>
            <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">
              Älter werden ist keine Krankheit.
            </h2>
            <div className="mt-8 space-y-6">
              {values.map((value) => (
                <div key={value.title} className="flex gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sage/25 text-primary">
                    <value.icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3 className="text-lg">{value.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {value.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/ueber-uns"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/25 px-6 py-3.5 text-[0.82rem] font-medium text-primary transition-colors hover:border-primary"
            >
              Mehr über SENIVIA <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Erfahrungen */}
      <section className="bg-card/60 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <p className="eyebrow text-bronze">Erfahrungen</p>
          <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">Was Kundinnen berichten</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {reviews.map((review) => (
              <figure
                key={review.author}
                className="rounded-[1.5rem] border border-border/70 bg-card p-7 shadow-soft"
              >
                <blockquote className="text-lg leading-relaxed">„{review.quote}“</blockquote>
                <figcaption className="mt-5 text-sm text-muted-foreground">
                  {review.author} · {review.pet}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Ratgeber */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="eyebrow text-bronze">Ratgeber</p>
        <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">Wissen für die besten Jahre</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.title}
              className="rounded-[1.5rem] bg-secondary/60 p-7 transition-transform hover:-translate-y-1"
            >
              <p className="eyebrow text-bronze">{article.kicker}</p>
              <h3 className="mt-3 text-xl leading-snug">{article.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{article.text}</p>
              <Link
                to="/ratgeber"
                className="mt-5 inline-flex items-center gap-1.5 text-[0.8rem] font-medium text-primary"
              >
                Lesen <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Warum SENIVIA */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-10 gap-y-4 px-5 py-8">
          <h2 className="text-2xl">Warum SENIVIA</h2>
          {[
            "Sorgfältig ausgewählt",
            "Versand aus der Schweiz",
            "Verständlich erklärt",
            "Persönliche Beratung",
          ].map((item) => (
            <span key={item} className="flex items-center gap-2 text-sm text-foreground/80">
              <Check className="h-4 w-4 text-bronze" strokeWidth={2} />
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Newsletter — Forest-Band */}
      <section className="bg-gradient-forest py-20 text-primary-foreground">
        <div className="mx-auto max-w-2xl px-5 text-center">
          <p className="eyebrow text-primary-foreground/60">Newsletter</p>
          <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">
            Wertvolle Hinweise für die besten Jahre
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/75">
            Etwa einmal im Monat: Pflegehinweise, neue Produkte und ehrliche Empfehlungen.
          </p>
          <form
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
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
              className="flex-1 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-5 py-4 text-sm text-primary-foreground outline-none placeholder:text-primary-foreground/55 focus:border-bronze"
            />
            <button
              type="submit"
              className="rounded-full bg-cream px-7 py-4 text-[0.85rem] font-medium text-primary transition-opacity hover:opacity-90"
            >
              Anmelden
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
