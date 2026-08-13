import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Truck,
  RotateCcw,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  Leaf,
  PawPrint,
  Utensils,
  Smile,
  Droplets,
  ArrowRight,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
          "Schweizer Premium-Shop für ältere Hunde und Katzen: drei sorgfältig zusammengestellte Boxen für Beweglichkeit, Verdauung und Zahnpflege.",
      },
      { property: "og:title", content: "SENIVIA — Für noch viele schöne Jahre mit dir" },
      {
        property: "og:description",
        content: "Sorgfältig zusammengestellte Boxen für mehr Wohlbefinden im höheren Alter.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const advantages = [
  { icon: Leaf, title: "Sorgfältig ausgewählt", text: "Nur Produkte, deren Zusammensetzung wir erklären können." },
  { icon: Truck, title: "Gratis Versand ab CHF 79", text: "Versand aus der Schweiz." },
  { icon: RotateCcw, title: "30 Tage Rückgabe", text: "Unkompliziert und kostenlos." },
  { icon: ShieldCheck, title: "Sichere Bezahlung", text: "Verschlüsselt, auch als Gast." },
  { icon: HeartHandshake, title: "Persönliche Beratung", text: "Ruhige, ehrliche Antworten." },
  { icon: Sparkles, title: "Für die zweite Lebenshälfte", text: "Ein Sortiment mit klarem Fokus: gute Tage." },
];

const boxBenefit: Record<string, string> = {
  "senior-mobility": "Für mehr Beweglichkeit und Vitalität im Alltag.",
  "darm-sensitiv": "Für sensible Verdauung, Haut und Wohlbefinden.",
  "zahn-atem": "Für eine sanfte und stressarme Zahnpflege.",
};

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

const faqs = [
  {
    question: "Wie wähle ich die richtige SENIVIA Box?",
    answer:
      "Die drei Boxen decken die häufigsten Bedürfnisse im höheren Alter ab. Unsicher? Der Produktberater stellt Ihnen in wenigen Schritten die passende Box zusammen.",
  },
  {
    question: "Für welches Alter ist SENIVIA gedacht?",
    answer:
      "Unser Sortiment ist für gesunde Hunde und Katzen ab etwa 7 Jahren gedacht, die mehr Wohlbefinden, Beweglichkeit und sanfte Pflege im Alltag verdienen.",
  },
  {
    question: "Was ist der Unterschied zwischen einer Box und dem Einzelkauf?",
    answer:
      "Jede Box enthält eine aufeinander abgestimmte Auswahl passender Produkte – einfacher, günstiger und als komplettes Geschenkset verpackt.",
  },
  {
    question: "Wie funktioniert der Produktberater?",
    answer:
      "Sie beantworten einige ruhige Fragen zu Tierart, Alter und aktuellem Bedürfnis. Am Ende erhalten Sie eine transparente Empfehlung, ohne Zwang und ohne tierärztliche Diagnose.",
  },
];

