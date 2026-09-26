/**
 * ─────────────────────────────────────────────────────────────────────────
 *  SITE CONFIG
 *  Edit this one file to update contact details, address, social links and
 *  the headline numbers shown across the website.
 *  Lines marked TODO are placeholders — replace them with real values.
 * ─────────────────────────────────────────────────────────────────────────
 */
export const site = {
  name: "TrueHub Tech & Systems",
  shortName: "TrueHub",
  tagline: "Trusted Products. Reliable Solutions. Real Partnership.",
  pillars: ["Automation", "Integration", "Engineering", "Support"],
  description:
    "TrueHub Tech & Systems is a B2B supplier of genuine industrial automation products — PLCs, HMIs, AC drives, servo systems, sensors and power supplies from Siemens, Schneider Electric, Delta, ABB, Mitsubishi Electric and more — backed by in-house engineering services and pan-India support.",

  url: "https://www.truehubtech.in", // TODO: your live domain (used for SEO / sitemap)
  phone: "+91 92119 34420",
  phoneHref: "tel:+919211934420",
  phone2: "+91 76781 75788",
  phone2Href: "tel:+917678175788",
  whatsapp: "919211934420", // country code + number, digits only (first number)
  email: "salesontruehub@gmail.com",

  address: {
    line1: "Plot No. 4/1, Street No. 4",
    line2: "Alu Thok",
    city: "Hardoi",
    state: "Uttar Pradesh",
    pin: "241001",
    country: "India",
  },
  hours: "Mon – Sat · 9:30 AM – 6:30 PM IST",
  gstin: "", // e.g. "07ABCDE1234F1Z5" — shown in the footer when filled
  mapEmbedUrl: "", // paste a Google Maps "Embed a map" URL to show a map on the contact page

  social: {
    linkedin: "https://www.linkedin.com/", // TODO
    facebook: "https://www.facebook.com/", // TODO
    instagram: "https://www.instagram.com/", // TODO
    youtube: "",
  },

  stats: [
    { value: "20+", label: "Global automation brands" },
    { value: "1,000+", label: "SKUs ready to ship" },
    { value: "12+", label: "Industries served" },
    { value: "24–48 hr", label: "Dispatch on stock items" },
  ],

  badges: [
    {
      icon: "box",
      title: "100% Genuine Products",
      text: "Sourced through authorised channels, in original packaging, with manufacturer warranty.",
    },
    {
      icon: "check",
      title: "Ready Stock, Fast Delivery",
      text: "Fast-moving PLCs, drives, HMIs and power supplies in stock for quick dispatch.",
    },
    {
      icon: "wrench",
      title: "Engineering Services",
      text: "Panel building, programming, commissioning, retrofits and repairs by our own engineers.",
    },
    {
      icon: "map",
      title: "Pan-India Support",
      text: "Delivery to every state and on-site or remote support wherever your plant is.",
    },
  ],
};

export type SiteBadge = (typeof site.badges)[number];
