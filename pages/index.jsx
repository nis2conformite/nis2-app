import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useQuiz } from '../hooks/useQuiz';
import { useLeadPopup } from '../hooks/useLeadPopup';
import { QuizModal } from '../components/QuizModal';
import {
  PRICING_OFFERS,
  TESTIMONIALS,
  HERO_STATS,
  CONTACT_INFO,
} from '../utils/constants';

export default function Home() {
  const [email, setEmail] = useState('');
  const quiz = useQuiz();
  const popup = useLeadPopup({
    quizIsOpen: quiz.isOpen,
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

  function handleEmailSubmit(e) {
    e.preventDefault();
    if (email) {
      // Redirection vers calendly avec email pré-rempli
      window.location.href = `${CONTACT_INFO.calendly}?email=${encodeURIComponent(email)}`;
    }
  }

  return (
    <>
      <Head>
        <title>NIS2 Conformité | Mesurez vos risques et priorisez vos actions</title>
        <meta name="description" content="Audit structuré selon référentiel ANSSI. Rapport détaillé. Recommandations priorisées. Conformité NIS2 pour PME et ETI." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ═══════════════════════════════════════════════════════════
          HEADER - STYLE ARTISAN.CO
          ═══════════════════════════════════════════════════════════ */}
      <header className="header-artisan">
        <div className="header-container">
          <img src="/logo.png" alt="NIS2 Conformité" className="header-logo" />

          <nav className="header-nav">
            <a href="#solutions">Solutions</a>
            <a href="#pricing">Tarifs</a>
            <a href="#expertise">Expertise</a>
            <a href="#temoignages">Témoignages</a>
          </nav>

          <div className="header-cta">
            <a href={CONTACT_INFO.calendly} target="_blank" rel="noopener noreferrer" className="btn-artisan btn-artisan-primary">
              Échange gratuit
            </a>
          </div>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════════════
          HERO SECTION - STYLE ARTISAN.CO
          ═══════════════════════════════════════════════════════════ */}
      <section className="hero-artisan-exact">
        <div className="hero-artisan-container">
          <div className="hero-badge-artisan">
            NIS2 Conformité obligatoire • Premières sanctions en 2027 • Agissez maintenant
          </div>

          <h1 className="hero-title-artisan">
            Mesurez vos risques <span className="highlight">NIS2</span><br />
            et priorisez vos actions
          </h1>

          <p className="hero-subtitle-artisan">
            Audit structuré selon référentiel ANSSI • Rapport détaillé en 48H • Recommandations priorisées • Accompagnement expert certifié ISO 27001
          </p>

          {/* Formulaire style Artisan.co */}
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

      {/* ═══════════════════════════════════════════════════════════
          SECTION AVANT/APRÈS - STYLE ARTISAN.CO
          ═══════════════════════════════════════════════════════════ */}
      <section className="before-after-section" id="solutions">
        <div className="before-after-container">
          <h2 className="section-title-artisan">La conformité NIS2, avant et après</h2>
          <p className="section-subtitle-artisan">
            Transformez la contrainte réglementaire en levier stratégique pour votre entreprise
          </p>

          <div className="before-after-grid">
            {/* AVANT */}
            <div className="before-card">
              <h3>❌ Avant (Non-conforme)</h3>
              <ul>
                <li>Amendes jusqu'à 10M€ ou 2% du CA mondial</li>
                <li>Risque de suspension d'activité</li>
                <li>Vulnérabilité aux cyberattaques (60% ferment sous 12 mois)</li>
                <li>Perte de confiance clients et partenaires</li>
                <li>Coût moyen d'une attaque : 4,35M€</li>
                <li>Stress juridique et responsabilité des dirigeants</li>
                <li>Exclusion des appels d'offres publics</li>
              </ul>
            </div>

            {/* APRÈS */}
            <div className="after-card">
              <h3>✅ Après (Conforme NIS2)</h3>
              <ul>
                <li>Conformité réglementaire assurée</li>
                <li>Protection renforcée contre les cyberattaques</li>
                <li>Jusqu'à 70% d'aides de l'État pour financer</li>
                <li>Avantage concurrentiel sur votre marché</li>
                <li>Confiance accrue des clients et investisseurs</li>
                <li>Réduction des primes d'assurance cyber</li>
                <li>Éligibilité aux marchés publics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION IMPACT - STATS & CHIFFRES
          ═══════════════════════════════════════════════════════════ */}
      <section className="content-section">
        <div className="content-container">
          <h2 className="section-title-artisan" style={{textAlign: 'center'}}>
            La prévention est plus rentable qu'une crise cyber
          </h2>
          <p className="section-subtitle-artisan" style={{textAlign: 'center'}}>
            Vulnérabilité des PME et ETI • 43% perdent des clients après une attaque cyber
          </p>

          <div className="content-grid">
            {/* Stat 1 */}
            <div className="content-card-artisan">
              <h3 style={{fontSize: '32px', color: '#4F46E5', marginBottom: '12px'}}>92%</h3>
              <h3>PME et ETI non prêtes</h3>
              <p>
                La majorité des entreprises concernées par NIS2 ne sont pas encore conformes.
                Les premières sanctions arrivent en 2027.
              </p>
            </div>

            {/* Stat 2 */}
            <div className="content-card-artisan">
              <h3 style={{fontSize: '32px', color: '#4F46E5', marginBottom: '12px'}}>+38%</h3>
              <h3>Hausse des cyberattaques</h3>
              <p>
                Les attaques contre les PME ont explosé de 38% en 2024.
                Les cybercriminels ciblent les entreprises non protégées.
              </p>
            </div>

            {/* Stat 3 */}
            <div className="content-card-artisan">
              <h3 style={{fontSize: '32px', color: '#4F46E5', marginBottom: '12px'}}>4,35M€</h3>
              <h3>Coût moyen d'une cyberattaque</h3>
              <p>
                60% des PME touchées ferment dans les 12 mois. Arrêt de production (21 jours en moyenne),
                perte de données, rançons.
              </p>
            </div>

            {/* Stat 4 */}
            <div className="content-card-artisan">
              <h3 style={{fontSize: '32px', color: '#4F46E5', marginBottom: '12px'}}>10M€</h3>
              <h3>Amende maximale NIS2</h3>
              <p>
                Ou 2% du chiffre d'affaires annuel mondial. La non-conformité coûte 200x plus cher qu'un audit préventif.
              </p>
            </div>

            {/* Stat 5 */}
            <div className="content-card-artisan">
              <h3 style={{fontSize: '32px', color: '#4F46E5', marginBottom: '12px'}}>70%</h3>
              <h3>D'aides de l'État possibles</h3>
              <p>
                Des dispositifs existent pour financer votre mise en conformité.
                Nous vous accompagnons dans les démarches.
              </p>
            </div>

            {/* Stat 6 */}
            <div className="content-card-artisan">
              <h3 style={{fontSize: '32px', color: '#4F46E5', marginBottom: '12px'}}>65</h3>
              <h3>Questions d'audit structurées</h3>
              <p>
                Notre audit couvre les 10 catégories de sécurité définies par le référentiel ANSSI.
                Rapport détaillé en 48H.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION PRICING - STYLE ARTISAN.CO
          ═══════════════════════════════════════════════════════════ */}
      <section className="pricing-section-artisan" id="pricing">
        <div className="before-after-container">
          <h2 className="section-title-artisan">Investissement vs Amende</h2>
          <p className="section-subtitle-artisan">
            Un audit coûte 200x moins cher qu'une sanction. Protégez votre entreprise dès maintenant.
          </p>

          <div className="pricing-grid-artisan">
            {PRICING_OFFERS.map((offer, index) => (
              <div
                key={offer.id}
                className={`pricing-card-artisan ${index === 1 ? 'featured' : ''}`}
              >
                {index === 1 && (
                  <div className="pricing-badge-featured">Le plus populaire</div>
                )}

                <h3 className="pricing-name">{offer.name}</h3>
                <div className="pricing-price-artisan">
                  {(offer.price / 100).toLocaleString('fr-FR')}€
                </div>
                <p className="pricing-period">HT</p>

                <ul className="pricing-features-artisan">
                  {offer.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>

                {offer.cta.type === 'stripe' ? (
                  <button
                    onClick={() => handleStripeCheckout(offer.id)}
                    className={`btn-pricing-artisan ${index !== 1 ? 'btn-pricing-secondary' : ''}`}
                  >
                    {offer.cta.text}
                  </button>
                ) : (
                  <a
                    href={offer.cta.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn-pricing-artisan ${index !== 1 ? 'btn-pricing-secondary' : ''}`}
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
          SECTION COMMENT ÇA MARCHE
          ═══════════════════════════════════════════════════════════ */}
      <section className="content-section">
        <div className="content-container">
          <h2 className="section-title-artisan" style={{textAlign: 'center'}}>
            Comment ça marche
          </h2>
          <p className="section-subtitle-artisan" style={{textAlign: 'center'}}>
            Un processus simple et structuré pour votre conformité NIS2
          </p>

          <div className="content-grid">
            {/* Étape 1 */}
            <div className="content-card-artisan">
              <h3>01. Audit en ligne structuré</h3>
              <p>
                Répondez à 65 questions basées sur le référentiel ANSSI. Interface intuitive et guidée.
                Sauvegarde automatique. Complétez à votre rythme en 10 catégories de sécurité.
              </p>
            </div>

            {/* Étape 2 */}
            <div className="content-card-artisan">
              <h3>02. Rapport de conformité détaillé</h3>
              <p>
                Recevez sous 48H un rapport complet avec votre score de conformité NIS2,
                analyse par catégorie et plan d'action priorisé avec roadmap.
              </p>
            </div>

            {/* Étape 3 */}
            <div className="content-card-artisan">
              <h3>03. Accompagnement expert</h3>
              <p>
                Bénéficiez d'un échange avec un expert certifié ISO 27001 pour comprendre votre rapport,
                prioriser vos actions et budgéter votre mise en conformité (session 1h en visio).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION EXPERTISE
          ═══════════════════════════════════════════════════════════ */}
      <section className="before-after-section" id="expertise">
        <div className="before-after-container">
          <h2 className="section-title-artisan">
            Préparez-vous à NIS2 avec notre méthode éprouvée
          </h2>
          <p className="section-subtitle-artisan">
            Notre accompagnement se base sur le référentiel officiel de l'ANSSI
          </p>

          <div className="before-after-grid">
            {/* Expertise 1 */}
            <div className="after-card">
              <h3>Certification ISO 27001</h3>
              <p>
                Nos experts sont certifiés ISO 27001 et possèdent une expertise reconnue en cybersécurité.
                Nous appliquons les meilleures pratiques internationales pour sécuriser votre entreprise.
              </p>
            </div>

            {/* Expertise 2 */}
            <div className="after-card">
              <h3>Méthodologie ANSSI</h3>
              <p>
                Notre audit suit le référentiel officiel de l'Agence Nationale de la Sécurité des Systèmes d'Information.
                Conformité garantie avec les exigences réglementaires NIS2.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION TÉMOIGNAGES - STYLE ARTISAN.CO
          ═══════════════════════════════════════════════════════════ */}
      <section className="content-section" id="temoignages">
        <div className="content-container">
          <h2 className="section-title-artisan" style={{textAlign: 'center'}}>
            Dirigeants conformes, entreprises gagnantes
          </h2>
          <p className="section-subtitle-artisan" style={{textAlign: 'center'}}>
            Ils ont fait de NIS2 un levier de performance
          </p>

          <div className="content-grid">
            {TESTIMONIALS.map((testimonial, index) => (
              <div key={index} className="content-card-artisan">
                <p style={{fontStyle: 'italic', marginBottom: '20px', color: '#64748B'}}>
                  "{testimonial.text}"
                </p>
                <div style={{borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '16px'}}>
                  <h3 style={{fontSize: '16px', marginBottom: '4px'}}>{testimonial.author}</h3>
                  <p style={{fontSize: '14px', color: '#94A3B8', margin: 0}}>{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION CTA FINAL
          ═══════════════════════════════════════════════════════════ */}
      <section className="before-after-section">
        <div className="before-after-container" style={{textAlign: 'center'}}>
          <h2 className="section-title-artisan">
            Prêt à sécuriser votre entreprise ?
          </h2>
          <p className="section-subtitle-artisan">
            Nos experts certifiés ISO 27001 vous accompagnent de l'audit à la déclaration ANSSI
          </p>

          <div style={{display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '40px'}}>
            <a
              href="#pricing"
              className="btn-artisan btn-artisan-primary"
              style={{padding: '16px 32px', fontSize: '16px'}}
            >
              Découvrir nos audits
            </a>
            <a
              href={CONTACT_INFO.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-artisan btn-artisan-secondary"
              style={{padding: '16px 32px', fontSize: '16px'}}
            >
              Parler à un expert
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FOOTER - STYLE ARTISAN.CO
          ═══════════════════════════════════════════════════════════ */}
      <footer className="footer-artisan">
        <div className="footer-container">
          {/* Colonne 1 - À propos */}
          <div className="footer-column">
            <img src="/logo.png" alt="NIS2 Conformité" style={{height: '32px', marginBottom: '16px'}} />
            <p style={{fontSize: '14px', lineHeight: '1.6', marginBottom: '20px'}}>
              La plateforme d'audit et de conformité cyber pensée pour les PME et ETI européennes.
            </p>
            <div style={{display: 'flex', gap: '12px'}}>
              <span style={{width: '32px', height: '32px', background: 'rgba(255,255,255,0.1)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                ISO
              </span>
              <span style={{width: '32px', height: '32px', background: 'rgba(255,255,255,0.1)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                ANSSI
              </span>
            </div>
          </div>

          {/* Colonne 2 - Solutions */}
          <div className="footer-column">
            <h4>Solutions</h4>
            <ul>
              <li><a href="#pricing">Audit NIS2</a></li>
              <li><a href="#expertise">Accompagnement</a></li>
              <li><a href="/formations">Formations</a></li>
              <li><a href="/offres-complementaires">Services complémentaires</a></li>
            </ul>
          </div>

          {/* Colonne 3 - Ressources */}
          <div className="footer-column">
            <h4>Ressources</h4>
            <ul>
              <li><a href="/comprendre-nis2">Comprendre NIS2</a></li>
              <li><a href="#temoignages">Témoignages clients</a></li>
              <li><a href="/qui-sommes-nous">Qui sommes-nous</a></li>
              <li><a href={CONTACT_INFO.calendly} target="_blank" rel="noopener noreferrer">Contact</a></li>
            </ul>
          </div>

          {/* Colonne 4 - Légal */}
          <div className="footer-column">
            <h4>Légal</h4>
            <ul>
              <li><a href="/mentions-legales">Mentions légales</a></li>
              <li><a href="/politique-confidentialite">Confidentialité</a></li>
              <li><a href="/cgv">CGV</a></li>
              <li><a href="/cookies">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 NIS2 Conformité. Tous droits réservés.</p>
          <div className="footer-social">
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </footer>

      {/* Quiz Modal */}
      {quiz.isOpen && <QuizModal onClose={quiz.close} />}
    </>
  );
}
