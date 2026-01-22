import Head from 'next/head';
import { useState, useEffect } from 'react';
import { CONTACT_INFO } from '../utils/constants';
import MenuBurger from '../components/MenuBurger';

export default function Ressources() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Flux RSS européens sur la cybersécurité
  const RSS_FEEDS = [
    'https://www.enisa.europa.eu/press/rss.xml', // ENISA - Agence européenne cybersécurité
    'https://feeds.feedburner.com/TheHackersNews', // The Hacker News
  ];

  useEffect(() => {
    fetchRSSArticles();
  }, []);

  const fetchRSSArticles = async () => {
    setLoading(true);
    try {
      // Utiliser un proxy CORS pour récupérer les flux RSS
      const CORS_PROXY = 'https://api.rss2json.com/v1/api.json?rss_url=';

      const feedPromises = RSS_FEEDS.map(async (feedUrl) => {
        try {
          const response = await fetch(`${CORS_PROXY}${encodeURIComponent(feedUrl)}`);
          const data = await response.json();
          if (data.status === 'ok' && data.items) {
            return data.items.map(item => ({
              title: item.title,
              link: item.link,
              pubDate: new Date(item.pubDate),
              description: item.description?.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
              source: data.feed?.title || 'Cybersécurité Europe'
            }));
          }
          return [];
        } catch (err) {
          console.error('Erreur flux RSS:', err);
          return [];
        }
      });

      const allArticles = await Promise.all(feedPromises);
      const flatArticles = allArticles.flat();

      // Trier par date et prendre les 3 plus récents
      const sortedArticles = flatArticles
        .sort((a, b) => b.pubDate - a.pubDate)
        .slice(0, 3);

      setArticles(sortedArticles);
      setError(null);
    } catch (err) {
      setError('Impossible de charger les actualités');
      // Articles de fallback en cas d'erreur
      setArticles([
        {
          title: "NIS2 : L'ENISA publie de nouvelles recommandations pour les entreprises européennes",
          link: "https://www.enisa.europa.eu",
          pubDate: new Date(),
          description: "L'Agence de l'Union européenne pour la cybersécurité (ENISA) vient de publier un nouveau guide pratique...",
          source: "ENISA"
        },
        {
          title: "Cyberattaques en Europe : bilan et tendances 2025",
          link: "https://www.enisa.europa.eu",
          pubDate: new Date(Date.now() - 86400000),
          description: "Le nombre de cyberattaques ciblant les entreprises européennes continue d'augmenter...",
          source: "ENISA"
        },
        {
          title: "Les PME face aux nouvelles exigences de cybersécurité",
          link: "https://www.enisa.europa.eu",
          pubDate: new Date(Date.now() - 172800000),
          description: "Avec l'entrée en vigueur de NIS2, les petites et moyennes entreprises doivent renforcer...",
          source: "The Hacker News"
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

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
      points: [
        'Les 18 secteurs concernés expliqués',
        'Les 10 mesures de sécurité obligatoires',
        'Checklist de mise en conformité',
        'Calendrier des échéances clés'
      ],
      icon: 'book',
      color: 'violet',
      fileName: 'livre-blanc-nis2.pdf',
      pages: '40 pages'
    },
    {
      id: 'rapport-cyberattaques',
      title: 'Rapport Cyberattaques 2025',
      subtitle: 'Analyse des menaces en Europe',
      description: 'État des lieux des cyberattaques touchant les entreprises européennes et françaises.',
      points: [
        'Statistiques et tendances 2025',
        'Secteurs les plus ciblés',
        'Coûts moyens des incidents',
        'Recommandations de protection'
      ],
      icon: 'chart',
      color: 'rose',
      fileName: 'rapport-cyberattaques-2025.pdf',
      pages: '32 pages'
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
              cybersécurité européenne en temps réel
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
                    <div className="ressource-badge">{doc.pages}</div>
                  </div>

                  <h3 className={`ressource-card-title title-gradient-${doc.color}`}>{doc.title}</h3>
                  <p className="ressource-card-subtitle">{doc.subtitle}</p>
                  <p className="ressource-card-description">{doc.description}</p>

                  <ul className="ressource-points-list">
                    {doc.points.map((point, idx) => (
                      <li key={idx}>
                        <span className={`check-${doc.color}`}>✓</span>
                        {point}
                      </li>
                    ))}
                  </ul>

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
            <div className="actualites-header">
              <div>
                <h2 className="section-title-center">
                  Actualités Cybersécurité
                </h2>
                <p className="section-subtitle-center">
                  Les dernières nouvelles de la cybersécurité en Europe
                </p>
              </div>
              <button
                onClick={fetchRSSArticles}
                className="btn-refresh"
                disabled={loading}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className={loading ? 'spin' : ''}>
                  <path d="M23 4v6h-6M1 20v-6h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Actualiser
              </button>
            </div>

            <div className="actualites-grid">
              {loading ? (
                // Skeleton loading
                [...Array(3)].map((_, idx) => (
                  <div key={idx} className="article-card article-card-skeleton">
                    <div className="skeleton-date"></div>
                    <div className="skeleton-title"></div>
                    <div className="skeleton-text"></div>
                    <div className="skeleton-text short"></div>
                  </div>
                ))
              ) : (
                articles.map((article, idx) => (
                  <a
                    key={idx}
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="article-card"
                  >
                    <div className="article-meta">
                      <span className="article-source">{article.source}</span>
                      <span className="article-date">{formatDate(article.pubDate)}</span>
                    </div>
                    <h3 className="article-title">{article.title}</h3>
                    <p className="article-excerpt">{article.description}</p>
                    <span className="article-link">
                      Lire l'article
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </a>
                ))
              )}
            </div>

            {error && (
              <p className="actualites-error">
                {error} - Affichage des articles de démonstration
              </p>
            )}

            <div className="actualites-sources">
              <p>Sources : ENISA (Agence européenne de cybersécurité), The Hacker News</p>
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
