import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useQuiz } from '../hooks/useQuiz';
import { useLeadPopup } from '../hooks/useLeadPopup';
import { QuizModal } from '../components/QuizModal';
import MenuBurger from '../components/MenuBurger';
import {
  PRICING_OFFERS,
  TESTIMONIALS,
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
        </div>
      </header>

      {/* HERO SECTION - AVEC BADGE + LOGO + BOUTONS */}
      <section className="hero-artisan-exact">
        <div className="hero-artisan-container">
          {/* Logo central */}
          <div className="hero-logo-wrapper">
            <img src="/logo.png" alt="NIS2 Conformité" className="hero-logo" />
          </div>

          <div className="hero-badge-artisan">
            NIS2 Conformité obligatoire • Premières sanctions en 2027 • Agissez maintenant
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

      {/* SECTION AVANT/APRÈS - DESIGN EXPERT */}
      <section className="before-after-section-v2" id="solutions">
        <div className="before-after-container-v2">
          <div className="section-badge-center">L'enjeu stratégique</div>

          <h2 className="section-title-artisan" style={{textAlign: 'center'}}>
            La conformité <span className="gradient">NIS2</span>, avant et après
          </h2>
          <p className="section-subtitle-artisan" style={{textAlign: 'center'}}>
            Transformez la contrainte réglementaire en levier stratégique pour votre entreprise
          </p>

          <div className="before-after-wrapper-design">
            <div className="before-after-cards-v2">
              {/* Card AVANT - Risques */}
              <div className="impact-card danger-card">
                <div className="impact-icon-wrapper danger-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
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

            {/* Card APRÈS - Opportunités */}
            <div className="impact-card success-card">
              <div className="impact-icon-wrapper success-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
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
      </section>

      {/* NOTRE APPROCHE - LAYOUT VERTICAL ALTERNÉ */}
      <section className="content-section">
        <div className="content-container">
          <div className="section-badge-center">Notre méthodologie</div>

          <h2 className="section-title-artisan" style={{textAlign: 'center'}}>
            <span className="gradient">Notre approche</span> en 3 étapes
          </h2>
          <p className="section-subtitle-artisan" style={{textAlign: 'center'}}>
            Une méthodologie éprouvée pour votre conformité NIS2
          </p>

          <div className="approach-steps-vertical">
            {/* Étape 1 - Texte à gauche, Image à droite */}
            <div className="approach-step-row">
              <div className="approach-step-content">
                <div className="approach-step-number">01</div>
                <h3 className="approach-step-title">Analyse de conformité</h3>
                <p className="approach-step-description">
                  Identification des écarts clés de conformité selon le référenciel de l'ANSSI. Notre audit complet permet de cartographier précisément votre niveau actuel et les points d'amélioration prioritaires.
                </p>
              </div>
              <div className="approach-step-image">
                <div className="approach-image-wrapper">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
                    alt="Analyse de conformité NIS2"
                  />
                </div>
              </div>
            </div>

            {/* Étape 2 - Image à gauche, Texte à droite */}
            <div className="approach-step-row reverse">
              <div className="approach-step-image">
                <div className="approach-image-wrapper">
                  <img
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop"
                    alt="Comprendre ses vulnérabilités"
                  />
                </div>
              </div>
              <div className="approach-step-content">
                <div className="approach-step-number">02</div>
                <h3 className="approach-step-title">Comprendre ses vulnérabilités</h3>
                <p className="approach-step-description">
                  Connaître son niveau de conformité aux obligations de sécurité NIS2. Nous vous aidons à identifier les risques critiques et à prioriser les actions correctives pour une mise en conformité efficace.
                </p>
              </div>
            </div>

            {/* Étape 3 - Texte à gauche, Image à droite */}
            <div className="approach-step-row">
              <div className="approach-step-content">
                <div className="approach-step-number">03</div>
                <h3 className="approach-step-title">Accompagnement adapté</h3>
                <p className="approach-step-description">
                  Choisissez l'offre adaptée en fonction de votre niveau global de maturité cyber. De l'audit initial à la certification complète, nous vous accompagnons à chaque étape de votre parcours de conformité.
                </p>
              </div>
              <div className="approach-step-image">
                <div className="approach-image-wrapper">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                    alt="Accompagnement adapté NIS2"
                  />
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

            <h2 className="section-title-artisan" style={{textAlign: 'center'}}>
              La prévention est plus <span className="highlight">rentable</span> qu'une crise cyber
            </h2>
            <p className="section-subtitle-artisan" style={{textAlign: 'center'}}>
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
                  Jusqu'à 70% d'aides de l'État • France 2030 • Investissements d'avenir
                </div>
                <div className="aide-etat-subtitle">
                  Réduisez jusqu'à 70% le coût de votre mise en conformité NIS2 grâce aux aides publiques
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

              <div className="pricing-ideal" style={{fontSize: '14px', color: 'var(--artisan-text-medium)', marginBottom: '24px'}}>
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

              <div className="pricing-ideal" style={{fontSize: '14px', color: 'var(--artisan-text-medium)', marginBottom: '24px'}}>
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
                className="btn-pricing-artisan"
              >
                Prendre rendez-vous
              </a>
            </div>

            {/* Offre 3: Expertise */}
            <div className="pricing-card-artisan">
              <h3 className="pricing-name">Expertise</h3>
              <div className="pricing-price-artisan">14 900€</div>
              <p className="pricing-period">HT • Paiement unique</p>

              <div className="pricing-ideal" style={{fontSize: '14px', color: 'var(--artisan-text-medium)', marginBottom: '24px'}}>
                <strong>Idéal pour :</strong> ETI et secteurs critiques
              </div>

              <ul className="pricing-features-artisan">
                <li><strong>Tout de l'offre Sérénité</strong></li>
                <li style={{color: 'var(--artisan-primary)', fontWeight: '600'}}>+ Entretien préalable expert</li>
                <li style={{color: 'var(--artisan-primary)', fontWeight: '600'}}>+ Roadmap personnalisée</li>
                <li style={{color: 'var(--artisan-primary)', fontWeight: '600'}}>+ Enregistrement ANSSI</li>
                <li style={{color: 'var(--artisan-primary)', fontWeight: '600'}}>+ Dossier aides d'État</li>
                <li style={{color: 'var(--artisan-primary)', fontWeight: '600'}}>+ Accès plateforme 12 mois</li>
                <li style={{color: 'var(--artisan-primary)', fontWeight: '600'}}>+ MAJ évolutions législatives</li>
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
          <div style={{textAlign: 'center', marginTop: '48px'}}>
            <button
              onClick={() => setShowComparison(!showComparison)}
              style={{
                padding: '14px 32px',
                background: 'white',
                border: '2px solid var(--artisan-primary)',
                color: 'var(--artisan-primary)',
                borderRadius: 'var(--radius-artisan-lg)',
                fontWeight: '700',
                fontSize: '15px',
                cursor: 'pointer'
              }}
            >
              {showComparison ? '▼ Masquer le comparatif' : '▶ Comparer nos offres'}
            </button>
          </div>

          {showComparison && (
            <div style={{marginTop: '32px', overflowX: 'auto', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)'}}>
              <table style={{width: '100%', borderCollapse: 'collapse', background: 'white'}}>
                <thead>
                  <tr>
                    <th style={{background: 'var(--color-text-primary)', color: 'white', padding: '20px 16px', textAlign: 'left'}}>Fonctionnalités</th>
                    <th style={{background: 'var(--color-purple)', color: 'white', padding: '20px 16px', textAlign: 'center'}}>Essentielle<br/><span style={{fontSize: '14px', fontWeight: '400'}}>3 490€</span></th>
                    <th style={{background: 'var(--color-purple)', color: 'white', padding: '20px 16px', textAlign: 'center'}}>Sérénité<br/><span style={{fontSize: '14px', fontWeight: '400'}}>7 990€</span></th>
                    <th style={{background: 'var(--color-purple)', color: 'white', padding: '20px 16px', textAlign: 'center'}}>Expertise<br/><span style={{fontSize: '14px', fontWeight: '400'}}>14 900€</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{borderBottom: '1px solid #E5E7EB'}}>
                    <td style={{padding: '16px', fontWeight: '600'}}>Audit cyber NIS2</td>
                    <td style={{padding: '16px', textAlign: 'center'}}>✓</td>
                    <td style={{padding: '16px', textAlign: 'center'}}>✓</td>
                    <td style={{padding: '16px', textAlign: 'center'}}>✓</td>
                  </tr>
                  <tr style={{borderBottom: '1px solid #E5E7EB'}}>
                    <td style={{padding: '16px', fontWeight: '600'}}>Résultat immédiat</td>
                    <td style={{padding: '16px', textAlign: 'center'}}>✓</td>
                    <td style={{padding: '16px', textAlign: 'center'}}>—</td>
                    <td style={{padding: '16px', textAlign: 'center'}}>—</td>
                  </tr>
                  <tr style={{borderBottom: '1px solid #E5E7EB'}}>
                    <td style={{padding: '16px', fontWeight: '600'}}>Rapport validé par experts</td>
                    <td style={{padding: '16px', textAlign: 'center'}}>—</td>
                    <td style={{padding: '16px', textAlign: 'center'}}>✓</td>
                    <td style={{padding: '16px', textAlign: 'center'}}>✓</td>
                  </tr>
                  <tr style={{borderBottom: '1px solid #E5E7EB'}}>
                    <td style={{padding: '16px', fontWeight: '600'}}>Analyse écarts de conformité</td>
                    <td style={{padding: '16px', textAlign: 'center'}}>—</td>
                    <td style={{padding: '16px', textAlign: 'center'}}>✓</td>
                    <td style={{padding: '16px', textAlign: 'center'}}>✓</td>
                  </tr>
                  <tr style={{borderBottom: '1px solid #E5E7EB'}}>
                    <td style={{padding: '16px', fontWeight: '600'}}>Plan de remédiation détaillé</td>
                    <td style={{padding: '16px', textAlign: 'center'}}>—</td>
                    <td style={{padding: '16px', textAlign: 'center'}}>✓</td>
                    <td style={{padding: '16px', textAlign: 'center'}}>✓</td>
                  </tr>
                  <tr style={{borderBottom: '1px solid #E5E7EB'}}>
                    <td style={{padding: '16px', fontWeight: '600'}}>Restitution avec expert</td>
                    <td style={{padding: '16px', textAlign: 'center'}}>—</td>
                    <td style={{padding: '16px', textAlign: 'center'}}>✓</td>
                    <td style={{padding: '16px', textAlign: 'center'}}>✓</td>
                  </tr>
                  <tr style={{borderBottom: '1px solid #E5E7EB'}}>
                    <td style={{padding: '16px', fontWeight: '600'}}>Entretien préalable expert</td>
                    <td style={{padding: '16px', textAlign: 'center'}}>—</td>
                    <td style={{padding: '16px', textAlign: 'center'}}>—</td>
                    <td style={{padding: '16px', textAlign: 'center'}}>✓</td>
                  </tr>
                  <tr style={{borderBottom: '1px solid #E5E7EB'}}>
                    <td style={{padding: '16px', fontWeight: '600'}}>Roadmap personnalisée</td>
                    <td style={{padding: '16px', textAlign: 'center'}}>—</td>
                    <td style={{padding: '16px', textAlign: 'center'}}>—</td>
                    <td style={{padding: '16px', textAlign: 'center'}}>✓</td>
                  </tr>
                  <tr style={{borderBottom: '1px solid #E5E7EB'}}>
                    <td style={{padding: '16px', fontWeight: '600'}}>Enregistrement ANSSI</td>
                    <td style={{padding: '16px', textAlign: 'center'}}>—</td>
                    <td style={{padding: '16px', textAlign: 'center'}}>—</td>
                    <td style={{padding: '16px', textAlign: 'center'}}>✓</td>
                  </tr>
                  <tr style={{borderBottom: '1px solid #E5E7EB'}}>
                    <td style={{padding: '16px', fontWeight: '600'}}>Dossier aides d'État</td>
                    <td style={{padding: '16px', textAlign: 'center'}}>—</td>
                    <td style={{padding: '16px', textAlign: 'center'}}>—</td>
                    <td style={{padding: '16px', textAlign: 'center'}}>✓</td>
                  </tr>
                  <tr style={{borderBottom: '1px solid #E5E7EB'}}>
                    <td style={{padding: '16px', fontWeight: '600'}}>Accès plateforme</td>
                    <td style={{padding: '16px', textAlign: 'center'}}>—</td>
                    <td style={{padding: '16px', textAlign: 'center'}}>6 mois</td>
                    <td style={{padding: '16px', textAlign: 'center'}}>12 mois</td>
                  </tr>
                  <tr>
                    <td style={{padding: '16px', fontWeight: '600'}}>Délai de livraison</td>
                    <td style={{padding: '16px', textAlign: 'center'}}>Immédiat</td>
                    <td style={{padding: '16px', textAlign: 'center'}}>48H</td>
                    <td style={{padding: '16px', textAlign: 'center'}}>1 mois</td>
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

          <h2 className="section-title-artisan" style={{textAlign: 'center'}}>
            Services <span className="gradient">complémentaires</span>
          </h2>
          <p className="section-subtitle-artisan" style={{textAlign: 'center'}}>
            Découvrez nos services pour aller plus loin dans la conformité et la sécurité
          </p>

          <div className="services-complementaires-grid">
            {/* Carte 1: Modèles de documents NIS2 */}
            <div className="service-card-comp">
              <div className="service-header-comp">
                <div className="service-icon-comp">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="service-title-comp">Montage dossiers Subventions</h3>
              </div>
              <p className="service-description-comp">
                Identification et constitution des dossiers d'aides d'État pour maximiser vos financements
              </p>
            </div>

            {/* Carte 4: Notification Incidents ANSSI */}
            <div className="service-card-comp">
              <div className="service-header-comp">
                <div className="service-icon-comp">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="service-title-comp">Notification Incidents ANSSI</h3>
              </div>
              <p className="service-description-comp">
                Déclaration des incidents en 24h à l'ANSSI avec conseil gestion de crise et hotline 24/7
              </p>
            </div>
          </div>

          <div style={{textAlign: 'center', marginTop: '48px'}}>
            <a
              href="/offres-complementaires"
              className="btn-artisan btn-artisan-primary"
            >
              Découvrir nos services complémentaires
            </a>
          </div>
        </div>
      </section>

      {/* SECTION EXPERTISE */}
      <section className="before-after-section" id="expertise">
        <div className="before-after-container">
          <h2 className="section-title-artisan">
            Préparez-vous à NIS2 avec notre <span className="gradient">méthode éprouvée</span>
          </h2>
          <p className="section-subtitle-artisan">
            Notre accompagnement se base sur le référentiel officiel de l'ANSSI
          </p>

          <div className="before-after-grid">
            <div className="after-card">
              <h3>✓ 15+ Années d'expérience terrain</h3>
              <p>
                Depuis 2009, nous accompagnons les dirigeants dans leur démarche de sécurisation et de conformité Cyber.
              </p>
            </div>

            <div className="after-card">
              <h3>✓ Une équipe d'experts en cyber défense</h3>
              <p>
                Consultants accrédités aux normes internationales ISO 27001. Méthodologie validée et reconnue par l'ANSSI.
              </p>
            </div>
          </div>

          {/* Logos certifications */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '48px',
            flexWrap: 'wrap',
            marginTop: '48px',
            padding: '32px',
            background: 'var(--artisan-bg-light)',
            borderRadius: 'var(--radius-artisan-xl)'
          }}>
            <img src="/logo_anssi.png" alt="ANSSI" style={{height: '60px', width: 'auto', objectFit: 'contain', opacity: '0.8'}} />
            <img src="/Logo-cybermalveillance.PNG" alt="Cybermalveillance" style={{height: '60px', width: 'auto', objectFit: 'contain', opacity: '0.8'}} />
            <img src="/logo_expertcyber.jpg" alt="Expert Cyber" style={{height: '60px', width: 'auto', objectFit: 'contain', opacity: '0.8'}} />
            <img src="/iso_27001_02-1024x704.png" alt="ISO 27001" style={{height: '60px', width: 'auto', objectFit: 'contain', opacity: '0.8'}} />
          </div>
        </div>
      </section>

      {/* SECTION TÉMOIGNAGES - Style Décalé Organique */}
      <section className="content-section testimonials-modern" id="temoignages">
        <div className="content-container">
          <div className="section-badge-center">Success Stories</div>

          <h2 className="section-title-artisan" style={{textAlign: 'center'}}>
            Dirigeants conformes, <span className="gradient">entreprises gagnantes</span>
          </h2>
          <p className="section-subtitle-artisan" style={{textAlign: 'center'}}>
            Ils ont fait de NIS2 un levier de performance
          </p>

          <div className="testimonials-organic-layout">
            {/* Testimonial 1 - Court */}
            <div className="testimonial-card-organic testimonial-small">
              <div className="testimonial-quote-compact">
                "L'audit NIS2 nous a permis d'identifier nos vulnérabilités critiques. Résultat : conformité obtenue et appel d'offres remporté."
              </div>
              <div className="testimonial-author-compact">
                <div className="testimonial-author-name">Marc Dubois</div>
                <div className="testimonial-author-role">CEO, TechManufacture</div>
              </div>
            </div>

            {/* Testimonial 2 - Large */}
            <div className="testimonial-card-organic testimonial-large">
              <div className="testimonial-quote-compact">
                "Grâce à l'accompagnement expert, nous avons transformé notre conformité NIS2 en véritable avantage compétitif. Nos clients nous font confiance."
              </div>
              <div className="testimonial-author-compact">
                <div className="testimonial-author-name">Sophie Martin</div>
                <div className="testimonial-author-role">RSSI, DataSecure</div>
              </div>
            </div>

            {/* Testimonial 3 - Medium */}
            <div className="testimonial-card-organic testimonial-medium">
              <div className="testimonial-quote-compact">
                "La méthodologie structurée nous a permis de passer de 12% à 87% de conformité en 6 mois."
              </div>
              <div className="testimonial-author-compact">
                <div className="testimonial-author-name">Thomas Leroy</div>
                <div className="testimonial-author-role">CTO, CloudVision</div>
              </div>
            </div>

            {/* Testimonial 4 - Small */}
            <div className="testimonial-card-organic testimonial-small">
              <div className="testimonial-quote-compact">
                "Le rapport détaillé a convaincu nos investisseurs."
              </div>
              <div className="testimonial-author-compact">
                <div className="testimonial-author-name">Laurent P.</div>
                <div className="testimonial-author-role">CEO, Startup Tech</div>
              </div>
            </div>

            {/* Testimonial 5 - Medium */}
            <div className="testimonial-card-organic testimonial-medium">
              <div className="testimonial-quote-compact">
                "NIS2 nous a ouvert les portes de nouveaux marchés. +30% de clients B2B en 6 mois."
              </div>
              <div className="testimonial-author-compact">
                <div className="testimonial-author-name">Isabelle R.</div>
                <div className="testimonial-author-role">Directrice, PME Industrielle</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION VIDÉO YOUTUBE */}
      <section className="content-section" id="video-section" style={{background: 'var(--artisan-bg-light)'}}>
        <div className="content-container" style={{maxWidth: '900px'}}>
          <h2 className="section-title-artisan" style={{textAlign: 'center'}}>
            Comprendre <span className="gradient">NIS2</span> en vidéo
          </h2>
          <p className="section-subtitle-artisan" style={{textAlign: 'center'}}>
            3 minutes pour tout comprendre de la directive NIS2
          </p>

          <div className="video-wrapper-design">
            <div className="video-container">
              <iframe
                src={EXTERNAL_LINKS.videoYoutube}
                title="Directive NIS2 expliquée"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION FAQ COMPACTE */}
      <section className="content-section">
        <div className="content-container" style={{maxWidth: '900px'}}>
          <div className="section-badge-center">FAQ</div>

          <h2 className="section-title-artisan" style={{textAlign: 'center'}}>
            Les questions que se posent les <span className="gradient">dirigeants</span>
          </h2>

          <div className="faq-grid-modern">
            {FAQ_ITEMS.map((item, index) => (
              <details key={item.id} className="faq-item-modern" open>
                <summary className="faq-question-modern">
                  <span className="faq-question-text">{item.question}</span>
                </summary>
                <div className="faq-answer-modern">
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
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
