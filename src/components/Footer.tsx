type FooterProps = {
  business: {
    name: string;
    tagline: string;
    logoSrc: string;
    logoAlt: string;
  };
  navigation: ReadonlyArray<{
    label: string;
    href: string;
  }>;
  contact: {
    phoneDisplay: string;
    callHref: string;
    textHref: string;
  };
};

export function Footer({ business, navigation, contact }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand-block">
          <img className="site-footer__logo" src={business.logoSrc} alt={business.logoAlt} />
          <p className="site-footer__tagline">{business.tagline}</p>
        </div>

        <nav className="site-footer__nav" aria-label="Footer">
          {navigation.map((item) => (
            <a key={item.href} className="site-footer__link" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-footer__contact">
          <a href={contact.callHref}>Call: {contact.phoneDisplay}</a>
          <a href={contact.textHref}>Text: {contact.phoneDisplay}</a>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p>&copy; {new Date().getFullYear()} {business.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
