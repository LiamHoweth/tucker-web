import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { GallerySection } from './components/GallerySection';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PricingSection } from './components/PricingSection';
import { ServiceAreaSection } from './components/ServiceAreaSection';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { siteContent } from './content/siteContent';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
  const reveal = useScrollReveal({ threshold: 0.08, rootMargin: '0px 0px -60px 0px' });

  return (
    <>
      <Header
        business={siteContent.business}
        navigation={siteContent.navigation}
        quoteHref={siteContent.contact.quoteHref}
        callHref={siteContent.contact.callHref}
      />
      <main>
        <Hero
          business={siteContent.business}
          contact={siteContent.contact}
          ctaLabels={siteContent.ctaLabels}
          serviceAreas={siteContent.serviceAreas}
          services={siteContent.services}
        />
        <div ref={reveal}>
          <ServicesSection
            services={siteContent.services}
            quoteHref={siteContent.contact.quoteHref}
          />
        </div>
        <div ref={reveal}>
          <WhyChooseUsSection
            reasons={siteContent.reasons}
            feature={siteContent.trustFeature}
          />
        </div>
        <div ref={reveal}>
          <TestimonialsSection testimonials={siteContent.testimonials} />
        </div>
        <div ref={reveal}>
          <AboutSection about={siteContent.about} />
        </div>
        <div ref={reveal}>
          <GallerySection galleryItems={siteContent.galleryItems} />
        </div>
        <div ref={reveal}>
          <PricingSection
            pricing={siteContent.pricing}
            contact={siteContent.contact}
            ctaLabels={siteContent.ctaLabels}
          />
        </div>
        <div ref={reveal}>
          <ServiceAreaSection
            serviceAreas={siteContent.serviceAreas}
            serviceAreaNote={siteContent.serviceAreaNote}
            contact={siteContent.contact}
          />
        </div>
        <div ref={reveal}>
          <ContactSection
            business={siteContent.business}
            contact={siteContent.contact}
            ctaLabels={siteContent.ctaLabels}
            contactFormServices={siteContent.contactFormServices}
          />
        </div>
      </main>
      <Footer
        business={siteContent.business}
        navigation={siteContent.navigation}
        contact={siteContent.contact}
      />
    </>
  );
}

export default App;
