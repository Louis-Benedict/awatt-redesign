import { CheckCircle } from 'lucide-react';

const features = [
  '§14a EnWG optimiert',
  'Dynamische Stromtarife nutzbar',
  '§9 EEG kompatibel',
  'Ohne Zusatzkosten',
];

const Y_AXIS = [
  { label: '20.000', y: 25 },
  { label: '15.000', y: 80 },
  { label: '10.000', y: 135 },
  { label: '5.000', y: 190 },
  { label: '0', y: 245 },
];

const X_YEARS = [0, 2, 4, 6, 8, 10, 12, 14, 16];

function xPos(yr: number) {
  return 55 + 425 * (yr / 16);
}

function AmortizationChart() {
  return (
    <svg
      viewBox="0 0 500 290"
      className="w-full"
      aria-label="Amortisationsdiagramm: Anlage mit HEMS amortisiert sich schneller"
    >
      {/* Chart title */}
      <text x="267" y="16" textAnchor="middle" fontSize="11" fill="#64748B" fontWeight="500">
        Amortisation im Zeitverlauf
      </text>

      {/* Y-axis rotated label */}
      <text
        x="10"
        y="135"
        textAnchor="middle"
        fontSize="9"
        fill="#94A3B8"
        transform="rotate(-90,10,135)"
      >
        Gesamtkosten in €
      </text>

      {/* Horizontal grid lines + y-axis labels */}
      {Y_AXIS.map(({ label, y }) => (
        <g key={y}>
          <line
            x1="55"
            y1={y}
            x2="480"
            y2={y}
            stroke={y === 245 ? '#CBD5E1' : '#EEF2F8'}
            strokeWidth="1"
            strokeDasharray={y === 245 ? undefined : '4,3'}
          />
          <text x="50" y={y + 4} textAnchor="end" fontSize="9" fill="#94A3B8">
            {label}
          </text>
        </g>
      ))}

      {/* Vertical axis line */}
      <line x1="55" y1="25" x2="55" y2="245" stroke="#CBD5E1" strokeWidth="1" />

      {/* X-axis labels */}
      {X_YEARS.map(yr => (
        <text key={yr} x={xPos(yr)} y="260" textAnchor="middle" fontSize="9" fill="#94A3B8">
          {yr}
        </text>
      ))}
      <text x="267" y="277" textAnchor="middle" fontSize="9" fill="#94A3B8">
        Jahre
      </text>

      {/* Legend */}
      <line x1="62" y1="46" x2="80" y2="46" stroke="#94A3B8" strokeWidth="2" />
      <text x="84" y="50" fontSize="9" fill="#64748B">
        Ohne HEMS
      </text>
      <line x1="62" y1="61" x2="80" y2="61" stroke="#1B8C4D" strokeWidth="2.5" />
      <text x="84" y="65" fontSize="9" fill="#64748B">
        Mit HEMS
      </text>

      {/* HEMS curve subtle fill */}
      <path
        d="M 55,29 C 110,30 210,220 282,245 L 480,245 L 55,245 Z"
        fill="rgba(27,140,77,0.05)"
      />

      {/* Without HEMS curve (gray) */}
      <path
        d="M 55,29 C 150,30 300,222 387,245 L 480,245"
        fill="none"
        stroke="#94A3B8"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* With HEMS curve (blue) */}
      <path
        d="M 55,29 C 110,30 210,220 282,245 L 480,245"
        fill="none"
        stroke="#1B8C4D"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Dots at amortization points */}
      <circle cx="282" cy="245" r="5" fill="#1B8C4D" stroke="white" strokeWidth="2" />
      <circle cx="387" cy="245" r="5" fill="#94A3B8" stroke="white" strokeWidth="2" />

      {/* Green savings badge (top right) */}
      <rect x="358" y="32" width="118" height="52" rx="8" fill="#ECFDF5" stroke="#6EE7B7" strokeWidth="1" />
      <polygon points="365,74 370,62 375,74" fill="#10B981" />
      <text x="422" y="52" textAnchor="middle" fontSize="9" fill="#059669" fontWeight="700">
        Mindestens 600 €
      </text>
      <text x="422" y="66" textAnchor="middle" fontSize="9" fill="#10B981">
        pro Jahr gespart
      </text>

      {/* Blue callout — HEMS annotation */}
      <line x1="212" y1="217" x2="265" y2="244" stroke="#1B8C4D" strokeWidth="1" strokeDasharray="3,2" />
      <rect x="152" y="177" width="120" height="38" rx="7" fill="#1B8C4D" />
      <text x="212" y="193" textAnchor="middle" fontSize="8.5" fill="white" fontWeight="600">
        *Amortisiert
      </text>
      <text x="212" y="207" textAnchor="middle" fontSize="8.5" fill="rgba(255,255,255,0.88)">
        nach ca. 9 Jahren
      </text>

      {/* Gray callout — without HEMS annotation */}
      <line x1="363" y1="202" x2="381" y2="244" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3,2" />
      <rect x="293" y="162" width="140" height="38" rx="7" fill="white" stroke="#E2E8F0" strokeWidth="1" />
      <text x="363" y="178" textAnchor="middle" fontSize="8.5" fill="#475569" fontWeight="600">
        Amortisiert
      </text>
      <text x="363" y="192" textAnchor="middle" fontSize="8.5" fill="#94A3B8">
        nach ca. 12,5 Jahren
      </text>
    </svg>
  );
}

export default function HemsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="mb-14">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#1B8C4D' }}
          >
            Ohne Zusatzkosten
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-[2.6rem] font-bold leading-tight max-w-3xl"
            style={{ color: '#1E293B' }}
          >
            Energiemanagementsystem bei jeder Anlage inklusive
          </h2>
        </div>

        {/* Two-column body */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Chart */}
          <div
            className="rounded-2xl p-5 sm:p-7 border"
            style={{ background: '#FAFBFE', borderColor: '#E8EEF7' }}
          >
            <AmortizationChart />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center md:pt-4">

            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-7 self-start text-sm font-semibold"
              style={{
                background: 'rgba(27,140,77,0.09)',
                color: '#1B8C4D',
                border: '1px solid rgba(27,140,77,0.18)',
              }}
            >
              <CheckCircle className="w-4 h-4" />
              Mindestens 600&nbsp;&euro; pro Jahr schneller amortisiert
            </div>

            <h3
              className="text-2xl md:text-3xl font-bold leading-tight mb-5"
              style={{ color: '#1E293B' }}
            >
              Mit dem HEMS-PRO amortisiert<br />sich Ihre Anlage schneller
            </h3>

            <div className="w-12 h-1 rounded-full mb-6" style={{ background: '#1B8C4D' }} />

            <p className="leading-relaxed text-base mb-8" style={{ color: '#64748B' }}>
              Bei uns rentiert sich jede Anlage schneller. Wir bieten ein nach §14a und §9 EEG
              maßgeschneidertes Energiemanagementsystem, mit dem Sie bei Bedarf auch dynamische
              Stromtarife nutzen können – ohne Zusatzkosten.
            </p>

            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              {features.map(feat => (
                <div
                  key={feat}
                  className="flex items-center gap-2 text-sm"
                  style={{ color: '#475569' }}
                >
                  <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#1B8C4D' }} />
                  {feat}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
