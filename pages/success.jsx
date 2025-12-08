import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function SuccessPage() {
  const router = useRouter();
  const { session_id } = router.query;
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
      <div className="text-center bg-white p-8 rounded-2xl shadow-xl max-w-md">
        <div className="text-6xl mb-4">✅</div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Paiement réussi !
        </h1>
        <p className="text-gray-600 mb-6">
          Merci pour votre achat ! Vous allez recevoir un email avec le lien d'accès à votre audit dans quelques instants.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <p className="text-sm text-gray-700">
            📧 Vérifiez votre boîte mail (et vos spams)
          </p>
        </div>
        <p className="text-sm text-gray-500">
          Redirection vers l'accueil dans {countdown}s...
        </p>
        <button
          onClick={() => router.push('/')}
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Retour à l'accueil
        </button>
      </div>
    </div>
  );
}