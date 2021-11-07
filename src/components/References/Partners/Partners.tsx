import React from 'react';
import "swiper/swiper.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import './Partners.scss';

import partner_1 from "./../../../assets/images/references/partners/partner_1.jpeg";
import partner_2 from "./../../../assets/images/references/partners/partner_2.jpeg";
import partner_3 from "./../../../assets/images/references/partners/partner_3.jpeg";
import partner_4 from "./../../../assets/images/references/partners/partner_4.jpeg";
import partner_5 from "./../../../assets/images/references/partners/partner_5.jpeg";
import partner_6 from "./../../../assets/images/references/partners/partner_6.jpeg";
import { PartnersLogoType } from '../../../types/types';

type PartnersType = {
  className: string;
}

SwiperCore.use([Navigation, Autoplay]);

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
      <SwiperSlide className="partners__item" key={index}>
        <div className="partners__image">
          <img src={p.imageUrl} alt={p.imageAlt} />
        </div>
      </SwiperSlide>
    );
  })

  return (
    <div className={`${className} partners`}>
      <Swiper className="partners__swiper"
        slidesPerView={5} spaceBetween={10} watchSlidesProgress={true}
        breakpoints={{
          "320": {
            "slidesPerView": 1,
            "spaceBetween": 10
          },
          "450": {
            "slidesPerView": 2,
            "spaceBetween": 10
          },
          "640": {
            "slidesPerView": 3,
            "spaceBetween": 10
          },
          "768": {
            "slidesPerView": 4,
            "spaceBetween": 10
          },
          "1024": {
            "slidesPerView": 5,
            "spaceBetween": 10
          }
        }}
        loop={true}
        centeredSlides={true}
        autoplay={{
          "delay": 5000,
          "disableOnInteraction": true
        }}
      >

        {partnersList}

      </Swiper>
    </div>
  );
}