import React from 'react';

const QUESTIONS = [
  {
    id: 1,
    text: "Votre entreprise compte-t-elle plus de 50 salariés ?",
    answers: ['Oui', 'Non']
  },
  {
    id: 2,
    text: "Réalisez-vous un chiffre d'affaires supérieur à 10 millions d'euros ?",
    answers: ['Oui', 'Non']
  },
  {
    id: 3,
    text: "Êtes-vous actif dans l'un des secteurs critiques : santé, énergie, eau, transport, numérique, administration publique, agroalimentaire ?",
    answers: ['Oui', 'Non']
  },
  {
    id: 4,
    text: "Fournissez-vous des services numériques critiques (hébergement, cloud, DNS, SaaS, etc.) ?",
    answers: ['Oui', 'Non']
  },
  {
    id: 5,
    text: "Avez-vous un rôle de sous-traitant dans la chaîne de valeur d'un acteur critique ?",
    answers: ['Oui', 'Non']
  },
  {
    id: 6,
    text: "Traitez-vous des données sensibles ou critiques (données de santé, infrastructures, systèmes industriels) ?",
    answers: ['Oui', 'Non']
  },
  {
    id: 7,
    text: "Avez-vous été victime d'un incident ou d'une tentative de cyberattaque dans les 12 derniers mois ?",
    answers: ['Oui', 'Non']
  },
  {
    id: 8,
    text: "Disposez-vous d'une politique formalisée de sécurité des systèmes d'information ?",
    answers: ['Oui', 'Non']
  },
  {
    id: 9,
    text: "Avez-vous une personne ou un prestataire en charge de la cybersécurité ?",
    answers: ['Oui', 'Non']
  },
  {
    id: 10,
    text: "Votre entreprise a-t-elle déjà mis en place un plan de continuité ou de gestion de crise informatique ?",
    answers: ['Oui', 'Non']
  }
];

const RESULT_CONFIGS = {
  low: {
    title: 'Faible exposition probable',
    description: 'Vigilance recommandée si vous êtes en croissance ou sous-traitant critique.'
  },
  medium: {
    title: 'Vous êtes potentiellement concerné',
    description: 'Un audit de positionnement est fortement recommandé.'
  },
  high: {
    title: 'Vous êtes très probablement concerné',
    description: 'Il est urgent d\'agir. Les contrôles ANSSI démarrent en 2026.'
  }
};

