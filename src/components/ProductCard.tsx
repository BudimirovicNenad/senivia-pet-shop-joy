import { Link } from "@tanstack/react-router";
import { Star, ShoppingBag } from "lucide-react";
import { formatCHF, type Product } from "@/data/products";
import { useCart } from "@/lib/cart";

export function ProductCard({
  product,
  badge,
}: {
  product: Product;
  badge?: string | undefined;
}) {
  const { add } = useCart();

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-border/70 bg-card p-2 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-bronze/40 hover:shadow-lift sm:rounded-3xl sm:p-3">
      <div className="relative overflow-hidden rounded-[1rem] bg-product-canvas sm:rounded-2xl">
        {badge && (
          <span className="absolute top-2 left-2 z-10 rounded-full bg-primary px-2.5 py-1 text-[0.6rem] tracking-wide text-primary-foreground uppercase sm:top-3 sm:left-3 sm:px-3 sm:text-[0.68rem]">
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
            className="aspect-square w-full bg-product-canvas object-contain transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
          />
        </Link>
      </div>
      <div className="flex flex-1 flex-col px-2 pt-3 pb-1 sm:px-2.5 sm:pt-4 sm:pb-2">
        <p className="truncate text-[0.62rem] tracking-[0.1em] whitespace-nowrap text-muted-foreground uppercase sm:text-[0.7rem] sm:tracking-[0.16em]">
          {product.brand}
        </p>
        <h3 className="mt-1.5 line-clamp-2 text-[1rem] leading-snug sm:mt-2 sm:line-clamp-none sm:text-lg">
          <Link to="/produkt/$slug" params={{ slug: product.slug }} className="hover:text-primary">
            {product.name}
          </Link>
        </h3>
        <div className="mt-1.5 flex items-center gap-1.5 sm:mt-2">
          <span className="flex text-bronze">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star
                key={i}
                className="h-3 w-3 sm:h-3.5 sm:w-3.5"
                strokeWidth={1.5}
                fill={i < Math.round(product.rating) ? "currentColor" : "none"}
              />
            ))}
          </span>
          <span className="text-[0.68rem] text-muted-foreground sm:text-xs">({product.reviews})</span>
        </div>
        <p className="mt-1.5 line-clamp-2 text-[0.78rem] leading-snug text-muted-foreground sm:mt-2 sm:line-clamp-none sm:text-sm sm:leading-relaxed">
          {product.tagline}
        </p>
        <div className="mt-auto flex flex-col gap-3 pt-3.5 sm:flex-row sm:items-end sm:justify-between sm:gap-3 sm:pt-5">
          <div className="min-w-0">
            <span className="text-[0.98rem] sm:text-lg">{formatCHF(product.price)}</span>
            <span className="ml-1.5 text-[0.68rem] text-muted-foreground sm:ml-2 sm:text-xs">
              {product.size}
            </span>
          </div>
          <button
            type="button"
            onClick={() => add("product", product.slug)}
            aria-label={`${product.name} in den Warenkorb`}
            className="inline-flex h-10 w-full shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-[0.74rem] font-medium text-primary-foreground transition-all duration-300 hover:bg-forest-deep hover:shadow-lift sm:h-11 sm:w-11 sm:group-hover:scale-105"
          >
            <ShoppingBag className="h-4 w-4 shrink-0 text-primary-foreground sm:h-[1.05rem] sm:w-[1.05rem]" />
            <span className="sm:hidden">In den Warenkorb</span>
          </button>
        </div>
      </div>
    </article>
  );
}