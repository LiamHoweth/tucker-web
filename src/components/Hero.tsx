import type { CSSProperties } from 'react';
import { ActionLink } from './ActionLink';
import { Icon } from './Icon';

type HeroProps = {
  business: {
    name: string;
    logoAlt: string;
    logoSrc: string;
    headline: string;
    subheadline: string;
    heroImageSrc: string;
    heroImageAlt: string;
    heroImagePosition: string;
    heroSecondaryImageSrc: string;
    heroSecondaryImageAlt: string;
    heroSecondaryImagePosition: string;
    trustItems: ReadonlyArray<string>;
    serviceSummary: string;
  };
  contact: {
    phoneDisplay: string;
    callHref: string;
    textHref: string;
    quoteHref: string;
  };
  ctaLabels: {
    call: string;
    text: string;
    quote: string;
  };
  serviceAreas: ReadonlyArray<string>;
  services: ReadonlyArray<{
    title: string;
  }>;
};

export function Hero({ business, contact, ctaLabels, serviceAreas, services }: HeroProps) {
  return (
    <section className="hero" id="home">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero__eyebrow">Local Lawn Care For Homeowners</p>
          <h1 className="hero__title">{business.headline}</h1>
          <p className="hero__description">{business.subheadline}</p>

          <div className="hero__cta-group">
            <ActionLink
              label={ctaLabels.call}
              href={contact.callHref}
              variant="primary"
              size="lg"
              icon="phone"
              mobileFull
            />
            <ActionLink
              label={ctaLabels.text}
              href={contact.textHref}
              variant="secondary"
              size="lg"
              icon="message"
              mobileFull
            />
            <ActionLink
              label={ctaLabels.quote}
              href={contact.quoteHref}
              variant="ghost"
              size="lg"
              icon="quote"
              mobileFull
            />
          </div>

          <ul className="hero__trust-list" aria-label="Trust highlights">
            {business.trustItems.map((item) => (
              <li key={item} className="hero__trust-item">
                <Icon name="check" className="hero__trust-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__media" aria-label={`${business.name} hero photography`}>
          <article
            className="hero__photo-card hero__photo-card--primary"
            style={{ '--photo-position': business.heroImagePosition } as CSSProperties}
          >
            <img src={business.heroImageSrc} alt={business.heroImageAlt} className="hero__photo" />
            <div className="hero__photo-overlay">
              <p className="hero__photo-label">Premium curb appeal starts with clean work</p>
              <p className="hero__photo-text">{business.serviceSummary}</p>
            </div>
          </article>

          <div className="hero__support-row">
            <article
              className="hero__photo-card hero__photo-card--secondary"
              style={{ '--photo-position': business.heroSecondaryImagePosition } as CSSProperties}
            >
              <img
                src={business.heroSecondaryImageSrc}
                alt={business.heroSecondaryImageAlt}
                className="hero__photo"
              />
            </article>

            <article className="hero__logo-card">
              <img src={business.logoSrc} alt={business.logoAlt} className="hero__logo" />
              <p className="hero__logo-copy">
                Straightforward local lawn care with a clean finish homeowners can count on.
              </p>
            </article>
          </div>
        </div>
      </div>

      <div className="container hero__highlights" aria-label="Skippers Lawn Service highlights">
        <article className="hero-highlight">
          <div className="hero-highlight__icon">
            <Icon name="location" className="hero-highlight__icon-svg" />
          </div>
          <div>
            <p className="hero-highlight__label">Serving nearby homeowners</p>
            <p className="hero-highlight__text">
              {serviceAreas.slice(0, 4).join(', ')} and nearby areas.
            </p>
          </div>
        </article>

        <article className="hero-highlight">
          <div className="hero-highlight__icon">
            <Icon name="phone" className="hero-highlight__icon-svg" />
          </div>
          <div>
            <p className="hero-highlight__label">Fastest way to get started</p>
            <p className="hero-highlight__text">
              Call or text{' '}
              <a className="hero-highlight__link" href={contact.callHref}>
                {contact.phoneDisplay}
              </a>{' '}
              for a fast free estimate.
            </p>
          </div>
        </article>

        <article className="hero-highlight">
          <div className="hero-highlight__icon">
            <Icon name="mower" className="hero-highlight__icon-svg" />
          </div>
          <div>
            <p className="hero-highlight__label">Core services</p>
            <div className="hero__service-pills">
              {services.map((service) => (
                <span key={service.title} className="hero__service-pill">
                  {service.title}
                </span>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
