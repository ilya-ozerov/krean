import React from 'react';
import './Footer.scss';

import facebook from "./../../assets/images/footer/facebook.svg";
import twitter from "./../../assets/images/footer/twitter.svg";
import linkedin from "./../../assets/images/footer/linkedin.svg";
import google from "./../../assets/images/footer/google.svg";

const networks = [
  { imageUrl: facebook, imageAlt: 'facebook' },
  { imageUrl: twitter, imageAlt: 'twitter' },
  { imageUrl: linkedin, imageAlt: 'linkedin' },
  { imageUrl: google, imageAlt: 'google' },
]

export const Footer = () => {

  const networksList = networks.map((n, i) => {
    return (
      <div key={i} className="footer__network">
        <img src={n.imageUrl} alt={n.imageAlt} />
      </div>
    );
  })

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__logo logo">KREA.</div>
        <ul className="footer__address">
          <li>John Street,</li>
          <li>Doe Building</li>
          <li>11/8   EDIRNE/TURKEY</li>
        </ul>

        <div className="footer__contacts">
          <div className="footer__email">info@envato.com</div>
          <div className="footer__number">900 800 70 60</div>
        </div>

        <div className="footer__socials">
          <div className="footer__networks">
            {networksList}
          </div>
          <div className="footer__copyright">All rights reserved.</div>
        </div>

      </div>

    </footer>
  );
}