import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { BatteryCharging } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Stromspeicher – Batteriespeicher für Ihre PV-Anlage',
  description:
    'Maximieren Sie den Eigenverbrauch Ihrer Photovoltaikanlage mit einem hochwertigen Heimspeicher. LiFePO₄-Technologie für maximale Sicherheit und Langlebigkeit.',
};

const storageModels = [
  { size: '5,0 kWh', suitable: 'Kleine Haushalte 1–2 Personen', autarky: 'bis 55 %' },
  { size: '7,5 kWh', suitable: 'Mittlere Haushalte 2–4 Personen', autarky: 'bis 70 %', popular: true },
  { size: '10,0 kWh', suitable: 'Große Haushalte 4+ Personen', autarky: 'bis 80 %' },
  { size: '12,5 kWh', suitable: 'Großer Verbrauch / Wärmepumpe', autarky: 'bis 90 %' },
];

const techFeatures = [
  { title: 'LiFePO₄-Technologie', desc: 'Lithium-Eisenphosphat-Batterien sind die sicherste und langlebigste Batterietechnologie auf dem Markt.' },
  { title: 'Bis zu 6.000 Ladezyklen', desc: 'Mehr als 15 Jahre Betriebsdauer bei täglichem Laden und Entladen.' },
  { title: 'Modular erweiterbar', desc: 'Starten Sie klein und erweitern Sie Ihren Speicher bei Bedarf – flexibel nach Ihrem Energiebedarf.' },
  { title: 'Integriertes BMS', desc: 'Das Battery Management System überwacht und schützt jede einzelne Zelle für maximale Lebensdauer.' },
  { title: '10 Jahre Garantie', desc: 'Wir stehen mit unserer Garantie für die Qualität und Langlebigkeit des Speichers ein.' },
  { title: 'Smart-Home-Integration', desc: 'Nahtlose Integration in gängige Smart-Home-Systeme und Energiemanagementsysteme.' },
];

export default function StromspeicherPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-brand-500/20 text-brand-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Stromspeicher
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Ihren Solarstrom{' '}
              <span className="text-brand-400">speichern & nutzen</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Mit einem Heimspeicher nutzen Sie Ihren selbst erzeugten Solarstrom
              auch nachts und bei schlechtem Wetter – und steigern Ihre
              Autarkie auf bis zu 90 %.
            </p>
            <Link href="/kontakt" className="btn-primary text-base">
              Speicher anfragen
            </Link>
          </div>
        </div>
      </section>

      {/* Why storage */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Warum ein Heimspeicher?</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Ohne Speicher fließt überschüssiger Solarstrom ins Netz – zu einer
                Einspeisevergütung, die deutlich unter dem Kaufpreis für Strom liegt.
                Mit einem Heimspeicher nutzen Sie Ihren Solarstrom selbst.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Der gespeicherte Strom steht Ihnen zur Verfügung, wann immer Sie
                ihn brauchen – morgens, abends oder in der Nacht. Das maximiert
                Ihren Eigenverbrauch und senkt Ihre Stromrechnung erheblich.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                  { label: 'Eigenverbrauch ohne Speicher', pct: '~30 %', color: 'bg-slate-200' },
                  { label: 'Eigenverbrauch mit Speicher', pct: '~80 %', color: 'bg-brand-500' },
                ].map((item) => (
                  <div key={item.label} className="bg-slate-50 rounded-xl p-4">
                    <div className={`text-2xl font-bold ${item.pct === '~80 %' ? 'text-brand-600' : 'text-slate-500'}`}>
                      {item.pct}
                    </div>
                    <div className="text-xs text-slate-600 mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/speicher.jpg"
                  alt="SunGrow Batteriespeicher"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
              <BatteryCharging className="w-10 h-10 mx-auto mb-4 text-brand-500" />
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">Vorteile auf einen Blick</h3>
              <ul className="space-y-3">
                {[
                  'Maximaler Eigenverbrauch des Solarstroms',
                  'Stromkosten dauerhaft senken',
                  'Unabhängigkeit vom Stromnetz',
                  'Notstromfähigkeit (optional)',
                  'Einfache Steuerung per App',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              </div>{/* /p-8 */}
            </div>
          </div>
        </div>
      </section>

      {/* Models */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-4">Speichergrößen</h2>
          <p className="text-center text-slate-600 mb-10">Die passende Größe für jeden Haushalt.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {storageModels.map((m) => (
              <div
                key={m.size}
                className={`card hover:shadow-lg transition-shadow relative ${m.popular ? 'border-brand-400 border-2' : ''}`}
              >
                {m.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Beliebt
                  </span>
                )}
                <div className="text-3xl font-bold text-brand-600 mb-1">{m.size}</div>
                <div className="text-sm text-slate-600 mb-3">{m.suitable}</div>
                <div className="text-sm font-semibold text-slate-900">
                  Autarkie: <span className="text-brand-600">{m.autarky}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Technische Highlights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {techFeatures.map((f) => (
              <div key={f.title} className="card hover:shadow-lg transition-shadow">
                <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-brand-500" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Interesse an einem Heimspeicher?</h2>
          <p className="text-brand-100 mb-8">
            Wir beraten Sie kostenlos und erstellen ein auf Ihren Haushalt
            zugeschnittenes Angebot.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/kontakt" className="inline-block bg-white text-brand-600 font-semibold px-8 py-3 rounded-lg hover:bg-brand-50 transition-colors">
              Angebot anfordern
            </Link>
            <Link href="/solarcheck" className="inline-block border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
              Solarcheck starten
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
