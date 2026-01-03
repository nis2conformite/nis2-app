import PageLayout from '../components/PageLayout';
import Head from 'next/head';

export default function QuiSommesNous() {
  return (
    <>
      <Head>
        <title>Qui sommes-nous ? | NIS2 Conformité</title>
        <meta name="description" content="Découvrez notre équipe d'experts en cybersécurité : anciens conseillers ministériels, consultants certifiés, juristes spécialisés. Méthodologie ANSSI, discrétion absolue." />
      </Head>

      <PageLayout>
        {/* Hero */}
        <section className="hero">
          <div className="container">
            <h1>Qui sommes-nous ?</h1>
            <p className="hero-subtitle">
              Rendre la conformité NIS2 accessible, pragmatique et stratégique
              pour les entreprises françaises
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="content-section">
          <div className="container">
            <div className="mission-block">
              <span className="icon">🎯</span>
              <h2>Notre mission</h2>
              <p className="lead">
                La directive NIS2 n'est pas qu'une obligation réglementaire : c'est une véritable révolution
                dans le domaine de la cybersécurité pour toutes les organisations.
              </p>
              <p>
                Chez NIS2 Conformité, nous avons la conviction que <strong>la conformité doit être accessible
                à toutes les entreprises</strong>, pas seulement aux grandes structures ou aux experts en cybersécurité.
                Elle doit être claire, concrète et réalisable pour chaque entité, qu'il s'agisse de PME,
                d'ETI ou d'administrations publiques.
              </p>
              <p>
                C'est pourquoi nous avons fondé NIS2 Conformité : pour accompagner chaque acteur dans cette
                transition et la transformer en un levier de performance tangible.
              </p>
            </div>

            <div className="challenge-box">
              <h3>Le défi de 2024-2027</h3>
              <p>
                La directive NIS2 imposera de nouvelles obligations, souvent complexes et inédites, à des milliers
                d'entreprises en France. Beaucoup ignorent l'ampleur de ces changements, tandis que d'autres minimisent
                les risques ou craignent de ne pas comprendre les enjeux.
              </p>
              <p className="highlight">
                Ce climat génère stress, confusion et immobilisme.
              </p>
              <p>
                <strong>Cette période de changement peut se transformer en opportunité</strong>, à condition d'être
                bien accompagnée. Notre objectif est de vous offrir une compréhension claire et pratique de la
                réglementation, des outils concrets pour atteindre la conformité, et un accompagnement de A à Z.
              </p>
            </div>
          </div>
        </section>

        {/* Qui sommes-nous */}
        <section className="content-section bg-light">
          <div className="container">
            <h2>Un acteur transversal unique</h2>
            
            <div className="identity-grid">
              <div className="identity-card negative">
                <h3>❌ Ce que nous ne sommes pas</h3>
                <ul>
                  <li>Un cabinet d'avocats</li>
                  <li>Un prestataire informatique</li>
                  <li>Un éditeur de logiciels</li>
                </ul>
              </div>

              <div className="identity-card positive">
                <h3>✅ Ce que nous sommes</h3>
                <p className="lead-text">
                  Un acteur transversal spécialisé dans la <strong>coordination de votre conformité NIS2</strong>
                </p>
              </div>
            </div>

            <div className="strength-section">
              <h3>💪 Notre force ? Intervenir là où d'autres hésitent ou se perdent</h3>
              
              <div className="bridges">
                <div className="bridge-card">
                  <div className="bridge-icon">⚖️ ↔️ 🏭</div>
                  <h4>Entre la législation et la réalité du terrain</h4>
                </div>

                <div className="bridge-card">
                  <div className="bridge-icon">📋 ↔️ ⚙️</div>
                  <h4>Entre la stratégie et son déploiement opérationnel</h4>
                </div>

                <div className="bridge-card">
                  <div className="bridge-icon">👔 ↔️ 💻</div>
                  <h4>Entre la direction et les équipes techniques</h4>
                </div>
              </div>

              <p className="conclusion">
                Nous construisons un <strong>pont solide entre vos obligations réglementaires et vos moyens
                concrets d'action</strong>, pour transformer la conformité en un véritable levier de performance.
              </p>
            </div>
          </div>
        </section>

        {/* Notre méthode */}
        <section className="content-section">
          <div className="container">
            <h2>Notre méthode, votre avantage</h2>
            <p className="intro">
              Notre approche exclusive repose sur trois principes fondamentaux :
            </p>

            <div className="method-grid">
              <div className="method-card">
                <div className="method-number">1</div>
                <span className="method-icon">🔍</span>
                <h3>Analyse sur mesure</h3>
                <p>
                  <strong>Fini les checklists standardisées.</strong> Nous étudions en profondeur votre structure,
                  vos flux d'informations, votre organisation, et identifions vos vulnérabilités pour concevoir
                  une solution entièrement adaptée à votre contexte.
                </p>
              </div>

              <div className="method-card">
                <div className="method-number">2</div>
                <span className="method-icon">🧩</span>
                <h3>Solutions modulaires</h3>
                <p>
                  Chaque organisation évolue à son propre rythme. C'est pourquoi nous proposons des audits
                  en trois niveaux — <strong>Essentiel, Expertise, Sérénité</strong> — pour accompagner votre
                  progression étape par étape, selon votre maturité.
                </p>
              </div>

              <div className="method-card">
                <div className="method-number">3</div>
                <span className="method-icon">🤝</span>
                <h3>Accompagnement intégral</h3>
                <p>
                  Nous ne vous laissons pas seul face à la conformité. Nous vous guidons dans la mise en œuvre
                  des recommandations, la formation de vos équipes, et le suivi pour assurer la pérennité
                  de vos efforts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Notre équipe */}
        <section className="content-section bg-dark">
          <div className="container">
            <h2>Une équipe d'élite, spécialiste du droit, du numérique et de la cybersécurité</h2>
            
            <p className="intro-white">
              La conformité NIS2 exige plus qu'une volonté : elle requiert une compréhension fine des enjeux
              réglementaires, une maîtrise opérationnelle des systèmes, et une capacité à piloter des projets
              complexes. Pour cela, nous avons constitué une équipe d'experts reconnus, alliant expertise
              juridique, technique et stratégique.
            </p>

            <div className="expertise-grid">
              <div className="expertise-card">
                <h3>🎯 Expertise construite sur le terrain</h3>
                <p>
                  Chacun de nos collaborateurs a été au cœur des transitions numériques que vivent aujourd'hui
                  les entreprises. Certains ont travaillé dans des cabinets ministériels, contribué à la
                  rédaction de lois en cybersécurité, ou accompagné des acteurs publics et privés dans la
                  mise en conformité RGPD et sécurité SI.
                </p>
              </div>

              <div className="expertise-card">
                <h3>👥 Nos profils clés</h3>
                <ul>
                  <li>Anciens conseillers parlementaires spécialisés en numérique</li>
                  <li>Consultants certifiés en cybersécurité, ayant audité des infrastructures critiques</li>
                  <li>Juristes IT ayant déployé la conformité RGPD dans de grandes organisations</li>
                  <li>Experts internationaux ayant piloté des projets dans plus de 10 pays</li>
                </ul>
              </div>

              <div className="expertise-card">
                <h3>🔄 Approche interdisciplinaire</h3>
                <p>
                  Ce qui fait notre différence, c'est notre capacité à croiser les compétences et à parler
                  tous les langages : celui du DSI, du DAF, du juriste, du responsable RH ou du comité exécutif.
                  Nous adaptons notre discours et nos méthodes pour transformer chaque exigence réglementaire
                  en une démarche stratégique concrète.
                </p>
              </div>
            </div>

            <div className="discretion-box">
              <h3>🤫 Discrétion et confidentialité absolues</h3>
              <p>
                Chez NIS2 Conformité, notre priorité n'est pas de briller par nos noms, mais par nos réalisations.
                Certains de nos experts évoluent ou ont évolué dans des secteurs sensibles — défense, sécurité,
                affaires gouvernementales — c'est pourquoi leur présence n'est pas systématiquement publique.
              </p>
              <p className="quote">
                « La meilleure expertise est celle que l'on comprend. »
              </p>
            </div>

            <div className="values-grid">
              <h3>Ce que vous gagnez en collaborant avec nous</h3>
              <div className="value-items">
                <div className="value-item">
                  <span>✓</span>
                  <p>Un référent dédié, accessible, réactif et à votre écoute</p>
                </div>
                <div className="value-item">
                  <span>✓</span>
                  <p>Une vision stratégique claire de vos enjeux de conformité</p>
                </div>
                <div className="value-item">
                  <span>✓</span>
                  <p>Une équipe opérationnelle capable de transformer vos diagnostics en actions concrètes</p>
                </div>
                <div className="value-item">
                  <span>✓</span>
                  <p>Des échanges sincères, respectueux de votre réalité et de vos contraintes</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="cta-section">
          <div className="container">
            <h2>Prêt à faire de votre conformité NIS2 un véritable levier de performance ?</h2>
            <p>
              Contactez-nous dès aujourd'hui pour engager une collaboration sur-mesure, efficace et confidentielle.
            </p>
            <a 
              href="https://calendly.com/nis2conformite/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-button"
            >
              📞 Échange gratuit - Parlons de votre projet
            </a>
            <p className="cta-note">
              ✓ Confidentialité garantie • ✓ Réponse sous 2h • ✓ Sans engagement
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

          .content-section.bg-dark {
            background: #0F172A;
            color: white;
          }

          .content-section h2 {
            font-size: 36px;
            font-weight: 800;
            color: #1E3A8A;
            margin-bottom: 32px;
            text-align: center;
          }

          .content-section.bg-dark h2 {
            color: white;
          }

          .icon {
            font-size: 64px;
            display: block;
            text-align: center;
            margin-bottom: 24px;
          }

          .mission-block {
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
          }

          .mission-block h2 {
            font-size: 42px;
            margin-bottom: 24px;
          }

          .lead {
            font-size: 20px;
            font-weight: 600;
            color: #1E3A8A;
            margin-bottom: 24px;
          }

          .mission-block p {
            font-size: 17px;
            line-height: 1.8;
            color: #334155;
            margin-bottom: 20px;
          }

          .challenge-box {
            background: #FFF3CD;
            border-left: 4px solid #FF5630;
            padding: 40px;
            border-radius: 12px;
            max-width: 900px;
            margin: 60px auto 0;
          }

          .challenge-box h3 {
            font-size: 28px;
            color: #1E3A8A;
            margin-bottom: 20px;
          }

          .challenge-box p {
            font-size: 17px;
            line-height: 1.8;
            margin-bottom: 16px;
          }

          .highlight {
            background: white;
            padding: 16px;
            border-radius: 8px;
            font-weight: 700;
            color: #FF5630;
            text-align: center;
            margin: 24px 0;
          }

          .identity-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 32px;
            margin-bottom: 60px;
          }

          .identity-card {
            padding: 40px;
            border-radius: 16px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          }

          .identity-card.negative {
            background: #FEE2E2;
            border: 2px solid #DC2626;
          }

          .identity-card.positive {
            background: #DCFCE7;
            border: 2px solid #16A34A;
          }

          .identity-card h3 {
            font-size: 24px;
            margin-bottom: 20px;
          }

          .identity-card ul {
            list-style: none;
            padding: 0;
          }

          .identity-card li {
            padding: 12px 0;
            font-size: 17px;
            font-weight: 600;
          }

          .lead-text {
            font-size: 19px;
            line-height: 1.7;
            font-weight: 600;
            color: #1E3A8A;
          }

          .strength-section {
            margin-top: 60px;
          }

          .strength-section h3 {
            font-size: 28px;
            color: #1E3A8A;
            margin-bottom: 40px;
            text-align: center;
          }

          .bridges {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            margin-bottom: 40px;
          }

          .bridge-card {
            background: white;
            padding: 32px 24px;
            border-radius: 16px;
            text-align: center;
            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
          }

          .bridge-icon {
            font-size: 36px;
            margin-bottom: 16px;
          }

          .bridge-card h4 {
            font-size: 17px;
            font-weight: 700;
            color: #1E3A8A;
            line-height: 1.4;
          }

          .conclusion {
            font-size: 18px;
            line-height: 1.7;
            text-align: center;
            max-width: 800px;
            margin: 0 auto;
            color: #334155;
          }

          .intro {
            font-size: 18px;
            color: #64748B;
            text-align: center;
            margin-bottom: 48px;
          }

          .intro-white {
            font-size: 18px;
            color: #CBD5E1;
            text-align: center;
            margin-bottom: 48px;
            max-width: 900px;
            margin-left: auto;
            margin-right: auto;
          }

          .method-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
          }

          .method-card {
            background: white;
            padding: 40px 32px;
            border-radius: 16px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
            position: relative;
          }

          .method-number {
            position: absolute;
            top: -20px;
            left: 32px;
            width: 48px;
            height: 48px;
            background: #FF5630;
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            font-weight: 900;
            box-shadow: 0 4px 12px rgba(255, 86, 48, 0.3);
          }

          .method-icon {
            font-size: 48px;
            display: block;
            margin-bottom: 16px;
          }

          .method-card h3 {
            font-size: 24px;
            color: #1E3A8A;
            margin-bottom: 16px;
          }

          .method-card p {
            font-size: 16px;
            line-height: 1.7;
            color: #334155;
          }

          .expertise-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
            margin-bottom: 60px;
          }

          .expertise-card {
            background: rgba(255, 255, 255, 0.05);
            padding: 32px;
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.1);
          }

          .expertise-card h3 {
            font-size: 22px;
            color: #FF5630;
            margin-bottom: 16px;
          }

          .expertise-card p {
            font-size: 16px;
            line-height: 1.7;
            color: #CBD5E1;
          }

          .expertise-card ul {
            list-style: none;
            padding: 0;
          }

          .expertise-card li {
            padding: 10px 0;
            padding-left: 24px;
            position: relative;
            color: #CBD5E1;
            font-size: 15px;
          }

          .expertise-card li:before {
            content: "→";
            position: absolute;
            left: 0;
            color: #FF5630;
          }

          .discretion-box {
            background: rgba(255, 86, 48, 0.1);
            border: 2px solid #FF5630;
            padding: 40px;
            border-radius: 16px;
            margin-bottom: 60px;
          }

          .discretion-box h3 {
            color: #FF5630;
            font-size: 26px;
            margin-bottom: 20px;
          }

          .discretion-box p {
            color: #E2E8F0;
            font-size: 16px;
            line-height: 1.8;
            margin-bottom: 16px;
          }

          .quote {
            font-size: 20px;
            font-style: italic;
            text-align: center;
            margin-top: 24px;
            color: white;
            font-weight: 600;
          }

          .values-grid h3 {
            font-size: 28px;
            color: white;
            margin-bottom: 32px;
            text-align: center;
          }

          .value-items {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }

          .value-item {
            display: flex;
            gap: 16px;
            align-items: flex-start;
          }

          .value-item span {
            font-size: 24px;
            color: #16A34A;
            flex-shrink: 0;
          }

          .value-item p {
            font-size: 16px;
            color: #E2E8F0;
            line-height: 1.6;
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

          @media (max-width: 1024px) {
            .identity-grid,
            .bridges,
            .method-grid,
            .expertise-grid {
              grid-template-columns: 1fr;
            }

            .value-items {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 768px) {
            .hero h1 {
              font-size: 32px;
            }

            .content-section {
              padding: 48px 20px;
            }

            .content-section h2 {
              font-size: 28px;
            }
          }
        `}</style>
      </PageLayout>
    </>
  );
}
