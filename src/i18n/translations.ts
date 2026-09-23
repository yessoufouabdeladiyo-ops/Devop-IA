/* ------------------------------------------------------------------ */
/*  Dictionnaires FR / EN / AR — le français est la langue par défaut  */
/*  Toute clé présente en FR doit exister en EN et AR (type Dict).    */
/* ------------------------------------------------------------------ */

export type Lang = "FR" | "EN" | "AR";

export const LANG_OPTIONS: { code: Lang; label: string }[] = [
  { code: "FR", label: "Français" },
  { code: "EN", label: "English" },
  { code: "AR", label: "العربية" },
];

const fr = {
  common: {
    brand: "Abdel Sobou",
    role: "Développeur Web & IA",
    ctaCall: "Réserver un appel découverte",
    ctaCallShort: "Réserver un appel",
    chooseLang: "Choisir la langue",
    langsAvailable: "Langues disponibles",
    langTitle: "Langue",
    themeDark: "Passer en mode sombre",
    themeLight: "Passer en mode clair",
  },
  header: {
    navMain: "Navigation principale",
    navMobile: "Navigation mobile",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    links: [
      { label: "Accueil", href: "#accueil" },
      { label: "À propos", href: "#a-propos" },
      { label: "Services", href: "#services" },
      { label: "Méthode", href: "#methode" },
      { label: "Contact", href: "#contact" },
    ],
  },
  hero: {
    eyebrow: "Bonjour, je suis",
    titleLine1: "Abdel Sobou",
    titleRole: "Développeur Web & IA",
    titleAccent: "Freelance",
    accentFirst: false,
    leadBold: "Je ne vends pas de modèles.",
    lead: "Je construis le site qu'il vous faut, à vous — sites vitrines, e-commerce, landing pages, tunnels de vente et applications web sur-mesure.",
    ctaCall: "Réserver un appel découverte",
    ctaContact: "Me contacter",
    trust:
      "Pensé pour les entrepreneurs, PME, e-commerçants et porteurs de projet",
    chipCustom: "100 % sur-mesure",
    chipAi: "Propulsé par l'IA",
    photoAlt:
      "Portrait d'Abdel Sobou Adiyo Yessoufou — Développeur Web & IA Freelance",
  },
  about: {
    eyebrow: "À propos",
    titleStart: "Un business unique mérite un",
    titleAccent: "site unique",
    paragraphA: "Je suis développeur web et IA, spécialisé dans la création de sites entièrement sur-mesure.",
    paragraphBold: "Pas de thème acheté, pas de mise en page recyclée :",
    paragraphB: "chaque site est pensé selon votre activité, votre cible et vos objectifs de conversion.",
    keyPoints: [
      {
        icon: "fa-solid fa-bolt",
        title: "Développement assisté par IA",
        detail: "Rapidité sans sacrifier la qualité",
      },
      {
        icon: "fa-solid fa-bullseye",
        title: "Zéro template",
        detail: "100 % sur-mesure",
      },
      {
        icon: "fa-solid fa-globe",
        title: "Disponible en FR / EN / AR",
        detail: "Français, Anglais, Arabe",
      },
      {
        icon: "fa-solid fa-handshake",
        title: "Accompagnement inclus",
        detail: "Après la livraison",
      },
      {
        icon: "fa-solid fa-medal",
        title: "2 ans d'expérience",
        detail: "En développement web et IA",
      },
    ],
    contact: {
      eyebrow: "Coordonnées",
      title: "Parlons de votre projet.",
      rows: [
        { icon: "fa-solid fa-location-dot", label: "Localisation", value: "Bénin", href: "" },
        { icon: "fa-solid fa-envelope", label: "Email", value: "yessoufoua06@gmail.com", href: "mailto:yessoufoua06@gmail.com" },
        { icon: "fa-brands fa-whatsapp", label: "Téléphone / WhatsApp", value: "+229 47 74 99 68", href: "https://wa.me/22947749968" },
        { icon: "fa-solid fa-language", label: "Langues", value: "Français · Anglais · Arabe", href: "" },
      ],
      cta: "Réserver un appel découverte",
      note: "Gratuit · 20 min · Sans engagement",
    },
  },
  services: {
    eyebrow: "Services & expertises",
    titleStart: "Ce que je peux faire",
    titleAccent: "pour vous",
    intro: "Du site vitrine à l'application web, chaque réalisation est 100 % sur-mesure, propulsée par l'IA et pensée pour l'expérience utilisateur.",
    introBold: "Choisissez l'objectif, je construis l'outil.",
    items: [
      {
        icon: "fa-solid fa-store",
        title: "Site vitrine",
        description:
          "Une présence en ligne professionnelle qui inspire confiance dès la première visite.",
        points: [
          "Un design unique, aux couleurs de votre marque",
          "Pages essentielles : accueil, services, à propos, contact",
          "Optimisé pour le SEO, le mobile et la vitesse",
        ],
      },
      {
        icon: "fa-solid fa-cart-shopping",
        title: "E-commerce",
        description:
          "Une boutique en ligne pensée pour vendre, pas juste pour exister.",
        points: [
          "Parcours d'achat fluide, rassurant et sans friction",
          "Paiement sécurisé et gestion simplifiée des commandes",
          "Fiches produits conçues pour convertir",
        ],
      },
      {
        icon: "fa-solid fa-bullseye",
        title: "Landing page",
        description:
          "Une page unique, un objectif clair : convertir votre trafic en clients.",
        points: [
          "Un message, une offre, un seul appel à l'action",
          "Structure persuasive, pensée pour la conversion",
          "Idéale pour vos campagnes publicitaires et lancements",
        ],
      },
      {
        icon: "fa-solid fa-filter",
        title: "Tunnel de vente",
        description:
          "Un parcours pensé pour transformer un visiteur en client, étape par étape.",
        points: [
          "Pages capture, vente, upsell et confirmation",
          "Emails et automatisations connectés à vos outils",
          "Suivi des performances à chaque étape du parcours",
        ],
      },
      {
        icon: "fa-solid fa-gears",
        title: "Application web",
        description:
          "Un outil sur-mesure pour digitaliser et automatiser votre activité.",
        points: [
          "Fonctionnalités développées pour vos processus métier",
          "Tableaux de bord, comptes utilisateurs et API",
          "Automatisations et intégrations boostées à l'IA",
        ],
      },
    ],
    cardCta: "Discuter de ce besoin",
    noteTitle: "Un besoin qui ne rentre dans aucune case ?",
    noteText:
      "C'est justement le principe du sur-mesure. Chaque projet commence par un appel découverte gratuit et sans engagement.",
    noteCta: "Réserver un appel découverte",
  },
  whyCustom: {
    eyebrow: "Pourquoi pas un template",
    titleStart: "Un template, c'est un",
    titleAccent: "costume taille unique",
    colA: {
      eyebrow: "Ce qu'on vous vend souvent",
      title: "Template classique",
      items: [
        "Le même design que des milliers d'autres sites",
        "Une personnalisation limitée au logo et aux couleurs",
        "Une structure rigide, pensée pour personne en particulier",
        "Du code lourd et des options inutiles qui ralentissent tout",
        "Une dépendance totale au thème, à ses mises à jour et à ses limites",
      ],
    },
    colB: {
      badge: "100 % sur-mesure",
      eyebrow: "Ce que je vous construis",
      title: "Approche Abdel",
      items: [
        "Un site unique, conçu pour votre business et vos clients",
        "Chaque page pensée pour vos objectifs, pas pour un cas générique",
        "Une UX soignée qui guide vos visiteurs vers l'action",
        "Un code propre, rapide et durable, boosté par l'IA",
        "Un site 100 % à vous, évolutif et sans dépendance à un thème",
      ],
    },
    conclusion: "Vous méritez mieux qu'une taille unique.",
    cta: "Parlons de votre projet",
  },
  audience: {
    eyebrow: "Pour qui ?",
    titleStart: "Vous allez sûrement vous",
    titleAccent: "reconnaître",
    intro: "Je travaille avec des porteurs de projet aux parcours très différents.",
    introBold: "Le point commun : l'envie d'un site qui leur ressemble vraiment.",
    profiles: [
      {
        icon: "fa-solid fa-seedling",
        title: "Entrepreneur en reconversion",
        recognition:
          "Vous lancez enfin votre projet et tout reste à construire, en partant de zéro.",
        benefit:
          "Je pose les fondations digitales de votre activité : une image crédible dès le premier jour.",
      },
      {
        icon: "fa-solid fa-briefcase",
        title: "Salarié",
        recognition:
          "Vous développez votre projet le soir et le week-end, entre deux journées de travail.",
        benefit:
          "Je prends tout le volet technique en charge pour que votre temps libre reste concentré sur l'essentiel.",
      },
      {
        icon: "fa-solid fa-laptop-code",
        title: "Étudiant / freelance",
        recognition:
          "Vos compétences sont solides, mais rien en ligne ne les montre vraiment.",
        benefit:
          "Un portfolio sur-mesure qui met vos réalisations en valeur et attire vos premiers clients.",
      },
      {
        icon: "fa-solid fa-building",
        title: "PME",
        recognition:
          "Votre site actuel est daté, lent, ou ne vous ressemble tout simplement plus.",
        benefit:
          "Une refonte moderne et performante qui inspire confiance et génère de vraies demandes.",
      },
      {
        icon: "fa-solid fa-bag-shopping",
        title: "E-commerçant",
        recognition:
          "Vous avez du trafic, des visiteurs… mais pas assez de commandes au bout.",
        benefit:
          "Un parcours d'achat optimisé, pensé pour transformer vos visites en ventes.",
      },
    ],
    noteTitle: "Vous ne vous retrouvez dans aucun profil ?",
    noteText:
      "Tant mieux : c'est bien la preuve que votre projet est unique. Et c'est exactement ce que j'aime construire.",
    noteCta: "Parlons de votre situation",
  },
  process: {
    eyebrow: "Méthode de travail",
    titleStart: "Comment on travaille",
    titleAccent: "ensemble",
    intro: "Un process clair, balisé et sans mauvaise surprise.",
    introBold: "Vous savez à chaque instant où en est votre projet.",
    steps: [
      {
        icon: "fa-solid fa-phone-volume",
        title: "Appel découverte",
        description:
          "On échange sur votre activité, votre cible et vos objectifs. Gratuit et sans engagement.",
        duration: "20 min",
      },
      {
        icon: "fa-solid fa-file-lines",
        title: "Proposition & structure",
        description:
          "Je vous remets une proposition claire : arborescence, contenu des pages, délais et budget.",
        duration: "48 h",
      },
      {
        icon: "fa-solid fa-pen-ruler",
        title: "Design & développement",
        description:
          "Je conçois et code votre site sur-mesure, avec des points de validation à chaque étape.",
        duration: "1 à 4 sem.",
      },
      {
        icon: "fa-solid fa-flask-vial",
        title: "Tests & optimisation",
        description:
          "Vitesse, mobile, SEO et parcours de conversion : tout est testé et affiné avant la mise en ligne.",
        duration: "3 à 5 j",
      },
      {
        icon: "fa-solid fa-rocket",
        title: "Livraison & accompagnement",
        description:
          "Mise en ligne, prise en main de votre site et suivi inclus après la livraison.",
        duration: "En continu",
      },
    ],
    conclusion: "Tout commence par une simple conversation.",
    cta: "Démarrer par l'étape 1",
  },
  faq: {
    eyebrow: "FAQ",
    titleStart: "Les questions qu'on me pose",
    titleAccent: "souvent",
    items: [
      {
        icon: "fa-solid fa-clock",
        question: "Combien de temps faut-il pour réaliser mon site ?",
        answer:
          "Cela dépend de l'ampleur du projet. Comptez environ 1 semaine pour une landing page, 2 à 3 semaines pour un site vitrine, et 3 à 6 semaines pour une boutique e-commerce ou une application web. Le développement assisté par IA me permet d'aller vite sans jamais sacrifier la qualité. Dans tous les cas, vous recevez un planning précis avec la proposition, dès l'étape 2.",
      },
      {
        icon: "fa-solid fa-wallet",
        question: "Quel budget prévoir pour mon projet ?",
        answer:
          "Chaque site étant sur-mesure, le budget dépend du nombre de pages, des fonctionnalités et du niveau de personnalisation. Je n'applique pas de tarif « au hasard » : après l'appel découverte, vous recevez une proposition claire et détaillée, avec un prix fixe et sans surprise. Si votre budget est serré, on priorise ensemble l'essentiel pour démarrer, puis on fait évoluer le site par la suite.",
      },
      {
        icon: "fa-solid fa-earth-africa",
        question: "Travaillez-vous avec des clients à l'international ?",
        answer:
          "Oui, absolument. Je travaille à distance avec des clients partout dans le monde et je vous accompagne en français, en anglais ou en arabe. Les échanges se font par visio, email ou WhatsApp, en tenant compte de votre fuseau horaire. La distance n'a jamais été un frein : elle demande juste un process clair, et c'est précisément ce que je propose.",
      },
      {
        icon: "fa-solid fa-lightbulb",
        question:
          "Je ne sais pas encore exactement ce que je veux. C'est un problème ?",
        answer:
          "Pas du tout, et c'est même très courant. Mon rôle n'est pas seulement de coder : je vous aide à clarifier votre besoin. Pendant l'appel découverte, on part de votre activité, de votre cible et de vos objectifs, puis je vous propose une structure concrète (pages, contenus, parcours). Vous n'avez besoin ni de compétences techniques, ni d'un cahier des charges : venez simplement avec votre projet.",
      },
      {
        icon: "fa-solid fa-life-ring",
        question: "Que se passe-t-il après la livraison du site ?",
        answer:
          "Je ne disparais pas une fois le site en ligne. La livraison inclut une prise en main complète pour que vous soyez autonome, ainsi qu'une période d'accompagnement pour corriger les éventuels ajustements. Ensuite, je reste disponible pour faire évoluer votre site, ajouter des fonctionnalités ou assurer la maintenance, selon vos besoins.",
      },
    ],
    note: "Une autre question en tête ?",
    cta: "Posez-la moi directement",
  },
  testimonials: {
    eyebrow: "Témoignages",
    titleStart: "Ils m'ont fait",
    titleAccent: "confiance",
    items: [
      {
        icon: "fa-solid fa-star",
        quote:
          "Merci Abdel, grâce à ma boutique en ligne je me sens beaucoup plus visible et je ressens vraiment ma présence en ligne. Depuis 1 mois, je trouve beaucoup de clients.",
        name: "Raodath Alao",
        role: "Boutique en ligne (vente d'articles pour femmes)",
      },
      {
        icon: "fa-solid fa-star",
        quote:
          "Merci Abdel pour mon site. Grâce à lui, mes clients savent tout sur moi et comment je fonctionne, sans avoir à poser trop de questions. Je suis très satisfaite.",
        name: "Kamilath Nourou",
        role: "Graphiste designer",
      },
    ],
  },
  finalCta: {
    badge: "Disponible pour de nouveaux projets",
    title: "Un projet en tête ? Discutons-en.",
    text: "Réservez un appel découverte gratuit. On parle de votre activité, de vos objectifs, et je vous dis exactement comment je peux vous aider.",
    cta: "Réserver mon appel",
    whatsapp: "Ou contactez-moi sur WhatsApp",
    reassure: ["Gratuit et sans engagement", "20 minutes", "FR · EN · AR"],
  },
  footer: {
    tagline: "Sites 100 % sur-mesure, propulsés par l'IA et pensés pour l'expérience utilisateur.",
    taglineBold: "Zéro template, que du vrai.",
    navTitle: "Navigation",
    expertiseTitle: "Expertises",
    contactTitle: "Contact",
    expertises: [
      "Sites vitrines",
      "E-commerce",
      "Landing pages",
      "Tunnels de vente",
      "Applications web",
    ],
    calendlyRow: "Appel découverte — Calendly",
    copyright: "© 2026 Abdel Sobou. Tous droits réservés.",
    legal: "Mentions légales",
    privacy: "Confidentialité",
    handmade: "Conçu et développé à la main — sans template, évidemment.",
  },
};

