import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type FavoritesContextValue = {
  ids: string[];
  has: (slug: string) => boolean;
  toggle: (slug: string) => void;
  remove: (slug: string) => void;
  clear: () => void;
  count: number;
};

const STORAGE_KEY = "senivia-favorites-v1";
const FavoritesContext = createContext<FavoritesContextValue | null>(null);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [ids, setIds] = useState<string[]>([]);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setIds(JSON.parse(raw) as string[]);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
    } catch {
      /* ignore */
    }
  }, [ids]);

  const toggle = useCallback((slug: string) => {
    setIds((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]));
  }, []);

  const remove = useCallback((slug: string) => {
    setIds((prev) => prev.filter((s) => s !== slug));
  }, []);

  const clear = useCallback(() => setIds([]), []);

  const value = useMemo<FavoritesContextValue>(
    () => ({
      ids,
      has: (slug: string) => ids.includes(slug),
      toggle,
      remove,
      clear,
      count: ids.length,
    }),
    [ids, toggle, remove, clear],
  );

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error("useFavorites must be used within FavoritesProvider");
  return ctx;
}