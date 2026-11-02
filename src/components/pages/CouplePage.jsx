import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ArrowRight, ArrowLeft, MapPin, Sparkles, User } from 'lucide-react';
import { FloralCorner, FloralDivider } from '../FloralOrnaments';

/* ===== Profile Card with luxury botanical & 3D styling ===== */
const ProfileCard = ({ person, role, isMobile }) => (
  <div className="card-3d group w-full">
    <div className="card-3d-inner p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-stone-900/80 to-stone-950/90 border border-amber-400/25 backdrop-blur-md flex flex-col items-center text-center shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:border-amber-400/50 transition-all duration-500 relative overflow-hidden">
      
      {/* Subtle gold shimmer */}
      <div className="absolute inset-0 animate-shimmer pointer-events-none rounded-2xl" />

      {/* Portrait Photo with ornate gold halo */}
      <div className="relative mb-4">
        <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-tr from-amber-500 via-amber-300 to-amber-600 shadow-[0_0_30px_rgba(212,175,55,0.35)]">
          <img 
            src={person.photo} 
            alt={person.fullName}
            className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
        </div>
        {/* Role badge */}
        <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <span className="px-3.5 py-0.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-stone-950 font-heading font-bold text-[10px] tracking-[0.2em] uppercase shadow-lg">
            The {role}
          </span>
        </div>
      </div>

      {/* Full Name */}
      <h3 className="font-heading text-lg sm:text-2xl font-bold text-stone-50 mt-1 mb-0.5 tracking-wide leading-snug">
        {person.fullName}
      </h3>
      
      {/* Qualifications */}
      <span className="text-xs font-serif text-amber-300 font-medium tracking-wide mb-3">
        {person.title}
      </span>

      {/* Lineage Details */}
      <div className="space-y-1.5 text-xs text-stone-200/90 font-serif leading-relaxed my-2 max-w-sm">
        <p className="text-amber-200/95 font-medium">{person.parentage}</p>
        <p className="text-stone-400 italic text-[11px]">{person.grandParentage}</p>
      </div>

      {/* City */}
      <div className="flex items-center gap-1.5 text-xs text-stone-400 mt-1 mb-3">
        <MapPin className="w-3.5 h-3.5 text-amber-400" />
        <span>{person.city}</span>
      </div>

      {/* Bio Quote */}
      <p className="text-xs text-stone-300/80 font-serif italic mt-auto pt-3 border-t border-stone-800/80 leading-relaxed max-w-xs">
        “{person.bio}”
      </p>
    </div>
  </div>
);

