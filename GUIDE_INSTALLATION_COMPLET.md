# 🚀 GUIDE COMPLET D'INSTALLATION ET CODE RESTANT

## 📦 FICHIERS DÉJÀ CRÉÉS
✅ .env.local.example
✅ package.json  
✅ lib/supabase.js
✅ lib/stripe.js
✅ lib/resend.js
✅ pages/api/stripe/create-checkout.js
✅ pages/api/stripe/webhook.js
✅ pages/api/audit/update.js

---

## 🔧 INSTALLATION ÉTAPE PAR ÉTAPE

### 1. Installer Node.js (si pas déjà fait)
- Allez sur https://nodejs.org
- Téléchargez la version LTS (20.x)
- Installez-le (suivez l'assistant)
- Vérifiez l'installation :
```bash
node --version
npm --version
```

### 2. Créer votre projet
```bash
# Créer un dossier
mkdir audit-nis2-app
cd audit-nis2-app

# Initialiser Next.js
npx create-next-app@latest . --typescript --tailwind --app-router --no-src-dir
```

### 3. Copier tous les fichiers que j'ai créés
- Copiez tous les fichiers dans les bons dossiers
- Créez le fichier .env.local depuis .env.local.example
- Remplacez toutes les valeurs par vos vraies clés

### 4. Installer les dépendances
```bash
npm install
```

### 5. Lancer en local
```bash
npm run dev
```

→ Ouvrez http://localhost:3000

---

## 💻 CODE DU COMPOSANT STRIPE BUTTON

Créer : `components/StripeButton.jsx`

```jsx
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

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

      const { url } = await response.json();

      // Rediriger vers Stripe Checkout
      window.location.href = url;
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
        className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-700 transition-colors"
      >
        Acheter maintenant - {price}
      </button>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
      <h3 className="text-xl font-bold mb-4">Informations de commande</h3>
      
      <input
        type="text"
        placeholder="Votre nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border border-gray-300 rounded px-4 py-2 mb-3"
      />
      
      <input
        type="email"
        placeholder="Votre email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
      />
      
      <button
        onClick={handleCheckout}
        disabled={loading}
        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors disabled:bg-gray-400"
      >
        {loading ? 'Chargement...' : `Payer ${price}`}
      </button>
      
      <button
        onClick={() => setShowForm(false)}
        className="w-full mt-2 text-gray-600 hover:text-gray-800"
      >
        Annuler
      </button>
    </div>
  );
}
```

---

## 📱 CODE DE LA PAGE CLIENT (Interface audit via lien)

Créer : `pages/audit/[token].jsx`

```jsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../../lib/supabase';
import AuditInterface from '../../components/AuditInterface';

export default function ClientAuditPage() {
  const router = useRouter();
  const { token } = router.query;
  const [audit, setAudit] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (token) {
      loadAudit();
    }
  }, [token]);

  async function loadAudit() {
    try {
      const { data, error } = await supabase
        .from('audits')
        .select('*')
        .eq('unique_token', token)
        .single();

      if (error) throw error;
      
      if (!data) {
        setError('Audit non trouvé');
        return;
      }

      setAudit(data);
    } catch (err) {
      console.error('Erreur chargement:', err);
      setError('Impossible de charger l\'audit');
    } finally {
      setLoading(false);
    }
  }

  async function handleUpdate(updates) {
    try {
      const response = await fetch('/api/audit/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token: token,
          updates: updates,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setAudit(result.audit);
      }
    } catch (error) {
      console.error('Erreur mise à jour:', error);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement de votre audit...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-xl mb-4">{error}</p>
          <button
            onClick={() => router.push('/')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    );
  }

  return (
    <AuditInterface
      audit={audit}
      onUpdateAudit={(auditId, updates) => handleUpdate(updates)}
      onBack={() => router.push('/')}
      isClientView={true}
    />
  );
}
```

---

## 🏠 CODE DE LA LANDING PAGE

Créer : `pages/index.jsx`

```jsx
import StripeButton from '../components/StripeButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Audit de Conformité NIS2
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Évaluez votre conformité aux exigences de cybersécurité NIS2
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Ce que vous obtenez
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start space-x-3">
              <div className="text-green-500 text-2xl">✓</div>
              <div>
                <h3 className="font-bold mb-1">Évaluation complète</h3>
                <p className="text-gray-600">65 points de contrôle couvrant tous les articles NIS2</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="text-green-500 text-2xl">✓</div>
              <div>
                <h3 className="font-bold mb-1">Interface en ligne</h3>
                <p className="text-gray-600">Accès sécurisé pour remplir votre audit</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="text-green-500 text-2xl">✓</div>
              <div>
                <h3 className="font-bold mb-1">Upload de documents</h3>
                <p className="text-gray-600">Joignez vos pièces justificatives</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="text-green-500 text-2xl">✓</div>
              <div>
                <h3 className="font-bold mb-1">Rapport PDF automatique</h3>
                <p className="text-gray-600">Généré instantanément à la fin</p>
              </div>
            </div>
          </div>

          <div className="text-center bg-blue-50 rounded-lg p-6 mb-8">
            <div className="text-4xl font-bold text-blue-600 mb-2">497€</div>
            <div className="text-gray-600">Paiement unique - Accès immédiat</div>
          </div>

          <div className="text-center">
            <StripeButton price="497€" />
          </div>
        </div>

        <div className="text-center text-sm text-gray-500">
          <p>Paiement sécurisé par Stripe • Données chiffrées • Conformité RGPD</p>
        </div>
      </div>
    </div>
  );
}
```

---

## 🔐 IMPORTANT : Configuration Stripe CLI pour les tests

Pour tester les webhooks en local :

```bash
# Installer Stripe CLI
# Windows : télécharger depuis https://github.com/stripe/stripe-cli/releases

# Se connecter
stripe login

# Écouter les webhooks en local
stripe listen --forward-to localhost:3000/api/stripe/webhook

# Cette commande vous donne un webhook secret (whsec_...)
# Copiez-le dans votre .env.local
```

---

## ✅ CHECKLIST DE TEST

### 1. Test du paiement
- [ ] Aller sur http://localhost:3000
- [ ] Cliquer sur "Acheter maintenant"
- [ ] Utiliser la carte test : 4242 4242 4242 4242
- [ ] Vérifier redirection Stripe
- [ ] Compléter le paiement

### 2. Vérifier la création de l'audit
- [ ] Aller dans Supabase → Table Editor → audits
- [ ] Voir le nouvel audit créé
- [ ] Vérifier que payment_status = 'paid'

### 3. Vérifier l'email
- [ ] Checker votre boîte mail
- [ ] Ouvrir l'email reçu
- [ ] Cliquer sur le lien d'accès

### 4. Remplir l'audit
- [ ] Interface d'audit s'affiche
- [ ] Remplir quelques questions
- [ ] Vérifier sauvegarde automatique dans Supabase

### 5. Test complet
- [ ] Remplir les 65 questions
- [ ] Vérifier génération PDF (à implémenter)
- [ ] Vérifier réception email avec PDF

---

## 📝 NOTES IMPORTANTES

1. **Le code de génération PDF** nécessite Puppeteer (installé dans package.json)
2. **L'interface AuditInterface** existe déjà dans votre code précédent
3. **Le backoffice admin** peut utiliser le Dashboard existant connecté à Supabase
4. **Les documents uploadés** vont dans Supabase Storage

---

## 🆘 EN CAS DE PROBLÈME

### Webhook ne fonctionne pas
```bash
# Vérifier les logs
stripe listen --forward-to localhost:3000/api/stripe/webhook --log-level debug
```

### Email ne part pas
- Vérifier RESEND_API_KEY dans .env.local
- Vérifier les logs dans Resend Dashboard
- Vérifier que l'email destinataire est celui du compte Resend

### Audit ne se crée pas
- Vérifier tables Supabase
- Vérifier Row Level Security policies
- Vérifier logs du webhook

---

## 📞 PROCHAINES ÉTAPES

1. ✅ Installer Node.js
2. ✅ Créer le projet
3. ✅ Copier tous les fichiers
4. ✅ Configurer .env.local
5. ✅ npm install
6. ✅ npm run dev
7. ✅ Tester le workflow complet

**Vous êtes prêt à démarrer ! 🚀**
