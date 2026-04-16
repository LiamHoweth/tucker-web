import { useState } from 'react';
import { Icon } from './Icon';

type ContactFormProps = {
  services: ReadonlyArray<string>;
};

export function ContactForm({ services }: ContactFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="contact-form__success">
        <Icon name="check" className="contact-form__success-icon" />
        <h3>Thank you!</h3>
        <p>We'll get back to you shortly with your free estimate.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__group">
        <label className="contact-form__label" htmlFor="contact-name">
          Name
        </label>
        <input
          id="contact-name"
          className="contact-form__input"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="contact-form__group">
        <label className="contact-form__label" htmlFor="contact-phone">
          Phone
        </label>
        <input
          id="contact-phone"
          className="contact-form__input"
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <div className="contact-form__group">
        <label className="contact-form__label" htmlFor="contact-address">
          Address
        </label>
        <input
          id="contact-address"
          className="contact-form__input"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <div className="contact-form__group">
        <label className="contact-form__label" htmlFor="contact-service">
          Service Needed
        </label>
        <select
          id="contact-service"
          className="contact-form__select"
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="contact-form__group">
        <label className="contact-form__label" htmlFor="contact-message">
          Message
        </label>
        <textarea
          id="contact-message"
          className="contact-form__textarea"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
        />
      </div>

      <button
        type="submit"
        className="contact-form__submit action-link action-link--primary action-link--lg"
      >
        Get Your Free Estimate
      </button>
    </form>
  );
}
