import { useEffect } from 'react';
import Head from 'next/head';

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
                if (window.scrollY > heroBottom) {
                    stickyHeader.classList.add('visible');
                } else {
                    stickyHeader.classList.remove('visible');
                }
            }
        });

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

        // Intersection Observer
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

        // Carousel
        const carousel = document.getElementById('testimonialCarousel');
        const wrapper = carousel.querySelector('.testimonials-wrapper');
        const testimonials = carousel.querySelectorAll('.testimonial');
        const dotsContainer = document.getElementById('carouselDots');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        let currentIndex = 0;
        const totalSlides = testimonials.length;

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

        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);

        let autoplayInterval = setInterval(nextSlide, 5000);

        carousel.addEventListener('mouseenter', () => {
            clearInterval(autoplayInterval);
        });

        carousel.addEventListener('mouseleave', () => {
            autoplayInterval = setInterval(nextSlide, 5000);
        });

        let touchStartX = 0;
        let touchEndX = 0;

        carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        carousel.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            if (touchStartX - touchEndX > 50) {
                nextSlide();
            } else if (touchEndX - touchStartX > 50) {
                prevSlide();
            }
        });

        // Video Modal
        const videoThumbnail = document.getElementById('videoThumbnail');
        const videoModal = document.getElementById('videoModal');
        const closeVideoBtn = document.getElementById('closeVideo');
        const youtubeIframe = document.getElementById('youtubeIframe');

        if (videoThumbnail) {
            videoThumbnail.addEventListener('click', () => {
                videoModal.style.display = 'flex';
                videoIsPlaying = true;
                youtubeIframe.src = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1';
                document.body.style.overflow = 'hidden';
            });
        }

        if (closeVideoBtn) {
            closeVideoBtn.addEventListener('click', () => {
                videoModal.style.display = 'none';
                videoIsPlaying = false;
                youtubeIframe.src = '';
                document.body.style.overflow = 'auto';
            });
        }

        if (videoModal) {
            videoModal.addEventListener('click', (e) => {
                if (e.target === videoModal) {
                    videoModal.style.display = 'none';
                    videoIsPlaying = false;
                    youtubeIframe.src = '';
                    document.body.style.overflow = 'auto';
                }
            });
        }

        // Quiz
        let currentQuestion = 1;
        let answers = {};

        window.openQuiz = function() {
            if (videoIsPlaying) {
                alert('Veuillez fermer la vidéo avant de commencer le quiz');
                return;
            }
            const quizModal = document.getElementById('quizModal');
            quizModal.style.display = 'flex';
            quizIsOpen = true;
            document.body.style.overflow = 'hidden';
            currentQuestion = 1;
            answers = {};
            document.querySelectorAll('.quiz-question').forEach(q => q.classList.remove('active'));
            document.querySelector('.quiz-question[data-question="1"]').classList.add('active');
            updateProgress();
            document.getElementById('quizPrevBtn').style.display = 'none';
            document.getElementById('quizNextBtn').disabled = true;
        };

        window.closeQuiz = function() {
            const quizModal = document.getElementById('quizModal');
            quizModal.style.display = 'none';
            quizIsOpen = false;
            document.body.style.overflow = 'auto';
            document.getElementById('quizQuestionsContainer').style.display = 'block';
            document.getElementById('quizResults').style.display = 'none';
            document.getElementById('quizNavigation').style.display = 'flex';
        };

        window.selectAnswer = function(questionNum, answer, element) {
            answers[questionNum] = answer;
            const questionDiv = document.querySelector(`.quiz-question[data-question="${questionNum}"]`);
            questionDiv.querySelectorAll('.quiz-answer').forEach(a => a.classList.remove('selected'));
            element.classList.add('selected');
            document.getElementById('quizNextBtn').disabled = false;
        };

        window.nextQuestion = function() {
            if (currentQuestion < 10) {
                document.querySelector(`.quiz-question[data-question="${currentQuestion}"]`).classList.remove('active');
                currentQuestion++;
                document.querySelector(`.quiz-question[data-question="${currentQuestion}"]`).classList.add('active');
                updateProgress();
                document.getElementById('quizPrevBtn').style.display = 'block';
                document.getElementById('quizNextBtn').disabled = !answers[currentQuestion];
                if (currentQuestion === 10) {
                    document.getElementById('quizNextBtn').textContent = 'Voir mes résultats →';
                }
            } else {
                showResults();
            }
        };

        window.prevQuestion = function() {
            if (currentQuestion > 1) {
                document.querySelector(`.quiz-question[data-question="${currentQuestion}"]`).classList.remove('active');
                currentQuestion--;
                document.querySelector(`.quiz-question[data-question="${currentQuestion}"]`).classList.add('active');
                updateProgress();
                if (currentQuestion === 1) {
                    document.getElementById('quizPrevBtn').style.display = 'none';
                }
                document.getElementById('quizNextBtn').disabled = false;
                document.getElementById('quizNextBtn').textContent = 'Suivant →';
            }
        };

        function updateProgress() {
            const progress = (currentQuestion / 10) * 100;
            document.getElementById('quizProgressBar').style.width = `${progress}%`;
            document.getElementById('quizProgressText').textContent = `Question ${currentQuestion} sur 10`;
        }

        function showResults() {
            let score = 0;
            for (let i = 1; i <= 10; i++) {
                if (answers[i] === 'oui') score++;
            }

            document.getElementById('quizQuestionsContainer').style.display = 'none';
            document.getElementById('quizNavigation').style.display = 'none';
            document.getElementById('quizResults').style.display = 'block';

            const scoreNumber = document.getElementById('scoreNumber');
            const resultTitle = document.getElementById('resultTitle');
            const resultDesc = document.getElementById('resultDesc');
            const scoreCircle = document.getElementById('scoreCircle');

            scoreNumber.textContent = score;

            if (score >= 7) {
                resultTitle.textContent = '🎯 Risque élevé - Action urgente';
                resultDesc.textContent = 'Votre entreprise est concernée par NIS2. Un audit complet est fortement recommandé pour éviter des sanctions.';
                scoreCircle.style.borderColor = '#EF4444';
            } else if (score >= 4) {
                resultTitle.textContent = '⚠️ Risque modéré - Prudence conseillée';
                resultDesc.textContent = 'Vous pourriez être concerné par NIS2. Un diagnostic gratuit vous aidera à clarifier votre situation.';
                scoreCircle.style.borderColor = '#F97316';
            } else {
                resultTitle.textContent = '✅ Risque faible - Restez vigilant';
                resultDesc.textContent = 'Vous semblez peu concerné pour l\'instant, mais NIS2 évolue. Gardez un œil sur les mises à jour réglementaires.';
                scoreCircle.style.borderColor = '#10B981';
            }
        }

        const closeQuizBtn = document.getElementById('closeQuiz');
        if (closeQuizBtn) {
            closeQuizBtn.addEventListener('click', window.closeQuiz);
        }

        const quizModal = document.getElementById('quizModal');
        if (quizModal) {
            quizModal.addEventListener('click', (e) => {
                if (e.target === quizModal) {
                    window.closeQuiz();
                }
            });
        }

      } catch (error) {
        console.error('Erreur initialisation:', error);
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
        <title>NIS2 - Conformité en 90 jours | Cyber Solferino</title>
        <meta name="description" content="Devenez conforme NIS2 en 90 jours avec nos experts certifiés. Évitez les amendes jusqu'à 10M€." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <style jsx global>{`
        /* ===== DESIGN SYSTEM V3 - NEOMA + BLEU DÉFENSE ===== */

        /* RESET */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        /* VARIABLES CSS */
        :root {
          /* Couleurs Principales */
          --primary-blue: #1E3A8A;
          --blue-light: #3B82F6;
          --blue-dark: #1E40AF;
          --navy: #0F172A;
          --cyan: #06B6D4;

          /* Accent Orange */
          --orange: #F97316;
          --orange-light: #FB923C;
          --orange-dark: #EA580C;

          /* Backgrounds */
          --bg-blue-ultra-light: #EFF6FF;
          --bg-gray: #F8FAFC;
          --bg-white: #FFFFFF;

          /* Texte */
          --text-primary: #0F172A;
          --text-secondary: #475569;
          --text-light: #64748B;

          /* Borders */
          --border-light: #E2E8F0;
          --border-blue: #DBEAFE;

          /* Spacing */
          --space-xs: 8px;
          --space-sm: 12px;
          --space-md: 20px;
          --space-lg: 32px;
          --space-xl: 48px;
          --space-2xl: 64px;
          --space-3xl: 100px;

          /* Typography */
          --weight-regular: 400;
          --weight-medium: 500;
          --weight-semibold: 600;
          --weight-bold: 700;
          --weight-extrabold: 800;
        }

        /* BASE */
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          -webkit-font-smoothing: antialiased;
          color: var(--text-primary);
          background: var(--bg-white);
          line-height: 1.7;
        }

        /* TYPOGRAPHY - STYLE NEOMA */
        h1 {
          font-size: 64px;
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 24px;
          color: var(--navy);
        }

        h2 {
          font-size: 48px;
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 20px;
          color: var(--navy);
        }

        h3 {
          font-size: 36px;
          font-weight: 800;
          line-height: 1.2;
          letter-spacing: -0.01em;
          margin-bottom: 16px;
          color: var(--navy);
        }

        h4 {
          font-size: 28px;
          font-weight: 800;
          margin-bottom: 12px;
          color: var(--navy);
        }

        p {
          font-size: 18px;
          line-height: 1.7;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .tagline {
          font-size: 24px;
          font-weight: 500;
          line-height: 1.5;
          color: var(--text-secondary);
        }

        /* CONTAINER */
        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 32px;
        }

        /* SECTIONS */
        section {
          padding: 100px 0;
        }

        /* BADGES */
        .badge {
          display: inline-block;
          background: var(--bg-blue-ultra-light);
          color: var(--primary-blue);
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 20px;
        }

        .badge.cyan {
          background: #CFFAFE;
          color: #0E7490;
        }

        /* BOUTONS */
        .btn {
          display: inline-block;
          padding: 16px 32px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 16px;
          transition: all 0.3s;
          cursor: pointer;
          border: none;
          text-decoration: none;
          text-align: center;
        }

        .btn-primary {
          background: var(--primary-blue);
          color: white;
          box-shadow: 0 4px 14px rgba(30, 58, 138, 0.25);
        }

        .btn-primary:hover {
          background: var(--blue-dark);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(30, 58, 138, 0.35);
        }

        .btn-secondary {
          background: white;
          color: var(--primary-blue);
          border: 2px solid var(--primary-blue);
        }

        .btn-secondary:hover {
          background: var(--bg-blue-ultra-light);
        }

        .btn-alert {
          background: var(--orange);
          color: white;
          box-shadow: 0 4px 14px rgba(249, 115, 22, 0.3);
        }

        .btn-alert:hover {
          background: var(--orange-dark);
        }

        /* CARDS - STYLE NEOMA */
        .card {
          background: white;
          border: 2px solid var(--border-light);
          border-radius: 20px;
          padding: 40px 32px;
          transition: all 0.4s;
        }

        .card:hover {
          border-color: var(--primary-blue);
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(30, 58, 138, 0.15);
        }

        /* ===== HEADER ===== */
        .sticky-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: white;
          border-bottom: 1px solid var(--border-light);
          padding: 20px 0;
          z-index: 1000;
          opacity: 0;
          transform: translateY(-100%);
          transition: all 0.3s;
        }

        .sticky-header.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .sticky-header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 24px;
          font-weight: 800;
          color: var(--primary-blue);
          text-decoration: none;
        }

        /* ===== HERO ===== */
        .hero {
          background: linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%);
          padding-top: 120px;
          padding-bottom: 100px;
        }

        .hero-content {
          text-align: center;
          max-width: 900px;
          margin: 0 auto 60px;
        }

        .hero h1 {
          margin-bottom: 24px;
        }

        .hero-ctas {
          display: flex;
          gap: 16px;
          justify-content: center;
          margin-top: 32px;
          flex-wrap: wrap;
        }

        .hero-note {
          margin-top: 24px;
          font-size: 15px;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .hero-note::before {
          content: '✓ ';
          color: #10B981;
          font-weight: 700;
        }

        /* STATS GRID */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 40px;
          margin-top: 60px;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 48px;
          font-weight: 800;
          color: var(--primary-blue);
          display: block;
          line-height: 1;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 14px;
          color: var(--text-secondary);
          font-weight: 500;
        }

        /* ===== CREDIBILITY ===== */
        .credibility {
          background: var(--bg-white);
        }

        .credibility-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }

        .credibility-card {
          background: white;
          border: 2px solid var(--border-light);
          border-radius: 20px;
          padding: 40px;
          text-align: center;
          transition: all 0.4s;
        }

        .credibility-card:hover {
          border-color: var(--primary-blue);
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(30, 58, 138, 0.12);
        }

        .credibility-icon {
          font-size: 48px;
          margin-bottom: 20px;
        }

        .credibility-card h3 {
          font-size: 24px;
          margin-bottom: 12px;
        }

        .credibility-card p {
          font-size: 16px;
        }

        /* ===== APPROCHE ===== */
        .approach {
          background: var(--bg-gray);
        }

        .approach-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 60px;
        }

        .timeline {
          max-width: 900px;
          margin: 0 auto;
        }

        .timeline-item {
          display: flex;
          gap: 32px;
          margin-bottom: 48px;
          position: relative;
        }

        .timeline-number {
          flex-shrink: 0;
          width: 60px;
          height: 60px;
          background: var(--cyan);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          font-weight: 800;
        }

        .timeline-content h3 {
          font-size: 28px;
          margin-bottom: 12px;
        }

        /* ===== RISQUES VS OPPORTUNITÉS ===== */
        .risks-opportunities {
          background: white;
        }

        .risks-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
          margin-bottom: 48px;
        }

        .risk-card {
          background: white;
          border: 2px solid var(--border-light);
          border-radius: 20px;
          padding: 40px;
        }

        .risk-card.negative {
          border-top: 4px solid #EF4444;
        }

        .risk-card.positive {
          border-top: 4px solid #10B981;
        }

        .risk-card h3 {
          font-size: 28px;
          margin-bottom: 24px;
        }

        .risk-card.negative h3 {
          color: #DC2626;
        }

        .risk-card.positive h3 {
          color: #059669;
        }

        .risk-list {
          list-style: none;
        }

        .risk-list li {
          padding: 12px 0;
          padding-left: 32px;
          position: relative;
          font-size: 16px;
          color: var(--text-secondary);
        }

        .risk-list li::before {
          position: absolute;
          left: 0;
          font-weight: 700;
          font-size: 18px;
        }

        .risk-card.negative .risk-list li::before {
          content: '⚠️';
        }

        .risk-card.positive .risk-list li::before {
          content: '✓';
          color: #10B981;
        }

        .risks-cta {
          text-align: center;
        }

        /* ===== VIDEO ===== */
        .video-section {
          background: var(--bg-gray);
        }

        .video-content {
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
        }

        .video-thumbnail {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          margin-top: 40px;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s;
        }

        .video-thumbnail:hover {
          transform: scale(1.02);
        }

        .video-thumbnail img {
          width: 100%;
          display: block;
        }

        .play-button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80px;
          height: 80px;
          background: var(--primary-blue);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 32px;
          transition: all 0.3s;
        }

        .video-thumbnail:hover .play-button {
          transform: translate(-50%, -50%) scale(1.1);
          background: var(--blue-dark);
        }

        .video-modal {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.9);
          z-index: 10000;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .video-modal-content {
          position: relative;
          width: 100%;
          max-width: 1000px;
          aspect-ratio: 16/9;
        }

        .close-video {
          position: absolute;
          top: -40px;
          right: 0;
          background: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 24px;
          color: var(--navy);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .video-modal iframe {
          width: 100%;
          height: 100%;
          border-radius: 12px;
        }

        /* ===== TÉMOIGNAGES ===== */
        .testimonials-section {
          background: white;
        }

        .testimonials-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 60px;
        }

        .testimonial-carousel {
          position: relative;
          overflow: hidden;
          max-width: 1000px;
          margin: 0 auto;
        }

        .testimonials-wrapper {
          display: flex;
          transition: transform 0.5s ease;
        }

        .testimonial {
          min-width: 100%;
          background: white;
          border: 2px solid var(--border-light);
          border-radius: 20px;
          padding: 48px;
          text-align: center;
        }

        .testimonial-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          margin: 0 auto 24px;
          background: var(--bg-blue-ultra-light);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 36px;
        }

        .testimonial-text {
          font-size: 20px;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 24px;
          font-style: italic;
        }

        .testimonial-author {
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 4px;
        }

        .testimonial-role {
          font-size: 15px;
          color: var(--text-light);
        }

        .carousel-controls {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 24px;
          margin-top: 40px;
        }

        .carousel-btn {
          background: white;
          border: 2px solid var(--primary-blue);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-blue);
          font-size: 20px;
          transition: all 0.3s;
        }

        .carousel-btn:hover {
          background: var(--primary-blue);
          color: white;
        }

        .carousel-dots {
          display: flex;
          gap: 12px;
        }

        .carousel-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--border-light);
          cursor: pointer;
          transition: all 0.3s;
        }

        .carousel-dot.active {
          background: var(--primary-blue);
          width: 32px;
          border-radius: 6px;
        }

        .testimonials-cta {
          text-align: center;
          margin-top: 48px;
        }

        /* ===== PRICING - STYLE NEOMA EXACT ===== */
        .pricing {
          background: linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%);
        }

        .pricing-header {
          text-align: center;
          max-width: 900px;
          margin: 0 auto 48px;
        }

        .pricing-subtitle {
          font-size: 20px;
          color: var(--text-secondary);
          margin-top: 16px;
        }

        .pricing-info {
          background: var(--bg-blue-ultra-light);
          border-left: 4px solid var(--primary-blue);
          padding: 20px 24px;
          border-radius: 12px;
          margin-bottom: 48px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .pricing-info p {
          margin: 0;
          color: var(--primary-blue);
          font-weight: 600;
          font-size: 16px;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .price-card {
          background: white;
          border: 2px solid var(--border-light);
          border-radius: 20px;
          padding: 40px 32px;
          transition: all 0.4s;
          position: relative;
        }

        .price-card:hover {
          border-color: var(--primary-blue);
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(30, 58, 138, 0.15);
        }

        .price-card.recommended {
          border-color: var(--primary-blue);
          box-shadow: 0 12px 40px rgba(30, 58, 138, 0.12);
        }

        .recommended-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--primary-blue);
          color: white;
          padding: 6px 20px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.03em;
        }

        .price-name {
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--primary-blue);
          margin-bottom: 12px;
        }

        .price-title {
          font-size: 24px;
          font-weight: 800;
          margin-bottom: 12px;
          color: var(--navy);
        }

        .price-amount {
          font-size: 56px;
          font-weight: 800;
          color: var(--navy);
          display: block;
          line-height: 1;
          margin-bottom: 4px;
        }

        .price-amount sup {
          font-size: 24px;
          font-weight: 700;
        }

        .price-period {
          font-size: 15px;
          color: var(--text-light);
          margin-bottom: 24px;
          font-weight: 500;
        }

        .divider {
          height: 1px;
          background: var(--border-light);
          margin: 24px 0;
        }

        .price-features {
          list-style: none;
          margin-bottom: 32px;
        }

        .price-features-title {
          font-size: 14px;
          font-weight: 700;
          color: var(--text-secondary);
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .price-features li {
          padding: 10px 0;
          padding-left: 28px;
          font-size: 15px;
          color: var(--text-secondary);
          position: relative;
        }

        .price-features li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--primary-blue);
          font-weight: 700;
        }

        .price-note {
          margin-top: 16px;
          font-size: 13px;
          color: var(--text-light);
          font-weight: 500;
          text-align: center;
        }

        .price-note strong {
          color: var(--primary-blue);
        }

        /* ===== SERVICES OPTIONNELS ===== */
        .services {
          background: var(--bg-gray);
        }

        .services-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 60px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .service-card {
          background: white;
          border-radius: 20px;
          padding: 40px 32px;
          border-top: 4px solid;
          transition: all 0.3s;
        }

        .service-card.formation {
          border-top-color: var(--blue-light);
        }

        .service-card.secretariat {
          border-top-color: var(--primary-blue);
        }

        .service-card.incidents {
          border-top-color: var(--orange);
        }

        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
        }

        .service-icon {
          font-size: 40px;
          margin-bottom: 24px;
          display: block;
        }

        .service-card h3 {
          font-size: 24px;
          margin-bottom: 16px;
        }

        .service-list {
          list-style: none;
        }

        .service-list li {
          padding: 8px 0;
          padding-left: 24px;
          font-size: 15px;
          color: var(--text-secondary);
          position: relative;
        }

        .service-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          font-weight: 700;
        }

        .service-card.formation .service-list li::before {
          color: var(--blue-light);
        }

        .service-card.secretariat .service-list li::before {
          color: var(--primary-blue);
        }

        .service-card.incidents .service-list li::before {
          color: var(--orange);
        }

        /* ===== FAQ ===== */
        .faq {
          background: white;
        }

        .faq-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 60px;
        }

        .faq-list {
          max-width: 900px;
          margin: 0 auto;
        }

        .faq-item {
          background: white;
          border: 2px solid var(--border-light);
          border-radius: 12px;
          margin-bottom: 16px;
          cursor: pointer;
          transition: all 0.3s;
        }

        .faq-item:hover {
          border-color: var(--primary-blue);
        }

        .faq-question {
          padding: 24px 28px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .faq-question h3 {
          font-size: 18px;
          font-weight: 700;
          margin: 0;
        }

        .faq-icon {
          flex-shrink: 0;
          width: 24px;
          height: 24px;
          color: var(--primary-blue);
          transition: transform 0.3s;
          font-weight: 700;
        }

        .faq-item.active .faq-icon {
          transform: rotate(180deg);
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
          padding: 0 28px 24px;
          color: var(--text-secondary);
          font-size: 16px;
          line-height: 1.7;
        }

        /* ===== FINAL CTA ===== */
        .final-cta {
          background: linear-gradient(135deg, var(--navy) 0%, var(--primary-blue) 100%);
          color: white;
        }

        .final-cta-content {
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
        }

        .final-cta h2 {
          color: white;
          margin-bottom: 32px;
        }

        .final-cta .btn {
          background: white;
          color: var(--primary-blue);
        }

        .final-cta .btn:hover {
          background: var(--bg-blue-ultra-light);
          transform: translateY(-2px);
        }

        /* ===== FOOTER ===== */
        .footer {
          background: var(--navy);
          color: white;
          padding: 60px 0 32px;
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
        }

        .footer-logo {
          font-size: 24px;
          font-weight: 800;
        }

        .footer-links {
          display: flex;
          gap: 32px;
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
        }

        .footer-links a:hover {
          color: white;
        }

        .footer-bottom {
          text-align: center;
          padding-top: 32px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.6);
          font-size: 14px;
        }

        /* ===== QUIZ MODAL ===== */
        .quiz-modal {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          z-index: 10000;
          align-items: center;
          justify-content: center;
          padding: 20px;
          overflow-y: auto;
        }

        .quiz-container {
          background: white;
          border-radius: 20px;
          width: 100%;
          max-width: 700px;
          padding: 48px;
          position: relative;
        }

        .quiz-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          font-size: 28px;
          cursor: pointer;
          color: var(--text-light);
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.3s;
        }

        .quiz-close:hover {
          background: var(--bg-gray);
          color: var(--navy);
        }

        .quiz-header h2 {
          font-size: 32px;
          margin-bottom: 12px;
        }

        .quiz-header p {
          font-size: 16px;
          margin-bottom: 32px;
        }

        .quiz-progress {
          margin-bottom: 32px;
        }

        .quiz-progress-text {
          font-size: 14px;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 8px;
        }

        .quiz-progress-bar-bg {
          height: 8px;
          background: var(--bg-gray);
          border-radius: 4px;
          overflow: hidden;
        }

        .quiz-progress-bar {
          height: 100%;
          background: var(--primary-blue);
          transition: width 0.3s;
        }

        .quiz-questions {
          margin-bottom: 32px;
        }

        .quiz-question {
          display: none;
        }

        .quiz-question.active {
          display: block;
        }

        .quiz-question-number {
          font-size: 14px;
          font-weight: 700;
          color: var(--primary-blue);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 12px;
        }

        .quiz-question-text {
          font-size: 20px;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 24px;
          line-height: 1.4;
        }

        .quiz-answers {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .quiz-answer {
          padding: 20px;
          border: 2px solid var(--border-light);
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .quiz-answer:hover {
          border-color: var(--primary-blue);
          background: var(--bg-blue-ultra-light);
        }

        .quiz-answer.selected {
          border-color: var(--primary-blue);
          background: var(--bg-blue-ultra-light);
        }

        .quiz-answer-radio {
          width: 24px;
          height: 24px;
          border: 2px solid var(--border-light);
          border-radius: 50%;
          position: relative;
          transition: all 0.3s;
        }

        .quiz-answer.selected .quiz-answer-radio {
          border-color: var(--primary-blue);
        }

        .quiz-answer.selected .quiz-answer-radio::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 12px;
          height: 12px;
          background: var(--primary-blue);
          border-radius: 50%;
        }

        .quiz-answer-text {
          font-size: 16px;
          font-weight: 600;
          color: var(--navy);
        }

        .quiz-navigation {
          display: flex;
          justify-content: space-between;
          gap: 16px;
        }

        .quiz-btn {
          flex: 1;
          padding: 16px 32px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 16px;
          cursor: pointer;
          border: none;
          transition: all 0.3s;
        }

        .quiz-btn-prev {
          background: white;
          color: var(--primary-blue);
          border: 2px solid var(--primary-blue);
        }

        .quiz-btn-prev:hover {
          background: var(--bg-blue-ultra-light);
        }

        .quiz-btn-next {
          background: var(--primary-blue);
          color: white;
        }

        .quiz-btn-next:hover:not(:disabled) {
          background: var(--blue-dark);
        }

        .quiz-btn-next:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .quiz-results {
          display: none;
          text-align: center;
        }

        .quiz-score-circle {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          border: 8px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 32px;
          position: relative;
        }

        #scoreNumber {
          font-size: 64px;
          font-weight: 800;
          color: var(--navy);
        }

        .quiz-score-label {
          position: absolute;
          bottom: 35px;
          right: 45px;
          font-size: 24px;
          font-weight: 700;
          color: var(--text-light);
        }

        .quiz-result-title {
          font-size: 28px;
          margin-bottom: 16px;
        }

        .quiz-result-desc {
          font-size: 18px;
          margin-bottom: 32px;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }

        .quiz-result-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .quiz-result-btn {
          padding: 16px 32px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 16px;
          text-decoration: none;
          transition: all 0.3s;
        }

        .quiz-result-btn.primary {
          background: var(--primary-blue);
          color: white;
        }

        .quiz-result-btn.primary:hover {
          background: var(--blue-dark);
        }

        .quiz-result-btn.secondary {
          background: white;
          color: var(--primary-blue);
          border: 2px solid var(--primary-blue);
        }

        .quiz-result-btn.secondary:hover {
          background: var(--bg-blue-ultra-light);
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 768px) {
          h1 { font-size: 40px; }
          h2 { font-size: 32px; }
          h3 { font-size: 24px; }
          h4 { font-size: 20px; }
          p { font-size: 16px; }
          .tagline { font-size: 18px; }

          section { padding: 60px 0; }

          .stats-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }

          .stat-number {
            font-size: 32px;
          }

          .credibility-grid {
            grid-template-columns: 1fr;
          }

          .risks-grid {
            grid-template-columns: 1fr;
          }

          .pricing-grid {
            grid-template-columns: 1fr;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .price-amount {
            font-size: 40px;
          }

          .hero-ctas {
            flex-direction: column;
          }

          .footer-content {
            flex-direction: column;
            gap: 24px;
            text-align: center;
          }

          .footer-links {
            flex-direction: column;
            gap: 16px;
          }

          .quiz-container {
            padding: 32px 24px;
          }

          .quiz-navigation {
            flex-direction: column;
          }
        }
      `}</style>

      {/* HEADER STICKY */}
      <div className="sticky-header" id="stickyHeader">
        <div className="container">
          <div className="sticky-header-content">
            <a href="#" className="logo">Cyber Solferino</a>
            <a href="https://calendly.com/adrien-ruggirello/30min" className="btn btn-primary" target="_blank">
              📅 RDV expert gratuit
            </a>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Devenez conforme NIS2 en 90 jours</h1>
            <p className="tagline">
              Protégez votre entreprise des cybermenaces et évitez les sanctions jusqu'à 10M€ avec nos experts certifiés ISO 27001
            </p>
            <div className="hero-ctas">
              <button className="btn btn-primary" onClick={() => window.openQuiz()}>
                Commencer l'audit
              </button>
              <a href="#approach" className="btn btn-secondary">
                En savoir plus
              </a>
            </div>
            <p className="hero-note">Paiement en plusieurs fois possible</p>
          </div>

          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">+40%</span>
              <div className="stat-label">Cyberattaques en 2024</div>
            </div>
            <div className="stat-item">
              <span className="stat-number">10M€</span>
              <div className="stat-label">Amende maximale</div>
            </div>
            <div className="stat-item">
              <span className="stat-number">70%</span>
              <div className="stat-label">Aides de l'État</div>
            </div>
            <div className="stat-item">
              <span className="stat-number">150+</span>
              <div className="stat-label">Clients accompagnés</div>
            </div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <div className="stat-label">Taux de conformité</div>
            </div>
            <div className="stat-item">
              <span className="stat-number">0</span>
              <div className="stat-label">Client sanctionné</div>
            </div>
          </div>
        </div>
      </section>

      {/* CREDIBILITY */}
      <section className="credibility">
        <div className="container">
          <div className="credibility-grid">
            <div className="credibility-card">
              <div className="credibility-icon">🏆</div>
              <h3>15+ années d'expérience</h3>
              <p>Une expertise reconnue dans la cybersécurité et la conformité réglementaire</p>
            </div>
            <div className="credibility-card">
              <div className="credibility-icon">✅</div>
              <h3>Experts certifiés ISO 27001</h3>
              <p>Des consultants qualifiés pour garantir votre mise en conformité</p>
            </div>
          </div>
        </div>
      </section>

      {/* APPROCHE */}
      <section className="approach" id="approach">
        <div className="container">
          <div className="approach-header">
            <div className="badge cyan">NOTRE APPROCHE</div>
            <h2>Préparez-vous à NIS2 avec notre méthode éprouvée</h2>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-number">01</div>
              <div className="timeline-content">
                <h3>Où en êtes-vous ?</h3>
                <p>Diagnostic complet de votre niveau de maturité cybersécurité et identification précise de vos obligations NIS2</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-number">02</div>
              <div className="timeline-content">
                <h3>Quels sont vos risques ?</h3>
                <p>Analyse approfondie de vos vulnérabilités et cartographie des menaces spécifiques à votre activité</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-number">03</div>
              <div className="timeline-content">
                <h3>Plan d'action sur-mesure</h3>
                <p>Feuille de route personnalisée avec actions prioritaires, budget et planning pour atteindre la conformité</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RISQUES VS OPPORTUNITÉS */}
      <section className="risks-opportunities">
        <div className="container">
          <div className="risks-grid">
            <div className="risk-card negative">
              <h3>⚠️ Risques de non-conformité</h3>
              <ul className="risk-list">
                <li>Amendes jusqu'à 10M€ ou 2% du CA mondial</li>
                <li>Suspension d'activité possible</li>
                <li>Perte de confiance des clients et partenaires</li>
                <li>Dégradation de votre réputation</li>
                <li>Exposition accrue aux cyberattaques</li>
              </ul>
            </div>
            <div className="risk-card positive">
              <h3>✅ Avantages stratégiques</h3>
              <ul className="risk-list">
                <li>Protection renforcée contre les cybermenaces</li>
                <li>Avantage concurrentiel auprès des clients</li>
                <li>Conformité aux appels d'offres publics</li>
                <li>Réduction des coûts d'assurance cyber</li>
                <li>Valorisation de votre entreprise</li>
              </ul>
            </div>
          </div>
          <div className="risks-cta">
            <a href="#pricing" className="btn btn-primary">🚀 Découvrir nos offres</a>
          </div>
        </div>
      </section>

      {/* VIDÉO */}
      <section className="video-section">
        <div className="container">
          <div className="video-content">
            <div className="badge cyan">COMPRENDRE</div>
            <h2>🎥 Comprendre NIS2 en vidéo</h2>
            <p className="tagline">Découvrez en 3 minutes pourquoi NIS2 concerne votre entreprise</p>
            <div className="video-thumbnail" id="videoThumbnail">
              <img src="https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" alt="Vidéo NIS2" />
              <div className="play-button">▶</div>
            </div>
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-header">
            <div className="badge">TÉMOIGNAGES</div>
            <h2>Ils nous font confiance</h2>
          </div>
          <div className="testimonial-carousel" id="testimonialCarousel">
            <div className="testimonials-wrapper">
              <div className="testimonial">
                <div className="testimonial-avatar">👨‍💼</div>
                <p className="testimonial-text">
                  "Cyber Solferino nous a accompagnés avec professionnalisme. En 90 jours, nous étions conformes NIS2. Leur expertise a été déterminante."
                </p>
                <div className="testimonial-author">Pierre Durand</div>
                <div className="testimonial-role">Directeur SI, Groupe industriel</div>
              </div>
              <div className="testimonial">
                <div className="testimonial-avatar">👩‍💼</div>
                <p className="testimonial-text">
                  "Une approche pragmatique et efficace. Le diagnostic initial était précis, le plan d'action clair. Nous avons évité une amende potentielle de plusieurs millions."
                </p>
                <div className="testimonial-author">Marie Lambert</div>
                <div className="testimonial-role">CEO, ESN spécialisée Cloud</div>
              </div>
              <div className="testimonial">
                <div className="testimonial-avatar">👨‍⚕️</div>
                <p className="testimonial-text">
                  "Dans le secteur de la santé, la conformité est cruciale. Cyber Solferino a su adapter leur méthodologie à nos contraintes. Un partenaire de confiance."
                </p>
                <div className="testimonial-author">Dr. Jean Martin</div>
                <div className="testimonial-role">Directeur, Clinique privée</div>
              </div>
            </div>
          </div>
          <div className="carousel-controls">
            <button className="carousel-btn" id="prevBtn">←</button>
            <div className="carousel-dots" id="carouselDots"></div>
            <button className="carousel-btn" id="nextBtn">→</button>
          </div>
          <div className="testimonials-cta">
            <a href="https://calendly.com/adrien-ruggirello/30min" className="btn btn-primary" target="_blank">
              Prendre rendez-vous
            </a>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing" id="pricing">
        <div className="container">
          <div className="pricing-header">
            <div className="badge">TARIFS CLAIRS</div>
            <h2>Investissement vs Amende</h2>
            <p className="pricing-subtitle">Un audit coûte 200x moins cher qu'une sanction</p>
          </div>
          <div className="pricing-info">
            <p>💡 Aides de l'État disponibles : jusqu'à 70% de financement pour votre mise en conformité</p>
          </div>
          <div className="pricing-grid">
            <div className="price-card">
              <div className="price-name">Découverte</div>
              <div className="price-title">Diagnostic flash</div>
              <span className="price-amount">3 490<sup>€</sup></span>
              <div className="price-period">Immédiat • Diagnostic</div>
              <div className="divider"></div>
              <ul className="price-features">
                <li>Questionnaire en ligne guidé</li>
                <li>Rapport d'éligibilité NIS2</li>
                <li>Identification des gaps critiques</li>
                <li>Recommandations prioritaires</li>
              </ul>
              <button className="btn btn-primary" style={{width: '100%'}} onClick={() => window.handleStripeCheckout()}>
                Je fais mon diagnostic NIS2
              </button>
              <p className="price-note"><strong>✅ Déductible</strong> de vos impôts</p>
            </div>

            <div className="price-card recommended">
              <div className="recommended-badge">Recommandé</div>
              <div className="price-name">Essentiel</div>
              <div className="price-title">Audit complet</div>
              <span className="price-amount">7 990<sup>€</sup></span>
              <div className="price-period">En 48H</div>
              <div className="divider"></div>
              <div className="price-features-title">✓ Tout de Découverte, plus :</div>
              <ul className="price-features">
                <li>Audit sur site par expert certifié</li>
                <li>Cartographie complète des risques</li>
                <li>Plan d'action détaillé et chiffré</li>
                <li>Support 30 jours</li>
                <li>Dossier de conformité prêt</li>
              </ul>
              <a href="https://calendly.com/adrien-ruggirello/30min" className="btn btn-primary" style={{width: '100%'}} target="_blank">
                Prendre rendez-vous
              </a>
              <p className="price-note"><strong>✅ Déductible</strong> de vos impôts</p>
            </div>

            <div className="price-card">
              <div className="price-name">Expertise</div>
              <div className="price-title">Accompagnement premium</div>
              <span className="price-amount">14 900<sup>€</sup></span>
              <div className="price-period">1 mois</div>
              <div className="divider"></div>
              <div className="price-features-title">✓ Tout de Essentiel, plus :</div>
              <ul className="price-features">
                <li>RSSI dédié à temps partagé</li>
                <li>Mise en œuvre des mesures techniques</li>
                <li>Formation équipes (sensibilisation)</li>
                <li>Rédaction politiques de sécurité</li>
                <li>Préparation audits de contrôle</li>
                <li>Support prioritaire 6 mois</li>
              </ul>
              <a href="https://calendly.com/adrien-ruggirello/30min" className="btn btn-primary" style={{width: '100%'}} target="_blank">
                Prendre rendez-vous
              </a>
              <p className="price-note"><strong>✅ Déductible</strong> de vos impôts</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OPTIONNELS */}
      <section className="services">
        <div className="container">
          <div className="services-header">
            <div className="badge cyan">SERVICES OPTIONNELS</div>
            <h2>Allez plus loin dans votre conformité</h2>
          </div>
          <div className="services-grid">
            <div className="service-card formation">
              <span className="service-icon">📚</span>
              <h3>Formation équipes</h3>
              <ul className="service-list">
                <li>Sensibilisation cybersécurité</li>
                <li>Modules e-learning personnalisés</li>
                <li>Sessions pratiques en présentiel</li>
                <li>Certificats de formation</li>
              </ul>
            </div>
            <div className="service-card secretariat">
              <span className="service-icon">📝</span>
              <h3>Secrétariat subventions</h3>
              <ul className="service-list">
                <li>Montage dossiers BPI France</li>
                <li>Dossiers régionaux (France Num, etc.)</li>
                <li>Suivi administratif complet</li>
                <li>Optimisation du financement</li>
              </ul>
            </div>
            <div className="service-card incidents">
              <span className="service-icon">🚨</span>
              <h3>Gestion incidents 24/7</h3>
              <ul className="service-list">
                <li>Hotline cyber H24</li>
                <li>Cellule de crise dédiée</li>
                <li>Investigation forensique</li>
                <li>Communication de crise</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="container">
          <div className="faq-header">
            <div className="badge">FAQ</div>
            <h2>Questions fréquentes</h2>
          </div>
          <div className="faq-list">
            <div className="faq-item">
              <div className="faq-question">
                <h3>Mon entreprise est-elle concernée par NIS2 ?</h3>
                <span className="faq-icon">▼</span>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-content">
                  NIS2 concerne les entreprises de plus de 50 salariés ou 10M€ de CA opérant dans 18 secteurs critiques (santé, énergie, transport, numérique, etc.) ainsi que leurs sous-traitants essentiels. Notre quiz gratuit vous permet de savoir en 2 minutes si vous êtes concerné.
                </div>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <h3>Quels sont les risques si je ne me mets pas en conformité ?</h3>
                <span className="faq-icon">▼</span>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-content">
                  Les sanctions peuvent aller jusqu'à 10M€ ou 2% du chiffre d'affaires mondial annuel. Au-delà des amendes, vous risquez une suspension d'activité, une perte de marchés publics et une atteinte grave à votre réputation.
                </div>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <h3>Combien de temps prend une mise en conformité NIS2 ?</h3>
                <span className="faq-icon">▼</span>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-content">
                  Avec notre méthode éprouvée, la conformité peut être atteinte en 90 jours. Le diagnostic initial prend 48h, suivi d'un plan d'action sur-mesure que nous vous aidons à déployer progressivement.
                </div>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <h3>Puis-je obtenir des aides financières ?</h3>
                <span className="faq-icon">▼</span>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-content">
                  Oui ! Jusqu'à 70% de financement via BPI France, France Num et les dispositifs régionaux. Nous vous accompagnons dans le montage des dossiers pour optimiser votre prise en charge.
                </div>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <h3>Que se passe-t-il après l'audit ?</h3>
                <span className="faq-icon">▼</span>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-content">
                  Vous recevez un rapport détaillé avec cartographie des risques, plan d'action priorisé et budget. Nous pouvons ensuite vous accompagner dans la mise en œuvre ou former vos équipes pour qu'elles gèrent en autonomie.
                </div>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <h3>Votre méthode est-elle reconnue par les autorités ?</h3>
                <span className="faq-icon">▼</span>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-content">
                  Absolument. Nos consultants sont certifiés ISO 27001 et notre méthodologie est alignée sur les recommandations de l'ANSSI. Nos 150+ clients accompagnés affichent un taux de conformité de 98% aux audits de contrôle.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="container">
          <div className="final-cta-content">
            <h2>Sécurisez votre avenir dès aujourd'hui</h2>
            <a href="https://calendly.com/adrien-ruggirello/30min" className="btn" target="_blank">
              📅 Réserver un échange gratuit
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">Cyber Solferino</div>
            <div className="footer-links">
              <a href="#pricing">Tarifs</a>
              <a href="#approach">Notre approche</a>
              <a href="https://calendly.com/adrien-ruggirello/30min" target="_blank">Contact</a>
            </div>
          </div>
          <div className="footer-bottom">
            © 2024 Cyber Solferino - Tous droits réservés
          </div>
        </div>
      </footer>

      {/* VIDEO MODAL */}
      <div className="video-modal" id="videoModal">
        <div className="video-modal-content">
          <button className="close-video" id="closeVideo">×</button>
          <iframe
            id="youtubeIframe"
            src=""
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* QUIZ MODAL */}
      <div className="quiz-modal" id="quizModal">
        <div className="quiz-container">
          <button className="quiz-close" id="closeQuiz">×</button>
          
          <div className="quiz-header">
            <h2>Êtes-vous concerné par NIS2 ?</h2>
            <p>Répondez à 10 questions pour le savoir</p>
          </div>

          <div className="quiz-progress" id="quizProgress">
            <div className="quiz-progress-text" id="quizProgressText">Question 1 sur 10</div>
            <div className="quiz-progress-bar-bg">
              <div className="quiz-progress-bar" id="quizProgressBar" style={{width: '10%'}}></div>
            </div>
          </div>

          <div className="quiz-questions" id="quizQuestionsContainer">
            <div className="quiz-question active" data-question="1">
              <div className="quiz-question-number">Question 1 sur 10</div>
              <div className="quiz-question-text">Votre entreprise compte-t-elle plus de 50 salariés ou réalise-t-elle plus de 10M€ de chiffre d'affaires annuel ?</div>
              <div className="quiz-answers">
                <div className="quiz-answer" onClick={(event) => window.selectAnswer(1, 'oui', event.currentTarget)}>
                  <div className="quiz-answer-radio"></div>
                  <div className="quiz-answer-text">Oui</div>
                </div>
                <div className="quiz-answer" onClick={(event) => window.selectAnswer(1, 'non', event.currentTarget)}>
                  <div className="quiz-answer-radio"></div>
                  <div className="quiz-answer-text">Non</div>
                </div>
              </div>
            </div>

            <div className="quiz-question" data-question="2">
              <div className="quiz-question-number">Question 2 sur 10</div>
              <div className="quiz-question-text">Opérez-vous en France ou dans l'Union Européenne ?</div>
              <div className="quiz-answers">
                <div className="quiz-answer" onClick={(event) => window.selectAnswer(2, 'oui', event.currentTarget)}>
                  <div className="quiz-answer-radio"></div>
                  <div className="quiz-answer-text">Oui</div>
                </div>
                <div className="quiz-answer" onClick={(event) => window.selectAnswer(2, 'non', event.currentTarget)}>
                  <div className="quiz-answer-radio"></div>
                  <div className="quiz-answer-text">Non</div>
                </div>
              </div>
            </div>

            <div className="quiz-question" data-question="3">
              <div className="quiz-question-number">Question 3 sur 10</div>
              <div className="quiz-question-text">Êtes-vous actif dans l'un des secteurs critiques : santé, énergie, eau, transport, numérique, administration publique, agroalimentaire ?</div>
              <div className="quiz-answers">
                <div className="quiz-answer" onClick={(event) => window.selectAnswer(3, 'oui', event.currentTarget)}>
                  <div className="quiz-answer-radio"></div>
                  <div className="quiz-answer-text">Oui</div>
                </div>
                <div className="quiz-answer" onClick={(event) => window.selectAnswer(3, 'non', event.currentTarget)}>
                  <div className="quiz-answer-radio"></div>
                  <div className="quiz-answer-text">Non</div>
                </div>
              </div>
            </div>

            <div className="quiz-question" data-question="4">
              <div className="quiz-question-number">Question 4 sur 10</div>
              <div className="quiz-question-text">Fournissez-vous des services numériques critiques (hébergement, cloud, DNS, SaaS, etc.) ?</div>
              <div className="quiz-answers">
                <div className="quiz-answer" onClick={(event) => window.selectAnswer(4, 'oui', event.currentTarget)}>
                  <div className="quiz-answer-radio"></div>
                  <div className="quiz-answer-text">Oui</div>
                </div>
                <div className="quiz-answer" onClick={(event) => window.selectAnswer(4, 'non', event.currentTarget)}>
                  <div className="quiz-answer-radio"></div>
                  <div className="quiz-answer-text">Non</div>
                </div>
              </div>
            </div>

            <div className="quiz-question" data-question="5">
              <div className="quiz-question-number">Question 5 sur 10</div>
              <div className="quiz-question-text">Avez-vous un rôle de sous-traitant dans la chaîne de valeur d'un acteur critique ?</div>
              <div className="quiz-answers">
                <div className="quiz-answer" onClick={(event) => window.selectAnswer(5, 'oui', event.currentTarget)}>
                  <div className="quiz-answer-radio"></div>
                  <div className="quiz-answer-text">Oui</div>
                </div>
                <div className="quiz-answer" onClick={(event) => window.selectAnswer(5, 'non', event.currentTarget)}>
                  <div className="quiz-answer-radio"></div>
                  <div className="quiz-answer-text">Non</div>
                </div>
              </div>
            </div>

            <div className="quiz-question" data-question="6">
              <div className="quiz-question-number">Question 6 sur 10</div>
              <div className="quiz-question-text">Traitez-vous des données sensibles ou critiques (données de santé, infrastructures, systèmes industriels) ?</div>
              <div className="quiz-answers">
                <div className="quiz-answer" onClick={(event) => window.selectAnswer(6, 'oui', event.currentTarget)}>
                  <div className="quiz-answer-radio"></div>
                  <div className="quiz-answer-text">Oui</div>
                </div>
                <div className="quiz-answer" onClick={(event) => window.selectAnswer(6, 'non', event.currentTarget)}>
                  <div className="quiz-answer-radio"></div>
                  <div className="quiz-answer-text">Non</div>
                </div>
              </div>
            </div>

            <div className="quiz-question" data-question="7">
              <div className="quiz-question-number">Question 7 sur 10</div>
              <div className="quiz-question-text">Avez-vous été victime d'un incident ou d'une tentative de cyberattaque dans les 12 derniers mois ?</div>
              <div className="quiz-answers">
                <div className="quiz-answer" onClick={(event) => window.selectAnswer(7, 'oui', event.currentTarget)}>
                  <div className="quiz-answer-radio"></div>
                  <div className="quiz-answer-text">Oui</div>
                </div>
                <div className="quiz-answer" onClick={(event) => window.selectAnswer(7, 'non', event.currentTarget)}>
                  <div className="quiz-answer-radio"></div>
                  <div className="quiz-answer-text">Non</div>
                </div>
              </div>
            </div>

            <div className="quiz-question" data-question="8">
              <div className="quiz-question-number">Question 8 sur 10</div>
              <div className="quiz-question-text">Disposez-vous d'une politique formalisée de sécurité des systèmes d'information ?</div>
              <div className="quiz-answers">
                <div className="quiz-answer" onClick={(event) => window.selectAnswer(8, 'oui', event.currentTarget)}>
                  <div className="quiz-answer-radio"></div>
                  <div className="quiz-answer-text">Oui</div>
                </div>
                <div className="quiz-answer" onClick={(event) => window.selectAnswer(8, 'non', event.currentTarget)}>
                  <div className="quiz-answer-radio"></div>
                  <div className="quiz-answer-text">Non</div>
                </div>
              </div>
            </div>

            <div className="quiz-question" data-question="9">
              <div className="quiz-question-number">Question 9 sur 10</div>
              <div className="quiz-question-text">Avez-vous une personne ou un prestataire en charge de la cybersécurité ?</div>
              <div className="quiz-answers">
                <div className="quiz-answer" onClick={(event) => window.selectAnswer(9, 'oui', event.currentTarget)}>
                  <div className="quiz-answer-radio"></div>
                  <div className="quiz-answer-text">Oui</div>
                </div>
                <div className="quiz-answer" onClick={(event) => window.selectAnswer(9, 'non', event.currentTarget)}>
                  <div className="quiz-answer-radio"></div>
                  <div className="quiz-answer-text">Non</div>
                </div>
              </div>
            </div>

            <div className="quiz-question" data-question="10">
              <div className="quiz-question-number">Question 10 sur 10</div>
              <div className="quiz-question-text">Votre entreprise a-t-elle déjà mis en place un plan de continuité ou de gestion de crise informatique ?</div>
              <div className="quiz-answers">
                <div className="quiz-answer" onClick={(event) => window.selectAnswer(10, 'oui', event.currentTarget)}>
                  <div className="quiz-answer-radio"></div>
                  <div className="quiz-answer-text">Oui</div>
                </div>
                <div className="quiz-answer" onClick={(event) => window.selectAnswer(10, 'non', event.currentTarget)}>
                  <div className="quiz-answer-radio"></div>
                  <div className="quiz-answer-text">Non</div>
                </div>
              </div>
            </div>
          </div>

          <div className="quiz-navigation" id="quizNavigation">
            <button className="quiz-btn quiz-btn-prev" onClick={() => window.prevQuestion()} id="quizPrevBtn" style={{display: 'none'}}>
              ← Précédent
            </button>
            <button className="quiz-btn quiz-btn-next" onClick={() => window.nextQuestion()} id="quizNextBtn" disabled>
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
              <a href="#pricing" onClick={() => window.closeQuiz()} className="quiz-result-btn secondary">
                Découvrir nos audits
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
