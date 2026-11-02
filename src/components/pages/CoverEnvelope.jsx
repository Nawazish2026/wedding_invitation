import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { triggerRosePetalShower } from '../../utils/confetti';
import { ChevronDown } from 'lucide-react';

/* ====== Inline SVG Components for the Cover ====== */

const FloralCornerSVG = ({ className = '' }) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Main vine stem */}
    <path d="M5 5 C30 5, 40 20, 50 50 C55 70, 60 100, 65 130 C68 150, 70 170, 72 195" 
          stroke="#D4AF37" strokeWidth="1.2" fill="none" opacity="0.7"/>
    <path d="M5 5 C5 30, 20 40, 50 50 C70 55, 100 60, 130 65 C150 68, 170 70, 195 72" 
          stroke="#D4AF37" strokeWidth="1.2" fill="none" opacity="0.7"/>
    {/* Rose at corner */}
    <circle cx="24" cy="24" r="14" fill="#d4577a" opacity="0.6"/>
    <circle cx="24" cy="24" r="9" fill="#e8a0b4" opacity="0.7"/>
    <circle cx="24" cy="24" r="5" fill="#fce4ec" opacity="0.8"/>
    {/* Small bud 1 */}
    <circle cx="55" cy="35" r="5" fill="#d4577a" opacity="0.4"/>
    <circle cx="55" cy="35" r="3" fill="#e8a0b4" opacity="0.5"/>
    {/* Small bud 2 */}
    <circle cx="35" cy="55" r="5" fill="#d4577a" opacity="0.4"/>
    <circle cx="35" cy="55" r="3" fill="#e8a0b4" opacity="0.5"/>
    {/* Leaf shapes */}
    <ellipse cx="72" cy="50" rx="10" ry="5" transform="rotate(-30 72 50)" fill="#4a7c31" opacity="0.35"/>
    <ellipse cx="50" cy="72" rx="10" ry="5" transform="rotate(60 50 72)" fill="#4a7c31" opacity="0.35"/>
    <ellipse cx="95" cy="62" rx="8" ry="4" transform="rotate(-15 95 62)" fill="#2d5016" opacity="0.3"/>
    <ellipse cx="62" cy="95" rx="8" ry="4" transform="rotate(75 62 95)" fill="#2d5016" opacity="0.3"/>
    {/* Tiny gold dots */}
    <circle cx="42" cy="42" r="2" fill="#F5E6A3" opacity="0.7"/>
    <circle cx="80" cy="48" r="1.5" fill="#D4AF37" opacity="0.5"/>
    <circle cx="48" cy="80" r="1.5" fill="#D4AF37" opacity="0.5"/>
    <circle cx="110" cy="58" r="1" fill="#F5E6A3" opacity="0.4"/>
    <circle cx="58" cy="110" r="1" fill="#F5E6A3" opacity="0.4"/>
    {/* Curling tendrils */}
    <path d="M60 55 Q70 45, 80 55" stroke="#D4AF37" strokeWidth="0.8" fill="none" opacity="0.4"/>
    <path d="M55 60 Q45 70, 55 80" stroke="#D4AF37" strokeWidth="0.8" fill="none" opacity="0.4"/>
  </svg>
);

const FloralDividerSVG = ({ className = '' }) => (
  <svg viewBox="0 0 400 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid meet">
    {/* Left vine */}
    <path d="M20 20 C60 20, 80 12, 120 14 C140 15, 160 18, 180 20" stroke="#D4AF37" strokeWidth="1" fill="none" opacity="0.6"/>
    {/* Right vine */}
    <path d="M220 20 C260 18, 280 15, 300 14 C340 12, 360 20, 380 20" stroke="#D4AF37" strokeWidth="1" fill="none" opacity="0.6"/>
    {/* Central rosette */}
    <circle cx="200" cy="20" r="8" fill="#d4577a" opacity="0.5"/>
    <circle cx="200" cy="20" r="5" fill="#e8a0b4" opacity="0.6"/>
    <circle cx="200" cy="20" r="2.5" fill="#fce4ec" opacity="0.8"/>
    {/* Small buds */}
    <circle cx="140" cy="16" r="3" fill="#d4577a" opacity="0.3"/>
    <circle cx="260" cy="16" r="3" fill="#d4577a" opacity="0.3"/>
    {/* Leaf accents */}
    <ellipse cx="100" cy="18" rx="8" ry="3.5" transform="rotate(-10 100 18)" fill="#4a7c31" opacity="0.25"/>
    <ellipse cx="300" cy="18" rx="8" ry="3.5" transform="rotate(10 300 18)" fill="#4a7c31" opacity="0.25"/>
    {/* Gold dots */}
    <circle cx="60" cy="20" r="1.5" fill="#F5E6A3" opacity="0.5"/>
    <circle cx="340" cy="20" r="1.5" fill="#F5E6A3" opacity="0.5"/>
    {/* End dots */}
    <circle cx="20" cy="20" r="2" fill="#D4AF37" opacity="0.6"/>
    <circle cx="380" cy="20" r="2" fill="#D4AF37" opacity="0.6"/>
  </svg>
);

