/**
 * Configurazione centrale di IoBioSkipper (iobioskipper.com)
 * Posizionamento: Biglietto da visita digitale di Mirko Generoso Vista (Skipper, Guida Sub & Autore di "Io Respiro Mare")
 * pensato sia per essere inviato direttamente dai Charter ai propri clienti/equipaggi, sia per presentarsi a Società di Charter e Armatori.
 */

export interface ExperienceTabItem {
  id: 'sopra' | 'sotto'
  badge: string
  depthLabel: string
  title: string
  subtitle: string
  quote: string
  description: string
  mainImage: string
  secondaryImage: string
  imageCaption: string
  coordinates: string
  features: {
    title: string
    description: string
    tag: string
  }[]
  logbookMoment: {
    time: string
    location: string
    note: string
  }
}

export interface MarineGearItem {
  id: string
  tag: string
  title: string
  shortDesc: string
  image: string
  video?: string
  iconName: 'Video' | 'Headphones' | 'Microscope' | 'Waves'
}

export interface EditorialPillar {
  number: string
  depth: string
  title: string
  subtitle: string
  description: string
  highlight: string
  iconName: 'Compass' | 'Waves' | 'BookOpen' | 'Anchor'
}

export interface VoyageFormat {
  id: string
  slug: string
  badge: string
  duration: string
  depthRange: string
  title: string
  subtitle: string
  description: string
  image: string
  idealFor: string
  highlights: string[]
  ctaLabel: string
  featured?: boolean
}

export interface FaqItem {
  id: string
  category: string
  question: string
  answer: string
  tip?: string
}

