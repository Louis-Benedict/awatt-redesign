import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle } from 'lucide-react';

interface Props {
  category: string;
  name: string;
  subtitle: string;
  paragraphs: string[];
  specs: string[];
  image?: string;
}

export default function ProductHero({ category, name, subtitle, paragraphs, specs, image }: Props) {
  return (
    <section style={{ background: '#F5F8FC' }} className="pt-10 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <Link
          href="/#produkte"
          className="inline-flex items-center gap-2 text-sm font-medium mb-12 hover:underline"
          style={{ color: '#3B7DD8' }}
        >
          <ArrowLeft className="w-4 h-4" />
          Alle Produkte
        </Link>

        <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Product image */}
          {image ? (
            <div className="w-full aspect-square rounded-2xl overflow-hidden relative" style={{ background: '#EFF4FB' }}>
              <Image src={image} alt={name} fill className="object-contain p-6" />
            </div>
          ) : (
            <div
              className="w-full aspect-square rounded-2xl flex items-center justify-center"
              style={{ background: '#EFF4FB', border: '1px dashed #CBD5E1' }}
            >
              <span className="text-sm" style={{ color: '#94A3B8' }}>Bild folgt</span>
            </div>
          )}

          {/* Text */}
          <div>
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: '#3B7DD8' }}
            >
              {category}
            </p>
            <h1
              className="text-3xl md:text-4xl font-bold leading-tight mb-2"
              style={{ color: '#1E293B' }}
            >
              {name}
            </h1>
            <p className="text-lg font-medium mb-8" style={{ color: '#64748B' }}>
              {subtitle}
            </p>

            <div className="space-y-4 mb-10">
              {paragraphs.map((p, i) => (
                <p key={i} className="leading-relaxed" style={{ color: '#64748B' }}>
                  {p}
                </p>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {specs.map((spec) => (
                <div
                  key={spec}
                  className="flex items-center gap-2 text-sm"
                  style={{ color: '#475569' }}
                >
                  <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#3B7DD8' }} />
                  {spec}
                </div>
              ))}
            </div>

            <Link href="/kontakt" className="btn-primary">
              Jetzt anfragen
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
