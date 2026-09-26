import { site } from "@/data/site";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/** WhatsApp deep link with an optional pre-filled message. */
export function waLink(message?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Link to the contact page with the product pre-filled in the quote form. */
export function quoteHref(productName?: string) {
  return productName ? `/contact?product=${encodeURIComponent(productName)}` : "/contact";
}

export function fullAddress() {
  const a = site.address;
  return `${a.line1}, ${a.line2}, ${a.city}, ${a.state} ${a.pin}, ${a.country}`;
}
