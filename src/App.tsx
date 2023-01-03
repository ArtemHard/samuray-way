import React from "react";
import "./App.css";
import AccordionTitle from "./components/AccordionTitle";
import AccordionBody from "./components/AccordionBody";
import Rating from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import { Header } from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/NavBar";
import { Profile } from "./components/Profile/Profile";

function App() {
  return (
    <div className="app-wrapper">
     
     <Header />
     <NavBar />
      <Profile />
      {/* <Accordion collapsed={false}/>
        <Rating value={3}/>
        <Rating value={4}/>
        <Rating value={5}/>
        <Footer /> */}
    </div>
  );
}

export default App;
