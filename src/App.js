import './index.css';
import Info from './components/Info';
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';
import End from './assets/End';

function App() {
  return (
    <div className='App'>
      <div>    
      <Info />
      <About />
      <Interests />
      <Footer />
      <End />
      </div>
    </div>
  );
}

export default App;
