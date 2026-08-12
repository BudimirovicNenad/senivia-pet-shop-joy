import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Heart, MapPin, Package, PawPrint, Settings, User } from "lucide-react";
import { formatCHF } from "@/data/products";
import { demoAddresses, demoCustomer, demoOrders } from "@/data/account";
import { useFavorites } from "@/lib/favorites";

export const Route = createFileRoute("/konto")({
  head: () => ({
    meta: [
      { title: "Mein Konto — SENIVIA" },
      {
        name: "description",
        content: "Bestellungen, Adressen, Tierprofil und Einstellungen in Ihrem SENIVIA Kundenkonto.",
      },
      { property: "og:title", content: "Mein Konto — SENIVIA" },
      { property: "og:description", content: "Ihr persönlicher SENIVIA Kundenbereich." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AccountPage,
});

const tabs = [
  { id: "overview", label: "Übersicht", icon: User },
  { id: "orders", label: "Bestellungen", icon: Package },
  { id: "addresses", label: "Adressen", icon: MapPin },
  { id: "settings", label: "Einstellungen", icon: Settings },
] as const;

type TabId = (typeof tabs)[number]["id"];

function AccountPage() {
  const [tab, setTab] = useState<TabId>("overview");
  const { count: favCount } = useFavorites();

  return (
    <div className="bg-grain">
      <section className="border-b border-border bg-forest text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-5 px-5 py-10 sm:py-14">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/12 text-2xl">
            {demoCustomer.firstName[0]}
            {demoCustomer.lastName[0]}
          </span>
          <div className="min-w-0">
            <p className="eyebrow text-primary-foreground/70">Mein Konto</p>
            <h1 className="mt-2 text-[1.8rem] leading-tight sm:text-4xl">
              Willkommen zurück, {demoCustomer.firstName}
            </h1>
            <p className="mt-2 text-sm text-primary-foreground/75">
              Kunde seit {demoCustomer.memberSince} · {demoCustomer.email}
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 py-10 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-12">
          <nav className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => setTab(id)}
                className={`inline-flex shrink-0 items-center gap-2.5 rounded-full px-4 py-2.5 text-sm transition-colors lg:justify-start ${
                  tab === id
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-card text-foreground hover:border-bronze/50"
                }`}
              >
                <Icon className="h-4 w-4" strokeWidth={1.6} />
                {label}
              </button>
            ))}
            <Link
              to="/favoriten"
              className="inline-flex shrink-0 items-center gap-2.5 rounded-full border border-border bg-card px-4 py-2.5 text-sm hover:border-bronze/50"
            >
              <Heart className="h-4 w-4" strokeWidth={1.6} />
              Favoriten
              {favCount > 0 && (
                <span className="rounded-full bg-sage/40 px-2 text-[0.7rem]">{favCount}</span>
              )}
            </Link>
          </nav>

          <div>
            {tab === "overview" && <Overview favCount={favCount} />}
            {tab === "orders" && <Orders />}
            {tab === "addresses" && <Addresses />}
            {tab === "settings" && <SettingsPanel />}
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-[1.25rem] border border-border bg-card p-5 shadow-soft sm:rounded-3xl sm:p-7 ${className}`}
    >
      {children}
    </div>
  );
}

function Overview({ favCount }: { favCount: number }) {
  const last = demoOrders[0];
  return (
    <div className="grid gap-5 sm:gap-6">
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <p className="eyebrow text-bronze">Bestellungen</p>
          <p className="mt-3 text-3xl">{demoOrders.length}</p>
        </Card>
        <Card>
          <p className="eyebrow text-bronze">Favoriten</p>
          <p className="mt-3 text-3xl">{favCount}</p>
        </Card>
        <Card>
          <p className="eyebrow text-bronze">Treuepunkte</p>
          <p className="mt-3 text-3xl">{demoCustomer.points}</p>
        </Card>
      </div>

      <Card>
        <div className="flex items-start gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sage/25">
            <PawPrint className="h-5 w-5 text-forest" strokeWidth={1.6} />
          </span>
          <div>
            <h2 className="text-xl">Tierprofil</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {demoCustomer.petName} · {demoCustomer.petType} · {demoCustomer.petAge}
            </p>
            <Link
              to="/berater"
              className="mt-4 inline-block text-xs tracking-wide text-primary underline underline-offset-4"
            >
              Empfehlung aktualisieren
            </Link>
          </div>
        </div>
      </Card>

      {last && (
        <Card>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-xl">Letzte Bestellung</h2>
            <span className="rounded-full bg-sage/30 px-3 py-1 text-[0.7rem] tracking-wide uppercase">
              {last.status}
            </span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            {last.id} · {last.date} · {formatCHF(last.total)}
          </p>
          <ul className="mt-4 space-y-1.5 text-sm">
            {last.items.map((it) => (
              <li key={it.title} className="text-muted-foreground">
                {it.qty}× {it.title}
              </li>
            ))}
          </ul>
        </Card>
      )}
    </div>
  );
}

function Orders() {
  return (
    <div className="grid gap-4 sm:gap-5">
      <h2 className="text-2xl">Bestellungen</h2>
      {demoOrders.map((order) => (
        <Card key={order.id}>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-[1.05rem]">{order.id}</p>
              <p className="mt-1 text-xs text-muted-foreground">{order.date}</p>
            </div>
            <span className="rounded-full bg-sage/30 px-3 py-1 text-[0.7rem] tracking-wide uppercase">
              {order.status}
            </span>
          </div>
          <ul className="mt-4 space-y-1.5 border-t border-border pt-4 text-sm text-muted-foreground">
            {order.items.map((it) => (
              <li key={it.title}>
                {it.qty}× {it.title}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
            <p className="text-sm">Total {formatCHF(order.total)}</p>
            <button
              type="button"
              className="rounded-full border border-primary px-5 py-2 text-[0.72rem] tracking-[0.14em] text-primary uppercase"
            >
              Erneut kaufen
            </button>
          </div>
        </Card>
      ))}
    </div>
  );
}

function Addresses() {
  return (
    <div className="grid gap-4 sm:gap-5">
      <h2 className="text-2xl">Adressen</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {demoAddresses.map((a) => (
          <Card key={a.id}>
            <div className="flex items-center justify-between gap-3">
              <p className="eyebrow text-bronze">{a.label}</p>
              {a.primary && (
                <span className="rounded-full bg-sage/30 px-2.5 py-1 text-[0.65rem] tracking-wide uppercase">
                  Standard
                </span>
              )}
            </div>
            <p className="mt-4 text-[1.02rem]">{a.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {a.street}
              <br />
              {a.city}
              <br />
              {a.country}
            </p>
            <button
              type="button"
              className="mt-5 text-xs tracking-wide text-primary underline underline-offset-4"
            >
              Bearbeiten
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
}

function SettingsPanel() {
  const [newsletter, setNewsletter] = useState(true);
  const [reminders, setReminders] = useState(false);

  return (
    <div className="grid gap-4 sm:gap-5">
      <h2 className="text-2xl">Einstellungen</h2>
      <Card>
        <h3 className="text-lg">Persönliche Daten</h3>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <Field label="Vorname" value={demoCustomer.firstName} />
          <Field label="Nachname" value={demoCustomer.lastName} />
          <Field label="E-Mail" value={demoCustomer.email} />
          <Field label="Telefon" value={demoCustomer.phone} />
        </div>
        <button
          type="button"
          className="mt-6 rounded-full bg-primary px-6 py-3 text-[0.75rem] tracking-[0.16em] text-primary-foreground uppercase"
        >
          Speichern
        </button>
      </Card>
      <Card>
        <h3 className="text-lg">Benachrichtigungen</h3>
        <div className="mt-5 space-y-4">
          <Toggle
            label="SENIVIA Newsletter"
            hint="Pflegetipps und neue Produkte, max. 1× pro Monat."
            checked={newsletter}
            onChange={setNewsletter}
          />
          <Toggle
            label="Nachfüll-Erinnerung"
            hint="Erinnerung, wenn eine Kur zu Ende geht."
            checked={reminders}
            onChange={setReminders}
          />
        </div>
      </Card>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <label className="block">
      <span className="text-[0.7rem] tracking-[0.14em] text-muted-foreground uppercase">
        {label}
      </span>
      <input
        defaultValue={value}
        className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-bronze"
      />
    </label>
  );
}

function Toggle({
  label,
  hint,
  checked,
  onChange,
}: {
  label: string;
  hint: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="flex w-full items-start justify-between gap-4 text-left"
    >
      <span>
        <span className="block text-sm">{label}</span>
        <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">{hint}</span>
      </span>
      <span
        className={`mt-0.5 flex h-6 w-11 shrink-0 items-center rounded-full p-0.5 transition-colors ${
          checked ? "bg-primary" : "bg-border"
        }`}
      >
        <span
          className={`h-5 w-5 rounded-full bg-card transition-transform ${checked ? "translate-x-5" : ""}`}
        />
      </span>
    </button>
  );
}