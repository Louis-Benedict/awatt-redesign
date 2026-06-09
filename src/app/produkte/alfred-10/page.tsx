import type { Metadata } from 'next';
import ProductHero from '@/components/ProductHero';
import ProductCTA from '@/components/ProductCTA';

export const metadata: Metadata = {
  title: 'Alfred 10 – All-in-One Speichersystem | PV-Hamburg',
  description:
    'Der Alfred 10 kombiniert Wechselrichter, Speicher und Backup-Funktion in einem kompakten System mit 10 kW und 9,6–24 kWh Kapazität.',
};

const specs = [
  { label: 'Max. PV-Eingangsspannung', value: '1000 V' },
  { label: 'Anlaufspannung', value: '150 V' },
  { label: 'MPPT-Betriebsspannungsbereich', value: '160–950 V' },
  { label: 'Anzahl der MPPTs', value: '2' },
  { label: 'Max. Eingangsstrom pro MPPT', value: '20A + 30A' },
  { label: 'Akku-Typ', value: 'LFP (integriert)' },
  { label: 'Anzahl Batteriemodule', value: '4 bis 10' },
  { label: 'Nennkapazität', value: '9,6 – 24 kWh' },
  { label: 'Max. Lade-/Entladeleistung', value: '12.5 kW / 11.3 kW' },
  { label: 'Europäische Effizienz', value: '97%' },
  { label: 'Nennleistung', value: '10 kW' },
  { label: 'Größe (BxHxT)', value: '780 x 1760 x 240 mm' },
  { label: 'Gewicht', value: '215 kg' },
];

export default function Alfred10Page() {
  return (
    <>
      <ProductHero
        category="Stromspeicher"
        name="Alfred 10"
        subtitle="All-in-One Speichersystem"
        image="/images/alfred-10.png"
        paragraphs={[
          'Der Alfred 10 kombiniert Wechselrichter, Speicher und Backup-Funktion in einem kompakten System. Mit 10 kW Wechselrichterleistung und 9,6–24 kWh Speicherkapazität eignet sich das System ideal für moderne PV-Anlagen mit hohem Eigenverbrauch.',
          'Dank IP65-Schutzklasse kann das System flexibel installiert werden. Die modulare Bauweise ermöglicht eine schnelle Montage und spätere Erweiterung.',
        ]}
        specs={[
          '10 kW Wechselrichterleistung',
          '9,6–24 kWh Speicherkapazität',
          'IP65 Schutzklasse',
          'Modulare Bauweise',
          'Integrierte Backup-Funktion',
        ]}
      />

      {/* ── Technische Spezifikationen ─────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-10" style={{ color: '#1E293B' }}>
            Technische Spezifikationen
          </h2>

          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: '1px solid #E8EEF7', maxWidth: '48rem' }}
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px]">
                <thead>
                  <tr style={{ background: 'rgba(59,125,216,0.08)', borderBottom: '1px solid #E8EEF7' }}>
                    <th className="px-6 py-4 text-left text-sm font-bold" style={{ color: '#1E293B' }}>
                      Spezifikation
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold" style={{ color: '#3B7DD8' }}>
                      Alfred 10
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {specs.map(({ label, value }, i) => (
                    <tr
                      key={label}
                      style={{
                        background: i % 2 === 0 ? '#F8FAFC' : '#ffffff',
                        borderTop: '1px solid #F1F5F9',
                      }}
                    >
                      <td
                        className="px-6 py-4 text-sm font-semibold whitespace-nowrap"
                        style={{ color: '#1E293B' }}
                      >
                        {label}
                      </td>
                      <td className="px-6 py-4 text-sm" style={{ color: '#64748B' }}>
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <ProductCTA name="Alfred 10" />
    </>
  );
}
