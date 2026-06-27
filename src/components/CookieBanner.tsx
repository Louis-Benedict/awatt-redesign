'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { grantConsent, denyConsent } from '@/lib/gtag';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('cookie-consent')) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem('cookie-consent', 'accepted');
    grantConsent();
    setVisible(false);
  }

  function decline() {
    localStorage.setItem('cookie-consent', 'declined');
    denyConsent();
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
      role="dialog"
      aria-label="Cookie-Einstellungen"
    >
      <div
        className="max-w-4xl mx-auto rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-5"
        style={{
          background: '#0C2418',
          border: '1px solid rgba(255,255,255,0.10)',
          boxShadow: '0 8px 40px rgba(0,0,0,0.40)',
        }}
      >
        <p className="text-sm leading-relaxed flex-1" style={{ color: '#94A3B8' }}>
          Wir verwenden Cookies, um Ihnen die bestmögliche Nutzererfahrung zu bieten. Mit der Nutzung unserer Website stimmen Sie der Verwendung von Cookies gemäß unserer{' '}
          <Link href="/datenschutz" className="underline hover:text-white transition-colors" style={{ color: '#86EFAC' }}>
            Datenschutzerklärung
          </Link>{' '}
          zu.
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-5 py-2.5 rounded-xl text-sm font-medium transition-colors"
            style={{
              background: 'rgba(255,255,255,0.08)',
              color: '#94A3B8',
              border: '1px solid rgba(255,255,255,0.12)',
            }}
          >
            Ablehnen
          </button>
          <button
            onClick={accept}
            className="px-5 py-2.5 rounded-xl text-sm font-bold transition-all hover:brightness-110"
            style={{
              background: '#1B8C4D',
              color: '#fff',
              boxShadow: '0 4px 14px rgba(27,140,77,0.4)',
            }}
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
