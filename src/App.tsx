import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { GallerySection } from './components/GallerySection';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PricingSection } from './components/PricingSection';
import { ServiceAreaSection } from './components/ServiceAreaSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { siteContent } from './content/siteContent';

function App() {
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
        <ServicesSection
          services={siteContent.services}
          quoteHref={siteContent.contact.quoteHref}
        />
        <WhyChooseUsSection
          reasons={siteContent.reasons}
          feature={siteContent.trustFeature}
        />
        <AboutSection about={siteContent.about} />
        <GallerySection galleryItems={siteContent.galleryItems} />
        <PricingSection
          pricing={siteContent.pricing}
          contact={siteContent.contact}
          ctaLabels={siteContent.ctaLabels}
        />
        <ServiceAreaSection
          serviceAreas={siteContent.serviceAreas}
          serviceAreaNote={siteContent.serviceAreaNote}
          contact={siteContent.contact}
        />
        <ContactSection
          business={siteContent.business}
          contact={siteContent.contact}
          ctaLabels={siteContent.ctaLabels}
        />
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
