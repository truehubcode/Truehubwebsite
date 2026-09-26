export type CategorySlug =
  | "plc"
  | "hmi"
  | "drives"
  | "servo"
  | "scada"
  | "sensors"
  | "encoders"
  | "power"
  | "control"
  | "switchgear"
  | "networking"
  | "cables"
  | "motion";

export interface Category {
  slug: CategorySlug;
  name: string;
  short: string;
  description: string;
  examples: string[];
}

export const categories: Category[] = [
  {
    slug: "plc",
    name: "PLC & Controllers",
    short: "PLC",
    description: "Compact, modular and distributed controllers for machine and process automation.",
    examples: ["SIMATIC S7-1200", "Modicon M241", "MELSEC FX5U", "Delta DVP / AS"],
  },
  {
    slug: "hmi",
    name: "HMI & Operator Panels",
    short: "HMI",
    description: "Touch panels and operator interfaces from 4-inch basic panels to 22-inch multi-touch.",
    examples: ["SIMATIC KTP / Comfort", "Harmony GTU", "GOT2000", "Delta DOP-100"],
  },
  {
    slug: "drives",
    name: "AC Drives (VFD)",
    short: "Drives",
    description: "Variable frequency drives from 0.18 kW to MW class for pumps, fans, conveyors and machines.",
    examples: ["SINAMICS V20 / G120C", "Altivar ATV320", "ACS580", "Delta MS300"],
  },
  {
    slug: "servo",
    name: "Servo Motors & Drives",
    short: "Servo",
    description: "Precision servo systems for positioning, synchronisation and high-speed motion control.",
    examples: ["SINAMICS V90", "Lexium 28", "MELSERVO MR-J4", "ASDA-A3"],
  },
  {
    slug: "scada",
    name: "SCADA, IPC & Software",
    short: "SCADA",
    description: "Supervisory software, engineering tools and rugged industrial PCs for plant visualisation.",
    examples: ["SIMATIC WinCC", "SIMATIC IPC", "DIAView", "TIA Portal"],
  },
  {
    slug: "sensors",
    name: "Sensors",
    short: "Sensors",
    description: "Inductive, capacitive, photoelectric, ultrasonic and RFID sensing for every application.",
    examples: ["Omron E2E / E3Z", "Pepperl+Fuchs NBB", "Autonics PR", "Panasonic GX"],
  },
  {
    slug: "encoders",
    name: "Encoders & Linear Scales",
    short: "Encoders",
    description: "Incremental and absolute rotary encoders plus linear position transducers.",
    examples: ["Pepperl+Fuchs ENI", "Autonics E50S", "Gefran transducers"],
  },
  {
    slug: "power",
    name: "Power Supplies (SMPS)",
    short: "SMPS",
    description: "DIN-rail switched-mode power supplies, redundancy modules and UPS for control panels.",
    examples: ["SITOP PSU", "Phaseo ABL8", "QUINT", "Omron S8VK"],
  },
  {
    slug: "control",
    name: "Temperature Controllers, Counters & Meters",
    short: "Controllers",
    description: "PID temperature controllers, counters, timers, and panel meters for process control.",
    examples: ["Omron E5CC", "Delta DTB", "Autonics TK", "H7CX counters"],
  },
  {
    slug: "switchgear",
    name: "Contactors, Relays, SSR & Soft Starters",
    short: "Switchgear",
    description: "Motor control and switching components: contactors, overload relays, SSRs and soft starters.",
    examples: ["SIRIUS 3RT / 3RW", "TeSys D", "ABB PSTX", "Omron MY / G3"],
  },
  {
    slug: "networking",
    name: "Industrial Networking & Gateways",
    short: "Networking",
    description: "Managed and unmanaged Ethernet switches, protocol gateways and IIoT remote-access devices.",
    examples: ["SCALANCE X", "Flexem FBox", "PROFINET / Modbus gateways"],
  },
  {
    slug: "cables",
    name: "Cables & Connectivity",
    short: "Cables",
    description: "Control, data, Ethernet and servo cables plus terminal blocks and connectors.",
    examples: ["ÖLFLEX", "UNITRONIC", "ETHERLINE", "CLIPLINE"],
  },
  {
    slug: "motion",
    name: "Gearboxes, Motors & Linear Motion",
    short: "Motion",
    description: "Low-voltage motors, planetary servo gearboxes, linear guideways and ball screws.",
    examples: ["SIMOTICS", "Nidec Shimpo", "HIWIN"],
  },
];

export const categoryMap = Object.fromEntries(categories.map((c) => [c.slug, c])) as Record<
  CategorySlug,
  Category
>;
