import React, { useState } from 'react';
import './MobileMenu.scss';

import facebook from "./../../../assets/images/mobile-menu/mobile-menu-facebook.png";
import twitter from "./../../../assets/images/mobile-menu/mobile-menu-twitter.png";
import linkedin from "./../../../assets/images/mobile-menu/mobile-menu-linkedin.png";
import google from "./../../../assets/images/mobile-menu/mobile-menu-plus.png";

const networks = [
  { imageUrl: facebook, imageAlt: 'facebook' },
  { imageUrl: twitter, imageAlt: 'twitter' },
  { imageUrl: linkedin, imageAlt: 'linkedin' },
  { imageUrl: google, imageAlt: 'google' },
]

type MobileMenuProps = {
  className: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ className }) => {

  const [isMobile, setIsModile] = useState(false);

  const networksList = networks.map((n, i) => {
    return (
      <div key={i} className="mobile-menu__network">
        <img src={n.imageUrl} alt={n.imageAlt} />
      </div>
    );
  })

  return (
    <div className={`${className} mobile-menu`}>

      <div onClick={() => setIsModile(current => !current)} className="mobile-menu__burger">
        <div />
      </div>

      {
        isMobile &&
        <div className="mobile-menu__body">
          <ul className="mobile-menu__list">
            <li>Services</li>
            <li>Works</li>
            <li>References</li>
            <li>Contact</li>
          </ul>
          <div className="mobile-menu__networks">
            {networksList}
          </div>
        </div>
      }
    </div>
  );
}