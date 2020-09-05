import React from 'react';
import './App.css';
import Nav from  "./Components/Nav";
import About from "./Components/About";
import Service from "./Components/Service";
import Hero from "./Components/Hero";
import Price from "./Components/Price";
import Contact from "./Components/Contact";


function App() {
  return (
    <div className="App">
     <Nav />
     <Service />
     <About />
     <Hero />
     <Price />
     <Contact />

    </div>
  );
}

export default App;
