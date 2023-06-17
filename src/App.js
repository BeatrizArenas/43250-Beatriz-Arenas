import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Menu from './components/Menu';
import Footer from './components/Footer';

// import pages

import AlimentacionPage from './pages/AlimentacionPage';
import HigienePage from './pages/HigienePage';
import HomePage from './pages/HomePage';
import JuguetesPage from './pages/JuguetesPage';
import ContactoPage from './pages/ContactoPage';
import Productospage from './pages/ProductosPage';

const App = () => {
  return(
    <div className='container'>
      <Menu />
      <Router>
      <Routes>
         <Route path='/' element={ <HomePage /> } />
         <Route path='/alimentacion' element={ <AlimentacionPage /> } />
         <Route path='/higiene' element={ <HigienePage /> } />
         <Route path='/juguetes' element={ <JuguetesPage /> } />
         <Route path='/contacto' element={ <ContactoPage /> } />
         <Route path='/productos' element={ <Productospage /> } />
      </Routes>
    </Router>
    <Footer />
    </div>
  );
  }


export default App;
