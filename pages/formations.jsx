import { useState } from 'react';
import Head from 'next/head';
import { CONTACT_INFO } from '../utils/constants';
import MenuBurger from '../components/MenuBurger';

export default function Formations() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const sessions = [
    {
      date: '15 Février 2025',
      title: 'Formation Dirigeants NIS2',
      duration: '1 journée (7h)',
      location: 'Visio',
      places: 8,
      price: '890€ HT'
    },
    {
      date: '22 Février 2025',
      title: 'Sensibilisation Cybersécurité',
      duration: '½ journée (3h30)',
      location: 'Visio',
      places: 15,
      price: '290€ HT'
    },
    {
      date: '8 Mars 2025',
      title: 'Formation Dirigeants NIS2',
      duration: '1 journée (7h)',
      location: 'Présentiel Paris',
      places: 12,
      price: '990€ HT'
    },
    {
      date: '15 Mars 2025',
      title: 'Culture Cybersécurité Équipes',
      duration: '1 journée (7h)',
      location: 'Visio',
      places: 20,
      price: '490€ HT'
    }
  ];

  const faqFormations = [
    {
      question: "Les formations sont-elles certifiantes ?",
      answer: "Oui, toutes nos formations délivrent une attestation de formation reconnue. La formation dirigeants NIS2 délivre un certificat spécifique attestant de la conformité à l'obligation de formation des organes de direction imposée par la directive. Ce certificat est valable comme preuve auprès de l'ANSSI."
    },
    {
      question: "Puis-je former tous mes collaborateurs en une seule session ?",
      answer: "Oui, nous proposons des formations intra-entreprise sur mesure. Nous pouvons intervenir sur site ou en visio pour former jusqu'à 20 personnes par session. Pour les grandes entreprises, nous organisons plusieurs sessions successives ou des formations en e-learning accessibles à tous vos collaborateurs."
    },
    {
      question: "Quels sont les prérequis pour la formation dirigeants ?",
      answer: "Aucun prérequis technique n'est nécessaire. La formation est conçue pour des dirigeants et membres de COMEX/CODIR sans background IT. Nous vulgarisons les concepts techniques et nous concentrons sur les enjeux stratégiques, juridiques et organisationnels de la cybersécurité."
    },
    {
      question: "Proposez-vous des formations en présentiel ?",
      answer: "Oui, nous proposons des formations en présentiel à Paris et dans les principales métropoles françaises. Le présentiel est particulièrement adapté aux ateliers pratiques et aux simulations de crise. Contactez-nous pour connaître les prochaines dates et lieux disponibles."
    }
  ];

  const formats = [
    {
      id: 1,
      title: 'Formation en Visio',
      subtitle: 'Sessions en ligne interactives',
      description: 'Pour qui ? Collaborateurs, dirigeants, équipes IT',
      features: [
        'Format court (1h à 2h)',
        'Modules interactifs',
        'Questions/réponses en direct',
        'Replays disponibles',
      ],
      objectives: [
        'Comprendre les grands principes de NIS2',
        'Savoir détecter les signaux faibles d\'un incident',
        'Adopter les bons réflexes cyber au quotidien',
      ],
      advantages: [
        'Souplesse et accessibilité',
        'Convient aux multi-sites',
        'Idéal sans logistique lourde',
      ],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <polygon points="23 7 16 12 23 17 23 7"></polygon>
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
        </svg>
      )
    },
    {
      id: 2,
      title: 'MOOC NIS2',
      subtitle: 'Formation en ligne autonome',
      description: 'Pour qui ? Entreprises souhaitant former à large échelle',
      features: [
        'Plateforme en ligne 24h/24',
        'Vidéos courtes + quiz',
        'Suivi des apprenants',
        'Certificat de formation',
      ],
      objectives: [
        'Former massivement sans mobiliser de formateur',
        'Structurer une montée en compétence sur 4 semaines',
        'Obtenir une traçabilité de la sensibilisation',
      ],
      advantages: [
        'Efficacité logistique maximale',
        'Coût réduit par collaborateur',
        'Formation continue accessible',
      ],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      )
    },
    {
      id: 3,
      title: 'Formation sur site',
      subtitle: 'Interventions en présentiel',
      description: 'Pour qui ? Structures souhaitant mobiliser une équipe entière',
      features: [
        'Présence d\'un formateur qualifié',
        'Ateliers pratiques et mises en situation',
        'Travail en petits groupes (jusqu\'à 20 personnes)',
      ],
      objectives: [
        'Appliquer directement les bonnes pratiques',
        'Simuler une cyberattaque et organiser une réponse',
        'Renforcer la culture cyber au sein de l\'équipe',
      ],
      advantages: [
        'Impact immédiat',
        'Mobilisation collective',
        'Personnalisation maximale',
      ],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
  ];

  const trainings = [
    {
      id: 1,
      title: '"Culture cybersécurité" pour tous les salariés',
      description: 'Que tous les employés comprennent les risques cyber et les bonnes pratiques.',
      topics: ['Cyber-hygiène : mots de passe, phishing, accès', 'Module pratique, interactif et illustré d\'exemples concrets', 'Idéal pour les équipes non techniques'],
    },
    {
      id: 2,
      title: 'Formations spécifiques par métier',
      description: 'Adapter la sensibilisation aux enjeux de chaque fonction.',
      topics: ['IT : Sécurisation, Gestion des incidents, ...', 'RH : protection des données personnelles', 'Finance : sécurité des transactions', 'Commercial : confidentialité client'],
    },
    {
      id: 3,
      title: 'Formation des cadres dirigeants',
      description: 'Leur faire comprendre leur responsabilité personnelle (risque pénal !) et les décisions stratégiques à prendre.',
      topics: ['NIS 2: les fondations', 'Responsabilité du dirigeant', 'Gouvernance de la cybersécurité'],
      isObligatory: true,
    },
  ];

  return (
    <>
      <Head>
        <title>Formations NIS2 et Cybersécurité | NIS2 Conformité</title>
        <meta name="description" content="Formations cybersécurité NIS2 : en ligne, sur site, MOOC, packs dirigeants. 10 modules à fort impact pour tous les profils. Sensibilisation, formation technique, simulations." />
      </Head>

      {/* HEADER STICKY */}
      <header className="header-artisan-sticky">
        <div className="header-container-modern">
          <a href="/" className="header-logo-link">
            <img src="/logo.png" alt="NIS2 Conformité" className="header-logo-modern" />
          </a>

          <nav className="header-nav-modern">
            <a href="/comprendre-nis2" className="header-nav-link">Comprendre NIS2</a>
            <a href="/qui-sommes-nous" className="header-nav-link">Qui sommes-nous</a>
            <a href="/offres-complementaires" className="header-nav-link">Nos tarifs</a>
            <a href="/formations" className="header-nav-link">Formation</a>
            <a href="/ressources" className="header-nav-link">Ressources</a>
          </nav>

          <a href={CONTACT_INFO.calendly} target="_blank" rel="noopener noreferrer" className="btn-header-expert">
            Parler à un expert
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <MenuBurger />
        </div>
      </header>

      <div className="page-wrapper">
        {/* HERO */}
        <section className="hero-artisan-exact hero-compact">
          <div className="hero-artisan-container">
            <div className="hero-badge-artisan">
              Formation obligatoire NIS2 • Prise en charge OPCO
            </div>

            <h1 className="hero-title-artisan">
              <span className="highlight">Formations NIS2</span><br />
              & Cybersécurité
            </h1>

            <p className="hero-subtitle-artisan">
              Des formations pensées pour chaque profil, chaque enjeu, chaque contrainte<br />
              Sensibilisation, formation technique, simulations
            </p>
          </div>
        </section>

        {/* 3 FORMATS - LAYOUT ASYMÉTRIQUE AVEC FEATURED */}
        <section className="section-standard formats-asymmetric-section">
          <div className="container-lg">
            <h2 className="section-title-center">
              3 formats de formation adaptés à vos besoins
            </h2>
            <p className="section-subtitle-center">
              Choisissez le format le plus adapté à votre organisation et vos contraintes
            </p>

            {/* LAYOUT ASYMÉTRIQUE : Featured au centre, 2 compacts sur les côtés */}
            <div className="grid-formats">
              {/* VISIO - Format Compact (gauche) */}
              <div className="format-card-compact card-format-compact">
                <div className="icon-box-56">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2">
                    <polygon points="23 7 16 12 23 17 23 7"></polygon>
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                  </svg>
                </div>
                <div>
                  <h3 className="card-title-lg">
                    {formats[0].title}
                  </h3>
                  <p className="card-subtitle-purple">
                    {formats[0].subtitle}
                  </p>
                  <p className="card-desc-sm">
                    {formats[0].description}
                  </p>
                </div>
                <div className="divider-section">
                  <h4 className="card-section-title">Caractéristiques</h4>
                  <ul className="list-check">
                    {formats[0].features.map((feature, idx) => (
                      <li key={idx} className="list-check-item">
                        <span className="check-icon-purple">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="divider-section">
                  <h4 className="card-section-title">Objectifs</h4>
                  <ul className="list-check">
                    {formats[0].objectives.map((obj, idx) => (
                      <li key={idx} className="list-check-item">
                        <span className="check-icon-purple">✓</span>
                        {obj}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="divider-section">
                  <h4 className="card-section-title">Avantages</h4>
                  <ul className="list-check">
                    {formats[0].advantages.map((adv, idx) => (
                      <li key={idx} className="list-check-item">
                        <span className="check-icon-purple">✓</span>
                        {adv}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* MOOC - Featured (Plus grand, design distinctif) - RECOMMANDÉ (centre) */}
              <div className="format-card-featured card-format-featured">
                <div className="badge-recommended">
                  ⭐ RECOMMANDÉ
                </div>
                <div className="icon-box-64">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <div>
                  <h3 className="card-title-2xl">
                    {formats[1].title}
                  </h3>
                  <p className="card-subtitle-white">
                    {formats[1].subtitle}
                  </p>
                  <p className="card-desc-md">
                    {formats[1].description}
                  </p>
                </div>
                <div className="divider-section-white">
                  <h4 className="card-section-title-white">Caractéristiques clés</h4>
                  <ul className="list-check">
                    {formats[1].features.map((feature, idx) => (
                      <li key={idx} className="list-check-item-white">
                        <span className="check-icon-white">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="divider-section-white">
                  <h4 className="card-section-title-white">Objectifs</h4>
                  <ul className="list-check">
                    {formats[1].objectives.map((obj, idx) => (
                      <li key={idx} className="list-check-item-white">
                        <span className="check-icon-white">✓</span>
                        {obj}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="divider-section-white">
                  <h4 className="card-section-title-white">Avantages</h4>
                  <ul className="list-check">
                    {formats[1].advantages.map((adv, idx) => (
                      <li key={idx} className="list-check-item-white">
                        <span className="check-icon-white">✓</span>
                        {adv}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* SUR SITE - Format Compact (droite) */}
              <div className="format-card-compact card-format-compact">
                <div className="icon-box-56">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="card-title-lg">
                    {formats[2].title}
                  </h3>
                  <p className="card-subtitle-purple">
                    {formats[2].subtitle}
                  </p>
                  <p className="card-desc-sm">
                    {formats[2].description}
                  </p>
                </div>
                <div className="divider-section">
                  <h4 className="card-section-title">Caractéristiques</h4>
                  <ul className="list-check">
                    {formats[2].features.map((feature, idx) => (
                      <li key={idx} className="list-check-item">
                        <span className="check-icon-purple">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="divider-section">
                  <h4 className="card-section-title">Objectifs</h4>
                  <ul className="list-check">
                    {formats[2].objectives.map((obj, idx) => (
                      <li key={idx} className="list-check-item">
                        <span className="check-icon-purple">✓</span>
                        {obj}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="divider-section">
                  <h4 className="card-section-title">Avantages</h4>
                  <ul className="list-check">
                    {formats[2].advantages.map((adv, idx) => (
                      <li key={idx} className="list-check-item">
                        <span className="check-icon-purple">✓</span>
                        {adv}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* POURQUOI SE FORMER - LAYOUT MIXTE HORIZONTAL/VERTICAL */}
        <section className="section-purple-gradient why-train-mixed-section">
          <div className="container-lg">
            <h2 className="section-title-center">
              Pourquoi se former et former vos équipes ?
            </h2>
            <p className="section-subtitle-center">
              La formation est au cœur de la conformité NIS2 et de votre sécurité
            </p>

            {/* LAYOUT UNIFORME: 4 cartes blanches horizontales */}
            <div className="grid-2-cols">
              {/* Carte 1 - OBLIGATION LÉGALE NIS2 (MISE EN AVANT) */}
              <div className="why-card-horizontal card-why-highlight">
                <div className="badge-important">
                  ⭐ IMPORTANT
                </div>
                <div className="flex-center-gap-lg">
                  <div className="icon-box-72">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </div>
                  <h4 className="card-title-xl">
                    Obligation légale NIS2
                  </h4>
                </div>
                <p className="card-desc-lg">
                  La directive NIS2 impose la sensibilisation et formation obligatoire de tous les collaborateurs, en particulier des dirigeants.
                </p>
              </div>

              {/* Carte 2 - 90% DES INCIDENTS SONT HUMAINS */}
              <div className="why-card-horizontal card-why-standard">
                <div className="flex-center-gap-lg">
                  <div className="icon-box-72">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2">
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                      <line x1="12" y1="9" x2="12" y2="13"></line>
                      <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                  </div>
                  <h4 className="card-title-xl">
                    90% des incidents sont humains
                  </h4>
                </div>
                <p className="card-desc-lg">
                  La majorité des cyberattaques réussies exploitent une erreur humaine (phishing, mots de passe faibles, négligence).
                </p>
              </div>

              {/* Carte 3 - ROI DÉMONTRÉ */}
              <div className="why-card-horizontal card-why-standard">
                <div className="flex-center-gap-lg">
                  <div className="icon-box-72">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#FB923C" strokeWidth="2.5">
                      <line x1="12" y1="1" x2="12" y2="23"></line>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                  </div>
                  <h4 className="card-title-xl">
                    ROI démontré
                  </h4>
                </div>
                <p className="card-desc-lg">
                  Une entreprise bien formée réduit de 70% ses risques d'incidents et économise en moyenne 240 000€ par an en coûts évités.
                </p>
              </div>

              {/* Carte 4 - CULTURE DE SÉCURITÉ DURABLE */}
              <div className="why-card-horizontal card-why-standard">
                <div className="flex-center-gap-lg">
                  <div className="icon-box-72">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#F472B6" strokeWidth="2.5">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <h4 className="card-title-xl">
                    Culture de sécurité durable
                  </h4>
                </div>
                <p className="card-desc-lg">
                  La formation crée une culture cyber pérenne dans l'organisation, au-delà de la simple conformité réglementaire.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6 FORMATIONS - ALTERNANCE DE LAYOUTS */}
        <section className="section-standard trainings-alternating-section">
          <div className="container-lg">
            <h2 className="section-title-center">
              3 formations à fort impact pour accélérer votre conformité NIS2
            </h2>
            <p className="section-subtitle-center">
              Chaque structure est différente. C'est pourquoi nous avons conçu une offre de formation modulaire, ciblée, et adaptée aux profils et aux besoins les plus variés.
            </p>

            {/* GROUPE 1: 2 premières formations (layout 2 colonnes) */}
            <div className="grid-2-cols-mb">
              {trainings.slice(0, 2).map((training) => (
                <div key={training.id} className="training-card-standard card-training-standard">
                  <div className="flex-center-gap-lg">
                    <div className="icon-circle-48">
                      {training.id}
                    </div>
                    <h3 className="training-title-lg">
                      {training.title}
                    </h3>
                  </div>
                  <p className="training-desc">
                    {training.description}
                  </p>
                  <div className="divider-section-md">
                    <ul className="list-check">
                      {training.topics.map((topic, idx) => (
                        <li key={idx} className="list-check-item-md">
                          <span className="check-icon-purple-lg">✓</span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* FORMATION 3: Highlighted Full-Width (Format horizontal unique) - OBLIGATOIRE */}
            <div className="training-card-highlighted card-training-highlight">
              <div className="badge-obligatory">
                ⚠️ FORMATION OBLIGATOIRE
              </div>
              <div className="grid-auto-1fr">
                <div className="icon-circle-72">
                  3
                </div>
                <div>
                  <h3 className="card-title-white-2xl">
                    {trainings[2].title}
                  </h3>
                  <p className="card-desc-white">
                    {trainings[2].description}
                  </p>
                  <div className="grid-3-cols">
                    {trainings[2].topics.map((topic, idx) => (
                      <div key={idx} className="topic-box-glass">
                        <div className="topic-content">
                          <span className="check-icon-white-lg">✓</span>
                          <span className="topic-text">{topic}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCHAINES SESSIONS DE FORMATION */}
        <section className="section-standard">
          <div className="container-lg">
            <h2 className="section-title-center">
              Prochaines sessions de formation
            </h2>
            <p className="section-subtitle-center">
              Sessions inter-entreprises ouvertes à tous • Formations intra sur demande
            </p>

            <div className="sessions-grid">
              {sessions.map((session, index) => (
                <div key={index} className="session-card">
                  <div className="session-date-badge">{session.date}</div>
                  <h3 className="session-title">{session.title}</h3>
                  <div className="session-details">
                    <span className="session-detail">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      {session.duration}
                    </span>
                    <span className="session-detail">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      {session.location}
                    </span>
                    <span className="session-detail">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                      {session.places} places
                    </span>
                  </div>
                  <div className="session-footer">
                    <span className="session-price">{session.price}</span>
                    <a href={CONTACT_INFO.calendly} target="_blank" rel="noopener noreferrer" className="btn-session">
                      S'inscrire
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINANCEMENT OPCO */}
        <section className="section-purple-gradient">
          <div className="container-lg">
            <h2 className="section-title-center">
              Financement OPCO : jusqu'à 100% pris en charge
            </h2>
            <p className="section-subtitle-center">
              Nos formations sont éligibles au financement par votre OPCO
            </p>

            <div className="opco-steps-grid">
              <div className="opco-step-card">
                <div className="opco-step-number">1</div>
                <h4 className="opco-step-title">Identifiez votre OPCO</h4>
                <p className="opco-step-desc">
                  Chaque entreprise est rattachée à un OPCO selon sa convention collective. Nous pouvons vous aider à l'identifier.
                </p>
              </div>
              <div className="opco-step-card">
                <div className="opco-step-number">2</div>
                <h4 className="opco-step-title">Nous préparons le dossier</h4>
                <p className="opco-step-desc">
                  Nous vous fournissons tous les documents nécessaires : programme, convention, feuilles de présence, évaluation.
                </p>
              </div>
              <div className="opco-step-card">
                <div className="opco-step-number">3</div>
                <h4 className="opco-step-title">Vous déposez la demande</h4>
                <p className="opco-step-desc">
                  Vous transmettez le dossier à votre OPCO qui valide la prise en charge (généralement sous 2 semaines).
                </p>
              </div>
              <div className="opco-step-card">
                <div className="opco-step-number">4</div>
                <h4 className="opco-step-title">Formation financée</h4>
                <p className="opco-step-desc">
                  Selon votre OPCO et votre enveloppe formation, la prise en charge peut aller jusqu'à 100% du coût.
                </p>
              </div>
            </div>

            <div className="opco-help-banner">
              <p>
                <strong>Besoin d'aide ?</strong> Nous vous accompagnons gratuitement dans vos démarches de financement OPCO.{' '}
                <a href={CONTACT_INFO.calendly} target="_blank" rel="noopener noreferrer" className="link-purple">
                  Contactez-nous
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* FAQ FORMATIONS */}
        <section className="section-standard">
          <div className="container-lg">
            <h2 className="section-title-center">
              Questions fréquentes sur nos formations
            </h2>

            <div className="faq-grid-tarifs">
              {faqFormations.map((item, index) => (
                <div
                  key={index}
                  className={`faq-card-tarif ${openFaq === index ? 'faq-card-open' : ''}`}
                  onClick={() => toggleFaq(index)}
                >
                  <div className="faq-question-row">
                    <span className="faq-question-text">{item.question}</span>
                    <span className={`faq-chevron ${openFaq === index ? 'faq-chevron-open' : ''}`}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                  <div className={`faq-answer-wrapper ${openFaq === index ? 'faq-answer-visible' : ''}`}>
                    <p className="faq-answer-text">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="section-cta-gradient">
          <div className="container-md">
            <h2 className="section-title-white">
              Formez vos équipes dès aujourd'hui
            </h2>
            <p className="section-subtitle-white">
              Discutons de vos besoins en formation et construisons un programme sur-mesure pour votre organisation
            </p>
            <a
              href={CONTACT_INFO.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta-white-lg"
            >
              Demander un devis formation
            </a>
            <p className="cta-note-white">
              ✓ Tarifs dégressifs par volume • ✓ Financement jusqu'à 70% • ✓ Réponse sous 24h
            </p>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer-artisan-modern">
          <div className="footer-main-content">
            <div className="footer-brand-col">
              <img src="/logo.png" alt="NIS2 Conformité" className="footer-logo" />
              <p className="footer-brand-desc">
                La plateforme d'audit et de conformité cyber pensée pour les PME et ETI européennes
              </p>
              <div className="footer-certifs">
                <span>✓ Certifié ISO 27001</span>
                <span>✓ Méthodologie ANSSI</span>
              </div>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">Solutions</h4>
              <ul className="footer-links-list">
                <li><a href="/#pricing">Audit NIS2</a></li>
                <li><a href="/formations">Formations</a></li>
                <li><a href="/offres-complementaires">Services complémentaires</a></li>
                <li><a href="#video-section">Comprendre NIS2</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">Entreprise</h4>
              <ul className="footer-links-list">
                <li><a href="/qui-sommes-nous">Qui sommes-nous ?</a></li>
                <li><a href="/#expertise">Notre expertise</a></li>
                <li><a href="/#temoignages">Témoignages</a></li>
                <li><a href="/comprendre-nis2">À propos de NIS2</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">Contact</h4>
              <ul className="footer-links-list">
                <li>
                  <a href={CONTACT_INFO.calendly} target="_blank" rel="noopener noreferrer">
                    Prendre rendez-vous
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@cyber-solferino.com">
                    contact@cyber-solferino.com
                  </a>
                </li>
                <li><a href="tel:+33649432092">+33 (0) 6 49 43 20 92</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom-modern">
            <div className="footer-bottom-content">
              <p className="footer-copyright">© 2026 Cyber Solferino. Tous droits réservés</p>
              <div className="footer-legal-links">
                <a href="/mentions-legales">Mentions légales</a>
                <a href="/politique-confidentialite">Politique de confidentialité</a>
                <a href="/cgu">CGU</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
