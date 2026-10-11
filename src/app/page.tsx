import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ClipboardList, FileCheck2, Headphones, Truck } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import HeroSlider from "@/components/HeroSlider";
import BrandStrip from "@/components/BrandStrip";
import ProductVisual from "@/components/ProductVisual";
import ProductCard from "@/components/ProductCard";
import FAQ from "@/components/FAQ";
import QuoteForm from "@/components/QuoteForm";
import { DynamicIcon } from "@/components/icons";
import { site } from "@/data/site";
import { categories } from "@/data/categories";
import { brands } from "@/data/brands";
import { products } from "@/data/products";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { slides } from "@/data/slides";
import { cn } from "@/lib/utils";

export default function HomePage() {
  const featured = products.filter((p) => p.featured).slice(0, 8);
  // Brands named in the hero copy: the four headline brands from the Brands menu, then "others".
  const heroBrands = brands.filter((b) => b.nav).map((b) => b.name);

  return (
    <>
      {/* ───────── Hero ───────── */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        {/* Full-width banner image behind the headline */}
        <Image
          src="/hero/automation-showcase.jpg"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center] lg:object-right"
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="container-x relative py-20 lg:py-28">
          <div className="max-w-2xl animate-fade-up">
            <p className="eyebrow text-gold-400">{site.pillars.join(" · ")}</p>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[56px]">
              Engineers first, <span className="text-gold-400">traders second</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-100/90">
              PLCs, HMIs, AC drives, servo systems, sensors and power supplies from {heroBrands.join(", ")} and
              others — in stock, competitively priced and backed by our in-house engineering team.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products" className="btn-primary">
                Browse products <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="btn-outline-light">
                Request a quote
              </Link>
            </div>
            <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-navy-100 sm:grid-cols-4">
              {site.badges.map((b) => (
                <li key={b.title} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                  <span className="font-semibold leading-tight">{b.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Floating badges over the banner (stacked bottom-right on desktop, inline on mobile) */}
          <div className="mt-10 flex flex-wrap gap-3 lg:absolute lg:bottom-12 lg:right-8 lg:mt-0 lg:flex-col lg:items-end">
            <div className="animate-float rounded-xl bg-gold-500 px-4 py-3 text-navy-950 shadow-lift">
              <p className="text-[11px] font-bold uppercase tracking-wider">Ready stock</p>
              <p className="text-lg font-extrabold leading-tight">24–48 hr dispatch</p>
            </div>
            <div className="hidden rounded-xl border border-white/10 bg-navy-950/85 px-4 py-3 text-white shadow-lift backdrop-blur lg:block">
              <p className="text-[11px] uppercase tracking-wider text-navy-300">Genuine &amp; warranted</p>
              <p className="text-sm font-bold">{brands.length} brand partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Slideshow (directly below the headline) ───────── */}
      <section className="bg-white pt-6 sm:pt-8">
        <div className="container-x">
          <HeroSlider slides={slides} />
        </div>
      </section>

      {/* ───────── Trust bar (the four promises from the logo) ───────── */}
      <section className="bg-white py-8">
        <div className="container-x">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-steel-200 bg-steel-200 shadow-card sm:grid-cols-2 lg:grid-cols-4">
            {site.badges.map((b) => (
              <div key={b.title} className="flex gap-4 bg-white p-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy-50 text-navy-800">
                  <DynamicIcon name={b.icon} className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-heading text-[15px] font-bold text-navy-900">{b.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-steel-600">{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Brands ───────── */}
      <section className="border-b border-steel-100 bg-white pb-10 pt-2">
        <div className="container-x">
          <p className="mb-5 text-center text-xs font-bold uppercase tracking-[0.2em] text-steel-500">
            Brands we supply and support
          </p>
          <BrandStrip />
        </div>
      </section>

      {/* ───────── Categories ───────── */}
      <section className="section-y bg-steel-50">
        <div className="container-x">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Product range"
              title="Everything for the control panel and the machine"
              text="From a single proximity sensor to a complete PLC, HMI and drive package — one supplier, one invoice, one point of support."
            />
            <Link href="/products" className="btn-navy shrink-0">
              View full catalogue <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {categories.filter((c) => products.some((p) => p.category === c.slug)).map((c) => (
              <Link
                key={c.slug}
                href={`/products?category=${c.slug}`}
                className="card group flex items-start gap-4 p-5 transition hover:-translate-y-0.5 hover:border-gold-300 hover:shadow-lift"
              >
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-xl bg-steel-50 p-1.5 transition group-hover:bg-gold-50">
                  <ProductVisual category={c.slug} className="h-full w-full" />
                </span>
                <span>
                  <span className="block font-heading text-[15px] font-bold leading-tight text-navy-900 group-hover:text-navy-700">
                    {c.name}
                  </span>
                  <span className="mt-1.5 block text-xs leading-relaxed text-steel-500">{c.examples.slice(0, 3).join(" · ")}</span>
                </span>
              </Link>
            ))}
            <Link
              href="/contact"
              className="flex flex-col justify-center rounded-2xl border border-dashed border-navy-300 bg-navy-50 p-5 text-navy-800 transition hover:bg-navy-100"
            >
              <span className="font-heading text-[15px] font-bold">Can&apos;t find it?</span>
              <span className="mt-1.5 text-xs leading-relaxed text-navy-700">
                Send us the part number — we source thousands of items beyond this list.
              </span>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold">
                Ask us <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── Why TrueHub ───────── */}
      <section className="section-y bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Why TrueHub"
              title="A supplier that thinks like your engineer"
              text="We started as engineers who were tired of chasing parts. So we built a supply partner that understands the application, not just the part number."
            />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["Integrity in business", "Transparent pricing, honest lead times and genuine products every time."],
                ["Customer-first approach", "Solutions tailored to your machine, budget and existing installed base."],
                ["Technical expertise", "Engineers who program, commission and repair the products they sell."],
                ["Stock and speed", "Fast-moving items on the shelf and dispatched within 24–48 hours."],
                ["After-sales support", "Remote and on-site support, AMCs and repairs across India."],
                ["Single-window supply", "PLC to cable, one invoice and one accountable partner."],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                  <div>
                    <p className="font-heading text-[15px] font-bold text-navy-900">{t}</p>
                    <p className="mt-1 text-sm leading-relaxed text-steel-600">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gold-100/60 blur-2xl" />
            <div className="grid grid-cols-2 gap-4">
              {site.stats.map((s, i) => (
                <div
                  key={s.label}
                  className={cn(
                    "rounded-2xl p-6 shadow-card",
                    i === 0 ? "bg-navy-900 text-white" : i === 3 ? "bg-gold-500 text-navy-950" : "border border-steel-200 bg-white",
                  )}
                >
                  <p className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">{s.value}</p>
                  <p className={cn("mt-2 text-sm font-medium", i === 0 ? "text-navy-200" : i === 3 ? "text-navy-900/80" : "text-steel-600")}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Featured products ───────── */}
      <section className="section-y bg-steel-50">
        <div className="container-x">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Popular right now"
              title="Fast-moving products in stock"
              text="The controllers, drives and components Indian plants and OEMs order from us most often."
            />
            <Link href="/products" className="btn-outline shrink-0">
              All products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Services ───────── */}
      <section className="section-y bg-navy-900 text-white">
        <div className="container-x">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              tone="dark"
              eyebrow="Solutions"
              title="More than a parts counter"
              text="Our engineers design panels, write code, commission drives and keep lines running — so you get a working solution, not just a box."
            />
            <Link href="/solutions" className="btn-primary shrink-0">
              All solutions <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s) => (
              <Link
                key={s.slug}
                href={`/solutions#${s.slug}`}
                className="group rounded-2xl border border-white/10 bg-white/[0.05] p-6 transition hover:border-gold-400/60 hover:bg-white/[0.08]"
              >
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-gold-500 text-navy-950">
                  <DynamicIcon name={s.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-heading text-lg font-bold text-white">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-100/80">{s.short}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-gold-400 transition group-hover:gap-2">
                  Learn more <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Industries ───────── */}
      <section className="section-y bg-white">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="Industries"
            title="Proven across the industries that keep India running"
            text="Application know-how from textile mills to water plants, packaging lines to steel."
          />
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {industries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries#${ind.slug}`}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-steel-200 bg-white p-5 text-center transition hover:-translate-y-0.5 hover:border-gold-300 hover:shadow-card"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-navy-50 text-navy-800 transition group-hover:bg-gold-100 group-hover:text-gold-700">
                  <DynamicIcon name={ind.icon} className="h-6 w-6" />
                </span>
                <span className="text-sm font-semibold leading-tight text-navy-900">{ind.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Process ───────── */}
      <section className="section-y bg-steel-50">
        <div className="container-x">
          <SectionHeading align="center" eyebrow="How it works" title="From enquiry to running machine in four steps" />
          <ol className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              [ClipboardList, "Send your requirement", "Part numbers, a photo of the nameplate, or a description of the application."],
              [FileCheck2, "Get a clear quotation", "Price, stock status, lead time and alternatives — usually within hours."],
              [Truck, "Fast, tracked dispatch", "Stock items ship in 24–48 hours with GST invoice and warranty documents."],
              [Headphones, "Support after delivery", "Commissioning help, programming, repairs and AMCs whenever you need them."],
            ].map(([Icon, title, text], i) => {
              const I = Icon as typeof ClipboardList;
              return (
                <li key={title as string} className="card relative p-6">
                  <span className="absolute right-5 top-4 font-heading text-4xl font-extrabold text-steel-100">0{i + 1}</span>
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-navy-800 text-white">
                    <I className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-heading text-base font-bold text-navy-900">{title as string}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel-600">{text as string}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <FAQ />

      {/* ───────── Quote form ───────── */}
      <section className="section-y bg-white" id="quote">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Request a quotation"
              title="Tell us what you need. We'll do the rest."
              text="Share part numbers or describe the application. Our engineers will confirm the right product, price and delivery time."
            />
            <ul className="mt-8 space-y-4 text-sm text-steel-700">
              {[
                "Quotations with stock status and lead time",
                "Cross-reference for obsolete or unavailable parts",
                "Alternatives across brands to match your budget",
                "GST invoice and manufacturer warranty on every order",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-6 sm:p-8">
            <QuoteForm compact />
          </div>
        </div>
      </section>
    </>
  );
}
