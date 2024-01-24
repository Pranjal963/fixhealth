import './App.css';
import BookingForm from './Components/BookingForm/BokkingForm';
import Card from './Components/Card/Card';
import ClientSection from './Components/ClientSection.js/ClientSection';
import Footer from './Components/Footer/Footer';
import Hero from './Components/HeroPage/Hero';
import Navbar from './Components/Navbar/Navbar';
import RegForm from './Components/RegistrationForm/RegForm';

function App() {
  return (
    <div className="App">
<Hero/>
<ClientSection/>
<Footer/>
    </div>
  );
}

export default App;
