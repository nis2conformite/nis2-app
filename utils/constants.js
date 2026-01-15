// utils/constants.js
// Centralise toutes les constantes configurables du projet

// ============================================
// QUIZ NIS2 - Questions et Configuration
// ============================================

export const QUIZ_CONFIG = {
  totalQuestions: 10,
  scoringQuestions: 7, // Questions 1-7 comptent pour le score
  displayDelay: 0, // Délai avant affichage (ms)
};

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    text: "Votre entreprise compte-t-elle plus de 50 salariés ?",
    answers: ['Oui', 'Non'],
    category: 'eligibility'
  },
  {
    id: 2,
    text: "Réalisez-vous un chiffre d'affaires supérieur à 10 millions d'euros ?",
    answers: ['Oui', 'Non'],
    category: 'eligibility'
  },
  {
    id: 3,
    text: "Êtes-vous actif dans l'un des secteurs critiques : santé, énergie, eau, transport, numérique, administration publique, agroalimentaire ?",
    answers: ['Oui', 'Non'],
    category: 'sector'
  },
  {
    id: 4,
    text: "Fournissez-vous des services numériques critiques (hébergement, cloud, DNS, SaaS, etc.) ?",
    answers: ['Oui', 'Non'],
    category: 'services'
  },
  {
    id: 5,
    text: "Avez-vous un rôle de sous-traitant dans la chaîne de valeur d'un acteur critique ?",
    answers: ['Oui', 'Non'],
    category: 'supply-chain'
  },
  {
    id: 6,
    text: "Traitez-vous des données sensibles ou critiques (données de santé, infrastructures, systèmes industriels) ?",
    answers: ['Oui', 'Non'],
    category: 'data'
  },
  {
    id: 7,
    text: "Avez-vous été victime d'un incident ou d'une tentative de cyberattaque dans les 12 derniers mois ?",
    answers: ['Oui', 'Non'],
    category: 'security'
  },
  {
    id: 8,
    text: "Disposez-vous d'une politique formalisée de sécurité des systèmes d'information ?",
    answers: ['Oui', 'Non'],
    category: 'maturity'
  },
  {
    id: 9,
    text: "Avez-vous une personne ou un prestataire en charge de la cybersécurité ?",
    answers: ['Oui', 'Non'],
    category: 'maturity'
  },
  {
    id: 10,
    text: "Votre entreprise a-t-elle déjà mis en place un plan de continuité ou de gestion de crise informatique ?",
    answers: ['Oui', 'Non'],
    category: 'maturity'
  }
];

export const QUIZ_SCORE_THRESHOLDS = {
  low: { max: 3, level: 'low' },
  medium: { max: 6, level: 'medium' },
  high: { max: 10, level: 'high' }
};

export const QUIZ_RESULTS = {
  low: {
    title: 'Faible exposition probable',
    description: '<strong>Vigilance recommandée</strong> si vous êtes en croissance ou sous-traitant critique. Même si votre exposition semble faible aujourd\'hui, les évolutions de votre activité peuvent vous faire basculer dans le périmètre NIS2. Un audit de positionnement vous permettra d\'anticiper sereinement.',
    color: '#00875A',
    ctaPrimary: 'Audit préventif',
    ctaSecondary: 'En savoir plus'
  },
  medium: {
    title: 'Vous êtes potentiellement concerné',
    description: '<strong>Un audit de positionnement est fortement recommandé.</strong> Plusieurs critères indiquent que vous pourriez être dans le périmètre de la directive NIS2. Il est essentiel d\'évaluer précisément votre exposition pour éviter des sanctions et transformer cette obligation en avantage commercial.',
    color: '#f59e0b',
    ctaPrimary: 'Audit complet',
    ctaSecondary: 'Voir les offres'
  },
  high: {
    title: 'Vous êtes très probablement concerné',
    description: '<strong>Il est urgent d\'agir.</strong> Votre profil correspond clairement aux entités régulées par NIS2. Les contrôles ANSSI démarrent en 2026 et les sanctions peuvent atteindre 10M€. Mais c\'est aussi une opportunité : être conforme vous ouvre l\'accès aux appels d\'offres et renforce votre crédibilité auprès de vos clients.',
    color: '#FF5630',
    ctaPrimary: 'Urgence - RDV immédiat',
    ctaSecondary: 'Solutions express'
  }
};

