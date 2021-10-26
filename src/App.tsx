import React from 'react';
import './App.scss';
import { Home } from './components/Home/Home';

export const App = () => {
  return (
    <div className="wrapper">

      <Home />

      <section className="services">
        <div className="services__content">
          <div className="services__logo">
            KREA.
          </div>

          <div className="services__title title">
            <h2>Services</h2>
          </div>

          <div className="services__columns">

            <div className="services__column column">
              <div className="column__image">
                <img src="#" alt="column" />
              </div>
              <div className="column__title">Consultancy</div>
              <div className="column__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget elementum nisi. Curabitur cursus, dolor ac tempus pulvinar, risus risus elementum eros, vehicula ultricies quam arcu at augue. Donec lacinia erat nec tincidunt dignissim. Etiam egestas euismod ipsum, vitae commodo neque lacinia ac
              </div>
            </div>

            <div className="services__column column">
              <div className="column__image">
                <img src="#" alt="column" />
              </div>
              <div className="column__title">Mentorship</div>
              <div className="column__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget elementum nisi. Curabitur cursus, dolor ac tempus pulvinar, risus risus elementum eros, vehicula ultricies quam arcu at augue. Donec lacinia erat nec tincidunt dignissim. Etiam egestas euismod ipsum, vitae commodo neque lacinia ac
              </div>
            </div>

            <div className="services__column column">
              <div className="column__image">
                <img src="#" alt="column" />
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

      <section className="works">
        <div className="works__title title">
          <h2>Works</h2>
        </div>

        <div className="works__items">

          <div className="works__item">
            <img src="#" alt="work item" />
          </div>

          <div className="works__item">
            <img src="#" alt="work item" />
          </div>

          <div className="works__item">
            <img src="#" alt="work item" />
          </div>

          <div className="works__item">
            <img src="#" alt="work item" />
          </div>

          <div className="works__item">
            <img src="#" alt="work item" />
          </div>

          <div className="works__item">
            <img src="#" alt="work item" />
          </div>

          <div className="works__item">
            <img src="#" alt="work item" />
          </div>

        </div>


      </section>

      <section className="references">

        <div className="references__content">
          <div className="references__title">
            <h2>References</h2>
          </div>

          <div className="references__comments comments">

            <div className="comments__item">
              <div className="comments__image">
                <img src="#" alt="author" />
              </div>
              <div className="comments__body">
                <div className="comments__name">John Doe</div>
                <div className="comments__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget elementum nisi. Curabitur cursus, dolor ac tempus pulvinar, risus risus elementum eros, vehicula ultricies quam arcu at augue. Donec lacinia erat nec tincidunt dignissim. Etiam egestas euismod ipsum, vitae commodo neque lacinia ac
                </div>
              </div>
            </div>

            <div className="comments__item">
              <div className="comments__image">
                <img src="#" alt="author" />
              </div>
              <div className="comments__body">
                <div className="comments__name">John Doe</div>
                <div className="comments__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget elementum nisi. Curabitur cursus, dolor ac tempus pulvinar, risus risus elementum eros, vehicula ultricies quam arcu at augue. Donec lacinia erat nec tincidunt dignissim. Etiam egestas euismod ipsum, vitae commodo neque lacinia ac
                </div>
              </div>
            </div>

            <div className="comments__item">
              <div className="comments__image">
                <img src="#" alt="author" />
              </div>
              <div className="comments__body">
                <div className="comments__name">John Doe</div>
                <div className="comments__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget elementum nisi. Curabitur cursus, dolor ac tempus pulvinar, risus risus elementum eros, vehicula ultricies quam arcu at augue. Donec lacinia erat nec tincidunt dignissim. Etiam egestas euismod ipsum, vitae commodo neque lacinia ac
                </div>
              </div>
            </div>

          </div>
          <div className="references__partners partners">

            <div className="partners__item">
              <div className="partners__image">
                <img src="#" alt="patner" />
              </div>
            </div>

            <div className="partners__item">
              <div className="partners__image">
                <img src="#" alt="patner" />
              </div>
            </div>

            <div className="partners__item">
              <div className="partners__image">
                <img src="#" alt="patner" />
              </div>
            </div>

            <div className="partners__item">
              <div className="partners__image">
                <img src="#" alt="patner" />
              </div>
            </div>

            <div className="partners__item">
              <div className="partners__image">
                <img src="#" alt="patner" />
              </div>
            </div>

            <div className="partners__item">
              <div className="partners__image">
                <img src="#" alt="patner" />
              </div>
            </div>

            <div className="partners__item">
              <div className="partners__image">
                <img src="#" alt="patner" />
              </div>
            </div>

            <div className="partners__item">
              <div className="partners__image">
                <img src="#" alt="patner" />
              </div>
            </div>

            <div className="partners__item">
              <div className="partners__image">
                <img src="#" alt="patner" />
              </div>
            </div>
          </div>

        </div>

      </section>

      <section className="contact">
        <div className="contact__content">
          <div className="contact__form">
            <div className="contact__name">
              <input type="text" placeholder="Full Name" />
            </div>
            <div className="contact__email">
              <input type="text" placeholder="Email" />
            </div>
            <div className="contact__message">
              <textarea placeholder="Message" />
            </div>
            <div className="contact__button">
              <button>Send</button>
            </div>
          </div>
        </div>

      </section>

      <footer className="footer">
        <div className="footer__content">
          <div className="footer__logo logo">KREA.</div>
          <ul className="logo__address">
            <li>John Street,</li>
            <li>Doe Building</li>
            <li>11/8   EDIRNE/TURKEY</li>
          </ul>

          <div className="logo__contacts">
            <div className="footer__email">info@envato.com</div>
            <div className="footer__number">900 800 70 60</div>
          </div>

          <div className="footer__socials">
            <div className="footer__networks">
              <div className="footer__network">
                <img src="#" alt="facebook icon" />
              </div>

              <div className="footer__network">
                <img src="#" alt="twitter icon" />
              </div>

              <div className="footer__network">
                <img src="#" alt="linkedin icon" />
              </div>

              <div className="footer__network">
                <img src="#" alt="google icon" />
              </div>
            </div>
            <div className="footer__copyright">All rights reserved.</div>
          </div>

        </div>

      </footer>

    </div>
  );
}