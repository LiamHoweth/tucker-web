import { Icon } from './Icon';
import { SectionHeading } from './SectionHeading';

type AboutSectionProps = {
  about: {
    eyebrow: string;
    title: string;
    paragraphs: ReadonlyArray<string>;
    values: ReadonlyArray<string>;
    photoSrc: string;
    photoAlt: string;
    photoPosition?: string;
  };
};

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <section className="content-section content-section--soft" id="about">
      <div className="container split-layout split-layout--about">
        <div className="about-section__copy">
          <SectionHeading eyebrow={about.eyebrow} title={about.title} />
          <div className="body-copy">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <aside className="value-panel" aria-label="Skippers Lawn Service values">
            <p className="value-panel__eyebrow">What matters most</p>
            <ul className="value-panel__list">
              {about.values.map((value) => (
                <li key={value} className="value-panel__item">
                  <span className="value-panel__icon">
                    <Icon name="check" className="value-panel__icon-svg" />
                  </span>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="about-section__media">
          <img
            className="about-section__image"
            src={about.photoSrc}
            alt={about.photoAlt}
            loading="lazy"
            style={{ objectPosition: about.photoPosition ?? 'center center' }}
          />
          <div className="about-section__media-note">
            <p className="about-section__media-label">Local service, clean finish</p>
            <p className="about-section__media-text">
              Reliable upkeep that helps your property feel cared for week after week.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
