// Google Ads Tracking – zentrale Konfiguration & Hilfsfunktionen
// Alles, was mit Conversion-Tracking zu tun hat, liegt hier an einer Stelle.

// Konto-Tag-ID (ist für ALLE Conversions dieses Kontos gleich)
export const GADS_ID = 'AW-18245381381';

// Google Analytics 4 – Mess-ID (Property "PV-HH")
export const GA4_ID = 'G-THEB3QM31E';

// Google Tag Manager – Container-ID
// Achtung: In GTM NIEMALS GA4 oder die Ads-Conversions nochmal anlegen.
// Beides laeuft ueber diesen Code. Sonst wird doppelt gezaehlt.
export const GTM_ID = 'GTM-TRPJHNCL';

// Conversion-Labels (pro Conversion-Aktion eine eigene)
// Neue Conversions (Telefon, Solarcheck, ...) kommen später einfach hier dazu.
export const CONVERSIONS = {
  kontaktformular: 'K8OeCM6Bu80cEIXaifxD',
  telefon: 'id1zCMzpo80cEIXaifxD',
  email: 'TamnCNWBpM0cEIXaifxD',
  solarcheck: 'NOcjCLjPo80cEIXaifxD',
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