export type Dict = typeof fr;

/* ============================== EN ============================== */

const en: Dict = {
  common: {
    brand: "Abdel Sobou",
    role: "Web & AI Developer",
    ctaCall: "Book a Discovery Call",
    ctaCallShort: "Book a Call",
    chooseLang: "Choose language",
    langsAvailable: "Available languages",
    langTitle: "Language",
    themeDark: "Switch to dark mode",
    themeLight: "Switch to light mode",
  },
  header: {
    navMain: "Main navigation",
    navMobile: "Mobile navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    links: [
      { label: "Home", href: "#accueil" },
      { label: "About", href: "#a-propos" },
      { label: "Services", href: "#services" },
      { label: "Process", href: "#methode" },
      { label: "Contact", href: "#contact" },
    ],
  },
  hero: {
    eyebrow: "Hello, I'm",
    titleLine1: "Abdel Sobou",
    titleRole: "Web & AI Developer",
    titleAccent: "Freelance",
    accentFirst: true,
    leadBold: "I don't sell templates.",
    lead: "I build the site your business actually needs — showcase websites, e-commerce, landing pages, sales funnels and custom web apps.",
    ctaCall: "Book a Discovery Call",
    ctaContact: "Contact Me",
    trust:
      "Built for entrepreneurs, small businesses, e-commerce owners and new founders",
    chipCustom: "100% custom-built",
    chipAi: "AI-powered",
    photoAlt:
      "Portrait of Abdel Sobou Adiyo Yessoufou — Freelance Web & AI Developer",
  },
  about: {
    eyebrow: "About",
    titleStart: "A unique business deserves a",
    titleAccent: "unique website",
    paragraphA: "I am a web & AI developer, specialized in fully custom-built websites.",
    paragraphBold: "No purchased theme, no recycled layout:",
    paragraphB: "every site is designed around your business, your audience and your conversion goals.",
    keyPoints: [
      {
        icon: "fa-solid fa-bolt",
        title: "AI-assisted development",
        detail: "Speed without sacrificing quality",
      },
      {
        icon: "fa-solid fa-bullseye",
        title: "Zero templates",
        detail: "100% custom-built",
      },
      {
        icon: "fa-solid fa-globe",
        title: "Available in FR / EN / AR",
        detail: "French, English, Arabic",
      },
      {
        icon: "fa-solid fa-handshake",
        title: "Support included",
        detail: "After delivery",
      },
      {
        icon: "fa-solid fa-medal",
        title: "2 years of experience",
        detail: "In web & AI development",
      },
    ],
    contact: {
      eyebrow: "Contact details",
      title: "Let's talk about your project.",
      rows: [
        { icon: "fa-solid fa-location-dot", label: "Location", value: "Benin", href: "" },
        { icon: "fa-solid fa-envelope", label: "Email", value: "yessoufoua06@gmail.com", href: "mailto:yessoufoua06@gmail.com" },
        { icon: "fa-brands fa-whatsapp", label: "Phone / WhatsApp", value: "+229 47 74 99 68", href: "https://wa.me/22947749968" },
        { icon: "fa-solid fa-language", label: "Languages", value: "French · English · Arabic", href: "" },
      ],
      cta: "Book a Discovery Call",
      note: "Free · 20 min · No commitment",
    },
  },
  services: {
    eyebrow: "Services & expertise",
    titleStart: "What I can do",
    titleAccent: "for you",
    intro: "From showcase sites to web applications, every build is 100% custom, AI-powered and designed for user experience.",
    introBold: "Pick the goal, I'll build the tool.",
    items: [
      {
        icon: "fa-solid fa-store",
        title: "Showcase website",
        description:
          "A professional online presence that earns trust from the very first visit.",
        points: [
          "A unique design, in your brand colors",
          "Essential pages: home, services, about, contact",
          "Optimized for SEO, mobile and speed",
        ],
      },
      {
        icon: "fa-solid fa-cart-shopping",
        title: "E-commerce",
        description:
          "An online shop designed to sell, not just to exist.",
        points: [
          "A smooth, reassuring, friction-free buying journey",
          "Secure payment & simplified order management",
          "Product pages built to convert",
        ],
      },
      {
        icon: "fa-solid fa-bullseye",
        title: "Landing page",
        description:
          "One page, one clear goal: turning your traffic into customers.",
        points: [
          "One message, one offer, one call to action",
          "Persuasive structure, built for conversion",
          "Ideal for ad campaigns and launches",
        ],
      },
      {
        icon: "fa-solid fa-filter",
        title: "Sales funnel",
        description:
          "A journey designed to turn a visitor into a customer, step by step.",
        points: [
          "Capture, sales, upsell and confirmation pages",
          "Emails & automations connected to your tools",
          "Performance tracking at every step of the journey",
        ],
      },
      {
        icon: "fa-solid fa-gears",
        title: "Web application",
        description:
          "A custom tool to digitize and automate your business.",
        points: [
          "Features developed around your business processes",
          "Dashboards, user accounts and APIs",
          "AI-powered automations and integrations",
        ],
      },
    ],
    cardCta: "Discuss this need",
    noteTitle: "A need that doesn't fit any box?",
    noteText:
      "That's exactly the point of custom work. Every project starts with a free, no-commitment discovery call.",
    noteCta: "Book a Discovery Call",
  },
  whyCustom: {
    eyebrow: "Why not a template",
    titleStart: "A template is a",
    titleAccent: "one-size-fits-all suit",
    colA: {
      eyebrow: "What you're often sold",
      title: "Standard Template",
      items: [
        "The same design as thousands of other sites",
        "Customization limited to the logo and colors",
        "A rigid structure, designed for no one in particular",
        "Bloated code and useless options that slow everything down",
        "Total dependence on the theme, its updates and its limits",
      ],
    },
    colB: {
      badge: "100% custom-built",
      eyebrow: "What I build for you",
      title: "The Abdel Approach",
      items: [
        "A unique site, designed for your business and your customers",
        "Every page designed around your goals, not a generic case",
        "A polished UX that guides your visitors to action",
        "Clean, fast, durable code, boosted by AI",
        "A site that's 100% yours, scalable and theme-free",
      ],
    },
    conclusion: "You deserve better than one-size-fits-all.",
    cta: "Let's talk about your project",
  },
  audience: {
    eyebrow: "Who is it for?",
    titleStart: "You'll surely recognize",
    titleAccent: "yourself",
    intro: "I work with project owners from very different backgrounds.",
    introBold: "The common thread: wanting a site that truly reflects who they are.",
    profiles: [
      {
        icon: "fa-solid fa-seedling",
        title: "Career-switching entrepreneur",
        recognition:
          "You're finally launching your project, and everything has to be built from scratch.",
        benefit:
          "I lay the digital foundations of your business: a credible image from day one.",
      },
      {
        icon: "fa-solid fa-briefcase",
        title: "Employee",
        recognition:
          "You're growing your project on evenings and weekends, between work days.",
        benefit:
          "I handle the entire technical side so your free time stays focused on what matters.",
      },
      {
        icon: "fa-solid fa-laptop-code",
        title: "Student / freelancer",
        recognition:
          "Your skills are solid, but nothing online really shows them.",
        benefit:
          "A custom portfolio that showcases your work and attracts your first clients.",
      },
      {
        icon: "fa-solid fa-building",
        title: "SMB",
        recognition:
          "Your current site is dated, slow, or simply no longer reflects you.",
        benefit:
          "A modern, high-performance redesign that builds trust and generates real inquiries.",
      },
      {
        icon: "fa-solid fa-bag-shopping",
        title: "E-commerce owner",
        recognition:
          "You have traffic and visitors… but not enough orders at the end.",
        benefit:
          "An optimized buying journey, designed to turn your visits into sales.",
      },
    ],
    noteTitle: "Don't see yourself in any of these profiles?",
    noteText:
      "Even better: that's the very proof your project is unique. And it's exactly what I love to build.",
    noteCta: "Let's talk about your situation",
  },
  process: {
    eyebrow: "Work process",
    titleStart: "How we'll work",
    titleAccent: "together",
    intro: "A clear process, with milestones and no bad surprises.",
    introBold: "You always know exactly where your project stands.",
    steps: [
      {
        icon: "fa-solid fa-phone-volume",
        title: "Discovery call",
        description:
          "We discuss your business, your audience and your goals. Free and no commitment.",
        duration: "20 min",
      },
      {
        icon: "fa-solid fa-file-lines",
        title: "Proposal & structure",
        description:
          "You receive a clear proposal: site map, page content, timeline and budget.",
        duration: "48 h",
      },
      {
        icon: "fa-solid fa-pen-ruler",
        title: "Design & development",
        description:
          "I design and code your custom site, with validation checkpoints at every stage.",
        duration: "1–4 weeks",
      },
      {
        icon: "fa-solid fa-flask-vial",
        title: "Testing & optimization",
        description:
          "Speed, mobile, SEO and conversion paths: everything is tested and fine-tuned before launch.",
        duration: "3–5 days",
      },
      {
        icon: "fa-solid fa-rocket",
        title: "Delivery & support",
        description:
          "Go-live, handover of your site and follow-up included after delivery.",
        duration: "Ongoing",
      },
    ],
    conclusion: "It all starts with a simple conversation.",
    cta: "Start with step 1",
  },
  faq: {
    eyebrow: "FAQ",
    titleStart: "The questions I get asked",
    titleAccent: "most",
    items: [
      {
        icon: "fa-solid fa-clock",
        question: "How long will it take to build my site?",
        answer:
          "It depends on the scope of the project. Allow roughly 1 week for a landing page, 2 to 3 weeks for a showcase site, and 3 to 6 weeks for an e-commerce shop or a web application. AI-assisted development lets me move fast without ever sacrificing quality. Either way, you receive a precise schedule with the proposal, right from step 2.",
      },
      {
        icon: "fa-solid fa-wallet",
        question: "What budget should I plan for my project?",
        answer:
          "Since every site is custom-built, the budget depends on the number of pages, the features and the level of personalization. I don't apply “random” pricing: after the discovery call, you receive a clear, detailed proposal with a fixed price and no surprises. If your budget is tight, we prioritize the essentials together to get started, then grow the site over time.",
      },
      {
        icon: "fa-solid fa-earth-africa",
        question: "Do you work with international clients?",
        answer:
          "Yes, absolutely. I work remotely with clients all over the world and I support you in French, English or Arabic. We communicate by video call, email or WhatsApp, taking your time zone into account. Distance has never been a blocker: it simply requires a clear process — which is exactly what I offer.",
      },
      {
        icon: "fa-solid fa-lightbulb",
        question: "I don't know exactly what I want yet. Is that a problem?",
        answer:
          "Not at all — it's actually very common. My job isn't just to code: I help you clarify your need. During the discovery call, we start from your business, your audience and your goals, then I propose a concrete structure (pages, content, journey). You need neither technical skills nor a spec sheet: just come with your project.",
      },
      {
        icon: "fa-solid fa-life-ring",
        question: "What happens after the site is delivered?",
        answer:
          "I don't disappear once the site is live. Delivery includes a complete handover so you can be autonomous, plus a support period to fix any adjustments. After that, I remain available to evolve your site, add features or handle maintenance, depending on your needs.",
      },
    ],
    note: "Another question on your mind?",
    cta: "Ask me directly",
  },
  testimonials: {
    eyebrow: "Testimonials",
    titleStart: "They put their trust",
    titleAccent: "in me",
    items: [
      {
        icon: "fa-solid fa-star",
        quote:
          "Thank you Abdel — thanks to my online store I feel much more visible, and my online presence is really felt. For a month now, I've been finding plenty of clients.",
        name: "Raodath Alao",
        role: "Online store (women's items)",
      },
      {
        icon: "fa-solid fa-star",
        quote:
          "Thank you Abdel for my website. Thanks to it, my clients know everything about me and how I work, without having to ask too many questions. I'm very satisfied.",
        name: "Kamilath Nourou",
        role: "Graphic designer",
      },
    ],
  },
  finalCta: {
    badge: "Available for new projects",
    title: "A project in mind? Let's talk.",
    text: "Book a free discovery call. We'll talk about your business and your goals, and I'll tell you exactly how I can help.",
    cta: "Book my call",
    whatsapp: "Or contact me on WhatsApp",
    reassure: ["Free, no commitment", "20 minutes", "FR · EN · AR"],
  },
  footer: {
    tagline: "100% custom-built websites, AI-powered and designed for user experience.",
    taglineBold: "Zero templates, all real.",
    navTitle: "Navigation",
    expertiseTitle: "Expertise",
    contactTitle: "Contact",
    expertises: [
      "Showcase websites",
      "E-commerce",
      "Landing pages",
      "Sales funnels",
      "Web applications",
    ],
    calendlyRow: "Discovery call — Calendly",
    copyright: "© 2026 Abdel Sobou. All rights reserved.",
    legal: "Legal notice",
    privacy: "Privacy",
    handmade: "Designed and hand-coded — no templates, obviously.",
  },
};

