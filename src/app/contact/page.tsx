import type { Metadata } from "next";
import type { ComponentType } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import { WhatsAppIcon } from "@/components/WhatsAppButton";
import { site } from "@/data/site";
import { fullAddress, waLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact & Request a Quote",
  description: `Contact ${site.name} for quotations on PLCs, HMIs, drives, servo systems, sensors and engineering services. Call, WhatsApp or send an enquiry — pan-India delivery.`,
};

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ product?: string }> }) {
  const { product = "" } = await searchParams;

  const cards: {
    Icon: ComponentType<{ className?: string }>;
    title: string;
    lines?: string[];
    links?: { label: string; href: string; external?: boolean }[];
  }[] = [
    {
      Icon: Phone,
      title: "Call us",
      links: [
        { label: site.phone, href: site.phoneHref },
        { label: site.phone2, href: site.phone2Href },
      ],
    },
    {
      Icon: WhatsAppIcon,
      title: "WhatsApp",
      lines: ["Fastest way to get a quote — send part numbers or a photo of the nameplate."],
      links: [{ label: `Chat on ${site.phone}`, href: waLink("Hi TrueHub, I would like a quotation for: "), external: true }],
    },
    {
      Icon: Mail,
      title: "Email",
      links: [{ label: site.email, href: `mailto:${site.email}` }],
    },
    {
      Icon: MapPin,
      title: "Office & warehouse",
      lines: [fullAddress()],
    },
    {
      Icon: Clock,
      title: "Working hours",
      lines: [site.hours, "Breakdown support available outside these hours on request."],
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request a quotation or talk to an engineer"
        text="Send part numbers, a drawing or a description of the problem. We respond within business hours with price, stock and lead time."
        crumbs={[{ href: "/contact", label: "Contact" }]}
      />

      <section className="section-y bg-steel-50">
        <div className="container-x grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="space-y-4">
            {cards.map(({ Icon, title, lines, links }) => (
              <div key={title} className="card flex gap-4 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-navy-50 text-navy-800">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="font-heading font-bold text-navy-900">{title}</p>
                  {lines?.map((l) => (
                    <p key={l} className="mt-1 text-sm leading-relaxed text-steel-600">
                      {l}
                    </p>
                  ))}
                  {links?.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target={l.external ? "_blank" : undefined}
                      rel={l.external ? "noopener noreferrer" : undefined}
                      className="mt-1.5 block text-sm font-bold text-navy-800 hover:text-gold-600"
                    >
                      {l.label} →
                    </a>
                  ))}
                </div>
              </div>
            ))}

            <div className="rounded-2xl bg-navy-900 p-6 text-white">
              <p className="eyebrow text-gold-400">For a faster quotation, include</p>
              <ul className="mt-3 space-y-1.5 text-sm text-navy-100/90">
                <li>• Exact part / order numbers (or a nameplate photo)</li>
                <li>• Quantity and required delivery date</li>
                <li>• Delivery location (city / state)</li>
                <li>• Your GST number for the invoice</li>
              </ul>
            </div>
          </div>

          <div className="card p-6 sm:p-8">
            <h2 className="font-heading text-2xl font-extrabold tracking-tight">Send your requirement</h2>
            <p className="mt-2 text-sm text-steel-600">
              Fill in the form and we will get back to you. You can also send the same details via WhatsApp after submitting.
            </p>
            <div className="mt-6">
              <QuoteForm defaultProduct={product} />
            </div>
          </div>
        </div>

        {site.mapEmbedUrl && (
          <div className="container-x mt-12">
            <iframe
              src={site.mapEmbedUrl}
              title="Map to TrueHub Tech & Systems"
              className="h-80 w-full rounded-2xl border border-steel-200"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        )}
      </section>
    </>
  );
}