// ============================================
// PRICING - Configuration des Offres
// ============================================

export const PRICING_OFFERS = [
  {
    id: 'discovery',
    name: 'Découverte',
    price: 3490,
    currency: '€',
    period: 'Immédiat • Diagnostic',
    popular: false,
    idealFor: 'Evaluation immédiate et abordable',
    features: [
      'Audit cyber NIS2 initial',
      'Résultat immédiat ⚡',
      'Rapport d\'audit synthétique',
      'Recommandations d\'actions prioritaires'
    ],
    cta: {
      text: 'Je fais mon diagnostic NIS2',
      type: 'stripe', // 'stripe' | 'calendly' | 'link'
      action: 'handleStripeCheckout'
    }
  },
  {
    id: 'essential',
    name: 'Essentiel',
    price: 7990,
    currency: '€',
    period: 'En 48H',
    popular: false,
    idealFor: 'Entités nécessitant un plan structuré',
    features: [
      'Audit cyber NIS2',
      'Rapport complet validé par nos équipes',
      'Analyse des écarts de conformité',
      'Plan de remédiation détaillé avec priorisation',
      'Restitution avec un expert, 1h de visio',
      'Accès à notre base de modèle de documents',
      '6 mois d\'accès à notre plateforme'
    ],
    cta: {
      text: 'Prendre rendez-vous',
      type: 'calendly',
      link: 'https://calendly.com/adrien-ruggirello/30min'
    }
  },
  {
    id: 'expertise',
    name: 'Expertise',
    price: 14900,
    currency: '€',
    period: '1 mois',
    popular: true,
    idealFor: 'Entités nécessitant un plan structuré et un accompagnement en cas de contrôle',
    features: [
      'Audit cyber NIS2',
      'Rapport complet validé par nos équipes',
      'Analyse des écarts de conformité',
      'Plan de remédiation détaillé avec priorisation',
      'Restitution avec un expert, 1h de visio',
      'Entretien préalable avec un expert, 1h de visio',
      'Roadmap personnalisée pour une mise en conformité',
      'Enregistrement de votre entreprise à l\'ANSSI',
      'Constitution dossier d\'aides d\'état',
      'Accès à notre base de modèle de documents',
      '12 mois d\'accès à notre plateforme',
      'Mise a jour des dernières evolutions législatives'
    ],
    cta: {
      text: 'Prendre rendez-vous',
      type: 'calendly',
      link: 'https://calendly.com/adrien-ruggirello/30min'
    }
  }
];

// ============================================
// POPUP LEAD MAGNET - Configuration
// ============================================

export const POPUP_CONFIG = {
  delay: 30000, // 30 secondes
  conditions: {
    checkQuiz: true,
    checkVideo: true,
    showOnce: true
  }
};

export const POPUP_OPTIONS = [
  {
    id: 'download',
    icon: '📥',
    title: 'Télécharger gratuitement le guide NIS2',
    description: '<strong>Tout comprendre en quelques minutes</strong> — Directive, risques pour les entreprises et opportunités. Format PDF pratique et actionnable.',
    downloadLink: 'https://drive.google.com/uc?export=download&id=1mZp7x8nMrbVWUVwq8LMW-f1fEKepCr2u',
    successMessage: '✅ Téléchargement lancé ! Le guide NIS2 devrait s\'ouvrir dans un nouvel onglet.'
  },
  {
    id: 'contact',
    icon: '📞',
    title: 'Réserver un diagnostic gratuit personnalisé',
    description: '<strong>Échange avec un expert cybersécurité</strong> — Diagnostic immédiat de votre situation, recommandations sur-mesure, plan d\'action.',
    successMessage: 'Demande reçue ! Un de nos experts vous contactera dans les prochaines heures pour planifier votre audit gratuit.'
  }
];

