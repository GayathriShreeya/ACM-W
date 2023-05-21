import Navbar from '../components/Navbar';
import '../styles/globals.css';
import Footer from '../components/Footer';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-[#8CC0DE]/30">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
