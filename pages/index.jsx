import { useEffect } from 'react';
import Head from 'next/head';

// ═══════════════════════════════════════════════════════════════
// DONNÉES CENTRALISÉES
// ═══════════════════════════════════════════════════════════════

const COLORS = {
  primary: '#1E3A8A',      // Bleu Défense
  accent: '#7C3AED',       // Violet light
  light: '#EFF6FF',        // Bleu ultra-light
  white: '#FFFFFF',
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    600: '#4B5563',
    700: '#374151',
    900: '#111827'
  }
};

const STATS = [
  { value: '15 ans', label: "d'expérience cyber" },
  { value: '500+', label: 'entreprises protégées' },
  { value: '24/7', label: 'support disponible' }
];

const CREDENTIALS = [
  {
    title: '15 ans d\'expertise',
    desc: 'Leaders reconnus en cybersécurité depuis 2009',
    icon: '🏆'
  },
  {
    title: 'Certifications officielles',
    desc: 'ISO 27001, qualifications ANSSI et partenaires institutionnels',
    icon: '✓'
  }
];

const APPROACH_STEPS = [
  {
    num: '01',
    title: 'Diagnostic initial',
    desc: 'Audit complet de votre posture de sécurité actuelle et identification des vulnérabilités critiques.'
  },
  {
    num: '02',
    title: 'Plan d\'action personnalisé',
    desc: 'Roadmap adaptée à vos enjeux métiers avec priorisation des actions selon les risques.'
  },
  {
    num: '03',
    title: 'Accompagnement continu',
    desc: 'Suivi régulier, formation des équipes et amélioration continue de votre cybersécurité.'
  }
];

const TESTIMONIALS = [
  {
    name: 'Marie Dubois',
    role: 'DSI',
    company: 'Groupe hospitalier régional',
    text: 'Grâce à leur accompagnement, nous avons sécurisé nos données patients et obtenu notre conformité NIS2 en 6 mois. Une équipe réactive et pédagogue.',
    avatar: '👩‍💼'
  },
  {
    name: 'Thomas Laurent',
    role: 'CEO',
    company: 'Fintech (250 collaborateurs)',
    text: 'Leur approche pragmatique nous a permis de renforcer notre sécurité sans ralentir notre croissance. ROI visible dès les premiers mois.',
    avatar: '👨‍💼'
  },
  {
    name: 'Sophie Martin',
    role: 'Directrice Opérations',
    company: 'Industrie 4.0',
    text: 'L\'audit a révélé des failles critiques que nous ignorions. Aujourd\'hui, notre SI industriel est sécurisé et nos certifications à jour.',
    avatar: '👩‍💼'
  }
];

const PRICING = [
  {
    name: 'Starter',
    price: '2 490€',
    period: 'HT',
    popular: false,
    features: [
      'Audit de conformité NIS2',
      'Rapport de recommandations',
      'Plan d\'action priorisé',
      '2h de consulting incluses',
      'Support par email'
    ],
    cta: 'Démarrer l\'audit'
  },
  {
    name: 'Essentiel',
    price: '5 990€',
    period: 'HT',
    popular: true,
    features: [
      'Tout Starter inclus',
      'Tests d\'intrusion (pentest)',
      'Analyse des vulnérabilités',
      'Formation équipe IT (4h)',
      'Support prioritaire 48h',
      'Suivi trimestriel (6 mois)'
    ],
    cta: 'Formule recommandée'
  },
  {
    name: 'Premium',
    price: 'Sur mesure',
    period: 'Devis personnalisé',
    popular: false,
    features: [
      'Tout Essentiel inclus',
      'RSSI externalisé (temps partiel)',
      'SOC 24/7 + monitoring',
      'Gestion de crise cyber',
      'Certification ISO 27001',
      'Support dédié illimité'
    ],
    cta: 'Obtenir un devis'
  }
];

const COMPLEMENTARY_SERVICES = [
  {
    icon: '📞',
    title: 'Hotline cyber',
    desc: 'Assistance rapide pour vos questions de sécurité.'
  },
  {
    icon: '⚙️',
    title: 'Outils automatisés',
    desc: 'Simplifiez votre conformité avec des solutions clés en main.'
  },
  {
    icon: '🔍',
    title: 'Tests techniques',
    desc: 'Évaluation proactive des vulnérabilités.'
  },
  {
    icon: '⚡',
    title: 'Remédiation rapide',
    desc: 'Mise en place de correctifs critiques.'
  }
];

const FAQ_ITEMS = [
  {
    q: 'Qu\'est-ce que la directive NIS2 ?',
    a: 'NIS2 est une directive européenne qui impose des obligations de cybersécurité aux entreprises des secteurs critiques (santé, énergie, transport, numérique...) et à leurs fournisseurs. Elle vise à renforcer la résilience cyber de l\'UE.'
  },
  {
    q: 'Mon entreprise est-elle concernée ?',
    a: 'Vous êtes concerné si : vous opérez dans un secteur critique, vous comptez +50 salariés ou +10M€ CA, ou vous êtes sous-traitant d\'entités critiques. Notre quiz vous aide à le déterminer.'
  },
  {
    q: 'Quelles sont les sanctions en cas de non-conformité ?',
    a: 'Les sanctions peuvent atteindre 10M€ ou 2% du CA mondial. Au-delà des amendes, vous risquez une atteinte réputationnelle majeure et des poursuites pénales en cas d\'incident.'
  },
  {
    q: 'Combien de temps prend la mise en conformité ?',
    a: 'Entre 3 et 12 mois selon votre maturité cyber actuelle. Nous vous accompagnons avec un plan d\'action réaliste et adapté à vos ressources.'
  },
  {
    q: 'Puis-je commencer sans tout chambouler ?',
    a: 'Absolument. Notre approche est progressive : nous priorisons les actions critiques et intégrons les changements sans perturber vos opérations.'
  }
];

