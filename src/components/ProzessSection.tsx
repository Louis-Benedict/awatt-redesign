'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const steps = [
  {
    num: 1,
    label: 'Beratung',
    image: '/images/step-beratung.jpg',
    desc: 'Unser Berater sind von Montag bis Freitag von 08 bis 19 Uhr für Sie und Ihre Anliegen verfügbar.',
  },
  {
    num: 2,
    label: 'Planung',
    image: '/images/step-planung.jpg',
    desc: 'Unsere Experten planen Ihre individuelle Solaranlage. Perfekt auf Sie und Ihr Gebäude abgestimmt.',
  },
  {
    num: 3,
    label: 'Montage',
    image: '/images/solar-install-2.jpg',
    desc: 'Unsere Monteure installieren Ihre Solaranlage und erledigen alle Anmeldungen.',
  },
  {
    num: 4,
    label: 'Fertigstellung',
    image: '/images/handshake.webp',
    desc: 'Wir liefern Qualität mit Präzision und Perfektion — und das schon seit 2020.',
  },
];

const DOT_SIZE = 40; // px — keep in sync with w-10 h-10

export default function ProzessSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24" style={{ background: '#F5F8FC' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm mb-3" style={{ color: '#94A3B8' }}>
            Ganz einfach richtung Solar
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold inline-block relative pb-2"
            style={{ color: '#1E293B' }}
          >
            Die Zusammenarbeit
            <span
              className="absolute bottom-0 left-0 right-0 rounded-full"
              style={{ height: '3px', background: '#3B7DD8' }}
            />
          </h2>
        </div>

        <div ref={gridRef}>
        {/* ── Desktop layout (lg+): horizontal timeline ── */}
        <div className="hidden lg:block relative mb-14">

          {/* Track */}
          <div
            className="absolute h-px"
            style={{
              top: DOT_SIZE / 2,
              left: '12.5%',
              right: '12.5%',
              background: '#E2E8F0',
            }}
            aria-hidden
          >
            {/* Animated fill */}
            <div
              style={{
                height: '100%',
                background: 'linear-gradient(to right, #3B7DD8, #60A5FA)',
                width: active ? '100%' : '0%',
                transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.05s',
              }}
            />
          </div>

          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, i) => {
              const delay = i * 0.18;
              return (
                <div key={step.num} className="flex flex-col">

                  {/* Dot */}
                  <div className="flex justify-center mb-6 relative z-10">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white"
                      style={{
                        background: 'linear-gradient(135deg, #3B7DD8, #2563EB)',
                        boxShadow: '0 0 0 3px #F5F8FC, 0 0 0 5px #CBD5E1',
                        transform: active ? 'scale(1)' : 'scale(0)',
                        transition: `transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay + 0.1}s`,
                      }}
                    >
                      {step.num}
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    style={{
                      opacity: active ? 1 : 0,
                      transform: active ? 'translateY(0)' : 'translateY(24px)',
                      transition: `opacity 0.5s ease ${delay + 0.3}s, transform 0.5s ease ${delay + 0.3}s`,
                    }}
                  >
                    <div className="relative aspect-square rounded-xl overflow-hidden mb-4 shadow-sm">
                      <Image src={step.image} alt={step.label} fill className="object-cover" />
                    </div>
                    <p className="font-bold text-sm mb-0.5" style={{ color: '#1E293B' }}>
                      Schritt {step.num}
                    </p>
                    <p className="font-semibold mb-2" style={{ color: '#3B7DD8' }}>
                      {step.label}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>
                      {step.desc}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* ── Mobile / tablet layout (<lg): vertical timeline ── */}
        <div className="lg:hidden relative mb-14">

          {/* Vertical track */}
          <div
            className="absolute w-px"
            style={{
              top: DOT_SIZE / 2,
              bottom: DOT_SIZE / 2,
              left: DOT_SIZE / 2,
              background: '#E2E8F0',
            }}
            aria-hidden
          >
            <div
              style={{
                width: '100%',
                background: 'linear-gradient(to bottom, #3B7DD8, #60A5FA)',
                height: active ? '100%' : '0%',
                transition: 'height 1.4s cubic-bezier(0.4, 0, 0.2, 1) 0.05s',
              }}
            />
          </div>

          <div className="flex flex-col gap-10">
            {steps.map((step, i) => {
              const delay = i * 0.18;
              return (
                <div key={step.num} className="flex gap-6 items-start">

                  {/* Dot */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white shrink-0 relative z-10"
                    style={{
                      background: 'linear-gradient(135deg, #3B7DD8, #2563EB)',
                      boxShadow: '0 0 0 3px #F5F8FC, 0 0 0 5px #CBD5E1',
                      transform: active ? 'scale(1)' : 'scale(0)',
                      transition: `transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay + 0.1}s`,
                    }}
                  >
                    {step.num}
                  </div>

                  {/* Card */}
                  <div
                    className="flex-1 pb-2"
                    style={{
                      opacity: active ? 1 : 0,
                      transform: active ? 'translateX(0)' : 'translateX(16px)',
                      transition: `opacity 0.5s ease ${delay + 0.3}s, transform 0.5s ease ${delay + 0.3}s`,
                    }}
                  >
                    <div className="relative aspect-video rounded-xl overflow-hidden mb-3 shadow-sm">
                      <Image src={step.image} alt={step.label} fill className="object-cover" />
                    </div>
                    <p className="font-bold text-sm mb-0.5" style={{ color: '#1E293B' }}>
                      Schritt {step.num}
                    </p>
                    <p className="font-semibold mb-1.5" style={{ color: '#3B7DD8' }}>
                      {step.label}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>
                      {step.desc}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/kontakt" className="btn-primary">
            Beratung anfragen
          </Link>
        </div>

      </div>
    </section>
  );
}
