import Head from 'next/head';
import PageLayout from '../components/PageLayout';

const CONTACT_INFO = {
  calendly: 'https://calendly.com/nis2conformite/30min',
  email: 'nis2conformite@gmail.com',
  company: 'Cyber Solférino',
  website: 'www.cyber-solferino.com'
};

export default function QuiSommesNous() {
  return (
    <>
      <Head>
        <title>Qui sommes-nous ? | Experts Conformité NIS2</title>
        <meta name="description" content="Depuis 2009, nous accompagnons les PME et ETI dans leur conformité cyber. Équipe certifiée ISO 27001, méthodologie ANSSI, 150+ entreprises accompagnées." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <PageLayout>
        {/* HERO */}
        <section className="hero-about">
          <h1>Votre partenaire de confiance pour la conformité NIS2</h1>
          <p className="hero-lead">
            Depuis 2009, nous transformons la conformité cyber en levier de performance pour les PME et ETI européennes.
          </p>
        </section>

        {/* CROYANCE */}
        <section className="belief-section">
          <div className="belief-content">
            <h2>Nous croyons que la cybersécurité doit être accessible à tous</h2>
            <p>
              Trop d'entreprises voient la conformité NIS2 comme une contrainte coûteuse et complexe. 
              Pourtant, avec le bon accompagnement, elle devient un atout stratégique : protection contre les cyber-attaques, 
              différenciation commerciale, et accès aux marchés publics et privés.
            </p>
          </div>
        </section>

        {/* NOTRE APPROCHE - 3 BLOCS */}
        <section className="approach-section">
          <div className="approach-block">
            <div className="approach-number">01</div>
            <div className="approach-content">
              <h3>Pragmatisme avant tout</h3>
              <p>
                Pas de jargon technique inutile. Nous adaptons la réglementation à votre réalité opérationnelle. 
                Chaque recommandation est actionnable, priorisée selon vos risques et votre budget.
              </p>
            </div>
          </div>

          <div className="approach-block">
            <div className="approach-number">02</div>
            <div className="approach-content">
              <h3>Accompagnement de bout en bout</h3>
              <p>
                De l'audit initial à la déclaration ANSSI, nous sommes à vos côtés. Formations obligatoires des dirigeants, 
                plans de remédiation, gestion d'incidents : vous n'êtes jamais seuls face à vos obligations.
              </p>
            </div>
          </div>

          <div className="approach-block">
            <div className="approach-number">03</div>
            <div className="approach-content">
              <h3>Résultats mesurables</h3>
              <p>
                150+ entreprises accompagnées, 98% de conformité atteinte, 0 client sanctionné. 
                Notre méthodologie ANSSI a fait ses preuves et vous protège contre les risques financiers et réputationnels.
              </p>
            </div>
          </div>
        </section>

        {/* L'ÉQUIPE - 4 STATS */}
        <section className="team-section">
          <h2>L'équipe derrière Cyber Solférino</h2>
          
          <div className="team-stats">
            <div className="team-stat">
              <div className="stat-visual">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#1E3A8A" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h4>15+ années d'expérience</h4>
              <p>Depuis 2009 dans l'accompagnement cyber des PME et ETI</p>
            </div>

            <div className="team-stat">
              <div className="stat-visual">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#1E3A8A" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h4>Experts certifiés ISO 27001</h4>
              <p>Consultants accrédités • Méthodologie validée par l'ANSSI</p>
            </div>

            <div className="team-stat">
              <div className="stat-visual">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#1E3A8A" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h4>150+ PME accompagnées</h4>
              <p>98% de conformité • 0 client sanctionné • Secteurs critiques et essentiels</p>
            </div>

            <div className="team-stat">
              <div className="stat-visual">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#1E3A8A" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <h4>Basés en France, portée européenne</h4>
              <p>Implantés à Paris • Interventions dans toute l'Europe</p>
            </div>
          </div>
        </section>

        {/* PARTENAIRES - LOGOS CERTIFICATIONS */}
        <section className="partners-section">
          <h2>Reconnus par les meilleurs</h2>
          <p className="partners-subtitle">Nos accréditations et partenariats garantissent la qualité de notre accompagnement</p>
          
          <div className="partners-logos">
            <div className="partner-logo">
              <img src="/logo_anssi.png" alt="ANSSI - Agence Nationale de la Sécurité des Systèmes d'Information" />
            </div>
            <div className="partner-logo">
              <img src="/Logo-cybermalveillance.PNG" alt="Cybermalveillance.gouv.fr" />
            </div>
            <div className="partner-logo">
              <img src="/logo_expertcyber.jpg" alt="Expert Cyber" />
            </div>
            <div className="partner-logo">
              <img src="/iso_27001_02-1024x704.png" alt="ISO 27001 Certified" />
            </div>
          </div>
        </section>

        {/* VALEURS - 6 CARDS */}
        <section className="values-section">
          <h2>Nos valeurs</h2>
          <p className="values-subtitle">Les principes qui guident notre accompagnement au quotidien</p>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h4>Pragmatisme</h4>
              <p>Solutions concrètes adaptées à votre réalité. Pas de théorie, que du terrain.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h4>Transparence</h4>
              <p>Prix clairs, méthodologie expliquée, pas de mauvaise surprise. Vous savez toujours où vous en êtes.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">⚡</div>
              <h4>Réactivité</h4>
              <p>Réponse en 24h, audit livré en 48h (offre Sérénité). Nous respectons vos délais.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">🛡️</div>
              <h4>Excellence</h4>
              <p>Méthodologie ANSSI, experts certifiés ISO 27001. Vous méritez le meilleur accompagnement.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">💼</div>
              <h4>Discrétion</h4>
              <p>Confidentialité absolue. Vos données et vos vulnérabilités restent entre nous.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">🚀</div>
              <h4>Impact</h4>
              <p>Résultats mesurables : 98% de conformité, 0 client sanctionné, 12 000€ d'aides récupérées en moyenne.</p>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="cta-final-about">
          <h2>Prêt à sécuriser votre conformité ?</h2>
          <p>Échangez gratuitement avec un expert certifié ISO 27001 • Diagnostic personnalisé en 30 minutes</p>
          <a 
            href={CONTACT_INFO.calendly} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-cta-large"
          >
            📅 Réserver un échange gratuit
          </a>
        </section>

        <style jsx>{`
          /* HERO */
          .hero-about {
            text-align: center;
            padding: 80px 20px 100px;
            max-width: 900px;
            margin: 0 auto;
            background: linear-gradient(180deg, rgba(30, 58, 138, 0.03) 0%, transparent 100%);
          }

          .hero-about h1 {
            font-size: 52px;
            font-weight: 900;
            color: #0F172A;
            line-height: 1.15;
            margin-bottom: 24px;
            letter-spacing: -0.5px;
          }

          .hero-lead {
            font-size: 20px;
            color: #64748B;
            line-height: 1.6;
            max-width: 700px;
            margin: 0 auto;
          }

          /* BELIEF */
          .belief-section {
            max-width: 800px;
            margin: 80px auto;
            padding: 48px 40px;
            background: white;
            border-left: 6px solid #1E3A8A;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
            border-radius: 8px;
          }

          .belief-content h2 {
            font-size: 28px;
            font-weight: 800;
            color: #1E3A8A;
            margin-bottom: 20px;
            line-height: 1.3;
          }

          .belief-content p {
            font-size: 17px;
            color: #475569;
            line-height: 1.7;
          }

          /* APPROCHE */
          .approach-section {
            max-width: 1000px;
            margin: 100px auto;
            padding: 0 20px;
          }

          .approach-block {
            display: flex;
            gap: 32px;
            margin-bottom: 60px;
            align-items: flex-start;
          }

          .approach-number {
            font-size: 72px;
            font-weight: 900;
            color: #E2E8F0;
            line-height: 1;
            flex-shrink: 0;
            width: 100px;
          }

          .approach-content {
            flex: 1;
            padding-top: 8px;
          }

          .approach-content h3 {
            font-size: 26px;
            font-weight: 800;
            color: #0F172A;
            margin-bottom: 16px;
          }

          .approach-content p {
            font-size: 17px;
            color: #64748B;
            line-height: 1.7;
          }

          /* TEAM */
          .team-section {
            margin: 100px auto;
            padding: 80px 20px;
            background: linear-gradient(135deg, #F7F9FC 0%, #EFF6FF 100%);
            text-align: center;
          }

          .team-section h2 {
            font-size: 40px;
            font-weight: 900;
            color: #1E3A8A;
            margin-bottom: 60px;
          }

          .team-stats {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
            max-width: 1000px;
            margin: 0 auto;
          }

          .team-stat {
            background: white;
            padding: 40px 32px;
            border-radius: 16px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
            transition: all 0.3s ease;
          }

          .team-stat:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 36px rgba(30, 58, 138, 0.15);
          }

          .stat-visual {
            margin-bottom: 24px;
            display: flex;
            justify-content: center;
          }

          .team-stat h4 {
            font-size: 20px;
            font-weight: 800;
            color: #0F172A;
            margin-bottom: 12px;
          }

          .team-stat p {
            font-size: 15px;
            color: #64748B;
            line-height: 1.6;
          }

          /* PARTNERS */
          .partners-section {
            margin: 100px auto;
            padding: 0 20px;
            text-align: center;
          }

          .partners-section h2 {
            font-size: 40px;
            font-weight: 900;
            color: #1E3A8A;
            margin-bottom: 16px;
          }

          .partners-subtitle {
            font-size: 18px;
            color: #64748B;
            margin-bottom: 60px;
          }

          .partners-logos {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 60px;
            flex-wrap: wrap;
            max-width: 1000px;
            margin: 0 auto;
          }

          .partner-logo img {
            height: 70px;
            width: auto;
            opacity: 0.85;
            transition: all 0.3s ease;
            filter: grayscale(20%);
          }

          .partner-logo img:hover {
            opacity: 1;
            filter: grayscale(0%);
            transform: scale(1.05);
          }

          /* VALUES */
          .values-section {
            margin: 100px auto;
            padding: 80px 20px;
            background: white;
            text-align: center;
          }

          .values-section h2 {
            font-size: 40px;
            font-weight: 900;
            color: #1E3A8A;
            margin-bottom: 16px;
          }

          .values-subtitle {
            font-size: 18px;
            color: #64748B;
            margin-bottom: 60px;
          }

          .values-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
            max-width: 1200px;
            margin: 0 auto;
          }

          .value-card {
            background: #F7F9FC;
            padding: 36px 28px;
            border-radius: 16px;
            border: 2px solid transparent;
            transition: all 0.3s ease;
            text-align: center;
          }

          .value-card:hover {
            border-color: #1E3A8A;
            transform: translateY(-4px);
            background: white;
            box-shadow: 0 8px 24px rgba(30, 58, 138, 0.12);
          }

          .value-icon {
            font-size: 48px;
            margin-bottom: 20px;
          }

          .value-card h4 {
            font-size: 20px;
            font-weight: 800;
            color: #0F172A;
            margin-bottom: 12px;
          }

          .value-card p {
            font-size: 15px;
            color: #64748B;
            line-height: 1.6;
          }

          /* CTA FINAL */
          .cta-final-about {
            text-align: center;
            padding: 80px 32px;
            background: linear-gradient(135deg, #1E3A8A 0%, #1E40AF 100%);
            border-radius: 24px;
            margin: 100px 20px 60px;
            max-width: 1000px;
            margin-left: auto;
            margin-right: auto;
            box-shadow: 0 16px 48px rgba(30, 58, 138, 0.3);
          }

          .cta-final-about h2 {
            font-size: 40px;
            font-weight: 900;
            color: white;
            margin-bottom: 16px;
          }

          .cta-final-about p {
            font-size: 18px;
            color: rgba(255, 255, 255, 0.9);
            margin-bottom: 36px;
            line-height: 1.6;
          }

          .btn-cta-large {
            display: inline-block;
            padding: 20px 48px;
            background: white;
            color: #1E3A8A;
            border-radius: 14px;
            font-size: 18px;
            font-weight: 700;
            text-decoration: none;
            transition: all 0.3s ease;
            box-shadow: 0 4px 16px rgba(255, 255, 255, 0.2);
          }

          .btn-cta-large:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(255, 255, 255, 0.3);
          }

          /* RESPONSIVE */
          @media (max-width: 1024px) {
            .team-stats,
            .values-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 768px) {
            .hero-about h1 {
              font-size: 36px;
            }

            .hero-lead {
              font-size: 18px;
            }

            .approach-block {
              flex-direction: column;
              gap: 16px;
              margin-bottom: 48px;
            }

            .approach-number {
              font-size: 56px;
              width: auto;
            }

            .team-stats,
            .values-grid {
              grid-template-columns: 1fr;
              gap: 24px;
            }

            .partners-logos {
              gap: 40px;
            }

            .partner-logo img {
              height: 50px;
            }

            .cta-final-about h2 {
              font-size: 32px;
            }

            .btn-cta-large {
              width: 100%;
            }
          }
        `}</style>
      </PageLayout>
    </>
  );
}
