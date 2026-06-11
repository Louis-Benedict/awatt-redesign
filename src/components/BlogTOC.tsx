'use client';

import { useEffect, useState } from 'react';

interface TocItem {
  id: string;
  text: string;
}

export default function BlogTOC({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-15% 0% -70% 0%', threshold: 0 }
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav aria-label="Inhaltsverzeichnis" className="text-sm">
      <p className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: '#94A3B8' }}>
        Inhalt
      </p>
      <ul className="space-y-1.5 border-l border-slate-200">
        {items.map(({ id, text }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="block pl-4 py-0.5 leading-snug border-l-2 -ml-px transition-colors"
              style={
                activeId === id
                  ? { borderColor: '#1B8C4D', color: '#1B8C4D', fontWeight: 600 }
                  : { borderColor: 'transparent', color: '#94A3B8' }
              }
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
