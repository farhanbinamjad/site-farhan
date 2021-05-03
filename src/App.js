import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Summary from './components/Summary';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Summary/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
