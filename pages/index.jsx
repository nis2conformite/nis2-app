import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const tabs = [
    { name: 'Audit Automatisé', content: 'audit' },
    { name: 'Plan de Remédiation', content: 'remediation' },
    { name: 'Formations OPCO', content: 'formations' },
    { name: 'Déclaration ANSSI', content: 'anssi' },
    { name: 'Dossier Aides', content: 'aides' },
    { name: 'Suivi Continu', content: 'suivi' }
  ];

  return (
    <>
      <Head>
        <title>Conformité NIS2 Automatisée | Cyber Solférino</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      {/* TOP BANNER */}
      <div className="top-banner">
        <span>🎉 150+ PME déjà conformes avec nous. <a href="/cas-clients">Lire l'étude de cas</a></span>
      </div>

      {/* NAVIGATION */}
      <nav className="navbar">
        <div className="nav-inner">
          <a href="/" className="nav-logo">
            <span className="logo-text">Cyber Solférino</span>
          </a>
          
          <div className="nav-menu">
            <button className="nav-item">Solutions</button>
            <button className="nav-item">Ressources</button>
            <a href="/qui-sommes-nous" className="nav-item">À propos</a>
            <a href="/#pricing" className="nav-item">Tarifs</a>
          </div>

          <div className="nav-actions">
            <a href="https://calendly.com/nis2conformite/30min" target="_blank" rel="noopener noreferrer" className="nav-btn">
              Prendre rendez-vous
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* HERO */}
        <section className="hero-section">
          <div className="hero-container">
            <h1 className="hero-title">
              Automatisez Votre Conformité NIS2 Avec Une Plateforme Pilotée Par Des Experts
            </h1>
            
            <p className="hero-subtitle">
              Équipez votre équipe avec les meilleurs outils de conformité et notre équipe d'experts certifiés, 
              qui automatisent l'intégralité de votre workflow de mise en conformité.
            </p>

            <div className="hero-form">
              <input type="email" placeholder="Email professionnel" className="hero-input" />
              <button className="hero-button">Démarrer</button>
            </div>

            <p className="hero-caption">Audit gratuit • Résultat en 48h</p>
          </div>
        </section>

        {/* SOCIAL PROOF */}
        <section className="social-proof">
          <div className="marquee">
            <div className="marquee-content">
              <img src="/logo-client-1.svg" alt="Client" />
              <img src="/logo-client-2.svg" alt="Client" />
              <img src="/logo-client-3.svg" alt="Client" />
              <img src="/logo-client-4.svg" alt="Client" />
              <img src="/logo-client-5.svg" alt="Client" />
              <img src="/logo-client-6.svg" alt="Client" />
              <img src="/logo-client-7.svg" alt="Client" />
            </div>
            <div className="marquee-content" aria-hidden="true">
              <img src="/logo-client-1.svg" alt="Client" />
              <img src="/logo-client-2.svg" alt="Client" />
              <img src="/logo-client-3.svg" alt="Client" />
              <img src="/logo-client-4.svg" alt="Client" />
              <img src="/logo-client-5.svg" alt="Client" />
              <img src="/logo-client-6.svg" alt="Client" />
              <img src="/logo-client-7.svg" alt="Client" />
            </div>
          </div>
        </section>

        {/* BEFORE/AFTER SECTION */}
        <section className="before-after-section">
          <div className="container">
            <p className="section-eyebrow">Le Futur est Consolidé</p>
            
            <h2 className="section-title">
              Tous Les Outils Dont Vous Avez Besoin, Consolidés En Une Seule Plateforme Exceptionnelle
            </h2>
            
            <p className="section-description">
              Nous construisons le nouveau paradigme du logiciel – élégant, intuitif et facile à utiliser.
            </p>

            <div className="comparison-wrapper">
              {/* BEFORE */}
              <div className="comparison-column">
                <h3 className="comparison-heading">Avant Cyber Solférino</h3>
                <div className="comparison-visual before-visual">
                  <div className="tool-scattered">Cabinet d'avocats</div>
                  <div className="tool-scattered">Prestataire IT</div>
                  <div className="tool-scattered">Consultant</div>
                  <div className="tool-scattered">Formation</div>
                  <div className="tool-scattered">Expert ANSSI</div>
                  <div className="tool-scattered">RSSI</div>
                </div>
              </div>

              {/* AFTER */}
              <div className="comparison-column">
                <h3 className="comparison-heading">Après Cyber Solférino</h3>
                <div className="comparison-visual after-visual">
                  <div className="unified-stack">
                    <div className="unified-item">
                      <img src="/icon-audit.svg" alt="" width="24" height="24" />
                      <span>Audit NIS2</span>
                    </div>
                    <div className="unified-item">
                      <img src="/icon-formation.svg" alt="" width="24" height="24" />
                      <span>Formations</span>
                    </div>
                    <div className="unified-item">
                      <img src="/icon-doc.svg" alt="" width="24" height="24" />
                      <span>Documents</span>
                    </div>
                    <div className="unified-item">
                      <img src="/icon-plan.svg" alt="" width="24" height="24" />
                      <span>Plan d'action</span>
                    </div>
                    <div className="unified-item">
                      <img src="/icon-anssi.svg" alt="" width="24" height="24" />
                      <span>Déclaration ANSSI</span>
                    </div>
                    <div className="unified-item">
                      <img src="/icon-euro.svg" alt="" width="24" height="24" />
                      <span>Aides État</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERTS SECTION */}
        <section className="experts-section">
          <div className="container">
            <p className="section-eyebrow">Le Futur est Consolidé</p>
            
            <h2 className="section-title">
              Rencontrez Vos Futurs Collègues, Les Experts
            </h2>
            
            <p className="section-description">
              Nos experts libèrent le plein potentiel de votre équipe en automatisant les tâches répétitives 
              et chronophages qui les ralentissent.
            </p>

            <div className="experts-carousel">
              <div className="expert-card">
                <img src="/expert-1.jpg" alt="Expert" className="expert-image" />
                <h3 className="expert-name">L'Expert Conformité</h3>
                <p className="expert-role">Audit & Analyse</p>
              </div>
              <div className="expert-card">
                <img src="/expert-2.jpg" alt="Expert" className="expert-image" />
                <h3 className="expert-name">Le Formateur</h3>
                <p className="expert-role">Formation & Sensibilisation</p>
              </div>
              <div className="expert-card">
                <img src="/expert-3.jpg" alt="Expert" className="expert-image" />
                <h3 className="expert-name">Le Consultant</h3>
                <p className="expert-role">Accompagnement ANSSI</p>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN EXPERT SECTION */}
        <section className="main-expert-section">
          <div className="container">
            <div className="main-expert-grid">
              <div className="main-expert-content">
                <h2 className="main-expert-title">
                  Rencontrez Notre Premier Expert,
                  <br />
                  <span className="highlight-text">L'Expert Conformité NIS2</span>
                </h2>

                <div className="main-expert-ctas">
                  <a href="/audit-nis2" className="cta-primary">Découvrir l'audit</a>
                  <a href="https://calendly.com/nis2conformite/30min" target="_blank" rel="noopener noreferrer" className="cta-secondary">
                    Prendre rendez-vous
                  </a>
                </div>

                <div className="feature-list">
                  <div className="feature-item">
                    <img src="/icon-check-circle.svg" alt="" width="48" height="48" />
                    <div>
                      <h4>Il Automatise l'Audit</h4>
                      <p>Notre expert gère les tâches répétitives de l'audit, libérant votre équipe pour qu'elle se concentre sur les actions stratégiques.</p>
                    </div>
                  </div>

                  <div className="feature-item">
                    <img src="/icon-research.svg" alt="" width="48" height="48" />
                    <div>
                      <h4>Il Analyse Des Dizaines de Sources</h4>
                      <p>L'expert collecte et analyse les données de conformité depuis de multiples canaux, vous donnant des insights riches pour prioriser vos actions.</p>
                    </div>
                  </div>

                  <div className="feature-item">
                    <img src="/icon-calendar.svg" alt="" width="48" height="48" />
                    <div>
                      <h4>Il Planifie et Suit Vos Actions</h4>
                      <p>L'expert programme automatiquement vos étapes et assure le suivi au moment parfait, maximisant votre taux de réussite.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="main-expert-visual">
                <button className="play-button-large" onClick={() => setShowVideo(true)}>
                  <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                    <circle cx="60" cy="60" r="60" fill="white" />
                    <path d="M48 36L84 60L48 84V36Z" fill="currentColor" />
                  </svg>
                  <span>Voir Comment Ça Marche</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="how-it-works-section">
          <div className="container">
            <p className="section-eyebrow">Comment Ça Marche</p>
            
            <h2 className="section-title">
              Obtenez de Meilleurs Résultats,
              <br />
              Sans Augmenter Vos Effectifs
            </h2>

            <a href="https://calendly.com/nis2conformite/30min" target="_blank" rel="noopener noreferrer" className="cta-primary">
              Prendre rendez-vous
            </a>

            <div className="steps-list">
              {/* STEP 1 */}
              <div className="step-item">
                <div className="step-badge">1</div>
                <div className="step-content">
                  <h3 className="step-title">Créez Votre Campagne d'Audit</h3>
                  <p className="step-description">
                    Décidez quels périmètres auditer, quelles mesures prioriser, et quel niveau de détail vous souhaitez.
                  </p>
                </div>
                <div className="step-visual">
                  <img src="/step-1.png" alt="Step 1" />
                </div>
              </div>

              {/* STEP 2 */}
              <div className="step-item">
                <div className="step-badge">2</div>
                <div className="step-content">
                  <h3 className="step-title">L'Expert Identifie Les Écarts</h3>
                  <p className="step-description">
                    Notre expert analyse votre conformité avec sa base de données de plus de 150 critères NIS2 couvrant les 18 secteurs.
                  </p>
                </div>
                <div className="step-visual">
                  <img src="/step-2.png" alt="Step 2" />
                </div>
              </div>

              {/* STEP 3 */}
              <div className="step-item">
                <div className="step-badge">3</div>
                <div className="step-content">
                  <h3 className="step-title">L'Expert Analyse Les Priorités</h3>
                  <p className="step-description">
                    Grâce à notre moteur d'analyse, l'expert identifie les écarts critiques selon votre secteur, votre maturité et vos risques métier.
                  </p>
                </div>
                <div className="step-visual">
                  <img src="/step-3.png" alt="Step 3" />
                </div>
              </div>

              {/* STEP 4 */}
              <div className="step-item">
                <div className="step-badge">4</div>
                <div className="step-content">
                  <h3 className="step-title">L'Expert Génère Votre Plan Personnalisé</h3>
                  <p className="step-description">
                    Via notre méthodologie éprouvée, l'expert identifie l'approche optimale pour chaque action, avec timeline et budget prévisionnel.
                  </p>
                </div>
                <div className="step-visual">
                  <img src="/step-4.png" alt="Step 4" />
                </div>
              </div>

              {/* STEP 5 */}
              <div className="step-item">
                <div className="step-badge">5</div>
                <div className="step-content">
                  <h3 className="step-title">L'Expert Assure La Délivrabilité</h3>
                  <p className="step-description">
                    Notre plateforme est équipée d'une suite d'outils qui garantissent que vos livrables sont conformes aux exigences ANSSI.
                  </p>
                </div>
                <div className="step-visual">
                  <img src="/step-5.png" alt="Step 5" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES TABS */}
        <section className="features-section">
          <div className="container">
            <p className="section-eyebrow">Fonctionnalités</p>
            
            <h2 className="section-title">
              Innovation À Chaque Étape du Cycle de Conformité
            </h2>
            
            <p className="section-description">
              Consolidez et automatisez votre conformité avec notre plateforme riche en fonctionnalités et nos Experts.
            </p>

            <div className="tabs-wrapper">
              <div className="tabs-nav">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    className={`tab-button ${activeTab === index ? 'active' : ''}`}
                    onClick={() => setActiveTab(index)}
                  >
                    {tab.name}
                  </button>
                ))}
              </div>

              <div className="tab-panel">
                <div className="tab-panel-visual">
                  <img src={`/feature-${tabs[activeTab].content}.png`} alt={tabs[activeTab].name} />
                </div>
                <div className="tab-panel-content">
                  <h3>Base de Données de 300M+ Contacts B2B Vérifiés</h3>
                  <p>
                    Accédez à un vaste pool de contacts B2B vérifiés, adaptés à des cas d'usage spécifiques comme les entreprises locales 
                    et les boutiques e-commerce. Parfait pour cibler des leads avec précision à grande échelle.
                  </p>
                  <a href="https://calendly.com/nis2conformite/30min" target="_blank" rel="noopener noreferrer" className="cta-secondary">
                    Prendre rendez-vous
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="testimonials-section">
          <div className="container">
            <p className="section-eyebrow">Témoignages</p>
            
            <h2 className="section-title">
              Ce Que Les Gens Aiment Chez Cyber Solférino
            </h2>
            
            <p className="section-description">
              Découvrez ce que disent nos clients actuels à notre sujet.
            </p>

            <div className="testimonials-grid">
              <div className="testimonial-card featured-testimonial">
                <div className="testimonial-header">
                  <img src="/client-avatar-1.jpg" alt="Client" className="testimonial-avatar" />
                  <div>
                    <p className="testimonial-name">Sophie Durand</p>
                    <p className="testimonial-company">CEO, PME Industrie</p>
                  </div>
                </div>
                <p className="testimonial-quote">
                  Nous avons multiplié par 20 notre investissement en chiffre d'affaires. Le ROI n'est pas seulement prouvé – il est indéniable.
                </p>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-logo">
                  <img src="/logo-client-sumup.svg" alt="Client" />
                </div>
                <p className="testimonial-quote">
                  "Cyber Solférino intègre des données précieuses sur la conformité, soutenant nos efforts pour engager nos partenaires de manière significative."
                </p>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-header">
                  <img src="/client-avatar-2.jpg" alt="Client" className="testimonial-avatar" />
                  <div>
                    <p className="testimonial-name">Marc Lefebvre</p>
                    <p className="testimonial-company">Fondateur, ETI Tech</p>
                  </div>
                </div>
                <p className="testimonial-quote">
                  "Avant Cyber Solférino, notre équipe passait beaucoup trop de temps sur la conformité. Nos experts ont considérablement libéré la bande passante de notre équipe."
                </p>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-logo">
                  <img src="/logo-client-cookunity.svg" alt="Client" />
                </div>
                <div className="testimonial-header">
                  <img src="/client-avatar-3.jpg" alt="Client" className="testimonial-avatar" />
                  <div>
                    <p className="testimonial-name">Anne-Marie Petit</p>
                    <p className="testimonial-company">Head of Compliance</p>
                  </div>
                </div>
                <p className="testimonial-quote">
                  "Cyber Solférino nous a permis de décrocher certains de nos meilleurs partenariats stratégiques !"
                </p>
              </div>

              <div className="testimonial-card">
                <p className="testimonial-quote">
                  "Cyber Solférino nous a aidés à obtenir nos certifications clés !"
                </p>
                <p className="testimonial-author-simple">CEO, Startup YC-backed</p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="final-cta-section">
          <div className="final-cta-content">
            <h2 className="final-cta-title">
              Prêt À Recruter Nos Experts et Booster Votre Équipe ?
            </h2>
            <p className="final-cta-description">
              Nos experts sont équipés des meilleurs outils de conformité pour automatiser votre mise en conformité, 
              libérant le temps de vos équipes pour qu'elles se concentrent sur la conclusion de deals.
            </p>
            <a href="https://calendly.com/nis2conformite/30min" target="_blank" rel="noopener noreferrer" className="final-cta-button">
              Prendre rendez-vous
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-column">
              <h4 className="footer-heading">Solutions</h4>
              <a href="/audit-nis2">Audit NIS2</a>
              <a href="/formations">Formations</a>
              <a href="/accompagnement">Accompagnement</a>
              <a href="/services">Services complémentaires</a>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Ressources</h4>
              <a href="/comprendre-nis2">Comprendre NIS2</a>
              <a href="/blog">Blog</a>
              <a href="/cas-clients">Cas clients</a>
              <a href="/faq">FAQ</a>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Entreprise</h4>
              <a href="/qui-sommes-nous">À propos</a>
              <a href="/contact">Contact</a>
              <a href="/mentions-legales">Mentions légales</a>
              <a href="/confidentialite">Confidentialité</a>
            </div>

            <div className="footer-brand">
              <img src="/logo-white.svg" alt="Cyber Solférino" className="footer-logo" />
              <p className="footer-copyright">© 2025 Cyber Solférino. Tous droits réservés.</p>
              <div className="footer-links">
                <a href="/cgu">CGU</a>
                <a href="/confidentialite">Confidentialité</a>
              </div>
              <div className="footer-badges">
                <img src="/badge-soc2.svg" alt="SOC2" />
                <img src="/badge-iso.svg" alt="ISO 27001" />
              </div>
              <a href="/trust" className="footer-trust">Trust Center</a>
            </div>
          </div>
        </footer>
      </main>

      {/* VIDEO MODAL */}
      {showVideo && (
        <div className="video-modal" onClick={() => setShowVideo(false)}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={() => setShowVideo(false)}>×</button>
            <iframe
              src="https://www.youtube.com/embed/461tWBUzrY8?autoplay=1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      <style jsx>{`
        /* === EXACT ARTISAN.CO STYLES === */

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :global(body) {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          background: #000000;
          color: #FFFFFF;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* TOP BANNER */
        .top-banner {
          background: #6366F1;
          color: #FFFFFF;
          text-align: center;
          padding: 12px 16px;
          font-size: 14px;
          font-weight: 500;
        }

        .top-banner a {
          color: #FFFFFF;
          text-decoration: underline;
          margin-left: 8px;
        }

        /* NAVIGATION */
        .navbar {
          position: sticky;
          top: 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          z-index: 100;
          padding: 16px 0;
        }

        .nav-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo {
          text-decoration: none;
        }

        .logo-text {
          font-size: 22px;
          font-weight: 700;
          color: #FFFFFF;
        }

        .nav-menu {
          display: flex;
          gap: 32px;
          align-items: center;
        }

        .nav-item {
          font-size: 15px;
          font-weight: 500;
          color: #FFFFFF;
          text-decoration: none;
          background: none;
          border: none;
          cursor: pointer;
          transition: opacity 0.2s;
        }

        .nav-item:hover {
          opacity: 0.7;
        }

        .nav-actions {
          display: flex;
          gap: 16px;
          align-items: center;
        }

        .nav-btn {
          background: #FFFFFF;
          color: #000000;
          padding: 10px 20px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s;
        }

        .nav-btn:hover {
          background: rgba(255, 255, 255, 0.9);
          transform: translateY(-1px);
        }

        /* HERO */
        .hero-section {
          padding: 120px 32px 80px;
          text-align: center;
          background: radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.15) 0%, transparent 50%);
        }

        .hero-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .hero-title {
          font-size: 72px;
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 24px;
          color: #FFFFFF;
        }

        .hero-subtitle {
          font-size: 20px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 40px;
          font-weight: 400;
        }

        .hero-form {
          display: flex;
          gap: 12px;
          max-width: 500px;
          margin: 0 auto 16px;
        }

        .hero-input {
          flex: 1;
          padding: 14px 20px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          color: #FFFFFF;
          font-size: 15px;
          font-family: inherit;
        }

        .hero-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .hero-button {
          padding: 14px 32px;
          background: #FFFFFF;
          color: #000000;
          border: none;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
        }

        .hero-button:hover {
          background: rgba(255, 255, 255, 0.9);
          transform: translateY(-1px);
        }

        .hero-caption {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.5);
          font-weight: 400;
        }

        /* SOCIAL PROOF */
        .social-proof {
          padding: 60px 0;
          overflow: hidden;
        }

        .marquee {
          display: flex;
          gap: 60px;
          animation: marquee 30s linear infinite;
        }

        .marquee-content {
          display: flex;
          gap: 60px;
          flex-shrink: 0;
        }

        .marquee-content img {
          height: 32px;
          width: auto;
          opacity: 0.4;
          filter: brightness(10);
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* BEFORE/AFTER */
        .before-after-section {
          padding: 120px 32px;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .section-eyebrow {
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 16px;
          text-align: center;
        }

        .section-title {
          font-size: 56px;
          font-weight: 800;
          line-height: 1.2;
          letter-spacing: -0.02em;
          text-align: center;
          margin-bottom: 16px;
          color: #FFFFFF;
        }

        .section-description {
          font-size: 18px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.7);
          text-align: center;
          max-width: 700px;
          margin: 0 auto 80px;
          font-weight: 400;
        }

        .comparison-wrapper {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 60px;
        }

        .comparison-heading {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 32px;
          text-align: center;
          color: #FFFFFF;
        }

        .comparison-visual {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 60px 40px;
          min-height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tool-scattered {
          display: inline-block;
          padding: 12px 20px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
          margin: 8px;
        }

        .unified-stack {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .unified-item {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          padding: 16px 20px;
          display: flex;
          align-items: center;
          gap: 16px;
          font-size: 15px;
          font-weight: 500;
          color: #FFFFFF;
        }

        /* EXPERTS */
        .experts-section {
          padding: 120px 32px;
        }

        .experts-carousel {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        .expert-card {
          text-align: center;
        }

        .expert-image {
          width: 100%;
          height: auto;
          border-radius: 16px;
          margin-bottom: 24px;
        }

        .expert-name {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 8px;
          color: #FFFFFF;
        }

        .expert-role {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.6);
          font-weight: 400;
        }

        /* MAIN EXPERT */
        .main-expert-section {
          padding: 120px 32px;
          background: radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%);
        }

        .main-expert-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .main-expert-title {
          font-size: 48px;
          font-weight: 800;
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin-bottom: 32px;
          color: #FFFFFF;
        }

        .highlight-text {
          color: #6366F1;
        }

        .main-expert-ctas {
          display: flex;
          gap: 16px;
          margin-bottom: 60px;
        }

        .cta-primary {
          padding: 14px 28px;
          background: #FFFFFF;
          color: #000000;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s;
          display: inline-block;
        }

        .cta-primary:hover {
          background: rgba(255, 255, 255, 0.9);
          transform: translateY(-1px);
        }

        .cta-secondary {
          padding: 14px 28px;
          background: transparent;
          color: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s;
          display: inline-block;
        }

        .cta-secondary:hover {
          border-color: rgba(255, 255, 255, 0.4);
        }

        .feature-list {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .feature-item {
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }

        .feature-item h4 {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 8px;
          color: #FFFFFF;
        }

        .feature-item p {
          font-size: 16px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.7);
          font-weight: 400;
        }

        .main-expert-visual {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 500px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
        }

        .play-button-large {
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          transition: all 0.3s;
          color: #FFFFFF;
        }

        .play-button-large:hover {
          transform: scale(1.05);
        }

        .play-button-large span {
          font-size: 16px;
          font-weight: 600;
          font-family: inherit;
        }

        /* HOW IT WORKS */
        .how-it-works-section {
          padding: 120px 32px;
        }

        .steps-list {
          margin-top: 80px;
          display: flex;
          flex-direction: column;
          gap: 80px;
        }

        .step-item {
          display: grid;
          grid-template-columns: auto 1fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .step-badge {
          width: 60px;
          height: 60px;
          background: #6366F1;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          font-weight: 700;
          color: #FFFFFF;
          flex-shrink: 0;
        }

        .step-title {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 12px;
          color: #FFFFFF;
        }

        .step-description {
          font-size: 16px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.7);
          font-weight: 400;
        }

        .step-visual {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 300px;
        }

        .step-visual img {
          max-width: 100%;
          height: auto;
        }

        /* FEATURES TABS */
        .features-section {
          padding: 120px 32px;
          background: rgba(99, 102, 241, 0.05);
        }

        .tabs-wrapper {
          margin-top: 60px;
        }

        .tabs-nav {
          display: flex;
          gap: 12px;
          justify-content: center;
          margin-bottom: 60px;
          flex-wrap: wrap;
        }

        .tab-button {
          padding: 12px 24px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
        }

        .tab-button:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #FFFFFF;
        }

        .tab-button.active {
          background: #6366F1;
          border-color: #6366F1;
          color: #FFFFFF;
        }

        .tab-panel {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .tab-panel-visual {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 400px;
        }

        .tab-panel-visual img {
          max-width: 100%;
          height: auto;
        }

        .tab-panel-content h3 {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 16px;
          color: #FFFFFF;
        }

        .tab-panel-content p {
          font-size: 16px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 32px;
          font-weight: 400;
        }

        /* TESTIMONIALS */
        .testimonials-section {
          padding: 120px 32px;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
        }

        .testimonial-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 32px;
          transition: all 0.3s;
        }

        .testimonial-card:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-4px);
        }

        .testimonial-card.featured-testimonial {
          border-color: #6366F1;
          background: rgba(99, 102, 241, 0.1);
        }

        .testimonial-header {
          display: flex;
          gap: 16px;
          align-items: center;
          margin-bottom: 20px;
        }

        .testimonial-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          object-fit: cover;
        }

        .testimonial-name {
          font-size: 15px;
          font-weight: 600;
          color: #FFFFFF;
          margin-bottom: 4px;
        }

        .testimonial-company {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
          font-weight: 400;
        }

        .testimonial-logo {
          margin-bottom: 20px;
        }

        .testimonial-logo img {
          height: 32px;
          width: auto;
          filter: brightness(10);
          opacity: 0.6;
        }

        .testimonial-quote {
          font-size: 16px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 400;
        }

        .testimonial-author-simple {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
          margin-top: 16px;
          font-weight: 400;
        }

        /* FINAL CTA */
        .final-cta-section {
          padding: 120px 32px;
          background: radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.2) 0%, transparent 70%);
        }

        .final-cta-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .final-cta-title {
          font-size: 56px;
          font-weight: 800;
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin-bottom: 24px;
          color: #FFFFFF;
        }

        .final-cta-description {
          font-size: 18px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 40px;
          font-weight: 400;
        }

        .final-cta-button {
          padding: 16px 40px;
          background: #FFFFFF;
          color: #000000;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s;
          display: inline-block;
        }

        .final-cta-button:hover {
          background: rgba(255, 255, 255, 0.9);
          transform: translateY(-2px);
        }

        /* FOOTER */
        .footer {
          padding: 80px 32px 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-container {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 60px;
        }

        .footer-heading {
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 20px;
          color: rgba(255, 255, 255, 0.5);
        }

        .footer-column a {
          display: block;
          font-size: 15px;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          margin-bottom: 12px;
          transition: color 0.2s;
          font-weight: 400;
        }

        .footer-column a:hover {
          color: #FFFFFF;
        }

        .footer-logo {
          height: 32px;
          width: auto;
          margin-bottom: 16px;
        }

        .footer-copyright {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 16px;
          font-weight: 400;
        }

        .footer-links {
          display: flex;
          gap: 16px;
          margin-bottom: 20px;
        }

        .footer-links a {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
          font-weight: 400;
        }

        .footer-badges {
          display: flex;
          gap: 12px;
          margin-bottom: 16px;
        }

        .footer-badges img {
          height: 40px;
          width: auto;
        }

        .footer-trust {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-weight: 400;
        }

        /* VIDEO MODAL */
        .video-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
        }

        .video-modal-content {
          position: relative;
          width: 100%;
          max-width: 1000px;
          aspect-ratio: 16/9;
        }

        .video-modal-content iframe {
          width: 100%;
          height: 100%;
          border: none;
          border-radius: 12px;
        }

        .video-modal-close {
          position: absolute;
          top: -40px;
          right: 0;
          background: none;
          border: none;
          color: #FFFFFF;
          font-size: 32px;
          cursor: pointer;
          font-family: inherit;
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .comparison-wrapper,
          .main-expert-grid,
          .tab-panel,
          .experts-carousel {
            grid-template-columns: 1fr;
          }

          .step-item {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .footer-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .nav-menu {
            display: none;
          }

          .hero-title {
            font-size: 48px;
          }

          .section-title {
            font-size: 36px;
          }

          .final-cta-title {
            font-size: 36px;
          }

          .main-expert-title {
            font-size: 32px;
          }

          .footer-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
