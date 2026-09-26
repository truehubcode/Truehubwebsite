import type { CategorySlug } from "./categories";

export type BrandSlug =
  | "siemens"
  | "schneider-electric"
  | "abb"
  | "delta"
  | "mitsubishi-electric"
  | "omron"
  | "yaskawa"
  | "panasonic"
  | "invt"
  | "pepperl-fuchs"
  | "lapp"
  | "phoenix-contact"
  | "autonics"
  | "danfoss"
  | "hiwin"
  | "nidec-shimpo"
  | "gefran"
  | "lubi"
  | "flexem"
  | "slanvert";

export interface Brand {
  slug: BrandSlug;
  name: string;
  country: string;
  tagline: string;
  description: string;
  categories: CategorySlug[];
  featured?: boolean;
}

export const brands: Brand[] = [
  {
    slug: "siemens",
    name: "Siemens",
    country: "Germany",
    tagline: "SIMATIC · SINAMICS · SITOP · SCALANCE",
    description:
      "SIMATIC controllers and HMIs, SINAMICS drives and servo systems, SITOP power supplies and SCALANCE networking — the backbone of plants across India. We stock the fast-moving S7-1200, S7-1500, KTP panels, V20, G120C and V90 ranges.",
    categories: ["plc", "hmi", "drives", "servo", "power", "networking", "scada", "switchgear", "motion"],
    featured: true,
  },
  {
    slug: "schneider-electric",
    name: "Schneider Electric",
    country: "France",
    tagline: "Modicon · Altivar · Harmony · TeSys · Lexium",
    description:
      "Modicon PLCs, Altivar drives, Harmony HMIs and pushbuttons, TeSys motor control and Lexium servo systems for machine builders and process plants.",
    categories: ["plc", "drives", "hmi", "servo", "switchgear", "power"],
    featured: true,
  },
  {
    slug: "abb",
    name: "ABB",
    country: "Switzerland",
    tagline: "ACS drives · AC500 · CP600 · PSTX",
    description:
      "ACS series drives, AC500 PLCs, CP600 control panels, PSTX soft starters and AF contactors for demanding industrial and infrastructure applications.",
    categories: ["drives", "plc", "hmi", "switchgear"],
    featured: true,
  },
  {
    slug: "delta",
    name: "Delta Electronics",
    country: "Taiwan",
    tagline: "DVP · AS · DOP · MS300 · ASDA",
    description:
      "Value-driven DVP and AS series PLCs, DOP-100 HMIs, MS300 / C2000 drives, ASDA servo systems, temperature controllers and power supplies — a favourite with Indian OEMs.",
    categories: ["plc", "hmi", "drives", "servo", "control", "power", "scada"],
    featured: true,
  },
  {
    slug: "mitsubishi-electric",
    name: "Mitsubishi Electric",
    country: "Japan",
    tagline: "MELSEC · GOT · FREQROL · MELSERVO",
    description:
      "MELSEC iQ-F and iQ-R controllers, GOT2000 HMIs, FR series inverters and MELSERVO systems trusted by machine builders worldwide.",
    categories: ["plc", "hmi", "drives", "servo"],
    featured: true,
  },
  {
    slug: "omron",
    name: "Omron",
    country: "Japan",
    tagline: "Sysmac · E5CC · E2E · S8VK",
    description:
      "Sysmac and CP series controllers, NB/NA HMIs, E5 series temperature controllers, E2E/E3Z sensors, MY/G2R relays and S8VK power supplies.",
    categories: ["plc", "hmi", "control", "sensors", "power", "switchgear", "drives"],
    featured: true,
  },
  {
    slug: "yaskawa",
    name: "Yaskawa",
    country: "Japan",
    tagline: "GA500 · GA700 · Sigma-7",
    description:
      "GA500 and GA700 industrial drives and Sigma-7 servo systems — precision motion for high-speed packaging, textile and machine-tool applications.",
    categories: ["drives", "servo"],
    featured: true,
  },
  {
    slug: "panasonic",
    name: "Panasonic",
    country: "Japan",
    tagline: "MINAS A6 · GX / CX sensors · FP-X",
    description: "MINAS A6 servo systems, GX / CX / EX series sensors and FP-X compact PLCs.",
    categories: ["servo", "sensors", "plc"],
    featured: true,
  },
  {
    slug: "invt",
    name: "INVT",
    country: "China",
    tagline: "Goodrive GD20 · GD200A · GD350 · DA200",
    description:
      "Goodrive GD20, GD200A and GD350 drives, GD100-PV solar pump inverters, DA200 servo systems and IVC PLCs — strong value for money with wide power ranges.",
    categories: ["drives", "servo", "plc", "hmi"],
  },
  {
    slug: "pepperl-fuchs",
    name: "Pepperl+Fuchs",
    country: "Germany",
    tagline: "Sensors · Encoders · RFID",
    description:
      "Inductive, capacitive, ultrasonic and photoelectric sensors, rotary encoders and IDENTControl RFID systems for factory automation.",
    categories: ["sensors", "encoders"],
  },
  {
    slug: "lapp",
    name: "LAPP",
    country: "Germany",
    tagline: "ÖLFLEX · UNITRONIC · ETHERLINE",
    description: "ÖLFLEX control cables, UNITRONIC data and bus cables, ETHERLINE industrial Ethernet and servo cables.",
    categories: ["cables"],
  },
  {
    slug: "phoenix-contact",
    name: "Phoenix Contact",
    country: "Germany",
    tagline: "QUINT · CLIPLINE · PLC-INTERFACE",
    description: "QUINT / TRIO / UNO power supplies, CLIPLINE terminal blocks, interface relays and surge protection.",
    categories: ["power", "cables", "switchgear"],
  },
  {
    slug: "autonics",
    name: "Autonics",
    country: "South Korea",
    tagline: "TK / TX · CT / LE · PR · E50S",
    description: "Cost-effective temperature controllers, counters and timers, proximity and photoelectric sensors, and rotary encoders.",
    categories: ["control", "sensors", "encoders"],
  },
  {
    slug: "danfoss",
    name: "Danfoss",
    country: "Denmark",
    tagline: "VLT FC 51 · FC 302 · FC 202",
    description: "VLT Micro Drive FC 51, AutomationDrive FC 302 and AQUA Drive FC 202 for HVAC, water and industrial applications.",
    categories: ["drives"],
  },
  {
    slug: "hiwin",
    name: "HIWIN",
    country: "Taiwan",
    tagline: "Linear guideways · Ball screws",
    description: "Linear guideways, ball screws and linear actuators for precision motion in machine tools and automation.",
    categories: ["motion"],
  },
  {
    slug: "nidec-shimpo",
    name: "Nidec Shimpo",
    country: "Japan",
    tagline: "ABLE · VRL servo gearboxes",
    description: "ABLE and VRL series planetary servo gearboxes for low-backlash, high-torque motion.",
    categories: ["motion"],
  },
  {
    slug: "gefran",
    name: "Gefran",
    country: "Italy",
    tagline: "Linear transducers · Pressure sensors",
    description: "Linear position transducers, melt pressure sensors and controllers for plastics, metals and hydraulics.",
    categories: ["encoders", "sensors"],
  },
  {
    slug: "lubi",
    name: "Lubi Electronics",
    country: "India",
    tagline: "DIN-rail SMPS",
    description: "Reliable DIN-rail switched-mode power supplies for control panels, made in India.",
    categories: ["power"],
  },
  {
    slug: "flexem",
    name: "Flexem",
    country: "China",
    tagline: "FE HMI · FBox IIoT gateway",
    description: "FE series HMIs and FBox IIoT gateways for remote monitoring and cloud connectivity.",
    categories: ["hmi", "networking"],
  },
  {
    slug: "slanvert",
    name: "Slanvert",
    country: "China",
    tagline: "SB200 · SB70G drives",
    description: "SB200 and SB70G general-purpose AC drives and soft starters.",
    categories: ["drives"],
  },
];

export const brandMap = Object.fromEntries(brands.map((b) => [b.slug, b])) as Record<BrandSlug, Brand>;
