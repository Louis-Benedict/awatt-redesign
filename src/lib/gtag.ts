// Google Ads Tracking – zentrale Konfiguration & Hilfsfunktionen
// Alles, was mit Conversion-Tracking zu tun hat, liegt hier an einer Stelle.

// Konto-Tag-ID (ist für ALLE Conversions dieses Kontos gleich)
export const GADS_ID = 'AW-18269096496';

// Conversion-Labels (pro Conversion-Aktion eine eigene)
// Neue Conversions (Telefon, Solarcheck, ...) kommen später einfach hier dazu.
export const CONVERSIONS = {
  kontaktformular: '4aisCK256cQcELCUsYdE',
  telefon: 'jtk7CJqW3sUcELCUsYdE',
  email: '4VUgCPivyMUcELCUsYdE',
  solarcheck: 'SOLARCHECK_CONVERSION_LABEL',
} as const;

// gtag global für TypeScript bekannt machen (sonst meckert der Compiler)
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

// Eine Conversion an Google Ads melden
export function reportConversion(label: string) {
  if (typeof window === 'undefined') return;
  const gtag = window.gtag;
  if (typeof gtag !== 'function') return;
  gtag('event', 'conversion', {
    send_to: `${GADS_ID}/${label}`,
  });
}

// Einwilligung erteilen (vom Cookie-Banner bei "Akzeptieren" aufgerufen)
export function grantConsent() {
  if (typeof window === 'undefined') return;
  const gtag = window.gtag;
  if (typeof gtag !== 'function') return;
  gtag('consent', 'update', {
    ad_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted',
    analytics_storage: 'granted',
  });
}

// Einwilligung verweigern (vom Cookie-Banner bei "Ablehnen" aufgerufen)
export function denyConsent() {
  if (typeof window === 'undefined') return;
  const gtag = window.gtag;
  if (typeof gtag !== 'function') return;
  gtag('consent', 'update', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
  });
}
