import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import restaurantImg from '@assets/generated_images/portfolio-restaurant.jpg';
import realestateImg from '@assets/generated_images/portfolio-realestate.jpg';
import barberImg from '@assets/generated_images/portfolio-barber.jpg';
import medicalImg from '@assets/generated_images/portfolio-medical.jpg';
import landingImg from '@assets/generated_images/portfolio-landing.jpg';
import ecommerceImg from '@assets/generated_images/portfolio-ecommerce.jpg';

interface PortfolioProject {
  name: string;
  category: string;
  desc: string;
}

interface PortfolioProps {
  t: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    viewProject: string;
    projects: PortfolioProject[];
  };
}

const projectImages = [
  restaurantImg,
  realestateImg,
  barberImg,
  medicalImg,
  landingImg,
  ecommerceImg,
];

const categoryColors = [
  'text-orange-400 bg-orange-400/10 border-orange-400/20',
  'text-blue-400 bg-blue-400/10 border-blue-400/20',
  'text-amber-400 bg-amber-400/10 border-amber-400/20',
  'text-green-400 bg-green-400/10 border-green-400/20',
  'text-purple-400 bg-purple-400/10 border-purple-400/20',
  'text-pink-400 bg-pink-400/10 border-pink-400/20',
];

export default function PortfolioSection({ t }: PortfolioProps) {
  return (
    <section id="portfolio" className="relative py-24 lg:py-32 overflow-hidden" data-testid="portfolio-section">
      <div className="absolute inset-0 grid-overlay opacity-30" />
      <div className="orb orb-blue absolute -top-32 left-1/2 w-[40rem] h-[40rem] opacity-10" />

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group"
              data-testid={`portfolio-card-${i}`}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video bg-blue-900/30">
                <img
                  src={projectImages[i]}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                  <button
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 text-white text-xs font-semibold hover:bg-cyan-400 transition-colors"
                    data-testid={`portfolio-view-${i}`}
                  >
                    <ExternalLink size={14} />
                    {t.viewProject}
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-md border mb-2 ${categoryColors[i]}`}>
                  {project.category}
                </span>
                <h3 className="text-white font-semibold mb-1.5">{project.name}</h3>
                <p className="text-blue-100/40 text-xs leading-relaxed">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
