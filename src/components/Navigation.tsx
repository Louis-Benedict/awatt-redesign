'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const leistungen = [
  { href: '/photovoltaik', label: 'PV-Anlage' },
  { href: '/waermepumpe', label: 'Wärmepumpe' },
  { href: '/stromspeicher', label: 'Stromspeicher' },
  { href: '/solarcheck', label: 'Solarcheck' },
];

const produkte = [
  { href: '/produkte/alfred-10', label: 'Alfred 10' },
  { href: '/produkte/notstrombox', label: 'Notstrombox' },
  { href: '/produkte/solyco-r-bg', label: 'SOLYCO R-BG 108nBC.6' },
  { href: '/produkte/hems-pro', label: 'HEMS PRO' },
];

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/ueber-uns', label: 'Über Uns' },
  { href: '/blog', label: 'Blog' },
];

const leistungenHrefs = new Set(leistungen.map((l) => l.href));
const produkteHrefs = new Set(produkte.map((p) => p.href));

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [leistungenOpen, setLeistungenOpen] = useState(false);
  const [produkteOpen, setProdukteOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const produkteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setLeistungenOpen(false);
      }
      if (produkteRef.current && !produkteRef.current.contains(e.target as Node)) {
        setProdukteOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const leistungenActive = leistungenHrefs.has(pathname);
  const produkteActive = produkteHrefs.has(pathname);

  return (
    <nav
      className="sticky top-0 z-50 transition-all duration-300"
      style={scrolled ? {
        background: 'rgba(245, 248, 252, 0.85)',
        backdropFilter: 'blur(24px) saturate(180%)',
        WebkitBackdropFilter: 'blur(24px) saturate(180%)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.6)',
        boxShadow: '0 1px 12px rgba(0,0,0,0.06)',
      } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="PV Hamburg"
              width={72}
              height={72}
              className="h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-7">
            <Link
              href="/"
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: pathname === '/' ? '#3B7DD8' : '#475569' }}
            >
              Home
            </Link>

            {/* Leistungen dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setLeistungenOpen((v) => !v)}
                className="flex items-center gap-1 text-sm font-medium transition-colors duration-200"
                style={{ color: leistungenActive ? '#3B7DD8' : '#475569' }}
              >
                Leistungen
                <ChevronDown
                  className="w-3.5 h-3.5 transition-transform duration-200"
                  style={{ transform: leistungenOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
              </button>

              {leistungenOpen && (
                <div
                  className="absolute top-full left-1/2 mt-3 w-48 rounded-xl py-2 -translate-x-1/2"
                  style={{
                    background: 'rgba(255,255,255,0.92)',
                    backdropFilter: 'blur(24px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                    border: '1px solid rgba(255,255,255,0.7)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.06)',
                  }}
                >
                  {leistungen.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setLeistungenOpen(false)}
                      className="block px-4 py-2.5 text-sm font-medium transition-colors duration-150 rounded-lg mx-1"
                      style={{
                        color: pathname === link.href ? '#3B7DD8' : '#475569',
                        background: pathname === link.href ? 'rgba(59,125,216,0.07)' : 'transparent',
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Produkte dropdown */}
            <div className="relative" ref={produkteRef}>
              <button
                onClick={() => setProdukteOpen((v) => !v)}
                className="flex items-center gap-1 text-sm font-medium transition-colors duration-200"
                style={{ color: produkteActive ? '#3B7DD8' : '#475569' }}
              >
                Produkte
                <ChevronDown
                  className="w-3.5 h-3.5 transition-transform duration-200"
                  style={{ transform: produkteOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
              </button>

              {produkteOpen && (
                <div
                  className="absolute top-full left-1/2 mt-3 w-56 rounded-xl py-2 -translate-x-1/2"
                  style={{
                    background: 'rgba(255,255,255,0.92)',
                    backdropFilter: 'blur(24px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                    border: '1px solid rgba(255,255,255,0.7)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.06)',
                  }}
                >
                  {produkte.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setProdukteOpen(false)}
                      className="block px-4 py-2.5 text-sm font-medium transition-colors duration-150 rounded-lg mx-1"
                      style={{
                        color: pathname === link.href ? '#3B7DD8' : '#475569',
                        background: pathname === link.href ? 'rgba(59,125,216,0.07)' : 'transparent',
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: pathname === link.href ? '#3B7DD8' : '#475569' }}
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
            <Link
              href="/"
              className="px-3 py-2.5 rounded-xl text-sm font-medium transition-colors"
              style={{
                background: pathname === '/' ? 'rgba(59,125,216,0.08)' : 'transparent',
                color: pathname === '/' ? '#2D68C4' : '#475569',
              }}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            {/* Mobile Leistungen expandable */}
            <div>
              <button
                onClick={() => setLeistungenOpen((v) => !v)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors"
                style={{
                  background: leistungenActive ? 'rgba(59,125,216,0.08)' : 'transparent',
                  color: leistungenActive ? '#2D68C4' : '#475569',
                }}
              >
                Leistungen
                <ChevronDown
                  className="w-4 h-4 transition-transform duration-200"
                  style={{ transform: leistungenOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
              </button>
              {leistungenOpen && (
                <div className="ml-4 mt-1 flex flex-col gap-0.5">
                  {leistungen.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="px-3 py-2 rounded-xl text-sm font-medium transition-colors"
                      style={{
                        background: pathname === link.href ? 'rgba(59,125,216,0.08)' : 'transparent',
                        color: pathname === link.href ? '#2D68C4' : '#64748B',
                      }}
                      onClick={() => { setIsOpen(false); setLeistungenOpen(false); }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Produkte expandable */}
            <div>
              <button
                onClick={() => setProdukteOpen((v) => !v)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors"
                style={{
                  background: produkteActive ? 'rgba(59,125,216,0.08)' : 'transparent',
                  color: produkteActive ? '#2D68C4' : '#475569',
                }}
              >
                Produkte
                <ChevronDown
                  className="w-4 h-4 transition-transform duration-200"
                  style={{ transform: produkteOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
              </button>
              {produkteOpen && (
                <div className="ml-4 mt-1 flex flex-col gap-0.5">
                  {produkte.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="px-3 py-2 rounded-xl text-sm font-medium transition-colors"
                      style={{
                        background: pathname === link.href ? 'rgba(59,125,216,0.08)' : 'transparent',
                        color: pathname === link.href ? '#2D68C4' : '#64748B',
                      }}
                      onClick={() => { setIsOpen(false); setProdukteOpen(false); }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(1).map((link) => (
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
