import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useQuiz } from '../hooks/useQuiz';
import { useLeadPopup } from '../hooks/useLeadPopup';
import { QuizModal } from '../components/QuizModal';
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
        <span>⚠️ NIS2 Conformité obligatoire • Premières sanctions en 2027 • Agissez maintenant</span>
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
            <a href={CONTACT_INFO.calendly} target="_blank" rel="noopener noreferrer" className="btn-sticky primary">
              📅 RDV expert gratuit
            </a>
            <a href="#pricing" className="btn-sticky secondary">
              Nos offres
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
            Anticipez les risques financiers<br />
            liés à NIS2
          </h1>
          
          <p className="hero-subtitle">
            Protégez votre activité, votre réputation et votre résilience. 
            Transformez NIS2 en levier de performance avec un accompagnement 
            d'experts cyber certifiés ISO 27001.
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
              <div className="stat-value-minimal">+40%</div>
              <div className="stat-label-minimal">de cyber attaques<br />en 2024</div>
            </div>
          </div>

          <button onClick={quiz.openQuiz} className="hero-cta-primary">
            🎯 Suis-je concerné par NIS2 ?
          </button>

          <a href="#video-section" className="hero-cta-link">
            Comprendre NIS2 en vidéo →
          </a>
        </section>

        <div className="risk-opportunity-wrapper">
          <section className="warning-card">
            <h2>⚠️ Les enjeux de la<br />non-conformité</h2>
            <ul className="warning-list">
              <li><strong>Sanctions financières lourdes</strong> — Jusqu'à 10M€ ou 2% du chiffre d'affaires mondial</li>
              <li><strong>Responsabilité pénale du dirigeant</strong> — En cas de manquement aux obligations NIS2</li>
              <li><strong>Exclusion des marchés</strong> — Impossibilité de répondre aux appels d'offres publics et privés</li>
              <li><strong>Perte de confiance B2B</strong> — Vos clients exigent désormais la conformité</li>
              <li><strong>Contrôles réglementaires</strong> — Audits de votre entreprise sur site sans préavis de l'ANSSI</li>
            </ul>
          </section>

          <section className="value-prop">
            <h2>🏆 Transformez la contrainte en<br />levier stratégique</h2>
            <ul className="value-list">
              <li><strong>Remportez les appels d'offres</strong> — La conformité devient un critère obligatoire de sélection</li>
              <li><strong>Différenciez-vous</strong> — Positionnez-vous comme le partenaire de confiance de votre secteur</li>
              <li><strong>Rassurez vos clients</strong> — Montrez que vous protégez les données de vos clients</li>
              <li><strong>Fidélisez vos partenaires</strong> — Consolidez votre réputation d'acteur stable et responsable</li>
              <li><strong>Valorisez votre entreprise</strong> — Une organisation conforme vaut plus en cas de cession</li>
            </ul>
          </section>
        </div>

        <div className="cta-inline">
          <p>🚀 Transformez la contrainte en opportunité business</p>
          <a href="#pricing" className="btn">Découvrir nos offres</a>
        </div>

        <section className="impact-section">
          <div className="section-header">
            <div className="section-badge">RISQUES CHIFFRÉS</div>
            <h2>La prévention est plus rentable qu'une crise cyber</h2>
            <p className="section-subtitle">Vulnérabilité des PME et ETI • 43% perdent des clients après une attaque cyber</p>
          </div>

          <div className="impact-cards-two">
            <div className="impact-card-large">
              <div className="impact-header-horizontal">
                <div className="impact-icon">📈</div>
                <div className="impact-stat">+38%</div>
              </div>
              <div className="impact-label-compact">Hausse attaques cyber</div>
              <p className="impact-detail">Les attaques contre les PME ont explosé de 38% en 2024. Les cybercriminels ciblent les entreprises non protégées.</p>
            </div>

            <div className="impact-card-large">
              <div className="impact-header-horizontal">
                <div className="impact-icon">💸</div>
                <div className="impact-stat">4,35M€</div>
              </div>
              <div className="impact-label-compact">Coût moyen cyber attaque</div>
              <p className="impact-detail">60% des PME touchées ferment dans les 12 mois. Arrêt de production (21 jours en moyenne), perte de données, rançons.</p>
            </div>
          </div>
        </section>

        <section className="pricing-section" id="pricing">
          <div className="section-header">
            <div className="section-badge">TARIFS CLAIRS</div>
            <h2>Investissement vs Amende</h2>
            <p className="section-subtitle">Un audit coûte 200x moins cher qu'une sanction</p>
          </div>

          <div className="subsidy-banner">
            <div className="subsidy-content">
              <div className="subsidy-title">
                💡 <strong>Aides de l'État disponibles</strong> 💡
              </div>
              <div className="subsidy-description">
                Réduisez le coût de votre mise en conformité.
              </div>
            </div>
            <button className="btn-simulator" onClick={() => alert('Simulateur en cours de développement')}>
              📊 Simulateur aides État
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
                  📅 Prendre rendez-vous
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
                  📅 Prendre rendez-vous
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
                      <th className="popular-column">Sérénité ⭐<br/><span className="price-small">7 990€</span></th>
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
            <h2 className="services-title">Services complémentaires</h2>
            <p className="services-subtitle">Découvrez nos services pour aller plus loin dans la conformité et la sécurité</p>
          </div>

          <div className="services-horizontal">
            <div className="service-card-h">
              <div className="service-header-h">
                <div className="service-icon-h" style={{background: 'linear-gradient(135deg, #9C27B0 0%, #7B1FA2 100%)'}}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <div className="service-title-h">
                  <h3>Modèles de documents</h3>
                  <p className="service-price">99€/mois</p>
                </div>
              </div>
              <ul className="service-list-h">
                <li>Modèles pour mise en conformité</li>
                <li>Mis à jour avec la réglementation</li>
                <li>Accès illimité</li>
              </ul>
            </div>

            <div className="service-card-h">
              <div className="service-header-h">
                <div className="service-icon-h" style={{background: 'linear-gradient(135deg, #3F51B5 0%, #303F9F 100%)'}}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <div className="service-title-h">
                  <h3>Formation</h3>
                  <p className="service-price">149€/pers</p>
                </div>
              </div>
              <ul className="service-list-h">
                <li>Formation obligatoire des dirigeants</li>
                <li>Formation en distanciel</li>
                <li>Formation présentiel sur site possible</li>
              </ul>
            </div>

            <div className="service-card-h">
              <div className="service-header-h">
                <div className="service-icon-h" style={{background: 'linear-gradient(135deg, #00875A 0%, #006644 100%)'}}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <div className="service-title-h">
                  <h3>Montage dossiers<br />Subventions</h3>
                  <p className="service-price">299€</p>
                </div>
              </div>
              <ul className="service-list-h">
                <li>Identification des aides</li>
                <li>Constitution des dossiers</li>
                <li>Maximisation des financements</li>
              </ul>
            </div>

            <div className="service-card-h">
              <div className="service-header-h">
                <div className="service-icon-h" style={{background: 'linear-gradient(135deg, #FF5630 0%, #d63b1f 100%)'}}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                </div>
                <div className="service-title-h">
                  <h3>Notification<br />Incidents</h3>
                  <p className="service-price">99€/mois</p>
                </div>
              </div>
              <ul className="service-list-h">
                <li>Déclaration incident en 24h à l'ANSSI</li>
                <li>Conseil gestion de crise</li>
                <li>Hotline téléphonique inclus</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="expertise-section">
          <div className="section-header">
            <div className="section-badge success">NOTRE APPROCHE</div>
            <h2>Préparez-vous à NIS2 avec notre méthode éprouvée</h2>
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
        </section>

        <div className="cta-inline">
          <p>🛡️ Renforcez la sécurité informatique et la résilience de votre entreprise</p>
          <a href={CONTACT_INFO.calendly} target="_blank" rel="noopener noreferrer" className="btn">
            📅 Echange gratuit avec un expert
          </a>
        </div>

        <section className="social-proof">
          <div className="section-header">
            <div className="section-badge">TÉMOIGNAGES</div>
            <h2>Dirigeants conformes, entreprises gagnantes</h2>
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
        </section>

        <section className="video-section" id="video-section">
          <div className="video-header">
            <div className="video-badge">🎥 Comprendre NIS2 en vidéo</div>
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

        <div className="cta-inline">
          <p>💬 Échangez avec un de nos experts • Obtenez des réponses claires</p>
          <a href={CONTACT_INFO.calendly} target="_blank" rel="noopener noreferrer" className="btn">
            📅 Prendre rendez-vous
          </a>
        </div>

        <section className="faq">
          <div className="section-header">
            <div className="section-badge">FAQ</div>
            <h2>Les questions que se posent les dirigeants</h2>
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

        <section className="final-cta">
          <h2>Sécurisez votre avenir dès aujourd'hui</h2>
          <p>Échange confidentiel avec un consultant certifié ISO 27001<br /><strong>Audit indépendant pour mesurer votre conformité</strong></p>
          <a href={CONTACT_INFO.calendly} target="_blank" rel="noopener noreferrer" className="btn">
            📅 Réserver un échange gratuit
          </a>
        </section>

        <footer className="footer">
          <p><strong>{CONTACT_INFO.company}</strong> • Mise en conformité NIS2 • Basé sur le referenciel ANSSI</p>
          <p style={{marginTop: '10px'}}>{CONTACT_INFO.website}</p>
          <p style={{marginTop: '8px', opacity: '0.6'}}>Mentions légales • CGV • Politique de confidentialité</p>
        </footer>
      </div>

      <QuizModal quiz={quiz} />

      <style jsx>{`
        /* ═══════════════════════════════════════════════════════════
           ✨ NOUVELLE SECTION HERO - MINIMALISTE PREMIUM (PROP 3)
           ═══════════════════════════════════════════════════════════ */

        .hero-minimal {
          text-align: center;
          padding: 0 20px 100px;
          max-width: 1200px;
          margin: 0 auto;
          background: linear-gradient(to bottom, #FFFFFF 0%, #FAFAFA 100%);
        }

        .hero-logo {
          max-width: 360px;
          height: auto;
          margin: 0 auto 2px;
          display: block;
        }

        .hero-baseline {
          font-size: 16px;
          font-weight: 600;
          color: #64748B;
          line-height: 1.5;
          max-width: 680px;
          margin: 0 auto 12px;
        }

        .hero-separator {
          width: 120px;
          height: 3px;
          background: linear-gradient(90deg, #FF5630 0%, #FFB199 100%);
          margin: 12px auto;
          border-radius: 2px;
        }

        .hero-title {
          font-size: 52px;
          font-weight: 900;
          color: #FF5630;
          line-height: 1.2;
          max-width: 900px;
          margin: 0 auto 12px;
          letter-spacing: -0.02em;
        }

        .hero-subtitle {
          font-size: 18px;
          font-weight: 500;
          color: #334155;
          line-height: 1.75;
          max-width: 820px;
          margin: 0 auto 32px;
        }

        .hero-stats-minimal {
          display: flex;
          justify-content: center;
          gap: 28px;
          margin-bottom: 36px;
          flex-wrap: wrap;
        }

        .stat-minimal {
          text-align: center;
          min-width: 140px;
        }

        .stat-value-minimal {
          font-size: 48px;
          font-weight: 900;
          color: #0052CC;
          line-height: 1;
          margin-bottom: 8px;
        }

        .stat-label-minimal {
          font-size: 13px;
          font-weight: 600;
          color: #64748B;
          line-height: 1.4;
        }

        .hero-cta-primary {
          display: inline-block;
          background: #FF5630;
          color: white;
          padding: 18px 48px;
          border-radius: 14px;
          font-size: 17px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          box-shadow: 0 6px 20px rgba(255, 86, 48, 0.25);
          transition: all 0.3s ease;
          max-width: 500px;
          width: 100%;
          margin-bottom: 20px;
        }

        .hero-cta-primary:hover {
          background: #E64825;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(255, 86, 48, 0.35);
        }

        .hero-cta-link {
          display: block;
          font-size: 16px;
          font-weight: 600;
          color: #0052CC;
          text-decoration: none;
          transition: all 0.3s ease;
          margin-top: 8px;
        }

        .hero-cta-link:hover {
          text-decoration: underline;
          color: #003D99;
        }

        /* RESPONSIVE HERO */
        @media (max-width: 768px) {
          .hero-minimal {
            padding: 0 20px 80px;
          }

          .hero-logo {
            max-width: 240px;
            margin-bottom: 12px;
          }

          .hero-baseline {
            font-size: 14px;
            margin-bottom: 20px;
          }

          .hero-title {
            font-size: 34px;
            margin-bottom: 14px;
            line-height: 1.15;
          }

          .hero-subtitle {
            font-size: 15px;
            margin-bottom: 32px;
            line-height: 1.6;
          }

          .hero-stats-minimal {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px 16px;
            margin-bottom: 32px;
            max-width: 360px;
            margin-left: auto;
            margin-right: auto;
          }

          .stat-minimal {
            min-width: unset;
          }

          .stat-value-minimal {
            font-size: 36px;
          }

          .stat-label-minimal {
            font-size: 12px;
          }

          .hero-cta-primary {
            font-size: 15px;
            padding: 15px 32px;
            margin-bottom: 20px;
          }

          .hero-cta-link {
            font-size: 14px;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .hero-stats-minimal {
            gap: 32px;
          }
          
          .hero-title {
            font-size: 44px;
          }
        }

        /* ═══════════════════════════════════════════════════════════
           🔄 RESTE DU DESIGN INCHANGÉ
           ═══════════════════════════════════════════════════════════ */

        .sticky-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: white;
          box-shadow: 0 2px 12px rgba(9, 30, 66, 0.08);
          z-index: 1000;
          transform: translateY(-100%);
          transition: transform 0.3s ease;
        }

        .sticky-header.visible {
          transform: translateY(0);
        }

        .sticky-header-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 4px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .sticky-logo-img {
          display: flex;
          align-items: center;
        }

        .sticky-logo-large {
          height: 64px;
          width: auto;
        }

        .sticky-cta-group {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .btn-sticky {
          padding: 10px 20px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .btn-sticky.primary {
          background: #FF5630;
          color: white;
          border: none;
        }

        .btn-sticky.primary:hover {
          background: #E64825;
          transform: translateY(-2px);
        }

        .btn-sticky.secondary {
          background: white;
          color: #0052CC;
          border: 2px solid #0052CC;
        }

        .btn-sticky.secondary:hover {
          background: #0052CC;
          color: white;
        }

        @media (max-width: 640px) {
          .sticky-header-content {
            padding: 4px 16px;
          }

          .sticky-logo-large {
            height: 48px;
          }

          .btn-sticky {
            padding: 8px 16px;
            font-size: 13px;
          }

          .btn-sticky.secondary {
            display: none;
          }
        }

        .risk-opportunity-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          margin: 48px 0;
        }

        .warning-card,
        .value-prop {
          background: white;
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 4px 20px rgba(9, 30, 66, 0.08);
        }

        .warning-card h2,
        .value-prop h2 {
          font-size: 22px;
          font-weight: 800;
          margin-bottom: 24px;
          line-height: 1.3;
        }

        .warning-list,
        .value-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .warning-list li,
        .value-list li {
          font-size: 14px;
          line-height: 1.6;
          color: #505F79;
        }

        .warning-list li strong,
        .value-list li strong {
          color: #091E42;
          display: inline;
        }

        .impact-cards-two {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
          margin-top: 40px;
          max-width: 1000px;
          margin-left: auto;
          margin-right: auto;
        }

        .impact-card-large {
          background: white;
          border: 2px solid #EFF1F5;
          border-radius: 20px;
          padding: 24px 28px;
          text-align: left;
          transition: all 0.3s ease;
          box-shadow: 0 4px 16px rgba(9, 30, 66, 0.08);
        }

        .impact-card-large:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 82, 204, 0.12);
          border-color: #0052CC;
        }

        .impact-header-horizontal {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 8px;
        }

        .impact-icon {
          font-size: 40px;
          flex-shrink: 0;
        }

        .impact-stat {
          font-size: 36px;
          font-weight: 800;
          color: #FF5630;
          line-height: 1;
        }

        .impact-label-compact {
          font-size: 20px;
          font-weight: 700;
          color: #091E42;
          margin-bottom: 8px;
        }

        .impact-detail {
          font-size: 15px;
          color: #505F79;
          line-height: 1.6;
        }

        .expertise-grid-horizontal {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
          margin-top: 48px;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
          align-items: start;
        }

        .expertise-card-horizontal {
          background: white;
          border: 3px solid #0052CC;
          border-radius: 20px;
          padding: 36px 32px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 16px rgba(0, 82, 204, 0.12);
          display: flex;
          flex-direction: column;
        }

        .expertise-card-horizontal:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 82, 204, 0.18);
        }

        .expertise-header-horizontal {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 16px;
          min-height: 40px;
        }

        .expertise-number-large {
          font-size: 28px;
          font-weight: 800;
          color: #0052CC;
          line-height: 1;
          flex-shrink: 0;
        }

        .certification-icon-large {
          width: 40px;
          height: 40px;
          background: #0052CC;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        .certification-icon-large svg {
          width: 24px;
          height: 24px;
        }

        .expertise-text {
          flex: 1;
          display: flex;
          align-items: center;
        }

        .expertise-title-bold {
          font-size: 20px;
          font-weight: 700;
          color: #091E42;
          line-height: 1.3;
        }

        .expertise-description {
          font-size: 15px;
          color: #505F79;
          line-height: 1.6;
          margin: 0;
        }

        .price-card-desktop .features li.feature-plus::before {
          content: '+';
          color: #0052CC;
          font-size: 20px;
        }

        .sticky-logo-img {
          display: flex;
          align-items: center;
        }

        .subsidy-banner {
          max-width: 1200px;
          margin: 0 auto 40px auto;
          padding: 24px 32px;
          background: linear-gradient(90deg, rgba(76, 175, 80, 0.08) 0%, rgba(76, 175, 80, 0.12) 100%);
          border-left: 4px solid #4caf50;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .subsidy-content {
          flex: 1;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 12px;
        }

        .subsidy-title {
          color: #1b5e20;
          font-size: 17px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 8px;
          white-space: nowrap;
        }

        .subsidy-title strong {
          font-weight: 700;
        }

        .subsidy-description {
          color: #2e7d32;
          font-size: 15px;
          line-height: 1.5;
        }

        .btn-simulator {
          background: white;
          color: #1b5e20;
          border: 2px solid #4caf50;
          padding: 12px 24px;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
          box-shadow: 0 2px 8px rgba(76, 175, 80, 0.15);
          flex-shrink: 0;
        }

        .btn-simulator:hover {
          background: #4caf50;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(76, 175, 80, 0.25);
        }

        .pricing-cards-desktop {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 32px;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }

        .price-card-desktop {
          background: white;
          border: 2px solid #DFE1E6;
          border-radius: 20px;
          padding: 0;
          position: relative;
          transition: all 0.4s ease;
          display: flex;
          flex-direction: column;
          box-shadow: 0 2px 12px rgba(9, 30, 66, 0.08);
        }

        .price-card-desktop:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(0, 82, 204, 0.15);
        }

        .price-card-desktop.featured {
          border: 3px solid #0052CC;
          box-shadow: 0 8px 32px rgba(0, 82, 204, 0.2);
        }

        .price-card-header {
          padding: 32px 24px 24px;
          text-align: center;
          border-bottom: 2px solid #F7F8FC;
          min-height: 160px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .price-card-desktop h3 {
          font-size: 24px;
          font-weight: 800;
          color: #091E42;
          margin-bottom: 16px;
        }

        .price-card-desktop .price {
          font-size: 48px;
          font-weight: 800;
          color: #0052CC;
          line-height: 1;
          margin-bottom: 8px;
        }

        .price-card-desktop .price-sub {
          font-size: 14px;
          color: #8993A4;
          font-weight: 600;
        }

        .price-card-desktop .ideal-for {
          padding: 16px 24px;
          background: #F7F8FC;
          font-size: 13px;
          color: #505F79;
          border-bottom: 1px solid #EFF1F5;
        }

        .price-card-desktop .features {
          padding: 24px;
          flex: 1;
          list-style: none;
        }

        .price-card-desktop .features li {
          padding: 10px 0;
          padding-left: 28px;
          position: relative;
          font-size: 14px;
          color: #505F79;
          line-height: 1.5;
          border-bottom: 1px solid #F7F8FC;
        }

        .price-card-desktop .features li:last-child {
          border-bottom: none;
        }

        .price-card-desktop .features li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #00875A;
          font-weight: 800;
          font-size: 18px;
        }

        .price-card-desktop .features li.feature-plus {
          color: #505F79;
          font-weight: 500;
        }

        .price-card-footer {
          padding: 24px;
          border-top: 2px solid #F7F8FC;
        }

        .btn-full {
          width: 100%;
          justify-content: center;
        }

        .comparison-toggle {
          text-align: center;
          margin-top: 32px;
        }

        .btn-compare {
          background: white;
          color: #0052CC;
          border: 2px solid #0052CC;
          padding: 14px 32px;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .btn-compare:hover {
          background: #0052CC;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 82, 204, 0.3);
        }

        .comparison-accordion {
          margin-top: 24px;
          animation: slideDown 0.4s ease;
          overflow: hidden;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 2000px;
          }
        }

        .comparison-table-wrapper {
          overflow-x: auto;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(9, 30, 66, 0.08);
        }

        .comparison-table {
          width: 100%;
          border-collapse: collapse;
          background: white;
          min-width: 700px;
        }

        .comparison-table thead {
          background: linear-gradient(135deg, #0052CC 0%, #003D99 100%);
          color: white;
        }

        .comparison-table th {
          padding: 20px 16px;
          text-align: center;
          font-weight: 700;
          font-size: 16px;
        }

        .comparison-table th:first-child {
          text-align: left;
          width: 35%;
        }

        .comparison-table th.popular-column {
          background: linear-gradient(135deg, #FFAB00 0%, #FF9500 100%);
        }

        .price-small {
          font-size: 13px;
          font-weight: 600;
          opacity: 0.9;
          display: block;
          margin-top: 4px;
        }

        .comparison-table tbody tr {
          border-bottom: 1px solid #EFF1F5;
        }

        .comparison-table tbody tr:hover {
          background: #F7F8FC;
        }

        .comparison-table td {
          padding: 16px;
          text-align: center;
        }

        .feature-name {
          text-align: left !important;
          font-weight: 600;
          color: #091E42;
          font-size: 14px;
        }

        .check {
          color: #00875A;
          font-size: 20px;
          font-weight: 700;
        }

        .cross {
          color: #8993A4;
          font-size: 16px;
        }

        .feature-detail {
          font-size: 13px;
          color: #505F79;
          font-weight: 600;
        }

        .complementary-services-v2 {
          margin: 64px 0;
        }

        .services-title {
          font-size: 32px;
          font-weight: 800;
          color: #1e3a8a;
          text-align: center;
          margin-bottom: 16px;
        }

        .services-subtitle {
          font-size: 16px;
          color: #64748b;
          text-align: center;
          margin-bottom: 48px;
        }

        .services-horizontal {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .service-card-h {
          background: white;
          border: 2px solid #EFF1F5;
          border-radius: 16px;
          padding: 24px 20px;
          transition: all 0.3s ease;
          box-shadow: 0 2px 12px rgba(9, 30, 66, 0.06);
          display: flex;
          flex-direction: column;
        }

        .service-card-h:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 28px rgba(0, 82, 204, 0.12);
          border-color: #0052CC;
        }

        .service-header-h {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          padding-bottom: 20px;
          border-bottom: 2px solid #F7F8FC;
          text-align: center;
          min-height: 160px;
        }

        .service-icon-h {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
        }

        .service-title-h {
          flex: 1;
        }

        .service-title-h h3 {
          font-size: 17px;
          font-weight: 700;
          color: #091E42;
          margin-bottom: 6px;
          line-height: 1.3;
          min-height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .service-price {
          font-size: 20px;
          font-weight: 800;
          color: #0052CC;
          margin: 0;
        }

        .service-list-h {
          list-style: none;
          padding: 0;
          margin: 0;
          flex: 1;
        }

        .service-list-h li {
          padding: 10px 0;
          padding-left: 24px;
          position: relative;
          font-size: 13px;
          color: #505F79;
          line-height: 1.5;
          border-bottom: 1px solid #F7F8FC;
        }

        .service-list-h li:last-child {
          border-bottom: none;
        }

        .service-list-h li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: #0052CC;
          font-weight: 700;
          font-size: 16px;
        }

        /* Responsive services */
        @media (max-width: 1100px) {
          .services-horizontal {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
        }

        @media (max-width: 640px) {
          .services-horizontal {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .service-card-h {
            padding: 24px;
          }

          .service-title-h h3 {
            font-size: 18px;
          }

          .service-price {
            font-size: 22px;
          }
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 40px;
        }

        .testimonial {
          background: white;
          border: 2px solid #EFF1F5;
          border-radius: 20px;
          padding: 32px 28px;
          box-shadow: 0 4px 16px rgba(9, 30, 66, 0.08);
          transition: all 0.3s ease;
        }

        .testimonial:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 82, 204, 0.12);
          border-color: #0052CC;
        }

        .testimonial-text {
          font-size: 15px;
          line-height: 1.7;
          color: #505F79;
          font-style: italic;
          margin-bottom: 24px;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 20px;
          border-top: 2px solid #F7F8FC;
        }

        .author-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0052CC 0%, #003D99 100%);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 18px;
          flex-shrink: 0;
        }

        .author-name {
          font-size: 15px;
          font-weight: 700;
          color: #091E42;
        }

        .author-role {
          font-size: 13px;
          color: #505F79;
        }

        /* Carousel mobile pour testimonials */
        @media (max-width: 1024px) {
          .testimonials-grid {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            gap: 16px;
            padding-bottom: 20px;
            margin-top: 32px;
            -webkit-overflow-scrolling: touch;
          }

          .testimonial {
            min-width: 85%;
            scroll-snap-align: start;
            flex-shrink: 0;
          }

          .testimonials-grid::-webkit-scrollbar {
            height: 8px;
          }

          .testimonials-grid::-webkit-scrollbar-track {
            background: #F7F8FC;
            border-radius: 4px;
          }

          .testimonials-grid::-webkit-scrollbar-thumb {
            background: #0052CC;
            border-radius: 4px;
          }
        }

        @media (max-width: 1024px) {
          .risk-opportunity-wrapper,
          .pricing-cards-desktop,
          .impact-cards-two,
          .expertise-grid-horizontal {
            grid-template-columns: 1fr;
          }

          .subsidy-banner {
            flex-direction: column;
            align-items: center;
          }

          .subsidy-content {
            width: 100%;
            text-align: center;
          }

          .subsidy-title {
            justify-content: center;
          }

          .btn-simulator {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
