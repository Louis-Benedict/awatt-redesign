import type { Metadata } from 'next';
import Link from 'next/link';
import { Zap, Home, PiggyBank, Recycle, Leaf, Tag } from 'lucide-react';

export const metadata: Metadata = {
  title: 'PV-HH – Photovoltaik & Wärmepumpen in Hamburg',
  description:
    'Ihr regionaler Partner für Photovoltaik und Wärmepumpen in Hamburg. Über 700 zufriedene Kunden, Deutsche Qualitätsprodukte, kompletter Service aus einer Hand.',
};

const benefits = [
  { icon: <Zap      className="w-6 h-6" />, title: 'Unabhängigkeit',    desc: 'Werden Sie unabhängiger von Netzbetreibern und steigenden Strompreisen.' },
  { icon: <Home     className="w-6 h-6" />, title: 'Wertsteigerung',    desc: 'Erhöhen Sie den Wert Ihrer Immobilie durch eine moderne PV-Anlage.' },
  { icon: <PiggyBank className="w-6 h-6" />, title: 'Kostenersparnis',  desc: 'Bis zu 80 % Einsparung bei den Stromkosten im Jahresdurchschnitt.' },
  { icon: <Recycle  className="w-6 h-6" />, title: 'Erneuerbare Energie', desc: 'Nutzen Sie saubere, unerschöpfliche Sonnenenergie für Ihr Zuhause.' },
  { icon: <Leaf     className="w-6 h-6" />, title: 'Umweltfreundlich',  desc: 'Reduzieren Sie Ihren CO₂-Fußabdruck und schützen Sie das Klima.' },
  { icon: <Tag      className="w-6 h-6" />, title: 'Förderungen 2025',  desc: 'Profitieren Sie von aktuellen Förderprogrammen und Steuervorteilen.' },
];

const steps = [
  { num: '01', title: 'Erstberatung', desc: 'Persönliches Gespräch vor Ort oder per Videocall – kostenlos und unverbindlich.' },
  { num: '02', title: 'Angebotsbesprechung', desc: 'Wir erstellen ein individuelles Angebot und gehen es gemeinsam durch.' },
  { num: '03', title: 'Installation', desc: 'Unser erfahrenes Team montiert Ihre Anlage zuverlässig und sauber.' },
  { num: '04', title: 'Elektroanschluss', desc: 'Fachgerechter Netzanschluss durch zertifizierte Elektrofachkräfte.' },
  { num: '05', title: 'Inbetriebnahme', desc: 'Vollständige Inbetriebnahme, Einweisung und After-Sales-Betreuung.' },
];

const stats = [
  { value: '700+', label: 'zufriedene Kunden' },
  { value: '4', label: 'Wochen bis zur Montage' },
  { value: '80 %', label: 'Ø Jahresersparnis' },
  { value: '100 %', label: 'persönliche Beratung' },
];

