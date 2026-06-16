import Link from 'next/link';

export default function ProductCTA({ name }: { name: string }) {
  return (
    <section
      className="relative overflow-hidden py-20"
      style={{ background: 'linear-gradient(135deg, #1B8C4D 0%, #1B6B38 60%, #1B8C4D 100%)' }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 30% 30%, rgba(255,255,255,0.15) 0%, transparent 55%)',
        }}
      />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
          Interesse an {name}?
        </h2>
        <p className="mb-8" style={{ color: 'rgba(255,255,255,0.75)' }}>
          Wir beraten Sie kostenlos und unverbindlich – direkt von unseren Experten vor Ort.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/kontakt"
            className="inline-block font-bold px-9 py-4 rounded-xl transition-all duration-200"
            style={{
              background: 'rgba(255,255,255,0.95)',
              color: '#1B6B38',
              boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
            }}
          >
            Kostenlose Beratung sichern
          </Link>
          <a
            href="tel:+4945418856891"
            className="inline-flex items-center gap-2 font-bold px-9 py-4 rounded-xl text-white transition-all duration-200"
            style={{
              background: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.35)',
            }}
          >
            Jetzt anrufen
          </a>
        </div>
      </div>
    </section>
  );
}
