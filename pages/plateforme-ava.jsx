import { useState } from 'react';
import Head from 'next/head';
import MenuBurger from '../components/MenuBurger';
import { CONTACT_INFO } from '../utils/constants';

export default function PlateformeAVA() {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [email, setEmail] = useState('');

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      window.location.href = `${CONTACT_INFO.calendly}?email=${encodeURIComponent(email)}`;
    }
  };

  const capabilities = [
    {
      icon: '📄',
      title: 'Analyse vos documents en temps réel',
      description: 'Uploadez votre PSSI, PCA ou politique de sécurité. AVA le scanne en 30 secondes et vous donne la liste précise des gaps vs NIS2.',
      features: [
        'Détection automatique des non-conformités',
        'Suggestions de corrections pré-rédigées',
        'Export PDF annoté pour vos équipes'
      ]
    },
    {
      icon: '💬',
      title: 'Répond à vos questions - sans limite',
      description: 'Chat conversationnel contextuel formé sur NIS2, ISO 27001, ANSSI, RGPD. AVA comprend votre contexte et vos contraintes métier.',
      features: [
        'Réponses sourcées avec références réglementaires',
        'Exemples concrets adaptés à votre secteur',
        'Historique de conversations sauvegardé'
      ]
    },
    {
      icon: '✍️',
      title: 'Génère vos politiques de sécurité',
      description: '"AVA, crée-moi une politique de mots de passe conforme ANSSI." En 2 minutes, vous avez un document prêt à être personnalisé.',
      features: [
        '20+ templates conformes (PSSI, PCA, charte...)',
        'Personnalisation automatique avec vos données',
        'Versioning et suivi des modifications'
      ]
    },
    {
      icon: '🔔',
      title: 'Vous alerte proactivement',
      description: 'AVA surveille vos documents et la réglementation. Si votre PCA date de 18 mois ou qu\'un décret NIS2 est publié, vous êtes alerté.',
      features: [
        'Alertes email/Slack configurables',
        'Dashboard des actions à mener',
        'Priorisation automatique par criticité'
      ]
    },
    {
      icon: '📊',
      title: 'Prépare vos rapports ANSSI',
      description: 'En un clic, générez un rapport de conformité prêt pour l\'ANSSI avec toutes les preuves documentaires nécessaires.',
      features: [
        'Export PDF structuré par exigence NIS2',
        'Annexes automatiques (politiques, logs...)',
        'Timeline des actions menées'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: '149€',
      period: '/mois',
      description: 'Pour TPE et découverte AVA',
      features: [
        { text: 'Chat AVA illimité', included: true },
        { text: 'Analyse de 5 documents/mois', included: true },
        { text: '3 politiques générées/mois', included: true },
        { text: 'Dashboard conformité', included: true },
        { text: 'Alertes réglementaires', included: true },
        { text: 'Audit trimestriel', included: false },
        { text: 'Support prioritaire', included: false }
      ],
      cta: 'Essayer 30 jours gratuit',
      highlighted: false
    },
    {
      name: 'Pro',
      price: '349€',
      period: '/mois',
      description: 'Pour PME exigeantes',
      badge: '⭐ Recommandé',
      features: [
        { text: 'Tout Basic +', included: true },
        { text: 'Analyses illimitées', included: true },
        { text: 'Politiques illimitées', included: true },
        { text: 'Audit trimestriel automatique', included: true },
        { text: 'Support prioritaire (24h)', included: true },
        { text: 'Intégration Slack/Teams', included: true },
        { text: 'Multi-utilisateurs (5)', included: true }
      ],
      cta: 'Essayer 30 jours gratuit',
      highlighted: true
    },
    {
      name: 'Premium',
      price: '499€',
      period: '/mois',
      description: 'Pour ETI et secteurs critiques',
      features: [
        { text: 'Tout Pro +', included: true },
        { text: 'Audit mensuel', included: true },
        { text: 'RSSI dédié (4h/mois)', included: true },
        { text: 'Formation équipe', included: true },
        { text: 'API accès AVA', included: true },
        { text: 'Multi-utilisateurs illimité', included: true },
        { text: 'SLA 99.9%', included: true }
      ],
      cta: 'Essayer 30 jours gratuit',
      highlighted: false
    }
  ];

  const timelineSteps = [
    {
      number: '1',
      title: 'Fine-tuning GPT-4',
      description: 'Entraînement sur 500+ documents ANSSI, guides NIS2, ISO 27001, jurisprudence CNIL'
    },
    {
      number: '2',
      title: 'RAG sur vos données',
      description: 'Indexation de vos documents (PSSI, PCA, politiques) pour réponses contextuelles'
    },
    {
      number: '3',
      title: 'Agents autonomes',
      description: 'AVA prend des décisions (scan proactif, alertes, génération reports) sans intervention'
    },
    {
      number: '4',
      title: 'Apprentissage continu',
      description: 'Chaque audit réalisé améliore AVA. Mise à jour temps réel des évolutions réglementaires'
    }
  ];

  return (
    <>
      <Head>
        <title>AVA - Votre RSSI virtuel IA | Cyber Solferino</title>
        <meta name="description" content="AVA est votre RSSI virtuel formé sur 1000+ audits NIS2. Assistant IA qui pilote votre conformité 24/7, génère vos politiques et prépare vos rapports ANSSI." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.cybersolferino.fr/plateforme-ava" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AVA - Votre RSSI virtuel IA | Cyber Solferino" />
        <meta property="og:description" content="AVA est votre RSSI virtuel formé sur 1000+ audits NIS2. Assistant IA qui pilote votre conformité 24/7." />
        <meta property="og:url" content="https://www.cybersolferino.fr/plateforme-ava" />
      </Head>

      {/* BANDEAU ANNONCE */}
      <div className="announcement-bar-ava">
        🚀 NOUVEAU : Essayez AVA gratuitement pendant 30 jours
        <a href="#essai" className="announcement-bar-link">Démarrer l'essai →</a>
      </div>

      {/* HEADER */}
      <header className="header-artisan-sticky">
        <div className="header-container-modern">
          <a href="/" className="header-logo-link">
            <img src="/logo.png" alt="NIS2 Conformité" className="header-logo-modern" />
          </a>

          <nav className="header-nav-modern">
            <a href="/plateforme-ava" className="header-nav-link header-nav-link-highlight">Plateforme AVA ⭐</a>
            <a href="/comprendre-nis2" className="header-nav-link">Comprendre NIS2</a>
            <a href="/qui-sommes-nous" className="header-nav-link">Qui sommes-nous</a>
            <a href="/offres-complementaires" className="header-nav-link">Nos tarifs</a>
            <a href="/formations" className="header-nav-link">Formation</a>
            <a href="/ressources" className="header-nav-link">Ressources</a>
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

      {/* HERO SECTION */}
      <section className="hero-ava-page">
        <div className="content-container">
          <div className="hero-ava-content">
            <div className="badge-ava-ai">✨ Intelligence Artificielle NIS2-Native</div>

            <h1 className="hero-ava-title">
              AVA : Votre RSSI virtuel<br />Formé sur 1000+ audits NIS2
            </h1>

            <p className="hero-ava-lead">
              Contrairement aux chatbots génériques, AVA est un agent IA autonome spécialisé en cybersécurité. Il comprend NIS2, ISO 27001, ANSSI et pilote votre conformité en continu.
            </p>

            <div className="hero-ava-cta">
              <a href="#essai" className="btn-ava-primary btn-large">Essayer AVA 30 jours gratuit</a>
              <a href="#demo" className="btn-ava-secondary btn-large">▶ Voir AVA en action (30s)</a>
            </div>

            <div className="hero-ava-trust">
              <span>✓ Formé sur 500+ documents ANSSI</span>
              <span>✓ 1000+ audits NIS2 analysés</span>
              <span>✓ Mis à jour en temps réel</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION CAPACITÉS AVA */}
      <section className="ava-capabilities-section">
        <div className="content-container">
          <h2 className="section-title-artisan" style={{textAlign: 'center', marginBottom: '24px'}}>
            Ce qu'AVA fait pour vous - <span className="highlight">24/7</span>
          </h2>
          <p className="section-subtitle-artisan" style={{textAlign: 'center', marginBottom: '48px'}}>
            Cliquez sur chaque capacité pour voir les détails
          </p>

          <div className="accordion-ava">
            {capabilities.map((item, index) => (
              <div
                key={index}
                className={`accordion-item-ava ${openAccordion === index ? 'active' : ''}`}
              >
                <div
                  className="accordion-header-ava"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3>
                    <span className="accordion-icon">{item.icon}</span>
                    {item.title}
                  </h3>
                  <span className={`accordion-toggle ${openAccordion === index ? 'open' : ''}`}>
                    {openAccordion === index ? '−' : '+'}
                  </span>
                </div>
                <div className={`accordion-content-ava ${openAccordion === index ? 'visible' : ''}`}>
                  <p className="accordion-description">{item.description}</p>
                  <ul className="accordion-features">
                    {item.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING AVA SAAS */}
      <section className="pricing-ava-section">
        <div className="content-container">
          <h2 className="section-title-artisan" style={{textAlign: 'center', marginBottom: '16px'}}>
            Tarifs Plateforme AVA - <span className="highlight">Transparents</span>
          </h2>
          <p className="section-subtitle-artisan" style={{textAlign: 'center', marginBottom: '48px'}}>
            Tous les plans incluent 30 jours d'essai gratuit - Sans engagement
          </p>

          <div className="pricing-ava-grid">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`pricing-ava-card ${plan.highlighted ? 'highlighted' : ''}`}
              >
                {plan.badge && <div className="pricing-badge">{plan.badge}</div>}

                <div className="pricing-plan-name">{plan.name}</div>
                <div className="pricing-plan-price">
                  {plan.price}<span className="pricing-period">{plan.period}</span>
                </div>
                <div className="pricing-plan-description">{plan.description}</div>

                <ul className="pricing-plan-features">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className={feature.included ? 'included' : 'not-included'}>
                      <span className="feature-icon">{feature.included ? '✓' : '✗'}</span>
                      {feature.text}
                    </li>
                  ))}
                </ul>

                <a
                  href="#essai"
                  className={plan.highlighted ? 'btn-ava-primary btn-full' : 'btn-ava-outline btn-full'}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          <p className="pricing-note-ava">
            💡 Tous nos audits (Essentielle, Sérénité, Expertise) incluent 1 an d'abonnement AVA Pro offert.
          </p>
        </div>
      </section>

      {/* SECTION TECHNIQUE */}
      <section className="how-it-works-section">
        <div className="content-container">
          <h2 className="section-title-artisan" style={{textAlign: 'center', marginBottom: '16px'}}>
            Comment AVA devient expert en <span className="highlight">NIS2</span> ?
          </h2>
          <p className="section-subtitle-artisan" style={{textAlign: 'center', marginBottom: '48px'}}>
            La technologie derrière votre RSSI virtuel
          </p>

          <div className="timeline-horizontal-ava">
            {timelineSteps.map((step, index) => (
              <div key={index} className="timeline-step-ava">
                <div className="step-number-ava">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>

          <div className="tech-callout-ava">
            <p>
              <strong>🔒 Sécurité & Confidentialité :</strong> Vos données sont chiffrées (AES-256),
              hébergées en France (HDS), et jamais utilisées pour entraîner des modèles tiers. AVA respecte le RGPD.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-final-ava-section" id="essai">
        <div className="content-container">
          <h2 className="cta-final-title">
            Prêt à avoir votre RSSI virtuel 24/7 ?
          </h2>
          <p className="cta-final-subtitle">
            Essayez AVA gratuitement pendant 30 jours. Sans engagement, sans carte bancaire.
          </p>

          <form className="trial-form-ava" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Votre email professionnel"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn-ava-primary btn-large">
              Démarrer mon essai gratuit
            </button>
          </form>

          <p className="form-note-ava">
            ✓ Accès immédiat • ✓ Configuration en 5 min • ✓ Annulation en 1 clic
          </p>
        </div>
      </section>

      {/* FOOTER */}
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
              <li><a href="/plateforme-ava">Plateforme AVA</a></li>
              <li><a href="/#pricing">Audit NIS2</a></li>
              <li><a href="/formations">Formations</a></li>
              <li><a href="/offres-complementaires">Services complémentaires</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Entreprise</h4>
            <ul className="footer-links-list">
              <li><a href="/qui-sommes-nous">Qui sommes-nous ?</a></li>
              <li><a href="/#expertise">Notre expertise</a></li>
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
                <a href="mailto:contact@cyber-solferino.com">
                  contact@cyber-solferino.com
                </a>
              </li>
              <li><a href="tel:+33649432092">+33 (0) 6 49 43 20 92</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-modern">
          <div className="footer-bottom-content">
            <p className="footer-copyright">© 2026 Cyber Solferino. Tous droits réservés</p>
            <div className="footer-legal-links">
              <a href="/mentions-legales">Mentions légales</a>
              <a href="/politique-confidentialite">Politique de confidentialité</a>
              <a href="/cgu">CGU</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
