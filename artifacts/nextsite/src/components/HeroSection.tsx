import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

interface HeroSectionProps {
  t: {
    badge: string;
    headline1: string;
    headline2: string;
    subtitle: string;
    cta1: string;
    cta2: string;
  };
  lang: string;
}

export default function HeroSection({ t, lang }: HeroSectionProps) {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
      data-testid="hero-section"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-overlay" />

      {/* Floating orbs */}
      <div className="orb orb-cyan absolute top-1/4 left-1/4 w-96 h-96 opacity-60" />
      <div className="orb orb-blue absolute bottom-1/3 right-1/4 w-[32rem] h-[32rem] opacity-50" />
      <div className="orb orb-indigo absolute top-1/2 right-1/3 w-64 h-64 opacity-40" />
      <div className="orb orb-cyan absolute bottom-1/4 left-1/3 w-48 h-48 opacity-30" />

      {/* Radial gradient center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(6,182,212,0.08) 0%, rgba(30,64,175,0.06) 40%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-cyan-500/30 bg-cyan-500/5 text-cyan-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse inline-block" />
            {t.badge}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight"
          dir={lang === 'ar' ? 'rtl' : 'ltr'}
        >
          <span className="text-white block">{t.headline1}</span>
          <span className="glow-text block mt-1">{t.headline2}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-blue-100/60 max-w-2xl mx-auto leading-relaxed"
        >
          {t.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => handleNav('#contact')}
            className="btn-primary group flex items-center gap-2 text-base px-8 py-4 rounded-xl font-semibold text-white relative overflow-hidden"
            data-testid="hero-cta-primary"
          >
            <span className="relative z-10 flex items-center gap-2">
              {t.cta1}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <button
            onClick={() => handleNav('#portfolio')}
            className="btn-outline group flex items-center gap-2 text-base px-8 py-4 rounded-xl font-semibold"
            data-testid="hero-cta-secondary"
          >
            <Play size={16} className="fill-cyan-400" />
            {t.cta2}
          </button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8"
        >
          {[
            { val: '200+', label: 'Projects' },
            { val: '50+', label: 'Clients' },
            { val: '5', label: 'Years' },
            { val: '100%', label: 'Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-cyan-400">{stat.val}</div>
              <div className="text-xs text-blue-100/40 uppercase tracking-wider mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-1">
            <div className="w-px h-8 bg-gradient-to-b from-cyan-400/50 to-transparent animate-pulse" />
            <div className="w-1 h-1 rounded-full bg-cyan-400/50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
