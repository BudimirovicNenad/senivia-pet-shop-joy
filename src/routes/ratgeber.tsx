import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/ratgeber")({
  head: () => ({
    meta: [
      { title: "Ratgeber für Senior-Tiere — SENIVIA" },
      {
        name: "description",
        content:
          "Ruhige, verlässliche Artikel zum Älterwerden von Hund und Katze: Beweglichkeit, Ernährung, Zahnpflege und Alltag.",
      },
      { property: "og:title", content: "Ratgeber für Senior-Tiere — SENIVIA" },
      {
        property: "og:description",
        content: "Wissen zum Älterwerden von Hund und Katze – sachlich und ohne Alarmismus.",
      },
    ],
  }),
  component: Ratgeber,
});

const articles = [
  {
    kicker: "Beweglichkeit",
    title: "Sieben Zeichen, dass die Gelenke Ihres Hundes Unterstützung brauchen",
    teaser:
      "Zögern vor der Treppe, kürzere Runden, Steifheit nach dem Liegen – worauf Sie im Alltag achten können und wann ein Tierarztbesuch sinnvoll ist.",
    minutes: 6,
  },
  {
    kicker: "Ernährung",
    title: "Was Senior-Futter wirklich anders macht",
    teaser:
      "Weniger Kalorien allein reicht nicht. Protein-Qualität, Phosphorgehalt und Gelenkbausteine sind entscheidender als die Aufschrift auf der Packung.",
    minutes: 8,
  },
  {
    kicker: "Zahnpflege",
    title: "Zahnpflege bei älteren Tieren – ohne Kampf",
    teaser:
      "Eine Routine in kleinen Schritten aufbauen: von der Fingerbürste zur Zahnbürste, und wie Snacks die Zwischentage überbrücken.",
    minutes: 5,
  },
  {
    kicker: "Katze",
    title: "Warum Katzen ihr Alter verstecken",
    teaser:
      "Katzen zeigen Beschwerden spät. Diese leisen Veränderungen im Verhalten sind oft die ersten Hinweise.",
    minutes: 7,
  },
  {
    kicker: "Haut & Fell",
    title: "Stumpfes Fell im Alter: Pflege oder Ernährung?",
    teaser:
      "Meist beides. Wie Omega-3, mildes Shampoo und Bürstenroutine zusammenwirken – und was Sie besser lassen.",
    minutes: 5,
  },
  {
    kicker: "Alltag",
    title: "Die Wohnung altersgerecht einrichten",
    teaser:
      "Rutschfeste Wege, erreichbare Liegeplätze, ruhige Zonen: kleine Anpassungen, die den Tag deutlich leichter machen.",
    minutes: 4,
  },
];

function Ratgeber() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <p className="eyebrow text-bronze">Ratgeber</p>
      <h1 className="mt-4 max-w-2xl text-4xl leading-tight sm:text-5xl">
        Wissen, das im Alltag hilft.
      </h1>
      <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
        Wir schreiben über das Älterwerden von Hund und Katze so, wie wir es selbst gerne lesen
        würden: ruhig, konkret und ohne Panik.
      </p>

      <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <article key={article.title} className="border-t border-border pt-6">
            <p className="eyebrow text-bronze">{article.kicker}</p>
            <h2 className="mt-3 text-xl leading-snug">{article.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{article.teaser}</p>
            <p className="mt-4 text-xs tracking-[0.12em] text-muted-foreground uppercase">
              {article.minutes} Min. Lesezeit · folgt in Kürze
            </p>
          </article>
        ))}
      </div>

      <div className="mt-20 rounded-sm bg-gradient-forest p-10 text-primary-foreground sm:p-14">
        <h2 className="max-w-lg text-3xl leading-tight">
          Unsicher, wo Sie anfangen sollen?
        </h2>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/80">
          Der Produktberater führt Sie in drei Fragen zur passenden Box – ohne Anmeldung.
        </p>
        <Link
          to="/berater"
          className="mt-8 inline-block rounded-sm bg-background px-7 py-4 text-[0.8rem] tracking-[0.16em] text-primary uppercase"
        >
          Berater starten
        </Link>
      </div>
    </div>
  );
}