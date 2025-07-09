// pages/_app.js
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="main-content">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;