import React from 'react';
import './Home.scss';

import bg from "./../../assets/images/home/bg.png"
import mouse from "./../../assets/images/home/mouse.svg"
import { Header } from '../Header/Header';

type HomeProps = {
  refs: {
    servicesRef: React.RefObject<HTMLDivElement>;
    worksRef: React.RefObject<HTMLDivElement>;
    referencesRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
  }
}

export const Home: React.FC<HomeProps> = (
  { refs }
) => {
  return (
    <section className="home">

      <div className="home__content">

        <img className="home__bg" src={bg} alt="background" />


        <div className="home__body">

          <Header className="home__header" refs={refs} />

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