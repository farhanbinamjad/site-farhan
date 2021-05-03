import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Projects from './components/Projects';
import Summary from './components/Summary';


function Home() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Summary/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default Home;
