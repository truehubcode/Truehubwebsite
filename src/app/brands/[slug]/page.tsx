import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import CTA from "@/components/CTA";
import { brandMap, brands, type BrandSlug } from "@/data/brands";
import { categoryMap } from "@/data/categories";
import { productsByBrand } from "@/data/products";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return brands.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const brand = brandMap[slug as BrandSlug];
  if (!brand) return {};
  return {
    title: `${brand.name} Products – Dealer & Supplier in India`,
    description: `${brand.name} ${brand.tagline}. ${brand.description}`,
    alternates: { canonical: `/brands/${brand.slug}` },
  };
}

export default async function BrandPage({ params }: { params: Params }) {
  const { slug } = await params;
  const brand = brandMap[slug as BrandSlug];
  if (!brand) notFound();

  const items = productsByBrand(brand.slug);
  const grouped = brand.categories
    .map((c) => ({ category: categoryMap[c], items: items.filter((p) => p.category === c) }))
    .filter((g) => g.items.length > 0);

  return (
    <>
      <PageHero
        eyebrow={`${brand.country} · ${brand.tagline}`}
        title={`${brand.name} products`}
        text={brand.description}
        crumbs={[
          { href: "/brands", label: "Brands" },
          { href: `/brands/${brand.slug}`, label: brand.name },
        ]}
      >
        <div className="mt-6 flex flex-wrap gap-2">
          {brand.categories.map((c) => (
            <Link
              key={c}
              href={`/products?brand=${brand.slug}&category=${c}`}
              className="chip border-white/20 bg-white/10 text-white hover:border-gold-400 hover:text-gold-400"
            >
              {categoryMap[c].name}
            </Link>
          ))}
        </div>
      </PageHero>

      <section className="section-y bg-steel-50">
        <div className="container-x space-y-14">
          {grouped.length === 0 && (
            <div className="card p-10 text-center">
              <p className="text-lg font-bold">Catalogue for {brand.name} coming soon</p>
              <p className="mt-2 text-sm text-steel-600">We still supply the full range — send us your part numbers for a quotation.</p>
              <Link href="/contact" className="btn-primary mt-6">Request a quote</Link>
            </div>
          )}
          {grouped.map(({ category, items: list }) => (
            <div key={category.slug}>
              <div className="flex items-end justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-extrabold tracking-tight">{category.name}</h2>
                  <p className="mt-1 text-sm text-steel-600">{category.description}</p>
                </div>
                <Link
                  href={`/products?brand=${brand.slug}&category=${category.slug}`}
                  className="hidden shrink-0 items-center gap-1 text-sm font-bold text-navy-700 hover:text-gold-600 sm:inline-flex"
                >
                  Filter in catalogue <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {list.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTA
        title={`Looking for a ${brand.name} part number not shown here?`}
        text={`We supply the complete ${brand.name} automation range, including spares for older series. Send us the order number for price and availability.`}
      />
    </>
  );
}
