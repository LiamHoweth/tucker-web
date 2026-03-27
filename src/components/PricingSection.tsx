import { ActionLink } from './ActionLink';
import { Icon } from './Icon';

type PricingSectionProps = {
  pricing: {
    eyebrow: string;
    title: string;
    message: string;
    supportItems: ReadonlyArray<string>;
  };
  contact: {
    callHref: string;
    textHref: string;
    quoteHref: string;
  };
  ctaLabels: {
    call: string;
    text: string;
    quote: string;
  };
};

export function PricingSection({ pricing, contact, ctaLabels }: PricingSectionProps) {
  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        <div className="pricing-callout">
          <h2 className="pricing-callout__title">{pricing.title}</h2>
          <p className="pricing-callout__message">{pricing.message}</p>

          <div className="pricing-callout__actions">
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

          <div className="pricing-callout__support">
            {pricing.supportItems.map((item) => (
              <p key={item} className="pricing-callout__support-item">
                <Icon name="check" className="pricing-callout__support-icon" />
                <span>{item}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
