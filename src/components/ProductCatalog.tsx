"use client";

import { useDeferredValue, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal, X } from "lucide-react";
import ProductCard from "./ProductCard";
import { brands, brandMap, type BrandSlug } from "@/data/brands";
import { categories, type CategorySlug } from "@/data/categories";
import type { Product } from "@/data/products";
import { cn } from "@/lib/utils";

function haystack(p: Product) {
  return [
    p.name,
    brandMap[p.brand].name,
    p.series ?? "",
    p.group ?? "",
    p.summary,
    ...p.highlights,
    ...p.applications,
    ...p.specs.flat(),
    ...(p.models ?? []).flat(),
  ]
    .join(" ")
    .toLowerCase();
}

/**
 * The URL is the source of truth for category and brand filters (so links from the
 * header and brand pages work). The search text is kept locally for instant typing
 * and written to the URL with a short debounce.
 */
export default function ProductCatalog({ products }: { products: Product[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const category = searchParams.get("category") ?? "";
  const brand = searchParams.get("brand") ?? "";
  const group = searchParams.get("group") ?? "";
  const urlQ = searchParams.get("q") ?? "";

  const [q, setQ] = useState(urlQ);
  const [seenUrlQ, setSeenUrlQ] = useState(urlQ);
  if (urlQ !== seenUrlQ) {
    // URL changed from outside (e.g. back button) — adopt its search text.
    setSeenUrlQ(urlQ);
    setQ(urlQ);
  }

  const [filtersOpen, setFiltersOpen] = useState(false);
  const deferredQ = useDeferredValue(q);
  const debounce = useRef<ReturnType<typeof setTimeout> | null>(null);

  function pushUrl(next: { q?: string; category?: string; brand?: string; group?: string }) {
    // Changing brand drops any brand-specific group filter.
    const state = { q, category, brand, group: next.brand !== undefined && next.brand !== brand ? "" : group, ...next };
    const params = new URLSearchParams();
    if (state.q) params.set("q", state.q);
    if (state.category) params.set("category", state.category);
    if (state.brand) params.set("brand", state.brand);
    if (state.group && state.brand) params.set("group", state.group);
    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }

  function onSearch(value: string) {
    setQ(value);
    setSeenUrlQ(value);
    if (debounce.current) clearTimeout(debounce.current);
    debounce.current = setTimeout(() => pushUrl({ q: value }), 300);
  }

  function clearAll() {
    setQ("");
    setSeenUrlQ("");
    pushUrl({ q: "", category: "", brand: "", group: "" });
  }

  const filtered = useMemo(() => {
    const needle = deferredQ.trim().toLowerCase();
    return products.filter(
      (p) =>
        (!category || p.category === category) &&
        (!brand || p.brand === brand) &&
        (!group || p.group === group) &&
        (!needle || haystack(p).includes(needle)),
    );
  }, [products, category, brand, group, deferredQ]);

  // Brand-specific groups (the maker's own taxonomy) for the selected brand.
  const brandGroups = useMemo(
    () => (brand ? [...new Set(products.filter((p) => p.brand === brand).map((p) => p.group).filter((g): g is string => Boolean(g)))] : []),
    [products, brand],
  );

  // Paginate with a "Show more" button; reset whenever the filter set changes.
  const PAGE = 24;
  const filterKey = `${category}|${brand}|${group}|${deferredQ}`;
  const [limit, setLimit] = useState(PAGE);
  const [seenFilterKey, setSeenFilterKey] = useState(filterKey);
  if (filterKey !== seenFilterKey) {
    setSeenFilterKey(filterKey);
    setLimit(PAGE);
  }
  const visible = filtered.slice(0, limit);

  const countFor = (slug: CategorySlug) =>
    products.filter((p) => p.category === slug && (!brand || p.brand === brand)).length;

  const brandName = brand ? brandMap[brand as BrandSlug]?.name : undefined;
  const activeCount = (category ? 1 : 0) + (brand ? 1 : 0) + (group ? 1 : 0) + (q ? 1 : 0);

  const sidebar = (
    <div className="space-y-6">
      <div>
        <label htmlFor="catalog-search" className="mb-2 block text-xs font-bold uppercase tracking-wider text-steel-500">
          Search
        </label>
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-steel-400" />
          <input
            id="catalog-search"
            type="search"
            value={q}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Part number, series, brand…"
            className="field pl-9"
          />
        </div>
      </div>

      <div>
        <label htmlFor="catalog-brand" className="mb-2 block text-xs font-bold uppercase tracking-wider text-steel-500">
          Brand
        </label>
        <select id="catalog-brand" value={brand} onChange={(e) => pushUrl({ brand: e.target.value })} className="field">
          <option value="">All brands</option>
          {brands.map((b) => (
            <option key={b.slug} value={b.slug}>
              {b.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-steel-500">Category</p>
        <ul className="space-y-0.5">
          <li>
            <button
              type="button"
              onClick={() => pushUrl({ category: "" })}
              className={cn(
                "flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition",
                !category ? "bg-navy-800 font-semibold text-white" : "text-steel-700 hover:bg-navy-50",
              )}
            >
              All categories
              <span className={cn("text-xs", !category ? "text-navy-200" : "text-steel-400")}>
                {brand ? products.filter((p) => p.brand === brand).length : products.length}
              </span>
            </button>
          </li>
          {categories.map((c) => {
            const n = countFor(c.slug);
            const selected = category === c.slug;
            return (
              <li key={c.slug}>
                <button
                  type="button"
                  onClick={() => pushUrl({ category: selected ? "" : c.slug })}
                  disabled={n === 0 && !selected}
                  className={cn(
                    "flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition disabled:opacity-40",
                    selected ? "bg-navy-800 font-semibold text-white" : "text-steel-700 hover:bg-navy-50",
                  )}
                >
                  {c.name}
                  <span className={cn("text-xs", selected ? "text-navy-200" : "text-steel-400")}>{n}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {activeCount > 0 && (
        <button type="button" onClick={clearAll} className="inline-flex items-center gap-1 text-sm font-semibold text-gold-700 hover:text-gold-600">
          <X className="h-4 w-4" /> Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
      {/* Mobile filter toggle */}
      <div className="lg:hidden">
        <button type="button" onClick={() => setFiltersOpen((v) => !v)} className="btn-outline w-full" aria-expanded={filtersOpen}>
          <SlidersHorizontal className="h-4 w-4" /> Filters{activeCount > 0 ? ` (${activeCount})` : ""}
        </button>
        {filtersOpen && <div className="card mt-4 p-5">{sidebar}</div>}
      </div>

      <aside className="hidden lg:block">
        <div className="card sticky top-28 p-5">{sidebar}</div>
      </aside>

      <div>
        {/* Brand quick-filter — mirrors the brand-first Products menu */}
        <div className="mb-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => pushUrl({ brand: "" })}
            className={cn("chip transition", !brand ? "border-navy-800 bg-navy-800 text-white" : "border-steel-200 bg-white text-steel-700 hover:border-navy-300")}
          >
            All brands
          </button>
          {brands.map((b) => (
            <button
              key={b.slug}
              type="button"
              onClick={() => pushUrl({ brand: brand === b.slug ? "" : b.slug })}
              className={cn(
                "chip transition",
                brand === b.slug ? "border-navy-800 bg-navy-800 text-white" : "border-steel-200 bg-white text-steel-700 hover:border-navy-300",
              )}
            >
              {b.name}
            </button>
          ))}
        </div>
        {brandGroups.length > 0 && (
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-steel-500">{brandName} range:</span>
            {brandGroups.map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => pushUrl({ group: group === g ? "" : g })}
                className={cn(
                  "chip transition",
                  group === g ? "border-gold-500 bg-gold-500 text-navy-950" : "border-steel-200 bg-white text-steel-700 hover:border-gold-400",
                )}
              >
                {g}
              </button>
            ))}
          </div>
        )}
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-steel-600">
            Showing <span className="font-bold text-navy-900">{filtered.length}</span> of {products.length} products
            {brandName && (
              <>
                {" "}
                from <span className="font-semibold text-navy-800">{brandName}</span>
              </>
            )}
          </p>
          <div className="flex flex-wrap gap-2">
            {category && (
              <button type="button" onClick={() => pushUrl({ category: "" })} className="chip border-navy-200 bg-navy-50 text-navy-800">
                {categories.find((c) => c.slug === category)?.name} <X className="h-3 w-3" />
              </button>
            )}
            {brandName && (
              <button type="button" onClick={() => pushUrl({ brand: "" })} className="chip border-navy-200 bg-navy-50 text-navy-800">
                {brandName} <X className="h-3 w-3" />
              </button>
            )}
            {group && (
              <button type="button" onClick={() => pushUrl({ group: "" })} className="chip border-gold-200 bg-gold-50 text-gold-700">
                {group} <X className="h-3 w-3" />
              </button>
            )}
          </div>
        </div>

        {filtered.length > 0 ? (
          <>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {visible.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
            {visible.length < filtered.length && (
              <div className="mt-8 flex flex-col items-center gap-2">
                <button type="button" onClick={() => setLimit((n) => n + PAGE)} className="btn-outline">
                  Show more products
                </button>
                <p className="text-xs text-steel-500">
                  Showing {visible.length} of {filtered.length}
                </p>
              </div>
            )}
          </>
        ) : (
          <div className="card px-6 py-16 text-center">
            <p className="text-lg font-bold text-navy-900">No products match your filters</p>
            <p className="mx-auto mt-2 max-w-md text-sm text-steel-600">
              We stock far more than what is listed here. Send us the part number or description and we will quote it.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button type="button" onClick={clearAll} className="btn-outline">
                Clear filters
              </button>
              <Link href={`/contact${q ? `?product=${encodeURIComponent(q)}` : ""}`} className="btn-primary">
                Request this product
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
