import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { brands } from "@/data/brands";
import { categoryMap } from "@/data/categories";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Brands – Siemens, Schneider Electric, Delta, ABB, Mitsubishi, Omron & more",
  description: `TrueHub supplies genuine industrial automation products from ${brands.length} global brands with pan-India delivery and engineering support.`,
};

export default function BrandsPage() {
  const count = (slug: string) => products.filter((p) => p.brand === slug).length;
  const featured = brands.filter((b) => b.featured);
  const others = brands.filter((b) => !b.featured);

  const Card = ({ b }: { b: (typeof brands)[number] }) => (
    <Link
      href={`/brands/${b.slug}`}
      className="card group flex flex-col p-6 transition hover:-translate-y-0.5 hover:border-gold-300 hover:shadow-lift"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="font-heading text-xl font-extrabold tracking-tight text-navy-900 group-hover:text-navy-700">{b.name}</h2>
          <p className="mt-1 flex items-center gap-1 text-xs text-steel-500">
            <MapPin className="h-3 w-3" /> {b.country}
          </p>
        </div>
        <span className="rounded-full bg-steel-100 px-2.5 py-1 text-xs font-bold text-steel-700">{count(b.slug)} products</span>
      </div>
      <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-gold-600">{b.tagline}</p>
      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-steel-600">{b.description}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {b.categories.slice(0, 4).map((c) => (
          <span key={c} className="chip border-steel-200 bg-steel-50 text-steel-700">
            {categoryMap[c].short}
          </span>
        ))}
        {b.categories.length > 4 && <span className="chip border-steel-200 bg-steel-50 text-steel-500">+{b.categories.length - 4}</span>}
      </div>
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-navy-800 transition group-hover:gap-2 group-hover:text-gold-600">
        View products <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );

  return (
    <>
      <PageHero
        eyebrow="Brands"
        title={`${brands.length} global brands, one trusted supplier`}
        text="We supply and support the world's leading automation manufacturers — with genuine stock, competitive pricing and engineers who know the products."
        crumbs={[{ href: "/brands", label: "Brands" }]}
      />
      <section className="section-y bg-steel-50">
        <div className="container-x">
          <p className="eyebrow">Featured partners</p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {featured.map((b) => (
              <Card key={b.slug} b={b} />
            ))}
          </div>
          <p className="eyebrow mt-14">More brands we supply</p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {others.map((b) => (
              <Card key={b.slug} b={b} />
            ))}
          </div>
        </div>
      </section>
      <CTA title="Need a brand that isn't listed?" text="We also source from many other manufacturers on request. Tell us the brand and part number and we will get back to you with availability." />
    </>
  );
}
