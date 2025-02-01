import './App.css';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import Skills from './components/skills/skills';
import AboutUs from './components/about us/aboust';
import Pricing from './components/pricing/pricing';
import ContactUs from './components/contact us/contacts';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Skills/>
      <AboutUs/>
      <Pricing/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
