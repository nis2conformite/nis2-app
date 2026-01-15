import Head from 'next/head';
import { CONTACT_INFO } from '../utils/constants';

export default function Formations() {
  const formats = [
    {
      id: 1,
      icon: '01',
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
      icon: '02',
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
      icon: '03',
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
      icon: '04',
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
        </div>
      </header>

      <div style={{paddingTop: '66px'}}>
        {/* HERO */}
        <section className="hero-artisan-exact" style={{paddingTop: 'var(--space-xl)', paddingBottom: 'var(--space-xl)'}}>
          <div className="hero-artisan-container">
            <div className="hero-badge-artisan">
              Formation obligatoire NIS2 • Prise en charge OPCO
            </div>

            <h1 className="hero-title-artisan">
              <span className="highlight">Formations NIS2</span><br />
              & Cybersécurité
            </h1>

            <p className="hero-subtitle-artisan">
              Des formations pensées pour chaque profil, chaque enjeu, chaque contrainte<br />
              Sensibilisation, formation technique, simulations
            </p>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section style={{padding: 'var(--space-xl) var(--space-md)', background: 'linear-gradient(180deg, #F3E8FF 0%, #FFF 100%)'}}>
          <div style={{maxWidth: '1000px', margin: '0 auto'}}>
            <div className="before-after-wrapper-design">
              <p style={{fontSize: '20px', lineHeight: '1.8', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-md)'}}>
                Se conformer à la directive NIS2 ne se résume pas à un audit. <strong>L'humain est au cœur du processus.</strong> Sans sensibilisation, sans formation, sans montée en compétences, la cybersécurité reste une coquille vide.
              </p>
              <p style={{fontSize: '18px', lineHeight: '1.7', color: 'var(--color-text-tertiary)', margin: 0}}>
                C'est pourquoi nous proposons plusieurs formats de formation adaptés à votre organisation, à votre niveau de maturité, et à vos contraintes logistiques. Chaque session est conçue pour être <strong>pédagogique, concrète et immédiatement activable.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* 4 FORMATS */}
        <section style={{padding: 'var(--space-xl) var(--space-md)', background: 'var(--color-bg)'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto'}}>
            <h2 style={{fontSize: '36px', fontWeight: '700', color: 'var(--color-text-primary)', textAlign: 'center', marginBottom: 'var(--space-xl)'}}>
              4 formats de formation adaptés à vos besoins
            </h2>

            <div style={{display: 'flex', flexDirection: 'column', gap: 'var(--space-2xl)'}}>
              {formats.map((format) => (
                <div key={format.id} style={{background: 'white', borderRadius: 'var(--radius-xl)', padding: 'var(--space-xl)', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', border: '1px solid #E5E7EB'}}>
                  <div style={{display: 'flex', alignItems: 'flex-start', gap: 'var(--space-lg)', marginBottom: 'var(--space-lg)', flexWrap: 'wrap'}}>
                    <div style={{width: '60px', height: '60px', borderRadius: '50%', background: 'linear-gradient(135deg, #A855F7 0%, #EC4899 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '24px', fontWeight: '700', flexShrink: 0}}>
                      {format.icon}
                    </div>
                    <div style={{flex: 1, minWidth: '250px'}}>
                      <h3 style={{fontSize: '24px', fontWeight: '700', color: 'var(--color-text-primary)', marginBottom: 'var(--space-xs)'}}>
                        {format.title}
                      </h3>
                      <p style={{fontSize: '15px', color: 'var(--color-text-tertiary)', margin: 0}}>
                        {format.subtitle}
                      </p>
                    </div>
                  </div>

                  <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-xl)', paddingTop: 'var(--space-lg)', borderTop: '1px solid #E5E7EB'}}>
                    <div>
                      <h4 style={{fontSize: '16px', fontWeight: '700', color: 'var(--color-purple)', marginBottom: 'var(--space-sm)'}}>Caractéristiques</h4>
                      <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                        {format.features.map((feature, idx) => (
                          <li key={idx} style={{padding: 'var(--space-xs) 0', color: 'var(--color-text-secondary)', fontSize: '14px', display: 'flex', alignItems: 'flex-start', gap: 'var(--space-xs)'}}>
                            <span style={{color: 'var(--color-purple)', flexShrink: 0}}>•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 style={{fontSize: '16px', fontWeight: '700', color: 'var(--color-purple)', marginBottom: 'var(--space-sm)'}}>Objectifs</h4>
                      <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                        {format.objectives.map((obj, idx) => (
                          <li key={idx} style={{padding: 'var(--space-xs) 0', color: 'var(--color-text-secondary)', fontSize: '14px', display: 'flex', alignItems: 'flex-start', gap: 'var(--space-xs)'}}>
                            <span style={{color: 'var(--color-purple)', flexShrink: 0}}>•</span>
                            {obj}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 style={{fontSize: '16px', fontWeight: '700', color: 'var(--color-purple)', marginBottom: 'var(--space-sm)'}}>Avantages</h4>
                      <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                        {format.advantages.map((adv, idx) => (
                          <li key={idx} style={{padding: 'var(--space-xs) 0', color: 'var(--color-text-secondary)', fontSize: '14px', display: 'flex', alignItems: 'flex-start', gap: 'var(--space-xs)'}}>
                            <span style={{color: 'var(--color-purple)', flexShrink: 0}}>•</span>
                            {adv}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6 FORMATIONS */}
        <section className="cyber-encart" style={{margin: 'var(--space-xl) var(--space-md)'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1}}>
            <h2 style={{fontSize: '36px', fontWeight: '700', color: 'white', textAlign: 'center', marginBottom: 'var(--space-md)'}}>
              6 formations à fort impact pour accélérer votre conformité NIS2
            </h2>
            <p style={{fontSize: '18px', color: 'rgba(255,255,255,0.8)', textAlign: 'center', marginBottom: 'var(--space-xl)'}}>
              Chaque structure est différente. C'est pourquoi nous avons conçu une offre de formation modulaire, ciblée, et adaptée aux profils et aux besoins les plus variés.
            </p>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 'var(--space-xl)'}}>
              {trainings.map((training) => (
                <div key={training.id} style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-lg)',
                  border: '1px solid rgba(255,255,255,0.2)'
                }}>
                  <div style={{width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #A855F7 0%, #EC4899 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '18px', fontWeight: '700', marginBottom: 'var(--space-md)'}}>
                    {training.id}
                  </div>
                  <h3 style={{fontSize: '20px', fontWeight: '700', color: 'white', marginBottom: 'var(--space-sm)'}}>
                    {training.title}
                  </h3>
                  <p style={{fontSize: '15px', color: 'rgba(255,255,255,0.8)', lineHeight: '1.6', marginBottom: 'var(--space-md)'}}>
                    {training.description}
                  </p>
                  <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                    {training.topics.map((topic, idx) => (
                      <li key={idx} style={{padding: 'var(--space-xs) 0', color: 'rgba(255,255,255,0.9)', fontSize: '14px', display: 'flex', alignItems: 'flex-start', gap: 'var(--space-xs)', borderTop: idx === 0 ? '1px solid rgba(255,255,255,0.2)' : 'none', paddingTop: idx === 0 ? 'var(--space-sm)' : 'var(--space-xs)'}}>
                        <span style={{color: 'rgba(255,255,255,0.6)', flexShrink: 0}}>→</span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* POURQUOI FORMER */}
        <section style={{padding: 'var(--space-xl) var(--space-md)', background: 'linear-gradient(180deg, #F3E8FF 0%, #FFF 100%)'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto'}}>
            <h2 style={{fontSize: '36px', fontWeight: '700', color: 'var(--color-text-primary)', textAlign: 'center', marginBottom: 'var(--space-xl)'}}>
              Pourquoi former vos équipes est essentiel ?
            </h2>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-xl)'}}>
              {[
                { title: 'Obligation légale NIS2', desc: 'La directive NIS2 impose la sensibilisation et formation obligatoire de tous les collaborateurs, en particulier des dirigeants.', gradient: '#A855F7' },
                { title: '90% des incidents sont humains', desc: 'La majorité des cyberattaques réussies exploitent une erreur humaine (phishing, mots de passe faibles, négligence).', gradient: '#EC4899' },
                { title: 'ROI démontré', desc: 'Une entreprise bien formée réduit de 70% ses risques d\'incidents et économise en moyenne 240 000€ par an en coûts évités.', gradient: '#F97316' },
                { title: 'Culture de sécurité durable', desc: 'La formation crée une culture cyber pérenne dans l\'organisation, au-delà de la simple conformité réglementaire.', gradient: '#FB923C' }
              ].map((item, idx) => (
                <div key={idx} style={{background: 'white', borderRadius: 'var(--radius-xl)', padding: 'var(--space-xl)', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', borderTop: `4px solid ${item.gradient}`}}>
                  <h4 style={{fontSize: '20px', fontWeight: '700', color: item.gradient, marginBottom: 'var(--space-sm)'}}>
                    {item.title}
                  </h4>
                  <p style={{fontSize: '15px', lineHeight: '1.6', color: 'var(--color-text-secondary)', margin: 0}}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section style={{padding: 'var(--space-xl) var(--space-md)', background: 'linear-gradient(135deg, #A855F7 0%, #EC4899 100%)', textAlign: 'center'}}>
          <div style={{maxWidth: '800px', margin: '0 auto'}}>
            <h2 style={{fontSize: '36px', fontWeight: '700', color: 'white', marginBottom: 'var(--space-md)'}}>
              Formez vos équipes dès aujourd'hui
            </h2>
            <p style={{fontSize: '18px', color: 'rgba(255,255,255,0.9)', marginBottom: 'var(--space-lg)'}}>
              Discutons de vos besoins en formation et construisons un programme sur-mesure pour votre organisation
            </p>
            <a
              href={CONTACT_INFO.calendly}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '16px 40px',
                background: 'white',
                color: 'var(--color-purple)',
                fontSize: '18px',
                fontWeight: '700',
                borderRadius: '9999px',
                textDecoration: 'none',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                transition: 'all 0.3s ease',
                marginBottom: 'var(--space-md)'
              }}
            >
              Demander un devis formation
            </a>
            <p style={{fontSize: '15px', color: 'rgba(255,255,255,0.9)', margin: 0}}>
              ✓ Tarifs dégressifs par volume • ✓ Financement jusqu'à 70% • ✓ Réponse sous 24h
            </p>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer-artisan-modern">
          <div className="footer-container-modern">
            <div className="footer-content-modern">
              <div className="footer-column-modern">
                <img src="/logo.png" alt="NIS2 Conformité" className="footer-logo-modern" />
                <p className="footer-tagline-modern">
                  La cyber sécurité : un impératif stratégique
                </p>
              </div>

              <div className="footer-column-modern">
                <h4 className="footer-title-modern">Navigation</h4>
                <ul className="footer-links-modern">
                  <li><a href="/comprendre-nis2">Comprendre NIS2</a></li>
                  <li><a href="/qui-sommes-nous">Qui sommes-nous</a></li>
                  <li><a href="/offres-complementaires">Nos tarifs</a></li>
                  <li><a href="/formations">Formation</a></li>
                </ul>
              </div>

              <div className="footer-column-modern">
                <h4 className="footer-title-modern">Contact</h4>
                <ul className="footer-links-modern">
                  <li><a href={CONTACT_INFO.calendly} target="_blank" rel="noopener noreferrer">Prendre rendez-vous</a></li>
                  <li><a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a></li>
                </ul>
              </div>
            </div>

            <div className="footer-bottom-modern">
              <p>&copy; 2024 {CONTACT_INFO.company}. Tous droits réservés.</p>
              <div className="footer-legal-modern">
                <a href="/mentions-legales">Mentions légales</a>
                <a href="/politique-confidentialite">Politique de confidentialité</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
