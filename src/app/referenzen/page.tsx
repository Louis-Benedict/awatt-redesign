import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Referenzen – Unsere realisierten Projekte',
  description:
    'Über 700 erfolgreich realisierte Photovoltaikanlagen in Hamburg und Umgebung. Entdecken Sie unsere Referenzprojekte.',
};

const projects = [
  { location: 'Hamburg-Oststeinbek', kwp: '14,28 kWp', storage: '10,0 kWh Speicher', year: '2024', type: 'Doppelglas' },
  { location: 'Norderstedt', kwp: '13,77 kWp', storage: '7,5 kWh Speicher', year: '2024', type: 'Doppelglas' },
  { location: 'Halstenbek', kwp: '13,77 kWp', storage: '10,0 kWh Speicher', year: '2024', type: 'Vollschwarz' },
  { location: 'Reinbek', kwp: '9,60 kWp', storage: '5,0 kWh Speicher', year: '2023', type: 'Standard' },
  { location: 'Hamburg-Rahlstedt', kwp: '11,52 kWp', storage: '7,5 kWh Speicher', year: '2023', type: 'Doppelglas' },
  { location: 'Ahrensburg', kwp: '8,64 kWp', storage: '5,0 kWh Speicher', year: '2024', type: 'Standard' },
  { location: 'Geesthacht', kwp: '16,32 kWp', storage: '12,5 kWh Speicher', year: '2024', type: 'Doppelglas' },
  { location: 'Hamburg-Blankenese', kwp: '6,72 kWp', storage: '5,0 kWh Speicher', year: '2023', type: 'Vollschwarz' },
  { location: 'Lüneburg', kwp: '12,00 kWp', storage: '10,0 kWh Speicher', year: '2024', type: 'Doppelglas' },
];

const testimonials = [
  {
    name: 'Familie Müller',
    location: 'Wentorf',
    text: 'Von der Beratung bis zur Inbetriebnahme lief alles reibungslos. Das Team war immer erreichbar und hat alle unsere Fragen geduldig beantwortet. Die Anlage läuft seit dem ersten Tag perfekt.',
    stars: 5,
  },
  {
    name: 'Thomas K.',
    location: 'Norderstedt',
    text: 'Professionelle Beratung, transparente Preisgestaltung und eine saubere Installation. Ich kann pv-hh ohne Einschränkung weiterempfehlen.',
    stars: 5,
  },
  {
    name: 'Familie Schneider',
    location: 'Halstenbek',
    text: 'Wir sind begeistert! Unsere Stromrechnung hat sich mehr als halbiert. Das Investment rechnet sich viel schneller als erwartet.',
    stars: 5,
  },
];

export default function ReferenzenPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-brand-500/20 text-brand-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Referenzen
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Darauf sind wir{' '}
              <span className="text-brand-400">stolz</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Über 700 erfolgreich realisierte Anlagen in Hamburg und Umgebung.
              Jedes Projekt ist ein Zeichen unseres Qualitätsanspruchs.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-slate-600 max-w-3xl leading-relaxed">
            Wir haben uns auf hochwertige Doppelglas-Module und Lithium-Eisenphosphat-Speicher
            spezialisiert. Unsere Anlagen sind auf Langlebigkeit und maximale Effizienz
            ausgelegt – das bestätigen unsere Kunden täglich.
          </p>
        </div>
      </section>

      {/* Project grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-10">Realisierte Projekte</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div key={p.location} className="card hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative w-full h-44 -mx-6 -mt-6 mb-5" style={{ width: 'calc(100% + 3rem)' }}>
                  <Image
                    src={p.location.includes('Norderstedt') || p.location.includes('Halstenbek') || p.location.includes('Hamburg') ? '/images/solar-install-2.jpg' : '/images/solar-install-1.jpg'}
                    alt={`Solaranlage ${p.location}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="font-bold text-slate-900">{p.location}</h3>
                  <span className="text-xs bg-brand-50 text-brand-600 font-semibold px-2 py-1 rounded-full shrink-0">
                    {p.type}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full">{p.kwp}</span>
                  <span className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full">{p.storage}</span>
                  <span className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full">{p.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-10">Was unsere Kunden sagen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="card hover:shadow-lg transition-shadow">
                <div className="flex mb-3">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-brand-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-slate-900 text-sm">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ihr Projekt als nächstes?</h2>
          <p className="text-brand-100 mb-8">
            Kontaktieren Sie uns und werden Sie Teil unserer wachsenden
            Gemeinschaft zufriedener Kunden.
          </p>
          <Link href="/kontakt" className="inline-block bg-white text-brand-600 font-semibold px-8 py-3 rounded-lg hover:bg-brand-50 transition-colors">
            Jetzt Anfrage stellen
          </Link>
        </div>
      </section>
    </>
  );
}
