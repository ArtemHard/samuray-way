import React from 'react';
import './App.css';
import AccordionTitle from "./components/AccordionTitle";
import AccordionBody from "./components/AccordionBody";
import Rating from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import { Header } from './Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <header className='header'>
        <img src="https://w7.pngwing.com/pngs/452/495/png-transparent-react-javascript-angularjs-ionic-github-text-logo-symmetry-thumbnail.png" alt="react logo" />
      </header>
      <nav>
        <div>
          Profile
        </div>
        <div>
          Messages
        </div>
        <div>
          Main Content
        </div>
      </nav>
        {/* <Accordion collapsed={false}/>
        <Rating value={3}/>
        <Rating value={4}/>
        <Rating value={5}/>
        <Footer /> */}
    </div>
  );
}

export default App;
