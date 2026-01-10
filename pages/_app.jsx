import '../styles/globals.css';
import '../styles/home.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Google Fonts - Inter */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
        
        {/* Viewport meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
