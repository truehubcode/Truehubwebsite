import type { CategorySlug } from "@/data/categories";

const NAVY = "#14305a";
const NAVY_D = "#0e2244";
const NAVY_L = "#1b3f73";
const GOLD = "#c9962b";
const STEEL = "#7a7d82";
const STEEL_L = "#c4c7cc";
const LIGHT = "#e3eaf5";
const GREEN = "#22c55e";

/**
 * Clean vector illustrations per product category. Used when a product has no photo.
 * Replace with real photos by setting `image` on the product.
 */
export default function ProductVisual({ category, className }: { category: CategorySlug; className?: string }) {
  return (
    <svg viewBox="0 0 200 150" className={className} role="img" aria-label={`${category} illustration`}>
      {art[category]}
    </svg>
  );
}

const art: Record<CategorySlug, React.ReactNode> = {
  plc: (
    <g>
      <rect x="20" y="40" width="160" height="72" rx="5" fill={LIGHT} stroke={NAVY} strokeWidth="2" />
      <rect x="20" y="40" width="160" height="10" rx="5" fill={NAVY} />
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i} transform={`translate(${28 + i * 30} 56)`}>
          <rect width="24" height="48" rx="2" fill="#fff" stroke={STEEL_L} />
          <circle cx="6" cy="7" r="2.3" fill={i === 0 ? GREEN : GOLD} />
          <circle cx="12" cy="7" r="2.3" fill={GREEN} />
          <rect x="4" y="14" width="16" height="28" fill={i === 0 ? NAVY_L : "#eef0f3"} stroke={STEEL_L} />
          {i === 0 && <rect x="7" y="18" width="10" height="7" fill={GOLD} />}
          {[0, 1, 2, 3].map((k) => (
            <rect key={k} x={4 + k * 4.5} y="44" width="2.5" height="3" fill={STEEL} />
          ))}
        </g>
      ))}
      <rect x="14" y="112" width="172" height="7" rx="1" fill={STEEL} />
    </g>
  ),
  hmi: (
    <g>
      <rect x="18" y="22" width="164" height="106" rx="8" fill={NAVY} />
      <rect x="28" y="32" width="144" height="86" rx="3" fill={NAVY_D} />
      <rect x="28" y="32" width="144" height="12" rx="3" fill={NAVY_L} />
      <circle cx="36" cy="38" r="2.5" fill={GOLD} />
      <rect x="44" y="36" width="40" height="4" rx="2" fill={LIGHT} opacity="0.6" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x={38 + i * 20} y={100 - [36, 52, 44, 60, 30, 48][i]} width="12" height={[36, 52, 44, 60, 30, 48][i]} rx="1.5" fill={i % 2 ? GOLD : "#3b6fc4"} opacity="0.9" />
      ))}
      <polyline points="36,72 60,64 84,68 108,52 132,58 156,46 166,50" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="28" y="106" width="144" height="12" fill={NAVY_L} opacity="0.8" />
      <circle cx="100" cy="123" r="2" fill={GREEN} />
    </g>
  ),
  drives: (
    <g>
      <rect x="62" y="12" width="76" height="126" rx="6" fill={LIGHT} stroke={NAVY} strokeWidth="2" />
      <rect x="62" y="12" width="76" height="40" rx="6" fill={NAVY} />
      <rect x="62" y="40" width="76" height="12" fill={NAVY} />
      <rect x="72" y="20" width="38" height="18" rx="2" fill={NAVY_D} />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={76 + i * 8.5} y="25" width="5" height="8" rx="1" fill={GOLD} />
      ))}
      <circle cx="122" cy="29" r="6" fill={GOLD} />
      <circle cx="122" cy="29" r="2" fill={NAVY} />
      {[0, 1, 2].map((i) => (
        <circle key={i} cx={78 + i * 10} cy="45" r="2" fill={i === 0 ? GREEN : STEEL_L} />
      ))}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <line key={i} x1={68 + i * 9} y1="96" x2={68 + i * 9} y2="128" stroke={STEEL} strokeWidth="3" />
      ))}
      <rect x="70" y="62" width="60" height="26" rx="2" fill="#fff" stroke={STEEL_L} />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={74 + i * 11} y="66" width="7" height="18" fill={LIGHT} stroke={STEEL_L} />
      ))}
      <rect x="66" y="130" width="68" height="4" fill={STEEL} />
    </g>
  ),
  servo: (
    <g>
      <rect x="36" y="70" width="20" height="10" rx="2" fill={STEEL_L} />
      <rect x="54" y="46" width="16" height="58" rx="3" fill={STEEL} />
      <rect x="68" y="52" width="92" height="46" rx="8" fill={NAVY} />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <line key={i} x1={78 + i * 10} y1="58" x2={78 + i * 10} y2="92" stroke={NAVY_L} strokeWidth="3" />
      ))}
      <rect x="158" y="60" width="16" height="30" rx="3" fill={NAVY_L} />
      <path d="M174 68c14 0 12 20 24 20" fill="none" stroke={GOLD} strokeWidth="4" strokeLinecap="round" />
      <path d="M174 82c10 0 10 24 22 24" fill="none" stroke={NAVY} strokeWidth="4" strokeLinecap="round" />
      <circle cx="62" cy="52" r="2" fill={LIGHT} />
      <circle cx="62" cy="98" r="2" fill={LIGHT} />
      <rect x="96" y="104" width="44" height="6" rx="2" fill={GOLD} />
    </g>
  ),
  scada: (
    <g>
      <rect x="28" y="22" width="144" height="92" rx="6" fill={NAVY} />
      <rect x="34" y="28" width="132" height="76" rx="2" fill={NAVY_D} />
      <rect x="40" y="34" width="52" height="30" rx="2" fill={NAVY_L} />
      <rect x="98" y="34" width="62" height="30" rx="2" fill={NAVY_L} />
      <rect x="40" y="70" width="120" height="28" rx="2" fill={NAVY_L} />
      <polyline points="44,58 54,48 64,52 74,42 84,46" fill="none" stroke={GOLD} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={104 + i * 14} y={60 - [12, 20, 16, 24][i]} width="8" height={[12, 20, 16, 24][i]} fill={i === 3 ? GOLD : "#3b6fc4"} />
      ))}
      <polyline points="46,90 66,84 86,88 106,78 126,82 146,74 156,78" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      <rect x="90" y="114" width="20" height="10" fill={STEEL} />
      <rect x="66" y="124" width="68" height="5" rx="2" fill={STEEL} />
    </g>
  ),
  sensors: (
    <g>
      <rect x="44" y="62" width="100" height="26" rx="5" fill={STEEL_L} />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
        <line key={i} x1={58 + i * 7} y1="62" x2={58 + i * 7} y2="88" stroke="#9a9da3" strokeWidth="2" />
      ))}
      <circle cx="44" cy="75" r="13" fill={NAVY} />
      <circle cx="44" cy="75" r="6" fill={NAVY_L} />
      <rect x="128" y="56" width="16" height="38" rx="2" fill={STEEL} />
      <circle cx="136" cy="62" r="2.5" fill={GOLD} />
      <path d="M144 75h44" stroke={NAVY} strokeWidth="6" strokeLinecap="round" />
      <path d="M26 60a20 20 0 0 0 0 30M16 52a30 30 0 0 0 0 46" fill="none" stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" />
    </g>
  ),
  encoders: (
    <g>
      <circle cx="90" cy="76" r="46" fill={NAVY} />
      <circle cx="90" cy="76" r="34" fill={LIGHT} />
      <circle cx="90" cy="76" r="28" fill="none" stroke={NAVY} strokeWidth="7" strokeDasharray="2.5 3.2" />
      <circle cx="90" cy="76" r="14" fill="#fff" stroke={STEEL_L} strokeWidth="2" />
      <circle cx="90" cy="76" r="6" fill={GOLD} />
      <rect x="134" y="70" width="36" height="12" rx="2" fill={STEEL_L} />
      <path d="M52 108c-10 8-6 22 6 22" fill="none" stroke={NAVY} strokeWidth="4" strokeLinecap="round" />
    </g>
  ),
  power: (
    <g>
      <rect x="56" y="16" width="88" height="118" rx="4" fill={LIGHT} stroke={NAVY} strokeWidth="2" />
      <rect x="62" y="22" width="76" height="16" rx="2" fill={STEEL} />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <rect key={i} x={66 + i * 10.5} y="26" width="5" height="8" fill={NAVY_D} />
      ))}
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <rect key={i} x="64" y={46 + i * 7} width="72" height="3" rx="1" fill={STEEL_L} />
      ))}
      <rect x="64" y="100" width="72" height="26" rx="2" fill={NAVY} />
      <text x="100" y="118" textAnchor="middle" fontSize="13" fontWeight="700" fill={GOLD} fontFamily="ui-sans-serif, system-ui">
        24 V DC
      </text>
      <circle cx="70" cy="92" r="3" fill={GREEN} />
      <circle cx="80" cy="92" r="3" fill={GOLD} />
    </g>
  ),
  control: (
    <g>
      <rect x="44" y="30" width="112" height="92" rx="6" fill={NAVY} />
      <rect x="54" y="40" width="92" height="46" rx="2" fill={NAVY_D} />
      <text x="100" y="62" textAnchor="middle" fontSize="18" fontWeight="700" fill="#f87171" fontFamily="ui-monospace, monospace">
        250.0
      </text>
      <text x="100" y="80" textAnchor="middle" fontSize="12" fontWeight="700" fill={GREEN} fontFamily="ui-monospace, monospace">
        250.0
      </text>
      <text x="58" y="50" fontSize="6" fill={GOLD} fontFamily="ui-sans-serif, system-ui">
        PV
      </text>
      <text x="58" y="80" fontSize="6" fill={GOLD} fontFamily="ui-sans-serif, system-ui">
        SV
      </text>
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={58 + i * 22} y="96" width="16" height="12" rx="2" fill={NAVY_L} stroke={STEEL} />
      ))}
      <circle cx="140" cy="46" r="2.5" fill={GOLD} />
    </g>
  ),
  switchgear: (
    <g>
      <rect x="54" y="26" width="92" height="100" rx="4" fill={LIGHT} stroke={NAVY} strokeWidth="2" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={62 + i * 28} y="32" width="20" height="16" rx="1.5" fill={STEEL} />
          <circle cx={72 + i * 28} cy="40" r="4" fill="#fff" stroke={NAVY_D} />
          <rect x={62 + i * 28} y="104" width="20" height="16" rx="1.5" fill={STEEL} />
          <circle cx={72 + i * 28} cy="112" r="4" fill="#fff" stroke={NAVY_D} />
        </g>
      ))}
      <rect x="62" y="56" width="76" height="30" rx="2" fill={NAVY} />
      <text x="100" y="75" textAnchor="middle" fontSize="11" fontWeight="700" fill={GOLD} fontFamily="ui-sans-serif, system-ui">
        AC-3
      </text>
      <rect x="92" y="90" width="16" height="8" rx="1" fill={GOLD} />
    </g>
  ),
  networking: (
    <g>
      <rect x="22" y="42" width="156" height="64" rx="5" fill={NAVY} />
      <rect x="32" y="50" width="44" height="8" rx="1.5" fill={GOLD} />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <g key={i}>
          <circle cx={39 + i * 17.5} cy="66" r="2.3" fill={i % 3 === 0 ? GOLD : GREEN} />
          <rect x={32 + i * 17.5} y="72" width="14" height="18" rx="1.5" fill={NAVY_D} stroke={STEEL_L} />
          <rect x={36 + i * 17.5} y="84" width="6" height="4" fill={STEEL_L} />
        </g>
      ))}
      <rect x="30" y="106" width="140" height="6" fill={STEEL} />
      <path d="M100 42V24M92 24h16" stroke={GOLD} strokeWidth="3" strokeLinecap="round" />
    </g>
  ),
  cables: (
    <g>
      <circle cx="84" cy="76" r="46" fill={NAVY} />
      <circle cx="84" cy="76" r="36" fill={LIGHT} />
      <circle cx="70" cy="62" r="12" fill="#fff" stroke={STEEL_L} strokeWidth="2" />
      <circle cx="70" cy="62" r="6" fill="#b45309" />
      <circle cx="98" cy="62" r="12" fill="#fff" stroke={STEEL_L} strokeWidth="2" />
      <circle cx="98" cy="62" r="6" fill="#b45309" />
      <circle cx="70" cy="90" r="12" fill="#fff" stroke={STEEL_L} strokeWidth="2" />
      <circle cx="70" cy="90" r="6" fill="#b45309" />
      <circle cx="98" cy="90" r="12" fill={GREEN} stroke={GOLD} strokeWidth="3" />
      <circle cx="98" cy="90" r="6" fill="#b45309" />
      <path d="M128 60c30-6 40 10 52 4" fill="none" stroke={NAVY} strokeWidth="10" strokeLinecap="round" />
      <path d="M128 60c30-6 40 10 52 4" fill="none" stroke={GOLD} strokeWidth="3" strokeLinecap="round" strokeDasharray="6 8" />
    </g>
  ),
  motion: (
    <g>
      <rect x="18" y="72" width="34" height="10" rx="2" fill={STEEL_L} />
      <rect x="50" y="50" width="72" height="54" rx="6" fill={NAVY} />
      {[0, 1, 2, 3].map((i) => (
        <circle key={i} cx={[58, 114, 58, 114][i]} cy={[58, 58, 96, 96][i]} r="3" fill={LIGHT} />
      ))}
      <rect x="66" y="66" width="40" height="22" rx="2" fill={NAVY_L} />
      <circle cx="150" cy="77" r="22" fill="none" stroke={GOLD} strokeWidth="9" strokeDasharray="6 5.2" />
      <circle cx="150" cy="77" r="12" fill="#fff" stroke={NAVY} strokeWidth="4" />
      <circle cx="150" cy="77" r="4" fill={NAVY} />
      <rect x="28" y="120" width="144" height="10" rx="2" fill={STEEL} />
      <rect x="82" y="112" width="44" height="20" rx="3" fill={LIGHT} stroke={NAVY} strokeWidth="2" />
    </g>
  ),
};
