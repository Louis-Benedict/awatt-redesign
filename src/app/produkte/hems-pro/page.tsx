import type { Metadata } from 'next';
import ProductHero from '@/components/ProductHero';
import ProductCTA from '@/components/ProductCTA';

export const metadata: Metadata = {
  title: 'HEMS PRO – Energiemanagementsystem | PV-Hamburg',
  description:
    'HEMS PRO verbindet PV-Anlage, Speicher, Wallbox und Wärmepumpe zu einem intelligenten Energiesystem ohne Abo-Kosten.',
};

export default function HEMSProPage() {
  return (
    <>
      <ProductHero
        category="Energiemanagement"
        name="HEMS PRO"
        subtitle="Energiemanagementsystem"
        image="/images/hems-pro.png"
        paragraphs={[
          'HEMS PRO verbindet PV-Anlage, Speicher, Wallbox und Wärmepumpe zu einem intelligenten Energiesystem. Es optimiert den Eigenverbrauch, unterstützt dynamische Stromtarife und ist für §14a EnWG sowie §9 EEG vorbereitet.',
          'Das System arbeitet lokal, ohne Abo-Kosten und ermöglicht eine zukunftssichere Steuerung moderner Energieanlagen.',
        ]}
        specs={[
          '§14a EnWG vorbereitet',
          '§9 EEG kompatibel',
          'Dynamische Stromtarife',
          'Lokale Verarbeitung',
          'Keine Abo-Kosten',
        ]}
      />
      <ProductCTA name="HEMS PRO" />
    </>
  );
}
