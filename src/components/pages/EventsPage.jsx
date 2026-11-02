import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { generateGoogleCalendarLink, downloadIcsFile } from '../../utils/exportCalendar';
import { Calendar, Clock, MapPin, Navigation, Bookmark, ArrowRight, ArrowLeft, ChevronLeft, ChevronRight, Shirt, Sparkles } from 'lucide-react';
import { FloralCorner, FloralDivider } from '../FloralOrnaments';

/* ===== Event Tab Button ===== */
const EventTab = ({ event, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`relative flex flex-col items-center gap-1 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl transition-all duration-300 border min-w-[76px] sm:min-w-[95px] ${
      isActive
        ? 'bg-gradient-to-b from-amber-400/25 to-amber-500/15 border-amber-400/60 shadow-[0_4px_16px_rgba(212,175,55,0.25)] scale-[1.03]'
        : 'bg-stone-900/50 border-stone-800 hover:border-amber-500/40'
    }`}
  >
    <span className={`text-[10px] sm:text-xs font-heading font-bold uppercase tracking-wider ${isActive ? 'text-amber-300' : 'text-stone-400'}`}>
      {event.name.split(' ')[0]}
    </span>
    {event.id === 'nikah' && (
      <span className="absolute -top-1.5 -right-1.5 text-[7px] bg-rose-600 text-white px-1.5 py-0.2 rounded-full font-bold shadow-sm">
        Nikah
      </span>
    )}
  </button>
);

