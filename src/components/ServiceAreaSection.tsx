import { ActionLink } from './ActionLink';
import { Icon } from './Icon';
import { SectionHeading } from './SectionHeading';

type ServiceAreaSectionProps = {
  serviceAreas: ReadonlyArray<string>;
  serviceAreaNote: string;
  contact: {
    textHref: string;
  };
};

export function ServiceAreaSection({
  serviceAreas,
  serviceAreaNote,
  contact,
}: ServiceAreaSectionProps) {
  return (
    <section className="content-section" id="service-area">
      <div className="container split-layout split-layout--service-area">
        <div>
          <SectionHeading
            eyebrow="Service Area"
            title="Areas We Serve"
            description="Focused on dependable lawn care for homeowners across the surrounding communities listed below."
          />
          <p className="service-area__note">{serviceAreaNote}</p>
          <ActionLink
            label="Text To Confirm Your Area"
            href={contact.textHref}
            variant="secondary"
            icon="message"
          />
        </div>

        <div className="service-area__panel" aria-label="Service area list">
          {serviceAreas.map((area) => (
            <div key={area} className="service-area__chip">
              <Icon name="location" className="service-area__chip-icon" />
              <span>{area}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
