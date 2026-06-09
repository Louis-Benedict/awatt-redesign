export type Product = {
  slug: string;
  name: string;
  subtitle: string;
  category: string;
  shortDesc: string;
  paragraphs: string[];
  specs: string[];
  image?: string;
};

export const products: Product[] = [
  {
    slug: 'alfred-10',
    name: 'Alfred 10',
    subtitle: 'All-in-One Speichersystem',
    category: 'Stromspeicher',
    shortDesc: 'Wechselrichter, Speicher und Backup-Funktion in einem kompakten System.',
    paragraphs: [
      'Der Alfred 10 kombiniert Wechselrichter, Speicher und Backup-Funktion in einem kompakten System. Mit 10 kW Wechselrichterleistung und 9,6–24 kWh Speicherkapazität eignet sich das System ideal für moderne PV-Anlagen mit hohem Eigenverbrauch.',
      'Dank IP65-Schutzklasse kann das System flexibel installiert werden. Die modulare Bauweise ermöglicht eine schnelle Montage und spätere Erweiterung.',
    ],
    specs: [
      '10 kW Wechselrichterleistung',
      '9,6–24 kWh Speicherkapazität',
      'IP65 Schutzklasse',
      'Modulare Bauweise',
      'Integrierte Backup-Funktion',
    ],
    image: '/images/alfred-10.png',
  },
  {
    slug: 'notstrombox',
    name: 'Notstrombox',
    subtitle: 'Unterbrechungsfreie Stromversorgung',
    category: 'Notstrom',
    shortDesc: 'Echte, unterbrechungsfreie Stromversorgung mit Umschaltung in unter 200 ms.',
    paragraphs: [
      'Viele Wechselrichter sind „notstromfähig". Das bedeutet aber oft nur, dass sie theoretisch Notstrom bereitstellen können – meist wird dafür zusätzliche Hardware benötigt.',
      'Unsere Notstrombox sorgt für eine echte, unterbrechungsfreie Stromversorgung mit Umschaltung in unter 200 ms. Der Kunde merkt den Wechsel im Alltag praktisch nicht und sieht ihn nur in der App. Damit ist er zuverlässig auf Stromausfälle vorbereitet.',
    ],
    specs: [
      'Umschaltung < 200 ms',
      'Unterbrechungsfreie Versorgung',
      'App-Integration',
      'Keine zusätzliche Hardware nötig',
    ],
    image: '/images/notstrombox.png',
  },
  {
    slug: 'solyco-r-bg',
    name: 'SOLYCO R-BG 108nBC.6',
    subtitle: '485 Wp Full-Black Solarmodul',
    category: 'Solarmodule',
    shortDesc: 'Full-Black Glas-Glas Modul mit 485 Wp und bis zu 23,8 % Wirkungsgrad.',
    paragraphs: [
      'Das SOLYCO Full-Black Glas-Glas Modul kombiniert starke Leistung mit hochwertiger Optik. Mit 485 Wp, Back-Contact-Technologie und bis zu 23,8 % Wirkungsgrad sorgt es für hohe Erträge auf dem Dach.',
      'Durch das elegante schwarze Design eignet sich das Modul besonders für moderne PV-Anlagen mit hohem Anspruch an Leistung und Ästhetik.',
    ],
    specs: [
      '485 Wp Nennleistung',
      'Bis zu 23,8 % Wirkungsgrad',
      'Back-Contact-Technologie',
      'Glas-Glas Bauweise',
      'Full-Black Design',
    ],
    image: '/images/solyco-r-bg.png',
  },
  {
    slug: 'hems-pro',
    name: 'HEMS PRO',
    subtitle: 'Energiemanagementsystem',
    category: 'Energiemanagement',
    shortDesc: 'Verbindet PV-Anlage, Speicher, Wallbox und Wärmepumpe zu einem intelligenten System.',
    paragraphs: [
      'HEMS PRO verbindet PV-Anlage, Speicher, Wallbox und Wärmepumpe zu einem intelligenten Energiesystem. Es optimiert den Eigenverbrauch, unterstützt dynamische Stromtarife und ist für §14a EnWG sowie §9 EEG vorbereitet.',
      'Das System arbeitet lokal, ohne Abo-Kosten und ermöglicht eine zukunftssichere Steuerung moderner Energieanlagen.',
    ],
    specs: [
      '§14a EnWG vorbereitet',
      '§9 EEG kompatibel',
      'Dynamische Stromtarife',
      'Lokale Verarbeitung',
      'Keine Abo-Kosten',
    ],
    image: '/images/hems-pro.png',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
