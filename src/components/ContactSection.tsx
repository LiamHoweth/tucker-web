import { ActionLink } from './ActionLink';
import { Icon } from './Icon';
import { SectionHeading } from './SectionHeading';

type ContactSectionProps = {
  business: {
    name: string;
  };
  contact: {
    phoneDisplay: string;
    callHref: string;
    textHref: string;
    leadMessage: string;
    photoSrc: string;
    photoAlt: string;
    photoPosition?: string;
  };
  ctaLabels: {
    call: string;
    text: string;
    quote: string;
  };
};

export function ContactSection({ business, contact, ctaLabels }: ContactSectionProps) {
  return (
    <section className="contact-section" id="contact">
      <div className="container split-layout split-layout--contact">
        <div className="contact-section__lead">
          <SectionHeading
            eyebrow="Contact"
            title="Get Your Free Quote"
            description={contact.leadMessage}
          />
          <p className="contact-section__body">
            If you are ready to talk through mowing, weed eating, or leaf cleanup, call or text and
            we will help you take the next step without the hassle.
          </p>

          <div className="contact-section__photo-card">
            <img
              className="contact-section__photo"
              src={contact.photoSrc}
              alt={contact.photoAlt}
              style={{ objectPosition: contact.photoPosition ?? 'center center' }}
            />
            <div className="contact-section__photo-note">
              <p className="contact-section__photo-label">Fast response and easy scheduling</p>
              <p className="contact-section__photo-text">
                Reach out when you are ready and we will help you get the next mowing or cleanup on
                the calendar.
              </p>
            </div>
          </div>
        </div>

        <aside className="contact-card" aria-label={`${business.name} contact options`}>
          <p className="contact-card__label">Call or text</p>
          <a className="contact-card__number" href={contact.callHref}>
            {contact.phoneDisplay}
          </a>
          <div className="contact-card__actions">
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
          </div>
          <div className="contact-card__highlights">
            <p>
              <Icon name="check" className="contact-card__highlight-icon" />
              <span>Fast response</span>
            </p>
            <p>
              <Icon name="check" className="contact-card__highlight-icon" />
              <span>Free estimates</span>
            </p>
            <p>
              <Icon name="check" className="contact-card__highlight-icon" />
              <span>Easy scheduling</span>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
