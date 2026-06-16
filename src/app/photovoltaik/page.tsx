import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, Zap, ShieldCheck, ClipboardList, SunMedium, BarChart3 } from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: 'PV Hamburg – PV-Anlage kaufen & installieren | PV-Hamburg',
  description:
    'Photovoltaikanlage in Hamburg kaufen & installieren lassen. PV-Hamburg – Festpreisangebote ab 13.440 €, Netzanmeldung inklusive, 30 Jahre Modulgarantie.',
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

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

const included = [
  { icon: <ClipboardList className="w-5 h-5" />, label: 'Kostenlose Beratung & Planung' },
  { icon: <SunMedium className="w-5 h-5" />, label: 'Dachmontage & Elektroinstallation' },
  { icon: <CheckCircle2 className="w-5 h-5" />, label: 'Netzanmeldung beim Netzbetreiber' },
  { icon: <CheckCircle2 className="w-5 h-5" />, label: 'Anmeldung beim Marktstammdatenregister' },
  { icon: <Zap className="w-5 h-5" />, label: 'Energiemanagement' },
  { icon: <BarChart3 className="w-5 h-5" />, label: 'Notstrombox' },
  { icon: <ShieldCheck className="w-5 h-5" />, label: '30 Jahre Produktgarantie auf Module' },
  { icon: <ShieldCheck className="w-5 h-5" />, label: 'Versicherter Installationsbetrieb' },
];

export default function PhotovoltaikPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden text-white py-24 md:py-32">
        <Image
          src="/images/photovoltaik-hero.jpg"
          alt="Photovoltaikanlage auf Hamburger Wohnhaus"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,18,40,0.88) 0%, rgba(10,18,40,0.55) 60%, rgba(10,18,40,0.20) 100%)' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block bg-white/10 text-white/80 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm border border-white/20">
              PV-Hamburg · Hamburg & Umgebung
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              Photovoltaik
            </h1>
            <p className="text-xl text-white/75 mb-4 leading-relaxed">
              Solaranlage kaufen, installieren & in Betrieb nehmen — alles aus einer Hand.
            </p>
            <p className="text-base text-white/55 mb-10 leading-relaxed max-w-xl">
              Als Elektroinstallationsbetrieb planen und montieren wir Ihre PV-Anlage in Hamburg, Ratzeburg
              und dem gesamten norddeutschen Raum. Festpreise, keine Überraschungen.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/kontakt" className="btn-primary text-base">
                Kostenloses Angebot anfordern
              </Link>
              <Link href="/solarcheck"
                className="inline-block font-semibold px-7 py-3 rounded-xl text-base text-white transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.10)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.20)' }}
              >
                Solarcheck starten
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Zahlen & Fakten ───────────────────────────────────────────────── */}
      <section className="py-14 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '250+', label: 'realisierte Anlagen' },
              { value: 'ab 13.440 €', label: 'Festpreis inkl. MwSt.' },
              { value: '8–12 J.', label: 'Amortisationszeit' },
              { value: '30 Jahre', label: 'Modulgarantie' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-black mb-1" style={{ color: '#1B8C4D' }}>{s.value}</div>
                <div className="text-sm text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Warum PV in Hamburg ───────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#1B8C4D' }}>
                PV Hamburg
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-5" style={{ color: '#1E293B' }}>
                Warum jetzt der richtige Zeitpunkt ist
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Der Strompreis in Deutschland liegt aktuell bei über 30 Cent pro Kilowattstunde — Tendenz steigend.
                Mit einer eigenen Photovoltaikanlage erzeugen Sie Ihren Strom selbst und schützen sich dauerhaft
                vor steigenden Energiekosten.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Hamburg und der norddeutsche Raum bieten mit rund 950–1.050 kWh/m² Jahreseinstrahlung
                ideale Bedingungen für eine wirtschaftliche PV-Anlage. Auch bewölkte Tage reduzieren den
                Ertrag moderner Module kaum — die Technologie ist längst ausgereift.
              </p>
              <ul className="space-y-3">
                {[
                  'Bis zu 80 % Eigenverbrauch mit Heimspeicher',
                  'Einspeisevergütung für überschüssigen Strom',
                  'Unabhängigkeit von Energieversorgern',
                  'Wertsteigerung Ihrer Immobilie',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: '#1B8C4D' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/pv-installation.jpg"
                alt="Photovoltaik Installation Hamburg"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Leistungsumfang ───────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: '#F3F9F5' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#1B8C4D' }}>
              Rundum-Sorglos
            </p>
            <h2 className="text-3xl font-bold" style={{ color: '#1E293B' }}>
              Was bei uns immer inklusive ist
            </h2>
            <p className="mt-3 text-slate-500 max-w-xl mx-auto">
              Wir übernehmen jeden Schritt — von der ersten Beratung bis zur finalen Inbetriebnahme.
              Kein Aufwand für Sie.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {included.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 rounded-xl px-5 py-4 bg-white border border-slate-100 shadow-sm"
              >
                <span className="shrink-0" style={{ color: '#1B8C4D' }}>{item.icon}</span>
                <span className="text-sm font-medium text-slate-700">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: '#F3F9F5' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold" style={{ color: '#1E293B' }}>Häufige Fragen zur PV-Anlage</h2>
          </div>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-24"
        style={{ background: 'linear-gradient(135deg, #1B8C4D 0%, #1B6B38 60%, #1B8C4D 100%)' }}
      >
        <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse at 30% 30%, rgba(255,255,255,0.15) 0%, transparent 55%)' }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Jetzt Ihre PV-Anlage in Hamburg planen
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Kostenlose Beratung, transparenter Festpreis und ein persönlicher Ansprechpartner
            von der Planung bis zur Inbetriebnahme.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/kontakt"
              className="inline-block font-bold px-9 py-4 rounded-xl transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.95)', color: '#1B6B38', boxShadow: '0 4px 24px rgba(0,0,0,0.12)' }}
            >
              Beratungsgespräch anfragen
            </Link>
            <a
              href="tel:+4945418856891"
              className="inline-flex items-center gap-2 font-bold px-9 py-4 rounded-xl transition-all duration-200 text-white"
              style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.35)' }}
            >
              04541 8856891
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
