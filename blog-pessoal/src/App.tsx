import React from 'react';
import Home from './paginas/home/Home';
import Footer from './compenents/estaticos/footer/Footer';
import Navbar from './compenents/estaticos/navbar/Navbar';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