export function QuizModal({ quiz }) {
  const [currentQuestion, setCurrentQuestion] = React.useState(1);
  const [answers, setAnswers] = React.useState({});
  const [showResults, setShowResults] = React.useState(false);
  
  if (!quiz || !quiz.isOpen) return null;

  const totalQuestions = 10;
  const progress = (currentQuestion / totalQuestions) * 100;
  const isAnswered = !!answers[currentQuestion];

  const selectAnswer = (answer) => {
    setAnswers(prev => ({ ...prev, [currentQuestion]: answer }));
  };

  const nextQuestion = () => {
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const calculateScore = () => {
    let score = 0;
    for (let i = 1; i <= 7; i++) {
      if (answers[i] === 'oui') score++;
    }
    return score;
  };

  const getLevel = (score) => {
    if (score <= 3) return 'low';
    if (score <= 6) return 'medium';
    return 'high';
  };

  const handleClose = () => {
    setCurrentQuestion(1);
    setAnswers({});
    setShowResults(false);
    quiz.closeQuiz();
  };

  const score = calculateScore();
  const level = getLevel(score);
  const result = RESULT_CONFIGS[level];

  return (
    <div className="quiz-overlay active" onClick={(e) => {
      if (e.target.className === 'quiz-overlay active') handleClose();
    }}>
      <div className="quiz-container">
        <button className="quiz-close" onClick={handleClose}>×</button>
        
        <div className="quiz-header">
          <div className="quiz-badge">⚡ TEST GRATUIT</div>
          <h2 className="quiz-title">Suis-je concerné par la directive NIS2 ?</h2>
          <p className="quiz-intro">
            Ce quiz rapide vous permet de savoir immédiatement si vous entrez dans le périmètre.
          </p>
        </div>

        {!showResults ? (
          <>
            <div className="quiz-progress">
              <div className="quiz-progress-bar">
                <div className="quiz-progress-fill" style={{width: `${progress}%`}}></div>
              </div>
              <div className="quiz-progress-text">
                Question {currentQuestion} sur {totalQuestions}
              </div>
            </div>

            <div className="quiz-question active">
              <div className="quiz-question-number">
                Question {currentQuestion} sur {totalQuestions}
              </div>
              <div className="quiz-question-text">
                {QUESTIONS[currentQuestion - 1].text}
              </div>
              <div className="quiz-answers">
                {QUESTIONS[currentQuestion - 1].answers.map((answer) => (
                  <div
                    key={answer}
                    className={`quiz-answer ${answers[currentQuestion] === answer.toLowerCase() ? 'selected' : ''}`}
                    onClick={() => selectAnswer(answer.toLowerCase())}
                  >
                    <div className="quiz-answer-radio"></div>
                    <div className="quiz-answer-text">{answer}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="quiz-navigation">
              {currentQuestion > 1 && (
                <button className="quiz-btn quiz-btn-prev" onClick={prevQuestion}>
                  ← Précédent
                </button>
              )}
              <button 
                className="quiz-btn quiz-btn-next" 
                onClick={nextQuestion}
                disabled={!isAnswered}
                style={{marginLeft: currentQuestion === 1 ? 'auto' : '0'}}
              >
                {currentQuestion === totalQuestions ? 'Voir mon résultat 🎯' : 'Suivant →'}
              </button>
            </div>
          </>
        ) : (
          <div className="quiz-results active">
            <div className={`quiz-score-circle ${level}`}>
              <span>{score}</span>
              <div className="quiz-score-label">/10</div>
            </div>
            <h3 className="quiz-result-title">{result.title}</h3>
            <p className="quiz-result-desc">{result.description}</p>
            <div className="quiz-result-actions">
              <a
                href="https://calendly.com/nis2conformite/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="quiz-result-btn primary"
              >
                Diagnostic cyber gratuit
              </a>
              <button 
                onClick={handleClose} 
                className="quiz-result-btn secondary"
              >
                Fermer
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
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
          margin: 20px auto;
        }

        .quiz-close {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #EFF1F5;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          color: #091E42;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .quiz-close:hover {
          background: #FF5630;
          color: white;
          transform: rotate(90deg);
        }

        .quiz-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .quiz-badge {
          display: inline-block;
          background: linear-gradient(135deg, #FF5630 0%, #d63b1f 100%);
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
          color: #091E42;
          margin-bottom: 12px;
          line-height: 1.2;
        }

        .quiz-intro {
          font-size: 15px;
          color: #505F79;
          line-height: 1.6;
        }

        .quiz-progress {
          margin-bottom: 32px;
        }

        .quiz-progress-bar {
          width: 100%;
          height: 8px;
          background: #EFF1F5;
          border-radius: 20px;
          overflow: hidden;
          margin-bottom: 8px;
        }

        .quiz-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #0052CC 0%, #FF5630 100%);
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 20px;
        }

        .quiz-progress-text {
          font-size: 13px;
          color: #8993A4;
          text-align: center;
          font-weight: 600;
        }

        .quiz-question-number {
          font-size: 13px;
          font-weight: 700;
          color: #0052CC;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 12px;
        }

        .quiz-question-text {
          font-size: 20px;
          font-weight: 700;
          color: #091E42;
          margin-bottom: 24px;
          line-height: 1.4;
        }

        .quiz-answers {
          display: grid;
          gap: 12px;
          margin-bottom: 24px;
        }

        .quiz-answer {
          border: 2px solid #DFE1E6;
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
          border-color: #0052CC;
          background: #F7F8FC;
          transform: translateX(4px);
        }

        .quiz-answer.selected {
          border-color: #0052CC;
          background: linear-gradient(135deg, rgba(0, 82, 204, 0.05) 0%, rgba(0, 82, 204, 0.02) 100%);
          box-shadow: 0 4px 16px rgba(0, 82, 204, 0.15);
        }

        .quiz-answer-radio {
          width: 24px;
          height: 24px;
          border: 2px solid #DFE1E6;
          border-radius: 50%;
          flex-shrink: 0;
          position: relative;
          transition: all 0.3s ease;
        }

        .quiz-answer.selected .quiz-answer-radio {
          border-color: #0052CC;
          background: #0052CC;
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
          color: #091E42;
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
          background: #EFF1F5;
          color: #091E42;
        }

        .quiz-btn-prev:hover {
          background: #DFE1E6;
        }

        .quiz-btn-next {
          background: linear-gradient(135deg, #0052CC 0%, #003D99 100%);
          color: white;
          box-shadow: 0 4px 16px rgba(0, 82, 204, 0.3);
          margin-left: auto;
        }

        .quiz-btn-next:not(:disabled):hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 82, 204, 0.4);
        }

        .quiz-btn-next:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .quiz-results {
          text-align: center;
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
          background: linear-gradient(135deg, #00875A 0%, #10b759 100%);
        }

        .quiz-score-circle.medium {
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
        }

        .quiz-score-circle.high {
          background: linear-gradient(135deg, #FF5630 0%, #d63b1f 100%);
        }

        .quiz-score-label {
          font-size: 14px;
          font-weight: 600;
          margin-top: -8px;
        }

        .quiz-result-title {
          font-size: 28px;
          font-weight: 800;
          color: #091E42;
          margin-bottom: 12px;
        }

        .quiz-result-desc {
          font-size: 16px;
          color: #505F79;
          line-height: 1.6;
          margin-bottom: 32px;
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
          background: linear-gradient(135deg, #0052CC 0%, #003D99 100%);
          color: white;
          box-shadow: 0 4px 16px rgba(0, 82, 204, 0.3);
        }

        .quiz-result-btn.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 82, 204, 0.4);
        }

        .quiz-result-btn.secondary {
          background: white;
          color: #0052CC;
          border: 2px solid #0052CC;
        }

        .quiz-result-btn.secondary:hover {
          background: #F7F8FC;
        }

        @media (max-width: 640px) {
          .quiz-container {
            padding: 28px 20px;
          }
          
          .quiz-title {
            font-size: 22px;
          }
        }
      `}</style>
    </div>
  );
}
