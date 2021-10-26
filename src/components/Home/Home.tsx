import React from 'react';
import './Home.scss';

import bg from "./../../assets/images/home/bg.png"
import mouse from "./../../assets/images/home/mouse.svg"

export const Home = () => {
  return (
    <section className="home">

      <div className="home__content">

        <img className="home__bg" src={bg} alt="background" />


        <div className="home__body">
          <header className="home__header header">
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
          <div className="home__title">
            <h1>Digital Marketing</h1>
            <div className="home__subtitle">
              <h2>Consultancy</h2>
            </div>
          </div>
          <div className="home__mouse">
            <img src={mouse} draggable="false" alt="computer mouse" />
          </div>
        </div>

      </div>

    </section>
  );
}