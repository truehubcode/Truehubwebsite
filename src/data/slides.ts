import type { VisualKey } from "./categories";

/**
 * HOME PAGE SLIDESHOW
 * Shown directly under the hero headline. Edit, reorder or remove slides here.
 * `image` is a path under /public; when omitted, `visuals` draws category illustrations instead.
 */
export interface Slide {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
  points?: string[];
  image?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
  visuals?: VisualKey[];
  badge?: string;
  cta: { label: string; href: string };
  secondary?: { label: string; href: string };
}

export const slides: Slide[] = [
  {
    id: "huceen-family",
    eyebrow: "HUCEEN · Channel partner",
    title: "Siemens-compatible PLCs, HMIs and IoT at a smarter price",
    text: "The complete HUCEEN range — E-200 SMART and H7-1200 controllers, PROFINET remote I/O, HPanel HMIs and HBox gateways — with a 3-year warranty.",
    points: ["STEP 7-Micro/WIN SMART", "TIA Portal compatible", "3-year warranty"],
    image: "/slides/huceen-product-family.webp",
    imageAlt: "HUCEEN PLC, HMI, remote I/O and IoT product family",
    imageFit: "cover",
    badge: "Ready stock",
    cta: { label: "Explore HUCEEN", href: "/brands/huceen" },
    secondary: { label: "Request a quote", href: "/contact" },
  },
  {
    id: "huceen-h7-1200",
    eyebrow: "HUCEEN H7-1200",
    title: "TIA Portal-compatible CPU with PROFINET master",
    text: "Up to 4,096 I/O with HD-200SP remote I/O, 60 V-tolerant analog channels and built-in IoT functions for HCloud.",
    points: ["CPU 1212S / 1214C / 1215C", "PROFINET master", "3-year warranty"],
    image: "/products/huceen/huceen-h7-1200-cpu/cpu-1215c-dcdcrelay.webp",
    imageAlt: "HUCEEN H7-1200 CPU 1215C",
    cta: { label: "View H7-1200", href: "/products/huceen-h7-1200-cpu" },
  },
  {
    id: "huceen-smart",
    eyebrow: "HUCEEN E-200 SMART",
    title: "Drop-in alternative to S7-200 SMART",
    text: "E3, E5 and E7 CPUs with digital, analog and temperature modules — programmed in the STEP 7-Micro/WIN SMART you already use.",
    points: ["12 – 60 I/O on CPU", "Up to 6 expansion modules", "Ethernet + RS485"],
    image: "/products/huceen/huceen-e7-200-smart-cpu/288-1sr20-0aa0.webp",
    imageAlt: "HUCEEN E7-200 SMART CPU SR20",
    cta: { label: "View E7-200 SMART", href: "/products/huceen-e7-200-smart-cpu" },
  },
  {
    id: "mitsubishi",
    eyebrow: "Mitsubishi Electric",
    title: "Controllers, drives and HMI from Mitsubishi Electric",
    text: "MELSEC iQ-R and iQ-F controllers, FREQROL inverters, MELSERVO servo systems and GOT HMIs — genuine stock with engineering support.",
    points: ["MELSEC iQ-F", "FR-E800", "MELSERVO-J5", "GOT2000"],
    image: "/products/mitsubishi/mitsubishi-melsec-iq-f/thumbnail-iqf.jpg",
    imageAlt: "Mitsubishi Electric MELSEC iQ-F controller",
    cta: { label: "Mitsubishi range", href: "/brands/mitsubishi-electric" },
  },
  {
    id: "siemens",
    eyebrow: "Siemens · Channel partner",
    title: "Genuine SIMATIC, SINAMICS and SITOP, ready to ship",
    text: "S7-1200 / S7-1500 controllers, KTP and Comfort panels, V20 / G120C drives and V90 servo — dispatched in 24–48 hours.",
    points: ["S7-1200 / S7-1500", "SINAMICS V20 / G120C", "KTP Basic Panels"],
    visuals: ["plc", "drives", "hmi"],
    cta: { label: "Siemens range", href: "/brands/siemens" },
  },
  {
    id: "delta",
    eyebrow: "Delta Electronics",
    title: "OEM-friendly PLCs, HMIs, drives and servo",
    text: "AS / DVP controllers, DOP HMIs, MS300 / C2000 drives, ASDA servo and field devices — the value choice for machine builders.",
    points: ["AS / DVP PLC", "DOP-100 HMI", "ASDA-A3 servo", "MS300 drive"],
    image: "/products/delta/delta-as-series-plc/as-standard-cpu.jpg",
    imageAlt: "Delta AS Series PLC",
    cta: { label: "Delta range", href: "/brands/delta" },
  },
  {
    id: "solutions",
    eyebrow: "Engineering solutions",
    title: "Panels, programming, commissioning and repairs",
    text: "Our engineers build control panels, program PLC / HMI / SCADA, commission drives and keep lines running across India.",
    points: ["Control panels", "PLC / HMI programming", "AMC & repairs"],
    visuals: ["scada", "switchgear", "drives"],
    cta: { label: "See solutions", href: "/solutions" },
  },
];
