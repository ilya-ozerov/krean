import React from 'react';
import './References.scss';
import { Comments } from './Comments/Comments';
import { Partners } from './Partners/Partners';

type ReferencesProps = {
  referencesRef: React.RefObject<HTMLDivElement>;

}

export const References: React.FC<ReferencesProps> = (
  { referencesRef }) => {
  return (
    <section ref={referencesRef} className="references">

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