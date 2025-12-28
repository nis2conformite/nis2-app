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
        let videoIsPlaying = false;

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

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        document.querySelectorAll('.faq-item').forEach(item => {
            item.addEventListener('click', function() {
                this.classList.toggle('active');
            });
        });

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

        document.querySelectorAll('.price-card, .testimonial, .credibility-card, .timeline-item, .service-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            observer.observe(el);
        });

        const carousel = document.getElementById('testimonialCarousel');
        if (carousel) {
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

            carousel.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
            carousel.addEventListener('mouseleave', () => autoplayInterval = setInterval(nextSlide, 5000));

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

        window.openVideoModal = function() {
            const modal = document.getElementById('videoModal');
            const iframe = modal.querySelector('iframe');
            modal.style.display = 'flex';
            setTimeout(() => modal.classList.add('show'), 10);
            videoIsPlaying = true;
            if (iframe.src.indexOf('autoplay=1') === -1) {
                iframe.src += '&autoplay=1';
            }
            document.body.style.overflow = 'hidden';
        };

        window.closeVideoModal = function() {
            const modal = document.getElementById('videoModal');
            const iframe = modal.querySelector('iframe');
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
                iframe.src = iframe.src.replace('&autoplay=1', '');
            }, 300);
            videoIsPlaying = false;
            document.body.style.overflow = '';
        };

        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                if (e.target.id === 'videoModal') window.closeVideoModal();
            }
        });

        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (videoIsPlaying) window.closeVideoModal();
            }
        });

      } catch (error) {
        console.error('Error initializing app:', error);
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
        <title>NIS2 Conformité | Devenez conforme en 90 jours | Expert ISO 27001</title>
        <meta name="description" content="Devenez conforme NIS2 en 90 jours avec des experts certifiés ISO 27001. Audit, accompagnement et mise en conformité pour PME et ETI. 0 client sanctionné." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <style jsx global>{`
        :root {
          --primary-dark: #0F172A;
          --primary: #1E293B;
          --primary-light: #334155;
          --accent: #F97316;
          --accent-light: #FB923C;
          --accent-hover: #EA580C;
          --accent-secondary: #06B6D4;
          --accent-secondary-light: #22D3EE;
          --accent-secondary-dark: #0891B2;
          --text-primary: #0F172A;
          --text-secondary: #475569;
          --text-light: #94A3B8;
          --bg-primary: #FFFFFF;
          --bg-secondary: #F8FAFC;
          --bg-accent: #FFF7ED;
          --bg-accent-secondary: #ECFEFF;
          --bg-dark: #0F172A;
          --success: #10B981;
          --success-bg: rgba(16, 185, 129, 0.1);
          --success-border: rgba(16, 185, 129, 0.2);
          --warning: #F59E0B;
          --warning-bg: rgba(245, 158, 11, 0.1);
          --warning-border: rgba(245, 158, 11, 0.2);
          --error: #EF4444;
          --error-bg: rgba(239, 68, 68, 0.1);
          --error-border: rgba(239, 68, 68, 0.2);
          --info: #3B82F6;
          --info-bg: rgba(59, 130, 246, 0.1);
          --info-border: rgba(59, 130, 246, 0.2);
          --space-xs: 8px;
          --space-sm: 16px;
          --space-md: 24px;
          --space-lg: 32px;
          --space-xl: 48px;
          --space-2xl: 64px;
          --space-3xl: 96px;
          --container-sm: 640px;
          --container-md: 768px;
          --container-lg: 1024px;
          --container-xl: 1280px;
          --transition-fast: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          --transition-base: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          --transition-slow: 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          line-height: 1.6;
          color: var(--text-primary);
          background: var(--bg-primary);
          overflow-x: hidden;
        }

        h1, h2, h3, h4, h5, h6 {
          font-weight: 600;
          line-height: 1.2;
          color: var(--text-primary);
        }

        h1 {
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 700;
          margin-bottom: var(--space-md);
        }

        h2 {
          font-size: clamp(28px, 4vw, 40px);
          margin-bottom: var(--space-md);
        }

        h3 {
          font-size: clamp(20px, 3vw, 28px);
          margin-bottom: var(--space-sm);
        }

        p {
          font-size: 16px;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: var(--space-sm);
        }

        .sticky-header {
          position: fixed;
          top: -100px;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 16px rgba(15, 23, 42, 0.08);
          padding: var(--space-sm) 0;
          transition: top var(--transition-base);
          z-index: 1000;
          border-bottom: 1px solid rgba(15, 23, 42, 0.1);
        }

        .sticky-header.visible {
          top: 0;
        }

        .sticky-header .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: var(--container-xl);
          margin: 0 auto;
          padding: 0 var(--space-md);
        }

        .sticky-header .logo {
          font-size: 20px;
          font-weight: 700;
          color: var(--primary);
        }

        .hero {
          background: linear-gradient(135deg, var(--bg-dark) 0%, var(--primary) 100%);
          color: white;
          padding: var(--space-3xl) 0 var(--space-2xl);
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, transparent 70%);
          pointer-events: none;
        }

        .hero::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%);
          pointer-events: none;
        }

        .hero .container {
          max-width: var(--container-lg);
          margin: 0 auto;
          padding: 0 var(--space-md);
          position: relative;
          z-index: 1;
        }

        .hero .logo {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: var(--space-sm);
          opacity: 0.95;
        }

        .hero h1 {
          color: white;
          margin-bottom: var(--space-sm);
        }

        .hero .tagline {
          font-size: 20px;
          line-height: 1.5;
          opacity: 0.9;
          margin-bottom: var(--space-xl);
          max-width: 700px;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--space-md);
          margin-top: var(--space-xl);
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 12px;
          padding: var(--space-md);
          text-align: center;
          transition: all var(--transition-base);
        }

        .stat-card:hover {
          background: rgba(255, 255, 255, 0.12);
          transform: translateY(-4px);
        }

        .stat-number {
          font-size: 48px;
          font-weight: 700;
          color: var(--accent-light);
          display: block;
          margin-bottom: var(--space-xs);
        }

        .stat-label {
          font-size: 14px;
          opacity: 0.9;
          font-weight: 500;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-xs);
          padding: 16px 32px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 16px;
          text-decoration: none;
          transition: all var(--transition-fast);
          cursor: pointer;
          border: none;
          font-family: inherit;
        }

        .btn-primary {
          background: var(--accent);
          color: white;
          box-shadow: 0 2px 8px rgba(249, 115, 22, 0.25);
        }

        .btn-primary:hover {
          background: var(--accent-hover);
          box-shadow: 0 4px 16px rgba(249, 115, 22, 0.35);
          transform: translateY(-2px);
        }

        .btn-secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
        }

        .btn-secondary:hover {
          background: white;
          color: var(--primary);
        }

        section {
          padding: var(--space-2xl) 0;
        }

        .container {
          max-width: var(--container-xl);
          margin: 0 auto;
          padding: 0 var(--space-md);
        }

        .section-badge {
          display: inline-block;
          background: rgba(249, 115, 22, 0.1);
          color: var(--accent);
          border: 1px solid rgba(249, 115, 22, 0.2);
          border-radius: 6px;
          padding: 6px 14px;
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: var(--space-md);
        }

        .section-badge.cyan {
          background: rgba(6, 182, 212, 0.1);
          color: var(--accent-secondary);
          border-color: rgba(6, 182, 212, 0.2);
        }

        .section-title {
          text-align: center;
          margin-bottom: var(--space-xl);
        }

        .section-subtitle {
          text-align: center;
          font-size: 18px;
          color: var(--text-secondary);
          max-width: 700px;
          margin: 0 auto var(--space-xl);
        }

        .credibility-section {
          background: var(--bg-secondary);
          padding: var(--space-2xl) 0;
        }

        .credibility-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--space-lg);
          max-width: var(--container-md);
          margin: 0 auto;
        }

        .credibility-card {
          background: white;
          border: 1px solid rgba(15, 23, 42, 0.1);
          border-radius: 16px;
          padding: var(--space-xl);
          text-align: center;
          transition: all var(--transition-base);
        }

        .credibility-card:hover {
          border-color: var(--accent);
          box-shadow: 0 4px 24px rgba(249, 115, 22, 0.12);
          transform: translateY(-4px);
        }

        .credibility-icon {
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto var(--space-md);
          color: white;
          font-size: 32px;
          font-weight: 700;
        }

        .credibility-list {
          list-style: none;
          text-align: left;
          margin-top: var(--space-md);
        }

        .credibility-list li {
          padding: var(--space-xs) 0;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: var(--space-xs);
        }

        .credibility-list li::before {
          content: '✓';
          color: var(--success);
          font-weight: 700;
        }

        .approach-section {
          background: white;
        }

        .timeline-container {
          max-width: 800px;
          margin: var(--space-xl) auto 0;
        }

        .timeline-item {
          display: flex;
          gap: var(--space-lg);
          padding: var(--space-lg) 0;
          border-left: 2px solid rgba(6, 182, 212, 0.2);
          position: relative;
          padding-left: 60px;
          margin-left: 20px;
        }

        .timeline-item:last-child {
          border-left-color: transparent;
        }

        .timeline-number {
          position: absolute;
          left: -20px;
          width: 40px;
          height: 40px;
          background: white;
          border: 3px solid var(--accent-secondary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: var(--accent-secondary);
          font-size: 16px;
          box-shadow: 0 4px 12px rgba(6, 182, 212, 0.2);
        }

        .timeline-content h3 {
          color: var(--primary);
        }

        .split-section {
          background: var(--bg-secondary);
        }

        .split-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--space-lg);
        }

        .split-card {
          background: white;
          border: 1px solid rgba(15, 23, 42, 0.1);
          border-radius: 16px;
          padding: var(--space-xl);
        }

        .split-card.risks {
          border-top: 4px solid var(--error);
        }

        .split-card.opportunities {
          border-top: 4px solid var(--success);
        }

        .split-card h3 {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          margin-bottom: var(--space-lg);
        }

        .split-list {
          list-style: none;
        }

        .split-list li {
          padding: var(--space-md) 0;
          border-bottom: 1px solid rgba(15, 23, 42, 0.08);
          display: flex;
          flex-direction: column;
          gap: var(--space-xs);
        }

        .split-list li:last-child {
          border-bottom: none;
        }

        .split-list strong {
          color: var(--primary);
          font-weight: 600;
        }

        .split-list span {
          color: var(--text-secondary);
          font-size: 15px;
        }

        .video-section {
          background: white;
          text-align: center;
        }

        .video-thumbnail {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(15, 23, 42, 0.12);
          cursor: pointer;
          transition: all var(--transition-base);
          border: 2px solid transparent;
        }

        .video-thumbnail:hover {
          transform: scale(1.02);
          box-shadow: 0 12px 48px rgba(249, 115, 22, 0.2);
          border-color: var(--accent);
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
          background: linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 32px;
          transition: all var(--transition-base);
          box-shadow: 0 8px 24px rgba(249, 115, 22, 0.4);
        }

        .video-thumbnail:hover .video-play-btn {
          transform: translate(-50%, -50%) scale(1.1);
          box-shadow: 0 12px 32px rgba(249, 115, 22, 0.5);
        }

        .testimonials-section {
          background: var(--bg-secondary);
        }

        .testimonials-carousel {
          position: relative;
          max-width: var(--container-md);
          margin: 0 auto;
          overflow: hidden;
        }

        .testimonials-wrapper {
          display: flex;
          transition: transform 0.5s ease-in-out;
        }

        .testimonial {
          min-width: 100%;
          background: white;
          border: 1px solid rgba(15, 23, 42, 0.1);
          border-radius: 16px;
          padding: var(--space-xl);
        }

        .testimonial-content {
          font-size: 18px;
          line-height: 1.8;
          color: var(--text-secondary);
          font-style: italic;
          margin-bottom: var(--space-lg);
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: var(--space-md);
        }

        .testimonial-avatar {
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, var(--accent-secondary) 0%, var(--accent-secondary-light) 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 24px;
          font-weight: 700;
        }

        .testimonial-info h4 {
          color: var(--primary);
          margin-bottom: 4px;
        }

        .testimonial-info p {
          color: var(--text-light);
          font-size: 14px;
          margin: 0;
        }

        .carousel-controls {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: var(--space-md);
          margin-top: var(--space-lg);
        }

        .carousel-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: white;
          border: 2px solid rgba(15, 23, 42, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
          color: var(--primary);
        }

        .carousel-btn:hover {
          border-color: var(--accent);
          color: var(--accent);
          transform: scale(1.1);
        }

        .carousel-dots {
          display: flex;
          gap: var(--space-xs);
        }

        .carousel-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(15, 23, 42, 0.2);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .carousel-dot.active {
          background: var(--accent);
          width: 32px;
          border-radius: 6px;
        }

        .pricing-section {
          background: white;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: var(--space-lg);
          max-width: var(--container-xl);
          margin: 0 auto;
        }

        .price-card {
          background: white;
          border: 2px solid rgba(15, 23, 42, 0.1);
          border-radius: 16px;
          padding: var(--space-xl);
          transition: all var(--transition-base);
          position: relative;
        }

        .price-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 32px rgba(15, 23, 42, 0.12);
        }

        .price-card.decouverte {
          border-width: 2px;
          border-style: solid;
          border-image-slice: 1;
          border-image-source: linear-gradient(135deg, #22D3EE 0%, #3B82F6 50%, #2563EB 100%);
        }

        .price-card.decouverte:hover {
          box-shadow: 0 8px 32px rgba(34, 211, 238, 0.2);
        }

        .price-card.decouverte .price-icon {
          background: linear-gradient(135deg, #22D3EE 0%, #3B82F6 50%, #2563EB 100%);
        }

        .price-card.decouverte .price {
          background: linear-gradient(135deg, #22D3EE 0%, #3B82F6 50%, #2563EB 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .price-card.decouverte .btn-price {
          background: linear-gradient(135deg, #22D3EE 0%, #3B82F6 50%, #2563EB 100%);
        }

        .price-card.essentiel {
          border-width: 2px;
          border-style: solid;
          border-image-slice: 1;
          border-image-source: linear-gradient(135deg, #A78BFA 0%, #A855F7 50%, #D946EF 100%);
          transform: scale(1.05);
          box-shadow: 0 20px 40px rgba(168, 139, 250, 0.2);
        }

        .price-card.essentiel::before {
          content: '⭐ POPULAIRE';
          position: absolute;
          top: -12px;
          right: 24px;
          background: linear-gradient(135deg, #A855F7 0%, #D946EF 100%);
          color: white;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .price-card.essentiel .price-icon {
          background: linear-gradient(135deg, #A78BFA 0%, #A855F7 50%, #D946EF 100%);
        }

        .price-card.essentiel .price {
          background: linear-gradient(135deg, #A78BFA 0%, #A855F7 50%, #D946EF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .price-card.essentiel .btn-price {
          background: linear-gradient(135deg, #A78BFA 0%, #A855F7 50%, #D946EF 100%);
        }

        .price-card.expertise {
          border-width: 2px;
          border-style: solid;
          border-image-slice: 1;
          border-image-source: linear-gradient(135deg, #FBBF24 0%, #F97316 50%, #EF4444 100%);
        }

        .price-card.expertise:hover {
          box-shadow: 0 8px 32px rgba(251, 191, 36, 0.2);
        }

        .price-card.expertise .price-icon {
          background: linear-gradient(135deg, #FBBF24 0%, #F97316 50%, #EF4444 100%);
        }

        .price-card.expertise .price {
          background: linear-gradient(135deg, #FBBF24 0%, #F97316 50%, #EF4444 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .price-card.expertise .btn-price {
          background: linear-gradient(135deg, #FBBF24 0%, #F97316 50%, #EF4444 100%);
        }

        .price-icon {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--space-md);
          color: white;
          font-size: 32px;
        }

        .price-card h3 {
          color: var(--primary);
          margin-bottom: var(--space-sm);
        }

        .price {
          font-size: 48px;
          font-weight: 700;
          margin: var(--space-md) 0;
          display: block;
        }

        .price-duration {
          color: var(--text-light);
          font-size: 14px;
          margin-bottom: var(--space-md);
        }

        .price-ideal {
          background: rgba(15, 23, 42, 0.05);
          padding: var(--space-sm);
          border-radius: 8px;
          margin-bottom: var(--space-lg);
          font-size: 14px;
          color: var(--text-secondary);
        }

        .price-ideal strong {
          color: var(--primary);
          display: block;
          margin-bottom: 4px;
        }

        .price-features {
          list-style: none;
          margin-bottom: var(--space-lg);
        }

        .price-features li {
          padding: var(--space-sm) 0;
          display: flex;
          align-items: flex-start;
          gap: var(--space-sm);
          color: var(--text-secondary);
          font-size: 15px;
        }

        .price-features li::before {
          content: '✓';
          color: var(--success);
          font-weight: 700;
          flex-shrink: 0;
        }

        .price-features li strong {
          color: var(--primary);
        }

        .price-plus-section {
          background: rgba(6, 182, 212, 0.05);
          border: 1px solid rgba(6, 182, 212, 0.2);
          border-radius: 8px;
          padding: var(--space-md);
          margin: var(--space-md) 0;
        }

        .price-plus-section h4 {
          color: var(--accent-secondary);
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: var(--space-sm);
        }

        .price-plus-section .price-features {
          margin-bottom: 0;
        }

        .price-plus-section .price-features li::before {
          content: '+';
          color: var(--accent-secondary);
        }

        .btn-price {
          width: 100%;
          color: white;
          padding: 16px 32px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 16px;
          border: none;
          cursor: pointer;
          transition: all var(--transition-fast);
          font-family: inherit;
          text-decoration: none;
          display: block;
          text-align: center;
        }

        .btn-price:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        }

        .optional-services-section {
          background: var(--bg-secondary);
          padding: var(--space-3xl) 0;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--space-lg);
          max-width: var(--container-xl);
          margin: var(--space-xl) auto 0;
        }

        .service-card {
          background: white;
          border: 1px solid rgba(15, 23, 42, 0.1);
          border-radius: 16px;
          padding: var(--space-xl);
          transition: all var(--transition-base);
        }

        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 32px rgba(15, 23, 42, 0.12);
        }

        .service-card.formation {
          border-top: 4px solid #10B981;
        }

        .service-card.formation .service-icon {
          background: rgba(16, 185, 129, 0.1);
          color: #10B981;
        }

        .service-card.formation .service-dot {
          background: #10B981;
        }

        .service-card.secretariat {
          border-top: 4px solid #6366F1;
        }

        .service-card.secretariat .service-icon {
          background: rgba(99, 102, 241, 0.1);
          color: #6366F1;
        }

        .service-card.secretariat .service-dot {
          background: #6366F1;
        }

        .service-card.incidents {
          border-top: 4px solid #F43F5E;
        }

        .service-card.incidents .service-icon {
          background: rgba(244, 63, 94, 0.1);
          color: #F43F5E;
        }

        .service-card.incidents .service-dot {
          background: #F43F5E;
        }

        .service-icon {
          width: 64px;
          height: 64px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--space-md);
          font-size: 32px;
        }

        .service-card h4 {
          font-size: 24px;
          color: var(--primary);
          margin-bottom: var(--space-sm);
        }

        .service-description {
          color: var(--text-secondary);
          font-size: 15px;
          margin-bottom: var(--space-md);
        }

        .service-points {
          list-style: none;
        }

        .service-points li {
          padding: var(--space-xs) 0;
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          color: var(--text-secondary);
          font-size: 14px;
        }

        .service-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .faq-section {
          background: var(--bg-secondary);
        }

        .faq-list {
          max-width: var(--container-md);
          margin: 0 auto;
        }

        .faq-item {
          background: white;
          border: 1px solid rgba(15, 23, 42, 0.1);
          border-radius: 12px;
          margin-bottom: var(--space-md);
          cursor: pointer;
          transition: all var(--transition-base);
        }

        .faq-item:hover {
          border-color: var(--accent);
        }

        .faq-question {
          padding: var(--space-lg);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: var(--space-md);
        }

        .faq-question h3 {
          color: var(--primary);
          font-size: 18px;
          margin: 0;
        }

        .faq-icon {
          font-size: 24px;
          color: var(--accent);
          transition: transform var(--transition-base);
          flex-shrink: 0;
        }

        .faq-item.active .faq-icon {
          transform: rotate(180deg);
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height var(--transition-base);
        }

        .faq-item.active .faq-answer {
          max-height: 500px;
        }

        .faq-answer-content {
          padding: 0 var(--space-lg) var(--space-lg);
          color: var(--text-secondary);
          line-height: 1.8;
        }

        .final-cta {
          background: linear-gradient(135deg, var(--bg-dark) 0%, var(--primary) 100%);
          color: white;
          text-align: center;
          padding: var(--space-3xl) 0;
          position: relative;
          overflow: hidden;
        }

        .final-cta::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, transparent 70%);
        }

        .final-cta h2 {
          color: white;
          margin-bottom: var(--space-md);
          position: relative;
          z-index: 1;
        }

        .final-cta p {
          color: rgba(255, 255, 255, 0.9);
          font-size: 18px;
          margin-bottom: var(--space-xl);
          position: relative;
          z-index: 1;
        }

        .final-cta .btn {
          position: relative;
          z-index: 1;
        }

        footer {
          background: var(--primary-dark);
          color: rgba(255, 255, 255, 0.7);
          padding: var(--space-xl) 0 var(--space-lg);
        }

        .footer-content {
          max-width: var(--container-xl);
          margin: 0 auto;
          padding: 0 var(--space-md);
          display: flex;
          flex-direction: column;
          gap: var(--space-lg);
        }

        .footer-brand {
          font-size: 20px;
          font-weight: 700;
          color: white;
        }

        .footer-links {
          display: flex;
          gap: var(--space-lg);
          flex-wrap: wrap;
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .footer-links a:hover {
          color: var(--accent-light);
        }

        .footer-bottom {
          text-align: center;
          padding-top: var(--space-lg);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 14px;
        }

        .modal {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(4px);
          z-index: 10000;
          align-items: center;
          justify-content: center;
          padding: var(--space-md);
          opacity: 0;
          transition: opacity var(--transition-base);
        }

        .modal.show {
          opacity: 1;
        }

        .modal-content {
          background: white;
          border-radius: 16px;
          max-width: 600px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          transform: scale(0.9);
          transition: transform var(--transition-base);
        }

        .modal.show .modal-content {
          transform: scale(1);
        }

        .modal-close {
          position: absolute;
          top: var(--space-md);
          right: var(--space-md);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(15, 23, 42, 0.08);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
          font-size: 24px;
          color: var(--text-primary);
          z-index: 1;
        }

        .modal-close:hover {
          background: rgba(249, 115, 22, 0.1);
          color: var(--accent);
          transform: rotate(90deg);
        }

        .video-modal-content {
          max-width: 1000px;
          padding: 0;
          background: black;
        }

        .video-modal-content iframe {
          width: 100%;
          height: 60vh;
          border: none;
          border-radius: 16px;
        }

        .text-center {
          text-align: center;
        }

        .mt-xl {
          margin-top: var(--space-xl);
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 32px;
          }

          h2 {
            font-size: 28px;
          }

          section {
            padding: var(--space-xl) 0;
          }

          .hero {
            padding: var(--space-2xl) 0 var(--space-xl);
          }

          .hero-stats {
            grid-template-columns: 1fr;
          }

          .credibility-grid,
          .split-grid,
          .pricing-grid,
          .services-grid {
            grid-template-columns: 1fr;
          }

          .price-card.essentiel {
            transform: none;
          }

          .timeline-item {
            padding-left: 40px;
            margin-left: 15px;
          }

          .timeline-number {
            width: 32px;
            height: 32px;
            font-size: 14px;
            left: -16px;
          }

          .btn {
            padding: 14px 24px;
            font-size: 15px;
          }
        }
      `}</style>

      <header className="sticky-header" id="stickyHeader">
        <div className="container">
          <div className="logo">Cyber Solferino</div>
          <div className="header-cta">
            <a href="https://calendly.com/adrien-ruggirello/30min" target="_blank" className="btn btn-primary">
              📅 RDV expert gratuit
            </a>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <div className="logo">Cyber Solferino</div>
          <h1>Devenez conforme NIS2 en 90 jours</h1>
          <p className="tagline">
            Protégez votre activité, votre réputation et votre résilience. Transformez NIS2 en levier de performance avec un accompagnement d'experts certifiés ISO 27001.
          </p>
          
          <div className="hero-stats">
            <div className="stat-card">
              <span className="stat-number">+40%</span>
              <div className="stat-label">de cyber attaques en 2024</div>
            </div>
            <div className="stat-card">
              <span className="stat-number">10M€</span>
              <div className="stat-label">amende max ou 2% du CA</div>
            </div>
            <div className="stat-card">
              <span className="stat-number">70%</span>
              <div className="stat-label">d'aides de l'état possibles</div>
            </div>
          </div>
        </div>
      </section>

      <section className="credibility-section">
        <div className="container">
          <div className="credibility-grid">
            <div className="credibility-card">
              <div className="credibility-icon">15+</div>
              <h3>Années d'expérience terrain</h3>
              <p>Depuis 2009, nous accompagnons les dirigeants dans leur démarche de sécurisation et de conformité Cyber.</p>
              <ul className="credibility-list">
                <li>150+ PME et ETI accompagnées</li>
                <li>Projets dans plus de 10 pays</li>
                <li>0 client sanctionné</li>
              </ul>
            </div>
            
            <div className="credibility-card">
              <div className="credibility-icon">✓</div>
              <h3>Experts certifiés ISO 27001</h3>
              <p>Une équipe d'experts en cyber défense, formés aux normes internationales les plus strictes.</p>
              <ul className="credibility-list">
                <li>Méthodologie validée par l'ANSSI</li>
                <li>Consultants accrédités ISO 27001</li>
                <li>98% de taux de conformité</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="approach-section">
        <div className="container">
          <div className="section-title">
            <span className="section-badge cyan">NOTRE APPROCHE</span>
            <h2>Préparez-vous à NIS2 avec notre méthode éprouvée</h2>
            <p className="section-subtitle">
              Notre accompagnement se base sur le référentiel officiel de l'ANSSI.
            </p>
          </div>
          
          <div className="timeline-container">
            <div className="timeline-item">
              <div className="timeline-number">01</div>
              <div className="timeline-content">
                <h3>Où en êtes-vous ?</h3>
                <p>Identification des écarts clés de conformité selon le référentiel de l'ANSSI. Analyse précise de votre situation actuelle.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-number">02</div>
              <div className="timeline-content">
                <h3>Quels sont vos risques ?</h3>
                <p>Connaître votre niveau de conformité aux obligations de sécurité NIS2. Évaluation détaillée de vos vulnérabilités critiques.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-number">03</div>
              <div className="timeline-content">
                <h3>Plan d'action sur-mesure</h3>
                <p>Choisissez l'offre adaptée en fonction de votre niveau global de maturité cyber. Roadmap personnalisée avec priorisation des actions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="split-section">
        <div className="container">
          <div className="section-title">
            <h2>NIS2 : Contrainte ou opportunité ?</h2>
          </div>
          
          <div className="split-grid">
            <div className="split-card risks">
              <h3>⚠️ Les risques de la non-conformité</h3>
              <ul className="split-list">
                <li>
                  <strong>Sanctions financières lourdes</strong>
                  <span>Jusqu'à 10M€ ou 2% du chiffre d'affaires mondial</span>
                </li>
                <li>
                  <strong>Responsabilité pénale du dirigeant</strong>
                  <span>En cas de manquement aux obligations NIS2</span>
                </li>
                <li>
                  <strong>Exclusion des marchés</strong>
                  <span>Impossibilité de répondre aux appels d'offres publics et privés</span>
                </li>
                <li>
                  <strong>Perte de confiance B2B</strong>
                  <span>Vos clients exigent désormais la conformité</span>
                </li>
                <li>
                  <strong>Contrôles réglementaires</strong>
                  <span>Audits sur site sans préavis de l'ANSSI</span>
                </li>
              </ul>
            </div>
            
            <div className="split-card opportunities">
              <h3>🏆 Les avantages stratégiques</h3>
              <ul className="split-list">
                <li>
                  <strong>Remportez les appels d'offres</strong>
                  <span>La conformité devient un critère obligatoire de sélection</span>
                </li>
                <li>
                  <strong>Différenciez-vous de vos concurrents</strong>
                  <span>Positionnez-vous comme le partenaire de confiance de votre secteur</span>
                </li>
                <li>
                  <strong>Rassurez vos clients</strong>
                  <span>Montrez que vous protégez les données de vos clients</span>
                </li>
                <li>
                  <strong>Fidélisez vos partenaires</strong>
                  <span>Consolidez votre réputation d'acteur stable et responsable</span>
                </li>
                <li>
                  <strong>Valorisez votre entreprise</strong>
                  <span>Une organisation conforme vaut plus en cas de cession</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-xl">
            <p style={{fontSize: '18px', color: 'var(--text-secondary)', marginBottom: 'var(--space-lg)'}}>
              <strong style={{color: 'var(--primary)'}}>La mise en conformité coûte 200 fois moins cher qu'une sanction</strong><br/>
              Investissez dans votre sécurité plutôt que dans des amendes.
            </p>
            <a href="#pricing" className="btn btn-primary">
              🚀 Découvrir nos offres
            </a>
          </div>
        </div>
      </section>

      <section className="video-section">
        <div className="container">
          <div className="section-title">
            <span className="section-badge cyan">COMPRENDRE</span>
            <h2>🎥 Comprendre NIS2 en vidéo</h2>
            <p className="section-subtitle">
              Découvrez en quelques minutes ce que la directive NIS2 signifie concrètement pour votre entreprise.
            </p>
          </div>
          
          <div className="video-thumbnail" onClick={() => window.openVideoModal()}>
            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=450&fit=crop" alt="Comprendre NIS2" />
            <div className="video-play-btn">▶</div>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <div className="section-title">
            <span className="section-badge">TÉMOIGNAGES</span>
            <h2>Dirigeants conformes, entreprises gagnantes</h2>
            <p className="section-subtitle">
              Ils ont fait de NIS2 un levier de performance
            </p>
          </div>
          
          <div className="testimonials-carousel" id="testimonialCarousel">
            <div className="testimonials-wrapper">
              <div className="testimonial">
                <p className="testimonial-content">
                  "L'accompagnement NIS2 nous a permis de structurer clairement nos obligations et de prioriser les actions essentielles. La démarche est pragmatique, pédagogique et parfaitement adaptée à une PME."
                </p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">AM</div>
                  <div className="testimonial-info">
                    <h4>Alex Martin</h4>
                    <p>CEO • Services Numériques • 65 sal.</p>
                  </div>
                </div>
              </div>
              
              <div className="testimonial">
                <p className="testimonial-content">
                  "Accompagnement précis, méthodique, sans jargon inutile. L'équipe a su traduire les exigences réglementaires en plan d'action opérationnel. Aujourd'hui, la conformité est devenue un argument de différenciation face à nos clients grands comptes."
                </p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">MD</div>
                  <div className="testimonial-info">
                    <h4>Marc Dubois</h4>
                    <p>Directeur Général • Transport • 120 sal.</p>
                  </div>
                </div>
              </div>
              
              <div className="testimonial">
                <p className="testimonial-content">
                  "L'approche pédagogique m'a permis de mobiliser mes équipes efficacement. En 3 mois, nous avons structuré notre gouvernance cybersécurité et obtenu la conformité. C'est désormais un atout commercial majeur dans nos négociations."
                </p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">SL</div>
                  <div className="testimonial-info">
                    <h4>Sophie Lemaire</h4>
                    <p>Directrice Administrative et Financière • Santé • 85 sal.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="carousel-controls">
              <button className="carousel-btn" id="prevBtn">←</button>
              <div className="carousel-dots" id="carouselDots"></div>
              <button className="carousel-btn" id="nextBtn">→</button>
            </div>
          </div>
          
          <div className="text-center mt-xl">
            <p style={{fontSize: '18px', color: 'var(--text-secondary)', marginBottom: 'var(--space-lg)'}}>
              💬 Échangez avec un de nos experts • Obtenez des réponses claires
            </p>
            <a href="https://calendly.com/adrien-ruggirello/30min" target="_blank" className="btn btn-primary">
              📅 Prendre rendez-vous
            </a>
          </div>
        </div>
      </section>

      <section className="pricing-section" id="pricing">
        <div className="container">
          <div className="section-title">
            <span className="section-badge">TARIFS CLAIRS</span>
            <h2>Investissement vs Amende</h2>
            <p className="section-subtitle">
              Un audit coûte 200x moins cher qu'une sanction
            </p>
          </div>
          
          <div style={{textAlign: 'center', marginBottom: 'var(--space-xl)', padding: 'var(--space-md)', background: 'var(--info-bg)', borderRadius: '12px', border: '1px solid var(--info-border)'}}>
            <p style={{color: 'var(--info)', fontWeight: '600'}}>
              💡 <strong>Aides de l'État disponibles</strong> — Réduisez le coût de votre mise en conformité. Lors de votre rendez-vous, nous vous orientons vers les financements adaptés.
            </p>
          </div>
          
          <div className="pricing-grid">
            <div className="price-card decouverte">
              <div className="price-icon">🛡️</div>
              <h3>Découverte</h3>
              <div className="price">3 490€</div>
              <div className="price-duration">Immédiat • Diagnostic</div>
              <div className="price-ideal">
                <strong>Idéal pour :</strong>
                Évaluation immédiate et abordable
              </div>
              <ul className="price-features">
                <li>Audit cyber NIS2 initial</li>
                <li><strong>Résultat immédiat ⚡</strong></li>
                <li>Rapport d'audit synthétique</li>
                <li>Recommandations d'actions prioritaires</li>
              </ul>
              <button className="btn-price" onClick={handleStripeCheckout}>
                Je fais mon diagnostic NIS2
              </button>
            </div>

            <div className="price-card essentiel">
              <div className="price-icon">✨</div>
              <h3>Essentiel</h3>
              <div className="price">7 990€</div>
              <div className="price-duration">En 48H</div>
              <div className="price-ideal">
                <strong>Idéal pour :</strong>
                Entités nécessitant un plan structuré
              </div>
              
              <div className="price-plus-section">
                <h4>✓ Tout de Découverte, plus :</h4>
                <ul className="price-features">
                  <li>Rapport complet validé par nos équipes</li>
                  <li>Plan de remédiation détaillé avec priorisation</li>
                  <li><strong>Restitution avec un expert (1h visio)</strong></li>
                  <li>Accès base de modèles de documents</li>
                  <li>6 mois d'accès plateforme</li>
                </ul>
              </div>

              <a href="https://calendly.com/adrien-ruggirello/30min" target="_blank" className="btn-price">
                Prendre rendez-vous
              </a>
            </div>

            <div className="price-card expertise">
              <div className="price-icon">⚡</div>
              <h3>Expertise</h3>
              <div className="price">14 900€</div>
              <div className="price-duration">1 mois</div>
              <div className="price-ideal">
                <strong>Idéal pour :</strong>
                Accompagnement complet avec enregistrement ANSSI
              </div>
              
              <div className="price-plus-section">
                <h4>✓ Tout de Essentiel, plus :</h4>
                <ul className="price-features">
                  <li><strong>Entretien préalable + Restitution expert</strong></li>
                  <li>Roadmap personnalisée mise en conformité</li>
                  <li>Enregistrement entreprise à l'ANSSI</li>
                  <li>Constitution dossier aides d'état</li>
                  <li>12 mois plateforme (vs 6 mois)</li>
                  <li>Mises à jour évolutions législatives</li>
                </ul>
              </div>

              <a href="https://calendly.com/adrien-ruggirello/30min" target="_blank" className="btn-price">
                Prendre rendez-vous
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="optional-services-section">
        <div className="container">
          <div className="section-title">
            <span className="section-badge cyan">SERVICES OPTIONNELS</span>
            <h2>Allez plus loin dans votre conformité</h2>
            <p className="section-subtitle">
              Des services complémentaires pour une protection maximale
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card formation">
              <div className="service-icon">📚</div>
              <h4>Formation</h4>
              <p className="service-description">
                Montée en compétences de vos équipes sur les enjeux cyber et NIS2
              </p>
              <ul className="service-points">
                <li>
                  <span className="service-dot"></span>
                  Sessions sur mesure adaptées à votre secteur
                </li>
                <li>
                  <span className="service-dot"></span>
                  Supports personnalisés et cas pratiques
                </li>
                <li>
                  <span className="service-dot"></span>
                  Certifications professionnelles disponibles
                </li>
                <li>
                  <span className="service-dot"></span>
                  E-learning en complément du présentiel
                </li>
              </ul>
            </div>

            <div className="service-card secretariat">
              <div className="service-icon">📝</div>
              <h4>Secrétariat Subventions</h4>
              <p className="service-description">
                Gestion complète de vos dossiers de financement NIS2
              </p>
              <ul className="service-points">
                <li>
                  <span className="service-dot"></span>
                  Identification des aides disponibles
                </li>
                <li>
                  <span className="service-dot"></span>
                  Constitution complète des dossiers
                </li>
                <li>
                  <span className="service-dot"></span>
                  Suivi administratif jusqu'au versement
                </li>
                <li>
                  <span className="service-dot"></span>
                  Maximisation des financements obtenus
                </li>
              </ul>
            </div>

            <div className="service-card incidents">
              <div className="service-icon">🚨</div>
              <h4>Notification Incidents</h4>
              <p className="service-description">
                Gestion proactive et conforme des incidents de sécurité
              </p>
              <ul className="service-points">
                <li>
                  <span className="service-dot"></span>
                  Surveillance continue de vos systèmes
                </li>
                <li>
                  <span className="service-dot"></span>
                  Alertes instantanées en cas d'incident
                </li>
                <li>
                  <span className="service-dot"></span>
                  Déclarations réglementaires ANSSI
                </li>
                <li>
                  <span className="service-dot"></span>
                  Accompagnement gestion de crise
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-xl">
            <p style={{fontSize: '18px', color: 'var(--text-secondary)', marginBottom: 'var(--space-lg)'}}>
              <strong style={{color: 'var(--primary)'}}>Besoin d'un service sur-mesure ?</strong><br/>
              Parlons de vos besoins spécifiques et construisons une solution adaptée.
            </p>
            <a href="https://calendly.com/adrien-ruggirello/30min" target="_blank" className="btn btn-primary">
              📞 Discuter de vos besoins
            </a>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="section-title">
            <span className="section-badge cyan">FAQ</span>
            <h2>Les questions que se posent les dirigeants</h2>
          </div>
          
          <div className="faq-list">
            <div className="faq-item">
              <div className="faq-question">
                <h3>🎯 Comment la conformité devient-elle un avantage commercial ?</h3>
                <span className="faq-icon">↓</span>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-content">
                  La conformité NIS2 et ISO 27001 deviennent des critères d'éligibilité dans les appels d'offres publics et privés. Sans certification, vous êtes d'office écarté. C'est un différenciateur stratégique qui vous positionne comme partenaire de confiance face à vos concurrents non conformes.
                </div>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <h3>💰 Quel est le véritable coût de la non-conformité ?</h3>
                <span className="faq-icon">↓</span>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-content">
                  Au-delà des sanctions financières (jusqu'à 10M€), la non-conformité entraîne : exclusion des marchés, perte de clients B2B, atteinte réputationnelle, et risque pénal pour le dirigeant. La mise en conformité coûte 200 fois moins cher qu'une sanction et ouvre des opportunités de croissance.
                </div>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <h3>⏱️ Quel délai prévoir pour atteindre la conformité ?</h3>
                <span className="faq-icon">↓</span>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-content">
                  Avec notre méthodologie éprouvée : 90 jours en moyenne de l'audit initial à la conformité effective. Les premiers jalons de sécurisation sont mis en place dès les 2 premières semaines. Notre équipe certifiée ISO 27001 optimise chaque étape du parcours.
                </div>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <h3>🤔 Mon organisation est-elle dans le périmètre NIS2 ?</h3>
                <span className="faq-icon">↓</span>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-content">
                  Vous êtes concerné si : +50 salariés OU +10M€ CA, ET secteur critique (santé, énergie, transport, services numériques, industrie, etc.). La directive couvre 18 secteurs et leurs chaînes d'approvisionnement. Contactez-nous pour un diagnostic gratuit immédiat.
                </div>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <h3>📋 Comment NIS2 s'articule avec le RGPD et ISO 27001 ?</h3>
                <span className="faq-icon">↓</span>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-content">
                  Ces cadres sont complémentaires. RGPD = protection des données personnelles. ISO 27001 = management de la sécurité de l'information. NIS2 = résilience des réseaux et systèmes critiques. Une démarche NIS2 bien menée facilite grandement la conformité RGPD et prépare la certification ISO 27001.
                </div>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <h3>🏆 Pourquoi nous choisir ?</h3>
                <span className="faq-icon">↓</span>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-content">
                  15 ans d'expertise, équipe ISO 27001, experts ANSSI, 150+ PME accompagnées, 98% conformité, 0 client sanctionné. Nous parlons votre langage, pas du jargon.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container">
          <h2>Sécurisez votre avenir dès aujourd'hui</h2>
          <p>
            Échange confidentiel avec un consultant certifié ISO 27001<br/>
            <strong>Audit indépendant pour mesurer votre conformité et identifier les écarts critiques.</strong>
          </p>
          <div>
            <a href="https://calendly.com/adrien-ruggirello/30min" target="_blank" className="btn btn-primary">
              📅 Réserver un échange gratuit
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <div className="footer-brand">Cyber Solferino</div>
          <p>Mise en conformité NIS2 • Basé sur le référentiel ANSSI</p>
          <div className="footer-links">
            <a href="#">Mentions légales</a>
            <a href="#">CGV</a>
            <a href="#">Politique de confidentialité</a>
          </div>
          <div className="footer-bottom">
            <p>© 2024 Cyber Solferino • www.cyber-solferino.com</p>
          </div>
        </div>
      </footer>

      <div className="modal" id="videoModal">
        <div className="modal-content video-modal-content">
          <button className="modal-close" onClick={() => window.closeVideoModal()}>×</button>
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
