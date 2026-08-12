import { Heart } from "lucide-react";
import { useFavorites } from "@/lib/favorites";

export function FavoriteButton({ slug, label }: { slug: string; label: string }) {
  const { has, toggle } = useFavorites();
  const active = has(slug);

  return (
    <button
      type="button"
      onClick={() => toggle(slug)}
      aria-pressed={active}
      aria-label={active ? `${label} von Favoriten entfernen` : `${label} zu Favoriten hinzufügen`}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-card/90 backdrop-blur transition-colors hover:border-bronze/60"
    >
      <Heart
        className={`h-[1.05rem] w-[1.05rem] transition-colors ${active ? "text-bronze" : "text-muted-foreground"}`}
        strokeWidth={1.6}
        fill={active ? "currentColor" : "none"}
      />
    </button>
  );
}