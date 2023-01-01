import React from 'react';
import './App.css';
import AccordionTitle from "./components/AccordionTitle";
import AccordionBody from "./components/AccordionBody";
import Rating from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";

function App() {
  return (
    <div className="App">

        <Accordion collapsed={false}/>
        <Rating value={3}/>
        <Rating value={4}/>
        <Rating value={5}/>
    </div>
  );
}

export default App;
