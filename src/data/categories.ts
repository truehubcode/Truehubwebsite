export type CategorySlug =
  | "plc"
  | "hmi"
  | "drives"
  | "servo"
  | "scada"
  | "networking"
  | "sensors"
  | "power"
  | "control"
  | "motion";

/** Illustration keys: every category plus a few extra product-level visuals. */
export type VisualKey = CategorySlug | "encoders" | "switchgear" | "cables";

export interface Category {
  slug: CategorySlug;
  name: string;
  short: string;
  description: string;
  examples: string[];
  /** Hide from the header Products dropdown (still available in the catalogue). */
  hideFromNav?: boolean;
}

export const categories: Category[] = [
  {
    slug: "plc",
    name: "Controllers (PLC)",
    short: "PLC",
    description: "Compact, modular and distributed programmable logic controllers with expansion and remote I/O.",
    examples: ["HUCEEN E-200 SMART / H7-1200", "SIMATIC S7-1200 / S7-1500", "Delta DVP / AS", "MELSEC FX5U"],
  },
  {
    slug: "hmi",
    name: "HMI",
    short: "HMI",
    description: "Touch panels and operator interfaces from 4-inch basic panels to 22-inch multi-touch.",
    examples: ["HUCEEN HPanel 700", "SIMATIC KTP / Comfort", "Delta DOP-100", "GOT2000"],
  },
  {
    slug: "drives",
    name: "Drives (VFD)",
    short: "Drives",
    description: "Variable frequency drives from 0.1 kW to MW class for pumps, fans, conveyors and machines.",
    examples: ["SINAMICS V20 / G120C", "Delta MS300 / C2000", "FR-D700 / FR-E800"],
  },
  {
    slug: "servo",
    name: "Servo",
    short: "Servo",
    description: "Precision servo motors and drives for positioning, synchronisation and high-speed motion control.",
    examples: ["SINAMICS V90 / S200", "Delta ASDA-A3 / B3", "MELSERVO MR-J4 / J5"],
  },
  {
    slug: "scada",
    name: "SCADA / IPC",
    short: "SCADA",
    description: "Supervisory software, cloud platforms and rugged industrial PCs for plant visualisation.",
    examples: ["SIMATIC WinCC", "SIMATIC IPC", "Delta DIAView", "HUCEEN HCloud"],
  },
  {
    slug: "networking",
    name: "Industrial Networking",
    short: "Networking",
    description: "Industrial Ethernet switches, IoT gateways and remote-access devices.",
    examples: ["SCALANCE X", "HUCEEN HBox / Smart Box"],
  },
  {
    slug: "sensors",
    name: "Sensors & Instrumentation",
    short: "Sensors",
    description: "Proximity, photoelectric and ultrasonic sensors, encoders and transducers — available on request.",
    examples: ["On request"],
    hideFromNav: true,
  },
  {
    slug: "power",
    name: "Power Supplies",
    short: "SMPS",
    description: "DIN-rail switched-mode power supplies, redundancy modules and UPS for control panels.",
    examples: ["SITOP PSU", "Delta PMC / DRP"],
  },
  {
    slug: "control",
    name: "Control Components",
    short: "Control",
    description: "Temperature controllers, contactors, overload relays and soft starters for motor and process control.",
    examples: ["SIRIUS 3RT / 3RW", "Delta DTB / DTK"],
  },
  {
    slug: "motion",
    name: "Motors, Gearboxes & Motion",
    short: "Motion",
    description: "Low-voltage motors and motion components.",
    examples: ["SIMOTICS motors"],
    hideFromNav: true,
  },
];

export const categoryMap = Object.fromEntries(categories.map((c) => [c.slug, c])) as Record<
  CategorySlug,
  Category
>;
