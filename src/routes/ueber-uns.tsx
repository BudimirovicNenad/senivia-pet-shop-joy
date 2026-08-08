import { createFileRoute, Link } from "@tanstack/react-router";
import catImage from "@/assets/cat-senior.jpg";

export const Route = createFileRoute("/ueber-uns")({
  head: () => ({
    meta: [
      { title: "Über SENIVIA — Pflege für die zweite Lebenshälfte" },
      {
        name: "description",
        content:
          "SENIVIA kuratiert Premium-Produkte für ältere Hunde und Katzen: sorgfältig ausgewählt, klar erklärt, in der Schweiz versandt.",
      },
      { property: "og:title", content: "Über SENIVIA" },
      {
        property: "og:description",
        content: "Warum wir uns auf Tiere in der zweiten Lebenshälfte konzentrieren.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="eyebrow text-bronze">Über uns</p>
        <h1 className="mt-4 text-4xl leading-tight sm:text-5xl">
          Älter werden ist keine Krankheit.
        </h1>
        <div className="rule-bronze mt-8" />
        <div className="mt-8 space-y-6 text-[1.02rem] leading-relaxed">
          <p>
            SENIVIA ist aus einer einfachen Beobachtung entstanden: Für Welpen und Kitten gibt es
            unzählige Produkte – für Tiere in der zweiten Lebenshälfte kaum Orientierung. Dabei
            beginnt genau dann die Zeit, in der die richtige Auswahl den Alltag am meisten
            verändert.
          </p>
          <p>
            Wir kuratieren, wir produzieren nicht. Jedes Produkt in unserem Sortiment stammt von
            Herstellern, die wir für ihre Rezepturen und ihre Transparenz schätzen – und wird von
            uns zu Sets zusammengestellt, die zusammen wirken statt sich zu überschneiden.
          </p>
          <p>
            Unser Ton bleibt dabei bewusst ruhig. Kein Alarmismus, keine Versprechen von Heilung.
            Ergänzung und Pflege können viel bewirken, ersetzen aber nie die Tierärztin oder den
            Tierarzt. Was wir liefern, ist eine gute Grundlage – und Erklärungen, die man versteht.
          </p>
        </div>

        <img
          src={catImage}
          alt="Ältere Katze ruht in einem hellen Wohnraum"
          loading="lazy"
          width={1200}
          height={900}
          className="mt-12 w-full rounded-sm object-cover shadow-soft"
        />

        <dl className="mt-14 grid gap-8 sm:grid-cols-3">
          <div>
            <dt className="eyebrow text-muted-foreground">Kuratiert</dt>
            <dd className="mt-2 text-sm leading-relaxed">
              12 Produkte statt tausend – jedes mit einem klaren Zweck.
            </dd>
          </div>
          <div>
            <dt className="eyebrow text-muted-foreground">Versand</dt>
            <dd className="mt-2 text-sm leading-relaxed">
              Aus der Schweiz, kostenlos ab CHF 79, in 2–4 Werktagen.
            </dd>
          </div>
          <div>
            <dt className="eyebrow text-muted-foreground">Beratung</dt>
            <dd className="mt-2 text-sm leading-relaxed">
              Fragen zu einem Produkt? Schreiben Sie uns – wir antworten persönlich.
            </dd>
          </div>
        </dl>

        <div className="mt-14 flex flex-wrap gap-3">
          <Link
            to="/box"
            className="rounded-sm bg-primary px-7 py-4 text-[0.8rem] tracking-[0.16em] text-primary-foreground uppercase"
          >
            Boxen ansehen
          </Link>
          <Link
            to="/berater"
            className="rounded-sm border border-primary px-7 py-4 text-[0.8rem] tracking-[0.16em] text-primary uppercase"
          >
            Berater starten
          </Link>
        </div>
      </div>
    </div>
  );
}