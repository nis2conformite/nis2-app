import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useQuiz } from '../hooks/useQuiz';
import { useLeadPopup } from '../hooks/useLeadPopup';
import { QuizModal } from '../components/QuizModal';
import { 
  PRICING_OFFERS, 
  TESTIMONIALS, 
  HERO_STATS, 
  FAQ_ITEMS,
  CONTACT_INFO,
  EXTERNAL_LINKS,
  EXPERTISE_TIMELINE,
  IMPACT_STATS
} from '../utils/constants';
import '../styles/globals.css';

export default function Home() {
  const [videoIsPlaying, setVideoIsPlaying] = useState(false);
  const quiz = useQuiz();
  const popup = useLeadPopup({ 
    quizIsOpen: quiz.isOpen, 
    videoIsPlaying 
  });

  // Fonction Stripe Checkout
  async function handleStripeCheckout() {
    try {
      const response = await fetch('/api/stripe/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      
      const data = await response.json();
      
      if (data.error) {
        alert('Erreur: ' + data.error);
        return;
      }
      
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error('Erreur:', error);
    }
  }

  useEffect(() => {
    // Sticky header au scroll
    const handleScroll = () => {
      const stickyHeader = document.getElementById('stickyHeader');
      const heroSection = document.querySelector('.hero');
      
      if (heroSection && stickyHeader) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        if (window.scrollY > heroBottom) {
          stickyHeader.classList.add('visible');
        } else {
          stickyHeader.classList.remove('visible');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // FAQ accordion
    document.querySelectorAll('.faq-item').forEach(item => {
      item.addEventListener('click', function() {
        this.classList.toggle('active');
      });
    });

    // Intersection Observer pour animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    document.querySelectorAll('.price-card, .testimonial, .impact-card, .expertise-card').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
      observer.observe(el);
    });

    // Carousel Testimonials
    const carousel = document.getElementById('testimonialCarousel');
    if (carousel) {
      const wrapper = carousel.querySelector('.testimonials-wrapper');
      const testimonials = carousel.querySelectorAll('.testimonial');
      const dotsContainer = document.getElementById('carouselDots');
      const prevBtn = document.getElementById('prevBtn');
      const nextBtn = document.getElementById('nextBtn');
      
      let currentIndex = 0;
      const totalSlides = testimonials.length;

      // Créer les dots
      for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.classList.add('carousel-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
      }

      const dots = dotsContainer.querySelectorAll('.carousel-dot');

      function updateCarousel() {
        wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, index) => {
          dot.classList.toggle('active', index === currentIndex);
        });
      }

      function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
      }

      function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
      }

      function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
      }

      if (nextBtn) nextBtn.addEventListener('click', nextSlide);
      if (prevBtn) prevBtn.addEventListener('click', prevSlide);

      // Auto-play carousel
      let autoplayInterval = setInterval(nextSlide, 5000);

      carousel.addEventListener('mouseenter', () => {
        clearInterval(autoplayInterval);
      });

      carousel.addEventListener('mouseleave', () => {
        autoplayInterval = setInterval(nextSlide, 5000);
      });

      // Swipe mobile
      let touchStartX = 0;
      let touchEndX = 0;

      carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      });

      carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 50) nextSlide();
        if (touchEndX - touchStartX > 50) prevSlide();
      });
    }

    // YouTube API pour tracking vidéo
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = function() {
      const iframe = document.querySelector('.video-container iframe');
      if (iframe) {
        new window.YT.Player(iframe, {
          events: {
            'onStateChange': (event) => {
              setVideoIsPlaying(event.data === window.YT.PlayerState.PLAYING);
            }
          }
        });
      }
    };
  }, []);

  return (
    <>
      <Head>
        <title>NIS2 Conformité | Expert Cybersécurité ISO 27001 | Accompagnement Stratégique PME</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="bg-gradient"></div>

      <div className="alert-bar">
        <span>⚠️ NIS2 Conformité obligatoire • Premières sanctions en 2027 • Agissez maintenant</span>
      </div>

      {/* Sticky Header */}
      <div className="sticky-header" id="stickyHeader">
        <div className="sticky-header-content">
          <div className="sticky-logo">NIS2<span> Conformité</span></div>
          <div className="sticky-cta-group">
            <a href={CONTACT_INFO.calendly} target="_blank" rel="noopener noreferrer" className="btn-sticky primary">
              📅 RDV expert gratuit
            </a>
            <a href="#pricing" className="btn-sticky secondary">
              Nos offres
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        {/* HERO SECTION */}
        <section className="hero">
          <div className="logo">{CONTACT_INFO.company}</div>
          <div className="tagline">{CONTACT_INFO.tagline}</div>
          
          <h1>
            <span className="highlight">Anticipez les risques financiers liés à NIS2</span>
            La plateforme d'audit et de conformité cyber pensée pour les PME et ETI européennes
          </h1>
          
          <p className="subtitle">
            Protégez votre activité, votre réputation et votre résilience. 
            Transformez NIS2 en levier de performance avec un accompagnement d'experts cyber certifiés ISO 27001.
          </p>

          <div className="stats">
            {HERO_STATS.map((stat, index) => (
              <div key={index} className="stat">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="cta-group">
            <button onClick={quiz.openQuiz} className="btn btn-primary">
              🎯 Suis-je concerné par NIS2 ?
            </button>
            <a href={EXTERNAL_LINKS.guideNIS2} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              Comprendre NIS2 en détail
            </a>
          </div>
        </section>

        {/* VIDÉO SECTION */}
        <section className="video-section">
          <div className="video-header">
            <div className="video-badge">🎥 Comprendre NIS2 en vidéo</div>
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

        {/* RISQUES ET OPPORTUNITÉS */}
        <div className="risk-opportunity-wrapper">
          <section className="warning-card">
            <h2>⚠️ Les enjeux de la non-conformité</h2>
            <ul className="warning-list">
              <li><strong>Sanctions financières lourdes</strong> — Jusqu'à 10M€ ou 2% du chiffre d'affaires mondial</li>
              <li><strong>Responsabilité pénale du dirigeant</strong> — En cas de manquement aux obligations NIS2</li>
              <li><strong>Exclusion des marchés</strong> — Impossibilité de répondre aux appels d'offres publics et privés</li>
              <li><strong>Perte de confiance B2B</strong> — Vos clients exigent désormais la conformité</li>
              <li><strong>Contrôles réglementaires</strong> — Audits de votre entreprise sur site sans préavis de l'ANSSI</li>
            </ul>
          </section>

          <section className="value-prop">
            <h2>🏆 Transformez la contrainte en levier stratégique</h2>
            <ul className="value-list">
              <li><strong>Remportez les appels d'offres</strong> — La conformité devient un critère obligatoire de sélection</li>
              <li><strong>Différenciez-vous</strong> — Positionnez-vous comme le partenaire de confiance de votre secteur</li>
              <li><strong>Rassurez vos clients</strong> — Montrez que vous protéger les données de vos clients</li>
              <li><strong>Fidélisez vos partenaires</strong> — Consolidez votre réputation d'acteur stable et responsable</li>
              <li><strong>Valorisez votre entreprise</strong> — Une organisation conforme vaut plus en cas de cession</li>
            </ul>
          </section>
        </div>

        {/* CTA Inline */}
        <div className="cta-inline">
          <p>🚀 Transformez la contrainte en opportunité business</p>
          <a href="#pricing" className="btn">
            Découvrir nos offres
          </a>
        </div>

        {/* RISQUES CHIFFRÉS */}
        <section className="impact-section">
          <div className="section-header">
            <div className="section-badge">RISQUES CHIFFRÉS</div>
            <h2>La prévention est plus rentable qu'une crise cyber</h2>
            <p className="section-subtitle">Vulnérabilité des PME et ETI • 43% perdent des clients après une attaque cyber</p>
          </div>

          <div className="impact-cards">
            {IMPACT_STATS.map((stat, index) => (
              <div key={index} className="impact-card" style={{delay: `${index * 0.15}s`}}>
                <div className="impact-icon">{stat.icon}</div>
                <div className="impact-stat">{stat.value}</div>
                <div className="impact-label">{stat.label}</div>
                <p className="impact-detail">{stat.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Inline */}
        <div className="cta-inline">
          <p>🛡️ Renforcez la sécurité informatique et la résilience de votre entreprise</p>
          <a href={CONTACT_INFO.calendly} target="_blank" rel="noopener noreferrer" className="btn">
            📅 Echange gratuit avec un expert
          </a>
        </div>

        {/* EXPERTISE */}
        <section className="expertise-section">
          <div className="section-header">
            <div className="section-badge success">NOTRE APPROCHE</div>
            <h2>Préparez-vous à NIS2 avec notre méthode éprouvée</h2>
            <p className="section-subtitle">Notre accompagnement se base sur le référentiel officiel de l'ANSSI.</p>
          </div>

          <div className="timeline-container">
            <div className="timeline-horizontal">
              {EXPERTISE_TIMELINE.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-number">{item.number}</div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">{item.title}</h3>
                    <p className="timeline-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="expertise-grid">
            <div className="expertise-card" style={{delay: '0s'}}>
              <div className="expertise-number">15+</div>
              <div className="expertise-title">Années d'expérience terrain</div>
              <p>Depuis 2009, nous accompagnons les dirigeants dans leur démarche de sécurisation et de conformité Cyber.</p>
            </div>

            <div className="expertise-card highlight" style={{delay: '0.15s'}}>
              <div className="certification-badge">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div className="expertise-title">Une équipe d'experts en cyber défense</div>
              <p>Consultants accrédités aux normes internationales ISO 27001. Méthodologie validée et reconnue par l'ANSSI.</p>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="pricing-section" id="pricing">
          <div className="section-header">
            <div className="section-badge">TARIFS CLAIRS</div>
            <h2>Investissement vs Amende</h2>
            <p className="section-subtitle">Un audit coûte 200x moins cher qu'une sanction</p>
          </div>

          <div style={{maxWidth: '850px', margin: '0 auto 40px auto', padding: '16px 24px', background: 'linear-gradient(90deg, rgba(76, 175, 80, 0.08) 0%, rgba(76, 175, 80, 0.12) 100%)', borderLeft: '4px solid #4caf50', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '16px'}}>
            <div style={{flexShrink: '0', fontSize: '24px'}}>💡</div>
            <div style={{flex: '1', color: '#2e7d32', fontSize: '15px', lineHeight: '1.5'}}>
              <strong style={{color: '#1b5e20'}}>Aides de l'État disponibles</strong> — Réduisez le coût de votre mise en conformité.
            </div>
          </div>

          <div className="pricing-cards">
            {PRICING_OFFERS.map((offer, index) => (
              <div 
                key={offer.id} 
                className={`price-card ${offer.popular ? 'featured' : ''}`}
                style={{delay: `${index * 0.1}s`}}
              >
                {offer.popular && <div className="popular-badge">⭐ POPULAIRE</div>}
                <h3>{offer.name}</h3>
                <div className="price">{offer.price}€</div>
                <div className="price-sub">{offer.period}</div>
                <div className="ideal-for">
                  <strong>Idéal pour :</strong>
                  {offer.idealFor}
                </div>
                <ul className="features">
                  {offer.features.map((feature, i) => (
                    <li key={i} dangerouslySetInnerHTML={{__html: feature}} />
                  ))}
                </ul>
                {offer.cta.type === 'stripe' ? (
                  <button onClick={handleStripeCheckout} className="btn btn-secondary">
                    {offer.cta.text}
                  </button>
                ) : (
                  <a 
                    href={offer.cta.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`btn ${offer.popular ? 'btn-primary' : 'btn-secondary'}`}
                  >
                    {offer.cta.text}
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* TÉMOIGNAGES */}
        <section className="social-proof">
          <div className="section-header">
            <div className="section-badge">TÉMOIGNAGES</div>
            <h2>Dirigeants conformes, entreprises gagnantes</h2>
            <p className="section-subtitle">Ils ont fait de NIS2 un levier de performance</p>
          </div>

          <div className="testimonials" id="testimonialCarousel">
            <div className="testimonials-wrapper">
              {TESTIMONIALS.map((testimonial) => (
                <div key={testimonial.id} className="testimonial">
                  <div className="testimonial-text">"{testimonial.text}"</div>
                  <div className="testimonial-author">
                    <div className="author-avatar">{testimonial.author.avatar}</div>
                    <div className="author-info">
                      <div className="author-name">{testimonial.author.name}</div>
                      <div className="author-role">{testimonial.author.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="carousel-controls">
              <button className="carousel-btn" id="prevBtn">←</button>
              <div className="carousel-dots" id="carouselDots"></div>
              <button className="carousel-btn" id="nextBtn">→</button>
            </div>
          </div>
        </section>

        {/* CTA Inline */}
        <div className="cta-inline">
          <p>💬 Échangez avec un de nos experts • Obtenez des réponses claires</p>
          <a href={CONTACT_INFO.calendly} target="_blank" rel="noopener noreferrer" className="btn">
            📅 Prendre rendez-vous
          </a>
        </div>

        {/* FAQ */}
        <section className="faq" id="quiz">
          <div className="section-header">
            <div className="section-badge">FAQ</div>
            <h2>Les questions que se posent les dirigeants</h2>
          </div>
          
          {FAQ_ITEMS.map((item) => (
            <div key={item.id} className="faq-item">
              <div className="faq-question">
                {item.icon} {item.question}
                <span>↓</span>
              </div>
              <div className="faq-answer">{item.answer}</div>
            </div>
          ))}
        </section>

        {/* FINAL CTA */}
        <section className="final-cta">
          <h2>Sécurisez votre avenir dès aujourd'hui</h2>
          <p>Échange confidentiel avec un consultant certifié ISO 27001<br /><strong>Audit indépendant pour mesurer votre conformité</strong></p>
          <a href={CONTACT_INFO.calendly} target="_blank" rel="noopener noreferrer" className="btn">
            📅 Réserver un échange gratuit
          </a>
        </section>

        <footer className="footer">
          <p><strong>{CONTACT_INFO.company}</strong> • Mise en conformité NIS2 • Basé sur le referenciel ANSSI</p>
          <p style={{marginTop: '10px'}}>{CONTACT_INFO.website}</p>
          <p style={{marginTop: '8px', opacity: '0.6'}}>Mentions légales • CGV • Politique de confidentialité</p>
        </footer>
      </div>

      {/* FAB */}
      <div className="fab" onClick={() => window.location.href=`tel:${CONTACT_INFO.phone}`}>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      </div>

      {/* MODALS */}
      <QuizModal quiz={quiz} />
    </>
  );
}
