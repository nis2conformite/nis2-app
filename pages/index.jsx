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

      {/* HEADER - STYLE ARTISAN.CO */}
      <header className="header-artisan">
        <div className="header-container">
          <img src="/logo.png" alt="NIS2 Conformité" className="header-logo" />

          <nav className="header-nav">
            <a href="/">Accueil</a>
            <a href="/comprendre-nis2">Comprendre NIS2</a>
            <a href="/qui-sommes-nous">Qui sommes-nous ?</a>
            <a href="#pricing">Tarifs</a>
          </nav>

          <div className="header-cta">
            <MenuBurger />
            <a href={CONTACT_INFO.calendly} target="_blank" rel="noopener noreferrer" className="btn-artisan btn-artisan-primary">
              Échange gratuit
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION - AVEC BADGE + FORM + STATS */}
      <section className="hero-artisan-exact">
        <div className="hero-artisan-container">
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

          <form onSubmit={handleEmailSubmit} className="hero-form-artisan">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre email professionnel"
              className="hero-form-input"
              required
            />
            <button type="submit" className="hero-form-submit">
              Démarrer l'audit
            </button>
          </form>

          <div className="hero-trust-artisan">
            <span>✓ Certifié ISO 27001</span>
            <span>•</span>
            <span>✓ Méthodologie ANSSI</span>
            <span>•</span>
            <span>✓ Sans engagement</span>
          </div>
        </div>
      </section>

      {/* SECTION LIENS INFORMATIFS - QUIZ + VIDÉO */}
      <section className="content-section" style={{paddingTop: '48px', paddingBottom: '48px'}}>
        <div className="content-container" style={{textAlign: 'center'}}>
          <h3 className="section-subtitle-artisan" style={{fontSize: '20px', fontWeight: '700', marginBottom: '24px'}}>
            Vous vous posez des questions ?
          </h3>
          <div style={{display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap'}}>
            <button onClick={quiz.openQuiz} className="btn-artisan btn-artisan-secondary">
              Suis-je concerné par NIS2 ?
            </button>
            <a href="#video-section" className="btn-artisan btn-artisan-secondary">
              Comprendre NIS2 en 3min
            </a>
          </div>
          <p style={{fontSize: '14px', color: 'var(--artisan-text-light)', marginTop: '16px'}}>
            Réponses claires et rapides
          </p>
        </div>
      </section>

      {/* SECTION AVANT/APRÈS */}
      <section className="before-after-section" id="solutions">
        <div className="before-after-container">
          <h2 className="section-title-artisan">
            La conformité <span className="gradient">NIS2</span>, avant et après
          </h2>
          <p className="section-subtitle-artisan">
            Transformez la contrainte réglementaire en levier stratégique pour votre entreprise
          </p>

          <div className="before-after-grid">
            <div className="before-card">
              <h3>❌ Les enjeux de la non-conformité</h3>
              <ul>
                <li><strong>Sanctions financières lourdes</strong> — Jusqu'à 10M€ ou 2% du chiffre d'affaires mondial</li>
                <li><strong>Responsabilité pénale du dirigeant</strong> — En cas de manquement aux obligations NIS2</li>
                <li><strong>Exclusion des marchés</strong> — Impossibilité de répondre aux appels d'offres publics et privés</li>
                <li><strong>Perte de confiance B2B</strong> — Vos clients exigent désormais la conformité</li>
                <li><strong>Contrôles réglementaires</strong> — Audits de votre entreprise sur site sans préavis de l'ANSSI</li>
              </ul>
            </div>

            <div className="after-card">
              <h3>✅ Transformez la contrainte en levier stratégique</h3>
              <ul>
                <li><strong>Remportez les appels d'offres</strong> — La conformité devient un critère obligatoire de sélection</li>
                <li><strong>Différenciez-vous</strong> — Positionnez-vous comme le partenaire de confiance de votre secteur</li>
                <li><strong>Rassurez vos clients</strong> — Montrez que vous protégez les données de vos clients</li>
                <li><strong>Fidélisez vos partenaires</strong> — Consolidez votre réputation d'acteur stable et responsable</li>
                <li><strong>Valorisez votre entreprise</strong> — Une organisation conforme vaut plus en cas de cession</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3 BULLES - NOTRE APPROCHE */}
      <section className="content-section">
        <div className="content-container">
          <h2 className="section-title-artisan" style={{textAlign: 'center'}}>
            <span className="gradient">Notre approche</span> en 3 étapes
          </h2>
          <p className="section-subtitle-artisan" style={{textAlign: 'center'}}>
            Une méthodologie éprouvée pour votre conformité NIS2
          </p>

          <div className="timeline-container">
            <div className="timeline-horizontal">
              {EXPERTISE_TIMELINE.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-number">{item.number}</div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">{item.title}</h3>
                    <p className="timeline-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION AVEC FOND NOIR - STATS & CHIFFRES */}
      <section className="black-section-artisan">
        <div className="content-container">
          <h2 className="section-title-artisan" style={{textAlign: 'center'}}>
            La prévention est plus <span className="highlight">rentable</span> qu'une crise cyber
          </h2>
          <p className="section-subtitle-artisan" style={{textAlign: 'center'}}>
            Vulnérabilité des PME et ETI • 43% perdent des clients après une attaque cyber
          </p>

          {/* CARTES EN QUINCONCE AVEC VARIATIONS DE COULEURS */}
          <div className="staggered-grid">
            <div className="content-card-artisan card-purple">
              <h3 style={{fontSize: '36px', marginBottom: '12px'}}>92%</h3>
              <h3>PME et ETI non prêtes</h3>
              <p>
                La majorité des entreprises concernées par NIS2 ne sont pas encore conformes.
                Les premières sanctions arrivent en 2027.
              </p>
            </div>

            <div className="content-card-artisan card-pink">
              <h3 style={{fontSize: '36px', marginBottom: '12px'}}>+38%</h3>
              <h3>Hausse des cyberattaques</h3>
              <p>
                Les attaques contre les PME ont explosé de 38% en 2024.
                Les cybercriminels ciblent les entreprises non protégées.
              </p>
            </div>

            <div className="content-card-artisan card-blue">
              <h3 style={{fontSize: '36px', marginBottom: '12px'}}>4,35M€</h3>
              <h3>Coût moyen d'une cyberattaque</h3>
              <p>
                60% des PME touchées ferment dans les 12 mois. Arrêt de production (21 jours en moyenne),
                perte de données, rançons.
              </p>
            </div>

            <div className="content-card-artisan card-purple">
              <h3 style={{fontSize: '36px', marginBottom: '12px'}}>10M€</h3>
              <h3>Amende maximale NIS2</h3>
              <p>
                Ou 2% du chiffre d'affaires annuel mondial. La non-conformité coûte 200x plus cher qu'un audit préventif.
              </p>
            </div>

            <div className="content-card-artisan card-pink">
              <h3 style={{fontSize: '36px', marginBottom: '12px'}}>70%</h3>
              <h3>D'aides de l'État possibles</h3>
              <p>
                Des dispositifs existent pour financer votre mise en conformité.
                Nous vous accompagnons dans les démarches.
              </p>
            </div>

            <div className="content-card-artisan card-blue">
              <h3 style={{fontSize: '36px', marginBottom: '12px'}}>65</h3>
              <h3>Questions d'audit structurées</h3>
              <p>
                Notre audit couvre les 10 catégories de sécurité définies par le référentiel ANSSI.
                Rapport détaillé en 48H.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION PRICING */}
      <section className="pricing-section-artisan" id="pricing">
        <div className="before-after-container">
          <h2 className="section-title-artisan">
            Investissement vs <span className="gradient">Amende</span>
          </h2>
          <p className="section-subtitle-artisan">
            Un audit coûte 200x moins cher qu'une sanction. Protégez votre entreprise dès maintenant.
          </p>

          {/* Bandeau aides d'état */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '24px 32px',
            background: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)',
            borderRadius: 'var(--radius-artisan-xl)',
            border: '2px solid #93C5FD',
            marginBottom: '48px',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div>
              <div style={{fontSize: '16px', fontWeight: '700', marginBottom: '4px'}}>
                Aides de l'État disponibles
              </div>
              <div style={{fontSize: '14px', color: 'var(--artisan-text-light)'}}>
                Réduisez le coût de votre mise en conformité.
              </div>
            </div>
            <button
              onClick={() => alert('Simulateur en cours de développement')}
              style={{
                padding: '12px 24px',
                background: 'var(--artisan-primary)',
                color: 'white',
                border: 'none',
                borderRadius: 'var(--radius-artisan-lg)',
                fontWeight: '700',
                fontSize: '14px',
                cursor: 'pointer'
              }}
            >
              Simulateur aides État
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
            <div style={{marginTop: '32px', overflowX: 'auto', borderRadius: 'var(--radius-artisan-xl)', boxShadow: 'var(--shadow-artisan-lg)'}}>
              <table style={{width: '100%', borderCollapse: 'collapse', background: 'white'}}>
                <thead>
                  <tr>
                    <th style={{background: 'var(--artisan-text-dark)', color: 'white', padding: '20px 16px', textAlign: 'left'}}>Fonctionnalités</th>
                    <th style={{background: 'var(--artisan-primary)', color: 'white', padding: '20px 16px', textAlign: 'center'}}>Essentielle<br/><span style={{fontSize: '14px', fontWeight: '400'}}>3 490€</span></th>
                    <th style={{background: 'var(--artisan-primary)', color: 'white', padding: '20px 16px', textAlign: 'center'}}>Sérénité<br/><span style={{fontSize: '14px', fontWeight: '400'}}>7 990€</span></th>
                    <th style={{background: 'var(--artisan-primary)', color: 'white', padding: '20px 16px', textAlign: 'center'}}>Expertise<br/><span style={{fontSize: '14px', fontWeight: '400'}}>14 900€</span></th>
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
          <h2 className="section-title-artisan" style={{textAlign: 'center'}}>
            Services <span className="gradient">complémentaires</span>
          </h2>
          <p className="section-subtitle-artisan" style={{textAlign: 'center'}}>
            Découvrez nos services pour aller plus loin dans la conformité et la sécurité
          </p>

          <div className="content-grid">
            <div className="content-card-artisan">
              <h3>📄 Modèles de documents NIS2</h3>
              <p>
                Templates prêts à l'emploi pour votre mise en conformité, mis à jour avec la réglementation
              </p>
            </div>

            <div className="content-card-artisan">
              <h3>📚 Formations NIS2</h3>
              <p>
                Formation obligatoire des dirigeants et sensibilisation des équipes, en distanciel ou sur site
              </p>
            </div>

            <div className="content-card-artisan">
              <h3>💼 Montage dossiers Subventions</h3>
              <p>
                Identification et constitution des dossiers d'aides d'État pour maximiser vos financements
              </p>
            </div>

            <div className="content-card-artisan">
              <h3>⚠️ Notification Incidents ANSSI</h3>
              <p>
                Déclaration des incidents en 24h à l'ANSSI avec conseil gestion de crise et hotline 24/7
              </p>
            </div>
          </div>

          <div style={{textAlign: 'center', marginTop: '48px'}}>
            <a
              href={CONTACT_INFO.calendly}
              target="_blank"
              rel="noopener noreferrer"
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

      {/* SECTION TÉMOIGNAGES */}
      <section className="content-section" id="temoignages">
        <div className="content-container">
          <h2 className="section-title-artisan" style={{textAlign: 'center'}}>
            Dirigeants conformes, <span className="gradient">entreprises gagnantes</span>
          </h2>
          <p className="section-subtitle-artisan" style={{textAlign: 'center'}}>
            Ils ont fait de NIS2 un levier de performance
          </p>

          <div className="testimonial-grid-artisan">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <p className="testimonial-quote">"{testimonial.text}"</p>
                <div className="testimonial-author-section">
                  <div className="testimonial-avatar">{testimonial.author.avatar}</div>
                  <div>
                    <div className="testimonial-author-name">{testimonial.author.name}</div>
                    <div className="testimonial-author-role">{testimonial.author.role}</div>
                  </div>
                </div>
              </div>
            ))}
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

          <div style={{
            position: 'relative',
            paddingBottom: '56.25%',
            height: 0,
            overflow: 'hidden',
            borderRadius: '16px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
            marginTop: '48px'
          }}>
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
      </section>

      {/* SECTION FAQ */}
      <section className="content-section">
        <div className="content-container" style={{maxWidth: '800px'}}>
          <h2 className="section-title-artisan" style={{textAlign: 'center'}}>
            Les questions que se posent les <span className="gradient">dirigeants</span>
          </h2>

          <div className="faq-container">
            {FAQ_ITEMS.map((item) => (
              <details key={item.id} className="faq-item">
                <summary className="faq-question">
                  <span style={{fontSize: '24px', marginRight: '12px'}}>{item.icon}</span>
                  {item.question}
                </summary>
                <p className="faq-answer">{item.answer}</p>
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

      {/* FOOTER */}
      <footer className="footer-artisan">
        <div className="footer-container">
          <div className="footer-brand">
            <img src="/logo.png" alt="NIS2 Conformité" style={{height: '48px', marginBottom: '16px'}} />
            <p style={{fontSize: '14px', color: 'var(--artisan-footer-text)', lineHeight: '1.6'}}>
              La plateforme d'audit et de conformité cyber<br />
              pensée pour les PME et ETI européennes
            </p>
          </div>

          <div className="footer-links">
            <div>
              <h4 style={{fontSize: '16px', fontWeight: '700', marginBottom: '16px', color: 'white'}}>Navigation</h4>
              <ul style={{listStyle: 'none', padding: 0}}>
                <li style={{marginBottom: '12px'}}><a href="/" style={{color: 'var(--artisan-footer-text)', textDecoration: 'none'}}>Accueil</a></li>
                <li style={{marginBottom: '12px'}}><a href="/comprendre-nis2" style={{color: 'var(--artisan-footer-text)', textDecoration: 'none'}}>Comprendre NIS2</a></li>
                <li style={{marginBottom: '12px'}}><a href="/qui-sommes-nous" style={{color: 'var(--artisan-footer-text)', textDecoration: 'none'}}>Qui sommes-nous ?</a></li>
              </ul>
            </div>

            <div>
              <h4 style={{fontSize: '16px', fontWeight: '700', marginBottom: '16px', color: 'white'}}>Nos services</h4>
              <ul style={{listStyle: 'none', padding: 0}}>
                <li style={{marginBottom: '12px'}}><a href="/offres-complementaires" style={{color: 'var(--artisan-footer-text)', textDecoration: 'none'}}>Offres complémentaires</a></li>
                <li style={{marginBottom: '12px'}}><a href="/formations" style={{color: 'var(--artisan-footer-text)', textDecoration: 'none'}}>Formations</a></li>
                <li style={{marginBottom: '12px'}}><a href="/#pricing" style={{color: 'var(--artisan-footer-text)', textDecoration: 'none'}}>Nos audits</a></li>
              </ul>
            </div>

            <div>
              <h4 style={{fontSize: '16px', fontWeight: '700', marginBottom: '16px', color: 'white'}}>Contact</h4>
              <ul style={{listStyle: 'none', padding: 0}}>
                <li style={{marginBottom: '12px'}}>
                  <a href={CONTACT_INFO.calendly} target="_blank" rel="noopener noreferrer" style={{color: 'var(--artisan-footer-text)', textDecoration: 'none'}}>
                    Prendre rendez-vous
                  </a>
                </li>
                <li style={{marginBottom: '12px'}}>
                  <a href="mailto:nis2conformite@gmail.com" style={{color: 'var(--artisan-footer-text)', textDecoration: 'none'}}>
                    nis2conformite@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 NIS2 Conformité • Tous droits réservés</p>
          <div style={{display: 'flex', gap: '16px'}}>
            <span>✓ Certifié ISO 27001</span>
            <span>✓ Méthodologie ANSSI</span>
          </div>
        </div>
      </footer>

      <QuizModal quiz={quiz} />
    </>
  );
}
