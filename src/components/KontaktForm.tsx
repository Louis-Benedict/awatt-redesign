'use client';

export default function KontaktForm({ defaultBetreff = '' }: { defaultBetreff?: string }) {
  return (
    <form className="space-y-5">
      {/* Betreff */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1.5">
          Leistung
        </label>
        <select
          id="subject"
          name="subject"
          defaultValue={defaultBetreff}
          className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
        >
          <option value="">Bitte wählen…</option>
          <optgroup label="Pakete">
            <option value="paket-s">Paket S</option>
            <option value="paket-m">Paket M</option>
            <option value="paket-l">Paket L</option>
            <option value="paket-xl">Paket XL</option>
            <option value="individuelles-paket">Individuelles Paket</option>
          </optgroup>
          <optgroup label="Allgemein">
            <option value="photovoltaik">Photovoltaik</option>
            <option value="waermepumpe">Wärmepumpe</option>
            <option value="sonstiges">Sonstiges</option>
          </optgroup>
        </select>
      </div>

      {/* Name */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1.5">
            Vorname
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
            placeholder="Max"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1.5">
            Nachname
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
            placeholder="Mustermann"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
          E-Mail-Adresse
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
          placeholder="max@beispiel.de"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
          Telefon <span className="text-slate-400 font-normal">(optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
          placeholder="0176 ..."
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
          Ihre Nachricht
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-none"
          placeholder="Schildern Sie Ihr Vorhaben oder stellen Sie Ihre Fragen…"
        />
      </div>

      {/* Privacy */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="privacy"
          name="privacy"
          className="mt-0.5 w-4 h-4 accent-brand-500"
        />
        <label htmlFor="privacy" className="text-sm text-slate-600">
          Ich habe die{' '}
          <a href="/datenschutz" className="text-brand-600 hover:underline">
            Datenschutzerklärung
          </a>{' '}
          gelesen und stimme der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage zu.
        </label>
      </div>

      <button type="submit" className="btn-primary w-full text-center">
        Nachricht senden
      </button>
    </form>
  );
}
