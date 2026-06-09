import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{ background: '#0F172A', color: '#CBD5E1' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-5">
              <Image
                src="/logo.png"
                alt="PV Hamburg"
                width={64}
                height={64}
                className="h-14 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>
              Ihr regionaler Partner für Photovoltaik und Wärmepumpen in Hamburg und Umgebung.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-widest" style={{ color: '#E2E8F0' }}>
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: '/', label: 'Home' },
                { href: '/photovoltaik', label: 'Photovoltaik' },
                { href: '/waermepumpe', label: 'Wärmepumpe' },
                { href: '/ueber-uns', label: 'Über Uns' },
                { href: '/referenzen', label: 'Referenzen' },
                { href: '/kontakt', label: 'Kontakt' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-brand-400"
                    style={{ color: '#64748B' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-widest" style={{ color: '#E2E8F0' }}>
              Leistungen
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: '/solarcheck', label: 'Solarcheck' },
                { href: '/stromspeicher', label: 'Stromspeicher' },
                { href: '/photovoltaik', label: 'PV-Anlage' },
                { href: '/waermepumpe', label: 'Wärmepumpe' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-brand-400"
                    style={{ color: '#64748B' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-widest" style={{ color: '#E2E8F0' }}>
              Kontakt
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+4917684412063"
                  className="transition-colors hover:text-brand-400"
                  style={{ color: '#64748B' }}
                >
                  0176 844 12063
                </a>
              </li>
              <li>
                <a
                  href="mailto:anfrage@pv-hh.de"
                  className="transition-colors hover:text-brand-400"
                  style={{ color: '#64748B' }}
                >
                  anfrage@pv-hh.de
                </a>
              </li>
              <li style={{ color: '#64748B' }}>Hamburg &amp; Umgebung</li>
            </ul>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm transition-colors hover:text-brand-400"
              style={{ color: '#64748B' }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Instagram
            </a>
          </div>
        </div>

        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)', color: '#475569' }}
        >
          <p>© {new Date().getFullYear()} PV-Hamburg — Alle Rechte vorbehalten</p>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-brand-400 transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-brand-400 transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
