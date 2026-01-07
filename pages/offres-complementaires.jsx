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
            <h2>🎯 Nos Audits de Conformité NIS2</h2>
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
              <div className="popular-badge-simple">⭐ POPULAIRE</div>
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
            <h3 className="comparison-title">📊 Comparatif détaillé des offres</h3>
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
        </section>

        {/* SERVICES COMPLÉMENTAIRES */}
        <section className="complementary-section">
          <div className="section-intro">
            <h2>🛠️ Services Complémentaires</h2>
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
            📅 Réserver un échange gratuit
          </a>
        </section>

        <style jsx>{`
          /* HERO */
          .hero-offres {
            text-align: center;
            padding: 60px 20px 80px;
            max-width: 900px;
            margin: 0 auto;
          }

          .hero-offres h1 {
            font-size: 48px;
            font-weight: 900;
            color: #0F172A;
            margin-bottom: 16px;
            line-height: 1.2;
          }

          .hero-subtitle {
            font-size: 18px;
            color: #64748B;
            line-height: 1.7;
          }

          .hero-subtitle strong {
            color: #1E3A8A;
          }

          /* SECTION INTRO */
          .section-intro {
            text-align: center;
            margin-bottom: 48px;
          }

          .section-intro h2 {
            font-size: 36px;
            font-weight: 900;
            color: #1E3A8A;
            margin-bottom: 16px;
          }

          .section-intro p {
            font-size: 17px;
            color: #64748B;
          }

          .subsection-title {
            font-size: 28px;
            font-weight: 800;
            color: #0F172A;
            margin-bottom: 32px;
            text-align: center;
          }

          /* MAIN OFFERS */
          .main-offers {
            margin: 80px 0;
          }

          /* MAIN OFFERS - FORMAT SIMPLIFIÉ */
          .main-offers {
            margin: 80px 0;
          }

          .offers-simplified {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            max-width: 1000px;
            margin: 0 auto 32px;
          }

          .offer-simple {
            background: white;
            border: 3px solid #E2E8F0;
            border-radius: 20px;
            padding: 32px 28px;
            text-align: center;
            transition: all 0.3s ease;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
            position: relative;
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .offer-simple:hover {
            transform: translateY(-6px);
            box-shadow: 0 12px 36px rgba(0, 82, 204, 0.15);
            border-color: #1E3A8A;
          }

          .offer-simple.featured {
            border: 4px solid #1E3A8A;
            box-shadow: 0 8px 32px rgba(0, 82, 204, 0.2);
          }

          .popular-badge-simple {
            position: absolute;
            top: -12px;
            left: 50%;
            transform: translateX(-50%);
            background: #FFAB00;
            color: #091E42;
            padding: 6px 16px;
            border-radius: 20px;
            font-size: 11px;
            font-weight: 800;
          }

          .offer-simple-header h3 {
            font-size: 24px;
            font-weight: 800;
            color: #0F172A;
            margin-bottom: 12px;
          }

          .offer-simple-price {
            font-size: 42px;
            font-weight: 900;
            color: #1E3A8A;
            line-height: 1;
          }

          .offer-simple-price span {
            font-size: 16px;
            font-weight: 600;
            color: #64748B;
          }

          .offer-simple-desc {
            font-size: 15px;
            color: #64748B;
            line-height: 1.6;
            flex: 1;
          }

          .btn-simple {
            display: inline-block;
            padding: 14px 28px;
            background: white;
            color: #1E3A8A;
            border: 2px solid #1E3A8A;
            border-radius: 12px;
            font-size: 15px;
            font-weight: 700;
            text-decoration: none;
            transition: all 0.3s ease;
            cursor: pointer;
          }

          .btn-simple:hover {
            background: #1E3A8A;
            color: white;
            transform: translateY(-2px);
          }

          .btn-simple-primary {
            background: #FF5630;
            color: white;
            border-color: #FF5630;
          }

          .btn-simple-primary:hover {
            background: #E64825;
            border-color: #E64825;
          }

          .offers-cta-bottom {
            text-align: center;
            padding-top: 16px;
          }

          .link-details {
            font-size: 16px;
            color: #1E3A8A;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
          }

          .link-details:hover {
            text-decoration: underline;
          }

          /* TABLEAU COMPARATIF */
          .comparison-section {
            margin-top: 60px;
          }

          .comparison-title {
            font-size: 28px;
            font-weight: 800;
            color: #0F172A;
            text-align: center;
            margin-bottom: 32px;
          }

          .comparison-table-wrapper {
            overflow-x: auto;
            border-radius: 20px;
            box-shadow: 0 8px 32px rgba(0, 82, 204, 0.12);
            max-width: 1000px;
            margin: 0 auto;
          }

          .comparison-table {
            width: 100%;
            border-collapse: collapse;
            background: white;
            min-width: 700px;
          }

          .comparison-table thead {
            background: linear-gradient(135deg, #1E3A8A 0%, #1E40AF 100%);
            color: white;
          }

          .comparison-table th {
            padding: 24px 20px;
            text-align: center;
            font-weight: 700;
            font-size: 16px;
            line-height: 1.4;
          }

          .comparison-table th:first-child {
            text-align: left;
            width: 40%;
          }

          .comparison-table th.popular-column {
            background: linear-gradient(135deg, #FFAB00 0%, #FF9500 100%);
            color: #091E42;
          }

          .price-small {
            font-size: 14px;
            font-weight: 600;
            opacity: 0.95;
            display: block;
            margin-top: 6px;
          }

          .comparison-table tbody tr {
            border-bottom: 1px solid #EFF1F5;
            transition: background 0.2s ease;
          }

          .comparison-table tbody tr:hover {
            background: #F7F9FC;
          }

          .comparison-table tbody tr:last-child {
            border-bottom: none;
          }

          .comparison-table td {
            padding: 18px 20px;
            text-align: center;
          }

          .feature-name {
            text-align: left !important;
            font-weight: 600;
            color: #091E42;
            font-size: 15px;
          }

          .check {
            color: #1E3A8A;
            font-size: 22px;
            font-weight: 700;
          }

          .cross {
            color: #8993A4;
            font-size: 18px;
          }

          .feature-detail {
            font-size: 14px;
            color: #505F79;
            font-weight: 600;
          }

          /* SERVICES COMPLÉMENTAIRES */
          .complementary-section {
            margin: 80px 0;
            padding: 60px 20px;
            background: #F7F9FC;
            border-radius: 24px;
          }

          .services-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
            max-width: 1200px;
            margin: 0 auto;
          }

          .service-card-modern {
            background: white;
            border: 2px solid #E2E8F0;
            border-radius: 20px;
            padding: 32px 24px;
            text-align: center;
            transition: all 0.3s ease;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
            position: relative;
          }

          .service-card-modern:hover {
            transform: translateY(-8px);
            box-shadow: 0 16px 40px rgba(0, 82, 204, 0.15);
            border-color: #1E3A8A;
          }

          .service-card-modern.featured-service {
            border: 3px solid #FF5630;
            box-shadow: 0 8px 32px rgba(255, 86, 48, 0.2);
          }

          .featured-badge-service {
            position: absolute;
            top: -12px;
            left: 50%;
            transform: translateX(-50%);
            background: #FF5630;
            color: white;
            padding: 6px 16px;
            border-radius: 20px;
            font-size: 11px;
            font-weight: 800;
          }

          .service-icon-modern {
            width: 72px;
            height: 72px;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 24px;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
          }

          .service-card-modern h3 {
            font-size: 20px;
            font-weight: 800;
            color: #0F172A;
            margin-bottom: 12px;
          }

          .service-price-modern {
            font-size: 36px;
            font-weight: 900;
            color: #1E3A8A;
            margin-bottom: 24px;
          }

          .service-price-modern span {
            font-size: 16px;
            font-weight: 600;
            color: #64748B;
          }

          .service-features-modern {
            list-style: none;
            margin-bottom: 28px;
            text-align: left;
          }

          .service-features-modern li {
            padding: 10px 0;
            padding-left: 24px;
            position: relative;
            font-size: 14px;
            color: #505F79;
            border-bottom: 1px solid #F1F5F9;
          }

          .service-features-modern li:last-child {
            border-bottom: none;
          }

          .service-features-modern li::before {
            content: '→';
            position: absolute;
            left: 0;
            color: #1E3A8A;
            font-weight: 700;
          }

          .btn-service-modern {
            display: inline-block;
            padding: 12px 24px;
            background: white;
            color: #1E3A8A;
            border: 2px solid #1E3A8A;
            border-radius: 10px;
            font-size: 14px;
            font-weight: 700;
            text-decoration: none;
            transition: all 0.3s ease;
          }

          .btn-service-modern:hover {
            background: #1E3A8A;
            color: white;
          }

          .btn-service-primary {
            background: #FF5630;
            color: white;
            border-color: #FF5630;
          }

          .btn-service-primary:hover {
            background: #E64825;
            border-color: #E64825;
          }

          /* BANNIÈRE AIDES */
          .aides-banner {
            max-width: 1000px;
            margin: 48px auto 0;
            padding: 36px 48px;
            background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%);
            border: 3px solid #1E3A8A;
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 32px;
            box-shadow: 0 8px 24px rgba(30, 58, 138, 0.15);
          }

          .aides-content-full {
            flex: 1;
            text-align: left;
          }

          .aides-content-full h3 {
            font-size: 26px;
            font-weight: 900;
            color: #1E3A8A;
            margin-bottom: 10px;
            line-height: 1.2;
          }

          .aides-content-full p {
            font-size: 16px;
            color: #505F79;
            line-height: 1.5;
          }

          .btn-aides {
            display: inline-block;
            padding: 16px 32px;
            background: #1E3A8A;
            color: white;
            border-radius: 12px;
            font-size: 15px;
            font-weight: 700;
            text-decoration: none;
            transition: all 0.3s ease;
            white-space: nowrap;
            flex-shrink: 0;
          }

          .btn-aides:hover {
            background: #1E40AF;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(30, 58, 138, 0.3);
          }

          /* FINAL CTA */
          .final-cta-modern {
            text-align: center;
            padding: 60px 32px;
            background: linear-gradient(135deg, #1E3A8A 0%, #1E40AF 100%);
            border-radius: 24px;
            margin: 80px 0;
            box-shadow: 0 16px 48px rgba(30, 58, 138, 0.3);
          }

          .final-cta-modern h2 {
            font-size: 36px;
            font-weight: 900;
            color: white;
            margin-bottom: 16px;
          }

          .final-cta-modern p {
            font-size: 18px;
            color: rgba(255, 255, 255, 0.9);
            margin-bottom: 32px;
          }

          .btn-solo {
            display: inline-block;
          }

          .btn-large {
            padding: 18px 40px;
            font-size: 17px;
          }

          /* RESPONSIVE */
          @media (max-width: 1024px) {
            .offers-simplified,
            .services-grid {
              grid-template-columns: repeat(2, 1fr);
            }

            .aides-banner {
              flex-direction: column;
              text-align: center;
              padding: 32px 28px;
            }

            .aides-content-full {
              text-align: center;
            }

            .btn-aides {
              width: 100%;
            }
          }

          @media (max-width: 768px) {
            .hero-offres h1 {
              font-size: 32px;
            }

            .section-intro h2 {
              font-size: 28px;
            }

            .offers-simplified,
            .services-grid {
              grid-template-columns: 1fr;
            }

            .comparison-table-wrapper {
              border-radius: 12px;
            }

            .comparison-table th,
            .comparison-table td {
              padding: 14px 12px;
              font-size: 14px;
            }

            .aides-banner {
              padding: 24px 20px;
            }

            .aides-content-full h3 {
              font-size: 22px;
            }

            .aides-content-full p {
              font-size: 14px;
            }

            .btn-large {
              width: 100%;
            }
          }
        `}</style>
      </PageLayout>
    </>
  );
}