const products = [
  {
    name: 'Heimspeicher',
    desc: 'Hochwertige Lithium-Eisenphosphat-Speicher für maximale Eigenverbrauchsoptimierung.',
    badge: 'Topprodukt',
  },
  {
    name: 'Solarmodule',
    desc: 'Rückseitenkontakt-Doppelglas-Module mit bis zu 23,8 % Modulwirkungsgrad.',
    badge: 'Made in Germany',
  },
  {
    name: 'Energiemanagement',
    desc: 'Intelligentes System zur vernetzten Steuerung all Ihrer Energiegeräte.',
    badge: 'Smart Home',
  },
  {
    name: 'Wallbox',
    desc: 'Bidirektionale 22-kW-Ladestation für Ihr Elektrofahrzeug – solaroptimiert.',
    badge: '22 kW',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-brand-500/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-block bg-brand-500/20 text-brand-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Regional aus Hamburg
            </span>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              Ihre Energie.{' '}
              <span className="text-brand-400">Ihre Zukunft.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Professionelle Photovoltaik-Anlagen und Wärmepumpen für Hamburg und Umgebung.
              Komplett aus einer Hand – von der Beratung bis zur Inbetriebnahme.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/kontakt" className="btn-primary text-base">
                Kostenlos beraten lassen
              </Link>
              <Link href="/referenzen" className="btn-outline text-base border-white text-white hover:bg-white hover:text-slate-900">
                Referenzen ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-brand-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-brand-100 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Unsere Produkte & Lösungen</h2>
            <p className="section-subtitle mx-auto">
              Wir setzen auf bewährte Premiumprodukte für ein zuverlässiges Energiesystem.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <div key={p.name} className="card hover:shadow-lg transition-shadow">
                <span className="inline-block bg-brand-50 text-brand-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {p.badge}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{p.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/photovoltaik" className="btn-primary">
              Alle Produkte entdecken
            </Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Warum PV-HH?</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Seit unserer Gründung haben wir über 700 Anlagen in Hamburg und Umgebung
                installiert. Als lokales Unternehmen kennen wir die Region und stehen Ihnen
                persönlich zur Seite.
              </p>
              <ul className="space-y-4">
                {[
                  { title: 'Alles aus einer Hand', desc: 'Von der Planung über die Installation bis zum Netzanschluss.' },
                  { title: 'Lokale Expertise', desc: 'Persönliche Ansprechpartner vor Ort in Hamburg.' },
                  { title: 'Hochwertige Komponenten', desc: 'Nur geprüfte Premiumprodukte führender Hersteller.' },
                  { title: 'Bestpreisgarantie', desc: 'Transparente Angebote ohne versteckte Kosten.' },
                ].map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-500 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900">{item.title}</span>
                      <span className="text-slate-600"> – {item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <Link href="/ueber-uns" className="btn-primary mt-8 inline-block">
                Mehr über uns
              </Link>
            </div>
            <div className="bg-gradient-to-br from-brand-500 to-brand-700 rounded-xl p-8 text-white">
              <div className="text-4xl mb-4">☀️</div>
              <h3 className="text-2xl font-bold mb-3">Kostenloser Solarcheck</h3>
              <p className="text-brand-100 mb-6 leading-relaxed">
                Erfahren Sie in wenigen Minuten, wie viel Potenzial Ihr Dach hat und
                wie hoch Ihre Ersparnis sein könnte.
              </p>
              <Link href="/solarcheck" className="inline-block bg-white text-brand-600 font-semibold px-6 py-3 rounded-lg hover:bg-brand-50 transition-colors">
                Jetzt Solarcheck starten
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">6 Vorteile einer Photovoltaikanlage</h2>
            <p className="section-subtitle mx-auto">
              Eine PV-Anlage ist eine der sinnvollsten Investitionen für Ihr Zuhause.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="card hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-500 flex items-center justify-center mb-4">{b.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{b.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-step process */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-3xl font-bold mb-4">Unser 5-Punkte-Plan</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Von der ersten Beratung bis zur fertigen Anlage – wir begleiten Sie durch jeden Schritt.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <div key={step.num} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-brand-500/30 z-0" />
                )}
                <div className="relative z-10 text-center">
                  <div className="w-12 h-12 rounded-full bg-brand-500 text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title">Unser Einsatzgebiet</h2>
          <p className="section-subtitle mx-auto mb-8">
            Wir sind Ihr lokaler Partner in Hamburg und der gesamten Metropolregion –
            von der Innenstadt bis ins Umland.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['Hamburg', 'Schleswig-Holstein', 'Niedersachsen', 'Lübeck', 'Kiel', 'Norderstedt', 'Reinbek', 'Halstenbek'].map((city) => (
              <span key={city} className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                {city}
              </span>
            ))}
          </div>
          <Link href="/kontakt" className="btn-primary">
            Jetzt Beratungstermin anfragen
          </Link>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-brand-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-3xl font-bold mb-4">
            Bereit für Ihre eigene Solaranlage?
          </h2>
          <p className="text-brand-100 text-lg mb-8">
            Kontaktieren Sie uns jetzt für ein kostenloses und unverbindliches Beratungsgespräch.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/kontakt" className="inline-block bg-white text-brand-600 font-semibold px-8 py-3 rounded-lg hover:bg-brand-50 transition-colors">
              Termin vereinbaren
            </Link>
            <a href="tel:+4940XXXXXXXX" className="inline-block border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
              040 - XXXX XXXX
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
