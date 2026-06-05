import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Gift, Users, CheckCircle2, Share2, Euro, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Solar-Empfehlungsprogramm – 500 € für dich & deine Freunde | PV-Hamburg',
  description:
    'Empfehle PV-Hamburg weiter und erhalte 500 € — auch dein Freund bekommt 500 € Anschlussbonus. Jetzt am Solar-Empfehlungsprogramm teilnehmen.',
};

// ─── Shared style helpers ──────────────────────────────────────────────────────

const glassCard: React.CSSProperties = {
  background: 'rgba(255, 255, 255, 0.72)',
  backdropFilter: 'blur(24px) saturate(180%)',
  WebkitBackdropFilter: 'blur(24px) saturate(180%)',
  border: '1px solid rgba(255, 255, 255, 0.6)',
  boxShadow:
    '0 4px 24px rgba(0,0,0,0.05), 0 1px 4px rgba(0,0,0,0.03), inset 0 1px 0 rgba(255,255,255,0.95)',
};

// ─── Steps ────────────────────────────────────────────────────────────────────

const steps = [
  {
    number: '01',
    icon: <Share2 className="w-6 h-6" />,
    title: 'Empfehlung aussprechen',
    desc: 'Teile deinen persönlichen Empfehlungslink mit Freunden, Familie oder Bekannten, die sich für Photovoltaik interessieren.',
  },
  {
    number: '02',
    icon: <Users className="w-6 h-6" />,
    title: 'Freund wird Neukunde',
    desc: 'Dein Tipp erhält eine kostenlose Planung seiner Solaranlage — ein echter Mehrwert von Anfang an.',
  },
  {
    number: '03',
    icon: <Euro className="w-6 h-6" />,
    title: 'Prämie erhalten',
    desc: 'Nach Vertragsabschluss werden die Prämien direkt ausgezahlt. Keine Haken, kein Kleingedrucktes.',
  },
];

// ─── Benefits ─────────────────────────────────────────────────────────────────

