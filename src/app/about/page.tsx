import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, Eye, Handshake, ShieldCheck, Target, Users, Zap } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import BrandStrip from "@/components/BrandStrip";
import CTA from "@/components/CTA";
import { LogoMark } from "@/components/Logo";
import { DynamicIcon } from "@/components/icons";
import { site } from "@/data/site";
import { brands } from "@/data/brands";
import { products } from "@/data/products";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "About Us – Industrial Automation Supplier & Engineering Partner",
  description: `${site.name} supplies genuine automation products from ${brands.length} global brands and delivers panel building, programming, commissioning and repair services across India.`,
};

const values = [
  { Icon: ShieldCheck, title: "Integrity in business", text: "Genuine products, honest lead times and transparent pricing — no surprises." },
  { Icon: Users, title: "Customer first", text: "We start from your application and budget, not from what we want to sell." },
  { Icon: Zap, title: "Speed", text: "Fast quotations, ready stock and 24–48 hour dispatch on stocked items." },
  { Icon: Award, title: "Technical excellence", text: "Engineers who program, commission and repair the products they sell." },
  { Icon: Handshake, title: "Real partnership", text: "We stay involved after delivery — support, AMCs and upgrades." },
  { Icon: Target, title: "Accountability", text: "One point of contact, one invoice and one team responsible for the result." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About TrueHub"
        title="Trusted products. Reliable solutions. Real partnership."
        text="TrueHub Tech & Systems is a B2B industrial automation supplier and engineering partner serving OEMs, system integrators and manufacturing plants across India."
        crumbs={[{ href: "/about", label: "About" }]}
      />

      <section className="section-y bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="Who we are" title="Engineers first, traders second" />
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-steel-700">
              <p>
                TrueHub was founded by automation engineers who spent years on plant floors chasing parts, waiting on
                quotations and explaining to suppliers what a drive parameter actually does. We built the company we
                wished we could have bought from.
              </p>
              <p>
                Today we supply genuine PLCs, HMIs, AC drives, servo systems, sensors, power supplies and switchgear from{" "}
                {brands.length} global brands, keep fast-moving items in ready stock, and back every sale with in-house
                engineering — panel building, programming, commissioning, retrofits and repairs.
              </p>
              <p>
                Whether you are an OEM standardising a control package, an integrator under a deadline or a plant with a
                line down at 2 AM, we respond like the partner we would want on the other end of the phone.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products" className="btn-navy">
                Explore products <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/services" className="btn-outline">
                Engineering services
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gold-100/60 blur-2xl" />
            <div className="card p-8 sm:p-10">
              <LogoMark className="mx-auto h-28 w-auto" />
              <p className="mt-6 text-center font-heading text-2xl font-extrabold tracking-tight">
                <span className="text-navy-800">TRUE</span>
                <span className="text-gold-500">HUB</span>
              </p>
              <p className="text-center font-heading text-[11px] font-bold tracking-[0.3em] text-steel-500">TECH &amp; SYSTEMS</p>
              <div className="mt-6 grid grid-cols-2 gap-2 text-center text-xs font-bold uppercase tracking-wider text-navy-800 sm:grid-cols-4">
                {site.pillars.map((p) => (
                  <span key={p} className="rounded-lg bg-navy-50 px-2 py-2">
                    {p}
                  </span>
                ))}
              </div>
              <ul className="mt-6 divide-y divide-steel-100 text-sm">
                {site.badges.map((b) => (
                  <li key={b.title} className="flex items-center gap-3 py-3">
                    <span className="grid h-8 w-8 place-items-center rounded-md bg-gold-50 text-gold-700">
                      <DynamicIcon name={b.icon} className="h-4 w-4" />
                    </span>
                    <span className="font-semibold text-navy-900">{b.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-900 py-14 text-white">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { value: `${brands.length}+`, label: "Global brands supplied" },
            { value: `${products.length}+`, label: "Product ranges catalogued" },
            { value: `${industries.length}+`, label: "Industries served" },
            { value: "24–48 hr", label: "Dispatch on stock items" },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl border border-white/10 bg-white/[0.05] p-6">
              <p className="font-heading text-4xl font-extrabold tracking-tight text-gold-400">{s.value}</p>
              <p className="mt-2 text-sm text-navy-100/85">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-y bg-steel-50">
        <div className="container-x">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="card p-8">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-800 text-gold-400">
                <Target className="h-6 w-6" />
              </span>
              <h2 className="mt-5 font-heading text-2xl font-extrabold tracking-tight">Our mission</h2>
              <p className="mt-3 leading-relaxed text-steel-700">
                To make industrial automation simpler to buy, faster to deploy and easier to maintain — by combining
                genuine products, ready stock and honest engineering advice under one roof.
              </p>
            </div>
            <div className="card p-8">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold-500 text-navy-950">
                <Eye className="h-6 w-6" />
              </span>
              <h2 className="mt-5 font-heading text-2xl font-extrabold tracking-tight">Our vision</h2>
              <p className="mt-3 leading-relaxed text-steel-700">
                To be the most trusted automation partner for Indian manufacturers and machine builders — the first call
                when a line needs to run better, faster or again.
              </p>
            </div>
          </div>

          <SectionHeading align="center" className="mt-20" eyebrow="What we stand for" title="The values behind every order" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(({ Icon, title, text }) => (
              <div key={title} className="card p-6">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-navy-50 text-navy-800">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-heading text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-steel-100 bg-white py-10">
        <div className="container-x">
          <p className="mb-5 text-center text-xs font-bold uppercase tracking-[0.2em] text-steel-500">Brands we supply</p>
          <BrandStrip />
        </div>
      </section>

      <CTA title="Let's build something reliable together" text="Talk to our team about products, projects or partnerships. We respond quickly and honestly." />
    </>
  );
}
