import React, { useEffect, useState } from 'react';
import './Header.scss';
import { MobileMenu } from './MobileMenu/MobileMenu';

type HeaderProps = {
  className: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {

  const [isSticky, setIsSticky] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY >= 50) {
      setIsSticky(true)
    } else {
      setIsSticky(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    }
  }, [])

  useEffect(() => {
    if (isSticky) {
      console.log("IS STICKY!")
    } else {
      console.log("IS NOT STICKY!")
    }
  }, [isSticky])

  return (
    <header className={isSticky ? `${className} header sticky-header` : `${className} header`}>
      <div className="header__body">
        <div className="header__logo logo">
          krea.
        </div>
        <ul className="header__list">
          <li>Services</li>
          <li>Works</li>
          <li>References</li>
          <li>Contact</li>
        </ul>

        <MobileMenu className="header__mobile-menu" />
      </div>

    </header>
  );
}