import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts, formatDate, categorySlugMap } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog & Ratgeber – Photovoltaik, Wärmepumpe & Solar Hamburg | A3-Watt',
  description:
    'Wissenswertes rund um Photovoltaik, Stromspeicher und Wärmepumpen in Hamburg. Ratgeber, Tipps und aktuelle Informationen für Hausbesitzer.',
  openGraph: {
    title: 'Blog & Ratgeber – A3-Watt Hamburg',
    description:
      'Wissenswertes rund um Photovoltaik, Stromspeicher und Wärmepumpen in Hamburg.',
    type: 'website',
  },
};

const categories = ['Alle', 'Photovoltaik', 'Stromspeicher', 'Wärmepumpe', 'Ratgeber'];

const glassCard: React.CSSProperties = {
  background: 'rgba(255, 255, 255, 0.72)',
  backdropFilter: 'blur(24px) saturate(180%)',
  WebkitBackdropFilter: 'blur(24px) saturate(180%)',
  border: '1px solid rgba(255, 255, 255, 0.6)',
  boxShadow: '0 4px 24px rgba(0,0,0,0.05), 0 1px 4px rgba(0,0,0,0.03), inset 0 1px 0 rgba(255,255,255,0.95)',
};

export default function BlogPage() {
  return (
    <>
      {/* ── Hero ── */}
      <div className="px-3 sm:px-5 pt-4 pb-0" style={{ background: '#F5F8FC' }}>
        <section
          className="relative overflow-hidden flex items-center rounded-2xl py-20 md:py-28"
          style={{ background: 'linear-gradient(135deg, #0A1228 0%, #12244A 60%, #1A3060 100%)' }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(59,125,216,0.18) 0%, transparent 60%)' }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12 w-full">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
                <li><Link href="/" className="hover:text-white/70 transition-colors">Startseite</Link></li>
                <li aria-hidden="true">/</li>
                <li style={{ color: 'rgba(255,255,255,0.7)' }} aria-current="page">Blog</li>
              </ol>
            </nav>
            <div className="max-w-2xl">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5"
                style={{ background: 'rgba(59,125,216,0.20)', color: '#93C5FD', border: '1px solid rgba(59,125,216,0.30)' }}
              >
                Ratgeber & Wissen
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4 text-white">
                Alles rund um{' '}
                <span style={{ color: '#60A5FA' }}>Solar & Energie</span>
              </h1>
              <p className="text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Ratgeber, Tipps und Hintergrundwissen zu Photovoltaik, Stromspeicher und Wärmepumpen in Hamburg.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* ── Category filter ── */}
      <div
        className="sticky top-20 z-40"
        style={{
          background: 'rgba(245,248,252,0.95)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex gap-2 overflow-x-auto">
          {categories.map((cat) => (
            <Link
              key={cat}
              href={cat === 'Alle' ? '/blog' : `/blog/kategorie/${categorySlugMap[cat]}`}
              className="shrink-0 inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium transition-colors"
              style={{
                border: '1px solid rgba(59,125,216,0.25)',
                color: '#64748B',
                background: 'rgba(255,255,255,0.7)',
              }}
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>

      {/* ── Post grid ── */}
      <section style={{ background: '#F5F8FC' }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1"
                style={{
                  ...glassCard,
                  boxShadow: '0 4px 24px rgba(0,0,0,0.05), 0 1px 4px rgba(0,0,0,0.03)',
                }}
              >
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold"
                    style={{ background: 'rgba(59,125,216,0.10)', color: '#3B7DD8', border: '1px solid rgba(59,125,216,0.18)' }}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs" style={{ color: '#94A3B8' }}>
                    {formatDate(post.publishedAt)}
                  </span>
                  <span className="text-xs" style={{ color: '#94A3B8' }}>
                    · {post.readingTimeMinutes} Min.
                  </span>
                </div>

                <h2
                  className="text-base font-bold mb-3 leading-snug transition-colors"
                  style={{ color: '#1E293B' }}
                >
                  {post.title}
                </h2>

                <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: '#64748B' }}>
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: '#3B7DD8' }}>
                  Weiterlesen
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="relative overflow-hidden py-24"
        style={{ background: 'linear-gradient(135deg, #3B7DD8 0%, #2D68C4 60%, #3B7DD8 100%)' }}
      >
        <div className="pointer-events-none absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 30% 30%, rgba(255,255,255,0.15) 0%, transparent 55%)',
        }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-white">
            Jetzt Beratung sichern
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Kostenlos, unverbindlich und innerhalb von 10 Tagen bei Ihnen vor Ort.
          </p>
          <Link
            href="/kontakt"
            className="inline-block font-bold px-9 py-4 rounded-xl transition-all duration-200"
            style={{
              background: 'rgba(255,255,255,0.95)',
              color: '#2D68C4',
              boxShadow: '0 4px 24px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,1)',
            }}
          >
            Kostenlose Beratung sichern
          </Link>
        </div>
      </section>
    </>
  );
}
