import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { products } from '@/lib/products';

export default function ProdukteSection() {
  return (
    <section id="produkte" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#1B8C4D' }}
          >
            Produktübersicht
          </p>
          <h2 className="section-title text-3xl md:text-4xl">Unser Sorglospaket</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <Link
              key={p.slug}
              href={`/produkte/${p.slug}`}
              className="group flex flex-col rounded-2xl overflow-hidden border transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              style={{ borderColor: '#E8EEF7', background: '#FAFBFE' }}
            >
              {/* Product image */}
              <div
                className="w-full aspect-video relative flex items-center justify-center"
                style={{ background: '#EFF4FB', borderBottom: '1px solid #E8EEF7' }}
              >
                {p.image ? (
                  <Image src={p.image} alt={p.name} fill className="object-contain p-4" />
                ) : (
                  <span className="text-sm" style={{ color: '#94A3B8' }}>Bild folgt</span>
                )}
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 p-6">
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-2"
                  style={{ color: '#1B8C4D' }}
                >
                  {p.category}
                </p>
                <h3 className="font-bold text-lg leading-snug mb-1" style={{ color: '#1E293B' }}>
                  {p.name}
                </h3>
                <p className="text-sm font-medium mb-3" style={{ color: '#64748B' }}>
                  {p.subtitle}
                </p>
                <p className="text-sm leading-relaxed flex-1" style={{ color: '#94A3B8' }}>
                  {p.shortDesc}
                </p>
                <div
                  className="inline-flex items-center gap-1 text-sm font-semibold mt-5"
                  style={{ color: '#1B8C4D' }}
                >
                  Mehr erfahren
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
