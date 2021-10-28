import React from 'react';
import './Services.scss';

import men from "./../../assets/images/services/men.svg";
import compass from "./../../assets/images/services/compass.svg";
import egg from "./../../assets/images/services/egg.svg";

export const Services = () => {
  return (
    <section className="services">
      <div className="services__content">

        <div className="services__title">
          <div className="services__logo">
            KREA.
          </div>
          <div className="title">
            <h2>Services</h2>
          </div>

        </div>

        <div className="services__columns">

          <div className="services__column column">
            <div className="column__image">
              <img src={men} alt="column" />
            </div>
            <div className="column__title">Consultancy</div>
            <div className="column__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget elementum nisi. Curabitur cursus, dolor ac tempus pulvinar, risus risus elementum eros, vehicula ultricies quam arcu at augue. Donec lacinia erat nec tincidunt dignissim. Etiam egestas euismod ipsum, vitae commodo neque lacinia ac
            </div>
          </div>

          <div className="services__column column">
            <div className="column__image">
              <img src={compass} alt="column" />
            </div>
            <div className="column__title">Mentorship</div>
            <div className="column__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget elementum nisi. Curabitur cursus, dolor ac tempus pulvinar, risus risus elementum eros, vehicula ultricies quam arcu at augue. Donec lacinia erat nec tincidunt dignissim. Etiam egestas euismod ipsum, vitae commodo neque lacinia ac
            </div>
          </div>

          <div className="services__column column">
            <div className="column__image">
              <img src={egg} alt="column" />
            </div>
            <div className="column__title">Incubatory</div>
            <div className="column__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget elementum nisi. Curabitur cursus, dolor ac tempus pulvinar, risus risus elementum eros, vehicula ultricies quam arcu at augue. Donec lacinia erat nec tincidunt dignissim. Etiam egestas euismod ipsum, vitae commodo neque lacinia ac
            </div>
          </div>

        </div>

        <div className="services__button">
          <button>GET IN TOUCH</button>
        </div>
      </div>
    </section>
  );
}