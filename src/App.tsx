import React from 'react';
import './App.scss';
import { Contact } from './components/Contact/Contact';
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

      <footer className="footer">
        <div className="footer__content">
          <div className="footer__logo logo">KREA.</div>
          <ul className="logo__address">
            <li>John Street,</li>
            <li>Doe Building</li>
            <li>11/8   EDIRNE/TURKEY</li>
          </ul>

          <div className="logo__contacts">
            <div className="footer__email">info@envato.com</div>
            <div className="footer__number">900 800 70 60</div>
          </div>

          <div className="footer__socials">
            <div className="footer__networks">
              <div className="footer__network">
                <img src="#" alt="facebook icon" />
              </div>

              <div className="footer__network">
                <img src="#" alt="twitter icon" />
              </div>

              <div className="footer__network">
                <img src="#" alt="linkedin icon" />
              </div>

              <div className="footer__network">
                <img src="#" alt="google icon" />
              </div>
            </div>
            <div className="footer__copyright">All rights reserved.</div>
          </div>

        </div>

      </footer>

    </div>
  );
}