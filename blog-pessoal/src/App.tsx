import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Footer from './compenents/estaticos/footer/Footer';
import Navbar from './compenents/estaticos/navbar/Navbar';
import './App.css';
import ListaTema from './compenents/temas/listatema/ListaTema';
import ListaPostagem from './compenents/postagens/listapostagem/ListaPostagem';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes> // Antigo Switch
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />
          <Route path="/temas" element={<ListaTema />} />
          <Route path="/posts" element={<ListaPostagem />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App;
