import './App.css';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import OurCompany from './components/OurCompany/OurCompany';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <OurCompany />
      <Footer />
    </div>
  );
}

export default App;
