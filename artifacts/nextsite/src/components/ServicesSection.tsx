import { motion } from 'framer-motion';
import {
  Globe, Utensils, Scissors, Stethoscope, Building2,
  LayoutTemplate, RefreshCw, Search, MapPin, Mail,
  MessageCircle, Server
} from 'lucide-react';

interface ServiceItem {
  name: string;
  desc: string;
}

interface ServicesProps {
  t: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    items: ServiceItem[];
  };
}

const icons = [
  Globe, Utensils, Scissors, Stethoscope, Building2,
  LayoutTemplate, RefreshCw, Search, MapPin, Mail,
  MessageCircle, Server,
];

const iconColors = [
  'text-cyan-400', 'text-orange-400', 'text-amber-400', 'text-green-400',
  'text-blue-400', 'text-purple-400', 'text-pink-400', 'text-yellow-400',
  'text-teal-400', 'text-indigo-400', 'text-emerald-400', 'text-sky-400',
];

const iconBgs = [
  'bg-cyan-500/10', 'bg-orange-500/10', 'bg-amber-500/10', 'bg-green-500/10',
  'bg-blue-500/10', 'bg-purple-500/10', 'bg-pink-500/10', 'bg-yellow-500/10',
  'bg-teal-500/10', 'bg-indigo-500/10', 'bg-emerald-500/10', 'bg-sky-500/10',
];

export default function ServicesSection({ t }: ServicesProps) {
  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden" data-testid="services-section">
      {/* Background */}
      <div className="absolute inset-0 grid-overlay opacity-50" />
      <div className="orb orb-cyan absolute top-0 right-0 w-96 h-96 opacity-15" />
      <div className="orb orb-blue absolute bottom-0 left-0 w-80 h-80 opacity-15" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {t.items.map((service, i) => {
            const Icon = icons[i] || Globe;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                className="glass-card rounded-2xl p-6 group cursor-default"
                data-testid={`service-card-${i}`}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${iconBgs[i]} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={22} className={iconColors[i]} />
                </div>
                <h3 className="font-semibold text-white mb-2 text-sm leading-snug">{service.name}</h3>
                <p className="text-blue-100/40 text-xs leading-relaxed">{service.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
