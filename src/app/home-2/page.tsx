import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Zap, ClipboardList, BadgeCheck, Home, Sun, ArrowRight, SlidersHorizontal, BatteryCharging, UserRound, PencilRuler } from 'lucide-react';
import ProzessSection from '@/components/ProzessSection';

export const metadata: Metadata = {
  title: 'PV-Hamburg – Marktführer für Photovoltaik Anlagen Hamburg',
  description:
    'Jetzt effizient Energie sparen. Alles aus einer Hand – Dein Dachdecker- & Elektromeisterbetrieb für Solaranlagen in Hamburg & Umgebung.',
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const pakete = [
  {
    name: 'Paket S',
    price: 'ab 13.440 €',
    area: '35 m²',
    consumption: 'ab 2.000 kWh',
    system: '15 Module ca. 7,2 kWp',
  },
  {
    name: 'Paket M',
    price: 'ab 15.464 €',
    area: '45 m²',
    consumption: 'ab 3.000 kWh',
    system: '19 Module ca. 9,12 kWp',
  },
  {
    name: 'Paket L',
    price: 'ab 16.792 €',
    area: '55 m²',
    consumption: 'ab 4.000 kWh',
    system: '22 Module ca. 10,56 kWp',
  },
  {
    name: 'Paket XL',
    price: 'ab 18.500 €',
    area: '65 m²',
    consumption: 'ab 5.500 kWh',
    system: '25 Module ca. 12 kWp',
  },
];

const trustBadges = [
  { icon: <ShieldCheck className="w-6 h-6" />, title: '100 % Versichert', desc: 'Alle unsere Projekte & Kunden erfahren den PV-Hamburg Super-Schutz.' },
  { icon: <Zap className="w-6 h-6" />, title: 'Unabhängigkeit', desc: 'Echte Unabhängigkeit von Energieanbietern und steigenden Strompreisen.' },
  { icon: <ClipboardList className="w-6 h-6" />, title: 'Anmeldung inklusive', desc: 'Wir kümmern uns vollständig um die Anmeldung Ihrer Photovoltaik-Anlage.' },
  { icon: <BadgeCheck className="w-6 h-6" />, title: 'Made in Germany', desc: 'Unsere Produkte und unsere Arbeit sind Made in Germany.' },
];


// ─── Shared style helpers ──────────────────────────────────────────────────────

const glassCard: React.CSSProperties = {
  background: 'rgba(255, 255, 255, 0.72)',
  backdropFilter: 'blur(24px) saturate(180%)',
  WebkitBackdropFilter: 'blur(24px) saturate(180%)',
  border: '1px solid rgba(255, 255, 255, 0.6)',
  boxShadow: '0 4px 24px rgba(0,0,0,0.05), 0 1px 4px rgba(0,0,0,0.03), inset 0 1px 0 rgba(255,255,255,0.95)',
};

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function Home2Page() {
  return (
    <>
      {/* ── Hero card ─────────────────────────────────────────────────────── */}
      <div className="px-3 sm:px-5 pt-4 pb-0" style={{ background: '#F3F9F5' }}>
        <section
          className="relative overflow-hidden flex items-center rounded-2xl"
          style={{ minHeight: '70vh' }}
        >
          {/* Background video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            src="https://video.wixstatic.com/video/b34a89_c42f8363f5c14beeb0c9e57dd8826f73/720p/mp4/file.mp4"
            poster="https://static.wixstatic.com/media/b34a89_c42f8363f5c14beeb0c9e57dd8826f73f000.jpg"
          />

          {/* Dark gradient overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(to right, rgba(10,18,40,0.82) 0%, rgba(10,18,40,0.55) 60%, rgba(10,18,40,0.25) 100%)' }}
          />

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12 py-24 w-full">
            <div className="max-w-2xl">

              {/* Glass badge */}
              <div
                className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl mb-10"
                style={{
                  background: 'rgba(255,255,255,0.10)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.18)',
                }}
              >
                <Image src="/logo.png" alt="PV Hamburg" width={32} height={32} className="h-8 w-auto" priority />
                <span className="text-sm font-medium text-white/80">
                  PV Hamburg
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold leading-[1.06] mb-5 text-white">
                Jetzt effizient{' '}
                <span style={{ color: '#35B475' }}>Energie&nbsp;sparen</span>
              </h1>

              <p className="text-xl font-light mb-3 text-white/80">
                Alles aus einer Hand.
              </p>
              <p className="text-base leading-relaxed mb-10 max-w-xl text-white/60">
                Der komplette Photovoltaik-Service aus einer Hand —
                von der Beratung bis zur Inbetriebnahme.
              </p>

              <div className="flex flex-wrap gap-4 mb-16">
                <Link href="/kontakt" className="btn-primary text-base">
                  Kostenlose Beratung sichern
                </Link>
                <a
                  href="tel:+4945418856891"
                  className="inline-block font-semibold px-7 py-3 rounded-xl text-base text-white transition-all duration-200"
                  style={{
                    background: 'rgba(255,255,255,0.10)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,255,255,0.20)',
                  }}
                >
                  Jetzt anrufen
                </a>
              </div>

            </div>
          </div>
        </section>
      </div>{/* /hero card wrapper */}

      {/* ── USP strip ─────────────────────────────────────────────────────── */}
      <section style={{ background: '#EDF6F1', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium" style={{ color: '#94A3B8' }}>
            {['Direkt Geld sparen', 'Unabhängig sein', 'Qualität & Zuverlässigkeit', '1 Ansprechpartner – von Anfang bis Ende'].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hamburg aufgepasst ────────────────────────────────────────────── */}
      <section style={{ background: '#F3F9F5' }} className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#1B8C4D' }}>
                Hamburg aufgepasst
              </p>
              <h2 className="section-title text-3xl md:text-4xl leading-tight">
                Qualität aus<br />einer Hand
              </h2>
              <p className="mt-5 text-lg leading-relaxed" style={{ color: '#64748B' }}>
                Wir bieten Ihnen den kompletten Photovoltaik-Service aus einer Hand —
                von der Planung über die Installation bis zur Inbetriebnahme
                in Hamburg &amp; Umgebung.
              </p>
            </div>

            {/* Glass callout */}
            <div className="rounded-xl p-8" style={glassCard}>
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: 'rgba(27,140,77,0.09)', border: '1px solid rgba(27,140,77,0.18)' }}
              >
                <svg className="w-6 h-6" fill="none" stroke="#1B8C4D" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <p className="text-xl font-bold mb-3" style={{ color: '#1E293B' }}>
                1 Kunde = 1 Ansprechpartner
              </p>
              <p className="leading-relaxed" style={{ color: '#64748B' }}>
                Von der ersten Beratung bis zum Zählertausch steht Ihnen Ihr
                persönlicher Ansprechpartner jederzeit zur Verfügung.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ── Split sections ────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-24">

          {/* Row 1: image left, text right */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl shadow-xl">
              <div className="relative h-[480px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/solar-install-1.jpg"
                  alt="Solaranlage Installation Hamburg"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#1B8C4D' }}>
                PV-Hamburg
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6" style={{ color: '#1E293B' }}>
                Wir installieren Ihre Solaranlage in Hamburg
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: '#64748B' }}>
                Wir sind Ihr persönlicher Solarpartner — von der Planung bis
                zur Installation und Inbetriebnahme. In jedem Bereich ein Profi.
                Jetzt unabhängig werden!
              </p>
              <Link href="/kontakt" className="btn-primary text-base">
                Kostenlose Beratung sichern
              </Link>
            </div>
          </div>

          {/* Row 2: text left, image right */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-sm font-semibold mb-4" style={{ color: '#1B8C4D' }}>
                Ein Ansprechpartner – Von Anfang bis Ende
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6" style={{ color: '#1E293B' }}>
                1 Kunde = 1 Ansprechpartner
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: '#64748B' }}>
                Keine Umwege und kein Durcheinander: Bei PV-Hamburg erhält jeder
                Kunde eine Telefonnummer seines festen Ansprechpartners für das
                gesamte Projekt. Von der ersten Beratung bis zum Zählertausch
                steht Ihnen Ihr Ansprechpartner jederzeit zur Verfügung,
                beantwortet all Ihre Fragen und kümmert sich um jeden Schritt.
                So bleibt alles transparent, einfach und effizient — genau so,
                wie es sein sollte.
              </p>
            </div>
            <div className="rounded-2xl shadow-xl order-1 md:order-2">
              <div className="relative h-[480px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/handshake.webp"
                  alt="Persönlicher Ansprechpartner"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Pakete ────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-28">
        {/* Background photo + dark overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/solar-install-1.jpg"
            alt=""
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0" style={{ background: 'rgba(18,32,60,0.82)' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Unsere Pakete</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pakete.map((p) => (
              <div
                key={p.name}
                className="rounded-xl p-6 flex flex-col gap-3"
                style={{
                  background: 'rgba(255,255,255,0.10)',
                  backdropFilter: 'blur(20px) saturate(150%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(150%)',
                  border: '1px solid rgba(255,255,255,0.16)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
                }}
              >
                {/* Header */}
                <div className="text-center pb-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.12)' }}>
                  <h3 className="text-2xl font-bold text-white mb-1">{p.name}</h3>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>Individuell anpassbar</p>
                </div>

                {/* Spec rows */}
                <div className="flex flex-col gap-2 flex-1">
                  {[
                    { icon: <Home className="w-4 h-4" />, value: p.area, label: 'Benötigte Dachfläche (ca.)' },
                    { icon: <Zap className="w-4 h-4" />, value: p.consumption, label: 'Jährlicher Stromverbrauch' },
                    { icon: <Sun className="w-4 h-4" />, value: p.system, label: 'Anlagengröße' },
                  ].map((row) => (
                    <div
                      key={row.label}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg"
                      style={{
                        background: 'rgba(255,255,255,0.08)',
                        border: '1px solid rgba(255,255,255,0.10)',
                      }}
                    >
                      <span style={{ color: 'rgba(255,255,255,0.6)' }}>{row.icon}</span>
                      <div>
                        <div className="font-bold text-white text-sm leading-tight">{row.value}</div>
                        <div className="text-xs leading-tight" style={{ color: 'rgba(255,255,255,0.5)' }}>{row.label}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Price button */}
                <Link
                  href="/kontakt"
                  className="mt-2 flex items-center justify-center gap-2 font-bold py-3 rounded-full text-white transition-all duration-200 hover:brightness-110"
                  style={{ background: '#1B8C4D', boxShadow: '0 4px 16px rgba(27,140,77,0.4)' }}
                >
                  <ArrowRight className="w-4 h-4" />
                  {p.price}
                </Link>
              </div>
            ))}
          </div>

          {/* Individuelles Paket card */}
          <div
            className="mt-5 rounded-xl p-6 md:p-8"
            style={{
              background: 'rgba(255,255,255,0.10)',
              backdropFilter: 'blur(20px) saturate(150%)',
              WebkitBackdropFilter: 'blur(20px) saturate(150%)',
              border: '1px solid rgba(255,255,255,0.16)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
            }}
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Left: icon + title + desc */}
              <div className="flex items-start gap-4 md:w-80 shrink-0">
                <div
                  className="rounded-full p-3 shrink-0"
                  style={{ background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.16)' }}
                >
                  <PencilRuler className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Individuelles Paket</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    Nicht das passende dabei? Wir planen Ihre PV-Anlage individuell nach Dachfläche, Stromverbrauch, Speicherwunsch und Budget.
                  </p>
                </div>
              </div>

              {/* Right: feature icons */}
              <div className="flex flex-wrap gap-6 flex-1 justify-center md:justify-end">
                {[
                  { icon: <SlidersHorizontal className="w-6 h-6" />, label: 'Maßgeschneiderte\nPlanung' },
                  { icon: <BatteryCharging className="w-6 h-6" />, label: 'Mit oder ohne\nSpeicher' },
                  { icon: <Home className="w-6 h-6" />, label: 'Passend für\njedes Dach' },
                  { icon: <UserRound className="w-6 h-6" />, label: 'Persönliche\nBeratung' },
                ].map((f) => (
                  <div key={f.label} className="flex flex-col items-center gap-2 text-center">
                    <div
                      className="rounded-full p-3"
                      style={{ background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.16)' }}
                    >
                      <span style={{ color: 'rgba(255,255,255,0.85)' }}>{f.icon}</span>
                    </div>
                    <span className="text-xs font-medium whitespace-pre-line" style={{ color: 'rgba(255,255,255,0.7)' }}>
                      {f.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 flex justify-center">
              <Link
                href="/kontakt?betreff=individuelles-paket"
                className="inline-flex items-center gap-2 font-bold px-8 py-3 rounded-full text-white transition-all duration-200 hover:brightness-110"
                style={{ background: '#1B8C4D', boxShadow: '0 4px 16px rgba(27,140,77,0.4)' }}
              >
                Individuelles Angebot anfragen
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Der Prozess ───────────────────────────────────────────────────── */}
      <ProzessSection />

      {/* ── Versprechen ───────────────────────────────────────────────────── */}
      <section style={{ background: '#F3F9F5' }} className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title text-3xl">Unser Versprechen an Sie</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {trustBadges.map((b) => (
              <div key={b.title} className="rounded-xl p-7 text-center" style={glassCard}>
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5 text-brand-500"
                  style={{ background: 'rgba(27,140,77,0.08)', border: '1px solid rgba(27,140,77,0.15)' }}
                >
                  {b.icon}
                </div>
                <h3 className="font-bold mb-2" style={{ color: '#1E293B' }}>{b.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Empfehlungsprogramm teaser ────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-8"
            style={{
              background: 'linear-gradient(135deg, #EDF6F1 0%, #E4EDF8 100%)',
              border: '1px solid rgba(27,140,77,0.12)',
            }}
          >
            <div className="flex items-center gap-6">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"
                style={{ background: 'linear-gradient(135deg, #1B8C4D 0%, #1B6B38 100%)', boxShadow: '0 4px 16px rgba(27,140,77,0.35)' }}
              >
                <span className="text-2xl font-black text-white">€</span>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: '#1B8C4D' }}>
                  Solar-Empfehlungsprogramm
                </p>
                <h2 className="text-xl md:text-2xl font-bold" style={{ color: '#1E293B' }}>
                  Freunde werben &amp; je 500 € kassieren
                </h2>
                <p className="text-sm mt-1" style={{ color: '#64748B' }}>
                  Du empfiehlst uns weiter — du und dein Freund erhalten jeweils eine Prämie.
                </p>
              </div>
            </div>
            <Link
              href="/solar-empfehlungsprogramm"
              className="shrink-0 inline-flex items-center gap-2 font-bold px-7 py-3 rounded-xl transition-all duration-200"
              style={{
                background: 'linear-gradient(135deg, #1B8C4D 0%, #1B6B38 100%)',
                color: '#fff',
                boxShadow: '0 4px 20px rgba(27,140,77,0.30)',
              }}
            >
              Mehr erfahren
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA — warm brand section, not dark ────────────────────────────── */}
      <section
        className="relative overflow-hidden py-24"
        style={{ background: 'linear-gradient(135deg, #1B8C4D 0%, #1B6B38 60%, #1B8C4D 100%)' }}
      >
        {/* Soft highlight overlay */}
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
          <div className="flex flex-wrap justify-center gap-4">
            {/* Glass CTA button — white on orange */}
            <Link
              href="/kontakt"
              className="inline-block font-bold px-9 py-4 rounded-xl transition-all duration-200"
              style={{
                background: 'rgba(255,255,255,0.95)',
                color: '#1B6B38',
                boxShadow: '0 4px 24px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,1)',
              }}
            >
              Kostenlose Beratung sichern
            </Link>
            {/* Glass secondary */}
            <a
              href="tel:+4945418856891"
              className="inline-flex items-center gap-2 font-bold px-9 py-4 rounded-xl transition-all duration-200 text-white"
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
    </>
  );
}
