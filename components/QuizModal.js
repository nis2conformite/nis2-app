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
    description: '<strong>Vigilance recommandée</strong> si vous êtes en croissance ou sous-traitant critique. Même si votre exposition semble faible aujourd\'hui, les évolutions de votre activité peuvent vous faire basculer dans le périmètre NIS2. Un audit de positionnement vous permettra d\'anticiper sereinement.'
  },
  medium: {
    title: 'Vous êtes potentiellement concerné',
    description: '<strong>Un audit de positionnement est fortement recommandé.</strong> Plusieurs critères indiquent que vous pourriez être dans le périmètre de la directive NIS2. Il est essentiel d\'évaluer précisément votre exposition pour éviter des sanctions et transformer cette obligation en avantage commercial.'
  },
  high: {
    title: 'Vous êtes très probablement concerné',
    description: '<strong>Il est urgent d\'agir.</strong> Votre profil correspond clairement aux entités régulées par NIS2. Les contrôles ANSSI démarrent en 2026 et les sanctions peuvent atteindre 10M€. Mais c\'est aussi une opportunité : être conforme vous ouvre l\'accès aux appels d\'offres et renforce votre crédibilité auprès de vos clients.'
  }
};

export const QuizModal = ({ quiz }) => {
  const {
    isOpen,
    currentQuestion,
    answers,
    totalQuestions,
    progress,
    isAnswered,
    closeQuiz,
    selectAnswer,
    nextQuestion,
    prevQuestion,
    calculateScore,
    getScoreLevel
  } = quiz;

  const [showResults, setShowResults] = React.useState(false);
  const score = calculateScore();
  const level = getScoreLevel(score);
  const result = RESULT_CONFIGS[level];

  const handleNext = () => {
    if (currentQuestion === totalQuestions) {
      setShowResults(true);
    } else {
      nextQuestion();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="quiz-overlay active">
      <div className="quiz-container">
        <button className="quiz-close" onClick={closeQuiz}>×</button>
        
        <div className="quiz-header">
          <div className="quiz-badge">⚡ TEST GRATUIT</div>
          <h2 className="quiz-title">Suis-je concerné par la directive NIS2 ?</h2>
          <p className="quiz-intro">
            La directive NIS2 ne concerne pas uniquement les grandes entreprises. 
            Ce quiz rapide vous permet de savoir immédiatement si vous entrez dans le périmètre.
          </p>
          <div className="quiz-benefits">
            <div className="quiz-benefit">✅ Ne pas passer à côté d'une obligation</div>
            <div className="quiz-benefit">✅ Anticiper les sanctions</div>
            <div className="quiz-benefit">✅ Prendre les bonnes décisions</div>
          </div>
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
                    onClick={() => selectAnswer(currentQuestion, answer.toLowerCase())}
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
                onClick={handleNext}
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
            <p className="quiz-result-desc" dangerouslySetInnerHTML={{__html: result.description}} />
            <div className="quiz-result-actions">
              <a 
                href="https://calendly.com/adrien-ruggirello/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="quiz-result-btn primary"
              >
                📅 Diagnostic cyber gratuit
              </a>
              <button 
                onClick={closeQuiz} 
                className="quiz-result-btn secondary"
              >
                Découvrir nos audits
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
