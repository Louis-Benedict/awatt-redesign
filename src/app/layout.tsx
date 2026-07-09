import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import ClickTracker from '@/components/ClickTracker';
import { GADS_ID, GA4_ID, GTM_ID } from '@/lib/gtag';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    default: 'PV-HH – Photovoltaik & Wärmepumpen in Hamburg',
    template: '%s | PV-HH',
  },
  description:
    'Ihr regionaler Partner für Photovoltaik-Anlagen und Wärmepumpen in Hamburg und Umgebung. Kompetente Beratung, professionelle Installation, hochwertige Qualität.',
  keywords: ['Photovoltaik Hamburg', 'Solaranlage Hamburg', 'Wärmepumpe Hamburg', 'PV-Anlage'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="flex flex-col min-h-screen">
        {/* Google Tag Manager – Fallback fuer Besucher ohne JavaScript */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {/* 1. Google Consent Mode v2 – Standard: alles abgelehnt, bis der Nutzer zustimmt */}
        <Script id="consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'denied',
              wait_for_update: 500
            });
            try {
              if (localStorage.getItem('cookie-consent') === 'accepted') {
                gtag('consent', 'update', {
                  ad_storage: 'granted',
                  ad_user_data: 'granted',
                  ad_personalization: 'granted',
                  analytics_storage: 'granted'
                });
              }
            } catch (e) {}
          `}
        </Script>

        {/* 2. Google-Tag laden */}
        <Script
          id="gtag-base"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GADS_ID}`}
        />
        <Script id="gtag-config" strategy="afterInteractive">
          {`
            gtag('js', new Date());
            gtag('config', '${GADS_ID}');
            gtag('config', '${GA4_ID}');
          `}
        </Script>

        {/* 3. Google Tag Manager – laeuft nach dem Consent-Default */}
        <Script id="gtm-base" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>

        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
        <ClickTracker />
      </body>
    </html>
  );
}
