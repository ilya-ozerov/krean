import React from 'react';
import './Partners.scss';

import partner_1 from "./../../assets/images/references/partners/partner_1.jpeg";
import partner_2 from "./../../assets/images/references/partners/partner_2.jpeg";
import partner_3 from "./../../assets/images/references/partners/partner_3.jpeg";
import partner_4 from "./../../assets/images/references/partners/partner_4.jpeg";
import partner_5 from "./../../assets/images/references/partners/partner_5.jpeg";
import partner_6 from "./../../assets/images/references/partners/partner_6.jpeg";
import { PartnersLogoType } from '../../types/types';

type PartnersType = {
  className: string;
}

const partnersData: PartnersLogoType[] = [
  { imageUrl: partner_1, imageAlt: 'partner logo' },
  { imageUrl: partner_2, imageAlt: 'partner logo' },
  { imageUrl: partner_3, imageAlt: 'partner logo' },
  { imageUrl: partner_4, imageAlt: 'partner logo' },
  { imageUrl: partner_5, imageAlt: 'partner logo' },
  { imageUrl: partner_6, imageAlt: 'partner logo' },
]

export const Partners: React.FC<PartnersType> = ({ className }) => {


  const partnersList = partnersData.map((p, index) => {
    return (
      <div key={index} className="partners__item">
        <div className="partners__image">
          <img src={p.imageUrl} alt={p.imageAlt} />
        </div>
      </div>
    );
  })

  return (
    <div className={`${className} partners`}>
      {partnersList}
    </div>
  );
}