/* ===== Main EventsPage Component ===== */
export const EventsPage = ({ data, theme, onNext, onPrev, isMobile }) => {
  const [selectedIdx, setSelectedIdx] = useState(2); // Default to Nikah
  const currentEvent = data.events[selectedIdx] || data.events[0];
  const coupleNames = `${data.groom.fullName.split(' ')[0]} & ${data.bride.fullName.split(' ')[0]}`;

  const goToPrev = () => setSelectedIdx(prev => Math.max(0, prev - 1));
  const goToNext = () => setSelectedIdx(prev => Math.min(data.events.length - 1, prev + 1));

  return (
    <div className="relative min-h-[100dvh] flex items-center justify-center px-3 py-6 sm:px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-moroccan-stars opacity-30" />
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[130px]" 
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
          
          {/* Floral Corners */}
          <FloralCorner position="top-left" size={90} className="opacity-70 sm:size-[130px]" />
          <FloralCorner position="top-right" size={90} className="opacity-70 sm:size-[130px]" />
          <FloralCorner position="bottom-left" size={90} className="opacity-70 sm:size-[130px]" />
          <FloralCorner position="bottom-right" size={90} className="opacity-70 sm:size-[130px]" />

          {/* Header */}
          <div className="text-center mb-4 sm:mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/25 text-amber-300 text-[10px] sm:text-xs tracking-[0.2em] uppercase font-serif mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Ceremonial Schedule</span>
            </div>
            <h2 className="font-heading text-xl sm:text-3xl md:text-4xl font-bold text-stone-50 tracking-wide">
              Wedding Itinerary
            </h2>
            <p className="font-script text-xl sm:text-2xl text-amber-300/80 mt-1">
              Celebrations of Love & Tradition
            </p>
          </div>

          {/* Event Tabs Switcher */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 mb-4 sm:mb-6 sm:justify-center">
            {data.events.map((event, idx) => (
              <EventTab
                key={event.id}
                event={event}
                isActive={selectedIdx === idx}
                onClick={() => setSelectedIdx(idx)}
              />
            ))}
          </div>

          {/* Active Event Spotlight Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentEvent.id}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="p-4 sm:p-7 rounded-2xl bg-gradient-to-br from-stone-900/90 via-stone-900/60 to-stone-950/80 border border-amber-400/30 shadow-[0_8px_32px_rgba(0,0,0,0.4)] relative overflow-hidden backdrop-blur-md"
            >
              <div className="absolute inset-0 animate-shimmer pointer-events-none rounded-2xl" />

              {/* Ceremony Title Bar */}
              <div className="flex items-center justify-between gap-2 border-b border-stone-800 pb-3 mb-4">
                <div>
                  <h3 className="font-heading text-lg sm:text-2xl font-bold text-stone-50">
                    {currentEvent.name}
                  </h3>
                  <span className="text-xs font-serif text-amber-300/80 italic tracking-wider block mt-0.5">
                    {currentEvent.subheading}
                  </span>
                </div>
                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-stone-800/80 border border-stone-700 text-[10px] font-serif text-stone-300 shrink-0">
                  <Bookmark className="w-3 h-3 text-amber-400" />
                  <span>{selectedIdx + 1} of {data.events.length}</span>
                </div>
              </div>

              {/* Responsive Layout:
                  If isMobile: stacked clean full-width cards with ample space
                  If desktop: side-by-side grid */}
              <div className={`grid ${isMobile ? 'grid-cols-1 gap-3.5' : 'grid-cols-1 md:grid-cols-2 gap-5'} mb-4`}>
                
                {/* Column / Card 1: Date & Time */}
                <div className="space-y-3">
                  {/* Date Card */}
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-950/50 border border-stone-800/80">
                    <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-400/25 text-amber-300 shrink-0 mt-0.5">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[9px] uppercase tracking-[0.18em] text-amber-400/80 font-bold block">
                        Date of Event
                      </span>
                      <p className="text-xs sm:text-sm font-semibold text-stone-100 font-heading mt-0.5">
                        {currentEvent.date}
                      </p>
                    </div>
                  </div>

                  {/* Auspicious Time Card */}
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-950/50 border border-stone-800/80">
                    <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-400/25 text-amber-300 shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[9px] uppercase tracking-[0.18em] text-amber-400/80 font-bold block">
                        Auspicious Timing
                      </span>
                      <p className="text-xs sm:text-sm text-stone-200 font-serif leading-relaxed mt-0.5">
                        {currentEvent.time}
                      </p>
                    </div>
                  </div>

                  {/* Suggested Attire Card */}
                  <div className="p-3 rounded-xl bg-stone-950/50 border border-stone-800/80">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <Shirt className="w-3.5 h-3.5 text-amber-400/80" />
                      <span className="text-[9px] uppercase tracking-[0.18em] text-amber-400/80 font-bold">
                        Suggested Attire
                      </span>
                    </div>
                    <p className="text-xs text-stone-200 font-medium mb-2 font-serif">
                      {currentEvent.dressCode}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-stone-400">Palette:</span>
                      {currentEvent.palette?.map((color, i) => (
                        <span
                          key={i}
                          className="w-5 h-5 rounded-full border border-white/20 shadow-sm"
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Column / Card 2: Venue & Highlights */}
                <div className="space-y-3">
                  {/* Venue Location Card */}
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-950/50 border border-stone-800/80">
                    <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-400/25 text-amber-300 shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[9px] uppercase tracking-[0.18em] text-amber-400/80 font-bold block">
                        Venue Location
                      </span>
                      <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-serif mt-0.5">
                        {currentEvent.venue}
                      </p>
                    </div>
                  </div>

                  {/* Highlights Card */}
                  <div className="p-3 rounded-xl bg-stone-950/50 border border-stone-800/80">
                    <span className="text-[9px] uppercase tracking-[0.18em] text-amber-400/80 font-bold block mb-2">
                      Ceremony Highlights
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {currentEvent.highlights?.map((hl, i) => (
                        <span 
                          key={i} 
                          className="text-[10px] sm:text-xs px-2.5 py-1 rounded-full bg-stone-900 border border-amber-400/20 text-stone-200 font-serif"
                        >
                          ✨ {hl}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-stone-300/80 font-serif italic leading-relaxed px-1">
                    “{currentEvent.description}”
                  </p>
                </div>
              </div>

              {/* Action Toolbar */}
              <div className="pt-3.5 border-t border-stone-800 flex flex-wrap items-center justify-between gap-2 text-xs">
                <a
                  href={currentEvent.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-stone-800/90 hover:bg-stone-700 text-stone-200 font-serif border border-stone-700 transition-colors shadow-sm active:scale-95"
                >
                  <Navigation className="w-3.5 h-3.5 text-amber-400" />
                  <span>Google Maps</span>
                </a>

                <div className="flex items-center gap-2 flex-1 sm:flex-initial">
                  <a
                    href={generateGoogleCalendarLink(currentEvent, coupleNames)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial flex items-center justify-center gap-1 px-3.5 py-2.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-400/30 text-amber-300 font-serif transition-colors active:scale-95"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Google Calendar</span>
                  </a>

                  <button
                    onClick={() => downloadIcsFile(currentEvent, coupleNames)}
                    className="px-3 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 font-serif border border-stone-700 transition-colors active:scale-95"
                    title="Download .ICS file"
                  >
                    .ICS
                  </button>
                </div>
              </div>

              {/* Mobile Quick Function Steppers */}
              <div className="flex items-center justify-between mt-3 sm:hidden pt-2 border-t border-stone-800/60">
                <button 
                  onClick={goToPrev} 
                  disabled={selectedIdx === 0}
                  className="p-1.5 rounded-full bg-stone-800 border border-stone-700 text-stone-300 disabled:opacity-30 transition-opacity"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-[10px] text-stone-400 font-serif">
                  Tap tabs or swipe between ceremonies
                </span>
                <button 
                  onClick={goToNext} 
                  disabled={selectedIdx === data.events.length - 1}
                  className="p-1.5 rounded-full bg-stone-800 border border-stone-700 text-stone-300 disabled:opacity-30 transition-opacity"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </motion.div>
          </AnimatePresence>

          <FloralDivider width={240} className="mx-auto my-4" />

          {/* Page Navigation */}
          <div className="flex items-center justify-between pt-4 border-t border-stone-700/30 text-xs mt-3">
            <button 
              onClick={onPrev} 
              className="flex items-center gap-1 text-stone-400 hover:text-amber-200 transition-colors font-serif py-2 px-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">The Couple</span>
            </button>
            <button 
              onClick={onNext} 
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 font-heading font-bold text-[11px] sm:text-xs tracking-wider uppercase shadow-[0_4px_20px_rgba(212,175,55,0.3)] active:scale-95 transition-all"
            >
              <span>Venue Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </motion.div>
    </div>
  );
};
