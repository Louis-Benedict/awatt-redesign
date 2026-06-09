import type { Metadata } from 'next';
import KontaktForm from '@/components/KontaktForm';

export const metadata: Metadata = {
  title: 'Kontakt – Sprechen Sie uns an',
  description:
    'Nehmen Sie Kontakt mit uns auf. Kostenlose und unverbindliche Beratung zu Photovoltaik und Wärmepumpen in Hamburg.',
};

export default async function KontaktPage({
  searchParams,
}: {
  searchParams: Promise<{ betreff?: string }>;
}) {
  const { betreff } = await searchParams;
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-brand-500/20 text-brand-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Kontakt
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Sprechen Sie uns an
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Sie haben Fragen oder möchten ein Angebot? Wir freuen uns auf Ihre
              Nachricht und melden uns innerhalb von 24 Stunden bei Ihnen.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Kontaktdaten</h2>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Adresse</div>
                    <div className="text-slate-600 text-sm mt-0.5">Hamburg und Umgebung</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Telefon</div>
                    <a href="tel:+4917684412063" className="text-brand-600 text-sm mt-0.5 hover:underline block">
                      0176 844 12063
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">E-Mail</div>
                    <a href="mailto:anfrage@pv-hh.de" className="text-brand-600 text-sm mt-0.5 hover:underline block">
                      anfrage@pv-hh.de
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Öffnungszeiten</div>
                    <div className="text-slate-600 text-sm mt-0.5">
                      Mo–Fr: 8:00 – 18:00 Uhr<br />
                      Sa: 9:00 – 14:00 Uhr
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Nachricht senden</h2>
              <KontaktForm defaultBetreff={betreff ?? ''} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
