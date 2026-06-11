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
        image="/images/solyco-r-bg.webp"
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
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <a
            href="/docs/datenblatt-solyco-r-bg.pdf"
            download
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
            style={{ background: '#1B6B38', color: '#fff', boxShadow: '0 4px 16px rgba(27,107,56,0.25)' }}
          >
            <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0l-4-4m4 4l4-4M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2" />
            </svg>
            Datenblatt SOLYCO R-BG 108nBC.6 herunterladen (PDF)
          </a>
        </div>
      </section>

      <ProductCTA name="SOLYCO R-BG 108nBC.6" />
    </>
  );
}
