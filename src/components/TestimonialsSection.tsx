import { Icon } from './Icon';
import { SectionHeading } from './SectionHeading';

type Testimonial = {
  quote: string;
  name: string;
  location: string;
  rating: number;
};

type TestimonialsSectionProps = {
  testimonials: ReadonlyArray<Testimonial>;
};

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section id="testimonials" className="content-section content-section--tint">
      <div className="container">
        <SectionHeading
          eyebrow="What Homeowners Say"
          title="Trusted by homeowners across central Oklahoma."
        />
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <article key={index} className="testimonial-card">
              <div className="testimonial-card__stars">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <Icon key={i} name="star" className="testimonial-card__star" />
                ))}
              </div>
              <blockquote className="testimonial-card__quote">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="testimonial-card__attribution">
                <span className="testimonial-card__name">{testimonial.name}</span>
                <span className="testimonial-card__location">{testimonial.location}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
