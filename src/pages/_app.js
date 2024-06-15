import '@/styles/globals.css'
import '@/styles/checkbox_radio_bootstrap.css'
import '@/styles/chatbot.css';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => storePathValues, [router.asPath]);
  function storePathValues() {
    const storage = globalThis?.sessionStorage;
    if (!storage) return;
    // Set the previous path as the value of the current path.
    const prevPath = storage.getItem("currentPath");
    storage.setItem("prevPath", prevPath);
    // Set the current path value by looking at the browser's location object.
    storage.setItem("currentPath", globalThis.location.pathname);
  }
  return (
    <>
      <Head>
        <title>{Component.title}</title>
      </Head>
      {Component.getLayout ? (
        Component.getLayout(<Component {...pageProps} />)
      ) : (
        <>
          <Navbar />
          <div className='min-h-screen max-w-screen bg-white'>
            <Component {...pageProps} />
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
