import type { Metadata } from 'next';
import ProductHero from '@/components/ProductHero';
import ProductCTA from '@/components/ProductCTA';

export const metadata: Metadata = {
  title: 'Notstrombox – Unterbrechungsfreie Stromversorgung | PV-Hamburg',
  description:
    'Echte, unterbrechungsfreie Stromversorgung mit Umschaltung in unter 200 ms – zuverlässig auf Stromausfälle vorbereitet.',
};

export default function NotstromboxPage() {
  return (
    <>
      <ProductHero
        category="Notstrom"
        name="Notstrombox"
        subtitle="Unterbrechungsfreie Stromversorgung"
        image="/images/notstrombox.png"
        paragraphs={[
          'Viele Wechselrichter sind „notstromfähig". Das bedeutet aber oft nur, dass sie theoretisch Notstrom bereitstellen können – meist wird dafür zusätzliche Hardware benötigt.',
          'Unsere Notstrombox sorgt für eine echte, unterbrechungsfreie Stromversorgung mit Umschaltung in unter 200 ms. Der Kunde merkt den Wechsel im Alltag praktisch nicht und sieht ihn nur in der App. Damit ist er zuverlässig auf Stromausfälle vorbereitet.',
        ]}
        specs={[
          'Umschaltung < 200 ms',
          'Unterbrechungsfreie Versorgung',
          'App-Integration',
          'Keine zusätzliche Hardware nötig',
        ]}
      />
      <ProductCTA name="Notstrombox" />
    </>
  );
}
