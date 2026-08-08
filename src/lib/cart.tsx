import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { bundles, products, type Bundle, type Product } from "@/data/products";

export type CartLine = { id: string; kind: "product" | "bundle"; qty: number };

type CartContextValue = {
  lines: CartLine[];
  add: (kind: CartLine["kind"], id: string, qty?: number) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  clear: () => void;
  count: number;
  subtotal: number;
  detailed: {
    line: CartLine;
    title: string;
    subtitle: string;
    image: string;
    price: number;
    href: string;
  }[];
};

const STORAGE_KEY = "senivia-cart-v1";
const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setLines(JSON.parse(raw) as CartLine[]);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      /* ignore */
    }
  }, [lines]);

  const add = useCallback((kind: CartLine["kind"], id: string, qty = 1) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.id === id);
      if (existing) {
        return prev.map((l) => (l.id === id ? { ...l, qty: l.qty + qty } : l));
      }
      return [...prev, { id, kind, qty }];
    });
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    setLines((prev) =>
      qty <= 0 ? prev.filter((l) => l.id !== id) : prev.map((l) => (l.id === id ? { ...l, qty } : l)),
    );
  }, []);

  const remove = useCallback((id: string) => {
    setLines((prev) => prev.filter((l) => l.id !== id));
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const value = useMemo<CartContextValue>(() => {
    const detailed = lines
      .map((line) => {
        if (line.kind === "bundle") {
          const bundle: Bundle | undefined = bundles.find((b) => b.slug === line.id);
          if (!bundle) return null;
          return {
            line,
            title: bundle.name,
            subtitle: bundle.subtitle,
            image: bundle.image,
            price: bundle.price,
            href: `/box/${bundle.slug}`,
          };
        }
        const product: Product | undefined = products.find((p) => p.slug === line.id);
        if (!product) return null;
        return {
          line,
          title: product.name,
          subtitle: `${product.brand} · ${product.size}`,
          image: product.image,
          price: product.price,
          href: `/produkt/${product.slug}`,
        };
      })
      .filter((x): x is NonNullable<typeof x> => x !== null);

    return {
      lines,
      add,
      setQty,
      remove,
      clear,
      count: lines.reduce((n, l) => n + l.qty, 0),
      subtotal: detailed.reduce((sum, d) => sum + d.price * d.line.qty, 0),
      detailed,
    };
  }, [lines, add, setQty, remove, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}