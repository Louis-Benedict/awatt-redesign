import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Photovoltaik Hamburg – PV-Anlagen & Solarmodule',
  description:
    'Professionelle Photovoltaik-Anlagen in Hamburg. Hochwertige Solarmodule, Heimspeicher und Energiemanagementsysteme aus einer Hand.',
};

const faqItems = [
  {
    q: 'Was kostet eine Photovoltaikanlage in Hamburg?',
    a: 'Je nach Größe und Ausstattung liegen unsere Pakete zwischen 11.460 € und 14.100 €. Der genaue Preis hängt von Ihrer Dachfläche, dem Modultyp und möglichen Zusatzkomponenten wie Speicher oder Wallbox ab. Wir erstellen Ihnen ein transparentes Festpreisangebot.',
  },
  {
    q: 'Wie lange dauert die Installation?',
    a: 'Die Installation einer PV-Anlage dauert in der Regel 1–2 Tage. Von der Auftragserteilung bis zur Inbetriebnahme vergehen üblicherweise 4–8 Wochen – wir kümmern uns in dieser Zeit um alle Genehmigungen und Netzanmeldungen.',
  },
  {
    q: 'Lohnt sich eine PV-Anlage trotz des Hamburger Wetters?',
    a: 'Ja. Moderne Module erzeugen auch bei bewölktem Himmel Strom – entscheidend ist die Gesamteinstrahlung im Jahr. Hamburg liegt bei rund 950–1.050 kWh/m² Globalstrahlung, was für einen wirtschaftlichen Betrieb vollkommen ausreicht.',
  },
  {
    q: 'Wie lange ist die Amortisationszeit?',
    a: 'Bei einem Strompreis von ca. 30 Ct/kWh amortisiert sich eine typische Anlage in 8–12 Jahren. Mit steigenden Strompreisen und einem Heimspeicher kann sich dieser Zeitraum weiter verkürzen.',
  },
  {
    q: 'Kümmern Sie sich auch um die Netzanmeldung?',
    a: 'Ja, die Anmeldung beim Netzbetreiber und beim Finanzamt ist bei uns vollständig im Service enthalten. Sie müssen sich um nichts kümmern.',
  },
];

const modules = [
  {
    title: 'PV-Solarmodule',
    subtitle: '480 W Doppelglas',
    desc: 'Rückseitenkontakt-Doppelglas-Module mit einem Modulwirkungsgrad von bis zu 23,8 %. Ästhetisches Vollschwarz-Design, verbesserte Verschattungstoleranz und 30 Jahre Garantie.',
    highlights: ['Wirkungsgrad bis 23,8 %', 'Doppelglas-Technologie', '30 Jahre Garantie', 'Vollschwarz-Design'],
  },
  {
    title: 'Heimspeicher',
    subtitle: 'Lithium-Eisenphosphat',
    desc: 'Hochwertige Batteriespeicher für maximale Eigenverbrauchsoptimierung. Skalierbar für jede Haushaltsgröße, langlebig und sicher durch LiFePO₄-Technologie.',
    highlights: ['LiFePO₄-Technologie', 'Skalierbar', 'Netzunabhängigkeit', 'Eigenverbrauch optimieren'],
  },
  {
    title: 'Energiemanagement',
    subtitle: 'Smart Control',
    desc: 'Intelligente Vernetzung Ihrer Energiegeräte: Strom selbst produzieren, speichern und optimal verbrauchen. Steuerung per App rund um die Uhr.',
    highlights: ['App-Steuerung', 'Echtzeitmonitoring', 'Gerätevernetzung', 'KI-gestützte Optimierung'],
  },
  {
    title: 'Wallbox',
    subtitle: '22 kW Ladestation',
    desc: 'Bidirektionale 22-kW-Wallbox für Ihr Elektrofahrzeug. Lädt mit überschüssigem Solarstrom und ist RFID/NFC-aktivierbar.',
    highlights: ['22 kW Ladeleistung', 'Solar-optimiertes Laden', 'Bidirektional', 'RFID/NFC'],
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

export default function PhotovoltaikPage() {
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
              Photovoltaik
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Strom selbst produzieren
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Mit einer modernen Photovoltaikanlage erzeugen Sie Ihren eigenen Strom –
              umweltfreundlich, kosteneffizient und unabhängig.
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
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">Das integrierte Energiesystem</h2>
            <p className="text-slate-600 leading-relaxed">
              Wir bieten Ihnen ein vollständig integriertes Energiesystem: Strom selbst produzieren,
              Energie speichern, Energiegeräte vernetzen und Kosten dauerhaft senken.
              Alle Komponenten sind perfekt aufeinander abgestimmt.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Unsere Komponenten</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modules.map((m) => (
              <div key={m.title} className="card hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <span className="text-xs font-semibold text-brand-600 bg-brand-50 px-3 py-1 rounded-full">
                    {m.subtitle}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{m.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-4">{m.desc}</p>
                <ul className="grid grid-cols-2 gap-2">
                  {m.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project gallery placeholder */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-4">Unsere Projekte</h2>
          <p className="text-center text-slate-600 mb-10">
            Eine Auswahl realisierter Photovoltaikanlagen aus Hamburg und Umgebung.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              '/images/solar-install-1.jpg',
              '/images/solar-install-2.jpg',
              '/images/solarmodul.jpg',
              '/images/solar-install-1.jpg',
              '/images/solar-install-2.jpg',
              '/images/wechselrichter.jpg',
              '/images/speicher.jpg',
              '/images/solar-install-1.jpg',
            ].map((src, i) => (
              <div key={i} className="aspect-square relative rounded-xl overflow-hidden">
                <Image
                  src={src}
                  alt={`Projekt ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Energy community */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="section-title">Energiegemeinschaft</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Teilen Sie überschüssigen Solarstrom mit Nachbarn und profitieren Sie
              gemeinsam. Durch vernetzte Energiegemeinschaften holen Sie das Maximum
              aus Ihrer Anlage heraus.
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
          <h2 className="text-3xl font-bold mb-4">Jetzt Ihre PV-Anlage planen</h2>
          <p className="text-brand-100 mb-8">
            Lassen Sie sich kostenlos und unverbindlich beraten. Wir erarbeiten ein
            maßgeschneidertes Konzept für Ihr Dach.
          </p>
          <Link href="/kontakt" className="inline-block bg-white text-brand-600 font-semibold px-8 py-3 rounded-lg hover:bg-brand-50 transition-colors">
            Beratungsgespräch anfragen
          </Link>
        </div>
      </section>
    </>
  );
}