const MasjidSilhouetteSVG = ({ className = '' }) => (
  <svg viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMax meet">
    {/* Central dome */}
    <path d="M140 120 L140 65 Q140 25, 200 15 Q260 25, 260 65 L260 120" fill="currentColor" opacity="0.06"/>
    {/* Side domes */}
    <path d="M80 120 L80 80 Q80 55, 110 50 Q140 55, 140 80 L140 120" fill="currentColor" opacity="0.04"/>
    <path d="M260 120 L260 80 Q260 55, 290 50 Q320 55, 320 80 L320 120" fill="currentColor" opacity="0.04"/>
    {/* Minarets */}
    <rect x="65" y="40" width="8" height="80" fill="currentColor" opacity="0.05"/>
    <rect x="327" y="40" width="8" height="80" fill="currentColor" opacity="0.05"/>
    {/* Minaret caps */}
    <path d="M65 40 Q69 28, 73 40" fill="currentColor" opacity="0.06"/>
    <path d="M327 40 Q331 28, 335 40" fill="currentColor" opacity="0.06"/>
    {/* Crescent on top */}
    <circle cx="200" cy="12" r="5" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.08"/>
    <circle cx="202" cy="11" r="4" fill="currentColor" opacity="0.03"/>
  </svg>
);

const CrescentMoonSVG = ({ className = '' }) => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M35 8 A22 22 0 1 0 35 52 A18 18 0 1 1 35 8Z" fill="#D4AF37" opacity="0.15"/>
    <circle cx="42" cy="14" r="1.5" fill="#F5E6A3" opacity="0.4"/>
    <circle cx="48" cy="22" r="1" fill="#F5E6A3" opacity="0.3"/>
    <circle cx="50" cy="32" r="1.2" fill="#F5E6A3" opacity="0.35"/>
    <circle cx="46" cy="42" r="0.8" fill="#F5E6A3" opacity="0.25"/>
  </svg>
);

