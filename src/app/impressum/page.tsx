import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum | PV-Hamburg',
  description: 'Impressum und rechtliche Angaben von pv-hh.de',
};

export default function ImpressumPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Impressum</h1>

      <div className="text-slate-600 space-y-6 leading-relaxed">
        <section>
          <p className="font-bold text-slate-800 mb-2">Angaben gemäß § 5 TMG</p>
          <p>
            Awatt Electronic GmbH<br />
            Weberplatz 6<br />
            23909 Ratzeburg<br />
            Deutschland
          </p>
        </section>

        <section>
          <p className="font-bold text-slate-800 mb-2">Vertreten durch den Geschäftsführer:</p>
          <p>Ahmad Awat Ahmad</p>
        </section>

        <section>
          <p className="font-bold text-slate-800 mb-2">Kontakt:</p>
          <p>
            E-Mail:{' '}
            <a href="mailto:support@awatt-electronic.com" className="hover:text-brand-600 transition-colors">
              support@awatt-electronic.com
            </a>
            <br />
            <strong>Telefonnummer:</strong>{' '}
            <a href="tel:04541 8856891" className="hover:text-brand-600 transition-colors">
              04541 8856891
            </a>
          </p>
        </section>

        <section>
          <p className="font-bold text-slate-800 mb-2">Handelsregister:</p>
          <p>
            Eingetragen im Handelsregister des Amtsgericht Lübeck<br />
            Handelsregisternummer: HRB 27167 HL
          </p>
        </section>

        <section>
          <p className="font-bold text-slate-800 mb-2">
            Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:
          </p>
          <p>DE449951011</p>
        </section>
      </div>
    </div>
  );
}
