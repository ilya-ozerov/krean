import React, { useRef } from 'react';
import './App.scss';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { References } from './components/References/References';
import { Services } from './components/Services/Services';
import { Works } from './components/Works/Works';

export const App = () => {

  const servicesRef = useRef<HTMLDivElement>(null);
  const worksRef = useRef<HTMLDivElement>(null);
  const referencesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <div className="wrapper">

      <Home refs={{ servicesRef, worksRef, referencesRef, contactRef }} />

      <Services contactRef={contactRef} servicesRef={servicesRef} />

      <Works worksRef={worksRef} />

      <References referencesRef={referencesRef} />

      <Contact contactRef={contactRef} />

      <Footer />

    </div>
  );
}