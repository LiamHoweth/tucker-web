import { ActionLink } from './ActionLink';
import { Icon, type IconName } from './Icon';
import { SectionHeading } from './SectionHeading';

type Service = {
  title: string;
  description: string;
  icon: IconName;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: string;
};

type ServicesSectionProps = {
  services: ReadonlyArray<Service>;
  quoteHref: string;
};

export function ServicesSection({ services, quoteHref }: ServicesSectionProps) {
  return (
    <section className="content-section content-section--tint" id="services">
      <div className="container">
        <SectionHeading
          eyebrow="Our Services"
          title="Clean, dependable lawn service for the work homeowners need most."
          description="From routine mowing to detail trimming and seasonal cleanup, every service is designed to keep your yard looking maintained and cared for."
        />

        <div className="card-grid card-grid--services">
          {services.map((service) => (
            <article key={service.title} className="info-card info-card--service service-card">
              <div className="service-card__media">
                <img
                  className="service-card__image"
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  loading="lazy"
                  style={{ objectPosition: service.imagePosition ?? 'center center' }}
                />
                <span className="service-card__tag">{service.title}</span>
              </div>
              <div className="service-card__body">
                <div className="info-card__icon-wrap">
                  <Icon name={service.icon} className="info-card__icon" />
                </div>
                <h3 className="info-card__title">{service.title}</h3>
                <p className="info-card__description">{service.description}</p>
                <ActionLink
                  label="Request Quote"
                  href={quoteHref}
                  variant="ghost"
                  icon="quote"
                  className="info-card__cta"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
