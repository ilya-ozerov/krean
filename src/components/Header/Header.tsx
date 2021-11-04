import React, { useEffect, useState } from 'react';
import './Header.scss';
import { MobileMenu } from './MobileMenu/MobileMenu';

type HeaderProps = {
  className: string;

  refs: {
    servicesRef: React.RefObject<HTMLDivElement>;
    worksRef: React.RefObject<HTMLDivElement>;
    referencesRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
  }
}

export const Header: React.FC<HeaderProps> = ({ className, refs }) => {

  const [isSticky, setIsSticky] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY >= 50) {
      setIsSticky(true)
    } else {
      setIsSticky(false)
    }
  }

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    }
  }, [])

  return (
    <header className={isSticky ? `${className} header sticky-header` : `${className} header`}>
      <div className="header__body">
        <div className="header__logo logo">
          krea.
        </div>
        <ul className="header__list">
          <li onClick={() => scrollTo(refs.servicesRef)}>Services</li>
          <li onClick={() => scrollTo(refs.worksRef)}>Works</li>
          <li onClick={() => scrollTo(refs.referencesRef)}>References</li>
          <li onClick={() => scrollTo(refs.contactRef)}>Contact</li>
        </ul>

        <MobileMenu className="header__mobile-menu" refs={refs} scrollTo={scrollTo} />
      </div>

    </header>
  );
}