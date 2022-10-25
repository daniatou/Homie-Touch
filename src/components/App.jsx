import './App.css';

import Header from './header/header';
import Baniere from './banieres/Baniere'
import About from './About/About'
import Service from './service/service'

function App() {
  return (
    <div className="App">
      <Header />
      <Baniere />
      <About />
      <Service />
    </div>
  );
}

export default App;
