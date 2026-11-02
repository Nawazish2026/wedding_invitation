import React from 'react';

/**
 * FloralWallpaperBackground
 * Renders an intricate, romantic Pinterest-style Muslim wedding floral wallpaper
 * with blooming roses, eucalyptus/sage leaves, jasmine buds, and gold vine tendrils.
 */
export function FloralWallpaperBackground({ themeId = 'dusty_rose' }) {
  // Theme-specific floral accent colors
  const floralConfigs = {
    dusty_rose: {
      primaryFlower: '#d46a84',
      secondaryFlower: '#f2a6b6',
      centerFlower: '#fce4ec',
      leafGreen: '#4d755f',
      leafDark: '#304c3d',
      goldAccent: '#d4af37',
      glowColor: 'rgba(212, 106, 132, 0.18)',
    },
    mughal_gulzar: {
      primaryFlower: '#e77c68',
      secondaryFlower: '#f7ab9c',
      centerFlower: '#fff0ec',
      leafGreen: '#3e6b48',
      leafDark: '#1f3d26',
      goldAccent: '#d4af37',
      glowColor: 'rgba(212, 175, 55, 0.16)',
    },
    terracotta: {
      primaryFlower: '#c85a44',
      secondaryFlower: '#e88974',
      centerFlower: '#feded6',
      leafGreen: '#5b6b46',
      leafDark: '#3b472c',
      goldAccent: '#dfb75a',
      glowColor: 'rgba(200, 90, 68, 0.18)',
    },
    ivory_sage: {
      primaryFlower: '#b88998',
      secondaryFlower: '#d9b6c0',
      centerFlower: '#fef7f9',
      leafGreen: '#5a7863',
      leafDark: '#394e40',
      goldAccent: '#e5c158',
      glowColor: 'rgba(90, 120, 99, 0.18)',
    },
  };

  const config = floralConfigs[themeId] || floralConfigs.dusty_rose;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic atmospheric radial glows matching floral theme */}
      <div 
        className="absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full blur-[160px] opacity-70 transition-all duration-700"
        style={{ background: config.glowColor }}
      />
      <div 
        className="absolute -bottom-32 -right-32 w-[650px] h-[650px] rounded-full blur-[160px] opacity-70 transition-all duration-700"
        style={{ background: config.glowColor }}
      />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full blur-[180px] opacity-40 transition-all duration-700"
        style={{ background: 'rgba(212, 175, 55, 0.08)' }}
      />

      {/* Repeating Pinterest-style floral wallpaper SVG pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.22] mix-blend-screen" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="pinterest-floral-pattern" width="320" height="320" patternUnits="userSpaceOnUse">
            {/* Background subtle Islamic lattice line */}
            <path d="M0,160 Q80,120 160,160 Q240,200 320,160 M160,0 Q120,80 160,160 Q200,240 160,320" 
                  stroke={config.goldAccent} strokeWidth="0.6" strokeDasharray="4 6" fill="none" opacity="0.3" />

            {/* Central Cluster: Blooming Garden Rose */}
            <g transform="translate(160, 160)">
              {/* Outer Leaves */}
              <ellipse cx="-28" cy="-24" rx="18" ry="8" transform="rotate(-40 -28 -24)" fill={config.leafGreen} opacity="0.75" />
              <ellipse cx="28" cy="-24" rx="18" ry="8" transform="rotate(40 28 -24)" fill={config.leafDark} opacity="0.75" />
              <ellipse cx="-32" cy="18" rx="16" ry="7" transform="rotate(30 -32 18)" fill={config.leafDark} opacity="0.75" />
              <ellipse cx="32" cy="18" rx="16" ry="7" transform="rotate(-30 32 18)" fill={config.leafGreen} opacity="0.75" />

              {/* Rose Petals (Tier 1 Outer) */}
              <circle cx="0" cy="0" r="26" fill={config.primaryFlower} opacity="0.8" />
              {/* Petal folds */}
              <path d="M-18,-10 C-10,-24 10,-24 18,-10 C24,0 20,16 6,22 C-8,24 -22,12 -18,-10 Z" fill={config.secondaryFlower} opacity="0.85" />
              <circle cx="0" cy="0" r="15" fill={config.primaryFlower} opacity="0.9" />
              <path d="M-10,-6 C-4,-14 6,-14 10,-6 C14,2 10,10 0,12 C-10,10 -12,2 -10,-6 Z" fill={config.centerFlower} opacity="0.95" />
              <circle cx="0" cy="0" r="5" fill={config.goldAccent} opacity="0.9" />

              {/* Gold Tendrils Spreading Out */}
              <path d="M0,-26 Q-18,-45 -12,-65" stroke={config.goldAccent} strokeWidth="1.2" fill="none" opacity="0.6" />
              <circle cx="-12" cy="-65" r="2.5" fill={config.goldAccent} opacity="0.8" />
              
              <path d="M0,26 Q18,45 12,65" stroke={config.goldAccent} strokeWidth="1.2" fill="none" opacity="0.6" />
              <circle cx="12" cy="65" r="2.5" fill={config.goldAccent} opacity="0.8" />

              <path d="M26,0 Q45,-18 65,-12" stroke={config.goldAccent} strokeWidth="1.2" fill="none" opacity="0.6" />
              <circle cx="65" cy="-12" r="2.5" fill={config.goldAccent} opacity="0.8" />

              <path d="M-26,0 Q-45,18 -65,12" stroke={config.goldAccent} strokeWidth="1.2" fill="none" opacity="0.6" />
              <circle cx="-65" cy="12" r="2.5" fill={config.goldAccent} opacity="0.8" />
            </g>

            {/* Corner Small Jasmine Flowers (Chameli / Mogra) */}
            {/* Top-Left */}
            <g transform="translate(30, 30)">
              <circle cx="0" cy="0" r="10" fill={config.secondaryFlower} opacity="0.75" />
              <circle cx="0" cy="0" r="5" fill={config.centerFlower} opacity="0.9" />
              <circle cx="0" cy="0" r="2" fill={config.goldAccent} />
              <ellipse cx="14" cy="8" rx="10" ry="4" transform="rotate(30 14 8)" fill={config.leafGreen} opacity="0.6" />
            </g>

            {/* Top-Right */}
            <g transform="translate(290, 30)">
              <circle cx="0" cy="0" r="10" fill={config.secondaryFlower} opacity="0.75" />
              <circle cx="0" cy="0" r="5" fill={config.centerFlower} opacity="0.9" />
              <circle cx="0" cy="0" r="2" fill={config.goldAccent} />
              <ellipse cx="-14" cy="8" rx="10" ry="4" transform="rotate(-30 -14 8)" fill={config.leafGreen} opacity="0.6" />
            </g>

            {/* Bottom-Left */}
            <g transform="translate(30, 290)">
              <circle cx="0" cy="0" r="10" fill={config.secondaryFlower} opacity="0.75" />
              <circle cx="0" cy="0" r="5" fill={config.centerFlower} opacity="0.9" />
              <circle cx="0" cy="0" r="2" fill={config.goldAccent} />
              <ellipse cx="14" cy="-8" rx="10" ry="4" transform="rotate(-30 14 -8)" fill={config.leafGreen} opacity="0.6" />
            </g>

            {/* Bottom-Right */}
            <g transform="translate(290, 290)">
              <circle cx="0" cy="0" r="10" fill={config.secondaryFlower} opacity="0.75" />
              <circle cx="0" cy="0" r="5" fill={config.centerFlower} opacity="0.9" />
              <circle cx="0" cy="0" r="2" fill={config.goldAccent} />
              <ellipse cx="-14" cy="-8" rx="10" ry="4" transform="rotate(30 -14 -8)" fill={config.leafGreen} opacity="0.6" />
            </g>

            {/* Tiny Stardust / Jasmine buds scattered */}
            <circle cx="85" cy="140" r="2" fill={config.goldAccent} opacity="0.6" />
            <circle cx="235" cy="140" r="2" fill={config.goldAccent} opacity="0.6" />
            <circle cx="140" cy="85" r="2" fill={config.goldAccent} opacity="0.6" />
            <circle cx="140" cy="235" r="2" fill={config.goldAccent} opacity="0.6" />
            
            <circle cx="70" cy="220" r="3" fill={config.secondaryFlower} opacity="0.6" />
            <circle cx="250" cy="90" r="3" fill={config.secondaryFlower} opacity="0.6" />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#pinterest-floral-pattern)" />
      </svg>
    </div>
  );
}

