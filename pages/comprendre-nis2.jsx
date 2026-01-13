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
            <span className="video-badge">Comprendre NIS2 en vidéo</span>
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
          <h2>Suis-je concerné par NIS2 ?</h2>
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
                  <span className="sector-badge essential-badge">Entités Essentielles</span>
                  <p className="sector-subtitle">Sanctions jusqu'à 10M€ ou 2% du CA mondial</p>
                </div>
                <ul className="sector-list">
                  <li>Énergie (électricité, gaz, pétrole, hydrogène)</li>
                  <li>Transports (ferroviaire, aérien, maritime, routier)</li>
                  <li>Secteur bancaire</li>
                  <li>Infrastructures des marchés financiers</li>
                  <li>Santé (hôpitaux, laboratoires, pharmacies)</li>
                  <li>Eau potable et eaux usées</li>
                  <li>Infrastructures numériques (DNS, TLD, cloud, data centers)</li>
                  <li>Espace</li>
                </ul>
              </div>

              {/* ENTITÉS IMPORTANTES */}
              <div className="sector-column important">
                <div className="sector-header">
                  <span className="sector-badge important-badge">Entités Importantes</span>
                  <p className="sector-subtitle">Sanctions jusqu'à 7M€ ou 1,4% du CA mondial</p>
                </div>
                <ul className="sector-list">
                  <li>Services postaux et de courrier</li>
                  <li>Gestion des déchets</li>
                  <li>Industrie manufacturière (chimie, pharmacie, agroalimentaire, équipements)</li>
                  <li>Fournisseurs de services numériques (réseaux sociaux, moteurs de recherche, marketplaces)</li>
                  <li>Recherche</li>
                  <li>Administrations publiques (État, régions, départements)</li>
                </ul>
              </div>
            </div>

            <div className="sectors-note">
              <strong>Bon à savoir :</strong> Même si vous n'êtes pas directement concerné, vos clients peuvent vous demander
              de prouver votre conformité pour travailler avec eux (clause contractuelle).
            </div>
          </div>
        </section>

        {/* LES SANCTIONS - REPOSITIONNÉ ICI POUR CRÉER L'URGENCE */}
        <section className="sanctions-section">
          <h2>Quelles sanctions en cas de non-conformité ?</h2>
          <p className="sanctions-intro">
            Les sanctions sont <strong>lourdes et immédiates</strong>. La responsabilité du dirigeant est engagée.
          </p>
          
          <div className="sanctions-grid">
            <div className="sanction-card red">
              <div className="sanction-header">
                <h3>Amendes financières</h3>
              </div>
              <div className="sanction-amount">Jusqu'à 10M€</div>
              <p className="sanction-detail">ou 2% du chiffre d'affaires mondial (le montant le plus élevé)</p>
            </div>

            <div className="sanction-card orange">
              <div className="sanction-header">
                <h3>Responsabilité pénale</h3>
              </div>
              <p className="sanction-detail">
                Les dirigeants peuvent être tenus <strong>personnellement responsables</strong>
                en cas de manquement grave aux obligations NIS2
              </p>
            </div>

            <div className="sanction-card blue">
              <div className="sanction-header">
                <h3>Exclusion des marchés</h3>
              </div>
              <p className="sanction-detail">
                Impossibilité de répondre aux appels d'offres publics et privés sans certification de conformité
              </p>
            </div>
          </div>

          <div className="sanctions-timeline">
            <h3>Calendrier des sanctions</h3>
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
              <strong>Le temps presse :</strong> Les contrôles ANSSI ont déjà commencé.
              Un audit de conformité prend en moyenne 3 à 6 mois. <strong>Agissez maintenant.</strong>
            </p>
          </div>
        </section>

        {/* LES OBLIGATIONS */}
        <section className="obligations-section">
          <h2>Quelles sont mes obligations ?</h2>
          <p className="section-intro">
            NIS2 impose <strong>10 mesures de sécurité</strong> et <strong>3 obligations administratives</strong>
          </p>

          <div className="obligations-grid">
            {/* MESURES TECHNIQUES */}
            <div className="obligation-block">
              <h3>Mesures de sécurité</h3>
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
              <h3>Obligations administratives</h3>
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
          <h2>Comment se mettre en conformité ?</h2>
          
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
            <p><strong>Bon à savoir :</strong> Jusqu'à 70% d'aides de l'État possibles pour financer votre mise en conformité</p>
            <a href="/offres-complementaires" className="btn-secondary-large">
              Découvrir nos solutions d'accompagnement
            </a>
          </div>
        </section>

        {/* RESSOURCES OFFICIELLES */}
        <section className="resources-section">
          <h2>Ressources officielles</h2>
          <p className="section-intro">Pour aller plus loin dans votre compréhension de NIS2</p>

          <div className="resources-grid">
            <a href={EXTERNAL_LINKS.directiveOfficielle} target="_blank" rel="noopener noreferrer" className="resource-card featured">
              <h4>Directive NIS2 - Texte officiel</h4>
              <p>Directive (UE) 2022/2555 complète en français • EUR-Lex • Transparence totale</p>
              <span className="resource-link">eur-lex.europa.eu →</span>
            </a>

            <a href={EXTERNAL_LINKS.anssi} target="_blank" rel="noopener noreferrer" className="resource-card">
              <h4>Site officiel ANSSI</h4>
              <p>Toute la réglementation et les guides pratiques</p>
              <span className="resource-link">cyber.gouv.fr →</span>
            </a>

            <a href={EXTERNAL_LINKS.monespace} target="_blank" rel="noopener noreferrer" className="resource-card">
              <h4>MonEspaceNIS2</h4>
              <p>Plateforme d'enregistrement des entités concernées</p>
              <span className="resource-link">monespacenis2.cyber.gouv.fr →</span>
            </a>

            <a href="https://aide.monespacenis2.cyber.gouv.fr/fr/" target="_blank" rel="noopener noreferrer" className="resource-card">
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
              Parler à un expert
            </a>
          </div>
        </section>
      </PageLayout>
    </>
  );
}
