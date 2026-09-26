import { ChevronDown } from "lucide-react";
import SectionHeading from "./SectionHeading";

const faqs = [
  {
    q: "Are the products you supply genuine?",
    a: "Yes. Every product is sourced through authorised distribution channels and supplied in original manufacturer packaging with full manufacturer warranty and a GST invoice. We never deal in refurbished or grey-market goods unless clearly stated.",
  },
  {
    q: "Do you deliver across India?",
    a: "We ship pan-India through reputed courier and logistics partners. Stock items are normally dispatched within 24–48 hours; metro cities usually receive next-day delivery.",
  },
  {
    q: "Can you help me select the right PLC, drive or servo?",
    a: "Absolutely. Our application engineers help with sizing, cross-referencing obsolete part numbers, and choosing between brands based on your budget, communication needs and existing installations.",
  },
  {
    q: "Do you offer programming, commissioning and panel building?",
    a: "Yes. We build control panels, program PLC/HMI/SCADA systems, commission drives and servo systems, and carry out retrofits on site. See our Services page for details.",
  },
  {
    q: "Do you repair drives, PLCs and HMIs?",
    a: "We provide component-level repair and refurbishment for AC drives, servo drives, PLC CPUs and modules, HMIs and power supplies, with load testing and a repair warranty.",
  },
  {
    q: "How quickly can I get a quotation?",
    a: "Send part numbers or a description on WhatsApp, email or the enquiry form and you will typically receive a quotation within a few working hours, including price, stock status and lead time.",
  },
];

export default function FAQ() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="section-y bg-steel-50">
      <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions buyers ask us"
          text="Straight answers on authenticity, delivery, selection support and after-sales service."
        />
        <div className="divide-y divide-steel-200 rounded-2xl border border-steel-200 bg-white shadow-card">
          {faqs.map((f) => (
            <details key={f.q} className="group px-6 py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-semibold text-navy-900">
                <span>{f.q}</span>
                <ChevronDown className="h-5 w-5 shrink-0 text-steel-400 transition group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-steel-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  );
}
