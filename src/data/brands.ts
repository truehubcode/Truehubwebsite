import type { CategorySlug } from "./categories";

export type BrandSlug = "huceen" | "siemens" | "delta" | "mitsubishi-electric";

export interface Brand {
  slug: BrandSlug;
  name: string;
  country: string;
  tagline: string;
  description: string;
  categories: CategorySlug[];
  /** Shown in the "Featured partners" section and the home-page mega menu. */
  featured?: boolean;
  /** Listed by name in the header Brands dropdown (order follows this array). */
  nav?: boolean;
}

export const brands: Brand[] = [
  {
    slug: "huceen",
    name: "HUCEEN",
    country: "China",
    tagline: "E-200 SMART · H7-1200 · Remote I/O · HPanel · HBox · HCloud",
    description:
      "Shenzhen Huceen Automation Technology (est. 2015, 1 million+ units shipped) builds cost-effective PLCs programmed with the familiar Siemens tools — the E-200 SMART family with STEP 7-Micro/WIN SMART and the H7-1200 series with TIA Portal — plus PROFINET and PROFIBUS remote I/O, HPanel HMIs and HBox / Smart Box IoT gateways on the HCloud platform, all with a 3-year warranty.",
    categories: ["plc", "hmi", "networking", "scada"],
    featured: true,
    nav: true,
  },
  {
    slug: "siemens",
    name: "Siemens",
    country: "Germany",
    tagline: "SIMATIC · SINAMICS · SITOP · SCALANCE",
    description:
      "SIMATIC controllers and HMIs, SINAMICS drives and servo systems, SITOP power supplies and SCALANCE networking — the backbone of plants across India. We stock the fast-moving S7-1200, S7-1500, KTP panels, V20, G120C and V90 ranges.",
    categories: ["plc", "hmi", "drives", "servo", "power", "networking", "scada", "control", "motion"],
    featured: true,
    nav: true,
  },
  {
    slug: "delta",
    name: "Delta Electronics",
    country: "Taiwan",
    tagline: "Drive & Power Quality · Motion · Control · Field Device",
    description:
      "Delta's complete industrial automation range as listed by Delta Electronics India: AC drives and servo systems, AH / AS / DVP PLCs and motion controllers, DOP HMIs, fieldbus modules, DIAView SCADA, temperature controllers, power meters, sensors and more — the value choice for Indian OEMs.",
    categories: ["drives", "servo", "motion", "plc", "hmi", "networking", "scada", "control", "sensors", "power"],
    featured: true,
    nav: true,
  },
  {
    slug: "mitsubishi-electric",
    name: "Mitsubishi Electric",
    country: "Japan",
    tagline: "MELSEC · GOT · FREQROL · MELSERVO",
    description:
      "MELSEC iQ-R, iQ-F, Q, L and F controllers, FREQROL inverters, MELSERVO servo systems, GOT HMIs, motion controllers, CC-Link IE networking and MELSOFT software — the full Mitsubishi Electric factory-automation range.",
    categories: ["plc", "hmi", "drives", "servo", "networking", "scada", "motion"],
    featured: true,
    nav: true,
  },
];

export const brandMap = Object.fromEntries(brands.map((b) => [b.slug, b])) as Record<BrandSlug, Brand>;
