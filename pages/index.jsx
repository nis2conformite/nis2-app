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
    // Exposer handleStripeCheckout globalement
    window.handleStripeCheckout = handleStripeCheckout;

    const initializeApp = () => {
      try {
        // JavaScript ORIGINAL sans modification
// Variables globales pour tracker l'état du quiz et de la vidéo (avant tout le reste)
        let quizIsOpen = false;
        let videoIsPlaying = false;

        // Sticky header au scroll
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

        // Track conversions
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('click', function() {
                console.log('Conversion:', this.textContent.trim());
            });
        });

        // Carousel Testimonials
        const carousel = document.getElementById('testimonialCarousel');
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
            
            // Update dots
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

        // Auto-play carousel (optionnel - 5 secondes)
        let autoplayInterval = setInterval(nextSlide, 5000);

        // Pause auto-play au hover
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
            handleSwipe();
        });

        function handleSwipe() {
            if (touchStartX - touchEndX > 50) {
                nextSlide();
            }
            if (touchEndX - touchStartX > 50) {
                prevSlide();
            }
        }

        // POPUP LEAD MAGNET
        const popup = document.getElementById('leadPopup');
        const popupChoices = document.getElementById('popupChoices');
        const downloadForm = document.getElementById('downloadForm');
        const contactForm = document.getElementById('contactForm');
        const successMessage = document.getElementById('successMessage');
        const successText = document.getElementById('successText');

        // Afficher la popup après 30 secondes
        let popupShown = false;
        
        function tryShowPopup() {
            // Ne pas afficher si : quiz ouvert OU vidéo en cours OU déjà affichée cette session
            if (!popupShown && !quizIsOpen && !videoIsPlaying) {
                popup.classList.add('active');
                popupShown = true;
            }
        }
        
        setTimeout(tryShowPopup, 30000); // 30 secondes

        // TRACKING VIDÉO YOUTUBE
        // Charger l'API YouTube
        let youtubePlayer;
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        // Fonction appelée automatiquement par l'API YouTube
        window.onYouTubeIframeAPIReady = function() {
            const iframe = document.querySelector('.video-container iframe');
            if (iframe) {
                youtubePlayer = new YT.Player(iframe, {
                    events: {
                        'onStateChange': onPlayerStateChange
                    }
                });
            }
        };

        // Détecter les changements d'état de la vidéo
        function onPlayerStateChange(event) {
            // 1 = Playing, 2 = Paused, 0 = Ended
            if (event.data === YT.PlayerState.PLAYING) {
                videoIsPlaying = true;
                console.log('Vidéo en lecture - popup bloquée');
            } else if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED) {
                videoIsPlaying = false;
                console.log('Vidéo en pause/terminée - popup autorisée');
            }
        }

        // Fermer la popup
        function closePopup() {
            popup.classList.remove('active');
        }

        // Fermer si clic en dehors
        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                closePopup();
            }
        });

        // Sélectionner une option
        function selectOption(type) {
            popupChoices.style.display = 'none';
            
            if (type === 'download') {
                downloadForm.classList.add('active');
            } else {
                contactForm.classList.add('active');
            }
        }

        // Retour aux choix
        function backToChoices() {
            downloadForm.classList.remove('active');
            contactForm.classList.remove('active');
            popupChoices.style.display = 'block';
        }

        // Soumettre formulaire download
        function submitDownload(e) {
            e.preventDefault();
            const formData = new FormData(e.target);
            
            // TODO: Envoyer les données à votre backend pour tracking
            console.log('Download form submitted:', Object.fromEntries(formData));
            
            // Télécharger le livre blanc depuis Google Drive
            const googleDriveLink = 'https://drive.google.com/uc?export=download&id=1mZp7x8nMrbVWUVwq8LMW-f1fEKepCr2u';
            window.open(googleDriveLink, '_blank');
            
            // Afficher succès
            downloadForm.classList.remove('active');
            successMessage.classList.add('active');
            successText.textContent = "✅ Téléchargement lancé ! Le guide NIS2 devrait s'ouvrir dans un nouvel onglet.";
            
            // Fermer après 5 secondes
            setTimeout(() => {
                closePopup();
                setTimeout(() => {
                    successMessage.classList.remove('active');
                    popupChoices.style.display = 'block';
                }, 500);
            }, 5000);
        }

        // Soumettre formulaire contact
        function submitContact(e) {
            e.preventDefault();
            const formData = new FormData(e.target);
            
            // TODO: Envoyer les données à votre backend
            console.log('Contact form submitted:', Object.fromEntries(formData));
            
            // Afficher succès
            contactForm.classList.remove('active');
            successMessage.classList.add('active');
            successText.textContent = "Demande reçue ! Un de nos experts vous contactera dans les prochaines heures pour planifier votre audit gratuit.";
            
            // Fermer après 5 secondes
            setTimeout(() => {
                closePopup();
                setTimeout(() => {
                    successMessage.classList.remove('active');
                    popupChoices.style.display = 'block';
                }, 500);
            }, 5000);
        }

        // QUIZ NIS2 MODAL
        const quizModal = document.getElementById('quizModal');
        let currentQuestion = 1;
        const totalQuestions = 10;
        const answers = {};
        // quizIsOpen est déclarée en haut du script (ligne ~2785)

        // Ouvrir le quiz
        function openQuiz() {
            quizModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Bloquer le scroll
            quizIsOpen = true; // Marquer le quiz comme ouvert
            
            // Attacher les événements aux réponses (au cas où)
            attachQuizEvents();
        }

        // Attacher les événements de clic aux réponses
        function attachQuizEvents() {
            document.querySelectorAll('.quiz-answer').forEach(answer => {
                answer.onclick = function() {
                    const questionNum = parseInt(this.closest('.quiz-question').dataset.question);
                    const answerValue = this.querySelector('.quiz-answer-text').textContent.toLowerCase();
                    selectAnswer(questionNum, answerValue, this);
                };
            });
        }

        // Fermer le quiz
        function closeQuiz() {
            quizModal.classList.remove('active');
            document.body.style.overflow = ''; // Restaurer le scroll
            quizIsOpen = false; // Marquer le quiz comme fermé
            
            // Réinitialiser le quiz après la fermeture
            setTimeout(resetQuiz, 300);
        }

        // Fermer si clic en dehors
        quizModal.addEventListener('click', (e) => {
            if (e.target === quizModal) {
                closeQuiz();
            }
        });

        // Réinitialiser le quiz
        function resetQuiz() {
            currentQuestion = 1;
            Object.keys(answers).forEach(key => delete answers[key]);
            
            // Réafficher les questions et navigation
            document.getElementById('quizQuestions').style.display = 'block';
            document.getElementById('quizNavigation').style.display = 'flex';
            document.querySelector('.quiz-progress').style.display = 'block';
            document.getElementById('quizResults').classList.remove('active');
            
            // Remettre à la question 1
            document.querySelectorAll('.quiz-question').forEach(q => q.classList.remove('active'));
            document.querySelector('.quiz-question[data-question="1"]').classList.add('active');
            
            // Réinitialiser les boutons
            document.getElementById('quizPrevBtn').style.display = 'none';
            document.getElementById('quizNextBtn').innerHTML = 'Suivant →';
            document.getElementById('quizNextBtn').disabled = true;
            
            // Réinitialiser les sélections
            document.querySelectorAll('.quiz-answer').forEach(a => a.classList.remove('selected'));
            
            // Réinitialiser la progression
            updateProgress();
            
            // Réinitialiser le score circle
            document.getElementById('scoreCircle').className = 'quiz-score-circle';
        }

        function selectAnswer(questionNum, answer, element) {
            console.log('Answer selected:', questionNum, answer); // Debug
            
            // Enregistrer la réponse
            answers[questionNum] = answer;
            
            // Mettre à jour le visuel
            const allAnswers = element.parentElement.querySelectorAll('.quiz-answer');
            allAnswers.forEach(a => a.classList.remove('selected'));
            element.classList.add('selected');
            
            // Activer le bouton suivant
            const quizNextBtn = document.getElementById('quizNextBtn');
            if (quizNextBtn) {
                quizNextBtn.disabled = false;
                quizNextBtn.style.opacity = '1';
                quizNextBtn.style.cursor = 'pointer';
                quizNextBtn.style.pointerEvents = 'auto';
                console.log('Next button enabled'); // Debug
            } else {
                console.error('quizNextBtn not found!'); // Debug
            }
        }

        function nextQuestion() {
            if (currentQuestion < totalQuestions) {
                // Cacher la question actuelle
                document.querySelector(`.quiz-question[data-question="${currentQuestion}"]`).classList.remove('active');
                
                // Passer à la suivante
                currentQuestion++;
                document.querySelector(`.quiz-question[data-question="${currentQuestion}"]`).classList.add('active');
                
                // Mettre à jour la progression
                updateProgress();
                
                // Afficher le bouton précédent
                document.getElementById('quizPrevBtn').style.display = 'flex';
                
                // Désactiver le bouton suivant si pas de réponse
                if (!answers[currentQuestion]) {
                    document.getElementById('quizNextBtn').disabled = true;
                }
                
                // Si dernière question, changer le texte du bouton
                if (currentQuestion === totalQuestions) {
                    document.getElementById('quizNextBtn').innerHTML = 'Voir mon résultat 🎯';
                }
            } else {
                // Afficher les résultats
                showResults();
            }
        }

        function prevQuestion() {
            if (currentQuestion > 1) {
                // Cacher la question actuelle
                document.querySelector(`.quiz-question[data-question="${currentQuestion}"]`).classList.remove('active');
                
                // Revenir à la précédente
                currentQuestion--;
                document.querySelector(`.quiz-question[data-question="${currentQuestion}"]`).classList.add('active');
                
                // Mettre à jour la progression
                updateProgress();
                
                // Cacher le bouton précédent si première question
                if (currentQuestion === 1) {
                    document.getElementById('quizPrevBtn').style.display = 'none';
                }
                
                // Restaurer le texte du bouton suivant
                document.getElementById('quizNextBtn').innerHTML = 'Suivant →';
                
                // Activer le bouton suivant si réponse existe
                document.getElementById('quizNextBtn').disabled = !answers[currentQuestion];
            }
        }

        function updateProgress() {
            const progress = (currentQuestion / totalQuestions) * 100;
            document.getElementById('quizProgressBar').style.width = progress + '%';
            document.getElementById('quizProgressText').textContent = `Question ${currentQuestion} sur ${totalQuestions}`;
        }

        function showResults() {
            // Calculer le score (questions 1-7 donnent des points si "oui")
            let score = 0;
            for (let i = 1; i <= 7; i++) {
                if (answers[i] === 'oui') score++;
            }
            
            // Cacher les questions et navigation
            document.getElementById('quizQuestions').style.display = 'none';
            document.getElementById('quizNavigation').style.display = 'none';
            document.querySelector('.quiz-progress').style.display = 'none';
            
            // Afficher les résultats
            const results = document.getElementById('quizResults');
            const scoreCircle = document.getElementById('scoreCircle');
            const scoreNumber = document.getElementById('scoreNumber');
            const resultTitle = document.getElementById('resultTitle');
            const resultDesc = document.getElementById('resultDesc');
            
            scoreNumber.textContent = score;
            
            // Définir le niveau et les messages
            if (score <= 3) {
                scoreCircle.classList.add('low');
                resultTitle.textContent = 'Faible exposition probable';
                resultDesc.innerHTML = '<strong>Vigilance recommandée</strong> si vous êtes en croissance ou sous-traitant critique. Même si votre exposition semble faible aujourd\'hui, les évolutions de votre activité peuvent vous faire basculer dans le périmètre NIS2. Un audit de positionnement vous permettra d\'anticiper sereinement.';
            } else if (score <= 6) {
                scoreCircle.classList.add('medium');
                resultTitle.textContent = 'Vous êtes potentiellement concerné';
                resultDesc.innerHTML = '<strong>Un audit de positionnement est fortement recommandé.</strong> Plusieurs critères indiquent que vous pourriez être dans le périmètre de la directive NIS2. Il est essentiel d\'évaluer précisément votre exposition pour éviter des sanctions et transformer cette obligation en avantage commercial.';
            } else {
                scoreCircle.classList.add('high');
                resultTitle.textContent = 'Vous êtes très probablement concerné';
                resultDesc.innerHTML = '<strong>Il est urgent d\'agir.</strong> Votre profil correspond clairement aux entités régulées par NIS2. Les contrôles ANSSI démarrent en 2026 et les sanctions peuvent atteindre 10M€. Mais c\'est aussi une opportunité : être conforme vous ouvre l\'accès aux appels d\'offres et renforce votre crédibilité auprès de vos clients.';
            }
            
            results.classList.add('active');
            
            // TODO: Envoyer les résultats à votre backend pour tracking
            console.log('Quiz completed:', { score, answers });
        }

        // Initialiser les événements au chargement
        document.addEventListener('DOMContentLoaded', function() {
            attachQuizEvents();
            console.log('Quiz events attached');
        });

        // Exposer les fonctions sur window
        if (typeof updateCarousel !== "undefined") window.updateCarousel = updateCarousel;
        if (typeof goToSlide !== "undefined") window.goToSlide = goToSlide;
        if (typeof nextSlide !== "undefined") window.nextSlide = nextSlide;
        if (typeof prevSlide !== "undefined") window.prevSlide = prevSlide;
        if (typeof handleSwipe !== "undefined") window.handleSwipe = handleSwipe;
        if (typeof tryShowPopup !== "undefined") window.tryShowPopup = tryShowPopup;
        if (typeof onPlayerStateChange !== "undefined") window.onPlayerStateChange = onPlayerStateChange;
        if (typeof closePopup !== "undefined") window.closePopup = closePopup;
        if (typeof selectOption !== "undefined") window.selectOption = selectOption;
        if (typeof backToChoices !== "undefined") window.backToChoices = backToChoices;
        if (typeof submitDownload !== "undefined") window.submitDownload = submitDownload;
        if (typeof submitContact !== "undefined") window.submitContact = submitContact;
        if (typeof openQuiz !== "undefined") window.openQuiz = openQuiz;
        if (typeof attachQuizEvents !== "undefined") window.attachQuizEvents = attachQuizEvents;
        if (typeof closeQuiz !== "undefined") window.closeQuiz = closeQuiz;
        if (typeof resetQuiz !== "undefined") window.resetQuiz = resetQuiz;
        if (typeof selectAnswer !== "undefined") window.selectAnswer = selectAnswer;
        if (typeof nextQuestion !== "undefined") window.nextQuestion = nextQuestion;
        if (typeof prevQuestion !== "undefined") window.prevQuestion = prevQuestion;
        if (typeof updateProgress !== "undefined") window.updateProgress = updateProgress;
        if (typeof showResults !== "undefined") window.showResults = showResults;
        
        console.log('✅ App initialisée -', 21 , 'fonctions exposées');
        
      } catch (error) {
        console.error('❌ Erreur:', error);
        console.error('Stack:', error.stack);
      }
    };

    // Attendre que le DOM soit monté
    const timer = setTimeout(initializeApp, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>NIS2 Conformité | Expert Cybersécurité ISO 27001 | Accompagnement Stratégique PME</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <style jsx global>{`
* {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --primary: #0052CC;
            --primary-dark: #003D99;
            --primary-light: #4C9AFF;
            --secondary: #FF5630;
            --dark: #091E42;
            --gray-50: #F7F8FC;
            --gray-100: #EFF1F5;
            --gray-200: #DFE1E6;
            --gray-400: #8993A4;
            --gray-600: #505F79;
            --success: #00875A;
            --accent: #FFAB00;
            --white: #FFFFFF;
        }

        body {
            font-family: 'Inter', -apple-system, sans-serif;
            background: var(--gray-50);
            color: var(--dark);
            overflow-x: hidden;
            line-height: 1.6;
            -webkit-font-smoothing: antialiased;
        }

        .bg-gradient {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
                radial-gradient(ellipse 100% 60% at 50% -10%, rgba(0, 82, 204, 0.06), transparent),
                radial-gradient(ellipse 80% 50% at 50% 110%, rgba(0, 135, 90, 0.04), transparent);
            z-index: -1;
        }

        .container {
            max-width: 480px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* Alert Bar */
        .alert-bar {
            background: linear-gradient(135deg, var(--secondary) 0%, #FF7452 100%);
            padding: 12px 20px;
            text-align: center;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0.3px;
            position: relative;
            z-index: 101;
            box-shadow: 0 2px 8px rgba(255, 86, 48, 0.15);
            color: white;
        }

        /* Sticky Header - OPTIMISÉ LARGEUR */
        .sticky-header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            width: 100%;
            background: white;
            border-bottom: 1px solid var(--gray-200);
            padding: 8px 12px;
            z-index: 100;
            box-shadow: 0 2px 12px rgba(9, 30, 66, 0.1);
            transform: translateY(-100%);
            transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .sticky-header.visible {
            transform: translateY(0);
        }

        .sticky-header-content {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
        }

        .sticky-logo {
            font-family: 'Lexend', sans-serif;
            font-size: 13px;
            font-weight: 800;
            color: var(--primary);
            white-space: nowrap;
            flex: 1;
            min-width: 0;
        }
        
        /* Masquer "Conformité" sur mobile */
        .sticky-logo span {
            display: none;
        }

        .sticky-cta-group {
            display: flex;
            gap: 6px;
            align-items: center;
            flex-shrink: 0;
        }

        .btn-sticky {
            padding: 8px 10px;
            border-radius: 6px;
            font-size: 11px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s ease;
            white-space: nowrap;
            display: inline-flex;
            align-items: center;
            gap: 3px;
            border: none;
            cursor: pointer;
            line-height: 1.2;
        }
        }

        .btn-sticky.primary {
            background: white;
            color: var(--primary);
            border: 2px solid var(--primary);
            font-weight: 700;
            box-shadow: 0 2px 6px rgba(0, 82, 204, 0.12);
        }

        .btn-sticky.primary:hover {
            background: var(--primary);
            color: white;
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(0, 82, 204, 0.25);
        }

        .btn-sticky.secondary {
            background: var(--gray-50);
            color: var(--primary);
            border: 1.5px solid var(--gray-200);
            font-weight: 600;
        }

        .btn-sticky.secondary:hover {
            background: white;
            border-color: var(--primary);
        }

        @keyframes slideDown {
            from { transform: translateY(-100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }

        .alert-bar span {
            display: inline-block;
            animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.03); }
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* Hero Section */
        .hero {
            padding: 32px 0 40px;
            animation: fadeIn 1s ease-out;
        }

        .logo {
            font-family: 'Lexend', sans-serif;
            font-size: 24px;
            font-weight: 800;
            margin-bottom: 6px;
            letter-spacing: -0.5px;
            color: var(--primary);
        }

        .tagline {
            font-size: 12px;
            color: var(--gray-600);
            margin-bottom: 28px;
            font-weight: 600;
        }

        .hero h1 {
            font-family: 'Lexend', sans-serif;
            font-size: 36px;
            font-weight: 800;
            line-height: 1.15;
            margin-bottom: 16px;
            letter-spacing: -1px;
            animation: fadeIn 1s ease-out 0.2s backwards;
            color: var(--dark);
        }

        .hero h1 .highlight {
            color: var(--secondary);
            display: block;
        }

        .hero p.subtitle {
            font-size: 16px;
            color: var(--gray-600);
            margin-bottom: 24px;
            animation: fadeIn 1s ease-out 0.4s backwards;
            line-height: 1.5;
        }

        /* Stats */
        .stats {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            margin-bottom: 24px;
            animation: fadeIn 1s ease-out 0.6s backwards;
        }

        .stat {
            background: white;
            border: 1.5px solid var(--gray-200);
            border-radius: 14px;
            padding: 18px 16px;
            transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 1px 3px rgba(9, 30, 66, 0.06);
        }

        .stat:hover {
            transform: translateY(-4px);
            border-color: var(--primary);
            box-shadow: 0 8px 20px rgba(0, 82, 204, 0.12);
        }

        .stat-value {
            font-family: 'Lexend', sans-serif;
            font-size: 32px;
            font-weight: 800;
            color: var(--primary);
            margin-bottom: 4px;
            line-height: 1;
        }

        .stat-label {
            font-size: 12px;
            color: var(--gray-600);
            font-weight: 600;
            line-height: 1.3;
        }

        /* CTA Group */
        .cta-group {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-bottom: 32px;
            animation: fadeIn 1s ease-out 0.8s backwards;
        }

        .btn {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 16px 24px;
            border-radius: 12px;
            font-size: 15px;
            font-weight: 700;
            text-decoration: none;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            border: none;
            cursor: pointer;
            letter-spacing: 0.2px;
            font-family: 'Inter', sans-serif;
        }

        .btn-primary {
            background: linear-gradient(135deg, var(--accent) 0%, #FF9500 100%);
            color: var(--dark);
            box-shadow: 0 4px 16px rgba(255, 171, 0, 0.25);
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(255, 171, 0, 0.35);
        }

        .btn-secondary {
            background: white;
            color: var(--primary);
            border: 2px solid var(--gray-200);
            box-shadow: 0 1px 3px rgba(9, 30, 66, 0.08);
        }

        .btn-secondary:hover {
            background: var(--gray-50);
            border-color: var(--primary);
            box-shadow: 0 4px 12px rgba(0, 82, 204, 0.12);
        }

        .btn .icon {
            margin-left: 8px;
            transition: transform 0.3s ease;
        }

        .btn:hover .icon {
            transform: translateX(4px);
        }

        /* Vidéo YouTube */
        .video-container {
            margin-bottom: 40px;
            animation: fadeIn 1s ease-out 1s backwards;
        }

        .video-wrapper {
            position: relative;
            padding-bottom: 56.25%;
            height: 0;
            overflow: hidden;
            border-radius: 20px;
            box-shadow: 0 8px 32px rgba(9, 30, 66, 0.12);
            border: 2px solid var(--gray-200);
        }

        .video-wrapper iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: none;
        }

        /* Section Headers */
        .section-header {
            text-align: center;
            margin-bottom: 32px;
            animation: fadeIn 1s ease-out calc(1.2s + var(--delay, 0s)) backwards;
        }

        .section-badge {
            display: inline-block;
            background: var(--accent);
            color: var(--dark);
            padding: 5px 14px;
            border-radius: 16px;
            font-size: 10px;
            font-weight: 800;
            letter-spacing: 0.8px;
            margin-bottom: 10px;
            text-transform: uppercase;
        }

        .section-badge.success {
            background: var(--success);
            color: white;
        }

        .section-header h2 {
            font-family: 'Lexend', sans-serif;
            font-size: 28px;
            font-weight: 800;
            margin-bottom: 10px;
            color: var(--dark);
            letter-spacing: -0.5px;
        }

        .section-subtitle {
            font-size: 15px;
            color: var(--gray-600);
            line-height: 1.5;
            max-width: 90%;
            margin: 0 auto;
        }

        /* Warning Card */
        .warning-card {
            background: white;
            border: 2px solid rgba(255, 86, 48, 0.15);
            border-left: 6px solid var(--secondary);
            border-radius: 20px;
            padding: 24px 20px;
            margin-bottom: 40px;
            animation: fadeIn 1s ease-out 1.15s backwards;
            box-shadow: 0 4px 16px rgba(255, 86, 48, 0.08);
        }

        .warning-card h2 {
            font-family: 'Lexend', sans-serif;
            font-size: 20px;
            font-weight: 800;
            margin-bottom: 16px;
            color: var(--secondary);
        }

        .warning-list {
            list-style: none;
        }

        .warning-list li {
            padding: 11px 0;
            padding-left: 28px;
            position: relative;
            font-size: 14px;
            border-bottom: 1px solid var(--gray-200);
            color: var(--dark);
            line-height: 1.5;
        }

        .warning-list li:last-child {
            border-bottom: none;
        }

        .warning-list li::before {
            content: '✗';
            position: absolute;
            left: 0;
            color: var(--secondary);
            font-weight: 800;
            font-size: 18px;
        }

        /* Value Proposition */
        .value-prop {
            background: linear-gradient(135deg, rgba(0, 135, 90, 0.08) 0%, rgba(0, 135, 90, 0.04) 100%);
            border: 2px solid var(--success);
            border-left: 6px solid var(--success);
            border-radius: 20px;
            padding: 28px 24px;
            margin-bottom: 40px;
            animation: fadeIn 1s ease-out 1.2s backwards;
            background-color: white;
        }

        .value-prop h2 {
            font-family: 'Lexend', sans-serif;
            font-size: 22px;
            font-weight: 800;
            margin-bottom: 16px;
            color: var(--success);
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .value-list {
            list-style: none;
        }

        .value-list li {
            padding: 12px 0;
            padding-left: 32px;
            position: relative;
            font-size: 15px;
            border-bottom: 1px solid var(--gray-200);
            color: var(--dark);
            line-height: 1.5;
        }

        .value-list li:last-child {
            border-bottom: none;
        }

        .value-list li::before {
            content: '✓';
            position: absolute;
            left: 0;
            color: var(--success);
            font-weight: 800;
            font-size: 20px;
        }

        /* Impact Section */
        .impact-section {
            margin-bottom: 40px;
        }

        .impact-cards {
            display: grid;
            grid-template-columns: 1fr;
            gap: 16px;
            margin-top: 28px;
        }

        /* Sur écrans moyens et grands : 2 colonnes */
        @media (min-width: 640px) {
            .impact-cards {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        .impact-card {
            background: white;
            border: 1.5px solid var(--gray-200);
            border-radius: 18px;
            padding: 28px 24px;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            animation: fadeIn 1s ease-out calc(1.4s + var(--delay)) backwards;
            box-shadow: 0 2px 8px rgba(9, 30, 66, 0.04);
        }

        .impact-card:hover {
            transform: translateY(-6px);
            border-color: var(--secondary);
            box-shadow: 0 12px 32px rgba(255, 86, 48, 0.12);
        }

        .impact-icon {
            font-size: 48px;
            margin-bottom: 16px;
            display: block;
        }

        .impact-stat {
            font-family: 'Lexend', sans-serif;
            font-size: 52px;
            font-weight: 800;
            color: var(--secondary);
            margin-bottom: 8px;
            line-height: 1;
        }

        .impact-label {
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 10px;
            color: var(--dark);
        }

        .impact-detail {
            font-size: 14px;
            color: var(--gray-600);
            line-height: 1.6;
        }

        /* CTA Inline */
        .cta-inline {
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
            border-radius: 16px;
            padding: 24px 20px;
            text-align: center;
            margin: 32px 0;
            box-shadow: 0 8px 24px rgba(0, 82, 204, 0.2);
        }

        .cta-inline p {
            color: white;
            font-size: 16px;
            font-weight: 700;
            margin-bottom: 16px;
            line-height: 1.4;
        }

        .cta-inline .btn {
            background: white;
            color: var(--primary);
            display: inline-flex;
            font-weight: 800;
        }

        .cta-inline .btn:hover {
            transform: translateY(-2px) scale(1.03);
        }

        /* Expertise Section */
        .expertise-section {
            margin-bottom: 48px;
            padding: 36px 24px;
            background: white;
            border-radius: 24px;
            border: 1.5px solid var(--gray-200);
            box-shadow: 0 4px 16px rgba(9, 30, 66, 0.06);
        }

        /* Timeline horizontale */
        .timeline-container {
            margin: 48px 0;
            padding: 0 20px;
        }

        .timeline-horizontal {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            position: relative;
            max-width: 1000px;
            margin: 0 auto;
            gap: 40px;
        }

        .timeline-horizontal::before {
            content: '';
            position: absolute;
            top: 50px;
            left: 100px;
            right: 100px;
            height: 3px;
            background: linear-gradient(90deg, #00875A 0%, #17B897 50%, #00875A 100%);
            z-index: 0;
        }

        .timeline-item {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            position: relative;
            z-index: 1;
        }

        .timeline-number {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background: linear-gradient(135deg, #00C896 0%, #00875A 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 32px;
            font-weight: 700;
            color: white;
            margin-bottom: 24px;
            box-shadow: 0 8px 24px rgba(0, 135, 90, 0.3);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .timeline-item:hover .timeline-number {
            transform: scale(1.1) translateY(-4px);
            box-shadow: 0 12px 32px rgba(0, 135, 90, 0.4);
        }

        .timeline-title {
            font-size: 20px;
            font-weight: 700;
            color: #0F172A;
            margin-bottom: 12px;
            line-height: 1.3;
        }

        .timeline-description {
            font-size: 15px;
            color: #64748B;
            line-height: 1.6;
            max-width: 280px;
        }

        /* Responsive timeline */
        @media (max-width: 968px) {
            .timeline-horizontal {
                flex-direction: column;
                align-items: stretch;
                gap: 32px;
            }

            .timeline-horizontal::before {
                display: none;
            }

            .timeline-item {
                flex-direction: row;
                text-align: left;
                align-items: flex-start;
                gap: 20px;
            }

            .timeline-number {
                width: 80px;
                height: 80px;
                font-size: 28px;
                flex-shrink: 0;
            }

            .timeline-content {
                flex: 1;
                padding-top: 12px;
            }

            .timeline-title {
                text-align: left;
            }

            .timeline-description {
                text-align: left;
                max-width: 100%;
            }
        }

        .expertise-grid {
            display: grid;
            gap: 16px;
            margin: 28px 0;
        }

        .expertise-card {
            background: var(--gray-50);
            border: 1.5px solid var(--gray-200);
            border-radius: 18px;
            padding: 24px 20px;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            animation: fadeIn 1s ease-out calc(1.8s + var(--delay)) backwards;
        }

        .expertise-card:hover {
            transform: translateY(-4px);
            background: white;
            box-shadow: 0 10px 28px rgba(0, 82, 204, 0.1);
            border-color: var(--primary);
        }

        .expertise-card.highlight {
            background: linear-gradient(135deg, rgba(0, 135, 90, 0.08) 0%, rgba(0, 135, 90, 0.04) 100%);
            border: 2px solid var(--success);
            position: relative;
            background-color: white;
        }

        .expertise-card.highlight::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, var(--success), var(--accent));
            border-radius: 18px 18px 0 0;
        }

        .expertise-number {
            font-family: 'Lexend', sans-serif;
            font-size: 56px;
            font-weight: 800;
            color: var(--primary);
            margin-bottom: 6px;
            line-height: 1;
        }

        .expertise-title {
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 10px;
            color: var(--dark);
        }

        .expertise-card p {
            font-size: 13px;
            color: var(--gray-600);
            line-height: 1.6;
        }

        .certification-badge {
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, var(--success), var(--accent));
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 16px;
            color: white;
            box-shadow: 0 6px 20px rgba(0, 135, 90, 0.25);
        }

        .credentials {
            background: var(--gray-50);
            border: 1.5px solid var(--gray-200);
            border-radius: 18px;
            padding: 24px 20px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            margin-top: 28px;
        }

        .credential-item {
            display: flex;
            align-items: flex-start;
            gap: 14px;
        }

        .credential-icon {
            font-size: 32px;
            flex-shrink: 0;
        }

        .credential-text strong {
            display: block;
            font-size: 15px;
            margin-bottom: 3px;
            color: var(--dark);
            font-weight: 700;
        }

        .credential-text span {
            font-size: 13px;
            color: var(--gray-600);
            line-height: 1.5;
        }

        /* Pricing */
        .pricing-section {
            margin-bottom: 48px;
        }

        .pricing-cards {
            display: flex;
            flex-direction: column;
            gap: 16px;
            margin-top: 28px;
        }

        .price-card {
            background: white;
            border: 1.5px solid var(--gray-200);
            border-radius: 22px;
            padding: 28px 24px;
            position: relative;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            animation: fadeIn 1s ease-out calc(2.2s + var(--delay)) backwards;
            box-shadow: 0 2px 8px rgba(9, 30, 66, 0.04);
        }

        .price-card:hover {
            transform: translateY(-6px);
            border-color: var(--primary);
            box-shadow: 0 16px 40px rgba(0, 82, 204, 0.12);
        }

        .price-card.featured {
            background: linear-gradient(135deg, rgba(0, 82, 204, 0.04) 0%, rgba(0, 82, 204, 0.01) 100%);
            border: 2px solid var(--primary);
            box-shadow: 0 6px 28px rgba(0, 82, 204, 0.15);
            background-color: white;
        }

        .popular-badge {
            position: absolute;
            top: -12px;
            right: 20px;
            background: var(--accent);
            color: var(--dark);
            padding: 7px 16px;
            border-radius: 20px;
            font-size: 11px;
            font-weight: 800;
            letter-spacing: 0.5px;
            box-shadow: 0 4px 12px rgba(255, 171, 0, 0.3);
        }

        .price-card h3 {
            font-family: 'Lexend', sans-serif;
            font-size: 22px;
            font-weight: 800;
            margin-bottom: 6px;
            color: var(--dark);
        }

        .price-card .price {
            font-family: 'Lexend', sans-serif;
            font-size: 44px;
            color: var(--primary);
            margin-bottom: 5px;
            font-weight: 800;
            line-height: 1;
        }

        .price-card .price-sub {
            color: var(--gray-600);
            font-size: 13px;
            margin-bottom: 10px;
            font-weight: 600;
        }

        .ideal-for {
            background: var(--gray-50);
            border-left: 3px solid var(--primary);
            padding: 10px 14px;
            margin-bottom: 18px;
            border-radius: 8px;
            font-size: 13px;
            color: var(--gray-600);
            font-weight: 600;
        }

        .ideal-for strong {
            color: var(--primary);
            display: block;
            margin-bottom: 3px;
        }

        .features {
            list-style: none;
            margin-bottom: 24px;
        }

        .features li {
            padding: 10px 0;
            padding-left: 28px;
            position: relative;
            font-size: 14px;
            color: var(--gray-600);
            line-height: 1.5;
        }

        .features li::before {
            content: '✓';
            position: absolute;
            left: 0;
            color: var(--success);
            font-weight: 800;
            font-size: 18px;
        }

        /* Social Proof */
        .social-proof {
            margin-bottom: 48px;
        }

        .testimonials {
            position: relative;
            margin-top: 28px;
            overflow: hidden;
        }

        .testimonials-wrapper {
            display: flex;
            transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .testimonial {
            background: white;
            border: 1.5px solid var(--gray-200);
            border-radius: 18px;
            padding: 24px 20px;
            transition: all 0.3s ease;
            box-shadow: 0 2px 8px rgba(9, 30, 66, 0.04);
            flex: 0 0 100%;
            min-width: 100%;
        }

        .testimonial:hover {
            border-color: var(--primary);
            box-shadow: 0 8px 24px rgba(0, 82, 204, 0.1);
        }

        .testimonial-text {
            font-size: 14px;
            line-height: 1.6;
            margin-bottom: 16px;
            font-style: italic;
            color: var(--dark);
        }

        .testimonial-author {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .carousel-controls {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 12px;
            margin-top: 24px;
        }

        .carousel-btn {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 2px solid var(--primary);
            background: white;
            color: var(--primary);
            font-size: 18px;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .carousel-btn:hover {
            background: var(--primary);
            color: white;
            transform: scale(1.1);
        }

        .carousel-dots {
            display: flex;
            gap: 8px;
        }

        .carousel-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: var(--gray-300);
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .carousel-dot.active {
            background: var(--primary);
            width: 24px;
            border-radius: 5px;
        }

        .author-avatar {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--primary), var(--primary-light));
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 800;
            font-size: 15px;
            color: white;
            flex-shrink: 0;
        }

        .author-name {
            font-weight: 700;
            font-size: 14px;
            margin-bottom: 3px;
            color: var(--dark);
        }

        .author-role {
            font-size: 12px;
            color: var(--gray-600);
            line-height: 1.4;
        }

        /* FAQ */
        .faq {
            margin-bottom: 48px;
        }

        .faq-item {
            background: white;
            border: 1.5px solid var(--gray-200);
            border-radius: 14px;
            padding: 20px;
            margin-bottom: 10px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 1px 3px rgba(9, 30, 66, 0.04);
        }

        .faq-item:hover {
            border-color: var(--primary);
            box-shadow: 0 4px 12px rgba(0, 82, 204, 0.08);
        }

        .faq-question {
            font-weight: 700;
            font-size: 15px;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: var(--dark);
        }

        .faq-answer {
            color: var(--gray-600);
            font-size: 14px;
            line-height: 1.6;
        }

        /* Final CTA */
        .final-cta {
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
            border-radius: 24px;
            padding: 40px 28px;
            text-align: center;
            margin-bottom: 48px;
            animation: fadeIn 1s ease-out 3s backwards;
            box-shadow: 0 16px 48px rgba(0, 82, 204, 0.3);
        }

        .final-cta h2 {
            font-family: 'Lexend', sans-serif;
            font-size: 32px;
            font-weight: 800;
            margin-bottom: 14px;
            color: white;
        }

        .final-cta p {
            font-size: 16px;
            margin-bottom: 28px;
            color: rgba(255, 255, 255, 0.9);
            line-height: 1.6;
        }

        .final-cta .btn {
            background: white;
            color: var(--primary);
            display: inline-flex;
            font-weight: 800;
            font-size: 16px;
            padding: 18px 32px;
        }

        .final-cta .btn:hover {
            transform: translateY(-3px) scale(1.03);
            box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
        }

        .footer {
            text-align: center;
            padding: 36px 0;
            border-top: 1.5px solid var(--gray-200);
            color: var(--gray-600);
            font-size: 12px;
        }

        /* FAB */
        .fab {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 6px 28px rgba(0, 82, 204, 0.4);
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: 99;
            animation: bounceIn 1s ease-out 3.2s backwards;
        }

        @keyframes bounceIn {
            0% { transform: scale(0); opacity: 0; }
            50% { transform: scale(1.15); }
            100% { transform: scale(1); opacity: 1; }
        }

        .fab:hover {
            transform: scale(1.1);
            box-shadow: 0 10px 36px rgba(0, 82, 204, 0.5);
        }

        .fab:active {
            transform: scale(0.95);
        }

        /* Container pour les 2 blocs côte à côte */
        .risk-opportunity-wrapper {
            display: grid;
            gap: 16px;
            margin-bottom: 40px;
        }

        /* Section Vidéo YouTube - Design minimaliste */
        .video-section {
            margin-bottom: 40px;
        }

        .video-badge {
            display: inline-block;
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
            color: white;
            padding: 6px 14px;
            border-radius: 20px;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            margin-bottom: 12px;
        }

        .video-header {
            text-align: center;
            margin-bottom: 20px;
        }

        .video-title {
            font-size: 22px;
            font-weight: 800;
            color: var(--dark);
            margin-bottom: 0;
            text-align: center;
            line-height: 1.3;
        }

        .video-container {
            position: relative;
            padding-bottom: 56.25%; /* Ratio 16:9 */
            height: 0;
            overflow: hidden;
            border-radius: 12px;
            box-shadow: 0 8px 24px rgba(9, 30, 66, 0.12);
        }

        .video-container iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 0;
            border-radius: 12px;
        }

        /* Quiz NIS2 Modal */
        .quiz-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(9, 30, 66, 0.85);
            backdrop-filter: blur(4px);
            z-index: 9998;
            display: none;
            align-items: center;
            justify-content: center;
            padding: 20px;
            animation: fadeIn 0.3s ease-out;
            overflow-y: auto;
        }

        .quiz-overlay.active {
            display: flex;
        }

        .quiz-container {
            background: white;
            border-radius: 24px;
            padding: 40px 32px;
            box-shadow: 0 20px 60px rgba(9, 30, 66, 0.3);
            max-width: 700px;
            width: 100%;
            position: relative;
            animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            margin: 20px auto;
        }

        .quiz-close {
            position: absolute;
            top: 16px;
            right: 16px;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background: var(--gray-100);
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            color: var(--dark);
            transition: all 0.3s ease;
            z-index: 10;
        }

        .quiz-close:hover {
            background: var(--secondary);
            color: white;
            transform: rotate(90deg);
        }

        .quiz-header {
            text-align: center;
            margin-bottom: 32px;
        }

        .quiz-badge {
            display: inline-block;
            background: linear-gradient(135deg, var(--secondary) 0%, #d63b1f 100%);
            color: white;
            padding: 8px 18px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            margin-bottom: 16px;
        }

        .quiz-title {
            font-size: 32px;
            font-weight: 800;
            color: var(--dark);
            margin-bottom: 12px;
            line-height: 1.2;
        }

        .quiz-intro {
            font-size: 15px;
            color: var(--text);
            line-height: 1.6;
            margin-bottom: 24px;
        }

        .quiz-benefits {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            justify-content: center;
            margin-bottom: 32px;
        }

        .quiz-benefit {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 13px;
            color: var(--success);
            font-weight: 600;
        }

        .quiz-progress {
            margin-bottom: 32px;
        }

        .quiz-progress-bar {
            width: 100%;
            height: 8px;
            background: var(--gray-100);
            border-radius: 20px;
            overflow: hidden;
            margin-bottom: 8px;
        }

        .quiz-progress-fill {
            height: 100%;
            background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
            transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            border-radius: 20px;
        }

        .quiz-progress-text {
            font-size: 13px;
            color: var(--gray-600);
            text-align: center;
            font-weight: 600;
        }

        .quiz-question {
            display: none;
            animation: fadeIn 0.4s ease-out;
        }

        .quiz-question.active {
            display: block;
        }

        .quiz-question-number {
            font-size: 13px;
            font-weight: 700;
            color: var(--primary);
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 12px;
        }

        .quiz-question-text {
            font-size: 20px;
            font-weight: 700;
            color: var(--dark);
            margin-bottom: 24px;
            line-height: 1.4;
        }

        .quiz-answers {
            display: grid;
            gap: 12px;
            margin-bottom: 24px;
        }

        .quiz-answer {
            border: 2px solid var(--gray-200);
            border-radius: 16px;
            padding: 18px 20px;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 12px;
            background: white;
        }

        .quiz-answer:hover {
            border-color: var(--primary);
            background: var(--gray-50);
            transform: translateX(4px);
        }

        .quiz-answer.selected {
            border-color: var(--primary);
            background: linear-gradient(135deg, rgba(0, 82, 204, 0.05) 0%, rgba(0, 82, 204, 0.02) 100%);
            box-shadow: 0 4px 16px rgba(0, 82, 204, 0.15);
        }

        .quiz-answer-radio {
            width: 24px;
            height: 24px;
            border: 2px solid var(--gray-300);
            border-radius: 50%;
            flex-shrink: 0;
            position: relative;
            transition: all 0.3s ease;
        }

        .quiz-answer.selected .quiz-answer-radio {
            border-color: var(--primary);
            background: var(--primary);
        }

        .quiz-answer.selected .quiz-answer-radio::after {
            content: '✓';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-size: 14px;
            font-weight: 700;
        }

        .quiz-answer-text {
            font-size: 16px;
            font-weight: 600;
            color: var(--dark);
        }

        .quiz-navigation {
            display: flex;
            gap: 12px;
            justify-content: space-between;
        }

        .quiz-btn {
            padding: 14px 28px;
            border-radius: 12px;
            font-size: 15px;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s ease;
            border: none;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .quiz-btn-prev {
            background: var(--gray-100);
            color: var(--dark);
        }

        .quiz-btn-prev:hover {
            background: var(--gray-200);
        }

        .quiz-btn-next {
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
            color: white;
            box-shadow: 0 4px 16px rgba(0, 82, 204, 0.3);
            margin-left: auto;
            pointer-events: auto;
        }

        .quiz-btn-next:not(:disabled) {
            pointer-events: auto;
            cursor: pointer;
        }

        .quiz-btn-next:hover:not(:disabled) {
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(0, 82, 204, 0.4);
        }

        .quiz-btn-next:disabled {
            opacity: 0.5;
            cursor: not-allowed;
            transform: none;
            pointer-events: none;
        }

        /* Résultats */
        .quiz-results {
            display: none;
            text-align: center;
            animation: fadeIn 0.5s ease-out;
        }

        .quiz-results.active {
            display: block;
        }

        .quiz-score-circle {
            width: 160px;
            height: 160px;
            border-radius: 50%;
            margin: 0 auto 24px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: 56px;
            font-weight: 800;
            color: white;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
        }

        .quiz-score-circle.low {
            background: linear-gradient(135deg, var(--success) 0%, #10b759 100%);
        }

        .quiz-score-circle.medium {
            background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
        }

        .quiz-score-circle.high {
            background: linear-gradient(135deg, var(--secondary) 0%, #d63b1f 100%);
        }

        .quiz-score-label {
            font-size: 14px;
            font-weight: 600;
            margin-top: -8px;
        }

        .quiz-result-title {
            font-size: 28px;
            font-weight: 800;
            color: var(--dark);
            margin-bottom: 12px;
        }

        .quiz-result-desc {
            font-size: 16px;
            color: var(--text);
            line-height: 1.6;
            margin-bottom: 32px;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }

        .quiz-result-actions {
            display: grid;
            gap: 12px;
            max-width: 500px;
            margin: 0 auto;
        }

        .quiz-result-btn {
            padding: 16px 24px;
            border-radius: 12px;
            font-size: 16px;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s ease;
            border: none;
            text-decoration: none;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }

        .quiz-result-btn.primary {
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
            color: white;
            box-shadow: 0 4px 16px rgba(0, 82, 204, 0.3);
        }

        .quiz-result-btn.primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(0, 82, 204, 0.4);
        }

        .quiz-result-btn.secondary {
            background: white;
            color: var(--primary);
            border: 2px solid var(--primary);
        }

        .quiz-result-btn.secondary:hover {
            background: var(--gray-50);
        }

        /* Popup Lead Magnet */
        .popup-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(9, 30, 66, 0.8);
            backdrop-filter: blur(4px);
            z-index: 9999;
            display: none;
            align-items: center;
            justify-content: center;
            padding: 20px;
            animation: fadeIn 0.3s ease-out;
        }

        .popup-overlay.active {
            display: flex;
        }

        .popup-content {
            background: white;
            border-radius: 24px;
            max-width: 580px;
            width: 100%;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
            box-shadow: 0 20px 60px rgba(9, 30, 66, 0.3);
            animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(30px) scale(0.95);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }

        .popup-close {
            position: absolute;
            top: 16px;
            right: 16px;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background: var(--gray-100);
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            color: var(--dark);
            transition: all 0.3s ease;
            z-index: 10;
        }

        .popup-close:hover {
            background: var(--secondary);
            color: white;
            transform: rotate(90deg);
        }

        .popup-header {
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
            padding: 32px 24px;
            text-align: center;
            color: white;
            border-radius: 24px 24px 0 0;
        }

        .popup-badge {
            display: inline-block;
            background: rgba(255, 255, 255, 0.2);
            padding: 6px 14px;
            border-radius: 20px;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            margin-bottom: 12px;
        }

        .popup-title {
            font-size: 26px;
            font-weight: 800;
            margin-bottom: 8px;
            line-height: 1.2;
        }

        .popup-subtitle {
            font-size: 15px;
            opacity: 0.95;
            line-height: 1.4;
        }

        .popup-body {
            padding: 32px 24px;
        }

        .popup-options {
            display: grid;
            gap: 16px;
            margin-bottom: 24px;
        }

        .popup-option {
            border: 2px solid var(--gray-200);
            border-radius: 16px;
            padding: 20px;
            cursor: pointer;
            transition: all 0.3s ease;
            background: white;
        }

        .popup-option:hover {
            border-color: var(--primary);
            background: var(--gray-50);
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(0, 82, 204, 0.1);
        }

        .popup-option.selected {
            border-color: var(--primary);
            background: linear-gradient(135deg, rgba(0, 82, 204, 0.05) 0%, rgba(0, 82, 204, 0.02) 100%);
            box-shadow: 0 4px 16px rgba(0, 82, 204, 0.15);
        }

        .popup-option-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 8px;
        }

        .popup-option-icon {
            font-size: 32px;
        }

        .popup-option-title {
            font-size: 18px;
            font-weight: 700;
            color: var(--dark);
        }

        .popup-option-desc {
            font-size: 14px;
            color: var(--text);
            line-height: 1.5;
            margin-left: 44px;
        }

        .popup-form {
            display: none;
            animation: fadeIn 0.3s ease-out;
        }

        .popup-form.active {
            display: block;
        }

        .form-group {
            margin-bottom: 16px;
        }

        .form-label {
            display: block;
            font-size: 13px;
            font-weight: 600;
            color: var(--dark);
            margin-bottom: 6px;
        }

        .form-label .required {
            color: var(--secondary);
        }

        .form-input {
            width: 100%;
            padding: 12px 16px;
            border: 1.5px solid var(--gray-200);
            border-radius: 10px;
            font-size: 14px;
            transition: all 0.3s ease;
            font-family: 'Inter', sans-serif;
        }

        .form-input:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(0, 82, 204, 0.1);
        }

        .form-input::placeholder {
            color: var(--gray-400);
        }

        .form-consent {
            display: flex;
            align-items: flex-start;
            gap: 8px;
            margin-bottom: 20px;
        }

        .form-consent input[type="checkbox"] {
            margin-top: 2px;
            width: 18px;
            height: 18px;
            cursor: pointer;
        }

        .form-consent label {
            font-size: 12px;
            color: var(--text);
            line-height: 1.5;
            cursor: pointer;
        }

        .popup-submit {
            width: 100%;
            padding: 16px 24px;
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
            color: white;
            border: none;
            border-radius: 12px;
            font-size: 16px;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 16px rgba(0, 82, 204, 0.3);
        }

        .popup-submit:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(0, 82, 204, 0.4);
        }

        .popup-submit:disabled {
            opacity: 0.5;
            cursor: not-allowed;
            transform: none;
        }

        .popup-back {
            margin-top: 12px;
            text-align: center;
        }

        .popup-back button {
            background: none;
            border: none;
            color: var(--primary);
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            text-decoration: underline;
        }

        .popup-success {
            display: none;
            text-align: center;
            padding: 40px 20px;
        }

        .popup-success.active {
            display: block;
            animation: fadeIn 0.3s ease-out;
        }

        .popup-success-icon {
            font-size: 64px;
            margin-bottom: 16px;
        }

        .popup-success-title {
            font-size: 24px;
            font-weight: 700;
            color: var(--dark);
            margin-bottom: 8px;
        }

        .popup-success-message {
            font-size: 15px;
            color: var(--text);
            line-height: 1.5;
        }

        /* Responsive */
        @media (max-width: 640px) {
            /* Quiz responsive */
            .quiz-overlay {
                padding: 10px;
                align-items: flex-start;
            }

            .quiz-container {
                padding: 28px 20px;
                margin: 10px auto;
                max-height: 95vh;
                overflow-y: auto;
            }

            .quiz-title {
                font-size: 22px;
            }

            .quiz-intro {
                font-size: 14px;
            }

            .quiz-benefits {
                flex-direction: column;
                align-items: flex-start;
            }

            .quiz-question-text {
                font-size: 17px;
            }

            .quiz-answer {
                padding: 14px 16px;
            }

            .quiz-answer-text {
                font-size: 15px;
            }

            .quiz-btn {
                padding: 12px 20px;
                font-size: 14px;
            }

            .quiz-score-circle {
                width: 130px;
                height: 130px;
                font-size: 44px;
            }

            .quiz-result-title {
                font-size: 22px;
            }

            .quiz-result-desc {
                font-size: 14px;
            }

            /* Popup responsive */
            .popup-content {
                margin: 0;
                border-radius: 20px;
                max-height: 85vh;
            }

            .popup-header {
                padding: 24px 20px;
            }

            .popup-title {
                font-size: 22px;
            }

            .popup-subtitle {
                font-size: 14px;
            }

            .popup-body {
                padding: 24px 20px;
            }

            .popup-option {
                padding: 16px;
            }

            .popup-option-title {
                font-size: 16px;
            }

            .popup-option-desc {
                font-size: 13px;
            }
        }

        @media (min-width: 768px) {
            .container { max-width: 720px; }
            .hero h1 { font-size: 52px; }
            .stats { grid-template-columns: repeat(4, 1fr); }
            .cta-group { flex-direction: row; }
            .btn { flex: 1; }
            .expertise-grid { grid-template-columns: repeat(2, 1fr); }
            .pricing-cards { flex-direction: row; flex-wrap: wrap; }
            .price-card { flex: 1; min-width: calc(50% - 8px); }
            .credentials { flex-direction: row; }
            .credential-item { flex-direction: column; text-align: center; flex: 1; }
            
            .risk-opportunity-wrapper {
                grid-template-columns: repeat(2, 1fr);
                gap: 20px;
            }
            
            .warning-card,
            .value-prop {
                margin-bottom: 0;
            }
            
            /* Sticky header tablet : design propre une ligne */
            .sticky-header {
                padding: 10px 20px;
            }
            
            .sticky-header-content {
                gap: 12px;
            }
            
            .sticky-logo {
                font-size: 15px;
            }
            
            /* Réafficher "Conformité" */
            .sticky-logo span {
                display: inline;
            }
            
            .sticky-cta-group {
                gap: 8px;
            }
            
            .btn-sticky {
                padding: 10px 14px;
                font-size: 12px;
            }
        }

        @media (min-width: 1024px) {
            .container { max-width: 1024px; }
            .hero h1 { font-size: 64px; }
            
            /* Garder 2 colonnes pour impact-cards */
            
            /* Sticky header desktop : taille normale */
            .sticky-header {
                padding: 12px 24px;
            }
            
            .sticky-logo {
                font-size: 16px;
            }
            
            .btn-sticky {
                padding: 12px 20px;
                font-size: 14px;
            }
        }
      `}</style>

<div className="bg-gradient"></div>

    <div className="alert-bar">
        <span>⚠️ NIS2 Conformité obligatoire • Premières sanctions en 2027 • Agissez maintenant</span>
    </div>

    {/* Sticky Header avec CTA */}
    <div className="sticky-header" id="stickyHeader">
        <div className="sticky-header-content">
            <div className="sticky-logo">NIS2<span> Conformité</span></div>
            <div className="sticky-cta-group">
                <a href="https://calendly.com/adrien-ruggirello/30min" target="_blank" className="btn-sticky primary">
                    📅 RDV expert gratuit
                </a>
                <a href="#pricing" className="btn-sticky secondary">
                    Nos offres
                </a>
            </div>
        </div>
    </div>

    <div className="container">
        {/* HERO */}
        <section className="hero">
            <div className="logo">Cyber Solferino</div>
            <div className="tagline">Référentiel ANSSI • Une équipe de Cyber Experts • 15 ans d'expertise</div>
            
            <h1>
                <span className="highlight">Évitez 10M€ d'amende</span>
                La cybersécurité : un impératif stratégique
            </h1>
            
            <p className="subtitle">Protégez votre activité, votre réputation et votre résilience. Transformez NIS2 en levier de performance avec un accompagnement d'experts cyber certifiés ISO 27001.</p>

            <div className="stats">
                <div className="stat">
                    <div className="stat-value">92%</div>
                    <div className="stat-label">PME non prêtes</div>
                </div>
                <div className="stat">
                    <div className="stat-value">10M€</div>
                    <div className="stat-label">amende max ou 2% du CA</div>
                </div>
                <div className="stat">
                    <div className="stat-value">70%</div>
                    <div className="stat-label">d'aides de l'état possibles</div>
                </div>
                <div className="stat">
                    <div className="stat-value">+40%</div>
                    <div className="stat-label">de cyber attaques en 2024</div>
                </div>
            </div>

            {/* CTA PRINCIPAL : Quiz d'abord */}
            <div className="cta-group">
                <button onClick={() => window.openQuiz()} className="btn btn-primary">
                    🎯 Suis-je concerné par NIS2 ?
                </button>
                <a href="https://drive.google.com/file/d/1pHdC_x0PCa2rkWBBPx9MHWujG2xm6H8B/view?usp=share_link" target="_blank" className="btn btn-secondary">
                    Comprendre NIS2 en détail
                </a>
            </div>
        </section>

        {/* VIDÉO YOUTUBE : Comprendre NIS2 */}
        <section className="video-section">
            <div className="video-header">
                <div className="video-badge">🎥 Comprendre NIS2 en vidéo</div>
            </div>
            <div className="video-container">
                <iframe 
                    src="https://www.youtube.com/embed/461tWBUzrY8?enablejsapi=1" 
                    title="Directive NIS2 expliquée" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen>
                </iframe>
            </div>
        </section>

        {/* Wrapper pour afficher les 2 blocs côte à côte sur desktop */}
        <div className="risk-opportunity-wrapper">
            {/* RISQUES SANS CONFORMITÉ : Bloc rouge */}
            <section className="warning-card">
                <h2>⚠️ Les enjeux de la non-conformité</h2>
                <ul className="warning-list">
                    <li><strong>Sanctions financières lourdes</strong> — Jusqu'à 10M€ ou 2% du chiffre d'affaires mondial</li>
                    <li><strong>Responsabilité pénale du dirigeant</strong> — En cas de manquement aux obligations NIS2</li>
                    <li><strong>Exclusion des marchés</strong> — Impossibilité de répondre aux appels d'offres publics et privés</li>
                    <li><strong>Perte de confiance B2B</strong> — Vos clients exigent désormais la conformité</li>
                    <li><strong>Contrôles réglementaires</strong> — Audits de votre entreprise sur site sans préavis de l'ANSSI </li>
                </ul>
            </section>

            {/* OPPORTUNITÉ : MESSAGE POSITIF */}
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

        {/* CTA Inline 1 */}
        <div className="cta-inline">
            <p>🚀 Transformez la contrainte en opportunité business</p>
            <a href="#pricing" className="btn">
                Découvrir nos offres
            </a>
        </div>

        {/* RISQUES CHIFFRÉS : 3 cartes avec % attaques cyber */}
        <section className="impact-section">
            <div className="section-header">
                <div className="section-badge">RISQUES CHIFFRÉS</div>
                <h2>La prévention est plus rentable qu’une crise cyber</h2>
                <p className="section-subtitle">Vulnérabilité des PME • 43% perdent des clients après une attaque cyber</p>
            </div>

            <div className="impact-cards">
                <div className="impact-card" style={{Delay: '0s'}}>
                    <div className="impact-icon">📈</div>
                    <div className="impact-stat">+38%</div>
                    <div className="impact-label">Hausse attaques cyber</div>
                    <p className="impact-detail">Les attaques contre les PME ont explosé de 38% en 2024. Les cybercriminels ciblent les entreprises non protégées.</p>
                </div>

                <div className="impact-card" style={{Delay: '0.15s'}}>
                    <div className="impact-icon">💸</div>
                    <div className="impact-stat">4,35M€</div>
                    <div className="impact-label">Coût moyen cyberattaque</div>
                    <p className="impact-detail">Rançongiciel, arrêt de production (21j en moyenne), perte de données. 60% des PME touchées ferment dans les 12 mois.</p>
                </div>
            </div>
        </section>

        {/* CTA Inline 2 */}
        <div className="cta-inline">
            <p>🛡️ Renforcez la sécurité informatique et la résilience de votre entreprise</p>
            <a href="https://calendly.com/adrien-ruggirello/30min" target="_blank" className="btn">
                📅 Echange gratuit avec un expert
            </a>
        </div>

        {/* EXPERTISE */}
        <section className="expertise-section">
            <div className="section-header">
                <div className="section-badge success">NOTRE APPROCHE</div>
                <h2>Préparez-vous à NIS2 avec notre méthode éprouvée</h2>
                <p className="section-subtitle">Notre accompagnement se base sur le référentiel officiel de l’ANSSI.</p>
            </div>

            {/* Timeline horizontale */}
            <div className="timeline-container">
                <div className="timeline-horizontal">
                    <div className="timeline-item">
                        <div className="timeline-number">01</div>
                        <div className="timeline-content">
                            <h3 className="timeline-title">Analyse de conformité</h3>
                            <p className="timeline-description">Identification des écarts clés de conformité selon le refenciel de l'ANSSI.</p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-number">02</div>
                        <div className="timeline-content">
                            <h3 className="timeline-title">Comprendre ses vulnérabilités</h3>
                            <p className="timeline-description">Connaitre son niveau de conformité aux obligations de sécurité NIS2</p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-number">03</div>
                        <div className="timeline-content">
                            <h3 className="timeline-title">Accompgnement adapté</h3>
                            <p className="timeline-description">Choissisez l'offre adaptée en fonction de votre niveau global de maturité cyber</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="expertise-grid">
                <div className="expertise-card" style={{Delay: '0s'}}>
                    <div className="expertise-number">15+</div>
                    <div className="expertise-title">Années d'expérience terrain</div>
                    <p>Depuis 2009, nous accompagnons les dirigeants dans leur démarche de sécurisation et de conformité Cyber.</p>
                </div>

                <div className="expertise-card highlight" style={{Delay: '0.15s'}}>
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

            {/* Bandeau Aides État - Design moderne */}
            <div style={{maxWidth: '850px', margin: '0 auto 40px auto', padding: '16px 24px', background: 'linear-gradient(90deg, rgba(76, 175, 80, 0.08) 0%, rgba(76, 175, 80, 0.12) 100%)', borderLeft: '4px solid #4caf50', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '16px'}}>
                <div style={{flexShrink: '0', fontSize: '24px'}}>💡</div>
                <div style={{flex: '1', color: '#2e7d32', fontSize: '15px', lineHeight: '1.5'}}>
                    <strong style={{color: '#1b5e20'}}>Aides de l'État disponibles</strong> — Réduisez le coût de votre mise en conformité. Lors de votre rendez-vous, nous vous orientons vers les financements adaptés.
                </div>
            </div>

            <div className="pricing-cards">
                <div className="price-card" style={{Delay: '0s'}}>
                    <h3>Découverte</h3>
                    <div className="price">3 490€</div>
                    <div className="price-sub">Immédiat • Diagnostic</div>
                    <div className="ideal-for">
                        <strong>Idéal pour :</strong>
                        Evaluation immédiate et abordable
                    </div>
                    <ul className="features">
                        <li>Audit cyber NIS2 initial</li>
                        <li><strong>Résultat immédiat ⚡</strong></li>
                        <li>Rapport d'audit synthétique</li>
                        <li>Recommandations d’actions prioritaires</li>
                    </ul>
                    <button onClick={handleStripeCheckout} className="btn btn-secondary">
                        Je fais mon diagnostic NIS2
                    </button>
                </div>

                <div className="price-card" style={{Delay: '0.1s'}}>
                    <h3>Essentiel</h3>
                    <div className="price">7 990€</div>
                    <div className="price-sub">En 48H</div>
                    <div className="ideal-for">
                        <strong>Idéal pour :</strong>
                        Entités nécessitant un plan structuré
                    </div>
                    <ul className="features">
                        <li>Audit cyber NIS2</li>
                        <li>Rapport complet validé par nos équipes</li>
                        <li>Analyse des écarts de conformité</li>
                        <li>Plan de remédiation détaillé avec priorisation </li>
                        <li><strong>Restitution avec un expert, 1h de visio</strong></li>
			<li>Accès à notre base de modèle de documents</li>
			<li>6 mois d'accès à notre plateforme</li>
                    </ul>
                    <a href="https://calendly.com/adrien-ruggirello/30min" target="_blank" className="btn btn-secondary">
                        Prendre rendez-vous
                    </a>
                </div>

                <div className="price-card featured" style={{Delay: '0.2s'}}>
                    <div className="popular-badge">⭐ POPULAIRE</div>
                    <h3>Expertise</h3>
                    <div className="price">14 900€</div>
                    <div className="price-sub">1 mois</div>
                    <div className="ideal-for">
                        <strong>Idéal pour :</strong>
                        Entités nécessitant un plan structuré et un accompagnement en cas de contrôle
                    </div>
                    <ul className="features">
                        <li>Audit cyber NIS2</li>
                        <li>Rapport complet validé par nos équipes</li>
                        <li>Analyse des écarts de conformité</li>
                        <li>Plan de remédiation détaillé avec priorisation </li>
			<li><strong>Restitution avec un expert, 1h de visio</strong></li>
                        <li><strong>Entretien préalable avec un expert, 1h de visio</strong></li>
			<li>Roadmap personnalisée pour une mise en conformité</li>
			<li>Enregistrement de votre entreprise à l'ANSSI</li>
			<li>Constitution dossier d'aides d'état</li>
			<li>Accès à notre base de modèle de documents</li>
			<li>12 mois d'accès à notre plateforme</li>
			<li>Mise a jour des dernières evolutions législatives</li>
                    </ul>
                    <a href="https://calendly.com/adrien-ruggirello/30min" target="_blank" className="btn btn-primary">
                        Prendre rendez-vous
                    </a>
                </div>
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
                    <div className="testimonial">
                        <div className="testimonial-text">
                            "L’accompagnement NIS2 nous a permis de structurer clairement nos obligations et de prioriser les actions essentielles. La démarche est pragmatique, pédagogique et parfaitement adaptée à une PME."
                        </div>
                        <div className="testimonial-author">
                            <div className="author-avatar">AM</div>
                            <div className="author-info">
                                <div className="author-name">Alex Martin</div>
                                <div className="author-role">CEO • Services Numériques • 65 sal.</div>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial">
                        <div className="testimonial-text">
                            "Accompagnement précis, méthodique, sans jargon inutile. L'équipe a su traduire les exigences réglementaires en plan d'action opérationnel. Aujourd'hui, la conformité est devenue un argument de différenciation face à nos clients grands comptes."
                        </div>
                        <div className="testimonial-author">
                            <div className="author-avatar">MD</div>
                            <div className="author-info">
                                <div className="author-name">Marc Dubois</div>
                                <div className="author-role">Directeur Général • Transport • 120 sal.</div>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial">
                        <div className="testimonial-text">
                            "L'approche pédagogique m'a permis de mobiliser mes équipes efficacement. En 3 mois, nous avons structuré notre gouvernance cybersécurité et obtenu la conformité. C'est désormais un atout commercial majeur dans nos négociations."
                        </div>
                        <div className="testimonial-author">
                            <div className="author-avatar">SL</div>
                            <div className="author-info">
                                <div className="author-name">Sophie Lemaire</div>
                                <div className="author-role">Directrice Administrative et Financière • Santé • 85 sal.</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contrôles Carousel */}
                <div className="carousel-controls">
                    <button className="carousel-btn" id="prevBtn">←</button>
                    <div className="carousel-dots" id="carouselDots"></div>
                    <button className="carousel-btn" id="nextBtn">→</button>
                </div>
            </div>
        </section>

        {/* CTA Inline 3 */}
        <div className="cta-inline">
            <p>💬 Échangez avec un expert certifié • Obtenez des réponses claires</p>
            <a href="https://calendly.com/adrien-ruggirello/30min" target="_blank" className="btn">
                📅 Prendre rendez-vous
            </a>
        </div>

        {/* FAQ */}
        <section className="faq" id="quiz">
            <div className="section-header">
                <div className="section-badge">FAQ</div>
                <h2>Les questions que se posent les dirigeants</h2>
            </div>
            
            <div className="faq-item">
                <div className="faq-question">
                    🎯 Comment la conformité devient-elle un avantage commercial ?
                    <span>↓</span>
                </div>
                <div className="faq-answer">
                    La conformité NIS2 et ISO 27001 deviennent des critères d'éligibilité dans les appels d'offres publics et privés. Sans certification, vous êtes d'office écarté. C'est un différenciateur stratégique qui vous positionne comme partenaire de confiance face à vos concurrents non conformes.
                </div>
            </div>

            <div className="faq-item">
                <div className="faq-question">
                    💰 Quel est le véritable coût de la non-conformité ?
                    <span>↓</span>
                </div>
                <div className="faq-answer">
                    Au-delà des sanctions financières (jusqu'à 10M€), la non-conformité entraîne : exclusion des marchés, perte de clients B2B, atteinte réputationnelle, et risque pénal pour le dirigeant. La mise en conformité coûte 200 fois moins cher qu'une sanction et ouvre des opportunités de croissance.
                </div>
            </div>

            <div className="faq-item">
                <div className="faq-question">
                    ⏱️ Quel délai prévoir pour atteindre la conformité ?
                    <span>↓</span>
                </div>
                <div className="faq-answer">
                    Avec notre méthodologie éprouvée : 90 jours en moyenne de l'audit initial à la conformité effective. Les premiers jalons de sécurisation sont mis en place dès les 2 premières semaines. Notre équipe certifiée ISO 27001 optimise chaque étape du parcours.
                </div>
            </div>

            <div className="faq-item">
                <div className="faq-question">
                    🤔 Mon organisation est-elle dans le périmètre NIS2 ?
                    <span>↓</span>
                </div>
                <div className="faq-answer">
                    Vous êtes concerné si : +50 salariés OU +10M€ CA, ET secteur critique (santé, énergie, transport, services numériques, industrie, etc.). La directive couvre 18 secteurs et leurs chaînes d'approvisionnement. Contactez-nous pour un diagnostic gratuit immédiat.
                </div>
            </div>

            <div className="faq-item">
                <div className="faq-question">
                    📋 Comment NIS2 s'articule avec le RGPD et ISO 27001 ?
                    <span>↓</span>
                </div>
                <div className="faq-answer">
                    Ces cadres sont complémentaires. RGPD = protection des données personnelles. ISO 27001 = management de la sécurité de l'information. NIS2 = résilience des réseaux et systèmes critiques. Une démarche NIS2 bien menée facilite grandement la conformité RGPD et prépare la certification ISO 27001.
                </div>
            </div>

            <div className="faq-item">
                <div className="faq-question">
                    🏆 Pourquoi nous choisir ?
                    <span>↓</span>
                </div>
                <div className="faq-answer">
                    15 ans d'expertise, équipe ISO 27001, experts ANSSI, 150+ PME accompagnées, 98% conformité, 0 client sanctionné. Nous parlons votre langage, pas du jargon.
                </div>
            </div>
        </section>

        {/* FINAL CTA */}
        <section className="final-cta">
            <h2>Sécurisez votre avenir dès aujourd'hui</h2>
            <p>Échange confidentiel avec un consultant certifié ISO 27001<br /><strong>Audit indépendant pour mesurer votre conformité et identifier les écarts critiques, avec des livrables clairs et actionnables.</strong></p>
            <a href="https://calendly.com/adrien-ruggirello/30min" target="_blank" className="btn">
                📅 Réserver un échange gratuit
            </a>
        </section>

        <footer className="footer">
            <p><strong>Cyber Solferino</strong> • Mise en conformité NIS2 • Basé sur le referenciel ANSSI</p>
            <p style={{marginTop: '10px'}}>www.cyber-solferino.com • bla bla bla</p>
            <p style={{marginTop: '8px', opacity: '0.6'}}>Mentions légales • CGV • Politique de confidentialité</p>
        </footer>
    </div>

    <div className="fab" onClick={() => window.window.location.href='tel:+33123456789'}>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
    </div>

    {/* POPUP LEAD MAGNET */}
    <div className="popup-overlay" id="leadPopup">
        <div className="popup-content">
            <button className="popup-close" onClick={() => window.closePopup()}>×</button>
            
            {/* Header */}
            <div className="popup-header">
                <div className="popup-badge">🎁 RESSOURCE GRATUITE</div>
                <h2 className="popup-title">Directive NIS2 : Le Guide Essentiel</h2>
                <p className="popup-subtitle">Téléchargez notre guide exclusif ou échangez avec un expert certifié ISO 27001</p>
            </div>

            {/* Body avec choix */}
            <div className="popup-body" id="popupChoices">
                <div className="popup-options">
                    <div className="popup-option" onClick={() => window.selectOption('download')}>
                        <div className="popup-option-header">
                            <div className="popup-option-icon">📥</div>
                            <div className="popup-option-title">Télécharger gratuitement le guide NIS2</div>
                        </div>
                        <p className="popup-option-desc">
                            <strong>Tout comprendre en quelques minutes</strong> — Directive, risques pour les entreprises et opportunités. Format PDF pratique et actionnable.
                        </p>
                    </div>

                    <div className="popup-option" onClick={() => window.selectOption('contact')}>
                        <div className="popup-option-header">
                            <div className="popup-option-icon">📞</div>
                            <div className="popup-option-title">Réserver un diagnostic gratuit personnalisé</div>
                        </div>
                        <p className="popup-option-desc">
                            <strong>Échange avec un expert cybersécurité</strong> — Diagnostic immédiat de votre situation, recommandations sur-mesure, plan d'action.
                        </p>
                    </div>
                </div>
            </div>

            {/* Formulaire Download */}
            <div className="popup-form" id="downloadForm">
                <div className="popup-body">
                    <h3 style={{fontSize: '20px', fontWeight: '700', marginBottom: '20px'}}>📥 Téléchargez gratuitement le guide NIS2</h3>
                    
                    <form onSubmit={(e) => { e.preventDefault(); window.submitDownload(event) }}>
                        <div className="form-group">
                            <label className="form-label">Prénom <span className="required">*</span></label>
                            <input type="text" className="form-input" placeholder="Votre prénom" required />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Nom <span className="required">*</span></label>
                            <input type="text" className="form-input" placeholder="Votre nom" required />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Email professionnel <span className="required">*</span></label>
                            <input type="email" className="form-input" placeholder="prenom.nom@entreprise.fr" required />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Entreprise <span className="required">*</span></label>
                            <input type="text" className="form-input" placeholder="Nom de votre entreprise" required />
                        </div>

                        <div className="form-consent">
                            <input type="checkbox" id="consentDownload" required />
                            <label htmlFor="consentDownload">
                                J'accepte de recevoir le guide NIS2 et les communications de NIS2 Conformité. Politique de confidentialité.
                            </label>
                        </div>

                        <button type="submit" className="popup-submit">
                            📥 Télécharger le guide gratuit
                        </button>
                    </form>

                    <div className="popup-back">
                        <button onClick={() => window.backToChoices()}>← Retour aux options</button>
                    </div>
                </div>
            </div>

            {/* Formulaire Contact */}
            <div className="popup-form" id="contactForm">
                <div className="popup-body">
                    <h3 style={{fontSize: '20px', fontWeight: '700', marginBottom: '20px'}}>📞 Demande d'audit gratuit</h3>
                    
                    <form onSubmit={(e) => { e.preventDefault(); window.submitContact(event) }}>
                        <div className="form-group">
                            <label className="form-label">Prénom <span className="required">*</span></label>
                            <input type="text" className="form-input" placeholder="Votre prénom" required />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Nom <span className="required">*</span></label>
                            <input type="text" className="form-input" placeholder="Votre nom" required />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Email professionnel <span className="required">*</span></label>
                            <input type="email" className="form-input" placeholder="prenom.nom@entreprise.fr" required />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Téléphone <span className="required">*</span></label>
                            <input type="tel" className="form-input" placeholder="06 XX XX XX XX" required />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Entreprise <span className="required">*</span></label>
                            <input type="text" className="form-input" placeholder="Nom de votre entreprise" required />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Nombre de salariés</label>
                            <select className="form-input">
                                <option value="">Sélectionner</option>
                                <option value="1-49">1 à 49</option>
                                <option value="50-99">50 à 99</option>
                                <option value="100-249">100 à 249</option>
                                <option value="250+">250+</option>
                            </select>
                        </div>

                        <div className="form-consent">
                            <input type="checkbox" id="consentContact" required />
                            <label htmlFor="consentContact">
                                J'accepte d'être contacté par NIS2 Conformité pour mon audit gratuit. Politique de confidentialité.
                            </label>
                        </div>

                        <button type="submit" className="popup-submit">
                            📞 Demander mon audit gratuit
                        </button>
                    </form>

                    <div className="popup-back">
                        <button onClick={() => window.backToChoices()}>← Retour aux options</button>
                    </div>
                </div>
            </div>

            {/* Message de succès */}
            <div className="popup-success" id="successMessage">
                <div className="popup-success-icon">✅</div>
                <h3 className="popup-success-title">Merci !</h3>
                <p className="popup-success-message" id="successText"></p>
            </div>
        </div>
    </div>

    {/* QUIZ NIS2 MODAL */}
    <div className="quiz-overlay" id="quizModal">
        <div className="quiz-container">
            <button className="quiz-close" onClick={() => window.closeQuiz()}>×</button>
            
            {/* Header */}
            <div className="quiz-header">
                <div className="quiz-badge">⚡ TEST GRATUIT</div>
                <h2 className="quiz-title">Suis-je concerné par la directive NIS2 ?</h2>
                <p className="quiz-intro">
                    La directive NIS2 ne concerne pas uniquement les grandes entreprises. Ce quiz rapide vous permet de savoir immédiatement si vous entrez dans le périmètre.
                </p>
                <div className="quiz-benefits">
                    <div className="quiz-benefit">✅ Ne pas passer à côté d'une obligation</div>
                    <div className="quiz-benefit">✅ Anticiper les sanctions</div>
                    <div className="quiz-benefit">✅ Prendre les bonnes décisions</div>
                </div>
            </div>

            {/* Progression */}
            <div className="quiz-progress">
                <div className="quiz-progress-bar">
                    <div className="quiz-progress-fill" id="quizProgressBar" style={{width: '0%'}}></div>
                </div>
                <div className="quiz-progress-text" id="quizProgressText">Question 1 sur 10</div>
            </div>

            {/* Questions */}
            <div id="quizQuestions">
                {/* Question 1 */}
                <div className="quiz-question active" data-question="1">
                    <div className="quiz-question-number">Question 1 sur 10</div>
                    <div className="quiz-question-text">Votre entreprise compte-t-elle plus de 50 salariés ?</div>
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

                {/* Question 2 */}
                <div className="quiz-question" data-question="2">
                    <div className="quiz-question-number">Question 2 sur 10</div>
                    <div className="quiz-question-text">Réalisez-vous un chiffre d'affaires supérieur à 10 millions d'euros ?</div>
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

                {/* Question 3 */}
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

                {/* Question 4 */}
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

                {/* Question 5 */}
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

                {/* Question 6 */}
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

                {/* Question 7 */}
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

                {/* Question 8 */}
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

                {/* Question 9 */}
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

                {/* Question 10 */}
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

            {/* Navigation */}
            <div className="quiz-navigation" id="quizNavigation">
                <button className="quiz-btn quiz-btn-prev" onClick={() => window.prevQuestion()} id="quizPrevBtn" style={{display: 'none'}}>
                    ← Précédent
                </button>
                <button className="quiz-btn quiz-btn-next" onClick={() => window.nextQuestion()} id="quizNextBtn" disabled>
                    Suivant →
                </button>
            </div>

            {/* Résultats */}
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
