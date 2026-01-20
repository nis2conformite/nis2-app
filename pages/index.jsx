import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useQuiz } from '../hooks/useQuiz';
import { useLeadPopup } from '../hooks/useLeadPopup';
import { QuizModal } from '../components/QuizModal';
import MenuBurger from '../components/MenuBurger';
import {
  PRICING_OFFERS,
  HERO_STATS,
  FAQ_ITEMS,
  CONTACT_INFO,
  EXTERNAL_LINKS,
  EXPERTISE_TIMELINE,
  IMPACT_STATS
} from '../utils/constants';

export default function Home() {
  const [videoIsPlaying, setVideoIsPlaying] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [email, setEmail] = useState('');
  const quiz = useQuiz();
  const popup = useLeadPopup({
    quizIsOpen: quiz.isOpen,
    videoIsPlaying
  });

  async function handleStripeCheckout() {
    try {
      const response = await fetch('/api/stripe/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await response.json();

      if (data.error) {
        alert('Erreur: ' + data.error);
        return;
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error('Erreur:', error);
    }
  }

  function handleEmailSubmit(e) {
    e.preventDefault();
    if (email) {
      window.location.href = `${CONTACT_INFO.calendly}?email=${encodeURIComponent(email)}`;
    }
  }

  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = function() {
      const iframe = document.querySelector('.video-container iframe');
      if (iframe) {
        new window.YT.Player(iframe, {
          events: {
            'onStateChange': (event) => {
              setVideoIsPlaying(event.data === window.YT.PlayerState.PLAYING);
            }
          }
        });
      }
    };
  }, []);

  return (
    <>
      <Head>
        <title>NIS2 Conformité | Mesurez vos risques et priorisez vos actions</title>
        <meta name="description" content="Audit structuré selon référentiel ANSSI. Rapport détaillé. Recommandations priorisées. Conformité NIS2 pour PME et ETI." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* HEADER - STICKY AVEC NAVIGATION */}
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

      {/* HERO SECTION - AVEC BADGE + LOGO + BOUTONS */}
      <section className="hero-artisan-exact">
        <div className="hero-artisan-container">
          <div className="hero-badge-artisan">
            NIS2 Conformité obligatoire • Premières sanctions en 2027 • Agissez maintenant
          </div>

          {/* Logo central sous le badge */}
          <div className="hero-logo-wrapper">
            <img src="/logo.png" alt="Cyber Solferino" className="hero-logo" />
          </div>

          <p className="hero-baseline-small">
            La plateforme d'audit et de conformité cyber<br />
            pensée pour les PME et ETI européennes
          </p>

          <h1 className="hero-title-artisan">
            Mesurez vos risques <span className="highlight">NIS2</span><br />
            et priorisez vos actions
          </h1>

          <p className="hero-subtitle-artisan">
            Audit structuré • Selon référentiel ANSSI • Rapport détaillé • Recommandations priorisées
          </p>

          {/* Stats dans le Hero */}
          <div className="hero-stats-grid">
            <div className="hero-stat">
              <div className="hero-stat-value">92%</div>
              <div className="hero-stat-label">PME et ETI non prêtes</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">10M€</div>
              <div className="hero-stat-label">amende max ou 2% du CA</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">70%</div>
              <div className="hero-stat-label">d'aides de l'état possibles</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">65</div>
              <div className="hero-stat-label">questions d'audit</div>
            </div>
          </div>

          {/* 2 boutons style Artisan */}
          <div className="hero-buttons-group">
            <button onClick={quiz.openQuiz} className="btn-hero-primary">
              Suis-je concerné par NIS2 ?
            </button>
            <a href="#video-section" className="btn-hero-secondary">
              Comprendre NIS2 en vidéo
            </a>
          </div>

          <div className="hero-trust-artisan">
            <span>✓ Certifié ISO 27001</span>
            <span>•</span>
            <span>✓ Méthodologie ANSSI</span>
            <span>•</span>
            <span>✓ Sans engagement</span>
          </div>
        </div>
      </section>

      {/* SECTION VIDÉO YOUTUBE - APRÈS LE HERO */}
      <section className="content-section video-section" id="video-section">
        <div className="content-container">
          <h2 className="section-title-artisan">
            Comprendre <span className="gradient">NIS2</span> en vidéo
          </h2>
          <p className="section-subtitle-artisan">
            3 minutes pour tout comprendre de la directive NIS2
          </p>

          <div className="video-wrapper">
            <iframe
              src={EXTERNAL_LINKS.videoYoutube}
              title="Directive NIS2 expliquée"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* SECTION AVANT/APRÈS - DESIGN EXPERT */}
      <section className="before-after-section-v2" id="solutions">
        <div className="before-after-container-v2">
          <div className="section-badge-center">L'enjeu stratégique</div>

          <h2 className="section-title-artisan">
            Votre conformité NIS2 avec<br />
            <span className="gradient">Cyber Solferino</span>
          </h2>
          <p className="section-subtitle-artisan">
            Transformez la contrainte réglementaire en levier stratégique pour votre entreprise
          </p>

          <div className="before-after-wrapper-design">
            <div className="before-after-cards-v2">
              {/* Card AVANT - Risques */}
              <div className="card-column">
                <div className="card-label-before">Avant</div>
                <div className="impact-card danger-card">
                  <h3 className="impact-title">Les enjeux de la non-conformité</h3>
              <ul className="impact-list">
                <li>
                  <div className="impact-bullet danger-bullet">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="impact-content">
                    <strong>Sanctions financières lourdes</strong>
                    <span>Jusqu'à 10M€ ou 2% du chiffre d'affaires mondial</span>
                  </div>
                </li>
                <li>
                  <div className="impact-bullet danger-bullet">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="impact-content">
                    <strong>Responsabilité pénale du dirigeant</strong>
                    <span>En cas de manquement aux obligations NIS2</span>
                  </div>
                </li>
                <li>
                  <div className="impact-bullet danger-bullet">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="impact-content">
                    <strong>Exclusion des marchés</strong>
                    <span>Impossibilité de répondre aux appels d'offres publics et privés</span>
                  </div>
                </li>
                <li>
                  <div className="impact-bullet danger-bullet">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="impact-content">
                    <strong>Perte de confiance B2B</strong>
                    <span>Vos clients exigent désormais la conformité</span>
                  </div>
                </li>
                <li>
                  <div className="impact-bullet danger-bullet">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="impact-content">
                    <strong>Contrôles réglementaires</strong>
                    <span>Audits de votre entreprise sur site sans préavis de l'ANSSI</span>
                  </div>
                </li>
              </ul>
                </div>
              </div>

              {/* Card APRÈS - Opportunités */}
              <div className="card-column">
                <div className="card-label-after">Après</div>
                <div className="impact-card success-card">
                  <h3 className="impact-title">Transformez la contrainte en levier stratégique</h3>
              <ul className="impact-list">
                <li>
                  <div className="impact-bullet success-bullet">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="impact-content">
                    <strong>Remportez les appels d'offres</strong>
                    <span>La conformité devient un critère obligatoire de sélection</span>
                  </div>
                </li>
                <li>
                  <div className="impact-bullet success-bullet">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="impact-content">
                    <strong>Différenciez-vous</strong>
                    <span>Positionnez-vous comme le partenaire de confiance de votre secteur</span>
                  </div>
                </li>
                <li>
                  <div className="impact-bullet success-bullet">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="impact-content">
                    <strong>Rassurez vos clients</strong>
                    <span>Montrez que vous protégez les données de vos clients</span>
                  </div>
                </li>
                <li>
                  <div className="impact-bullet success-bullet">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="impact-content">
                    <strong>Fidélisez vos partenaires</strong>
                    <span>Consolidez votre réputation d'acteur stable et responsable</span>
                  </div>
                </li>
                <li>
                  <div className="impact-bullet success-bullet">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="impact-content">
                    <strong>Valorisez votre entreprise</strong>
                    <span>Une organisation conforme vaut plus en cas de cession</span>
                  </div>
                </li>
              </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOTRE APPROCHE - LAYOUT VERTICAL ALTERNÉ */}
      <section className="content-section">
        <div className="content-container">
          <div className="section-badge-center">Notre méthodologie</div>

          <h2 className="section-title-artisan">
            <span className="gradient">Notre approche</span> en 3 étapes
          </h2>
          <p className="section-subtitle-artisan">
            Une méthodologie éprouvée pour votre conformité NIS2
          </p>

          <div className="approach-steps-modern">
            {EXPERTISE_TIMELINE.map((item, index) => (
              <div key={index} className={`approach-step-row ${index % 2 === 0 ? 'reverse' : ''}`}>
                <div className="approach-step-image">
                  <div className="approach-image-wrapper">
                    <img src={item.image} alt={item.title} loading="lazy" />
                  </div>
                </div>
                <div className="approach-step-content">
                  <div className="approach-step-header">
                    <span className="approach-step-number">{item.number}</span>
                    <h3 className="approach-step-title">{item.title}</h3>
                  </div>
                  <p className="approach-step-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Séparateur + Garanties intégrées */}
          <div className="approach-guarantees-wrapper">
            <div className="approach-guarantees-divider">
              <span>Nos engagements</span>
            </div>
            <div className="approach-guarantees-row">
              <div className="approach-guarantee-item">
                <div className="guarantee-check-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="approach-guarantee-text">
                  <strong>Méthodologie ANSSI</strong>
                  <span>Guide officiel de conformité</span>
                </div>
              </div>
              <div className="approach-guarantee-item">
                <div className="guarantee-check-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="approach-guarantee-text">
                  <strong>Experts ISO 27001</strong>
                  <span>10+ ans d'expérience cyber</span>
                </div>
              </div>
              <div className="approach-guarantee-item">
                <div className="guarantee-check-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="approach-guarantee-text">
                  <strong>Sans engagement</strong>
                  <span>Paiement unique, sans frais cachés</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION CYBER - ENCART */}
      <section className="content-section">
        <div className="content-container">
          <div className="cyber-encart">
            <div className="section-badge-center">Chiffres clés</div>

            <h2 className="section-title-artisan">
              La prévention est plus <span className="highlight">rentable</span> qu'une crise cyber
            </h2>
            <p className="section-subtitle-artisan">
              Vulnérabilité des PME et ETI • 43% perdent des clients après une attaque cyber
            </p>

            {/* 2 CARTES CYBER UNIQUEMENT */}
            <div className="cyber-stats-grid-encart">
              <div className="cyber-stat-card-encart">
                <div className="cyber-stat-number-encart">+38%</div>
                <h3>Hausse des cyberattaques</h3>
                <p>
                  Les attaques contre les PME ont explosé de 38% en 2024.
                  Les cybercriminels ciblent les entreprises non protégées.
                </p>
              </div>

              <div className="cyber-stat-card-encart">
                <div className="cyber-stat-number-encart">4,35M€</div>
                <h3>Coût moyen d'une cyberattaque</h3>
                <p>
                  60% des PME touchées ferment dans les 12 mois. Arrêt de production (21 jours en moyenne),
                  perte de données, rançons.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION PRICING */}
      <section className="pricing-section-artisan" id="pricing">
        <div className="before-after-container">
          <div className="section-badge-center">Nos offres</div>

          <h2 className="section-title-artisan">
            Investissement vs <span className="gradient">Amende</span>
          </h2>
          <p className="section-subtitle-artisan">
            Un audit coûte 200x moins cher qu'une sanction. Protégez votre entreprise dès maintenant.
          </p>

          {/* Bandeau aides d'état */}
          <div className="aide-etat-banner">
            <div className="aide-etat-content">
              <div className="aide-etat-text">
                <div className="aide-etat-title">
                  Jusqu'à 70% d'aides de l'État • Valable sur toutes nos offres
                </div>
                <div className="aide-etat-subtitle">
                  Réduisez le coût de votre mise en conformité NIS2
                </div>
              </div>
            </div>
            <button
              onClick={() => alert('Simulateur en cours de développement')}
              className="btn-simulateur"
            >
              Calculer mes aides
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className="pricing-grid-artisan">
            {/* Offre 1: Essentielle */}
            <div className="pricing-card-artisan">
              <h3 className="pricing-name">Essentielle</h3>
              <div className="pricing-price-artisan">3 490€</div>
              <p className="pricing-period">HT • Paiement unique</p>

              <div className="pricing-ideal">
                <strong>Idéal pour :</strong> PME cherchant à évaluer leur positionnement
              </div>

              <ul className="pricing-features-artisan">
                <li>Audit cyber NIS2 complet</li>
                <li>Résultat immédiat en ligne</li>
                <li>Score de conformité détaillé</li>
                <li>Recommandations prioritaires</li>
                <li>Support par email</li>
              </ul>

              <button onClick={handleStripeCheckout} className="btn-pricing-artisan btn-pricing-secondary">
                Démarrer l'audit
              </button>
            </div>

            {/* Offre 2: Sérénité (POPULAIRE) */}
            <div className="pricing-card-artisan featured">
              <div className="pricing-badge-featured">⭐ Le plus populaire</div>

              <h3 className="pricing-name">Sérénité</h3>
              <div className="pricing-price-artisan">7 990€</div>
              <p className="pricing-period">HT • Paiement unique</p>

              <div className="pricing-ideal">
                <strong>Idéal pour :</strong> Entreprises visant la conformité NIS2
              </div>

              <ul className="pricing-features-artisan">
                <li>Audit cyber NIS2 complet</li>
                <li>Rapport validé par experts</li>
                <li>Analyse écarts de conformité</li>
                <li>Plan de remédiation détaillé</li>
                <li>Restitution avec expert (1h visio)</li>
                <li>Accès plateforme 6 mois</li>
                <li>Délai de livraison : 48H</li>
              </ul>

              <a
                href={CONTACT_INFO.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pricing-artisan btn-pricing-secondary"
              >
                Prendre rendez-vous
              </a>
            </div>

            {/* Offre 3: Expertise */}
            <div className="pricing-card-artisan">
              <h3 className="pricing-name">Expertise</h3>
              <div className="pricing-price-artisan">14 900€</div>
              <p className="pricing-period">HT • Paiement unique</p>

              <div className="pricing-ideal">
                <strong>Idéal pour :</strong> ETI et secteurs critiques
              </div>

              <ul className="pricing-features-artisan">
                <li><strong>Tout de l'offre Sérénité</strong></li>
                <li className="feature-highlight">+ Entretien préalable expert</li>
                <li className="feature-highlight">+ Roadmap personnalisée</li>
                <li className="feature-highlight">+ Enregistrement ANSSI</li>
                <li className="feature-highlight">+ Dossier aides d'État</li>
                <li className="feature-highlight">+ Accès plateforme 12 mois</li>
                <li className="feature-highlight">+ MAJ évolutions législatives</li>
              </ul>

              <a
                href={CONTACT_INFO.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pricing-artisan btn-pricing-secondary"
              >
                Prendre rendez-vous
              </a>
            </div>
          </div>

          {/* Comparatif accordéon */}
          <div className="pricing-cta-wrapper">
            <button
              onClick={() => setShowComparison(!showComparison)}
              className="btn-compare-toggle"
            >
              {showComparison ? '▼ Masquer le comparatif' : '▶ Comparer nos offres'}
            </button>
          </div>

          {showComparison && (
            <div className="comparison-wrapper">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Fonctionnalités</th>
                    <th>Essentielle<br/><span className="price-sub">3 490€</span></th>
                    <th>Sérénité<br/><span className="price-sub">7 990€</span></th>
                    <th>Expertise<br/><span className="price-sub">14 900€</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Audit cyber NIS2</td>
                    <td>✓</td>
                    <td>✓</td>
                    <td>✓</td>
                  </tr>
                  <tr>
                    <td>Résultat immédiat</td>
                    <td>✓</td>
                    <td>—</td>
                    <td>—</td>
                  </tr>
                  <tr>
                    <td>Rapport validé par experts</td>
                    <td>—</td>
                    <td>✓</td>
                    <td>✓</td>
                  </tr>
                  <tr>
                    <td>Analyse écarts de conformité</td>
                    <td>—</td>
                    <td>✓</td>
                    <td>✓</td>
                  </tr>
                  <tr>
                    <td>Plan de remédiation détaillé</td>
                    <td>—</td>
                    <td>✓</td>
                    <td>✓</td>
                  </tr>
                  <tr>
                    <td>Restitution avec expert</td>
                    <td>—</td>
                    <td>✓</td>
                    <td>✓</td>
                  </tr>
                  <tr>
                    <td>Entretien préalable expert</td>
                    <td>—</td>
                    <td>—</td>
                    <td>✓</td>
                  </tr>
                  <tr>
                    <td>Roadmap personnalisée</td>
                    <td>—</td>
                    <td>—</td>
                    <td>✓</td>
                  </tr>
                  <tr>
                    <td>Enregistrement ANSSI</td>
                    <td>—</td>
                    <td>—</td>
                    <td>✓</td>
                  </tr>
                  <tr>
                    <td>Dossier aides d'État</td>
                    <td>—</td>
                    <td>—</td>
                    <td>✓</td>
                  </tr>
                  <tr>
                    <td>Accès plateforme</td>
                    <td>—</td>
                    <td>6 mois</td>
                    <td>12 mois</td>
                  </tr>
                  <tr>
                    <td>Délai de livraison</td>
                    <td>Immédiat</td>
                    <td>48H</td>
                    <td>1 mois</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {/* SECTION SERVICES COMPLÉMENTAIRES */}
      <section className="content-section">
        <div className="content-container">
          <div className="section-badge-center">Aller plus loin</div>

          <h2 className="section-title-artisan">
            Services <span className="gradient">complémentaires</span>
          </h2>
          <p className="section-subtitle-artisan">
            Découvrez nos services pour aller plus loin dans la conformité et la sécurité
          </p>

          <div className="services-complementaires-grid">
            {/* Carte 1: Modèles de documents NIS2 */}
            <div className="service-card-comp">
              <div className="service-header-comp">
                <div className="service-icon-comp">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                  </svg>
                </div>
                <h3 className="service-title-comp">Modèles de documents NIS2</h3>
              </div>
              <p className="service-description-comp">
                Templates prêts à l'emploi pour votre mise en conformité, mis à jour avec la réglementation
              </p>
            </div>

            {/* Carte 2: Formations NIS2 */}
            <div className="service-card-comp">
              <div className="service-header-comp">
                <div className="service-icon-comp">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <h3 className="service-title-comp">Formations NIS2</h3>
              </div>
              <p className="service-description-comp">
                Formation obligatoire des dirigeants et sensibilisation des équipes, en distanciel ou sur site
              </p>
            </div>

            {/* Carte 3: Montage dossiers Subventions */}
            <div className="service-card-comp">
              <div className="service-header-comp">
                <div className="service-icon-comp">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FB923C" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <h3 className="service-title-comp">Montage dossiers Subventions</h3>
              </div>
              <p className="service-description-comp">
                Identification et constitution des dossiers d'aides d'État pour maximiser vos financements
              </p>
            </div>

            {/* Carte 4: Accompagnement incident */}
            <div className="service-card-comp">
              <div className="service-header-comp">
                <div className="service-icon-comp">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F472B6" strokeWidth="2">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                </div>
                <h3 className="service-title-comp">Accompagnement incident</h3>
              </div>
              <p className="service-description-comp">
                Accompagnement déclaration incident avec conseil gestion de crise, veille législative et ligne expert dédiée pour vos questions
              </p>
            </div>
          </div>

          <div className="pricing-cta-wrapper">
            <a
              href="/offres-complementaires"
              className="btn-artisan btn-artisan-primary"
            >
              Découvrir nos services complémentaires
            </a>
          </div>
        </div>
      </section>

      {/* SECTION EXPERTISE - NOTRE ÉQUIPE */}
      <section className="content-section" id="expertise">
        <div className="content-container">
          <div className="cyber-encart">
            <div className="section-badge-center">Notre équipe</div>

            <h2 className="section-title-artisan" style={{textAlign: 'center'}}>
              Une équipe de <span className="highlight">cyber experts</span> à votre service
            </h2>
            <p className="section-subtitle-artisan" style={{textAlign: 'center'}}>
              Consultants ISO 27001 • Méthodologie ANSSI • 15+ années d'expérience
            </p>

            {/* 2 CARTES PRINCIPALES */}
            <div className="cyber-stats-grid-encart">
              <div className="cyber-stat-card-encart">
                <div className="cyber-stat-number-encart">+15 ans</div>
                <h3>D'expérience dans la cyber</h3>
                <p>
                  Depuis 2009 dans l'accompagnement cyber des PME et ETI. Expertise reconnue sur les secteurs critiques et essentiels.
                </p>
              </div>

              <div className="cyber-stat-card-encart">
                <div className="cyber-stat-number-encart">ISO 27001</div>
                <h3>Experts certifiés</h3>
                <p>
                  Consultants accrédités ISO 27001. Méthodologie validée par l'ANSSI pour garantir votre conformité NIS2.
                </p>
              </div>
            </div>

            {/* ACCRÉDITATIONS ET LOGOS */}
            <div className="accreditations-wrapper">
              <p className="accreditations-text">
                Nos accréditations et partenariats garantissent la qualité de notre accompagnement
              </p>

              <div className="accreditations-grid">
                {[
                  { src: '/logo_anssi.png', alt: 'ANSSI - Agence Nationale de la Sécurité des Systèmes d\'Information' },
                  { src: '/Logo-cybermalveillance.PNG', alt: 'Cybermalveillance.gouv.fr' },
                  { src: '/logo_expertcyber.jpg', alt: 'Expert Cyber' },
                  { src: '/iso_27001_02-1024x704.png', alt: 'ISO 27001 Certified' }
                ].map((logo, idx) => (
                  <div key={idx} className="accreditation-item">
                    <img src={logo.src} alt={logo.alt} className="accreditation-img" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION NOS RÉFÉRENCES - BANDEAU DÉFILANT */}
      <section className="references-section">
        <div className="content-container">
          <div className="section-badge-center">Nos références</div>
          <h2 className="section-title-artisan">
            Ils nous font <span className="gradient">confiance</span>
          </h2>
          <p className="section-subtitle-artisan">
            PME et ETI de tous secteurs qui ont choisi notre accompagnement
          </p>
        </div>

        <div className="logo-banner-wrapper">
          <div className="logo-banner-track">
            {/* Première série de logos */}
            <div className="logo-banner-slide">
              <div className="logo-item">
                <img src="/references/logo-1.png" alt="Référence client" />
              </div>
              <div className="logo-item">
                <img src="/references/logo-2.png" alt="Référence client" />
              </div>
              <div className="logo-item">
                <img src="/references/logo-3.png" alt="Référence client" />
              </div>
              <div className="logo-item">
                <img src="/references/logo-4.png" alt="Référence client" />
              </div>
              <div className="logo-item">
                <img src="/references/logo-5.png" alt="Référence client" />
              </div>
              <div className="logo-item">
                <img src="/references/logo-6.png" alt="Référence client" />
              </div>
            </div>
            {/* Deuxième série (duplication pour boucle infinie) */}
            <div className="logo-banner-slide">
              <div className="logo-item">
                <img src="/references/logo-1.png" alt="Référence client" />
              </div>
              <div className="logo-item">
                <img src="/references/logo-2.png" alt="Référence client" />
              </div>
              <div className="logo-item">
                <img src="/references/logo-3.png" alt="Référence client" />
              </div>
              <div className="logo-item">
                <img src="/references/logo-4.png" alt="Référence client" />
              </div>
              <div className="logo-item">
                <img src="/references/logo-5.png" alt="Référence client" />
              </div>
              <div className="logo-item">
                <img src="/references/logo-6.png" alt="Référence client" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION FAQ REDESIGN MODERNE */}
      <section className="content-section">
        <div className="content-container faq-container">
          <div className="section-badge-center">FAQ</div>

          <h2 className="section-title-artisan">
            Les questions que se posent les <span className="gradient">dirigeants</span>
          </h2>

          <div className="faq-grid-redesign">
            {FAQ_ITEMS.map((item, index) => {
              // Couleurs alternées pour les cartes
              const colorClass = index % 3 === 0 ? 'faq-purple' : index % 3 === 1 ? 'faq-pink' : 'faq-blue';

              return (
                <details key={item.id} className={`faq-item-redesign ${colorClass}`}>
                  <summary className="faq-question-redesign">
                    <div className="faq-icon-circle">
                      <span className="faq-emoji">{item.icon}</span>
                    </div>
                    <span className="faq-question-text-redesign">{item.question}</span>
                    <div className="faq-toggle-icon">
                      <svg className="faq-plus" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      <svg className="faq-minus" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </summary>
                  <div className="faq-answer-redesign">
                    <p>{item.answer}</p>
                  </div>
                </details>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION CTA FINAL */}
      <section className="cta-final-section">
        <div className="cta-final-container">
          <h2>Sécurisez votre avenir dès aujourd'hui</h2>
          <p>
            Échange confidentiel avec un consultant certifié ISO 27001<br />
            <strong>Audit indépendant pour mesurer votre conformité</strong>
          </p>
          <a
            href={CONTACT_INFO.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta-final"
          >
            Réserver un échange gratuit
          </a>
        </div>
      </section>

      {/* FOOTER STYLE ARTISAN */}
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
                <a href="mailto:nis2conformite@gmail.com">
                  nis2conformite@gmail.com
                </a>
              </li>
              <li><a href="tel:+33000000000">+33 (0)0 00 00 00 00</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-modern">
          <div className="footer-bottom-content">
            <p className="footer-copyright">© 2025 NIS2 Conformité. Tous droits réservés</p>
            <div className="footer-legal-links">
              <a href="/mentions-legales">Mentions légales</a>
              <a href="/politique-confidentialite">Politique de confidentialité</a>
              <a href="/cgu">CGU</a>
            </div>
          </div>
        </div>
      </footer>

      <QuizModal quiz={quiz} />
    </>
  );
}
