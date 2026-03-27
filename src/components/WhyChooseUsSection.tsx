import { Icon, type IconName } from './Icon';
import { SectionHeading } from './SectionHeading';

type Reason = {
  title: string;
  description: string;
  icon: IconName;
};

type WhyChooseUsSectionProps = {
  reasons: ReadonlyArray<Reason>;
  feature: {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    imagePosition?: string;
    badge: string;
  };
};

export function WhyChooseUsSection({ reasons, feature }: WhyChooseUsSectionProps) {
  return (
    <section className="content-section" id="why-choose-us">
      <div className="container trust-section">
        <div className="trust-section__intro">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Why Choose Skippers Lawn Service?"
            description="Homeowners want lawn care that feels easy to trust. The focus here is dependable service, clean work, and a simple path to getting a quote."
          />

          <article className="trust-feature-card">
            <div className="trust-feature-card__media">
              <img
                className="trust-feature-card__image"
                src={feature.imageSrc}
                alt={feature.imageAlt}
                style={{ objectPosition: feature.imagePosition ?? 'center center' }}
              />
              <span className="trust-feature-card__badge">{feature.badge}</span>
            </div>
            <div className="trust-feature-card__body">
              <h3 className="trust-feature-card__title">{feature.title}</h3>
              <p className="trust-feature-card__description">{feature.description}</p>
            </div>
          </article>
        </div>

        <div className="card-grid card-grid--reasons trust-section__grid">
          {reasons.map((reason) => (
            <article key={reason.title} className="info-card info-card--reason reason-card">
              <div className="info-card__icon-wrap info-card__icon-wrap--soft">
                <Icon name={reason.icon} className="info-card__icon" />
              </div>
              <h3 className="info-card__title">{reason.title}</h3>
              <p className="info-card__description">{reason.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
