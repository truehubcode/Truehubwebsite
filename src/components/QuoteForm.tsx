"use client";

import { useState, type FormEvent, type InputHTMLAttributes } from "react";
import { CheckCircle2, Loader2, Mail, Send } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppButton";
import { site } from "@/data/site";
import { waLink } from "@/lib/utils";

type Status = "idle" | "sending" | "sent" | "error";

export default function QuoteForm({ defaultProduct = "", compact = false }: { defaultProduct?: string; compact?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [sent, setSent] = useState<Record<string, string> | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    setStatus("sending");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setSent(data);
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent" && sent) {
    const message = [
      "Hi TrueHub, I submitted an enquiry on your website.",
      `Name: ${sent.name}`,
      `Company: ${sent.company || "-"}`,
      `Phone: ${sent.phone}`,
      `Email: ${sent.email || "-"}`,
      `Product: ${sent.product || "-"}`,
      `Quantity: ${sent.quantity || "-"}`,
      `Message: ${sent.message || "-"}`,
    ].join("\n");

    return (
      <div className="rounded-2xl border border-green-200 bg-green-50/60 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-green-600" />
        <h3 className="mt-4 text-xl font-bold">Enquiry received</h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-steel-600">
          Thank you, {sent.name}. Our team will get back to you shortly. For the fastest response, send the same
          details to us on WhatsApp.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href={waLink(message)} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <WhatsAppIcon className="h-4 w-4" /> Send on WhatsApp
          </a>
          <a
            href={`mailto:${site.email}?subject=${encodeURIComponent("Quotation request")}&body=${encodeURIComponent(message)}`}
            className="btn-outline"
          >
            <Mail className="h-4 w-4" /> Email instead
          </a>
        </div>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-navy-700 hover:text-gold-600"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate={false}>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your name *" name="name" required placeholder="Full name" autoComplete="name" />
        <Field label="Company" name="company" placeholder="Company / plant" autoComplete="organization" />
        <Field label="Phone / WhatsApp *" name="phone" type="tel" required placeholder="+91" autoComplete="tel" />
        <Field label="Email" name="email" type="email" placeholder="you@company.com" autoComplete="email" />
      </div>
      <div className="grid gap-4 sm:grid-cols-[1fr_140px]">
        <Field
          label="Product / part number"
          name="product"
          defaultValue={defaultProduct}
          placeholder="e.g. 6ES7214-1AG40-0XB0 or SINAMICS V20 2.2 kW"
        />
        <Field label="Quantity" name="quantity" placeholder="e.g. 5" inputMode="numeric" />
      </div>
      <div>
        <label htmlFor="qf-message" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-steel-500">
          Message
        </label>
        <textarea
          id="qf-message"
          name="message"
          rows={compact ? 3 : 4}
          className="field"
          placeholder="Application, delivery location, timeline…"
        />
      </div>
      {/* Honeypot: hidden from humans, bots tend to fill it. */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      {status === "error" && (
        <p className="text-sm font-semibold text-red-600">
          Something went wrong. Please try again, or WhatsApp us directly at {site.phone}.
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" disabled={status === "sending"} className="btn-primary disabled:opacity-60">
          {status === "sending" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          Request quotation
        </button>
        <p className="text-xs text-steel-500">We reply within business hours. No spam, ever.</p>
      </div>
    </form>
  );
}

function Field({ label, name, ...rest }: InputHTMLAttributes<HTMLInputElement> & { label: string; name: string }) {
  const id = `qf-${name}`;
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-steel-500">
        {label}
      </label>
      <input id={id} name={name} className="field" {...rest} />
    </div>
  );
}
