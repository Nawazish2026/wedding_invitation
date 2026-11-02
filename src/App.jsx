import React, { useState, useRef, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { CoverEnvelope } from './components/pages/CoverEnvelope';
import { BismillahPage } from './components/pages/BismillahPage';
import { CouplePage } from './components/pages/CouplePage';
import { EventsPage } from './components/pages/EventsPage';
import { VenueGuidePage } from './components/pages/VenueGuidePage';
import { RsvpGuestbookPage } from './components/pages/RsvpGuestbookPage';
import { CustomizerDrawer } from './components/CustomizerDrawer';
import { INITIAL_INVITATION_DATA, THEMES } from './data/defaultInvitation';
import { FloatingPetals, GoldSparkles } from './components/FloralOrnaments';
import { FloralWallpaperBackground } from './components/FloralWallpaperBackground';
import { AnimatePresence, motion } from 'framer-motion';
import { BookOpen, Layers, SlidersHorizontal, ChevronLeft, ChevronRight, Smartphone, Monitor } from 'lucide-react';

export function App() {
  const [data, setData] = useState(INITIAL_INVITATION_DATA);
  const [activeThemeId, setActiveThemeId] = useState(data.theme);
  const [activePage, setActivePage] = useState(0);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [isMobilePreview, setIsMobilePreview] = useState(false);
  const [viewMode, setViewMode] = useState('multipage'); // 'multipage' | 'scroll'
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Auto-detect mobile screen size
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = isMobilePreview || isSmallScreen;

  // Touch swipe support for mobile navigation
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const minSwipeDistance = 45;

  const currentTheme = THEMES[activeThemeId] || THEMES.emerald;

  const pages = [
    { id: 'cover', title: 'Royal Seal & Envelope', shortTitle: 'Envelope' },
    { id: 'bismillah', title: 'Bismillah & Sacred Union', shortTitle: 'Sacred Verse' },
    { id: 'couple', title: 'The Royal Couple', shortTitle: 'Couple' },
    { id: 'events', title: 'Ceremonial Itinerary', shortTitle: 'Functions' },
    { id: 'venue', title: 'Venue & Directions', shortTitle: 'Venue Map' },
    { id: 'rsvp', title: 'RSVP & Guest Duas', shortTitle: 'RSVP & Duas' },
  ];

  const handleSelectTheme = (themeId) => {
    setActiveThemeId(themeId);
    setData(prev => ({ ...prev, theme: themeId }));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && activePage < pages.length - 1) {
      setActivePage(prev => prev + 1);
    }
    if (isRightSwipe && activePage > 0) {
      setActivePage(prev => prev - 1);
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const renderActivePage = () => {
    switch(activePage) {
      case 0:
        return (
          <CoverEnvelope 
            data={data} 
            theme={currentTheme} 
            onProceed={() => setActivePage(1)} 
            isMobile={isMobile}
          />
        );
      case 1:
        return (
          <BismillahPage 
            data={data} 
            theme={currentTheme} 
            onNext={() => setActivePage(2)} 
            onPrev={() => setActivePage(0)} 
            isMobile={isMobile}
          />
        );
      case 2:
        return (
          <CouplePage 
            data={data} 
            theme={currentTheme} 
            onNext={() => setActivePage(3)} 
            onPrev={() => setActivePage(1)} 
            isMobile={isMobile}
          />
        );
      case 3:
        return (
          <EventsPage 
            data={data} 
            theme={currentTheme} 
            onNext={() => setActivePage(4)} 
            onPrev={() => setActivePage(2)} 
            isMobile={isMobile}
          />
        );
      case 4:
        return (
          <VenueGuidePage 
            data={data} 
            theme={currentTheme} 
            onNext={() => setActivePage(5)} 
            onPrev={() => setActivePage(3)} 
            isMobile={isMobile}
          />
        );
      case 5:
        return (
          <RsvpGuestbookPage 
            data={data} 
            theme={currentTheme} 
            onPrev={() => setActivePage(4)} 
            onResetToStart={() => setActivePage(0)} 
            isMobile={isMobile}
          />
        );
      default:
        return null;
    }
  };

  const getCardBg = () => {
    switch (currentTheme.id) {
      case 'dusty_rose': return 'rgba(38, 15, 30, 0.88)';
      case 'mughal_gulzar': return 'rgba(14, 59, 46, 0.88)';
      case 'terracotta': return 'rgba(53, 22, 16, 0.88)';
      case 'ivory_sage': return 'rgba(34, 44, 39, 0.88)';
      default: return 'rgba(38, 15, 30, 0.88)';
    }
  };

  return (
    <div 
      className={`min-h-[100dvh] ${currentTheme.bgPrimary} transition-colors duration-500 text-stone-100 flex flex-col font-sans relative selection:bg-amber-500/30 selection:text-amber-200 overflow-x-hidden`}
      style={{
        '--card-bg': getCardBg(),
        '--card-border': currentTheme.cardBorder,
        '--card-glow': currentTheme.glow,
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Pinterest-Style Muslim Wedding Floral Wallpaper Canvas */}
      <FloralWallpaperBackground themeId={currentTheme.floralHue || activeThemeId} />

      {/* 3D Floating Rose Petals & Golden Sparkles Animation */}
      <FloatingPetals count={14} />
      <GoldSparkles count={10} />

      {/* Luxury Navbar Header */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        pages={pages}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
        currentTheme={currentTheme}
        onSelectTheme={handleSelectTheme}
        isMobilePreview={isMobilePreview}
        setIsMobilePreview={setIsMobilePreview}
        monogram={data.monogram}
      />

      {/* Floating Bottom View Switcher Bar (Only in full view mode so it never covers the phone frame!) */}
      {!isMobilePreview && (
        <aside 
          aria-label="Invitation View Controls" 
          className="fixed bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1 p-1 rounded-full bg-stone-950/85 backdrop-blur-xl border border-[#D4AF37]/35 shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
        >
          <button
            onClick={() => setViewMode('multipage')}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-serif transition-all ${
              viewMode === 'multipage'
                ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 font-bold shadow-md'
                : 'text-stone-300 hover:text-amber-200'
            }`}
            title="Multipage card by card presentation"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Card View</span>
          </button>

          <button
            onClick={() => setViewMode('scroll')}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-serif transition-all ${
              viewMode === 'scroll'
                ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 font-bold shadow-md'
                : 'text-stone-300 hover:text-amber-200'
            }`}
            title="Continuous luxury scroll presentation"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Scroll View</span>
          </button>

          <button
            onClick={() => setIsCustomizerOpen(true)}
            className="p-1.5 rounded-full text-amber-300 hover:bg-stone-800 transition-colors ml-0.5"
            title="Customize Names, Dates, Timings"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
          </button>
        </aside>
      )}

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col justify-center items-center py-4 sm:py-6 px-2 sm:px-4 z-10">
        
        {isMobilePreview ? (
          /* High-end Mobile Mockup Bezel (like Utsavy & Canva previews) */
          <div className="flex flex-col items-center my-2">
            
            {/* Phone Bezel Header Controls (Cleanly positioned ABOVE the phone mockup so it never covers content!) */}
            <div className="flex items-center gap-2 mb-3 bg-stone-900/90 px-3 py-1.5 rounded-full border border-stone-700/60 shadow-lg backdrop-blur-md text-xs">
              <span className="text-[10px] uppercase tracking-wider text-amber-400/80 font-bold font-serif flex items-center gap-1">
                <Smartphone className="w-3.5 h-3.5" />
                Mobile Phone Preview
              </span>
              <div className="h-3 w-[1px] bg-stone-700" />
              <button
                onClick={() => setViewMode(viewMode === 'multipage' ? 'scroll' : 'multipage')}
                className="text-stone-300 hover:text-amber-300 transition-colors font-serif"
              >
                {viewMode === 'multipage' ? 'Switch to Scroll' : 'Switch to Cards'}
              </button>
              <div className="h-3 w-[1px] bg-stone-700" />
              <button
                onClick={() => setIsMobilePreview(false)}
                className="text-amber-400 hover:text-amber-300 font-serif"
              >
                Exit Preview
              </button>
            </div>

            {/* iPhone Bezel Frame with proper clearance */}
            <div className="relative w-full max-w-[410px] rounded-[48px] border-[12px] border-stone-800 bg-stone-950 shadow-[0_25px_80px_rgba(0,0,0,0.9),0_0_50px_rgba(212,175,55,0.2)] overflow-hidden ring-1 ring-[#D4AF37]/40">
              
              {/* Top speaker notch - properly separated from content */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-4 bg-stone-800 rounded-full z-30 shadow-inner flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-stone-900/80 border border-stone-700/50 mr-4" />
                <div className="w-12 h-1 bg-stone-900/90 rounded-full" />
              </div>
              
              {/* Inner screen content with ample pt-11 top clearance and pb-12 bottom clearance */}
              <div className="pt-11 pb-12 max-h-[770px] overflow-y-auto no-scrollbar">
                {viewMode === 'multipage' ? (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activePage}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {renderActivePage()}
                    </motion.div>
                  </AnimatePresence>
                ) : (
                  <div className="space-y-6">
                    <CoverEnvelope data={data} theme={currentTheme} onProceed={() => setActivePage(1)} isMobile={true} />
                    <BismillahPage data={data} theme={currentTheme} onNext={() => {}} onPrev={() => {}} isMobile={true} />
                    <CouplePage data={data} theme={currentTheme} onNext={() => {}} onPrev={() => {}} isMobile={true} />
                    <EventsPage data={data} theme={currentTheme} onNext={() => {}} onPrev={() => {}} isMobile={true} />
                    <VenueGuidePage data={data} theme={currentTheme} onNext={() => {}} onPrev={() => {}} isMobile={true} />
                    <RsvpGuestbookPage data={data} theme={currentTheme} onPrev={() => {}} onResetToStart={() => {}} isMobile={true} />
                  </div>
                )}
              </div>

              {/* Mobile Page Indicator Dots inside frame */}
              {viewMode === 'multipage' && (
                <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-30 bg-stone-950/90 px-3 py-1 rounded-full border border-stone-700/50 backdrop-blur-md">
                  {pages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActivePage(i)}
                      className={`h-1.5 rounded-full transition-all ${
                        activePage === i ? 'w-5 bg-amber-400' : 'w-1.5 bg-stone-600'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

          </div>
        ) : (
          /* Full View Layout */
          <div className="w-full max-w-5xl mx-auto">
            {viewMode === 'multipage' ? (
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePage}
                    initial={{ opacity: 0, scale: 0.97, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.97, y: -15 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {renderActivePage()}
                  </motion.div>
                </AnimatePresence>

                {/* Desktop side arrows for page flipping */}
                {activePage > 0 && (
                  <button
                    onClick={() => setActivePage(prev => prev - 1)}
                    className="hidden xl:flex absolute -left-14 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-900/80 border border-[#D4AF37]/30 text-amber-300 hover:scale-110 active:scale-95 transition-all shadow-xl"
                    title="Previous Page"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                )}
                {activePage < pages.length - 1 && (
                  <button
                    onClick={() => setActivePage(prev => prev + 1)}
                    className="hidden xl:flex absolute -right-14 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-900/80 border border-[#D4AF37]/30 text-amber-300 hover:scale-110 active:scale-95 transition-all shadow-xl"
                    title="Next Page"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                )}

                {/* Page Dots Indicator */}
                <div className="flex items-center justify-center gap-1.5 mt-4 mb-2">
                  {pages.map((p, idx) => (
                    <button
                      key={p.id}
                      onClick={() => setActivePage(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activePage === idx ? 'w-6 bg-amber-400' : 'w-2 bg-stone-700 hover:bg-stone-500'
                      }`}
                      title={p.title}
                    />
                  ))}
                </div>
              </div>
            ) : (
              /* Continuous Luxury Scroll */
              <div className="space-y-10 sm:space-y-14 pb-24">
                <CoverEnvelope data={data} theme={currentTheme} onProceed={() => {}} isMobile={isMobile} />
                <BismillahPage data={data} theme={currentTheme} onNext={() => {}} onPrev={() => {}} isMobile={isMobile} />
                <CouplePage data={data} theme={currentTheme} onNext={() => {}} onPrev={() => {}} isMobile={isMobile} />
                <EventsPage data={data} theme={currentTheme} onNext={() => {}} onPrev={() => {}} isMobile={isMobile} />
                <VenueGuidePage data={data} theme={currentTheme} onNext={() => {}} onPrev={() => {}} isMobile={isMobile} />
                <RsvpGuestbookPage data={data} theme={currentTheme} onPrev={() => {}} onResetToStart={() => {}} isMobile={isMobile} />
              </div>
            )}
          </div>
        )}

      </main>

      {/* Customizer Slide-out Drawer */}
      <CustomizerDrawer
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        data={data}
        setData={setData}
        currentTheme={currentTheme}
        onSelectTheme={handleSelectTheme}
      />

      {/* Footer */}
      <footer className="py-4 border-t border-stone-800/60 text-center text-[10px] sm:text-xs text-stone-500 font-serif z-10">
        <p>Royal Muslim Indian Wedding Invitation • Floral Knot Edition • Crafted with elegance & heartfelt duas</p>
      </footer>
    </div>
  );
}

export default App;
