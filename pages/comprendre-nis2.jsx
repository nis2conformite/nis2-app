import Head from 'next/head';
import { CONTACT_INFO, EXTERNAL_LINKS } from '../utils/constants';
import MenuBurger from '../components/MenuBurger';

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
            <img src="/logo.png" alt="Cyber Solferino" className="header-logo-modern" />
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

          <MenuBurger />
        </div>
      </header>

      <div className="page-wrapper">
        {/* HERO */}
        <section className="hero-artisan-exact hero-compact">
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

            <div className="hero-buttons-row">
              <a href="#video-section" className="btn-hero-primary">
                Voir la vidéo explicative
              </a>
              <a href={CONTACT_INFO.calendly} target="_blank" rel="noopener noreferrer" className="btn-hero-secondary">
                Parler à un expert
              </a>
            </div>
          </div>
        </section>

        {/* C'EST QUOI NIS2 - SECTION FUSIONNÉE */}
        <section className="section-standard">
          <div className="container-lg">
            <div className="before-after-wrapper-design">
              {/* GRILLE : 2 CARTES SUR UNE LIGNE */}
              <div className="grid-auto-2">
                {/* CARTE OBJECTIF */}
                <div className="card-white-violet">
                  <div className="card-header-flex">
                    <div className="icon-circle-48 icon-gradient-violet">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <strong className="title-20-violet">Objectif</strong>
                  </div>
                  <p className="text-secondary">
                    Protéger les infrastructures critiques européennes contre les cyberattaques
                  </p>
                </div>

                {/* CARTE APPLICATION */}
                <div className="card-white-rose card-application-extended">
                  <div className="card-header-flex">
                    <div className="icon-circle-48 icon-gradient-rose">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <strong className="title-20-rose">Application</strong>
                  </div>

                  {/* Mini Timeline intégrée */}
                  <div className="mini-timeline">
                    <div className="mini-timeline-item">
                      <span className="mini-timeline-year mini-timeline-gray">2023</span>
                      <span className="mini-timeline-label">Entrée en vigueur</span>
                    </div>
                    <div className="mini-timeline-arrow">→</div>
                    <div className="mini-timeline-item">
                      <span className="mini-timeline-year mini-timeline-orange">2024-2026</span>
                      <span className="mini-timeline-label">Contrôles ANSSI</span>
                    </div>
                    <div className="mini-timeline-arrow">→</div>
                    <div className="mini-timeline-item mini-timeline-highlight">
                      <span className="mini-timeline-year mini-timeline-rose">2027</span>
                      <span className="mini-timeline-label">Sanctions</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3 CARTES SANCTIONS */}
              <div className="grid-auto-fit-sm" style={{marginTop: 'var(--space-lg)'}}>
                <div className="sanction-card-base sanction-card-violet">
                  <div className="card-header-flex-md">
                    <div className="icon-circle-56 icon-bg-light">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="title-18-violet">
                      Amendes financières
                    </h3>
                  </div>
                  <p className="text-14-secondary">
                    Jusqu'à <strong>10M€ ou 2% du CA mondial</strong> (le montant le plus élevé)
                  </p>
                </div>

                <div className="sanction-card-base sanction-card-rose">
                  <div className="card-header-flex-md">
                    <div className="icon-circle-56 icon-bg-light">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM20 8v6M23 11h-6" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="title-18-rose">
                      Responsabilité pénale
                    </h3>
                  </div>
                  <p className="text-14-secondary">
                    Les dirigeants peuvent être tenus <strong>personnellement responsables</strong> en cas de manquement grave
                  </p>
                </div>

                <div className="sanction-card-base sanction-card-orange">
                  <div className="card-header-flex-md">
                    <div className="icon-circle-56 icon-bg-light">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15 9l-6 6" stroke="#F97316" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <h3 className="title-18-orange">
                      Exclusion des marchés
                    </h3>
                  </div>
                  <p className="text-14-secondary">
                    Impossibilité de répondre aux <strong>appels d'offres publics et privés</strong> sans certification
                  </p>
                </div>
              </div>

              {/* BANDEAU LE TEMPS PRESSE */}
              <div className="aide-etat-banner" style={{background: 'linear-gradient(135deg, #A855F7 0%, #9333EA 40%, #EC4899 80%, #F472B6 100%)', marginTop: 'var(--space-lg)', marginBottom: 0, borderRadius: 'var(--radius-lg)'}}>
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
                <a href="/#pricing" className="btn-cta-banner">
                  Démarrer mon audit
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* VIDÉO AVEC HALO - EN DEHORS DU WRAPPER */}
            <div className="video-section-standalone" id="video-section">
              <h3 className="section-title-center" style={{marginTop: 'var(--space-2xl)', marginBottom: 'var(--space-lg)'}}>
                Comprendre NIS2 en vidéo
              </h3>
              <div className="video-wrapper video-halo">
                <iframe
                  src={EXTERNAL_LINKS.videoYoutube}
                  title="Directive NIS2 expliquée"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen>
                </iframe>
              </div>
            </div>
          </div>
        </section>

        {/* SUIS-JE CONCERNÉ */}
        <section className="section-standard">
          <div className="container-lg">
            <h2 className="section-title-center">
              Suis-je concerné par NIS2 ?
            </h2>
            <p className="section-subtitle-center">
              Vous êtes concerné si votre entreprise répond à <strong>2 critères</strong> :
            </p>

            <div className="grid-auto-fit mb-3xl">
              <div className="card-white-xl">
                <div className="card-header-flex-lg">
                  <div className="icon-circle-60 icon-gradient-violet">
                    1
                  </div>
                  <h3 className="title-24">
                    Taille de l'entreprise
                  </h3>
                </div>
                <p className="text-16-secondary">
                  <strong>+50 salariés</strong> OU <strong>+10M€ de chiffre d'affaires</strong>
                </p>
              </div>

              <div className="card-white-xl">
                <div className="card-header-flex-lg">
                  <div className="icon-circle-60 icon-gradient-rose">
                    2
                  </div>
                  <h3 className="title-24">
                    Secteur d'activité
                  </h3>
                </div>
                <p className="text-16-secondary">
                  Vous opérez dans l'un des <strong>18 secteurs critiques ou essentiels</strong>
                </p>
              </div>
            </div>

            {/* LISTE DES SECTEURS */}
            <div className="cyber-encart">
              <h3 className="title-28-white" style={{position: 'relative', zIndex: 1}}>
                Les 18 secteurs concernés
              </h3>

              <div className="grid-auto-fit-md" style={{position: 'relative', zIndex: 1}}>
                {/* ENTITÉS ESSENTIELLES */}
                <div>
                  <div style={{marginBottom: 'var(--space-md)'}}>
                    <span className="badge-entity-violet">
                      Entités Essentielles
                    </span>
                    <p style={{color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginTop: 'var(--space-xs)'}}>
                      Sanctions jusqu'à 10M€ ou 2% du CA mondial
                    </p>
                  </div>
                  <ul className="list-sectors">
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
                      <li key={idx}>
                        <span className="bullet-violet"></span>
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
                    <span className="badge-entity-rose">
                      Entités Importantes
                    </span>
                    <p style={{color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginTop: 'var(--space-xs)'}}>
                      Sanctions jusqu'à 7M€ ou 1,4% du CA mondial
                    </p>
                  </div>
                  <ul className="list-sectors">
                    {[
                      { main: 'Services postaux et de courrier', details: '' },
                      { main: 'Gestion des déchets', details: '' },
                      { main: 'Industrie manufacturière', details: 'chimie, pharmacie, agroalimentaire, équipements' },
                      { main: 'Fournisseurs de services numériques', details: 'réseaux sociaux, moteurs de recherche, marketplaces' },
                      { main: 'Recherche', details: '' },
                      { main: 'Administrations publiques', details: 'État, régions, départements' }
                    ].map((item, idx) => (
                      <li key={idx}>
                        <span className="bullet-rose"></span>
                        <span style={{fontSize: '15px', lineHeight: '1.5'}}>
                          <strong style={{color: 'white', fontWeight: '600'}}>{item.main}</strong>
                          {item.details && <span style={{color: 'rgba(255,255,255,0.6)'}}> ({item.details})</span>}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="note-encart">
                <p className="note-encart-text">
                  <strong>Bon à savoir :</strong> Même si vous n'êtes pas directement concerné, vos clients peuvent vous demander
                  de prouver votre conformité pour travailler avec eux (clause contractuelle).
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* LES OBLIGATIONS */}
        <section className="section-standard">
          <div className="container-lg">
            <h2 className="section-title-center">
              Quelles sont mes obligations ?
            </h2>
            <p className="section-subtitle-center">
              NIS2 impose <strong>10 mesures de sécurité</strong> et <strong>3 obligations administratives</strong>
            </p>

            <div className="grid-auto-fit-card">
              {/* MESURES TECHNIQUES */}
              <div className="card-white">
                <h3 className="title-24-violet">
                  Mesures de sécurité
                </h3>
                <ul className="list-check-simple">
                  {['Gestion des risques cyber', 'Sécurisation des accès', 'Cryptographie des données', 'Sauvegardes régulières', 'Plan de continuité d\'activité', 'Sécurité de la chaîne d\'approvisionnement', 'Contrôle des fournisseurs', 'Formation des équipes', 'Tests de sécurité réguliers', 'Politique de divulgation des vulnérabilités'].map((item, idx) => (
                    <li key={idx}>
                      <span className="check-violet">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* OBLIGATIONS ADMINISTRATIVES */}
              <div className="card-white-violet">
                <h3 className="title-24-rose">
                  Obligations administratives
                </h3>
                <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                  <li className="obligation-item">
                    <strong className="obligation-title">
                      Enregistrement auprès de l'ANSSI
                    </strong>
                    <p className="text-14-secondary">
                      Déclarer votre entité sur MonEspaceNIS2
                    </p>
                  </li>
                  <li className="obligation-item">
                    <strong className="obligation-title">
                      Formation obligatoire des dirigeants
                    </strong>
                    <p className="text-14-secondary">
                      Responsabilité pénale du dirigeant en cas de manquement
                    </p>
                  </li>
                  <li className="obligation-item">
                    <strong className="obligation-title">
                      Notification des incidents sous 24h
                    </strong>
                    <p className="text-14-secondary">
                      Déclaration à l'ANSSI en cas de cyberattaque
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* COMMENT SE METTRE EN CONFORMITÉ */}
        <section className="section-violet-gradient">
          <div className="container-lg">
            <h2 className="section-title-center" style={{marginBottom: 'var(--space-2xl)'}}>
              Comment se mettre en conformité ?
            </h2>

            <div className="grid-steps">
              {[
                { num: '1', title: 'Réaliser un audit', desc: 'Évaluer votre niveau de conformité actuel et identifier les écarts' },
                { num: '2', title: 'Obtenir un plan d\'action', desc: 'Prioriser les mesures à mettre en place selon vos risques' },
                { num: '3', title: 'Former vos équipes', desc: 'Formation obligatoire des dirigeants + sensibilisation collaborateurs' },
                { num: '4', title: 'S\'enregistrer auprès de l\'ANSSI', desc: 'Déclarer votre entité sur MonEspaceNIS2.cyber.gouv.fr' }
              ].map((step) => (
                <div key={step.num} className="step-card-center">
                  <div className="step-number-circle">
                    {step.num}
                  </div>
                  <h4 className="step-title">
                    {step.title}
                  </h4>
                  <p className="step-desc">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="info-box-white">
              <p className="info-box-text">
                <strong className="info-box-highlight">Bon à savoir :</strong> Jusqu'à 70% d'aides de l'État possibles pour financer votre mise en conformité
              </p>
              <a href="/offres-complementaires" className="btn-artisan btn-artisan-primary">
                Découvrir nos solutions d'accompagnement
              </a>
            </div>
          </div>
        </section>

        {/* RESSOURCES OFFICIELLES */}
        <section className="section-standard">
          <div className="container-lg">
            <h2 className="section-title-center">
              Ressources officielles
            </h2>
            <p className="section-subtitle-center">
              Pour aller plus loin dans votre compréhension de NIS2
            </p>

            <div className="grid-4-cols">
              {[
                { title: 'Directive NIS2 - Texte officiel', desc: 'Directive (UE) 2022/2555 complète en français', url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32022L2555', domain: 'eur-lex.europa.eu', icon: '📋', iconType: 'emoji' },
                { title: 'Site officiel ANSSI', desc: 'Toute la réglementation et les guides pratiques', url: 'https://cyber.gouv.fr', domain: 'cyber.gouv.fr', icon: '🔒', iconType: 'emoji' },
                { title: 'MonEspaceNIS2', desc: 'Plateforme d\'enregistrement des entités concernées', url: 'https://monespacenis2.cyber.gouv.fr', domain: 'monespacenis2.cyber.gouv.fr', icon: '🏛️', iconType: 'emoji' },
                { title: 'FAQ Officielle', desc: 'Réponses aux questions fréquentes sur NIS2', url: 'https://aide.monespacenis2.cyber.gouv.fr/fr/', domain: 'aide.monespacenis2.cyber.gouv.fr', iconType: 'svg' }
              ].map((resource, idx) => (
                <a key={idx} href={resource.url} target="_blank" rel="noopener noreferrer" className="resource-card-link">
                  <div className="card-header-flex-md">
                    <div className="resource-icon-box">
                      {resource.iconType === 'svg' ? (
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="10" stroke="#A855F7" strokeWidth="2"/>
                          <path d="M12 16v.01M12 12a1 1 0 0 1 1-1 2 2 0 1 0-3.464-1.5" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      ) : resource.icon}
                    </div>
                    <h4 className="resource-title">
                      {resource.title}
                    </h4>
                  </div>
                  <p className="resource-desc">
                    {resource.desc}
                  </p>
                  <div className="resource-link-text">
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
        <section className="section-cta-gradient">
          <div className="container-md">
            <h2 className="section-title-white">
              Besoin d'aide pour votre conformité NIS2 ?
            </h2>
            <p className="section-subtitle-white">
              Nos experts certifiés ISO 27001 vous accompagnent de l'audit à la déclaration ANSSI
            </p>
            <div className="cta-buttons-row">
              <a href="/#pricing" className="btn-cta-white">
                Découvrir nos audits
              </a>
              <a href={CONTACT_INFO.calendly} target="_blank" rel="noopener noreferrer" className="btn-cta-outline-white">
                Parler à un expert
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer-artisan-modern">
          <div className="footer-main-content">
            <div className="footer-brand-col">
              <img src="/logo.png" alt="Cyber Solferino" className="footer-logo" />
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
              <p className="footer-copyright">© 2025 Cyber Solferino. Tous droits réservés</p>
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
