import type { Metadata } from 'next';
import Link from 'next/link';
import { Zap, Lock, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kostenloser Solarcheck – Potenzial Ihres Dachs ermitteln',
  description:
    'Ermitteln Sie in wenigen Schritten das Solarpotenzial Ihres Dachs und erfahren Sie, wie viel Sie mit einer PV-Anlage sparen können.',
};

const faqItems = [
  {
    q: 'Was ist der Solarcheck und was kostet er?',
    a: 'Der Solarcheck ist eine kostenlose und unverbindliche Erstanalyse Ihres Solarpotenzials. Sie geben einige Eckdaten zu Ihrem Dach und Verbrauch an – wir berechnen daraus, wie groß Ihre Anlage sein sollte und wie viel Sie jährlich sparen könnten.',
  },
  {
    q: 'Welche Daten benötige ich für den Solarcheck?',
    a: 'Sie benötigen eine grobe Schätzung Ihrer nutzbaren Dachfläche (in m²), die Ausrichtung Ihres Dachs (Süd, Ost/West etc.), Ihren jährlichen Stromverbrauch (steht auf Ihrer Stromrechnung) und Ihre Postleitzahl.',
  },
  {
    q: 'Was passiert nach dem Solarcheck?',
    a: 'Nach dem Solarcheck erhalten Sie eine individuelle Auswertung. Im nächsten Schritt vereinbaren wir einen kostenlosen Vor-Ort-Termin, bei dem wir Ihr Dach begutachten und ein verbindliches Festpreisangebot erstellen.',
  },
  {
    q: 'Ist der Solarcheck auch für ältere Häuser geeignet?',
    a: 'Ja. Wir prüfen bei jedem Haus individuell die Eignung – unabhängig vom Baujahr. Entscheidend sind der Zustand des Dachs, die Ausrichtung und die statische Tragfähigkeit, die wir beim Vor-Ort-Termin beurteilen.',
  },
];

const steps = [
  { num: 1, label: 'Dachfläche & Ausrichtung', desc: 'Wie groß ist Ihre nutzbare Dachfläche und in welche Himmelsrichtung zeigt sie?' },
  { num: 2, label: 'Stromverbrauch', desc: 'Wie hoch ist Ihr jährlicher Stromverbrauch? (kWh/Jahr)' },
  { num: 3, label: 'Standort', desc: 'In welcher Region befinden Sie sich?' },
  { num: 4, label: 'Ihr persönliches Ergebnis', desc: 'Wir berechnen Ihr Potenzial und erstellen ein individuelles Angebot.' },
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

export default function SolarcheckPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-600 to-brand-800 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Kostenlos & unverbindlich
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Ihr persönlicher Solarcheck
          </h1>
          <p className="text-xl text-brand-100 max-w-2xl mx-auto leading-relaxed">
            Erfahren Sie in wenigen Minuten, wie viel Potenzial Ihr Dach hat
            und wie viel Sie mit einer Photovoltaikanlage jährlich sparen könnten.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">So funktioniert der Solarcheck</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-14 h-14 rounded-full bg-brand-500 text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{step.label}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simplified check form */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Solarcheck starten</h2>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Geschätzte Dachfläche (m²)
                </label>
                <input
                  type="number"
                  className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                  placeholder="z. B. 40"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Ausrichtung des Dachs
                </label>
                <select className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500">
                  <option value="">Bitte wählen…</option>
                  <option>Süd</option>
                  <option>Südwest / Südost</option>
                  <option>West / Ost</option>
                  <option>Nord</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Jährlicher Stromverbrauch (kWh)
                </label>
                <input
                  type="number"
                  className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                  placeholder="z. B. 4000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Postleitzahl
                </label>
                <input
                  type="text"
                  className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                  placeholder="z. B. 22113"
                  maxLength={5}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Ihre E-Mail-Adresse
                </label>
                <input
                  type="email"
                  className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                  placeholder="max@beispiel.de"
                />
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-0.5 w-4 h-4 accent-brand-500" />
                <label className="text-sm text-slate-600">
                  Ich stimme der{' '}
                  <Link href="/datenschutz" className="text-brand-600 hover:underline">
                    Datenschutzerklärung
                  </Link>{' '}
                  zu.
                </label>
              </div>
              <button type="submit" className="btn-primary w-full text-center">
                Solarcheck starten
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
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

      {/* Info boxes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { icon: <Zap  className="w-6 h-6" />, title: 'Sofortiges Ergebnis', desc: 'Sie erhalten direkt eine erste Einschätzung Ihres Solarpotenzials.' },
              { icon: <Lock className="w-6 h-6" />, title: '100 % kostenlos',     desc: 'Der Solarcheck ist vollständig kostenlos und unverbindlich.' },
              { icon: <Phone className="w-6 h-6" />, title: 'Persönliche Beratung', desc: 'Im Anschluss beraten wir Sie gerne persönlich zu Ihrer Anlage.' },
            ].map((item) => (
              <div key={item.title} className="card">
                <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-500 flex items-center justify-center mx-auto mb-3">{item.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
