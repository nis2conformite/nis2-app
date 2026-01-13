import Head from 'next/head';
import PageLayout from '../components/PageLayout';

const CONTACT_INFO = {
  calendly: 'https://calendly.com/nis2conformite/30min',
  email: 'nis2conformite@gmail.com',
  company: 'Cyber Solférino',
  website: 'www.cyber-solferino.com'
};

export default function OffresServices() {
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

  return (
    <>
      <Head>
        <title>Nos Solutions NIS2 | Audits, Formations & Services Complémentaires</title>
        <meta name="description" content="Découvrez nos solutions complètes pour votre mise en conformité NIS2 : audits, formations, modèles de documents et services d'accompagnement. Prix transparents et expertise certifiée." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <PageLayout>
        {/* HERO */}
        <section className="hero-offres">
          <h1>Tout pour votre conformité NIS2</h1>
          <p className="hero-subtitle">
            Des audits complets aux formations en passant par les services complémentaires.<br />
            <strong>Choisissez la solution adaptée à votre maturité cyber.</strong>
          </p>
        </section>

        {/* OFFRES PRINCIPALES - FORMAT SIMPLIFIÉ */}
        <section className="main-offers">
          <div className="section-intro">
            <h2>Nos Audits de Conformité NIS2</h2>
            <p>3 formules d'accompagnement adaptées à votre maturité cyber</p>
          </div>

          <div className="offers-simplified">
            <div className="offer-simple">
              <div className="offer-simple-header">
                <h3>Essentielle</h3>
                <div className="offer-simple-price">3 490€ <span>HT</span></div>
              </div>
              <p className="offer-simple-desc">Auto-évaluation guidée • Résultat immédiat • Score de conformité</p>
              <button onClick={handleStripeCheckout} className="btn-simple">Démarrer l'audit →</button>
            </div>

            <div className="offer-simple featured">
              <div className="popular-badge-simple">POPULAIRE</div>
              <div className="offer-simple-header">
                <h3>Sérénité</h3>
                <div className="offer-simple-price">7 990€ <span>HT</span></div>
              </div>
              <p className="offer-simple-desc">Audit complet + Expert • Plan de remédiation • Livraison 48H</p>
              <a href={CONTACT_INFO.calendly} target="_blank" rel="noopener noreferrer" className="btn-simple btn-simple-primary">
                Prendre RDV →
              </a>
            </div>

            <div className="offer-simple">
              <div className="offer-simple-header">
                <h3>Expertise</h3>
                <div className="offer-simple-price">14 900€ <span>HT</span></div>
              </div>
              <p className="offer-simple-desc">Accompagnement complet • Roadmap personnalisée • 12 mois de suivi</p>
              <a href={CONTACT_INFO.calendly} target="_blank" rel="noopener noreferrer" className="btn-simple">
                Prendre RDV →
              </a>
            </div>
          </div>

          {/* TABLEAU COMPARATIF - TOUJOURS AFFICHÉ */}
          <div className="comparison-section">
            <h3 className="comparison-title">Comparatif détaillé des offres</h3>
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
        </section>

        {/* SERVICES COMPLÉMENTAIRES */}
        <section className="complementary-section">
          <div className="section-intro">
            <h2>Services Complémentaires</h2>
            <p>Renforcez votre conformité avec nos services additionnels</p>
          </div>

          <div className="services-grid">
            {/* MODÈLES DE DOCUMENTS */}
            <div className="service-card-modern">
              <div className="service-icon-modern" style={{background: 'linear-gradient(135deg, #1E3A8A 0%, #1E40AF 100%)'}}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                </svg>
              </div>
              <h3>Modèles de documents</h3>
              <div className="service-price-modern">99€<span>/mois</span></div>
              <ul className="service-features-modern">
                <li>Templates conformité NIS2</li>
                <li>Mis à jour réglementairement</li>
                <li>Accès illimité</li>
                <li>Politiques ANSSI</li>
              </ul>
              <a href={CONTACT_INFO.calendly} target="_blank" rel="noopener noreferrer" className="btn-service-modern">
                En savoir plus
              </a>
            </div>

            {/* FORMATIONS */}
            <div className="service-card-modern featured-service">
              <div className="featured-badge-service">RECOMMANDÉ</div>
              <div className="service-icon-modern" style={{background: 'linear-gradient(135deg, #FF5630 0%, #E64825 100%)'}}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3>Formations NIS2</h3>
              <div className="service-price-modern">349€<span>/pers</span></div>
              <ul className="service-features-modern">
                <li>Formation dirigeants (obligatoire)</li>
                <li>Prise en charge OPCO</li>
                <li>Plateforme en ligne</li>
                <li>Formation sur site : nous consulter</li>
              </ul>
              <a href={CONTACT_INFO.calendly} target="_blank" rel="noopener noreferrer" className="btn-service-modern btn-service-primary">
                En savoir plus
              </a>
            </div>

            {/* SUBVENTIONS */}
            <div className="service-card-modern">
              <div className="service-icon-modern" style={{background: 'linear-gradient(135deg, #16A34A 0%, #15803D 100%)'}}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <h3>Montage Subventions</h3>
              <div className="service-price-modern">299€<span></span></div>
              <ul className="service-features-modern">
                <li>Identification des aides (70% max)</li>
                <li>Constitution dossiers</li>
                <li>France Num, BPI, Régions</li>
                <li>12 000€ récupérés en moyenne</li>
              </ul>
              <a href={CONTACT_INFO.calendly} target="_blank" rel="noopener noreferrer" className="btn-service-modern">
                En savoir plus
              </a>
            </div>

            {/* NOTIFICATION INCIDENTS */}
            <div className="service-card-modern">
              <div className="service-icon-modern" style={{background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)'}}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </div>
              <h3>Notification Incidents</h3>
              <div className="service-price-modern">99€<span>/mois</span></div>
              <ul className="service-features-modern">
                <li>Déclaration ANSSI 24h</li>
                <li>Gestion de crise</li>
                <li>Hotline 24/7</li>
                <li>Évitez les 10M€ d'amende</li>
              </ul>
              <a href={CONTACT_INFO.calendly} target="_blank" rel="noopener noreferrer" className="btn-service-modern">
                En savoir plus
              </a>
            </div>
          </div>

          {/* BANNIÈRE AIDES */}
          <div className="aides-banner">
            <div className="aides-content-full">
              <h3>Jusqu'à 70% d'aides de l'État possibles</h3>
              <p>Prise en charge par les OPCO • Subventions France Num, BPI, Régions</p>
            </div>
            <a href={CONTACT_INFO.calendly} target="_blank" rel="noopener noreferrer" className="btn-aides">
              En savoir plus
            </a>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="final-cta-modern">
          <h2>Prêt à sécuriser votre conformité NIS2 ?</h2>
          <p>Échangez gratuitement avec un expert certifié • Réponse en 24h</p>
          <a 
            href={CONTACT_INFO.calendly} 
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-large btn-solo"
          >
            Réserver un échange gratuit
          </a>
        </section>
      </PageLayout>
    </>
  );
}
