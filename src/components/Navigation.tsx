'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/photovoltaik', label: 'Photovoltaik' },
  { href: '/waermepumpe', label: 'Wärmepumpe' },
  { href: '/ueber-uns', label: 'Über Uns' },
  { href: '/referenzen', label: 'Referenzen' },
  { href: '/kontakt', label: 'Kontakt' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      className="sticky top-0 z-50"
      style={{
        background: 'rgba(245, 248, 252, 0.85)',
        backdropFilter: 'blur(24px) saturate(180%)',
        WebkitBackdropFilter: 'blur(24px) saturate(180%)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.6)',
        boxShadow: '0 1px 12px rgba(0,0,0,0.06)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="PV Hamburg"
              width={52}
              height={52}
              className="h-11 w-auto"
              priority
            />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{
                  color: pathname === link.href ? '#3B7DD8' : '#475569',
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/kontakt" className="btn-primary text-sm py-2.5">
              Termin vereinbaren
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-xl transition-colors"
            style={{ color: '#475569' }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menü öffnen"
          >
            {isOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div
            className="md:hidden py-4 flex flex-col gap-1"
            style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2.5 rounded-xl text-sm font-medium transition-colors"
                style={{
                  background: pathname === link.href ? 'rgba(59,125,216,0.08)' : 'transparent',
                  color: pathname === link.href ? '#2D68C4' : '#475569',
                }}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="btn-primary text-sm mt-2 text-center"
              onClick={() => setIsOpen(false)}
            >
              Termin vereinbaren
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
