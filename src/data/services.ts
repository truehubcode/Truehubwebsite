export interface Service {
  slug: string;
  icon: string;
  name: string;
  short: string;
  description: string;
  bullets: string[];
}

export const services: Service[] = [
  {
    slug: "control-panels",
    icon: "panel",
    name: "Control Panel Design & Manufacturing",
    short: "PLC, VFD, MCC and PCC panels built to your specification.",
    description:
      "From single-machine PLC panels to multi-drive MCCs, we design, build, wire and test control panels using genuine components — with drawings, BOM and FAT documentation.",
    bullets: [
      "PLC / HMI, VFD and servo panels",
      "MCC, PCC and APFC panels",
      "AutoCAD Electrical / EPLAN drawings",
      "IP-rated enclosures and cooling design",
      "Factory acceptance testing (FAT)",
    ],
  },
  {
    slug: "plc-hmi-scada-programming",
    icon: "code",
    name: "PLC, HMI & SCADA Programming",
    short: "Application development across all major platforms.",
    description:
      "Our engineers program and document control logic, HMI screens and SCADA systems on HUCEEN, Siemens, Delta and Mitsubishi Electric platforms.",
    bullets: [
      "TIA Portal, STEP 7-Micro/WIN SMART, WinCC",
      "GX Works2 / GX Works3, GT Designer3",
      "ISPSoft, DIAStudio, DOPSoft",
      "Recipe, batch and reporting systems",
      "Structured, documented code hand-over",
    ],
  },
  {
    slug: "drive-servo-commissioning",
    icon: "gauge",
    name: "VFD & Servo Commissioning",
    short: "Sizing, parameterisation, tuning and start-up.",
    description:
      "Correct drive selection and tuning is the difference between a machine that runs and one that runs well. We size, install, parameterise and tune AC drives and servo systems on site.",
    bullets: [
      "Motor and load sizing",
      "Vector / servo tuning and auto-tune",
      "Fieldbus set-up: PROFINET, EtherCAT, Modbus",
      "Multi-axis synchronisation",
      "Energy-saving parameter optimisation",
    ],
  },
  {
    slug: "retrofit-migration",
    icon: "refresh",
    name: "Retrofit & Obsolescence Migration",
    short: "Upgrade legacy controls without rebuilding the machine.",
    description:
      "Migrate obsolete PLCs, drives and HMIs — S7-300 to S7-1500, MicroMaster to SINAMICS, legacy panels to modern touch HMIs — with minimum downtime.",
    bullets: [
      "Obsolete part cross-referencing",
      "Logic conversion and re-validation",
      "Drop-in drive replacements",
      "Planned shutdown execution",
      "Spare-part stock planning",
    ],
  },
  {
    slug: "repair-refurbishment",
    icon: "wrench",
    name: "Repair & Refurbishment",
    short: "Component-level repair of drives, PLCs, HMIs and servo.",
    description:
      "Save cost and lead time on damaged automation hardware. We diagnose, repair and load-test AC drives, servo drives, PLC CPUs and I/O, HMIs and power supplies.",
    bullets: [
      "AC & DC drives up to 250 kW",
      "Servo drives and motors",
      "PLC CPUs, I/O and comms modules",
      "HMI touchscreens and backlights",
      "Load-tested with report and warranty",
    ],
  },
  {
    slug: "amc-support",
    icon: "lifebuoy",
    name: "AMC & Breakdown Support",
    short: "Preventive maintenance and rapid breakdown response.",
    description:
      "Annual maintenance contracts covering preventive checks, spares management and priority breakdown response — on site or remote, across India.",
    bullets: [
      "Scheduled preventive maintenance",
      "Priority breakdown call-out",
      "Remote diagnostics and support",
      "Consignment / critical spares stocking",
      "Maintenance reports and health audits",
    ],
  },
  {
    slug: "networking-iiot",
    icon: "network",
    name: "Industrial Networking & IIoT",
    short: "Connect machines, collect data, monitor remotely.",
    description:
      "Design and commission industrial networks and IIoT layers — from PROFINET and Modbus TCP to OPC UA, MQTT and cloud dashboards for OEE and remote monitoring.",
    bullets: [
      "PROFINET / PROFIBUS / Ethernet/IP",
      "Managed switch configuration",
      "Protocol gateways and edge devices",
      "OPC UA, MQTT and cloud dashboards",
      "Secure remote access (VPN)",
    ],
  },
  {
    slug: "energy-optimisation",
    icon: "leaf",
    name: "Energy Audits & Optimisation",
    short: "Cut motor energy bills with VFDs and smart control.",
    description:
      "Pumps, fans, compressors and conveyors often run at fixed speed. We measure, model and implement VFD-based control with a clear payback calculation.",
    bullets: [
      "Motor load and power measurement",
      "VFD retrofit ROI calculations",
      "Pump / fan affinity-law savings",
      "Power-factor and harmonic mitigation",
      "Post-installation verification",
    ],
  },
  {
    slug: "training",
    icon: "graduation",
    name: "Training & Skill Development",
    short: "Hands-on PLC, HMI and drive training for your team.",
    description:
      "Practical, product-focused training for operators and maintenance staff so your team can troubleshoot, modify and maintain systems confidently.",
    bullets: [
      "Siemens TIA Portal fundamentals",
      "Drive parameterisation workshops",
      "HMI / SCADA operations",
      "Troubleshooting and diagnostics",
      "On-site or at our facility",
    ],
  },
];
