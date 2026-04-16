import type { CSSProperties } from 'react';
import { SectionHeading } from './SectionHeading';

type GalleryItem = {
  title: string;
  description: string;
  badge?: string;
  imageSrc: string;
  imageAlt: string;
  objectPosition?: string;
  imageClass?: string;
};

type GallerySectionProps = {
  galleryItems: ReadonlyArray<GalleryItem>;
};

export function GallerySection({ galleryItems }: GallerySectionProps) {
  const [featuredItem, ...secondaryItems] = galleryItems;

  return (
    <section className="content-section" id="gallery">
      <div className="container">
        <SectionHeading
          eyebrow="Our Work"
          title="Real lawn care results from the kind of properties we service every week."
          description="Clean cuts, tidy fence lines, and a well-kept finish that helps homeowners feel proud of how their yard looks."
        />

        <div className="gallery-showcase">
          {featuredItem ? (
            <article
              className="gallery-card gallery-card--featured"
              style={
                { '--gallery-position': featuredItem.objectPosition ?? 'center center' } as CSSProperties
              }
            >
              <div className="gallery-card__media">
                <img
                  className={`gallery-card__image${featuredItem.imageClass ? ` ${featuredItem.imageClass}` : ''}`}
                  src={featuredItem.imageSrc}
                  alt={featuredItem.imageAlt}
                  loading="lazy"
                />
                <div className="gallery-card__overlay">
                  {featuredItem.badge && <span className="gallery-card__badge">{featuredItem.badge}</span>}
                  <h3 className="gallery-card__title">{featuredItem.title}</h3>
                  <p className="gallery-card__description">{featuredItem.description}</p>
                </div>
              </div>
            </article>
          ) : null}

          <div className="gallery-grid">
            {secondaryItems.map((item) => (
              <article
                key={item.title}
                className="gallery-card"
                style={{ '--gallery-position': item.objectPosition ?? 'center center' } as CSSProperties}
              >
                <div className="gallery-card__media">
                  <img className={`gallery-card__image${item.imageClass ? ` ${item.imageClass}` : ''}`} src={item.imageSrc} alt={item.imageAlt} loading="lazy" />
                  {item.badge && <span className="gallery-card__badge">{item.badge}</span>}
                </div>
                <div className="gallery-card__body">
                  <h3 className="gallery-card__title">{item.title}</h3>
                  <p className="gallery-card__description">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