function Home() {

  const bestsellerSlugs = [
    "gelenk-gewebe-formel",
    "healthy-ageing",
    "sensitive-skin-stomach-lamm",
    "zahnpasta-2-in-1",
  ];
  const bestsellers = bestsellerSlugs
    .map((slug) => products.find((p) => p.slug === slug)!)
    .filter(Boolean);

  const scrollToBoxes = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.getElementById("senivia-boxen")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Hero — kompakt */}
      <section className="relative isolate flex min-h-[26rem] items-center overflow-hidden sm:min-h-[28rem]">
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
        <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:py-14">
          <div className="max-w-xl text-primary-foreground">
            <h1 className="text-[2.15rem] leading-[1.06] font-medium sm:text-[2.9rem] lg:text-[3.35rem]">
              Für noch viele schöne Jahre mit dir.
            </h1>
            <p className="mt-4 max-w-lg text-[0.92rem] leading-relaxed text-primary-foreground/85 sm:text-[1rem]">
              Sorgfältig zusammengestellte Boxen für Beweglichkeit, Verdauung und Zahnpflege im
              höheren Alter.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#senivia-boxen"
                onClick={scrollToBoxes}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-cream px-7 py-3.5 text-[0.85rem] font-medium text-primary shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
              >
                Box auswählen
                <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <Link
                to="/berater"
                className="rounded-full border border-primary-foreground/45 px-7 py-3.5 text-center text-[0.85rem] font-medium text-primary-foreground backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-foreground hover:bg-primary-foreground/10"
              >
                Produktberater
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Boxen — Hauptangebot */}
      <section id="senivia-boxen" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-10 sm:py-14">
        <p className="eyebrow text-bronze">SENIVIA Box</p>
        <h2 className="mt-3 max-w-xl text-[1.7rem] leading-tight sm:text-4xl">
          Drei Boxen. Eine klare Auswahl.
        </h2>
        <p className="mt-3 max-w-xl text-[0.85rem] leading-relaxed text-muted-foreground sm:text-sm">
          Abgestimmt auf die häufigsten Bedürfnisse im höheren Alter.
        </p>
        <div className="mt-7 grid gap-4 sm:mt-9 sm:gap-6 md:grid-cols-3">
          {bundles.map((bundle, i) => {
            const value = bundleValue(bundle);
            return (
              <Reveal key={bundle.slug} delay={i * 100} className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border/70 bg-card p-3 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-bronze/40 hover:shadow-lift">
                  <Link
                    to="/box/$slug"
                    params={{ slug: bundle.slug }}
                    className="group block overflow-hidden rounded-2xl"
                  >
                    <img
                      src={bundle.image}
                      alt={bundle.name}
                      loading={i === 0 ? "eager" : "lazy"}
                      width={1200}
                      height={900}
                      className="aspect-[4/3] w-full bg-product-canvas object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col px-2 pt-4 pb-1 sm:px-3">
                    <h3 className="text-lg leading-snug sm:text-xl">
                      <Link to="/box/$slug" params={{ slug: bundle.slug }} className="hover:text-bronze">
                        {bundle.name}
                      </Link>
                    </h3>
                    <p className="mt-2 text-[0.82rem] leading-relaxed text-muted-foreground sm:text-sm">
                      {boxBenefit[bundle.slug] ?? bundle.subtitle}
                    </p>
                    <p className="mt-4 text-lg">
                      {formatCHF(bundle.price)}
                      {value > bundle.price ? (
                        <span className="ml-2 text-xs text-muted-foreground line-through">
                          {formatCHF(value)}
                        </span>
                      ) : null}
                    </p>
                    <Link
                      to="/box/$slug"
                      params={{ slug: bundle.slug }}
                      className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-[0.82rem] font-medium text-primary-foreground transition-opacity hover:opacity-90"
                    >
                      Box auswählen <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Hund / Katze */}
      <section className="mx-auto max-w-6xl px-5 py-10 sm:py-14">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="eyebrow text-bronze">Spezialisierte Pflege</span>
          <h2 className="mt-3 text-[1.7rem] leading-tight sm:text-4xl">Für Ihren treuen Begleiter</h2>
        </Reveal>
        <div className="mt-7 grid grid-cols-1 gap-4 sm:mt-9 sm:grid-cols-2 sm:gap-6">
          {[
            {
              to: "/hund" as const,
              image: heroImage,
              alt: "Glücklicher älterer Hund in warmem Licht",
              title: "Für ältere Hunde",
              text: "Gelenke, Ernährung, Pflege und spezialisierte Zahnpflege für Senioren.",
              position: "object-[60%_center]",
            },
            {
              to: "/katze" as const,
              image: catImage,
              alt: "Ältere Katze in Ruhe",
              title: "Für ältere Katzen",
              text: "Milde Rezepturen und stressfreie Pflege für Katzen-Senioren.",
              position: "object-center",
            },
          ].map((card, i) => (
            <Reveal key={card.to} delay={100 + i * 100} className="h-full">
              <Link
                to={card.to}
                className="group relative isolate block h-full min-h-[16rem] overflow-hidden rounded-[1.5rem] transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:min-h-[20rem]"
              >
                <img
                  src={card.image}
                  alt={card.alt}
                  loading="lazy"
                  width={1600}
                  height={1104}
                  className={`absolute inset-0 -z-20 h-full w-full object-cover ${card.position} transition-transform duration-700 group-hover:scale-105`}
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary/90 via-primary/35 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                  <h3 className="text-2xl font-medium text-primary-foreground sm:text-3xl">
                    {card.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-primary-foreground/80">
                    {card.text}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 self-start rounded-full bg-cream px-5 py-3 text-[0.82rem] font-medium text-primary">
                    Entdecken
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Nach Bedarf */}
      <section className="bg-secondary/45 bg-grain py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="mx-auto max-w-xl text-center">
            <p className="eyebrow text-bronze">Nach Bedarf einkaufen</p>
            <h2 className="mt-3 text-[1.7rem] leading-tight sm:text-4xl">
              Wählen Sie, was Ihr Tier jetzt braucht.
            </h2>
          </Reveal>
          <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-9 sm:gap-4 md:grid-cols-3">
            {needs.map((need, i) => (
              <Reveal key={need.id} delay={(i % 3) * 90} className="h-full">
                <Link
                  to="/shop"
                  search={{ bedarf: need.id }}
                  className="group flex h-full items-center gap-3 rounded-[1.25rem] border border-border/70 bg-card px-4 py-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-bronze/40 hover:shadow-lift sm:px-5"
                >
                  {(() => {
                    const Icon = needIcon[need.id] ?? Sparkles;
                    return (
                      <span
                        className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-primary transition-transform duration-300 group-hover:scale-110 ${needTint[need.id] ?? "bg-secondary"}`}
                      >
                        <Icon className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.6} />
                      </span>
                    );
                  })()}
                  <span className="min-w-0">
                    <span className="block text-[0.95rem] leading-snug font-medium sm:text-[1.05rem]">
                      {need.label}
                    </span>
                    <span className="mt-0.5 hidden text-[0.78rem] leading-snug text-muted-foreground sm:block">
                      {need.description}
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bestseller */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="mx-auto max-w-xl text-center">
            <p className="eyebrow text-bronze">Beliebt bei unseren Kundinnen</p>
            <h2 className="mt-3 text-[1.7rem] leading-tight sm:text-4xl">Häufig gewählt</h2>
          </Reveal>
          <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-9 sm:gap-6 md:grid-cols-4">
            {bestsellers.slice(0, 4).map((product, i) => (
              <Reveal key={product.slug} delay={i * 90} className="h-full">
                <ProductCard product={product} badge={i === 0 ? "Bestseller" : undefined} />
              </Reveal>
            ))}
          </div>
          <div className="mt-8 text-center">
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

      {/* Produktberater */}
      <section className="mx-auto max-w-6xl px-5 py-10 sm:py-14">
        <div className="flex flex-col items-start gap-6 rounded-[1.5rem] bg-gradient-forest px-6 py-9 text-primary-foreground sm:rounded-[2rem] sm:px-8 sm:py-11 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div>
            <p className="eyebrow text-primary-foreground/60">Produktberater</p>
            <h2 className="mt-3 max-w-lg text-[1.7rem] leading-tight sm:text-4xl">
              Noch unsicher, welche Box passt?
            </h2>
            <p className="mt-3 max-w-lg text-[0.85rem] leading-relaxed text-primary-foreground/75 sm:text-sm">
              Wenige ruhige Fragen – am Ende sehen Sie, was zu Tierart, Alter und Bedürfnis passt.
              Eine Kaufhilfe, keine tierärztliche Diagnose.
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

      {/* Vorteile */}
      <section className="border-y border-border bg-card py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="mx-auto max-w-xl text-center">
            <p className="eyebrow text-bronze">Warum SENIVIA</p>
            <h2 className="mt-3 text-[1.7rem] leading-tight sm:text-4xl">
              Älter werden ist keine Krankheit.
            </h2>
          </Reveal>
          <div className="mt-7 grid gap-x-8 gap-y-5 sm:mt-9 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 80} className="flex gap-3.5">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage/25 text-primary">
                  <item.icon className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.6} />
                </span>
                <span className="min-w-0">
                  <span className="block text-[1rem] font-medium">{item.title}</span>
                  <span className="mt-1 block text-[0.82rem] leading-relaxed text-muted-foreground">
                    {item.text}
                  </span>
                </span>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/ueber-uns"
              className="inline-flex items-center gap-2 rounded-full border border-primary/25 px-6 py-3.5 text-[0.82rem] font-medium text-primary transition-colors hover:border-primary"
            >
              Mehr über SENIVIA <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-3xl px-5">
          <Reveal className="text-center">
            <p className="eyebrow text-bronze">Fragen & Antworten</p>
            <h2 className="mt-3 text-[1.7rem] leading-tight sm:text-4xl">
              Kurz erklärt.
            </h2>
          </Reveal>
          <Reveal delay={100} className="mt-7 sm:mt-9">
            <Accordion type="single" collapsible className="rounded-[1.5rem] border border-border/70 bg-card p-4 sm:p-6">
              {faqs.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-[0.95rem] font-medium sm:text-[1.05rem]">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[0.85rem] leading-relaxed text-muted-foreground sm:text-sm">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* Erfahrungen */}

      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="mx-auto max-w-xl text-center">
            <p className="eyebrow text-bronze">Erfahrungen</p>
            <h2 className="mt-3 text-[1.7rem] leading-tight sm:text-4xl">Was Kundinnen berichten</h2>
          </Reveal>
          <div className="mt-7 grid gap-4 sm:mt-9 sm:grid-cols-2 sm:gap-6 md:grid-cols-3">
            {reviews.map((review, i) => (
              <Reveal key={review.author} delay={i * 90} className="h-full">
                <figure className="h-full rounded-[1.25rem] border border-border/70 bg-card p-5 sm:p-6">
                  <blockquote className="text-[0.95rem] leading-relaxed sm:text-base">
                    „{review.quote}“
                  </blockquote>
                  <figcaption className="mt-4 text-[0.8rem] text-muted-foreground">
                    {review.author} · {review.pet}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gradient-forest py-10 text-primary-foreground sm:py-14">
        <Reveal className="mx-auto max-w-2xl px-5 text-center">
          <p className="eyebrow text-primary-foreground/60">Newsletter</p>
          <h2 className="mt-3 text-[1.7rem] leading-tight sm:text-4xl">
            Wertvolle Hinweise für die besten Jahre
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[0.85rem] leading-relaxed text-primary-foreground/75 sm:text-sm">
            Etwa einmal im Monat: Pflegehinweise, neue Produkte und ehrliche Empfehlungen.
          </p>
          <form
            className="mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row"
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
