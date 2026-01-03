import PageLayout from '../components/PageLayout';
import Head from 'next/head';

export default function OffresComplementaires() {
  const services = [
    {
      id: 1,
      icon: '📄',
      title: 'Modèles de documents',
      price: '99€/mois',
      features: [
        'Modèles pour mise en conformité',
        'Mis à jour avec la réglementation',
        'Accès illimité',
      ],
    },
    {
      id: 2,
      icon: '📚',
      title: 'Formation',
      price: '149€/pers',
      features: [
        'Formation obligatoire des dirigeants',
        'Formation en distanciel',
        'Formation présentiel sur site possible',
      ],
    },
    {
      id: 3,
      icon: '💼',
      title: 'Montage dossiers Subventions',
      price: '299€',
      features: [
        'Identification des aides',
        'Constitution des dossiers',
        'Maximisation des financements',
      ],
    },
    {
      id: 4,
      icon: '⚠️',
      title: 'Notification Incidents',
      price: '99€/mois',
      features: [
        'Déclaration incident en 24h à l\'ANSSI',
        'Conseil gestion de crise',
        'Hotline téléphonique inclus',
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Offres complémentaires | NIS2 Conformité</title>
        <meta name="description" content="Découvrez nos services complémentaires : modèles de documents, formations cybersécurité, montage de dossiers de subventions, notification d'incidents ANSSI." />
      </Head>

      <PageLayout>
        {/* Hero */}
        <section className="hero">
          <div className="container">
            <h1>Services complémentaires</h1>
            <p className="hero-subtitle">
              Découvrez nos services pour aller plus loin dans la conformité et la sécurité
            </p>
          </div>
        </section>

        {/* Services grid */}
        <section className="services-section">
          <div className="container">
            <div className="services-grid">
              {services.map((service) => (
                <div key={service.id} className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <div className="service-price">{service.price}</div>
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <span className="check">→</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Détails des services */}
        <section className="details-section">
          <div className="container">
            <h2>Détails de nos services complémentaires</h2>

            {/* Modèles de documents */}
            <div className="detail-block">
              <div className="detail-icon">📄</div>
              <h3>Modèles de documents de conformité</h3>
              <div className="detail-content">
                <div className="detail-text">
                  <p className="lead">
                    Accédez à une bibliothèque complète de modèles professionnels pour accélérer
                    votre mise en conformité NIS2.
                  </p>
                  <ul>
                    <li><strong>Politiques de sécurité</strong> — Modèles conformes ANSSI</li>
                    <li><strong>Procédures opérationnelles</strong> — Gestion des incidents, sauvegarde, continuité</li>
                    <li><strong>Registres et tableaux de bord</strong> — Suivi des actifs, risques, audits</li>
                    <li><strong>Modèles de contrats</strong> — Sous-traitants, DPA, clauses cyber</li>
                    <li><strong>Mises à jour continues</strong> — Évolution avec la réglementation</li>
                  </ul>
                </div>
                <div className="detail-price-box">
                  <div className="price-highlight">99€/mois</div>
                  <p>Accès illimité à tous les modèles</p>
                  <a href="https://calendly.com/nis2conformite/30min" target="_blank" rel="noopener noreferrer" className="cta-detail">
                    Souscrire
                  </a>
                </div>
              </div>
            </div>

            {/* Formation */}
            <div className="detail-block alternate">
              <div className="detail-icon">📚</div>
              <h3>Formations cybersécurité et NIS2</h3>
              <div className="detail-content">
                <div className="detail-text">
                  <p className="lead">
                    Formez vos équipes et dirigeants aux enjeux de la cybersécurité et aux obligations NIS2.
                  </p>
                  <h4>Formats disponibles :</h4>
                  <ul>
                    <li><strong>Formation obligatoire des dirigeants</strong> — Responsabilité pénale, gouvernance cyber</li>
                    <li><strong>Sensibilisation équipes</strong> — Phishing, mots de passe, bonnes pratiques</li>
                    <li><strong>Formation technique IT</strong> — Sécurisation SI, gestion incidents, audits</li>
                    <li><strong>En distanciel ou sur site</strong> — Adaptabilité totale à votre organisation</li>
                  </ul>
                  <p className="note">
                    <a href="/formations">Voir toutes nos formations →</a>
                  </p>
                </div>
                <div className="detail-price-box">
                  <div className="price-highlight">149€/pers</div>
                  <p>Tarif dégressif par volume</p>
                  <a href="https://calendly.com/nis2conformite/30min" target="_blank" rel="noopener noreferrer" className="cta-detail">
                    Devis personnalisé
                  </a>
                </div>
              </div>
            </div>

            {/* Subventions */}
            <div className="detail-block">
              <div className="detail-icon">💼</div>
              <h3>Montage de dossiers de subventions</h3>
              <div className="detail-content">
                <div className="detail-text">
                  <p className="lead">
                    Bénéficiez de jusqu'à 70% d'aides de l'État pour financer votre mise en conformité NIS2.
                  </p>
                  <h4>Notre accompagnement :</h4>
                  <ul>
                    <li><strong>Identification des aides éligibles</strong> — France Num, BPI, Régions, Europe</li>
                    <li><strong>Constitution des dossiers complets</strong> — Documents, justificatifs, budget</li>
                    <li><strong>Maximisation des financements</strong> — Cumul d'aides, optimisation fiscale</li>
                    <li><strong>Suivi administratif</strong> — Relances, réponses aux demandes complémentaires</li>
                  </ul>
                  <div className="stat-highlight">
                    💡 <strong>En moyenne, nos clients récupèrent 12 000€ d'aides</strong>
                  </div>
                </div>
                <div className="detail-price-box">
                  <div className="price-highlight">299€</div>
                  <p>Forfait unique par dossier</p>
                  <a href="https://calendly.com/nis2conformite/30min" target="_blank" rel="noopener noreferrer" className="cta-detail">
                    Simuler mes aides
                  </a>
                </div>
              </div>
            </div>

            {/* Notification incidents */}
            <div className="detail-block alternate">
              <div className="detail-icon">⚠️</div>
              <h3>Notification d'incidents à l'ANSSI</h3>
              <div className="detail-content">
                <div className="detail-text">
                  <p className="lead">
                    Obligation NIS2 : déclarer tout incident de sécurité significatif à l'ANSSI dans les 24h.
                    Nous gérons cette obligation pour vous.
                  </p>
                  <h4>Service inclus :</h4>
                  <ul>
                    <li><strong>Déclaration en 24h</strong> — Rédaction et envoi du rapport d'incident conforme</li>
                    <li><strong>Conseil gestion de crise</strong> — Support immédiat par nos experts</li>
                    <li><strong>Hotline téléphonique 24/7</strong> — Joignabilité permanente en cas d'incident</li>
                    <li><strong>Suivi post-incident</strong> — Reporting complémentaire à 72h et bilan final</li>
                  </ul>
                  <div className="warning-highlight">
                    ⚠️ <strong>Sans déclaration dans les délais : sanction jusqu'à 10M€</strong>
                  </div>
                </div>
                <div className="detail-price-box">
                  <div className="price-highlight">99€/mois</div>
                  <p>Abonnement annuel</p>
                  <a href="https://calendly.com/nis2conformite/30min" target="_blank" rel="noopener noreferrer" className="cta-detail">
                    Souscrire
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi ces services */}
        <section className="why-section">
          <div className="container">
            <h2>Pourquoi ces services sont complémentaires ?</h2>
            <div className="why-grid">
              <div className="why-card">
                <span className="why-icon">🎯</span>
                <h4>Conformité complète</h4>
                <p>
                  L'audit identifie vos écarts. Les modèles, formations et accompagnement vous permettent
                  de les combler efficacement.
                </p>
              </div>

              <div className="why-card">
                <span className="why-icon">💰</span>
                <h4>Optimisation budgétaire</h4>
                <p>
                  Les subventions réduisent drastiquement le coût de mise en conformité. En moyenne,
                  70% des dépenses peuvent être financées.
                </p>
              </div>

              <div className="why-card">
                <span className="why-icon">⚡</span>
                <h4>Réactivité en cas de crise</h4>
                <p>
                  La notification d'incidents vous protège juridiquement et vous permet de respecter
                  vos obligations même en situation d'urgence.
                </p>
              </div>

              <div className="why-card">
                <span className="why-icon">📈</span>
                <h4>Montée en compétences</h4>
                <p>
                  Les formations garantissent que vos équipes comprennent et appliquent durablement
                  les bonnes pratiques de cybersécurité.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="cta-section">
          <div className="container">
            <h2>Besoin d'un accompagnement complet ?</h2>
            <p>
              Discutons ensemble de vos besoins spécifiques et construisons une offre sur-mesure.
            </p>
            <a 
              href="https://calendly.com/nis2conformite/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-button"
            >
              📞 Obtenir un devis personnalisé
            </a>
            <p className="cta-note">
              ✓ Réponse sous 2h • ✓ Tarifs transparents • ✓ Sans engagement
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

          /* Services grid */
          .services-section {
            padding: 80px 20px;
            background: #F7F8FC;
          }

          .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 32px;
          }

          .service-card {
            background: white;
            padding: 40px 32px;
            border-radius: 16px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
            text-align: center;
            transition: all 0.3s ease;
          }

          .service-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 8px 32px rgba(30, 58, 138, 0.15);
          }

          .service-icon {
            font-size: 64px;
            margin-bottom: 20px;
          }

          .service-card h3 {
            font-size: 22px;
            font-weight: 800;
            color: #1E3A8A;
            margin-bottom: 16px;
            min-height: 56px;
          }

          .service-price {
            font-size: 32px;
            font-weight: 900;
            color: #FF5630;
            margin-bottom: 24px;
          }

          .service-features {
            list-style: none;
            padding: 0;
            text-align: left;
          }

          .service-features li {
            padding: 10px 0;
            font-size: 15px;
            color: #334155;
            display: flex;
            align-items: flex-start;
            gap: 12px;
          }

          .check {
            color: #1E3A8A;
            font-weight: 700;
            flex-shrink: 0;
          }

          /* Details section */
          .details-section {
            padding: 80px 20px;
          }

          .details-section h2 {
            font-size: 36px;
            font-weight: 800;
            color: #1E3A8A;
            margin-bottom: 60px;
            text-align: center;
          }

          .detail-block {
            max-width: 1000px;
            margin: 0 auto 80px;
            background: white;
            padding: 48px;
            border-radius: 20px;
            box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
          }

          .detail-block.alternate {
            background: #F7F8FC;
          }

          .detail-icon {
            font-size: 72px;
            text-align: center;
            margin-bottom: 24px;
          }

          .detail-block h3 {
            font-size: 32px;
            font-weight: 800;
            color: #1E3A8A;
            margin-bottom: 32px;
            text-align: center;
          }

          .detail-content {
            display: grid;
            grid-template-columns: 1fr 300px;
            gap: 48px;
            align-items: start;
          }

          .detail-text .lead {
            font-size: 18px;
            font-weight: 600;
            color: #1E3A8A;
            margin-bottom: 24px;
          }

          .detail-text h4 {
            font-size: 20px;
            color: #1E3A8A;
            margin: 24px 0 16px;
          }

          .detail-text ul {
            list-style: none;
            padding: 0;
          }

          .detail-text li {
            padding: 12px 0;
            padding-left: 28px;
            position: relative;
            font-size: 16px;
            line-height: 1.6;
            color: #334155;
          }

          .detail-text li:before {
            content: "✓";
            position: absolute;
            left: 0;
            color: #16A34A;
            font-weight: 700;
          }

          .note {
            margin-top: 24px;
            padding: 16px;
            background: #FFF3CD;
            border-radius: 8px;
            font-size: 15px;
          }

          .note a {
            color: #1E3A8A;
            font-weight: 700;
            text-decoration: none;
          }

          .note a:hover {
            text-decoration: underline;
          }

          .stat-highlight,
          .warning-highlight {
            margin-top: 24px;
            padding: 20px;
            border-radius: 12px;
            font-size: 16px;
          }

          .stat-highlight {
            background: #DCFCE7;
            border-left: 4px solid #16A34A;
          }

          .warning-highlight {
            background: #FEE2E2;
            border-left: 4px solid #DC2626;
          }

          .detail-price-box {
            background: #1E3A8A;
            padding: 32px 24px;
            border-radius: 16px;
            text-align: center;
            color: white;
          }

          .price-highlight {
            font-size: 42px;
            font-weight: 900;
            color: #FF5630;
            margin-bottom: 12px;
          }

          .detail-price-box p {
            font-size: 15px;
            opacity: 0.9;
            margin-bottom: 24px;
          }

          .cta-detail {
            display: block;
            padding: 16px 32px;
            background: #FF5630;
            color: white;
            font-size: 16px;
            font-weight: 700;
            text-decoration: none;
            border-radius: 12px;
            transition: all 0.3s ease;
          }

          .cta-detail:hover {
            background: #E64825;
            transform: translateY(-2px);
            box-shadow: 0 4px 16px rgba(255, 86, 48, 0.4);
          }

          /* Why section */
          .why-section {
            padding: 80px 20px;
            background: #F7F8FC;
          }

          .why-section h2 {
            font-size: 36px;
            font-weight: 800;
            color: #1E3A8A;
            margin-bottom: 48px;
            text-align: center;
          }

          .why-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 32px;
          }

          .why-card {
            background: white;
            padding: 32px;
            border-radius: 16px;
            text-align: center;
            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
          }

          .why-icon {
            font-size: 48px;
            display: block;
            margin-bottom: 16px;
          }

          .why-card h4 {
            font-size: 20px;
            font-weight: 700;
            color: #1E3A8A;
            margin-bottom: 12px;
          }

          .why-card p {
            font-size: 15px;
            line-height: 1.6;
            color: #64748B;
          }

          /* CTA section */
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
            .detail-content {
              grid-template-columns: 1fr;
            }

            .detail-price-box {
              max-width: 400px;
              margin: 0 auto;
            }
          }

          @media (max-width: 768px) {
            .hero h1 {
              font-size: 32px;
            }

            .services-section,
            .details-section,
            .why-section,
            .cta-section {
              padding: 48px 20px;
            }

            .detail-block {
              padding: 32px 20px;
            }
          }
        `}</style>
      </PageLayout>
    </>
  );
}
