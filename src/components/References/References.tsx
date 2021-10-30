import React from 'react';
import './References.scss';

import men21 from "./../../assets/images/services/men.svg";
import { Comments } from './Comments/Comments';
import { Partners } from './Partners/Partners';

export const References = () => {
  return (
    <section className="references">

      <div className="references__content">
        <div className="references__title title">
          <h2>References</h2>
        </div>

        <Comments className="references__comments" />

        <Partners className="references__partners" />

      </div>

    </section>
  );
}