/* ====== Main Cover Component ====== */
export const CoverEnvelope = ({ data, theme, onProceed, isMobile }) => {
  const [isRevealing, setIsRevealing] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    // Slight delay to show entrance
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleOpen = () => {
    setIsRevealing(true);
    triggerRosePetalShower();
    setTimeout(() => {
      triggerRosePetalShower();
      onProceed();
    }, 1400);
  };

  const groomFirst = data.groom.fullName.split(' ')[0];
  const brideFirst = data.bride.fullName.split(' ')[0];

  return (
    <div ref={containerRef} className="relative min-h-[100dvh] flex flex-col items-center justify-center px-3 py-6 sm:px-6 sm:py-10 overflow-hidden">
      
      {/* ===== Background Ambient Layers ===== */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial gold glow top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px]"
          style={{ background: `radial-gradient(ellipse, ${theme.glow} 0%, transparent 70%)` }} />
        {/* Radial glow bottom */}
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full blur-[100px]"
          style={{ background: `radial-gradient(ellipse, ${theme.glow} 0%, transparent 75%)` }} />
        {/* Jaali pattern overlay */}
        <div className="absolute inset-0 bg-jaali opacity-30" />
        {/* Masjid silhouette at bottom */}
        <MasjidSilhouetteSVG className="absolute bottom-0 left-0 right-0 w-full text-amber-300 h-28 sm:h-36" />
      </div>

      {/* ===== The Invitation Card ===== */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95, rotateX: 8 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className={`card-3d relative w-full ${isMobile ? 'max-w-[400px]' : 'max-w-xl'} z-10`}
          >
            <div className="card-3d-inner invitation-glass rounded-[24px] sm:rounded-[32px] p-5 sm:p-8 md:p-10 text-center relative overflow-hidden">
              
              {/* Corner Florals */}
              <FloralCornerSVG className="absolute top-0 left-0 w-20 h-20 sm:w-28 sm:h-28 opacity-80" />
              <FloralCornerSVG className="absolute top-0 right-0 w-20 h-20 sm:w-28 sm:h-28 opacity-80 scale-x-[-1]" />
              <FloralCornerSVG className="absolute bottom-0 left-0 w-20 h-20 sm:w-28 sm:h-28 opacity-80 scale-y-[-1]" />
              <FloralCornerSVG className="absolute bottom-0 right-0 w-20 h-20 sm:w-28 sm:h-28 opacity-80 scale-[-1]" />

              {/* Shimmer line overlay */}
              <div className="absolute inset-0 animate-shimmer rounded-[24px] sm:rounded-[32px] pointer-events-none" />

              {/* ---- Top Badge ---- */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex justify-center mb-3 sm:mb-4"
              >
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/10 to-amber-400/5 border border-amber-400/25 text-amber-300 text-[10px] sm:text-xs tracking-[0.18em] uppercase font-serif">
                  <CrescentMoonSVG className="w-4 h-4" />
                  <span>Royal Wedding Invitation</span>
                </div>
              </motion.div>

              {/* ---- Bismillah ---- */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="mb-2"
              >
                <div className="font-arabic text-xl sm:text-2xl md:text-3xl gold-gradient-text-animated tracking-wider leading-relaxed drop-shadow-[0_2px_12px_rgba(212,175,55,0.35)]">
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                </div>
                <p className="text-[9px] sm:text-[10px] font-serif italic text-amber-200/50 tracking-[0.2em] mt-1">
                  In the name of Allah, the Most Gracious, the Most Merciful
                </p>
              </motion.div>

              <FloralDividerSVG className="w-56 sm:w-72 mx-auto my-3 sm:my-4" />

              {/* ---- Host Introduction ---- */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="text-[10px] sm:text-xs text-stone-300/80 font-serif leading-relaxed max-w-xs sm:max-w-sm mx-auto mb-4 sm:mb-6"
              >
                {data.hostIntro.invitationGreeting}
              </motion.p>

              {/* ---- Monogram Crest ---- */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, duration: 0.6, ease: 'backOut' }}
                className="relative flex justify-center my-4 sm:my-6"
              >
                <div className="relative">
                  {/* Outer decorative ring */}
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-dashed border-amber-400/30 flex items-center justify-center p-1.5 animate-[sway_6s_ease-in-out_infinite]">
                    {/* Inner seal */}
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-[#961c28]/60 via-[#6d131b]/80 to-[#40070c]/90 border border-amber-400/40 flex flex-col items-center justify-center seal-pulse">
                      <span className="font-ornate text-2xl sm:text-3xl font-extrabold gold-gradient-text tracking-widest">
                        {data.monogram}
                      </span>
                      <span className="text-[7px] sm:text-[8px] uppercase tracking-[0.25em] text-amber-200/70 font-serif mt-0.5">
                        Nikah Mubarak
                      </span>
                    </div>
                  </div>
                  
                  {/* Animated glow ring */}
                  <div className="absolute inset-0 rounded-full animate-ping opacity-10 border border-amber-400" style={{ animationDuration: '3s' }} />
                </div>
              </motion.div>

              {/* ---- Couple Names ---- */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.6 }}
                className="space-y-1 mb-2"
              >
                <h1 className="font-heading text-xl sm:text-3xl md:text-4xl font-bold text-stone-50 tracking-wide leading-tight">
                  {groomFirst}
                  <span className="font-script text-amber-300 text-2xl sm:text-3xl md:text-4xl mx-2 sm:mx-3">&</span>
                  {brideFirst}
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.4 }}
              >
                <p className="font-script text-xl sm:text-2xl text-amber-300/90">
                  Dawat-e-Nikah & Walima
                </p>
              </motion.div>

              <FloralDividerSVG className="w-48 sm:w-64 mx-auto my-3 sm:my-5" />

              {/* ---- Open / CTA Button ---- */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <button
                  onClick={handleOpen}
                  disabled={isRevealing}
                  className="group relative overflow-hidden rounded-full px-8 py-3 sm:px-10 sm:py-3.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-stone-950 font-heading font-bold text-xs sm:text-sm tracking-widest uppercase shadow-[0_8px_30px_rgba(212,175,55,0.35)] hover:shadow-[0_8px_40px_rgba(212,175,55,0.55)] active:scale-95 disabled:opacity-60 transition-all duration-300"
                >
                  {/* Button shimmer overlay */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                  
                  <span className="relative z-10 flex items-center gap-2">
                    {isRevealing ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="32" strokeLinecap="round"/>
                        </svg>
                        <span>Unfolding…</span>
                      </>
                    ) : (
                      <>
                        <span>✦</span>
                        <span>Open Invitation</span>
                        <span>✦</span>
                      </>
                    )}
                  </span>
                </button>

                {/* Swipe / tap hint */}
                <div className="mt-4 sm:mt-5 flex flex-col items-center gap-1 text-amber-300/40">
                  <ChevronDown className="w-4 h-4 swipe-hint" />
                  <span className="text-[9px] tracking-widest uppercase font-serif">
                    Tap to Reveal
                  </span>
                </div>
              </motion.div>

              {/* ---- Bottom Hashtag ---- */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.1, duration: 0.4 }}
                className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-stone-700/40"
              >
                <span className="font-serif italic text-[10px] sm:text-xs text-amber-300/50 tracking-wider">
                  {data.weddingHashtag}
                </span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