export const siteConfig = {
  brand: {
    name: 'IoBioSkipper',
    domain: 'iobioskipper.com',
    url: 'https://www.iobioskipper.com',
    wordplayOrigin: 'Io Respiro Mare',
    roleSubtitle: 'Skipper & Guida Sub',
    fullQualification: 'Skipper · Guida Subacquea · Autore di «Io Respiro Mare»',
    skipperName: 'Mirko Generoso Vista',
    homeArea: 'Golfo di Napoli · Procida & Ischia · Pontine · Isole Eolie',
    coordinates: 'Procida · Ischia · Ventotene · Ponza · Palmarola · Eolie',
  },

  contact: {
    phoneDisplay: '+39 329 016 0806',
    phoneRaw: '393290160806',
    email: 'mirko@iobioskipper.com',
    secondaryEmail: 'prenotazioni@iorespiromare.com',
    whatsappDefaultMessage:
      'Ciao Mirko! Ho visitato il tuo profilo su iobioskipper.com e vorrei mettermi in contatto con te.',
    instagramHandle: '@iorespiromare',
    instagramUrl: 'https://www.instagram.com/iorespiromare/',
    authorInstagramHandle: '@_mirkovista',
    authorInstagramUrl: 'https://www.instagram.com/_mirkovista/',
    bookWebsiteUrl: 'https://iorespiromare.com',
  },

  navigation: [
    { label: 'Chi Sono', href: '#skipper-libro', depth: '01' },
    { label: 'A Bordo con Me', href: '#sopra-sotto', depth: '02' },
    { label: 'Il Kit Esplorativo', href: '#strumenti', depth: '03' },
    { label: 'Ospiti & Charter', href: '#itinerari', depth: '04' },
  ],

  hero: {
    eyebrow: 'MIRKO GENEROSO VISTA · SKIPPER & GUIDA SUB',
    title: 'Più di uno skipper al timone. Un valore unico a bordo.',
    subtitle:
      "Comandante, Guida Subacquea e autore del libro «Io Respiro Mare». Su ogni imbarcazione porto sicurezza, conoscenza delle isole e un kit esclusivo con idrofono per ascoltare i cetacei, drone subacqueo fino a 100m e snorkeling guidato.",
    primaryCta: {
      label: 'Cosa porto a bordo',
      href: '#strumenti',
    },
    secondaryCta: {
      label: 'Contatto / Charter',
      href: '#contatti',
    },
    backgroundImage: '/images/archivio/barca-drone-fondale.webp',
    topSplitImage: '/images/archivio/mirko-al-timone.webp',
    floatingCardImage: '/images/archivio/drone-sub-rov-reale.webp',
    stats: [
      { value: 'Comandante', label: 'Conduzione sicura, cura della barca e rade selezionate' },
      { value: 'Guida Sub', label: 'Snorkeling guidato in superficie per tutto l’equipaggio' },
      { value: 'Kit Esclusivo', label: 'Idrofono cetacei, drone sub -100m e microscopi a bordo' },
    ],
  },

  twoWorlds: {
    eyebrow: 'IL MIO STILE DI CONDUZIONE',
    title: 'Sicurezza sopra le onde. Meraviglia sotto la chiglia.',
    intro:
      'Quando salgo a bordo come vostro skipper, il mio primo obiettivo è farvi vivere una vacanza serena, sicura e senza pensieri, arricchendola con piccole grandi scoperte quotidiane.',
    tabs: {
      sopra: {
        id: 'sopra',
        badge: 'AL TIMONE · LO SKIPPER',
        depthLabel: 'CONDUZIONE · SICUREZZA · CONVIVIALITÀ',
        title: 'Conduzione attenta, baie ridossate e vero spirito di vacanza.',
        subtitle: 'Cura dell’imbarcazione, rotte studiate sul meteo e ritmo rilassato per gli ospiti.',
        quote: '«Un buon comandante fa sentire l’equipaggio a casa fin dal primo minuto in banchina.»',
        description:
          'Dalla scelta dei migliori ridossi per la notte agli ancoraggi consapevoli sulla sabbia chiara, gestisco la barca con metodo e discrezione.',
        mainImage: '/images/archivio/navigazione-prua-golfo.webp',
        secondaryImage: '/images/archivio/vela-sole-cielo.webp',
        imageCaption: 'Navigazione a vela tra Golfo di Napoli, Pontine ed Eolie.',
        coordinates: 'FLEGREE · PONTINE · EOLIE',
        features: [
          {
            title: 'Sicurezza & Cura della Barca',
            description: 'Gestione scrupolosa di manovre, ormeggi e ancoraggi sempre su sabbia nel rispetto della Posidonia.',
            tag: 'AFFIDABILITÀ',
          },
          {
            title: 'Conoscenza Locale delle Isole',
            description: 'Le calette più limpide, i borghi autentici e i ridossi migliori tra Procida, Ischia, Pontine ed Eolie.',
            tag: 'ESPERIENZA',
          },
          {
            title: 'Clima Sereno & Racconti di Mare',
            description: 'Empatia con gli ospiti, coinvolgimento al timone per chi lo desidera e aneddoti al tramonto.',
            tag: 'OSPITALITÀ',
          },
        ],
        logbookMoment: {
          time: 'IN RADA',
          location: 'Flegree · Pontine · Eolie',
          note: 'Ancora salda sulla sabbia chiara, barca in ordine e ospiti rilassati a godersi il tramonto.',
        },
      } as ExperienceTabItem,

      sotto: {
        id: 'sotto',
        badge: 'IN ACQUA · LA GUIDA SUB',
        depthLabel: 'SNORKELING · IDROFONO CETACEI · DRONE -100M',
        title: 'Il kit che porto nella mia sacca per stupire l’equipaggio.',
        subtitle: 'Senza bombole e in totale leggerezza: strumenti veri per scoprire il mare giocando.',
        quote: '«Vedere gli occhi degli ospiti illuminarsi quando sentono i delfini in cuffia è il regalo più bello.»',
        description:
          'Porto personalmente a bordo la mia strumentazione divulgativa per trasformare le soste in rada e le traversate in momenti indimenticabili.',
        mainImage: '/images/archivio/mirko-idrofono-cavo.webp',
        secondaryImage: '/images/archivio/microscopio-diple-barca.webp',
        imageCaption: 'Ascolto acustico e osservazione naturalistica in pozzetto.',
        coordinates: 'VALORE AGGIUNTO A BORDO',
        features: [
          {
            title: 'Ascolto Cetacei in Navigazione',
            description: 'Con il mio idrofono ascoltiamo dal vivo in cuffia i fischi e i click di delfini e cetacei.',
            tag: 'EMOZIONE UNICA',
          },
          {
            title: 'Drone Subacqueo fino a -100m',
            description: 'Esploriamo insieme i fondali profondi in diretta video restando comodamente seduti in pozzetto.',
            tag: 'EFFETTO WOW',
          },
          {
            title: 'Snorkeling Guidato & Microscopio',
            description: 'Accompagno gli ospiti in acqua con maschera e pinne e mostro il micro-mondo marino sullo smartphone.',
            tag: 'PER TUTTI',
          },
        ],
        logbookMoment: {
          time: 'IN TRAVERSATA',
          location: 'Nel Blu del Tirreno',
          note: 'Motore spento, vele a segno e idrofono in acqua per ascoltare il passaggio dei delfini.',
        },
      } as ExperienceTabItem,
    },
  },

  marineGear: {
    eyebrow: 'NELLA MIA SACCA DA SKIPPER · IL VALORE AGGIUNTO',
    title: 'Gli strumenti che porto con me a bordo.',
    subtitle:
      'Su qualsiasi imbarcazione io salga al comando, porto personalmente questo kit per regalare all’equipaggio un’esperienza memorabile.',
    items: [
      {
        id: 'idrofono',
        tag: 'CETACEI IN DIRETTA',
        title: 'Idrofono & Cetacei',
        shortDesc:
          'In navigazione caliamo l’idrofono per ascoltare dal vivo in cuffia i fischi dei delfini e i cetacei nel blu.',
        image: '/images/archivio/mirko-idrofono-cavo.webp',
        iconName: 'Headphones',
      },
      {
        id: 'rov',
        tag: 'FINO A 100 METRI IN DIRETTA',
        title: 'Drone Subacqueo',
        shortDesc:
          'Dal pozzetto della barca guidiamo insieme il drone subacqueo per esplorare i fondali fino a 100 metri.',
        image: '/images/archivio/drone-sub-rov-reale.webp',
        video: '/images/archivio/drone-sub-rov.mp4',
        iconName: 'Video',
      },
      {
        id: 'snorkel',
        tag: 'CON LA GUIDA SUB',
        title: 'Snorkeling Guidato',
        shortDesc:
          'Maschera e pinne, senza bombole: accompagno gli ospiti a scoprire stelle marine, polpi e Posidonia.',
        image: '/images/snorkel.webp',
        iconName: 'Waves',
      },
      {
        id: 'microscopio',
        tag: 'SU SMARTPHONE',
        title: 'Microscopio da Campo',
        shortDesc:
          'Una goccia di mare ingrandita sul telefono: uno spettacolo che incanta adulti, bambini e ragazzi.',
        image: '/images/archivio/microscopio-diple-barca.webp',
        iconName: 'Microscope',
      },
    ] as MarineGearItem[],
  },

  whyChoose: {
    eyebrow: 'IL VALORE AGGIUNTO',
    title: 'Perché avere Mirko a bordo.',
    subtitle: 'Professionalità marinara e passione divulgativa al servizio dell’equipaggio e del charter.',
    cards: [] as EditorialPillar[],
  },

  skipperAndBook: {
    eyebrow: 'IL PROFILO DELLO SKIPPER',
    title: 'Mirko Generoso Vista',
    roleLine: 'Skipper · Guida Subacquea · Autore di “Io Respiro Mare”',
    introQuote:
      '«In barca porto la sicurezza di un Comandante e lo stupore di chi ama far scoprire il mare ai propri ospiti.»',
    bioParagraphs: [
      'Skipper, Guida Subacquea certificata e Digital Art Director. Collaboro con società di charter, armatori ed equipaggi per trasformare ogni crociera a vela tra Procida, Ischia, le Isole Pontine e le Eolie in un’esperienza curata, sicura e ricca di fascino.',
      'Autore del libro "Io Respiro Mare", porto a bordo con me non solo la conduzione tecnica dell’imbarcazione, ma anche racconti, snorkeling guidato e strumenti come idrofono, drone subacqueo e microscopi che lasciano negli ospiti un ricordo indimenticabile della vacanza.',
    ],
    credentials: [
      { label: 'Al Timone', value: 'Skipper & Comandante' },
      { label: 'In Acqua', value: 'Guida Sub (Snorkeling)' },
      { label: 'Kit Personale', value: 'Idrofono, Drone -100m & Microscopi' },
      { label: 'Autore', value: 'Libro «Io Respiro Mare»' },
    ],
    portraitPrimary: '/images/archivio/mirko-al-timone.webp',
    portraitSecondary: '/images/archivio/mirko-libro-in-barca.webp',
    book: {
      badge: 'IL MIO LIBRO A BORDO',
      title: 'Io Respiro Mare',
      subtitle: 'Il racconto di mare da cui nasce il mio approccio a bordo',
      quote: '«Avevo attraversato il mare, ma era stato lui, in silenzio, ad attraversare me.»',
      description:
        'Porto sempre una copia del mio libro in barca, a disposizione degli ospiti per una lettura sotto il tendalino.',
      coverImage: '/images/cover-io-respiro-mare-800.webp',
      inBoatImage: '/images/archivio/mirko-libro-in-barca.webp',
      amazonPaperbackUrl: 'https://www.amazon.it/dp/B0FXS6DJ8G',
      amazonEbookUrl: 'https://www.amazon.it/dp/B0FXSFCXMB/ref=tmm_kin_swatch_0',
      projectUrl: 'https://iorespiromare.com/libro-io-respiro-mare',
    },
  },

  itineraries: {
    eyebrow: 'PER OSPITI, FAMIGLIE & SOCIETÀ DI CHARTER',
    title: 'Cosa posso fare per voi a bordo.',
    subtitle: 'Un profilo versatile per chi sale in barca in vacanza e per i charter che vogliono offrire un’esperienza superiore.',
    formats: [
      {
        id: 'ospiti-crociera',
        slug: 'Sono un Ospite (sarai il nostro Skipper / vorrei averti a bordo)',
        badge: 'PER GLI EQUIPAGGI IN VACANZA',
        duration: 'Weekend o Settimana Charter',
        depthRange: 'Flegree · Pontine · Isole Eolie',
        title: 'Il Tuo Skipper in Crociera',
        subtitle: 'Sarò al timone della tua barca? Preparati a una vacanza speciale',
        description:
          'Se il tuo charter mi ha assegnato alla tua barca (o vuoi richiedermi come skipper per la tua prossima crociera), troverai a bordo relax totale, baie meravigliose e il mio kit esplorativo.',
        image: '/images/archivio/navigazione-prua-golfo.webp',
        idealFor: 'Equipaggi, coppie e gruppi di amici in vacanza a vela',
        highlights: [
          'Conduzione sicura, scelta delle rade più limpide e zero stress',
          'Ascolto di delfini e cetacei dal vivo con l’idrofono in navigazione',
          'Snorkeling guidato e drone subacqueo fino a -100m incluso a bordo',
        ],
        ctaLabel: 'Scrivimi prima dell’imbarco',
        featured: false,
      },
      {
        id: 'partner-charter',
        slug: 'Siamo una Società di Charter / Armatore (Collaborazione)',
        badge: 'B2B · PER CHARTER & ARMATORI',
        duration: 'Collaborazioni & Imbarchi',
        depthRange: 'Tirreno · Golfo di Napoli · Sicilia',
        title: 'Valore Aggiunto per i Charter',
        subtitle: 'Uno Skipper che fidelizza i vostri clienti e valorizza la flotta',
        description:
          'Presentare ai vostri clienti uno Skipper che è anche Guida Sub e porta a bordo idrofono cetacei, drone subacqueo e microscopi trasforma un normale noleggio in un’esperienza d’eccellenza.',
        image: '/images/archivio/barca-drone-fondale.webp',
        idealFor: 'Società di Charter, Broker Nautici, Flotte e Armatori',
        highlights: [
          'Massima cura dell’imbarcazione e ancoraggi sicuri sempre su sabbia',
          'Format esclusivo (Cetacei, ROV -100m, Snorkeling) senza costi extra per la flotta',
          'Profilo professionale pronto da condividere con i vostri clienti prima del check-in',
        ],
        ctaLabel: 'Proponi collaborazione Charter',
        featured: true,
      },
      {
        id: 'famiglie-gruppi',
        slug: 'Vacanza per Famiglia / Gruppo',
        badge: 'IDEALE PER LE FAMIGLIE',
        duration: 'Crociere Family-Friendly',
        depthRange: 'Procida · Ischia · Pontine · Eolie',
        title: 'Esperienza per Famiglie & Ragazzi',
        subtitle: 'Bambini e ragazzi entusiasti, genitori finalmente rilassati',
        description:
          'Quando a bordo ci sono famiglie, so come coinvolgere bambini e ragazzi in totale sicurezza tra timone, stelle marine, drone subacqueo e microscopio in pozzetto.',
        image: '/images/archivio/famiglia-in-barca.webp',
        idealFor: 'Famiglie con bambini e ragazzi in crociera charter',
        highlights: [
          'Ritmi morbidi, tratte piacevoli e rade tranquille per la notte',
          'Ragazzi coinvolti tra nodi marinari, drone sub, idrofono e microscopi',
          'Accompagnamento sicuro in acqua durante lo snorkeling',
        ],
        ctaLabel: 'Contattami per il tuo equipaggio',
        featured: false,
      },
    ] as VoyageFormat[],
  },

  faqs: {
    eyebrow: 'DOMANDE FREQUENTI',
    title: 'Per gli Ospiti e per i Charter',
    subtitle: 'Risposte rapide su come lavoro a bordo.',
    items: [
      {
        id: 'assegnato-dal-charter',
        category: 'PER GLI OSPITI',
        question: 'Il nostro Charter ci ha inviato questo link perché sarai il nostro Skipper: cosa dobbiamo aspettarci?',
        answer:
          'Benvenuti a bordo! Significa che oltre a portarvi in totale sicurezza e relax nelle baie più belle dell’itinerario, porterò nella mia sacca per voi il drone subacqueo (fino a 100 metri), l’idrofono per ascoltare i delfini in navigazione e i microscopi da campo. Tutto questo in modo leggero e spontaneo, tra un bagno, una risata e un aperitivo al tramonto.',
      },
      {
        id: 'collaborazione-charter',
        category: 'PER I CHARTER',
        question: 'Siamo una società di charter o un armatore: come funziona la collaborazione?',
        answer:
          'Collaboro con società di charter, broker e armatori per imbarchi settimanali, weekend o eventi dedicati. Potete usare direttamente questo sito come mio biglietto da visita per presentarmi ai vostri clienti prima dell’imbarco, offrendo alla vostra flotta un valore aggiunto unico sul mercato.',
      },
      {
        id: 'brevetto-sub',
        category: 'IN ACQUA',
        question: 'A bordo si usano bombole? Serve un brevetto per partecipare?',
        answer:
          'No, in barca a vela non usiamo bombole e non serve nessun brevetto. Facciamo snorkeling in superficie con maschera e pinne accompagnati da me come Guida Sub, e usiamo il drone subacqueo fino a 100 metri direttamente dal pozzetto.',
      },
      {
        id: 'famiglie-bambini',
        category: 'FAMIGLIE & RAGAZZI',
        question: 'È un’esperienza adatta a famiglie con bambini o ragazzi?',
        answer:
          'È perfetta per le famiglie: i ragazzi si appassionano tantissimo a guidare il drone subacqueo, ascoltare i cetacei in cuffia con l’idrofono e guardare il mare al microscopio, mentre i genitori si godono la vacanza in pieno relax.',
      },
    ] as FaqItem[],
  },

  contactSection: {
    eyebrow: 'CONTATTO DIRETTO',
    title: 'Mettiamoci in contatto',
    subtitle:
      'Che tu sia un ospite pronto a salire a bordo o una società di charter in cerca di uno skipper che faccia la differenza.',
    periods: [
      'Primavera & Ponti (Aprile – Maggio)',
      'Giugno',
      'Luglio & Agosto',
      'Settembre & Ottobre',
      'Collaborazione Stagionale / Charter',
    ],
    experienceOptions: [
      'Sono un Ospite (sarai il nostro Skipper / vorrei averti a bordo)',
      'Siamo una Società di Charter / Armatore (Collaborazione)',
      'Vacanza per Famiglia / Gruppo',
      'Informazioni Generali',
    ],
  },
}
