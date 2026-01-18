import Head from 'next/head';
import { CONTACT_INFO } from '../utils/constants';
import MenuBurger from '../components/MenuBurger';

export default function OffresServices() {
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
            <img src="/logo.png" alt="Cyber Solferino" className="header-logo-modern" />
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
              Prix transparents • Jusqu'à 70% d'aides • Sans engagement
            </div>

            <h1 className="hero-title-artisan">
              Nos solutions pour votre<br />
              <span className="highlight">conformité NIS2</span>
            </h1>

            <p className="hero-subtitle-artisan">
              Audits, formations, accompagnement : des solutions adaptées à chaque entreprise<br />
              et à chaque budget, avec des prix clairs et sans surprise
            </p>
          </div>
        </section>

        {/* POURQUOI INVESTIR - COMPARAISON COÛTS */}
        <section className="section-standard">
          <div className="container-lg">
            <h2 className="section-title-center">
              Pourquoi investir dans la conformité ?
            </h2>
            <p className="section-subtitle-center">
              Le coût de la non-conformité est bien plus élevé que celui de la conformité
            </p>

            <div className="comparison-grid">
              <div className="comparison-card comparison-bad">
                <div className="comparison-icon-bad">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="15" y1="9" x2="9" y2="15"/>
                    <line x1="9" y1="9" x2="15" y2="15"/>
                  </svg>
                </div>
                <h3 className="comparison-title-bad">Coût de la non-conformité</h3>
                <ul className="comparison-list">
                  <li><strong>Jusqu'à 10M€</strong> d'amende ou 2% du CA mondial</li>
                  <li><strong>Responsabilité pénale</strong> du dirigeant</li>
                  <li><strong>Exclusion</strong> des marchés publics et privés</li>
                  <li><strong>Perte de confiance</strong> clients et partenaires</li>
                  <li><strong>Coût moyen d'une cyberattaque :</strong> 240 000€</li>
                </ul>
              </div>

              <div className="comparison-card comparison-good">
                <div className="comparison-icon-good">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <h3 className="comparison-title-good">Coût de la conformité</h3>
                <ul className="comparison-list">
                  <li><strong>À partir de 3 490€</strong> pour un audit complet</li>
                  <li><strong>Jusqu'à 70%</strong> pris en charge par les aides</li>
                  <li><strong>Avantage concurrentiel</strong> sur les marchés</li>
                  <li><strong>Protection juridique</strong> du dirigeant</li>
                  <li><strong>Réduction de 70%</strong> du risque d'incident</li>
                </ul>
              </div>
            </div>
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

            <div className="faq-grid">
              {[
                {
                  question: 'Comment bénéficier des aides de l\'État ?',
                  answer: 'Plusieurs dispositifs existent : France Num (jusqu\'à 50%), BPI France, aides régionales... Nous vous accompagnons gratuitement dans le montage de vos dossiers et avons récupéré en moyenne 12 000€ par client.'
                },
                {
                  question: 'Puis-je payer en plusieurs fois ?',
                  answer: 'Oui, nous proposons un paiement en 3 fois sans frais pour toutes nos offres. Contactez-nous pour en discuter.'
                },
                {
                  question: 'Quelle offre choisir pour commencer ?',
                  answer: 'L\'offre Essentielle est idéale pour une première évaluation. Si vous avez besoin d\'un accompagnement plus poussé, l\'offre Sérénité inclut un expert dédié et un plan de remédiation complet.'
                },
                {
                  question: 'Les formations sont-elles finançables par mon OPCO ?',
                  answer: 'Oui, nos formations sont éligibles au financement OPCO. Nous pouvons vous fournir les documents nécessaires pour votre demande de prise en charge.'
                },
                {
                  question: 'Y a-t-il des frais cachés ?',
                  answer: 'Non. Tous nos prix sont affichés clairement et incluent l\'ensemble des prestations décrites. Aucune surprise à la facturation.'
                },
                {
                  question: 'Proposez-vous des tarifs groupe ?',
                  answer: 'Oui, nous proposons des tarifs dégressifs pour les groupes d\'entreprises ou les fédérations professionnelles. Contactez-nous pour un devis personnalisé.'
                }
              ].map((faq, idx) => (
                <div key={idx} className="faq-item">
                  <h4 className="faq-question">{faq.question}</h4>
                  <p className="faq-answer">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL - OFFRE GROUPE */}
        <section className="section-cta-gradient">
          <div className="container-md">
            <div className="cta-badge-white">Tarif groupe disponible</div>
            <h2 className="section-title-white">
              Vous êtes une fédération ou un groupement d'entreprises ?
            </h2>
            <p className="section-subtitle-white">
              Bénéficiez de tarifs préférentiels et d'un accompagnement dédié pour vos membres
            </p>
            <a
              href={CONTACT_INFO.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta-white-lg"
            >
              Demander un devis groupe
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer-artisan-modern">
          <div className="footer-main-content">
            <div className="footer-brand-col">
              <img src="/logo.png" alt="Cyber Solferino" className="footer-logo" />
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
                  <a href="mailto:contact@cyber-solferino.com">
                    contact@cyber-solferino.com
                  </a>
                </li>
                <li><a href="tel:+33649432092">06 49 43 20 92</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom-modern">
            <div className="footer-bottom-content">
              <p className="footer-copyright">© 2025 Cyber Solferino. Tous droits réservés</p>
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
