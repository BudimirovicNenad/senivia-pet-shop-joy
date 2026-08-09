import { Link } from "@tanstack/react-router";
import { Star, ShoppingBag } from "lucide-react";
import { formatCHF, type Product } from "@/data/products";
import { useCart } from "@/lib/cart";

export function ProductCard({ product, badge }: { product: Product; badge?: string }) {
  const { add } = useCart();

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-border/70 bg-card p-3 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift">
      <div className="relative overflow-hidden rounded-2xl bg-secondary/40">
        {badge && (
          <span className="absolute top-3 left-3 z-10 rounded-full bg-primary px-3 py-1 text-[0.68rem] tracking-wide text-primary-foreground uppercase">
            {badge}
          </span>
        )}
        <Link to="/produkt/$slug" params={{ slug: product.slug }} className="block">
          <img
            src={product.image}
            alt={`${product.brand} ${product.name}`}
            loading="lazy"
            width={800}
            height={800}
            className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        </Link>
      </div>
      <div className="flex flex-1 flex-col px-2.5 pt-4 pb-2">
        <p className="text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase">
          {product.brand}
        </p>
        <h3 className="mt-2 text-lg leading-snug">
          <Link to="/produkt/$slug" params={{ slug: product.slug }} className="hover:text-primary">
            {product.name}
          </Link>
        </h3>
        <div className="mt-2 flex items-center gap-1.5">
          <span className="flex text-bronze">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star
                key={i}
                className="h-3.5 w-3.5"
                strokeWidth={1.5}
                fill={i < Math.round(product.rating) ? "currentColor" : "none"}
              />
            ))}
          </span>
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.tagline}</p>
        <div className="mt-auto flex items-end justify-between gap-3 pt-5">
          <div>
            <span className="text-lg">{formatCHF(product.price)}</span>
            <span className="ml-2 text-xs text-muted-foreground">{product.size}</span>
          </div>
          <button
            type="button"
            onClick={() => add("product", product.slug)}
            aria-label={`${product.name} in den Warenkorb`}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-forest-deep"
          >
            <ShoppingBag className="h-[1.05rem] w-[1.05rem]" />
          </button>
        </div>
      </div>
    </article>
  );
}