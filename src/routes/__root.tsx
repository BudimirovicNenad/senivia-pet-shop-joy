import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { CartProvider } from "@/lib/cart";
import { FavoritesProvider } from "@/lib/favorites";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

function NotFoundComponent() {
  return (
    <div className="bg-grain flex min-h-[70vh] items-center justify-center px-5 py-16">
      <div className="w-full max-w-xl text-center">
        <p className="eyebrow text-bronze">Fehler 404</p>
        <p className="mt-6 font-serif text-[5.5rem] leading-none text-forest sm:text-[8rem]">404</p>
        <h1 className="mt-4 text-[1.7rem] leading-tight sm:text-4xl">Diese Seite gibt es nicht</h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
          Die Seite wurde verschoben oder existiert nicht mehr. Hier finden Sie zurück zu unseren
          Produkten für ältere Hunde und Katzen.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="rounded-full bg-primary px-7 py-3.5 text-[0.78rem] tracking-[0.16em] text-primary-foreground uppercase transition-colors hover:bg-forest-deep"
          >
            Zur Startseite
          </Link>
          <Link
            to="/shop"
            className="rounded-full border border-primary px-7 py-3.5 text-[0.78rem] tracking-[0.16em] text-primary uppercase"
          >
            Shop ansehen
          </Link>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
          <Link to="/box" className="underline underline-offset-4">
            SENIVIA Box
          </Link>
          <Link to="/berater" className="underline underline-offset-4">
            Produktberater
          </Link>
          <Link to="/favoriten" className="underline underline-offset-4">
            Favoriten
          </Link>
          <Link to="/konto" className="underline underline-offset-4">
            Mein Konto
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SENIVIA — Premium für ältere Hunde & Katzen" },
      {
        name: "description",
        content:
          "Sorgfältig ausgewählte Schweizer Premium-Produkte für ältere Hunde und Katzen: Beweglichkeit, Ernährung, Pflege und Zahnpflege.",
      },
      { name: "author", content: "SENIVIA" },
      { property: "og:title", content: "SENIVIA — Premium für ältere Hunde & Katzen" },
      {
        property: "og:description",
        content: "Für noch viele schöne Jahre mit dir. Premium-Pflege für Senior-Hunde und -Katzen.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap",
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <FavoritesProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
              <Outlet />
            </main>
            <Footer />
          </div>
        </FavoritesProvider>
      </CartProvider>
    </QueryClientProvider>
  );
}
