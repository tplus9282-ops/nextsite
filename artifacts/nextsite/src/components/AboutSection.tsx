import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

interface AboutProps {
  t: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    description: string;
    stats: {
      projects: string;
      projectsLabel: string;
      clients: string;
      clientsLabel: string;
      years: string;
      yearsLabel: string;
      satisfaction: string;
      satisfactionLabel: string;
    };
  };
}

function useCountUp(target: string, duration = 2000, inView: boolean) {
  const [count, setCount] = useState('0');

  useEffect(() => {
    if (!inView) return;
    const isPercent = target.includes('%');
    const hasPlus = target.includes('+');
    const numStr = target.replace(/[^0-9]/g, '');
    const num = parseInt(numStr, 10);

    if (isNaN(num)) { setCount(target); return; }

    let start = 0;
    const step = num / (duration / 16);
    const timer = setInterval(() => {
      start = Math.min(start + step, num);
      const rounded = Math.floor(start);
      setCount(`${rounded}${hasPlus ? '+' : ''}${isPercent ? '%' : ''}`);
      if (rounded >= num) {
        setCount(target);
        clearInterval(timer);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration, inView]);

  return count;
}

function StatCard({ val, label, inView }: { val: string; label: string; inView: boolean }) {
  const animated = useCountUp(val, 1800, inView);
  return (
    <div className="glass-card rounded-2xl p-6 text-center">
      <div className="text-3xl xl:text-4xl font-bold glow-text">{animated}</div>
      <div className="text-sm text-blue-100/50 mt-1 font-medium">{label}</div>
    </div>
  );
}

export default function AboutSection({ t }: AboutProps) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const stats = [
    { val: t.stats.projects, label: t.stats.projectsLabel },
    { val: t.stats.clients, label: t.stats.clientsLabel },
    { val: t.stats.years, label: t.stats.yearsLabel },
    { val: t.stats.satisfaction, label: t.stats.satisfactionLabel },
  ];

  const highlights = [
    'Multilingual support (Arabic, English, French)',
    'Fast delivery — most sites in under 14 days',
    'Serving clients across 15+ countries',
  ];

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden" data-testid="about-section">
      {/* Background accent */}
      <div className="orb orb-blue absolute -top-32 -right-32 w-96 h-96 opacity-20" />
      <div className="orb orb-cyan absolute -bottom-16 -left-16 w-64 h-64 opacity-15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-4"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-cyan-500/30 bg-cyan-500/5 text-cyan-400">
            {t.badge}
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6"
        >
          <span className="text-white">{t.title} </span>
          <span className="glow-text">{t.titleHighlight}</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-16">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-blue-100/70 text-lg leading-relaxed mb-6">
              {t.subtitle}
            </p>
            <p className="text-blue-100/50 leading-relaxed mb-8">
              {t.description}
            </p>
            <div className="space-y-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-cyan-400 flex-shrink-0" />
                  <span className="text-blue-100/70 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <StatCard val={s.val} label={s.label} inView={inView} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
