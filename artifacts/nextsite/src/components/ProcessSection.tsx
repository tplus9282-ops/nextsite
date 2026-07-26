import { motion } from 'framer-motion';
import { MessageSquare, ClipboardList, PenTool, Code2, Rocket } from 'lucide-react';

interface ProcessStep {
  num: string;
  name: string;
  desc: string;
}

interface ProcessProps {
  t: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    steps: ProcessStep[];
  };
}

const stepIcons = [MessageSquare, ClipboardList, PenTool, Code2, Rocket];

export default function ProcessSection({ t }: ProcessProps) {
  return (
    <section id="process" className="relative py-24 lg:py-32 overflow-hidden" data-testid="process-section">
      <div className="orb orb-indigo absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] opacity-10" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
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

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

            <div className="grid grid-cols-5 gap-4">
              {t.steps.map((step, i) => {
                const Icon = stepIcons[i];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.12 }}
                    className="text-center"
                    data-testid={`process-step-${i}`}
                  >
                    {/* Icon circle */}
                    <div className="relative inline-flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600/30 to-cyan-500/20 border border-cyan-500/30 flex items-center justify-center mb-4 mx-auto group hover:border-cyan-500/60 transition-colors cursor-default">
                        <Icon size={28} className="text-cyan-400" />
                      </div>
                      <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white text-xs font-bold">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="text-white font-semibold mb-2 text-sm">{step.name}</h3>
                    <p className="text-blue-100/40 text-xs leading-relaxed">{step.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden space-y-4">
          {t.steps.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card rounded-2xl p-6 flex items-start gap-4"
                data-testid={`process-step-mobile-${i}`}
              >
                <div className="flex-shrink-0 relative">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600/30 to-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
                    <Icon size={22} className="text-cyan-400" />
                  </div>
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white text-xs font-bold">
                    {i + 1}
                  </span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{step.name}</h3>
                  <p className="text-blue-100/40 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
