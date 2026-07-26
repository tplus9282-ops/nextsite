import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface ContactProps {
  t: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    whatsappLabel: string;
    emailLabel: string;
    formName: string;
    formEmail: string;
    formPhone: string;
    formMessage: string;
    formSubmit: string;
    formNote: string;
  };
}

export default function ContactSection({ t }: ContactProps) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden" data-testid="contact-section">
      <div className="absolute inset-0 grid-overlay opacity-40" />
      <div className="orb orb-cyan absolute top-0 right-0 w-96 h-96 opacity-15" />
      <div className="orb orb-blue absolute bottom-0 left-0 w-96 h-96 opacity-15" />

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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* WhatsApp */}
            <a
              href="https://tinyurl.com/nextsite0"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-6 flex items-center gap-4 hover:border-green-500/40 transition-colors group block"
              data-testid="contact-whatsapp"
            >
              <div className="w-14 h-14 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                <FaWhatsapp size={28} className="text-green-400" />
              </div>
              <div>
                <div className="text-white font-semibold">{t.whatsappLabel}</div>
                <div className="text-blue-100/40 text-sm">https://tinyurl.com/nextsite0</div>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:contact@nextsite.agency"
              className="glass-card rounded-2xl p-6 flex items-center gap-4 hover:border-cyan-500/40 transition-colors group block"
              data-testid="contact-email"
            >
              <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                <Mail size={24} className="text-cyan-400" />
              </div>
              <div>
                <div className="text-white font-semibold">{t.emailLabel}</div>
                <div className="text-blue-100/40 text-sm">contact@nextsite.agency</div>
              </div>
            </a>

            {/* Phone */}
            <div className="glass-card rounded-2xl p-6 flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <Phone size={24} className="text-blue-400" />
              </div>
              <div>
                <div className="text-white font-semibold">WhatsApp / Phone</div>
                <div className="text-blue-100/40 text-sm">Available via WhatsApp link above</div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="glass-card rounded-2xl overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-900/50 to-cyan-900/30 flex items-center justify-center relative">
                <div className="absolute inset-0 grid-overlay opacity-50" />
                <div className="relative z-10 text-center">
                  <MapPin size={32} className="text-cyan-400 mx-auto mb-2" />
                  <div className="text-white font-semibold text-sm">Worldwide — Remote Agency</div>
                  <div className="text-blue-100/40 text-xs mt-1">Serving North Africa, Middle East & Europe</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
              <div>
                <label className="block text-xs font-semibold text-blue-100/60 uppercase tracking-wider mb-2">
                  {t.formName}
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder={t.formName}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-blue-100/25 text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-white/8 transition-colors"
                  required
                  data-testid="contact-input-name"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-blue-100/60 uppercase tracking-wider mb-2">
                    {t.formEmail}
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder={t.formEmail}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-blue-100/25 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
                    required
                    data-testid="contact-input-email"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-blue-100/60 uppercase tracking-wider mb-2">
                    {t.formPhone}
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder={t.formPhone}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-blue-100/25 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
                    data-testid="contact-input-phone"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-blue-100/60 uppercase tracking-wider mb-2">
                  {t.formMessage}
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder={t.formMessage}
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-blue-100/25 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                  required
                  data-testid="contact-input-message"
                />
              </div>

              {submitted ? (
                <div className="w-full py-3 rounded-xl bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-semibold text-center">
                  Message sent! We will reply within 24 hours.
                </div>
              ) : (
                <button
                  type="submit"
                  className="btn-primary w-full py-3 rounded-xl font-semibold text-sm text-white relative overflow-hidden flex items-center justify-center gap-2"
                  data-testid="contact-submit"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Send size={16} />
                    {t.formSubmit}
                  </span>
                </button>
              )}

              <p className="text-center text-blue-100/30 text-xs">{t.formNote}</p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
