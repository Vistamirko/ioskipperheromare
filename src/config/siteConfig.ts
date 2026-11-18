/**
 * Configurazione centrale di IoSkippheroMare (ioskippheromare.it)
 * Tono: Vacanza a vela solare, rilassata, conviviale e rigenerante, arricchita dalla magia dello snorkeling guidato e delle curiosità marine a bordo (senza mai sembrare un corso o un impegno).
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
    name: 'IoSkippheroMare',
    domain: 'ioskippheromare.it',
    url: 'https://ioskippheromare.it',
    wordplayOrigin: 'Io Respiro Mare',
    roleSubtitle: 'Vacanze a Vela & Meraviglia',
    fullQualification: 'Skipper & Guida Sub · Vacanze a Vela Raccontate',
    skipperName: 'Mirko Generoso Vista',
    homeArea: 'Golfo di Napoli · Procida & Ischia · Pontine · Isole Eolie',
    coordinates: 'Procida · Ischia · Ventotene · Ponza · Palmarola · Eolie',
  },

  contact: {
    phoneDisplay: '+39 329 016 0806',
    phoneRaw: '393290160806',
    email: 'mirko@ioskippheromare.it',
    secondaryEmail: 'prenotazioni@iorespiromare.com',
    whatsappDefaultMessage:
      'Ciao Mirko! Ho visto ioskippheromare.it e vorrei info per una vacanza o uscita in barca a vela.',
    instagramHandle: '@iorespiromare',
    instagramUrl: 'https://www.instagram.com/iorespiromare/',
    authorInstagramHandle: '@_mirkovista',
    authorInstagramUrl: 'https://www.instagram.com/_mirkovista/',
    bookWebsiteUrl: 'https://iorespiromare.com',
  },

  navigation: [
    { label: 'La Vacanza', href: '#sopra-sotto', depth: '☀️' },
    { label: 'Curiosità a Bordo', href: '#strumenti', depth: '✨' },
    { label: 'Lo Skipper', href: '#skipper-libro', depth: '⛵' },
    { label: 'Formule & Rotte', href: '#itinerari', depth: '🏝️' },
  ],

  hero: {
    eyebrow: 'VACANZE A VELA · RELAX · SNORKELING & RACCONTI',
    title: 'Il relax di una vera vacanza a vela. Con un pizzico di meraviglia in più.',
    subtitle:
      "Sole a prua, calette turchesi, pranzi in pozzetto e aperitivi al tramonto. E tra un tuffo e l'altro, con uno skipper che è anche guida sub e autore di 'Io Respiro Mare', ogni baia diventa una scoperta.",
    primaryCta: {
      label: 'Scopri la vacanza',
      href: '#sopra-sotto',
    },
    secondaryCta: {
      label: "Chi c'è al timone",
      href: '#skipper-libro',
    },
    backgroundImage: '/images/archivio/barca-drone-fondale.webp',
    topSplitImage: '/images/archivio/mirko-al-timone.webp',
    floatingCardImage: '/images/archivio/drone-sub-rov-reale.webp',
    stats: [
      { value: '100% Vacanza', label: 'Sole, tuffi, calette silenziose e zero stress' },
      { value: 'Snorkeling', label: 'Nuotate rilassate insieme per scoprire i fondali' },
      { value: 'Effetto Wow', label: 'Drone sub e idrofono a bordo per chi vuole curiosare' },
    ],
  },

  twoWorlds: {
    eyebrow: 'LA VITA A BORDO · ZERO PENSIERI',
    title: 'Goditi il sole e il vento. Al resto pensiamo noi.',
    intro:
      'Nessun programma rigido e nessuna lezione obbligatoria: in barca si viene per stare bene, staccare la spina, ridere in pozzetto e tuffarsi nell’acqua più bella.',
    tabs: {
      sopra: {
        id: 'sopra',
        badge: 'RELAX, VELA & CONVIVIALITÀ',
        depthLabel: '☀️ SOLE A PRUA · VENTO · APERITIVI IN RADA',
        title: 'La bellezza di vivere il mare con lentezza.',
        subtitle: 'Calette raggiungibili solo in barca, buon cibo e tramonti indimenticabili.',
        quote: '«Spegnere il motore, sentire solo il vento nelle vele e scegliere la baia più bella dove tuffarsi.»',
        description:
          'Puoi prendere il sole a prua leggendo un libro, imparare a portare la barca al timone se ti diverte, o semplicemente rilassarti mentre scivoliamo da un’isola all’altra.',
        mainImage: '/images/archivio/navigazione-prua-golfo.webp',
        secondaryImage: '/images/archivio/vela-sole-cielo.webp',
        imageCaption: 'Veleggiata rilassata nel Golfo con vista sulle isole.',
        coordinates: 'BREZZA ESTIVA · MARE CALMO',
        features: [
          {
            title: 'Baie Turchesi & Ancoraggi Sicuri',
            description: 'Diamo fondo sempre sulla sabbia chiara (nel rispetto della Posidonia) in calette cristalline lontane dalla folla.',
            tag: 'ACQUA LIMPIDA',
          },
          {
            title: 'Pranzi & Aperitivi in Pozzetto',
            description: 'Spaghetti vista mare, frutta fresca dopo il bagno e un calice di vino bianco mentre il sole scende sull’acqua.',
            tag: 'CONVIVIALITÀ',
          },
          {
            title: 'Vela Dolce per Tutti',
            description: 'Tratte brevi e piacevoli; se ti va puoi provare a tenere il timone o imparare qualche nodo marinaro.',
            tag: 'RELAX TOTALE',
          },
        ],
        logbookMoment: {
          time: 'ORE 18:45 · TRAMONTO IN RADA',
          location: 'Corricella, Procida',
          note: 'Ancora ben salda sulla sabbia chiara, musica morbida in sottofondo, bruschette e un brindisi mentre le case colorate si accendono.',
        },
      } as ExperienceTabItem,

      sotto: {
        id: 'sotto',
        badge: 'IL VALORE AGGIUNTO · CURIOSITÀ & MERAVIGLIA',
        depthLabel: '🤿 SNORKELING LEGGERO · GIOCHI DI SCOPERTA',
        title: 'E dopo il tuffo, il mare ti racconta i suoi segreti.',
        subtitle: 'Senza bombole e senza fretta: maschera, pinne e qualche sorpresa in pozzetto.',
        quote: '«La differenza tra guardare l’acqua da sopra e scoprire quanta vita nasconde appena metti la maschera.»',
        description:
          'Per chi ha voglia di curiosare tra un bagno e un po’ di tintarella, trasformiamo il pomeriggio in rada in un momento di pura meraviglia per grandi e ragazzi.',
        mainImage: '/images/archivio/mirko-idrofono-cavo.webp',
        secondaryImage: '/images/archivio/microscopio-diple-barca.webp',
        imageCaption: 'Un momento di curiosità in barca tra un tuffo e l’altro.',
        coordinates: 'ACQUA CRISTALLINA · DIVERTIMENTO A BORDO',
        features: [
          {
            title: 'Snorkeling Passeggiata',
            description: 'Nuotiamo insieme in superficie per scovare stelle marine, polpi e pesci colorati nei primi metri d’acqua.',
            tag: 'PER TUTTI',
          },
          {
            title: 'Cinema Subacqueo dal Divano',
            description: 'Facciamo scendere il piccolo drone subacqueo per guardare in diretta sullo schermo cosa c’è sul fondo.',
            tag: 'EFFETTO WOW',
          },
          {
            title: 'Ascoltare il Mare in Cuffia',
            description: 'Con l’idrofono e i piccoli microscopi da campo scopriamo i suoni e i colori segreti del mare come in un gioco.',
            tag: 'DIVERTENTE',
          },
        ],
        logbookMoment: {
          time: 'ORE 15:30 · DOPO IL CAFFÈ IN POZZETTO',
          location: 'Baia di Chiaiolella / Punta Solchiaro',
          note: 'All’ombra del tendalino facciamo scendere il piccolo drone sub: tutti intorno allo schermo a guardare i banchi di castagnole nel blu.',
        },
      } as ExperienceTabItem,
    },
  },

  marineGear: {
    eyebrow: 'IL TOCCO UNICO DELLA VACANZA · SOLO SE TI VA DI CURIOSARE',
    title: 'Quello che sulle altre barche non trovi.',
    subtitle:
      'Tra un bagno, una pennichella a prua e una risata in compagnia, a bordo abbiamo qualche "giocattolo speciale" per innamorarsi ancora di più del mare.',
    items: [
      {
        id: 'snorkeling-guidato',
        tag: 'PASSEGGIATA IN ACQUA',
        title: 'Snorkeling Insieme',
        shortDesc:
          'Maschera e pinne, senza bombole: ti accompagno a nuotare sopra i fondali più belli per mostrarti pesci, stelle marine e praterie sommerse.',
        image: '/images/snorkel.webp',
        iconName: 'Waves',
      },
      {
        id: 'drone-sub',
        tag: 'FINO A 100 METRI IN DIRETTA',
        title: 'Il Drone Subacqueo',
        shortDesc:
          'Restando comodamente seduti all’ombra in barca, guidiamo insieme il drone subacqueo per sbirciare cosa succede fino a 100 metri di profondità.',
        image: '/images/archivio/drone-sub-rov-reale.webp',
        video: '/images/archivio/drone-sub-rov.mp4',
        iconName: 'Video',
      },
      {
        id: 'idrofono',
        tag: 'LA VOCE DEL MARE',
        title: 'L’Idrofono in Cuffia',
        shortDesc:
          'Un’esperienza magica al tramonto: caliamo il microfono subacqueo per sentire lo "schiocco" del fondale e i suoni segreti dell’acqua.',
        image: '/images/archivio/mirko-idrofono-cavo.webp',
        iconName: 'Headphones',
      },
      {
        id: 'microscopio',
        tag: 'MERAVIGLIA PER GRANDI E BAMBINI',
        title: 'Una Goccia sullo Smartphone',
        shortDesc:
          'Con una piccola lente da campo colleghiamo il telefono e scopriamo insieme le forme incredibili nascoste in una goccia d’acqua di mare.',
        image: '/images/archivio/microscopio-diple-barca.webp',
        iconName: 'Microscope',
      },
    ] as MarineGearItem[],
  },

  whyChoose: {
    eyebrow: 'PERCHÉ SCEGLIERE IOSKIPPHEROMARE',
    title: 'Una vacanza che ti rigenera e ti arricchisce.',
    subtitle: 'Tutta la bellezza della barca a vela, con il calore umano di chi ama e racconta il mare.',
    cards: [
      {
        number: '01',
        depth: 'Relax',
        title: 'Ritmo Lento & Vacanziero',
        subtitle: 'Niente corse né stress',
        description:
          'Soste lunghe nelle baie più belle, tempo per nuotare, prendere il sole, dormire cullati dall’acqua e godersi la compagnia.',
        highlight: '100% spirito di vacanza',
        iconName: 'Anchor',
      },
      {
        number: '02',
        depth: 'Scoperta',
        title: 'Snorkeling & Curiosità',
        subtitle: 'Un mare più vivo',
        description:
          'Fare il bagno con chi conosce ogni scoglio trasforma una semplice nuotata in un’avventura leggera e affascinante.',
        highlight: 'Aperto a tutti, zero brevetti',
        iconName: 'Waves',
      },
      {
        number: '03',
        depth: 'Racconto',
        title: 'Storie, Isole & Tramonti',
        subtitle: 'Dal libro alla realtà',
        description:
          'Ogni isola, borgo marinaro e caletta ha una storia curiosa da ascoltare davanti a un aperitivo al calare del sole.',
        highlight: 'Nato da «Io Respiro Mare»',
        iconName: 'Compass',
      },
      {
        number: '04',
        depth: 'Rispetto',
        title: 'Mare Vissuto con Cura',
        subtitle: 'Ancoraggi consapevoli',
        description:
          'Navighiamo a vela appena c’è vento e diamo ancora solo sulla sabbia per proteggere le praterie di Posidonia.',
        highlight: 'Autenticità e sicurezza',
        iconName: 'BookOpen',
      },
    ] as EditorialPillar[],
  },

  skipperAndBook: {
    eyebrow: 'CHI C’È AL TIMONE',
    title: 'Mirko Generoso Vista',
    roleLine: 'Skipper · Guida Subacquea · Autore di “Io Respiro Mare”',
    introQuote:
      '«In barca con me si viene prima di tutto per stare bene, rilassarsi e godersi il mare. La mia passione per i fondali è il regalo in più che trovi a bordo.»',
    bioParagraphs: [
      'Sono uno Skipper, Guida Subacquea e Digital Art Director innamorato del Mediterraneo. Per me la barca a vela è una casa galleggiante fatta di sole, risate in pozzetto, buona cucina di mare e baie silenziose.',
      'Dall’esperienza del mio libro "Io Respiro Mare" è nata IoSkippheroMare: una vacanza dove ti porto nelle calette più belle e, tra un bagno e un aperitivo, ti faccio scoprire la meraviglia che vive sotto la nostra chiglia.',
    ],
    credentials: [
      { label: 'In Barca', value: 'Skipper & Padrone di Casa' },
      { label: 'In Acqua', value: 'Snorkeling Guidato & Sicurezza' },
      { label: 'In Pozzetto', value: 'Racconti, Aperitivi & Curiosità' },
      { label: 'Il Libro', value: 'Autore di «Io Respiro Mare»' },
    ],
    portraitPrimary: '/images/archivio/mirko-al-timone.webp',
    portraitSecondary: '/images/archivio/mirko-libro-in-barca.webp',
    book: {
      badge: 'UN LIBRO DA SFOGLIARE SOTTO IL TENDALINO',
      title: 'Io Respiro Mare',
      subtitle: 'Il racconto di mare da cui è nato questo progetto',
      quote: '«Avevo attraversato il mare, ma era stato lui, in silenzio, ad attraversare me.»',
      description:
        'A bordo ne trovi sempre una copia da sfogliare in amaca o a prua dopo il bagno. È il filo conduttore che unisce le nostre veleggiate all’amore per il Mediterraneo.',
      coverImage: '/images/cover-io-respiro-mare-800.webp',
      inBoatImage: '/images/archivio/mirko-libro-in-barca.webp',
      amazonPaperbackUrl: 'https://www.amazon.it/dp/B0FXS6DJ8G',
      amazonEbookUrl: 'https://www.amazon.it/dp/B0FXSFCXMB/ref=tmm_kin_swatch_0',
      projectUrl: 'https://iorespiromare.com/libro-io-respiro-mare',
    },
  },

  itineraries: {
    eyebrow: 'SCEGLI LA TUA VACANZA',
    title: 'Tre modi per salire a bordo.',
    subtitle: 'Che sia una giornata di sole, un weekend tra le isole o una settimana intera in rada.',
    formats: [
      {
        id: 'weekend-esplorativo',
        slug: 'Uscita Giornaliera / Weekend Esplorativo',
        badge: '1 – 3 GIORNI DI RELAX',
        duration: 'Giornaliera o Weekend',
        depthRange: 'Campi Flegrei · Procida · Ischia',
        title: 'Uscita Giornaliera / Weekend tra le Isole',
        subtitle: 'Sole, veleggiata, bagni nell’acqua turchese e aperitivo in baia',
        description:
          'La fuga perfetta dalla città: veleggiamo tra i colori di Procida e le calette di Ischia, tra tuffi, pranzo a bordo, snorkeling e totale relax.',
        image: '/images/archivio/navigazione-prua-golfo.webp',
        idealFor: 'Coppie, gruppi di amici o chi vuole provare la barca a vela',
        highlights: [
          'Veleggiata rilassante e soste nelle baie più limpide',
          'Ascolto dei cetacei con idrofono e fondali fino a -100m col drone sub',
          'Pranzo, snorkeling insieme e aperitivo al tramonto in pozzetto',
        ],
        ctaLabel: 'Richiedi dettagli',
        featured: false,
      },
      {
        id: 'settimana-blu',
        slug: 'Settimana Blu & Biologia Marina',
        badge: 'LA VACANZA COMPLETA · 7 GIORNI',
        duration: '7 Giorni / 6 Notti',
        depthRange: 'Flegree · Pontine · Isole Eolie',
        title: 'Settimana Blu tra le Isole',
        subtitle: 'Sette giorni di vera vacanza tra vela, rade stellate, borghi e fondali',
        description:
          'Una settimana indimenticabile scivolando tra le isole Flegree, le Pontine e le Isole Eolie. Svegliarsi col tuffo del mattino in rada, scendere nei borghi la sera e vivere il mare al 100%.',
        image: '/images/archivio/barca-drone-fondale.webp',
        idealFor: 'Chi cerca una vacanza autentica, rigenerante e fuori dagli schemi',
        highlights: [
          'Baie da sogno tra Procida, Ischia, Ventotene, Ponza, Palmarola e le Eolie',
          'In navigazione ascoltiamo delfini e cetacei dal vivo con l’idrofono',
          'Snorkeling guidato, drone sub fino a -100m e notti in rada sotto le stelle',
        ],
        ctaLabel: 'Richiedi dettagli',
        featured: true,
      },
      {
        id: 'esperienza-su-misura',
        slug: 'Esperienza Su Misura',
        badge: 'BARCA TUTTA PER VOI',
        duration: 'Date e Rotta a Scelta',
        depthRange: 'Golfo di Napoli & Isole',
        title: 'Vacanza Su Misura (Famiglie & Gruppi)',
        subtitle: 'La barca in esclusiva cucita sui vostri ritmi',
        description:
          'Ideale per una famiglia con bambini e ragazzi o un gruppo di amici affiatati. Ritmi morbidi, soste scelte insieme e tanto divertimento in acqua per i più giovani.',
        image: '/images/archivio/laboratorio-pozzetto.webp',
        idealFor: 'Famiglie con bambini/ragazzi o gruppi di amici in esclusiva',
        highlights: [
          'Rotta e orari morbidi pensati sulle vostre esigenze',
          'Bambini e ragazzi entusiasti tra timone, drone sub e stelle marine',
          'Massima intimità, relax e convivialità per il vostro gruppo',
        ],
        ctaLabel: 'Richiedi dettagli',
        featured: false,
      },
    ] as VoyageFormat[],
  },

  faqs: {
    eyebrow: 'DOMANDE FREQUENTI',
    title: 'Tutto semplice, fin dal primo giorno.',
    subtitle: 'Ecco cosa sapere prima di preparare la borsa per il mare.',
    items: [
      {
        id: 'spirito-vacanza',
        category: 'LO SPIRITO DI BORDO',
        question: 'È una vacanza rilassante o bisogna essere esperti di mare?',
        answer:
          'È prima di tutto una vacanza! Non serve alcuna esperienza né di vela né di biologia marina. A bordo il ritmo è lento e vacanziero: prendi il sole, fai il bagno, ti godi gli aperitivi e, solo quando ti va, partecipi alle manovre o sbirci i fondali insieme a me.',
        tip: 'Tu porti la voglia di rilassarti, a conduzione e sicurezza penso io.',
      },
      {
        id: 'brevetto-sub',
        category: 'IN ACQUA',
        question: 'Facciamo immersioni con le bombole? Serve un brevetto?',
        answer:
          'No, in barca a vela non usiamo bombole e non serve nessun brevetto. Facciamo semplicemente il bagno e snorkeling in superficie con maschera e pinne! E per vedere cosa c’è più giù senza nemmeno bagnarsi, usiamo il drone subacqueo che scende fino a 100 metri direttamente dal pozzetto.',
      },
      {
        id: 'famiglie-bambini',
        category: 'FAMIGLIE & RAGAZZI',
        question: 'È adatta a famiglie con bambini o ragazzi?',
        answer:
          'Moltissimo! I ragazzi in barca si divertono un mondo: provano a timonare, cercano stelle marine facendo snorkeling, guidano il drone subacqueo e guardano le meraviglie del mare al microscopio come piccoli esploratori.',
      },
      {
        id: 'organizzazione-rotta-cambusa',
        category: 'LOGISTICA',
        question: 'Cosa devo mettere in valigia e come funziona la cambusa?',
        answer:
          'Usa una borsa morbida (facile da stivare in cabina) con costumi, telo mare, occhiali da sole, crema solare e una felpa per la brezza serale. Pochi giorni prima di partire ci sentiamo su WhatsApp per scegliere insieme i vostri piatti e vini preferiti per la cambusa!',
      },
    ] as FaqItem[],
  },

  contactSection: {
    eyebrow: 'SALIAMO A BORDO',
    title: 'Parliamo della tua prossima vacanza',
    subtitle:
      'Scrivimi su WhatsApp o compila il modulo: capiamo insieme il periodo migliore e l’itinerario perfetto per te.',
    periods: [
      'Primavera & Ponti (Aprile – Maggio)',
      'Giugno (Giornate lunghe e baie tranquille)',
      'Luglio & Agosto (Piena Estate)',
      'Settembre & Ottobre (Acqua calda e relax)',
      'Weekend o Giornata singola',
    ],
    experienceOptions: [
      'Uscita Giornaliera / Weekend Esplorativo',
      'Settimana Blu & Biologia Marina',
      'Esperienza Su Misura',
      'Vorrei un consiglio dallo Skipper',
    ],
  },
}
