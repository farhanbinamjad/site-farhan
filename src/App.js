import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Footer from './components/Footer';

import Navbar from './components/Navbar';
import Contactpg from './Contactpg';

import Home from './Home';
import Portfolio from './Portfolio';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
    <Route exact path="/" component={Home}/>
    <Route exact path="/contact" component={Contactpg}/>
    <Route exact path="/portfolio" component={Portfolio}/>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
