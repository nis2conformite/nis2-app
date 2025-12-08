// components/StripeButton.jsx
import { useState } from 'react';

export default function StripeButton({ price = '497€' }) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleCheckout = async () => {
    if (!email) {
      alert('Veuillez entrer votre email');
      return;
    }

    setLoading(true);

    try {
      // Appeler l'API pour créer la session Stripe
      const response = await fetch('/api/stripe/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerEmail: email,
          customerName: name,
        }),
      });

      const data = await response.json();

      if (data.url) {
        // Rediriger vers Stripe Checkout
        window.location.href = data.url;
      } else {
        throw new Error('Pas de URL de redirection');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de la création de la session de paiement');
      setLoading(false);
    }
  };

  if (!showForm) {
    return (
      <button
        onClick={() => setShowForm(true)}
        className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
      >
        Acheter maintenant - {price}
      </button>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <h3 className="text-xl font-bold mb-4">Informations de commande</h3>
      
      <input
        type="text"
        placeholder="Votre nom complet"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border border-gray-300 rounded px-4 py-2 mb-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      
      <input
        type="email"
        placeholder="Votre email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      
      <button
        onClick={handleCheckout}
        disabled={loading}
        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {loading ? 'Redirection vers le paiement...' : `Payer ${price}`}
      </button>
      
      <button
        onClick={() => setShowForm(false)}
        className="w-full mt-2 text-gray-600 hover:text-gray-800 py-2"
      >
        Annuler
      </button>
      
      <div className="mt-4 text-xs text-gray-500 text-center">
        <p>🔒 Paiement sécurisé par Stripe</p>
      </div>
    </div>
  );
}
