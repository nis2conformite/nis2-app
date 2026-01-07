import Head from 'next/head';
import PageLayout from '../components/PageLayout';

const EXTERNAL_LINKS = {
  videoYoutube: 'https://www.youtube.com/embed/461tWBUzrY8',
  directiveOfficielle: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32022L2555',
  anssi: 'https://cyber.gouv.fr',
  monespace: 'https://monespacenis2.cyber.gouv.fr'
};

export default function ComprendreNIS2() {
  return (
    <>
      <Head>
        <title>Comprendre NIS2 en 5 minutes | Guide Simple pour Dirigeants</title>
        <meta name="description" content="NIS2 expliqué simplement : qui est concerné, quelles obligations, quelles sanctions. Guide pratique pour dirigeants de PME et ETI." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <PageLayout>
        {/* HERO */}
        <section className="hero-nis2">
          <h1>Comprendre NIS2 en 5 minutes</h1>
          <p className="hero-lead">
            La nouvelle réglementation européenne qui renforce la cybersécurité 
            de milliers d'entreprises françaises.
          </p>
        </section>

        {/* C'EST QUOI NIS2 */}
        <section className="what-section">
          <div className="what-content">
            <span className="what-icon">📋</span>
            <h2>C'est quoi, NIS2 ?</h2>
            <p className="what-lead">
              NIS2 est une <strong>directive européenne</strong> entrée en vigueur en <strong>janvier 2023</strong>. 
              Elle oblige des milliers d'entreprises à renforcer leur cybersécurité pour mieux protéger 
              leurs activités et celles de leurs clients.
            </p>
            <div className="what-boxes">
              <div className="info-box">
                <strong>Objectif</strong>
                <p>Protéger les infrastructures critiques européennes contre les cyberattaques</p>
              </div>
              <div className="info-box">
                <strong>Application</strong>
                <p>Transposée en droit français • Contrôles ANSSI dès 2024 • Sanctions dès 2027</p>
              </div>
            </div>
          </div>
        </section>

        {/* VIDÉO EXPLICATIVE */}
        <section className="video-section">
          <div className="video-header">
            <span className="video-badge">🎥 Comprendre NIS2 en vidéo</span>
            <h2>La directive NIS2 expliquée simplement</h2>
            <p>5 minutes pour tout comprendre de cette nouvelle réglementation</p>
          </div>
          <div className="video-container">
            <iframe 
              src={EXTERNAL_LINKS.videoYoutube}
              title="Directive NIS2 expliquée" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen>
            </iframe>
          </div>
        </section>

        {/* SUIS-JE CONCERNÉ */}
        <section className="concerned-section">
          <h2>🎯 Suis-je concerné par NIS2 ?</h2>
          <p className="section-intro">
            Vous êtes concerné si votre entreprise répond à <strong>2 critères</strong> :
          </p>

          <div className="criteria-grid">
            <div className="criterion-card">
              <div className="criterion-number">1</div>
              <div className="criterion-content">
                <h3>Taille de l'entreprise</h3>
                <p><strong>+50 salariés</strong> OU <strong>+10M€ de chiffre d'affaires</strong></p>
              </div>
            </div>

            <div className="criterion-card">
              <div className="criterion-number">2</div>
              <div className="criterion-content">
                <h3>Secteur d'activité</h3>
                <p>Vous opérez dans l'un des <strong>18 secteurs critiques ou essentiels</strong></p>
              </div>
            </div>
          </div>

          {/* LISTE DES SECTEURS */}
          <div className="sectors-block">
            <h3>Les 18 secteurs concernés</h3>
            
            <div className="sectors-columns">
              {/* ENTITÉS ESSENTIELLES */}
              <div className="sector-column essential">
                <div className="sector-header">
                  <span className="sector-badge essential-badge">🔴 Entités Essentielles</span>
                  <p className="sector-subtitle">Sanctions jusqu'à 10M€ ou 2% du CA mondial</p>
                </div>
                <ul className="sector-list">
                  <li>⚡ Énergie (électricité, gaz, pétrole, hydrogène)</li>
                  <li>🚂 Transports (ferroviaire, aérien, maritime, routier)</li>
                  <li>🏦 Secteur bancaire</li>
                  <li>💰 Infrastructures des marchés financiers</li>
                  <li>🏥 Santé (hôpitaux, laboratoires, pharmacies)</li>
                  <li>💧 Eau potable et eaux usées</li>
                  <li>🌐 Infrastructures numériques (DNS, TLD, cloud, data centers)</li>
                  <li>🛰️ Espace</li>
                </ul>
              </div>

              {/* ENTITÉS IMPORTANTES */}
              <div className="sector-column important">
                <div className="sector-header">
                  <span className="sector-badge important-badge">🟠 Entités Importantes</span>
                  <p className="sector-subtitle">Sanctions jusqu'à 7M€ ou 1,4% du CA mondial</p>
                </div>
                <ul className="sector-list">
                  <li>📮 Services postaux et de courrier</li>
                  <li>🗑️ Gestion des déchets</li>
                  <li>🏭 Industrie manufacturière (chimie, pharmacie, agroalimentaire, équipements)</li>
                  <li>🌐 Fournisseurs de services numériques (réseaux sociaux, moteurs de recherche, marketplaces)</li>
                  <li>🔬 Recherche</li>
                  <li>🏛️ Administrations publiques (État, régions, départements)</li>
                </ul>
              </div>
            </div>

            <div className="sectors-note">
              <strong>💡 Bon à savoir :</strong> Même si vous n'êtes pas directement concerné, vos clients peuvent vous demander 
              de prouver votre conformité pour travailler avec eux (clause contractuelle).
            </div>
          </div>
        </section>

        {/* LES SANCTIONS - REPOSITIONNÉ ICI POUR CRÉER L'URGENCE */}
        <section className="sanctions-section">
          <h2>⚠️ Quelles sanctions en cas de non-conformité ?</h2>
          <p className="sanctions-intro">
            Les sanctions sont <strong>lourdes et immédiates</strong>. La responsabilité du dirigeant est engagée.
          </p>
          
          <div className="sanctions-grid">
            <div className="sanction-card red">
              <div className="sanction-header">
                <span className="sanction-icon">💸</span>
                <h3>Amendes financières</h3>
              </div>
              <div className="sanction-amount">Jusqu'à 10M€</div>
              <p className="sanction-detail">ou 2% du chiffre d'affaires mondial (le montant le plus élevé)</p>
            </div>

            <div className="sanction-card orange">
              <div className="sanction-header">
                <span className="sanction-icon">⚖️</span>
                <h3>Responsabilité pénale</h3>
              </div>
              <p className="sanction-detail">
                Les dirigeants peuvent être tenus <strong>personnellement responsables</strong> 
                en cas de manquement grave aux obligations NIS2
              </p>
            </div>

            <div className="sanction-card blue">
              <div className="sanction-header">
                <span className="sanction-icon">🚫</span>
                <h3>Exclusion des marchés</h3>
              </div>
              <p className="sanction-detail">
                Impossibilité de répondre aux appels d'offres publics et privés sans certification de conformité
              </p>
            </div>
          </div>

          <div className="sanctions-timeline">
            <h3>📅 Calendrier des sanctions</h3>
            <div className="timeline-bar">
              <div className="timeline-item past">
                <strong>2023</strong>
                <p>Entrée en vigueur</p>
              </div>
              <div className="timeline-item current">
                <strong>2024-2026</strong>
                <p>Période de transition<br/>Contrôles ANSSI</p>
              </div>
              <div className="timeline-item future">
                <strong>2027</strong>
                <p>Premières sanctions<br/>Conformité obligatoire</p>
              </div>
            </div>
          </div>

          <div className="sanctions-urgency">
            <p>
              <strong>⏰ Le temps presse :</strong> Les contrôles ANSSI ont déjà commencé. 
              Un audit de conformité prend en moyenne 3 à 6 mois. <strong>Agissez maintenant.</strong>
            </p>
          </div>
        </section>

        {/* LES OBLIGATIONS */}
        <section className="obligations-section">
          <h2>📝 Quelles sont mes obligations ?</h2>
          <p className="section-intro">
            NIS2 impose <strong>10 mesures de sécurité</strong> et <strong>3 obligations administratives</strong>
          </p>

          <div className="obligations-grid">
            {/* MESURES TECHNIQUES */}
            <div className="obligation-block">
              <h3>🛡️ Mesures de sécurité</h3>
              <ul className="obligation-list">
                <li>Gestion des risques cyber</li>
                <li>Sécurisation des accès</li>
                <li>Cryptographie des données</li>
                <li>Sauvegardes régulières</li>
                <li>Plan de continuité d'activité</li>
                <li>Sécurité de la chaîne d'approvisionnement</li>
                <li>Contrôle des fournisseurs</li>
                <li>Formation des équipes</li>
                <li>Tests de sécurité réguliers</li>
                <li>Politique de divulgation des vulnérabilités</li>
              </ul>
            </div>

            {/* OBLIGATIONS ADMINISTRATIVES */}
            <div className="obligation-block">
              <h3>📋 Obligations administratives</h3>
              <ul className="obligation-list highlighted">
                <li><strong>Enregistrement auprès de l'ANSSI</strong><br/>Déclarer votre entité sur MonEspaceNIS2</li>
                <li><strong>Formation obligatoire des dirigeants</strong><br/>Responsabilité pénale du dirigeant en cas de manquement</li>
                <li><strong>Notification des incidents sous 24h</strong><br/>Déclaration à l'ANSSI en cas de cyberattaque</li>
              </ul>
            </div>
          </div>
        </section>

        {/* COMMENT SE METTRE EN CONFORMITÉ */}
        <section className="howto-section">
          <h2>✅ Comment se mettre en conformité ?</h2>
          
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Réaliser un audit</h4>
                <p>Évaluer votre niveau de conformité actuel et identifier les écarts</p>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Obtenir un plan d'action</h4>
                <p>Prioriser les mesures à mettre en place selon vos risques</p>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Former vos équipes</h4>
                <p>Formation obligatoire des dirigeants + sensibilisation collaborateurs</p>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4>S'enregistrer auprès de l'ANSSI</h4>
                <p>Déclarer votre entité sur MonEspaceNIS2.cyber.gouv.fr</p>
              </div>
            </div>
          </div>

          <div className="howto-cta">
            <p><strong>💡 Bon à savoir :</strong> Jusqu'à 70% d'aides de l'État possibles pour financer votre mise en conformité</p>
            <a href="/offres-complementaires" className="btn-secondary-large">
              Découvrir nos solutions d'accompagnement
            </a>
          </div>
        </section>

        {/* RESSOURCES OFFICIELLES */}
        <section className="resources-section">
          <h2>📚 Ressources officielles</h2>
          <p className="section-intro">Pour aller plus loin dans votre compréhension de NIS2</p>

          <div className="resources-grid">
            <a href={EXTERNAL_LINKS.directiveOfficielle} target="_blank" rel="noopener noreferrer" className="resource-card featured">
              <div className="resource-icon">📄</div>
              <h4>Directive NIS2 - Texte officiel</h4>
              <p>Directive (UE) 2022/2555 complète en français • EUR-Lex • Transparence totale</p>
              <span className="resource-link">eur-lex.europa.eu →</span>
            </a>

            <a href={EXTERNAL_LINKS.anssi} target="_blank" rel="noopener noreferrer" className="resource-card">
              <div className="resource-icon">🏛️</div>
              <h4>Site officiel ANSSI</h4>
              <p>Toute la réglementation et les guides pratiques</p>
              <span className="resource-link">cyber.gouv.fr →</span>
            </a>

            <a href={EXTERNAL_LINKS.monespace} target="_blank" rel="noopener noreferrer" className="resource-card">
              <div className="resource-icon">📝</div>
              <h4>MonEspaceNIS2</h4>
              <p>Plateforme d'enregistrement des entités concernées</p>
              <span className="resource-link">monespacenis2.cyber.gouv.fr →</span>
            </a>

            <a href="https://aide.monespacenis2.cyber.gouv.fr/fr/" target="_blank" rel="noopener noreferrer" className="resource-card">
              <div className="resource-icon">❓</div>
              <h4>FAQ Officielle</h4>
              <p>Réponses aux questions fréquentes sur NIS2</p>
              <span className="resource-link">aide.monespacenis2.cyber.gouv.fr →</span>
            </a>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="cta-final-nis2">
          <h2>Besoin d'aide pour votre conformité NIS2 ?</h2>
          <p>Nos experts certifiés ISO 27001 vous accompagnent de l'audit à la déclaration ANSSI</p>
          <div className="cta-buttons-group">
            <a href="/#pricing" className="btn-primary-large">
              Découvrir nos audits
            </a>
            <a href="https://calendly.com/nis2conformite/30min" target="_blank" rel="noopener noreferrer" className="btn-secondary-large">
              📅 Parler à un expert
            </a>
          </div>
        </section>

        <style jsx>{`
          /* HERO */
          .hero-nis2 {
            text-align: center;
            padding: 80px 20px 100px;
            max-width: 900px;
            margin: 0 auto;
            background: linear-gradient(180deg, rgba(30, 58, 138, 0.03) 0%, transparent 100%);
          }

          .hero-nis2 h1 {
            font-size: 52px;
            font-weight: 900;
            color: #0F172A;
            line-height: 1.15;
            margin-bottom: 24px;
          }

          .hero-lead {
            font-size: 20px;
            color: #64748B;
            line-height: 1.6;
          }

          /* WHAT IS NIS2 */
          .what-section {
            max-width: 900px;
            margin: 80px auto;
            padding: 0 20px;
          }

          .what-content {
            background: white;
            padding: 48px 40px;
            border-radius: 20px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          }

          .what-icon {
            font-size: 64px;
            display: block;
            margin-bottom: 24px;
          }

          .what-content h2 {
            font-size: 36px;
            font-weight: 900;
            color: #1E3A8A;
            margin-bottom: 20px;
          }

          .what-lead {
            font-size: 18px;
            color: #475569;
            line-height: 1.7;
            margin-bottom: 32px;
          }

          .what-boxes {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .info-box {
            background: #F7F9FC;
            padding: 24px;
            border-radius: 12px;
            border-left: 4px solid #1E3A8A;
          }

          .info-box strong {
            display: block;
            font-size: 16px;
            font-weight: 800;
            color: #1E3A8A;
            margin-bottom: 8px;
          }

          .info-box p {
            font-size: 15px;
            color: #64748B;
            line-height: 1.5;
            margin: 0;
          }

          /* VIDEO */
          .video-section {
            margin: 100px auto;
            padding: 0 20px;
            max-width: 1000px;
          }

          .video-header {
            text-align: center;
            margin-bottom: 40px;
          }

          .video-badge {
            display: inline-block;
            background: #1E3A8A;
            color: white;
            padding: 8px 20px;
            border-radius: 24px;
            font-size: 14px;
            font-weight: 700;
            margin-bottom: 20px;
          }

          .video-header h2 {
            font-size: 32px;
            font-weight: 900;
            color: #0F172A;
            margin-bottom: 12px;
          }

          .video-header p {
            font-size: 17px;
            color: #64748B;
          }

          .video-container {
            position: relative;
            padding-bottom: 56.25%;
            height: 0;
            overflow: hidden;
            border-radius: 20px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
          }

          .video-container iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: none;
          }

          /* CONCERNED */
          .concerned-section {
            max-width: 1100px;
            margin: 100px auto;
            padding: 0 20px;
          }

          .concerned-section h2 {
            font-size: 40px;
            font-weight: 900;
            color: #1E3A8A;
            text-align: center;
            margin-bottom: 20px;
          }

          .section-intro {
            text-align: center;
            font-size: 18px;
            color: #64748B;
            margin-bottom: 48px;
          }

          .criteria-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
            margin-bottom: 60px;
          }

          .criterion-card {
            background: white;
            padding: 32px 28px;
            border-radius: 16px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
            display: flex;
            gap: 24px;
            align-items: flex-start;
          }

          .criterion-number {
            font-size: 48px;
            font-weight: 900;
            color: #1E3A8A;
            line-height: 1;
            flex-shrink: 0;
          }

          .criterion-content h3 {
            font-size: 20px;
            font-weight: 800;
            color: #0F172A;
            margin-bottom: 12px;
          }

          .criterion-content p {
            font-size: 16px;
            color: #64748B;
            line-height: 1.5;
          }

          /* SECTORS */
          .sectors-block {
            background: #F7F9FC;
            padding: 48px 40px;
            border-radius: 20px;
            margin-top: 48px;
          }

          .sectors-block h3 {
            font-size: 28px;
            font-weight: 900;
            color: #0F172A;
            text-align: center;
            margin-bottom: 40px;
          }

          .sectors-columns {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
            margin-bottom: 32px;
          }

          .sector-column {
            background: white;
            padding: 32px;
            border-radius: 16px;
            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
          }

          .sector-column.essential {
            border-top: 4px solid #DC2626;
          }

          .sector-column.important {
            border-top: 4px solid #F59E0B;
          }

          .sector-header {
            margin-bottom: 24px;
          }

          .sector-badge {
            display: inline-block;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 13px;
            font-weight: 800;
            margin-bottom: 12px;
          }

          .essential-badge {
            background: rgba(220, 38, 38, 0.1);
            color: #DC2626;
          }

          .important-badge {
            background: rgba(245, 158, 11, 0.1);
            color: #F59E0B;
          }

          .sector-subtitle {
            font-size: 13px;
            color: #64748B;
            font-weight: 600;
          }

          .sector-list {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .sector-list li {
            padding: 12px 0;
            font-size: 15px;
            color: #475569;
            line-height: 1.5;
            border-bottom: 1px solid #F1F5F9;
          }

          .sector-list li:last-child {
            border-bottom: none;
          }

          .sectors-note {
            background: rgba(59, 130, 246, 0.1);
            padding: 20px 24px;
            border-radius: 12px;
            border-left: 4px solid #3B82F6;
            font-size: 15px;
            color: #1E40AF;
            line-height: 1.6;
          }

          /* OBLIGATIONS */
          .obligations-section {
            max-width: 1100px;
            margin: 100px auto;
            padding: 0 20px;
          }

          .obligations-section h2 {
            font-size: 40px;
            font-weight: 900;
            color: #1E3A8A;
            text-align: center;
            margin-bottom: 20px;
          }

          .obligations-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
            margin-top: 48px;
          }

          .obligation-block {
            background: white;
            padding: 36px 32px;
            border-radius: 16px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          }

          .obligation-block h3 {
            font-size: 22px;
            font-weight: 800;
            color: #0F172A;
            margin-bottom: 24px;
          }

          .obligation-list {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .obligation-list li {
            padding: 10px 0;
            padding-left: 28px;
            position: relative;
            font-size: 15px;
            color: #475569;
            line-height: 1.5;
            border-bottom: 1px solid #F1F5F9;
          }

          .obligation-list li:last-child {
            border-bottom: none;
          }

          .obligation-list li::before {
            content: '→';
            position: absolute;
            left: 0;
            color: #1E3A8A;
            font-weight: 700;
          }

          .obligation-list.highlighted li {
            padding: 16px 0 16px 28px;
          }

          .obligation-list.highlighted strong {
            display: block;
            color: #0F172A;
            margin-bottom: 4px;
          }

          /* SANCTIONS */
          .sanctions-section {
            max-width: 1100px;
            margin: 100px auto;
            padding: 60px 20px;
            background: linear-gradient(135deg, #FEF2F2 0%, #FEE2E2 100%);
            border-radius: 24px;
          }

          .sanctions-section h2 {
            font-size: 40px;
            font-weight: 900;
            color: #DC2626;
            text-align: center;
            margin-bottom: 20px;
          }

          .sanctions-intro {
            text-align: center;
            font-size: 18px;
            color: #991B1B;
            margin-bottom: 48px;
            font-weight: 600;
          }

          .sanctions-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            margin-bottom: 48px;
          }

          .sanction-card {
            background: white;
            padding: 32px 28px;
            border-radius: 16px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          }

          .sanction-card.red {
            border-top: 4px solid #DC2626;
          }

          .sanction-card.orange {
            border-top: 4px solid #F59E0B;
          }

          .sanction-card.blue {
            border-top: 4px solid #3B82F6;
          }

          .sanction-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 20px;
          }

          .sanction-icon {
            font-size: 32px;
          }

          .sanction-header h3 {
            font-size: 18px;
            font-weight: 800;
            color: #0F172A;
          }

          .sanction-amount {
            font-size: 36px;
            font-weight: 900;
            color: #DC2626;
            margin-bottom: 12px;
          }

          .sanction-detail {
            font-size: 15px;
            color: #64748B;
            line-height: 1.6;
          }

          /* TIMELINE */
          .sanctions-timeline {
            background: white;
            padding: 32px;
            border-radius: 16px;
            margin-bottom: 32px;
          }

          .sanctions-timeline h3 {
            font-size: 22px;
            font-weight: 800;
            color: #0F172A;
            margin-bottom: 24px;
            text-align: center;
          }

          .timeline-bar {
            display: flex;
            justify-content: space-between;
            gap: 16px;
          }

          .timeline-item {
            flex: 1;
            text-align: center;
            padding: 20px 16px;
            background: #F7F9FC;
            border-radius: 12px;
            border: 2px solid #E2E8F0;
          }

          .timeline-item.current {
            background: rgba(59, 130, 246, 0.1);
            border-color: #3B82F6;
          }

          .timeline-item.future {
            background: rgba(220, 38, 38, 0.05);
            border-color: #DC2626;
          }

          .timeline-item strong {
            display: block;
            font-size: 24px;
            font-weight: 900;
            color: #1E3A8A;
            margin-bottom: 8px;
          }

          .timeline-item p {
            font-size: 14px;
            color: #64748B;
            line-height: 1.4;
            margin: 0;
          }

          .sanctions-urgency {
            background: white;
            padding: 24px 28px;
            border-radius: 16px;
            border-left: 4px solid #DC2626;
          }

          .sanctions-urgency p {
            font-size: 16px;
            color: #991B1B;
            line-height: 1.6;
            margin: 0;
          }

          /* HOW TO */
          .howto-section {
            max-width: 1100px;
            margin: 100px auto;
            padding: 0 20px;
          }

          .howto-section h2 {
            font-size: 40px;
            font-weight: 900;
            color: #1E3A8A;
            text-align: center;
            margin-bottom: 48px;
          }

          .steps-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
            margin-bottom: 48px;
          }

          .step-card {
            background: white;
            padding: 28px;
            border-radius: 16px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
            display: flex;
            gap: 20px;
            align-items: flex-start;
          }

          .step-number {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: #1E3A8A;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            font-weight: 900;
            flex-shrink: 0;
          }

          .step-content h4 {
            font-size: 18px;
            font-weight: 800;
            color: #0F172A;
            margin-bottom: 8px;
          }

          .step-content p {
            font-size: 15px;
            color: #64748B;
            line-height: 1.5;
            margin: 0;
          }

          .howto-cta {
            background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%);
            padding: 36px 32px;
            border-radius: 16px;
            text-align: center;
            border: 2px solid #3B82F6;
          }

          .howto-cta p {
            font-size: 16px;
            color: #1E40AF;
            margin-bottom: 20px;
          }

          .btn-secondary-large {
            display: inline-block;
            padding: 16px 36px;
            background: white;
            color: #1E3A8A;
            border: 2px solid #1E3A8A;
            border-radius: 12px;
            font-size: 16px;
            font-weight: 700;
            text-decoration: none;
            transition: all 0.3s ease;
          }

          .btn-secondary-large:hover {
            background: #1E3A8A;
            color: white;
            transform: translateY(-2px);
          }

          /* RESOURCES */
          .resources-section {
            max-width: 1100px;
            margin: 100px auto;
            padding: 0 20px;
          }

          .resources-section h2 {
            font-size: 40px;
            font-weight: 900;
            color: #1E3A8A;
            text-align: center;
            margin-bottom: 20px;
          }

          .resources-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
            margin-top: 48px;
          }

          .resource-card {
            background: white;
            padding: 32px 28px;
            border-radius: 16px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
            text-decoration: none;
            transition: all 0.3s ease;
            display: block;
            border: 2px solid transparent;
          }

          .resource-card.featured {
            border-color: #1E3A8A;
            background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%);
          }

          .resource-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 36px rgba(30, 58, 138, 0.15);
            border-color: #1E3A8A;
          }

          .resource-icon {
            font-size: 48px;
            margin-bottom: 20px;
            display: block;
          }

          .resource-card h4 {
            font-size: 20px;
            font-weight: 800;
            color: #0F172A;
            margin-bottom: 12px;
          }

          .resource-card p {
            font-size: 15px;
            color: #64748B;
            line-height: 1.5;
            margin-bottom: 16px;
          }

          .resource-link {
            font-size: 14px;
            color: #1E3A8A;
            font-weight: 700;
          }

          /* CTA FINAL */
          .cta-final-nis2 {
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

          .cta-final-nis2 h2 {
            font-size: 40px;
            font-weight: 900;
            color: white;
            margin-bottom: 16px;
          }

          .cta-final-nis2 p {
            font-size: 18px;
            color: rgba(255, 255, 255, 0.9);
            margin-bottom: 36px;
          }

          .cta-buttons-group {
            display: flex;
            gap: 16px;
            justify-content: center;
            flex-wrap: wrap;
          }

          .btn-primary-large {
            display: inline-block;
            padding: 18px 40px;
            background: #FF5630;
            color: white;
            border-radius: 14px;
            font-size: 17px;
            font-weight: 700;
            text-decoration: none;
            transition: all 0.3s ease;
            box-shadow: 0 4px 16px rgba(255, 86, 48, 0.3);
          }

          .btn-primary-large:hover {
            background: #E64825;
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(255, 86, 48, 0.4);
          }

          .cta-buttons-group .btn-secondary-large {
            background: white;
            color: #1E3A8A;
            padding: 18px 40px;
            font-size: 17px;
          }

          .cta-buttons-group .btn-secondary-large:hover {
            background: rgba(255, 255, 255, 0.9);
            color: #1E3A8A;
          }

          /* RESPONSIVE */
          @media (max-width: 1024px) {
            .what-boxes,
            .criteria-grid,
            .sectors-columns,
            .obligations-grid,
            .steps-grid {
              grid-template-columns: 1fr;
            }

            .sanctions-grid,
            .resources-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 768px) {
            .hero-nis2 h1 {
              font-size: 36px;
            }

            .hero-lead {
              font-size: 18px;
            }

            .concerned-section h2,
            .obligations-section h2,
            .sanctions-section h2,
            .howto-section h2,
            .resources-section h2,
            .cta-final-nis2 h2 {
              font-size: 32px;
            }

            .sanctions-grid,
            .resources-grid {
              grid-template-columns: 1fr;
            }

            .timeline-bar {
              flex-direction: column;
            }

            .cta-buttons-group {
              flex-direction: column;
            }

            .btn-primary-large,
            .cta-buttons-group .btn-secondary-large {
              width: 100%;
            }
          }
        `}</style>
      </PageLayout>
    </>
  );
}