const benefits = [
  { icon: <Gift className="w-6 h-6" />, title: 'Kostenlose Planung', desc: 'Dein empfohlener Freund erhält die komplette Planung seiner Anlage kostenfrei dazu.' },
  { icon: <Zap className="w-6 h-6" />, title: 'Schnelle Auszahlung', desc: 'Die Prämien werden direkt nach Vertragsabschluss ausgezahlt — unkompliziert und zuverlässig.' },
  { icon: <Users className="w-6 h-6" />, title: 'Unbegrenzt empfehlen', desc: 'Es gibt keine Obergrenze — empfehle so viele neue Kunden wie du möchtest.' },
  { icon: <CheckCircle2 className="w-6 h-6" />, title: 'Kein Aufwand für dich', desc: 'Einmal empfehlen — den Rest übernehmen wir. Kein Papierkram, kein komplizierter Prozess.' },
];

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function EmpfehlungsprogrammPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <div className="px-3 sm:px-5 pt-4 pb-0" style={{ background: '#F5F8FC' }}>
        <section
          className="relative overflow-hidden flex items-center rounded-2xl"
          style={{ minHeight: '60vh' }}
        >
          {/* Background */}
          <div className="absolute inset-0">
            <Image
              src="/images/empfehlung-hero.jpg"
              alt=""
              fill
              className="object-cover object-center"
              priority
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to right, rgba(10,18,40,0.88) 0%, rgba(10,18,40,0.60) 60%, rgba(10,18,40,0.30) 100%)',
              }}
            />
          </div>

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
                <Image src="/logo.png" alt="PV Hamburg" width={32} height={32} className="h-8 w-auto" />
                <span className="text-sm font-medium text-white/80">Solar-Empfehlungsprogramm</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold leading-[1.06] mb-5 text-white">
                Empfehlen &amp;{' '}
                <span style={{ color: '#60A5FA' }}>500&nbsp;€ verdienen</span>
              </h1>

              <p className="text-xl font-light mb-3 text-white/80">
                Für dich. Für deine Freunde.
              </p>
              <p className="text-base leading-relaxed mb-10 max-w-xl text-white/60">
                Empfehle PV-Hamburg weiter und beide Seiten profitieren —
                eine Prämie für dich, ein Bonus für deinen Freund.
                Ganz einfach, ganz unverbindlich.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/kontakt" className="btn-primary text-base">
                  Jetzt teilnehmen
                </Link>
                <a
                  href="tel:+4917684412063"
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
      </div>

      {/* ── USP strip ─────────────────────────────────────────────────────── */}
      <section style={{ background: '#EEF3FA', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium" style={{ color: '#94A3B8' }}>
            {['Direkte Auszahlung', 'Unbegrenzt empfehlen', 'Kostenlose Planung inklusive', 'Kein Aufwand für dich'].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reward highlight ──────────────────────────────────────────────── */}
      <section style={{ background: '#F5F8FC' }} className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#3B7DD8' }}>
              Das Angebot
            </p>
            <h2 className="section-title text-3xl">Beide profitieren</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* You get 500 € */}
            <div
              className="rounded-2xl p-10 flex flex-col items-center text-center"
              style={{
                background: 'linear-gradient(135deg, #3B7DD8 0%, #2D68C4 100%)',
                boxShadow: '0 8px 40px rgba(59,125,216,0.30)',
              }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)' }}
              >
                <Gift className="w-8 h-8 text-white" />
              </div>
              <p className="text-5xl font-black text-white mb-2">500 €</p>
              <p className="text-lg font-semibold text-white mb-4">für dich</p>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.70)' }}>
                Du erhältst deine Prämie direkt ausgezahlt, sobald dein empfohlener
                Freund seinen Vertrag mit PV-Hamburg abgeschlossen hat.
              </p>
            </div>

            {/* Friend gets 500 € */}
            <div className="rounded-2xl p-10 flex flex-col items-center text-center" style={glassCard}>
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: 'rgba(59,125,216,0.09)', border: '1px solid rgba(59,125,216,0.18)' }}
              >
                <Users className="w-8 h-8" style={{ color: '#3B7DD8' }} />
              </div>
              <p className="text-5xl font-black mb-2" style={{ color: '#1E293B' }}>500 €</p>
              <p className="text-lg font-semibold mb-4" style={{ color: '#1E293B' }}>für deinen Freund</p>
              <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>
                Dein empfohlener Neukunde erhält den Anschlussbonus gutgeschrieben —
                plus eine kostenlose Planung seiner Solaranlage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/empfehlung-hero.jpg"
            alt=""
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0" style={{ background: 'rgba(18,32,60,0.88)' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#60A5FA' }}>
              So einfach geht's
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">In 3 Schritten zur Prämie</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-xl p-8 flex flex-col gap-4"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(20px) saturate(150%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(150%)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
                }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-5xl font-black leading-none" style={{ color: 'rgba(255,255,255,0.10)' }}>
                    {step.number}
                  </span>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(96,165,250,0.15)', border: '1px solid rgba(96,165,250,0.25)', color: '#60A5FA' }}
                  >
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.60)' }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ──────────────────────────────────────────────────────── */}
      <section style={{ background: '#F5F8FC' }} className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#3B7DD8' }}>
              Deine Vorteile
            </p>
            <h2 className="section-title text-3xl">Warum sich Empfehlen lohnt</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-xl p-7 text-center" style={glassCard}>
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5"
                  style={{ background: 'rgba(59,125,216,0.08)', border: '1px solid rgba(59,125,216,0.15)', color: '#3B7DD8' }}
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

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-24"
        style={{ background: 'linear-gradient(135deg, #3B7DD8 0%, #2D68C4 60%, #3B7DD8 100%)' }}
      >
        <div className="pointer-events-none absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 30% 30%, rgba(255,255,255,0.15) 0%, transparent 55%)',
        }} />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-white">
            Jetzt Prämie sichern
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Melde dich bei uns — wir senden dir deinen persönlichen Empfehlungslink
            und erklären dir alle Details des Programms.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 font-bold px-9 py-4 rounded-xl transition-all duration-200"
              style={{
                background: 'rgba(255,255,255,0.95)',
                color: '#2D68C4',
                boxShadow: '0 4px 24px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,1)',
              }}
            >
              <ArrowRight className="w-5 h-5" />
              Jetzt teilnehmen
            </Link>
            <a
              href="tel:+4917684412063"
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
