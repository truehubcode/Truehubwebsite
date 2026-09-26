import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { DynamicIcon } from "@/components/icons";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industries – Textile, Packaging, Pharma, Food, Water, Steel, Automotive & more",
  description:
    "Industrial automation products and engineering for textile, packaging, pharmaceutical, food & beverage, water, plastics, automotive, steel, cement, HVAC, solar and machine-building industries across India.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Application know-how across India's core industries"
        text="Each industry has its own duty cycles, environments and standards. We match products and engineering to what actually runs on your floor."
        crumbs={[{ href: "/industries", label: "Industries" }]}
      />
      <section className="section-y bg-steel-50">
        <div className="container-x grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((ind) => (
            <article key={ind.slug} id={ind.slug} className="card scroll-mt-32 flex flex-col p-7">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-50 text-navy-800">
                <DynamicIcon name={ind.icon} className="h-6 w-6" />
              </span>
              <h2 className="mt-4 font-heading text-xl font-extrabold tracking-tight text-navy-900">{ind.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-steel-600">{ind.description}</p>
              <ul className="mt-4 space-y-1.5">
                {ind.applications.map((a) => (
                  <li key={a} className="flex gap-2 text-sm text-steel-800">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                    {a}
                  </li>
                ))}
              </ul>
              <Link
                href={`/contact?product=${encodeURIComponent(`${ind.name} application enquiry`)}`}
                className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-bold text-navy-800 hover:text-gold-600"
              >
                Talk to an engineer <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <CTA title="Don't see your industry?" text="We supply the same proven products and engineering to many more sectors. Tell us about your process and we will propose a solution." />
    </>
  );
}
