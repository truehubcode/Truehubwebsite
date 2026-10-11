import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductVisual from "./ProductVisual";
import { brandMap } from "@/data/brands";
import { categoryMap } from "@/data/categories";
import type { Product } from "@/data/products";
import { cn, quoteHref } from "@/lib/utils";

export default function ProductCard({ product }: { product: Product }) {
  const brand = brandMap[product.brand];
  const category = categoryMap[product.category];
  const href = `/products/${product.slug}`;

  return (
    <article className="card group flex flex-col overflow-hidden transition duration-200 hover:-translate-y-0.5 hover:shadow-lift">
      <Link href={href} className={cn("block p-6", product.image ? "bg-white" : "bg-steel-50")} aria-label={product.name}>
        <div className="relative aspect-[4/3]">
          {product.image ? (
            <Image src={product.image} alt={product.name} fill className="object-contain" sizes="(min-width: 1024px) 320px, 90vw" />
          ) : (
            <ProductVisual category={product.visual ?? product.category} className="h-full w-full" />
          )}
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2 text-[11px]">
          <span className="font-bold uppercase tracking-wider text-navy-700">{brand.name}</span>
          <span className="rounded-full bg-steel-100 px-2 py-0.5 font-semibold text-steel-600">{category.short}</span>
        </div>
        <h3 className="mt-2 text-base font-bold leading-snug">
          <Link href={href} className="transition hover:text-navy-700">
            {product.name}
          </Link>
        </h3>
        {product.series && <p className="mt-1 line-clamp-1 text-xs font-medium text-gold-600">{product.series}</p>}
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-steel-600">{product.summary}</p>
        <div className="mt-auto flex items-center justify-between border-t border-steel-100 pt-4">
          <Link href={href} className="inline-flex items-center gap-1 text-sm font-semibold text-navy-800 transition hover:text-gold-600">
            Details <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href={quoteHref(product.name)}
            className="rounded-md bg-navy-50 px-3 py-1.5 text-xs font-bold text-navy-800 transition hover:bg-gold-100 hover:text-gold-700"
          >
            Get quote
          </Link>
        </div>
      </div>
    </article>
  );
}
