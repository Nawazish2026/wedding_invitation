import React from 'react';

// Ornate Islamic Arch frame SVG border
export const ArchBorder = ({ className = 'w-full h-12' }) => (
  <svg viewBox="0 0 1200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="none">
    <path d="M0,0 L450,0 Q500,0 520,15 Q560,45 600,55 Q640,45 680,15 Q700,0 750,0 L1200,0 L1200,60 L0,60 Z" fill="currentColor" opacity="0.08"/>
    <path d="M0,2 L460,2 Q510,2 530,16 Q565,42 600,50 Q635,42 670,16 Q690,2 740,2 L1200,2" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="6 3" fill="none"/>
    <circle cx="600" cy="52" r="3.5" fill="#D4AF37" />
  </svg>
);

// High-fidelity vector Bismillah calligraphy
export const BismillahCalligraphy = ({ className = 'w-72 h-24 text-amber-300' }) => (
  <div className={`flex flex-col items-center justify-center ${className}`}>
    <div className="font-arabic text-3xl sm:text-4xl text-center leading-relaxed tracking-wider gold-gradient-text drop-shadow-[0_2px_12px_rgba(212,175,55,0.4)]">
      بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
    </div>
    <div className="flex items-center gap-3 mt-1.5 opacity-75">
      <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-amber-400 to-amber-200"></div>
      <span className="text-amber-300 text-xs tracking-[0.25em] uppercase font-serif">In the name of Allah</span>
      <div className="h-[1px] w-12 bg-gradient-to-l from-transparent via-amber-400 to-amber-200"></div>
    </div>
  </div>
);

// Golden floral mandala divider
export const GoldenMandalaDivider = ({ className = 'my-4' }) => (
  <div className={`flex items-center justify-center gap-3 w-full ${className}`}>
    <div className="h-[1px] flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#D4AF37] animate-pulse">
      <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#D4AF37" fillOpacity="0.85"/>
      <circle cx="12" cy="12" r="2.5" fill="#FFF3B0"/>
    </svg>
    <div className="h-[1px] flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-[#D4AF37]"></div>
  </div>
);

// Corner flourish decoration
export const CornerFlourish = ({ position = 'top-left' }) => {
  const getTransforms = () => {
    switch(position) {
      case 'top-right': return 'scale-x-[-1] top-3 right-3';
      case 'bottom-left': return 'scale-y-[-1] bottom-3 left-3';
      case 'bottom-right': return 'scale-[-1] bottom-3 right-3';
      default: return 'top-3 left-3';
    }
  };

  return (
    <div className={`absolute pointer-events-none z-10 w-12 h-12 opacity-60 ${getTransforms()}`}>
      <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3V32C3 16 16 3 32 3H3Z" fill="url(#goldGrad)" opacity="0.4"/>
        <path d="M1 1H40C20 1 1 20 1 40V1Z" stroke="url(#goldGrad)" strokeWidth="1.5"/>
        <circle cx="6" cy="6" r="2.5" fill="#D4AF37"/>
        <defs>
          <linearGradient id="goldGrad" x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFF2B2"/>
            <stop offset="0.5" stopColor="#D4AF37"/>
            <stop offset="1" stopColor="#AA771C"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

// Royal Wax Seal button with gold rim and stamping effect
export const WaxSealButton = ({ onClick, label = 'Open Invitation', monogram = 'Z & F' }) => {
  return (
    <button
      onClick={onClick}
      className="group relative flex flex-col items-center justify-center p-2 focus:outline-none transition-transform duration-300 hover:scale-105 active:scale-95"
      aria-label={label}
    >
      <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#961c28] via-[#6d131b] to-[#40070c] shadow-[0_10px_25px_rgba(0,0,0,0.6),0_0_20px_rgba(212,175,55,0.4)] border-2 border-[#D4AF37]/80 flex items-center justify-center">
        {/* Outer beaded ring */}
        <div className="absolute inset-1.5 rounded-full border border-dashed border-[#F3E5AB]/60"></div>
        
        {/* Inner seal seal impression */}
        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#580d14] to-[#801822] shadow-inner flex flex-col items-center justify-center border border-[#D4AF37]/40">
          <span className="font-ornate text-[#F5DB80] text-sm font-bold tracking-widest drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
            {monogram}
          </span>
          <span className="text-[9px] uppercase tracking-[0.2em] text-amber-200/90 font-serif mt-0.5">
            Dawat
          </span>
        </div>

        {/* Shimmer badge */}
        <div className="absolute -bottom-1 -right-1 bg-amber-400 text-stone-950 p-1 rounded-full shadow-md">
          <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      <span className="mt-3 text-xs sm:text-sm font-serif tracking-widest uppercase text-amber-300/90 group-hover:text-amber-200 transition-colors flex items-center gap-1.5 font-medium">
        <span>✨</span> {label}
      </span>
    </button>
  );
};

