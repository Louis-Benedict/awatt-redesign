'use client';

import { useState } from 'react';
import Link from 'next/link';
import { reportConversion, CONVERSIONS } from '@/lib/gtag';

export default function SolarcheckForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    const res = await fetch('/api/solarcheck', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus('success');
      form.reset();
      reportConversion(CONVERSIONS.solarcheck);
    } else {
      setStatus('error');
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="roofArea" className="block text-sm font-medium text-slate-700 mb-1.5">
          Geschätzte Dachfläche (m²)
        </label>
        <input
          type="number"
          id="roofArea"
          name="roofArea"
          required
          min={1}
          className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
          placeholder="z. B. 40"
        />
      </div>
      <div>
        <label htmlFor="orientation" className="block text-sm font-medium text-slate-700 mb-1.5">
          Ausrichtung des Dachs
        </label>
        <select
          id="orientation"
          name="orientation"
          required
          className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
        >
          <option value="">Bitte wählen…</option>
          <option value="Süd">Süd</option>
          <option value="Südwest / Südost">Südwest / Südost</option>
          <option value="West / Ost">West / Ost</option>
          <option value="Nord">Nord</option>
        </select>
      </div>
      <div>
        <label htmlFor="consumption" className="block text-sm font-medium text-slate-700 mb-1.5">
          Jährlicher Stromverbrauch (kWh)
        </label>
        <input
          type="number"
          id="consumption"
          name="consumption"
          required
          min={1}
          className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
          placeholder="z. B. 4000"
        />
      </div>
      <div>
        <label htmlFor="zip" className="block text-sm font-medium text-slate-700 mb-1.5">
          Postleitzahl
        </label>
        <input
          type="text"
          id="zip"
          name="zip"
          required
          pattern="\d{5}"
          maxLength={5}
          className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
          placeholder="z. B. 22113"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1.5">
            Vorname
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
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
            required
            className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
            placeholder="Mustermann"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
          Ihre E-Mail-Adresse
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
          placeholder="max@beispiel.de"
        />
      </div>
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="privacy"
          name="privacy"
          required
          className="mt-0.5 w-4 h-4 accent-brand-500"
        />
        <label htmlFor="privacy" className="text-sm text-slate-600">
          Ich habe die{' '}
          <Link href="/datenschutz" className="text-brand-600 hover:underline">
            Datenschutzerklärung
          </Link>{' '}
          gelesen und stimme der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage zu.
        </label>
      </div>

      {status === 'success' && (
        <p className="text-sm text-green-600 font-medium">
          Vielen Dank! Wir haben Ihren Solarcheck erhalten und melden uns in Kürze bei Ihnen.
        </p>
      )}
      {status === 'error' && (
        <p className="text-sm text-red-600 font-medium">
          Leider ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt an anfrage@pv-hh.de.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary w-full text-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Wird gesendet…' : 'Solarcheck starten'}
      </button>
    </form>
  );
}
