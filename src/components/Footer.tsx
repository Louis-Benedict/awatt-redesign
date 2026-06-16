import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{ background: '#0C2418', color: '#CBD5E1' }}>
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
                  href="tel:+4945418856891"
                  className="transition-colors hover:text-brand-400"
                  style={{ color: '#64748B' }}
                >
                  04541 8856891
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
