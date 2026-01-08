import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <Head>
        <title>Conformité NIS2 Simplifiée | Cyber Solférino</title>
        <meta name="description" content="Automatisez votre conformité NIS2 avec notre plateforme tout-en-un. Audits, formations, accompagnement - tout en un seul endroit." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* NAVIGATION */}
      <nav className="nav">
        <div className="nav-container">
          <a href="/" className="logo">
            <span className="logo-text">Cyber Solférino</span>
          </a>
          <div className="nav-links">
            <a href="#solutions">Solutions</a>
            <a href="#fonctionnement">Comment ça marche</a>
            <a href="/qui-sommes-nous">À propos</a>
            <a href="/#pricing" className="btn-nav-primary">Nos tarifs</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-badge">
          🎉 150+ PME déjà conformes avec nous
        </div>
        
        <h1 className="hero-title">
          Automatisez Votre Conformité NIS2 
          <br />
          Avec Une Plateforme Tout-en-Un
        </h1>
        
        <p className="hero-subtitle">
          Équipez votre entreprise avec les meilleurs outils de conformité et notre équipe d'experts certifiés ISO 27001, 
          qui automatisent l'intégralité de votre mise en conformité.
        </p>

        <div className="hero-cta">
          <a href="https://calendly.com/nis2conformite/30min" target="_blank" rel="noopener noreferrer" className="btn-hero-primary">
            Réserver un audit gratuit
          </a>
          <a href="#fonctionnement" className="btn-hero-secondary">
            Voir comment ça marche
          </a>
        </div>

        <div className="hero-image">
          <img src="/dashboard-preview.png" alt="Dashboard Conformité NIS2" />
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="before-after">
        <div className="section-header-center">
          <span className="section-badge">Le Futur est Simplifié</span>
          <h2>Tous Les Outils Dont Vous Avez Besoin, Consolidés En Une Seule Plateforme</h2>
          <p>Nous construisons le nouveau paradigme de la conformité – élégant, intuitif et facile à utiliser.</p>
        </div>

        <div className="comparison-container">
          {/* BEFORE */}
          <div className="comparison-side before">
            <h3>Avant Cyber Solférino</h3>
            <div className="comparison-visual">
              <div className="chaos-tools">
                <div className="tool-bubble">Cabinet d'avocats</div>
                <div className="tool-bubble">Prestataire IT</div>
                <div className="tool-bubble">Consultant indépendant</div>
                <div className="tool-bubble">Organisme formation</div>
                <div className="tool-bubble">Expert ANSSI</div>
                <div className="tool-bubble">RSSI freelance</div>
              </div>
            </div>
          </div>

          {/* AFTER */}
          <div className="comparison-side after">
            <h3>Après Cyber Solférino</h3>
            <div className="comparison-visual">
              <div className="unified-platform">
                <div className="platform-card">
                  <span className="platform-icon">📊</span>
                  <span>Audit NIS2</span>
                </div>
                <div className="platform-card">
                  <span className="platform-icon">📚</span>
                  <span>Formations</span>
                </div>
                <div className="platform-card">
                  <span className="platform-icon">📋</span>
                  <span>Documents</span>
                </div>
                <div className="platform-card">
                  <span className="platform-icon">🎯</span>
                  <span>Plan d'action</span>
                </div>
                <div className="platform-card">
                  <span className="platform-icon">🏛️</span>
                  <span>Déclaration ANSSI</span>
                </div>
                <div className="platform-card">
                  <span className="platform-icon">💰</span>
                  <span>Aides État</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOTRE SOLUTION */}
      <section className="our-solution" id="solutions">
        <div className="section-header-center">
          <span className="section-badge">Rencontrez Votre Futur Partenaire</span>
          <h2>La Solution Complète Pour Votre Conformité NIS2</h2>
        </div>

        <div className="solution-grid">
          <div className="solution-card">
            <div className="solution-icon">
              <img src="/icon-audit.svg" alt="Audit" style={{width: '80px', height: '80px'}} />
            </div>
            <h3>Audit Complet Automatisé</h3>
            <p>Notre plateforme analyse votre conformité en 48h et génère automatiquement votre plan de remédiation personnalisé.</p>
            <a href="/audit-nis2" className="solution-link">Découvrir l'audit →</a>
          </div>

          <div className="solution-card featured">
            <div className="solution-icon">
              <img src="/icon-expert.svg" alt="Expert" style={{width: '80px', height: '80px'}} />
            </div>
            <h3>Accompagnement Expert</h3>
            <p>Nos experts certifiés ISO 27001 vous accompagnent de A à Z : audit, formation, déclaration ANSSI, dossier aides.</p>
            <a href="/qui-sommes-nous" className="solution-link">Rencontrer l'équipe →</a>
          </div>

          <div className="solution-card">
            <div className="solution-icon">
              <img src="/icon-formation.svg" alt="Formation" style={{width: '80px', height: '80px'}} />
            </div>
            <h3>Formations Obligatoires</h3>
            <p>Formation des dirigeants (obligatoire NIS2) et sensibilisation collaborateurs. OPCO accepté, plateforme 24/7.</p>
            <a href="/formations" className="solution-link">Voir les formations →</a>
          </div>
        </div>
      </section>

      {/* VIDÉO DÉMO */}
      <section className="video-demo">
        <div className="video-intro">
          <h2>Découvrez Comment Cyber Solférino Simplifie Votre Conformité</h2>
          <p>3 minutes pour comprendre notre méthode et notre plateforme</p>
        </div>

        <div className="video-player">
          {!showVideo ? (
            <div className="video-thumbnail" onClick={() => setShowVideo(true)}>
              <img src="/video-thumbnail.jpg" alt="Présentation Cyber Solférino" />
              <div className="play-button">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="40" r="40" fill="white" fillOpacity="0.9"/>
                  <path d="M32 26L54 40L32 54V26Z" fill="#1E3A8A"/>
                </svg>
              </div>
            </div>
          ) : (
            <iframe 
              src="https://www.youtube.com/embed/461tWBUzrY8?autoplay=1"
              title="Cyber Solférino - Présentation" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen>
            </iframe>
          )}
        </div>
      </section>

      {/* COMMENT ÇA MARCHE */}
      <section className="how-it-works" id="fonctionnement">
        <div className="section-header-center">
          <span className="section-badge">Comment Ça Marche</span>
          <h2>Obtenez de Meilleurs Résultats, Sans Augmenter Vos Effectifs</h2>
        </div>

        <div className="steps-container">
          {/* STEP 1 */}
          <div className="step-block">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Auto-Évaluation en Ligne</h3>
              <p>Répondez à notre questionnaire intelligent qui s'adapte à votre secteur et votre taille. Résultat immédiat avec score de conformité.</p>
            </div>
            <div className="step-visual">
              <img src="/step-1-auto-evaluation.png" alt="Auto-évaluation" />
            </div>
          </div>

          {/* STEP 2 */}
          <div className="step-block reverse">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Validation Expert</h3>
              <p>Nos experts certifiés ISO 27001 analysent vos résultats, identifient les écarts critiques et priorisent les actions selon vos risques.</p>
            </div>
            <div className="step-visual">
              <img src="/step-2-expert-validation.png" alt="Validation expert" />
            </div>
          </div>

          {/* STEP 3 */}
          <div className="step-block">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Plan de Remédiation</h3>
              <p>Recevez votre roadmap personnalisée avec timeline, budget prévisionnel et dossier d'aides de l'État (jusqu'à 70%).</p>
            </div>
            <div className="step-visual">
              <img src="/step-3-remediation-plan.png" alt="Plan de remédiation" />
            </div>
          </div>

          {/* STEP 4 */}
          <div className="step-block reverse">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Formation Obligatoire</h3>
              <p>Formez vos dirigeants (obligation NIS2) et sensibilisez vos collaborateurs. MOOC 24/7 ou sessions sur site.</p>
            </div>
            <div className="step-visual">
              <img src="/step-4-formation.png" alt="Formation" />
            </div>
          </div>

          {/* STEP 5 */}
          <div className="step-block">
            <div className="step-number">5</div>
            <div className="step-content">
              <h3>Déclaration ANSSI</h3>
              <p>Nous gérons votre enregistrement sur MonEspaceNIS2 et constituons votre dossier de conformité officiel.</p>
            </div>
            <div className="step-visual">
              <img src="/step-5-declaration-anssi.png" alt="Déclaration ANSSI" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES TABS */}
      <section className="features-tabs">
        <div className="section-header-center">
          <span className="section-badge">Fonctionnalités</span>
          <h2>Innovation À Chaque Étape Du Cycle de Conformité</h2>
          <p>Consolidez et automatisez votre conformité NIS2 avec notre plateforme riche en fonctionnalités.</p>
        </div>

        <div className="tabs-container">
          <div className="tabs-nav">
            <button className="tab-btn active">Audit Automatisé</button>
            <button className="tab-btn">Plan de Remédiation</button>
            <button className="tab-btn">Formations OPCO</button>
            <button className="tab-btn">Déclaration ANSSI</button>
            <button className="tab-btn">Dossier Aides État</button>
            <button className="tab-btn">Suivi Continu</button>
          </div>

          <div className="tab-content active">
            <div className="tab-visual">
              <img src="/feature-audit-automated.png" alt="Audit automatisé" />
            </div>
            <div className="tab-description">
              <h3>Audit NIS2 Complet en 48H</h3>
              <p>
                Notre plateforme intelligente analyse votre conformité selon les 10 mesures de sécurité NIS2 
                et génère automatiquement votre rapport détaillé. Plus de 150 critères analysés, priorisés par niveau de risque.
              </p>
              <a href="/audit-nis2" className="btn-feature">Démarrer l'audit →</a>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="section-header-center">
          <span className="section-badge">Témoignages</span>
          <h2>Ce Que Nos Clients Aiment Chez Cyber Solférino</h2>
        </div>

        <div className="testimonials-grid">
          <div className="testimonial-card featured">
            <div className="testimonial-header">
              <img src="/client-avatar-1.jpg" alt="Client" className="testimonial-avatar" />
              <div className="testimonial-author">
                <strong>Sophie Durand</strong>
                <span>Directrice Générale, PME Industrie</span>
              </div>
            </div>
            <p className="testimonial-text">
              "Nous avons économisé 6 mois de travail et 40K€ grâce à Cyber Solférino. 
              L'accompagnement était impeccable, de l'audit initial à la déclaration ANSSI."
            </p>
            <div className="testimonial-stats">
              <div className="stat">
                <strong>98%</strong>
                <span>Conformité atteinte</span>
              </div>
              <div className="stat">
                <strong>12K€</strong>
                <span>Aides récupérées</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-header">
              <img src="/client-avatar-2.jpg" alt="Client" className="testimonial-avatar" />
              <div className="testimonial-author">
                <strong>Marc Lefebvre</strong>
                <span>DSI, ETI Santé</span>
              </div>
            </div>
            <p className="testimonial-text">
              "Enfin un acteur qui parle notre langue ! Pas de jargon technique incompréhensible, 
              juste des actions concrètes et un suivi au top."
            </p>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-header">
              <img src="/client-avatar-3.jpg" alt="Client" className="testimonial-avatar" />
              <div className="testimonial-author">
                <strong>Anne-Marie Petit</strong>
                <span>CEO, Startup Fintech</span>
              </div>
            </div>
            <p className="testimonial-text">
              "Cyber Solférino nous a permis de décrocher des contrats avec de grands comptes 
              qui exigeaient une certification de conformité NIS2."
            </p>
          </div>
        </div>

        <div className="clients-logos">
          <p>Ils nous font confiance :</p>
          <div className="logos-strip">
            <img src="/client-logo-1.png" alt="Client" />
            <img src="/client-logo-2.png" alt="Client" />
            <img src="/client-logo-3.png" alt="Client" />
            <img src="/client-logo-4.png" alt="Client" />
            <img src="/client-logo-5.png" alt="Client" />
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing" id="pricing">
        <div className="section-header-center">
          <span className="section-badge">Tarifs Transparents</span>
          <h2>Choisissez L'Offre Adaptée À Votre Maturité Cyber</h2>
          <p>3 formules, de l'auto-évaluation à l'accompagnement complet. Paiement unique, pas d'abonnement.</p>
        </div>

        <div className="pricing-grid">
          {/* ESSENTIELLE */}
          <div className="price-card">
            <div className="price-header">
              <h3>Essentielle</h3>
              <div className="price">3 490€</div>
              <div className="price-sub">HT • Paiement unique</div>
            </div>
            <p className="price-ideal">Idéal pour : PME cherchant à évaluer leur positionnement</p>
            <ul className="price-features">
              <li>✓ Audit cyber NIS2 complet</li>
              <li>✓ Résultat immédiat en ligne</li>
              <li>✓ Score de conformité détaillé</li>
              <li>✓ Recommandations prioritaires</li>
              <li>✓ Support par email</li>
            </ul>
            <button className="btn-price">Démarrer l'audit</button>
          </div>

          {/* SÉRÉNITÉ */}
          <div className="price-card featured">
            <div className="price-badge">⭐ POPULAIRE</div>
            <div className="price-header">
              <h3>Sérénité</h3>
              <div className="price">7 990€</div>
              <div className="price-sub">HT • Paiement unique</div>
            </div>
            <p className="price-ideal">Idéal pour : Entreprises visant la conformité NIS2</p>
            <ul className="price-features">
              <li>✓ Audit cyber NIS2 complet</li>
              <li>✓ Rapport validé par experts</li>
              <li>✓ Analyse écarts de conformité</li>
              <li>✓ Plan de remédiation détaillé</li>
              <li>✓ Restitution avec expert (1h visio)</li>
              <li>✓ Accès plateforme 6 mois</li>
              <li>✓ Délai de livraison : 48H</li>
            </ul>
            <a href="https://calendly.com/nis2conformite/30min" target="_blank" rel="noopener noreferrer" className="btn-price btn-price-primary">
              Prendre rendez-vous
            </a>
          </div>

          {/* EXPERTISE */}
          <div className="price-card">
            <div className="price-header">
              <h3>Expertise</h3>
              <div className="price">14 900€</div>
              <div className="price-sub">HT • Paiement unique</div>
            </div>
            <p className="price-ideal">Idéal pour : ETI et secteurs critiques</p>
            <ul className="price-features">
              <li>✓ Tout de l'offre Sérénité</li>
              <li className="plus">+ Entretien préalable expert</li>
              <li className="plus">+ Roadmap personnalisée</li>
              <li className="plus">+ Enregistrement ANSSI</li>
              <li className="plus">+ Dossier aides d'État</li>
              <li className="plus">+ Accès plateforme 12 mois</li>
              <li className="plus">+ MAJ évolutions législatives</li>
            </ul>
            <a href="https://calendly.com/nis2conformite/30min" target="_blank" rel="noopener noreferrer" className="btn-price">
              Prendre rendez-vous
            </a>
          </div>
        </div>

        <div className="pricing-footer">
          <p>💡 <strong>Jusqu'à 70% d'aides de l'État</strong> • Financement OPCO • Subventions France Num, BPI, Régions</p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="cta-content">
          <h2>Prêt À Sécuriser Votre Conformité NIS2 ?</h2>
          <p>
            Notre équipe d'experts certifiés ISO 27001 est équipée des meilleurs outils pour automatiser 
            votre conformité, vous libérant du temps pour vous concentrer sur votre cœur de métier.
          </p>
          <a href="https://calendly.com/nis2conformite/30min" target="_blank" rel="noopener noreferrer" className="btn-cta-final">
            Réserver un audit gratuit
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column">
            <h4>Solutions</h4>
            <a href="/audit-nis2">Audit NIS2</a>
            <a href="/formations">Formations</a>
            <a href="/offres-complementaires">Services complémentaires</a>
            <a href="/accompagnement">Accompagnement</a>
          </div>

          <div className="footer-column">
            <h4>Ressources</h4>
            <a href="/comprendre-nis2">Comprendre NIS2</a>
            <a href="/blog">Blog</a>
            <a href="/faq">FAQ</a>
            <a href="https://cyber.gouv.fr" target="_blank">ANSSI</a>
          </div>

          <div className="footer-column">
            <h4>Entreprise</h4>
            <a href="/qui-sommes-nous">Qui sommes-nous ?</a>
            <a href="/contact">Contact</a>
            <a href="/mentions-legales">Mentions légales</a>
            <a href="/confidentialite">Confidentialité</a>
          </div>

          <div className="footer-column">
            <div className="footer-logo">
              <span>Cyber Solférino</span>
            </div>
            <p className="footer-tagline">
              © 2025 Cyber Solférino. Tous droits réservés.
            </p>
            <div className="footer-certifs">
              <img src="/logo_anssi.png" alt="ANSSI" />
              <img src="/iso_27001_02-1024x704.png" alt="ISO 27001" />
            </div>
          </div>
        </div>
      </footer>

      {/* STYLES */}
      <style jsx>{`
        /* GLOBAL RESET */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          background: #FFFFFF;
          color: #0F172A;
          line-height: 1.6;
        }

        /* NAVIGATION */
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid #E2E8F0;
          z-index: 1000;
          padding: 16px 0;
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-text {
          font-size: 24px;
          font-weight: 900;
          color: #1E3A8A;
          text-decoration: none;
        }

        .nav-links {
          display: flex;
          gap: 32px;
          align-items: center;
        }

        .nav-links a {
          font-size: 15px;
          font-weight: 600;
          color: #475569;
          text-decoration: none;
          transition: color 0.2s;
        }

        .nav-links a:hover {
          color: #1E3A8A;
        }

        .btn-nav-primary {
          background: #1E3A8A;
          color: white !important;
          padding: 10px 24px;
          border-radius: 8px;
          transition: all 0.3s;
        }

        .btn-nav-primary:hover {
          background: #1E40AF;
          transform: translateY(-2px);
        }

        /* HERO */
        .hero {
          max-width: 1400px;
          margin: 0 auto;
          padding: 140px 40px 80px;
          text-align: center;
        }

        .hero-badge {
          display: inline-block;
          background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%);
          color: #1E3A8A;
          padding: 8px 20px;
          border-radius: 24px;
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 32px;
          border: 1px solid #BFDBFE;
        }

        .hero-title {
          font-size: 64px;
          font-weight: 900;
          color: #0F172A;
          line-height: 1.1;
          margin-bottom: 24px;
          letter-spacing: -1px;
        }

        .hero-subtitle {
          font-size: 20px;
          color: #64748B;
          line-height: 1.6;
          max-width: 800px;
          margin: 0 auto 40px;
        }

        .hero-cta {
          display: flex;
          gap: 16px;
          justify-content: center;
          margin-bottom: 60px;
        }

        .btn-hero-primary {
          background: #1E3A8A;
          color: white;
          padding: 16px 36px;
          border-radius: 12px;
          font-size: 17px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s;
          box-shadow: 0 4px 16px rgba(30, 58, 138, 0.25);
        }

        .btn-hero-primary:hover {
          background: #1E40AF;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(30, 58, 138, 0.35);
        }

        .btn-hero-secondary {
          background: white;
          color: #1E3A8A;
          padding: 16px 36px;
          border-radius: 12px;
          font-size: 17px;
          font-weight: 700;
          text-decoration: none;
          border: 2px solid #1E3A8A;
          transition: all 0.3s;
        }

        .btn-hero-secondary:hover {
          background: #F7F9FC;
        }

        .hero-image {
          max-width: 1200px;
          margin: 0 auto;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        .hero-image img {
          width: 100%;
          height: auto;
          display: block;
        }

        /* BEFORE/AFTER */
        .before-after {
          max-width: 1400px;
          margin: 120px auto;
          padding: 0 40px;
        }

        .section-header-center {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-badge {
          display: inline-block;
          background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%);
          color: #1E3A8A;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 800;
          margin-bottom: 20px;
          border: 1px solid #BFDBFE;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .section-header-center h2 {
          font-size: 48px;
          font-weight: 900;
          color: #0F172A;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .section-header-center p {
          font-size: 18px;
          color: #64748B;
          max-width: 700px;
          margin: 0 auto;
        }

        .comparison-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 60px;
        }

        .comparison-side h3 {
          font-size: 28px;
          font-weight: 800;
          color: #0F172A;
          margin-bottom: 32px;
          text-align: center;
        }

        .comparison-visual {
          background: white;
          border: 2px solid #E2E8F0;
          border-radius: 20px;
          padding: 40px;
          min-height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .chaos-tools {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .tool-bubble {
          background: #F1F5F9;
          padding: 16px 20px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 600;
          color: #64748B;
          text-align: center;
          border: 1px dashed #CBD5E1;
        }

        .unified-platform {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          width: 100%;
        }

        .platform-card {
          background: linear-gradient(135deg, #1E3A8A 0%, #1E40AF 100%);
          color: white;
          padding: 20px;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 700;
          box-shadow: 0 4px 12px rgba(30, 58, 138, 0.3);
        }

        .platform-icon {
          font-size: 28px;
        }

        /* OUR SOLUTION */
        .our-solution {
          max-width: 1400px;
          margin: 120px auto;
          padding: 0 40px;
        }

        .solution-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        .solution-card {
          background: white;
          border: 2px solid #E2E8F0;
          border-radius: 20px;
          padding: 40px 32px;
          text-align: center;
          transition: all 0.3s;
        }

        .solution-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.1);
          border-color: #1E3A8A;
        }

        .solution-card.featured {
          border-color: #1E3A8A;
          border-width: 3px;
          background: linear-gradient(135deg, #F7F9FC 0%, #EFF6FF 100%);
        }

        .solution-icon {
          margin-bottom: 24px;
        }

        .solution-card h3 {
          font-size: 24px;
          font-weight: 800;
          color: #0F172A;
          margin-bottom: 16px;
        }

        .solution-card p {
          font-size: 16px;
          color: #64748B;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .solution-link {
          font-size: 16px;
          color: #1E3A8A;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.2s;
        }

        .solution-link:hover {
          text-decoration: underline;
        }

        /* VIDEO DEMO */
        .video-demo {
          max-width: 1200px;
          margin: 120px auto;
          padding: 0 40px;
        }

        .video-intro {
          text-align: center;
          margin-bottom: 48px;
        }

        .video-intro h2 {
          font-size: 40px;
          font-weight: 900;
          color: #0F172A;
          margin-bottom: 16px;
        }

        .video-intro p {
          font-size: 18px;
          color: #64748B;
        }

        .video-player {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        .video-player iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
        }

        .video-thumbnail {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          cursor: pointer;
          background: #000;
        }

        .video-thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .play-button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          transition: all 0.3s;
        }

        .video-thumbnail:hover .play-button {
          transform: translate(-50%, -50%) scale(1.1);
        }

        /* HOW IT WORKS */
        .how-it-works {
          max-width: 1200px;
          margin: 120px auto;
          padding: 0 40px;
        }

        .steps-container {
          margin-top: 80px;
        }

        .step-block {
          display: grid;
          grid-template-columns: 80px 1fr 1fr;
          gap: 40px;
          align-items: center;
          margin-bottom: 100px;
        }

        .step-block.reverse {
          grid-template-columns: 80px 1fr 1fr;
        }

        .step-block.reverse .step-content {
          order: 3;
        }

        .step-block.reverse .step-visual {
          order: 2;
        }

        .step-number {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, #1E3A8A 0%, #1E40AF 100%);
          color: white;
          font-size: 32px;
          font-weight: 900;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(30, 58, 138, 0.3);
        }

        .step-content h3 {
          font-size: 28px;
          font-weight: 800;
          color: #0F172A;
          margin-bottom: 16px;
        }

        .step-content p {
          font-size: 17px;
          color: #64748B;
          line-height: 1.7;
        }

        .step-visual {
          background: #F7F9FC;
          border-radius: 16px;
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
        .features-tabs {
          max-width: 1400px;
          margin: 120px auto;
          padding: 0 40px;
        }

        .tabs-container {
          margin-top: 60px;
        }

        .tabs-nav {
          display: flex;
          gap: 12px;
          justify-content: center;
          margin-bottom: 60px;
          flex-wrap: wrap;
        }

        .tab-btn {
          background: white;
          color: #64748B;
          border: 2px solid #E2E8F0;
          padding: 12px 24px;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s;
        }

        .tab-btn:hover {
          border-color: #1E3A8A;
          color: #1E3A8A;
        }

        .tab-btn.active {
          background: #1E3A8A;
          color: white;
          border-color: #1E3A8A;
        }

        .tab-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .tab-visual {
          background: #F7F9FC;
          border-radius: 20px;
          padding: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tab-visual img {
          max-width: 100%;
          height: auto;
        }

        .tab-description h3 {
          font-size: 32px;
          font-weight: 900;
          color: #0F172A;
          margin-bottom: 20px;
        }

        .tab-description p {
          font-size: 17px;
          color: #64748B;
          line-height: 1.7;
          margin-bottom: 32px;
        }

        .btn-feature {
          display: inline-block;
          background: #1E3A8A;
          color: white;
          padding: 14px 32px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s;
        }

        .btn-feature:hover {
          background: #1E40AF;
          transform: translateY(-2px);
        }

        /* TESTIMONIALS */
        .testimonials {
          max-width: 1400px;
          margin: 120px auto;
          padding: 0 40px;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin-bottom: 60px;
        }

        .testimonial-card {
          background: white;
          border: 2px solid #E2E8F0;
          border-radius: 20px;
          padding: 32px;
          transition: all 0.3s;
        }

        .testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.1);
          border-color: #1E3A8A;
        }

        .testimonial-card.featured {
          border-color: #1E3A8A;
          border-width: 3px;
          background: linear-gradient(135deg, #F7F9FC 0%, #EFF6FF 100%);
        }

        .testimonial-header {
          display: flex;
          gap: 16px;
          align-items: center;
          margin-bottom: 20px;
        }

        .testimonial-avatar {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          object-fit: cover;
        }

        .testimonial-author strong {
          display: block;
          font-size: 16px;
          font-weight: 800;
          color: #0F172A;
          margin-bottom: 4px;
        }

        .testimonial-author span {
          font-size: 14px;
          color: #64748B;
        }

        .testimonial-text {
          font-size: 16px;
          color: #475569;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .testimonial-stats {
          display: flex;
          gap: 24px;
          padding-top: 20px;
          border-top: 1px solid #E2E8F0;
        }

        .stat strong {
          display: block;
          font-size: 24px;
          font-weight: 900;
          color: #1E3A8A;
          margin-bottom: 4px;
        }

        .stat span {
          font-size: 13px;
          color: #64748B;
        }

        .clients-logos {
          text-align: center;
        }

        .clients-logos p {
          font-size: 14px;
          color: #64748B;
          font-weight: 600;
          margin-bottom: 32px;
        }

        .logos-strip {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 48px;
          flex-wrap: wrap;
        }

        .logos-strip img {
          height: 40px;
          width: auto;
          opacity: 0.6;
          filter: grayscale(100%);
          transition: all 0.3s;
        }

        .logos-strip img:hover {
          opacity: 1;
          filter: grayscale(0%);
        }

        /* PRICING */
        .pricing {
          max-width: 1400px;
          margin: 120px auto;
          padding: 0 40px;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin-bottom: 40px;
        }

        .price-card {
          background: white;
          border: 2px solid #E2E8F0;
          border-radius: 20px;
          padding: 40px 32px;
          transition: all 0.3s;
          position: relative;
        }

        .price-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.1);
        }

        .price-card.featured {
          border-color: #1E3A8A;
          border-width: 4px;
          background: linear-gradient(135deg, #F7F9FC 0%, #EFF6FF 100%);
        }

        .price-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: #FFAB00;
          color: #091E42;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 800;
        }

        .price-header {
          text-align: center;
          margin-bottom: 24px;
          padding-bottom: 24px;
          border-bottom: 1px solid #E2E8F0;
        }

        .price-header h3 {
          font-size: 24px;
          font-weight: 800;
          color: #0F172A;
          margin-bottom: 16px;
        }

        .price {
          font-size: 48px;
          font-weight: 900;
          color: #1E3A8A;
          line-height: 1;
          margin-bottom: 8px;
        }

        .price-sub {
          font-size: 14px;
          color: #64748B;
          font-weight: 600;
        }

        .price-ideal {
          font-size: 14px;
          color: #475569;
          background: #F1F5F9;
          padding: 12px 16px;
          border-radius: 10px;
          margin-bottom: 24px;
          font-weight: 600;
        }

        .price-features {
          list-style: none;
          margin-bottom: 32px;
        }

        .price-features li {
          padding: 10px 0;
          font-size: 15px;
          color: #475569;
          border-bottom: 1px solid #F1F5F9;
        }

        .price-features li:last-child {
          border-bottom: none;
        }

        .price-features li.plus {
          color: #1E3A8A;
          font-weight: 600;
        }

        .btn-price {
          width: 100%;
          background: white;
          color: #1E3A8A;
          border: 2px solid #1E3A8A;
          padding: 14px 32px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s;
          text-decoration: none;
          display: block;
          text-align: center;
        }

        .btn-price:hover {
          background: #1E3A8A;
          color: white;
        }

        .btn-price-primary {
          background: #1E3A8A;
          color: white;
        }

        .btn-price-primary:hover {
          background: #1E40AF;
        }

        .pricing-footer {
          text-align: center;
          background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%);
          padding: 24px 32px;
          border-radius: 16px;
          border: 2px solid #BFDBFE;
        }

        .pricing-footer p {
          font-size: 16px;
          color: #1E40AF;
          margin: 0;
        }

        /* FINAL CTA */
        .final-cta {
          max-width: 1200px;
          margin: 120px auto 80px;
          padding: 80px 60px;
          background: linear-gradient(135deg, #1E3A8A 0%, #1E40AF 100%);
          border-radius: 24px;
          text-align: center;
          box-shadow: 0 20px 60px rgba(30, 58, 138, 0.3);
        }

        .cta-content h2 {
          font-size: 48px;
          font-weight: 900;
          color: white;
          margin-bottom: 20px;
        }

        .cta-content p {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.7;
          max-width: 700px;
          margin: 0 auto 40px;
        }

        .btn-cta-final {
          display: inline-block;
          background: white;
          color: #1E3A8A;
          padding: 18px 48px;
          border-radius: 14px;
          font-size: 18px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s;
          box-shadow: 0 8px 24px rgba(255, 255, 255, 0.3);
        }

        .btn-cta-final:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(255, 255, 255, 0.4);
        }

        /* FOOTER */
        .footer {
          background: #0F172A;
          color: white;
          padding: 60px 40px 40px;
        }

        .footer-content {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 60px;
        }

        .footer-column h4 {
          font-size: 16px;
          font-weight: 800;
          margin-bottom: 20px;
          color: white;
        }

        .footer-column a {
          display: block;
          font-size: 15px;
          color: #94A3B8;
          text-decoration: none;
          margin-bottom: 12px;
          transition: color 0.2s;
        }

        .footer-column a:hover {
          color: white;
        }

        .footer-logo {
          font-size: 24px;
          font-weight: 900;
          color: white;
          margin-bottom: 16px;
        }

        .footer-tagline {
          font-size: 14px;
          color: #94A3B8;
          margin-bottom: 24px;
        }

        .footer-certifs {
          display: flex;
          gap: 16px;
          align-items: center;
        }

        .footer-certifs img {
          height: 40px;
          width: auto;
          opacity: 0.7;
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .comparison-container,
          .solution-grid,
          .testimonials-grid,
          .pricing-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .step-block {
            grid-template-columns: 1fr;
          }

          .step-block.reverse .step-content,
          .step-block.reverse .step-visual {
            order: initial;
          }

          .tab-content {
            grid-template-columns: 1fr;
          }

          .footer-content {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .hero-title {
            font-size: 40px;
          }

          .hero-cta {
            flex-direction: column;
          }

          .section-header-center h2 {
            font-size: 32px;
          }

          .cta-content h2 {
            font-size: 32px;
          }

          .footer-content {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
