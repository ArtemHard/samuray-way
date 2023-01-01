import React from 'react';
import './App.css';
import Star from "./components/Star";
import AccordionTitle from "./components/AccordionTitle";
import AccordionBody from "./components/AccordionBody";

function App() {
  return (
    <div className="App">
        <AccordionTitle />
        <AccordionBody />
    </div>
  );
}

export default App;