// ============================================
// TESTIMONIALS - Témoignages Clients
// ============================================

export const TESTIMONIALS = [
  {
    id: 1,
    text: "L'accompagnement NIS2 nous a permis de structurer clairement nos obligations et de prioriser les actions essentielles. La démarche est pragmatique, pédagogique et parfaitement adaptée à une PME.",
    author: {
      name: "Alex Martin",
      role: "CEO • Services Numériques • 65 sal.",
      avatar: "AM",
      company: "Tech Services"
    }
  },
  {
    id: 2,
    text: "Accompagnement précis, méthodique, sans jargon inutile. L'équipe a su traduire les exigences réglementaires en plan d'action opérationnel. Aujourd'hui, la conformité est devenue un argument de différenciation face à nos clients grands comptes.",
    author: {
      name: "Marc Dubois",
      role: "Directeur Général • Transport • 120 sal.",
      avatar: "MD",
      company: "Transport Solutions"
    }
  },
  {
    id: 3,
    text: "L'approche pédagogique m'a permis de mobiliser mes équipes efficacement. En 3 mois, nous avons structuré notre gouvernance cybersécurité et obtenu la conformité. C'est désormais un atout commercial majeur dans nos négociations.",
    author: {
      name: "Sophie Lemaire",
      role: "Directrice Administrative et Financière • Santé • 85 sal.",
      avatar: "SL",
      company: "Health Systems"
    }
  }
];

// ============================================
// STATS - Statistiques Clés
// ============================================

export const HERO_STATS = [
  {
    value: "92%",
    label: "PME et ETI non prêtes",
    source: "Étude ANSSI 2024"
  },
  {
    value: "10M€",
    label: "amende max ou 2% du CA",
    source: "Directive NIS2"
  },
  {
    value: "70%",
    label: "d'aides de l'état possibles",
    source: "France Relance"
  },
  {
    value: "+40%",
    label: "de cyber attaques en 2024",
    source: "CESIN"
  }
];

export const IMPACT_STATS = [
  {
    icon: "📈",
    value: "+38%",
    label: "Hausse attaques cyber",
    description: "Les attaques contre les PME ont explosé de 38% en 2024. Les cybercriminels ciblent les entreprises non protégées."
  },
  {
    icon: "💸",
    value: "4,35M€",
    label: "Coût moyen cyber attaque",
    description: "60% des PME touchées ferment dans les 12 mois. Arrêt de production (21 jours en moyenne), perte de données, rançons."
  }
];

// ============================================
// FAQ - Questions Fréquentes
// ============================================

