export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'callout'; text: string };

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  publishedAt: string; // YYYY-MM-DD
  readingTimeMinutes: number;
  category: string;
  excerpt: string;
  content: ContentBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'photovoltaik-hamburg-lohnt-sich',
    title: 'Solaranlage in Hamburg – Lohnt sich die Investition?',
    metaTitle: 'Solaranlage Hamburg – Lohnt sich die Investition 2025? | PV-Hamburg',
    metaDescription:
      'Lohnt sich eine Solaranlage in Hamburg wirklich? Wir erklären Sonnenstunden, Amortisationszeiten und warum PV in Hamburg wirtschaftlicher ist als viele denken.',
    publishedAt: '2025-04-10',
    readingTimeMinutes: 5,
    category: 'Photovoltaik',
    excerpt:
      'Hamburg gilt nicht als sonnigste Stadt Deutschlands – trotzdem rechnet sich eine Photovoltaikanlage hier oft schneller als erwartet. Wir erklären, woran das liegt und was Sie konkret erwarten können.',
    content: [
      {
        type: 'paragraph',
        text: 'Viele Hamburger Hausbesitzer zögern bei der Entscheidung für eine Solaranlage, weil sie die Stadt nicht mit Sonnenschein verbinden. Doch die Rechnung geht trotzdem auf – und das oft überraschend gut.',
      },
      {
        type: 'h2',
        text: 'Wie viel Sonne gibt es in Hamburg wirklich?',
      },
      {
        type: 'paragraph',
        text: 'Hamburg kommt im Jahresdurchschnitt auf etwa 1.600 bis 1.750 Sonnenstunden. Zum Vergleich: München liegt bei rund 1.800 Stunden. Der Unterschied ist geringer als viele annehmen – und durch moderne Hochleistungsmodule wird die vorhandene Sonneneinstrahlung heute deutlich effizienter genutzt als noch vor zehn Jahren.',
      },
      {
        type: 'h2',
        text: 'Was produziert eine Anlage in Hamburg pro Jahr?',
      },
      {
        type: 'paragraph',
        text: 'Eine typische 8-kWp-Anlage in Hamburg erzeugt pro Jahr etwa 6.800 bis 7.600 kWh Strom. Das entspricht dem Jahresbedarf einer vierköpfigen Familie. Mit einem Stromspeicher lässt sich der Eigenverbrauchsanteil auf bis zu 70–80 % steigern – und damit der Bezug aus dem Netz drastisch senken.',
      },
      {
        type: 'h2',
        text: 'Wann amortisiert sich die Investition?',
      },
      {
        type: 'list',
        items: [
          'Typische Amortisationszeit: 8–12 Jahre (abhängig von Anlagengröße und Eigenverbrauch)',
          'Lebenserwartung der Anlage: 25–30 Jahre mit Leistungsgarantie der Module',
          'Netto-Ertrag über die Laufzeit: oft 30.000–60.000 € durch Einsparungen und Einspeisevergütung',
          'Wertsteigerung der Immobilie durch die Anlage',
        ],
      },
      {
        type: 'h2',
        text: 'Welche Faktoren beeinflussen die Wirtschaftlichkeit?',
      },
      {
        type: 'paragraph',
        text: 'Entscheidend sind die Dachausrichtung (Süd ist ideal, Ost/West funktioniert gut), die Dachneigung, mögliche Verschattungen durch Bäume oder Nachbargebäude sowie der individuelle Stromverbrauch. Je mehr Strom Sie direkt selbst verbrauchen, desto besser die Rendite – denn selbst erzeugter Strom ersetzt teuren Netzstrom zu aktuell rund 30–35 ct/kWh.',
      },
      {
        type: 'h2',
        text: 'Gibt es Förderungen für Hamburger?',
      },
      {
        type: 'paragraph',
        text: 'Ja. Neben der bundesweiten Einspeisevergütung nach EEG gibt es in Hamburg das Förderprogramm "Erneuerbare Energien" der IFB Hamburg, das zinsgünstige Darlehen für Photovoltaikanlagen bietet. Zudem ist seit 2023 die Umsatzsteuer auf PV-Anlagen auf Wohngebäuden auf 0 % gesunken – das spart direkt beim Kauf.',
      },
      {
        type: 'callout',
        text: 'Lassen Sie Ihr Dach kostenlos von uns analysieren. Wir berechnen den Ertrag Ihrer Anlage, die mögliche Amortisationszeit und erstellen ein unverbindliches Angebot – in der Regel innerhalb von 10 Tagen bei Ihnen vor Ort.',
      },
    ],
  },
  {
    slug: 'stromspeicher-pv-anlage-lohnt-sich',
    title: 'Stromspeicher für Photovoltaikanlagen – Lohnt er sich?',
    metaTitle: 'Stromspeicher für PV-Anlage 2025 – Lohnt sich der Kauf? | PV-Hamburg',
    metaDescription:
      'Ein Stromspeicher erhöht den Eigenverbrauch Ihrer Solaranlage erheblich. Wir erklären, wie ein Speicher funktioniert, was er kostet und wann er sich rechnet.',
    publishedAt: '2025-03-22',
    readingTimeMinutes: 6,
    category: 'Stromspeicher',
    excerpt:
      'Ohne Speicher fließt überschüssiger Solarstrom ins Netz – für wenig Geld. Ein Batteriespeicher hält den Strom bei Ihnen und kann den Eigenverbrauch auf bis zu 80 % steigern.',
    content: [
      {
        type: 'paragraph',
        text: 'Wer eine Photovoltaikanlage betreibt, kennt das Dilemma: Mittags scheint die Sonne, aber die meisten Haushalte verbrauchen ihren Strom morgens und abends. Ein Stromspeicher löst dieses Problem elegant – und verändert die Wirtschaftlichkeit einer PV-Anlage deutlich.',
      },
      {
        type: 'h2',
        text: 'Wie funktioniert ein Heimspeicher?',
      },
      {
        type: 'paragraph',
        text: 'Ein Batteriespeicher nimmt überschüssigen Solarstrom auf, wenn mehr erzeugt als verbraucht wird – zum Beispiel mittags. Abends, wenn die Sonne nicht mehr scheint, gibt er den gespeicherten Strom wieder ab. Moderne Systeme mit Lithium-Eisenphosphat-Technologie (LFP) sind sicher, langlebig und erreichen eine Lebensdauer von 15–20 Jahren.',
      },
      {
        type: 'h2',
        text: 'Wie viel Eigenverbrauch ist mit Speicher möglich?',
      },
      {
        type: 'list',
        items: [
          'Ohne Speicher: typisch 25–35 % Eigenverbrauch',
          'Mit 5–7,5 kWh Speicher: 50–65 % Eigenverbrauch',
          'Mit 10 kWh Speicher: 65–80 % Eigenverbrauch',
          'Mit Wärmepumpe oder Wallbox kombiniert: bis zu 90 % möglich',
        ],
      },
      {
        type: 'h2',
        text: 'Was kostet ein Stromspeicher?',
      },
      {
        type: 'paragraph',
        text: 'Die Preise für Heimspeicher sind in den letzten Jahren deutlich gefallen. Aktuelle Marktpreise liegen je nach Kapazität und Hersteller zwischen 700 und 1.000 € pro kWh nutzbarer Kapazität – inklusive Wechselrichter und Installation. Ein 10-kWh-System kostet damit typisch 8.000–12.000 € als Komplettpaket mit der PV-Anlage.',
      },
      {
        type: 'h2',
        text: 'Wann lohnt sich ein Speicher besonders?',
      },
      {
        type: 'list',
        items: [
          'Hoher Eigenverbrauch: Sie arbeiten im Homeoffice oder haben Kinder zuhause',
          'Hohe Strompreise: Jede zusätzliche kWh Eigenverbrauch spart aktuell 30–35 Cent',
          'Geringe Einspeisevergütung: Sie bekommen nur ~8 Ct/kWh für eingespeisten Strom',
          'Kombination mit Wärmepumpe oder Elektroauto: größerer Speicher = mehr Synergien',
        ],
      },
      {
        type: 'h2',
        text: 'Welche Speicherkapazität ist sinnvoll?',
      },
      {
        type: 'paragraph',
        text: 'Als Faustregel gilt: 1 kWh Speicherkapazität pro 1 kWp installierter PV-Leistung. Für eine 8-kWp-Anlage wäre also ein 7,5–10-kWh-Speicher ideal. Zu groß ist genauso ungünstig wie zu klein – der Speicher sollte täglich möglichst vollständig ge- und entladen werden.',
      },
      {
        type: 'callout',
        text: 'Wir beraten Sie kostenlos, welcher Speicher zu Ihrer Anlage und Ihrem Verbrauchsprofil passt. Alle unsere Speicher setzen auf bewährte LFP-Technologie für maximale Sicherheit und Langlebigkeit.',
      },
    ],
  },
  {
    slug: 'waermepumpe-photovoltaik-kombination',
    title: 'Wärmepumpe + Photovoltaik – Die ideale Kombination',
    metaTitle: 'Wärmepumpe + Photovoltaik kombinieren 2025 | PV-Hamburg Hamburg',
    metaDescription:
      'Wärmepumpe und Solaranlage ergänzen sich perfekt: PV-Strom treibt die Wärmepumpe an und senkt die Heizkosten auf ein Minimum. Wir erklären die Synergie.',
    publishedAt: '2025-02-18',
    readingTimeMinutes: 5,
    category: 'Wärmepumpe',
    excerpt:
      'Wärmepumpe und Photovoltaikanlage sind ein unschlagbares Duo: Tagsüber produziert das Dach Strom, die Wärmepumpe nutzt ihn fürs Heizen. Das Ergebnis – fast kostenlose Wärme.',
    content: [
      {
        type: 'paragraph',
        text: 'Die Kombination aus Wärmepumpe und Photovoltaikanlage gilt unter Energieexperten als eine der effizientesten Investitionen für Hauseigentümer. Der Grund: Beide Technologien spielen ihre Stärken genau dann aus, wenn die andere sie braucht.',
      },
      {
        type: 'h2',
        text: 'Warum ergänzen sich PV und Wärmepumpe so gut?',
      },
      {
        type: 'paragraph',
        text: 'Eine Wärmepumpe verbraucht Strom, um Wärme zu erzeugen – sie wandelt dabei 1 kWh Strom in 3–5 kWh Wärme um (Jahresarbeitszahl 3–5). Eine Photovoltaikanlage erzeugt mittags am meisten Strom, wenn die Sonne am höchsten steht. Wenn beide Systeme intelligent verbunden sind, heizt die Wärmepumpe bevorzugt mit selbst erzeugtem Solarstrom – der kostet Sie nahezu nichts.',
      },
      {
        type: 'h2',
        text: 'Wie viel Heizkosten kann man sparen?',
      },
      {
        type: 'list',
        items: [
          'Typisches Einfamilienhaus mit 150 m²: ca. 3.000–4.000 kWh Strom für die Wärmepumpe',
          'Davon 40–60 % durch PV-Eigenverbrauch abdeckbar (je nach Anlage und Speicher)',
          'Ersparnis: 400–800 € pro Jahr allein durch PV-Eigenverbrauch für die Heizung',
          'Kombination mit Pufferspeicher steigert den solaren Heizanteil weiter',
        ],
      },
      {
        type: 'h2',
        text: 'Smart-Home-Steuerung als Schlüssel',
      },
      {
        type: 'paragraph',
        text: 'Damit das System optimal funktioniert, sollte die Wärmepumpe mit dem Energiemanagementsystem der PV-Anlage kommunizieren. Moderne Wechselrichter von SMA, Fronius oder Kostal bieten dafür offene Schnittstellen. Die Wärmepumpe lädt dann bevorzugt Pufferspeicher und Brauchwasser auf, wenn die PV-Anlage mehr Strom produziert als verbraucht wird.',
      },
      {
        type: 'h2',
        text: 'Welche Förderungen gibt es für die Kombination?',
      },
      {
        type: 'paragraph',
        text: 'Die Bundesförderung für effiziente Gebäude (BEG) fördert Wärmepumpen mit bis zu 70 % der Investitionskosten, abhängig vom Einkommen und der Effizienz des Systems. In Kombination mit einer PV-Anlage kann der Fördersatz weiter steigen. Zusätzlich fallen für neue Wärmepumpen die reduzierten Netzentgelte nach §14a EnWG an.',
      },
      {
        type: 'h2',
        text: 'Ist eine Nachrüstung möglich?',
      },
      {
        type: 'paragraph',
        text: 'Ja, beide Systeme können nachgerüstet werden. Wer bereits eine PV-Anlage hat, kann eine Wärmepumpe nachrüsten – und umgekehrt. Für das beste Ergebnis empfiehlt sich jedoch eine ganzheitliche Planung beider Systeme aus einer Hand. So lassen sich Überdimensionierungen vermeiden und die Förderung optimal ausnutzen.',
      },
      {
        type: 'callout',
        text: 'Als zertifizierter Dachdecker- und Elektromeisterbetrieb installieren wir PV-Anlage und Wärmepumpe aus einer Hand – mit nur einem Ansprechpartner. Fordern Sie jetzt Ihre kostenlose Beratung an.',
      },
    ],
  },
  {
    slug: 'photovoltaik-foerderung-hamburg-2025',
    title: 'Photovoltaik Förderung 2025 – Was gibt es in Hamburg?',
    metaTitle: 'Photovoltaik Förderung Hamburg 2025 – Alle Zuschüsse im Überblick | PV-Hamburg',
    metaDescription:
      'Welche Förderungen gibt es 2025 für Photovoltaik in Hamburg? Wir erklären EEG-Vergütung, IFB-Darlehen, die 0-%-Umsatzsteuer und weitere aktuelle Förderoptionen.',
    publishedAt: '2025-05-05',
    readingTimeMinutes: 6,
    category: 'Ratgeber',
    excerpt:
      'Für Photovoltaikanlagen gibt es 2025 verschiedene Förderungen – von der Einspeisevergütung über zinsgünstige Darlehen bis zur Nullsteuer. Wir erklären alle relevanten Programme für Hamburger Hauseigentümer.',
    content: [
      {
        type: 'paragraph',
        text: 'Wer 2025 in Hamburg eine Solaranlage installiert, profitiert von einer Reihe attraktiver Förderungen und steuerlicher Vorteile. Die gute Nachricht: Im Vergleich zu früheren Jahren sind die Rahmenbedingungen so gut wie nie – selbst wenn die Einspeisevergütung gesunken ist.',
      },
      {
        type: 'h2',
        text: '1. Einspeisevergütung nach EEG',
      },
      {
        type: 'paragraph',
        text: 'Der Klassiker: Überschüssiger Strom, den Sie nicht selbst verbrauchen, wird ins öffentliche Netz eingespeist und vergütet. Für Anlagen, die 2025 in Betrieb gehen, beträgt die Vergütung aktuell rund 8,11 ct/kWh (Volleinspeisung: ca. 12,87 ct/kWh). Die Vergütung ist für 20 Jahre fest garantiert – ein planbarer Einkommensstrom.',
      },
      {
        type: 'h2',
        text: '2. Nullsteuersatz auf PV-Anlagen',
      },
      {
        type: 'paragraph',
        text: 'Seit Januar 2023 gilt für Photovoltaikanlagen auf Wohngebäuden ein Umsatzsteuersatz von 0 %. Das bedeutet: Sie zahlen weder auf die Anlage noch auf den Stromspeicher oder die Installation Mehrwertsteuer. Bei einer Anlage im Wert von 15.000 € netto spart das direkt 2.850 € – ohne Antragsaufwand.',
      },
      {
        type: 'h2',
        text: '3. IFB Hamburg – Förderkredit für erneuerbare Energien',
      },
      {
        type: 'paragraph',
        text: 'Die Investitions- und Förderbank Hamburg (IFB) bietet zinsgünstige Darlehen für die Installation von Photovoltaikanlagen an. Die Konditionen sind oft günstiger als reguläre Bankdarlehen. Kombinierbar mit den KfW-Programmen des Bundes.',
      },
      {
        type: 'h2',
        text: '4. KfW-Programm 270 – Erneuerbare Energien',
      },
      {
        type: 'list',
        items: [
          'Zinsgünstige Kredite für PV-Anlagen ab dem ersten Euro',
          'Finanzierung bis zu 150 Mio. Euro pro Vorhaben möglich',
          'Feste Zinssätze für Planungssicherheit',
          'Antrag über die Hausbank vor Beginn der Maßnahme stellen',
        ],
      },
      {
        type: 'h2',
        text: '5. Steuerliche Entlastung für Betreiber',
      },
      {
        type: 'paragraph',
        text: 'Seit 2023 sind Einnahmen aus dem Betrieb von Photovoltaikanlagen auf Wohngebäuden bis 30 kWp von der Einkommensteuer befreit. Das gilt für die Einspeisevergütung ebenso wie für den Wert des selbst verbrauchten Stroms. Keine Steuererklärung, kein Aufwand – und trotzdem steuerfrei.',
      },
      {
        type: 'h2',
        text: 'Welche Förderung ist am wichtigsten?',
      },
      {
        type: 'paragraph',
        text: 'In der Praxis macht der Nullsteuersatz den größten unmittelbaren Unterschied, weil er sofort die Investitionskosten senkt. Die Eigenverbrauchsstrategie – also möglichst viel selbst verbrauchter Strom – ist mittel- bis langfristig die wichtigste "Förderung", da Sie teure Netzstromkosten einsparen statt nur geringe Einspeisevergütungen zu erhalten.',
      },
      {
        type: 'callout',
        text: 'Wir beraten Sie kostenlos zu allen Fördermöglichkeiten und übernehmen auf Wunsch auch die KfW-Antragsstellung. Fordern Sie jetzt Ihr persönliches Angebot an – unverbindlich und innerhalb von 10 Tagen bei Ihnen vor Ort.',
      },
    ],
  },
  {
    slug: 'photovoltaik-wartung-tipps',
    title: 'Photovoltaikanlage warten – Was Betreiber wissen sollten',
    metaTitle: 'PV-Anlage warten 2025 – Tipps & Intervalle für Hamburger Hausbesitzer | PV-Hamburg',
    metaDescription:
      'Wie wartet man eine Photovoltaikanlage richtig? Wir erklären Reinigungsintervalle, was eine Jahresinspektion prüft und wie Sie den Ertrag langfristig sichern.',
    publishedAt: '2025-01-30',
    readingTimeMinutes: 4,
    category: 'Ratgeber',
    excerpt:
      'Eine gut gewartete Solaranlage produziert über Jahrzehnte zuverlässig Strom. Wir erklären, welche Wartungsarbeiten sinnvoll sind, was Profis prüfen und wie Sie Ertragseinbußen verhindern.',
    content: [
      {
        type: 'paragraph',
        text: 'Photovoltaikanlagen gelten zu Recht als wartungsarm – sie haben keine beweglichen Teile und laufen meist geräuschlos über Jahrzehnte. Dennoch gibt es einfache Maßnahmen, die den Ertrag langfristig sichern und teure Ausfälle verhindern.',
      },
      {
        type: 'h2',
        text: 'Reinigung der Solarmodule',
      },
      {
        type: 'paragraph',
        text: 'In Hamburg sorgt der regelmäßige Regen dafür, dass die Module oft selbst sauber bleiben. Trotzdem können Staub, Vogelkot, Moos oder Blütenpollen zu Ertragsminderungen von 5–15 % führen. Eine Reinigung alle zwei bis drei Jahre ist für die meisten Dachanlagen ausreichend. Verwenden Sie dabei nur weiches Wasser und einen weichen Schwamm – keine aggressiven Reinigungsmittel, die die Moduloberfläche beschädigen könnten.',
      },
      {
        type: 'h2',
        text: 'Was gehört zur jährlichen Inspektion?',
      },
      {
        type: 'list',
        items: [
          'Sichtprüfung der Module auf Mikrorisse, Verfärbungen oder Delaminierungen',
          'Kontrolle aller elektrischen Verbindungen und Stecker',
          'Überprüfung der Wechselrichter-Firmware und Fehlerprotokolle',
          'Prüfung der AC- und DC-seitigen Sicherungen',
          'Kontrolle der Dachhalterungen und Unterkonstruktion auf Korrosion',
          'Vergleich der aktuellen Erträge mit den Prognosewerten',
        ],
      },
      {
        type: 'h2',
        text: 'Monitoring – der wichtigste Schutz vor Ertragsverlusten',
      },
      {
        type: 'paragraph',
        text: 'Fast alle modernen Wechselrichter bieten eine App oder ein Online-Portal, über das Sie die Erträge täglich verfolgen können. Ein deutlicher Rückgang – verglichen mit ähnlichen Tagen im Vorjahr – ist oft das erste Zeichen für ein technisches Problem. Einige Monitoringsysteme warnen Sie automatisch per E-Mail oder Push-Notification. Nutzen Sie diese Funktion – sie ist Ihr frühzeitiges Warnsystem.',
      },
      {
        type: 'h2',
        text: 'Wann sollte ein Fachbetrieb hinzugezogen werden?',
      },
      {
        type: 'paragraph',
        text: 'Spätestens alle drei bis fünf Jahre empfiehlt sich eine professionelle Inspektion durch einen Elektrofachbetrieb. Dies ist auch für die Versicherung relevant: Viele Gebäudeversicherungen fordern den Nachweis regelmäßiger Wartungen. Bei auffälligen Ertragsrückgängen, sichtbaren Schäden oder nach Sturm und Hagel sollte immer ein Fachmann hinzugezogen werden.',
      },
      {
        type: 'h2',
        text: 'Wie lange hält eine Solaranlage?',
      },
      {
        type: 'paragraph',
        text: 'Hochwertige Solarmodule haben eine Leistungsgarantie von 25–30 Jahren und verlieren pro Jahr typisch 0,3–0,5 % ihrer Leistung. Nach 25 Jahren arbeitet ein gutes Modul also noch mit über 87 % seiner ursprünglichen Leistung. Wechselrichter haben eine kürzere Lebensdauer von 15–20 Jahren und müssen gelegentlich ausgetauscht werden.',
      },
      {
        type: 'callout',
        text: 'Als Ihr lokaler Solarpartner in Hamburg übernehmen wir auf Wunsch auch die Wartung und Inspektion Ihrer bestehenden Anlage – unabhängig davon, wo Sie diese installiert haben.',
      },
    ],
  },
];

export const categorySlugMap: Record<string, string> = {
  Photovoltaik: 'photovoltaik',
  Stromspeicher: 'stromspeicher',
  Wärmepumpe: 'waermepumpe',
  Ratgeber: 'ratgeber',
};

export const slugCategoryMap: Record<string, string> = Object.fromEntries(
  Object.entries(categorySlugMap).map(([name, slug]) => [slug, name])
);

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString('de-DE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
