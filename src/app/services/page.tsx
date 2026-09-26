import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/CTA";
import { DynamicIcon } from "@/components/icons";
import { services } from "@/data/services";
import { brands } from "@/data/brands";

export const metadata: Metadata = {
  title: "Engineering Services – Panels, PLC Programming, Drive Commissioning, Repairs & AMC",
  description:
    "TrueHub's engineers design control panels, program PLC/HMI/SCADA, commission VFDs and servo systems, migrate obsolete controls, repair automation hardware and provide AMC support across India.",
};

export default function ServicesPage() {
  const platforms = brands.filter((b) => b.featured).map((b) => b.name);
  return (
    <>
      <PageHero
        eyebrow="Engineering services"
        title="Engineering that turns products into working solutions"
        text="Our in-house team designs, programs, commissions, repairs and maintains automation systems — on the same brands we supply."
        crumbs={[{ href: "/services", label: "Services" }]}
      >
        <div className="mt-8 flex flex-wrap gap-2">
          {platforms.map((p) => (
            <span key={p} className="chip border-white/20 bg-white/10 text-white">
              {p}
            </span>
          ))}
        </div>
      </PageHero>

      <section className="section-y bg-steel-50">
        <div className="container-x">
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((s, i) => (
              <article key={s.slug} id={s.slug} className="card scroll-mt-32 p-7 sm:p-8">
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy-800 text-gold-400">
                    <DynamicIcon name={s.icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-steel-400">Service {String(i + 1).padStart(2, "0")}</p>
                    <h2 className="mt-1 font-heading text-xl font-extrabold tracking-tight text-navy-900">{s.name}</h2>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-steel-700 sm:text-[15px]">{s.description}</p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-steel-800">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/contact?product=${encodeURIComponent(`Service enquiry: ${s.name}`)}`}
                  className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-navy-800 hover:text-gold-600"
                >
                  Discuss this service <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <SectionHeading
            eyebrow="How we engage"
            title="Clear scope, fixed price, documented hand-over"
            text="Every project — from a single panel to a plant-wide retrofit — follows the same disciplined process so you always know what you are getting."
          />
          <ol className="space-y-4">
            {[
              ["Site study & requirement", "We visit or review drawings, understand the machine, the constraints and the goal."],
              ["Proposal with BOM", "A fixed-price proposal listing hardware, engineering hours, timeline and deliverables."],
              ["Build, program & FAT", "Panels built and code written in-house; tested before it reaches your site."],
              ["Commissioning & training", "Installation supervision, start-up, tuning and hands-on training for your team."],
              ["Documentation & support", "As-built drawings, programs and manuals — plus AMC and breakdown support options."],
            ].map(([t, d], i) => (
              <li key={t} className="flex gap-4 rounded-2xl border border-steel-200 bg-steel-50 p-5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold-500 font-heading text-sm font-extrabold text-navy-950">
                  {i + 1}
                </span>
                <div>
                  <p className="font-heading font-bold text-navy-900">{t}</p>
                  <p className="mt-1 text-sm leading-relaxed text-steel-600">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTA title="Have a project or a machine that's down?" text="Describe the situation and we will propose the fastest sensible path — repair, replace or retrofit — with a clear cost." />
    </>
  );
}
