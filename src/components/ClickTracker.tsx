'use client';

import { useEffect } from 'react';
import { reportConversion, CONVERSIONS } from '@/lib/gtag';

// Meldet eine Conversion, sobald jemand auf eine Telefon- (tel:) oder
// E-Mail-Verknüpfung (mailto:) klickt. Hängt sich global an den Klick an –
// bestehende Links werden NICHT verändert.
export default function ClickTracker() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const link = target?.closest('a');
      if (!link) return;

      const href = link.getAttribute('href') ?? '';
      if (href.startsWith('tel:')) {
        reportConversion(CONVERSIONS.telefon);
      } else if (href.startsWith('mailto:')) {
        reportConversion(CONVERSIONS.email);
      }
    }

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
}
