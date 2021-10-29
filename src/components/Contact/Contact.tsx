import React from 'react';
import './Contact.scss';

export const Contact = () => {
  return (
    <section className="contact">
      <div className="contact__content">
        <div className="contact__title title">
          <h2>Contact</h2>
        </div>

        <div className="contact__form">
          <div className="contact__name">
            <input className="form-element" type="text" placeholder="Full Name" />
          </div>
          <div className="contact__email">
            <input className="form-element" type="text" placeholder="Email" />
          </div>
          <div className="contact__message">
            <textarea className="form-element" placeholder="Message" />
          </div>
        </div>

        <div className="contact__button">
          <button>Send</button>
        </div>
      </div>

    </section>
  );
}