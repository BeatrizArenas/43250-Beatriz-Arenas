import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu';
import HeroBanner from './components/HeroBanner';
import Title from './components/Title';
import HomeContent from './components/HomeContent';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <div className="App">
        <div className="container">
          <Menu />
          <HeroBanner />
          <Title />
          <HomeContent />
          <Footer />
        </div>
      </div>
    </>
  );

}

export default App;