export const FAQ_ITEMS = [
  {
    id: 1,
    icon: "🎯",
    question: "Comment la conformité devient-elle un avantage commercial ?",
    answer: "La conformité NIS2 et ISO 27001 deviennent des critères d'éligibilité dans les appels d'offres publics et privés. Sans certification, vous êtes d'office écarté. C'est un différenciateur stratégique qui vous positionne comme partenaire de confiance face à vos concurrents non conformes."
  },
  {
    id: 2,
    icon: "💰",
    question: "Quel est le véritable coût de la non-conformité ?",
    answer: "Au-delà des sanctions financières (jusqu'à 10M€), la non-conformité entraîne : exclusion des marchés, perte de clients B2B, atteinte réputationnelle, et risque pénal pour le dirigeant. La mise en conformité coûte 200 fois moins cher qu'une sanction et ouvre des opportunités de croissance."
  },
  {
    id: 3,
    icon: "⏱️",
    question: "Quel délai prévoir pour atteindre la conformité ?",
    answer: "Avec notre méthodologie éprouvée : 90 jours en moyenne de l'audit initial à la conformité effective. Les premiers jalons de sécurisation sont mis en place dès les 2 premières semaines. Notre équipe certifiée ISO 27001 optimise chaque étape du parcours."
  },
  {
    id: 4,
    icon: "🤔",
    question: "Mon organisation est-elle dans le périmètre NIS2 ?",
    answer: "Vous êtes concerné si : +50 salariés OU +10M€ CA, ET secteur critique (santé, énergie, transport, services numériques, industrie, etc.). La directive couvre 18 secteurs et leurs chaînes d'approvisionnement. Contactez-nous pour un diagnostic gratuit immédiat."
  },
  {
    id: 5,
    icon: "📋",
    question: "Comment NIS2 s'articule avec le RGPD et ISO 27001 ?",
    answer: "Ces cadres sont complémentaires. RGPD = protection des données personnelles. ISO 27001 = management de la sécurité de l'information. NIS2 = résilience des réseaux et systèmes critiques. Une démarche NIS2 bien menée facilite grandement la conformité RGPD et prépare la certification ISO 27001."
  },
  {
    id: 6,
    icon: "🏆",
    question: "Pourquoi nous choisir ?",
    answer: "15 ans d'expertise, équipe ISO 27001, experts ANSSI, 150+ PME accompagnées, 98% conformité, 0 client sanctionné. Nous parlons votre langage, pas du jargon."
  }
];

// ============================================
// CONTACT - Informations de Contact
// ============================================

export const CONTACT_INFO = {
  company: "Cyber Solferino",
  tagline: "La cyber sécurité : un impératif stratégique",
  website: "www.cyber-solferino.com",
  phone: "+33123456789",
  email: "contact@cyber-solferino.com",
  calendly: "https://calendly.com/adrien-ruggirello/30min",
  social: {
    linkedin: "https://linkedin.com/company/cyber-solferino",
    twitter: "https://twitter.com/cybersolferino"
  }
};

// ============================================
// LINKS - Liens Externes
// ============================================

export const EXTERNAL_LINKS = {
  guideNIS2: "https://drive.google.com/file/d/1pHdC_x0PCa2rkWBBPx9MHWujG2xm6H8B/view?usp=share_link",
  videoYoutube: "https://www.youtube.com/embed/461tWBUzrY8?enablejsapi=1",
  downloadGuide: "https://drive.google.com/uc?export=download&id=1mZp7x8nMrbVWUVwq8LMW-f1fEKepCr2u"
};

// ============================================
// EXPERTISE - Timeline
// ============================================

export const EXPERTISE_TIMELINE = [
  {
    number: "01",
    title: "Analyse de conformité",
    description: "Identification des écarts clés de conformité selon le référenciel de l'ANSSI. Notre audit complet permet de cartographier précisément votre niveau actuel et les points d'amélioration prioritaires.",
    image: "/approach-analytics.jpg"
  },
  {
    number: "02",
    title: "Comprendre ses vulnérabilités",
    description: "Connaître son niveau de conformité aux obligations de sécurité NIS2. Nous vous aidons à identifier les risques critiques et à prioriser les actions correctives pour une mise en conformité efficace.",
    image: "/approach-security.jpg"
  },
  {
    number: "03",
    title: "Accompagnement adapté",
    description: "Choisissez l'offre adaptée en fonction de votre niveau global de maturité cyber. Notre équipe vous accompagne dans la mise en œuvre de votre plan d'action personnalisé.",
    image: "/approach-consulting.jpg"
  }
];

// ============================================
// EXPORT PAR DÉFAUT
// ============================================

export default {
  QUIZ_CONFIG,
  QUIZ_QUESTIONS,
  QUIZ_RESULTS,
  PRICING_OFFERS,
  POPUP_CONFIG,
  TESTIMONIALS,
  HERO_STATS,
  FAQ_ITEMS,
  CONTACT_INFO,
  EXTERNAL_LINKS,
  EXPERTISE_TIMELINE
};
