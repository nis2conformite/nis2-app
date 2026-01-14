import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useQuiz } from '../hooks/useQuiz';
import { useLeadPopup } from '../hooks/useLeadPopup';
import { QuizModal } from '../components/QuizModal';
import MenuBurger from '../components/MenuBurger';
import PageLayout from '../components/PageLayout';
import {
  PRICING_OFFERS,
  CONTACT_INFO,
} from '../utils/constants';

export default function Home() {
  const [videoIsPlaying, setVideoIsPlaying] = useState(false);
  const quiz = useQuiz();
  const popup = useLeadPopup({
    quizIsOpen: quiz.isOpen,
    videoIsPlaying
  });

  async function handleStripeCheckout(offerId) {
    try {
      const response = await fetch('/api/stripe/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ offerId }),
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

  return (
    <>
      <Head>
        <title>NIS2 Conformité | Audit Cyber en 48H pour PME et ETI</title>
        <meta name="description" content="Mesurez vos risques NIS2 et priorisez vos actions. Audit structuré selon référentiel ANSSI. Rapport détaillé. Recommandations priorisées." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLayout>
        {/* ═══════════════════════════════════════════════════════════
            HERO SECTION - Style Artisan.co
            ═══════════════════════════════════════════════════════════ */}
        <section className="hero-artisan">
          <div className="hero-container">
            {/* Badge */}
            <div className="hero-badge">
              NIS2 Conformité obligatoire • Premières sanctions en 2027 • Agissez maintenant
            </div>

            {/* Titre massif */}
            <h1 className="hero-title">
              Mesurez vos risques <span className="gradient-text">NIS2</span><br />
              et priorisez vos actions
            </h1>

            {/* Sous-titre */}
            <p className="hero-subtitle">
              Audit structuré • Selon référentiel ANSSI • Rapport détaillé • Recommandations priorisées
            </p>

            {/* Stats en violet */}
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="stat-value violet">92%</div>
                <div className="stat-label">PME et ETI<br />non prêtes</div>
              </div>
              <div className="hero-stat">
                <div className="stat-value violet">10M€</div>
                <div className="stat-label">amende max<br />ou 2% du CA</div>
              </div>
              <div className="hero-stat">
                <div className="stat-value violet">70%</div>
                <div className="stat-label">d'aides de l'état<br />possibles</div>
              </div>
              <div className="hero-stat">
                <div className="stat-value violet">65</div>
                <div className="stat-label">questions<br />d'audit</div>
              </div>
            </div>

            {/* CTA principal */}
            <div className="hero-cta-group">
              <a href="#pricing" className="btn-hero-primary">
                Échange gratuit - Suis-je éligible ?
              </a>
            </div>

            {/* Trust badges */}
            <div className="hero-trust">
              <span>Certifié ISO 27001</span>
              <span>•</span>
              <span>Méthodologie ANSSI</span>
              <span>•</span>
              <span>Sans engagement</span>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION IMPACT - 2 cartes blanches
            ═══════════════════════════════════════════════════════════ */}
        <section className="impact-section">
          <div className="section-container">
            <h2 className="section-title-artisan">
              La prévention est plus rentable qu'une crise cyber
            </h2>
            <p className="section-subtitle-artisan">
              Vulnérabilité des PME et ETI • 43% perdent des clients après une attaque cyber
            </p>

            <div className="impact-grid">
              {/* Carte 1 */}
              <div className="impact-card-artisan">
                <div className="impact-number violet">+38%</div>
                <h3 className="impact-title">Hausse attaques cyber</h3>
                <p className="impact-text">
                  Les attaques contre les PME ont explosé de 38% en 2024. Les cybercriminels ciblent les entreprises non protégées.
                </p>
              </div>

              {/* Carte 2 */}
              <div className="impact-card-artisan">
                <div className="impact-number violet">4,35M€</div>
                <h3 className="impact-title">Coût moyen cyber attaque</h3>
                <p className="impact-text">
                  60% des PME touchées ferment dans les 12 mois. Arrêt de production (21 jours en moyenne), perte de données, rançons.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION PRICING - Style Artisan "Meet Your Artisans"
            ═══════════════════════════════════════════════════════════ */}
        <section className="pricing-artisan" id="pricing">
          <div className="section-container">
            <h2 className="section-title-artisan">Investissement vs Amende</h2>
            <p className="section-subtitle-artisan">
              Un audit coûte 200x moins cher qu'une sanction
            </p>

            <div className="pricing-grid-artisan">
              {PRICING_OFFERS.map((offer, index) => (
                <div
                  key={offer.id}
                  className={`pricing-card-artisan ${index === 1 ? 'featured' : ''}`}
                >
                  {index === 1 && <div className="featured-badge">Le plus populaire</div>}

                  <div className="pricing-header-artisan">
                    <h3 className="pricing-name">{offer.name}</h3>
                    <div className="pricing-price">
                      <span className="price-amount">{(offer.price / 100).toLocaleString('fr-FR')}€</span>
                      <span className="price-period">HT</span>
                    </div>
                    <p className="pricing-tagline">{offer.tagline}</p>
                  </div>

                  <ul className="pricing-features-artisan">
                    {offer.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>

                  {offer.cta.type === 'stripe' ? (
                    <button
                      onClick={() => handleStripeCheckout(offer.id)}
                      className={`btn-pricing-artisan ${index === 1 ? 'primary' : ''}`}
                    >
                      {offer.cta.text}
                    </button>
                  ) : (
                    <a
                      href={offer.cta.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn-pricing-artisan ${index === 1 ? 'primary' : ''}`}
                    >
                      {offer.cta.text}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION FEATURES - Comment ça marche avec mockups
            ═══════════════════════════════════════════════════════════ */}
        <section className="features-artisan">
          <div className="section-container">
            <h2 className="section-title-artisan">Comment ça marche</h2>
            <p className="section-subtitle-artisan">
              Un processus simple et structuré pour votre conformité NIS2
            </p>

            {/* Feature 1 - Audit en ligne */}
            <div className="feature-row-artisan">
              <div className="feature-content">
                <div className="feature-number">01</div>
                <h3 className="feature-title">Audit en ligne structuré</h3>
                <p className="feature-text">
                  Répondez à 65 questions basées sur le référentiel ANSSI. Interface intuitive et guidée.
                  Sauvegarde automatique. Complétez à votre rythme.
                </p>
                <ul className="feature-list">
                  <li>10 catégories de sécurité</li>
                  <li>Questions contextualisées pour PME/ETI</li>
                  <li>Aide et explications intégrées</li>
                </ul>
              </div>
              <div className="feature-mockup">
                <div className="mockup-placeholder">
                  <div className="mockup-label">APERÇU PLATEFORME D'AUDIT</div>
                  <div className="mockup-content">
                    <div className="mockup-question">
                      <div className="q-header">Question 12/65</div>
                      <div className="q-text">Avez-vous mis en place une politique de gestion des mots de passe ?</div>
                      <div className="q-options">
                        <div className="q-option">Oui, documentée et appliquée</div>
                        <div className="q-option">Partiellement</div>
                        <div className="q-option">Non</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 - Rapport détaillé */}
            <div className="feature-row-artisan reverse">
              <div className="feature-content">
                <div className="feature-number">02</div>
                <h3 className="feature-title">Rapport de conformité détaillé</h3>
                <p className="feature-text">
                  Recevez sous 48H un rapport complet avec votre score de conformité NIS2,
                  analyse par catégorie et plan d'action priorisé.
                </p>
                <ul className="feature-list">
                  <li>Score global de conformité</li>
                  <li>Analyse des écarts par catégorie</li>
                  <li>Recommandations classées par priorité</li>
                  <li>Roadmap de mise en conformité</li>
                </ul>
              </div>
              <div className="feature-mockup">
                <div className="mockup-placeholder">
                  <div className="mockup-label">EXEMPLE DE RAPPORT</div>
                  <div className="mockup-content">
                    <div className="mockup-dashboard">
                      <div className="dash-score">
                        <div className="score-circle">64%</div>
                        <div className="score-label">Conformité NIS2</div>
                      </div>
                      <div className="dash-bars">
                        <div className="bar-item">
                          <span>Gestion des risques</span>
                          <div className="bar"><div className="fill" style={{width: '78%'}}></div></div>
                        </div>
                        <div className="bar-item">
                          <span>Sécurité des accès</span>
                          <div className="bar"><div className="fill" style={{width: '45%'}}></div></div>
                        </div>
                        <div className="bar-item">
                          <span>Plan de continuité</span>
                          <div className="bar"><div className="fill" style={{width: '62%'}}></div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3 - Accompagnement */}
            <div className="feature-row-artisan">
              <div className="feature-content">
                <div className="feature-number">03</div>
                <h3 className="feature-title">Accompagnement expert</h3>
                <p className="feature-text">
                  Bénéficiez d'un échange avec un expert certifié ISO 27001 pour comprendre votre rapport,
                  prioriser vos actions et budgéter votre mise en conformité.
                </p>
                <ul className="feature-list">
                  <li>Session de 1h en visioconférence</li>
                  <li>Réponses à toutes vos questions</li>
                  <li>Conseils personnalisés pour votre secteur</li>
                  <li>Aide au financement (jusqu'à 70%)</li>
                </ul>
              </div>
              <div className="feature-mockup">
                <div className="mockup-placeholder simple">
                  <div className="mockup-label">ACCOMPAGNEMENT EXPERT</div>
                  <div className="mockup-icon">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                      <circle cx="40" cy="40" r="38" stroke="#7C3AED" strokeWidth="2"/>
                      <path d="M40 20C48.8366 20 56 27.1634 56 36C56 44.8366 48.8366 52 40 52C31.1634 52 24 44.8366 24 36C24 27.1634 31.1634 20 40 20Z" stroke="#7C3AED" strokeWidth="2"/>
                      <path d="M28 60C28 53.3726 33.3726 48 40 48C46.6274 48 52 53.3726 52 60" stroke="#7C3AED" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="mockup-text">Échange 1h avec expert certifié</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION CTA FINAL - Fond violet
            ═══════════════════════════════════════════════════════════ */}
        <section className="cta-final-artisan">
          <div className="cta-container">
            <h2 className="cta-title">Prêt à sécuriser votre entreprise ?</h2>
            <p className="cta-text">
              Nos experts certifiés ISO 27001 vous accompagnent de l'audit à la déclaration ANSSI
            </p>
            <div className="cta-buttons">
              <a href="#pricing" className="btn-cta-white">
                Découvrir nos audits
              </a>
              <a
                href={CONTACT_INFO.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta-outline"
              >
                Parler à un expert
              </a>
            </div>
          </div>
        </section>

        {/* Quiz Modal */}
        {quiz.isOpen && <QuizModal onClose={quiz.close} />}

        {/* Menu Burger Mobile */}
        <MenuBurger />
      </PageLayout>
    </>
  );
}
