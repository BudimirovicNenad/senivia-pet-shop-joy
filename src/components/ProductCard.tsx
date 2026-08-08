import { Link } from "@tanstack/react-router";
import { formatCHF, type Product } from "@/data/products";
import { useCart } from "@/lib/cart";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();

  return (
    <article className="group flex flex-col overflow-hidden rounded-sm border border-border bg-card shadow-soft transition-shadow hover:shadow-lift">
      <Link
        to="/produkt/$slug"
        params={{ slug: product.slug }}
        className="block overflow-hidden bg-secondary/40"
      >
        <img
          src={product.image}
          alt={`${product.brand} ${product.name}`}
          loading="lazy"
          width={800}
          height={800}
          className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="eyebrow text-muted-foreground">{product.brand}</p>
        <h3 className="mt-2 text-lg leading-snug">
          <Link to="/produkt/$slug" params={{ slug: product.slug }} className="hover:text-primary">
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.tagline}</p>
        <div className="mt-auto pt-5">
          <div className="flex items-baseline justify-between">
            <span className="text-base">{formatCHF(product.price)}</span>
            <span className="text-xs text-muted-foreground">{product.size}</span>
          </div>
          <button
            type="button"
            onClick={() => add("product", product.slug)}
            className="mt-4 w-full rounded-sm bg-primary px-4 py-3 text-[0.8rem] tracking-[0.14em] text-primary-foreground uppercase transition-colors hover:bg-forest-deep"
          >
            In den Warenkorb
          </button>
        </div>
      </div>
    </article>
  );
}