import Head from 'next/head';
import { CONTACT_INFO, EXTERNAL_LINKS } from '../utils/constants';

export default function ComprendreNIS2() {
  return (
    <>
      <Head>
        <title>Comprendre NIS2 en 5 minutes | Guide Simple pour Dirigeants</title>
        <meta name="description" content="NIS2 expliqué simplement : qui est concerné, quelles obligations, quelles sanctions. Guide pratique pour dirigeants de PME et ETI." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
        <section className="hero-artisan-exact" style={{paddingTop: 'var(--space-3xl)', paddingBottom: 'var(--space-3xl)'}}>
          <div className="hero-artisan-container">
            <div className="hero-badge-artisan">
              Directive Européenne • Conformité obligatoire 2027
            </div>

            <h1 className="hero-title-artisan">
              Comprendre <span className="highlight">NIS2</span><br />
              en 5 minutes
            </h1>

            <p className="hero-subtitle-artisan">
              La nouvelle réglementation européenne qui renforce la cybersécurité<br />
              de milliers d'entreprises françaises
            </p>

            <div className="hero-buttons-artisan" style={{display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', marginTop: 'var(--space-xl)', flexWrap: 'wrap'}}>
              <a href="#video-section" className="btn-hero-primary">
                Voir la vidéo explicative
              </a>
              <a href={CONTACT_INFO.calendly} target="_blank" rel="noopener noreferrer" className="btn-hero-secondary">
                Parler à un expert
              </a>
            </div>
          </div>
        </section>

        {/* C'EST QUOI NIS2 */}
        <section style={{padding: 'var(--space-xl) var(--space-md)', background: 'var(--color-bg)'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto'}}>
            <div className="before-after-wrapper-design">
              <div style={{textAlign: 'center', marginBottom: 'var(--space-lg)'}}>
                <h2 style={{fontSize: '36px', fontWeight: '700', color: 'var(--color-text-primary)', marginBottom: 'var(--space-md)'}}>
                  C'est quoi, NIS2 ?
                </h2>
                <p style={{fontSize: '18px', lineHeight: '1.7', color: 'var(--color-text-secondary)', maxWidth: '800px', margin: '0 auto'}}>
                  NIS2 est une <strong>directive européenne</strong> entrée en vigueur en <strong>janvier 2023</strong>.
                  Elle oblige des milliers d'entreprises à renforcer leur cybersécurité pour mieux protéger
                  leurs activités et celles de leurs clients.
                </p>
              </div>

              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-lg)', marginTop: 'var(--space-xl)'}}>
                <div style={{background: 'white', borderRadius: 'var(--radius-lg)', padding: 'var(--space-lg)', boxShadow: '0 4px 12px rgba(0,0,0,0.08)'}}>
                  <strong style={{display: 'block', fontSize: '18px', fontWeight: '700', color: 'var(--color-purple)', marginBottom: 'var(--space-sm)'}}>Objectif</strong>
                  <p style={{color: 'var(--color-text-secondary)', lineHeight: '1.6', margin: 0}}>
                    Protéger les infrastructures critiques européennes contre les cyberattaques
                  </p>
                </div>
                <div style={{background: 'white', borderRadius: 'var(--radius-lg)', padding: 'var(--space-lg)', boxShadow: '0 4px 12px rgba(0,0,0,0.08)'}}>
                  <strong style={{display: 'block', fontSize: '18px', fontWeight: '700', color: 'var(--color-purple)', marginBottom: 'var(--space-sm)'}}>Application</strong>
                  <p style={{color: 'var(--color-text-secondary)', lineHeight: '1.6', margin: 0}}>
                    Transposée en droit français • Contrôles ANSSI dès 2024 • Sanctions dès 2027
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VIDÉO EXPLICATIVE */}
        <section id="video-section" style={{padding: 'var(--space-3xl) var(--space-md)', background: 'var(--color-bg)'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto'}}>
            <div className="video-wrapper-design">
              <div style={{textAlign: 'center', marginBottom: 'var(--space-xl)'}}>
                <span style={{display: 'inline-block', padding: '8px 20px', background: 'linear-gradient(135deg, #A855F7 0%, #EC4899 100%)', color: 'white', borderRadius: '9999px', fontSize: '14px', fontWeight: '600', marginBottom: 'var(--space-md)'}}>
                  Comprendre NIS2 en vidéo
                </span>
                <h2 style={{fontSize: '36px', fontWeight: '700', color: 'var(--color-text-primary)', marginBottom: 'var(--space-md)'}}>
                  La directive NIS2 expliquée simplement
                </h2>
                <p style={{fontSize: '18px', color: 'var(--color-text-secondary)'}}>
                  5 minutes pour tout comprendre de cette nouvelle réglementation
                </p>
              </div>
              <div className="video-container">
                <iframe
                  src={EXTERNAL_LINKS.videoYoutube}
                  title="Directive NIS2 expliquée"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{border: 0, borderRadius: 'var(--radius-xl)'}}>
                </iframe>
              </div>
            </div>
          </div>
        </section>

        {/* SUIS-JE CONCERNÉ */}
        <section style={{padding: 'var(--space-3xl) var(--space-md)', background: 'var(--color-bg)'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto'}}>
            <h2 style={{fontSize: '36px', fontWeight: '700', color: 'var(--color-text-primary)', textAlign: 'center', marginBottom: 'var(--space-md)'}}>
              Suis-je concerné par NIS2 ?
            </h2>
            <p style={{fontSize: '18px', color: 'var(--color-text-secondary)', textAlign: 'center', marginBottom: 'var(--space-2xl)', maxWidth: '800px', margin: '0 auto var(--space-2xl)'}}>
              Vous êtes concerné si votre entreprise répond à <strong>2 critères</strong> :
            </p>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-xl)', marginBottom: 'var(--space-3xl)'}}>
              <div style={{background: 'white', borderRadius: 'var(--radius-xl)', padding: 'var(--space-xl)', boxShadow: '0 8px 24px rgba(0,0,0,0.08)', border: '2px solid #F3E8FF'}}>
                <div style={{width: '60px', height: '60px', borderRadius: '50%', background: 'linear-gradient(135deg, #A855F7 0%, #EC4899 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '32px', fontWeight: '700', marginBottom: 'var(--space-md)'}}>
                  1
                </div>
                <h3 style={{fontSize: '24px', fontWeight: '700', color: 'var(--color-text-primary)', marginBottom: 'var(--space-sm)'}}>
                  Taille de l'entreprise
                </h3>
                <p style={{fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: '1.6'}}>
                  <strong>+50 salariés</strong> OU <strong>+10M€ de chiffre d'affaires</strong>
                </p>
              </div>

              <div style={{background: 'white', borderRadius: 'var(--radius-xl)', padding: 'var(--space-xl)', boxShadow: '0 8px 24px rgba(0,0,0,0.08)', border: '2px solid #F3E8FF'}}>
                <div style={{width: '60px', height: '60px', borderRadius: '50%', background: 'linear-gradient(135deg, #EC4899 0%, #F472B6 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '32px', fontWeight: '700', marginBottom: 'var(--space-md)'}}>
                  2
                </div>
                <h3 style={{fontSize: '24px', fontWeight: '700', color: 'var(--color-text-primary)', marginBottom: 'var(--space-sm)'}}>
                  Secteur d'activité
                </h3>
                <p style={{fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: '1.6'}}>
                  Vous opérez dans l'un des <strong>18 secteurs critiques ou essentiels</strong>
                </p>
              </div>
            </div>

            {/* LISTE DES SECTEURS */}
            <div className="cyber-encart" style={{marginTop: 'var(--space-3xl)'}}>
              <h3 style={{fontSize: '28px', fontWeight: '700', color: 'white', textAlign: 'center', marginBottom: 'var(--space-xl)', position: 'relative', zIndex: 1}}>
                Les 18 secteurs concernés
              </h3>

              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 'var(--space-xl)', position: 'relative', zIndex: 1}}>
                {/* ENTITÉS ESSENTIELLES */}
                <div>
                  <div style={{marginBottom: 'var(--space-md)'}}>
                    <span style={{display: 'inline-block', padding: '8px 16px', background: 'linear-gradient(135deg, #A855F7 0%, #9333EA 100%)', color: 'white', borderRadius: 'var(--radius-md)', fontSize: '14px', fontWeight: '600', marginBottom: 'var(--space-sm)'}}>
                      Entités Essentielles
                    </span>
                    <p style={{color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginTop: 'var(--space-xs)'}}>
                      Sanctions jusqu'à 10M€ ou 2% du CA mondial
                    </p>
                  </div>
                  <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                    {[
                      { main: 'Énergie', details: 'électricité, gaz, pétrole, hydrogène' },
                      { main: 'Transports', details: 'ferroviaire, aérien, maritime, routier' },
                      { main: 'Secteur bancaire', details: '' },
                      { main: 'Infrastructures des marchés financiers', details: '' },
                      { main: 'Santé', details: 'hôpitaux, laboratoires, pharmacies' },
                      { main: 'Eau potable et eaux usées', details: '' },
                      { main: 'Infrastructures numériques', details: 'DNS, TLD, cloud, data centers' },
                      { main: 'Espace', details: '' }
                    ].map((item, idx) => (
                      <li key={idx} style={{display: 'flex', alignItems: 'flex-start', gap: 'var(--space-sm)', padding: 'var(--space-md) 0', borderBottom: '1px solid rgba(255,255,255,0.1)'}}>
                        <span style={{width: '8px', height: '8px', borderRadius: '50%', background: 'linear-gradient(135deg, #A855F7 0%, #9333EA 100%)', flexShrink: 0, marginTop: '6px'}}></span>
                        <span style={{fontSize: '15px', lineHeight: '1.5'}}>
                          <strong style={{color: 'white', fontWeight: '600'}}>{item.main}</strong>
                          {item.details && <span style={{color: 'rgba(255,255,255,0.6)'}}> ({item.details})</span>}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ENTITÉS IMPORTANTES */}
                <div>
                  <div style={{marginBottom: 'var(--space-md)'}}>
                    <span style={{display: 'inline-block', padding: '8px 16px', background: 'linear-gradient(135deg, #EC4899 0%, #DB2777 100%)', color: 'white', borderRadius: 'var(--radius-md)', fontSize: '14px', fontWeight: '600', marginBottom: 'var(--space-sm)'}}>
                      Entités Importantes
                    </span>
                    <p style={{color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginTop: 'var(--space-xs)'}}>
                      Sanctions jusqu'à 7M€ ou 1,4% du CA mondial
                    </p>
                  </div>
                  <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                    {[
                      { main: 'Services postaux et de courrier', details: '' },
                      { main: 'Gestion des déchets', details: '' },
                      { main: 'Industrie manufacturière', details: 'chimie, pharmacie, agroalimentaire, équipements' },
                      { main: 'Fournisseurs de services numériques', details: 'réseaux sociaux, moteurs de recherche, marketplaces' },
                      { main: 'Recherche', details: '' },
                      { main: 'Administrations publiques', details: 'État, régions, départements' }
                    ].map((item, idx) => (
                      <li key={idx} style={{display: 'flex', alignItems: 'flex-start', gap: 'var(--space-sm)', padding: 'var(--space-md) 0', borderBottom: '1px solid rgba(255,255,255,0.1)'}}>
                        <span style={{width: '8px', height: '8px', borderRadius: '50%', background: 'linear-gradient(135deg, #EC4899 0%, #DB2777 100%)', flexShrink: 0, marginTop: '6px'}}></span>
                        <span style={{fontSize: '15px', lineHeight: '1.5'}}>
                          <strong style={{color: 'white', fontWeight: '600'}}>{item.main}</strong>
                          {item.details && <span style={{color: 'rgba(255,255,255,0.6)'}}> ({item.details})</span>}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div style={{background: 'rgba(255,255,255,0.1)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)', marginTop: 'var(--space-xl)', border: '1px solid rgba(255,255,255,0.2)', position: 'relative', zIndex: 1}}>
                <p style={{color: 'white', margin: 0, fontSize: '15px', lineHeight: '1.6'}}>
                  <strong>Bon à savoir :</strong> Même si vous n'êtes pas directement concerné, vos clients peuvent vous demander
                  de prouver votre conformité pour travailler avec eux (clause contractuelle).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LES SANCTIONS */}
        <section style={{padding: 'var(--space-3xl) var(--space-md)', background: 'var(--color-bg)'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto'}}>
            <h2 style={{fontSize: '36px', fontWeight: '700', color: 'var(--color-text-primary)', textAlign: 'center', marginBottom: 'var(--space-md)'}}>
              Quelles sanctions en cas de non-conformité ?
            </h2>
            <p style={{fontSize: '18px', color: 'var(--color-text-secondary)', textAlign: 'center', marginBottom: 'var(--space-2xl)', maxWidth: '800px', margin: '0 auto var(--space-2xl)'}}>
              Les sanctions sont <strong>lourdes et immédiates</strong>. La responsabilité du dirigeant est engagée.
            </p>

            <div className="before-after-wrapper-design">
              <style jsx>{`
                .sanction-card {
                  transition: all 0.3s ease;
                }
                .sanction-card:hover {
                  transform: translateY(-4px);
                }
                .sanction-card-violet:hover {
                  box-shadow: 0 12px 32px rgba(168, 85, 247, 0.25);
                }
                .sanction-card-rose:hover {
                  box-shadow: 0 12px 32px rgba(236, 72, 153, 0.25);
                }
                .sanction-card-orange:hover {
                  box-shadow: 0 12px 32px rgba(249, 115, 22, 0.25);
                }
              `}</style>

              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-lg)', marginBottom: 'var(--space-2xl)'}}>
                <div className="sanction-card sanction-card-violet" style={{background: 'white', borderRadius: 'var(--radius-lg)', padding: 'var(--space-lg)', boxShadow: '0 4px 12px rgba(168, 85, 247, 0.12)', border: '2px solid #F3E8FF'}}>
                  <div style={{width: '56px', height: '56px', borderRadius: 'var(--radius-md)', background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--space-md)'}}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 style={{fontSize: '18px', fontWeight: '700', color: '#A855F7', marginBottom: 'var(--space-sm)'}}>
                    Amendes financières
                  </h3>
                  <p style={{color: 'var(--color-text-secondary)', fontSize: '14px', lineHeight: '1.6', margin: 0}}>
                    Jusqu'à <strong>10M€ ou 2% du CA mondial</strong> (le montant le plus élevé)
                  </p>
                </div>

                <div className="sanction-card sanction-card-rose" style={{background: 'white', borderRadius: 'var(--radius-lg)', padding: 'var(--space-lg)', boxShadow: '0 4px 12px rgba(236, 72, 153, 0.12)', border: '2px solid #FCE7F3'}}>
                  <div style={{width: '56px', height: '56px', borderRadius: 'var(--radius-md)', background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--space-md)'}}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM20 8v6M23 11h-6" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 style={{fontSize: '18px', fontWeight: '700', color: '#EC4899', marginBottom: 'var(--space-sm)'}}>
                    Responsabilité pénale
                  </h3>
                  <p style={{color: 'var(--color-text-secondary)', fontSize: '14px', lineHeight: '1.6', margin: 0}}>
                    Les dirigeants peuvent être tenus <strong>personnellement responsables</strong> en cas de manquement grave
                  </p>
                </div>

                <div className="sanction-card sanction-card-orange" style={{background: 'white', borderRadius: 'var(--radius-lg)', padding: 'var(--space-lg)', boxShadow: '0 4px 12px rgba(249, 115, 22, 0.12)', border: '2px solid #FFEDD5'}}>
                  <div style={{width: '56px', height: '56px', borderRadius: 'var(--radius-md)', background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--space-md)'}}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15 9l-6 6" stroke="#F97316" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h3 style={{fontSize: '18px', fontWeight: '700', color: '#F97316', marginBottom: 'var(--space-sm)'}}>
                    Exclusion des marchés
                  </h3>
                  <p style={{color: 'var(--color-text-secondary)', fontSize: '14px', lineHeight: '1.6', margin: 0}}>
                    Impossibilité de répondre aux <strong>appels d'offres publics et privés</strong> sans certification
                  </p>
                </div>
              </div>

              {/* TIMELINE */}
              <div style={{background: 'white', borderRadius: 'var(--radius-xl)', padding: 'var(--space-2xl)', boxShadow: '0 4px 12px rgba(0,0,0,0.08)'}}>
                <h3 style={{fontSize: '24px', fontWeight: '700', color: 'var(--color-text-primary)', textAlign: 'center', marginBottom: 'var(--space-xl)'}}>
                  Calendrier des sanctions
                </h3>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-lg)'}}>
                  <div style={{textAlign: 'center', padding: 'var(--space-lg)', background: '#F3F4F6', borderRadius: 'var(--radius-lg)'}}>
                    <strong style={{display: 'block', fontSize: '32px', fontWeight: '700', color: '#6B7280', marginBottom: 'var(--space-sm)'}}>2023</strong>
                    <p style={{color: '#6B7280', fontSize: '15px', margin: 0}}>Entrée en vigueur</p>
                  </div>
                  <div style={{textAlign: 'center', padding: 'var(--space-lg)', background: 'linear-gradient(135deg, #FFEDD5 0%, #FED7AA 100%)', borderRadius: 'var(--radius-lg)', border: '2px solid #F97316'}}>
                    <strong style={{display: 'block', fontSize: '32px', fontWeight: '700', color: '#F97316', marginBottom: 'var(--space-sm)'}}>2024-2026</strong>
                    <p style={{color: '#C2410C', fontSize: '15px', fontWeight: '600', margin: 0}}>Période de transition<br />Contrôles ANSSI</p>
                  </div>
                  <div style={{textAlign: 'center', padding: 'var(--space-lg)', background: 'linear-gradient(135deg, #FCE7F3 0%, #FBCFE8 100%)', borderRadius: 'var(--radius-lg)', border: '2px solid #EC4899'}}>
                    <strong style={{display: 'block', fontSize: '32px', fontWeight: '700', color: '#EC4899', marginBottom: 'var(--space-sm)'}}>2027</strong>
                    <p style={{color: '#9D174D', fontSize: '15px', fontWeight: '600', margin: 0}}>Premières sanctions<br />Conformité obligatoire</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ESPACEMENT AVANT CARTOUCHE */}
            <div style={{height: 'var(--space-xl)'}}></div>

            {/* CARTOUCHE LE TEMPS PRESSE */}
            <div className="aide-etat-banner" style={{background: 'linear-gradient(135deg, #A855F7 0%, #EC4899 60%, #F472B6 100%)', marginBottom: 0}}>
              <div className="aide-etat-content">
                <div className="aide-etat-text">
                  <div className="aide-etat-title">
                    ⚠️ Le temps presse : Les contrôles ANSSI ont déjà commencé
                  </div>
                  <div className="aide-etat-subtitle">
                    Un audit de conformité prend en moyenne 3 à 6 mois. Agissez maintenant pour éviter les sanctions.
                  </div>
                </div>
              </div>
              <a href="/#pricing" style={{display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', background: 'white', color: '#A855F7', fontSize: '16px', fontWeight: '700', borderRadius: '9999px', border: 'none', textDecoration: 'none', cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)', whiteSpace: 'nowrap', position: 'relative', zIndex: 1, flexShrink: 0}}>
                Démarrer mon audit
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* LES OBLIGATIONS */}
        <section style={{padding: 'var(--space-3xl) var(--space-md)', background: 'var(--color-bg)'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto'}}>
            <h2 style={{fontSize: '36px', fontWeight: '700', color: 'var(--color-text-primary)', textAlign: 'center', marginBottom: 'var(--space-md)'}}>
              Quelles sont mes obligations ?
            </h2>
            <p style={{fontSize: '18px', color: 'var(--color-text-secondary)', textAlign: 'center', marginBottom: 'var(--space-2xl)', maxWidth: '800px', margin: '0 auto var(--space-2xl)'}}>
              NIS2 impose <strong>10 mesures de sécurité</strong> et <strong>3 obligations administratives</strong>
            </p>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 'var(--space-xl)'}}>
              {/* MESURES TECHNIQUES */}
              <div style={{background: 'white', borderRadius: 'var(--radius-xl)', padding: 'var(--space-xl)', boxShadow: '0 4px 12px rgba(0,0,0,0.08)'}}>
                <h3 style={{fontSize: '24px', fontWeight: '700', color: 'var(--color-purple)', marginBottom: 'var(--space-lg)'}}>
                  Mesures de sécurité
                </h3>
                <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                  {['Gestion des risques cyber', 'Sécurisation des accès', 'Cryptographie des données', 'Sauvegardes régulières', 'Plan de continuité d\'activité', 'Sécurité de la chaîne d\'approvisionnement', 'Contrôle des fournisseurs', 'Formation des équipes', 'Tests de sécurité réguliers', 'Politique de divulgation des vulnérabilités'].map((item, idx) => (
                    <li key={idx} style={{padding: 'var(--space-sm) 0', borderBottom: '1px solid #E5E7EB', color: 'var(--color-text-secondary)', fontSize: '15px', display: 'flex', alignItems: 'center', gap: 'var(--space-sm)'}}>
                      <span style={{color: 'var(--color-purple)', fontSize: '18px'}}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* OBLIGATIONS ADMINISTRATIVES */}
              <div style={{background: 'white', borderRadius: 'var(--radius-xl)', padding: 'var(--space-xl)', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', border: '2px solid #F3E8FF'}}>
                <h3 style={{fontSize: '24px', fontWeight: '700', color: 'var(--color-pink)', marginBottom: 'var(--space-lg)'}}>
                  Obligations administratives
                </h3>
                <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                  <li style={{padding: 'var(--space-md)', background: '#FDEDF5', borderRadius: 'var(--radius-md)', marginBottom: 'var(--space-md)'}}>
                    <strong style={{display: 'block', color: 'var(--color-pink)', fontSize: '16px', marginBottom: 'var(--space-xs)'}}>
                      Enregistrement auprès de l'ANSSI
                    </strong>
                    <p style={{color: 'var(--color-text-secondary)', fontSize: '14px', margin: 0}}>
                      Déclarer votre entité sur MonEspaceNIS2
                    </p>
                  </li>
                  <li style={{padding: 'var(--space-md)', background: '#FDEDF5', borderRadius: 'var(--radius-md)', marginBottom: 'var(--space-md)'}}>
                    <strong style={{display: 'block', color: 'var(--color-pink)', fontSize: '16px', marginBottom: 'var(--space-xs)'}}>
                      Formation obligatoire des dirigeants
                    </strong>
                    <p style={{color: 'var(--color-text-secondary)', fontSize: '14px', margin: 0}}>
                      Responsabilité pénale du dirigeant en cas de manquement
                    </p>
                  </li>
                  <li style={{padding: 'var(--space-md)', background: '#FDEDF5', borderRadius: 'var(--radius-md)'}}>
                    <strong style={{display: 'block', color: 'var(--color-pink)', fontSize: '16px', marginBottom: 'var(--space-xs)'}}>
                      Notification des incidents sous 24h
                    </strong>
                    <p style={{color: 'var(--color-text-secondary)', fontSize: '14px', margin: 0}}>
                      Déclaration à l'ANSSI en cas de cyberattaque
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* COMMENT SE METTRE EN CONFORMITÉ */}
        <section style={{padding: 'var(--space-3xl) var(--space-md)', background: 'linear-gradient(180deg, #F3E8FF 0%, #FFF 100%)'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto'}}>
            <h2 style={{fontSize: '36px', fontWeight: '700', color: 'var(--color-text-primary)', textAlign: 'center', marginBottom: 'var(--space-2xl)'}}>
              Comment se mettre en conformité ?
            </h2>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-lg)'}}>
              {[
                { num: '1', title: 'Réaliser un audit', desc: 'Évaluer votre niveau de conformité actuel et identifier les écarts' },
                { num: '2', title: 'Obtenir un plan d\'action', desc: 'Prioriser les mesures à mettre en place selon vos risques' },
                { num: '3', title: 'Former vos équipes', desc: 'Formation obligatoire des dirigeants + sensibilisation collaborateurs' },
                { num: '4', title: 'S\'enregistrer auprès de l\'ANSSI', desc: 'Déclarer votre entité sur MonEspaceNIS2.cyber.gouv.fr' }
              ].map((step) => (
                <div key={step.num} style={{background: 'white', borderRadius: 'var(--radius-xl)', padding: 'var(--space-lg)', boxShadow: '0 4px 12px rgba(168, 85, 247, 0.1)', textAlign: 'center'}}>
                  <div style={{width: '60px', height: '60px', borderRadius: '50%', background: 'linear-gradient(135deg, #A855F7 0%, #EC4899 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '28px', fontWeight: '700', margin: '0 auto var(--space-md)'}}>
                    {step.num}
                  </div>
                  <h4 style={{fontSize: '18px', fontWeight: '700', color: 'var(--color-text-primary)', marginBottom: 'var(--space-sm)'}}>
                    {step.title}
                  </h4>
                  <p style={{color: 'var(--color-text-secondary)', fontSize: '14px', lineHeight: '1.6', margin: 0}}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            <div style={{background: 'white', borderRadius: 'var(--radius-xl)', padding: 'var(--space-xl)', marginTop: 'var(--space-2xl)', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.08)'}}>
              <p style={{fontSize: '18px', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-lg)'}}>
                <strong style={{color: 'var(--color-purple)'}}>Bon à savoir :</strong> Jusqu'à 70% d'aides de l'État possibles pour financer votre mise en conformité
              </p>
              <a href="/offres-complementaires" className="btn-artisan btn-artisan-primary" style={{display: 'inline-block'}}>
                Découvrir nos solutions d'accompagnement
              </a>
            </div>
          </div>
        </section>

        {/* RESSOURCES OFFICIELLES */}
        <section style={{padding: 'var(--space-3xl) var(--space-md)', background: 'var(--color-bg)'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto'}}>
            <h2 style={{fontSize: '36px', fontWeight: '700', color: 'var(--color-text-primary)', textAlign: 'center', marginBottom: 'var(--space-md)'}}>
              Ressources officielles
            </h2>
            <p style={{fontSize: '18px', color: 'var(--color-text-secondary)', textAlign: 'center', marginBottom: 'var(--space-2xl)'}}>
              Pour aller plus loin dans votre compréhension de NIS2
            </p>

            <style jsx>{`
              .resource-card {
                transition: all 0.3s ease;
              }
              .resource-card:hover {
                transform: translateY(-4px);
                box-shadow: 0 8px 24px rgba(168, 85, 247, 0.15) !important;
              }
            `}</style>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-lg)'}}>
              {[
                { title: 'Directive NIS2 - Texte officiel', desc: 'Directive (UE) 2022/2555 complète en français', url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32022L2555', domain: 'eur-lex.europa.eu', icon: '📋', iconType: 'emoji' },
                { title: 'Site officiel ANSSI', desc: 'Toute la réglementation et les guides pratiques', url: 'https://cyber.gouv.fr', domain: 'cyber.gouv.fr', icon: '🔒', iconType: 'emoji' },
                { title: 'MonEspaceNIS2', desc: 'Plateforme d\'enregistrement des entités concernées', url: 'https://monespacenis2.cyber.gouv.fr', domain: 'monespacenis2.cyber.gouv.fr', icon: '🏛️', iconType: 'emoji' },
                { title: 'FAQ Officielle', desc: 'Réponses aux questions fréquentes sur NIS2', url: 'https://aide.monespacenis2.cyber.gouv.fr/fr/', domain: 'aide.monespacenis2.cyber.gouv.fr', iconType: 'svg' }
              ].map((resource, idx) => (
                <a key={idx} href={resource.url} target="_blank" rel="noopener noreferrer" className="resource-card" style={{background: 'white', borderRadius: 'var(--radius-xl)', padding: 'var(--space-lg)', textDecoration: 'none', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', border: '2px solid #F3E8FF', height: '100%', boxSizing: 'border-box'}}>
                  <div style={{width: '56px', height: '56px', borderRadius: 'var(--radius-md)', background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: 'var(--space-md)', flexShrink: 0}}>
                    {resource.iconType === 'svg' ? (
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="#A855F7" strokeWidth="2"/>
                        <path d="M12 16v.01M12 12a1 1 0 0 1 1-1 2 2 0 1 0-3.464-1.5" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : resource.icon}
                  </div>
                  <h4 style={{fontSize: '18px', fontWeight: '700', color: 'var(--color-text-primary)', marginBottom: 'var(--space-sm)', flexShrink: 0}}>
                    {resource.title}
                  </h4>
                  <p style={{fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: '1.6', marginBottom: 'var(--space-md)', flex: 1}}>
                    {resource.desc}
                  </p>
                  <div style={{display: 'flex', alignItems: 'center', gap: 'var(--space-xs)', color: 'var(--color-purple)', fontSize: '14px', fontWeight: '600', flexShrink: 0, wordBreak: 'break-all'}}>
                    <span style={{flex: 1}}>{resource.domain}</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{flexShrink: 0}}>
                      <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section style={{padding: 'var(--space-3xl) var(--space-md)', background: 'linear-gradient(135deg, #A855F7 0%, #EC4899 100%)', textAlign: 'center'}}>
          <div style={{maxWidth: '800px', margin: '0 auto'}}>
            <h2 style={{fontSize: '36px', fontWeight: '700', color: 'white', marginBottom: 'var(--space-md)'}}>
              Besoin d'aide pour votre conformité NIS2 ?
            </h2>
            <p style={{fontSize: '18px', color: 'rgba(255,255,255,0.9)', marginBottom: 'var(--space-xl)'}}>
              Nos experts certifiés ISO 27001 vous accompagnent de l'audit à la déclaration ANSSI
            </p>
            <div style={{display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap'}}>
              <a href="/#pricing" style={{display: 'inline-block', padding: '16px 32px', background: 'white', color: 'var(--color-purple)', fontSize: '16px', fontWeight: '700', borderRadius: '9999px', textDecoration: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', transition: 'all 0.3s ease'}}>
                Découvrir nos audits
              </a>
              <a href={CONTACT_INFO.calendly} target="_blank" rel="noopener noreferrer" style={{display: 'inline-block', padding: '16px 32px', background: 'transparent', color: 'white', fontSize: '16px', fontWeight: '700', borderRadius: '9999px', textDecoration: 'none', border: '2px solid white', transition: 'all 0.3s ease'}}>
                Parler à un expert
              </a>
            </div>
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
