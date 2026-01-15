import Head from 'next/head';
import { CONTACT_INFO } from '../utils/constants';

export default function Formations() {
  const formats = [
    {
      id: 1,
      title: 'MOOC NIS2',
      subtitle: 'Formation en ligne autonome',
      description: 'Pour qui ? Entreprises souhaitant former à large échelle',
      features: [
        'Plateforme en ligne 24h/24',
        'Vidéos courtes + quiz',
        'Suivi des apprenants',
        'Certificat de formation',
      ],
      objectives: [
        'Former massivement sans mobiliser de formateur',
        'Structurer une montée en compétence sur 4 semaines',
        'Obtenir une traçabilité de la sensibilisation',
      ],
      advantages: [
        'Efficacité logistique maximale',
        'Coût réduit par collaborateur',
        'Formation continue accessible',
      ],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      )
    },
    {
      id: 2,
      title: 'Formation en Visio',
      subtitle: 'Sessions en ligne interactives',
      description: 'Pour qui ? Collaborateurs, dirigeants, équipes IT',
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
        'Idéal sans logistique lourde',
      ],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <polygon points="23 7 16 12 23 17 23 7"></polygon>
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
        </svg>
      )
    },
    {
      id: 3,
      title: 'Formation sur site',
      subtitle: 'Interventions en présentiel',
      description: 'Pour qui ? Structures souhaitant mobiliser une équipe entière',
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
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
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

        {/* 3 FORMATS */}
        <section style={{padding: 'var(--space-xl) var(--space-md)', background: 'var(--color-bg)'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto'}}>
            <h2 style={{fontSize: '36px', fontWeight: '700', color: 'var(--color-text-primary)', textAlign: 'center', marginBottom: 'var(--space-md)'}}>
              3 formats de formation adaptés à vos besoins
            </h2>
            <p style={{fontSize: '18px', color: 'var(--color-text-secondary)', textAlign: 'center', marginBottom: 'var(--space-2xl)'}}>
              Choisissez le format le plus adapté à votre organisation et vos contraintes
            </p>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-lg)'}}>
              {formats.map((format) => (
                <div key={format.id} style={{background: 'white', borderRadius: 'var(--radius-xl)', padding: 'var(--space-xl)', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', border: '1px solid #E5E7EB', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', transition: 'all 0.3s ease'}} className="value-card-hover">
                  <div style={{width: '56px', height: '56px', borderRadius: 'var(--radius-md)', background: 'linear-gradient(135deg, #A855F7 0%, #EC4899 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
                    {format.icon}
                  </div>

                  <div>
                    <h3 style={{fontSize: '22px', fontWeight: '700', color: 'var(--color-text-primary)', marginBottom: 'var(--space-xs)'}}>
                      {format.title}
                    </h3>
                    <p style={{fontSize: '14px', color: 'var(--color-purple)', fontWeight: '600', marginBottom: 'var(--space-xs)'}}>
                      {format.subtitle}
                    </p>
                    <p style={{fontSize: '14px', color: 'var(--color-text-tertiary)', margin: 0}}>
                      {format.description}
                    </p>
                  </div>

                  <div style={{borderTop: '1px solid #E5E7EB', paddingTop: 'var(--space-md)'}}>
                    <h4 style={{fontSize: '14px', fontWeight: '700', color: 'var(--color-purple)', marginBottom: 'var(--space-sm)', textTransform: 'uppercase', letterSpacing: '0.5px'}}>Caractéristiques</h4>
                    <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                      {format.features.map((feature, idx) => (
                        <li key={idx} style={{padding: 'var(--space-xs) 0', color: 'var(--color-text-secondary)', fontSize: '14px', display: 'flex', alignItems: 'flex-start', gap: 'var(--space-xs)', lineHeight: '1.5'}}>
                          <span style={{color: 'var(--color-purple)', fontSize: '16px', flexShrink: 0}}>✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{borderTop: '1px solid #E5E7EB', paddingTop: 'var(--space-md)'}}>
                    <h4 style={{fontSize: '14px', fontWeight: '700', color: 'var(--color-purple)', marginBottom: 'var(--space-sm)', textTransform: 'uppercase', letterSpacing: '0.5px'}}>Objectifs</h4>
                    <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                      {format.objectives.map((obj, idx) => (
                        <li key={idx} style={{padding: 'var(--space-xs) 0', color: 'var(--color-text-secondary)', fontSize: '14px', display: 'flex', alignItems: 'flex-start', gap: 'var(--space-xs)', lineHeight: '1.5'}}>
                          <span style={{color: 'var(--color-purple)', fontSize: '16px', flexShrink: 0}}>✓</span>
                          {obj}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{borderTop: '1px solid #E5E7EB', paddingTop: 'var(--space-md)'}}>
                    <h4 style={{fontSize: '14px', fontWeight: '700', color: 'var(--color-purple)', marginBottom: 'var(--space-sm)', textTransform: 'uppercase', letterSpacing: '0.5px'}}>Avantages</h4>
                    <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                      {format.advantages.map((adv, idx) => (
                        <li key={idx} style={{padding: 'var(--space-xs) 0', color: 'var(--color-text-secondary)', fontSize: '14px', display: 'flex', alignItems: 'flex-start', gap: 'var(--space-xs)', lineHeight: '1.5'}}>
                          <span style={{color: 'var(--color-purple)', fontSize: '16px', flexShrink: 0}}>✓</span>
                          {adv}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* POURQUOI SE FORMER */}
        <section style={{padding: 'var(--space-xl) var(--space-md)', background: 'linear-gradient(180deg, #F3E8FF 0%, #FFF 100%)'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto'}}>
            <h2 style={{fontSize: '36px', fontWeight: '700', color: 'var(--color-text-primary)', textAlign: 'center', marginBottom: 'var(--space-md)'}}>
              Pourquoi se former et former vos équipes ?
            </h2>
            <p style={{fontSize: '18px', color: 'var(--color-text-secondary)', textAlign: 'center', marginBottom: 'var(--space-2xl)'}}>
              La formation est au cœur de la conformité NIS2 et de votre sécurité
            </p>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-lg)'}}>
              {[
                {
                  title: 'Obligation légale NIS2',
                  desc: 'La directive NIS2 impose la sensibilisation et formation obligatoire de tous les collaborateurs, en particulier des dirigeants.',
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  )
                },
                {
                  title: '90% des incidents sont humains',
                  desc: 'La majorité des cyberattaques réussies exploitent une erreur humaine (phishing, mots de passe faibles, négligence).',
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                      <line x1="12" y1="9" x2="12" y2="13"></line>
                      <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                  )
                },
                {
                  title: 'ROI démontré',
                  desc: 'Une entreprise bien formée réduit de 70% ses risques d\'incidents et économise en moyenne 240 000€ par an en coûts évités.',
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <line x1="12" y1="1" x2="12" y2="23"></line>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                  )
                },
                {
                  title: 'Culture de sécurité durable',
                  desc: 'La formation crée une culture cyber pérenne dans l\'organisation, au-delà de la simple conformité réglementaire.',
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  )
                }
              ].map((item, idx) => (
                <div key={idx} style={{background: 'white', borderRadius: 'var(--radius-xl)', padding: 'var(--space-xl)', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', border: '1px solid #E5E7EB', gap: 'var(--space-md)', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column'}} className="value-card-hover">
                  <div style={{width: '56px', height: '56px', borderRadius: 'var(--radius-md)', background: 'linear-gradient(135deg, #A855F7 0%, #EC4899 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
                    {item.icon}
                  </div>
                  <h4 style={{fontSize: '20px', fontWeight: '700', color: 'var(--color-text-primary)', margin: 0}}>
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

        {/* 6 FORMATIONS */}
        <section style={{padding: 'var(--space-xl) var(--space-md)', background: 'var(--color-bg)'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto'}}>
            <h2 style={{fontSize: '36px', fontWeight: '700', color: 'var(--color-text-primary)', textAlign: 'center', marginBottom: 'var(--space-md)'}}>
              6 formations à fort impact pour accélérer votre conformité NIS2
            </h2>
            <p style={{fontSize: '18px', color: 'var(--color-text-secondary)', textAlign: 'center', marginBottom: 'var(--space-2xl)'}}>
              Chaque structure est différente. C'est pourquoi nous avons conçu une offre de formation modulaire, ciblée, et adaptée aux profils et aux besoins les plus variés.
            </p>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-lg)'}}>
              {trainings.map((training) => (
                <div key={training.id} style={{
                  background: 'white',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--space-xl)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  border: '1px solid #E5E7EB',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-md)',
                  transition: 'all 0.3s ease'
                }} className="value-card-hover">
                  <div style={{width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, #A855F7 0%, #EC4899 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '20px', fontWeight: '700', flexShrink: 0}}>
                    {training.id}
                  </div>
                  <div>
                    <h3 style={{fontSize: '20px', fontWeight: '700', color: 'var(--color-text-primary)', marginBottom: 'var(--space-sm)'}}>
                      {training.title}
                    </h3>
                    <p style={{fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: '1.6', marginBottom: 'var(--space-md)'}}>
                      {training.description}
                    </p>
                  </div>
                  <div style={{borderTop: '1px solid #E5E7EB', paddingTop: 'var(--space-md)'}}>
                    <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                      {training.topics.map((topic, idx) => (
                        <li key={idx} style={{padding: 'var(--space-xs) 0', color: 'var(--color-text-secondary)', fontSize: '14px', display: 'flex', alignItems: 'flex-start', gap: 'var(--space-xs)', lineHeight: '1.5'}}>
                          <span style={{color: 'var(--color-purple)', fontSize: '16px', flexShrink: 0}}>✓</span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
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
          <div className="footer-main-content">
            <div className="footer-brand-col">
              <img src="/logo.png" alt="NIS2 Conformité" className="footer-logo" />
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
                  <a href="mailto:nis2conformite@gmail.com">
                    nis2conformite@gmail.com
                  </a>
                </li>
                <li><a href="tel:+33000000000">+33 (0)0 00 00 00 00</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom-modern">
            <div className="footer-bottom-content">
              <p className="footer-copyright">© 2025 NIS2 Conformité. Tous droits réservés</p>
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
