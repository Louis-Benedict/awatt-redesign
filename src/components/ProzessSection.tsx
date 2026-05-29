'use client';

import { useEffect, useRef } from 'react';
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

export default function ProzessSection() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = '1';
            (entry.target as HTMLElement).style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    itemRefs.current.forEach((el) => { if (el) observer.observe(el); });
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

        {/* 4-step grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
          {steps.map((step, i) => (
            <div
              key={step.num}
              ref={(el) => { itemRefs.current[i] = el; }}
              className="relative"
              style={{
                opacity: 0,
                transform: 'translateY(44px)',
                transition: 'opacity 0.55s ease, transform 0.55s ease',
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              {/* Square image */}
              <div className="relative aspect-square rounded-xl overflow-hidden mb-5 shadow-sm">
                <Image
                  src={step.image}
                  alt={step.label}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Dashed connector — desktop only, not after last item */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute pointer-events-none"
                  style={{
                    top: 'calc(25% - 1px)',
                    left: 'calc(100% + 0.75rem)',
                    width: 'calc(100% - 1.5rem)',
                    borderTop: '2px dashed #CBD5E1',
                  }}
                />
              )}

              {/* Text */}
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
          ))}
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
