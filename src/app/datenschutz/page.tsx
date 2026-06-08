import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | PV-Hamburg Elektrotechnik',
  description: 'Datenschutzerklärung von pv-hh.de gemäß DSGVO.',
};

export default function DatenschutzPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">Datenschutzerklärung</h1>
      <p className="text-slate-500 text-sm mb-8">Stand: Juni 2026</p>

      <div className="space-y-10 text-sm text-slate-600 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">1. Verantwortlicher</h2>
          <p>
            Verantwortlicher im Sinne der Datenschutzgesetze, insbesondere der
            EU-Datenschutzgrundverordnung (DSGVO), ist:
          </p>
          <div className="mt-2 space-y-0.5">
            <p className="font-medium text-slate-800">PV-Hamburg Elektrotechnik</p>
            <p>Ahmad Awat Ahmad</p>
            <p>Stintenburger Weg 1</p>
            <p>23909 Ratzeburg</p>
            <p>
              Telefon:{' '}
              <a href="tel:+4917684412063" className="hover:text-brand-600 transition-colors">
                0176 844 12063
              </a>
            </p>
            <p>
              E-Mail:{' '}
              <a href="mailto:anfrage@pv-hh.de" className="hover:text-brand-600 transition-colors">
                anfrage@pv-hh.de
              </a>
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">2. Ihre Rechte als betroffene Person</h2>
          <p className="mb-3">
            Sie können unter der oben angegebenen Adresse folgende Rechte geltend machen:
          </p>
          <ul className="space-y-1.5 list-disc list-inside">
            <li>Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung</li>
            <li>Berichtigung unrichtiger personenbezogener Daten</li>
            <li>Löschung Ihrer bei uns gespeicherten Daten</li>
            <li>Einschränkung der Datenverarbeitung</li>
            <li>Widerspruch gegen die Verarbeitung Ihrer Daten</li>
            <li>Datenübertragbarkeit</li>
          </ul>
          <p className="mt-3">
            Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde
            über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">3. Erhebung und Verarbeitung personenbezogener Daten</h2>
          <h3 className="font-semibold text-slate-800 mb-2">Besuch unserer Website</h3>
          <p>
            Bei der bloß informatorischen Nutzung der Website werden folgende Daten
            verarbeitet: IP-Adresse, Datum und Uhrzeit des Abrufs, Zeitzonendifferenz,
            Inhalt der Anforderung, HTTP-Statuscode, jeweils übertragene Datenmenge,
            Website, von der die Anforderung kommt, und Informationen zu Browser und
            Betriebssystem.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">4. Kontaktformular</h2>
          <p>
            Wenn Sie uns über das Kontaktformular eine Anfrage zukommen lassen,
            werden Ihre Angaben aus dem Formular inklusive der von Ihnen dort
            angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den
            Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
            nicht ohne Ihre Einwilligung weiter.
          </p>
          <p className="mt-3">
            Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt
            ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">5. Cookies</h2>
          <p>
            Unsere Website verwendet Cookies. Dabei handelt es sich um kleine
            Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert.
            Cookies helfen uns, unser Angebot nutzerfreundlicher, effektiver und
            sicherer zu machen.
          </p>
          <p className="mt-3">
            Einige Cookies sind &ldquo;Session-Cookies&rdquo;. Solche Cookies werden nach Ende
            Ihrer Browser-Sitzung von selbst gelöscht. Hingegen bleiben andere
            Cookies auf Ihrem Endgerät bestehen, bis Sie diese selbst löschen.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">6. Datensicherheit</h2>
          <p>
            Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen,
            verwenden wir dem aktuellen Stand der Technik entsprechende
            Verschlüsselungsverfahren (z. B. SSL) über HTTPS.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">7. Aktualität und Änderung dieser Datenschutzerklärung</h2>
          <p>
            Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Juni 2026.
            Durch die Weiterentwicklung unserer Website und Angebote oder aufgrund
            geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es
            notwendig werden, diese Datenschutzerklärung zu ändern.
          </p>
        </section>
      </div>
    </div>
  );
}
