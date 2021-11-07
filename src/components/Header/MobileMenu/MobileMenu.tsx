import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
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
  scrollTo: (ref: React.RefObject<HTMLDivElement>) => void;
  refs: {
    servicesRef: React.RefObject<HTMLDivElement>;
    worksRef: React.RefObject<HTMLDivElement>;
    referencesRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
  }
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ className, scrollTo, refs }) => {

  const [isMobile, setIsModile] = useState(false);

  const networksList = networks.map((n, i) => {
    return (
      <div key={i} className="mobile-menu__network">
        <img src={n.imageUrl} alt={n.imageAlt} />
      </div>
    );
  })

  const liOnClick = (ref: React.RefObject<HTMLDivElement>) => {
    setIsModile(false);
    scrollTo(ref);
  }

  return (
    <div className={`${className} mobile-menu`}>

      <div onClick={() => setIsModile(current => !current)} className="mobile-menu__burger">
        <div />
      </div>

      <CSSTransition in={isMobile} timeout={300} classNames="menu-transition" unmountOnExit>
        <div className="mobile-menu__body">
          <ul className="mobile-menu__list">
            <li onClick={() => liOnClick(refs.servicesRef)}>Services</li>
            <li onClick={() => liOnClick(refs.worksRef)}>Works</li>
            <li onClick={() => liOnClick(refs.referencesRef)}>References</li>
            <li onClick={() => liOnClick(refs.contactRef)}>Contact</li>
          </ul>
          <div className="mobile-menu__networks">
            {networksList}
          </div>
        </div>

      </CSSTransition>


      {/* {
        isMobile &&
        <div className="mobile-menu__body">
          <ul className="mobile-menu__list">
            <li onClick={() => liOnClick(refs.servicesRef)}>Services</li>
            <li onClick={() => liOnClick(refs.worksRef)}>Works</li>
            <li onClick={() => liOnClick(refs.referencesRef)}>References</li>
            <li onClick={() => liOnClick(refs.contactRef)}>Contact</li>
          </ul>
          <div className="mobile-menu__networks">
            {networksList}
          </div>
        </div>
      } */}
    </div>
  );
}