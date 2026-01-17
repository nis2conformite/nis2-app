import { useState, useEffect, useCallback } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "L'audit NIS2 nous a permis d'identifier nos vulnérabilités critiques. Résultat : conformité obtenue et appel d'offres remporté.",
    name: "Marc Dubois",
    role: "CEO",
    company: "TechManufacture",
    rating: 5
  },
  {
    id: 2,
    quote: "Grâce à l'accompagnement expert, nous avons transformé notre conformité NIS2 en véritable avantage compétitif. Nos clients nous font confiance.",
    name: "Sophie Martin",
    role: "RSSI",
    company: "DataSecure",
    rating: 5
  },
  {
    id: 3,
    quote: "La méthodologie structurée nous a permis de passer de 12% à 87% de conformité en 6 mois. Un accompagnement remarquable.",
    name: "Thomas Leroy",
    role: "CTO",
    company: "CloudVision",
    rating: 5
  },
  {
    id: 4,
    quote: "Le rapport détaillé a convaincu nos investisseurs. La conformité NIS2 est devenue un argument de vente.",
    name: "Laurent P.",
    role: "CEO",
    company: "Startup Tech",
    rating: 5
  },
  {
    id: 5,
    quote: "NIS2 nous a ouvert les portes de nouveaux marchés. +30% de clients B2B en 6 mois grâce à notre certification.",
    name: "Isabelle R.",
    role: "Directrice",
    company: "PME Industrielle",
    rating: 5
  }
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const getVisibleTestimonials = () => {
    const prev = (currentIndex - 1 + testimonials.length) % testimonials.length;
    const next = (currentIndex + 1) % testimonials.length;
    return { prev, current: currentIndex, next };
  };

  const { prev, current, next } = getVisibleTestimonials();

  return (
    <div className="carousel-container">
      {/* Flèche gauche */}
      <button
        className="carousel-arrow carousel-arrow-left"
        onClick={prevSlide}
        aria-label="Témoignage précédent"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Conteneur des slides */}
      <div className="carousel-track-wrapper">
        <div className="carousel-track">
          {/* Carte précédente (gauche) */}
          <div className="carousel-slide carousel-slide-prev">
            <div className="testimonial-card-carousel">
              <div className="testimonial-quote-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11 7.5C11 9.43 9.43 11 7.5 11S4 9.43 4 7.5 5.57 4 7.5 4 11 5.57 11 7.5zm0 0c0 4.5-1.5 8-6 10.5M20 7.5C20 9.43 18.43 11 16.5 11S13 9.43 13 7.5 14.57 4 16.5 4 20 5.57 20 7.5zm0 0c0 4.5-1.5 8-6 10.5"/>
                </svg>
              </div>
              <p className="testimonial-quote-text">{testimonials[prev].quote}</p>
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="star-icon">★</span>
                ))}
              </div>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {testimonials[prev].name.charAt(0)}
                </div>
                <div className="testimonial-info">
                  <div className="testimonial-name">{testimonials[prev].name}</div>
                  <div className="testimonial-role">{testimonials[prev].role}, {testimonials[prev].company}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Carte active (centre) */}
          <div className="carousel-slide carousel-slide-active">
            <div className="testimonial-card-carousel testimonial-card-active">
              <div className="testimonial-quote-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11 7.5C11 9.43 9.43 11 7.5 11S4 9.43 4 7.5 5.57 4 7.5 4 11 5.57 11 7.5zm0 0c0 4.5-1.5 8-6 10.5M20 7.5C20 9.43 18.43 11 16.5 11S13 9.43 13 7.5 14.57 4 16.5 4 20 5.57 20 7.5zm0 0c0 4.5-1.5 8-6 10.5"/>
                </svg>
              </div>
              <p className="testimonial-quote-text">{testimonials[current].quote}</p>
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="star-icon">★</span>
                ))}
              </div>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {testimonials[current].name.charAt(0)}
                </div>
                <div className="testimonial-info">
                  <div className="testimonial-name">{testimonials[current].name}</div>
                  <div className="testimonial-role">{testimonials[current].role}, {testimonials[current].company}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Carte suivante (droite) */}
          <div className="carousel-slide carousel-slide-next">
            <div className="testimonial-card-carousel">
              <div className="testimonial-quote-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11 7.5C11 9.43 9.43 11 7.5 11S4 9.43 4 7.5 5.57 4 7.5 4 11 5.57 11 7.5zm0 0c0 4.5-1.5 8-6 10.5M20 7.5C20 9.43 18.43 11 16.5 11S13 9.43 13 7.5 14.57 4 16.5 4 20 5.57 20 7.5zm0 0c0 4.5-1.5 8-6 10.5"/>
                </svg>
              </div>
              <p className="testimonial-quote-text">{testimonials[next].quote}</p>
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="star-icon">★</span>
                ))}
              </div>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {testimonials[next].name.charAt(0)}
                </div>
                <div className="testimonial-info">
                  <div className="testimonial-name">{testimonials[next].name}</div>
                  <div className="testimonial-role">{testimonials[next].role}, {testimonials[next].company}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flèche droite */}
      <button
        className="carousel-arrow carousel-arrow-right"
        onClick={nextSlide}
        aria-label="Témoignage suivant"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Points de pagination */}
      <div className="carousel-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'carousel-dot-active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Aller au témoignage ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
