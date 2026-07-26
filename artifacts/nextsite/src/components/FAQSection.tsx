import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQProps {
  t: {
    badge: string;
    title: string;
    titleHighlight: string;
    items: FAQItem[];
  };
}

export default function FAQSection({ t }: FAQProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 lg:py-32 overflow-hidden" data-testid="faq-section">
      <div className="orb orb-cyan absolute bottom-0 right-0 w-64 h-64 opacity-15" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="space-y-3">
          {t.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="glass-card rounded-xl overflow-hidden"
              data-testid={`faq-item-${i}`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left"
                data-testid={`faq-toggle-${i}`}
              >
                <span className="text-white font-medium text-sm leading-relaxed">{item.q}</span>
                <span className="flex-shrink-0">
                  {open === i ? (
                    <Minus size={18} className="text-cyan-400" />
                  ) : (
                    <Plus size={18} className="text-blue-100/40" />
                  )}
                </span>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-blue-100/50 text-sm leading-relaxed border-t border-white/5 pt-4">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
