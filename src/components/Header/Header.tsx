import React from 'react';
import './Header.scss';

type HeaderProps = {
  className: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={`${className} header`}>
      <div className="header__logo logo">
        krea.
      </div>
      <ul className="header__list">
        <li>Services</li>
        <li>Works</li>
        <li>References</li>
        <li>Contact</li>
      </ul>
    </header>
  );
}