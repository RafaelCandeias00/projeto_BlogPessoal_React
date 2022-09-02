import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import Footer from './compenents/estaticos/footer/Footer';
import Navbar from './compenents/estaticos/navbar/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes> // Antigo Switch
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          {/*<Route path="/cadastro" element={<CadastroUsuario />} />*/}
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App;
