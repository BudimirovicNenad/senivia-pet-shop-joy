import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export function ProductGallery({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(false);
  const count = images.length;
  const go = (dir: number) => setActive((i) => (i + dir + count) % count);
  const [touchX, setTouchX] = useState<number | null>(null);

  useEffect(() => {
    if (!zoom) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoom(false);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [zoom, count]);

  return (
    <div>
      <div
        className="group relative overflow-hidden rounded-[1.25rem] bg-card shadow-soft sm:rounded-3xl"
        onTouchStart={(e) => setTouchX(e.touches[0]?.clientX ?? null)}
        onTouchEnd={(e) => {
          if (touchX === null) return;
          const dx = (e.changedTouches[0]?.clientX ?? touchX) - touchX;
          if (Math.abs(dx) > 45) go(dx < 0 ? 1 : -1);
          setTouchX(null);
        }}
      >
        <button
          type="button"
          onClick={() => setZoom(true)}
          className="block w-full cursor-zoom-in"
          aria-label="Bild vergrössern"
        >
          <img
            src={images[active]}
            alt={`${alt} – Bild ${active + 1}`}
            width={1000}
            height={1000}
            className="aspect-square w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
          />
        </button>
        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Vorheriges Bild"
              className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-background/85 p-2.5 text-foreground shadow-soft transition-colors hover:bg-background sm:left-3"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Nächstes Bild"
              className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-background/85 p-2.5 text-foreground shadow-soft transition-colors hover:bg-background sm:right-3"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            <span className="absolute right-3 bottom-3 rounded-full bg-background/85 px-2.5 py-1 text-[0.65rem] text-muted-foreground">
              {active + 1} / {count}
            </span>
          </>
        )}
      </div>

      {count > 1 && (
        <div className="mt-3 grid grid-cols-5 gap-2 sm:mt-4 sm:gap-3">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Bild ${i + 1} anzeigen`}
              aria-current={i === active}
              className={`aspect-square w-full overflow-hidden rounded-xl border transition-all ${
                i === active
                  ? "border-bronze ring-1 ring-bronze/40"
                  : "border-border/70 opacity-75 hover:opacity-100"
              }`}
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {zoom && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4 backdrop-blur-sm"
          onClick={() => setZoom(false)}
        >
          <button
            type="button"
            aria-label="Schliessen"
            onClick={() => setZoom(false)}
            className="absolute top-5 right-5 rounded-full bg-background/90 p-2.5 text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={images[active]}
            alt={`${alt} – Bild ${active + 1}`}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-full rounded-2xl object-contain"
          />
        </div>
      )}
    </div>
  );
}