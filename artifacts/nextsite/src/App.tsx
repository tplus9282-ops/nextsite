import { useState, useEffect } from 'react';
import { translations, type Language } from '@/lib/translations';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import WhyUsSection from '@/components/WhyUsSection';
import PortfolioSection from '@/components/PortfolioSection';
import ProcessSection from '@/components/ProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

function App() {
  const [lang, setLang] = useState<Language>('en');
  const t = translations[lang];

  useEffect(() => {
    const html = document.documentElement;
    if (lang === 'ar') {
      html.setAttribute('dir', 'rtl');
      html.setAttribute('lang', 'ar');
    } else {
      html.setAttribute('dir', 'ltr');
      html.setAttribute('lang', lang);
    }
  }, [lang]);

  return (
    <div
      className="min-h-[100dvh] bg-[#0A1628] text-white"
      style={{ fontFamily: "'Poppins', sans-serif" }}
      data-testid="app-root"
    >
      <Navbar lang={lang} setLang={setLang} t={t.nav} />
      <HeroSection t={t.hero} lang={lang} />
      <div className="section-divider" />
      <AboutSection t={t.about} />
      <div className="section-divider" />
      <ServicesSection t={t.services} />
      <div className="section-divider" />
      <WhyUsSection t={t.whyUs} />
      <div className="section-divider" />
      <PortfolioSection t={t.portfolio} />
      <div className="section-divider" />
      <ProcessSection t={t.process} />
      <div className="section-divider" />
      <TestimonialsSection t={t.testimonials} />
      <div className="section-divider" />
      <PricingSection t={t.pricing} />
      <div className="section-divider" />
      <FAQSection t={t.faq} />
      <div className="section-divider" />
      <ContactSection t={t.contact} />
      <Footer t={t.footer} />
      <WhatsAppButton tooltip={t.whatsapp.tooltip} />
    </div>
  );
}

export default App;
