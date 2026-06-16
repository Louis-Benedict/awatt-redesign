import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
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
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
