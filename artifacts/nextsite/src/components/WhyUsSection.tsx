import { motion } from 'framer-motion';
import { Palette, Smartphone, Zap, DollarSign, TrendingUp, HeartHandshake } from 'lucide-react';

interface WhyUsProps {
  t: {
    badge: string;
    title: string;
    titleHighlight: string;
    features: { name: string; desc: string }[];
  };
}

const icons = [Palette, Smartphone, Zap, DollarSign, TrendingUp, HeartHandshake];

export default function WhyUsSection({ t }: WhyUsProps) {
  return (
    <section id="why-us" className="relative py-24 lg:py-32 overflow-hidden" data-testid="why-us-section">
      <div className="orb orb-cyan absolute top-1/2 right-0 w-80 h-80 opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.features.map((feature, i) => {
            const Icon = icons[i] || Zap;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-8 group"
                data-testid={`why-card-${i}`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-500/20 border border-cyan-500/20 flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
                    <Icon size={22} className="text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">{feature.name}</h3>
                    <p className="text-blue-100/50 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
