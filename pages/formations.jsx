import PageLayout from '../components/PageLayout';
import Head from 'next/head';

export default function Formations() {
  const formats = [
    {
      id: 1,
      icon: '📹',
      title: 'Sessions en ligne (visioconférence)',
      subtitle: 'Pour qui ? Collaborateurs, dirigeants, équipes IT',
      features: [
        'Format court (1h à 2h)',
        'Modules interactifs',
        'Questions/réponses en direct',
        'Replays disponibles',
      ],
      objectives: [
        'Comprendre les grands principes de NIS2',
        'Savoir détecter les signaux faibles d\'un incident',
        'Adopter les bons réflexes cyber au quotidien',
      ],
      advantages: [
        'Souplesse et accessibilité',
        'Convient aux multi-sites',
        'Idéal pour un premier pas sans logistique lourde',
      ],
    },
    {
      id: 2,
      icon: '🏢',
      title: 'Interventions sur site',
      subtitle: 'Pour qui ? Structures souhaitant mobiliser une équipe entière',
      features: [
        'Présence d\'un formateur qualifié',
        'Ateliers pratiques et mises en situation',
        'Travail en petits groupes (jusqu\'à 20 personnes)',
      ],
      objectives: [
        'Appliquer directement les bonnes pratiques',
        'Simuler une cyberattaque et organiser une réponse',
        'Renforcer la culture cyber au sein de l\'équipe',
      ],
      advantages: [
        'Impact immédiat',
        'Mobilisation collective',
        'Personnalisation maximale',
      ],
    },
    {
      id: 3,
      icon: '💻',
      title: 'MOOC NIS2 (formation en ligne autonome)',
      subtitle: 'Pour qui ? Entreprises souhaitant former à large échelle',
      features: [
        'Plateforme en ligne accessible 24h/24',
        'Vidéos courtes + quiz',
        'Suivi des apprenants',
      ],
      objectives: [
        'Former massivement sans mobiliser de formateur',
        'Structurer une montée en compétence sur 4 semaines',
        'Obtenir une traçabilité de la sensibilisation',
      ],
      advantages: [
        'Efficacité logistique',
        'Coût réduit par collaborateur',
        'Formation continue accessible',
      ],
    },
    {
      id: 4,
      icon: '👔',
      title: 'Packs dirigeants',
      subtitle: 'Pour qui ? Comités de direction, COMEX, responsables légaux',
      features: [
        'Format 90 minutes',
        'Focus sur les responsabilités juridiques',
        'Dossier de synthèse + recommandations personnalisées',
      ],
      objectives: [
        'Comprendre la responsabilité du dirigeant',
        'Identifier les points critiques à piloter',
        'Décider des prochaines étapes',
      ],
      advantages: [
        'Gain de temps',
        'Pédagogie orientée décisions',
        'Crédibilité renforcée auprès des équipes',
      ],
    },
  ];

  const trainings = [
    {
      id: 1,
      title: '"Culture cybersécurité" pour tous les salariés',
      description: 'Que tous les employés comprennent les risques cyber et les bonnes pratiques.',
      topics: ['Cyber-hygiène : mots de passe, phishing, accès', 'Module pratique, interactif et illustré d\'exemples concrets', 'Idéal pour les équipes non techniques'],
    },
    {
      id: 2,
      title: 'Formation des cadres dirigeants',
      description: 'Leur faire comprendre leur responsabilité personnelle (risque pénal !) et les décisions stratégiques à prendre.',
      topics: ['NIS 2: les fondations', 'Responsabilité du dirigeant', 'Gouvernance de la cybersécurité'],
    },
    {
      id: 3,
      title: 'Formation technique pour les équipes IT / SI',
      description: 'Comprendre NIS2 en pratique et savoir mettre en œuvre les mesures techniques.',
      topics: ['Sécurisation des SI', 'Gestion des incidents', 'Audits de conformité', 'Surveillance et détection'],
    },
    {
      id: 4,
      title: 'Formations spécifiques par métier',
      description: 'Adapter la sensibilisation aux enjeux de chaque fonction.',
      topics: ['RH : protection des données personnelles', 'Finance : sécurité des transactions', 'Commercial : confidentialité client'],
    },
    {
      id: 5,
      title: 'Exercices pratiques et simulations',
      description: 'Très recommandé par NIS 2 pour s\'assurer que la théorie est intégrée.',
      topics: ['Simulation de cyberattaque', 'Gestion de crise en temps réel', 'Plan de continuité d\'activité (PCA)', 'Exercices de table-top'],
    },
    {
      id: 6,
      title: 'Pack onboarding cybersécurité',
      description: 'Intégrer la cybersécurité dès l\'arrivée des nouveaux employés.',
      topics: ['Formation initiale obligatoire', 'Charte informatique', 'Bonnes pratiques dès le premier jour'],
    },
  ];

  return (
    <>
      <Head>
        <title>Formations NIS2 et Cybersécurité | NIS2 Conformité</title>
        <meta name="description" content="Formations cybersécurité NIS2 : en ligne, sur site, MOOC, packs dirigeants. 10 modules à fort impact pour tous les profils. Sensibilisation, formation technique, simulations." />
      </Head>

      <PageLayout>
        {/* Hero */}
        <section className="hero">
          <div className="container">
            <h1>Formations NIS2 & Cybersécurité</h1>
            <p className="hero-subtitle">
              Des formations pensées pour chaque profil, chaque enjeu, chaque contrainte
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="intro-section">
          <div className="container">
            <div className="intro-box">
              <p className="lead">
                Se conformer à la directive NIS2 ne se résume pas à un audit. <strong>L'humain est au cœur
                du processus.</strong> Sans sensibilisation, sans formation, sans montée en compétences,
                la cybersécurité reste une coquille vide.
              </p>
              <p>
                C'est pourquoi nous proposons plusieurs formats de formation adaptés à votre organisation,
                à votre niveau de maturité, et à vos contraintes logistiques. Chaque session est conçue
                pour être <strong>pédagogique, concrète et immédiatement activable.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* 4 Formats */}
        <section className="formats-section">
          <div className="container">
            <h2>4 formats de formation adaptés à vos besoins</h2>
            
            {formats.map((format) => (
              <div key={format.id} className="format-card">
                <div className="format-header">
                  <div className="format-icon">{format.icon}</div>
                  <div className="format-title-block">
                    <h3>{format.title}</h3>
                    <p className="format-subtitle">{format.subtitle}</p>
                  </div>
                </div>

                <div className="format-content">
                  <div className="format-column">
                    <h4>Caractéristiques</h4>
                    <ul>
                      {format.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="format-column">
                    <h4>Objectifs</h4>
                    <ul>
                      {format.objectives.map((obj, idx) => (
                        <li key={idx}>{obj}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="format-column">
                    <h4>Avantages</h4>
                    <ul>
                      {format.advantages.map((adv, idx) => (
                        <li key={idx}>{adv}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 10 formations */}
        <section className="trainings-section">
          <div className="container">
            <h2>10 formations à fort impact pour accélérer votre conformité NIS2</h2>
            <p className="intro">
              Chaque structure est différente. C'est pourquoi nous avons conçu une offre de formation
              modulaire, ciblée, et adaptée aux profils et aux besoins les plus variés.
            </p>

            <div className="trainings-grid">
              {trainings.map((training) => (
                <div key={training.id} className="training-card">
                  <div className="training-number">{training.id}</div>
                  <h3>{training.title}</h3>
                  <p className="training-desc">{training.description}</p>
                  <ul className="training-topics">
                    {training.topics.map((topic, idx) => (
                      <li key={idx}>{topic}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pourquoi former */}
        <section className="why-train-section">
          <div className="container">
            <h2>Pourquoi former vos équipes est essentiel ?</h2>
            
            <div className="why-grid">
              <div className="why-card">
                <span className="why-icon">⚖️</span>
                <h4>Obligation légale NIS2</h4>
                <p>
                  La directive NIS2 impose la <strong>sensibilisation et formation obligatoire</strong> de
                  tous les collaborateurs, en particulier des dirigeants.
                </p>
              </div>

              <div className="why-card">
                <span className="why-icon">🎯</span>
                <h4>90% des incidents sont humains</h4>
                <p>
                  La majorité des cyberattaques réussies exploitent une erreur humaine (phishing, mots
                  de passe faibles, négligence).
                </p>
              </div>

              <div className="why-card">
                <span className="why-icon">💰</span>
                <h4>ROI démontré</h4>
                <p>
                  Une entreprise bien formée réduit de <strong>70% ses risques d'incidents</strong> et
                  économise en moyenne 240 000€ par an en coûts évités.
                </p>
              </div>

              <div className="why-card">
                <span className="why-icon">🛡️</span>
                <h4>Culture de sécurité durable</h4>
                <p>
                  La formation crée une culture cyber pérenne dans l'organisation, au-delà de la simple
                  conformité réglementaire.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="cta-section">
          <div className="container">
            <h2>Formez vos équipes dès aujourd'hui</h2>
            <p>
              Discutons de vos besoins en formation et construisons un programme sur-mesure pour
              votre organisation.
            </p>
            <a 
              href="https://calendly.com/nis2conformite/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-button"
            >
              📞 Demander un devis formation
            </a>
            <p className="cta-note">
              ✓ Tarifs dégressifs par volume • ✓ Financement jusqu'à 70% • ✓ Réponse sous 24h
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

          /* Intro */
          .intro-section {
            padding: 60px 20px;
            background: #F7F8FC;
          }

          .intro-box {
            max-width: 900px;
            margin: 0 auto;
            text-align: center;
          }

          .lead {
            font-size: 20px;
            font-weight: 600;
            color: #1E3A8A;
            margin-bottom: 24px;
            line-height: 1.6;
          }

          .intro-box p {
            font-size: 17px;
            line-height: 1.8;
            color: #334155;
          }

          /* Formats */
          .formats-section {
            padding: 80px 20px;
          }

          .formats-section h2 {
            font-size: 36px;
            font-weight: 800;
            color: #1E3A8A;
            margin-bottom: 48px;
            text-align: center;
          }

          .format-card {
            max-width: 1100px;
            margin: 0 auto 48px;
            background: white;
            border-radius: 20px;
            padding: 40px;
            box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
          }

          .format-header {
            display: flex;
            align-items: center;
            gap: 24px;
            margin-bottom: 32px;
            padding-bottom: 24px;
            border-bottom: 2px solid #E2E8F0;
          }

          .format-icon {
            font-size: 64px;
            flex-shrink: 0;
          }

          .format-title-block h3 {
            font-size: 28px;
            font-weight: 800;
            color: #1E3A8A;
            margin-bottom: 8px;
          }

          .format-subtitle {
            font-size: 16px;
            color: #64748B;
            font-style: italic;
          }

          .format-content {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
          }

          .format-column h4 {
            font-size: 18px;
            font-weight: 700;
            color: #FF5630;
            margin-bottom: 16px;
          }

          .format-column ul {
            list-style: none;
            padding: 0;
          }

          .format-column li {
            padding: 10px 0;
            padding-left: 24px;
            position: relative;
            font-size: 15px;
            line-height: 1.6;
            color: #334155;
          }

          .format-column li:before {
            content: "→";
            position: absolute;
            left: 0;
            color: #1E3A8A;
            font-weight: 700;
          }

          /* Trainings */
          .trainings-section {
            padding: 80px 20px;
            background: #F7F8FC;
          }

          .trainings-section h2 {
            font-size: 36px;
            font-weight: 800;
            color: #1E3A8A;
            margin-bottom: 24px;
            text-align: center;
          }

          .trainings-section .intro {
            font-size: 17px;
            color: #64748B;
            text-align: center;
            max-width: 800px;
            margin: 0 auto 48px;
          }

          .trainings-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 32px;
          }

          .training-card {
            background: white;
            padding: 32px;
            border-radius: 16px;
            box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);
            position: relative;
          }

          .training-number {
            position: absolute;
            top: -16px;
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

          .training-card h3 {
            font-size: 20px;
            font-weight: 700;
            color: #1E3A8A;
            margin-bottom: 12px;
            padding-top: 16px;
          }

          .training-desc {
            font-size: 15px;
            color: #64748B;
            margin-bottom: 20px;
            line-height: 1.6;
          }

          .training-topics {
            list-style: none;
            padding: 0;
          }

          .training-topics li {
            padding: 8px 0;
            padding-left: 24px;
            position: relative;
            font-size: 14px;
            color: #334155;
          }

          .training-topics li:before {
            content: "✓";
            position: absolute;
            left: 0;
            color: #16A34A;
            font-weight: 700;
          }

          /* Why train */
          .why-train-section {
            padding: 80px 20px;
          }

          .why-train-section h2 {
            font-size: 36px;
            font-weight: 800;
            color: #1E3A8A;
            margin-bottom: 48px;
            text-align: center;
          }

          .why-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 32px;
          }

          .why-card {
            background: white;
            padding: 32px;
            border-radius: 16px;
            text-align: center;
            box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);
          }

          .why-icon {
            font-size: 56px;
            display: block;
            margin-bottom: 20px;
          }

          .why-card h4 {
            font-size: 20px;
            font-weight: 700;
            color: #1E3A8A;
            margin-bottom: 12px;
          }

          .why-card p {
            font-size: 15px;
            line-height: 1.7;
            color: #64748B;
          }

          /* CTA */
          .cta-section {
            background: #1E3A8A;
            color: white;
            padding: 80px 20px;
            text-align: center;
          }

          .cta-section h2 {
            font-size: 36px;
            font-weight: 900;
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
            .format-content {
              grid-template-columns: 1fr;
            }

            .trainings-grid {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 768px) {
            .hero h1 {
              font-size: 32px;
            }

            .formats-section,
            .trainings-section,
            .why-train-section,
            .cta-section {
              padding: 48px 20px;
            }

            .format-card {
              padding: 24px;
            }

            .format-header {
              flex-direction: column;
              text-align: center;
            }
          }
        `}</style>
      </PageLayout>
    </>
  );
}
