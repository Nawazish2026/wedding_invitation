import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { QURANIC_VERSES } from '../../data/defaultInvitation';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { FloralCorner, FloralDivider } from '../FloralOrnaments';

/* ===== Animated Countdown Digit ===== */
const CountdownUnit = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="relative w-12 h-14 sm:w-16 sm:h-18 rounded-xl sm:rounded-2xl bg-gradient-to-b from-stone-900/90 to-stone-950/95 border border-amber-400/35 flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.4),0_0_15px_rgba(212,175,55,0.15)] overflow-hidden">
      {/* Top shine */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />
      {/* Middle divider line */}
      <div className="absolute top-1/2 left-1 right-1 h-[1px] bg-stone-700/50 pointer-events-none" />
      <span className="font-heading text-lg sm:text-2xl font-bold text-amber-300 tabular-nums drop-shadow-[0_0_8px_rgba(212,175,55,0.3)]">
        {String(value).padStart(2, '0')}
      </span>
    </div>
    <span className="mt-1.5 text-[8px] sm:text-[9px] text-stone-400 uppercase tracking-[0.2em] font-serif">
      {label}
    </span>
  </div>
);

/* ===== Main BismillahPage Component ===== */
export const BismillahPage = ({ data, theme, onNext, onPrev, isMobile }) => {
  const selectedVerse = QURANIC_VERSES.find(v => v.id === data.selectedVerseId) || QURANIC_VERSES[0];

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date(data.nikahDate).getTime();
    const interval = setInterval(() => {
      const now = Date.now();
      const diff = targetDate - now;
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / 86400000),
          hours: Math.floor((diff % 86400000) / 3600000),
          minutes: Math.floor((diff % 3600000) / 60000),
          seconds: Math.floor((diff % 60000) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [data.nikahDate]);

  return (
    <div className="relative min-h-[100dvh] flex items-center justify-center px-3 py-6 sm:px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-moroccan-stars opacity-40" />
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full blur-[100px]" 
          style={{ background: `radial-gradient(ellipse, ${theme.glow}, transparent 70%)` }} 
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`card-3d relative w-full ${isMobile ? 'max-w-[420px]' : 'max-w-2xl'} z-10`}
      >
        <div className="card-3d-inner invitation-glass rounded-[24px] sm:rounded-[32px] p-5 sm:p-8 md:p-10 text-center relative overflow-hidden">
          
          {/* Floral corners */}
          <FloralCorner position="top-left" size={90} className="opacity-75 sm:size-[130px]" />
          <FloralCorner position="top-right" size={90} className="opacity-75 sm:size-[130px]" />
          <FloralCorner position="bottom-left" size={90} className="opacity-75 sm:size-[130px]" />
          <FloralCorner position="bottom-right" size={90} className="opacity-75 sm:size-[130px]" />

          <div className="absolute inset-0 animate-shimmer rounded-[24px] sm:rounded-[32px] pointer-events-none" />

          {/* Bismillah Calligraphy */}
          <div className="pt-2 sm:pt-4 mb-2">
            <div className="font-arabic text-xl sm:text-2xl md:text-3xl gold-gradient-text-animated tracking-wider leading-loose drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)]">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </div>
            <p className="text-[9px] sm:text-[10px] font-serif italic text-amber-200/50 tracking-[0.15em] mt-0.5">
              In the name of Allah, the Most Gracious, the Most Merciful
            </p>
          </div>

          <FloralDivider width={260} className="mx-auto my-3" />

          {/* Quranic Verse Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="my-3 sm:my-5 p-4 sm:p-6 rounded-2xl bg-stone-900/60 border border-amber-400/20 relative backdrop-blur-sm"
          >
            {/* Verse Arabic */}
            <div className="font-arabic text-base sm:text-xl text-amber-200/95 leading-loose mb-2.5" dir="rtl">
              {selectedVerse.arabic}
            </div>
            {/* Translation */}
            <p className="font-serif-luxury italic text-stone-200 text-xs sm:text-sm leading-relaxed mb-3 max-w-md mx-auto">
              {selectedVerse.translation}
            </p>
            {/* Surah reference */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/30">
              <span className="text-[10px] sm:text-xs text-amber-300 font-serif font-semibold tracking-wider">
                {selectedVerse.surah}
              </span>
            </div>
          </motion.div>

          {/* Parents Announcement */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="my-3 sm:my-5"
          >
            <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-amber-400/70 font-bold mb-2.5">
              In the Gracious Presence & Blessings of
            </p>
            <div className={`grid ${isMobile ? 'grid-cols-1 gap-2.5' : 'grid-cols-1 sm:grid-cols-2 gap-3'}`}>
              {[
                { label: "Groom's Family", name: data.hostIntro.groomParents },
                { label: "Bride's Family", name: data.hostIntro.brideParents },
              ].map((family, i) => (
                <div key={i} className="p-3 sm:p-3.5 rounded-xl bg-stone-900/60 border border-stone-800/90">
                  <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-amber-400/80 font-bold block mb-0.5">
                    {family.label}
                  </span>
                  <p className="text-xs sm:text-sm font-heading font-semibold text-stone-100 leading-snug">
                    {family.name}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <FloralDivider width={220} className="mx-auto my-3" />

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="my-3 sm:my-5"
          >
            <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-amber-300/70 font-serif mb-3">
              ✦ &nbsp; Awaiting The Auspicious Nikah &nbsp; ✦
            </p>

            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <CountdownUnit value={timeLeft.days} label="Days" />
              <span className="font-heading text-lg text-amber-400/50 self-start mt-3 sm:mt-4">:</span>
              <CountdownUnit value={timeLeft.hours} label="Hours" />
              <span className="font-heading text-lg text-amber-400/50 self-start mt-3 sm:mt-4">:</span>
              <CountdownUnit value={timeLeft.minutes} label="Mins" />
              <span className="font-heading text-lg text-amber-400/50 self-start mt-3 sm:mt-4">:</span>
              <CountdownUnit value={timeLeft.seconds} label="Secs" />
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-between pt-4 border-t border-stone-700/30 text-xs mt-3">
            <button
              onClick={onPrev}
              className="flex items-center gap-1 text-stone-400 hover:text-amber-200 transition-colors font-serif py-2 px-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Cover Page</span>
            </button>
            <button
              onClick={onNext}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 font-heading font-bold text-[11px] sm:text-xs tracking-wider uppercase shadow-[0_4px_20px_rgba(212,175,55,0.3)] hover:shadow-[0_4px_28px_rgba(212,175,55,0.5)] active:scale-95 transition-all"
            >
              <span>Meet The Couple</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </motion.div>
    </div>
  );
};
