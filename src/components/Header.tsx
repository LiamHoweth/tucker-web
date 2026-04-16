import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ActionLink } from './ActionLink';
import { Icon } from './Icon';

type HeaderProps = {
  business: {
    name: string;
    logoSrc: string;
    logoAlt: string;
  };
  navigation: ReadonlyArray<{
    label: string;
    href: string;
  }>;
  quoteHref: string;
  callHref: string;
};

export function Header({ business, navigation, quoteHref, callHref }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) setMenuOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [menuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header className="site-header">
        <div className="container site-header__inner">
          <a className="site-brand" href="#home" aria-label={`${business.name} home`}>
            <img className="site-brand__logo" src={business.logoSrc} alt={business.logoAlt} />
          </a>

          <nav className="site-nav site-nav--desktop" aria-label="Primary">
            {navigation.map((item) => (
              <a key={item.href} className="site-nav__link" href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="site-header__actions">
            <ActionLink
              label="Call Now"
              href={callHref}
              variant="primary"
              icon="phone"
              className="site-header__quote"
            />
            <button
              type="button"
              className="site-nav__toggle"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <Icon name={menuOpen ? 'close' : 'menu'} className="site-nav__toggle-icon" />
            </button>
          </div>
        </div>
      </header>

      {/* Portal: renders outside the sticky header so iOS touch events work correctly */}
      {createPortal(
        <>
          <div
            className={`mobile-nav__backdrop ${menuOpen ? 'mobile-nav__backdrop--visible' : ''}`}
            onClick={closeMenu}
            aria-hidden="true"
          />
          <div className={`mobile-nav ${menuOpen ? 'mobile-nav--open' : ''}`} id="mobile-nav">
            <nav className="mobile-nav__panel container" aria-label="Mobile navigation">
              {navigation.map((item) => (
                <a key={item.href} className="mobile-nav__link" href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              ))}
              <div className="mobile-nav__actions">
                <ActionLink
                  label="Call Now"
                  href={callHref}
                  variant="primary"
                  icon="phone"
                  mobileFull
                  onClick={closeMenu}
                />
                <ActionLink
                  label="Get Free Quote"
                  href={quoteHref}
                  variant="ghost"
                  icon="quote"
                  mobileFull
                  onClick={closeMenu}
                />
              </div>
            </nav>
          </div>
        </>,
        document.body
      )}
    </>
  );
}
