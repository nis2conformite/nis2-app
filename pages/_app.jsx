/* ═══════════════════════════════════════════════════════════
   IMPORTS CSS - ORDRE IMPORTANT
   ═══════════════════════════════════════════════════════════
   1. Variables CSS (tokens de design)
   2. Reset & Tailwind (globals.css)
   3. Styles globaux communs (global.css)
   4. Design principal Artisan (artisan-exact.css)
   5. Styles par page
   ═══════════════════════════════════════════════════════════ */

// 1. Variables CSS - Source de vérité pour les tokens
import '../styles/variables.css';

// 2. Reset, Tailwind et animations
import '../styles/globals.css';

// 3. Styles globaux communs
import '../styles/global.css';

// 4. Design principal Artisan.co
import '../styles/artisan-exact.css';

// 5. Styles spécifiques par page
import '../styles/home.css';
import '../styles/comprendre-nis2.css';
import '../styles/qui-sommes-nous.css';
import '../styles/formations.css';
import '../styles/offres-complementaires.css';
import '../styles/ressources.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
