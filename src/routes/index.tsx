import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Truck,
  RotateCcw,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  Leaf,
  Check,
  PawPrint,
  Utensils,
  Smile,
  Droplets,
  ArrowRight,
} from "lucide-react";
import heroImage from "@/assets/hero-senior-dog.jpg";
import catImage from "@/assets/cat-senior.jpg";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
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

const needIcon: Record<string, typeof Leaf> = {
  mobilitaet: PawPrint,
  ernaehrung: Utensils,
  verdauung: Leaf,
  zahnpflege: Smile,
  pflege: Droplets,
  vitalitaet: Sparkles,
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

const brandNames: string[] = [
  "Nature's Protection",
  "Tauro Pro Line",
  "Faugis",
  "Superior Care",
  "Daily Oral Care",
  "Healthy Ageing",
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
          className="animate-kenburns absolute inset-0 -z-10 h-full w-full object-cover object-[65%_center]"
        />
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(100deg, oklch(0.255 0.038 165.5 / 92%) 0%, oklch(0.255 0.038 165.5 / 72%) 42%, oklch(0.255 0.038 165.5 / 18%) 78%)",
          }}
        />
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24 md:py-32 lg:py-40">
          <div className="max-w-xl text-primary-foreground">
            <span className="animate-rise inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-3.5 py-2 text-[0.62rem] tracking-[0.1em] uppercase backdrop-blur sm:px-4 sm:text-[0.74rem] sm:tracking-[0.12em]">
              <Leaf className="h-3.5 w-3.5 shrink-0 text-bronze sm:h-4 sm:w-4" />
              Für Hunde und Katzen ab ca. 7 Jahren
            </span>
            <h1
              className="animate-rise mt-6 text-[2.35rem] leading-[1.05] font-medium sm:mt-7 sm:text-[3rem] md:text-[3.4rem] sm:leading-[1.03] lg:text-[4rem]"
              style={{ animationDelay: "120ms" }}
            >
              Für noch viele
              <br />
              schöne Jahre mit dir.
            </h1>
            <p
              className="animate-rise mt-5 max-w-md text-[0.95rem] leading-relaxed text-primary-foreground/80 sm:mt-6 sm:text-[1.02rem]"
              style={{ animationDelay: "240ms" }}
            >
              Sorgfältig ausgewählte Produkte für mehr Wohlbefinden, Komfort und Lebensqualität im
              höheren Alter.
            </p>
            <div
              className="animate-rise mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap"
              style={{ animationDelay: "360ms" }}
            >
              <Link
                to="/box"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-cream px-7 py-4 text-[0.85rem] font-medium text-primary shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
              >
                SENIVIA Box entdecken
                <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/shop"
                search={{}}
                className="rounded-full border border-primary-foreground/45 px-7 py-4 text-center text-[0.85rem] font-medium text-primary-foreground backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-foreground hover:bg-primary-foreground/10"
              >
                Alle Produkte
              </Link>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute right-6 bottom-8 hidden lg:block">
          <div className="animate-float rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 px-5 py-4 text-primary-foreground backdrop-blur-md">
            <p className="text-[0.68rem] tracking-[0.16em] uppercase text-primary-foreground/70">
              Weil sie das Beste verdient
            </p>
            <p className="mt-1 font-serif text-lg">12 Produkte · 3 Boxen</p>
          </div>
        </div>
      </section>

      {/* Trust-Streifen */}
      <div className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-5 px-5 py-6 sm:py-7 md:grid-cols-4 md:gap-5">
          {service.map((item, i) => (
            <Reveal key={item.title} delay={i * 90} className="group flex items-center gap-2.5 sm:gap-3.5">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage/25 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-sage/45 sm:h-10 sm:w-10">
                <item.icon className="h-4 w-4 sm:h-[1.15rem] sm:w-[1.15rem]" strokeWidth={1.6} />
              </span>
              <div className="min-w-0">
                <p className="text-[0.8rem] leading-snug font-medium sm:text-sm">{item.title}</p>
                <p className="text-[0.7rem] leading-snug text-muted-foreground sm:text-xs">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Species — Lifestyle photography split 1x2 */}
      <section className="mx-auto max-w-6xl px-5 py-10 sm:py-16">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="eyebrow text-bronze">Spezialisierte Pflege</span>
          <h2 className="mt-3 text-[1.7rem] leading-tight font-serif sm:text-4xl">
            Für Ihren treuen Begleiter
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:gap-8">
          {/* Dog Card — large lifestyle photo */}
          <Reveal delay={100} className="h-full">
            <Link
              to="/hund"
              className="group relative isolate block h-full min-h-[22rem] overflow-hidden rounded-[1.75rem] bg-white shadow-xl shadow-primary/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:min-h-[28rem] sm:rounded-[2.25rem]"
            >
              <img
                src={heroImage}
                alt="Glücklicher älterer Hund in warmem Licht"
                width={1600}
                height={1104}
                className="absolute inset-0 -z-20 h-full w-full object-cover object-[60%_center] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                    <PawPrint className="h-3.5 w-3.5 text-white" strokeWidth={2} />
                  </span>
                  <span className="text-[11px] font-medium uppercase tracking-widest text-white/90">
                    Verfügbar
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-medium text-white sm:text-3xl">
                  Für ältere Hunde
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-white/80">
                  Gelenke, Ernährung, Pflege und spezialisierte Zahnpflege für Senioren.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 self-start rounded-xl bg-white px-5 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:bg-cream group-hover:translate-x-1">
                  Entdecken
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>

          <Reveal delay={200} className="h-full">
            <Link
              to="/katze"
              className="group relative isolate block h-full min-h-[22rem] overflow-hidden rounded-[1.75rem] bg-white shadow-xl shadow-primary/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:min-h-[28rem] sm:rounded-[2.25rem]"
            >
              <img
                src={catImage}
                alt="Ältere Katze in Ruhe"
                width={400}
                height={400}
                className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                    <PawPrint className="h-3.5 w-3.5 text-white" strokeWidth={2} />
                  </span>
                  <span className="text-[11px] font-medium uppercase tracking-widest text-white/90">
                    Verfügbar
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-medium text-white sm:text-3xl">
                  Für ältere Katzen
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-white/80">
                  Milde Rezepturen und stressfreie Pflege für Katzen-Senioren.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 self-start rounded-xl bg-white px-5 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:bg-cream group-hover:translate-x-1">
                  Entdecken
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Needs */}
      <section className="bg-secondary/45 bg-grain py-10 sm:py-16">
        <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="eyebrow text-bronze">Nach Bedarf einkaufen</p>
          <h2 className="mt-3 text-[1.7rem] leading-tight sm:text-4xl">
            Wählen Sie, was Ihr Tier jetzt braucht.
          </h2>
          <p className="mt-3 text-[0.85rem] leading-relaxed text-muted-foreground sm:mt-4 sm:text-sm">
            Sechs Bereiche, in denen ältere Tiere am häufigsten Unterstützung brauchen.
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-5 md:grid-cols-3 lg:grid-cols-3">
          {needs.map((need, i) => (
            <Reveal key={need.id} delay={(i % 3) * 100} className="h-full">
            <Link
              to="/shop"
              search={{ bedarf: need.id }}
              className="group flex h-full flex-col rounded-[1.25rem] border border-border/70 bg-card p-4 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-bronze/40 hover:shadow-lift sm:rounded-[1.5rem] sm:p-7"
            >
              {(() => {
                const Icon = needIcon[need.id] ?? Sparkles;
                return (
                  <span
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-primary transition-transform duration-300 group-hover:scale-110 sm:h-11 sm:w-11 ${needTint[need.id] ?? "bg-secondary"}`}
                  >
                    <Icon className="h-[1.15rem] w-[1.15rem] sm:h-5 sm:w-5" strokeWidth={1.6} />
                  </span>
                );
              })()}
              <h3 className="mt-3.5 text-[1.05rem] leading-snug sm:mt-4 sm:text-xl">{need.label}</h3>
              <p className="mt-2 text-[0.8rem] leading-snug text-muted-foreground sm:mt-3 sm:text-sm sm:leading-relaxed">
                {need.description}
              </p>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-3.5 text-[0.78rem] font-medium text-primary sm:pt-5 sm:text-[0.8rem]">
                Ansehen <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            </Reveal>
          ))}
        </div>
        </div>
      </section>

      {/* Bestseller */}
      <section className="py-10 sm:py-16">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="mx-auto max-w-xl text-center">
            <p className="eyebrow text-bronze">Beliebt bei unseren Kundinnen</p>
            <h2 className="mt-3 text-[1.7rem] leading-tight sm:text-4xl">Häufig gewählt</h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-6 md:grid-cols-4">
            {bestsellers.slice(0, 4).map((product, i) => (
              <Reveal key={product.slug} delay={i * 90} className="h-full">
                <ProductCard product={product} badge={i === 0 ? "Bestseller" : undefined} />
              </Reveal>
            ))}
          </div>
          <div className="mt-8 text-center sm:mt-10">
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
      <section className="mx-auto max-w-6xl px-5 py-10 sm:py-16">
        <p className="eyebrow text-bronze">SENIVIA Box</p>
        <h2 className="mt-3 max-w-xl text-[1.7rem] leading-tight sm:text-4xl">
          Drei Boxen, sorgfältig zusammengestellt.
        </h2>
        <p className="mt-3 max-w-xl text-[0.85rem] leading-relaxed text-muted-foreground sm:mt-4 sm:text-sm">
          Jede Box vereint vier Produkte, die zusammen wirken – als Geschenk oder als Einstieg.
        </p>
        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 md:grid-cols-3">
          {bundles.map((bundle, i) => (
            <Reveal key={bundle.slug} delay={i * 110} className="h-full">
            <Link
              to="/box/$slug"
              params={{ slug: bundle.slug }}
              className="group block h-full overflow-hidden rounded-[1.75rem] border border-border/70 bg-card p-3 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-bronze/40 hover:shadow-lift"
            >
              <div className="overflow-hidden rounded-2xl">
              <img
                src={bundle.image}
                alt={bundle.name}
                loading="lazy"
                width={1200}
                height={900}
                className="aspect-square w-full bg-card object-contain p-3 transition-transform duration-[900ms] ease-out group-hover:scale-[1.04] sm:p-4"
              />
              </div>
              <div className="px-3 pt-4 pb-2 sm:px-4 sm:pt-5 sm:pb-3">
                <h3 className="text-lg leading-snug sm:text-xl">{bundle.name}</h3>
                <p className="mt-2 text-[0.82rem] leading-relaxed text-muted-foreground sm:text-sm">
                  {bundle.subtitle}
                </p>
                <p className="mt-4 text-lg sm:mt-5">
                  {formatCHF(bundle.price)}{" "}
                  <span className="text-xs text-muted-foreground line-through">
                    {formatCHF(bundleValue(bundle))}
                  </span>
                </p>
              </div>
            </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Berater */}
      <section className="mx-auto max-w-6xl px-5 py-10 sm:py-16">
        <div className="flex flex-col items-start gap-6 rounded-[1.5rem] bg-gradient-forest px-6 py-9 text-primary-foreground sm:gap-8 sm:rounded-[2rem] sm:px-8 sm:py-12 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div>
            <p className="eyebrow text-primary-foreground/60">Produktberater</p>
            <h2 className="mt-3 max-w-lg text-[1.7rem] leading-tight sm:text-4xl">
              Was braucht Ihr Tier jetzt am meisten?
            </h2>
            <p className="mt-3 max-w-lg text-[0.85rem] leading-relaxed text-primary-foreground/75 sm:mt-4 sm:text-sm">
              Wenige ruhige Fragen – am Ende sehen Sie, welche Produkte zu Tierart, Alter und
              Bedürfnis passen. Eine Kaufhilfe, keine tierärztliche Diagnose.
            </p>
          </div>
          <Link
            to="/berater"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-cream px-8 py-4 text-[0.85rem] font-medium text-primary transition-opacity hover:opacity-90 sm:w-auto"
          >
            Berater starten <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Werte + Katze */}
      <section className="mx-auto max-w-6xl px-5 py-10 sm:py-16">
        <div className="grid items-center gap-7 sm:gap-10 md:grid-cols-2">
          <img
            src={catImage}
            alt="Ältere getigerte Katze sitzt entspannt auf einem cremefarbenen Sessel am Fenster"
            loading="lazy"
            width={1200}
            height={900}
            className="aspect-[4/3] w-full rounded-[1.5rem] object-cover shadow-soft sm:aspect-auto sm:rounded-[2rem]"
          />
          <div>
            <p className="eyebrow text-bronze">Unser Versprechen</p>
            <h2 className="mt-3 text-[1.7rem] leading-tight sm:text-4xl">
              Älter werden ist keine Krankheit.
            </h2>
            <div className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">
              {values.map((value) => (
                <div key={value.title} className="flex gap-3.5 sm:gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage/25 text-primary sm:h-11 sm:w-11">
                    <value.icon className="h-[1.15rem] w-[1.15rem] sm:h-5 sm:w-5" strokeWidth={1.6} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[1.05rem] sm:text-lg">{value.title}</h3>
                    <p className="mt-1 text-[0.82rem] leading-relaxed text-muted-foreground sm:text-sm">
                      {value.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/ueber-uns"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-primary/25 px-6 py-3.5 text-[0.82rem] font-medium text-primary transition-colors hover:border-primary sm:mt-8"
            >
              Mehr über SENIVIA <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Erfahrungen */}
      <section className="bg-card/60 py-10 sm:py-16">
        <div className="mx-auto max-w-6xl px-5">
          <p className="eyebrow text-bronze">Erfahrungen</p>
          <h2 className="mt-3 text-[1.7rem] leading-tight sm:text-4xl">Was Kundinnen berichten</h2>
          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 md:grid-cols-3">
            {reviews.map((review, i) => (
              <Reveal key={review.author} delay={i * 100} className="h-full">
              <figure className="h-full rounded-[1.25rem] border border-border/70 bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:rounded-[1.5rem] sm:p-7">
                <blockquote className="text-[1rem] leading-relaxed sm:text-lg">„{review.quote}“</blockquote>
                <figcaption className="mt-4 text-[0.8rem] text-muted-foreground sm:mt-5 sm:text-sm">
                  {review.author} · {review.pet}
                </figcaption>
              </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ratgeber */}
      <section className="mx-auto max-w-6xl px-5 py-10 sm:py-16">
        <p className="eyebrow text-bronze">Ratgeber</p>
        <h2 className="mt-3 text-[1.7rem] leading-tight sm:text-4xl">Wissen für die besten Jahre</h2>
        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 md:grid-cols-3">
          {articles.map((article, i) => (
            <Reveal key={article.title} delay={i * 100} className="h-full">
            <article className="group h-full rounded-[1.25rem] bg-secondary/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-secondary sm:rounded-[1.5rem] sm:p-7">
              <p className="eyebrow text-bronze">{article.kicker}</p>
              <h3 className="mt-3 text-[1.1rem] leading-snug sm:text-xl">{article.title}</h3>
              <p className="mt-2.5 text-[0.82rem] leading-relaxed text-muted-foreground sm:mt-3 sm:text-sm">{article.text}</p>
              <Link
                to="/ratgeber"
                className="mt-5 inline-flex items-center gap-1.5 text-[0.8rem] font-medium text-primary"
              >
                Lesen <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Warum SENIVIA */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 items-center gap-x-6 gap-y-3.5 px-5 py-7 sm:flex sm:flex-wrap sm:gap-x-10 sm:gap-y-4 sm:py-8">
          <h2 className="col-span-2 text-xl sm:text-2xl">Warum SENIVIA</h2>
          {[
            "Sorgfältig ausgewählt",
            "Versand aus der Schweiz",
            "Verständlich erklärt",
            "Persönliche Beratung",
          ].map((item) => (
            <span key={item} className="flex min-w-0 items-center gap-2 text-[0.8rem] text-foreground/80 sm:text-sm">
              <Check className="h-4 w-4 shrink-0 text-bronze" strokeWidth={2} />
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Newsletter — Forest-Band */}
      {/* Marken-Laufband */}
      <section className="overflow-hidden border-b border-border bg-secondary/40 py-7 sm:py-9">
        <p className="mb-5 text-center text-[0.66rem] tracking-[0.2em] uppercase text-muted-foreground">
          Marken, denen wir vertrauen
        </p>
        <div className="mask-fade-x">
          <div className="marquee-track gap-10 sm:gap-16">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 items-center gap-10 pr-10 sm:gap-16 sm:pr-16">
                {brandNames.map((brand) => (
                  <span
                    key={`${copy}-${brand}`}
                    className="font-serif text-lg whitespace-nowrap text-foreground/45 transition-colors hover:text-foreground/80 sm:text-2xl"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-forest py-10 text-primary-foreground sm:py-16">
        <Reveal className="mx-auto max-w-2xl px-5 text-center">
          <p className="eyebrow text-primary-foreground/60">Newsletter</p>
          <h2 className="mt-3 text-[1.7rem] leading-tight sm:text-4xl">
            Wertvolle Hinweise für die besten Jahre
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[0.85rem] leading-relaxed text-primary-foreground/75 sm:mt-4 sm:text-sm">
            Etwa einmal im Monat: Pflegehinweise, neue Produkte und ehrliche Empfehlungen.
          </p>
          <form
            className="mx-auto mt-7 flex max-w-md flex-col gap-3 sm:mt-8 sm:flex-row"
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
              className="rounded-full bg-cream px-7 py-4 text-[0.85rem] font-medium text-primary transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
            >
              Anmelden
            </button>
          </form>
        </Reveal>
      </section>
    </>
  );
}
