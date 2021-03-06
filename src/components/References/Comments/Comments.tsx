import React from 'react';
import "swiper/swiper.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import './Comments.scss';
import userAvatar from "./../../../assets/images/references/placeholder.png";
import bg from "./../../../assets/images/references/bg.svg";

import next from "./../../../assets/images/references/next.svg";
import prev from "./../../../assets/images/references/prev.svg";

type CommentsType = {
  className: string;
}

SwiperCore.use([Navigation, Autoplay]);

export const Comments: React.FC<CommentsType> = ({ className }) => {
  return (
    <div className={`${className} comments`}>
      <div className="comments__prev">
        <img src={prev} alt="previus button" />
      </div>

      <Swiper className="comments__swiper"
        navigation={{
          nextEl: ".comments__next",
          prevEl: ".comments__prev",
        }} slidesPerView={1} spaceBetween={100}
        autoplay={{
          "delay": 5000,
          "disableOnInteraction": true
        }}
        loop={true}
      >

        <SwiperSlide>
          <div className="comments__item">
            <div className="comments__image user-image">
              <div className="user-image__body">
                <div className="user-image__image">
                  <img src={userAvatar} alt="author" />
                </div>
                <div className="user-image__bg">
                  <img className="comments__bg" src={bg} alt="background" />
                </div>
              </div>
            </div>
            <div className="comments__body">
              <div className="comments__name">John Doe</div>
              <div className="comments__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget elementum nisi. Curabitur cursus, dolor ac tempus pulvinar, risus risus elementum eros, vehicula ultricies quam arcu at augue. Donec lacinia erat nec tincidunt dignissim. Etiam egestas euismod ipsum, vitae commodo neque lacinia ac
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="comments__item">
            <div className="comments__image user-image">
              <div className="user-image__body">
                <div className="user-image__image">
                  <img src={userAvatar} alt="author" />
                </div>
                <div className="user-image__bg">
                  <img className="comments__bg" src={bg} alt="background" />
                </div>
              </div>

            </div>
            <div className="comments__body">
              <div className="comments__name">John Doe</div>
              <div className="comments__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget elementum nisi. Curabitur cursus, dolor ac tempus pulvinar, risus risus elementum eros, vehicula ultricies quam arcu at augue. Donec lacinia erat nec tincidunt dignissim. Etiam egestas euismod ipsum, vitae commodo neque lacinia ac
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>

      <div className="comments__next">
        <img src={next} alt="next button" />
      </div>

    </div>
  );
}