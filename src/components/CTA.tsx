import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppButton";
import { site } from "@/data/site";
import { waLink } from "@/lib/utils";

export default function CTA({
  title = "Need a quotation or technical help?",
  text = "Send us a part number, a drawing or just a description of the problem. Our engineers will respond with the right product, price and lead time.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div className="absolute inset-0 bg-grid-dark opacity-50" />
      <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-gold-500/15 blur-3xl" />
      <div className="container-x relative flex flex-col items-start gap-8 py-16 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow text-gold-400">Let&apos;s talk</p>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">{title}</h2>
          <p className="mt-3 text-navy-100/85">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="btn-primary">
            Request a quote <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={waLink("Hi TrueHub, I would like a quotation for: ")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-light"
          >
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp
          </a>
          <a href={site.phoneHref} className="btn-outline-light">
            <Phone className="h-4 w-4" /> {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
