import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

interface WhatsAppButtonProps {
  tooltip: string;
}

export default function WhatsAppButton({ tooltip }: WhatsAppButtonProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip */}
      {hovered && (
        <div
          className="glass-panel rounded-lg px-3 py-2 text-white text-xs font-medium whitespace-nowrap border border-green-500/20 shadow-lg"
          style={{ animation: 'fadeIn 0.2s ease' }}
        >
          {tooltip}
        </div>
      )}

      {/* Button */}
      <a
        href="https://tinyurl.com/nextsite0"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:bg-green-400 transition-colors"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        data-testid="whatsapp-float-btn"
        aria-label={tooltip}
      >
        <FaWhatsapp size={28} className="text-white" />
      </a>
    </div>
  );
}
