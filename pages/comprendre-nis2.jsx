import PageLayout from '../components/PageLayout';
import Head from 'next/head';

export default function ComprendreNIS2() {
  return (
    <>
      <Head>
        <title>Comprendre la directive NIS2 | NIS2 Conformité</title>
        <meta name="description" content="Tout savoir sur la directive NIS2 : périmètre, secteurs concernés, deadline 2027, sanctions. Guide complet pour les PME et ETI européennes." />
      </Head>

      <PageLayout>
        {/* Hero */}
        <section className="hero">
          <div className="container">
            <h1>Comprendre la directive NIS2</h1>
            <p className="hero-subtitle">
              Tout ce que vous devez savoir sur la réglementation qui transforme
              la cybersécurité en Europe
            </p>
          </div>
        </section>

        {/* Qu'est-ce que NIS2 */}
        <section className="content-section">
          <div className="container">
            <div className="content-block">
              <h2>🎯 Qu'est-ce que NIS2 ?</h2>
              <p>
                La directive NIS 2 (<strong>Network and Information System Security</strong>, en français directive SRSI pour
                Sécurité des Réseaux et des Systèmes d'Information) vise à renforcer le niveau de cybersécurité
                des infrastructures économiques et administratives des pays membres de l'UE contre des menaces
                de plus en plus sophistiquées.
              </p>
              <p>
                L'enjeu est de mieux protéger les réseaux et les systèmes d'information servant à fournir des
                services essentiels dans les secteurs clés de nos sociétés.
              </p>
            </div>

            <div className="highlight-box">
              <h3>📅 Deadline critique</h3>
              <p className="big-text">
                <strong>17 octobre 2027</strong>
              </p>
              <p>
                En France, la directive a été transposée le 15 octobre 2024. Le compte à rebours est lancé :
                d'ici le 17 octobre 2027, toutes les organisations concernées devront être conformes.
              </p>
            </div>
          </div>
        </section>

        {/* Périmètre élargi */}
        <section className="content-section bg-light">
          <div className="container">
            <h2>🌍 Un périmètre considérablement élargi</h2>
            
            <div className="two-columns">
              <div className="column">
                <h3>NIS 1 (ancienne version)</h3>
                <p>Protégeait uniquement les acteurs économiques majeurs de l'UE</p>
                <ul>
                  <li>Grandes entreprises</li>
                  <li>Opérateurs de services essentiels (OSE)</li>
                  <li>Périmètre restreint</li>
                </ul>
              </div>

              <div className="column highlight">
                <h3>NIS 2 (nouvelle version)</h3>
                <p>Élargit drastiquement le champ d'application</p>
                <ul>
                  <li>PME et ETI européennes</li>
                  <li>18 secteurs d'activités minimum</li>
                  <li>Entreprises étrangères offrant des services en UE</li>
                  <li>Des milliers d'entreprises concernées</li>
                </ul>
              </div>
            </div>

            <div className="warning-box">
              <h3>⚠️ Qui est concerné ?</h3>
              <ul>
                <li>✅ Toute entité implantée dans l'Union européenne</li>
                <li>✅ Toute entreprise étrangère offrant des services sur le territoire européen</li>
                <li>✅ 18 secteurs d'activités couverts (liste pages 64-67 de la directive 2022/2555)</li>
              </ul>
              <p className="emphasis">
                <strong>Où que vous soyez, si vous touchez au marché européen, NIS2 vous concerne.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* 18 secteurs */}
        <section className="content-section">
          <div className="container">
            <h2>🏭 Les 18 secteurs d'activités concernés</h2>
            <p className="intro-text">
              La directive NIS2 couvre a minima 18 secteurs d'activités essentiels :
            </p>

            <div className="sectors-grid">
              <div className="sector-card">
                <span className="sector-icon">⚡</span>
                <h4>Énergie</h4>
              </div>
              <div className="sector-card">
                <span className="sector-icon">🚆</span>
                <h4>Transports</h4>
              </div>
              <div className="sector-card">
                <span className="sector-icon">🏦</span>
                <h4>Secteur bancaire</h4>
              </div>
              <div className="sector-card">
                <span className="sector-icon">💊</span>
                <h4>Santé</h4>
              </div>
              <div className="sector-card">
                <span className="sector-icon">💧</span>
                <h4>Eau potable</h4>
              </div>
              <div className="sector-card">
                <span className="sector-icon">🌐</span>
                <h4>Infrastructures numériques</h4>
              </div>
              <div className="sector-card">
                <span className="sector-icon">🏛️</span>
                <h4>Administration publique</h4>
              </div>
              <div className="sector-card">
                <span className="sector-icon">🛰️</span>
                <h4>Espace</h4>
              </div>
              <div className="sector-card">
                <span className="sector-icon">📮</span>
                <h4>Services postaux</h4>
              </div>
              <div className="sector-card">
                <span className="sector-icon">🗑️</span>
                <h4>Gestion des déchets</h4>
              </div>
              <div className="sector-card">
                <span className="sector-icon">🏭</span>
                <h4>Chimie</h4>
              </div>
              <div className="sector-card">
                <span className="sector-icon">🍔</span>
                <h4>Agroalimentaire</h4>
              </div>
              <div className="sector-card">
                <span className="sector-icon">🏗️</span>
                <h4>Industrie manufacturière</h4>
              </div>
              <div className="sector-card">
                <span className="sector-icon">☁️</span>
                <h4>Fournisseurs cloud</h4>
              </div>
              <div className="sector-card">
                <span className="sector-icon">🔬</span>
                <h4>Recherche</h4>
              </div>
              <div className="sector-card">
                <span className="sector-icon">📱</span>
                <h4>Télécommunications</h4>
              </div>
              <div className="sector-card">
                <span className="sector-icon">🌾</span>
                <h4>Agriculture</h4>
              </div>
              <div className="sector-card">
                <span className="sector-icon">⚙️</span>
                <h4>Production industrielle</h4>
              </div>
            </div>

            <p className="note">
              📄 Liste complète disponible aux pages 64-67 de la directive européenne 2022/2555
            </p>
          </div>
        </section>

        {/* Sanctions */}
        <section className="content-section bg-light">
          <div className="container">
            <h2>⚖️ Sanctions et conséquences</h2>
            
            <div className="sanctions-grid">
              <div className="sanction-card critical">
                <h3>💰 Sanctions financières</h3>
                <p className="big-number">Jusqu'à 10M€</p>
                <p>ou 2% du chiffre d'affaires mondial</p>
              </div>

              <div className="sanction-card">
                <h3>👔 Responsabilité pénale</h3>
                <p>Du dirigeant en cas de manquement aux obligations NIS2</p>
              </div>

              <div className="sanction-card">
                <h3>🚫 Exclusion des marchés</h3>
                <p>Impossibilité de répondre aux appels d'offres publics et privés</p>
              </div>

              <div className="sanction-card">
                <h3>📉 Perte de confiance B2B</h3>
                <p>Vos clients exigent désormais la conformité</p>
              </div>

              <div className="sanction-card">
                <h3>🔍 Contrôles ANSSI</h3>
                <p>Audits sur site sans préavis de l'ANSSI</p>
              </div>

              <div className="sanction-card">
                <h3>💼 Impact réputationnel</h3>
                <p>Atteinte durable à votre image de marque</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="cta-section">
          <div className="container">
            <h2>La résilience numérique devient une exigence vitale</h2>
            <p>
              Ne laissez pas NIS2 devenir une menace. Transformez cette obligation
              réglementaire en opportunité stratégique.
            </p>
            <a 
              href="https://calendly.com/nis2conformite/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-button"
            >
              📞 Échange gratuit - Suis-je éligible ?
            </a>
            <p className="cta-note">
              ✓ Sans engagement • ✓ Réponse sous 2h • ✓ Méthodologie ANSSI
            </p>
          </div>
        </section>

        <style jsx>{`
          .hero {
            background: linear-gradient(135deg, #1E3A8A 0%, #1E40AF 100%);
            color: white;
            padding: 80px 20px;
            text-align: center;
          }

          .hero h1 {
            font-size: 48px;
            font-weight: 900;
            margin-bottom: 20px;
            line-height: 1.2;
          }

          .hero-subtitle {
            font-size: 20px;
            opacity: 0.95;
            max-width: 700px;
            margin: 0 auto;
          }

          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }

          .content-section {
            padding: 80px 20px;
          }

          .content-section.bg-light {
            background: #F7F8FC;
          }

          .content-section h2 {
            font-size: 36px;
            font-weight: 800;
            color: #1E3A8A;
            margin-bottom: 32px;
          }

          .content-block {
            max-width: 800px;
            margin: 0 auto 48px;
          }

          .content-block p {
            font-size: 17px;
            line-height: 1.8;
            color: #334155;
            margin-bottom: 20px;
          }

          .highlight-box {
            background: #FFF3CD;
            border-left: 4px solid #FF5630;
            padding: 32px;
            border-radius: 12px;
            max-width: 800px;
            margin: 40px auto;
          }

          .highlight-box h3 {
            font-size: 24px;
            color: #1E3A8A;
            margin-bottom: 16px;
          }

          .big-text {
            font-size: 42px;
            font-weight: 900;
            color: #FF5630;
            margin: 16px 0;
          }

          .two-columns {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 32px;
            margin-top: 40px;
          }

          .column {
            background: white;
            padding: 32px;
            border-radius: 16px;
            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
          }

          .column.highlight {
            background: #1E3A8A;
            color: white;
          }

          .column h3 {
            font-size: 22px;
            margin-bottom: 16px;
          }

          .column.highlight h3 {
            color: white;
          }

          .column ul {
            list-style: none;
            padding: 0;
          }

          .column ul li {
            padding: 8px 0;
            padding-left: 24px;
            position: relative;
          }

          .column ul li:before {
            content: "→";
            position: absolute;
            left: 0;
            color: #FF5630;
          }

          .warning-box {
            background: white;
            border: 2px solid #FF5630;
            padding: 32px;
            border-radius: 16px;
            margin-top: 40px;
          }

          .warning-box h3 {
            color: #FF5630;
            font-size: 24px;
            margin-bottom: 20px;
          }

          .warning-box ul {
            list-style: none;
            padding: 0;
            margin-bottom: 20px;
          }

          .warning-box li {
            padding: 12px 0;
            font-size: 16px;
            font-weight: 600;
          }

          .emphasis {
            background: #FFF3CD;
            padding: 16px;
            border-radius: 8px;
            font-size: 17px;
          }

          .intro-text {
            font-size: 18px;
            color: #64748B;
            margin-bottom: 40px;
          }

          .sectors-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 40px;
          }

          .sector-card {
            background: white;
            padding: 24px;
            border-radius: 12px;
            text-align: center;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
            transition: all 0.3s ease;
          }

          .sector-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 4px 16px rgba(30, 58, 138, 0.12);
          }

          .sector-icon {
            font-size: 40px;
            display: block;
            margin-bottom: 12px;
          }

          .sector-card h4 {
            font-size: 16px;
            font-weight: 700;
            color: #1E3A8A;
          }

          .note {
            font-size: 14px;
            color: #64748B;
            font-style: italic;
            text-align: center;
          }

          .sanctions-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 24px;
          }

          .sanction-card {
            background: white;
            padding: 32px;
            border-radius: 16px;
            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
          }

          .sanction-card.critical {
            background: #FFF3CD;
            border: 2px solid #FF5630;
          }

          .sanction-card h3 {
            font-size: 20px;
            color: #1E3A8A;
            margin-bottom: 16px;
          }

          .big-number {
            font-size: 36px;
            font-weight: 900;
            color: #FF5630;
            margin: 12px 0;
          }

          .cta-section {
            background: #1E3A8A;
            color: white;
            padding: 80px 20px;
            text-align: center;
          }

          .cta-section h2 {
            font-size: 36px;
            font-weight: 900;
            color: white;
            margin-bottom: 20px;
          }

          .cta-section p {
            font-size: 18px;
            opacity: 0.95;
            max-width: 600px;
            margin: 0 auto 32px;
          }

          .cta-button {
            display: inline-block;
            padding: 20px 48px;
            background: #FF5630;
            color: white;
            font-size: 18px;
            font-weight: 700;
            text-decoration: none;
            border-radius: 14px;
            transition: all 0.3s ease;
          }

          .cta-button:hover {
            background: #E64825;
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(255, 86, 48, 0.3);
          }

          .cta-note {
            font-size: 14px;
            margin-top: 16px;
            opacity: 0.8;
          }

          @media (max-width: 768px) {
            .hero h1 {
              font-size: 32px;
            }

            .hero-subtitle {
              font-size: 17px;
            }

            .content-section {
              padding: 48px 20px;
            }

            .content-section h2 {
              font-size: 28px;
            }

            .two-columns {
              grid-template-columns: 1fr;
            }

            .sectors-grid {
              grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            }

            .sanctions-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </PageLayout>
    </>
  );
}
