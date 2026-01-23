import Head from 'next/head';
import { CONTACT_INFO } from '../utils/constants';
import MenuBurger from '../components/MenuBurger';

export default function Ressources() {
  // Articles statiques sur les cyberattaques
  const articles = [
    {
      title: "Attaque Reprompt contre Microsoft Copilot",
      pubDate: new Date('2026-01-15'),
      description: "Une nouvelle méthode d'attaque appelée \"Reprompt\" a été révélée, permettant aux acteurs malveillants d'exfiltrer des données sensibles des chatbots IA comme Microsoft Copilot en un seul clic, tout en contournant entièrement les contrôles de sécurité d'entreprise. L'attaquant maintient le contrôle même lorsque le chat Copilot est fermé.",
      source: "Cybersécurité"
    },
    {
      title: "Transposition NIS2 s'accélère en Europe",
      pubDate: new Date('2026-01-14'),
      description: "La transposition NIS2 s'accélère dans l'UE. L'Allemagne, le Portugal et l'Autriche ont récemment adopté une législation nationale d'implémentation, tandis que l'Espagne, la France et la Pologne approchent de l'achèvement de leurs processus de transposition.",
      source: "Réglementation"
    },
    {
      title: "L'IA transforme l'attaque et la défense en 2026",
      pubDate: new Date('2026-01-12'),
      description: "L'intelligence artificielle redéfinit les méthodes d'attaque et de défense selon Google et Fortinet. L'IA diminuera le coût de génération d'attaques et augmentera le volume, transformant la cybersécurité en \"jeu de nombres\" où l'IA élargit la toile des attaquants.",
      source: "Tendances"
    },
    {
      title: "Korean Air victime via un fournisseur",
      pubDate: new Date('2026-01-05'),
      description: "Korean Air a subi une violation de données via KC&D Service, un fournisseur gérant la restauration en vol et les duty-free. L'incident a exposé les données personnelles d'environ 30 000 employés, y compris noms et numéros de comptes bancaires. Cl0p a revendiqué la responsabilité et aurait exploité une faille Oracle E-Business Suite.",
      source: "Data Breach"
    },
    {
      title: "Vague d'attaques ransomware en début d'année",
      pubDate: new Date('2026-01-03'),
      description: "Le groupe ransomware Qilin a ciblé CSV Group et HealthBridge Chiropractic début janvier. Manage My Health en Nouvelle-Zélande a découvert un accès non autorisé compromettant 400 000 documents médicaux de 120 000 patients. Une vague d'attaques qui marque le début de l'année 2026.",
      source: "Ransomware"
    }
  ];

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date);
  };

  const documents = [
    {
      id: 'livre-blanc',
      title: 'Livre Blanc NIS2',
      subtitle: 'Guide complet pour les dirigeants',
      description: 'Tout ce que vous devez savoir sur la directive NIS2 et ses implications pour votre entreprise.',
      icon: 'book',
      color: 'violet',
      fileName: 'livre-blanc-nis2.pdf'
    },
    {
      id: 'rapport-cyberattaques',
      title: 'Rapport Cyberattaques 2025',
      subtitle: 'Analyse des menaces en France',
      description: 'État des lieux des cyberattaques touchant les entreprises françaises et européennes.',
      icon: 'chart',
      color: 'orange',
      fileName: 'rapport-cyberattaques-2025.pdf'
    }
  ];

  return (
    <>
      <Head>
        <title>Ressources Cybersécurité | Livre Blanc NIS2 & Actualités | NIS2 Conformité</title>
        <meta name="description" content="Téléchargez notre livre blanc NIS2 et notre rapport cyberattaques 2025. Suivez l'actualité cybersécurité européenne en temps réel." />
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
            <a href="/ressources" className="header-nav-link active">Ressources</a>
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
              Centre de ressources
            </div>

            <h1 className="hero-title-artisan">
              Ressources & <span className="highlight">Actualités</span>
            </h1>

            <p className="hero-subtitle-artisan">
              Téléchargez nos guides pratiques et suivez l'actualité<br />
              cybersécurité française en temps réel
            </p>
          </div>
        </section>

        {/* SECTION TÉLÉCHARGEMENTS */}
        <section className="section-standard" id="telechargements">
          <div className="container-lg">
            <h2 className="section-title-center">
              Nos documents à télécharger
            </h2>
            <p className="section-subtitle-center">
              Ressources gratuites pour comprendre et anticiper les enjeux de cybersécurité
            </p>

            <div className="ressources-download-grid">
              {documents.map((doc) => (
                <div key={doc.id} className={`ressource-card-premium ressource-card-${doc.color}`}>
                  <div className="ressource-card-header">
                    <div className={`ressource-icon-large icon-gradient-${doc.color}`}>
                      {doc.icon === 'book' ? (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M8 7h8M8 11h6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      ) : (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 20V10M12 20V4M6 20v-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                  </div>

                  <h3 className={`ressource-card-title title-gradient-${doc.color}`}>{doc.title}</h3>
                  <p className="ressource-card-subtitle">{doc.subtitle}</p>
                  <p className="ressource-card-description">{doc.description}</p>


                  <a
                    href={`/documents/${doc.fileName}`}
                    download
                    className={`btn-download btn-download-${doc.color}`}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Télécharger gratuitement
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION ACTUALITÉS RSS */}
        <section className="section-standard section-actualites" id="actualites">
          <div className="container-lg">
            <h2 className="section-title-center">
              Actualités Cybersécurité
            </h2>
            <p className="section-subtitle-center">
              Les dernières actualités sur les cyberattaques et la réglementation
            </p>

            <div className="actualites-grid">
              {articles.map((article, idx) => (
                <div key={idx} className="article-card">
                  <div className="article-meta">
                    <span className="article-source">{article.source}</span>
                    <span className="article-date">{formatDate(article.pubDate)}</span>
                  </div>
                  <h3 className="article-title">{article.title}</h3>
                  <p className="article-excerpt">{article.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="section-cta-gradient">
          <div className="container-md">
            <h2 className="section-title-white">
              Besoin d'un accompagnement personnalisé ?
            </h2>
            <p className="section-subtitle-white">
              Nos experts certifiés ISO 27001 vous guident dans votre mise en conformité NIS2
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
                <li><a href="/ressources">Ressources</a></li>
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
                  <a href="mailto:contact@cyber-solferino.com">
                    contact@cyber-solferino.com
                  </a>
                </li>
                <li><a href="tel:+33649432092">+33 (0) 6 49 43 20 92</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom-modern">
            <div className="footer-bottom-content">
              <p className="footer-copyright">© 2026 Cyber Solferino. Tous droits réservés</p>
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
