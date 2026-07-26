import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import avatar1 from '@assets/generated_images/testimonial-1.jpg';
import avatar2 from '@assets/generated_images/testimonial-2.jpg';
import avatar3 from '@assets/generated_images/testimonial-3.jpg';

interface TestimonialItem {
  name: string;
  company: string;
  text: string;
  rating: number;
}

interface TestimonialsProps {
  t: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    items: TestimonialItem[];
  };
}

const avatars = [avatar1, avatar2, avatar3];

export default function TestimonialsSection({ t }: TestimonialsProps) {
  return (
    <section id="testimonials" className="relative py-24 lg:py-32 overflow-hidden" data-testid="testimonials-section">
      <div className="absolute inset-0 grid-overlay opacity-30" />
      <div className="orb orb-cyan absolute top-0 left-0 w-80 h-80 opacity-15" />
      <div className="orb orb-blue absolute bottom-0 right-0 w-80 h-80 opacity-15" />

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
          <p className="mt-4 text-blue-100/50 max-w-xl mx-auto">{t.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="glass-card rounded-2xl p-8 relative"
              data-testid={`testimonial-card-${i}`}
            >
              {/* Quote icon */}
              <Quote size={32} className="text-cyan-500/20 absolute top-6 right-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, si) => (
                  <Star key={si} size={14} className="star-filled fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-blue-100/70 text-sm leading-relaxed mb-6 italic">
                "{item.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={avatars[i]}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-cyan-500/30"
                />
                <div>
                  <div className="text-white font-semibold text-sm">{item.name}</div>
                  <div className="text-blue-100/40 text-xs">{item.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
