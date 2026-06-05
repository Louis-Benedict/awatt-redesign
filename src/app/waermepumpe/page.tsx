import type { Metadata } from 'next';
import Link from 'next/link';
import { Leaf, PiggyBank, Tag, Sun, Thermometer } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Wärmepumpe Hamburg – Klimafreundlich heizen',
  description:
    'Wärmepumpen in Hamburg – umweltfreundlich, effizient und optimal kombinierbar mit Ihrer Photovoltaikanlage. Planung und Installation aus einer Hand.',
};

const advantages = [
  { icon: <Leaf      className="w-6 h-6" />, title: 'Nachhaltiges Heizen',   desc: 'Wärmepumpen nutzen die kostenlose Energie aus der Umgebungsluft und sind deutlich umweltfreundlicher als Öl- oder Gasheizungen.' },
  { icon: <PiggyBank className="w-6 h-6" />, title: 'Kosteneinsparung',      desc: 'Durch den effizienten Betrieb mit erneuerbarer Energie senken Sie Ihre Heizkosten dauerhaft – besonders in Kombination mit einer PV-Anlage.' },
  { icon: <Tag       className="w-6 h-6" />, title: 'Staatliche Förderung',  desc: 'Profitieren Sie von attraktiven Förderprogrammen des Bundes und der Länder. Wir beraten Sie umfassend zu allen verfügbaren Zuschüssen.' },
  { icon: <Sun       className="w-6 h-6" />, title: 'Perfekte PV-Kombination', desc: 'Kombiniert mit Ihrer Solaranlage decken Sie den Strombedarf der Wärmepumpe selbst – maximale Unabhängigkeit und Effizienz.' },
];

const faqItems = [
  {
    q: 'Welche Wärmepumpentypen gibt es?',
    a: 'Wir installieren Luft-Wasser-Wärmepumpen, Sole-Wasser-Wärmepumpen (Erdwärme) und Wasser-Wasser-Wärmepumpen. Die passende Lösung hängt von Ihrem Gebäude und Grundstück ab.',
  },
  {
    q: 'Ist mein Haus für eine Wärmepumpe geeignet?',
    a: 'Moderne Wärmepumpen eignen sich für die meisten Gebäude, besonders effizient sind sie in gut gedämmten Häusern. Wir prüfen Ihre individuelle Situation im Beratungsgespräch.',
  },
  {
    q: 'Welche Förderungen gibt es 2025?',
    a: 'Über die Bundesförderung für effiziente Gebäude (BEG) sind Zuschüsse von bis zu 70 % der Investitionskosten möglich. Wir unterstützen Sie bei der Antragstellung.',
  },
  {
    q: 'Wie lange dauert die Installation?',
    a: 'Die Installation einer Wärmepumpe dauert in der Regel 2–4 Tage. Dazu kommen eventuelle Vorarbeiten wie die Verlegung von Leitungen.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

export default function WaermepumpePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-brand-500/20 text-brand-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Wärmepumpe
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Alles aus einer Hand –{' '}
              <span className="text-brand-400">Planung bis Installation</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Klimafreundlich heizen mit Zukunft: Wärmepumpen nutzen erneuerbare Energie
              für nachhaltiges und kosteneffizientes Heizen.
            </p>
            <Link href="/kontakt" className="btn-primary text-base">
              Unverbindlich beraten lassen
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Klimafreundlich heizen mit Zukunft</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Wärmepumpen nutzen die in der Umgebungsluft, im Erdreich oder im Grundwasser
                gespeicherte Energie, um Ihr Zuhause zu heizen. Dieser Prozess ist besonders
                effizient und umweltschonend.
              </p>
              <p className="text-slate-600 leading-relaxed">
                In Kombination mit einer Photovoltaikanlage erreichen Sie maximale
                Unabhängigkeit: Ihre Solaranlage liefert den Strom, den Ihre Wärmepumpe
                benötigt – kostenlos aus Sonnenenergie.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
              <Thermometer className="w-12 h-12 mx-auto mb-4 text-brand-500" />
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-2xl font-bold text-brand-600">300 %</div>
                  <div className="text-xs text-slate-500 mt-1">Effizienz (COP)</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-2xl font-bold text-brand-600">70 %</div>
                  <div className="text-xs text-slate-500 mt-1">Max. Förderung BEG</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-2xl font-bold text-brand-600">20+</div>
                  <div className="text-xs text-slate-500 mt-1">Jahre Lebensdauer</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-2xl font-bold text-brand-600">0</div>
                  <div className="text-xs text-slate-500 mt-1">Direkte CO₂-Emissionen</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Ihre Vorteile auf einen Blick</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((a) => (
              <div key={a.title} className="card hover:shadow-lg transition-shadow text-center">
                <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-500 flex items-center justify-center mb-4">{a.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2">{a.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subsidies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title">Förderungen & Finanzierung</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Der Staat fördert den Umstieg auf Wärmepumpen großzügig. Über die
              Bundesförderung für effiziente Gebäude (BEG) sind Zuschüsse von bis zu
              70 % der förderfähigen Kosten möglich.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {[
                { prog: 'BEG Grundförderung', pct: 'bis 30 %' },
                { prog: 'Klima-Geschwindigkeitsbonus', pct: 'bis 20 %' },
                { prog: 'Einkommensbonus', pct: 'bis 30 %' },
              ].map((f) => (
                <div key={f.prog} className="bg-brand-50 border border-brand-100 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-brand-600 mb-1">{f.pct}</div>
                  <div className="text-sm text-slate-700 font-medium">{f.prog}</div>
                </div>
              ))}
            </div>
            <p className="text-slate-500 text-sm">
              Wir begleiten Sie durch den gesamten Förderprozess – von der Beantragung
              bis zur Auszahlung.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-10">Häufige Fragen</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item) => (
              <div key={item.q} className="card">
                <h3 className="font-bold text-slate-900 mb-2">{item.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Bereit für klimafreundliches Heizen?</h2>
          <p className="text-brand-100 mb-8">
            Kontaktieren Sie uns für eine kostenlose und unverbindliche Beratung.
            Wir antworten innerhalb von 24 Stunden.
          </p>
          <Link href="/kontakt" className="inline-block bg-white text-brand-600 font-semibold px-8 py-3 rounded-lg hover:bg-brand-50 transition-colors">
            Jetzt anfragen
          </Link>
        </div>
      </section>
    </>
  );
}
