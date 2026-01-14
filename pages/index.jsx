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

  async function handleNewsletterSubmit(e) {
    e.preventDefault();
    if (email) {
      alert(`Merci ${email} ! Vous allez recevoir notre guide NIS2.`);
      setEmail('');
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const stickyHeader = document.getElementById('stickyHeader');
      const heroSection = document.querySelector('.hero-artisan');

      if (heroSection && stickyHeader) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        if (window.scrollY > heroBottom) {
          stickyHeader.classList.add('visible');
        } else {
          stickyHeader.classList.remove('visible');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    document.querySelectorAll('.content-card-artisan, .testimonial-card-artisan').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
      observer.observe(el);
    });

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
        <title>NIS2 Conformité | Expert Cybersécurité ISO 27001 | Accompagnement Stratégique PME</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="bg-gradient-artisan"></div>

      {/* Alert Bar */}
      <div className="alert-bar-artisan">
        <span>NIS2 Conformité obligatoire • Premières sanctions en 2027 • Agissez maintenant</span>
      </div>

      {/* Sticky Header */}
      <header className="header-artisan" id="stickyHeader">
        <div className="header-content-artisan">
          <div className="header-logo-artisan">
            <img
              src="/logo.png"
              alt="Cyber Solférino"
            />
          </div>
          <div className="header-cta-artisan">
            <MenuBurger />
            <a href={CONTACT_INFO.calendly} target="_blank" rel="noopener noreferrer" className="btn-header-artisan">
              Échange gratuit
            </a>
          </div>
        </div>
      </header>

      <div className="container-artisan">
        {/* ═══════════════════════════════════════════════════════════
            HERO SECTION - STRUCTURE HISTORIQUE + DESIGN ARTISAN
            ═══════════════════════════════════════════════════════════ */}
        <section className="hero-artisan">
          <img
            src="/logo.png"
            alt="Cyber Solférino"
            className="hero-logo-artisan"
          />

          <p className="hero-baseline-artisan">
            La plateforme d'audit et de conformité cyber<br />
            pensée pour les PME et ETI européennes
          </p>

          <div className="hero-separator-artisan"></div>

          <h1 className="hero-title-artisan">
            Mesurez vos risques <span className="gradient">NIS2</span><br />
            et priorisez vos actions
          </h1>

          <p className="hero-subtitle-artisan">
            Audit structuré • Selon référentiel ANSSI • Rapport détaillé • Recommandations priorisées
          </p>

          {/* Stats dans le Hero - Structure historique */}
          <div className="hero-stats-artisan">
            <div className="stat-artisan">
              <div className="stat-value-artisan">92%</div>
              <div className="stat-label-artisan">PME et ETI<br />non prêtes</div>
            </div>
            <div className="stat-artisan">
              <div className="stat-value-artisan">10M€</div>
              <div className="stat-label-artisan">amende max<br />ou 2% du CA</div>
            </div>
            <div className="stat-artisan">
              <div className="stat-value-artisan">70%</div>
              <div className="stat-label-artisan">d'aides de l'état<br />possibles</div>
            </div>
            <div className="stat-artisan">
              <div className="stat-value-artisan">65</div>
              <div className="stat-label-artisan">questions<br />d'audit</div>
            </div>
          </div>

          {/* CTA "Échange gratuit" */}
          <a
            href={CONTACT_INFO.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta-artisan"
          >
            Échange gratuit - Suis-je éligible ?
          </a>

          <p className="hero-reassurance-artisan">
            ✓ Certifié ISO 27001 • ✓ Méthodologie ANSSI • ✓ Sans engagement
          </p>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION LIENS INFORMATIFS - HISTORIQUE
            ═══════════════════════════════════════════════════════════ */}
        <section className="info-section-artisan">
          <h3 className="info-title-artisan">Vous vous posez des questions ?</h3>
          <div className="info-links-artisan">
            <button onClick={quiz.openQuiz} className="info-link-artisan">
              Suis-je concerné par NIS2 ?
            </button>
            <a href="#video-section" className="info-link-artisan">
              Comprendre NIS2 en 3min
            </a>
          </div>
          <p className="info-subtitle-artisan">Réponses claires et rapides</p>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            AVANT / APRÈS - HISTORIQUE (Warning + Value Prop)
            ═══════════════════════════════════════════════════════════ */}
        <div className="cards-grid-artisan">
          <div className="content-card-artisan">
            <h2 className="card-title-artisan">
              Les enjeux de la<br />non-conformité
            </h2>
            <ul className="card-list-artisan">
              <li><strong>Sanctions financières lourdes</strong> — Jusqu'à 10M€ ou 2% du chiffre d'affaires mondial</li>
              <li><strong>Responsabilité pénale du dirigeant</strong> — En cas de manquement aux obligations NIS2</li>
              <li><strong>Exclusion des marchés</strong> — Impossibilité de répondre aux appels d'offres publics et privés</li>
              <li><strong>Perte de confiance B2B</strong> — Vos clients exigent désormais la conformité</li>
              <li><strong>Contrôles réglementaires</strong> — Audits de votre entreprise sur site sans préavis de l'ANSSI</li>
            </ul>
          </div>

          <div className="content-card-artisan">
            <h2 className="card-title-artisan">
              Transformez la contrainte en<br />levier stratégique
            </h2>
            <ul className="card-list-artisan">
              <li><strong>Remportez les appels d'offres</strong> — La conformité devient un critère obligatoire de sélection</li>
              <li><strong>Différenciez-vous</strong> — Positionnez-vous comme le partenaire de confiance de votre secteur</li>
              <li><strong>Rassurez vos clients</strong> — Montrez que vous protégez les données de vos clients</li>
              <li><strong>Fidélisez vos partenaires</strong> — Consolidez votre réputation d'acteur stable et responsable</li>
              <li><strong>Valorisez votre entreprise</strong> — Une organisation conforme vaut plus en cas de cession</li>
            </ul>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════
            SECTION IMPACT - HISTORIQUE (2 grandes cartes)
            ═══════════════════════════════════════════════════════════ */}
        <section className="section-artisan">
          <div className="section-header-artisan">
            <h2 className="section-title-artisan">
              La prévention est plus rentable qu'une crise cyber
            </h2>
            <p className="section-subtitle-artisan">
              Vulnérabilité des PME et ETI • 43% perdent des clients après une attaque cyber
            </p>
          </div>

          <div className="cards-grid-artisan" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
            <div className="content-card-artisan card-purple">
              <div style={{display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px'}}>
                <div style={{fontSize: '48px'}}>📈</div>
                <div style={{fontSize: '48px', fontWeight: '800', color: 'var(--artisan-purple)'}}>+38%</div>
              </div>
              <h3 style={{fontSize: '24px', marginBottom: '12px', fontWeight: '700'}}>Hausse attaques cyber</h3>
              <p style={{color: 'var(--artisan-text-medium)', lineHeight: '1.6'}}>
                Les attaques contre les PME ont explosé de 38% en 2024. Les cybercriminels ciblent les entreprises non protégées.
              </p>
            </div>

            <div className="content-card-artisan card-pink">
              <div style={{display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px'}}>
                <div style={{fontSize: '48px', fontWeight: '800', color: 'var(--artisan-pink)'}}>4,35M€</div>
              </div>
              <h3 style={{fontSize: '24px', marginBottom: '12px', fontWeight: '700'}}>Coût moyen cyber attaque</h3>
              <p style={{color: 'var(--artisan-text-medium)', lineHeight: '1.6'}}>
                60% des PME touchées ferment dans les 12 mois. Arrêt de production (21 jours en moyenne), perte de données, rançons.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            PRICING - STRUCTURE HISTORIQUE EXACTE
            ═══════════════════════════════════════════════════════════ */}
        <section className="section-artisan" id="pricing">
          <div className="section-header-artisan">
            <h2 className="section-title-artisan">
              Investissement vs <span className="gradient">Amende</span>
            </h2>
            <p className="section-subtitle-artisan">
              Un audit coûte 200x moins cher qu'une sanction
            </p>
          </div>

          {/* Bandeau aides d'état */}
          <div className="subsidy-banner-artisan">
            <div>
              <div style={{fontSize: '16px', fontWeight: '700', marginBottom: '4px'}}>
                Aides de l'État disponibles
              </div>
              <div style={{fontSize: '14px', color: 'var(--artisan-text-light)'}}>
                Réduisez le coût de votre mise en conformité.
              </div>
            </div>
            <button className="btn-simulator-artisan" onClick={() => alert('Simulateur en cours de développement')}>
              Simulateur aides État
            </button>
          </div>

          {/* 3 cartes de pricing - Structure historique */}
          <div className="pricing-grid-artisan">
            {/* Offre 1: Essentielle */}
            <div className="pricing-card-artisan">
              <div className="pricing-header-artisan">
                <h3>Essentielle</h3>
                <div className="pricing-price-artisan">3 490€</div>
                <div className="pricing-period-artisan">HT • Paiement unique</div>
              </div>

              <div className="pricing-ideal-artisan">
                <strong>Idéal pour :</strong> PME cherchant à évaluer leur positionnement
              </div>

              <ul className="pricing-features-artisan">
                <li>Audit cyber NIS2 complet</li>
                <li>Résultat immédiat en ligne</li>
                <li>Score de conformité détaillé</li>
                <li>Recommandations prioritaires</li>
                <li>Support par email</li>
              </ul>

              <button onClick={handleStripeCheckout} className="btn-pricing-artisan btn-secondary-artisan">
                Démarrer l'audit
              </button>
            </div>

            {/* Offre 2: Sérénité (POPULAIRE) */}
            <div className="pricing-card-artisan pricing-featured-artisan">
              <div className="pricing-badge-artisan">⭐ POPULAIRE</div>

              <div className="pricing-header-artisan">
                <h3>Sérénité</h3>
                <div className="pricing-price-artisan">7 990€</div>
                <div className="pricing-period-artisan">HT • Paiement unique</div>
              </div>

              <div className="pricing-ideal-artisan">
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
                className="btn-pricing-artisan btn-primary-artisan"
              >
                Prendre rendez-vous
              </a>
            </div>

            {/* Offre 3: Expertise */}
            <div className="pricing-card-artisan">
              <div className="pricing-header-artisan">
                <h3>Expertise</h3>
                <div className="pricing-price-artisan">14 900€</div>
                <div className="pricing-period-artisan">HT • Paiement unique</div>
              </div>

              <div className="pricing-ideal-artisan">
                <strong>Idéal pour :</strong> ETI et secteurs critiques
              </div>

              <ul className="pricing-features-artisan">
                <li><strong>Tout de l'offre Sérénité</strong></li>
                <li className="feature-plus-artisan">Entretien préalable expert</li>
                <li className="feature-plus-artisan">Roadmap personnalisée</li>
                <li className="feature-plus-artisan">Enregistrement ANSSI</li>
                <li className="feature-plus-artisan">Dossier aides d'État</li>
                <li className="feature-plus-artisan">Accès plateforme 12 mois</li>
                <li className="feature-plus-artisan">MAJ évolutions législatives</li>
              </ul>

              <a
                href={CONTACT_INFO.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pricing-artisan btn-secondary-artisan"
              >
                Prendre rendez-vous
              </a>
            </div>
          </div>

          {/* Comparatif accordéon - Structure historique */}
          <div className="comparison-toggle-artisan">
            <button
              className="btn-compare-artisan"
              onClick={() => setShowComparison(!showComparison)}
            >
              {showComparison ? '▼ Masquer le comparatif' : '▶ Comparer nos offres'}
            </button>
          </div>

          {showComparison && (
            <div className="comparison-table-artisan">
              <table>
                <thead>
                  <tr>
                    <th>Fonctionnalités</th>
                    <th>Essentielle<br/><span style={{fontSize: '14px', fontWeight: '400'}}>3 490€</span></th>
                    <th>Sérénité<br/><span style={{fontSize: '14px', fontWeight: '400'}}>7 990€</span></th>
                    <th>Expertise<br/><span style={{fontSize: '14px', fontWeight: '400'}}>14 900€</span></th>
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
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SERVICES COMPLÉMENTAIRES - HISTORIQUE
            ═══════════════════════════════════════════════════════════ */}
        <section className="section-artisan">
          <div className="section-header-artisan">
            <h2 className="section-title-artisan">Services complémentaires</h2>
            <p className="section-subtitle-artisan">
              Découvrez nos services pour aller plus loin dans la conformité et la sécurité
            </p>
          </div>

          <div className="cards-grid-artisan">
            <div className="content-card-artisan">
              <div style={{display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px'}}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #6366F1 0%, #A855F7 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '24px'
                }}>
                  📄
                </div>
                <h3 style={{fontSize: '20px', fontWeight: '700'}}>Modèles de documents NIS2</h3>
              </div>
              <p style={{color: 'var(--artisan-text-medium)', lineHeight: '1.6'}}>
                Templates prêts à l'emploi pour votre mise en conformité, mis à jour avec la réglementation
              </p>
            </div>

            <div className="content-card-artisan">
              <div style={{display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px'}}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '24px'
                }}>
                  📚
                </div>
                <h3 style={{fontSize: '20px', fontWeight: '700'}}>Formations NIS2</h3>
              </div>
              <p style={{color: 'var(--artisan-text-medium)', lineHeight: '1.6'}}>
                Formation obligatoire des dirigeants et sensibilisation des équipes, en distanciel ou sur site
              </p>
            </div>

            <div className="content-card-artisan">
              <div style={{display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px'}}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #A855F7 0%, #EC4899 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '24px'
                }}>
                  💼
                </div>
                <h3 style={{fontSize: '20px', fontWeight: '700'}}>Montage dossiers Subventions</h3>
              </div>
              <p style={{color: 'var(--artisan-text-medium)', lineHeight: '1.6'}}>
                Identification et constitution des dossiers d'aides d'État pour maximiser vos financements
              </p>
            </div>

            <div className="content-card-artisan">
              <div style={{display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px'}}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #EC4899 0%, #EF4444 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '24px'
                }}>
                  ⚠️
                </div>
                <h3 style={{fontSize: '20px', fontWeight: '700'}}>Notification Incidents ANSSI</h3>
              </div>
              <p style={{color: 'var(--artisan-text-medium)', lineHeight: '1.6'}}>
                Déclaration des incidents en 24h à l'ANSSI avec conseil gestion de crise et hotline 24/7
              </p>
            </div>
          </div>

          <div style={{textAlign: 'center', marginTop: '48px'}}>
            <a
              href={CONTACT_INFO.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta-artisan"
            >
              Découvrir nos services complémentaires
            </a>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            EXPERTISE + TIMELINE 3 BULLES - HISTORIQUE
            ═══════════════════════════════════════════════════════════ */}
        <section className="section-artisan">
          <div className="section-header-artisan">
            <h2 className="section-title-artisan">
              Préparez-vous à NIS2 avec notre méthode éprouvée
            </h2>
            <p className="section-subtitle-artisan">
              Notre accompagnement se base sur le référentiel officiel de l'ANSSI.
            </p>
          </div>

          {/* Timeline 3 bulles */}
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

          {/* Cartes expertise */}
          <div className="cards-grid-artisan" style={{marginTop: '64px'}}>
            <div className="content-card-artisan card-blue">
              <div style={{display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px'}}>
                <div style={{fontSize: '48px', fontWeight: '800', color: 'var(--artisan-blue)'}}>15+</div>
                <h3 style={{fontSize: '24px', fontWeight: '700'}}>Années d'expérience terrain</h3>
              </div>
              <p style={{color: 'var(--artisan-text-medium)', lineHeight: '1.6'}}>
                Depuis 2009, nous accompagnons les dirigeants dans leur démarche de sécurisation et de conformité Cyber.
              </p>
            </div>

            <div className="content-card-artisan card-purple">
              <div style={{display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px'}}>
                <div style={{fontSize: '56px'}}>✓</div>
                <h3 style={{fontSize: '24px', fontWeight: '700'}}>Une équipe d'experts en cyber défense</h3>
              </div>
              <p style={{color: 'var(--artisan-text-medium)', lineHeight: '1.6'}}>
                Consultants accrédités aux normes internationales ISO 27001. Méthodologie validée et reconnue par l'ANSSI.
              </p>
            </div>
          </div>

          {/* Logos certifications */}
          <div className="certifications-artisan">
            <img src="/logo_anssi.png" alt="ANSSI" />
            <img src="/Logo-cybermalveillance.PNG" alt="Cybermalveillance" />
            <img src="/logo_expertcyber.jpg" alt="Expert Cyber" />
            <img src="/iso_27001_02-1024x704.png" alt="ISO 27001" />
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            TÉMOIGNAGES - HISTORIQUE
            ═══════════════════════════════════════════════════════════ */}
        <section className="section-artisan">
          <div className="section-header-artisan">
            <h2 className="section-title-artisan">
              Dirigeants conformes, entreprises gagnantes
            </h2>
            <p className="section-subtitle-artisan">
              Ils ont fait de NIS2 un levier de performance
            </p>
          </div>

          <div className="testimonials-grid-artisan">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card-artisan">
                <div className="testimonial-text-artisan">"{testimonial.text}"</div>
                <div className="testimonial-author-artisan">
                  <div className="author-avatar-artisan">{testimonial.author.avatar}</div>
                  <div>
                    <div className="author-name-artisan">{testimonial.author.name}</div>
                    <div className="author-role-artisan">{testimonial.author.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            VIDÉO - HISTORIQUE
            ═══════════════════════════════════════════════════════════ */}
        <section className="section-artisan" id="video-section">
          <div className="section-header-artisan">
            <div className="video-badge-artisan">Comprendre NIS2 en vidéo</div>
          </div>
          <div className="video-container-artisan">
            <iframe
              src={EXTERNAL_LINKS.videoYoutube}
              title="Directive NIS2 expliquée"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen>
            </iframe>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            FAQ - HISTORIQUE
            ═══════════════════════════════════════════════════════════ */}
        <section className="section-artisan">
          <div className="section-header-artisan">
            <h2 className="section-title-artisan">
              Les questions que se posent les dirigeants
            </h2>
          </div>

          <div className="faq-artisan">
            {FAQ_ITEMS.map((item) => (
              <details key={item.id} className="faq-item-artisan">
                <summary className="faq-question-artisan">
                  <span style={{fontSize: '24px', marginRight: '12px'}}>{item.icon}</span>
                  {item.question}
                </summary>
                <p className="faq-answer-artisan">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            CTA FINAL - HISTORIQUE
            ═══════════════════════════════════════════════════════════ */}
        <section className="cta-final-artisan">
          <h2>Sécurisez votre avenir dès aujourd'hui</h2>
          <p>
            Échange confidentiel avec un consultant certifié ISO 27001<br />
            <strong>Audit indépendant pour mesurer votre conformité</strong>
          </p>
          <a
            href={CONTACT_INFO.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta-final-artisan"
          >
            Réserver un échange gratuit
          </a>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            FOOTER - HISTORIQUE (4 colonnes)
            ═══════════════════════════════════════════════════════════ */}
        <footer className="footer-artisan">
          <div className="footer-container-artisan">
            <div className="footer-brand-artisan">
              <img src="/logo.png" alt="NIS2 Conformité" className="footer-logo-artisan" />
              <p className="footer-tagline-artisan">
                La plateforme d'audit et de conformité cyber<br />
                pensée pour les PME et ETI européennes
              </p>
            </div>

            <div className="footer-links-artisan">
              <div className="footer-column-artisan">
                <h4>Navigation</h4>
                <ul>
                  <li><a href="/">Accueil</a></li>
                  <li><a href="/comprendre-nis2">Comprendre NIS2</a></li>
                  <li><a href="/qui-sommes-nous">Qui sommes-nous ?</a></li>
                </ul>
              </div>

              <div className="footer-column-artisan">
                <h4>Nos services</h4>
                <ul>
                  <li><a href="/offres-complementaires">Offres complémentaires</a></li>
                  <li><a href="/formations">Formations</a></li>
                  <li><a href="/#pricing">Nos audits</a></li>
                </ul>
              </div>

              <div className="footer-column-artisan">
                <h4>Contact</h4>
                <ul>
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
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom-artisan">
            <p>© 2025 NIS2 Conformité • Tous droits réservés</p>
            <div className="footer-certifications-artisan">
              <span>✓ Certifié ISO 27001</span>
              <span>✓ Méthodologie ANSSI</span>
            </div>
          </div>
        </footer>
      </div>

      <QuizModal quiz={quiz} />
    </>
  );
}
