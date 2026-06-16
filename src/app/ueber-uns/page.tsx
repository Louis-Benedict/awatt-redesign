import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Timer, UserCheck, Award, BadgeDollarSign } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Über Uns – Ihr Energieprofi aus Hamburg',
  description:
    'Seit 2022 installieren wir Photovoltaikanlagen und Wärmepumpen in Hamburg. Über 250 zufriedene Kunden, lokales Team, Qualität und Zuverlässigkeit.',
};

const values = [
  { icon: <Timer className="w-6 h-6" />, title: 'Kurze Wartezeiten', desc: 'Von der Auftragserteilung bis zur fertig installierten Anlage in der Regel unter 4 Wochen. Wir planen effizient und halten unsere Termine ein.' },
  { icon: <UserCheck className="w-6 h-6" />, title: 'Persönlicher Ansprechpartner', desc: 'Sie haben immer einen festen Ansprechpartner vor Ort in Hamburg, der Sie kennt und Ihr Projekt von Anfang bis Ende begleitet.' },
  { icon: <Award className="w-6 h-6" />, title: 'Hochwertige Systeme', desc: 'Wir setzen ausschließlich auf geprüfte Qualitätsprodukte führender Hersteller, die wir ausgiebig getestet und für tauglich befunden haben.' },
  { icon: <BadgeDollarSign className="w-6 h-6" />, title: 'Bestpreisgarantie', desc: 'Transparente Angebote ohne versteckte Kosten. Wenn Sie ein günstigeres vergleichbares Angebot finden, gehen wir mit dem Preis mit.' },
];

const milestones = [
  { year: '2022', event: 'Gründung des Unternehmens in Hamburg' },
  { year: '2023', event: '30. installierte Photovoltaikanlage' },
  { year: '2024', event: 'Erweiterung des Portfolios um Wärmepumpen' },
  { year: '2025', event: 'Über 250 realisierte Projekte in der Region' },
];

export default function UeberUnsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-brand-500/20 text-brand-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Über Uns
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Ihr Profi rund um{' '}
              <span className="text-brand-400">Energie</span>
            </h1>
            <p className="text-xl text-slate-300 mb-4 leading-relaxed">
              Über 250 Anlagen – Ihre Energiezukunft beginnt mit uns.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Seit 2022 sind wir Ihr vertrauensvoller Partner für Photovoltaik und
              Wärmepumpen in Hamburg und der gesamten Metropolregion.
            </p>
          </div>
        </div>
      </section>

      {/* Company story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="section-title">Wer wir sind</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Wir wurden 2022 mit einer klaren Mission gegründet: Menschen in Hamburg und
                Umgebung beim Übergang zu erneuerbaren Energien zu begleiten – kompetent,
                zuverlässig und zu fairen Konditionen.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Seitdem haben wir über 250 Photovoltaikanlagen und Wärmepumpen installiert
                und dabei stets auf Qualität, Zuverlässigkeit und maßgeschneiderte
                Energielösungen gesetzt.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Als lokales Unternehmen kennen wir die besonderen Bedingungen in Hamburg:
                das Wetter, die Bauvorschriften und die Förderprogramme des Landes. Das
                macht uns zum idealen Partner für Ihr Energieprojekt.
              </p>
            </div>

            {/* Photo + Timeline */}
            <div>
              <div className="relative h-52 w-full rounded-xl overflow-hidden mb-8">
                <Image
                  src="/images/solar-install-2.jpg"
                  alt="Unser Team bei der Installation"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">Unsere Geschichte</h3>
              <div className="space-y-6">
                {milestones.map((m, i) => (
                  <div key={m.year} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-brand-500 text-white font-bold text-xs flex items-center justify-center shrink-0">
                        {m.year.slice(2)}
                      </div>
                      {i < milestones.length - 1 && (
                        <div className="w-0.5 bg-brand-200 flex-1 mt-2" />
                      )}
                    </div>
                    <div className="pb-6">
                      <div className="text-sm font-semibold text-brand-600">{m.year}</div>
                      <div className="text-slate-700">{m.event}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Das macht uns aus</h2>
            <p className="section-subtitle mx-auto">
              Vier Prinzipien, die unsere Arbeit jeden Tag leiten.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card hover:shadow-lg transition-shadow text-center">
                <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-500 flex items-center justify-center mx-auto mb-4">{v.icon}</div>
                <h3 className="font-bold text-slate-900 mb-3">{v.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">Unser Einsatzgebiet</h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Als Hamburger Unternehmen sind wir in der gesamten Metropolregion tätig.
              Kurze Wege bedeuten schnelle Reaktionszeiten, persönliche Ansprechpartner
              vor Ort und zuverlässige Lösungen für unsere Kunden.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Hamburg', 'Schleswig-Holstein', 'Norderstedt', 'Reinbek', 'Halstenbek', 'Lübeck', 'Kiel', 'Geesthacht'].map((city) => (
                <span key={city} className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Lernen Sie uns kennen</h2>
          <p className="text-brand-100 mb-8">
            Vereinbaren Sie ein kostenloses und unverbindliches Beratungsgespräch –
            persönlich, telefonisch oder per Video.
          </p>
          <Link href="/kontakt" className="inline-block bg-white text-brand-600 font-semibold px-8 py-3 rounded-lg hover:bg-brand-50 transition-colors">
            Termin vereinbaren
          </Link>
        </div>
      </section>
    </>
  );
}
