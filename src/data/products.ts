import type { BrandSlug } from "./brands";
import type { CategorySlug, VisualKey } from "./categories";

/**
 * PRODUCT CATALOGUE
 * Add, edit or remove products here. Each product needs a unique `slug` (used in the URL).
 * Optional `image`: path under /public, e.g. "/products/s7-1200.jpg".
 * `featured: true` shows the product on the home page.
 */
export interface Product {
  slug: string;
  name: string;
  brand: BrandSlug;
  category: CategorySlug;
  series?: string;
  /** Brand-specific product group (the maker's own taxonomy), shown in the Products menu and catalogue. */
  group?: string;
  summary: string;
  highlights: string[];
  specs: [string, string][];
  /** Optional order codes / models, shown as a table on the product page. */
  models?: [string, string][];
  applications: string[];
  featured?: boolean;
  image?: string;
  /** Additional photos (e.g. one per model) shown as thumbnails on the product page. */
  gallery?: { src: string; label: string }[];
  /** Optional illustration override (defaults to the category illustration). */
  visual?: VisualKey;
}

export const products: Product[] = [
  /* ─────────────────────────────── HUCEEN ─────────────────────────────── */
  {
    slug: "huceen-e7-200-smart-cpu",
    image: "/products/huceen/huceen-e7-200-smart-cpu/288-1sr20-0aa0.webp",
    gallery: [
      { src: "/products/huceen/huceen-e7-200-smart-cpu/288-1sr20-0aa0.webp", label: "CPU SR20 AC/DC/RLY" },
      { src: "/products/huceen/huceen-e7-200-smart-cpu/288-1st20-0aa0.webp", label: "CPU ST20 DC/DC/DC" },
      { src: "/products/huceen/huceen-e7-200-smart-cpu/288-1sr20-0aa0-lupcfo.webp", label: "CPU SR20XP AC/DC/RLY" },
      { src: "/products/huceen/huceen-e7-200-smart-cpu/288-1sr20-0aa0-lupcfo-flllem.webp", label: "CPU ST20XP DC/DC/DC" },
      { src: "/products/huceen/huceen-e7-200-smart-cpu/288-1sr30-0aa0.webp", label: "CPU SR30 AC/DC/RLY" },
      { src: "/products/huceen/huceen-e7-200-smart-cpu/288-1st30-0aa0.webp", label: "CPU ST30 DC/DC/DC" },
      { src: "/products/huceen/huceen-e7-200-smart-cpu/288-1sr20-0aa0-lupcfo-cqhshb.webp", label: "CPU SR30XP AC/DC/RLY" },
      { src: "/products/huceen/huceen-e7-200-smart-cpu/288-1sr20-0aa0-lupcfo-flllem-kyudnf.webp", label: "CPU ST30XP DC/DC/DC" },
      { src: "/products/huceen/huceen-e7-200-smart-cpu/288-1sr40-0aa0.webp", label: "CPU SR40 AC/DC/RLY" },
      { src: "/products/huceen/huceen-e7-200-smart-cpu/288-1st40-0aa0.webp", label: "CPU ST40 DC/DC/DC" },
      { src: "/products/huceen/huceen-e7-200-smart-cpu/288-1sr60-0aa0.webp", label: "CPU SR60 AC/DC/RLY" },
      { src: "/products/huceen/huceen-e7-200-smart-cpu/288-1st60-0aa0.webp", label: "CPU ST60 DC/DC/DC" },
    ],
    name: "HUCEEN E7-200 SMART CPU",
    brand: "huceen",
    category: "plc",
    group: "PLC",
    series: "E7 · 288-1SR/ST20–60-0AG6 · STEP 7-Micro/WIN SMART",
    summary:
      "Full-function compact PLC of the E-200 SMART family: three-axis motion control, six high-speed counters, PID wizard, Ethernet and two RS485 ports — programmed with STEP 7-Micro/WIN SMART and mix-and-match compatible with S7-200 SMART modules.",
    highlights: [
      "Programmed with STEP 7-Micro/WIN SMART; drop-in alternative to SIMATIC S7-200 SMART",
      "3-axis pulse output (up to 3 × 100 kHz on ST models) and 6 high-speed counters",
      "1 × RJ45 Ethernet + 2 × RS485 serial ports",
      "Expandable with up to 6 E-series digital, analog and temperature modules",
      "3-year manufacturer warranty",
    ],
    specs: [
      ["I/O on CPU", "12DI/8DO (SR/ST20) up to 36DI/24DO (SR/ST60); XP variants add 4AI/2AO"],
      ["Outputs", "Relay (SR, AC supply) or transistor (ST, 24 V DC supply)"],
      ["Ports", "1 × RJ45, 2 × RS485"],
      ["Programming", "STEP 7-Micro/WIN SMART"],
      ["Expansion", "Up to 6 modules plus signal board"],
      ["Warranty", "3 years"],
    ],
    models: [
      ["288-1SR20-0AG6", "CPU SR20 · 12DI/8DO · AC/DC/RLY"],
      ["288-1ST20-0AG6", "CPU ST20 · 12DI/8DO · DC/DC/DC · 2 × 100 kHz pulse"],
      ["288-1SR30-0AG6", "CPU SR30 · 18DI/12DO · AC/DC/RLY"],
      ["288-1ST30-0AG6", "CPU ST30 · 18DI/12DO · DC/DC/DC · 3 × 100 kHz pulse"],
      ["288-1SR40-0AG6", "CPU SR40 · 24DI/16DO · AC/DC/RLY"],
      ["288-1ST40-0AG6", "CPU ST40 · 24DI/16DO · DC/DC/DC · 3 × 100 kHz pulse"],
      ["288-1SR60-0AG6", "CPU SR60 · 36DI/24DO · AC/DC/RLY"],
      ["288-1ST60-0AG6", "CPU ST60 · 36DI/24DO · DC/DC/DC · 3 × 100 kHz pulse"],
      ["CPU SR20XP", "12DI/8DO + 4AI/2AO · AC/DC/RLY"],
      ["CPU ST20XP", "12DI/8DO + 4AI/2AO · DC/DC/DC · 3 × 100 kHz pulse"],
    ],
    applications: ["Textile machinery", "Packaging", "Water treatment", "SMT & electronics equipment"],
    featured: true,
  },
  {
    slug: "huceen-e5-200-smart-cpu",
    image: "/products/huceen/huceen-e5-200-smart-cpu/288-1sr20-0aa0-bfojao.webp",
    gallery: [
      { src: "/products/huceen/huceen-e5-200-smart-cpu/288-1sr20-0aa0-bfojao.webp", label: "CPU SR20 AC/DC/RLY" },
      { src: "/products/huceen/huceen-e5-200-smart-cpu/288-1st20-0aa0-bfojao.webp", label: "CPU ST20 DC/DC/DC" },
      { src: "/products/huceen/huceen-e5-200-smart-cpu/e5-288-1sr30-0aa1.webp", label: "CPU SR30 AC/DC/RLY" },
      { src: "/products/huceen/huceen-e5-200-smart-cpu/288-1st30-0aa0-bfojao.webp", label: "CPU ST30 DC/DC/DC" },
      { src: "/products/huceen/huceen-e5-200-smart-cpu/288-1sr40-0aa0-bfojao.webp", label: "CPU SR40 AC/DC/RLY" },
      { src: "/products/huceen/huceen-e5-200-smart-cpu/288-1st40-0aa0-bfojao.webp", label: "CPU ST40 DC/DC/DC" },
      { src: "/products/huceen/huceen-e5-200-smart-cpu/288-1sr60-0aa0-bfojao.webp", label: "CPU SR60 AC/DC/RLY" },
      { src: "/products/huceen/huceen-e5-200-smart-cpu/288-1st60-0aa0-bfojao.webp", label: "CPU ST60 DC/DC/DC" },
    ],
    name: "HUCEEN E5-200 SMART CPU",
    brand: "huceen",
    category: "plc",
    group: "PLC",
    series: "E5 · 288-1SR/ST20–60-0AA0 · Basic edition",
    summary:
      "Basic-edition E-200 SMART CPU with the full instruction set, PID wizard, pulse output and 4-channel high-speed counting — expandable with up to 6 modules and signal boards.",
    highlights: [
      "Programmed with STEP 7-Micro/WIN SMART",
      "Pulse output and 4-channel high-speed counting; PID wizard",
      "1 × RJ45 Ethernet (up to 5 connections) + 1 × RS485",
      "Expandable with up to 6 E-series modules and DB signal boards",
      "3-year manufacturer warranty",
    ],
    specs: [
      ["I/O on CPU", "12DI/8DO up to 36DI/24DO"],
      ["Outputs", "Relay (SR) or transistor (ST)"],
      ["Ports", "1 × RJ45, 1 × RS485"],
      ["Programming", "STEP 7-Micro/WIN SMART"],
      ["Warranty", "3 years"],
    ],
    models: [
      ["288-1SR20-0AA0", "CPU SR20 · 12DI/8DO · AC/DC/RLY"],
      ["288-1ST20-0AA0", "CPU ST20 · 12DI/8DO · DC/DC/DC"],
      ["E5-288-1SR30-0AA1", "CPU SR30 · 18DI/12DO · AC/DC/RLY"],
      ["288-1ST30-0AA0", "CPU ST30 · 18DI/12DO · DC/DC/DC"],
      ["288-1SR40-0AA0", "CPU SR40 · 24DI/16DO · AC/DC/RLY"],
      ["288-1ST40-0AA0", "CPU ST40 · 24DI/16DO · DC/DC/DC"],
      ["288-1SR60-0AA0", "CPU SR60 · 36DI/24DO · AC/DC/RLY"],
      ["288-1ST60-0AA0", "CPU ST60 · 36DI/24DO · DC/DC/DC"],
    ],
    applications: ["General machinery", "Packaging", "Textile", "Pump & fan control"],
  },
  {
    slug: "huceen-e3-200-smart-cpu",
    image: "/products/huceen/huceen-e3-200-smart-cpu/288-1sr20-0aa1-chgusq.webp",
    gallery: [
      { src: "/products/huceen/huceen-e3-200-smart-cpu/288-1sr20-0aa1-chgusq.webp", label: "E3 CPU SR20" },
      { src: "/products/huceen/huceen-e3-200-smart-cpu/288-1sr30-0aa1-chgusq.webp", label: "E3 CPU SR30" },
      { src: "/products/huceen/huceen-e3-200-smart-cpu/288-1sr40-0aa1-chgusq.webp", label: "E3 CPU SR40" },
      { src: "/products/huceen/huceen-e3-200-smart-cpu/288-1sr60-0aa1-chgusq.webp", label: "E3 CPU SR60" },
      { src: "/products/huceen/huceen-e3-200-smart-cpu/288-1sr20-0aa0-lupcfo-ctdfdc.webp", label: "E3 CPU SR20XP" },
    ],
    name: "HUCEEN E3-200 SMART CPU (Economy)",
    brand: "huceen",
    category: "plc",
    group: "PLC",
    series: "E3 · 288-1SR20–60-0AA1 · Economy edition",
    summary:
      "Economy stand-alone E-200 SMART CPU for simple machines: relay outputs, Ethernet and RS485, programmed with STEP 7-Micro/WIN SMART, without expansion support.",
    highlights: [
      "Lowest-cost entry to the E-200 SMART family",
      "1 × RJ45 Ethernet (up to 5 connections) + RS485",
      "SR20XP variant with 4AI/3AO on board and 2 × RS485",
      "No expansion modules, RTC or DB boards (stand-alone use)",
      "3-year manufacturer warranty",
    ],
    specs: [
      ["I/O on CPU", "12DI/8DO up to 36DI/24DO, relay outputs"],
      ["Ports", "1 × RJ45, 1 × RS485 (2 × RS485 on SR20XP)"],
      ["Expansion", "Not supported"],
      ["Programming", "STEP 7-Micro/WIN SMART"],
      ["Warranty", "3 years"],
    ],
    models: [
      ["288-1SR20-0AA1", "E3 CPU SR20 · 12DI/8DO · relay"],
      ["288-1SR30-0AA1", "E3 CPU SR30 · 18DI/12DO · relay"],
      ["288-1SR40-0AA1", "E3 CPU SR40 · 24DI/16DO · relay"],
      ["288-1SR60-0AA1", "E3 CPU SR60 · 36DI/24DO · relay"],
      ["E3 CPU SR20XP", "12DI/8DO + 4AI/3AO · 2 × RS485 · stand-alone"],
    ],
    applications: ["Small machines", "Dryers & compressors", "Simple sequencing"],
  },
  {
    slug: "huceen-200-smart-digital-modules",
    image: "/products/huceen/huceen-200-smart-digital-modules/288-2de08-0aa0.webp",
    gallery: [
      { src: "/products/huceen/huceen-200-smart-digital-modules/288-2de08-0aa0.webp", label: "EM DE08 Digital input module" },
      { src: "/products/huceen/huceen-200-smart-digital-modules/288-2de16-0aa0.webp", label: "EM DE16 Digital input module" },
      { src: "/products/huceen/huceen-200-smart-digital-modules/288-2dr08-0aa0.webp", label: "EM DR08 Digital output module" },
      { src: "/products/huceen/huceen-200-smart-digital-modules/288-2dt08-0aa0.webp", label: "EM DT08 Digital output module" },
      { src: "/products/huceen/huceen-200-smart-digital-modules/288-2qr16-0aa0.webp", label: "EM QR16 Digital output module" },
      { src: "/products/huceen/huceen-200-smart-digital-modules/288-2qt16-0aa0.webp", label: "EM QT16 Digital output module" },
      { src: "/products/huceen/huceen-200-smart-digital-modules/288-2dr16-0aa0.webp", label: "EM DR16 Digital input/output module" },
      { src: "/products/huceen/huceen-200-smart-digital-modules/288-2dt16-0aa0.webp", label: "EM DT16 Digital input/output module" },
      { src: "/products/huceen/huceen-200-smart-digital-modules/288-2dr32-0aa0.webp", label: "EM DR32 Digital input/output module" },
      { src: "/products/huceen/huceen-200-smart-digital-modules/288-2dt32-0aa0.webp", label: "EM DT32 Digital input/output module" },
    ],
    name: "HUCEEN E-200 SMART Digital I/O Modules",
    brand: "huceen",
    category: "plc",
    group: "PLC",
    series: "EM DE / DR / DT / QR / QT · 288-2xxxx-0AA0",
    summary:
      "Digital input and output expansion modules for E-200 SMART CPUs and HD-200Smart remote I/O — usable side by side with S7-200 SMART modules.",
    highlights: [
      "8, 16 and 32-channel digital input and output modules",
      "Relay or transistor outputs",
      "Compact 47 × 100 × 81 mm housing",
      "Plug-in bus connector, no separate configuration",
    ],
    specs: [
      ["Inputs", "24 V DC"],
      ["Outputs", "Relay or 24 V DC transistor"],
      ["Dimensions", "47 × 100 × 81 mm"],
      ["Compatible with", "E5 / E7 CPUs, HD-200Smart, S7-200 SMART"],
    ],
    models: [
      ["288-2DE08-0AA0", "EM DE08 · 8 DI 24 V DC"],
      ["288-2DE16-0AA0", "EM DE16 · 16 DI 24 V DC"],
      ["288-2DR08-0AA0", "EM DR08 · 8 DO relay"],
      ["288-2DR16-0AA0", "EM DR16 · 16 DO relay"],
      ["288-2DR32-0AA0", "EM DR32 · 32 DO relay"],
      ["288-2DT08-0AA0", "EM DT08 · 8 DO transistor"],
      ["288-2DT16-0AA0", "EM DT16 · 16 DO transistor"],
      ["288-2DT32-0AA0", "EM DT32 · 32 DO transistor"],
      ["288-2QR16-0AA0", "EM QR16 · 16-point mixed DI/DO, relay"],
      ["288-2QT16-0AA0", "EM QT16 · 16-point mixed DI/DO, transistor"],
    ],
    applications: ["I/O expansion", "Remote I/O stations", "Panel retrofits"],
  },
  {
    slug: "huceen-200-smart-analog-modules",
    image: "/products/huceen/huceen-200-smart-analog-modules/288-3ae04-0aa0.webp",
    gallery: [
      { src: "/products/huceen/huceen-200-smart-analog-modules/288-3ae04-0aa0.webp", label: "EM AE04 Analog input module" },
      { src: "/products/huceen/huceen-200-smart-analog-modules/288-3ae08-0aa0.webp", label: "EM AE08 Analog input module" },
      { src: "/products/huceen/huceen-200-smart-analog-modules/288-3aq02-0aa0.webp", label: "EM AQ02 Analog output module" },
      { src: "/products/huceen/huceen-200-smart-analog-modules/288-3aq04-0aa0.webp", label: "EM AQ04 Analog output module" },
      { src: "/products/huceen/huceen-200-smart-analog-modules/288-3am03-0aa0.webp", label: "EM AM03 Analog input/output module" },
      { src: "/products/huceen/huceen-200-smart-analog-modules/288-3am06-0aa0.webp", label: "EM AM06 Analog input/output module" },
    ],
    name: "HUCEEN E-200 SMART Analog Modules",
    brand: "huceen",
    category: "plc",
    group: "PLC",
    series: "EM AE / AQ / AM · 288-3Axxx-0AA0",
    summary:
      "Analog input, output and mixed modules with 12-bit resolution — every channel supports voltage or current signals, at an economical price.",
    highlights: [
      "4 and 8-channel analog inputs, 2 and 4-channel outputs, mixed modules",
      "All channels selectable voltage or current",
      "12-bit resolution",
      "Economical analog expansion for water, HVAC and process skids",
    ],
    specs: [
      ["Signal types", "Voltage or current on every channel"],
      ["Resolution", "12 bits"],
      ["Compatible with", "E5 / E7 CPUs, HD-200Smart, S7-200 SMART"],
    ],
    models: [
      ["288-3AE04-0AA0", "EM AE04 · 4 AI"],
      ["288-3AE08-0AA0", "EM AE08 · 8 AI"],
      ["288-3AQ02-0AA0", "EM AQ02 · 2 AO"],
      ["288-3AQ04-0AA0", "EM AQ04 · 4 AO"],
      ["288-3AM03-0AA0", "EM AM03 · 2 AI + 1 AO"],
      ["288-3AM06-0AA0", "EM AM06 · 4 AI + 2 AO"],
    ],
    applications: ["Water treatment", "Pressure & flow control", "Drive speed references"],
  },
  {
    slug: "huceen-200-smart-temperature-modules",
    image: "/products/huceen/huceen-200-smart-temperature-modules/288-3ar02-0aa0.webp",
    gallery: [
      { src: "/products/huceen/huceen-200-smart-temperature-modules/288-3ar02-0aa0.webp", label: "EM AR02 RTD module" },
      { src: "/products/huceen/huceen-200-smart-temperature-modules/288-3ar04-0aa0.webp", label: "EM AR04 RTD module" },
      { src: "/products/huceen/huceen-200-smart-temperature-modules/288-3at04-0aa0.webp", label: "EM AT04 Thermocouple module" },
      { src: "/products/huceen/huceen-200-smart-temperature-modules/288-3at08-0aa0.webp", label: "EM AT08 Thermocouple module" },
    ],
    name: "HUCEEN E-200 SMART Temperature Modules",
    brand: "huceen",
    category: "plc",
    group: "PLC",
    series: "EM AR (RTD) / EM AT (thermocouple) · 288-3ARxx / 3ATxx",
    summary: "RTD and thermocouple input modules with 16-bit resolution for direct temperature measurement on E-200 SMART systems.",
    highlights: [
      "2 and 4-channel RTD modules",
      "4 and 8-channel thermocouple modules",
      "16-bit resolution",
      "Direct sensor connection, no external transmitters",
    ],
    specs: [
      ["Sensor types", "RTD (Pt100 etc.) and thermocouple"],
      ["Resolution", "16 bits"],
      ["Compatible with", "E5 / E7 CPUs, HD-200Smart, S7-200 SMART"],
    ],
    models: [
      ["288-3AR02-0AA0", "EM AR02 · 2 × RTD"],
      ["288-3AR04-0AA0", "EM AR04 · 4 × RTD"],
      ["288-3AT04-0AA0", "EM AT04 · 4 × thermocouple"],
      ["288-3AT08-0AA0", "EM AT08 · 8 × thermocouple"],
    ],
    applications: ["Ovens & furnaces", "Plastics machinery", "Dyeing & drying"],
  },
  {
    slug: "huceen-h7-1200-cpu",
    image: "/products/huceen/huceen-h7-1200-cpu/cpu-1215c-dcdcrelay.webp",
    gallery: [
      { src: "/products/huceen/huceen-h7-1200-cpu/cpu-1215c-dcdcrelay.webp", label: "CPU 1215C DC/DC/RLY" },
      { src: "/products/huceen/huceen-h7-1200-cpu/cpu-1215c-dcdcdc.webp", label: "CPU 1215C DC/DC/DC" },
      { src: "/products/huceen/huceen-h7-1200-cpu/cpu-1214c-dcdcrly.webp", label: "CPU 1214C DC/DC/RLY" },
      { src: "/products/huceen/huceen-h7-1200-cpu/feng-bo.png", label: "CPU 1214C DC/DC/DC" },
      { src: "/products/huceen/huceen-h7-1200-cpu/cpu-1212s-dcdcrly.png", label: "CPU 1212S DC/DC/RLY" },
      { src: "/products/huceen/huceen-h7-1200-cpu/cpu-1212s-dcdcdc.png", label: "CPU 1212S DC/DC/DC" },
    ],
    name: "HUCEEN H7-1200 CPU",
    brand: "huceen",
    category: "plc",
    group: "PLC",
    series: "CPU 1212S · 1214C · 1215C · TIA Portal compatible",
    summary:
      "S7-1200-compatible compact controller programmed in TIA Portal, with PROFINET master (IO controller) support, integrated IoT functions and analog channels that withstand 60 V mis-wiring.",
    highlights: [
      "Programmed in TIA Portal; fully compatible with S7-1200 modules and projects",
      "PROFINET master station — up to 4,096 I/O points with HD-200SP remote I/O",
      "Analog ports tolerate up to 60 V; I/O module diagnostics and output-freeze function",
      "Integrated IoT functions for HCloud connectivity",
      "3-year manufacturer warranty",
    ],
    specs: [
      ["I/O on CPU", "8DI/6DO + 2AI (1212S) · 14DI/10DO + 2AI (1214C) · 14DI/10DO + 2AI/2AO (1215C)"],
      ["Ethernet", "1 × RJ45 (1212S, 1214C) · 2 × RJ45 (1215C)"],
      ["Outputs", "Relay (RLY) or transistor (DC)"],
      ["Programming", "TIA Portal"],
      ["Warranty", "3 years"],
    ],
    models: [
      ["CPU 1212S DC/DC/DC", "8DI/6DO · 2AI · 1 × RJ45 · transistor outputs"],
      ["CPU 1212S DC/DC/RLY", "8DI/6DO · 2AI · 1 × RJ45 · relay outputs"],
      ["CPU 1214C DC/DC/DC", "14DI/10DO · 2AI · 1 × RJ45 · transistor outputs"],
      ["CPU 1214C DC/DC/RLY", "14DI/10DO · 2AI · 1 × RJ45 · relay outputs"],
      ["CPU 1215C DC/DC/DC", "14DI/10DO · 2AI/2AO · 2 × RJ45 · transistor outputs"],
      ["CPU 1215C DC/DC/RLY", "14DI/10DO · 2AI/2AO · 2 × RJ45 · relay outputs"],
    ],
    applications: ["Machine automation", "Logistics & sorting", "HVAC group control", "Process skids"],
    featured: true,
  },
  {
    slug: "huceen-h7-1200-digital-modules",
    image: "/products/huceen/huceen-h7-1200-digital-modules/221-1bf32-0xb0.png",
    gallery: [
      { src: "/products/huceen/huceen-h7-1200-digital-modules/221-1bf32-0xb0.png", label: "SM1221 DI8x24VDC" },
      { src: "/products/huceen/huceen-h7-1200-digital-modules/221-1bh32-0xb0.png", label: "SM1221 DI 16x24 V DC" },
      { src: "/products/huceen/huceen-h7-1200-digital-modules/222-1bf32-0xb0.png", label: "SM1222 &nbsp;DQ8x24VDC" },
      { src: "/products/huceen/huceen-h7-1200-digital-modules/222-1bh32-0xb0.png", label: "SM1222 &nbsp;DQ16x24VDC" },
      { src: "/products/huceen/huceen-h7-1200-digital-modules/222-1hf32-0xb0.png", label: "SM1222 &nbsp;DQ8xRLY" },
      { src: "/products/huceen/huceen-h7-1200-digital-modules/222-1hh32-0xb0.png", label: "SM1222 &nbsp;DQ16xRLY" },
      { src: "/products/huceen/huceen-h7-1200-digital-modules/223-1bh32-0xb0.png", label: "SM1223 &nbsp;DI8x24VDC &amp;DQ8x24VDC" },
      { src: "/products/huceen/huceen-h7-1200-digital-modules/223-1bl32-0xb0.png", label: "SM1223 &nbsp;DI16x24VDC &amp;DQ16x24VDC" },
      { src: "/products/huceen/huceen-h7-1200-digital-modules/223-1ph32-0xb0.png", label: "SM1223 &nbsp;DI8x24VDC &amp;DQ8xRLY" },
      { src: "/products/huceen/huceen-h7-1200-digital-modules/223-1pl32-0xb0.png", label: "SM1223 &nbsp;DI16x24VDC &amp;DQ16xRLY" },
    ],
    name: "HUCEEN H7-1200 Digital Signal Modules",
    brand: "huceen",
    category: "plc",
    group: "PLC",
    series: "SM 1221 / SM 1222 / SM 1223 · 22x-xxx32-0XB0",
    summary: "Digital input, output and mixed signal modules for H7-1200 CPUs with strong electrical isolation, compatible with S7-1200 SM modules.",
    highlights: [
      "8 and 16-channel DI, DQ and DI/DQ modules",
      "Relay or 24 V DC transistor outputs",
      "Sinking/sourcing 24 V DC inputs",
      "Configured directly in TIA Portal",
    ],
    specs: [
      ["Inputs", "24 V DC sinking/sourcing"],
      ["Outputs", "24 V DC transistor or relay"],
      ["Compatible with", "H7-1200 and S7-1200 CPUs"],
    ],
    models: [
      ["221-1BF32-0XB0", "SM 1221 · DI 8 × 24 V DC"],
      ["221-1BH32-0XB0", "SM 1221 · DI 16 × 24 V DC"],
      ["222-1BF32-0XB0", "SM 1222 · DQ 8 × 24 V DC transistor"],
      ["222-1BH32-0XB0", "SM 1222 · DQ 16 × 24 V DC transistor"],
      ["222-1HF32-0XB0", "SM 1222 · DQ 8 × relay"],
      ["222-1HH32-0XB0", "SM 1222 · DQ 16 × relay"],
      ["223-1BH32-0XB0", "SM 1223 · DI 8 / DQ 8 × 24 V DC transistor"],
      ["223-1BL32-0XB0", "SM 1223 · DI 16 / DQ 16 × 24 V DC transistor"],
      ["223-1PH32-0XB0", "SM 1223 · DI 8 / DQ 8 × relay"],
      ["223-1PL32-0XB0", "SM 1223 · DI 16 / DQ 16 × relay"],
    ],
    applications: ["I/O expansion", "Machine control panels"],
  },
  {
    slug: "huceen-h7-1200-analog-modules",
    image: "/products/huceen/huceen-h7-1200-analog-modules/231-5nd32-0xb0.webp",
    gallery: [
      { src: "/products/huceen/huceen-h7-1200-analog-modules/231-5nd32-0xb0.webp", label: "SM 1231 AI4 x 16 Bits" },
      { src: "/products/huceen/huceen-h7-1200-analog-modules/231-4hf32-0xb0.webp", label: "SM 1231 AI8 x 13 Bits" },
      { src: "/products/huceen/huceen-h7-1200-analog-modules/231-4hd32-0xb0.webp", label: "SM 1231 AI4 x 13 Bits" },
      { src: "/products/huceen/huceen-h7-1200-analog-modules/234-4he32-0xb0.webp", label: "SM1234 &nbsp;AI4 x 13 Bits &amp; AQ2 x 14 Bits" },
      { src: "/products/huceen/huceen-h7-1200-analog-modules/232-4hb32-0xb0.webp", label: "SM1232 &nbsp;AQ2 x 14 Bits" },
      { src: "/products/huceen/huceen-h7-1200-analog-modules/232-4hd32-0xb0.webp", label: "SM1232 &nbsp;AQ4 x 14 Bits" },
    ],
    name: "HUCEEN H7-1200 Analog Signal Modules",
    brand: "huceen",
    category: "plc",
    group: "PLC",
    series: "SM 1231 / SM 1232 / SM 1234 · 23x-xxx32-0XB0",
    summary: "Analog input, output and mixed modules for H7-1200 with 13 to 16-bit resolution and ±60 V channel tolerance.",
    highlights: [
      "4 and 8-channel analog inputs (13-bit) and 4-channel 16-bit input",
      "2 and 4-channel 14-bit analog outputs",
      "Mixed AI 4 + AQ 2 module",
      "Channels withstand up to 60 V mis-wiring",
    ],
    specs: [
      ["Resolution", "13-bit / 16-bit inputs, 14-bit outputs"],
      ["Protection", "Up to 60 V on channels"],
      ["Compatible with", "H7-1200 and S7-1200 CPUs"],
    ],
    models: [
      ["231-4HD32-0XB0", "SM 1231 · AI 4 × 13-bit"],
      ["231-4HF32-0XB0", "SM 1231 · AI 8 × 13-bit"],
      ["231-5ND32-0XB0", "SM 1231 · AI 4 × 16-bit"],
      ["232-4HB32-0XB0", "SM 1232 · AQ 2 × 14-bit"],
      ["232-4HD32-0XB0", "SM 1232 · AQ 4 × 14-bit"],
      ["234-4HE32-0XB0", "SM 1234 · AI 4 × 13-bit + AQ 2 × 14-bit"],
    ],
    applications: ["Process measurement", "Drive references", "Valve control"],
  },
  {
    slug: "huceen-h7-1200-temperature-modules",
    image: "/products/huceen/huceen-h7-1200-temperature-modules/231-5qd32-0xb0.webp",
    gallery: [
      { src: "/products/huceen/huceen-h7-1200-temperature-modules/231-5qd32-0xb0.webp", label: "SM1231 AI4 x 16 Bits TC" },
      { src: "/products/huceen/huceen-h7-1200-temperature-modules/231-5qf32-0xb0.webp", label: "SM1231 AI8 x 16 Bits TC" },
      { src: "/products/huceen/huceen-h7-1200-temperature-modules/231-5pd32-0xb0.webp", label: "SM1231 AI4 x 16 Bits RTD" },
      { src: "/products/huceen/huceen-h7-1200-temperature-modules/231-5pf32-0xb0.png", label: "SM1231 AI8 x 16 Bits RTD" },
    ],
    name: "HUCEEN H7-1200 Temperature Modules",
    brand: "huceen",
    category: "plc",
    group: "PLC",
    series: "SM 1231 RTD / TC · 231-5Pxx / 5Qxx-0XB0",
    summary: "16-bit RTD and thermocouple input modules for direct temperature measurement on H7-1200 systems.",
    highlights: [
      "4 and 8-channel RTD modules",
      "4 and 8-channel thermocouple modules",
      "16-bit resolution",
      "Configured in TIA Portal",
    ],
    specs: [
      ["Sensor types", "RTD and thermocouple"],
      ["Resolution", "16 bits"],
      ["Compatible with", "H7-1200 and S7-1200 CPUs"],
    ],
    models: [
      ["231-5PD32-0XB0", "SM 1231 · AI 4 × RTD"],
      ["231-5PF32-0XB0", "SM 1231 · AI 8 × RTD"],
      ["231-5QD32-0XB0", "SM 1231 · AI 4 × thermocouple"],
      ["231-5QF32-0XB0", "SM 1231 · AI 8 × thermocouple"],
    ],
    applications: ["Furnaces", "Extruders", "Heat-exchange stations"],
  },
  {
    slug: "huceen-h7-1200-rs485-signal-boards",
    image: "/products/huceen/huceen-h7-1200-rs485-signal-boards/rs485.png",
    gallery: [
      { src: "/products/huceen/huceen-h7-1200-rs485-signal-boards/rs485.png", label: "CB 1241 RS485" },
      { src: "/products/huceen/huceen-h7-1200-rs485-signal-boards/rs485-x-2.png", label: "CB 1241 RS485" },
    ],
    name: "HUCEEN H7-1200 RS485 Communication Boards",
    brand: "huceen",
    category: "plc",
    group: "PLC",
    series: "CB 1241 RS485 · 1-port and 2-port",
    summary: "Plug-in communication boards that add one or two RS485 ports to an H7-1200 CPU without using a module slot.",
    highlights: [
      "1-port and 2-port RS485 versions",
      "Fits the CPU front signal-board slot",
      "Serial connection to drives, HMIs and instruments",
    ],
    specs: [
      ["Ports", "1 × RS485 or 2 × RS485"],
      ["Mounting", "CPU signal-board slot"],
    ],
    models: [
      ["CB 1241 RS485 (1 port)", "Communication signal board · 1 × RS485"],
      ["CB 1241 RS485 (2 port)", "Communication signal board · 2 × RS485"],
    ],
    applications: ["Modbus RTU networks", "Drive & HMI communication"],
  },
  {
    slug: "huceen-hd-200sp-remote-io",
    image: "/products/huceen/huceen-hd-200sp-remote-io/155-6-standard-module.webp",
    gallery: [
      { src: "/products/huceen/huceen-hd-200sp-remote-io/155-6-standard-module.webp", label: "155-6 Standard Module" },
      { src: "/products/huceen/huceen-hd-200sp-remote-io/8di-standard-digital-input-module.webp", label: "8DI Standard Digital input Module" },
      { src: "/products/huceen/huceen-hd-200sp-remote-io/16di-standard-digital-input-module.webp", label: "16DI Standard Digital Input Module" },
      { src: "/products/huceen/huceen-hd-200sp-remote-io/8do-standard-digital-output-module.webp", label: "8DO Standard Digital Output Module" },
      { src: "/products/huceen/huceen-hd-200sp-remote-io/16do-standard-digital-output-module.webp", label: "16DO Standard Digital Output Module" },
      { src: "/products/huceen/huceen-hd-200sp-remote-io/4al-standard-analog-input-module-for-current.webp", label: "4Al Standard Analog Input Module for Current" },
      { src: "/products/huceen/huceen-hd-200sp-remote-io/4al-standard-analog-input-module-for-voltageand-current.webp", label: "4Al Standard Analog Input Module for Voltageand Current" },
      { src: "/products/huceen/huceen-hd-200sp-remote-io/8al-basic-analog-input-module-for-voltage.webp", label: "8Al Basic Analog Input Module for Voltage" },
      { src: "/products/huceen/huceen-hd-200sp-remote-io/8al-basic-analog-input-module-for-current.webp", label: "8Al Basic Analog Input Module for Current" },
      { src: "/products/huceen/huceen-hd-200sp-remote-io/4ao-standard-analog-output-module.webp", label: "4AO Standard Analog Output Module" },
      { src: "/products/huceen/huceen-hd-200sp-remote-io/light-colored-base.webp", label: "Light-colored base" },
      { src: "/products/huceen/huceen-hd-200sp-remote-io/dark-colored-base.webp", label: "Dark-colored base" },
    ],
    name: "HUCEEN HD-200SP PROFINET Remote I/O",
    brand: "huceen",
    category: "plc",
    group: "PLC",
    series: "IM 155-6 PN ST · DI / DQ / AI / AQ ST modules · BaseUnits",
    summary:
      "Highly flexible, modular PROFINET remote I/O in the ET 200SP form factor — build slave stations to the exact channel count and connect production-line changes without touching the main cabinet.",
    highlights: [
      "PROFINET interface module with 2 × RJ45 ports",
      "Plug modules onto light or dark BaseUnits for potential groups",
      "Standard digital, analog and basic analog modules",
      "Master + slave cascading: H7-1200 CPU supports up to 4,096 I/O points",
    ],
    specs: [
      ["Protocol", "PROFINET IO"],
      ["Interface module", "IM 155-6 PN ST, 2 × RJ45"],
      ["Digital outputs", "24 V DC / 0.5 A"],
      ["Analog inputs", "4 × current (2-/4-wire), 4 × U/I, 8 × basic current or voltage"],
    ],
    models: [
      ["IM 155-6 PN ST", "PROFINET interface module · 2 × RJ45"],
      ["DI 8 × 24 V DC ST", "8-channel digital input"],
      ["DI 16 × 24 V DC ST", "16-channel digital input"],
      ["DQ 8 × 24 V DC / 0.5 A ST", "8-channel digital output"],
      ["DQ 16 × 24 V DC / 0.5 A ST", "16-channel digital output"],
      ["AI 4 × I 2-/4-wire ST", "4-channel analog current input"],
      ["AI 4 × U/I ST", "4-channel analog voltage/current input"],
      ["AQ 4 × U/I ST", "4-channel analog output"],
      ["AI 8 × I Basic", "8-channel basic analog current input"],
      ["AI 8 × U Basic", "8-channel basic analog voltage input"],
      ["BaseUnit, light-coloured", "Base with new potential group"],
      ["BaseUnit, dark-coloured", "Base continuing the potential group"],
    ],
    applications: ["Distributed machine I/O", "Cold & heat source group control", "Heat-exchange stations", "Water treatment"],
    featured: true,
  },
  {
    slug: "huceen-hd-200smart-remote-io",
    image: "/products/huceen/huceen-hd-200smart-remote-io/155-1pn01-0aa0-oueqih.png",
    gallery: [
      { src: "/products/huceen/huceen-hd-200smart-remote-io/155-1pn01-0aa0-oueqih.png", label: "IM 155 communication module" },
    ],
    name: "HUCEEN HD-200Smart PROFINET Remote I/O",
    brand: "huceen",
    category: "plc",
    group: "PLC",
    series: "IM 155-1PN01-0AA0 + E-series SMART modules",
    summary:
      "PROFINET slave interface that turns economical E-200 SMART expansion modules into a distributed I/O station — up to 16 modules on the right.",
    highlights: [
      "PROFINET slave station interface over Ethernet",
      "Uses standard E-series digital, analog and temperature modules",
      "Up to 16 expansion modules per station",
      "Lowest-cost route to distributed I/O for H7-1200 / S7-1200 masters",
    ],
    specs: [
      ["Protocol", "PROFINET IO"],
      ["Interface module", "IM 155-1PN01-0AA0"],
      ["Expansion", "Up to 16 E-series SMART modules"],
    ],
    models: [
      ["155-1PN01-0AA0", "IM 155 PROFINET slave interface module"],
      ["288-2xxxx / 288-3xxxx", "Any E-200 SMART digital, analog or temperature module"],
    ],
    applications: ["Distributed I/O", "Retrofit of existing panels", "Long machines"],
  },
  {
    slug: "huceen-hd-200m-remote-io",
    image: "/products/huceen/huceen-hd-200m-remote-io/153-1aa03-0xb0.webp",
    gallery: [
      { src: "/products/huceen/huceen-hd-200m-remote-io/153-1aa03-0xb0.webp", label: "IM153 Profibus DP Slave Interface Module" },
      { src: "/products/huceen/huceen-hd-200m-remote-io/321-1bh02-0aa0-ajemkn.webp", label: "SM 321 DI 16x24V DC" },
      { src: "/products/huceen/huceen-hd-200m-remote-io/321-1bl00-0aa0-ajemkn.webp", label: "SM 321 DI 32x24V DC" },
      { src: "/products/huceen/huceen-hd-200m-remote-io/322-1bh01-0aa0-ajemkn.webp", label: "SM322 DO16x24V DC" },
      { src: "/products/huceen/huceen-hd-200m-remote-io/322-1hh01-0aa0-ajemkn.webp", label: "SM322 DO16xRLY" },
      { src: "/products/huceen/huceen-hd-200m-remote-io/322-1bl00-0aa0-ajemkn.webp", label: "SM322 DO32x24V DC" },
      { src: "/products/huceen/huceen-hd-200m-remote-io/323-1bl00-0aa0-ajemkn.webp", label: "SM323 16DI/16DO" },
      { src: "/products/huceen/huceen-hd-200m-remote-io/331-1kf02-0ab0-yvobki.webp", label: "SM331 8AI Current/Voltage/RTD" },
      { src: "/products/huceen/huceen-hd-200m-remote-io/331-7kf02-0ab0-yvobki.webp", label: "SM331 8AI Full Function Type" },
      { src: "/products/huceen/huceen-hd-200m-remote-io/332-5hd01-0ab0-yvobki.webp", label: "SM332 4AO Current/Voltage" },
      { src: "/products/huceen/huceen-hd-200m-remote-io/332-5hf00-0ab0-yvobki.webp", label: "SM332 8AO Current/Voltage" },
    ],
    name: "HUCEEN HD-200M PROFIBUS-DP Remote I/O",
    brand: "huceen",
    category: "plc",
    group: "PLC",
    series: "IM 153 · SM 321 / 322 / 323 / 331 / 332 modules",
    summary:
      "PROFIBUS-DP remote I/O in the S7-300 module format — field-proven modules for expanding or maintaining existing DP networks.",
    highlights: [
      "IM 153 PROFIBUS-DP slave interface, up to 8 modules per station",
      "16 and 32-channel digital input and output modules",
      "8-channel analog inputs and 4/8-channel analog outputs",
      "20-pin and 40-pin front connectors",
    ],
    specs: [
      ["Protocol", "PROFIBUS-DP"],
      ["Interface module", "IM 153 (153-1AA03-0XB0)"],
      ["Modules per station", "Up to 8"],
    ],
    models: [
      ["153-1AA03-0XB0", "IM 153 PROFIBUS-DP slave interface"],
      ["321-1BH02-0AA0", "SM 321 · DI 16 × 24 V DC · 20-pin"],
      ["321-1BL00-0AA0", "SM 321 · DI 32 × 24 V DC · 40-pin"],
      ["322-1BH01-0AA0", "SM 322 · DO 16 × 24 V DC · 20-pin"],
      ["322-1HH01-0AA0", "SM 322 · DO 16 × relay · 20-pin"],
      ["322-1BL00-0AA0", "SM 322 · DO 32 × 24 V DC · 40-pin"],
      ["323-1BL00-0AA0", "SM 323 · DI 16 / DO 16 × 24 V DC"],
      ["331-1KF02-0AB0", "SM 331 · AI 8"],
      ["331-7KF02-0AB0", "SM 331 · AI 8"],
      ["332-5HD01-0AB0", "SM 332 · AO 4"],
      ["332-5HF00-0AB0", "SM 332 · AO 8"],
    ],
    applications: ["Existing PROFIBUS networks", "Intelligent sorting systems", "Plant I/O expansion"],
  },
  {
    slug: "huceen-hpanel-700-hmi",
    image: "/products/huceen/huceen-hpanel-700-hmi/hpanel-700s.webp",
    gallery: [
      { src: "/products/huceen/huceen-hpanel-700-hmi/hpanel-700s.webp", label: "HPanel 700S" },
      { src: "/products/huceen/huceen-hpanel-700-hmi/hpanel-700b.webp", label: "HPanel 700B" },
    ],
    name: "HUCEEN HPanel 700S / 700B 7-inch HMI",
    brand: "huceen",
    category: "hmi",
    group: "HMI",
    series: "HPanel 700S (black) · HPanel 700B (white) · 1024 × 600",
    summary:
      "7-inch industrial touch panel with a dual-core 1 GHz processor, Ethernet, three serial ports and USB — an economical operator interface for HUCEEN and Siemens-compatible PLCs.",
    highlights: [
      "7-inch 16:9 TFT, 1024 × 600, 350 cd/m² LED backlight",
      "Dual-core ARM Cortex-A7 1 GHz, 256 MB DDR3 + 4 GB eMMC",
      "1 × RJ45 Ethernet, COM1 RS232/RS485/RS422, COM2 RS485, COM3 RS232",
      "USB Type-C and Type-A; download via USB, U-disk or Ethernet",
      "IP65 front, 24 V DC (9–28 V), 0–50 °C",
    ],
    specs: [
      ["Display", "7\" 16:9 TFT LCD, 1024 × 600, 350 cd/m²"],
      ["Touch", "4-wire industrial resistive"],
      ["Processor / memory", "Dual-core Cortex-A7 1 GHz · 256 MB DDR3 + 4 GB eMMC"],
      ["Interfaces", "RJ45 10/100, COM1 RS232/485/422, COM2 RS485, COM3 RS232, USB-C, USB-A"],
      ["Supply", "24 V DC (9–28 V)"],
      ["Protection", "IP65 front, IP20 rear"],
    ],
    models: [
      ["HPanel 700S", "7-inch · black housing · standard model"],
      ["HPanel 700B", "7-inch · white housing · basic model"],
    ],
    applications: ["Machine operation", "OEM control panels", "Water & HVAC stations"],
    featured: true,
  },
  {
    slug: "huceen-hbox-iot-gateway",
    image: "/products/huceen/huceen-hbox-iot-gateway/hbox.webp",
    gallery: [
      { src: "/products/huceen/huceen-hbox-iot-gateway/hbox.webp", label: "Hbox-4G/WiFi" },
    ],
    name: "HUCEEN HBox-4G/WiFi IoT Gateway",
    brand: "huceen",
    category: "networking",
    group: "IoT",
    series: "HBox-4G/WiFi · Universal IoT module",
    summary:
      "Universal IoT module that connects mainstream PLCs to the cloud over Ethernet, 4G or WiFi — for remote programming, monitoring and SMS alarms from a phone.",
    highlights: [
      "Connects to the PLC via Ethernet or serial (RJ45, RS485, RS232)",
      "Network cable, 4G or WiFi uplink",
      "Remote programming, debugging and program download",
      "Mobile monitoring and SMS alarm push",
      "Compatible with mainstream PLC brands",
    ],
    specs: [
      ["Uplink", "Ethernet, 4G, WiFi"],
      ["PLC interfaces", "RJ45, RS485, RS232"],
      ["Platform", "HCloud"],
    ],
    models: [["HBox-4G/WiFi", "Universal IoT module with 4G/WiFi/Ethernet and serial ports"]],
    applications: ["Remote machine service", "Pump stations", "Air compressors", "OEM after-sales"],
  },
  {
    slug: "huceen-smart-box-iot-module",
    image: "/products/huceen/huceen-smart-box-iot-module/smart-box.webp",
    gallery: [
      { src: "/products/huceen/huceen-smart-box-iot-module/smart-box.webp", label: "Smart Box, PLC Box, Custom Smart Box Manufacturer" },
    ],
    name: "HUCEEN Smart Box IoT Module",
    brand: "huceen",
    category: "networking",
    group: "IoT",
    series: "Smart Box · SMART PLC dedicated",
    summary:
      "Plug-and-play IoT module dedicated to SMART-series PLCs — no programming required, with remote program download and mobile alarms via SMS and WeChat.",
    highlights: [
      "Extends directly on the SMART PLC, no programming needed",
      "Network cable, 4G or WiFi connectivity",
      "Remote programming, debugging and downloading",
      "Mobile data monitoring with SMS and WeChat push alarms",
    ],
    specs: [
      ["Compatible PLCs", "E-200 SMART / S7-200 SMART family"],
      ["Uplink", "Ethernet, 4G, WiFi"],
      ["Platform", "HCloud"],
    ],
    models: [["Smart Box", "Dedicated IoT module for SMART PLCs, plug and play"]],
    applications: ["Remote monitoring of SMART PLC machines", "OEM fleet management"],
  },
  {
    slug: "huceen-hcloud-iot-platform",
    image: "/products/huceen/huceen-hcloud-iot-platform/hcloud-iot-solutions.png",
    gallery: [
      { src: "/products/huceen/huceen-hcloud-iot-platform/hcloud-iot-solutions.png", label: "HCloud-IoT Solutions" },
    ],
    name: "HUCEEN HCloud Industrial IoT Platform",
    brand: "huceen",
    category: "scada",
    group: "IoT",
    series: "HCloud · IoT solutions",
    summary:
      "Industrial cloud platform behind HBox and Smart Box: cloud SCADA screens, data monitoring, reports, statistics and customer/device management for machines anywhere.",
    highlights: [
      "Cloud configuration (web SCADA screens) without local software",
      "Live data monitoring, data reports and statistical analysis",
      "Customer and device management for OEMs",
      "Works with E-200 SMART, H7-1200, remote I/O, HPanel and HBox / Smart Box",
    ],
    specs: [
      ["Access", "Web and mobile"],
      ["Devices", "HBox, Smart Box, HUCEEN PLCs and HMIs"],
    ],
    models: [["HCloud", "Industrial IoT cloud platform"]],
    applications: ["Water management", "Building automation", "Energy", "Machine builders"],
  },

  /* ───────────────────────────── SIEMENS ───────────────────────────── */
  {
    slug: "simatic-s7-1200",
    name: "SIMATIC S7-1200",
    brand: "siemens",
    category: "plc",
    series: "CPU 1211C – 1217C · Order no. 6ES7 21x",
    summary:
      "Compact modular PLC for small-to-medium machine automation with integrated PROFINET, onboard I/O and motion control.",
    highlights: [
      "Integrated PROFINET port; up to 3 with communication modules",
      "Expandable with up to 8 signal modules and 3 communication modules",
      "Built-in PID, PTO/PWM motion outputs and web server",
      "Programmed in TIA Portal (STEP 7 Basic / Professional)",
    ],
    specs: [
      ["CPU variants", "1211C, 1212C, 1214C, 1215C, 1217C (DC/DC/DC, AC/DC/RLY, DC/DC/RLY)"],
      ["Work memory", "50 KB – 150 KB"],
      ["Supply", "24 V DC or 85–264 V AC"],
      ["Communication", "PROFINET, PROFIBUS, Modbus TCP/RTU, GPRS/LTE via CP"],
    ],
    applications: ["Packaging machines", "Conveyor systems", "Pump & fan skids", "Textile machinery"],
    featured: true,
  },
  {
    slug: "simatic-s7-1500",
    name: "SIMATIC S7-1500",
    brand: "siemens",
    category: "plc",
    series: "CPU 1511 – 1518 · T-CPU · F-CPU",
    summary:
      "High-performance modular controller for demanding machine and plant automation, with integrated safety and motion variants.",
    highlights: [
      "Fastest bit-processing in its class with integrated display",
      "Fail-safe (F) and technology (T) CPUs for safety and motion",
      "PROFINET IRT, OPC UA server/client, web server",
      "Seamless engineering in TIA Portal",
    ],
    specs: [
      ["CPU variants", "1511, 1513, 1515, 1516, 1517, 1518 (incl. F and T)"],
      ["Work memory", "150 KB – 6 MB (code)"],
      ["Communication", "PROFINET IRT, PROFIBUS, OPC UA, Modbus TCP"],
      ["Mounting", "S7-1500 rail with ET 200MP I/O"],
    ],
    applications: ["Process plants", "High-speed packaging", "Steel & metals", "Multi-axis machines"],
    featured: true,
  },
  {
    slug: "simatic-s7-200-smart",
    name: "SIMATIC S7-200 SMART",
    brand: "siemens",
    category: "plc",
    series: "CPU SR20 / SR30 / SR40 / SR60 · ST20 – ST60",
    summary: "Cost-effective compact PLC with Ethernet, ideal for small machines and OEM applications.",
    highlights: [
      "Integrated Ethernet and RS485 ports",
      "Up to 6 expansion modules and 1 signal board",
      "High-speed counters and PTO outputs on ST models",
      "Programmed with STEP 7-Micro/WIN SMART (free)",
    ],
    specs: [
      ["I/O on CPU", "20 / 30 / 40 / 60 points"],
      ["Program memory", "12 KB – 30 KB"],
      ["Communication", "PROFINET (V2.x), Modbus RTU, USS"],
      ["Supply", "24 V DC or 100–240 V AC"],
    ],
    applications: ["Small machines", "Water treatment skids", "Packaging OEMs", "Material handling"],
  },
  {
    slug: "simatic-et-200sp",
    name: "SIMATIC ET 200SP",
    brand: "siemens",
    category: "plc",
    series: "Distributed I/O · CPU 1510SP / 1512SP · IM 155-6",
    summary: "Compact distributed I/O system and controller for cabinet-mounted, high-density installations.",
    highlights: [
      "Ultra-compact 15 mm modules with push-in terminals",
      "PROFINET and PROFIBUS interface modules",
      "CPU variants for decentralised control",
      "Hot-swap and fail-safe modules available",
    ],
    specs: [
      ["Interface", "IM 155-6 PN (Standard / HF / HS), IM 155-6 DP"],
      ["Modules", "DI, DQ, AI, AQ, motor starters, technology modules"],
      ["Max modules per station", "64"],
      ["Protection", "IP20"],
    ],
    applications: ["Modular machines", "Distributed plant I/O", "Cabinet retrofits"],
  },
  {
    slug: "simatic-s7-300",
    name: "SIMATIC S7-300",
    brand: "siemens",
    category: "plc",
    series: "CPU 312 – 319 · Spares & migration",
    summary: "Proven modular PLC still running thousands of Indian plants — we supply spares and plan S7-1500 migrations.",
    highlights: [
      "Wide range of CPUs, signal and function modules",
      "PROFIBUS and PROFINET CPU variants",
      "Genuine spare modules for existing installations",
      "Migration support to S7-1500 and ET 200SP",
    ],
    specs: [
      ["CPUs", "312, 313C, 314, 315-2 PN/DP, 317, 319"],
      ["Programming", "STEP 7 V5.x / TIA Portal"],
      ["Communication", "MPI, PROFIBUS DP, PROFINET"],
    ],
    applications: ["Legacy plant support", "Spares stocking", "Migration projects"],
  },
  {
    slug: "simatic-s7-400",
    name: "SIMATIC S7-400",
    brand: "siemens",
    category: "plc",
    series: "CPU 412 – 417 · S7-400H redundant",
    summary: "Powerful process controller for large plants with redundancy and hot-swap options.",
    highlights: [
      "High-availability S7-400H redundant systems",
      "Hot-swapping of modules without shutdown",
      "Large program memory and multicomputing",
      "PCS 7 process control integration",
    ],
    specs: [
      ["CPUs", "412, 414, 416, 417 (incl. H variants)"],
      ["Communication", "PROFIBUS DP, PROFINET, Industrial Ethernet"],
      ["Use", "Process industry, power plants"],
    ],
    applications: ["Power plants", "Steel & cement", "Process industries"],
  },
  {
    slug: "siemens-logo-8",
    name: "LOGO! 8 Logic Module",
    brand: "siemens",
    category: "plc",
    series: "LOGO! 8.3 · 12/24RCE · 230RCE",
    summary: "Intelligent logic module with display, Ethernet and cloud connectivity for small automation tasks.",
    highlights: [
      "8 inputs / 4 outputs expandable to 24 DI / 20 DO / 8 AI / 8 AO",
      "Integrated Ethernet, web server and AWS cloud connection",
      "Simple function-block programming in LOGO! Soft Comfort",
      "Text display models with built-in keys",
    ],
    specs: [
      ["Supply", "12/24 V DC or 115/230 V AC"],
      ["Communication", "Ethernet, Modbus TCP, KNX (module)"],
      ["Expansion", "DM8, DM16, AM2, AM2 AQ modules"],
    ],
    applications: ["Building automation", "Small machines", "Pump control", "Lighting & HVAC"],
  },
  {
    slug: "simatic-hmi-basic-panels",
    name: "SIMATIC HMI Basic Panels (KTP)",
    brand: "siemens",
    category: "hmi",
    series: "KTP400 · KTP700 · KTP900 · KTP1200 Basic",
    summary: "Entry-level touch panels with PROFINET, perfectly matched to the S7-1200 for compact machines.",
    highlights: [
      "4-inch to 12-inch widescreen TFT with 65,536 colours",
      "PROFINET or PROFIBUS variants",
      "Keys plus touch operation on all sizes",
      "Configured in WinCC Basic (TIA Portal)",
    ],
    specs: [
      ["Sizes", "4.3\", 7\", 9\", 12.1\""],
      ["Interfaces", "PROFINET / PROFIBUS, USB"],
      ["Protection", "IP65 front"],
      ["Order no. prefix", "6AV2 123"],
    ],
    applications: ["Packaging", "Textile", "Water", "General machinery"],
    featured: true,
  },
  {
    slug: "simatic-hmi-comfort-panels",
    name: "SIMATIC HMI Comfort Panels",
    brand: "siemens",
    category: "hmi",
    series: "TP700 – TP2200 · KP400 – KP1500 Comfort",
    summary: "High-end operator panels with brilliant displays, archiving, scripting and extensive connectivity.",
    highlights: [
      "7-inch to 22-inch displays, touch or key variants",
      "PROFINET + PROFIBUS + USB on board",
      "Archives, recipes, VB scripting, Sm@rtServer remote",
      "Energy management and PROFIenergy support",
    ],
    specs: [
      ["Sizes", "7\", 9\", 12\", 15\", 19\", 22\""],
      ["Configuration", "WinCC Comfort / Advanced"],
      ["Protection", "IP65 front, IP20 rear"],
    ],
    applications: ["Pharma", "Process machines", "Multi-station lines"],
  },
  {
    slug: "simatic-hmi-unified-comfort",
    name: "SIMATIC HMI Unified Comfort Panels",
    brand: "siemens",
    category: "hmi",
    series: "MTP700 – MTP2200 Unified",
    summary: "Next-generation multi-touch panels with web-based visualisation, edge apps and modern UX.",
    highlights: [
      "Capacitive multi-touch, 7-inch to 22-inch",
      "WinCC Unified web technology (HTML5 / SVG)",
      "Industrial Edge apps and OPC UA",
      "Gesture operation and collaboration features",
    ],
    specs: [
      ["Sizes", "7\", 10\", 12\", 15\", 19\", 22\""],
      ["Configuration", "WinCC Unified (TIA Portal)"],
      ["Interfaces", "2× PROFINET, USB, SD"],
    ],
    applications: ["New machine designs", "Digitalisation projects", "Pharma & food"],
  },
  {
    slug: "sinamics-v20",
    name: "SINAMICS V20",
    brand: "siemens",
    category: "drives",
    series: "0.12 kW – 30 kW · 1AC 230 V / 3AC 400 V",
    summary: "Simple, robust and economical basic drive with quick commissioning — the best-selling drive in its class.",
    highlights: [
      "Quick commissioning with connection macros",
      "ECO mode and hibernation for energy savings",
      "Integrated braking chopper and USS / Modbus RTU",
      "Optional BOP-2, smart access WiFi module",
    ],
    specs: [
      ["Power range", "0.12 – 30 kW"],
      ["Supply", "1AC 200–240 V / 3AC 380–480 V"],
      ["Control", "V/f, FCC, multi-pump"],
      ["Order no. prefix", "6SL3210-5B"],
    ],
    applications: ["Pumps & fans", "Compressors", "Conveyors", "Mixers"],
    featured: true,
  },
  {
    slug: "sinamics-g120c",
    name: "SINAMICS G120C",
    brand: "siemens",
    category: "drives",
    series: "0.55 kW – 132 kW · 3AC 400 V",
    summary: "Compact, versatile general-purpose drive with integrated safety and PROFINET, USS or Modbus communication.",
    highlights: [
      "Safe Torque Off (STO) integrated as standard",
      "PROFINET / PROFIBUS / USS-Modbus variants",
      "Compact size with side-by-side mounting",
      "Vector control for open-loop and encoder-less applications",
    ],
    specs: [
      ["Power range", "0.55 – 132 kW"],
      ["Supply", "3AC 380–480 V"],
      ["Overload", "150 % for 3 s (high overload)"],
      ["Order no. prefix", "6SL3210-1KE"],
    ],
    applications: ["Conveyors", "Pumps & fans", "Mixers", "Extruders"],
    featured: true,
  },
  {
    slug: "sinamics-g120",
    name: "SINAMICS G120 (Modular)",
    brand: "siemens",
    category: "drives",
    series: "PM240-2 / PM250 power modules · CU240E-2 / CU250S-2 control units",
    summary: "Modular drive system with separate power and control units for maximum flexibility and serviceability.",
    highlights: [
      "Power modules 0.55 kW – 250 kW",
      "Control units with PROFINET, PROFIBUS, EtherNet/IP",
      "Integrated safety functions (STO, SS1, SLS)",
      "Positioning and encoder feedback with CU250S-2",
    ],
    specs: [
      ["Power range", "0.55 – 250 kW"],
      ["Supply", "3AC 200–240 V / 380–480 V / 500–690 V"],
      ["Communication", "PROFINET, PROFIBUS, EtherNet/IP, Modbus"],
    ],
    applications: ["Cranes & hoists", "Textile", "Process lines", "Extruders"],
  },
  {
    slug: "sinamics-g120x",
    name: "SINAMICS G120X / G120XA",
    brand: "siemens",
    category: "drives",
    series: "0.75 kW – 630 kW · Infrastructure drive",
    summary: "Purpose-built drive for pumps, fans and compressors in water, wastewater, HVAC and building applications.",
    highlights: [
      "Integrated C2 filter, DC reactor and STO",
      "Multi-pump, pipe-fill, sleep and PID functions",
      "PROFINET, BACnet MS/TP, Modbus RTU on board",
      "Seamless operation up to 55 °C",
    ],
    specs: [
      ["Power range", "0.75 – 630 kW"],
      ["Supply", "3AC 380–480 V"],
      ["Protection", "IP20 (IP55 option G120XA)"],
    ],
    applications: ["Water & wastewater", "HVAC", "Irrigation", "Building services"],
  },
  {
    slug: "sinamics-g115d",
    name: "SINAMICS G115D",
    brand: "siemens",
    category: "drives",
    series: "0.37 kW – 7.5 kW · Distributed conveyor drive",
    summary: "Compact IP65 drive for wall or motor mounting, built for horizontal conveyor applications.",
    highlights: [
      "Wall-mounted or motor-mounted (with SIMOTICS motor)",
      "IP65 protection, -30 °C to +55 °C",
      "PROFINET, EtherNet/IP, AS-i and IO-Link variants",
      "Integrated STO and quick plug connections",
    ],
    specs: [
      ["Power range", "0.37 – 7.5 kW"],
      ["Supply", "3AC 380–480 V"],
      ["Order no. prefix", "6SL3520 / 6SL3521"],
    ],
    applications: ["Airport baggage handling", "Warehouse conveyors", "Intralogistics"],
  },
  {
    slug: "sinamics-g220",
    name: "SINAMICS G220",
    brand: "siemens",
    category: "drives",
    series: "0.55 kW – 250 kW · Clean Power technology",
    summary: "New-generation general-purpose drive with ultra-low harmonics and built-in cybersecurity features.",
    highlights: [
      "Clean Power option: THDi below 5 % without external filters",
      "Integrated web server and PROFINET / EtherNet/IP",
      "Secure boot and encrypted communication",
      "Smart Access Module for wireless commissioning",
    ],
    specs: [
      ["Power range", "0.55 – 250 kW"],
      ["Supply", "3AC 380–480 V"],
      ["Communication", "PROFINET, EtherNet/IP, Modbus TCP"],
    ],
    applications: ["Pumps & fans", "Compressors", "Conveyors", "Grid-sensitive sites"],
  },
  {
    slug: "sinamics-dcm",
    name: "SINAMICS DCM DC Converter",
    brand: "siemens",
    category: "drives",
    series: "6 kW – 30 MW · Two-quadrant & four-quadrant",
    summary: "Modern DC drive for new installations and the modernisation of existing DC motor applications.",
    highlights: [
      "Drop-in modernisation of legacy DC drives",
      "Advanced CUD control unit with PROFINET / PROFIBUS",
      "Field supply integrated",
      "Free function blocks for winders and cranes",
    ],
    specs: [
      ["Rated current", "15 A – 3,000 A (parallel up to 30 MW)"],
      ["Supply", "3AC 400 V – 950 V"],
      ["Quadrants", "2Q / 4Q"],
    ],
    applications: ["Rolling mills", "Paper machines", "Cranes", "Extruders"],
  },
  {
    slug: "sinamics-s120",
    name: "SINAMICS S120",
    brand: "siemens",
    category: "servo",
    series: "Modular high-performance drive system",
    summary: "Modular servo and vector drive system for multi-axis machines with common DC bus and DRIVE-CLiQ.",
    highlights: [
      "Booksize, blocksize and chassis formats",
      "Active / Smart Line Modules for regenerative operation",
      "CU320-2 control unit for up to 6 servo axes",
      "Integrated safety and SIMOTION / S7-1500T motion control",
    ],
    specs: [
      ["Power range", "0.12 kW – 4,500 kW"],
      ["Motors", "SIMOTICS S-1FK7, 1FT7, 1PH8"],
      ["Communication", "PROFINET IRT, PROFIBUS, DRIVE-CLiQ"],
    ],
    applications: ["Printing & converting", "Plastics machines", "Machine tools", "Textile"],
  },
  {
    slug: "sinamics-v90",
    name: "SINAMICS V90 + SIMOTICS S-1FL6",
    brand: "siemens",
    category: "servo",
    series: "0.05 kW – 7 kW · PTI / PROFINET",
    summary: "Optimised, easy-to-use servo system for positioning and speed control with S7-1200 / S7-1500.",
    highlights: [
      "Pulse-train (PTI) and PROFINET (PN) variants",
      "Auto-tuning and one-button optimisation",
      "Low-inertia and high-inertia 1FL6 motors",
      "Basic positioner (EPOS) integrated in PN version",
    ],
    specs: [
      ["Power range", "0.05 – 7 kW"],
      ["Supply", "1AC 230 V / 3AC 400 V"],
      ["Encoder", "Incremental 2,500 ppr / absolute 21-bit"],
      ["Order no. prefix", "6SL3210-5F"],
    ],
    applications: ["Packaging", "Pick-and-place", "Labelling", "Cutting & feeding"],
    featured: true,
  },
  {
    slug: "sinamics-s200",
    name: "SINAMICS S200 + SIMOTICS S-1FL2",
    brand: "siemens",
    category: "servo",
    series: "0.1 kW – 7 kW · PROFINET IRT",
    summary: "New-generation servo system with PROFINET IRT, single-cable motors and safety integrated.",
    highlights: [
      "Single-cable connection with 21-bit absolute encoder",
      "PROFINET IRT for S7-1500 T-CPU motion",
      "STO, SS1, SLS safety functions",
      "Compact drives with web-based commissioning",
    ],
    specs: [
      ["Power range", "0.1 – 7 kW"],
      ["Supply", "1AC 230 V / 3AC 400 V"],
      ["Order no. prefix", "6SL5 / 1FL2"],
    ],
    applications: ["Packaging", "Electronics assembly", "Handling", "Printing"],
  },
  {
    slug: "sitop-power-supplies",
    name: "SITOP Power Supplies",
    brand: "siemens",
    category: "power",
    series: "SITOP PSU100 · PSU6200 · SITOP smart · LOGO!Power",
    summary: "Reliable 24 V DC control power with high efficiency, wide input range and optional redundancy / buffering.",
    highlights: [
      "Single and three-phase inputs, 0.6 A to 40 A outputs",
      "Redundancy, buffer and UPS modules",
      "Diagnostics via PROFINET on PSU6200",
      "Compact LOGO!Power for small panels",
    ],
    specs: [
      ["Output", "24 V DC, 5 V / 12 V / 48 V variants"],
      ["Input", "1AC 120/230 V or 3AC 400–500 V"],
      ["Efficiency", "Up to 94 %"],
      ["Order no. prefix", "6EP"],
    ],
    applications: ["All control panels", "Machine tools", "Process plants"],
  },
  {
    slug: "scalance-x-switches",
    name: "SCALANCE X Industrial Ethernet Switches",
    brand: "siemens",
    category: "networking",
    series: "SCALANCE XB · XC · XP · XM · XR",
    summary: "Unmanaged and managed industrial Ethernet switches for PROFINET networks in harsh environments.",
    highlights: [
      "Unmanaged XB-000 and managed XB-200 / XC-200 / XM-400",
      "Ring redundancy (MRP), VLAN, IGMP and PROFINET diagnostics",
      "Copper and fibre ports, IP30 / IP65 variants",
      "Rugged operating temperature and DIN-rail mounting",
    ],
    specs: [
      ["Ports", "5 – 24 (Fast / Gigabit)"],
      ["Management", "Web, SNMP, TIA Portal"],
      ["Order no. prefix", "6GK5"],
    ],
    applications: ["PROFINET machine networks", "Plant backbone", "Cabinet networking"],
  },
  {
    slug: "simatic-wincc",
    name: "SIMATIC WinCC (TIA Portal / Unified)",
    brand: "siemens",
    category: "scada",
    series: "WinCC Basic · Comfort · Advanced · Professional · Unified",
    summary: "Engineering and runtime software for HMI panels, PC-based visualisation and plant-wide SCADA.",
    highlights: [
      "Single engineering environment with TIA Portal",
      "Runtime for PC, panels and web clients",
      "Alarming, trends, archives and reporting",
      "OPC UA, SQL and IT integration",
    ],
    specs: [
      ["Editions", "Basic, Comfort, Advanced, Professional, Unified"],
      ["Runtime", "Panels, PC (Windows), Unified web"],
      ["Licensing", "Power tags: 128 – 100k+"],
    ],
    applications: ["Plant SCADA", "Machine visualisation", "Batch reporting"],
  },
  {
    slug: "simatic-ipc",
    name: "SIMATIC IPC Industrial PCs",
    brand: "siemens",
    category: "scada",
    series: "IPC127E · IPC227E · IPC427E · IPC677E · Panel PCs",
    summary: "Rugged box, rack and panel PCs for SCADA, edge computing and PC-based control 24/7.",
    highlights: [
      "Fanless box PCs to high-performance rack PCs",
      "Long-term availability and industrial-grade components",
      "Panel PCs with multi-touch displays",
      "Pre-installed Windows / Industrial OS options",
    ],
    specs: [
      ["Formats", "Nano box, Micro box, Rack, Panel"],
      ["CPU", "Intel Atom to Core i7 / Xeon"],
      ["Protection", "IP20 (box), IP65 front (panel)"],
    ],
    applications: ["SCADA servers", "Edge computing", "Machine control"],
  },
  {
    slug: "sirius-3rw-soft-starters",
    name: "SIRIUS 3RW Soft Starters",
    brand: "siemens",
    category: "control",
    visual: "switchgear",
    series: "3RW30 · 3RW40 · 3RW52 · 3RW55",
    summary: "Compact soft starters for smooth motor starting and stopping, from 3 kW to 1,200 kW.",
    highlights: [
      "Reduced starting current and mechanical stress",
      "Integrated bypass contacts and motor protection",
      "3RW55 with PROFINET / PROFIBUS and HMI module",
      "Pump stop function to avoid water hammer",
    ],
    specs: [
      ["Power range", "3 kW – 1,200 kW"],
      ["Voltage", "200 – 690 V AC"],
      ["Control", "2-phase (3RW30/40) and 3-phase (3RW52/55)"],
    ],
    applications: ["Pumps", "Fans", "Compressors", "Conveyors"],
  },
  {
    slug: "sirius-3rt-contactors",
    name: "SIRIUS 3RT Contactors & 3RU/3RB Overload Relays",
    brand: "siemens",
    category: "control",
    visual: "switchgear",
    series: "3RT20 · 3RT10 · 3RU21 · 3RB30",
    summary: "Modular motor control components — contactors, overload relays and starter combinations up to 250 kW.",
    highlights: [
      "Sizes S00 to S12, 7 A – 500 A",
      "Thermal and electronic overload relays",
      "Screw and spring-type terminals",
      "Complete starter combinations with 3RV circuit breakers",
    ],
    specs: [
      ["Rating", "3 – 250 kW (AC-3)"],
      ["Coil", "24 V DC, 110 V AC, 230 V AC etc."],
      ["Auxiliaries", "Snap-on blocks 1NO/1NC to 4 contacts"],
    ],
    applications: ["MCC panels", "Machine control", "DOL / star-delta starters"],
  },
  {
    slug: "simotics-motors",
    name: "SIMOTICS GP / SD Low-Voltage Motors",
    brand: "siemens",
    category: "motion",
    series: "1LE1 · IE2 / IE3 · 0.09 kW – 1,000 kW",
    summary: "Energy-efficient aluminium and cast-iron induction motors for general purpose and severe-duty use.",
    highlights: [
      "IE2 / IE3 efficiency, inverter-duty windings",
      "Aluminium (GP) and cast-iron (SD) frames",
      "Frame sizes 63 – 450",
      "Matched with SINAMICS drives for optimum performance",
    ],
    specs: [
      ["Power range", "0.09 – 1,000 kW"],
      ["Voltage", "400 V / 415 V, 50 Hz"],
      ["Protection", "IP55 (IP56/65 optional)"],
    ],
    applications: ["Pumps", "Fans", "Compressors", "Conveyors"],
  },

  /* ─────────────────────────────── DELTA ─────────────────────────────── */
  /* Generated from deltaelectronicsindia.com: Drive & Power Quality / Motion / Control / Field Device */
  {
    "slug": "delta-mh300",
    "name": "MH300 Series AC Drive",
    "brand": "delta",
    "category": "drives",
    "group": "Drive & Power Quality",
    "series": "Delta Inverters - AC Motor Drives",
    "summary": "Delta’s High Performance Compact Drive MH300 series is a new generation micro vector control that inherits Delta’s superior drive technology.",
    "highlights": [
      "Part of Delta's Inverters - AC Motor Drives range",
      "Genuine Delta product with manufacturer warranty"
    ],
    "specs": [
      [
        "Series / models",
        "MH300 Series"
      ],
      [
        "Delta range",
        "Drive & Power Quality > Inverters - AC Motor Drives"
      ]
    ],
    "applications": [
      "Pumps & fans",
      "Conveyors",
      "Packaging",
      "Textile",
      "Machine tools"
    ],
    "image": "/products/delta/delta-mh300/mh300.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-mh300/mh300.jpg",
        "label": "MH300 Series"
      }
    ]
  },
  {
    "slug": "delta-me300",
    "name": "ME300 Series AC Drive",
    "brand": "delta",
    "category": "drives",
    "group": "Drive & Power Quality",
    "series": "Delta Inverters - AC Motor Drives",
    "summary": "Delta‘s ME300 Series is a new generation compact vector control drive that inherits Delta’s superior drive technology, but with a 60% reduction in size. It supports both IM and PM motors, providing higher efficiency and flexibility.",
    "highlights": [
      "Part of Delta's Inverters - AC Motor Drives range",
      "Genuine Delta product with manufacturer warranty"
    ],
    "specs": [
      [
        "Series / models",
        "ME300 Series"
      ],
      [
        "Delta range",
        "Drive & Power Quality > Inverters - AC Motor Drives"
      ]
    ],
    "applications": [
      "Pumps & fans",
      "Conveyors",
      "Packaging",
      "Textile",
      "Machine tools"
    ],
    "image": "/products/delta/delta-me300/me300.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-me300/me300.jpg",
        "label": "ME300 Series"
      }
    ]
  },
  {
    "slug": "delta-ms300",
    "name": "MS300 Series AC Drive",
    "brand": "delta",
    "category": "drives",
    "group": "Drive & Power Quality",
    "series": "Delta Inverters - AC Motor Drives",
    "summary": "Delta's MS300 series is a standard compact vector control drive that inherits Delta’s superior drive technology. It supports both IM and PM motor control for application flexibility and provides STO safety mechanism.",
    "highlights": [
      "Part of Delta's Inverters - AC Motor Drives range",
      "Genuine Delta product with manufacturer warranty"
    ],
    "specs": [
      [
        "Series / models",
        "MS300 Series"
      ],
      [
        "Delta range",
        "Drive & Power Quality > Inverters - AC Motor Drives"
      ]
    ],
    "applications": [
      "Pumps & fans",
      "Conveyors",
      "Packaging",
      "Textile",
      "Machine tools"
    ],
    "featured": true,
    "image": "/products/delta/delta-ms300/ms300.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-ms300/ms300.jpg",
        "label": "MS300 Series"
      }
    ]
  },
  {
    "slug": "delta-vfd-e",
    "name": "VFD-E Series AC Drive",
    "brand": "delta",
    "category": "drives",
    "group": "Drive & Power Quality",
    "series": "Delta Inverters - AC Motor Drives",
    "summary": "Sensorless Vector AC Micro Drive. The VFD-E series represent Delta Electronics low horsepower, constant torque, IP20 rated Drive. Modular in design with flexible extension cards and a built-in PLC function, the E drive offers the ability to write and to execute simple Ladder Logic programs.",
    "highlights": [
      "Output frequency: 0.1~600Hz",
      "Modular & compact design",
      "Built-in PLC function",
      "Built-in EMI filter (230V 1 phase / 460V 3 phase)",
      "Optional Fieldbus Modules (DeviceNet, Profibus, LonWorks and CANopen)"
    ],
    "specs": [
      [
        "Series / models",
        "VFD-E Series"
      ],
      [
        "Delta range",
        "Drive & Power Quality > Inverters - AC Motor Drives"
      ]
    ],
    "applications": [
      "Pumps & fans",
      "Conveyors",
      "Packaging",
      "Textile",
      "Machine tools"
    ],
    "image": "/products/delta/delta-vfd-e/vfd-e.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-vfd-e/vfd-e.jpg",
        "label": "VFD-E Series"
      }
    ]
  },
  {
    "slug": "delta-vfd-el",
    "name": "VFD-EL Series AC Drive",
    "brand": "delta",
    "category": "drives",
    "group": "Drive & Power Quality",
    "series": "Delta Inverters - AC Motor Drives",
    "summary": "The VFD-EL series is multiple function new generation micro type AC drive. It has built in EMI filter, RFI switch, easy DC bus sharing for side-by-side installation, high precision current detection, overload protection, and a built In keypad.",
    "highlights": [
      "Small size pump & fan, blowing machine, conveyer belt, simple DIY processing equipment",
      "Output frequency: 0.1~600Hz",
      "3 points adjustable V/f curve",
      "Built-in PID feedback control",
      "RFI-switch for IT mains"
    ],
    "specs": [
      [
        "Series / models",
        "VFD-EL Series"
      ],
      [
        "Delta range",
        "Drive & Power Quality > Inverters - AC Motor Drives"
      ]
    ],
    "applications": [
      "Pumps & fans",
      "Conveyors",
      "Packaging",
      "Textile",
      "Machine tools"
    ],
    "image": "/products/delta/delta-vfd-el/vfd-el.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-vfd-el/vfd-el.jpg",
        "label": "VFD-EL Series"
      }
    ]
  },
  {
    "slug": "delta-vfd-el-w",
    "name": "VFD-EL-W Series AC Drive",
    "brand": "delta",
    "category": "drives",
    "group": "Drive & Power Quality",
    "series": "Delta Inverters - AC Motor Drives",
    "summary": "Delta's VFD-EL-W series is the new generation compact vector control drive. Simple, delicate and durable design inherits Delta’s superior drive technology.",
    "highlights": [
      "Edge banding machine",
      "Logistic conveyor",
      "Material handling",
      "Constant pressure pump"
    ],
    "specs": [
      [
        "Series / models",
        "VFD-EL-W Series"
      ],
      [
        "Delta range",
        "Drive & Power Quality > Inverters - AC Motor Drives"
      ]
    ],
    "applications": [
      "Pumps & fans",
      "Conveyors",
      "Packaging",
      "Textile",
      "Machine tools"
    ],
    "image": "/products/delta/delta-vfd-el-w/vfd-el-w.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-vfd-el-w/vfd-el-w.jpg",
        "label": "VFD-EL-W Series"
      }
    ]
  },
  {
    "slug": "delta-c2000-plus-c2000",
    "name": "C2000 Plus / C2000 Series AC Drive",
    "brand": "delta",
    "category": "drives",
    "group": "Drive & Power Quality",
    "series": "Delta Inverters - AC Motor Drives",
    "summary": "The C2000 Plus Series features precise speed, torque and position control functions that are suitable for both sensor and sensorless synchronous / asynchronous motors.",
    "highlights": [
      "Heavy-duty overload capability up to 150% / 60 sec. and 180% / 3 sec. at rated current; sensorless vector control of IM / PM / SynRM motors",
      "IP55 fans, efficient heat sink and Class 3C3 conformal PCB coating",
      "Built-in PLC (10k steps) and remote I/O integration for CANopen / Modbus master stations",
      "Positioning control, master / slave torque control, electromagnetic energy traction control, and more",
      "Communication cards (optional): EtherCAT, EtherNet/IP, DeviceNet, PROFINET, PROFIBUS DP, Modbus TCP, CANopen"
    ],
    "specs": [
      [
        "Series / models",
        "C2000 Plus / C2000 Series"
      ],
      [
        "Delta range",
        "Drive & Power Quality > Inverters - AC Motor Drives"
      ]
    ],
    "applications": [
      "Pumps & fans",
      "Conveyors",
      "Packaging",
      "Textile",
      "Machine tools"
    ],
    "featured": true,
    "image": "/products/delta/delta-c2000-plus-c2000/c2000-plus-c2000.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-c2000-plus-c2000/c2000-plus-c2000.jpg",
        "label": "C2000 Plus / C2000 Series"
      }
    ]
  },
  {
    "slug": "delta-c200",
    "name": "C200 Series AC Drive",
    "brand": "delta",
    "category": "drives",
    "group": "Drive & Power Quality",
    "series": "Delta Inverters - AC Motor Drives",
    "summary": "The VFD-C200 Series is an intelligent vector control micro drive that provides versatile control modes for motors and includes built-in PLC functions with capacity up to 5,000 steps.",
    "highlights": [
      "Food packaging machinery, conveyors, textile machinery, woodworking machinery, fans, pumps",
      "uilt-in PLC program with 5,000 steps capacity",
      "Built-in brake chopper",
      "Modbus RS-485 and CANopen (Slave)",
      "The high-brightness LED keypad shares the same extension cable of the VFD-E/M/B Series to maximize operation distance"
    ],
    "specs": [
      [
        "Series / models",
        "C200 Series"
      ],
      [
        "Delta range",
        "Drive & Power Quality > Inverters - AC Motor Drives"
      ]
    ],
    "applications": [
      "Pumps & fans",
      "Conveyors",
      "Packaging",
      "Textile",
      "Machine tools"
    ],
    "image": "/products/delta/delta-c200/c200.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-c200/c200.jpg",
        "label": "C200 Series"
      }
    ]
  },
  {
    "slug": "delta-vfd-ve",
    "name": "VFD-VE Series AC Drive",
    "brand": "delta",
    "category": "drives",
    "group": "Drive & Power Quality",
    "series": "Delta Inverters - AC Motor Drives",
    "summary": "This series adopts FOC (Field Oriented Control) which is a far more precise vector control algorithm. It can be used in both speed control and position control similar to a servo motor drive. The multi-function I/O terminal is expanded to meet users' various application needs.",
    "highlights": [
      "Power transmission equipment, elevator, crane, CNC tooling machines, extrusion machines, injection molding machines, and auto-storage and...",
      "Output frequency: 0~600Hz",
      "4 points adjustable V/F curve, Sensorless Vector Control, Field-Oriented Control",
      "Position/Speed/Torque control mode",
      "Sensorless Vector Control 150% torque at 0.5Hz"
    ],
    "specs": [
      [
        "Series / models",
        "VFD-VE Series"
      ],
      [
        "Delta range",
        "Drive & Power Quality > Inverters - AC Motor Drives"
      ]
    ],
    "applications": [
      "Pumps & fans",
      "Conveyors",
      "Packaging",
      "Textile",
      "Machine tools"
    ],
    "image": "/products/delta/delta-vfd-ve/vfd-ve.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-vfd-ve/vfd-ve.jpg",
        "label": "VFD-VE Series"
      }
    ]
  },
  {
    "slug": "delta-vfd-b",
    "name": "VFD-B Series AC Drive",
    "brand": "delta",
    "category": "drives",
    "group": "Drive & Power Quality",
    "series": "Delta Inverters - AC Motor Drives",
    "summary": "Sensorless Open and Closed Loop Vector AC Drive. The VFD-B series represents Delta's NEMA1 general purpose AC drive. The VFD-B series drive is rated to provide constant torque, featuring open and closed loop vector control.",
    "highlights": [
      "Output frequency 0.1~400 Hz",
      "Adjustable V/f curve and vector control",
      "Master/Auxiliary and 1st / 2nd frequency source selectable",
      "16-step speed control and 15-step preset speed process control",
      "Built-in PID feedback control"
    ],
    "specs": [
      [
        "Series / models",
        "VFD-B Series"
      ],
      [
        "Delta range",
        "Drive & Power Quality > Inverters - AC Motor Drives"
      ]
    ],
    "applications": [
      "Pumps & fans",
      "Conveyors",
      "Packaging",
      "Textile",
      "Machine tools"
    ],
    "image": "/products/delta/delta-vfd-b/vfd-b.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-vfd-b/vfd-b.jpg",
        "label": "VFD-B Series"
      }
    ]
  },
  {
    "slug": "delta-reg2000",
    "name": "REG2000 Series AC Drive",
    "brand": "delta",
    "category": "drives",
    "group": "Drive & Power Quality",
    "series": "Delta Inverters - AC Motor Drives",
    "summary": "A traditional drive system used for inertia load work generally performs rapid deceleration, braking and positioning. When its motor is in generator mode it produces large amounts of regenerative energy that must be consumed to maintain a stable DC bus voltage and safe operation.",
    "highlights": [
      "Part of Delta's Inverters - AC Motor Drives range",
      "Genuine Delta product with manufacturer warranty"
    ],
    "specs": [
      [
        "Series / models",
        "REG2000 Series"
      ],
      [
        "Delta range",
        "Drive & Power Quality > Inverters - AC Motor Drives"
      ]
    ],
    "applications": [
      "Pumps & fans",
      "Conveyors",
      "Packaging",
      "Textile",
      "Machine tools"
    ],
    "image": "/products/delta/delta-reg2000/reg2000.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-reg2000/reg2000.jpg",
        "label": "REG2000 Series"
      }
    ]
  },
  {
    "slug": "delta-c2000-hs",
    "name": "C2000-HS Series AC Drive",
    "brand": "delta",
    "category": "drives",
    "group": "Drive & Power Quality",
    "series": "Delta Inverters - AC Motor Drives",
    "summary": "C2000-HS Series AC Drive from Delta Electronics, part of Delta's Inverters - AC Motor Drives range.",
    "highlights": [
      "Industrial Automation / >",
      "Drive & Power Quality / >",
      "High-Speed Fluid Machinery Solution"
    ],
    "specs": [
      [
        "Series / models",
        "C2000-HS Series"
      ],
      [
        "Delta range",
        "Drive & Power Quality > Inverters - AC Motor Drives"
      ]
    ],
    "applications": [
      "Pumps & fans",
      "Conveyors",
      "Packaging",
      "Textile",
      "Machine tools"
    ],
    "image": "/products/delta/delta-c2000-hs/c2000-hs.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-c2000-hs/c2000-hs.jpg",
        "label": "C2000-HS Series"
      }
    ]
  },
  {
    "slug": "delta-vfd-ltc",
    "name": "VFD-LTC Series AC Drive",
    "brand": "delta",
    "category": "drives",
    "group": "Drive & Power Quality",
    "series": "Delta Inverters - AC Motor Drives",
    "summary": "As global e-commerce size expands, the logistics industry flourishes along the same lines.",
    "highlights": [
      "Adopts integrated double-drive frequency conversion and speed regulation, one-drive double motor (Conveyor motor and Telescopic motor)",
      "Thin volume, electric control cabinet space can be reduced by 60%",
      "Integrates the PLC (14k steps) with the motor drives to achieve secondary development",
      "Integrated 24 VDC 35 W Power Supply and Relays",
      "Sufficient I/O Terminals: 21 DI (17 User-defined DI & 4 internal defined DI), 13 DO (8 User-defined DO & 5 Internal defined DO)"
    ],
    "specs": [
      [
        "Series / models",
        "VFD-LTC Series"
      ],
      [
        "Delta range",
        "Drive & Power Quality > Inverters - AC Motor Drives"
      ]
    ],
    "applications": [
      "Pumps & fans",
      "Conveyors",
      "Packaging",
      "Textile",
      "Machine tools"
    ],
    "image": "/products/delta/delta-vfd-ltc/vfd-ltc.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-vfd-ltc/vfd-ltc.jpg",
        "label": "VFD-LTC Series"
      }
    ]
  },
  {
    "slug": "delta-hes",
    "name": "HES Series AC Drive",
    "brand": "delta",
    "category": "drives",
    "group": "Drive & Power Quality",
    "series": "Delta Inverters - AC Motor Drives",
    "summary": "Delta's Hybrid Energy Saving (HES) System provides precise pressure and flow controls for each injection molding process and also solves the energy waste issues of a traditional injection molding machine. This solution helps to improve product quality, market competitiveness and productivity.",
    "highlights": [
      "Injection Molding Machine",
      "Die Casting Machine",
      "Hydraulic Machine",
      "Low Oil Temperature: Oil temperature reduced by 5~10℃; oil usage reduced by 50~60%; requires 50% less oil tank volume; lower cooler speci...",
      "High Duplication Accuracy: Precise flow and pressure control featuring duplication of products with less than 0.09% difference."
    ],
    "specs": [
      [
        "Series / models",
        "HES Series"
      ],
      [
        "Delta range",
        "Drive & Power Quality > Inverters - AC Motor Drives"
      ]
    ],
    "applications": [
      "Pumps & fans",
      "Conveyors",
      "Packaging",
      "Textile",
      "Machine tools"
    ],
    "image": "/products/delta/delta-hes/hes.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-hes/hes.jpg",
        "label": "HES Series"
      }
    ]
  },
  {
    "slug": "delta-vfd-vj",
    "name": "VFD-VJ Series AC Drive",
    "brand": "delta",
    "category": "drives",
    "group": "Drive & Power Quality",
    "series": "Delta Inverters - AC Motor Drives",
    "summary": "The Delta Hybrid Servo Drive VFD-VJ Series is designed with AC servo technology to drive hydraulic systems with perfect control of the drive, motor and hydraulic unit.",
    "highlights": [
      "Injection Molding Machine",
      "Die Casting Machine",
      "Hydraulic Machine",
      "Field Oriented Control",
      "Suitable for both synchronous servo motors and asynchronous servo motors"
    ],
    "specs": [
      [
        "Series / models",
        "VFD-VJ Series"
      ],
      [
        "Delta range",
        "Drive & Power Quality > Inverters - AC Motor Drives"
      ]
    ],
    "applications": [
      "Pumps & fans",
      "Conveyors",
      "Packaging",
      "Textile",
      "Machine tools"
    ],
    "image": "/products/delta/delta-vfd-vj/vfd-vj.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-vfd-vj/vfd-vj.jpg",
        "label": "VFD-VJ Series"
      }
    ]
  },
  {
    "slug": "delta-mst",
    "name": "MST Series AC Drive",
    "brand": "delta",
    "category": "drives",
    "group": "Drive & Power Quality",
    "series": "Delta Inverters - AC Motor Drives",
    "summary": "The Synchronous Torque Motor MST Series is designed for excellent performance at low speeds and is suitable for high torque applications. It implements synchronous motions with high-speed response for acceleration and deceleration to shorten processing time and achieve high productivity.",
    "highlights": [
      "High efficiency: Reduces electricity cost up to 20% compared with hydraulic motors, and up to 10% compared with gear motors",
      "Increased productivity: Synchronous motions along with hydraulic systems and high-speed acceleration / deceleration reduce processing cyc...",
      "Low noise: Low noise generation without hydraulic motors or gear motors provide a better working environment",
      "High quality: Direct-drive mode, no backlash, and accurate control of plastic melting",
      "Stable rotation: Multiple motor poles for selection and stable rotating speed for high yield rate"
    ],
    "specs": [
      [
        "Series / models",
        "MST Series"
      ],
      [
        "Delta range",
        "Drive & Power Quality > Inverters - AC Motor Drives"
      ]
    ],
    "applications": [
      "Pumps & fans",
      "Conveyors",
      "Packaging",
      "Textile",
      "Machine tools"
    ],
    "image": "/products/delta/delta-mst/mst.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-mst/mst.jpg",
        "label": "MST Series"
      }
    ]
  },
  {
    "slug": "delta-cfp2000",
    "name": "CFP2000 Series AC Drive",
    "brand": "delta",
    "category": "drives",
    "group": "Drive & Power Quality",
    "series": "Delta Inverters - AC Motor Drives",
    "summary": "Delta's CFP2000 series is an AC motor drive specially designed for HVAC, fans & pumps, and water treatment applications. It is designed with an IP55 enclosure to provide effective protection from dust and other particles and to offer a good level of protection from water.",
    "highlights": [
      "IP55 and IP41 enclosure protections",
      "Optional built-in mains switch for IP55 models",
      "Built-in EMC filter; IEC61800-3 C2, C1 standard",
      "Built-in DC reactor effectively lowers harmonic distortion; IEC61000-3-12 standard",
      "PCB (Printed Circuit Board) enhances drive durability; Class 3C3 standard"
    ],
    "specs": [
      [
        "Series / models",
        "CFP2000 Series"
      ],
      [
        "Delta range",
        "Drive & Power Quality > Inverters - AC Motor Drives"
      ]
    ],
    "applications": [
      "Pumps & fans",
      "Conveyors",
      "Packaging",
      "Textile",
      "Machine tools"
    ],
    "image": "/products/delta/delta-cfp2000/cfp2000.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-cfp2000/cfp2000.jpg",
        "label": "CFP2000 Series"
      }
    ]
  },
  {
    "slug": "delta-cp2000",
    "name": "CP2000 Series AC Drive",
    "brand": "delta",
    "category": "drives",
    "group": "Drive & Power Quality",
    "series": "Delta Inverters - AC Motor Drives",
    "summary": "Delta's Sensorless Vector Control Drive CP2000 Series has extended the idea of energy saving and uses this principal as the basis of its design.",
    "highlights": [
      "The calendar function allows user to program the PLC procedure, the ON/OFF in chronological order, the daylight saving time and etc.",
      "A wide range of models (0.75~400KW) to fulfill the demands of different industries.",
      "The modularized design eases the maintenance and expansion.",
      "Long-life design and self diagnosis for key components.",
      "Special PCB coating design (Printed Circuit Board) for enhancing environmental tolerance."
    ],
    "specs": [
      [
        "Series / models",
        "CP2000 Series"
      ],
      [
        "Delta range",
        "Drive & Power Quality > Inverters - AC Motor Drives"
      ]
    ],
    "applications": [
      "Pumps & fans",
      "Conveyors",
      "Packaging",
      "Textile",
      "Machine tools"
    ],
    "image": "/products/delta/delta-cp2000/cp2000.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-cp2000/cp2000.jpg",
        "label": "CP2000 Series"
      }
    ]
  },
  {
    "slug": "delta-mh300-l",
    "name": "MH300-L AC Drive",
    "brand": "delta",
    "category": "drives",
    "group": "Drive & Power Quality",
    "series": "Delta Inverters - AC Motor Drives",
    "summary": "Delta‘s MH300-L is a compact drive for elevators that features several elevator specific functions, such as open loop IM motor control and EPS/ARD. Other built-in functions include EMC filter, brake chopper, I/O extension slot, USB port and 5k steps PLC capacity.",
    "highlights": [
      "Power rating: 2.2kW ~ 15kW",
      "Supports asynchronous motor with open loop control",
      "Compact design and user-friendly operation",
      "EPS/ARD and sequence control functions for elevator applications",
      "Built-in 16-segment LCD digital keypad"
    ],
    "specs": [
      [
        "Series / models",
        "MH300-L"
      ],
      [
        "Delta range",
        "Drive & Power Quality > Inverters - AC Motor Drives"
      ]
    ],
    "applications": [
      "Pumps & fans",
      "Conveyors",
      "Packaging",
      "Textile",
      "Machine tools"
    ],
    "image": "/products/delta/delta-mh300-l/mh300-l.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-mh300-l/mh300-l.jpg",
        "label": "MH300-L"
      }
    ]
  },
  {
    "slug": "delta-ied-s",
    "name": "IED-S Series AC Drive",
    "brand": "delta",
    "category": "drives",
    "group": "Drive & Power Quality",
    "series": "Delta Inverters - AC Motor Drives",
    "summary": "The IED-S Series offers an integrated elevator drive and control solution which inherits Delta advanced vector control technologies and provides precise control of both IM & PM motors for a safe and smooth ride.",
    "highlights": [
      "All types of MR/MRL elevator systems for high-speed elevators, residential elevators, freight elevators, and commercial elevators",
      "Field oriented vector control for accurate elevator operation control",
      "Overload capability: 150% for 60 seconds; 180% for 10 seconds",
      "Emergency power supply (EPS) mode",
      "Group control of up to 8 elevators without additional control cards, up to 63 floors"
    ],
    "specs": [
      [
        "Series / models",
        "IED-S Series"
      ],
      [
        "Delta range",
        "Drive & Power Quality > Inverters - AC Motor Drives"
      ]
    ],
    "applications": [
      "Pumps & fans",
      "Conveyors",
      "Packaging",
      "Textile",
      "Machine tools"
    ],
    "image": "/products/delta/delta-ied-s/ied-s.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-ied-s/ied-s.jpg",
        "label": "IED-S Series"
      }
    ]
  },
  {
    "slug": "delta-vfd-dd",
    "name": "VFD-DD Series AC Drive",
    "brand": "delta",
    "category": "drives",
    "group": "Drive & Power Quality",
    "series": "Delta Inverters - AC Motor Drives",
    "summary": "The Delta DD series elevator door control drive is an intelligent drive with outstanding features that include a modularized design for easy removal and installation of terminal blocks, a power switch designed for safety, and a built-in digital keypad that provides quick operation control.",
    "highlights": [
      "Doors control",
      "Door width is determined automatically and is recorded in related elevator parameters.",
      "Smooth door re-open curve reduces vibration",
      "PM motor A, B, Z, -Z and Delta@@s ECMD-B9160GMS series PM motor",
      "Supports open collector and voltage output encoder (5~12VDC) for induction motors"
    ],
    "specs": [
      [
        "Series / models",
        "VFD-DD Series"
      ],
      [
        "Delta range",
        "Drive & Power Quality > Inverters - AC Motor Drives"
      ]
    ],
    "applications": [
      "Pumps & fans",
      "Conveyors",
      "Packaging",
      "Textile",
      "Machine tools"
    ],
    "image": "/products/delta/delta-vfd-dd/vfd-dd.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-vfd-dd/vfd-dd.jpg",
        "label": "VFD-DD Series"
      }
    ]
  },
  {
    "slug": "delta-afe2000",
    "name": "AFE2000 Series AC Drive",
    "brand": "delta",
    "category": "drives",
    "group": "Drive & Power Quality",
    "series": "Delta Inverters - AC Motor Drives",
    "summary": "AFE2000 Series AC Drive from Delta Electronics, part of Delta's Inverters - AC Motor Drives range.",
    "highlights": [
      "Industrial Automation / >",
      "Drive & Power Quality / >",
      "Power Quality / >",
      "Active Front End"
    ],
    "specs": [
      [
        "Series / models",
        "AFE2000 Series"
      ],
      [
        "Delta range",
        "Drive & Power Quality > Inverters - AC Motor Drives"
      ]
    ],
    "applications": [
      "Pumps & fans",
      "Conveyors",
      "Packaging",
      "Textile",
      "Machine tools"
    ],
    "image": "/products/delta/delta-afe2000/afe2000.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-afe2000/afe2000.jpg",
        "label": "AFE2000 Series"
      }
    ]
  },
  {
    "slug": "delta-vfd-ed",
    "name": "VFD-ED Series AC Drive",
    "brand": "delta",
    "category": "drives",
    "group": "Drive & Power Quality",
    "series": "Delta Inverters - AC Motor Drives",
    "summary": "Delta's VFD-ED series AC motor drive designed for elevators are based on years' of experiences in designing AC motor drives, and the experience accumulated since the first Delta elevator AC motor drive VL series launched in 2007.",
    "highlights": [
      "Power rating from 2.2kW to 75 kW",
      "Supports both asynchronous and synchronous motors",
      "Output frequency up to 400Hz",
      "8 programmable digital inputs/ 6 programmable output",
      "Supports various encoders (ABZ, ABZ+UVW, SIN/COS, SIN/COS+Endat2.1)"
    ],
    "specs": [
      [
        "Series / models",
        "VFD-ED Series"
      ],
      [
        "Delta range",
        "Drive & Power Quality > Inverters - AC Motor Drives"
      ]
    ],
    "applications": [
      "Pumps & fans",
      "Conveyors",
      "Packaging",
      "Textile",
      "Machine tools"
    ],
    "image": "/products/delta/delta-vfd-ed/vfd-ed.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-vfd-ed/vfd-ed.jpg",
        "label": "VFD-ED Series"
      }
    ]
  },
  {
    "slug": "delta-ct2000",
    "name": "CT2000 Series AC Drive",
    "brand": "delta",
    "category": "drives",
    "group": "Drive & Power Quality",
    "series": "Delta Inverters - AC Motor Drives",
    "summary": "The CT2000 Series is an industrial drive designed for textile and other critical environment applications that have a high density of dust, fiber, oil or other substances.",
    "highlights": [
      "Fanless design with high efficiency heat sink to prevent fiber and dust from clogging or entering the drive. No more overheating problems...",
      "Flange mount installation to enhance system safety and stability and provide excellent heat dissipation performance (*1)",
      "Supports external fan connection (*1)",
      "Wall mount installation model with a large fan (*2)",
      "Deceleration Energy Backup (DEB) function for smooth motor deceleration control"
    ],
    "specs": [
      [
        "Series / models",
        "CT2000 Series"
      ],
      [
        "Delta range",
        "Drive & Power Quality > Inverters - AC Motor Drives"
      ]
    ],
    "applications": [
      "Pumps & fans",
      "Conveyors",
      "Packaging",
      "Textile",
      "Machine tools"
    ],
    "image": "/products/delta/delta-ct2000/ct2000.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-ct2000/ct2000.jpg",
        "label": "CT2000 Series"
      }
    ]
  },
  {
    "slug": "delta-ied",
    "name": "IED Series AC Drive",
    "brand": "delta",
    "category": "drives",
    "group": "Drive & Power Quality",
    "series": "Delta Inverters - AC Motor Drives",
    "summary": "The Delta Integrated Elevator Drive (IED) meets international safety standards (UL/CE) to ensure elevator passenger safety. The new technology integrates host controller and AC motor drive functions into one MCU which vastly improves the elevator's operational performance, efficiency and reliability.",
    "highlights": [
      "High speed elevator, residential elevator, freight elevator, commercial elevator",
      "Output frequency: 0.00~120.00Hz; ability to output 150% of torque at 0Hz",
      "Field Oriented Vector Control precisely controls elevator operation",
      "Elevator accelerates or decelerates in a smooth S curve to provide a smooth and reliable ride",
      "Back up power connection (supports single-phase 230VAC UPS) to ensure passenger safety when power failure occurs"
    ],
    "specs": [
      [
        "Series / models",
        "IED Series"
      ],
      [
        "Delta range",
        "Drive & Power Quality > Inverters - AC Motor Drives"
      ]
    ],
    "applications": [
      "Pumps & fans",
      "Conveyors",
      "Packaging",
      "Textile",
      "Machine tools"
    ],
    "image": "/products/delta/delta-ied/ied.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-ied/ied.jpg",
        "label": "IED Series"
      }
    ]
  },
  {
    "slug": "delta-vfd-vl",
    "name": "VFD-VL Series AC Drive",
    "brand": "delta",
    "category": "drives",
    "group": "Drive & Power Quality",
    "series": "Delta Inverters - AC Motor Drives",
    "summary": "Delta's VFD-VL series AC motor drive designed for elevators are based on years' of experiences in designing AC motor drives, and the latest control technology adopted in VFD-VL will offer you high reliability and safety. All the features of VFD-VL are to meet the needs from the market, e.g.",
    "highlights": [
      "Output frequency: 0.00~120.00Hz, offering output torque of more than 150% when at zero speed.",
      "The vector control by FOC, enabling smooth and comfortable operation of the elevator.",
      "S-curve acceleration/deceleration and battery for abnormal power shut-down.",
      "Overload capacity: 150% of rated current for 1 minute and 200% of rated current for 10 seconds",
      "Complied with EN954-1 (safety-relay) standard."
    ],
    "specs": [
      [
        "Series / models",
        "VFD-VL Series"
      ],
      [
        "Delta range",
        "Drive & Power Quality > Inverters - AC Motor Drives"
      ]
    ],
    "applications": [
      "Pumps & fans",
      "Conveyors",
      "Packaging",
      "Textile",
      "Machine tools"
    ],
    "image": "/products/delta/delta-vfd-vl/vfd-vl.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-vfd-vl/vfd-vl.jpg",
        "label": "VFD-VL Series"
      }
    ]
  },
  {
    "slug": "delta-vfd-m",
    "name": "VFD-M Series AC Drive",
    "brand": "delta",
    "category": "drives",
    "group": "Drive & Power Quality",
    "series": "Delta Inverters - AC Motor Drives",
    "summary": "Sensorless Vector Micro AC Drive. The compact design is ideal for small and medium horsepower applications. The M drive is designed to provide an ultra-low-noise operation, and includes several innovative technologies that reduce interference.",
    "highlights": [
      "Output frequency 0.1~400 Hz",
      "Adjustable V/f curve and vector control",
      "Carrier frequency up to 15 kHz",
      "Auto torque boost & slip compensation",
      "Built-in PID feedback control"
    ],
    "specs": [
      [
        "Series / models",
        "VFD-M Series"
      ],
      [
        "Delta range",
        "Drive & Power Quality > Inverters - AC Motor Drives"
      ]
    ],
    "applications": [
      "Pumps & fans",
      "Conveyors",
      "Packaging",
      "Textile",
      "Machine tools"
    ],
    "image": "/products/delta/delta-vfd-m/vfd-m.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-vfd-m/vfd-m.jpg",
        "label": "VFD-M Series"
      }
    ]
  },
  {
    "slug": "delta-vfd-s",
    "name": "VFD-S Series AC Drive",
    "brand": "delta",
    "category": "drives",
    "group": "Drive & Power Quality",
    "series": "Delta Inverters - AC Motor Drives",
    "summary": "General Purpose AC Micro Drive. Delta Electronics most cost effective general purpose drive. The VFD-S series drive is famous for its low-noise carrier frequency feature and easy to use keypad.",
    "highlights": [
      "Air conditioner for large buildings; water supply system for large buildings; temperature control of middle/large oven; webbing loom; pac...",
      "Output frequency 1.0~400 Hz",
      "Adjustable V/f curve",
      "Carrier frequency up to 10 kHz",
      "Built-in PID feedback control"
    ],
    "specs": [
      [
        "Series / models",
        "VFD-S Series"
      ],
      [
        "Delta range",
        "Drive & Power Quality > Inverters - AC Motor Drives"
      ]
    ],
    "applications": [
      "Pumps & fans",
      "Conveyors",
      "Packaging",
      "Textile",
      "Machine tools"
    ],
    "image": "/products/delta/delta-vfd-s/vfd-s.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-vfd-s/vfd-s.jpg",
        "label": "VFD-S Series"
      }
    ]
  },
  {
    "slug": "delta-vfd-l2",
    "name": "VFD-L2 Series AC Drive",
    "brand": "delta",
    "category": "drives",
    "group": "Drive & Power Quality",
    "series": "Delta Inverters - AC Motor Drives",
    "summary": "Sub-fractional low cost AC Drive. Specifically designed for low horsepower applications with built-in EMI filter to efficiently reduce electromagnetic interference and to conform to the CE EMI directive.",
    "highlights": [
      "Simple wood cutting, conveyer belt, wire drawing machine, etc.",
      "Output frequency 1.0-400Hz",
      "Adjustable V/f curve",
      "Carrier frequency up to 10 kHz",
      "Auto torque boost and slip compensation"
    ],
    "specs": [
      [
        "Series / models",
        "VFD-L2 Series"
      ],
      [
        "Delta range",
        "Drive & Power Quality > Inverters - AC Motor Drives"
      ]
    ],
    "applications": [
      "Pumps & fans",
      "Conveyors",
      "Packaging",
      "Textile",
      "Machine tools"
    ],
    "image": "/products/delta/delta-vfd-l2/vfd-l2.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-vfd-l2/vfd-l2.jpg",
        "label": "VFD-L2 Series"
      }
    ]
  },
  {
    "slug": "delta-vfd-l1",
    "name": "VFD-L1 Series AC Drive",
    "brand": "delta",
    "category": "drives",
    "group": "Drive & Power Quality",
    "series": "Delta Inverters - AC Motor Drives",
    "summary": "Sub-fractional low cost AC Drive. Specifically designed for low horsepower applications with built-in EMI filter to efficiently reduce electromagnetic interference and to conform to the CE EMI directive.",
    "highlights": [
      "Simple wood cutting, conveyer belt, wire drawing machine, etc.",
      "Output frequency 1.0-120Hz",
      "Adjustable V/f curve",
      "Carrier frequency up to 10 kHz",
      "Auto torque boost"
    ],
    "specs": [
      [
        "Series / models",
        "VFD-L1 Series"
      ],
      [
        "Delta range",
        "Drive & Power Quality > Inverters - AC Motor Drives"
      ]
    ],
    "applications": [
      "Pumps & fans",
      "Conveyors",
      "Packaging",
      "Textile",
      "Machine tools"
    ],
    "image": "/products/delta/delta-vfd-l1/vfd-l1.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-vfd-l1/vfd-l1.jpg",
        "label": "VFD-L1 Series"
      }
    ]
  },
  {
    "slug": "delta-asda-a3",
    "name": "ASDA-A3 Series Servo System",
    "brand": "delta",
    "category": "servo",
    "group": "Motion",
    "series": "Delta Servo Systems - AC Servo Motors and Drives",
    "summary": "As the market of automated manufacturing rapidly develops, the need for servo products with higher performance, speed, precision, bandwidth, and functionality is widely increasing.",
    "highlights": [
      "Higher responsiveness and shorter settling time increases productivity",
      "16,777,216 pulses/turns ensure precise positioning",
      "Steady performance at low-speed enhances machining quality",
      "Keeps motor's position during power shortage",
      "E-CAM & 99 sophisticated motion commands and segments allowed"
    ],
    "specs": [
      [
        "Series / models",
        "ASDA-A3 Series"
      ],
      [
        "Delta range",
        "Motion > Servo Systems - AC Servo Motors and Drives"
      ]
    ],
    "applications": [
      "Packaging",
      "Electronics assembly",
      "Printing",
      "Pick-and-place",
      "Cutting"
    ],
    "featured": true,
    "image": "/products/delta/delta-asda-a3/asda-a3.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-asda-a3/asda-a3.jpg",
        "label": "ASDA-A3 Series"
      }
    ]
  },
  {
    "slug": "delta-asda-m",
    "name": "ASDA-M Series Servo System",
    "brand": "delta",
    "category": "servo",
    "group": "Motion",
    "series": "Delta Servo Systems - AC Servo Motors and Drives",
    "summary": "With its innovative and cutting-edge servo drive design, the ASDA-M series gives a new definition to servo system by achieving the perfect combination of motion controller and servo system.",
    "highlights": [
      "Part of Delta's Servo Systems - AC Servo Motors and Drives range",
      "Genuine Delta product with manufacturer warranty"
    ],
    "specs": [
      [
        "Series / models",
        "ASDA-M Series"
      ],
      [
        "Delta range",
        "Motion > Servo Systems - AC Servo Motors and Drives"
      ]
    ],
    "applications": [
      "Packaging",
      "Electronics assembly",
      "Printing",
      "Pick-and-place",
      "Cutting"
    ],
    "image": "/products/delta/delta-asda-m/asda-m.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-asda-m/asda-m.jpg",
        "label": "ASDA-M Series"
      }
    ]
  },
  {
    "slug": "delta-asda-a2",
    "name": "ASDA-A2 Series Servo System",
    "brand": "delta",
    "category": "servo",
    "group": "Motion",
    "series": "Delta Servo Systems - AC Servo Motors and Drives",
    "summary": "To meet the demanding requirements of motion control applications in industrial automation and satisfy the needs of high-precision positioning control requested by machine designers and system integrators, Delta launched the high-performance motion control ASDA-A2 series servo motors and servo dr...",
    "highlights": [
      "There are five models of ASDA-A2 series: ASDA-A2-L, ASDA-A2-M, ASDA-A2-F, ASDA-A2-U, ASDA-A2-E",
      "ASDA-A2-L / (Full-close Control) / ASDA-A2-M / (CANopen) / ASDA-A2-F / (DMCNET) / ASDA-A2-U / (Internal Position Control) / ASDA-A2-E / S...",
      "Up to 1kHz frequency response. Settling time below 1ms.",
      "Built-in automatic low-frequency vibration suppression (for crane control): two vibration suppression filters are provided to minimize th...",
      "Built-in automatic high-frequency resonance suppression: two auto notch filters are provided to suppress the mechanical resonance automat..."
    ],
    "specs": [
      [
        "Series / models",
        "ASDA-A2 Series"
      ],
      [
        "Delta range",
        "Motion > Servo Systems - AC Servo Motors and Drives"
      ]
    ],
    "applications": [
      "Packaging",
      "Electronics assembly",
      "Printing",
      "Pick-and-place",
      "Cutting"
    ],
    "image": "/products/delta/delta-asda-a2/asda-a2.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-asda-a2/asda-a2.jpg",
        "label": "ASDA-A2 Series"
      }
    ]
  },
  {
    "slug": "delta-asda-a2r",
    "name": "ASDA-A2R Series Servo System",
    "brand": "delta",
    "category": "servo",
    "group": "Motion",
    "series": "Delta Servo Systems - AC Servo Motors and Drives",
    "summary": "In the ever-changing global market, industries transform and grow. The key to success is responding to the market with fast, precise, and continuous innovative customization and solutions for our customers.",
    "highlights": [
      "Part of Delta's Servo Systems - AC Servo Motors and Drives range",
      "Genuine Delta product with manufacturer warranty"
    ],
    "specs": [
      [
        "Series / models",
        "ASDA-A2R Series"
      ],
      [
        "Delta range",
        "Motion > Servo Systems - AC Servo Motors and Drives"
      ]
    ],
    "applications": [
      "Packaging",
      "Electronics assembly",
      "Printing",
      "Pick-and-place",
      "Cutting"
    ],
    "image": "/products/delta/delta-asda-a2r/asda-a2r.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-asda-a2r/asda-a2r.jpg",
        "label": "ASDA-A2R Series"
      }
    ]
  },
  {
    "slug": "delta-asda-b3",
    "name": "ASDA-B3 Series Servo System",
    "brand": "delta",
    "category": "servo",
    "group": "Motion",
    "series": "Delta Servo Systems - AC Servo Motors and Drives",
    "summary": "The Standard Delta Servo System ASDA-B3 Series features high tolerance, stable operation and high precision motion control functions. It creates a highly efficient, user-friendly operation environment for equipment and optimizes production efficiency and output value.",
    "highlights": [
      "High responsiveness shortens settling time by 40% compared with previous models",
      "All motors support 24-bit absolute encoders",
      "Multiple high-speed communication bus for options",
      "Built-in PID control",
      "Advanced gain adjustment function, system analysis interface, vibration suppression, and system modeling functions"
    ],
    "specs": [
      [
        "Series / models",
        "ASDA-B3 Series"
      ],
      [
        "Delta range",
        "Motion > Servo Systems - AC Servo Motors and Drives"
      ]
    ],
    "applications": [
      "Packaging",
      "Electronics assembly",
      "Printing",
      "Pick-and-place",
      "Cutting"
    ],
    "image": "/products/delta/delta-asda-b3/asda-b3.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-asda-b3/asda-b3.jpg",
        "label": "ASDA-B3 Series"
      }
    ]
  },
  {
    "slug": "delta-asda-b2",
    "name": "ASDA-B2 Series Servo System",
    "brand": "delta",
    "category": "servo",
    "group": "Motion",
    "series": "Delta Servo Systems - AC Servo Motors and Drives",
    "summary": "To meet the requirements of general-purpose machine tools and enhance the competitive advantage in the industrial automation market, Delta Electronics, Inc. is pleased to announce that the new high-performance and cost-effective ASDA-B2 series servo motors and drives has launched into the market.",
    "highlights": [
      "Support pulse input (up to 4Mbps) and analog voltage two kinds of command.",
      "Built-in position, speed and torque three control modes (speed and torque mode could be controlled via internal parameters or analog volt...",
      "There auto notch filters are provided to suppress the mechanical resonance automatically and make the system operate more smoothly.",
      "Motor sizing software is offered for the customers to conduct the estimation of the equipment conveniently.",
      "ASDA-Soft configuration software (tuning software) is provided for the customers to meet the performance requirements quickly."
    ],
    "specs": [
      [
        "Series / models",
        "ASDA-B2 Series"
      ],
      [
        "Delta range",
        "Motion > Servo Systems - AC Servo Motors and Drives"
      ]
    ],
    "applications": [
      "Packaging",
      "Electronics assembly",
      "Printing",
      "Pick-and-place",
      "Cutting"
    ],
    "image": "/products/delta/delta-asda-b2/asda-b2.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-asda-b2/asda-b2.jpg",
        "label": "ASDA-B2 Series"
      }
    ]
  },
  {
    "slug": "delta-asda-a",
    "name": "ASDA-A Series Servo System",
    "brand": "delta",
    "category": "servo",
    "group": "Motion",
    "series": "Delta Servo Systems - AC Servo Motors and Drives",
    "summary": "The A series is an omnibearing integrated servo system with advanced functions. Not only pulse commands and analog voltage signal control, the A series also provides internal point-to-point position control mode (8 internal programmable registers) and offers various internal control functions suc...",
    "highlights": [
      "A wide power range: from 100W to 1.5kW, 1-phase or 3-phase; from 2kW to 3kW, 3-phase",
      "Input power supply: AC 200V ~ 230V",
      "Built-in Position / Speed / Torque control modes",
      "8 internal programmable registers (point-to-point position control)",
      "Internal control function: Indexing, Feed step control function (for cutting applications)"
    ],
    "specs": [
      [
        "Series / models",
        "ASDA-A Series"
      ],
      [
        "Delta range",
        "Motion > Servo Systems - AC Servo Motors and Drives"
      ]
    ],
    "applications": [
      "Packaging",
      "Electronics assembly",
      "Printing",
      "Pick-and-place",
      "Cutting"
    ],
    "image": "/products/delta/delta-asda-a/asda-a.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-asda-a/asda-a.jpg",
        "label": "ASDA-A Series"
      }
    ]
  },
  {
    "slug": "delta-asda-a-plus",
    "name": "ASDA-A+ Series Servo System",
    "brand": "delta",
    "category": "servo",
    "group": "Motion",
    "series": "Delta Servo Systems - AC Servo Motors and Drives",
    "summary": "The A+ series is a new type of omnibearing integrated servo system with advanced functions.",
    "highlights": [
      "A wide power range: from 4.5kW to 7.5kW, 3-phase",
      "Input power supply: AC 200V ~ 230V",
      "Frequency characteristics (Responsiveness): 550Hz",
      "Incremental 20-bit (1280000 ppr) optical encoder",
      "Medium / High inertia servo motors are available including: 3kW, 3.5kW, 4.5kW, 5.5kW, 7.5kW."
    ],
    "specs": [
      [
        "Series / models",
        "ASDA-A+ Series"
      ],
      [
        "Delta range",
        "Motion > Servo Systems - AC Servo Motors and Drives"
      ]
    ],
    "applications": [
      "Packaging",
      "Electronics assembly",
      "Printing",
      "Pick-and-place",
      "Cutting"
    ],
    "image": "/products/delta/delta-asda-a-plus/asda-a-plus.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-asda-a-plus/asda-a-plus.jpg",
        "label": "ASDA-A+ Series"
      }
    ]
  },
  {
    "slug": "delta-asda-b",
    "name": "ASDA-B Series Servo System",
    "brand": "delta",
    "category": "servo",
    "group": "Motion",
    "series": "Delta Servo Systems - AC Servo Motors and Drives",
    "summary": "The B series is a digital servo system with standard functions. It provides built-in Position / Speed / Torque control modes and supports pulse command input and analog signal control. Parameters editing and operation is done via an optional handheld digital keypad.",
    "highlights": [
      "A wide power range: from 100W to 1.5kW, 1-phase or 3-phase; 2kW, 3-phase",
      "Input power supply: AC 200V ~ 230V",
      "Available motor capacity: from 100W to 2kW",
      "Built-in Position / Speed / Torque control modes",
      "Pulse commands and analog voltage signals are accessed via input / output interface - CN1."
    ],
    "specs": [
      [
        "Series / models",
        "ASDA-B Series"
      ],
      [
        "Delta range",
        "Motion > Servo Systems - AC Servo Motors and Drives"
      ]
    ],
    "applications": [
      "Packaging",
      "Electronics assembly",
      "Printing",
      "Pick-and-place",
      "Cutting"
    ],
    "image": "/products/delta/delta-asda-b/asda-b.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-asda-b/asda-b.jpg",
        "label": "ASDA-B Series"
      }
    ]
  },
  {
    "slug": "delta-asda-ab",
    "name": "ASDA-AB Series Servo System",
    "brand": "delta",
    "category": "servo",
    "group": "Motion",
    "series": "Delta Servo Systems - AC Servo Motors and Drives",
    "summary": "The AB series is a high performance digital servo system with advanced functions and supports various motor options including low, medium and high inertia servo motors to meet different application needs.",
    "highlights": [
      "A wide power range: from 100W to 1.5kW, 1-phase or 3-phase; from 2kW to 3kW, 3-phase",
      "Input power supply: from 100W to 400W, AC 100V ~ 115V; from 100W to 3kW, AC 200V ~ 230V",
      "Frequency characteristics (Responsiveness): 450Hz",
      "Incremental 2500ppr optical encoder",
      "Built-in Position / Speed / Torque control modes"
    ],
    "specs": [
      [
        "Series / models",
        "ASDA-AB Series"
      ],
      [
        "Delta range",
        "Motion > Servo Systems - AC Servo Motors and Drives"
      ]
    ],
    "applications": [
      "Packaging",
      "Electronics assembly",
      "Printing",
      "Pick-and-place",
      "Cutting"
    ],
    "image": "/products/delta/delta-asda-ab/asda-ab.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-asda-ab/asda-ab.jpg",
        "label": "ASDA-AB Series"
      }
    ]
  },
  {
    "slug": "delta-cnc-solutions",
    "name": "CNC Solutions (NC A / B Series, OPENCNC EB)",
    "brand": "delta",
    "category": "motion",
    "group": "Motion",
    "series": "Delta CNC Solution",
    "summary": "Delta's CNC Solution features high-speed, high precision and superior surface finishing that enhances the speed, quality, stability of CNC machine tools.",
    "highlights": [
      "Built-in 32-bit high speed and high processing dual CPU for multi-tasking operation for enhanced performance",
      "High-speed communication servo drives and high performance, high resolution servo motors provide fully digital data transmission and impr...",
      "High speed and high precision motion control with the aid of Delta’s DMCNET high speed motion control system",
      "Multi-block look-ahead of acceleration/deceleration before interpolation for complete contouring control balances speed and precision to ...",
      "A user-friendly Human Machine Interface for direct auto-gain tuning adjustment and parameter back-up of servo system"
    ],
    "specs": [
      [
        "Series / models",
        "CNC Solution A Series, CNC Solution B Series, OPENCNC Controller NC EB Series, Touchscreen, Second Operating Panel, Expansion I/O, Handwheel"
      ],
      [
        "Delta range",
        "Motion > CNC Solution"
      ]
    ],
    "models": [
      [
        "CNC Solution A Series",
        "Built-in 32-bit high speed and high processing dual CPU for multi-tasking operation for enhanced performance"
      ],
      [
        "CNC Solution B Series",
        "Built-in 32-bit high-speed dual CPU for multiple tasks and high performance"
      ],
      [
        "OPENCNC Controller NC EB Series",
        "A new operating interface built-in with the DOPSoft software for interface customization"
      ],
      [
        "Touchscreen",
        "New 10” / 15” external touch screen that enhances the user experience"
      ],
      [
        "Second Operating Panel",
        "Delta's second operating panel provides abundant keys/buttons and supports user-defined features according to "
      ],
      [
        "Expansion I/O",
        "Delta has a variety of accessories for different applications"
      ],
      [
        "Handwheel",
        "Delta has a variety of accessories for different applications"
      ]
    ],
    "applications": [
      "Machine tools",
      "Packaging",
      "Robotics",
      "Indexing"
    ],
    "image": "/products/delta/delta-cnc-solutions/cnc-solution-a.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-cnc-solutions/cnc-solution-a.jpg",
        "label": "CNC Solution A Series"
      },
      {
        "src": "/products/delta/delta-cnc-solutions/cnc-solution-b.jpg",
        "label": "CNC Solution B Series"
      },
      {
        "src": "/products/delta/delta-cnc-solutions/opencnc-controller-nc-eb.jpg",
        "label": "OPENCNC Controller NC EB Series"
      },
      {
        "src": "/products/delta/delta-cnc-solutions/touchscreen.jpg",
        "label": "Touchscreen"
      },
      {
        "src": "/products/delta/delta-cnc-solutions/second-operating-panel.jpg",
        "label": "Second Operating Panel"
      },
      {
        "src": "/products/delta/delta-cnc-solutions/expansion-i-o.jpg",
        "label": "Expansion I/O"
      },
      {
        "src": "/products/delta/delta-cnc-solutions/handwheel.jpg",
        "label": "Handwheel"
      }
    ]
  },
  {
    "slug": "delta-planetary-gearboxes",
    "name": "PS / PA Series Planetary Gearboxes",
    "brand": "delta",
    "category": "motion",
    "group": "Motion",
    "series": "Delta Planetary Gearbox",
    "summary": "The PS Series Planetary Gearbox features many advantages such as low noise, high output torque and low backlash. It is able to smoothly transfer power from motor to applications and is widely applied to various industries.",
    "highlights": [
      "Backlash for concentric 1-stage gearbox is under 3 arcmin.",
      "Backlash for right angle 1-stage gearbox is under 4 arcmin.",
      "Efficiency for 1-stage model exceeds 97%.",
      "2-stage model exceeds 94%.",
      "Backlash for 1-stage gearbox is under 8 arcmin."
    ],
    "specs": [
      [
        "Series / models",
        "PS Series, PA Series"
      ],
      [
        "Delta range",
        "Motion > Planetary Gearbox"
      ]
    ],
    "models": [
      [
        "PS Series",
        "Backlash for concentric 1-stage gearbox is under 3 arcmin."
      ],
      [
        "PA Series",
        "Backlash for 1-stage gearbox is under 8 arcmin."
      ]
    ],
    "applications": [
      "Machine tools",
      "Packaging",
      "Robotics",
      "Indexing"
    ],
    "image": "/products/delta/delta-planetary-gearboxes/ps.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-planetary-gearboxes/ps.jpg",
        "label": "PS Series"
      },
      {
        "src": "/products/delta/delta-planetary-gearboxes/pa.jpg",
        "label": "PA Series"
      }
    ]
  },
  {
    "slug": "delta-ax-8-motion-controller",
    "name": "AX-8 Series Motion Controller (CODESYS)",
    "brand": "delta",
    "category": "plc",
    "group": "Motion",
    "series": "Delta CODESYS Motion Solution",
    "summary": "Delta PC-Based Host Motion Controller AX-8 Series / The AX-8 Series uses the CODESYS motion control platform to achieve easy programming for complicated motion control settings. It supports EtherCAT communications for high speed motion control, and connects other equipment or software via OPC UA.",
    "highlights": [
      "Intel x86 CPU with fan-less and compact design",
      "Provides low-voltage detection and data overwriting functions for PACs",
      "Supports EtherCAT, Modbus, and OPC UA protocols",
      "Supports 8 high-speed digital local inputs / outputs",
      "64 axes/1ms synchronous servo control"
    ],
    "specs": [
      [
        "Series / models",
        "AX-8 Series"
      ],
      [
        "Delta range",
        "Motion > CODESYS Motion Solution"
      ]
    ],
    "applications": [
      "Packaging",
      "Textile",
      "Printing",
      "Material handling",
      "Process skids"
    ],
    "image": "/products/delta/delta-ax-8-motion-controller/ax-8.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-ax-8-motion-controller/ax-8.jpg",
        "label": "AX-8 Series"
      }
    ]
  },
  {
    "slug": "delta-dxmc-s",
    "name": "DXMC-S Series Motion Controller",
    "brand": "delta",
    "category": "motion",
    "group": "Motion",
    "series": "Delta Embedded Motion Controller",
    "summary": "Search and download offer documentation, support information, certificates, CAD and software.",
    "highlights": [
      "Max. 32 servo axes control (execution cycle 0.5 ms)",
      "Supports EtherCAT , Modbus, user-defined protocol communications and SSI & pulse encoder signals",
      "Various robot modules to control up to 4 robots synchronously",
      "Tension control, rotary cut, flying sheer and E-CAM function blocks",
      "IEC-61131-3 compliant PLC motion control programming and advanced robot languages"
    ],
    "specs": [
      [
        "Series / models",
        "DXMC-S Series"
      ],
      [
        "Delta range",
        "Motion > Embedded Motion Controller"
      ]
    ],
    "applications": [
      "Machine tools",
      "Packaging",
      "Robotics",
      "Indexing"
    ],
    "image": "/products/delta/delta-dxmc-s/dxmc-s.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-dxmc-s/dxmc-s.jpg",
        "label": "DXMC-S Series"
      }
    ]
  },
  {
    "slug": "delta-dxmc-p",
    "name": "DXMC-P Series Motion Controller",
    "brand": "delta",
    "category": "motion",
    "group": "Motion",
    "series": "Delta Embedded Motion Controller",
    "summary": "DXMC-P Series Motion Controller from Delta Electronics, part of Delta's Embedded Motion Controller range.",
    "highlights": [
      "Motion controller with 7” & 10” HMI integrated",
      "Max. 8 servo axes control (execution cycle 2 ms)",
      "Supports EtherCAT, Modbus, and user-defined protocol communications",
      "Built-in RS-232 / RS-422 / RS-485 COM ports",
      "Tension control, rotary cut, flying sheer and E-CAM function blocks"
    ],
    "specs": [
      [
        "Series / models",
        "DXMC-P Series"
      ],
      [
        "Delta range",
        "Motion > Embedded Motion Controller"
      ]
    ],
    "applications": [
      "Machine tools",
      "Packaging",
      "Robotics",
      "Indexing"
    ],
    "image": "/products/delta/delta-dxmc-p/dxmc-p.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-dxmc-p/dxmc-p.jpg",
        "label": "DXMC-P Series"
      }
    ]
  },
  {
    "slug": "delta-asda-ms",
    "name": "ASDA-MS Series Motion Controller",
    "brand": "delta",
    "category": "motion",
    "group": "Motion",
    "series": "Delta Embedded Motion Controller",
    "summary": "The ASDA-MS Series integrates robot controller and 4 axes of servo drives to perform mathematical calculations, smooth track planning, and loop control in one unit, greatly enhancing real-time system calculation performance.",
    "highlights": [
      "Integrates robot controller and 4 axes of servo drives in one single unit with high flexibility and reliability",
      "Up to 10 axes motion control (4-axis robot + 6 external axes). Timely exchange of information for the controller and servo drive for real...",
      "Supports the IEC 61131-3 standard for five kinds of programming languages",
      "Offers Delta Robot Languages (DRL) for developing robot application programs",
      "Supports G-code programming for path planning for greater application flexibility"
    ],
    "specs": [
      [
        "Series / models",
        "ASDA-MS Series"
      ],
      [
        "Delta range",
        "Motion > Embedded Motion Controller"
      ]
    ],
    "applications": [
      "Machine tools",
      "Packaging",
      "Robotics",
      "Indexing"
    ],
    "image": "/products/delta/delta-asda-ms/asda-ms.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-asda-ms/asda-ms.jpg",
        "label": "ASDA-MS Series"
      }
    ]
  },
  {
    "slug": "delta-ah-series-plc",
    "name": "AH Series PLC",
    "brand": "delta",
    "category": "plc",
    "group": "Control",
    "series": "Delta PLC - Programmable Logic Controllers",
    "summary": "The AH500 supports excellent motion control functions including 3-axis linear interpolation, 2-axis arc interpolation, and 3-axis helical interpolation.",
    "highlights": [
      "Modularized Hardware Structure, Highly Integrated Software",
      "Highly integrated software ISPSoft: Graphical Interface with 5 programming languages",
      "Enhanced flexibility: Max. 100m between 2 local extension racks",
      "Improved maintainability: Hot-swapping function keeps the system running",
      "The redundant CPU of the AH Series adopts a reliable redundancy structure, and integrates synchronous modules, Ethernet ports and serial ..."
    ],
    "specs": [
      [
        "Series / models",
        "AH Series Standard CPU, AH Series Redundant CPU, AH Series Motion CPU, AH Series Expansion Module"
      ],
      [
        "Delta range",
        "Control > PLC - Programmable Logic Controllers"
      ]
    ],
    "models": [
      [
        "AH Series Standard CPU",
        "Modularized Hardware Structure, Highly Integrated Software"
      ],
      [
        "AH Series Redundant CPU",
        "The redundant CPU of the AH Series adopts a reliable redundancy structure, and integrates synchronous modules,"
      ],
      [
        "AH Series Motion CPU",
        "Provides EtherCAT, DMCNET and pulse train solutions for customers."
      ],
      [
        "AH Series Expansion Module",
        "Digital modules (output/input/mix) : 16 , 32 , 64 I/O"
      ]
    ],
    "applications": [
      "Packaging",
      "Textile",
      "Printing",
      "Material handling",
      "Process skids"
    ],
    "image": "/products/delta/delta-ah-series-plc/ah-standard-cpu.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-ah-series-plc/ah-standard-cpu.jpg",
        "label": "AH Series Standard CPU"
      },
      {
        "src": "/products/delta/delta-ah-series-plc/ah-redundant-cpu.jpg",
        "label": "AH Series Redundant CPU"
      },
      {
        "src": "/products/delta/delta-ah-series-plc/ah-motion-cpu.jpg",
        "label": "AH Series Motion CPU"
      },
      {
        "src": "/products/delta/delta-ah-series-plc/ah-expansion-module.jpg",
        "label": "AH Series Expansion Module"
      }
    ]
  },
  {
    "slug": "delta-as-series-plc",
    "name": "AS Series PLC",
    "brand": "delta",
    "category": "plc",
    "group": "Control",
    "series": "Delta PLC - Programmable Logic Controllers",
    "summary": "The Delta Compact Modular Mid-range PLC AS Series is a high performance multi-purpose controller designed for all kinds of automated equipment.",
    "highlights": [
      "New 32-bit SoC (System on Chip) CPU to enhance execution speed（40 k steps / ms）",
      "Positioning control function for up to 8-axis motion control via CANopen / 6-axis 200 kHz pulse control",
      "Robust non-backplane design and patented DIN rail clips for vertical module installation and replacement",
      "ISPSoft editing software for programming, hardware configuration, network communication, system diagnostics and positioning planning",
      "New 32-bit SoC (System on Chip) CPU"
    ],
    "specs": [
      [
        "Series / models",
        "AS Series Standard CPU, AS Series Motion CPU, AS / AX-3 Series Expansion Module"
      ],
      [
        "Delta range",
        "Control > PLC - Programmable Logic Controllers"
      ]
    ],
    "models": [
      [
        "AS Series Standard CPU",
        "New 32-bit SoC (System on Chip) CPU to enhance execution speed（40 k steps / ms）"
      ],
      [
        "AS Series Motion CPU",
        "Up to 32 axes can be synchronized (including virtual axes) / - AS516E(EtherCAT): 16 axes/1ms, max. 16 real axe"
      ],
      [
        "AS / AX-3 Series Expansion Module",
        "Digital I/O modules (output/input/mix): 8 , 16 , 32 , 64 I/O"
      ]
    ],
    "applications": [
      "Packaging",
      "Textile",
      "Printing",
      "Material handling",
      "Process skids"
    ],
    "featured": true,
    "image": "/products/delta/delta-as-series-plc/as-standard-cpu.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-as-series-plc/as-standard-cpu.jpg",
        "label": "AS Series Standard CPU"
      },
      {
        "src": "/products/delta/delta-as-series-plc/as-motion-cpu.jpg",
        "label": "AS Series Motion CPU"
      },
      {
        "src": "/products/delta/delta-as-series-plc/as-ax-3-expansion-module.jpg",
        "label": "AS / AX-3 Series Expansion Module"
      }
    ]
  },
  {
    "slug": "delta-ax-3-motion-cpu",
    "name": "AX-3 Series Motion CPU",
    "brand": "delta",
    "category": "plc",
    "group": "Control",
    "series": "Delta PLC - Programmable Logic Controllers",
    "summary": "The AX-3 Series Motion CPU adapts the CODESYS platform and supports both motion and logic control applications. It has multiple communication ports and an EtherCAT motion control interface onboard.",
    "highlights": [
      "Part of Delta's PLC - Programmable Logic Controllers range",
      "Genuine Delta product with manufacturer warranty"
    ],
    "specs": [
      [
        "Series / models",
        "AX-3 Series Motion CPU"
      ],
      [
        "Delta range",
        "Control > PLC - Programmable Logic Controllers"
      ]
    ],
    "applications": [
      "Packaging",
      "Textile",
      "Printing",
      "Material handling",
      "Process skids"
    ],
    "image": "/products/delta/delta-ax-3-motion-cpu/ax-3-motion-cpu.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-ax-3-motion-cpu/ax-3-motion-cpu.jpg",
        "label": "AX-3 Series Motion CPU"
      }
    ]
  },
  {
    "slug": "delta-dvp-eh3-plc",
    "name": "DVP-EH3 Series PLC",
    "brand": "delta",
    "category": "plc",
    "group": "Control",
    "series": "Delta PLC - Programmable Logic Controllers",
    "summary": "The new generation DVP-EH3 PLC is the high-end model of the Delta DVP-E series. / It provides larger program capacity and data registers for more demanding and complex applications.",
    "highlights": [
      "High-speed pulse output: 4 sets of 200kHz pulse output (DVP40/48/64/80EH00T3)",
      "Supports max. 4 hardware 200kHz high-speed counters",
      "Increases many motion control instructions to meet the applications that require high-speed and high-precision",
      "positioning control such as labeling machines, packaging machines and printing machines",
      "Offers linear / arc interpolation motion control"
    ],
    "specs": [
      [
        "Series / models",
        "DVP-EH3 Series, DVP-EH Series Expansion Module"
      ],
      [
        "Delta range",
        "Control > PLC - Programmable Logic Controllers"
      ]
    ],
    "models": [
      [
        "DVP-EH3 Series",
        "High-speed pulse output: 4 sets of 200kHz pulse output (DVP40/48/64/80EH00T3)"
      ],
      [
        "DVP-EH Series Expansion Module",
        "Digital modules (output/input/mix): 8,16, 32, 48 I/O"
      ]
    ],
    "applications": [
      "Packaging",
      "Textile",
      "Printing",
      "Material handling",
      "Process skids"
    ],
    "image": "/products/delta/delta-dvp-eh3-plc/dvp-eh3.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-dvp-eh3-plc/dvp-eh3.jpg",
        "label": "DVP-EH3 Series"
      },
      {
        "src": "/products/delta/delta-dvp-eh3-plc/dvp-eh-expansion-module.jpg",
        "label": "DVP-EH Series Expansion Module"
      }
    ]
  },
  {
    "slug": "delta-dvp-es3-plc",
    "name": "DVP-ES3 Series PLC",
    "brand": "delta",
    "category": "plc",
    "group": "Control",
    "series": "Delta PLC - Programmable Logic Controllers",
    "summary": "The DVP-ES3 Series is a slim PLC for high-end programmable control and applications. Its CPU is built-in with 4 high-speed counter inputs, up to 4-axis control (pulse), and support for a total of 8-axis (CANopen) position outputs (optional).",
    "highlights": [
      "Processing machines, injection molding machines, packaging machines, precision textile machines, large-scale warehousing, logistics systems",
      "CPU: / - 32-bit high-speed processor / - Built-in I/O points: 32 / 48 / 64 / 80",
      "Program capacity: 64k steps",
      "General register: 64k words",
      "Communication ports: RS-485 * 2, Ethernet * 1, and CANopen DS301 * 1"
    ],
    "specs": [
      [
        "Series / models",
        "DVP-ES3 Series, DVP-ES3/2 Series Expansion Module"
      ],
      [
        "Delta range",
        "Control > PLC - Programmable Logic Controllers"
      ]
    ],
    "models": [
      [
        "DVP-ES3 Series",
        "Processing machines, injection molding machines, packaging machines, precision textile machines, large-scale w"
      ],
      [
        "DVP-ES3/2 Series Expansion Module",
        "Digital modules (output/input/mix): 8,16, 32(AC power)"
      ]
    ],
    "applications": [
      "Packaging",
      "Textile",
      "Printing",
      "Material handling",
      "Process skids"
    ],
    "featured": true,
    "image": "/products/delta/delta-dvp-es3-plc/dvp-es3.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-dvp-es3-plc/dvp-es3.jpg",
        "label": "DVP-ES3 Series"
      },
      {
        "src": "/products/delta/delta-dvp-es3-plc/dvp-es3-2-expansion-module.jpg",
        "label": "DVP-ES3/2 Series Expansion Module"
      }
    ]
  },
  {
    "slug": "delta-dvp-es2-plc",
    "name": "DVP-ES2 Series PLC",
    "brand": "delta",
    "category": "plc",
    "group": "Control",
    "series": "Delta PLC - Programmable Logic Controllers",
    "summary": "ES2 series is a small PLC for basic sequential control. It is economical, highly efficient and functional.",
    "highlights": [
      "MPU points:16 / 20 / 24 / 32 / 40 / 60",
      "Program capacity: 16k steps",
      "Built-in with 3 COM ports: 1 RS-232 port and 2 RS-485 ports, all are able to operate independently (Master/Slave)",
      "Max. I/O points: 256 input points + 16 output points, or 256 output points + 16 input points",
      "DVP-EX2 MPU is built in with 12-bit 4AD/2DA and offers analog/temperature modules of 14-bit resolution"
    ],
    "specs": [
      [
        "Series / models",
        "DVP-ES2 Series"
      ],
      [
        "Delta range",
        "Control > PLC - Programmable Logic Controllers"
      ]
    ],
    "applications": [
      "Packaging",
      "Textile",
      "Printing",
      "Material handling",
      "Process skids"
    ],
    "image": "/products/delta/delta-dvp-es2-plc/dvp-es2.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-dvp-es2-plc/dvp-es2.jpg",
        "label": "DVP-ES2 Series"
      }
    ]
  },
  {
    "slug": "delta-dvp-ec3-plc",
    "name": "DVP-EC3 Series PLC",
    "brand": "delta",
    "category": "plc",
    "group": "Control",
    "series": "Delta PLC - Programmable Logic Controllers",
    "summary": "EC3 series is the most economical solution for sequential control and communication monitoring and can operate independently, allowing the user to achieve stand-alone monitor, e.g. monitoring phototransistor coupler, proximity switch, optical sensor, indicator and illumination switch.",
    "highlights": [
      "MPU points: 10/ 14 / 16 / 24 / 32 / 60",
      "Max. I/O points: 60",
      "Program capacity: 4k steps",
      "COM ports: Built-in RS-232 and RS-485 ports (available in 16-60 point models); compatible with Modbus ASCII/RTU protocol",
      "Built-in 4 points of high-speed counters*:"
    ],
    "specs": [
      [
        "Series / models",
        "DVP-EC3 Series"
      ],
      [
        "Delta range",
        "Control > PLC - Programmable Logic Controllers"
      ]
    ],
    "applications": [
      "Packaging",
      "Textile",
      "Printing",
      "Material handling",
      "Process skids"
    ],
    "image": "/products/delta/delta-dvp-ec3-plc/dvp-ec3.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-dvp-ec3-plc/dvp-ec3.jpg",
        "label": "DVP-EC3 Series"
      }
    ]
  },
  {
    "slug": "delta-dvp-sv2-plc",
    "name": "DVP-SV2 Series PLC",
    "brand": "delta",
    "category": "plc",
    "group": "Control",
    "series": "Delta PLC - Programmable Logic Controllers",
    "summary": "The new generation DVP-SV2 PLC is the high-end model of the Delta DVP-S series. It provides larger program capacities and data registers for more demanding and complex applications.",
    "highlights": [
      "High-speed pulse output: 4 sets of 200kHz pulse output",
      "Supports max. 4 hardware 200kHz high-speed counters",
      "Increases many motion control instructions to meet the applications that require high-speed and high-precision positioning",
      "Offers linear / arc interpolation motion control",
      "Provides up to 16 external interrupt pointers"
    ],
    "specs": [
      [
        "Series / models",
        "DVP-SV2 Series"
      ],
      [
        "Delta range",
        "Control > PLC - Programmable Logic Controllers"
      ]
    ],
    "applications": [
      "Packaging",
      "Textile",
      "Printing",
      "Material handling",
      "Process skids"
    ],
    "image": "/products/delta/delta-dvp-sv2-plc/dvp-sv2.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-dvp-sv2-plc/dvp-sv2.jpg",
        "label": "DVP-SV2 Series"
      }
    ]
  },
  {
    "slug": "delta-dvp-sx2-plc",
    "name": "DVP-SX2 Series PLC",
    "brand": "delta",
    "category": "plc",
    "group": "Control",
    "series": "Delta PLC - Programmable Logic Controllers",
    "summary": "The 2nd generation DVP-SX2 series slim type PLC offers 14 digital points and built-in 12-bit analog I/O points. It is extendable with DVP-S series left-side and right-side extension modules.",
    "highlights": [
      "MPU points: 20 (8DI/6DO, 4AI/2AO)",
      "Max. I/O points: 494 (14 + 480)",
      "Program capacity: 16k steps",
      "COM port: Built-in RS-232, RS-485 & USB ports, compatible with ASCII/RTU protocol. Can be master or slave.",
      "High-Speed Pulse Output: Supports 2 points (Y0, Y2) of 100kHz and 2 points (Y1, Y3) of 10kHz independent high-speed pulse output."
    ],
    "specs": [
      [
        "Series / models",
        "DVP-SX2 Series"
      ],
      [
        "Delta range",
        "Control > PLC - Programmable Logic Controllers"
      ]
    ],
    "applications": [
      "Packaging",
      "Textile",
      "Printing",
      "Material handling",
      "Process skids"
    ],
    "image": "/products/delta/delta-dvp-sx2-plc/dvp-sx2.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-dvp-sx2-plc/dvp-sx2.jpg",
        "label": "DVP-SX2 Series"
      }
    ]
  },
  {
    "slug": "delta-dvp-sx-plc",
    "name": "DVP-SX Series PLC",
    "brand": "delta",
    "category": "plc",
    "group": "Control",
    "series": "Delta PLC - Programmable Logic Controllers",
    "summary": "The slim and compact SX series supports digital input/output and is built in with multiple analog I/O channels.",
    "highlights": [
      "MPU points: 10 (4DI/2DO, 2AI/2AO)",
      "Max. I/O points: 230",
      "Program capacity: 8K Steps",
      "Communication port: Built-in RS-232 and RS-485, compatible with MODBUS ASCII / RTU communication protocol.",
      "High-speed pulse output: Supports 2-point independent high-speed pulse output (Y0 of up to 50KHz and Y1 of up to 10KHz)."
    ],
    "specs": [
      [
        "Series / models",
        "DVP-SX Series"
      ],
      [
        "Delta range",
        "Control > PLC - Programmable Logic Controllers"
      ]
    ],
    "applications": [
      "Packaging",
      "Textile",
      "Printing",
      "Material handling",
      "Process skids"
    ],
    "image": "/products/delta/delta-dvp-sx-plc/dvp-sx.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-dvp-sx-plc/dvp-sx.jpg",
        "label": "DVP-SX Series"
      }
    ]
  },
  {
    "slug": "delta-dvp-sa2-plc",
    "name": "DVP-SA2 Series PLC",
    "brand": "delta",
    "category": "plc",
    "group": "Control",
    "series": "Delta PLC - Programmable Logic Controllers",
    "summary": "The 2nd generation DVP-SA2 series slim type PLC offers bigger program capacity and executing efficiency, offering 100 kHz high-speed output and counting functions. It is extendable with DVP-S series left-side and right-side extension modules.",
    "highlights": [
      "MPU points: 12 (8DI + 4DO)",
      "Max. I/O points: 492 (12 + 480)",
      "Program capacity: 16k steps",
      "COM port: Built-in RS-232 & 2 RS-485 ports, compatible with Modbus ASCII/RTU protocol.",
      "Can be master or slave."
    ],
    "specs": [
      [
        "Series / models",
        "DVP-SA2 Series"
      ],
      [
        "Delta range",
        "Control > PLC - Programmable Logic Controllers"
      ]
    ],
    "applications": [
      "Packaging",
      "Textile",
      "Printing",
      "Material handling",
      "Process skids"
    ],
    "image": "/products/delta/delta-dvp-sa2-plc/dvp-sa2.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-dvp-sa2-plc/dvp-sa2.jpg",
        "label": "DVP-SA2 Series"
      }
    ]
  },
  {
    "slug": "delta-dvp-se-plc",
    "name": "DVP-SE Series PLC",
    "brand": "delta",
    "category": "plc",
    "group": "Control",
    "series": "Delta PLC - Programmable Logic Controllers",
    "summary": "Remote device monitoring, production line monitoring, building automation, printing machine, container filler (recipe application)",
    "highlights": [
      "The most complete network type slim PLC in the industry",
      "Provides 8 digital inputs and 4 digital outputs",
      "Built-in mini USB, Ethernet, and 2 RS-485 ports",
      "Program capacity: 16k steps",
      "Data register: 12k words"
    ],
    "specs": [
      [
        "Series / models",
        "DVP-SE Series"
      ],
      [
        "Delta range",
        "Control > PLC - Programmable Logic Controllers"
      ]
    ],
    "applications": [
      "Packaging",
      "Textile",
      "Printing",
      "Material handling",
      "Process skids"
    ],
    "image": "/products/delta/delta-dvp-se-plc/dvp-se.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-dvp-se-plc/dvp-se.jpg",
        "label": "DVP-SE Series"
      }
    ]
  },
  {
    "slug": "delta-dvp-ss2-plc",
    "name": "DVP-SS2 Series PLC",
    "brand": "delta",
    "category": "plc",
    "group": "Control",
    "series": "Delta PLC - Programmable Logic Controllers",
    "summary": "The 2nd generation DVP-SS2 series slim type PLC keeps the basic sequential control functions from the DVP-SS series PLC but with faster execution speed and enhanced real-time monitoring capability.",
    "highlights": [
      "MPU points: 14 (8DI + 6DO)",
      "Max. I/O points: 494 (14 + 480)",
      "Program capacity: 8k steps",
      "COM port: Built-in RS-232 & RS-485 ports, compatible with Modbus ASCII/RTU protocol. Can be master or slave.",
      "High-Speed Pulse Output：Supports 4 points (Y0 ~ Y3) of independent high-speed (max. 10kHz) pulse output"
    ],
    "specs": [
      [
        "Series / models",
        "DVP-SS2 Series"
      ],
      [
        "Delta range",
        "Control > PLC - Programmable Logic Controllers"
      ]
    ],
    "applications": [
      "Packaging",
      "Textile",
      "Printing",
      "Material handling",
      "Process skids"
    ],
    "image": "/products/delta/delta-dvp-ss2-plc/dvp-ss2.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-dvp-ss2-plc/dvp-ss2.jpg",
        "label": "DVP-SS2 Series"
      }
    ]
  },
  {
    "slug": "delta-dvp-slim-expansion-modules",
    "name": "DVP-Slim Expansion Modules",
    "brand": "delta",
    "category": "plc",
    "group": "Control",
    "series": "Delta PLC - Programmable Logic Controllers",
    "summary": "Remote device monitoring, production line monitoring, building automation, printing machine, container filler (recipe application)",
    "highlights": [
      "Digital modules (output/input/mix): 8 ,16 , 32, 64 I/O",
      "Analog modules (output/input/mix): 2 channel, 4 channel, 6 channel inputs (14-bit) / output (12-bit)",
      "Load cell modules: independent dual-channel high speed high accuracy load cell module with 24 bits resolution with 2.5ms response rate",
      "Network modules: Ethernet, DeviceNet, PROFIBUS-DP,CANopen,RS-485,RS-422,BACnet MS/TP",
      "Remote I/O communication modules: DeviceNet, PROFIBUS, Ethernet (MODBUS TCP), RS-485 (MODBUS ASCII/RTU)"
    ],
    "specs": [
      [
        "Series / models",
        "DVP-Slim Expansion Module"
      ],
      [
        "Delta range",
        "Control > PLC - Programmable Logic Controllers"
      ]
    ],
    "applications": [
      "Packaging",
      "Textile",
      "Printing",
      "Material handling",
      "Process skids"
    ],
    "image": "/products/delta/delta-dvp-slim-expansion-modules/dvp-slim-expansion-module.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-dvp-slim-expansion-modules/dvp-slim-expansion-module.jpg",
        "label": "DVP-Slim Expansion Module"
      }
    ]
  },
  {
    "slug": "delta-dvp-mc-motion-controllers",
    "name": "DVP-MC Motion Controllers (DVP-50MC / DVP-15MC)",
    "brand": "delta",
    "category": "plc",
    "group": "Control",
    "series": "Delta PLC - Programmable Logic Controllers",
    "summary": "DVP50MC is a type of multi-axis motion controller researched and produced by Delta autonomously on the basis of EtherCAT technology.",
    "highlights": [
      "Up to 24 real axes control (virtual axis no.: 1 ~ 32, can't be repetitive with real axis no.)",
      "Built-in motion control instructions (supporting Jerk and BufferMode) and easy to use",
      "Supports encoder axis and virtual axis",
      "Single axis motion control instructions: speed, torque, homing, and position setup",
      "Application instructions: electronic gear, E-Cam, and rotary cut"
    ],
    "specs": [
      [
        "Series / models",
        "DVP-50MC, DVP-15MC, DVP-MC Series Expansion Module"
      ],
      [
        "Delta range",
        "Control > PLC - Programmable Logic Controllers"
      ]
    ],
    "models": [
      [
        "DVP-50MC",
        "Up to 24 real axes control (virtual axis no.: 1 ~ 32, can't be repetitive with real axis no.)"
      ],
      [
        "DVP-15MC",
        "Up to 24 real axes control (virtual axis no.: 1 ~ 32, can't be repetitive with real axis no.)"
      ],
      [
        "DVP-MC Series Expansion Module",
        "Digital modules (output/input/mix): 8 ,16 , 32, 64 I/O"
      ]
    ],
    "applications": [
      "Packaging",
      "Textile",
      "Printing",
      "Material handling",
      "Process skids"
    ],
    "image": "/products/delta/delta-dvp-mc-motion-controllers/dvp-50mc.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-dvp-mc-motion-controllers/dvp-50mc.jpg",
        "label": "DVP-50MC"
      },
      {
        "src": "/products/delta/delta-dvp-mc-motion-controllers/dvp-15mc.jpg",
        "label": "DVP-15MC"
      },
      {
        "src": "/products/delta/delta-dvp-mc-motion-controllers/dvp-mc-expansion-module.jpg",
        "label": "DVP-MC Series Expansion Module"
      }
    ]
  },
  {
    "slug": "delta-dvp-pm-positioning-controllers",
    "name": "DVP-PM Positioning Controllers (DVP-20PM / DVP-10PM)",
    "brand": "delta",
    "category": "plc",
    "group": "Control",
    "series": "Delta PLC - Programmable Logic Controllers",
    "summary": "The advanced PM series motion control MPU can become the motion extension module of another PM series MPU, very flexible in all kinds of applications.",
    "highlights": [
      "MPU points: 16",
      "Max. I/O points: 512",
      "Program capacity: 64K Steps",
      "Communication port: Built-in RS-232 and RS-485, compatible with MODBUS ASCII / RTU communication protocol.",
      "Data register: 10,000 words (latched)"
    ],
    "specs": [
      [
        "Series / models",
        "DVP-20PM, DVP-10PM, DVP-PM Series Expansion Module"
      ],
      [
        "Delta range",
        "Control > PLC - Programmable Logic Controllers"
      ]
    ],
    "models": [
      [
        "DVP-20PM",
        "MPU points: 16"
      ],
      [
        "DVP-10PM",
        "MPU points: 24"
      ],
      [
        "DVP-PM Series Expansion Module",
        "Digital modules (output/input/mix): 8,16, 32, 48 I/O"
      ]
    ],
    "applications": [
      "Packaging",
      "Textile",
      "Printing",
      "Material handling",
      "Process skids"
    ],
    "image": "/products/delta/delta-dvp-pm-positioning-controllers/dvp-20pm.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-dvp-pm-positioning-controllers/dvp-20pm.jpg",
        "label": "DVP-20PM"
      },
      {
        "src": "/products/delta/delta-dvp-pm-positioning-controllers/dvp-10pm.jpg",
        "label": "DVP-10PM"
      },
      {
        "src": "/products/delta/delta-dvp-pm-positioning-controllers/dvp-pm-expansion-module.jpg",
        "label": "DVP-PM Series Expansion Module"
      }
    ]
  },
  {
    "slug": "delta-ispsoft",
    "name": "ISPSoft Programming Software",
    "brand": "delta",
    "category": "scada",
    "group": "Control",
    "series": "Delta PLC - Programmable Logic Controllers",
    "summary": "ISPSoft is the latest program development tool for Delta's programmable logic controllers (PLC) that complies with the IEC 61131-3 standard to integrate multiple tasks for project management.",
    "highlights": [
      "Advanced Programming Interface + Visualized Hardware Configuration + Simplified Network Configuration + Data Tracer & Logger + Motion pro...",
      "Advanced Programming Interface",
      "Visualized Hardware Configuration",
      "Simplified Network Configuration",
      "Convenient Wizards"
    ],
    "specs": [
      [
        "Series / models",
        "ISPSoft Programming Software"
      ],
      [
        "Delta range",
        "Control > PLC - Programmable Logic Controllers"
      ]
    ],
    "applications": [
      "Plant monitoring",
      "Machine visualisation",
      "Data logging"
    ],
    "image": "/products/delta/delta-ispsoft/ispsoft-programming-software.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-ispsoft/ispsoft-programming-software.jpg",
        "label": "ISPSoft Programming Software"
      }
    ]
  },
  {
    "slug": "delta-dop-100-hmi",
    "name": "DOP-100 Series HMI",
    "brand": "delta",
    "category": "hmi",
    "group": "Control",
    "series": "Delta Touch Panel HMI - Human Machine Interfaces",
    "summary": "DOP-100 Series HMI from Delta Electronics, part of Delta's Touch Panel HMI - Human Machine Interfaces range.",
    "highlights": [
      "4.3”(480*272) 65,536 Colors TFT",
      "Cortex-A8 800MHz CPU",
      "Built-in Ethernet",
      "1 COM port / 1 extension COM port",
      "Multilingual input"
    ],
    "specs": [
      [
        "Series / models",
        "DOP-103WQ, DOP-107WV, DOP-110WS, DOP-107EV, DOP-107EG, DOP-107CV, DOP-110CS, DOP-103BQ, DOP-107BV"
      ],
      [
        "Delta range",
        "Control > Touch Panel HMI - Human Machine Interfaces"
      ]
    ],
    "models": [
      [
        "DOP-103WQ",
        "4.3”(480*272) 65,536 Colors TFT"
      ],
      [
        "DOP-107WV",
        "7” (800 * 480) 65,536 Colors TFT"
      ],
      [
        "DOP-110WS",
        "10.1”(1024*600) 65536 Colors TFT"
      ],
      [
        "DOP-107EV",
        "7”(800*480) 65,536 Colors TFT"
      ],
      [
        "DOP-107EG",
        "7”(800*600) 65,536 Colors TFT"
      ],
      [
        "DOP-107CV",
        "7”(800*480) 65,536 Colors TFT"
      ],
      [
        "DOP-110CS",
        "10.1”(1024*600) 65,536 Colors TFT"
      ],
      [
        "DOP-103BQ",
        "4.3”(480*272) 65,536 Colors TFT"
      ],
      [
        "DOP-107BV",
        "7”(800*480) 65,536 Colors TFT"
      ]
    ],
    "applications": [
      "Machine operation",
      "OEM panels",
      "Textile",
      "Packaging"
    ],
    "featured": true,
    "image": "/products/delta/delta-dop-100-hmi/dop-103wq.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-dop-100-hmi/dop-103wq.jpg",
        "label": "DOP-103WQ"
      },
      {
        "src": "/products/delta/delta-dop-100-hmi/dop-107wv.jpg",
        "label": "DOP-107WV"
      },
      {
        "src": "/products/delta/delta-dop-100-hmi/dop-110ws.jpg",
        "label": "DOP-110WS"
      },
      {
        "src": "/products/delta/delta-dop-100-hmi/dop-107ev.jpg",
        "label": "DOP-107EV"
      },
      {
        "src": "/products/delta/delta-dop-100-hmi/dop-107eg.jpg",
        "label": "DOP-107EG"
      },
      {
        "src": "/products/delta/delta-dop-100-hmi/dop-107cv.jpg",
        "label": "DOP-107CV"
      },
      {
        "src": "/products/delta/delta-dop-100-hmi/dop-110cs.jpg",
        "label": "DOP-110CS"
      },
      {
        "src": "/products/delta/delta-dop-100-hmi/dop-103bq.jpg",
        "label": "DOP-103BQ"
      },
      {
        "src": "/products/delta/delta-dop-100-hmi/dop-107bv.jpg",
        "label": "DOP-107BV"
      }
    ]
  },
  {
    "slug": "delta-dop-w-hmi",
    "name": "DOP-W Series HMI",
    "brand": "delta",
    "category": "hmi",
    "group": "Control",
    "series": "Delta Touch Panel HMI - Human Machine Interfaces",
    "summary": "DOP-W Series HMI from Delta Electronics, part of Delta's Touch Panel HMI - Human Machine Interfaces range.",
    "highlights": [
      "10.4\" (800 x 600 pixels) TFT LCD 65536 colors",
      "2 sets of COM ports, support RS232 / RS422 / RS485",
      "Supports USB Host, direct connection to USB disk, printer and mouse",
      "Supports SD card",
      "Supports 2 Ethernet ports"
    ],
    "specs": [
      [
        "Series / models",
        "DOP-W105B, DOP-W127B, DOP-W157B"
      ],
      [
        "Delta range",
        "Control > Touch Panel HMI - Human Machine Interfaces"
      ]
    ],
    "models": [
      [
        "DOP-W105B",
        "10.4\" (800 x 600 pixels) TFT LCD 65536 colors"
      ],
      [
        "DOP-W127B",
        "12\" (1024 x 768 pixels) TFT LCD 65536 colors"
      ],
      [
        "DOP-W157B",
        "15\" (1024 x 768 pixels) TFT LCD 65536 colors"
      ]
    ],
    "applications": [
      "Machine operation",
      "OEM panels",
      "Textile",
      "Packaging"
    ],
    "image": "/products/delta/delta-dop-w-hmi/dop-w105b.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-dop-w-hmi/dop-w105b.jpg",
        "label": "DOP-W105B"
      },
      {
        "src": "/products/delta/delta-dop-w-hmi/dop-w127b.jpg",
        "label": "DOP-W127B"
      },
      {
        "src": "/products/delta/delta-dop-w-hmi/dop-w157b.jpg",
        "label": "DOP-W157B"
      }
    ]
  },
  {
    "slug": "delta-dop-h07-handheld-hmi",
    "name": "DOP-H07 Handheld HMI",
    "brand": "delta",
    "category": "hmi",
    "group": "Control",
    "series": "Delta Touch Panel HMI - Human Machine Interfaces",
    "summary": "Search and download offer documentation, support information, certificates, CAD and software.",
    "highlights": [
      "7” widescreen 65536 colors display",
      "Built-in emergency stop switch",
      "Built-in enable switch (rear side)",
      "Serial communication models provide one COM port, and support RS-485 / RS-422",
      "Ethernet communication models: support one Ethernet port"
    ],
    "specs": [
      [
        "Series / models",
        "DOP-H07"
      ],
      [
        "Delta range",
        "Control > Touch Panel HMI - Human Machine Interfaces"
      ]
    ],
    "applications": [
      "Machine operation",
      "OEM panels",
      "Textile",
      "Packaging"
    ],
    "image": "/products/delta/delta-dop-h07-handheld-hmi/dop-h07.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-dop-h07-handheld-hmi/dop-h07.jpg",
        "label": "DOP-H07"
      }
    ]
  },
  {
    "slug": "delta-tp70p-hmi-plc",
    "name": "TP70P HMI with Built-in PLC",
    "brand": "delta",
    "category": "hmi",
    "group": "Control",
    "series": "Delta Touch Panel HMI - Human Machine Interfaces",
    "summary": "The TP70P Series adopts a 65535 colors LCD touchscreen, supports Delta's controllers, and can be connected to all series of Delta's AC servo drives, AC motor drives, and temperature controllers.",
    "highlights": [
      "Touchscreen LCD with 65535 colors",
      "Provides various kinds of graphical objects, including X-Y curves, circular meters, bar charts, sliders, and historical/real-time alarms",
      "Supports PLC Link",
      "Supports Delta's controllers, and can be connected to all series of Delta's AC servo drives, AC motor drives, and temperature controllers",
      "Offers two serial communication ports : One supports PLC communication, and the other supports Text Panel communication"
    ],
    "specs": [
      [
        "Series / models",
        "TP70P"
      ],
      [
        "Delta range",
        "Control > Touch Panel HMI - Human Machine Interfaces"
      ]
    ],
    "applications": [
      "Machine operation",
      "OEM panels",
      "Textile",
      "Packaging"
    ],
    "image": "/products/delta/delta-tp70p-hmi-plc/tp70p.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-tp70p-hmi-plc/tp70p.jpg",
        "label": "TP70P"
      }
    ]
  },
  {
    "slug": "delta-dop-b-hmi",
    "name": "DOP-B Series HMI",
    "brand": "delta",
    "category": "hmi",
    "group": "Control",
    "series": "Delta Touch Panel HMI - Human Machine Interfaces",
    "summary": "Search and download offer documentation, support information, certificates, CAD and software.",
    "highlights": [
      "4.3-inch (480 x 272 pixels) TFT LCD 65536 colors",
      "2 sets of COM ports, supports RS-232 / RS-422 / RS-485",
      "For data transfer/download: RS-232, USB",
      "Complies with IP65 standard",
      "Supports horizontal / vertical display"
    ],
    "specs": [
      [
        "Series / models",
        "DOP- B03S211, DOP-B03E211, DOP-B05S111, DOP-B07S411, DOP-B07S401K, DOP-B07S411K, DOP-B07S415, DOP-B07E415, DOP-B07PS415, DOP-B07S515, DOP-B07E515, DOP-B07PS515, DOP-B08S515, DOP-B08E515, DOP-B10S411, DOP-B10S615, DOP-B10E615, DOP-B10S511, DOP-B10E515"
      ],
      [
        "Delta range",
        "Control > Touch Panel HMI - Human Machine Interfaces"
      ]
    ],
    "models": [
      [
        "DOP- B03S211",
        "4.3-inch (480 x 272 pixels) TFT LCD 65536 colors"
      ],
      [
        "DOP-B03E211",
        "4.3-inch (480 x 272 pixels) TFT LCD 65536 colors"
      ],
      [
        "DOP-B05S111",
        "5.6-inch (320 x 234 pixels) TFT LCD 65536 colors"
      ],
      [
        "DOP-B07S411",
        "7\"(800 x 480 pixels) TFT LCD 65536 colors"
      ],
      [
        "DOP-B07S401K",
        "7-inch (800 x 480 pixels) TFT LCD 65536 colors"
      ],
      [
        "DOP-B07S411K",
        "7-inch (800 x 480 pixels) TFT LCD 65536 colors"
      ],
      [
        "DOP-B07S415",
        "7\"(800 x 480 pixels) TFT LCD 65536 colors"
      ],
      [
        "DOP-B07E415",
        "7\"(800 x 600 pixels) TFT LCD 65536 colors"
      ],
      [
        "DOP-B07PS415",
        "7-inch (800 x 480 pixels) TFT LCD 65536 colors"
      ],
      [
        "DOP-B07S515",
        "7-inch (800 x 600 pixels) TFT LCD 65536 colors"
      ],
      [
        "DOP-B07E515",
        "7\"(800 x 600 pixels) TFT LCD 65536 colors"
      ],
      [
        "DOP-B07PS515",
        "7-inch (800 x 600 pixels) TFT LCD 65536 colors"
      ],
      [
        "DOP-B08S515",
        "8\"(800 x 600 pixels) TFT LCD 65536 colors"
      ],
      [
        "DOP-B08E515",
        "8\"(800 x 600 pixels) TFT LCD 65536 colors"
      ],
      [
        "DOP-B10S411",
        "10.1-inch (800 x 480 pixels) TFT LCD 65536 colors"
      ],
      [
        "DOP-B10S615",
        "10.1\"(1024 x 600 pixels) TFT LCD 65536 colors"
      ],
      [
        "DOP-B10E615",
        "10.1\"(1024 x 600 pixels) TFT LCD 65536 colors"
      ],
      [
        "DOP-B10S511",
        "10.4-inch (800 x 600 pixels) TFT LCD 65536 colors"
      ],
      [
        "DOP-B10E515",
        "10.4-inch (800 x 600 pixels) TFT LCD 65536 colors"
      ]
    ],
    "applications": [
      "Machine operation",
      "OEM panels",
      "Textile",
      "Packaging"
    ],
    "image": "/products/delta/delta-dop-b-hmi/dop-b03s211.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-dop-b-hmi/dop-b03s211.jpg",
        "label": "DOP- B03S211"
      },
      {
        "src": "/products/delta/delta-dop-b-hmi/dop-b03e211.jpg",
        "label": "DOP-B03E211"
      },
      {
        "src": "/products/delta/delta-dop-b-hmi/dop-b05s111.jpg",
        "label": "DOP-B05S111"
      },
      {
        "src": "/products/delta/delta-dop-b-hmi/dop-b07s411.jpg",
        "label": "DOP-B07S411"
      },
      {
        "src": "/products/delta/delta-dop-b-hmi/dop-b07s401k.jpg",
        "label": "DOP-B07S401K"
      },
      {
        "src": "/products/delta/delta-dop-b-hmi/dop-b07s411k.jpg",
        "label": "DOP-B07S411K"
      },
      {
        "src": "/products/delta/delta-dop-b-hmi/dop-b07s415.jpg",
        "label": "DOP-B07S415"
      },
      {
        "src": "/products/delta/delta-dop-b-hmi/dop-b07e415.jpg",
        "label": "DOP-B07E415"
      },
      {
        "src": "/products/delta/delta-dop-b-hmi/dop-b07ps415.jpg",
        "label": "DOP-B07PS415"
      },
      {
        "src": "/products/delta/delta-dop-b-hmi/dop-b07s515.jpg",
        "label": "DOP-B07S515"
      },
      {
        "src": "/products/delta/delta-dop-b-hmi/dop-b07e515.jpg",
        "label": "DOP-B07E515"
      },
      {
        "src": "/products/delta/delta-dop-b-hmi/dop-b07ps515.jpg",
        "label": "DOP-B07PS515"
      },
      {
        "src": "/products/delta/delta-dop-b-hmi/dop-b08s515.jpg",
        "label": "DOP-B08S515"
      },
      {
        "src": "/products/delta/delta-dop-b-hmi/dop-b08e515.jpg",
        "label": "DOP-B08E515"
      },
      {
        "src": "/products/delta/delta-dop-b-hmi/dop-b10s411.jpg",
        "label": "DOP-B10S411"
      },
      {
        "src": "/products/delta/delta-dop-b-hmi/dop-b10s615.jpg",
        "label": "DOP-B10S615"
      },
      {
        "src": "/products/delta/delta-dop-b-hmi/dop-b10e615.jpg",
        "label": "DOP-B10E615"
      },
      {
        "src": "/products/delta/delta-dop-b-hmi/dop-b10s511.jpg",
        "label": "DOP-B10S511"
      },
      {
        "src": "/products/delta/delta-dop-b-hmi/dop-b10e515.jpg",
        "label": "DOP-B10E515"
      }
    ]
  },
  {
    "slug": "delta-tp-text-panels",
    "name": "TP Series Text Panel HMI",
    "brand": "delta",
    "category": "hmi",
    "group": "Control",
    "series": "Delta Text Panel HMI - Human Machine Interfaces",
    "summary": "The screen of this series can display two lines / four lines text or message at the same time. It not only has the features of light weight, cost-effective price, good flexibility in use, and easy-to-control operation, but also supports various communication protocols.",
    "highlights": [
      "STN LCD 2.8\" (TP02G), 3\" (TP04G)",
      "160*32 pixels (TP02G), 128*64 pixels (TP04G)",
      "256K Flash Memory",
      "TP02 supports 16 multiple function keys",
      "TP04 supports 12 multiple function keys"
    ],
    "specs": [
      [
        "Series / models",
        "TP02G-AS1/TP04G-AS2 Series, TP04G-AL-C/TP04G-AL2 Series, TP04G-BL-C Series, TP04P Series, TP08G-BT2 Series"
      ],
      [
        "Delta range",
        "Control > Text Panel HMI - Human Machine Interfaces"
      ]
    ],
    "models": [
      [
        "TP02G-AS1/TP04G-AS2 Series",
        "STN LCD 2.8\" (TP02G), 3\" (TP04G)"
      ],
      [
        "TP04G-AL-C/TP04G-AL2 Series",
        "User-defined function keys available"
      ],
      [
        "TP04G-BL-C Series",
        "4.1\" STN LCD (Monochrome)"
      ],
      [
        "TP04P Series",
        "Adopts the core of the DVP-SS2 Series PLC: program capacity: 8 k steps / D device: 5k words"
      ],
      [
        "TP08G-BT2 Series",
        "Resolution: 240 x 128 dots"
      ]
    ],
    "applications": [
      "Machine operation",
      "OEM panels",
      "Textile",
      "Packaging"
    ],
    "image": "/products/delta/delta-tp-text-panels/tp02g-as1-tp04g-as2.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-tp-text-panels/tp02g-as1-tp04g-as2.jpg",
        "label": "TP02G-AS1/TP04G-AS2 Series"
      },
      {
        "src": "/products/delta/delta-tp-text-panels/tp04g-al-c-tp04g-al2.jpg",
        "label": "TP04G-AL-C/TP04G-AL2 Series"
      },
      {
        "src": "/products/delta/delta-tp-text-panels/tp04g-bl-c.jpg",
        "label": "TP04G-BL-C Series"
      },
      {
        "src": "/products/delta/delta-tp-text-panels/tp04p.jpg",
        "label": "TP04P Series"
      },
      {
        "src": "/products/delta/delta-tp-text-panels/tp08g-bt2.jpg",
        "label": "TP08G-BT2 Series"
      }
    ]
  },
  {
    "slug": "delta-ethernet-modbus-tcp-modules",
    "name": "Ethernet & Modbus TCP Communication Modules",
    "brand": "delta",
    "category": "networking",
    "group": "Control",
    "series": "Delta Industrial Fieldbus Solution",
    "summary": "‧A Modbus TCP slave ‧Connectable to 8 DVP-S series analog I/O modules ‧Connectable to 256 points of digital I/O modules ‧The RS-485 port is connectable to max. 32 Modbus slaves ‧Smart PLC if-then function ‧Smart Monitor ‧Supports webpage setup & on-line monitoring ‧Serial Virtual COM available",
    "highlights": [
      "For DVP-EH3-L, DVP-MC, DVP-SA2, SE, SV2, SX2 Series PLC only",
      "Supports Modbus TCP protocol",
      "Max. baudrate: 100M bps",
      "Modbus TCP connections / Client: 32 / Server: 16",
      "Smart data exchange"
    ],
    "specs": [
      [
        "Series / models",
        "DVPEN01-SL, RTU-EN01, IFD9506, IFD9507"
      ],
      [
        "Delta range",
        "Control > Industrial Fieldbus Solution"
      ]
    ],
    "models": [
      [
        "DVPEN01-SL",
        "For DVP-EH3-L, DVP-MC, DVP-SA2, SE, SV2, SX2 Series PLC only"
      ],
      [
        "RTU-EN01",
        "A Modbus TCP slave"
      ],
      [
        "IFD9506",
        "Isolation in RS-485 channel (incl. power supply)"
      ],
      [
        "IFD9507",
        "Isolation in RS-485 channel (incl. power supply)"
      ]
    ],
    "applications": [
      "PLC networks",
      "Remote I/O",
      "Drive communication",
      "SCADA links"
    ],
    "image": "/products/delta/delta-ethernet-modbus-tcp-modules/dvpen01-sl.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-ethernet-modbus-tcp-modules/dvpen01-sl.jpg",
        "label": "DVPEN01-SL"
      },
      {
        "src": "/products/delta/delta-ethernet-modbus-tcp-modules/rtu-en01.jpg",
        "label": "RTU-EN01"
      },
      {
        "src": "/products/delta/delta-ethernet-modbus-tcp-modules/ifd9506.jpg",
        "label": "IFD9506"
      },
      {
        "src": "/products/delta/delta-ethernet-modbus-tcp-modules/ifd9507.jpg",
        "label": "IFD9507"
      }
    ]
  },
  {
    "slug": "delta-canopen-ethercat-modules",
    "name": "CANopen & EtherCAT Communication Modules",
    "brand": "delta",
    "category": "networking",
    "group": "Control",
    "series": "Delta Industrial Fieldbus Solution",
    "summary": "The EtherCAT Remote I/O Extension Module RTU-ECAT connects to the right-side Expansion Modules DVP-Slim and supports multiple digital and analog inputs / outputs.",
    "highlights": [
      "Connects the right-side Expansion Modules DVP-Slim and supports up to 128 DI points and 128 DO points",
      "Connects up to 14 digital modules and special modules of the right-side Expansion Modules DVP-Slim, of which up to 8 special modules can ...",
      "Users can keep the output values of special modules and that of digital modules or zero all the values before the RTU-CN01 is disconnecte...",
      "Supports synchronous clock distribution and SyncManagers",
      "When disconnected from the master, the RTU-CN01 can either restore the last recorded output values of special / digital modules or return..."
    ],
    "specs": [
      [
        "Series / models",
        "RTU-ECAT, RTU-CN01, DVPCOPM-SL, DVPCP02-H2, IFD6503, IFD9503, DVP-FPMC"
      ],
      [
        "Delta range",
        "Control > Industrial Fieldbus Solution"
      ]
    ],
    "models": [
      [
        "RTU-ECAT",
        "Connects the right-side Expansion Modules DVP-Slim and supports up to 128 DI points and 128 DO points"
      ],
      [
        "RTU-CN01",
        "Connects the right-side Expansion Modules DVP-Slim and supports up to 128 DI points and 128 DO points"
      ],
      [
        "DVPCOPM-SL",
        "For DVP-EH3-L, DVP-MC, DVP-SA2, SE, SV2, SX2 Series PLC only"
      ],
      [
        "DVPCP02-H2",
        "For DVP-EH2 series PLC only"
      ],
      [
        "IFD6503",
        "A USB/CAN communication converter"
      ],
      [
        "IFD9503",
        "Supports CANopen protocol"
      ],
      [
        "DVP-FPMC",
        "For DVP-PM series PLC only"
      ]
    ],
    "applications": [
      "PLC networks",
      "Remote I/O",
      "Drive communication",
      "SCADA links"
    ],
    "image": "/products/delta/delta-canopen-ethercat-modules/rtu-ecat.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-canopen-ethercat-modules/rtu-ecat.jpg",
        "label": "RTU-ECAT"
      },
      {
        "src": "/products/delta/delta-canopen-ethercat-modules/rtu-cn01.jpg",
        "label": "RTU-CN01"
      },
      {
        "src": "/products/delta/delta-canopen-ethercat-modules/dvpcopm-sl.jpg",
        "label": "DVPCOPM-SL"
      },
      {
        "src": "/products/delta/delta-canopen-ethercat-modules/dvpcp02-h2.jpg",
        "label": "DVPCP02-H2"
      },
      {
        "src": "/products/delta/delta-canopen-ethercat-modules/ifd6503.jpg",
        "label": "IFD6503"
      },
      {
        "src": "/products/delta/delta-canopen-ethercat-modules/ifd9503.jpg",
        "label": "IFD9503"
      },
      {
        "src": "/products/delta/delta-canopen-ethercat-modules/dvp-fpmc.jpg",
        "label": "DVP-FPMC"
      }
    ]
  },
  {
    "slug": "delta-devicenet-modules",
    "name": "DeviceNet Communication Modules",
    "brand": "delta",
    "category": "networking",
    "group": "Control",
    "series": "Delta Industrial Fieldbus Solution",
    "summary": "‧For DVP-EH3-L, DVP-MC, DVP-SA2, SE, SV2, SX2 Series PLC only ‧Supports DeviceNet protocol ‧Connectable to 64 slaves ‧Max. baudrate: 500k bps ‧Max. network length: 500m ‧RTU mapping",
    "highlights": [
      "For DVP-EH3-L, DVP-MC, DVP-SA2, SE, SV2, SX2 Series PLC only",
      "Supports DeviceNet protocol",
      "Connectable to 64 slaves",
      "Max. baudrate: 500k bps",
      "Max. network length: 500m"
    ],
    "specs": [
      [
        "Series / models",
        "DVPDNET-SL, DVPDT01-S, DVPDT02-H2, RTU-DNET, IFD9502"
      ],
      [
        "Delta range",
        "Control > Industrial Fieldbus Solution"
      ]
    ],
    "models": [
      [
        "DVPDNET-SL",
        "For DVP-EH3-L, DVP-MC, DVP-SA2, SE, SV2, SX2 Series PLC only"
      ],
      [
        "DVPDT01-S",
        "Supports DeviceNet protocol"
      ],
      [
        "DVPDT02-H2",
        "Supports DeviceNet protocol"
      ],
      [
        "RTU-DNET",
        "Supports DeviceNet protocol"
      ],
      [
        "IFD9502",
        "Supports DeviceNet protocol"
      ]
    ],
    "applications": [
      "PLC networks",
      "Remote I/O",
      "Drive communication",
      "SCADA links"
    ],
    "image": "/products/delta/delta-devicenet-modules/dvpdnet-sl.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-devicenet-modules/dvpdnet-sl.jpg",
        "label": "DVPDNET-SL"
      },
      {
        "src": "/products/delta/delta-devicenet-modules/dvpdt01-s.jpg",
        "label": "DVPDT01-S"
      },
      {
        "src": "/products/delta/delta-devicenet-modules/dvpdt02-h2.jpg",
        "label": "DVPDT02-H2"
      },
      {
        "src": "/products/delta/delta-devicenet-modules/rtu-dnet.jpg",
        "label": "RTU-DNET"
      },
      {
        "src": "/products/delta/delta-devicenet-modules/ifd9502.jpg",
        "label": "IFD9502"
      }
    ]
  },
  {
    "slug": "delta-profibus-modules",
    "name": "PROFIBUS-DP Communication Modules",
    "brand": "delta",
    "category": "networking",
    "group": "Control",
    "series": "Delta Industrial Fieldbus Solution",
    "summary": "‧A PROFIBUS DP slave module for DVP-S series PLC only ‧Supports PROFIBUS DP protocol ‧Max. baudrate: 12M bps ‧With RS-485 port, connectable to max. 16 devices",
    "highlights": [
      "A PROFIBUS DP slave module for DVP-S series PLC only",
      "Supports PROFIBUS DP protocol",
      "Max. baudrate: 12M bps",
      "With RS-485 port, connectable to max. 16 devices",
      "Transmission method: High-speed RS-485"
    ],
    "specs": [
      [
        "Series / models",
        "DVPPF01-S, DVPPF02-H2, DVPPF02-SL, RTU-PD01"
      ],
      [
        "Delta range",
        "Control > Industrial Fieldbus Solution"
      ]
    ],
    "models": [
      [
        "DVPPF01-S",
        "A PROFIBUS DP slave module for DVP-S series PLC only"
      ],
      [
        "DVPPF02-H2",
        "A PROFIBUS DP slave module for DVP-EH2 series PLC only"
      ],
      [
        "DVPPF02-SL",
        "A Left-side high-speed PROFIBUS DP slave module for DVP-S series PLC only"
      ],
      [
        "RTU-PD01",
        "A PROFIBUS DP remote communication module"
      ]
    ],
    "applications": [
      "PLC networks",
      "Remote I/O",
      "Drive communication",
      "SCADA links"
    ],
    "image": "/products/delta/delta-profibus-modules/dvppf01-s.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-profibus-modules/dvppf01-s.jpg",
        "label": "DVPPF01-S"
      },
      {
        "src": "/products/delta/delta-profibus-modules/dvppf02-h2.jpg",
        "label": "DVPPF02-H2"
      },
      {
        "src": "/products/delta/delta-profibus-modules/dvppf02-sl.jpg",
        "label": "DVPPF02-SL"
      },
      {
        "src": "/products/delta/delta-profibus-modules/rtu-pd01.jpg",
        "label": "RTU-PD01"
      }
    ]
  },
  {
    "slug": "delta-serial-modbus-converters",
    "name": "Serial, Modbus RTU Modules & Converters",
    "brand": "delta",
    "category": "networking",
    "group": "Control",
    "series": "Delta Industrial Fieldbus Solution",
    "summary": "‧PLC extension module to amplify signals for the left-side communication and support uploading and downloading of PLC program and parameters ‧Provides two stand-alone RS-485/RS-422 ports ‧Supports standard MODBUS protocol ‧Supports user-defined communication protocol ‧Fully isolates communication...",
    "highlights": [
      "PLC extension module to amplify signals for the left-side communication and support uploading and downloading of PLC program and parameters",
      "Provides two stand-alone RS-485/RS-422 ports",
      "Supports standard MODBUS protocol",
      "Supports user-defined communication protocol",
      "Fully isolates communication interfaces and highly capable in resisting interferences"
    ],
    "specs": [
      [
        "Series / models",
        "DVPSCM12-SL, DVPSCM52-SL, RTU-485, IFD6500, IFD6530, IFD8500-A, IFD8510-A, IFD8520, IFD8540, DVP-F232, DVP-F422, DVP-F232S, DVP-F485S"
      ],
      [
        "Delta range",
        "Control > Industrial Fieldbus Solution"
      ]
    ],
    "models": [
      [
        "DVPSCM12-SL",
        "PLC extension module to amplify signals for the left-side communication and support uploading and downloading "
      ],
      [
        "DVPSCM52-SL",
        "Supports BACnet MS/TP slave protocol"
      ],
      [
        "RTU-485",
        "Supports Modbus protocol"
      ],
      [
        "IFD6500",
        "A USB/RS-485 communication converter"
      ],
      [
        "IFD6530",
        "A USB/RS-485 communication converter for C2000 series AC motor drive only"
      ],
      [
        "IFD8500-A",
        "Detect and configure the communication protocols automatically"
      ],
      [
        "IFD8510-A",
        "Detect and configure the communication format automatically"
      ],
      [
        "IFD8520",
        "An addressable serial communication converter"
      ],
      [
        "IFD8540",
        "Converts the communication between Bluetooth Low Energy(BLE) and RS-485/RS-232 interfaces."
      ],
      [
        "DVP-F232",
        "For DVP-EH2 series PLC only"
      ],
      [
        "DVP-F422",
        "For DVP-EH2 series PLC only"
      ],
      [
        "DVP-F232S",
        "For DVP-EH2 series PLC only"
      ],
      [
        "DVP-F485S",
        "For DVP-EH2 series PLC only"
      ]
    ],
    "applications": [
      "PLC networks",
      "Remote I/O",
      "Drive communication",
      "SCADA links"
    ],
    "image": "/products/delta/delta-serial-modbus-converters/dvpscm12-sl.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-serial-modbus-converters/dvpscm12-sl.jpg",
        "label": "DVPSCM12-SL"
      },
      {
        "src": "/products/delta/delta-serial-modbus-converters/dvpscm52-sl.jpg",
        "label": "DVPSCM52-SL"
      },
      {
        "src": "/products/delta/delta-serial-modbus-converters/rtu-485.jpg",
        "label": "RTU-485"
      },
      {
        "src": "/products/delta/delta-serial-modbus-converters/ifd6500.jpg",
        "label": "IFD6500"
      },
      {
        "src": "/products/delta/delta-serial-modbus-converters/ifd6530.jpg",
        "label": "IFD6530"
      },
      {
        "src": "/products/delta/delta-serial-modbus-converters/ifd8500-a.jpg",
        "label": "IFD8500-A"
      },
      {
        "src": "/products/delta/delta-serial-modbus-converters/ifd8510-a.jpg",
        "label": "IFD8510-A"
      },
      {
        "src": "/products/delta/delta-serial-modbus-converters/ifd8520.jpg",
        "label": "IFD8520"
      },
      {
        "src": "/products/delta/delta-serial-modbus-converters/ifd8540.jpg",
        "label": "IFD8540"
      },
      {
        "src": "/products/delta/delta-serial-modbus-converters/dvp-f232.jpg",
        "label": "DVP-F232"
      },
      {
        "src": "/products/delta/delta-serial-modbus-converters/dvp-f422.jpg",
        "label": "DVP-F422"
      },
      {
        "src": "/products/delta/delta-serial-modbus-converters/dvp-f232s.jpg",
        "label": "DVP-F232S"
      },
      {
        "src": "/products/delta/delta-serial-modbus-converters/dvp-f485s.jpg",
        "label": "DVP-F485S"
      }
    ]
  },
  {
    "slug": "delta-diaview-scada-system",
    "name": "DIAView SCADA System",
    "brand": "delta",
    "category": "scada",
    "group": "Control",
    "series": "Delta DIAView SCADA System",
    "summary": "Delta's DIAView SCADA (Supervisory Control And Data Acquisition) system is an industrial automation management system for providing real-time system control, gathering information and carrying out analysis for remote monitoring and control, implementing system management and production line visua...",
    "highlights": [
      "WPF technology for intuitive interface",
      "Flexible, versatile variables and parameters",
      "Friendly graphical demonstration",
      "Strong and efficient alarm system",
      "Easy-to-learn VBScript language"
    ],
    "specs": [
      [
        "Series / models",
        "DIAView SCADA System"
      ],
      [
        "Delta range",
        "Control > DIAView SCADA System"
      ]
    ],
    "applications": [
      "Plant monitoring",
      "Machine visualisation",
      "Data logging"
    ],
    "image": "/products/delta/delta-diaview-scada-system/diaview-scada-system.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-diaview-scada-system/diaview-scada-system.jpg",
        "label": "DIAView SCADA System"
      }
    ]
  },
  {
    "slug": "delta-diastudio",
    "name": "DIAStudio Smart Machine Suite",
    "brand": "delta",
    "category": "scada",
    "group": "Control",
    "series": "Delta Inverters - AC Motor Drives",
    "summary": "Delta’s DIAStudio Smart Machine Suite is an integrated engineering software package designed to simplify and reduce the time required for the setup process in machinery systems.",
    "highlights": [
      "DIASelector: Provides a PC (Windows) and APP-based (Android & iOS) and Web mechanism for quick product selection in the machine system.",
      "DIADesigner-AX: Supports Delta’s new generation motion controller (AX series) based on IEC 61131-3 programming with a large number of bui...",
      "DIAScreen: Provides wizards for configuration, communication, Operation Interface design, Variable Tag sharing with DIADesigner and DIADe..."
    ],
    "specs": [
      [
        "Series / models",
        "DIAStudio Smart Machine Suite"
      ],
      [
        "Delta range",
        "Control > Inverters - AC Motor Drives"
      ]
    ],
    "applications": [
      "Plant monitoring",
      "Machine visualisation",
      "Data logging"
    ]
  },
  {
    "slug": "delta-dtm",
    "name": "DTM Series Temperature Controller",
    "brand": "delta",
    "category": "control",
    "group": "Field Device",
    "series": "Delta Temperature Controllers",
    "summary": "To meet the increasing complexity of temperature control applications, Delta introduces the Multi-channel Modular Temperature Controller DTM Series. The DTM Series consists of a host, measurement modules, I/O extension modules, and extension cassettes.",
    "highlights": [
      "Modular design for easy wiring",
      "Various extension modules for a wide range of applications",
      "Data collection by hosts for highly efficient data exchange",
      "Supports RS-485 and Ethernet communication for multi-point temperature control: up to 64 points per host group, >1,000 points with severa...",
      "User-defined communication addresses"
    ],
    "specs": [
      [
        "Series / models",
        "DTM Series"
      ],
      [
        "Delta range",
        "Field Device > Temperature Controllers"
      ]
    ],
    "applications": [
      "Plastics",
      "Packaging heaters",
      "Ovens",
      "Energy monitoring"
    ],
    "image": "/products/delta/delta-dtm/dtm.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-dtm/dtm.jpg",
        "label": "DTM Series"
      }
    ]
  },
  {
    "slug": "delta-dtk",
    "name": "DTK Series Temperature Controller",
    "brand": "delta",
    "category": "control",
    "group": "Field Device",
    "series": "Delta Temperature Controllers",
    "summary": "DTK Series is a new temperature controller with a high cost-performance ratio. It greatly decreases development costs and time, and improves the functions of temperature control systems.",
    "highlights": [
      "High resolution LCD display",
      "Length shortened to 60mm",
      "High speed sampling time 100 ms",
      "Food packaging, rubber and plastics, electronics industries, HVAC"
    ],
    "specs": [
      [
        "Series / models",
        "DTK Series"
      ],
      [
        "Delta range",
        "Field Device > Temperature Controllers"
      ]
    ],
    "applications": [
      "Plastics",
      "Packaging heaters",
      "Ovens",
      "Energy monitoring"
    ],
    "image": "/products/delta/delta-dtk/dtk.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-dtk/dtk.jpg",
        "label": "DTK Series"
      }
    ]
  },
  {
    "slug": "delta-dt3",
    "name": "DT3 Series Temperature Controller",
    "brand": "delta",
    "category": "control",
    "group": "Field Device",
    "series": "Delta Temperature Controllers",
    "summary": "The Delta temperature controller DT3 series is designed with upgraded hardware and higher specifications to offer smart operation, fast response, and easy modularization, plus user-friendly and user-defined function keys.",
    "highlights": [
      "Connects to various thermocouples (B, E, J, K, L, N, R, S, T, U, TXK), platinum RTD (PT100, JPT100)",
      "Large 3-color LCD Display",
      "Modular design of functional devices lets users replace the module as needed for application flexibility",
      "Diversified control modes, such as Self-Tuning, FUZZY, PID, ON / OFF, Manual",
      "Various PID parameter settings"
    ],
    "specs": [
      [
        "Series / models",
        "DT3 Series"
      ],
      [
        "Delta range",
        "Field Device > Temperature Controllers"
      ]
    ],
    "applications": [
      "Plastics",
      "Packaging heaters",
      "Ovens",
      "Energy monitoring"
    ],
    "image": "/products/delta/delta-dt3/dt3.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-dt3/dt3.jpg",
        "label": "DT3 Series"
      }
    ]
  },
  {
    "slug": "delta-dta",
    "name": "DTA Series Temperature Controller",
    "brand": "delta",
    "category": "control",
    "group": "Field Device",
    "series": "Delta Temperature Controllers",
    "summary": "DTA series is designed for practical applications with 3 most-frequently adopted signal outputs in the industry and is built-in with various handy functions and transmission structure, ensuring fast and stable transmission of data.",
    "highlights": [
      "PID / On-Off/ manual input control modes",
      "Auto-tuning PID parameters",
      "Various thermocouple (B, E, J, K, L, N, R, S, T, U, TXK) and platinum RTD (PT100, JPT100) can be set by parameters",
      "Built-in 2 groups of alarm switches with 13 alarm modes each",
      "Celsius or Fahrenheit temperature display"
    ],
    "specs": [
      [
        "Series / models",
        "DTA Series"
      ],
      [
        "Delta range",
        "Field Device > Temperature Controllers"
      ]
    ],
    "applications": [
      "Plastics",
      "Packaging heaters",
      "Ovens",
      "Energy monitoring"
    ],
    "image": "/products/delta/delta-dta/dta.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-dta/dta.jpg",
        "label": "DTA Series"
      }
    ]
  },
  {
    "slug": "delta-dtb",
    "name": "DTB Series Temperature Controller",
    "brand": "delta",
    "category": "control",
    "group": "Field Device",
    "series": "Delta Temperature Controllers",
    "summary": "Compared with DTA series, DTB is additionally equipped with linear voltage signal output and dual output control, capable of executing heating and cooling controls simultaneously in a temperature control system and fast reaching the target temperature.",
    "highlights": [
      "PID / On-Off / manual input / programmable control modes",
      "2 groups of outputs to auto-tuning 2 groups of PID parameters",
      "Able to connect to various thermocouples (B, E, J, K, L, N, R, S, T, U, TXK), platinum RTD (PT100, JPT100), analog current (0 ~ 20mA, 4 ~...",
      "Maximum 3 groups of alarm switches are available, with 18 alarm modes each",
      "Celsius or Fahrenheit temperature display"
    ],
    "specs": [
      [
        "Series / models",
        "DTB Series"
      ],
      [
        "Delta range",
        "Field Device > Temperature Controllers"
      ]
    ],
    "applications": [
      "Plastics",
      "Packaging heaters",
      "Ovens",
      "Energy monitoring"
    ],
    "image": "/products/delta/delta-dtb/dtb.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-dtb/dtb.jpg",
        "label": "DTB Series"
      }
    ]
  },
  {
    "slug": "delta-dtc",
    "name": "DTC Series Temperature Controller",
    "brand": "delta",
    "category": "control",
    "group": "Field Device",
    "series": "Delta Temperature Controllers",
    "summary": "The modulized DTC series saves wiring and the parallel modules are able to monitor many temperature points. The flexible output methods enable the user to plan the output modes according to the actual needs.",
    "highlights": [
      "PID / On-Off / manual input / programmable control modes",
      "2 groups of outputs for auto-tuning 2 groups of PID parameters",
      "Able to connect to various thermocouples (B, E, J, K, L, N, R, S, T, U, TXK), platinum RTD (PT100, JPT100), analog current (0 ~ 20mA, 4 ~...",
      "Maximum 2 groups of alarm switches are available, with 12 alarm modes each",
      "LED status display"
    ],
    "specs": [
      [
        "Series / models",
        "DTC Series"
      ],
      [
        "Delta range",
        "Field Device > Temperature Controllers"
      ]
    ],
    "applications": [
      "Plastics",
      "Packaging heaters",
      "Ovens",
      "Energy monitoring"
    ],
    "image": "/products/delta/delta-dtc/dtc.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-dtc/dtc.jpg",
        "label": "DTC Series"
      }
    ]
  },
  {
    "slug": "delta-dtv",
    "name": "DTV Series Temperature Controller",
    "brand": "delta",
    "category": "control",
    "group": "Field Device",
    "series": "Delta Temperature Controllers",
    "summary": "Designed for the electron valve market, user-friendly, easy to set up and use, competitive, built-in with Modbus, simple data acquisition.",
    "highlights": [
      "Single key for switching between auto and manual mode.",
      "Additional left key for adjusting the number, making parameter settings faster and handier.",
      "Displaying output percentage for the user to acquire the openness of the valve immediately.",
      "Control methods are designed entirely for the features of electronic valve.",
      "DTV have two groups of alarm outputs with 17 modes, for more choices of applications."
    ],
    "specs": [
      [
        "Series / models",
        "DTV Series"
      ],
      [
        "Delta range",
        "Field Device > Temperature Controllers"
      ]
    ],
    "applications": [
      "Plastics",
      "Packaging heaters",
      "Ovens",
      "Energy monitoring"
    ],
    "image": "/products/delta/delta-dtv/dtv.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-dtv/dtv.jpg",
        "label": "DTV Series"
      }
    ]
  },
  {
    "slug": "delta-dte",
    "name": "DTE Series Temperature Controller",
    "brand": "delta",
    "category": "control",
    "group": "Field Device",
    "series": "Delta Temperature Controllers",
    "summary": "DTE series is a multi-channel modular temperature controller, supporting maximum 8 groups of thermocouple/platinum resistance input. The DIN rail installation saves wires, and the controller on each channel can work independently at the same time.",
    "highlights": [
      "PID, ON/OFF, programmable PID or manual control are available.",
      "PID auto-tuning",
      "Programmable control for 8 patterns and 8 steps in each pattern.",
      "12 modes ready for alarm output",
      "°C or °F for the temperature unit"
    ],
    "specs": [
      [
        "Series / models",
        "DTE Series"
      ],
      [
        "Delta range",
        "Field Device > Temperature Controllers"
      ]
    ],
    "applications": [
      "Plastics",
      "Packaging heaters",
      "Ovens",
      "Energy monitoring"
    ],
    "image": "/products/delta/delta-dte/dte.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-dte/dte.jpg",
        "label": "DTE Series"
      }
    ]
  },
  {
    "slug": "delta-dtd",
    "name": "DTD Series Temperature Controller",
    "brand": "delta",
    "category": "control",
    "group": "Field Device",
    "series": "Delta Temperature Controllers",
    "summary": "Improved hardware capability, enhanced software and competitiveness, key operation and parameter display are handier than those in DTA and DTB.",
    "highlights": [
      "Offering PID, ON/OFF, manual and PID programmable control, for multiple applications.",
      "Built-in with various kinds of sensors, for flexible switching.",
      "A group of alarm outputs with 8 modes, for more choices of applications.",
      "The set value is stored in EEPROM (4K bits) and can be written repeatedly for 1 million times and stored for 10 years. The data are more ...",
      "The key-locked function makes the controller safer than other controllers."
    ],
    "specs": [
      [
        "Series / models",
        "DTD Series"
      ],
      [
        "Delta range",
        "Field Device > Temperature Controllers"
      ]
    ],
    "applications": [
      "Plastics",
      "Packaging heaters",
      "Ovens",
      "Energy monitoring"
    ],
    "image": "/products/delta/delta-dtd/dtd.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-dtd/dtd.jpg",
        "label": "DTD Series"
      }
    ]
  },
  {
    "slug": "delta-barcode-scanners",
    "name": "Barcode Scanners (DAH / DFS Series)",
    "brand": "delta",
    "category": "sensors",
    "group": "Field Device",
    "series": "Delta Barcode Scanner",
    "summary": "Delta's handheld barcode scanner DAH2000-USB Series offers high sensing and fast capture capabilities with high-end barcode reading algorithms. With advanced and stable reading capabilities, it easily captures 1D and 2D barcodes within the range of 5-20cm without the need for manual interference.",
    "highlights": [
      "Reliable and rapid code capture without aiming precisely",
      "Easy to read barcodes under low contrast light, optical noise, uneven exposure, or damaged conditions",
      "Robust design: drop impact resistance at 1m high",
      "Lightweight handheld design",
      "Anti-static function for the electronics industry"
    ],
    "specs": [
      [
        "Series / models",
        "DAH2000-USB Series, DAH1000S-USB Series, DFS131 Series"
      ],
      [
        "Delta range",
        "Field Device > Barcode Scanner"
      ]
    ],
    "models": [
      [
        "DAH2000-USB Series",
        "Reliable and rapid code capture without aiming precisely"
      ],
      [
        "DAH1000S-USB Series",
        "Lightweight handheld design"
      ],
      [
        "DFS131 Series",
        "Fast and automatic barcode recognition without manual operation"
      ]
    ],
    "applications": [
      "Position detection",
      "Quality inspection",
      "Traceability",
      "Process measurement"
    ],
    "image": "/products/delta/delta-barcode-scanners/dah2000-usb.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-barcode-scanners/dah2000-usb.jpg",
        "label": "DAH2000-USB Series"
      },
      {
        "src": "/products/delta/delta-barcode-scanners/dah1000s-usb.jpg",
        "label": "DAH1000S-USB Series"
      },
      {
        "src": "/products/delta/delta-barcode-scanners/dfs131.jpg",
        "label": "DFS131 Series"
      }
    ]
  },
  {
    "slug": "delta-vis100",
    "name": "VIS100 Series Vision Sensor",
    "brand": "delta",
    "category": "sensors",
    "group": "Field Device",
    "series": "Delta Vision Sensor",
    "summary": "As industrial automation moves toward smart manufacturing, industries seek more intelligent and high-precision inspection devices that are modular and user-friendly in design to fulfill a variety of industry demands.",
    "highlights": [
      "Advanced embedded system for high-speed inspection capabilities",
      "Compact in size for flexible installation",
      "User-friendly interfaces for easy setup",
      "Supports program setup via browsers for simple and rapid device adjustment",
      "Built-in LED lighting, no need to purchase additional lighting device"
    ],
    "specs": [
      [
        "Series / models",
        "VIS100 Series"
      ],
      [
        "Delta range",
        "Field Device > Vision Sensor"
      ]
    ],
    "applications": [
      "Position detection",
      "Quality inspection",
      "Traceability",
      "Process measurement"
    ],
    "image": "/products/delta/delta-vis100/vis100.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-vis100/vis100.jpg",
        "label": "VIS100 Series"
      }
    ]
  },
  {
    "slug": "delta-dpm-power-meters",
    "name": "DPM Series Power Meters",
    "brand": "delta",
    "category": "control",
    "group": "Field Device",
    "series": "Delta Power Meter",
    "summary": "Delta’s Advanced Multifunction Meter DPM-C530 series offers precise measurement of various electrical energy values and power quality parameters, including power factor, harmonics, and current / voltage unbalance, and it also provides off-limit alarms and history log functions.",
    "highlights": [
      "Complies with IEC62053-22 Class 0.5S in active energy accuracy (DPM-C530)",
      "Supports Modbus communication and is easy to apply with SCADA and EMS",
      "Capable of measuring total harmonic distortion (THD) and individual harmonics up to the 31st order",
      "Multi-tariff and demand calculation",
      "Digital input / output for peripheral integration"
    ],
    "specs": [
      [
        "Series / models",
        "DPM-C530 / C530E / C532, DPM-C520, DPM-C510 / C510E, DPM-C501L/C502, DPM-D520I, DPM-DA510 / DA530, DPM-MA3222, DPM-MA1121, DCT Series"
      ],
      [
        "Delta range",
        "Field Device > Power Meter"
      ]
    ],
    "models": [
      [
        "DPM-C530 / C530E / C532",
        "Complies with IEC62053-22 Class 0.5S in active energy accuracy (DPM-C530)"
      ],
      [
        "DPM-C520",
        "High-precision Class 0.5S bidirectional energy and electricity parameter measurement, complies with IEC 62053 "
      ],
      [
        "DPM-C510 / C510E",
        "Panel mount and LED display"
      ],
      [
        "DPM-C501L/C502",
        "Combines several discontinuous register addresses to one continuous address, reducing commands to achieve high"
      ],
      [
        "DPM-D520I",
        "Directly measures current up to 63A. Active energy accuracy up to 0.5%"
      ],
      [
        "DPM-DA510 / DA530",
        "Automatic measurement & calculation of power consumption during a specific time period"
      ],
      [
        "DPM-MA3222",
        "Scalable Multi-Loop Configuration (DPM-MA3222)"
      ],
      [
        "DPM-MA1121",
        "The parameter group contains all needed energy data for master controllers (including PLCs, SCADA and EMS) to "
      ],
      [
        "DCT Series",
        "Energy management systems for offices, building elevators, equipment, public electricity facilities, warehouse"
      ]
    ],
    "applications": [
      "Plastics",
      "Packaging heaters",
      "Ovens",
      "Energy monitoring"
    ],
    "image": "/products/delta/delta-dpm-power-meters/dpm-c530-c530e-c532.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-dpm-power-meters/dpm-c530-c530e-c532.jpg",
        "label": "DPM-C530 / C530E / C532"
      },
      {
        "src": "/products/delta/delta-dpm-power-meters/dpm-c520.png",
        "label": "DPM-C520"
      },
      {
        "src": "/products/delta/delta-dpm-power-meters/dpm-c510-c510e.jpg",
        "label": "DPM-C510 / C510E"
      },
      {
        "src": "/products/delta/delta-dpm-power-meters/dpm-c501l-c502.jpg",
        "label": "DPM-C501L/C502"
      },
      {
        "src": "/products/delta/delta-dpm-power-meters/dpm-d520i.jpg",
        "label": "DPM-D520I"
      },
      {
        "src": "/products/delta/delta-dpm-power-meters/dpm-da510-da530.jpg",
        "label": "DPM-DA510 / DA530"
      },
      {
        "src": "/products/delta/delta-dpm-power-meters/dpm-ma3222.jpg",
        "label": "DPM-MA3222"
      },
      {
        "src": "/products/delta/delta-dpm-power-meters/dpm-ma1121.jpg",
        "label": "DPM-MA1121"
      },
      {
        "src": "/products/delta/delta-dpm-power-meters/dct.jpg",
        "label": "DCT Series"
      }
    ]
  },
  {
    "slug": "delta-smart-sensors",
    "name": "Smart Sensors (Laser Displacement, Photoelectric, Area)",
    "brand": "delta",
    "category": "sensors",
    "group": "Field Device",
    "series": "Delta Smart Sensors",
    "summary": "The LD-E Series deploys high-resolution CMOS sensors for contactless measurement of object size, position, flatness, gap, and runout via laser triangulation.",
    "highlights": [
      "Measurement range 25 ~ 700 mm with five model options: 500 ± 200 mm, 220 ± 100 mm, 100 ± 35 mm, 50 ± 15 mm, 30 ± 5 mm",
      "Supports digital I/O, analog 4~20mA, and Modbus RS-485 communication",
      "Linearity ±0.1% ~ ±0.5%",
      "A space-saving compact size and certified with an IP67 waterproof rating, suitable for various environments",
      "Precise Peak Value Imaging Sampling / Delta's self-developed algorithm automatically captures the peak value and calculates the distance ..."
    ],
    "specs": [
      [
        "Series / models",
        "Laser Displacement LD-E Series, Photoelectric Sensor, Laser Displacement, Area Sensor"
      ],
      [
        "Delta range",
        "Field Device > Smart Sensors"
      ]
    ],
    "models": [
      [
        "Laser Displacement LD-E Series",
        "Measurement range 25 ~ 700 mm with five model options: 500 ± 200 mm, 220 ± 100 mm, 100 ± 35 mm, 50 ± 15 mm, 30"
      ],
      [
        "Photoelectric Sensor",
        "Variety of types for different applications"
      ],
      [
        "Laser Displacement",
        "Aluminum case, strong structure"
      ],
      [
        "Area Sensor",
        "Aluminum case, strong structure"
      ]
    ],
    "applications": [
      "Position detection",
      "Quality inspection",
      "Traceability",
      "Process measurement"
    ],
    "image": "/products/delta/delta-smart-sensors/laser-displacement-ld-e.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-smart-sensors/laser-displacement-ld-e.jpg",
        "label": "Laser Displacement LD-E Series"
      },
      {
        "src": "/products/delta/delta-smart-sensors/photoelectric-sensor.jpg",
        "label": "Photoelectric Sensor"
      },
      {
        "src": "/products/delta/delta-smart-sensors/laser-displacement.jpg",
        "label": "Laser Displacement"
      },
      {
        "src": "/products/delta/delta-smart-sensors/area-sensor.jpg",
        "label": "Area Sensor"
      }
    ]
  },
  {
    "slug": "delta-pressure-sensors",
    "name": "DPA / DPB Series Pressure Sensors",
    "brand": "delta",
    "category": "sensors",
    "group": "Field Device",
    "series": "Delta Pressure Sensors",
    "summary": "Delta's Standard Multifunction Pressure Sensor DPA Series is able to detect positive and negative pressure. The DPA offers 6 globally adopted pressure units. The large LED has a green, red and orange 3-color display that allows users to set up colors according to actual demand.",
    "highlights": [
      "Energy-saving mode",
      "Easy code display",
      "3 sets of color display",
      "Various unit conversion functions",
      "Various output modes"
    ],
    "specs": [
      [
        "Series / models",
        "DPA Series, DPB Series"
      ],
      [
        "Delta range",
        "Field Device > Pressure Sensors"
      ]
    ],
    "models": [
      [
        "DPA Series",
        "Energy-saving mode"
      ],
      [
        "DPB Series",
        "Various unit conversion functions"
      ]
    ],
    "applications": [
      "Position detection",
      "Quality inspection",
      "Traceability",
      "Process measurement"
    ],
    "image": "/products/delta/delta-pressure-sensors/dpa.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-pressure-sensors/dpa.jpg",
        "label": "DPA Series"
      },
      {
        "src": "/products/delta/delta-pressure-sensors/dpb.jpg",
        "label": "DPB Series"
      }
    ]
  },
  {
    "slug": "delta-cta",
    "name": "CTA series Tachometer",
    "brand": "delta",
    "category": "control",
    "group": "Field Device",
    "series": "Delta Timers / Counters / Tachometers",
    "summary": "CTA Timer/Counter/Tachometer is able to receive external input signals and calculate the times of events, frequency and driving speed. CTA can be applied to batch counting, total counting, length measurement, position control, accurate timing, rotation speed and so on.",
    "highlights": [
      "Panel size: 48mm x 48mm",
      "Power input: 100~240VAC, 50/60Hz or DC24V",
      "Range of input voltage: 85%~110%, rated voltage or DC21.6V~26.4V",
      "Power consumption: less than 10VA or 5W",
      "External power supply: 12VDC ± 10%; 100mA"
    ],
    "specs": [
      [
        "Series / models",
        "CTA series"
      ],
      [
        "Delta range",
        "Field Device > Timers / Counters / Tachometers"
      ]
    ],
    "applications": [
      "Plastics",
      "Packaging heaters",
      "Ovens",
      "Energy monitoring"
    ],
    "image": "/products/delta/delta-cta/cta.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-cta/cta.jpg",
        "label": "CTA series"
      }
    ]
  },
  {
    "slug": "delta-dfm",
    "name": "DFM Series Gas Flow Meter",
    "brand": "delta",
    "category": "sensors",
    "group": "Field Device",
    "series": "Delta Gas Flow Meter",
    "summary": "DFM is Delta new air flow sensor series, with compact size and friendly use setting, can fulfill many operating environment and narrow space installation demand. / DFM using thermopile technology, compare traditional sensing methods, thermopile technology can be more accurate and stable.",
    "highlights": [
      "RS-485 communication",
      "Accurate measurement",
      "Two-sided gas flow measurement",
      "Embedded 3-layer tranquilizer to stabilize gas flow",
      "Support analog and digital output"
    ],
    "specs": [
      [
        "Series / models",
        "DFM Series"
      ],
      [
        "Delta range",
        "Field Device > Gas Flow Meter"
      ]
    ],
    "applications": [
      "Position detection",
      "Quality inspection",
      "Traceability",
      "Process measurement"
    ],
    "image": "/products/delta/delta-dfm/dfm.jpg",
    "gallery": [
      {
        "src": "/products/delta/delta-dfm/dfm.jpg",
        "label": "DFM Series"
      }
    ]
  },
  {
    slug: "delta-pmc-power-supplies",
    name: "PMC / DRP DIN-Rail Power Supplies",
    brand: "delta",
    category: "power",
    group: "Field Device",
    series: "PMC-24V050W1AA · DRP024V240W1AA · CliQ series",
    summary: "Reliable DIN-rail switching power supplies from 15 W to 960 W with wide input and protection functions.",
    highlights: [
      "Slim and compact housings",
      "Universal 85–264 V AC input",
      "Over-voltage, over-current and short-circuit protection",
      "Parallel and redundancy models available",
    ],
    specs: [
      ["Output", "24 V DC (5 / 12 / 48 V options), 15 – 960 W"],
      ["Efficiency", "Up to 94 %"],
    ],
    applications: ["Control panels", "Machines", "Building automation"],
  },
  /* ─────────────────────────── MITSUBISHI ELECTRIC ─────────────────────────── */
  /* Controllers */
  {
    slug: "mitsubishi-melsec-iq-r",
    image: "/products/mitsubishi/mitsubishi-melsec-iq-r/thumbnail-iqr.jpg",
    gallery: [
      { src: "/products/mitsubishi/mitsubishi-melsec-iq-r/thumbnail-iqr.jpg", label: "MELSEC iQ-R" },
      { src: "/products/mitsubishi/mitsubishi-melsec-iq-r/thumbnail-analog.jpg", label: "Analog module" },
      { src: "/products/mitsubishi/mitsubishi-melsec-iq-r/thumbnail-base.jpg", label: "Base unit" },
      { src: "/products/mitsubishi/mitsubishi-melsec-iq-r/thumbnail-cpu.jpg", label: "CPU module" },
      { src: "/products/mitsubishi/mitsubishi-melsec-iq-r/thumbnail-high-speed.jpg", label: "High-speed counter module" },
      { src: "/products/mitsubishi/mitsubishi-melsec-iq-r/thumbnail-io.jpg", label: "I/O module" },
      { src: "/products/mitsubishi/mitsubishi-melsec-iq-r/thumbnail-it_connect.jpg", label: "Advanced information module" },
      { src: "/products/mitsubishi/mitsubishi-melsec-iq-r/thumbnail-it_measuring.jpg", label: "Energy measuring module" },
      { src: "/products/mitsubishi/mitsubishi-melsec-iq-r/thumbnail-motion.jpg", label: "Motion / positioning module" },
      { src: "/products/mitsubishi/mitsubishi-melsec-iq-r/thumbnail-network.jpg", label: "Network / communication module" },
      { src: "/products/mitsubishi/mitsubishi-melsec-iq-r/thumbnail-power_supply.jpg", label: "Power supply module" },
      { src: "/products/mitsubishi/mitsubishi-melsec-iq-r/thumbnail-temp.jpg", label: "Temperature module" },
    ],
    name: "MELSEC iQ-R Series",
    brand: "mitsubishi-electric",
    category: "plc",
    group: "Controllers",
    series: "R04 – R120 CPU · Process, Safety, Motion & C-controller CPUs",
    summary:
      "Mitsubishi's flagship modular controller — bridging the next generation of automation with 0.98 ns instruction speed, multi-CPU configurations and CC-Link IE TSN networking.",
    highlights: [
      "Basic instruction 0.98 ns; program capacity 40K – 1,200K steps",
      "Multi-CPU: standard, process, safety, motion and C-controller CPUs on one base",
      "CC-Link IE TSN, CC-Link IE Field/Control, Ethernet and SLMP built in",
      "Full module range: I/O, analog, temperature, motion, high-speed counter, network, energy measurement",
      "Programmed in GX Works3 with security and change-tracking functions",
    ],
    specs: [
      ["CPU models", "R04, R08, R16, R32, R120 (EN variants with built-in CC-Link IE); R08P/R16P/R32P/R120P process; R08SF/R16SF/R32SF/R120SF safety"],
      ["Program capacity", "40K – 1,200K steps"],
      ["Networks", "CC-Link IE TSN, CC-Link IE Field, CC-Link IE Control, CC-Link, Ethernet, PROFINET (module)"],
      ["Software", "GX Works3 / MELSOFT iQ Works"],
    ],
    models: [
      ["R04CPU / R08CPU / R16CPU / R32CPU / R120CPU", "Programmable controller CPUs, 40K – 1,200K steps"],
      ["R04ENCPU – R120ENCPU", "CPUs with built-in CC-Link IE port"],
      ["R08PCPU – R120PCPU", "Process CPUs (redundant capable with R6RFM)"],
      ["R08SFCPU – R120SFCPU", "Safety CPUs with R6SFM safety function module"],
      ["R16MTCPU / R32MTCPU / R64MTCPU", "Motion CPUs"],
      ["R12CCPU-V", "C controller CPU"],
      ["RX / RY / RH modules", "Digital input, output and mixed I/O modules"],
      ["R60AD / R60DA / R60RD / R60TD", "Analog input/output and temperature input modules"],
      ["RD77MS / RD77GF", "Simple motion modules (SSCNET III/H / CC-Link IE Field)"],
      ["RJ71GN11-T2 / RJ71EN71 / RJ71GF11-T2", "CC-Link IE TSN / Ethernet / CC-Link IE Field network modules"],
    ],
    applications: ["Automotive lines", "Large machines", "Process control", "Data-driven factories"],
    featured: true,
  },
  {
    slug: "mitsubishi-melsec-iq-f",
    image: "/products/mitsubishi/mitsubishi-melsec-iq-f/thumbnail-iqf.jpg",
    gallery: [
      { src: "/products/mitsubishi/mitsubishi-melsec-iq-f/thumbnail-iqf.jpg", label: "MELSEC iQ-F" },
      { src: "/products/mitsubishi/mitsubishi-melsec-iq-f/thumbnail_iqf_analog.png", label: "Analog module" },
      { src: "/products/mitsubishi/mitsubishi-melsec-iq-f/thumbnail_iqf_communication.png", label: "Network / communication module" },
      { src: "/products/mitsubishi/mitsubishi-melsec-iq-f/thumbnail_iqf_cpu.png", label: "CPU module" },
      { src: "/products/mitsubishi/mitsubishi-melsec-iq-f/thumbnail_iqf_hc.png", label: "High-speed counter module" },
      { src: "/products/mitsubishi/mitsubishi-melsec-iq-f/thumbnail_iqf_io.png", label: "I/O module" },
      { src: "/products/mitsubishi/mitsubishi-melsec-iq-f/thumbnail_iqf_positioning.png", label: "Motion / positioning module" },
      { src: "/products/mitsubishi/mitsubishi-melsec-iq-f/thumbnail_iqf_relate.png", label: "Options" },
      { src: "/products/mitsubishi/mitsubishi-melsec-iq-f/thumbnail_iqf_safety.png", label: "Safety extension module" },
    ],
    name: "MELSEC iQ-F Series (FX5)",
    brand: "mitsubishi-electric",
    category: "plc",
    group: "Controllers",
    series: "FX5U · FX5UC · FX5UJ · FX5S",
    summary:
      "Next-generation compact PLC with built-in Ethernet, analog I/O, 4-axis positioning and CC-Link IE Field Basic — the most popular Mitsubishi controller for machines.",
    highlights: [
      "FX5U: 32/64/80 I/O on CPU, built-in Ethernet, RS485, 2AI/1AO and SD card",
      "200 kHz pulse outputs for 4 axes; simple motion modules for up to 16 axes",
      "FX5UJ and FX5S for cost-sensitive machines; FX5UC compact connector type",
      "CC-Link IE TSN / Field Basic, Modbus TCP/RTU, SLMP",
      "GX Works3 structured programming with FX5 safety extension modules",
    ],
    specs: [
      ["I/O", "FX5S 30/40/60 · FX5UJ 24/40/60 · FX5U 32/64/80 · FX5UC 32/64/96 — up to 512 points"],
      ["Program capacity", "FX5S 16K · FX5UJ 48K · FX5U/UC 64K (128K) steps"],
      ["Communication", "Ethernet, RS485 (Modbus), CC-Link IE TSN/Field Basic, SLMP"],
      ["Software", "GX Works3"],
    ],
    models: [
      ["FX5U-32MR/ES, -32MT/ES, -32MT/ESS", "16 DI / 16 DO, relay or transistor (sink / source)"],
      ["FX5U-64MR/ES, -64MT/ES, -64MT/ESS", "32 DI / 32 DO"],
      ["FX5U-80MR/ES, -80MT/ES, -80MT/ESS", "40 DI / 40 DO"],
      ["FX5UC-32MT/D, -32MT/DSS, -64MT/D, -96MT/D", "Compact connector type CPUs, 24 V DC"],
      ["FX5UJ-24MR/ES – FX5UJ-60MT/ESS", "Economy CPUs 24 – 60 I/O"],
      ["FX5S-30MR/ES – FX5S-60MT/ESS", "Entry CPUs 30 – 60 I/O"],
      ["FX5-16EX/ES, FX5-16EYR/ES, FX5-16EYT/ES, FX5-32ER/ES …", "Digital I/O extension modules"],
      ["FX5-4AD, FX5-4DA, FX5-8AD, FX5-4AD-TC-ADP, FX5-4AD-PT-ADP", "Analog and temperature modules / adapters"],
      ["FX5-40SSC-S, FX5-80SSC-S, FX5-40SSC-G, FX5-80SSC-G", "Simple motion modules (SSCNET III/H, CC-Link IE TSN)"],
      ["FX5-ENET, FX5-ENET/IP, FX5-CCLGN-MS, FX5-232ADP, FX5-485ADP", "Network and communication modules / adapters"],
      ["FX5-SF-MU4T5, FX5-SF-8DI4", "Safety extension modules"],
    ],
    applications: ["Packaging", "Food machines", "Textile", "Injection moulding", "Material handling"],
    featured: true,
  },
  {
    slug: "mitsubishi-melsec-q",
    image: "/products/mitsubishi/mitsubishi-melsec-q/thumbnail-q.jpg",
    gallery: [
      { src: "/products/mitsubishi/mitsubishi-melsec-q/thumbnail-q.jpg", label: "MELSEC-Q" },
      { src: "/products/mitsubishi/mitsubishi-melsec-q/thumbnail-analog.jpg", label: "Analog module" },
      { src: "/products/mitsubishi/mitsubishi-melsec-q/thumbnail-base.jpg", label: "Base unit" },
      { src: "/products/mitsubishi/mitsubishi-melsec-q/thumbnail-cpu.jpg", label: "CPU module" },
      { src: "/products/mitsubishi/mitsubishi-melsec-q/thumbnail-high-speed.jpg", label: "High-speed counter module" },
      { src: "/products/mitsubishi/mitsubishi-melsec-q/thumbnail-io.jpg", label: "I/O module" },
      { src: "/products/mitsubishi/mitsubishi-melsec-q/thumbnail-it_measuring.jpg", label: "Energy measuring module" },
      { src: "/products/mitsubishi/mitsubishi-melsec-q/thumbnail-motion.jpg", label: "Motion / positioning module" },
      { src: "/products/mitsubishi/mitsubishi-melsec-q/thumbnail-network.jpg", label: "Network / communication module" },
      { src: "/products/mitsubishi/mitsubishi-melsec-q/thumbnail-option.jpg", label: "Options" },
      { src: "/products/mitsubishi/mitsubishi-melsec-q/thumbnail-power_supply.jpg", label: "Power supply module" },
    ],
    name: "MELSEC-Q Series",
    brand: "mitsubishi-electric",
    category: "plc",
    group: "Controllers",
    series: "QnUDV / QnUDE / QnUD CPUs · Universal model",
    summary:
      "High-speed, high-accuracy all-round modular PLC with a huge installed base in India — full CPU, I/O, analog, motion and network module range plus spares.",
    highlights: [
      "Universal model QnUDV CPUs with built-in Ethernet and SD card",
      "Multi-CPU with motion, process, redundant and C-controller CPUs",
      "Extensive I/O, analog, simple motion, high-speed counter and network modules",
      "CC-Link IE Field/Control, CC-Link, Ethernet, PROFIBUS modules",
      "Programmed in GX Works2 (and GX Works3 for QnUDV projects)",
    ],
    specs: [
      ["CPU models", "Q00UJ, Q00U, Q01U, Q02U, Q03UDV, Q04UDV, Q06UDV, Q13UDV, Q26UDV (and UDE/UDEH variants)"],
      ["Program capacity", "10K – 260K steps"],
      ["Networks", "CC-Link IE Field/Control, CC-Link, Ethernet, PROFIBUS-DP, Modbus"],
      ["Software", "GX Works2 / GX Works3"],
    ],
    models: [
      ["Q03UDVCPU – Q26UDVCPU", "Universal CPUs with built-in Ethernet, 30K – 260K steps"],
      ["Q00UJCPU / Q00UCPU / Q01UCPU / Q02UCPU", "Entry universal CPUs"],
      ["Q172DSCPU / Q173DSCPU", "Motion CPUs"],
      ["Q3xB / Q6xB base units, Q61P / Q62P / Q63P power supplies", "Main and extension bases, power supply modules"],
      ["QX40 / QX80 / QY10 / QY40P / QY80 / QH42P …", "Digital input, output and mixed modules"],
      ["Q64AD / Q68ADV / Q62DA / Q64TD / Q64RD …", "Analog, temperature and RTD modules"],
      ["QD77MS2 / QD77MS4 / QD77MS16 / QD75P / QD75D", "Simple motion and positioning modules"],
      ["QJ71GF11-T2 / QJ71GP21-SX / QJ61BT11N / QJ71E71-100 / QJ71PB92V", "Network modules"],
    ],
    applications: ["Automotive", "Steel & metals", "Process plants", "Spares & maintenance"],
  },
  {
    slug: "mitsubishi-melsec-l",
    image: "/products/mitsubishi/mitsubishi-melsec-l/thumbnail-l.jpg",
    gallery: [
      { src: "/products/mitsubishi/mitsubishi-melsec-l/thumbnail-l.jpg", label: "MELSEC-L" },
      { src: "/products/mitsubishi/mitsubishi-melsec-l/thumbnail-analog.jpg", label: "Analog module" },
      { src: "/products/mitsubishi/mitsubishi-melsec-l/thumbnail-cpu.jpg", label: "CPU module" },
      { src: "/products/mitsubishi/mitsubishi-melsec-l/thumbnail-extension.jpg", label: "Branch / extension module" },
      { src: "/products/mitsubishi/mitsubishi-melsec-l/thumbnail-high-speed.jpg", label: "High-speed counter module" },
      { src: "/products/mitsubishi/mitsubishi-melsec-l/thumbnail-io.jpg", label: "I/O module" },
      { src: "/products/mitsubishi/mitsubishi-melsec-l/thumbnail-motion.jpg", label: "Motion / positioning module" },
      { src: "/products/mitsubishi/mitsubishi-melsec-l/thumbnail-network.jpg", label: "Network / communication module" },
      { src: "/products/mitsubishi/mitsubishi-melsec-l/thumbnail-option.jpg", label: "Options" },
      { src: "/products/mitsubishi/mitsubishi-melsec-l/thumbnail-power_supply.jpg", label: "Power supply module" },
    ],
    name: "MELSEC-L Series",
    brand: "mitsubishi-electric",
    category: "plc",
    group: "Controllers",
    series: "L02S / L02 / L06 / L26 CPUs · Base-less modular",
    summary:
      "Handy, base-less modular PLC with built-in I/O, high-speed counters, positioning and Ethernet — rack-free flexibility for medium machines.",
    highlights: [
      "Built-in 24 I/O with high-speed counter and positioning on the CPU",
      "No base unit — modules snap together on the DIN rail",
      "Built-in Ethernet (LnCPU-BT/-P) and CC-Link master module options",
      "Full analog, motion, high-speed counter and network module line-up",
      "Programmed in GX Works2",
    ],
    specs: [
      ["CPU models", "L02SCPU, L02CPU, L06CPU, L26CPU (-BT with CC-Link, -P with Ethernet)"],
      ["Program capacity", "20K – 260K steps"],
      ["Networks", "Ethernet, CC-Link, CC-Link IE Field, Modbus"],
      ["Software", "GX Works2"],
    ],
    models: [
      ["L02SCPU / L02CPU / L02CPU-P", "20K-step CPUs with built-in I/O"],
      ["L06CPU / L06CPU-P / L26CPU / L26CPU-BT / L26CPU-P", "60K – 260K step CPUs"],
      ["L61P / L63P", "Power supply modules"],
      ["LX40C6 / LX42C4 / LY10R2 / LY40NT5P / LY42NT1P", "Digital input/output modules"],
      ["L60AD4 / L60DA4 / L60TCTT4 / L60RD8", "Analog, temperature control and RTD modules"],
      ["LD77MS2 / LD77MS4 / LD77MS16 / LD75P4 / LD75D4", "Simple motion and positioning modules"],
      ["LJ71E71-100 / LJ61BT11 / LJ71GF11-T2", "Ethernet, CC-Link and CC-Link IE Field modules"],
    ],
    applications: ["Packaging", "Printing", "Mid-size machines", "Food processing"],
  },
  {
    slug: "mitsubishi-melsec-f",
    image: "/products/mitsubishi/mitsubishi-melsec-f/thumbnail-f.jpg",
    gallery: [
      { src: "/products/mitsubishi/mitsubishi-melsec-f/thumbnail-f.jpg", label: "MELSEC-F" },
      { src: "/products/mitsubishi/mitsubishi-melsec-f/thumbnail_fx_analog.png", label: "Analog module" },
      { src: "/products/mitsubishi/mitsubishi-melsec-f/thumbnail_fx_communication.png", label: "Network / communication module" },
      { src: "/products/mitsubishi/mitsubishi-melsec-f/thumbnail_fx_hc.png", label: "High-speed counter module" },
      { src: "/products/mitsubishi/mitsubishi-melsec-f/thumbnail_fx_io.png", label: "I/O module" },
      { src: "/products/mitsubishi/mitsubishi-melsec-f/thumbnail_fx_option.png", label: "Options" },
      { src: "/products/mitsubishi/mitsubishi-melsec-f/thumbnail_fx_plc.png", label: "CPU module" },
      { src: "/products/mitsubishi/mitsubishi-melsec-f/thumbnail_fx_positioning.png", label: "Motion / positioning module" },
    ],
    name: "MELSEC-F Series (FX3)",
    brand: "mitsubishi-electric",
    category: "plc",
    group: "Controllers",
    series: "FX3U · FX3UC · FX3G · FX3GE · FX3S · FX3GC",
    summary:
      "The cost-effective compact PLC family installed in tens of thousands of Indian machines — we stock CPUs, extension blocks and special function modules for new builds and spares.",
    highlights: [
      "FX3U: 0.065 µs per instruction, up to 384 I/O, 3-axis 100 kHz pulse output",
      "FX3G / FX3GE (built-in Ethernet and analog) for standard machines",
      "FX3S for small, cost-sensitive applications",
      "Extension blocks, analog, temperature, high-speed counter and positioning modules",
      "Programmed in GX Works2 / GX Developer",
    ],
    specs: [
      ["I/O", "FX3S 10 – 30 · FX3G 14 – 256 · FX3U 16 – 384"],
      ["Program capacity", "FX3S 4K · FX3G 32K · FX3U 64K steps"],
      ["Communication", "RS422 / RS232 / RS485 boards and adapters, Ethernet (FX3GE, FX3U-ENET-ADP), CC-Link"],
      ["Software", "GX Works2"],
    ],
    models: [
      ["FX3U-16M… / -32M… / -48M… / -64M… / -80M… / -128M…", "FX3U main units, relay (MR) or transistor (MT), AC (/ES) or DC (/DS) supply"],
      ["FX3UC-16MT/D – FX3UC-96MT/D", "Compact connector-type main units"],
      ["FX3G-14M… / -24M… / -40M… / -60M…", "FX3G main units"],
      ["FX3GE-24M… / -40M…", "FX3G with built-in Ethernet and 2AI/1AO"],
      ["FX3S-10M… / -14M… / -20M… / -30M…", "FX3S main units"],
      ["FX2N-16EX / -16EYR / -16EYT / -32ER …", "Extension blocks"],
      ["FX3U-4AD / -4DA / -4AD-PT-ADP / -4AD-TC-ADP / FX2N-4AD / FX2N-4DA", "Analog and temperature modules / adapters"],
      ["FX3U-1PG / FX3U-20SSC-H / FX3U-4HSX-ADP / FX3U-2HSY-ADP", "Positioning and high-speed I/O"],
      ["FX3U-ENET-ADP / FX3U-485-BD / FX3U-232-BD / FX3U-422-BD / FX3U-16CCL-M", "Communication boards, adapters and CC-Link"],
    ],
    applications: ["Legacy machine support", "Spares", "Small machines", "Textile & packaging"],
  },
  {
    slug: "mitsubishi-melsec-ws-safety",
    image: "/products/mitsubishi/mitsubishi-melsec-ws-safety/thumbnail-qsws.jpg",
    gallery: [
      { src: "/products/mitsubishi/mitsubishi-melsec-ws-safety/thumbnail-qsws.jpg", label: "MELSEC-QS/WS" },
      { src: "/products/mitsubishi/mitsubishi-melsec-ws-safety/thumbnail-cont.jpg", label: "Safety controller (WS)" },
      { src: "/products/mitsubishi/mitsubishi-melsec-ws-safety/thumbnail-plc.jpg", label: "Safety PLC (QS, out of production)" },
      { src: "/products/mitsubishi/mitsubishi-melsec-ws-safety/thumbnail-relay.jpg", label: "Safety relay module" },
    ],
    name: "MELSEC-WS Safety Controllers",
    brand: "mitsubishi-electric",
    category: "plc",
    group: "Controllers",
    series: "WS0-CPU0 / WS0-CPU1 · Safety I/O modules",
    summary:
      "Compact, configurable safety controllers up to SIL3 / PLe for emergency stops, light curtains, door switches and two-hand controls — a step up from safety relays.",
    highlights: [
      "WS0-CPU0 / WS0-CPU1 safety CPUs with XTIO / XTDI safety I/O modules",
      "Up to Category 4, PLe (ISO 13849-1) and SIL3 (IEC 61508)",
      "Drag-and-drop logic in Setting and Monitoring Tool, no safety-PLC programming skills needed",
      "Ethernet / CC-Link gateway modules for diagnostics to the standard PLC",
      "MELSEC-QS safety PLC spares supplied for existing installations (out of production)",
    ],
    specs: [
      ["Safety level", "SIL3 / PLe / Category 4"],
      ["CPU", "WS0-CPU0 (4 I/O modules) · WS0-CPU1 (12 I/O modules)"],
      ["I/O modules", "WS0-XTIO (8 DI / 4 DO) · WS0-XTDI (8 DI)"],
      ["Gateways", "WS0-GETH (Ethernet) · WS0-GCC1 (CC-Link)"],
    ],
    models: [
      ["WS0-CPU0 / WS0-CPU1", "Safety controller CPU modules"],
      ["WS0-XTIO / WS0-XTDI", "Safety input/output modules"],
      ["WS0-GETH / WS0-GCC1", "Ethernet and CC-Link gateway modules"],
      ["WS0-MPL0 / WS0-MPL1", "Memory plugs"],
      ["QS001CPU / QS0J61BT12 / QS0J65BTB2-12DT", "MELSEC-QS safety PLC (out of production — spares on request)"],
    ],
    applications: ["Machine safety circuits", "Presses & robots cells", "Packaging lines"],
  },
  {
    slug: "mitsubishi-motion-controllers",
    image: "/products/mitsubishi/mitsubishi-motion-controllers/products_thumbnail_sscemb.jpg",
    gallery: [
      { src: "/products/mitsubishi/mitsubishi-motion-controllers/products_thumbnail_sscemb.jpg", label: "Embedded servo system controller" },
      { src: "/products/mitsubishi/mitsubishi-motion-controllers/products_thumbnail_ssciqf.jpg", label: "MELSEC iQ-F motion" },
      { src: "/products/mitsubishi/mitsubishi-motion-controllers/products_thumbnail_ssciqr.jpg", label: "MELSEC iQ-R motion" },
      { src: "/products/mitsubishi/mitsubishi-motion-controllers/products_thumbnail_sscl.jpg", label: "MELSEC-L motion" },
      { src: "/products/mitsubishi/mitsubishi-motion-controllers/products_thumbnail_sscq.jpg", label: "MELSEC-Q motion" },
      { src: "/products/mitsubishi/mitsubishi-motion-controllers/products_thumbnail_swmg.jpg", label: "SWM-G motion software" },
    ],
    name: "Motion Controllers & Simple Motion Modules",
    brand: "mitsubishi-electric",
    category: "plc",
    group: "Controllers",
    series: "RD77 · FX5-SSC · QD77 · LD77 · SWM-G · Motion CPUs",
    summary:
      "Positioning and motion control for every MELSEC family — from 2-axis simple motion modules to 64-axis motion CPUs and PC-based SWM-G software, all driving MELSERVO amplifiers.",
    highlights: [
      "Simple motion modules for iQ-R (RD77), iQ-F (FX5-SSC), Q (QD77) and L (LD77)",
      "Motion CPUs R16MT/R32MT/R64MT and Q172DS/Q173DS for synchronised, cam and advanced control",
      "SSCNET III/H and CC-Link IE TSN servo networks",
      "SWM-G motion control software for PC-based and embedded control",
      "Programmed in MT Works2 / GX Works3",
    ],
    specs: [
      ["Axes", "2 – 64 per module/CPU depending on model"],
      ["Servo networks", "SSCNET III/H, CC-Link IE TSN, CC-Link IE Field"],
      ["Software", "MT Works2, GX Works3, SWM-G"],
    ],
    models: [
      ["RD77MS2 / MS4 / MS8 / MS16 · RD77GF4 / GF8 / GF16 / GF32", "iQ-R simple motion modules"],
      ["RD78G4 / G8 / G16 / G32 / G64 · RD78GHV / GHW", "iQ-R motion modules (CC-Link IE TSN)"],
      ["FX5-40SSC-S / FX5-80SSC-S / FX5-40SSC-G / FX5-80SSC-G", "iQ-F simple motion modules"],
      ["QD77MS2 / MS4 / MS16 · QD77GF4 / GF8 / GF16", "Q series simple motion modules"],
      ["LD77MS2 / MS4 / MS16", "L series simple motion modules"],
      ["R16MTCPU / R32MTCPU / R64MTCPU · Q172DSCPU / Q173DSCPU", "Motion CPUs"],
      ["SWM-G", "Motion control software (PC-based)"],
    ],
    applications: ["Packaging", "Printing & converting", "Electronics assembly", "Robots & gantries"],
  },
  {
    slug: "mitsubishi-melsec-network-modules",
    image: "/products/mitsubishi/mitsubishi-melsec-network-modules/thumbnail-nw.jpg",
    gallery: [
      { src: "/products/mitsubishi/mitsubishi-melsec-network-modules/thumbnail-nw.jpg", label: "Network-related products" },
      { src: "/products/mitsubishi/mitsubishi-melsec-network-modules/cc-link-ie-control-index.jpg", label: "CC-Link IE Control" },
      { src: "/products/mitsubishi/mitsubishi-melsec-network-modules/cc-link-ie-field-basic-index.jpg", label: "CC-Link IE Field Basic" },
      { src: "/products/mitsubishi/mitsubishi-melsec-network-modules/cc-link-ie-field-index.jpg", label: "CC-Link IE Field" },
      { src: "/products/mitsubishi/mitsubishi-melsec-network-modules/cc-link-ie-tsn-index.jpg", label: "CC-Link IE TSN" },
    ],
    name: "MELSEC Network Modules & CC-Link IE",
    brand: "mitsubishi-electric",
    category: "networking",
    group: "Controllers",
    series: "CC-Link IE TSN · CC-Link IE Field / Control · CC-Link · Ethernet",
    summary:
      "Network modules, remote I/O stations and gateways for Mitsubishi's open networks — from gigabit CC-Link IE TSN to classic CC-Link and standard Ethernet.",
    highlights: [
      "CC-Link IE TSN: gigabit, time-sensitive Ethernet mixing control and IT traffic",
      "CC-Link IE Field / Control for high-speed I/O and controller-to-controller links",
      "CC-Link IE Field Basic over standard Ethernet for small systems",
      "Remote I/O stations (NZ2GN / NZ2GF / AJ65) for distributed wiring",
      "Ethernet, Modbus TCP, PROFINET and other gateway modules",
    ],
    specs: [
      ["Networks", "CC-Link IE TSN, CC-Link IE Field, CC-Link IE Control, CC-Link IE Field Basic, CC-Link, Ethernet"],
      ["Speed", "1 Gbps (CC-Link IE TSN / Field / Control), 10 Mbps (CC-Link)"],
    ],
    models: [
      ["RJ71GN11-T2 / RJ71GN11-SX / RJ71GF11-T2 / RJ71GP21-SX / RJ71EN71 / RJ61BT11", "iQ-R network modules"],
      ["FX5-CCLGN-MS / FX5-CCLIEF / FX5-ENET / FX5-ENET/IP / FX5-CCL-16MR", "iQ-F network modules"],
      ["QJ71GF11-T2 / QJ71GP21-SX / QJ71E71-100 / QJ61BT11N", "Q series network modules"],
      ["NZ2GN2S1-32D / -32T / NZ2GNCE3-32D / NZ2GN2B1-32D …", "CC-Link IE TSN remote I/O stations"],
      ["NZ2GF2B1-16D / -16T / NZ2GFCE3-16D …", "CC-Link IE Field remote I/O stations"],
      ["AJ65SBTB1-16D / -16T / AJ65VBTCU-68 …", "CC-Link remote I/O stations"],
    ],
    applications: ["Plant networks", "Distributed I/O", "Machine-to-machine links", "IT / OT integration"],
  },
  {
    slug: "mitsubishi-melsoft-software",
    image: "/products/mitsubishi/mitsubishi-melsoft-software/mel_fa_gtw3_thumbnail_left_eng.png",
    gallery: [
      { src: "/products/mitsubishi/mitsubishi-melsoft-software/mel_fa_gtw3_thumbnail_left_eng.png", label: "GT Works3" },
      { src: "/products/mitsubishi/mitsubishi-melsoft-software/products_thumbnail_mr2_gl.jpg", label: "MR Configurator2" },
      { src: "/products/mitsubishi/mitsubishi-melsoft-software/products_thumbnail_mt_works2_gl.jpg", label: "MT Works2" },
      { src: "/products/mitsubishi/mitsubishi-melsoft-software/thumbnail-fr-conf2.jpg", label: "FR Configurator2" },
      { src: "/products/mitsubishi/mitsubishi-melsoft-software/thumbnail-gx-works2.jpg", label: "GX Works2" },
      { src: "/products/mitsubishi/mitsubishi-melsoft-software/thumbnail-gx-works3.jpg", label: "GX Works3" },
      { src: "/products/mitsubishi/mitsubishi-melsoft-software/thumbnail-iq-works.jpg", label: "MELSOFT iQ Works" },
    ],
    name: "MELSOFT Engineering Software",
    brand: "mitsubishi-electric",
    category: "scada",
    group: "Controllers",
    series: "GX Works3 · GX Works2 · iQ Works · MT Works2 · FR Configurator2 · MR Configurator2 · GT Works3",
    summary:
      "Genuine licensed Mitsubishi engineering software for programming PLCs, HMIs, motion, inverters and servo — supplied with activation and installation support.",
    highlights: [
      "GX Works3 for MELSEC iQ-R / iQ-F; GX Works2 for Q, L and F series",
      "MELSOFT iQ Works bundle: GX Works3/2, MT Works2, GT Works3 and system configuration",
      "FR Configurator2 (inverters) and MR Configurator2 (servo) set-up and tuning tools",
      "GT Works3 for GOT HMI screen design",
      "Single and multi-user licences; upgrades and additional licences available",
    ],
    specs: [
      ["Controllers", "GX Works3, GX Works2"],
      ["Motion / drives", "MT Works2, FR Configurator2, MR Configurator2"],
      ["HMI", "GT Works3 (GT Designer3)"],
      ["Bundle", "MELSOFT iQ Works"],
    ],
    models: [
      ["SW1DND-GXW3-E", "GX Works3 (English)"],
      ["SW1DND-GXW2-E", "GX Works2 (English)"],
      ["SW2DND-IQWK-E", "MELSOFT iQ Works"],
      ["SW1DND-MTW2-E", "MT Works2"],
      ["SW1DND-FRC2-E", "FR Configurator2"],
      ["SW1DNC-MRC2-E", "MR Configurator2"],
      ["SW1DND-GTWK3-E", "GT Works3"],
    ],
    applications: ["Programming", "Commissioning", "Maintenance departments", "OEM engineering"],
  },

  /* Drives — inverters */
  {
    slug: "mitsubishi-fr-a800",
    image: "/products/mitsubishi/mitsubishi-fr-a800/thumbnail_a800.jpg",
    gallery: [
      { src: "/products/mitsubishi/mitsubishi-fr-a800/thumbnail_a800.jpg", label: "FR-A800" },
    ],
    name: "FREQROL FR-A800 Series",
    brand: "mitsubishi-electric",
    category: "drives",
    group: "Drive Products",
    series: "FR-A820 (200 V) · FR-A840 (400 V) · 0.4 kW – 500 kW",
    summary:
      "High-performance, high-quality inverter of the highest level — real sensorless vector, PM motor drive, built-in PLC function and optional Ethernet for demanding machines.",
    highlights: [
      "Real sensorless vector control with 200 % starting torque at 0.3 Hz",
      "Drives induction and PM (IPM / SPM) motors; closed-loop vector with encoder option",
      "Built-in PLC function, USB, SD card logging and safety STO",
      "FR-A800-E with built-in Ethernet (CC-Link IE Field Basic, Modbus TCP)",
      "Options for CC-Link IE TSN, CC-Link, PROFIBUS, PROFINET, EtherNet/IP, EtherCAT",
    ],
    specs: [
      ["Capacity", "0.4 – 500 kW (400 V class), 0.4 – 90 kW (200 V class)"],
      ["Supply", "3-phase 200 – 240 V / 380 – 500 V"],
      ["Control", "V/f, advanced magnetic flux vector, real sensorless vector, vector (encoder), PM"],
      ["Overload", "150 % 60 s / 200 % 3 s (ND)"],
    ],
    models: [
      ["FR-A840-00023 to FR-A840-12120", "400 V class, 0.4 – 500 kW"],
      ["FR-A820-00046 to FR-A820-04750", "200 V class, 0.4 – 90 kW"],
      ["FR-A840-…-E1 / -E2", "Built-in Ethernet models"],
      ["FR-A8AP / FR-A8APR / FR-A8AL", "Encoder feedback option cards"],
      ["FR-A8NC / FR-A8NP / FR-A8NCE / FR-A8NCG / FR-A8NE", "Network option cards (CC-Link, PROFIBUS, EtherNet/IP, CC-Link IE Field, CC-Link IE TSN)"],
    ],
    applications: ["Cranes & hoists", "Extruders", "Winders", "Machine tools", "Compressors"],
    featured: true,
  },
  {
    slug: "mitsubishi-fr-a800-plus",
    image: "/products/mitsubishi/mitsubishi-fr-a800-plus/thumbnail_a800-plus.jpg",
    gallery: [
      { src: "/products/mitsubishi/mitsubishi-fr-a800-plus/thumbnail_a800-plus.jpg", label: "FR-A800 Plus" },
    ],
    name: "FREQROL FR-A800 Plus Series",
    brand: "mitsubishi-electric",
    category: "drives",
    group: "Drive Products",
    series: "FR-A800-R2R · FR-A800-CRN · FR-A800-LC · FR-A800-E-R2R",
    summary:
      "FR-A800 with application-dedicated functions built in — roll-to-roll tension control, crane and hoist control, and lift / elevator control — for the fields that need them.",
    highlights: [
      "R2R: winding/unwinding tension, dancer and taper control without external controllers",
      "CRN: crane functions such as anti-sway support, brake sequence and load-dependent speed",
      "LC: lift control with smooth start/stop and rescue operation",
      "All the performance and options of the standard FR-A800",
    ],
    specs: [
      ["Capacity", "0.4 – 500 kW (model dependent)"],
      ["Variants", "R2R (roll-to-roll), CRN (crane), LC (lift)"],
      ["Supply", "3-phase 200 V / 400 V"],
    ],
    models: [
      ["FR-A840-…-R2R", "Roll-to-roll specification"],
      ["FR-A840-…-CRN", "Crane specification"],
      ["FR-A840-…-LC", "Lift control specification"],
    ],
    applications: ["Paper & film winders", "Textile winders", "Cranes & hoists", "Lifts"],
  },
  {
    slug: "mitsubishi-fr-f800",
    image: "/products/mitsubishi/mitsubishi-fr-f800/thumbnail_f800.jpg",
    gallery: [
      { src: "/products/mitsubishi/mitsubishi-fr-f800/thumbnail_f800.jpg", label: "FR-F800" },
    ],
    name: "FREQROL FR-F800 Series",
    brand: "mitsubishi-electric",
    category: "drives",
    group: "Drive Products",
    series: "FR-F820 · FR-F840 · 0.75 kW – 560 kW",
    summary:
      "Enhanced next-generation energy-saving inverter equipped with functions ideal for fans, pumps and HVAC — optimum excitation control, multi-pump and BACnet.",
    highlights: [
      "Advanced optimum excitation control for maximum fan / pump energy savings",
      "Multi-pump function, PID, sleep, pre-charge and fire mode",
      "Built-in BACnet MS/TP and Modbus RTU; Ethernet on FR-F800-E",
      "Drives IPM / SPM motors for further savings",
      "Up to 560 kW with 110 % 60 s light-duty rating",
    ],
    specs: [
      ["Capacity", "0.75 – 560 kW (400 V class)"],
      ["Supply", "3-phase 200 V / 400 V"],
      ["Overload", "120 % 60 s (LD), 110 % 60 s (SLD)"],
      ["Communication", "Modbus RTU, BACnet MS/TP, Ethernet (E models), option cards"],
    ],
    models: [
      ["FR-F840-00023 to FR-F840-12120", "400 V class, 0.75 – 560 kW"],
      ["FR-F820-00046 to FR-F820-04750", "200 V class, 0.75 – 110 kW"],
      ["FR-F840-…-E", "Built-in Ethernet models"],
    ],
    applications: ["HVAC AHUs & chillers", "Water & wastewater pumps", "Fans & blowers", "Compressors"],
  },
  {
    slug: "mitsubishi-fr-e800",
    image: "/products/mitsubishi/mitsubishi-fr-e800/thumbnail_e800.jpg",
    gallery: [
      { src: "/products/mitsubishi/mitsubishi-fr-e800/thumbnail_e800.jpg", label: "FR-E800" },
    ],
    name: "FREQROL FR-E800 Series",
    brand: "mitsubishi-electric",
    category: "drives",
    group: "Drive Products",
    series: "FR-E820 · FR-E840 · FR-E860 · 0.1 kW – 22 kW",
    summary:
      "Top-level driving performance in a compact body — dual-port Ethernet with CC-Link IE TSN, PROFINET and EtherNet/IP, functional safety and PM motor control.",
    highlights: [
      "FR-E800-E: dual-port Ethernet with CC-Link IE TSN, CC-Link IE Field Basic, Modbus TCP, EtherNet/IP, PROFINET",
      "FR-E800-SCE: safety functions STO, SS1, SLS, SBC, SSM, SDI (SIL2 / SIL3)",
      "Real sensorless vector, PM motor drive, 200 % starting torque",
      "Compact design with side-by-side mounting; FR-E860 575 V class",
      "FR-E700 spares and replacements available",
    ],
    specs: [
      ["Capacity", "0.1 – 22 kW"],
      ["Supply", "1-phase 200 V / 3-phase 200 V / 3-phase 400 V / 3-phase 575 V"],
      ["Communication", "RS485 (Modbus RTU) standard; Ethernet variants; option cards"],
      ["Safety", "STO standard; SCE models up to SIL3 / PLe"],
    ],
    models: [
      ["FR-E840-0016 to FR-E840-0440", "400 V class, 0.4 – 22 kW"],
      ["FR-E820-0008 to FR-E820-0900", "3-phase 200 V class, 0.1 – 22 kW"],
      ["FR-E820S-0008 to FR-E820S-0110", "1-phase 200 V class, 0.1 – 2.2 kW"],
      ["FR-E8…-E", "Dual-port Ethernet models"],
      ["FR-E8…-SCE", "Ethernet + functional safety models"],
    ],
    applications: ["Conveyors", "Packaging", "Fans & pumps", "Machine tools", "Textile"],
    featured: true,
  },
  {
    slug: "mitsubishi-fr-d800",
    image: "/products/mitsubishi/mitsubishi-fr-d800/thumbnail_d800.jpg",
    gallery: [
      { src: "/products/mitsubishi/mitsubishi-fr-d800/thumbnail_d800.jpg", label: "FR-D800" },
    ],
    name: "FREQROL FR-D800 Series",
    brand: "mitsubishi-electric",
    category: "drives",
    group: "Drive Products",
    series: "FR-D800 (new) · FR-D700 successor",
    summary:
      "Next-generation compact inverter designed to help create sustainable futures — simple set-up, improved energy efficiency and the successor to the best-selling FR-D700.",
    highlights: [
      "Compact general-purpose inverter for simple speed control",
      "Easy set-up with built-in dial and parameter copy",
      "Improved efficiency and environmental performance over FR-D700",
      "FR-D700 (0.1 – 15 kW) spares and replacements available",
    ],
    specs: [
      ["Class", "Compact general-purpose"],
      ["Supply", "1-phase 200 V / 3-phase 200 V / 3-phase 400 V"],
      ["Predecessor", "FR-D700 series"],
    ],
    models: [
      ["FR-D800 series", "New compact inverters — contact us for the current capacity line-up"],
      ["FR-D740-012 to FR-D740-160", "FR-D700 400 V class, 0.4 – 7.5 kW (replacement supply)"],
      ["FR-D720S-008 to FR-D720S-100", "FR-D700 1-phase 200 V, 0.1 – 2.2 kW (replacement supply)"],
    ],
    applications: ["Conveyors", "Small fans & pumps", "Simple machines"],
  },
  {
    slug: "mitsubishi-fr-cs80",
    image: "/products/mitsubishi/mitsubishi-fr-cs80/thumbnail_cs80.jpg",
    gallery: [
      { src: "/products/mitsubishi/mitsubishi-fr-cs80/thumbnail_cs80.jpg", label: "FR-CS80" },
    ],
    name: "FREQROL FR-CS80 Series",
    brand: "mitsubishi-electric",
    category: "drives",
    group: "Drive Products",
    series: "FR-CS84 · FR-CS82S · 0.4 kW – 15 kW",
    summary: "Compact and smart inverter with various functions in a small body — an economical choice for general-purpose speed control.",
    highlights: [
      "Compact size with simple operation panel",
      "Modbus RTU communication built in",
      "Optimum excitation control for energy saving",
      "Built-in brake transistor on selected capacities",
    ],
    specs: [
      ["Capacity", "0.4 – 15 kW (400 V class), 0.4 – 2.2 kW (1-phase 200 V)"],
      ["Supply", "1-phase 200 V / 3-phase 400 V"],
      ["Communication", "RS485 Modbus RTU"],
    ],
    models: [
      ["FR-CS84-012 to FR-CS84-295", "400 V class, 0.4 – 15 kW"],
      ["FR-CS82S-025 to FR-CS82S-100", "1-phase 200 V class, 0.4 – 2.2 kW"],
    ],
    applications: ["Conveyors", "Fans & pumps", "Woodworking", "Small machines"],
  },
  {
    slug: "mitsubishi-fr-xc-converter",
    image: "/products/mitsubishi/mitsubishi-fr-xc-converter/thumbnail_xc.jpg",
    gallery: [
      { src: "/products/mitsubishi/mitsubishi-fr-xc-converter/thumbnail_xc.jpg", label: "FR-XC converter" },
    ],
    name: "FR-XC Multifunction Regeneration Converter",
    brand: "mitsubishi-electric",
    category: "drives",
    group: "Drive Products",
    series: "FR-XC · Power regeneration & harmonic suppression",
    summary:
      "Versatile converter that returns braking energy to the supply and suppresses harmonics — one unit feeding several FR-A800 / F800 inverters on a common DC bus.",
    highlights: [
      "Power regeneration instead of braking resistors — saves energy and heat",
      "Harmonic suppression mode for grid-friendly installations",
      "Common DC bus for multiple inverters (cranes, winders, test benches)",
      "Compatible with FR-A800 / FR-F800 / FR-E800 families",
    ],
    specs: [
      ["Modes", "Power regeneration, harmonic suppression, common bus regeneration"],
      ["Supply", "3-phase 200 V / 400 V"],
    ],
    models: [["FR-XC series", "Multifunction regeneration converters — capacity on request"]],
    applications: ["Cranes & hoists", "Winders", "Centrifuges", "Test benches"],
  },

  /* Drives — servo */
  {
    slug: "mitsubishi-melservo-j5",
    image: "/products/mitsubishi/mitsubishi-melservo-j5/products_thumbnail_mr_j5.jpg",
    gallery: [
      { src: "/products/mitsubishi/mitsubishi-melservo-j5/products_thumbnail_mr_j5.jpg", label: "MELSERVO-J5" },
    ],
    name: "MELSERVO-J5 Series",
    brand: "mitsubishi-electric",
    category: "servo",
    group: "Drive Products",
    series: "MR-J5-G / -A / -B · HK-KT / HK-ST motors · 0.05 kW – 22 kW",
    summary:
      "Driving a wider range of motors with more flexible options — 3.5 kHz speed frequency response, 26-bit encoders, CC-Link IE TSN and quick tuning for the best-in-class servo.",
    highlights: [
      "3.5 kHz speed frequency response; 26-bit (67 M pulses/rev) batteryless absolute encoder",
      "MR-J5-G with CC-Link IE TSN (1 Gbps), MR-J5-B SSCNET III/H, MR-J5-A pulse/analog",
      "Quick tuning, vibration suppression and machine diagnosis for predictive maintenance",
      "Multi-axis MR-J5W2 / MR-J5W3 amplifiers; functional safety up to SIL3",
      "HK-KT low-inertia and HK-ST medium-inertia motors; linear and direct-drive options",
    ],
    specs: [
      ["Capacity", "0.05 – 22 kW"],
      ["Supply", "1-phase / 3-phase 200 V, 3-phase 400 V"],
      ["Interfaces", "CC-Link IE TSN (G), SSCNET III/H (B), pulse / analog (A), EtherCAT (G-N1)"],
      ["Encoder", "26-bit absolute, batteryless"],
    ],
    models: [
      ["MR-J5-10G to MR-J5-22KG", "CC-Link IE TSN servo amplifiers, 0.1 – 22 kW"],
      ["MR-J5-10B to MR-J5-22KB", "SSCNET III/H servo amplifiers"],
      ["MR-J5-10A to MR-J5-22KA", "General-purpose (pulse / analog) servo amplifiers"],
      ["MR-J5W2-22G / -44G / -77G / -1010G · MR-J5W3-22G / -44G", "2-axis and 3-axis amplifiers"],
      ["HK-KT053W to HK-KT7M3W · HK-ST52W to HK-ST7M2W", "Rotary servo motors with 26-bit encoder"],
    ],
    applications: ["Packaging", "Electronics assembly", "Printing", "Machine tools", "Robots"],
    featured: true,
  },
  {
    slug: "mitsubishi-melservo-jet",
    image: "/products/mitsubishi/mitsubishi-melservo-jet/products_thumbnail_mr_jet.jpg",
    gallery: [
      { src: "/products/mitsubishi/mitsubishi-melservo-jet/products_thumbnail_mr_jet.jpg", label: "MELSERVO-JET" },
    ],
    name: "MELSERVO-JET Series",
    brand: "mitsubishi-electric",
    category: "servo",
    group: "Drive Products",
    series: "MR-JET-G · HK-KT / HK-ST motors · 0.1 kW – 3 kW",
    summary:
      "All-in-one world-class servo — CC-Link IE TSN connectivity, positioning built into the amplifier and quick tuning, at a price for general-purpose machines.",
    highlights: [
      "CC-Link IE TSN and Ethernet-based control in one amplifier",
      "Built-in positioning (point table) — no motion module needed for simple axes",
      "Quick tuning and vibration suppression inherited from MR-J5",
      "Shares HK-KT / HK-ST motors with MELSERVO-J5",
    ],
    specs: [
      ["Capacity", "0.1 – 3 kW"],
      ["Supply", "1-phase / 3-phase 200 V"],
      ["Interfaces", "CC-Link IE TSN, CC-Link IE Field Basic"],
      ["Encoder", "26-bit absolute, batteryless"],
    ],
    models: [["MR-JET-10G to MR-JET-300G", "Servo amplifiers 0.1 – 3 kW"], ["HK-KT / HK-ST motors", "Matching rotary servo motors"]],
    applications: ["Feeders", "Labelling", "Indexing", "Pick-and-place"],
  },
  {
    slug: "mitsubishi-melservo-j4",
    image: "/products/mitsubishi/mitsubishi-melservo-j4/products_thumbnail_mr_j4.jpg",
    gallery: [
      { src: "/products/mitsubishi/mitsubishi-melservo-j4/products_thumbnail_mr_j4.jpg", label: "MELSERVO-J4" },
    ],
    name: "MELSERVO-J4 Series",
    brand: "mitsubishi-electric",
    category: "servo",
    group: "Drive Products",
    series: "MR-J4-GF / -B / -A · HG-KR / HG-SR / HG-JR motors · 0.1 kW – 55 kW",
    summary:
      "Man, machine and environment in perfect harmony — the proven 2.5 kHz servo with one-touch tuning, 22-bit encoders and the widest motor range, still widely specified.",
    highlights: [
      "2.5 kHz speed frequency response, 22-bit (4 M pulses/rev) absolute encoder",
      "MR-J4-B (SSCNET III/H), MR-J4-GF (CC-Link IE Field), MR-J4-A (pulse / analog)",
      "One-touch tuning, advanced vibration suppression II, machine diagnosis",
      "Multi-axis MR-J4W2 / W3 amplifiers; 400 V class up to 55 kW",
      "HG-KR low-inertia, HG-SR medium-inertia, HG-JR high-power motors",
    ],
    specs: [
      ["Capacity", "0.1 – 55 kW"],
      ["Supply", "1-phase / 3-phase 200 V, 3-phase 400 V"],
      ["Interfaces", "SSCNET III/H (B), CC-Link IE Field (GF), pulse / analog (A), EtherCAT (TM)"],
      ["Encoder", "22-bit absolute"],
    ],
    models: [
      ["MR-J4-10B to MR-J4-22KB (and -B4 400 V)", "SSCNET III/H servo amplifiers"],
      ["MR-J4-10A to MR-J4-22KA (and -A4 400 V)", "General-purpose servo amplifiers"],
      ["MR-J4-10GF to MR-J4-22KGF", "CC-Link IE Field servo amplifiers"],
      ["MR-J4W2-22B / -44B / -77B / -1010B · MR-J4W3-222B / -444B", "Multi-axis amplifiers"],
      ["HG-KR053 to HG-KR73 · HG-SR52 to HG-SR702 · HG-JR53 to HG-JR55K", "Rotary servo motors"],
    ],
    applications: ["Packaging", "Textile", "Machine tools", "Material handling"],
  },
  {
    slug: "mitsubishi-melservo-je",
    image: "/products/mitsubishi/mitsubishi-melservo-je/products_thumbnail_mr_je.jpg",
    gallery: [
      { src: "/products/mitsubishi/mitsubishi-melservo-je/products_thumbnail_mr_je.jpg", label: "MELSERVO-JE" },
    ],
    name: "MELSERVO-JE Series",
    brand: "mitsubishi-electric",
    category: "servo",
    group: "Drive Products",
    series: "MR-JE-A / -B / -C · HG-KN / HG-SN motors · 0.1 kW – 3 kW",
    summary:
      "Fast, accurate and easy to use — the economical MELSERVO for general-purpose positioning with pulse, SSCNET III/H or Ethernet / CC-Link IE Field Basic control.",
    highlights: [
      "MR-JE-A pulse / analog, MR-JE-B SSCNET III/H, MR-JE-C Ethernet with built-in positioning",
      "One-touch tuning and vibration suppression",
      "17-bit encoder (HG-KN / HG-SN motors)",
      "Compact amplifiers up to 3 kW, 200 V class",
    ],
    specs: [
      ["Capacity", "0.1 – 3 kW"],
      ["Supply", "1-phase / 3-phase 200 V"],
      ["Interfaces", "Pulse / analog (A), SSCNET III/H (B), Ethernet / CC-Link IE Field Basic / Modbus TCP (C)"],
      ["Encoder", "17-bit absolute / incremental"],
    ],
    models: [
      ["MR-JE-10A to MR-JE-300A", "General-purpose amplifiers"],
      ["MR-JE-10B to MR-JE-300B", "SSCNET III/H amplifiers"],
      ["MR-JE-10C to MR-JE-300C", "Ethernet amplifiers with positioning"],
      ["HG-KN13 to HG-KN73 · HG-SN52 to HG-SN302", "Rotary servo motors"],
    ],
    applications: ["Feeders & cutters", "Labelling", "Indexing tables", "Small machines"],
  },
  {
    slug: "mitsubishi-geared-motors",
    image: "/products/mitsubishi/mitsubishi-geared-motors/thumbnail-gm-parallel.jpg",
    gallery: [
      { src: "/products/mitsubishi/mitsubishi-geared-motors/thumbnail-gm-parallel.jpg", label: "Geared motor, parallel shaft" },
      { src: "/products/mitsubishi/mitsubishi-geared-motors/thumbnail-gm-right-angle.jpg", label: "Geared motor, right-angle" },
      { src: "/products/mitsubishi/mitsubishi-geared-motors/thumbnail-spm-parallel.jpg", label: "S-PM geared motor, parallel shaft" },
      { src: "/products/mitsubishi/mitsubishi-geared-motors/thumbnail-spm-right-angle.jpg", label: "S-PM geared motor, right-angle" },
    ],
    name: "Geared Motors (GM & S-PM Series)",
    brand: "mitsubishi-electric",
    category: "motion",
    group: "Drive Products",
    series: "GM-S / GM-D / GM-SSY parallel shaft · GM-SHY / GM-DH right angle · S-PM",
    summary:
      "Mitsubishi geared motors in parallel-shaft and right-angle types, including S-PM permanent-magnet geared motors for high-efficiency conveyor and machine drives.",
    highlights: [
      "Parallel shaft (GM-S, GM-D, GM-SSY) and right-angle (GM-SHY, GM-DH) types",
      "S-PM series: IPM motor geared units for top efficiency with inverters",
      "Wide ratio range with foot, flange and hollow-shaft mounting",
      "Matched with FREQROL inverters for variable-speed drives",
    ],
    specs: [
      ["Types", "Parallel shaft, right-angle shaft, S-PM parallel and right-angle"],
      ["Power range", "0.1 – 7.5 kW (typical geared motor range)"],
    ],
    models: [
      ["GM-S / GM-SSY / GM-D", "Parallel shaft geared motors"],
      ["GM-SHY / GM-DH", "Right-angle shaft geared motors"],
      ["GM-S-PM / GM-SHY-PM", "S-PM (IPM) geared motors, parallel and right-angle"],
    ],
    applications: ["Conveyors", "Food machinery", "Material handling", "Packaging"],
  },

  /* HMI */
  {
    slug: "mitsubishi-got3000",
    image: "/products/mitsubishi/mitsubishi-got3000/products_thumbnail_got_got3000.jpg",
    gallery: [
      { src: "/products/mitsubishi/mitsubishi-got3000/products_thumbnail_got_got3000.jpg", label: "GOT3000" },
    ],
    name: "GOT3000 Series HMI",
    brand: "mitsubishi-electric",
    category: "hmi",
    group: "HMI",
    series: "GT35 · GT37 (new generation)",
    summary:
      "The new-generation GOT — refined technology and continuous evolution connecting people, systems and IT even more strongly, with faster processing and richer visualisation.",
    highlights: [
      "Next-generation processor and high-resolution multi-touch displays",
      "Enhanced connectivity to MELSEC iQ-R / iQ-F and third-party controllers",
      "Advanced functions inherited from GOT2000 with new IT integration",
      "GT SoftGOT3000 for PC-based visualisation",
      "Designed with GT Works3",
    ],
    specs: [
      ["Series", "GOT3000 (GT35 / GT37)"],
      ["Software", "GT Works3 (GT Designer3)"],
    ],
    models: [["GOT3000 GT35 / GT37 models", "New-generation GOT — contact us for the current size line-up"]],
    applications: ["New machine designs", "Digitalised production lines"],
  },
  {
    slug: "mitsubishi-got2000",
    image: "/products/mitsubishi/mitsubishi-got2000/products_thumbnail_got_got2000.jpg",
    gallery: [
      { src: "/products/mitsubishi/mitsubishi-got2000/products_thumbnail_got_got2000.jpg", label: "GOT2000" },
    ],
    name: "GOT2000 Series HMI",
    brand: "mitsubishi-electric",
    category: "hmi",
    group: "HMI",
    series: "GT27 · GT25 · GT23 · GT21 · 4.3\" – 15\"",
    summary:
      "The GOT2000 inherits all the features of GOT1000 and introduces a more refined, advanced function set — fast response, multi-touch, VNC server and multi-vendor drivers.",
    highlights: [
      "GT27: 8.4\" – 15\" multi-touch high-end models with VNC / remote access",
      "GT25: 5.7\" – 12.1\" standard models with Ethernet, RS232/422/485",
      "GT23 and GT21 for cost-sensitive machines (3.8\" – 10.4\")",
      "Direct connection to MELSEC, FREQROL, MELSERVO and major third-party PLCs",
      "Designed with GT Works3; GOT Mobile and SoftGOT options",
    ],
    specs: [
      ["Sizes", "3.8\", 4.3\", 5.7\", 7\", 8.4\", 10.4\", 12.1\", 15\""],
      ["Interfaces", "Ethernet, RS232, RS422/485, USB, SD card"],
      ["Protection", "IP67 front (most models)"],
      ["Software", "GT Works3"],
    ],
    models: [
      ["GT2715-XTBA / GT2712-STBA / GT2710-STBA / GT2708-STBA", "GT27 high-end 15\" / 12.1\" / 10.4\" / 8.4\""],
      ["GT2512-STBA / GT2510-VTBA / GT2508-VTBA / GT2507-WTBD / GT2505-VTBD", "GT25 standard 12.1\" – 5.7\""],
      ["GT2310-VTBA / GT2308-VTBA", "GT23 10.4\" / 8.4\""],
      ["GT2107-WTBD / GT2104-RTBD / GT2103-PMBD", "GT21 7\" / 4.3\" / 3.8\""],
    ],
    applications: ["Machine HMI", "Process visualisation", "Line monitoring"],
    featured: true,
  },
  {
    slug: "mitsubishi-got-simple",
    image: "/products/mitsubishi/mitsubishi-got-simple/products_thumbnail_got_gotsimple.jpg",
    gallery: [
      { src: "/products/mitsubishi/mitsubishi-got-simple/products_thumbnail_got_gotsimple.jpg", label: "GOT SIMPLE" },
    ],
    name: "GOT SIMPLE Series HMI",
    brand: "mitsubishi-electric",
    category: "hmi",
    group: "HMI",
    series: "GS25 · GS21 · 7\" and 10\"",
    summary: "Simple but powerful models with high reliability for easy operation — the budget GOT with Ethernet and serial connectivity for OEM machines.",
    highlights: [
      "GS21: 7\" and 10\" widescreen with Ethernet and serial",
      "GS25: higher performance with VNC server and multimedia",
      "Same GT Works3 design environment as GOT2000",
      "Connects to MELSEC, FREQROL, MELSERVO and third-party PLCs",
    ],
    specs: [
      ["Sizes", "7\" (800 × 480), 10\" (800 × 600)"],
      ["Interfaces", "Ethernet, RS232, RS422/485, USB"],
      ["Software", "GT Works3"],
    ],
    models: [
      ["GS2107-WTBD-N / GS2110-WTBD-N", "GS21 7\" / 10\""],
      ["GS2507-WTBD / GS2512-WXTBD", "GS25 7\" / 12.1\""],
    ],
    applications: ["OEM machines", "Packaging", "Textile", "Small lines"],
  },
  {
    slug: "mitsubishi-gt-softgot",
    image: "/products/mitsubishi/mitsubishi-gt-softgot/products_thumbnail_got_softgot.jpg",
    gallery: [
      { src: "/products/mitsubishi/mitsubishi-gt-softgot/products_thumbnail_got_softgot.jpg", label: "GT SoftGOT" },
    ],
    name: "GT SoftGOT (PC-based HMI)",
    brand: "mitsubishi-electric",
    category: "hmi",
    group: "HMI",
    series: "GT SoftGOT2000 · GT SoftGOT3000",
    summary:
      "HMI software that runs GOT functions on a personal computer or panel computer — reuse GOT2000 / GOT3000 projects for large-screen and supervisory stations.",
    highlights: [
      "Runs GT Designer3 projects on Windows PCs and panel PCs",
      "Large-screen monitoring and operation stations",
      "Same drivers and functions as the GOT hardware",
      "Licence keys for single or multiple installations",
    ],
    specs: [
      ["Platform", "Windows PC / panel PC"],
      ["Versions", "GT SoftGOT2000, GT SoftGOT3000"],
      ["Software", "GT Works3"],
    ],
    models: [["GT SoftGOT2000 / GT SoftGOT3000 licence", "PC-based GOT software with licence key"]],
    applications: ["Supervisory stations", "Large-screen monitoring", "Control rooms"],
  },

];

export const productMap = Object.fromEntries(products.map((p) => [p.slug, p])) as Record<string, Product>;

export function productsByBrand(brand: BrandSlug) {
  return products.filter((p) => p.brand === brand);
}

export function productsByCategory(category: CategorySlug) {
  return products.filter((p) => p.category === category);
}

export function relatedProducts(product: Product, limit = 4) {
  const sameCategory = products.filter((p) => p.category === product.category && p.slug !== product.slug);
  const sameBrandFirst = [
    ...sameCategory.filter((p) => p.brand === product.brand),
    ...sameCategory.filter((p) => p.brand !== product.brand),
  ];
  return sameBrandFirst.slice(0, limit);
}
