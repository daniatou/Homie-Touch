import './App.css';

import Header from './header/header';
import Baniere from './banieres/Baniere'
import About from './About/About'
import Service from './service/service'
import OurServices from './OurServices/OurServices';

function App() {
  return (
    <div className="App">
      <Header />
      <Baniere />
      <About />
      <Service />
      <OurServices />
    </div>
  );
}

export default App;
