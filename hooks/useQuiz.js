import { useState, useCallback } from 'react';

export const useQuiz = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState({});
  
  const totalQuestions = 10;

  const openQuiz = useCallback(() => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeQuiz = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
    // Reset après fermeture
    setTimeout(() => {
      setCurrentQuestion(1);
      setAnswers({});
    }, 300);
  }, []);

  const selectAnswer = useCallback((questionNum, answer) => {
    setAnswers(prev => ({ ...prev, [questionNum]: answer }));
  }, []);

  const nextQuestion = useCallback(() => {
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(prev => prev + 1);
    }
  }, [currentQuestion, totalQuestions]);

  const prevQuestion = useCallback(() => {
    if (currentQuestion > 1) {
      setCurrentQuestion(prev => prev - 1);
    }
  }, [currentQuestion]);

  const calculateScore = useCallback(() => {
    let score = 0;
    for (let i = 1; i <= 7; i++) {
      if (answers[i] === 'oui') score++;
    }
    return score;
  }, [answers]);

  const getScoreLevel = useCallback((score) => {
    if (score <= 3) return 'low';
    if (score <= 6) return 'medium';
    return 'high';
  }, []);

  const progress = (currentQuestion / totalQuestions) * 100;
  const isAnswered = !!answers[currentQuestion];

  return {
    isOpen,
    currentQuestion,
    answers,
    totalQuestions,
    progress,
    isAnswered,
    openQuiz,
    closeQuiz,
    selectAnswer,
    nextQuestion,
    prevQuestion,
    calculateScore,
    getScoreLevel
  };
};