// ═══════════════════════════════════════════════════════════════
// COMPOSANT PRINCIPAL
// ═══════════════════════════════════════════════════════════════

export default function Home() {
  
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
    window.handleStripeCheckout = handleStripeCheckout;

    const initializeApp = () => {
      try {
        let quizIsOpen = false;
        let videoIsPlaying = false;

        // Sticky header
        const stickyHeader = document.getElementById('stickyHeader');
        const heroSection = document.querySelector('.hero');
        
        window.addEventListener('scroll', () => {
            if (heroSection) {
                const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
                stickyHeader?.classList.toggle('visible', window.scrollY > heroBottom);
            }
        });

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href'))?.scrollIntoView({ 
                  behavior: 'smooth', 
                  block: 'start' 
                });
            });
        });

        // FAQ accordion
        document.querySelectorAll('.faq-item').forEach(item => {
            item.addEventListener('click', function() {
                this.classList.toggle('active');
            });
        });

        // Intersection Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            observer.observe(el);
        });

        // Carousel
        const carousel = document.getElementById('testimonialCarousel');
        if (carousel) {
          const wrapper = carousel.querySelector('.testimonials-wrapper');
          const testimonials = carousel.querySelectorAll('.testimonial');
          const dotsContainer = document.getElementById('carouselDots');
          const prevBtn = document.getElementById('prevBtn');
          const nextBtn = document.getElementById('nextBtn');
          
          let currentIndex = 0;
          const totalSlides = testimonials.length;

          // Créer dots
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

          nextBtn?.addEventListener('click', nextSlide);
          prevBtn?.addEventListener('click', prevSlide);

          // Auto-play
          let autoplayInterval = setInterval(nextSlide, 5000);

          carousel.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
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

        // Quiz logic
        let currentQuestion = 1;
        let answers = {};
        const totalQuestions = 10;

        window.openQuiz = function() {
            document.getElementById('quizOverlay').style.display = 'flex';
            document.body.style.overflow = 'hidden';
            quizIsOpen = true;
        };

        window.closeQuiz = function() {
            document.getElementById('quizOverlay').style.display = 'none';
            document.body.style.overflow = 'auto';
            quizIsOpen = false;
            resetQuiz();
        };

        function resetQuiz() {
            currentQuestion = 1;
            answers = {};
            document.querySelectorAll('.quiz-question').forEach(q => q.classList.remove('active'));
            document.querySelector('.quiz-question[data-question="1"]').classList.add('active');
            document.getElementById('quizProgress').style.width = '10%';
            document.getElementById('quizPrevBtn').style.display = 'none';
            document.getElementById('quizNextBtn').disabled = true;
            document.getElementById('quizContent').style.display = 'block';
            document.getElementById('quizResults').style.display = 'none';
            document.querySelectorAll('.quiz-answer').forEach(a => a.classList.remove('selected'));
        }

        window.selectAnswer = function(questionNum, answer, element) {
            answers[questionNum] = answer;
            
            const questionDiv = element.closest('.quiz-question');
            questionDiv.querySelectorAll('.quiz-answer').forEach(a => a.classList.remove('selected'));
            element.classList.add('selected');
            
            document.getElementById('quizNextBtn').disabled = false;
        };

        window.nextQuestion = function() {
            if (currentQuestion < totalQuestions) {
                currentQuestion++;
                updateQuizDisplay();
            } else {
                showResults();
            }
        };

        window.prevQuestion = function() {
            if (currentQuestion > 1) {
                currentQuestion--;
                updateQuizDisplay();
            }
        };

        function updateQuizDisplay() {
            document.querySelectorAll('.quiz-question').forEach(q => q.classList.remove('active'));
            document.querySelector(`.quiz-question[data-question="${currentQuestion}"]`).classList.add('active');
            
            const progress = (currentQuestion / totalQuestions) * 100;
            document.getElementById('quizProgress').style.width = progress + '%';
            
            document.getElementById('quizPrevBtn').style.display = currentQuestion > 1 ? 'block' : 'none';
            document.getElementById('quizNextBtn').disabled = !answers[currentQuestion];
            document.getElementById('quizNextBtn').textContent = 
                currentQuestion === totalQuestions ? 'Voir mes résultats' : 'Suivant →';
        }

        function showResults() {
            const score = Object.values(answers).filter(a => a === 'oui').length;
            
            document.getElementById('quizContent').style.display = 'none';
            document.getElementById('quizResults').style.display = 'block';
            document.getElementById('scoreNumber').textContent = score;
            
            const scoreCircle = document.getElementById('scoreCircle');
            const resultTitle = document.getElementById('resultTitle');
            const resultDesc = document.getElementById('resultDesc');
            
            if (score >= 7) {
                scoreCircle.className = 'quiz-score-circle high';
                resultTitle.textContent = '🔴 Risque élevé - Action immédiate requise';
                resultDesc.textContent = 'Votre entreprise est très probablement soumise à NIS2. Plusieurs vulnérabilités critiques nécessitent une attention urgente.';
            } else if (score >= 4) {
                scoreCircle.className = 'quiz-score-circle medium';
                resultTitle.textContent = '🟠 Risque modéré - Vigilance nécessaire';
                resultDesc.textContent = 'Vous pourriez être concerné par NIS2. Un audit approfondi est recommandé pour clarifier votre situation.';
            } else {
                scoreCircle.className = 'quiz-score-circle low';
                resultTitle.textContent = '🟢 Risque faible - Restez vigilant';
                resultDesc.textContent = 'Votre exposition actuelle semble limitée, mais la cybersécurité reste essentielle pour protéger votre activité.';
            }
        }

        // Video modal
        window.openVideo = function() {
            document.getElementById('videoModal').style.display = 'flex';
            document.body.style.overflow = 'hidden';
            videoIsPlaying = true;
            const iframe = document.getElementById('videoIframe');
            iframe.src = iframe.dataset.src;
        };

        window.closeVideo = function() {
            document.getElementById('videoModal').style.display = 'none';
            document.body.style.overflow = 'auto';
            videoIsPlaying = false;
            const iframe = document.getElementById('videoIframe');
            iframe.src = '';
        };

        // Close on ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (quizIsOpen) window.closeQuiz();
                if (videoIsPlaying) window.closeVideo();
            }
        });

      } catch (error) {
        console.error('Initialization error:', error);
      }
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initializeApp);
    } else {
      initializeApp();
    }

  }, []);

  return (
    <>
      <Head>
        <title>Conformité NIS2 & Cybersécurité | Audit & Mise en conformité</title>
        <meta name="description" content="Accompagnement expert pour votre conformité NIS2. Audit, tests d'intrusion et protection cyber adaptés à votre secteur." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --primary: ${COLORS.primary};
          --accent: ${COLORS.accent};
          --light: ${COLORS.light};
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          line-height: 1.6;
          color: ${COLORS.gray[900]};
          background: ${COLORS.white};
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* HEADER STICKY */
        .sticky-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: ${COLORS.white};
          box-shadow: 0 2px 20px rgba(30, 58, 138, 0.1);
          z-index: 1000;
          transform: translateY(-100%);
          transition: transform 0.3s ease;
        }

        .sticky-header.visible {
          transform: translateY(0);
        }

        .sticky-header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 0;
        }

        .logo {
          font-size: 24px;
          font-weight: 700;
          color: var(--primary);
        }

        /* BUTTONS */
        .btn {
          display: inline-block;
          padding: 14px 32px;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
          border: none;
          font-size: 16px;
        }

        .btn-primary {
          background: var(--primary);
          color: white;
        }

        .btn-primary:hover {
          background: #1e40af;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(30, 58, 138, 0.2);
        }

        .btn-secondary {
          background: white;
          color: var(--primary);
          border: 2px solid var(--primary);
        }

        .btn-secondary:hover {
          background: var(--light);
        }

        /* SECTIONS */
        section {
          padding: 80px 0;
        }

        .section-title {
          font-size: 42px;
          font-weight: 700;
          text-align: center;
          margin-bottom: 20px;
          color: var(--primary);
        }

        .section-subtitle {
          font-size: 20px;
          text-align: center;
          color: ${COLORS.gray[600]};
          margin-bottom: 60px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        /* HERO */
        .hero {
          background: linear-gradient(135deg, var(--light) 0%, white 100%);
          padding: 100px 0 80px;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .hero-text h1 {
          font-size: 52px;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 24px;
          color: var(--primary);
        }

        .hero-text h1 .highlight {
          color: var(--accent);
        }

        .hero-text p {
          font-size: 20px;
          color: ${COLORS.gray[600]};
          margin-bottom: 32px;
        }

        .hero-ctas {
          display: flex;
          gap: 16px;
          margin-bottom: 24px;
        }

        .hero-note {
          font-size: 14px;
          color: ${COLORS.gray[600]};
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .stat-card {
          text-align: center;
          padding: 30px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(30, 58, 138, 0.08);
        }

        .stat-value {
          font-size: 48px;
          font-weight: 700;
          color: var(--accent);
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 14px;
          color: ${COLORS.gray[600]};
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* CRÉDIBILITÉ */
        .credentials-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          max-width: 900px;
          margin: 0 auto;
        }

        .credential-card {
          background: white;
          padding: 40px;
          border-radius: 12px;
          border: 2px solid var(--light);
          transition: all 0.3s ease;
        }

        .credential-card:hover {
          border-color: var(--accent);
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(124, 58, 237, 0.15);
        }

        .credential-icon {
          font-size: 48px;
          margin-bottom: 16px;
        }

        .credential-card h3 {
          font-size: 24px;
          color: var(--primary);
          margin-bottom: 12px;
        }

        .credential-card p {
          color: ${COLORS.gray[600]};
        }

        /* QUIZ */
        .quiz-section {
          background: var(--light);
        }

        .quiz-container {
          background: white;
          padding: 60px;
          border-radius: 16px;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
          box-shadow: 0 10px 40px rgba(30, 58, 138, 0.1);
        }

        .quiz-container h2 {
          font-size: 36px;
          color: var(--primary);
          margin-bottom: 16px;
        }

        .quiz-container p {
          font-size: 18px;
          color: ${COLORS.gray[600]};
          margin-bottom: 32px;
        }

        /* APPROCHE */
        .approach-timeline {
          max-width: 1000px;
          margin: 0 auto;
        }

        .approach-step {
          display: grid;
          grid-template-columns: 100px 1fr;
          gap: 40px;
          margin-bottom: 60px;
          position: relative;
        }

        .approach-step:not(:last-child)::after {
          content: '';
          position: absolute;
          left: 50px;
          top: 100px;
          width: 2px;
          height: calc(100% - 40px);
          background: linear-gradient(to bottom, var(--accent), transparent);
        }

        .step-number {
          width: 100px;
          height: 100px;
          background: linear-gradient(135deg, var(--accent), var(--primary));
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 36px;
          font-weight: 700;
          flex-shrink: 0;
        }

        .step-content h3 {
          font-size: 28px;
          color: var(--primary);
          margin-bottom: 12px;
        }

        .step-content p {
          font-size: 18px;
          color: ${COLORS.gray[600]};
          line-height: 1.7;
        }

        /* RISQUES */
        .risks-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        }

        .risk-side {
          padding: 60px 40px;
        }

        .risk-side.danger {
          background: linear-gradient(135deg, #FEE2E2, #FECACA);
        }

        .risk-side.opportunity {
          background: linear-gradient(135deg, #D1FAE5, #A7F3D0);
        }

        .risk-side h3 {
          font-size: 32px;
          margin-bottom: 24px;
        }

        .risk-side.danger h3 {
          color: #991B1B;
        }

        .risk-side.opportunity h3 {
          color: #065F46;
        }

        .risk-list {
          list-style: none;
        }

        .risk-list li {
          padding: 16px 0;
          font-size: 17px;
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .risk-list li::before {
          content: '•';
          font-size: 24px;
          flex-shrink: 0;
        }

        .risk-side.danger .risk-list li {
          color: #991B1B;
        }

        .risk-side.opportunity .risk-list li {
          color: #065F46;
        }

        /* VIDEO */
        .video-section {
          background: var(--primary);
          color: white;
        }

        .video-container {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .video-thumbnail {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .video-thumbnail:hover {
          transform: scale(1.02);
        }

        .video-thumbnail img {
          width: 100%;
          display: block;
        }

        .video-play-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80px;
          height: 80px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          color: var(--primary);
        }

        /* TESTIMONIALS */
        .testimonial-carousel {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          overflow: hidden;
        }

        .testimonials-wrapper {
          display: flex;
          transition: transform 0.5s ease;
        }

        .testimonial {
          min-width: 100%;
          padding: 40px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 10px 40px rgba(30, 58, 138, 0.1);
        }

        .testimonial-content {
          font-size: 20px;
          line-height: 1.7;
          color: ${COLORS.gray[700]};
          margin-bottom: 32px;
          font-style: italic;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .author-avatar {
          width: 60px;
          height: 60px;
          background: var(--light);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
        }

        .author-info h4 {
          font-size: 18px;
          color: var(--primary);
          margin-bottom: 4px;
        }

        .author-info p {
          font-size: 14px;
          color: ${COLORS.gray[600]};
        }

        .carousel-controls {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          margin-top: 32px;
        }

        .carousel-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 2px solid var(--primary);
          background: white;
          color: var(--primary);
          font-size: 18px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .carousel-btn:hover {
          background: var(--primary);
          color: white;
        }

        .carousel-dots {
          display: flex;
          gap: 10px;
        }

        .carousel-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: ${COLORS.gray[300]};
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .carousel-dot.active {
          background: var(--primary);
          width: 30px;
          border-radius: 5px;
        }

        /* PRICING */
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .price-card {
          background: white;
          border: 2px solid ${COLORS.gray[200]};
          border-radius: 16px;
          padding: 40px;
          position: relative;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .price-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(30, 58, 138, 0.15);
        }

        .price-card.popular {
          border-color: var(--accent);
          border-width: 3px;
        }

        .popular-badge {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--accent);
          color: white;
          padding: 6px 20px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
        }

        .price-header h3 {
          font-size: 28px;
          color: var(--primary);
          margin-bottom: 16px;
        }

        .price-amount {
          font-size: 48px;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 8px;
        }

        .price-period {
          color: ${COLORS.gray[600]};
          margin-bottom: 32px;
        }

        .price-features {
          list-style: none;
          margin-bottom: 32px;
          flex-grow: 1;
        }

        .price-features li {
          padding: 12px 0;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          border-bottom: 1px solid ${COLORS.gray[100]};
        }

        .price-features li:last-child {
          border-bottom: none;
        }

        .price-features li::before {
          content: '✓';
          color: var(--accent);
          font-weight: 700;
          flex-shrink: 0;
        }

        .price-cta {
          width: 100%;
          margin-top: auto;
        }

        /* SERVICES COMPLÉMENTAIRES */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          max-width: 1200px;
          margin: 60px auto 0;
        }

        .service-card {
          background: white;
          padding: 30px;
          border-radius: 12px;
          text-align: center;
          border: 2px solid var(--light);
          transition: all 0.3s ease;
        }

        .service-card:hover {
          border-color: var(--accent);
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(124, 58, 237, 0.15);
        }

        .service-icon {
          font-size: 48px;
          margin-bottom: 16px;
        }

        .service-card h4 {
          font-size: 18px;
          color: var(--primary);
          margin-bottom: 12px;
        }

        .service-card p {
          font-size: 14px;
          color: ${COLORS.gray[600]};
        }

        /* FAQ */
        .faq-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .faq-item {
          background: white;
          border: 2px solid ${COLORS.gray[200]};
          border-radius: 12px;
          margin-bottom: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .faq-item:hover {
          border-color: var(--accent);
        }

        .faq-question {
          padding: 24px;
          font-size: 18px;
          font-weight: 600;
          color: var(--primary);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .faq-question::after {
          content: '+';
          font-size: 24px;
          transition: transform 0.3s ease;
        }

        .faq-item.active .faq-question::after {
          transform: rotate(45deg);
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }

        .faq-item.active .faq-answer {
          max-height: 500px;
        }

        .faq-answer-content {
          padding: 0 24px 24px;
          color: ${COLORS.gray[700]};
          line-height: 1.7;
        }

        /* CTA FINAL */
        .final-cta {
          background: linear-gradient(135deg, var(--primary), var(--accent));
          color: white;
          text-align: center;
        }

        .final-cta h2 {
          font-size: 42px;
          margin-bottom: 20px;
        }

        .final-cta p {
          font-size: 20px;
          margin-bottom: 32px;
          opacity: 0.9;
        }

        .final-cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
        }

        .btn-white {
          background: white;
          color: var(--primary);
        }

        .btn-white:hover {
          background: var(--light);
        }

        /* QUIZ OVERLAY */
        .quiz-overlay {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          z-index: 2000;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .quiz-modal {
          background: white;
          border-radius: 20px;
          max-width: 700px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
        }

        .quiz-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: ${COLORS.gray[100]};
          border: none;
          font-size: 24px;
          cursor: pointer;
          z-index: 10;
        }

        .quiz-header {
          padding: 40px 40px 20px;
          text-align: center;
        }

        .quiz-progress-bar {
          height: 8px;
          background: ${COLORS.gray[200]};
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 30px;
        }

        .quiz-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--accent), var(--primary));
          transition: width 0.3s ease;
        }

        .quiz-content {
          padding: 0 40px 40px;
        }

        .quiz-question {
          display: none;
        }

        .quiz-question.active {
          display: block;
        }

        .quiz-question-number {
          font-size: 14px;
          color: var(--accent);
          font-weight: 600;
          margin-bottom: 16px;
        }

        .quiz-question-text {
          font-size: 22px;
          color: var(--primary);
          font-weight: 600;
          margin-bottom: 32px;
          line-height: 1.4;
        }

        .quiz-answers {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .quiz-answer {
          padding: 20px;
          border: 2px solid ${COLORS.gray[200]};
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .quiz-answer:hover {
          border-color: var(--accent);
          background: var(--light);
        }

        .quiz-answer.selected {
          border-color: var(--accent);
          background: var(--light);
        }

        .quiz-answer-radio {
          width: 24px;
          height: 24px;
          border: 2px solid ${COLORS.gray[300]};
          border-radius: 50%;
          position: relative;
          flex-shrink: 0;
        }

        .quiz-answer.selected .quiz-answer-radio {
          border-color: var(--accent);
        }

        .quiz-answer.selected .quiz-answer-radio::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 12px;
          height: 12px;
          background: var(--accent);
          border-radius: 50%;
        }

        .quiz-answer-text {
          font-size: 18px;
          color: ${COLORS.gray[700]};
        }

        .quiz-navigation {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          padding: 20px 40px 40px;
        }

        .quiz-btn {
          padding: 14px 32px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          border: none;
          font-size: 16px;
          transition: all 0.3s ease;
        }

        .quiz-btn-prev {
          background: ${COLORS.gray[100]};
          color: ${COLORS.gray[700]};
        }

        .quiz-btn-next {
          background: var(--primary);
          color: white;
          flex: 1;
        }

        .quiz-btn-next:disabled {
          background: ${COLORS.gray[300]};
          cursor: not-allowed;
        }

        .quiz-btn:not(:disabled):hover {
          transform: translateY(-2px);
        }

        .quiz-results {
          display: none;
          text-align: center;
          padding: 40px;
        }

        .quiz-score-circle {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 0 auto 32px;
          font-size: 48px;
          font-weight: 700;
          color: white;
        }

        .quiz-score-circle.high {
          background: linear-gradient(135deg, #DC2626, #EF4444);
        }

        .quiz-score-circle.medium {
          background: linear-gradient(135deg, #F59E0B, #FBBF24);
        }

        .quiz-score-circle.low {
          background: linear-gradient(135deg, #10B981, #34D399);
        }

        .quiz-score-label {
          font-size: 18px;
          font-weight: 400;
        }

        .quiz-result-title {
          font-size: 28px;
          color: var(--primary);
          margin-bottom: 16px;
        }

        .quiz-result-desc {
          font-size: 18px;
          color: ${COLORS.gray[600]};
          margin-bottom: 32px;
          line-height: 1.7;
        }

        .quiz-result-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
        }

        .quiz-result-btn {
          padding: 14px 28px;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .quiz-result-btn.primary {
          background: var(--primary);
          color: white;
        }

        .quiz-result-btn.secondary {
          background: white;
          color: var(--primary);
          border: 2px solid var(--primary);
        }

        .quiz-result-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(30, 58, 138, 0.2);
        }

        /* VIDEO MODAL */
        .video-modal {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.95);
          z-index: 2000;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .video-modal-content {
          max-width: 900px;
          width: 100%;
          position: relative;
        }

        .video-modal-close {
          position: absolute;
          top: -50px;
          right: 0;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: white;
          border: none;
          font-size: 24px;
          cursor: pointer;
        }

        .video-modal iframe {
          width: 100%;
          height: 500px;
          border-radius: 12px;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
          }

          .hero-text h1 {
            font-size: 36px;
          }

          .hero-stats {
            grid-template-columns: 1fr;
          }

          .hero-ctas {
            flex-direction: column;
          }

          .credentials-grid,
          .pricing-grid,
          .services-grid {
            grid-template-columns: 1fr;
          }

          .risks-split {
            grid-template-columns: 1fr;
          }

          .approach-step {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .approach-step::after {
            display: none;
          }

          .section-title {
            font-size: 32px;
          }

          section {
            padding: 60px 0;
          }
        }

        .animate-on-scroll {
          opacity: 0;
        }
      `}</style>

      {/* STICKY HEADER */}
      <header id="stickyHeader" className="sticky-header">
        <div className="container">
          <div className="sticky-header-content">
            <div className="logo">🛡️ CyberSolferino</div>
            <a href="https://calendly.com/adrien-ruggirello/30min" target="_blank" className="btn btn-primary">
              Prendre RDV
            </a>
          </div>
        </div>
      </header>

      {/* [01] HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>
                Conformité NIS2 : <span className="highlight">Sécurisez votre entreprise</span> avant les sanctions
              </h1>
              <p>
                La directive NIS2 impose de nouvelles obligations cyber. Audit, mise en conformité et protection sur-mesure pour les secteurs critiques.
              </p>
              <div className="hero-ctas">
                <a href="https://calendly.com/adrien-ruggirello/30min" target="_blank" className="btn btn-primary">
                  📅 Prendre RDV (gratuit)
                </a>
                <a href="#quiz" className="btn btn-secondary">
                  Suis-je concerné ?
                </a>
              </div>
              <p className="hero-note">
                ✓ Diagnostic gratuit • ✓ Sans engagement
              </p>
            </div>
            <div className="hero-stats">
              {STATS.map((stat, i) => (
                <div key={i} className="stat-card animate-on-scroll">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* [02] CRÉDIBILITÉ */}
      <section>
        <div className="container">
          <h2 className="section-title">Une expertise reconnue</h2>
          <p className="section-subtitle">
            Faites confiance à des spécialistes certifiés pour votre conformité NIS2
          </p>
          <div className="credentials-grid">
            {CREDENTIALS.map((cred, i) => (
              <div key={i} className="credential-card animate-on-scroll">
                <div className="credential-icon">{cred.icon}</div>
                <h3>{cred.title}</h3>
                <p>{cred.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* [03] QUIZ */}
      <section id="quiz" className="quiz-section">
        <div className="container">
          <div className="quiz-container">
            <h2>Suis-je concerné par NIS2 ?</h2>
            <p>
              Répondez à 10 questions simples pour évaluer votre niveau d'exposition et recevoir des recommandations personnalisées.
            </p>
            <button onClick={() => typeof window !== 'undefined' && window.openQuiz?.()} className="btn btn-primary">
              Démarrer le quiz (2 min)
            </button>
          </div>
        </div>
      </section>

      {/* [04] NOTRE APPROCHE */}
      <section>
        <div className="container">
          <h2 className="section-title">Notre méthodologie éprouvée</h2>
          <p className="section-subtitle">
            Un accompagnement structuré en 3 étapes pour une conformité durable
          </p>
          <div className="approach-timeline">
            {APPROACH_STEPS.map((step, i) => (
              <div key={i} className="approach-step animate-on-scroll">
                <div className="step-number">{step.num}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* [05] RISQUES vs OPPORTUNITÉS */}
      <section>
        <div className="container">
          <h2 className="section-title">Les enjeux de NIS2</h2>
          <p className="section-subtitle">
            Comprendre les risques de non-conformité et les bénéfices d'une démarche proactive
          </p>
          <div className="risks-split animate-on-scroll">
            <div className="risk-side danger">
              <h3>⚠️ Risques de non-conformité</h3>
              <ul className="risk-list">
                <li>Sanctions jusqu'à 10M€ ou 2% du CA mondial</li>
                <li>Responsabilité pénale des dirigeants</li>
                <li>Atteinte majeure à votre réputation</li>
                <li>Perte de confiance des clients et partenaires</li>
                <li>Exclusion de marchés publics et appels d'offres</li>
              </ul>
            </div>
            <div className="risk-side opportunity">
              <h3>✓ Avantages de la conformité</h3>
              <ul className="risk-list">
                <li>Protection renforcée contre les cyberattaques</li>
                <li>Avantage concurrentiel et différenciation</li>
                <li>Conformité réglementaire assurée</li>
                <li>Confiance accrue des parties prenantes</li>
                <li>Résilience opérationnelle améliorée</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* [06] VIDÉO */}
      <section className="video-section">
        <div className="container">
          <div className="video-container">
            <h2 className="section-title" style={{color: 'white'}}>Comprendre NIS2 en 3 minutes</h2>
            <p className="section-subtitle" style={{color: 'rgba(255,255,255,0.9)'}}>
              Découvrez les implications concrètes de la directive pour votre entreprise
            </p>
            <div className="video-thumbnail" onClick={() => typeof window !== 'undefined' && window.openVideo?.()}>
              <img src="https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" alt="Vidéo NIS2" />
              <div className="video-play-btn">▶</div>
            </div>
          </div>
        </div>
      </section>

      {/* [07] TÉMOIGNAGES */}
      <section>
        <div className="container">
          <h2 className="section-title">Ils nous font confiance</h2>
          <p className="section-subtitle">
            Des entreprises de tous secteurs protégées et conformes grâce à notre accompagnement
          </p>
          <div id="testimonialCarousel" className="testimonial-carousel">
            <div className="testimonials-wrapper">
              {TESTIMONIALS.map((testimonial, i) => (
                <div key={i} className="testimonial animate-on-scroll">
                  <p className="testimonial-content">"{testimonial.text}"</p>
                  <div className="testimonial-author">
                    <div className="author-avatar">{testimonial.avatar}</div>
                    <div className="author-info">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.role} - {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="carousel-controls">
              <button id="prevBtn" className="carousel-btn">←</button>
              <div id="carouselDots" className="carousel-dots"></div>
              <button id="nextBtn" className="carousel-btn">→</button>
            </div>
          </div>
        </div>
      </section>

      {/* [08] TARIFS */}
      <section id="pricing">
        <div className="container">
          <h2 className="section-title">Nos formules d'accompagnement</h2>
          <p className="section-subtitle">
            Solutions adaptées à votre niveau de maturité cyber et à vos besoins
          </p>
          <div className="pricing-grid">
            {PRICING.map((plan, i) => (
              <div key={i} className={`price-card animate-on-scroll ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <div className="popular-badge">⭐ Recommandé</div>}
                <div className="price-header">
                  <h3>{plan.name}</h3>
                  <div className="price-amount">{plan.price}</div>
                  <div className="price-period">{plan.period}</div>
                </div>
                <ul className="price-features">
                  {plan.features.map((feature, j) => (
                    <li key={j}>{feature}</li>
                  ))}
                </ul>
                <a href="https://calendly.com/adrien-ruggirello/30min" target="_blank" className="btn btn-primary price-cta">
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          {/* SERVICES COMPLÉMENTAIRES */}
          <div style={{marginTop: '80px'}}>
            <h3 className="section-title" style={{fontSize: '32px'}}>Services complémentaires</h3>
            <p className="section-subtitle">
              Découvrez nos services pour aller plus loin dans la conformité et la sécurité
            </p>
            <div className="services-grid">
              {COMPLEMENTARY_SERVICES.map((service, i) => (
                <div key={i} className="service-card animate-on-scroll">
                  <div className="service-icon">{service.icon}</div>
                  <h4>{service.title}</h4>
                  <p>{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* [09] FAQ */}
      <section>
        <div className="container">
          <h2 className="section-title">Questions fréquentes</h2>
          <p className="section-subtitle">
            Trouvez rapidement les réponses à vos interrogations sur NIS2
          </p>
          <div className="faq-container">
            {FAQ_ITEMS.map((faq, i) => (
              <div key={i} className="faq-item">
                <div className="faq-question">{faq.q}</div>
                <div className="faq-answer">
                  <div className="faq-answer-content">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* [10] CTA FINAL */}
      <section className="final-cta">
        <div className="container">
          <h2>Prêt à sécuriser votre conformité NIS2 ?</h2>
          <p>
            Réservez votre diagnostic gratuit et obtenez un plan d'action personnalisé en 48h
          </p>
          <div className="final-cta-buttons">
            <a href="https://calendly.com/adrien-ruggirello/30min" target="_blank" className="btn btn-white">
              📅 Réserver mon diagnostic gratuit
            </a>
            <a href="#quiz" className="btn btn-secondary" style={{background: 'transparent', borderColor: 'white', color: 'white'}}>
              Faire le quiz
            </a>
          </div>
        </div>
      </section>

      {/* QUIZ OVERLAY */}
      <div id="quizOverlay" className="quiz-overlay">
        <div className="quiz-modal">
          <button className="quiz-close" onClick={() => typeof window !== 'undefined' && window.closeQuiz?.()}>×</button>
          
          <div className="quiz-header">
            <h2 style={{color: COLORS.primary, marginBottom: '12px'}}>Êtes-vous concerné par NIS2 ?</h2>
            <p style={{color: COLORS.gray[600], marginBottom: '24px'}}>10 questions pour le savoir</p>
            <div className="quiz-progress-bar">
              <div id="quizProgress" className="quiz-progress-fill" style={{width: '10%'}}></div>
            </div>
          </div>

          <div id="quizContent" className="quiz-content">
            {/* Question 1 */}
            <div className="quiz-question active" data-question="1">
              <div className="quiz-question-number">Question 1 sur 10</div>
              <div className="quiz-question-text">Votre entreprise compte-t-elle plus de 50 salariés ?</div>
              <div className="quiz-answers">
                <div className="quiz-answer" onClick={(e) => typeof window !== 'undefined' && window.selectAnswer?.(1, 'oui', e.currentTarget)}>
                  <div className="quiz-answer-radio"></div>
                  <div className="quiz-answer-text">Oui</div>
                </div>
                <div className="quiz-answer" onClick={(e) => typeof window !== 'undefined' && window.selectAnswer?.(1, 'non', e.currentTarget)}>
                  <div className="quiz-answer-radio"></div>
                  <div className="quiz-answer-text">Non</div>
                </div>
              </div>
            </div>

            {/* Question 2 */}
            <div className="quiz-question" data-question="2">
              <div className="quiz-question-number">Question 2 sur 10</div>
              <div className="quiz-question-text">Votre chiffre d'affaires annuel dépasse-t-il 10 millions d'euros ?</div>
              <div className="quiz-answers">
                <div className="quiz-answer" onClick={(e) => typeof window !== 'undefined' && window.selectAnswer?.(2, 'oui', e.currentTarget)}>
                  <div className="quiz-answer-radio"></div>
                  <div className="quiz-answer-text">Oui</div>
                </div>
                <div className="quiz-answer" onClick={(e) => typeof window !== 'undefined' && window.selectAnswer?.(2, 'non', e.currentTarget)}>
                  <div className="quiz-answer-radio"></div>
                  <div className="quiz-answer-text">Non</div>
                </div>
              </div>
            </div>

            {/* Question 3 */}
            <div className="quiz-question" data-question="3">
              <div className="quiz-question-number">Question 3 sur 10</div>
              <div className="quiz-question-text">Êtes-vous actif dans l'un des secteurs critiques : santé, énergie, eau, transport, numérique, administration publique, agroalimentaire ?</div>
              <div className="quiz-answers">
                <div className="quiz-answer" onClick={(e) => typeof window !== 'undefined' && window.selectAnswer?.(3, 'oui', e.currentTarget)}>
                  <div className="quiz-answer-radio"></div>
                  <div className="quiz-answer-text">Oui</div>
                </div>
                <div className="quiz-answer" onClick={(e) => typeof window !== 'undefined' && window.selectAnswer?.(3, 'non', e.currentTarget)}>
                  <div className="quiz-answer-radio"></div>
                  <div className="quiz-answer-text">Non</div>
                </div>
              </div>
            </div>

            {/* Question 4 */}
            <div className="quiz-question" data-question="4">
              <div className="quiz-question-number">Question 4 sur 10</div>
              <div className="quiz-question-text">Fournissez-vous des services numériques critiques (hébergement, cloud, DNS, SaaS, etc.) ?</div>
              <div className="quiz-answers">
                <div className="quiz-answer" onClick={(e) => typeof window !== 'undefined' && window.selectAnswer?.(4, 'oui', e.currentTarget)}>
                  <div className="quiz-answer-radio"></div>
                  <div className="quiz-answer-text">Oui</div>
                </div>
                <div className="quiz-answer" onClick={(e) => typeof window !== 'undefined' && window.selectAnswer?.(4, 'non', e.currentTarget)}>
                  <div className="quiz-answer-radio"></div>
                  <div className="quiz-answer-text">Non</div>
                </div>
              </div>
            </div>

            {/* Question 5 */}
            <div className="quiz-question" data-question="5">
              <div className="quiz-question-number">Question 5 sur 10</div>
              <div className="quiz-question-text">Avez-vous un rôle de sous-traitant dans la chaîne de valeur d'un acteur critique ?</div>
              <div className="quiz-answers">
                <div className="quiz-answer" onClick={(e) => typeof window !== 'undefined' && window.selectAnswer?.(5, 'oui', e.currentTarget)}>
                  <div className="quiz-answer-radio"></div>
                  <div className="quiz-answer-text">Oui</div>
                </div>
                <div className="quiz-answer" onClick={(e) => typeof window !== 'undefined' && window.selectAnswer?.(5, 'non', e.currentTarget)}>
                  <div className="quiz-answer-radio"></div>
                  <div className="quiz-answer-text">Non</div>
                </div>
              </div>
            </div>

            {/* Question 6 */}
            <div className="quiz-question" data-question="6">
              <div className="quiz-question-number">Question 6 sur 10</div>
              <div className="quiz-question-text">Traitez-vous des données sensibles ou critiques (données de santé, infrastructures, systèmes industriels) ?</div>
              <div className="quiz-answers">
                <div className="quiz-answer" onClick={(e) => typeof window !== 'undefined' && window.selectAnswer?.(6, 'oui', e.currentTarget)}>
                  <div className="quiz-answer-radio"></div>
                  <div className="quiz-answer-text">Oui</div>
                </div>
                <div className="quiz-answer" onClick={(e) => typeof window !== 'undefined' && window.selectAnswer?.(6, 'non', e.currentTarget)}>
                  <div className="quiz-answer-radio"></div>
                  <div className="quiz-answer-text">Non</div>
                </div>
              </div>
            </div>

            {/* Question 7 */}
            <div className="quiz-question" data-question="7">
              <div className="quiz-question-number">Question 7 sur 10</div>
              <div className="quiz-question-text">Avez-vous été victime d'un incident ou d'une tentative de cyberattaque dans les 12 derniers mois ?</div>
              <div className="quiz-answers">
                <div className="quiz-answer" onClick={(e) => typeof window !== 'undefined' && window.selectAnswer?.(7, 'oui', e.currentTarget)}>
                  <div className="quiz-answer-radio"></div>
                  <div className="quiz-answer-text">Oui</div>
                </div>
                <div className="quiz-answer" onClick={(e) => typeof window !== 'undefined' && window.selectAnswer?.(7, 'non', e.currentTarget)}>
                  <div className="quiz-answer-radio"></div>
                  <div className="quiz-answer-text">Non</div>
                </div>
              </div>
            </div>

            {/* Question 8 */}
            <div className="quiz-question" data-question="8">
              <div className="quiz-question-number">Question 8 sur 10</div>
              <div className="quiz-question-text">Disposez-vous d'une politique formalisée de sécurité des systèmes d'information ?</div>
              <div className="quiz-answers">
                <div className="quiz-answer" onClick={(e) => typeof window !== 'undefined' && window.selectAnswer?.(8, 'oui', e.currentTarget)}>
                  <div className="quiz-answer-radio"></div>
                  <div className="quiz-answer-text">Oui</div>
                </div>
                <div className="quiz-answer" onClick={(e) => typeof window !== 'undefined' && window.selectAnswer?.(8, 'non', e.currentTarget)}>
                  <div className="quiz-answer-radio"></div>
                  <div className="quiz-answer-text">Non</div>
                </div>
              </div>
            </div>

            {/* Question 9 */}
            <div className="quiz-question" data-question="9">
              <div className="quiz-question-number">Question 9 sur 10</div>
              <div className="quiz-question-text">Avez-vous une personne ou un prestataire en charge de la cybersécurité ?</div>
              <div className="quiz-answers">
                <div className="quiz-answer" onClick={(e) => typeof window !== 'undefined' && window.selectAnswer?.(9, 'oui', e.currentTarget)}>
                  <div className="quiz-answer-radio"></div>
                  <div className="quiz-answer-text">Oui</div>
                </div>
                <div className="quiz-answer" onClick={(e) => typeof window !== 'undefined' && window.selectAnswer?.(9, 'non', e.currentTarget)}>
                  <div className="quiz-answer-radio"></div>
                  <div className="quiz-answer-text">Non</div>
                </div>
              </div>
            </div>

            {/* Question 10 */}
            <div className="quiz-question" data-question="10">
              <div className="quiz-question-number">Question 10 sur 10</div>
              <div className="quiz-question-text">Votre entreprise a-t-elle déjà mis en place un plan de continuité ou de gestion de crise informatique ?</div>
              <div className="quiz-answers">
                <div className="quiz-answer" onClick={(e) => typeof window !== 'undefined' && window.selectAnswer?.(10, 'oui', e.currentTarget)}>
                  <div className="quiz-answer-radio"></div>
                  <div className="quiz-answer-text">Oui</div>
                </div>
                <div className="quiz-answer" onClick={(e) => typeof window !== 'undefined' && window.selectAnswer?.(10, 'non', e.currentTarget)}>
                  <div className="quiz-answer-radio"></div>
                  <div className="quiz-answer-text">Non</div>
                </div>
              </div>
            </div>
          </div>

          <div className="quiz-navigation" id="quizNavigation">
            <button className="quiz-btn quiz-btn-prev" onClick={() => typeof window !== 'undefined' && window.prevQuestion?.()} id="quizPrevBtn" style={{display: 'none'}}>
              ← Précédent
            </button>
            <button className="quiz-btn quiz-btn-next" onClick={() => typeof window !== 'undefined' && window.nextQuestion?.()} id="quizNextBtn" disabled>
              Suivant →
            </button>
          </div>

          <div className="quiz-results" id="quizResults">
            <div className="quiz-score-circle" id="scoreCircle">
              <span id="scoreNumber">0</span>
              <div className="quiz-score-label">/10</div>
            </div>
            <h3 className="quiz-result-title" id="resultTitle"></h3>
            <p className="quiz-result-desc" id="resultDesc"></p>
            <div className="quiz-result-actions">
              <a href="https://calendly.com/adrien-ruggirello/30min" target="_blank" className="quiz-result-btn primary">
                📅 Diagnostic cyber gratuit
              </a>
              <a href="#pricing" onClick={() => typeof window !== 'undefined' && window.closeQuiz?.()} className="quiz-result-btn secondary">
                Découvrir nos audits
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* VIDEO MODAL */}
      <div id="videoModal" className="video-modal">
        <div className="video-modal-content">
          <button className="video-modal-close" onClick={() => typeof window !== 'undefined' && window.closeVideo?.()}>×</button>
          <iframe
            id="videoIframe"
            data-src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
