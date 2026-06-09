import type { Metadata } from 'next';
import ProductHero from '@/components/ProductHero';
import ProductCTA from '@/components/ProductCTA';

export const metadata: Metadata = {
  title: 'SOLYCO R-BG 108nBC.6 – 485 Wp Full-Black Solarmodul | PV-Hamburg',
  description:
    'Full-Black Glas-Glas Modul mit 485 Wp, Back-Contact-Technologie und bis zu 23,8 % Wirkungsgrad.',
};

export default function SolycoPage() {
  return (
    <>
      <ProductHero
        category="Solarmodule"
        name="SOLYCO R-BG 108nBC.6"
        subtitle="485 Wp Full-Black Solarmodul"
        image="/images/solyco-r-bg.png"
        paragraphs={[
          'Das SOLYCO Full-Black Glas-Glas Modul kombiniert starke Leistung mit hochwertiger Optik. Mit 485 Wp, Back-Contact-Technologie und bis zu 23,8 % Wirkungsgrad sorgt es für hohe Erträge auf dem Dach.',
          'Durch das elegante schwarze Design eignet sich das Modul besonders für moderne PV-Anlagen mit hohem Anspruch an Leistung und Ästhetik.',
        ]}
        specs={[
          '485 Wp Nennleistung',
          'Bis zu 23,8 % Wirkungsgrad',
          'Back-Contact-Technologie',
          'Glas-Glas Bauweise',
          'Full-Black Design',
        ]}
      />
      <ProductCTA name="SOLYCO R-BG 108nBC.6" />
    </>
  );
}
