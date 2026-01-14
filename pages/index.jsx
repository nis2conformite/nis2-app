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

  useEffect(() => {
    const handleScroll = () => {
      const stickyHeader = document.getElementById('stickyHeader');
      const heroSection = document.querySelector('.hero-minimal');
      
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

    document.querySelectorAll('.faq-item').forEach(item => {
      item.addEventListener('click', function() {
        this.classList.toggle('active');
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

    document.querySelectorAll('.price-card, .testimonial, .impact-card, .expertise-card').forEach(el => {
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

      <div className="bg-gradient"></div>

      <div className="alert-bar">
        <span>NIS2 Conformité obligatoire • Premières sanctions en 2027 • Agissez maintenant</span>
      </div>

      <div className="sticky-header" id="stickyHeader">
        <div className="sticky-header-content">
          <div className="sticky-logo-img">
            <img 
              src="/logo.png" 
              alt="Cyber Solférino" 
              className="sticky-logo-large"
            />
          </div>
          <div className="sticky-cta-group">
            <MenuBurger />
            <a href={CONTACT_INFO.calendly} target="_blank" rel="noopener noreferrer" className="btn-sticky primary">
              Échange gratuit
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        {/* ✅ NOUVELLE SECTION HERO - PROPOSITION 3 MINIMALISTE PREMIUM */}
        <section className="hero-minimal">
          <img 
            src="/logo.png" 
            alt="Cyber Solférino" 
            className="hero-logo"
          />
          
          <p className="hero-baseline">
            La plateforme d'audit et de conformité cyber<br />
            pensée pour les PME et ETI européennes
          </p>

          <div className="hero-separator"></div>

          <h1 className="hero-title">
            Mesurez vos risques NIS2<br />
            et priorisez vos actions
          </h1>
          
          <p className="hero-subtitle">
            Audit structuré • Selon référentiel ANSSI • Rapport détaillé • Recommandations priorisées
          </p>

          <div className="hero-stats-minimal">
            <div className="stat-minimal">
              <div className="stat-value-minimal">92%</div>
              <div className="stat-label-minimal">PME et ETI<br />non prêtes</div>
            </div>
            <div className="stat-minimal">
              <div className="stat-value-minimal">10M€</div>
              <div className="stat-label-minimal">amende max<br />ou 2% du CA</div>
            </div>
            <div className="stat-minimal">
              <div className="stat-value-minimal">70%</div>
              <div className="stat-label-minimal">d'aides de l'état<br />possibles</div>
            </div>
            <div className="stat-minimal">
              <div className="stat-value-minimal">65</div>
              <div className="stat-label-minimal">questions<br />d'audit</div>
            </div>
          </div>

          <a
            href={CONTACT_INFO.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta-primary"
          >
            Échange gratuit - Suis-je éligible ?
          </a>

          <p className="hero-reassurance">
            ✓ Certifié ISO 27001 • ✓ Méthodologie ANSSI • ✓ Sans engagement
          </p>
        </section>

        {/* Section liens informatifs */}
        <section className="info-links-section">
          <h3 className="info-links-title">Vous vous posez des questions ?</h3>
          <div className="info-links-container">
            <button onClick={quiz.openQuiz} className="info-link">
              Suis-je concerné par NIS2 ?
            </button>
            <a href="#video-section" className="info-link">
              Comprendre NIS2 en 3min
            </a>
          </div>
          <p className="info-links-subtitle">Réponses claires et rapides</p>
        </section>

        <div className="risk-opportunity-wrapper">
          <section className="warning-card">
            <h2>Les enjeux de la<br />non-conformité</h2>
            <ul className="warning-list">
              <li><strong>Sanctions financières lourdes</strong> — Jusqu'à 10M€ ou 2% du chiffre d'affaires mondial</li>
              <li><strong>Responsabilité pénale du dirigeant</strong> — En cas de manquement aux obligations NIS2</li>
              <li><strong>Exclusion des marchés</strong> — Impossibilité de répondre aux appels d'offres publics et privés</li>
              <li><strong>Perte de confiance B2B</strong> — Vos clients exigent désormais la conformité</li>
              <li><strong>Contrôles réglementaires</strong> — Audits de votre entreprise sur site sans préavis de l'ANSSI</li>
            </ul>
          </section>

          <section className="value-prop">
            <h2>Transformez la contrainte en<br />levier stratégique</h2>
            <ul className="value-list">
              <li><strong>Remportez les appels d'offres</strong> — La conformité devient un critère obligatoire de sélection</li>
              <li><strong>Différenciez-vous</strong> — Positionnez-vous comme le partenaire de confiance de votre secteur</li>
              <li><strong>Rassurez vos clients</strong> — Montrez que vous protégez les données de vos clients</li>
              <li><strong>Fidélisez vos partenaires</strong> — Consolidez votre réputation d'acteur stable et responsable</li>
              <li><strong>Valorisez votre entreprise</strong> — Une organisation conforme vaut plus en cas de cession</li>
            </ul>
          </section>
        </div>

        <section className="impact-section">
          <div className="section-header">
            <h2 style={{color: '#1E3A8A'}}>La prévention est plus rentable qu'une crise cyber</h2>
            <p className="section-subtitle">Vulnérabilité des PME et ETI • 43% perdent des clients après une attaque cyber</p>
          </div>

          <div className="impact-cards-two">
            <div className="impact-card-large">
              <div className="impact-header-horizontal">
                <div className="impact-stat">+38%</div>
              </div>
              <div className="impact-label-compact">Hausse attaques cyber</div>
              <p className="impact-detail">Les attaques contre les PME ont explosé de 38% en 2024. Les cybercriminels ciblent les entreprises non protégées.</p>
            </div>

            <div className="impact-card-large">
              <div className="impact-header-horizontal">
                <div className="impact-stat">4,35M€</div>
              </div>
              <div className="impact-label-compact">Coût moyen cyber attaque</div>
              <p className="impact-detail">60% des PME touchées ferment dans les 12 mois. Arrêt de production (21 jours en moyenne), perte de données, rançons.</p>
            </div>
          </div>
        </section>

        <section className="pricing-section" id="pricing">
          <div className="section-header">
            <h2 style={{color: '#1E3A8A'}}>Investissement vs Amende</h2>
            <p className="section-subtitle">Un audit coûte 200x moins cher qu'une sanction</p>
          </div>

          <div className="subsidy-banner">
            <div className="subsidy-content">
              <div className="subsidy-title">
                <strong>Aides de l'État disponibles</strong>
              </div>
              <div className="subsidy-description">
                Réduisez le coût de votre mise en conformité.
              </div>
            </div>
            <button className="btn-simulator" onClick={() => alert('Simulateur en cours de développement')}>
              Simulateur aides État
            </button>
          </div>

          <div className="pricing-cards-desktop">
            <div className="price-card-desktop">
              <div className="price-card-header">
                <h3>Essentielle</h3>
                <div className="price">3 490€</div>
                <div className="price-sub">HT • Paiement unique</div>
              </div>

              <div className="ideal-for">
                <strong>Idéal pour :</strong>
                PME cherchant à évaluer leur positionnement
              </div>

              <ul className="features">
                <li>Audit cyber NIS2 complet</li>
                <li>Résultat immédiat en ligne</li>
                <li>Score de conformité détaillé</li>
                <li>Recommandations prioritaires</li>
                <li>Support par email</li>
              </ul>

              <div className="price-card-footer">
                <button onClick={handleStripeCheckout} className="btn btn-secondary btn-full">
                  Démarrer l'audit
                </button>
              </div>
            </div>

            <div className="price-card-desktop featured">
              <div className="popular-badge">⭐ POPULAIRE</div>
              
              <div className="price-card-header">
                <h3>Sérénité</h3>
                <div className="price">7 990€</div>
                <div className="price-sub">HT • Paiement unique</div>
              </div>

              <div className="ideal-for">
                <strong>Idéal pour :</strong>
                Entreprises visant la conformité NIS2
              </div>

              <ul className="features">
                <li>Audit cyber NIS2 complet</li>
                <li>Rapport validé par experts</li>
                <li>Analyse écarts de conformité</li>
                <li>Plan de remédiation détaillé</li>
                <li>Restitution avec expert (1h visio)</li>
                <li>Accès plateforme 6 mois</li>
                <li>Délai de livraison : 48H</li>
              </ul>

              <div className="price-card-footer">
                <a
                  href={CONTACT_INFO.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-full"
                >
                  Prendre rendez-vous
                </a>
              </div>
            </div>

            <div className="price-card-desktop">
              <div className="price-card-header">
                <h3>Expertise</h3>
                <div className="price">14 900€</div>
                <div className="price-sub">HT • Paiement unique</div>
              </div>

              <div className="ideal-for">
                <strong>Idéal pour :</strong>
                ETI et secteurs critiques
              </div>

              <ul className="features">
                <li><strong>Tout de l'offre Sérénité</strong></li>
                <li className="feature-plus">Entretien préalable expert</li>
                <li className="feature-plus">Roadmap personnalisée</li>
                <li className="feature-plus">Enregistrement ANSSI</li>
                <li className="feature-plus">Dossier aides d'État</li>
                <li className="feature-plus">Accès plateforme 12 mois</li>
                <li className="feature-plus">MAJ évolutions législatives</li>
              </ul>

              <div className="price-card-footer">
                <a
                  href={CONTACT_INFO.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-full"
                >
                  Prendre rendez-vous
                </a>
              </div>
            </div>
          </div>

          <div className="comparison-toggle">
            <button 
              className="btn-compare" 
              onClick={() => setShowComparison(!showComparison)}
            >
              {showComparison ? '▼ Masquer le comparatif' : '▶ Comparer nos offres'}
            </button>
          </div>

          {showComparison && (
            <div className="comparison-accordion">
              <div className="comparison-table-wrapper">
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th className="feature-column">Fonctionnalités</th>
                      <th>Essentielle<br/><span className="price-small">3 490€</span></th>
                      <th className="popular-column">Sérénité<br/><span className="price-small">7 990€</span></th>
                      <th>Expertise<br/><span className="price-small">14 900€</span></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="feature-name">Audit cyber NIS2</td>
                      <td className="check">✓</td>
                      <td className="check">✓</td>
                      <td className="check">✓</td>
                    </tr>
                    <tr>
                      <td className="feature-name">Résultat immédiat</td>
                      <td className="check">✓</td>
                      <td className="cross">—</td>
                      <td className="cross">—</td>
                    </tr>
                    <tr>
                      <td className="feature-name">Rapport validé par experts</td>
                      <td className="cross">—</td>
                      <td className="check">✓</td>
                      <td className="check">✓</td>
                    </tr>
                    <tr>
                      <td className="feature-name">Analyse écarts de conformité</td>
                      <td className="cross">—</td>
                      <td className="check">✓</td>
                      <td className="check">✓</td>
                    </tr>
                    <tr>
                      <td className="feature-name">Plan de remédiation détaillé</td>
                      <td className="cross">—</td>
                      <td className="check">✓</td>
                      <td className="check">✓</td>
                    </tr>
                    <tr>
                      <td className="feature-name">Restitution avec expert</td>
                      <td className="cross">—</td>
                      <td className="check">✓</td>
                      <td className="check">✓</td>
                    </tr>
                    <tr>
                      <td className="feature-name">Entretien préalable expert</td>
                      <td className="cross">—</td>
                      <td className="cross">—</td>
                      <td className="check">✓</td>
                    </tr>
                    <tr>
                      <td className="feature-name">Roadmap personnalisée</td>
                      <td className="cross">—</td>
                      <td className="cross">—</td>
                      <td className="check">✓</td>
                    </tr>
                    <tr>
                      <td className="feature-name">Enregistrement ANSSI</td>
                      <td className="cross">—</td>
                      <td className="cross">—</td>
                      <td className="check">✓</td>
                    </tr>
                    <tr>
                      <td className="feature-name">Dossier aides d'État</td>
                      <td className="cross">—</td>
                      <td className="cross">—</td>
                      <td className="check">✓</td>
                    </tr>
                    <tr>
                      <td className="feature-name">Accès plateforme</td>
                      <td className="cross">—</td>
                      <td className="feature-detail">6 mois</td>
                      <td className="feature-detail">12 mois</td>
                    </tr>
                    <tr>
                      <td className="feature-name">Délai de livraison</td>
                      <td className="feature-detail">Immédiat</td>
                      <td className="feature-detail">48H</td>
                      <td className="feature-detail">1 mois</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </section>

        <section className="complementary-services-v2">
          <div className="section-header">
            <h2 className="services-title" style={{color: '#1E3A8A'}}>Services complémentaires</h2>
            <p className="services-subtitle">Découvrez nos services pour aller plus loin dans la conformité et la sécurité</p>
          </div>

          <div className="services-horizontal">
            <div className="service-card-h">
              <div className="service-header-h">
                <div className="service-icon-h" style={{background: 'linear-gradient(135deg, #1E3A8A 0%, #1E40AF 100%)'}}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                  </svg>
                </div>
                <h3>Modèles de documents NIS2</h3>
              </div>
              <p className="service-description">Templates prêts à l'emploi pour votre mise en conformité, mis à jour avec la réglementation</p>
            </div>

            <div className="service-card-h">
              <div className="service-header-h">
                <div className="service-icon-h" style={{background: 'linear-gradient(135deg, #2563EB 0%, #1E3A8A 100())'}}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <h3>Formations NIS2</h3>
              </div>
              <p className="service-description">Formation obligatoire des dirigeants et sensibilisation des équipes, en distanciel ou sur site</p>
            </div>

            <div className="service-card-h">
              <div className="service-header-h">
                <div className="service-icon-h" style={{background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)'}}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <h3>Montage dossiers Subventions</h3>
              </div>
              <p className="service-description">Identification et constitution des dossiers d'aides d'État pour maximiser vos financements</p>
            </div>

            <div className="service-card-h">
              <div className="service-header-h">
                <div className="service-icon-h" style={{background: 'linear-gradient(135deg, #1E40AF 0%, #1E3A8A 100%)'}}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                </div>
                <h3>Notification Incidents ANSSI</h3>
              </div>
              <p className="service-description">Déclaration des incidents en 24h à l'ANSSI avec conseil gestion de crise et hotline 24/7</p>
            </div>
          </div>

          <div className="services-cta" style={{textAlign: 'center', marginTop: '40px'}}>
            <a
              href="https://calendly.com/nis2conformite/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{
                display: 'inline-block',
                padding: '14px 32px',
                background: '#1E3A8A',
                color: 'white',
                borderRadius: '10px',
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: '15px',
                transition: 'all 0.3s ease'
              }}
            >
              Découvrir nos services complémentaires
            </a>
          </div>
        </section>

        <section className="expertise-section">
          <div className="section-header">
            <h2 style={{color: '#1E3A8A'}}>Préparez-vous à NIS2 avec notre méthode éprouvée</h2>
            <p className="section-subtitle">Notre accompagnement se base sur le référentiel officiel de l'ANSSI.</p>
          </div>

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

          <div className="expertise-grid-horizontal">
            <div className="expertise-card-horizontal">
              <div className="expertise-header-horizontal">
                <div className="expertise-number-large">15+</div>
                <div className="expertise-text">
                  <div className="expertise-title-bold">Années d'expérience terrain</div>
                </div>
              </div>
              <p className="expertise-description">Depuis 2009, nous accompagnons les dirigeants dans leur démarche de sécurisation et de conformité Cyber.</p>
            </div>

            <div className="expertise-card-horizontal">
              <div className="expertise-header-horizontal">
                <div className="certification-icon-large">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div className="expertise-text">
                  <div className="expertise-title-bold">Une équipe d'experts en cyber défense</div>
                </div>
              </div>
              <p className="expertise-description">Consultants accrédités aux normes internationales ISO 27001. Méthodologie validée et reconnue par l'ANSSI.</p>
            </div>
          </div>

          <div className="certification-logos">
            <div className="certification-logos-container">
              <img src="/logo_anssi.png" alt="ANSSI - Agence Nationale de la Sécurité des Systèmes d'Information" className="cert-logo" />
              <img src="/Logo-cybermalveillance.PNG" alt="Cybermalveillance.gouv.fr" className="cert-logo" />
              <img src="/logo_expertcyber.jpg" alt="Expert Cyber - Label Sécurité Numérique" className="cert-logo" />
              <img src="/iso_27001_02-1024x704.png" alt="ISO 27001 Certified - Information Security Management" className="cert-logo" />
            </div>
          </div>
        </section>

        <section className="social-proof">
          <div className="section-header">
            <h2 style={{color: '#1E3A8A'}}>Dirigeants conformes, entreprises gagnantes</h2>
            <p className="section-subtitle">Ils ont fait de NIS2 un levier de performance</p>
          </div>

          <div className="testimonials-grid">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="testimonial">
                <div className="testimonial-text">"{testimonial.text}"</div>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.author.avatar}</div>
                  <div className="author-info">
                    <div className="author-name">{testimonial.author.name}</div>
                    <div className="author-role">{testimonial.author.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="carousel-hint">← Faites glisser pour voir plus →</div>
        </section>

        <section className="video-section" id="video-section">
          <div className="video-header">
            <div className="video-badge">Comprendre NIS2 en vidéo</div>
          </div>
          <div className="video-container">
            <iframe 
              src={EXTERNAL_LINKS.videoYoutube}
              title="Directive NIS2 expliquée" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen>
            </iframe>
          </div>
        </section>

        <section className="faq">
          <div className="section-header">
            <h2 style={{color: '#1E3A8A'}}>Les questions que se posent les dirigeants</h2>
          </div>
          
          {FAQ_ITEMS.map((item) => (
            <div key={item.id} className="faq-item">
              <div className="faq-question">
                {item.icon} {item.question}
                <span>↓</span>
              </div>
              <div className="faq-answer">{item.answer}</div>
            </div>
          ))}
        </section>

        <section className="final-cta" style={{background: '#1E3A8A'}}>
          <h2>Sécurisez votre avenir dès aujourd'hui</h2>
          <p>Échange confidentiel avec un consultant certifié ISO 27001<br /><strong>Audit indépendant pour mesurer votre conformité</strong></p>
          <a 
            href={CONTACT_INFO.calendly} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn"
            style={{
              background: 'white',
              color: '#1E3A8A',
              border: 'none',
              fontWeight: '700',
              fontSize: '17px',
              padding: '18px 48px',
              borderRadius: '14px',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 16px rgba(255, 255, 255, 0.2)'
            }}
          >
            Réserver un échange gratuit
          </a>
        </section>

        <footer className="page-footer">
          <div className="footer-container">
            <div className="footer-logo-section">
              <img src="/logo.png" alt="NIS2 Conformité" className="footer-logo" />
              <p className="footer-tagline">
                La plateforme d'audit et de conformité cyber<br />
                pensée pour les PME et ETI européennes
              </p>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h4>Navigation</h4>
                <ul>
                  <li><a href="/">Accueil</a></li>
                  <li><a href="/comprendre-nis2">Comprendre NIS2</a></li>
                  <li><a href="/qui-sommes-nous">Qui sommes-nous ?</a></li>
                </ul>
              </div>

              <div className="footer-column">
                <h4>Nos services</h4>
                <ul>
                  <li><a href="/offres-complementaires">Offres complémentaires</a></li>
                  <li><a href="/formations">Formations</a></li>
                  <li><a href="/#pricing">Nos audits</a></li>
                </ul>
              </div>

              <div className="footer-column">
                <h4>Contact</h4>
                <ul>
                  <li>
                    <a href="https://calendly.com/nis2conformite/30min" target="_blank" rel="noopener noreferrer">
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

          <div className="footer-bottom">
            <p>© 2025 NIS2 Conformité • Tous droits réservés</p>
            <div className="footer-certifications">
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
