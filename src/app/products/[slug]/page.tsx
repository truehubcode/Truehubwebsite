import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, ChevronRight, Phone } from "lucide-react";
import ProductVisual from "@/components/ProductVisual";
import ProductGallery from "@/components/ProductGallery";
import ProductCard from "@/components/ProductCard";
import CTA from "@/components/CTA";
import { WhatsAppIcon } from "@/components/WhatsAppButton";
import { productMap, products, relatedProducts } from "@/data/products";
import { brandMap } from "@/data/brands";
import { categoryMap } from "@/data/categories";
import { site } from "@/data/site";
import { quoteHref, waLink } from "@/lib/utils";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const product = productMap[slug];
  if (!product) return {};
  const brand = brandMap[product.brand];
  const category = categoryMap[product.category];
  return {
    title: `${product.name} – ${brand.name} ${category.short} Supplier in India`,
    description: product.summary,
    alternates: { canonical: `/products/${product.slug}` },
  };
}

export default async function ProductPage({ params }: { params: Params }) {
  const { slug } = await params;
  const product = productMap[slug];
  if (!product) notFound();

  const brand = brandMap[product.brand];
  const category = categoryMap[product.category];
  const related = relatedProducts(product);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.summary,
    category: category.name,
    brand: { "@type": "Brand", name: brand.name },
    manufacturer: { "@type": "Organization", name: brand.name },
    url: `${site.url}/products/${product.slug}`,
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Products", item: `${site.url}/products` },
      { "@type": "ListItem", position: 3, name: category.name, item: `${site.url}/products?category=${category.slug}` },
      { "@type": "ListItem", position: 4, name: product.name, item: `${site.url}/products/${product.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="border-b border-steel-100 bg-white">
        <nav aria-label="Breadcrumb" className="container-x flex flex-wrap items-center gap-1 py-3 text-xs font-medium text-steel-500">
          <Link href="/" className="hover:text-navy-800">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/products" className="hover:text-navy-800">Products</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href={`/products?category=${category.slug}`} className="hover:text-navy-800">{category.name}</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-navy-900">{product.name}</span>
        </nav>
      </div>

      <section className="bg-white py-10 sm:py-14">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          {product.image ? (
            <ProductGallery name={product.name} image={product.image} gallery={product.gallery} />
          ) : (
            <div className="card overflow-hidden bg-steel-50 p-8 sm:p-12">
              <div className="relative aspect-[4/3]">
                <ProductVisual category={product.visual ?? product.category} className="h-full w-full" />
              </div>
            </div>
          )}

          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <Link href={`/brands/${brand.slug}`} className="chip border-navy-200 bg-navy-50 text-navy-800 hover:bg-navy-100">
                {brand.name}
              </Link>
              <Link href={`/products?category=${category.slug}`} className="chip border-steel-200 bg-steel-50 text-steel-700 hover:bg-steel-100">
                {category.name}
              </Link>
            </div>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">{product.name}</h1>
            {product.series && <p className="mt-2 text-sm font-semibold text-gold-600">{product.series}</p>}
            <p className="mt-5 text-base leading-relaxed text-steel-700 sm:text-lg">{product.summary}</p>

            <ul className="mt-6 space-y-2.5">
              {product.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm text-steel-800">
                  <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold-500" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={quoteHref(product.name)} className="btn-primary">
                Request a quote <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={waLink(`Hi TrueHub, please quote for ${product.name} (${brand.name}). Quantity: `)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <WhatsAppIcon className="h-4 w-4 text-[#25d366]" /> WhatsApp
              </a>
              <a href={site.phoneHref} className="btn-outline">
                <Phone className="h-4 w-4" /> Call
              </a>
            </div>

            <div className="mt-8 grid gap-3 rounded-xl border border-steel-200 bg-steel-50 p-4 text-xs text-steel-600 sm:grid-cols-3">
              <p><span className="font-bold text-navy-900">Genuine</span> — original packaging, manufacturer warranty</p>
              <p><span className="font-bold text-navy-900">Fast</span> — stock items dispatched in 24–48 hrs</p>
              <p><span className="font-bold text-navy-900">Supported</span> — engineering help before and after sale</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-steel-100 bg-steel-50 py-12">
        <div className="container-x grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
          <div className="card overflow-hidden">
            <div className="border-b border-steel-100 px-6 py-4">
              <h2 className="font-heading text-lg font-bold">Key specifications</h2>
            </div>
            <dl className="divide-y divide-steel-100">
              {product.specs.map(([label, value]) => (
                <div key={label} className="grid gap-1 px-6 py-3 sm:grid-cols-[200px_1fr]">
                  <dt className="text-sm font-semibold text-navy-900">{label}</dt>
                  <dd className="text-sm text-steel-700">{value}</dd>
                </div>
              ))}
            </dl>
            <p className="px-6 py-4 text-xs text-steel-500">
              Specifications are indicative and vary by model. Share your exact part number for a confirmed quotation.
            </p>
          </div>

          {product.models && product.models.length > 0 && (
            <div className="card overflow-hidden">
              <div className="border-b border-steel-100 px-6 py-4">
                <h2 className="font-heading text-lg font-bold">Models &amp; order codes</h2>
              </div>
              <table className="w-full text-sm">
                <thead className="bg-steel-50 text-left text-[11px] font-bold uppercase tracking-wider text-steel-500">
                  <tr>
                    <th className="px-6 py-2.5">Order code / model</th>
                    <th className="px-6 py-2.5">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-steel-100">
                  {product.models.map(([code, desc]) => (
                    <tr key={code}>
                      <td className="whitespace-nowrap px-6 py-2.5 font-semibold text-navy-900">{code}</td>
                      <td className="px-6 py-2.5 text-steel-700">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          </div>

          <div className="space-y-6">
            <div className="card p-6">
              <h2 className="font-heading text-lg font-bold">Typical applications</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {product.applications.map((a) => (
                  <span key={a} className="chip border-gold-200 bg-gold-50 text-gold-700">
                    {a}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-navy-900 p-6 text-white">
              <p className="eyebrow text-gold-400">About {brand.name}</p>
              <p className="mt-3 text-sm leading-relaxed text-navy-100/85">{brand.description}</p>
              <Link href={`/brands/${brand.slug}`} className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-gold-400 hover:text-gold-300">
                All {brand.name} products <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-y bg-white">
          <div className="container-x">
            <div className="flex items-end justify-between gap-6">
              <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Related {category.name.toLowerCase()}</h2>
              <Link href={`/products?category=${category.slug}`} className="hidden items-center gap-1 text-sm font-bold text-navy-700 hover:text-gold-600 sm:inline-flex">
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA />
    </>
  );
}
