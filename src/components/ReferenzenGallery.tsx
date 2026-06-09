import Image from 'next/image';

const images = Array.from({ length: 22 }, (_, i) => ({
  src: `/images/referenzen/referenz-${String(i + 1).padStart(2, '0')}.jpeg`,
  alt: `Referenzprojekt ${i + 1}`,
}));

export default function ReferenzenGallery() {
  return (
    <section style={{ background: '#F5F8FC' }} className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#3B7DD8' }}
          >
            Unsere Arbeit
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold inline-block relative pb-2"
            style={{ color: '#1E293B' }}
          >
            Referenzen
            <span
              className="absolute bottom-0 left-0 right-0 rounded-full"
              style={{ height: '3px', background: '#3B7DD8' }}
            />
          </h2>
        </div>

        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
          {images.map((img) => (
            <div
              key={img.src}
              className="relative break-inside-avoid overflow-hidden rounded-xl"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
