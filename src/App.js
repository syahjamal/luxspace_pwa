import React from 'react';
import AsideMenu from './components/AsideMenu';
import Browse from './components/Browse';
import Client from './components/Client';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import JustArrive from './components/JustArrive';


function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Browse/>
      <JustArrive/>
      <Client/>
      <AsideMenu/>
      <Footer/>
    </>
  );
}

export default App;