/* ===== Main CouplePage Component ===== */
export const CouplePage = ({ data, theme, onNext, onPrev, isMobile }) => {
  // On mobile/phone view, support a clean toggle between Groom and Bride (or Both stacked)
  const [activeTab, setActiveTab] = useState('groom');

  return (
    <div className="relative min-h-[100dvh] flex items-center justify-center px-3 py-6 sm:px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-jaali opacity-30" />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full blur-[130px]" 
          style={{ background: `radial-gradient(ellipse, ${theme.glow}, transparent 70%)` }} 
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 25, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`card-3d relative w-full ${isMobile ? 'max-w-[420px]' : 'max-w-4xl'} z-10`}
      >
        <div className="card-3d-inner invitation-glass rounded-[24px] sm:rounded-[32px] p-5 sm:p-8 md:p-10 relative overflow-hidden">
          
          {/* Floral corners */}
          <FloralCorner position="top-left" size={100} className="opacity-70 sm:size-[130px]" />
          <FloralCorner position="top-right" size={100} className="opacity-70 sm:size-[130px]" />
          <FloralCorner position="bottom-left" size={100} className="opacity-70 sm:size-[130px]" />
          <FloralCorner position="bottom-right" size={100} className="opacity-70 sm:size-[130px]" />

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center mb-5 sm:mb-6"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-400/20 text-rose-300 text-[10px] sm:text-xs tracking-[0.2em] uppercase font-serif mb-2">
              <Heart className="w-3 h-3 fill-rose-400 text-rose-400" />
              <span>The Sacred Matrimony</span>
            </div>
            <h2 className="font-heading text-xl sm:text-3xl md:text-4xl font-bold text-stone-50 tracking-wide">
              The Bride & Groom
            </h2>
            <p className="font-script text-xl sm:text-2xl text-amber-300/80 mt-1">
              Two souls destined in heavens
            </p>
          </motion.div>

          <FloralDivider width={260} className="mx-auto my-3" />

          {/* Responsive Layout:
              If isMobile: show segmented selector [Groom] | [Bride] | [Both Stacked]
              If desktop full view: show side-by-side grid */}
          {isMobile ? (
            <div className="space-y-4 my-4">
              {/* Mobile Segmented Toggle */}
              <div className="flex items-center justify-center p-1 rounded-full bg-stone-900/80 border border-amber-400/30 max-w-xs mx-auto shadow-inner">
                <button
                  onClick={() => setActiveTab('groom')}
                  className={`flex-1 py-1.5 px-3 rounded-full text-xs font-serif transition-all ${
                    activeTab === 'groom'
                      ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 font-bold shadow-md'
                      : 'text-stone-300 hover:text-amber-200'
                  }`}
                >
                  The Groom
                </button>
                <button
                  onClick={() => setActiveTab('bride')}
                  className={`flex-1 py-1.5 px-3 rounded-full text-xs font-serif transition-all ${
                    activeTab === 'bride'
                      ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 font-bold shadow-md'
                      : 'text-stone-300 hover:text-amber-200'
                  }`}
                >
                  The Bride
                </button>
                <button
                  onClick={() => setActiveTab('both')}
                  className={`flex-1 py-1.5 px-3 rounded-full text-xs font-serif transition-all ${
                    activeTab === 'both'
                      ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 font-bold shadow-md'
                      : 'text-stone-300 hover:text-amber-200'
                  }`}
                >
                  Both
                </button>
              </div>

              {/* Single Card Display with smooth crossfade */}
              <AnimatePresence mode="wait">
                {activeTab === 'groom' && (
                  <motion.div
                    key="groom-card"
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProfileCard person={data.groom} role="Groom" isMobile={true} />
                  </motion.div>
                )}

                {activeTab === 'bride' && (
                  <motion.div
                    key="bride-card"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProfileCard person={data.bride} role="Bride" isMobile={true} />
                  </motion.div>
                )}

                {activeTab === 'both' && (
                  <motion.div
                    key="both-cards"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="space-y-4"
                  >
                    <ProfileCard person={data.groom} role="Groom" isMobile={true} />
                    <ProfileCard person={data.bride} role="Bride" isMobile={true} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            /* Desktop Full View: Side by side with guaranteed min-width */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <ProfileCard person={data.groom} role="Groom" isMobile={false} />
              <ProfileCard person={data.bride} role="Bride" isMobile={false} />
            </div>
          )}

          <FloralDivider width={240} className="mx-auto my-4" />

          {/* Islamic Blessing Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="text-center font-serif-luxury italic text-xs sm:text-sm text-stone-300/80 max-w-md mx-auto leading-relaxed"
          >
            “May Allah SWT bestow His infinite blessings upon this sacred bond and keep them united in love, iman, and mercy always.”
          </motion.p>

          {/* Navigation */}
          <div className="flex items-center justify-between pt-4 border-t border-stone-700/30 text-xs mt-4">
            <button
              onClick={onPrev}
              className="flex items-center gap-1 text-stone-400 hover:text-amber-200 transition-colors font-serif py-2 px-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Sacred Verse</span>
            </button>
            <button
              onClick={onNext}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 font-heading font-bold text-[11px] sm:text-xs tracking-wider uppercase shadow-[0_4px_20px_rgba(212,175,55,0.3)] active:scale-95 transition-all"
            >
              <span>Ceremonies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </motion.div>
    </div>
  );
};
