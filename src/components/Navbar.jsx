import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles, SlidersHorizontal, Smartphone, Monitor, Palette, Share2 } from 'lucide-react';
import { weddingAudio } from '../utils/audioPlayer';
import { triggerRosePetalShower } from '../utils/confetti';
import { THEMES } from '../data/defaultInvitation';

export const Navbar = ({
  activePage,
  setActivePage,
  pages,
  onOpenCustomizer,
  currentTheme,
  onSelectTheme,
  isMobilePreview,
  setIsMobilePreview,
  monogram
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);

  const toggleSound = () => {
    const isNowPlaying = weddingAudio.toggle();
    setIsPlayingAudio(isNowPlaying);
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-stone-950/75 border-b border-[#D4AF37]/25 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-2">
        
        {/* Monogram brand */}
        <div 
          onClick={() => setActivePage(0)}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#961c28] to-[#D4AF37] p-[1.5px] shadow-md">
            <div className="w-full h-full rounded-full bg-stone-900 flex items-center justify-center">
              <span className="font-ornate text-xs text-amber-300 font-bold group-hover:scale-110 transition-transform">
                {monogram}
              </span>
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="font-heading text-xs uppercase tracking-widest text-amber-200 font-semibold">
              Royal Nikah
            </div>
            <div className="text-[10px] text-amber-400/70 tracking-wider">
              Dawat-e-Khaas
            </div>
          </div>
        </div>

        {/* Page navigation links (Desktop/Tablet) */}
        <nav className="hidden md:flex items-center gap-1 bg-stone-900/60 p-1 rounded-full border border-[#D4AF37]/20 shadow-inner">
          {pages.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setActivePage(idx)}
              className={`px-3 py-1 text-xs rounded-full transition-all duration-200 font-serif tracking-wider ${
                activePage === idx
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-stone-950 font-bold shadow-md shadow-amber-500/20'
                  : 'text-stone-300 hover:text-amber-200 hover:bg-stone-800/60'
              }`}
            >
              {p.shortTitle || p.title}
            </button>
          ))}
        </nav>

        {/* Actions bar */}
        <div className="flex items-center gap-2">
          {/* Petals button */}
          <button
            onClick={triggerRosePetalShower}
            className="p-2 rounded-full bg-rose-950/60 border border-rose-500/30 text-rose-300 hover:bg-rose-900/80 hover:text-white transition-all shadow-sm"
            title="Shower Rose Petals"
            aria-label="Shower Rose Petals"
          >
            <Sparkles className="w-4 h-4 text-amber-300 animate-spin-slow" />
          </button>

          {/* Audio Synthesizer toggle */}
          <button
            onClick={toggleSound}
            className={`p-2 rounded-full border transition-all ${
              isPlayingAudio
                ? 'bg-amber-500/20 border-amber-400 text-amber-300 animate-pulse'
                : 'bg-stone-900/80 border-stone-700 text-stone-400 hover:text-amber-300'
            }`}
            title={isPlayingAudio ? 'Mute Ambient Santoor Melody' : 'Play Royal Ambient Soundscape'}
            aria-label="Toggle Royal Music"
          >
            {isPlayingAudio ? (
              <Volume2 className="w-4 h-4" />
            ) : (
              <VolumeX className="w-4 h-4" />
            )}
          </button>

          {/* Mobile frame preview toggle */}
          <button
            onClick={() => setIsMobilePreview(!isMobilePreview)}
            className={`hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-full border text-xs font-serif transition-all ${
              isMobilePreview 
                ? 'bg-amber-400/20 border-amber-400 text-amber-300' 
                : 'bg-stone-900 border-stone-700 text-stone-300 hover:border-amber-500/50'
            }`}
            title="Toggle Phone Invite Preview mode (like Utsavy)"
          >
            {isMobilePreview ? (
              <>
                <Monitor className="w-3.5 h-3.5" />
                <span>Full View</span>
              </>
            ) : (
              <>
                <Smartphone className="w-3.5 h-3.5" />
                <span>Phone View</span>
              </>
            )}
          </button>

          {/* Theme Quick Switcher dropdown */}
          <div className="relative">
            <button
              onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
              className="p-2 rounded-full bg-stone-900 border border-amber-500/30 text-amber-300 hover:bg-stone-800 transition-all"
              title="Change Color Theme"
            >
              <Palette className="w-4 h-4" />
            </button>

            {themeDropdownOpen && (
              <div 
                className="absolute right-0 mt-2 w-48 rounded-xl bg-stone-900/95 border border-[#D4AF37]/30 shadow-2xl p-2 z-50 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150"
                onClick={() => setThemeDropdownOpen(false)}
              >
                <div className="text-[10px] uppercase font-bold tracking-wider text-amber-400/70 px-2 py-1">
                  Color Themes
                </div>
                {Object.values(THEMES).map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => onSelectTheme(theme.id)}
                    className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs transition-all ${
                      currentTheme.id === theme.id 
                        ? 'bg-amber-500/20 text-amber-300 font-semibold' 
                        : 'text-stone-300 hover:bg-stone-800'
                    }`}
                  >
                    <span className="truncate">{theme.name}</span>
                    <span 
                      className="w-3 h-3 rounded-full border border-white/20 shrink-0" 
                      style={{ backgroundColor: theme.accent }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ✨ Customize Invite primary action button */}
          <button
            onClick={onOpenCustomizer}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-stone-950 font-semibold text-xs shadow-md shadow-amber-500/30 hover:brightness-110 active:scale-95 transition-all"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span className="font-heading">Customize</span>
          </button>
        </div>

      </div>

      {/* Mobile Page indicator strip */}
      <div className="flex md:hidden overflow-x-auto no-scrollbar py-1 px-3 border-t border-stone-800 bg-stone-950/90 gap-1.5">
        {pages.map((p, idx) => (
          <button
            key={p.id}
            onClick={() => setActivePage(idx)}
            className={`whitespace-nowrap px-2.5 py-0.5 text-[11px] rounded-full transition-all ${
              activePage === idx
                ? 'bg-[#D4AF37] text-stone-950 font-bold'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            {p.shortTitle || p.title}
          </button>
        ))}
      </div>
    </header>
  );
};