/* ============================== AR ============================== */

const ar: Dict = {
  common: {
    brand: "عبد صوبو",
    role: "مطوّر مواقع وذكاء اصطناعي",
    ctaCall: "احجز مكالمة استكشافية",
    ctaCallShort: "احجز مكالمة",
    chooseLang: "اختر اللغة",
    langsAvailable: "اللغات المتاحة",
    langTitle: "اللغة",
    themeDark: "التبديل إلى الوضع الداكن",
    themeLight: "التبديل إلى الوضع الفاتح",
  },
  header: {
    navMain: "التنقل الرئيسي",
    navMobile: "تنقل الجوال",
    openMenu: "افتح القائمة",
    closeMenu: "أغلق القائمة",
    links: [
      { label: "الرئيسية", href: "#accueil" },
      { label: "نبذة عني", href: "#a-propos" },
      { label: "الخدمات", href: "#services" },
      { label: "منهجية العمل", href: "#methode" },
      { label: "تواصل", href: "#contact" },
    ],
  },
  hero: {
    eyebrow: "مرحباً، أنا",
    titleLine1: "عبد صوبو",
    titleRole: "مطوّر مواقع وذكاء اصطناعي",
    titleAccent: "مستقل",
    accentFirst: false,
    leadBold: "أنا لا أبيع قوالب جاهزة.",
    lead: "أبني الموقع الذي يناسب نشاطك فعلاً — مواقع تعريفية، متاجر إلكترونية، صفحات هبوط، قنوات بيع وتطبيقات ويب مخصصة.",
    ctaCall: "احجز مكالمة استكشافية",
    ctaContact: "تواصل معي",
    trust:
      "مصمَّم لرواد الأعمال، الشركات الصغيرة، أصحاب المتاجر الإلكترونية والمشاريع الناشئة",
    chipCustom: "تفصيل كامل 100%",
    chipAi: "مدعوم بالذكاء الاصطناعي",
    photoAlt: "صورة عبد صوبو أديو يسوفو — مطوّر مواقع وذكاء اصطناعي مستقل",
  },
  about: {
    eyebrow: "نبذة عني",
    titleStart: "مشروع فريد يستحق",
    titleAccent: "موقعاً فريداً",
    paragraphA: "أنا مطور مواقع وذكاء اصطناعي، متخصص في إنشاء مواقع مخصصة بالكامل.",
    paragraphBold: "لا قوالب مشتراة ولا تصاميم معاد تدويرها:",
    paragraphB: "كل موقع يُصمم وفق نشاطك وجمهورك المستهدف وأهداف التحويل الخاصة بك.",
    keyPoints: [
      {
        icon: "fa-solid fa-bolt",
        title: "تطوير مدعوم بالذكاء الاصطناعي",
        detail: "سرعة دون التضحية بالجودة",
      },
      {
        icon: "fa-solid fa-bullseye",
        title: "لا قوالب جاهزة",
        detail: "تفصيل كامل 100%",
      },
      {
        icon: "fa-solid fa-globe",
        title: "متاح بالفرنسية والإنجليزية والعربية",
        detail: "الفرنسية، الإنجليزية، العربية",
      },
      {
        icon: "fa-solid fa-handshake",
        title: "مرافقة شاملة",
        detail: "بعد التسليم",
      },
      {
        icon: "fa-solid fa-medal",
        title: "سنتان من الخبرة",
        detail: "في تطوير الويب والذكاء الاصطناعي",
      },
    ],
    contact: {
      eyebrow: "معلومات التواصل",
      title: "لنتحدث عن مشروعك.",
      rows: [
        { icon: "fa-solid fa-location-dot", label: "الموقع", value: "بنين", href: "" },
        { icon: "fa-solid fa-envelope", label: "البريد الإلكتروني", value: "yessoufoua06@gmail.com", href: "mailto:yessoufoua06@gmail.com" },
        { icon: "fa-brands fa-whatsapp", label: "الهاتف / واتساب", value: "+229 47 74 99 68", href: "https://wa.me/22947749968" },
        { icon: "fa-solid fa-language", label: "اللغات", value: "الفرنسية · الإنجليزية · العربية", href: "" },
      ],
      cta: "احجز مكالمة استكشافية",
      note: "مجاني · 20 دقيقة · دون التزام",
    },
  },
  services: {
    eyebrow: "الخدمات والخبرات",
    titleStart: "ما يمكنني تقديمه",
    titleAccent: "لك",
    intro: "من الموقع التعريفي إلى تطبيق الويب، كل إنجاز مصمم بالكامل حسب الطلب، مدعوم بالذكاء الاصطناعي ومهيأ لتجربة المستخدم.",
    introBold: "اختر الهدف، وأنا أبني الأداة.",
    items: [
      {
        icon: "fa-solid fa-store",
        title: "موقع تعريفي",
        description: "حضور احترافي على الإنترنت يبعث الثقة منذ الزيارة الأولى.",
        points: [
          "تصميم فريد بألوان علامتك التجارية",
          "الصفحات الأساسية: الرئيسية، الخدمات، من نحن، التواصل",
          "محسّن لمحركات البحث والجوال والسرعة",
        ],
      },
      {
        icon: "fa-solid fa-cart-shopping",
        title: "متجر إلكتروني",
        description: "متجر إلكتروني مصمم للبيع، لا لمجرد الوجود.",
        points: [
          "رحلة شراء سلسة ومطمئنة دون عوائق",
          "دفع آمن وإدارة مبسطة للطلبات",
          "صفحات منتجات مصممة للتحويل",
        ],
      },
      {
        icon: "fa-solid fa-bullseye",
        title: "صفحة هبوط",
        description: "صفحة واحدة وهدف واضح: تحويل زوارك إلى عملاء.",
        points: [
          "رسالة واحدة، عرض واحد، دعوة واحدة لاتخاذ إجراء",
          "هيكل مقنع مصمم للتحويل",
          "مثالية لحملاتك الإعلانية وإطلاقاتك",
        ],
      },
      {
        icon: "fa-solid fa-filter",
        title: "قمع مبيعات",
        description: "مسار مصمم لتحويل الزائر إلى عميل، خطوة بخطوة.",
        points: [
          "صفحات الالتقاط والبيع والبيع الإضافي والتأكيد",
          "رسائل بريدية وأتمتة مرتبطة بأدواتك",
          "تتبع الأداء في كل مرحلة من المسار",
        ],
      },
      {
        icon: "fa-solid fa-gears",
        title: "تطبيق ويب",
        description: "أداة مخصصة لرقمنة نشاطك وأتمتته.",
        points: [
          "ميزات مطورة وفق عمليات عملك",
          "لوحات تحكم وحسابات مستخدمين وواجهات برمجية",
          "أتمتة وتكاملات مدعومة بالذكاء الاصطناعي",
        ],
      },
    ],
    cardCta: "ناقش هذا الاحتياج",
    noteTitle: "احتياج لا يندرج تحت أي خانة؟",
    noteText: "هذا هو جوهر العمل المخصص. يبدأ كل مشروع بمكالمة استكشافية مجانية ودون التزام.",
    noteCta: "احجز مكالمة استكشافية",
  },
  whyCustom: {
    eyebrow: "لماذا لا قوالب جاهزة",
    titleStart: "القالب الجاهز",
    titleAccent: "كبدلة بمقاس واحد للجميع",
    colA: {
      eyebrow: "ما يُباع لك عادة",
      title: "قالب تقليدي",
      items: [
        "نفس التصميم لدى آلاف المواقع الأخرى",
        "تخصيص محدود بالشعار والألوان",
        "هيكل جامد لم يُصمم لأحد بعينه",
        "كود ثقيل وخيارات غير ضرورية تبطئ كل شيء",
        "اعتماد كلي على القالب وتحديثاته وقيوده",
      ],
    },
    colB: {
      badge: "تفصيل كامل 100%",
      eyebrow: "ما أبنيه لك",
      title: "أسلوب عبد",
      items: [
        "موقع فريد، مصمم لعملك ولعملائك",
        "كل صفحة مصممة لأهدافك، لا لحالة عامة",
        "تجربة استخدام متقنة توجه زوارك نحو اتخاذ الإجراء",
        "كود نظيف وسريع ومتين، مدعوم بالذكاء الاصطناعي",
        "موقع يخصك 100%، قابل للتطوير ودون قيود قالب",
      ],
    },
    conclusion: "تستحق أفضل من مقاس واحد للجميع.",
    cta: "لنتحدث عن مشروعك",
  },
  audience: {
    eyebrow: "لمن؟",
    titleStart: "ستتعرف حتماً على",
    titleAccent: "نفسك",
    intro: "أعمل مع أصحاب مشاريع من خلفيات مختلفة جداً.",
    introBold: "القاسم المشترك: الرغبة في موقع يشبههم حقاً.",
    profiles: [
      {
        icon: "fa-solid fa-seedling",
        title: "رائد أعمال في مسار جديد",
        recognition: "أخيراً تُطلق مشروعك، وكل شيء يُبنى من الصفر.",
        benefit: "أضع الأسس الرقمية لنشاطك: صورة موثوقة منذ اليوم الأول.",
      },
      {
        icon: "fa-solid fa-briefcase",
        title: "موظف",
        recognition: "تطور مشروعك في المساء وعطلة نهاية الأسبوع، بين أيام عملك.",
        benefit: "أتولى الجانب التقني بالكامل ليظل وقتك الحر مركزاً على الأساسيات.",
      },
      {
        icon: "fa-solid fa-laptop-code",
        title: "طالب / مستقل",
        recognition: "مهاراتك قوية، لكن لا شيء على الإنترنت يُظهرها فعلاً.",
        benefit: "معرض أعمال مخصص يُبرز إنجازاتك ويجذب أولى عملائك.",
      },
      {
        icon: "fa-solid fa-building",
        title: "شركة صغيرة أو متوسطة",
        recognition: "موقعك الحالي قديم أو بطيء أو لم يعد يشبهك.",
        benefit: "تجديد عصري وفعال يبعث الثقة ويولد طلبات حقيقية.",
      },
      {
        icon: "fa-solid fa-bag-shopping",
        title: "تاجر إلكتروني",
        recognition: "لديك زيارات ومتصفحون… لكن الطلبات لا تكفي في النهاية.",
        benefit: "رحلة شراء محسّنة مصممة لتحويل الزيارات إلى مبيعات.",
      },
    ],
    noteTitle: "لم تجد نفسك في أي من هذه الفئات؟",
    noteText: "هذا أمر جيد: إنه دليل على أن مشروعك فريد، وهذا بالضبط ما أحب بناءه.",
    noteCta: "لنتحدث عن وضعك",
  },
  process: {
    eyebrow: "منهجية العمل",
    titleStart: "كيف سنعمل",
    titleAccent: "معاً",
    intro: "عملية واضحة ومنظمة دون مفاجآت سيئة.",
    introBold: "تعرف في كل لحظة أين وصل مشروعك.",
    steps: [
      {
        icon: "fa-solid fa-phone-volume",
        title: "المكالمة الاستكشافية",
        description: "نتحدث عن نشاطك وجمهورك المستهدف وأهدافك. مجاناً ودون التزام.",
        duration: "20 دقيقة",
      },
      {
        icon: "fa-solid fa-file-lines",
        title: "العرض والهيكلة",
        description: "أقدم لك عرضاً واضحاً: خريطة الموقع، محتوى الصفحات، الجدول الزمني والميزانية.",
        duration: "48 ساعة",
      },
      {
        icon: "fa-solid fa-pen-ruler",
        title: "التصميم والتطوير",
        description: "أصمم وأبرمج موقعك المخصص، مع نقاط مراجعة في كل مرحلة.",
        duration: "من 1 إلى 4 أسابيع",
      },
      {
        icon: "fa-solid fa-flask-vial",
        title: "الاختبار والتحسين",
        description: "السرعة والجوال ومحركات البحث ومسارات التحويل: كل شيء يُختبر ويُحسّن قبل الإطلاق.",
        duration: "من 3 إلى 5 أيام",
      },
      {
        icon: "fa-solid fa-rocket",
        title: "التسليم والمرافقة",
        description: "الإطلاق، تسليم إدارة موقعك، ومتابعة شاملة بعد التسليم.",
        duration: "بشكل مستمر",
      },
    ],
    conclusion: "كل شيء يبدأ بمحادثة بسيطة.",
    cta: "ابدأ بالخطوة الأولى",
  },
  faq: {
    eyebrow: "الأسئلة الشائعة",
    titleStart: "الأسئلة",
    titleAccent: "الأكثر شيوعاً",
    items: [
      {
        icon: "fa-solid fa-clock",
        question: "كم يستغرق تنفيذ موقعي؟",
        answer:
          "يعتمد ذلك على حجم المشروع. احسب حوالي أسبوع واحد لصفحة هبوط، من أسبوعين إلى 3 أسابيع لموقع تعريفي، ومن 3 إلى 6 أسابيع لمتجر إلكتروني أو تطبيق ويب. التطوير المدعوم بالذكاء الاصطناعي يمكنني من العمل بسرعة دون التضحية بالجودة أبداً. وفي جميع الحالات، تستلم جدولاً زمنياً دقيقاً مع العرض، ابتداءً من الخطوة الثانية.",
      },
      {
        icon: "fa-solid fa-wallet",
        question: "ما الميزانية المناسبة لمشروعي؟",
        answer:
          "بما أن كل موقع مصمم حسب الطلب، تعتمد الميزانية على عدد الصفحات والميزات ومستوى التخصيص. لا أطبق تسعيراً «عشوائياً»: بعد المكالمة الاستكشافية، تستلم عرضاً واضحاً ومفصلاً بسعر ثابت دون مفاجآت. وإذا كانت ميزانيتك محدودة، نرتب الأولويات معاً للانطلاق، ثم نطور الموقع تدريجياً.",
      },
      {
        icon: "fa-solid fa-earth-africa",
        question: "هل تعمل مع عملاء دوليين؟",
        answer:
          "نعم، بالتأكيد. أعمل عن بُعد مع عملاء في جميع أنحاء العالم وأرافقك بالفرنسية أو الإنجليزية أو العربية. تتم المحادثات عبر الفيديو أو البريد الإلكتروني أو واتساب، مع مراعاة فارق التوقيت. المسافة لم تكن يوماً عائقاً: كل ما تحتاجه هو عملية واضحة، وهذا بالضبط ما أقدمه.",
      },
      {
        icon: "fa-solid fa-lightbulb",
        question: "لا أعرف بالضبط ما أريد بعد. هل هذه مشكلة؟",
        answer:
          "إطلاقاً، وهذا شائع جداً. دوري ليس البرمجة فحسب: أساعدك على توضيح احتياجك. خلال المكالمة الاستكشافية، ننطلق من نشاطك وجمهورك المستهدف وأهدافك، ثم أقترح عليك هيكلاً ملموساً (الصفحات، المحتوى، المسار). لا تحتاج إلى مهارات تقنية ولا إلى مواصفات جاهزة: تعال بمشروعك فحسب.",
      },
      {
        icon: "fa-solid fa-life-ring",
        question: "ماذا يحدث بعد تسليم الموقع؟",
        answer:
          "لا أختفي بمجرد إطلاق الموقع. يشمل التسليم شرحاً كاملاً لتصبح مستقلاً في الإدارة، بالإضافة إلى فترة مرافقة لتصحيح أي تعديلات. وبعد ذلك، أبقى متاحاً لتطوير موقعك أو إضافة ميزات أو ضمان الصيانة، حسب احتياجاتك.",
      },
    ],
    note: "سؤال آخر في ذهنك؟",
    cta: "اطرحه عليّ مباشرة",
  },
  testimonials: {
    eyebrow: "شهادات العملاء",
    titleStart: "هؤلاء وثقوا",
    titleAccent: "بي",
    items: [
      {
        icon: "fa-solid fa-star",
        quote:
          "شكراً عبدل، بفضل متجري الإلكتروني أشعر أنني أكثر ظهوراً فعلاً وحسّ بوجودي على الإنترنت. منذ شهر، أصبحت أجد الكثير من العملاء.",
        name: "Raodath Alao",
        role: "متجر إلكتروني (بيع ملابس وإكسسوارات نسائية)",
      },
      {
        icon: "fa-solid fa-star",
        quote:
          "شكراً عبدل على موقعي. بفضله يعرف عملائي كل شيء عني وكيف أعمل، دون الحاجة إلى طرح الكثير من الأسئلة. أنا راضية تماماً.",
        name: "Kamilath Nourou",
        role: "مصممة جرافيك",
      },
    ],
  },
  finalCta: {
    badge: "متاح لمشاريع جديدة",
    title: "لديك مشروع في ذهنك؟ لنتحدث عنه.",
    text: "احجز مكالمة استكشافية مجانية. سنتحدث عن نشاطك وأهدافك، وسأخبرك بالضبط كيف يمكنني مساعدتك.",
    cta: "احجز مكالمتي",
    whatsapp: "أو تواصل معي عبر واتساب",
    reassure: ["مجاني ودون التزام", "20 دقيقة", "FR · EN · AR"],
  },
  footer: {
    tagline: "مواقع مخصصة 100%، مدعومة بالذكاء الاصطناعي ومصممة لتجربة المستخدم.",
    taglineBold: "لا قوالب، كل شيء أصيل.",
    navTitle: "التنقل",
    expertiseTitle: "الخبرات",
    contactTitle: "التواصل",
    expertises: [
      "مواقع تعريفية",
      "متاجر إلكترونية",
      "صفحات هبوط",
      "قنوات مبيعات",
      "تطبيقات ويب",
    ],
    calendlyRow: "مكالمة استكشافية — Calendly",
    copyright: "© 2026 عبد صوبو. جميع الحقوق محفوظة.",
    legal: "إشعار قانوني",
    privacy: "الخصوصية",
    handmade: "صُمم وطُور يدوياً — بدون قوالب، بالطبع.",
  },
};

export const translations: Record<Lang, Dict> = {
  FR: fr,
  EN: en,
  AR: ar,
};
