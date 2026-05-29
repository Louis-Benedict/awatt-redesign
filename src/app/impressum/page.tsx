import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum und rechtliche Angaben von pv-hh.de',
};

export default function ImpressumPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Impressum</h1>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-slate-800 mb-4">Angaben gemäß § 5 TMG</h2>
        <div className="text-slate-600 space-y-1">
          <p className="font-semibold text-slate-900">[Firmenname]</p>
          <p>[Straße und Hausnummer]</p>
          <p>[PLZ] Hamburg</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-slate-800 mb-4">Kontakt</h2>
        <div className="text-slate-600 space-y-1">
          <p>Telefon: 040 - XXXX XXXX</p>
          <p>E-Mail: info@pv-hh.de</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-slate-800 mb-4">Vertreten durch</h2>
        <p className="text-slate-600">[Name des Geschäftsführers]</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-slate-800 mb-4">Registereintrag</h2>
        <div className="text-slate-600 space-y-1">
          <p>Eingetragen im Handelsregister</p>
          <p>Registergericht: Amtsgericht Hamburg</p>
          <p>Registernummer: [HRB XXXXX]</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-slate-800 mb-4">Umsatzsteuer-ID</h2>
        <p className="text-slate-600">
          Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE[XXXXXXXXX]
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-slate-800 mb-4">
          Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
        </h2>
        <div className="text-slate-600 space-y-1">
          <p>[Name]</p>
          <p>[Adresse]</p>
          <p>Hamburg</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-slate-800 mb-4">Haftungsausschluss</h2>
        <div className="text-slate-600 space-y-4 text-sm leading-relaxed">
          <div>
            <h3 className="font-semibold text-slate-800 mb-2">Haftung für Inhalte</h3>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf
              diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10
              TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
              gespeicherte fremde Informationen zu überwachen.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800 mb-2">Haftung für Links</h3>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte
              wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch
              keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der
              jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800 mb-2">Urheberrecht</h3>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
              Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
              Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors
              bzw. Erstellers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
