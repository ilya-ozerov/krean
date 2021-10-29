import React from 'react';
import './App.scss';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { References } from './components/References/References';
import { Services } from './components/Services/Services';
import { Works } from './components/Works/Works';

export const App = () => {
  return (
    <div className="wrapper">

      <Home />

      <Services />

      {/* <Works /> */}

      <References />

      <Contact />

      <Footer />

    </div>
  );
}