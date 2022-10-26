import './App.css';

import Header from './header/header';
import Baniere from './banieres/Baniere'
import About from './About/About'
import Service from './service/service'
import OurServices from './OurServices/OurServices';
import Contact from './contact/Contact';
import Footer from './footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Baniere />
      <About />
      <Service />
      <OurServices />
      <Contact />
      <Footer />
    </div>
  );
} 

export default App;
