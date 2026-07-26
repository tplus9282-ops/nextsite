import { SiFacebook, SiInstagram, SiX } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';
import logoPath from '@assets/WhatsApp_Image_2026-07-27_at_00.19.57_1785108585541.jpeg';

interface FooterProps {
  t: {
    description: string;
    copyright: string;
    privacy: string;
    terms: string;
  };
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer className="relative border-t border-white/5 py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logoPath} alt="NextSite" className="h-10 w-auto rounded-md" />
            </div>
            <p className="text-blue-100/40 text-sm leading-relaxed max-w-xs">
              {t.description}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Quick Links</h4>
            <div className="space-y-2">
              {['#services', '#portfolio', '#pricing', '#contact'].map((href) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-blue-100/40 text-sm hover:text-cyan-400 transition-colors capitalize"
                >
                  {href.replace('#', '')}
                </a>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Contact</h4>
            <div className="space-y-2">
              <p className="text-blue-100/40 text-sm">contact@nextsite.agency</p>
              <a
                href="https://tinyurl.com/nextsite0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400/70 text-sm hover:text-cyan-400 transition-colors block"
              >
                WhatsApp: tinyurl.com/nextsite0
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 mt-5">
              {[
                { Icon: SiFacebook, href: '#', label: 'Facebook' },
                { Icon: SiInstagram, href: '#', label: 'Instagram' },
                { Icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
                { Icon: SiX, href: '#', label: 'X' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-blue-100/40 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all"
                  data-testid={`social-${label.toLowerCase()}`}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-100/30 text-xs">
            &copy; {t.copyright}
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-blue-100/30 text-xs hover:text-cyan-400 transition-colors">
              {t.privacy}
            </a>
            <span className="text-blue-100/20">|</span>
            <a href="#" className="text-blue-100/30 text-xs hover:text-cyan-400 transition-colors">
              {t.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
