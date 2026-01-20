import { useState } from 'react';
import Head from 'next/head';
import { CONTACT_INFO } from '../utils/constants';
import MenuBurger from '../components/MenuBurger';

export default function OffresServices() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqItems = [
    {
      question: "Comment bénéficier des aides de l'État ?",
      answer: "Plusieurs dispositifs permettent de financer jusqu'à 70% de votre mise en conformité NIS2. Les principaux sont France Num (jusqu'à 12 000€), les aides régionales, et le crédit d'impôt innovation. Avec notre offre Expertise, nous constituons votre dossier de demande d'aides et vous accompagnons dans toutes les démarches administratives."
    },
    {
      question: "Puis-je payer en plusieurs fois ?",
      answer: "Oui, nous proposons des facilités de paiement pour toutes nos offres. Vous pouvez régler en 2, 3 ou 4 fois sans frais. Pour les offres Sérénité et Expertise, un paiement échelonné sur la durée de l'accompagnement est également possible. Contactez-nous pour définir ensemble les modalités adaptées à votre situation."
    },
    {
      question: "Quelle offre choisir pour commencer ?",
      answer: "Le choix dépend de votre maturité cyber actuelle. L'offre Essentielle convient si vous avez déjà une bonne connaissance de votre SI et souhaitez une évaluation rapide. L'offre Sérénité est idéale pour la plupart des PME qui veulent un accompagnement expert avec un plan d'action concret. L'offre Expertise s'adresse aux entreprises ayant besoin d'un suivi complet sur 12 mois."
    },
    {
      question: "Les formations sont-elles finançables par mon OPCO ?",
      answer: "Oui, nos formations sont certifiées Qualiopi et donc éligibles à la prise en charge par votre OPCO. La formation dirigeants NIS2 peut être intégralement financée. Nous nous occupons de toutes les démarches administratives : devis, convention de formation, et facturation directe à votre OPCO si vous le souhaitez."
    },
    {
      question: "Y a-t-il des frais cachés ?",
      answer: "Non, nos prix sont 100% transparents. Le tarif affiché inclut l'ensemble des prestations mentionnées. Aucun frais supplémentaire ne vous sera demandé. Les seuls coûts additionnels éventuels concernent les services complémentaires que vous choisiriez d'ajouter à votre offre de base."
    },
    {
      question: "Proposez-vous des tarifs groupe ?",
      answer: "Oui, nous proposons des tarifs dégressifs pour les fédérations, groupements d'entreprises et réseaux de franchises. À partir de 5 entreprises, bénéficiez de -15% sur l'ensemble des prestations. Contactez-nous pour obtenir un devis personnalisé adapté à votre groupement."
    }
  ];

  const handleStripeCheckout = async () => {
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
  };

  return (
    <>
      <Head>
        <title>Nos Solutions NIS2 | Audits, Formations & Services Complémentaires</title>
        <meta name="description" content="Découvrez nos solutions complètes pour votre mise en conformité NIS2 : audits, formations, modèles de documents et services d'accompagnement. Prix transparents et expertise certifiée." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* HEADER STICKY */}
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

          <MenuBurger />
        </div>
      </header>

      <div className="page-wrapper">
        {/* HERO */}
        <section className="hero-artisan-exact hero-compact">
          <div className="hero-artisan-container">
            <div className="hero-badge-artisan">
              Solutions complètes • Prix transparents • Accompagnement expert
            </div>

            <h1 className="hero-title-artisan">
              Tout pour votre<br />
              <span className="highlight">conformité NIS2</span>
            </h1>

            <p className="hero-subtitle-artisan">
              Des audits complets aux formations en passant par les services complémentaires<br />
              Choisissez la solution adaptée à votre maturité cyber
            </p>
          </div>
        </section>

        {/* OFFRES PRINCIPALES - FORMAT SIMPLIFIÉ */}
        <section className="section-standard">
          <div className="container-lg">
            <div className="section-header-center">
              <h2 className="section-title-lg">
                Nos Audits de Conformité NIS2
              </h2>
              <p className="section-subtitle">
                3 formules d'accompagnement adaptées à votre maturité cyber
              </p>
            </div>

            <div className="grid-offers">
              {/* Offre Essentielle */}
              <div className="card-offer">
                <h3 className="offer-title">
                  Essentielle
                </h3>
                <div className="offer-price">
                  3 490€ <span className="offer-price-suffix">HT</span>
                </div>
                <p className="offer-desc">
                  Auto-évaluation guidée • Résultat immédiat • Score de conformité
                </p>
                <button onClick={handleStripeCheckout} className="btn-artisan btn-artisan-secondary btn-margin-auto">
                  Démarrer l'audit
                </button>
              </div>

              {/* Offre Sérénité (Featured) */}
              <div className="card-offer-featured">
                <div className="badge-popular">
                  ⭐ LE PLUS POPULAIRE
                </div>
                <h3 className="offer-title-mt">
                  Sérénité
                </h3>
                <div className="offer-price">
                  7 990€ <span className="offer-price-suffix">HT</span>
                </div>
                <p className="offer-desc">
                  Audit complet + Expert • Plan de remédiation • Livraison 48H
                </p>
                <a href={CONTACT_INFO.calendly} target="_blank" rel="noopener noreferrer" className="btn-artisan btn-artisan-secondary btn-margin-auto btn-link-center">
                  Prendre RDV
                </a>
              </div>

              {/* Offre Expertise */}
              <div className="card-offer">
                <h3 className="offer-title">
                  Expertise
                </h3>
                <div className="offer-price">
                  14 900€ <span className="offer-price-suffix">HT</span>
                </div>
                <p className="offer-desc">
                  Accompagnement complet • Roadmap personnalisée • 12 mois de suivi
                </p>
                <a href={CONTACT_INFO.calendly} target="_blank" rel="noopener noreferrer" className="btn-artisan btn-artisan-secondary btn-margin-auto btn-link-center">
                  Prendre RDV
                </a>
              </div>
            </div>

            {/* BANNIÈRE AIDES */}
            <div className="aide-etat-banner aide-banner-margins">
              <div className="aide-etat-content">
                <div className="aide-etat-text">
                  <div className="aide-etat-title">
                    Jusqu'à 70% d'aides de l'État • Valable sur toutes nos offres
                  </div>
                  <div className="aide-etat-subtitle">
                    Réduisez le coût de votre mise en conformité NIS2
                  </div>
                </div>
              </div>
              <button onClick={() => alert('Simulateur en cours de développement')} className="btn-simulateur">
                Calculer mes aides
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* TABLEAU COMPARATIF */}
            <div className="card-table">
              <h3 className="table-title">
                Comparatif détaillé des offres
              </h3>
              <div className="table-wrapper">
                <table className="table-compare">
                  <thead>
                    <tr>
                      <th className="th-feature">Fonctionnalités</th>
                      <th className="th-offer-purple">Essentielle<br/><span className="th-price">3 490€</span></th>
                      <th className="th-offer-pink">Sérénité<br/><span className="th-price">7 990€</span></th>
                      <th className="th-offer-purple">Expertise<br/><span className="th-price">14 900€</span></th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: 'Audit cyber NIS2', essential: true, serenity: true, expertise: true },
                      { name: 'Résultat immédiat', essential: true, serenity: false, expertise: false },
                      { name: 'Rapport validé par experts', essential: false, serenity: true, expertise: true },
                      { name: 'Analyse écarts de conformité', essential: false, serenity: true, expertise: true },
                      { name: 'Plan de remédiation détaillé', essential: false, serenity: true, expertise: true },
                      { name: 'Restitution avec expert', essential: false, serenity: true, expertise: true },
                      { name: 'Entretien préalable expert', essential: false, serenity: false, expertise: true },
                      { name: 'Roadmap personnalisée', essential: false, serenity: false, expertise: true },
                      { name: 'Enregistrement ANSSI', essential: false, serenity: false, expertise: true },
                      { name: 'Dossier aides d\'État', essential: false, serenity: false, expertise: true },
                      { name: 'Accès plateforme', essential: '—', serenity: '6 mois', expertise: '12 mois' },
                      { name: 'Délai de livraison', essential: 'Immédiat', serenity: '48H', expertise: '1 mois' }
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'tr-even' : 'tr-odd'}>
                        <td className="td-feature">{row.name}</td>
                        <td className="td-value">
                          {typeof row.essential === 'boolean' ? (
                            row.essential ?
                              <span className="check-circle">✓</span> :
                              <span className="cross-circle">—</span>
                          ) : <span className="td-text">{row.essential}</span>}
                        </td>
                        <td className="td-value">
                          {typeof row.serenity === 'boolean' ? (
                            row.serenity ?
                              <span className="check-circle">✓</span> :
                              <span className="cross-circle">—</span>
                          ) : <span className="td-text">{row.serenity}</span>}
                        </td>
                        <td className="td-value">
                          {typeof row.expertise === 'boolean' ? (
                            row.expertise ?
                              <span className="check-circle">✓</span> :
                              <span className="cross-circle">—</span>
                          ) : <span className="td-text">{row.expertise}</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES COMPLÉMENTAIRES */}
        <section className="section-purple-gradient">
          <div className="container-lg">
            <div className="section-header-center">
              <h2 className="section-title-lg">
                Services Complémentaires
              </h2>
              <p className="section-subtitle">
                Renforcez votre conformité avec nos services additionnels
              </p>
            </div>

            <div className="services-grid-4cols">
              {[
                {
                  title: 'Modèles de documents',
                  price: '99€',
                  period: '/mois',
                  features: ['Templates conformité NIS2', 'Mises à jour régulières', 'Accès illimité', 'Politiques ANSSI']
                },
                {
                  title: 'Formations NIS2',
                  price: '349€',
                  period: '/pers',
                  features: ['Formation dirigeants', 'Prise en charge OPCO', 'Plateforme en ligne', 'Sur site : nous consulter'],
                  badge: 'RECOMMANDÉ'
                },
                {
                  title: 'Montage Subventions',
                  price: '299€',
                  period: '',
                  features: ['Identification aides (70%)', 'Constitution dossiers', 'France Num, BPI, Régions', '12 000€ récupérés / moy.']
                },
                {
                  title: 'Accompagnement incident',
                  price: '99€',
                  period: '/mois',
                  features: ['Déclaration incident', 'Conseil gestion de crise', 'Veille législative', 'Ligne expert dédiée']
                }
              ].map((service, idx) => (
                <div key={idx} className={`service-card-comp value-card-hover ${service.badge ? 'card-service-featured' : 'card-service'}`}>
                  {service.badge && (
                    <div className="badge-service">
                      {service.badge}
                    </div>
                  )}

                  {/* Zone Prix + Titre - hauteur fixe */}
                  <div className={service.badge ? 'service-header-mt' : 'service-header'}>
                    <div className="service-price-box">
                      <div className="service-price-value">
                        {service.price}
                      </div>
                      <div className="service-price-period">
                        {service.period || '\u00A0'}
                      </div>
                    </div>
                    <h3 className="service-title">
                      {service.title}
                    </h3>
                  </div>

                  <ul className="service-features-list">
                    {service.features.map((feature, fidx) => (
                      <li key={fidx} className={fidx < service.features.length - 1 ? 'service-feature-item-border' : 'service-feature-item'}>
                        <span className="check-sm">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href={CONTACT_INFO.calendly} target="_blank" rel="noopener noreferrer" className="btn-artisan btn-artisan-secondary btn-link-sm">
                    En savoir plus
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ TARIFS */}
        <section className="section-standard">
          <div className="container-lg">
            <h2 className="section-title-center">
              Questions fréquentes sur nos tarifs
            </h2>

            <div className="faq-grid-tarifs">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className={`faq-card-tarif ${openFaq === index ? 'faq-card-open' : ''}`}
                  onClick={() => toggleFaq(index)}
                >
                  <div className="faq-question-row">
                    <span className="faq-question-text">{item.question}</span>
                    <span className={`faq-chevron ${openFaq === index ? 'faq-chevron-open' : ''}`}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                  <div className={`faq-answer-wrapper ${openFaq === index ? 'faq-answer-visible' : ''}`}>
                    <p className="faq-answer-text">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="section-cta-gradient">
          <div className="container-md">
            <h2 className="section-title-white">
              Prêt à sécuriser votre conformité NIS2 ?
            </h2>
            <p className="section-subtitle-white">
              Échangez gratuitement avec un expert certifié • Réponse en 24h
            </p>
            <a
              href={CONTACT_INFO.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta-white-lg"
            >
              Réserver un échange gratuit
            </a>
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
      </div>
    </>
  );
}
