import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | PV-Hamburg',
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
            <p className="font-medium text-slate-800">PV-Hamburg</p>
            <p>Ahmad Awat Ahmad</p>
            <p>Stintenburger Weg 1</p>
            <p>23909 Ratzeburg</p>
            <p>
              Telefon:{' '}
              <a href="tel:+4945418856891" className="hover:text-brand-600 transition-colors">
                04541 8856891
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
          <h2 className="text-xl font-bold text-slate-800 mb-3">6. Einsatz von Google-Diensten</h2>
          <p>
            Auf dieser Website setzen wir Dienste der Google Ireland Limited, Gordon House,
            Barrow Street, Dublin 4, Irland, ein. Verantwortlich für Nutzer innerhalb der EU
            ist die Google Ireland Limited.
          </p>
          <p className="mt-3">
            Rechtsgrundlage für den Einsatz dieser Dienste ist ausschließlich Ihre
            Einwilligung gemäß Art. 6 Abs. 1 Satz 1 lit. a DSGVO sowie
            &sect; 25 Abs. 1 TDDDG. Die Dienste werden erst geladen und Daten erst
            übermittelt, nachdem Sie im Cookie-Banner zugestimmt haben. Wir verwenden
            hierzu den Google Consent Mode: Vor Ihrer Einwilligung sind sämtliche
            Speicher- und Werbefunktionen deaktiviert.
          </p>
          <p className="mt-3">
            Ihre Einwilligung ist freiwillig und kann jederzeit mit Wirkung für die
            Zukunft widerrufen werden, indem Sie die Cookie-Einstellungen erneut aufrufen
            oder die in Ihrem Browser gespeicherten Cookies löschen. Die Rechtmäßigkeit
            der bis zum Widerruf erfolgten Verarbeitung bleibt unberührt.
          </p>
          <p className="mt-3">
            Wir weisen darauf hin, dass dabei personenbezogene Daten an die Google LLC in
            den USA übermittelt werden können. Die Google LLC ist unter dem
            EU-US Data Privacy Framework zertifiziert. Ergänzend hat Google
            Standardvertragsklauseln nach Art. 46 Abs. 2 lit. c DSGVO abgeschlossen. Es
            besteht dennoch das Risiko, dass US-Behörden auf diese Daten zugreifen, ohne
            dass Ihnen wirksame Rechtsbehelfe zur Verfügung stehen.
          </p>
          <p className="mt-3">
            Weitere Informationen finden Sie in der Datenschutzerklärung von Google unter{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-900 underline"
            >
              policies.google.com/privacy
            </a>
            .
          </p>

          <h3 className="font-semibold text-slate-800 mb-2 mt-6">Google Tag Manager</h3>
          <p>
            Der Google Tag Manager ist ein Werkzeug, mit dem wir die auf dieser Website
            eingesetzten Dienste verwalten und ausliefern. Der Tag Manager selbst erstellt
            keine Nutzerprofile, speichert keine Cookies und erfasst keine
            personenbezogenen Daten zu Analysezwecken. Beim Laden wird jedoch Ihre
            IP-Adresse an Google übertragen, da diese technisch für den Verbindungsaufbau
            erforderlich ist.
          </p>

          <h3 className="font-semibold text-slate-800 mb-2 mt-6">Google Analytics 4</h3>
          <p>
            Google Analytics 4 ist ein Webanalysedienst. Er verwendet Cookies und ähnliche
            Technologien, um die Nutzung unserer Website auszuwerten. Erfasst werden unter
            anderem aufgerufene Seiten, Verweildauer, ungefährer Standort, Endgerätetyp,
            Browser und die Herkunft des Zugriffs. Wir nutzen diese Auswertungen, um unser
            Angebot zu verbessern.
          </p>
          <p className="mt-3">
            Ihre IP-Adresse wird von Google gekürzt, bevor sie gespeichert wird. Eine
            unmittelbare Identifizierung Ihrer Person ist uns anhand dieser Daten nicht
            möglich. Die von uns gesetzte Speicherdauer für Nutzer- und Ereignisdaten
            beträgt 14 Monate.
          </p>
          <p className="mt-3">
            Sie können die Erfassung durch Google Analytics zusätzlich verhindern, indem
            Sie das von Google bereitgestellte Browser-Add-on installieren:{' '}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-900 underline"
            >
              tools.google.com/dlpage/gaoptout
            </a>
            .
          </p>

          <h3 className="font-semibold text-slate-800 mb-2 mt-6">
            Google Ads Conversion-Tracking und Remarketing
          </h3>
          <p>
            Wir bewerben unsere Leistungen über Google Ads. Um den Erfolg dieser
            Werbeanzeigen zu messen, setzen wir das Conversion-Tracking von Google ein.
            Klicken Sie auf eine unserer Anzeigen, speichert Google ein Cookie auf Ihrem
            Endgerät. Führen Sie anschließend auf unserer Website eine bestimmte Handlung
            aus, beispielsweise das Absenden des Kontaktformulars oder des Solarchecks,
            kann Google erkennen, dass diese Handlung auf einen Anzeigenklick zurückgeht.
            Wir erhalten dabei ausschließlich statistische Auswertungen und können Sie
            hierüber nicht persönlich identifizieren. Die Gültigkeit des
            Conversion-Cookies beträgt in der Regel 90 Tage.
          </p>
          <p className="mt-3">
            Ergänzend nutzen wir die Funktion der erweiterten Conversions. Dabei werden
            Angaben, die Sie in unsere Formulare eingeben, insbesondere Ihr Name und Ihre
            E-Mail-Adresse, vor der Übertragung an Google in Ihrem Browser
            unwiderruflich verschlüsselt (gehasht). Google nutzt diese verschlüsselten
            Werte ausschließlich, um Conversions dem ursprünglichen Anzeigenklick besser
            zuzuordnen. Auch diese Übermittlung erfolgt nur nach Ihrer Einwilligung.
          </p>
          <p className="mt-3">
            Darüber hinaus ermöglichen die eingesetzten Google-Dienste das sogenannte
            Remarketing. Dabei können Ihnen auf anderen Websites Werbeanzeigen zu unseren
            Leistungen angezeigt werden, sofern Sie unsere Website zuvor besucht haben.
          </p>
          <p className="mt-3">
            Ihre Einstellungen zu personalisierter Werbung können Sie jederzeit anpassen
            unter{' '}
            <a
              href="https://adssettings.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-900 underline"
            >
              adssettings.google.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">7. Datensicherheit</h2>
          <p>
            Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen,
            verwenden wir dem aktuellen Stand der Technik entsprechende
            Verschlüsselungsverfahren (z. B. SSL) über HTTPS.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">8. Aktualität und Änderung dieser Datenschutzerklärung</h2>
          <p>
            Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Juli 2026.
            Durch die Weiterentwicklung unserer Website und Angebote oder aufgrund
            geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es
            notwendig werden, diese Datenschutzerklärung zu ändern.
          </p>
        </section>
      </div>
    </div>
  );
}
