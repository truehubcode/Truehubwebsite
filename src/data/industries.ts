export interface Industry {
  slug: string;
  icon: string;
  name: string;
  description: string;
  applications: string[];
}

export const industries: Industry[] = [
  {
    slug: "textile",
    icon: "shirt",
    name: "Textile",
    description: "Drives, servo and PLC systems for spinning, weaving, knitting, dyeing and finishing lines.",
    applications: ["Ring frame & carding drives", "Stenter & dyeing control", "Warping servo systems", "Energy-efficient VFD retrofits"],
  },
  {
    slug: "packaging",
    icon: "package",
    name: "Packaging",
    description: "High-speed motion control for form-fill-seal, labelling, cartoning and palletising machines.",
    applications: ["Multi-axis servo synchronisation", "Registration control", "Compact PLC + HMI panels", "Safety integration"],
  },
  {
    slug: "pharma",
    icon: "pill",
    name: "Pharmaceutical",
    description: "Reliable, documented control systems for granulation, compression, coating and clean utilities.",
    applications: ["21 CFR Part 11 ready HMI/SCADA", "Batch and recipe management", "Clean-room sensors", "AHU and chiller drives"],
  },
  {
    slug: "food-beverage",
    icon: "utensils",
    name: "Food & Beverage",
    description: "Hygienic sensors, wash-down drives and controllers for processing, filling and bottling lines.",
    applications: ["Conveyor & filler drives", "Temperature and level control", "IP69K sensors", "CIP automation"],
  },
  {
    slug: "water-wastewater",
    icon: "droplets",
    name: "Water & Wastewater",
    description: "Pump drives, soft starters and remote monitoring for water supply, STP and ETP plants.",
    applications: ["Pump VFDs and soft starters", "Level and flow instrumentation", "SCADA and telemetry", "Solar pumping inverters"],
  },
  {
    slug: "plastics-paper",
    icon: "layers",
    name: "Plastics & Paper",
    description: "Precision control for extrusion, injection moulding, thermoforming and paper converting.",
    applications: ["Extruder drives", "Melt temperature control", "Linear transducers", "Winder tension control"],
  },
  {
    slug: "automotive",
    icon: "car",
    name: "Automotive & Auto Components",
    description: "Robust automation for machining, assembly, testing and paint-shop lines.",
    applications: ["Assembly line PLCs", "Servo press and indexing", "Poka-yoke sensors", "Andon and OEE dashboards"],
  },
  {
    slug: "steel-metals",
    icon: "factory",
    name: "Steel & Metals",
    description: "Heavy-duty drives and controllers for rolling mills, furnaces, cranes and material handling.",
    applications: ["Crane and hoist drives", "Furnace temperature control", "DC drive replacements", "Harsh-environment sensors"],
  },
  {
    slug: "cement-mining",
    icon: "mountain",
    name: "Cement & Mining",
    description: "Reliable motor control and monitoring for crushers, kilns, conveyors and dust-control systems.",
    applications: ["MV/LV drive systems", "Conveyor soft starters", "Remote I/O in dusty zones", "Weigh feeder control"],
  },
  {
    slug: "machine-builders",
    icon: "cog",
    name: "Machine & Plant Engineering (OEM)",
    description: "Complete control packages and competitive pricing for machine builders and system integrators.",
    applications: ["Standardised PLC/HMI/drive kits", "Panel design and build", "Programming support", "Export-ready documentation"],
  },
  {
    slug: "hvac-building",
    icon: "fan",
    name: "HVAC & Building",
    description: "Energy-saving drives and controls for AHUs, chillers, pumps and building automation.",
    applications: ["Fan and pump VFDs", "BMS integration (BACnet/Modbus)", "Temperature and humidity control", "Energy monitoring"],
  },
  {
    slug: "solar-renewables",
    icon: "sun",
    name: "Solar & Renewables",
    description: "Solar pump inverters, monitoring gateways and switchgear for renewable installations.",
    applications: ["Solar pump drives", "String monitoring", "Remote telemetry", "Protection and switching"],
  },
];
