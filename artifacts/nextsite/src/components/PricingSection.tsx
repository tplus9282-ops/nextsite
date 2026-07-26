import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

interface PricingPlan {
  name: string;
  price: string;
  desc: string;
  features: string[];
}

interface PricingProps {
  t: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    popular: string;
    cta: string;
    plans: PricingPlan[];
  };
}

export default function PricingSection({ t }: PricingProps) {
  const handleContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="relative py-24 lg:py-32 overflow-hidden" data-testid="pricing-section">
      <div className="orb orb-blue absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] opacity-10" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 mb-4">
            {t.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
            <span className="text-white">{t.title} </span>
            <span className="glow-text">{t.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-blue-100/50 max-w-xl mx-auto">{t.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {t.plans.map((plan, i) => {
            const isPopular = i === 1;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className={`relative glass-card rounded-2xl p-8 flex flex-col ${
                  isPopular ? 'pricing-popular border-cyan-500/50 scale-105' : ''
                }`}
                data-testid={`pricing-card-${i}`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold shadow-lg">
                      <Sparkles size={12} />
                      {t.popular}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className={`text-xl font-bold mb-1 ${isPopular ? 'text-cyan-400' : 'text-white'}`}>
                    {plan.name}
                  </h3>
                  <div className="text-3xl lg:text-4xl font-bold text-white mt-3 mb-2">
                    {plan.price}
                  </div>
                  <p className="text-blue-100/40 text-sm">{plan.desc}</p>
                </div>

                <div className="section-divider mb-6" />

                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((feature, fi) => (
                    <li key={fi} className="flex items-center gap-3 text-sm text-blue-100/70">
                      <Check size={15} className="text-cyan-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={handleContact}
                  className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    isPopular
                      ? 'btn-primary text-white relative overflow-hidden'
                      : 'btn-outline'
                  }`}
                  data-testid={`pricing-cta-${i}`}
                >
                  <span className="relative z-10">{t.cta}</span>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
