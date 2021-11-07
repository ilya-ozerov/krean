import React from 'react';
import './Details.scss';

import facebook from './../../../../assets/images/works/modal-facebook.svg'
import twitter from './../../../../assets/images/works/modal-twitter.svg'
import google from './../../../../assets/images/works/modal-plus.svg'
import linkedin from './../../../../assets/images/works/modal-linkedin.svg'
import { WorkType } from '../../../../types/types';

type DetailsProps = {
  work: WorkType;
  closeDetails: () => void;
}

export const Details: React.FC<DetailsProps> = ({ work, closeDetails }) => {

  const title = work.title[0].toUpperCase() + work.title.slice(1);
  const month = work.date.month[0].toUpperCase() + work.date.month.slice(1);

  return (
    <div className="details">

      <div className="details__content">

        <div onClick={closeDetails} className="details__cross"></div>

        <div className="details__image">
          {work.images[0].type === 'image' && <img src={work.images[0].imageUrl}
            alt={work.images[0].imageAlt} />}
        </div>
        <div className="details__body">
          <div className="details__title">{title}</div>
          <div className="details__text">
            {work.description}
          </div>

          <div className="details__footer">
            <div className="details__socials">
              <div className="details__social">
                <img src={facebook} alt="" />
              </div>
              <div className="details__social">
                <img src={twitter} alt="" />
              </div>
              <div className="details__social">
                <img src={linkedin} alt="" />
              </div>
              <div className="details__social">
                <img src={google} alt="" />
              </div>
            </div>
            <div className="details__date">
              <span>{month} </span>{work.date.year}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}