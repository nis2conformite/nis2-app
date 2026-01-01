import { useState, useEffect, useCallback } from 'react';

export const useLeadPopup = ({ delay = 30000, quizIsOpen, videoIsPlaying }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState('choices'); // 'choices', 'download', 'contact', 'success'
  const [successMessage, setSuccessMessage] = useState('');
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasShown && !quizIsOpen && !videoIsPlaying) {
        setIsOpen(true);
        setHasShown(true);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, hasShown, quizIsOpen, videoIsPlaying]);

  const closePopup = useCallback(() => {
    setIsOpen(false);
    setTimeout(() => {
      setView('choices');
    }, 300);
  }, []);

  const selectOption = useCallback((type) => {
    setView(type);
  }, []);

  const backToChoices = useCallback(() => {
    setView('choices');
  }, []);

  const handleDownloadSubmit = useCallback((formData) => {
    console.log('Download form:', formData);
    
    // Télécharger le fichier
    const googleDriveLink = 'https://drive.google.com/uc?export=download&id=1mZp7x8nMrbVWUVwq8LMW-f1fEKepCr2u';
    window.open(googleDriveLink, '_blank');
    
    // Afficher succès
    setSuccessMessage("✅ Téléchargement lancé ! Le guide NIS2 devrait s'ouvrir dans un nouvel onglet.");
    setView('success');
    
    // Fermer après 5 secondes
    setTimeout(() => {
      closePopup();
    }, 5000);
  }, [closePopup]);

  const handleContactSubmit = useCallback((formData) => {
    console.log('Contact form:', formData);
    
    setSuccessMessage("Demande reçue ! Un de nos experts vous contactera dans les prochaines heures pour planifier votre audit gratuit.");
    setView('success');
    
    setTimeout(() => {
      closePopup();
    }, 5000);
  }, [closePopup]);

  return {
    isOpen,
    view,
    successMessage,
    closePopup,
    selectOption,
    backToChoices,
    handleDownloadSubmit,
    handleContactSubmit
  };
};
