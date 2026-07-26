import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { type Language } from '@/lib/translations';
import logoPath from '@assets/WhatsApp_Image_2026-07-27_at_00.19.57_1785108585541.jpeg';

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
  t: Record<string, string>;
}

const navLinks = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'services', href: '#services' },
  { key: 'portfolio', href: '#portfolio' },
  { key: 'process', href: '#process' },
  { key: 'pricing', href: '#pricing' },
  { key: 'testimonials', href: '#testimonials' },
  { key: 'faq', href: '#faq' },
  { key: 'contact', href: '#contact' },
];

export default function Navbar({ lang, setLang, t }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-panel shadow-lg'
          : 'bg-transparent'
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="flex items-center gap-2 flex-shrink-0"
            data-testid="nav-logo"
          >
            <img
              src={logoPath}
              alt="NextSite Logo"
              className="h-10 w-auto rounded-md"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.slice(0, 7).map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-sm font-medium text-blue-100/80 hover:text-cyan-400 transition-colors duration-200 px-2 py-1 rounded-md hover:bg-white/5"
                data-testid={`nav-link-${link.key}`}
              >
                {t[link.key]}
              </a>
            ))}
          </div>

          {/* Right side: Lang switcher + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center gap-1 bg-white/5 rounded-full px-1 py-1 border border-white/10">
              {(['en', 'ar', 'fr'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`text-xs font-semibold px-3 py-1 rounded-full transition-all duration-200 ${
                    lang === l
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md'
                      : 'text-blue-100/60 hover:text-white hover:bg-white/10'
                  }`}
                  data-testid={`lang-btn-${l}`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              className="btn-primary text-sm px-5 py-2.5 rounded-lg font-semibold text-white relative overflow-hidden"
              data-testid="nav-cta"
            >
              <span>{t.cta}</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-blue-100 hover:bg-white/10 transition-colors"
            data-testid="mobile-menu-toggle"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden glass-panel border-t border-white/10">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="block text-sm font-medium text-blue-100/80 hover:text-cyan-400 transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
                data-testid={`mobile-nav-${link.key}`}
              >
                {t[link.key]}
              </a>
            ))}
            <div className="pt-3 pb-1 border-t border-white/10 flex items-center gap-2">
              {(['en', 'ar', 'fr'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => { setLang(l); setMobileOpen(false); }}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all ${
                    lang === l
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white'
                      : 'border border-white/20 text-blue-100/60 hover:text-white'
                  }`}
                  data-testid={`mobile-lang-${l}`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); setMobileOpen(false); }}
              className="block w-full text-center btn-primary text-sm px-4 py-2.5 rounded-lg font-semibold text-white mt-2 relative overflow-hidden"
              data-testid="mobile-cta"
            >
              <span>{t.cta}</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
