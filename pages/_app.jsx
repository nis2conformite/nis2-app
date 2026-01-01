import '../styles/globals.css';  // ✅ Import CSS global ici

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
