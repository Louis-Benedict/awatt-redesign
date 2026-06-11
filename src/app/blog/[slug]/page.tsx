import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  blogPosts,
  getBlogPost,
  formatDate,
  categorySlugMap,
  type ContentBlock,
} from '@/lib/blog';
import BlogTOC from '@/components/BlogTOC';

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

// ── Static generation ──────────────────────────────────────────────────────────

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `https://pv-hh.de/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.publishedAt,
      url: `https://pv-hh.de/blog/${post.slug}`,
      siteName: 'PV-Hamburg',
    },
  };
}

// ── Content renderer ───────────────────────────────────────────────────────────

const glassCard: React.CSSProperties = {
  background: 'rgba(255, 255, 255, 0.82)',
  backdropFilter: 'blur(24px) saturate(180%)',
  WebkitBackdropFilter: 'blur(24px) saturate(180%)',
  border: '1px solid rgba(255, 255, 255, 0.7)',
  boxShadow: '0 8px 40px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.95)',
};

function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p key={index} className="leading-relaxed" style={{ color: '#475569' }}>
          {block.text}
        </p>
      );
    case 'h2':
      return (
        <h2
          key={index}
          id={slugify(block.text)}
          className="text-xl font-bold mt-10 mb-3 first:mt-0 scroll-mt-32"
          style={{ color: '#1E293B' }}
        >
          {block.text}
        </h2>
      );
    case 'list':
      return (
        <ul key={index} className="space-y-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <svg
                className="w-4 h-4 mt-0.5 shrink-0"
                style={{ color: '#1B8C4D' }}
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="leading-snug" style={{ color: '#475569' }}>{item}</span>
            </li>
          ))}
        </ul>
      );
    case 'callout':
      return (
        <div
          key={index}
          className="rounded-xl p-5"
          style={{
            background: 'rgba(27,140,77,0.07)',
            border: '1px solid rgba(27,140,77,0.18)',
          }}
        >
          <p className="text-sm leading-relaxed font-medium" style={{ color: '#1E40AF' }}>
            {block.text}
          </p>
        </div>
      );
  }
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    inLanguage: 'de-DE',
    url: `https://pv-hh.de/blog/${post.slug}`,
  };

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const tocItems = post.content
    .filter((b): b is { type: 'h2'; text: string } => b.type === 'h2')
    .map((b) => ({ id: slugify(b.text), text: b.text }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Article header ── */}
      <div className="px-3 sm:px-5 pt-4 pb-0" style={{ background: '#F3F9F5' }}>
        <section
          className="relative overflow-hidden rounded-2xl py-20 md:py-24"
          style={{ background: 'linear-gradient(135deg, #0A1228 0%, #12244A 60%, #1A3060 100%)' }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(27,140,77,0.18) 0%, transparent 60%)' }}
          />
          <div className="relative z-10 max-w-4xl mx-auto px-8 sm:px-12 text-center">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center justify-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
                <li><Link href="/" className="hover:text-white/70 transition-colors">Startseite</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/blog" className="hover:text-white/70 transition-colors">Blog</Link></li>
                <li aria-hidden="true">/</li>
                <li className="truncate max-w-[180px] sm:max-w-none" style={{ color: 'rgba(255,255,255,0.6)' }} aria-current="page">
                  {post.title}
                </li>
              </ol>
            </nav>

            <div className="flex flex-wrap items-center justify-center gap-3 mb-5">
              <Link
                href={`/blog/kategorie/${categorySlugMap[post.category] ?? ''}`}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold transition-opacity hover:opacity-80"
                style={{ background: 'rgba(27,140,77,0.20)', color: '#6DCFA2', border: '1px solid rgba(27,140,77,0.30)' }}
              >
                {post.category}
              </Link>
              <time dateTime={post.publishedAt} className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
                {formatDate(post.publishedAt)}
              </time>
              <span className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
                · {post.readingTimeMinutes} Min. Lesezeit
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-white">
              {post.title}
            </h1>
          </div>
        </section>
      </div>

      {/* ── Article body ── */}
      <section style={{ background: '#F3F9F5' }} className="py-16">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-12 xl:gap-16">

            {/* ── Sticky TOC ── */}
            <aside className="hidden lg:block w-[220px] shrink-0 self-start sticky top-28">
              <BlogTOC items={tocItems} />
            </aside>

            {/* ── Main content ── */}
            <div className="w-full lg:w-[740px] lg:shrink-0">
              <article className="rounded-2xl p-8 sm:p-12" style={glassCard}>
                <div className="space-y-5">
                  {post.content.map((block, i) => renderBlock(block, i))}
                </div>
              </article>
            </div>

          </div>

          {/* ── CTA ── */}
          <div
            className="mt-16 relative overflow-hidden rounded-2xl px-8 py-12 sm:px-12 sm:py-16"
            style={{ background: 'linear-gradient(135deg, #1B8C4D 0%, #1B6B38 60%, #1B8C4D 100%)' }}
          >
            <div className="pointer-events-none absolute inset-0" style={{
              background: 'radial-gradient(ellipse at 30% 30%, rgba(255,255,255,0.15) 0%, transparent 55%)',
            }} />
            <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  Kostenlose Beratung
                </p>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  Jetzt Solaranlage anfragen
                </h2>
                <p className="text-sm leading-relaxed max-w-lg" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  Unverbindlich, kostenlos und innerhalb von 10 Tagen bei Ihnen vor Ort.
                </p>
              </div>
              <Link
                href="/kontakt"
                className="shrink-0 inline-flex items-center justify-center rounded-xl font-bold px-8 py-3.5 text-sm transition-all"
                style={{
                  background: 'rgba(255,255,255,0.95)',
                  color: '#1B6B38',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
                }}
              >
                Kostenlose Beratung sichern
              </Link>
            </div>
          </div>

          {/* ── Weitere Artikel ── */}
          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="text-lg font-bold mb-6" style={{ color: '#1E293B' }}>
                Weitere Artikel
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group flex flex-col rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1"
                    style={{
                      background: 'rgba(255,255,255,0.72)',
                      backdropFilter: 'blur(24px) saturate(180%)',
                      WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                      border: '1px solid rgba(255,255,255,0.6)',
                      boxShadow: '0 4px 24px rgba(0,0,0,0.05)',
                    }}
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold"
                        style={{ background: 'rgba(27,140,77,0.10)', color: '#1B8C4D', border: '1px solid rgba(27,140,77,0.18)' }}
                      >
                        {r.category}
                      </span>
                      <span className="text-xs" style={{ color: '#94A3B8' }}>{formatDate(r.publishedAt)}</span>
                      <span className="text-xs" style={{ color: '#94A3B8' }}>· {r.readingTimeMinutes} Min.</span>
                    </div>
                    <h3 className="text-base font-bold mb-3 leading-snug flex-1" style={{ color: '#1E293B' }}>
                      {r.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: '#1B8C4D' }}>
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
          )}

          {/* ── Back to blog ── */}
          <div className="mt-10 pb-6 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
              style={{ color: '#94A3B8' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Zurück zum Blog
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
