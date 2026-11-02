import React, { useMemo } from 'react';

/* ═══════════════════════════════════════════════════════════════════════════
   FloralCorner — Intricate corner flourish with roses, leaves & gold tendrils
   ═══════════════════════════════════════════════════════════════════════════ */
export function FloralCorner({ position = 'top-left', size = 180, className = '' }) {
  const transforms = {
    'top-left': 'scale(1,1)',
    'top-right': 'scale(-1,1)',
    'bottom-left': 'scale(1,-1)',
    'bottom-right': 'scale(-1,-1)',
  };

  const positionStyles = {
    'top-left': { top: 0, left: 0 },
    'top-right': { top: 0, right: 0 },
    'bottom-left': { bottom: 0, left: 0 },
    'bottom-right': { bottom: 0, right: 0 },
  };

  return (
    <div
      className={className}
      style={{
        position: 'absolute',
        ...positionStyles[position],
        width: size,
        height: size,
        pointerEvents: 'none',
        zIndex: 1,
      }}
    >
      <svg
        viewBox="0 0 200 200"
        width={size}
        height={size}
        style={{ transform: transforms[position], transformOrigin: 'center' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5E6A3" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#B8960C" />
          </linearGradient>
          <linearGradient id="roseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e8a0b4" />
            <stop offset="100%" stopColor="#d4577a" />
          </linearGradient>
          <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4a7c31" />
            <stop offset="100%" stopColor="#2d5016" />
          </linearGradient>
          <radialGradient id="roseRadial" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#f0c0d0" />
            <stop offset="50%" stopColor="#e8a0b4" />
            <stop offset="100%" stopColor="#d4577a" />
          </radialGradient>
        </defs>

        {/* Main gold tendril curves */}
        <path
          d="M5,5 Q30,10 50,30 T90,70 Q100,85 105,100"
          fill="none" stroke="url(#goldGrad)" strokeWidth="2.5" strokeLinecap="round"
        />
        <path
          d="M5,15 Q35,20 55,45 T95,90 Q105,110 110,130"
          fill="none" stroke="url(#goldGrad)" strokeWidth="2" strokeLinecap="round" opacity="0.85"
        />
        <path
          d="M15,5 Q25,30 45,50 T80,95 Q90,115 95,135"
          fill="none" stroke="url(#goldGrad)" strokeWidth="2" strokeLinecap="round" opacity="0.85"
        />
        {/* Thinner spiral tendrils */}
        <path
          d="M10,10 Q20,5 25,15 Q30,25 22,28 Q15,30 12,22"
          fill="none" stroke="url(#goldGrad)" strokeWidth="1.2" strokeLinecap="round" opacity="0.7"
        />
        <path
          d="M100,100 Q115,95 120,108 Q125,120 115,122 Q108,123 105,115"
          fill="none" stroke="url(#goldGrad)" strokeWidth="1.2" strokeLinecap="round" opacity="0.7"
        />
        <path
          d="M70,65 Q85,58 90,72 Q94,84 82,86"
          fill="none" stroke="url(#goldGrad)" strokeWidth="1" strokeLinecap="round" opacity="0.6"
        />

        {/* Large rose — center bloom */}
        <g transform="translate(55, 55)">
          {/* Outer petals */}
          <ellipse cx="0" cy="-12" rx="9" ry="14" fill="url(#roseRadial)" transform="rotate(0)" opacity="0.9" />
          <ellipse cx="0" cy="-12" rx="9" ry="14" fill="url(#roseRadial)" transform="rotate(60)" opacity="0.85" />
          <ellipse cx="0" cy="-12" rx="9" ry="14" fill="url(#roseRadial)" transform="rotate(120)" opacity="0.8" />
          <ellipse cx="0" cy="-12" rx="9" ry="14" fill="url(#roseRadial)" transform="rotate(180)" opacity="0.85" />
          <ellipse cx="0" cy="-12" rx="9" ry="14" fill="url(#roseRadial)" transform="rotate(240)" opacity="0.9" />
          <ellipse cx="0" cy="-12" rx="9" ry="14" fill="url(#roseRadial)" transform="rotate(300)" opacity="0.8" />
          {/* Inner petals */}
          <ellipse cx="0" cy="-7" rx="5" ry="9" fill="#e8a0b4" transform="rotate(30)" opacity="0.9" />
          <ellipse cx="0" cy="-7" rx="5" ry="9" fill="#e8a0b4" transform="rotate(90)" opacity="0.85" />
          <ellipse cx="0" cy="-7" rx="5" ry="9" fill="#e8a0b4" transform="rotate(150)" opacity="0.9" />
          <ellipse cx="0" cy="-7" rx="5" ry="9" fill="#e8a0b4" transform="rotate(210)" opacity="0.85" />
          <ellipse cx="0" cy="-7" rx="5" ry="9" fill="#e8a0b4" transform="rotate(270)" opacity="0.9" />
          <ellipse cx="0" cy="-7" rx="5" ry="9" fill="#e8a0b4" transform="rotate(330)" opacity="0.85" />
          {/* Center */}
          <circle cx="0" cy="0" r="4" fill="#d4577a" />
          <circle cx="0" cy="0" r="2" fill="#D4AF37" opacity="0.8" />
        </g>

        {/* Small rosebud near top */}
        <g transform="translate(28, 22)">
          <ellipse cx="0" cy="-5" rx="4" ry="6" fill="#e8a0b4" transform="rotate(-15)" opacity="0.85" />
          <ellipse cx="0" cy="-5" rx="4" ry="6" fill="#d4577a" transform="rotate(15)" opacity="0.8" />
          <ellipse cx="0" cy="-4" rx="3" ry="5" fill="#e8a0b4" transform="rotate(0)" />
          <circle cx="0" cy="0" r="2" fill="#d4577a" />
        </g>

        {/* Small rosebud near end */}
        <g transform="translate(100, 110)">
          <ellipse cx="0" cy="-5" rx="4" ry="7" fill="#e8a0b4" transform="rotate(20)" opacity="0.85" />
          <ellipse cx="0" cy="-5" rx="4" ry="7" fill="#d4577a" transform="rotate(-20)" opacity="0.8" />
          <ellipse cx="0" cy="-4" rx="3" ry="5" fill="#e8a0b4" />
          <circle cx="0" cy="0" r="2" fill="#d4577a" />
        </g>

        {/* Leaves */}
        <g>
          <path d="M35,38 Q42,28 50,35 Q42,42 35,38Z" fill="url(#leafGrad)" opacity="0.9" />
          <line x1="35" y1="38" x2="48" y2="35" stroke="#2d5016" strokeWidth="0.5" opacity="0.5" />

          <path d="M70,78 Q80,68 88,78 Q80,86 70,78Z" fill="url(#leafGrad)" opacity="0.85" />
          <line x1="72" y1="78" x2="86" y2="78" stroke="#2d5016" strokeWidth="0.5" opacity="0.5" />

          <path d="M40,58 Q48,48 56,55 Q50,64 40,58Z" fill="#4a7c31" opacity="0.8" />

          <path d="M80,90 Q90,82 96,92 Q88,98 80,90Z" fill="url(#leafGrad)" opacity="0.85" />

          <path d="M18,15 Q24,8 30,14 Q24,20 18,15Z" fill="#4a7c31" opacity="0.75" />

          <path d="M90,105 Q98,98 104,106 Q98,112 90,105Z" fill="url(#leafGrad)" opacity="0.8" />
        </g>

        {/* Gold accent dots */}
        <circle cx="20" cy="8" r="1.5" fill="#D4AF37" opacity="0.7" />
        <circle cx="8" cy="20" r="1.5" fill="#D4AF37" opacity="0.7" />
        <circle cx="110" cy="120" r="1.5" fill="#D4AF37" opacity="0.6" />
        <circle cx="120" cy="110" r="1.5" fill="#D4AF37" opacity="0.6" />
        <circle cx="45" cy="42" r="1" fill="#F5E6A3" opacity="0.8" />
        <circle cx="85" cy="85" r="1" fill="#F5E6A3" opacity="0.8" />
      </svg>
    </div>
  );
}


/* ═══════════════════════════════════════════════════════════════════════════
   FloralDivider — Horizontal divider with central rosette and vine tendrils
   ═══════════════════════════════════════════════════════════════════════════ */
export function FloralDivider({ width = 500, className = '' }) {
  return (
    <div className={className} style={{ display: 'flex', justifyContent: 'center', pointerEvents: 'none' }}>
      <svg
        viewBox="0 0 500 60"
        width={width}
        height={(60 / 500) * width}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="divGold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
            <stop offset="30%" stopColor="#D4AF37" />
            <stop offset="70%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="divRose" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#f0c0d0" />
            <stop offset="60%" stopColor="#e8a0b4" />
            <stop offset="100%" stopColor="#d4577a" />
          </radialGradient>
        </defs>

        {/* Main horizontal gold line */}
        <line x1="40" y1="30" x2="460" y2="30" stroke="url(#divGold)" strokeWidth="1.5" />

        {/* Left vine tendril */}
        <path
          d="M240,30 Q200,15 160,25 T80,30"
          fill="none" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" opacity="0.8"
        />
        <path
          d="M240,30 Q200,45 160,35 T80,30"
          fill="none" stroke="#D4AF37" strokeWidth="1.2" strokeLinecap="round" opacity="0.6"
        />
        {/* Left spiral curls */}
        <path d="M140,22 Q132,15 128,22 Q126,28 132,28" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.6" />
        <path d="M100,28 Q92,20 88,28 Q86,34 92,34" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.5" />

        {/* Right vine tendril (mirrored) */}
        <path
          d="M260,30 Q300,15 340,25 T420,30"
          fill="none" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" opacity="0.8"
        />
        <path
          d="M260,30 Q300,45 340,35 T420,30"
          fill="none" stroke="#D4AF37" strokeWidth="1.2" strokeLinecap="round" opacity="0.6"
        />
        {/* Right spiral curls */}
        <path d="M360,22 Q368,15 372,22 Q374,28 368,28" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.6" />
        <path d="M400,28 Q408,20 412,28 Q414,34 408,34" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.5" />

        {/* Left leaves */}
        <path d="M150,24 Q158,16 164,24 Q158,30 150,24Z" fill="#4a7c31" opacity="0.8" />
        <path d="M120,28 Q126,20 132,27 Q126,34 120,28Z" fill="#2d5016" opacity="0.7" />
        <path d="M170,32 Q178,26 182,34 Q176,38 170,32Z" fill="#4a7c31" opacity="0.7" />

        {/* Right leaves (mirrored) */}
        <path d="M350,24 Q342,16 336,24 Q342,30 350,24Z" fill="#4a7c31" opacity="0.8" />
        <path d="M380,28 Q374,20 368,27 Q374,34 380,28Z" fill="#2d5016" opacity="0.7" />
        <path d="M330,32 Q322,26 318,34 Q324,38 330,32Z" fill="#4a7c31" opacity="0.7" />

        {/* Small buds left */}
        <circle cx="108" cy="30" r="3" fill="#e8a0b4" opacity="0.7" />
        <circle cx="108" cy="30" r="1.5" fill="#d4577a" opacity="0.8" />
        <circle cx="180" cy="26" r="2.5" fill="#e8a0b4" opacity="0.6" />

        {/* Small buds right */}
        <circle cx="392" cy="30" r="3" fill="#e8a0b4" opacity="0.7" />
        <circle cx="392" cy="30" r="1.5" fill="#d4577a" opacity="0.8" />
        <circle cx="320" cy="26" r="2.5" fill="#e8a0b4" opacity="0.6" />

        {/* Central rosette */}
        <g transform="translate(250, 30)">
          <ellipse cx="0" cy="-10" rx="7" ry="12" fill="url(#divRose)" transform="rotate(0)" opacity="0.9" />
          <ellipse cx="0" cy="-10" rx="7" ry="12" fill="url(#divRose)" transform="rotate(45)" opacity="0.85" />
          <ellipse cx="0" cy="-10" rx="7" ry="12" fill="url(#divRose)" transform="rotate(90)" opacity="0.8" />
          <ellipse cx="0" cy="-10" rx="7" ry="12" fill="url(#divRose)" transform="rotate(135)" opacity="0.85" />
          <ellipse cx="0" cy="-10" rx="7" ry="12" fill="url(#divRose)" transform="rotate(180)" opacity="0.9" />
          <ellipse cx="0" cy="-10" rx="7" ry="12" fill="url(#divRose)" transform="rotate(225)" opacity="0.85" />
          <ellipse cx="0" cy="-10" rx="7" ry="12" fill="url(#divRose)" transform="rotate(270)" opacity="0.8" />
          <ellipse cx="0" cy="-10" rx="7" ry="12" fill="url(#divRose)" transform="rotate(315)" opacity="0.85" />
          {/* Inner petals */}
          <ellipse cx="0" cy="-6" rx="4" ry="7" fill="#e8a0b4" transform="rotate(20)" />
          <ellipse cx="0" cy="-6" rx="4" ry="7" fill="#e8a0b4" transform="rotate(80)" />
          <ellipse cx="0" cy="-6" rx="4" ry="7" fill="#e8a0b4" transform="rotate(140)" />
          <ellipse cx="0" cy="-6" rx="4" ry="7" fill="#e8a0b4" transform="rotate(200)" />
          <ellipse cx="0" cy="-6" rx="4" ry="7" fill="#e8a0b4" transform="rotate(260)" />
          <ellipse cx="0" cy="-6" rx="4" ry="7" fill="#e8a0b4" transform="rotate(320)" />
          <circle cx="0" cy="0" r="4" fill="#d4577a" />
          <circle cx="0" cy="0" r="2" fill="#D4AF37" />
        </g>

        {/* Gold accent dots along the line */}
        <circle cx="70" cy="30" r="1.5" fill="#D4AF37" opacity="0.5" />
        <circle cx="430" cy="30" r="1.5" fill="#D4AF37" opacity="0.5" />
        <circle cx="200" cy="28" r="1" fill="#F5E6A3" opacity="0.6" />
        <circle cx="300" cy="28" r="1" fill="#F5E6A3" opacity="0.6" />
      </svg>
    </div>
  );
}


/* ═══════════════════════════════════════════════════════════════════════════
   FloralFrame — Full rectangular border frame with floral corners & vine edges
   ═══════════════════════════════════════════════════════════════════════════ */
export function FloralFrame({ children, className = '', padding = 40 }) {
  return (
    <div
      className={className}
      style={{
        position: 'relative',
        padding: padding,
      }}
    >
      {/* Corner flourishes */}
      <FloralCorner position="top-left" size={140} />
      <FloralCorner position="top-right" size={140} />
      <FloralCorner position="bottom-left" size={140} />
      <FloralCorner position="bottom-right" size={140} />

      {/* Top edge vine */}
      <div style={{ position: 'absolute', top: 8, left: 120, right: 120, height: 20, pointerEvents: 'none' }}>
        <svg viewBox="0 0 400 20" width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,10 Q50,2 100,10 T200,10 T300,10 T400,10" fill="none" stroke="#D4AF37" strokeWidth="1.5" opacity="0.6" />
          <path d="M0,10 Q50,18 100,10 T200,10 T300,10 T400,10" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.4" />
          {[0, 80, 160, 240, 320].map((x) => (
            <path key={x} d={`M${x + 40},8 Q${x + 46},3 ${x + 52},8 Q${x + 46},13 ${x + 40},8Z`} fill="#4a7c31" opacity="0.5" />
          ))}
        </svg>
      </div>

      {/* Bottom edge vine */}
      <div style={{ position: 'absolute', bottom: 8, left: 120, right: 120, height: 20, pointerEvents: 'none' }}>
        <svg viewBox="0 0 400 20" width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,10 Q50,2 100,10 T200,10 T300,10 T400,10" fill="none" stroke="#D4AF37" strokeWidth="1.5" opacity="0.6" />
          <path d="M0,10 Q50,18 100,10 T200,10 T300,10 T400,10" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.4" />
          {[0, 80, 160, 240, 320].map((x) => (
            <path key={x} d={`M${x + 40},8 Q${x + 46},3 ${x + 52},8 Q${x + 46},13 ${x + 40},8Z`} fill="#4a7c31" opacity="0.5" />
          ))}
        </svg>
      </div>

      {/* Left edge vine */}
      <div style={{ position: 'absolute', left: 8, top: 120, bottom: 120, width: 20, pointerEvents: 'none' }}>
        <svg viewBox="0 0 20 400" width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10,0 Q2,50 10,100 T10,200 T10,300 T10,400" fill="none" stroke="#D4AF37" strokeWidth="1.5" opacity="0.6" />
          <path d="M10,0 Q18,50 10,100 T10,200 T10,300 T10,400" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.4" />
          {[0, 80, 160, 240, 320].map((y) => (
            <path key={y} d={`M8,${y + 40} Q3,${y + 46} 8,${y + 52} Q13,${y + 46} 8,${y + 40}Z`} fill="#4a7c31" opacity="0.5" />
          ))}
        </svg>
      </div>

      {/* Right edge vine */}
      <div style={{ position: 'absolute', right: 8, top: 120, bottom: 120, width: 20, pointerEvents: 'none' }}>
        <svg viewBox="0 0 20 400" width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10,0 Q2,50 10,100 T10,200 T10,300 T10,400" fill="none" stroke="#D4AF37" strokeWidth="1.5" opacity="0.6" />
          <path d="M10,0 Q18,50 10,100 T10,200 T10,300 T10,400" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.4" />
          {[0, 80, 160, 240, 320].map((y) => (
            <path key={y} d={`M12,${y + 40} Q17,${y + 46} 12,${y + 52} Q7,${y + 46} 12,${y + 40}Z`} fill="#4a7c31" opacity="0.5" />
          ))}
        </svg>
      </div>

      {/* Gold border lines */}
      <div
        style={{
          position: 'absolute',
          inset: 16,
          border: '1px solid rgba(212, 175, 55, 0.3)',
          borderRadius: 4,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 20,
          border: '1px solid rgba(212, 175, 55, 0.15)',
          borderRadius: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        {children}
      </div>
    </div>
  );
}


/* ═══════════════════════════════════════════════════════════════════════════
   FloatingPetals — Drifting rose petal shapes with CSS keyframe animations
   ═══════════════════════════════════════════════════════════════════════════ */
export function FloatingPetals({ count = 18 }) {
  const petals = useMemo(() => {
    const colors = [
      '#e8a0b4', '#d4577a', '#f0c0d0', '#c94060',
      '#D4AF37', '#F5E6A3', '#e0b0c0', '#d98a9f',
    ];
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 8 + Math.random() * 10,
      duration: 8 + Math.random() * 12,
      delay: Math.random() * 10,
      opacity: 0.25 + Math.random() * 0.45,
      color: colors[i % colors.length],
      drift: -30 + Math.random() * 60,
      startRotation: Math.random() * 360,
    }));
  }, [count]);

  return (
    <>
      <style>{`
        @keyframes petalFall {
          0% {
            transform: translateY(-5vh) translateX(0px) rotate(var(--start-rot));
            opacity: 0;
          }
          10% {
            opacity: var(--petal-opacity);
          }
          90% {
            opacity: var(--petal-opacity);
          }
          100% {
            transform: translateY(105vh) translateX(var(--drift)) rotate(calc(var(--start-rot) + 720deg));
            opacity: 0;
          }
        }
      `}</style>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
          overflow: 'hidden',
        }}
        aria-hidden="true"
      >
        {petals.map((p) => (
          <div
            key={p.id}
            style={{
              position: 'absolute',
              left: `${p.left}%`,
              top: 0,
              '--petal-opacity': p.opacity,
              '--drift': `${p.drift}px`,
              '--start-rot': `${p.startRotation}deg`,
              animation: `petalFall ${p.duration}s ${p.delay}s ease-in-out infinite`,
              willChange: 'transform, opacity',
            }}
          >
            <svg
              width={p.size}
              height={p.size * 1.4}
              viewBox="0 0 14 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7,0 Q14,6 12,14 Q10,20 7,20 Q4,20 2,14 Q0,6 7,0Z"
                fill={p.color}
                opacity="0.85"
              />
              <path
                d="M7,2 Q10,7 9,13 Q8,17 7,18"
                fill="none"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="0.5"
              />
            </svg>
          </div>
        ))}
      </div>
    </>
  );
}


/* ═══════════════════════════════════════════════════════════════════════════
   GoldSparkles — Twinkling gold star/sparkle dots with pulsing animation
   ═══════════════════════════════════════════════════════════════════════════ */
export function GoldSparkles({ count = 12 }) {
  const sparkles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: 5 + Math.random() * 90,
      top: 5 + Math.random() * 90,
      size: 4 + Math.random() * 8,
      duration: 1.5 + Math.random() * 2.5,
      delay: Math.random() * 3,
      opacity: 0.4 + Math.random() * 0.5,
    }));
  }, [count]);

  return (
    <>
      <style>{`
        @keyframes sparklePulse {
          0%, 100% {
            transform: scale(0.3) rotate(0deg);
            opacity: 0.1;
          }
          50% {
            transform: scale(1) rotate(180deg);
            opacity: var(--sparkle-opacity);
          }
        }
      `}</style>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
          overflow: 'hidden',
        }}
        aria-hidden="true"
      >
        {sparkles.map((s) => (
          <div
            key={s.id}
            style={{
              position: 'absolute',
              left: `${s.left}%`,
              top: `${s.top}%`,
              '--sparkle-opacity': s.opacity,
              animation: `sparklePulse ${s.duration}s ${s.delay}s ease-in-out infinite`,
              willChange: 'transform, opacity',
            }}
          >
            <svg
              width={s.size}
              height={s.size}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Four-pointed star sparkle */}
              <path
                d="M10,0 L12,8 L20,10 L12,12 L10,20 L8,12 L0,10 L8,8 Z"
                fill="#D4AF37"
              />
              <path
                d="M10,4 L11,8.5 L15.5,10 L11,11.5 L10,16 L9,11.5 L4.5,10 L9,8.5 Z"
                fill="#F5E6A3"
                opacity="0.9"
              />
              <circle cx="10" cy="10" r="1.5" fill="#FFF8DC" opacity="0.8" />
            </svg>
          </div>
        ))}
      </div>
    </>
  );
}


/* ═══════════════════════════════════════════════════════════════════════════
   IslamicGeometricBorder — Repeating Islamic star pattern border strip
   ═══════════════════════════════════════════════════════════════════════════ */
export function IslamicGeometricBorder({
  orientation = 'horizontal',
  length = 500,
  thickness = 40,
  color = '#D4AF37',
  className = '',
}) {
  const isHorizontal = orientation === 'horizontal';
  const patternSize = 40;
  const repeatCount = Math.ceil(length / patternSize);

  return (
    <div className={className} style={{ display: 'flex', justifyContent: 'center', pointerEvents: 'none' }}>
      <svg
        viewBox={isHorizontal ? `0 0 ${repeatCount * patternSize} ${thickness}` : `0 0 ${thickness} ${repeatCount * patternSize}`}
        width={isHorizontal ? length : thickness}
        height={isHorizontal ? thickness : length}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Islamic 8-pointed star pattern tile */}
          <pattern
            id="islamicStarPattern"
            x="0" y="0"
            width={patternSize}
            height={patternSize}
            patternUnits="userSpaceOnUse"
          >
            {/* Background diamond grid */}
            <rect width={patternSize} height={patternSize} fill="none" />

            {/* 8-pointed star */}
            <polygon
              points={`${patternSize / 2},2 ${patternSize / 2 + 5},${patternSize / 2 - 5} ${patternSize - 2},${patternSize / 2} ${patternSize / 2 + 5},${patternSize / 2 + 5} ${patternSize / 2},${patternSize - 2} ${patternSize / 2 - 5},${patternSize / 2 + 5} 2,${patternSize / 2} ${patternSize / 2 - 5},${patternSize / 2 - 5}`}
              fill="none"
              stroke={color}
              strokeWidth="1.2"
              opacity="0.8"
            />

            {/* Inner rotated square */}
            <rect
              x={patternSize / 2 - 7}
              y={patternSize / 2 - 7}
              width="14"
              height="14"
              fill="none"
              stroke={color}
              strokeWidth="0.8"
              opacity="0.5"
              transform={`rotate(45 ${patternSize / 2} ${patternSize / 2})`}
            />

            {/* Center dot */}
            <circle cx={patternSize / 2} cy={patternSize / 2} r="1.5" fill={color} opacity="0.6" />

            {/* Connecting lines to corners */}
            <line x1="0" y1="0" x2={patternSize / 2 - 5} y2={patternSize / 2 - 5} stroke={color} strokeWidth="0.6" opacity="0.3" />
            <line x1={patternSize} y1="0" x2={patternSize / 2 + 5} y2={patternSize / 2 - 5} stroke={color} strokeWidth="0.6" opacity="0.3" />
            <line x1="0" y1={patternSize} x2={patternSize / 2 - 5} y2={patternSize / 2 + 5} stroke={color} strokeWidth="0.6" opacity="0.3" />
            <line x1={patternSize} y1={patternSize} x2={patternSize / 2 + 5} y2={patternSize / 2 + 5} stroke={color} strokeWidth="0.6" opacity="0.3" />
          </pattern>
        </defs>

        {/* Border lines */}
        {isHorizontal ? (
          <>
            <line x1="0" y1="1" x2={repeatCount * patternSize} y2="1" stroke={color} strokeWidth="1.5" opacity="0.6" />
            <line x1="0" y1={thickness - 1} x2={repeatCount * patternSize} y2={thickness - 1} stroke={color} strokeWidth="1.5" opacity="0.6" />
            <rect x="0" y="3" width={repeatCount * patternSize} height={thickness - 6} fill="url(#islamicStarPattern)" />
          </>
        ) : (
          <>
            <line x1="1" y1="0" x2="1" y2={repeatCount * patternSize} stroke={color} strokeWidth="1.5" opacity="0.6" />
            <line x1={thickness - 1} y1="0" x2={thickness - 1} y2={repeatCount * patternSize} stroke={color} strokeWidth="1.5" opacity="0.6" />
            <rect x="3" y="0" width={thickness - 6} height={repeatCount * patternSize} fill="url(#islamicStarPattern)" />
          </>
        )}
      </svg>
    </div>
  );
}


/* ═══════════════════════════════════════════════════════════════════════════
   MoonAndStars — Decorative crescent moon with stars SVG motif
   ═══════════════════════════════════════════════════════════════════════════ */
export function MoonAndStars({ size = 120, color = '#D4AF37', className = '' }) {
  return (
    <div className={className} style={{ display: 'inline-flex', pointerEvents: 'none' }}>
      <svg
        viewBox="0 0 120 120"
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="moonGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5E6A3" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#B8960C" />
          </linearGradient>
          <radialGradient id="moonGlow" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#FFF8E1" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Subtle glow behind moon */}
        <circle cx="50" cy="55" r="40" fill="url(#moonGlow)" />

        {/* Crescent moon — created by overlapping circles */}
        <clipPath id="crescentClip">
          <circle cx="50" cy="55" r="32" />
        </clipPath>
        <circle cx="50" cy="55" r="32" fill="url(#moonGold)" />
        <circle cx="62" cy="48" r="26" fill="#1a0a2e" clipPath="url(#crescentClip)" />
        {/* Moon surface details */}
        <circle cx="38" cy="50" r="2" fill="#B8960C" opacity="0.3" />
        <circle cx="42" cy="65" r="1.5" fill="#B8960C" opacity="0.25" />
        <circle cx="35" cy="58" r="1" fill="#B8960C" opacity="0.2" />

        {/* Decorative 5-pointed stars */}
        {/* Large star */}
        <g transform="translate(85, 25)">
          <polygon
            points="0,-10 2.9,-3.1 10,-3.1 4.5,2 6.9,9.5 0,5.5 -6.9,9.5 -4.5,2 -10,-3.1 -2.9,-3.1"
            fill={color}
          />
          <polygon
            points="0,-6 1.8,-1.9 6,-1.9 2.7,1.2 4.1,5.7 0,3.3 -4.1,5.7 -2.7,1.2 -6,-1.9 -1.8,-1.9"
            fill="#F5E6A3"
            opacity="0.7"
          />
        </g>

        {/* Medium star */}
        <g transform="translate(95, 55)">
          <polygon
            points="0,-7 2,-2.2 7,-2.2 3.2,1.4 4.8,6.6 0,3.8 -4.8,6.6 -3.2,1.4 -7,-2.2 -2,-2.2"
            fill={color}
          />
          <circle cx="0" cy="0" r="1.5" fill="#FFF8DC" opacity="0.6" />
        </g>

        {/* Small stars */}
        <g transform="translate(75, 12)">
          <polygon
            points="0,-5 1.5,-1.5 5,-1.5 2.2,1 3.4,4.7 0,2.7 -3.4,4.7 -2.2,1 -5,-1.5 -1.5,-1.5"
            fill={color}
            opacity="0.8"
          />
        </g>
        <g transform="translate(105, 40)">
          <polygon
            points="0,-4 1.2,-1.2 4,-1.2 1.8,0.8 2.7,3.8 0,2.2 -2.7,3.8 -1.8,0.8 -4,-1.2 -1.2,-1.2"
            fill={color}
            opacity="0.7"
          />
        </g>
        <g transform="translate(70, 35)">
          <polygon
            points="0,-3.5 1,-1 3.5,-1 1.5,0.6 2.3,3 0,1.8 -2.3,3 -1.5,0.6 -3.5,-1 -1,-1"
            fill={color}
            opacity="0.6"
          />
        </g>

        {/* Tiny twinkle dots */}
        <circle cx="100" cy="18" r="1" fill="#F5E6A3" opacity="0.7" />
        <circle cx="65" cy="8" r="0.8" fill="#F5E6A3" opacity="0.5" />
        <circle cx="110" cy="65" r="0.8" fill="#F5E6A3" opacity="0.5" />
        <circle cx="90" cy="75" r="1" fill="#D4AF37" opacity="0.4" />
      </svg>
    </div>
  );
}


/* ═══════════════════════════════════════════════════════════════════════════
   MasjidSilhouette — Detailed mosque dome silhouette with minarets
   ═══════════════════════════════════════════════════════════════════════════ */
export function MasjidSilhouette({ width = 400, color = '#D4AF37', opacity = 0.15, className = '' }) {
  const aspectH = (200 / 400) * width;

  return (
    <div className={className} style={{ display: 'flex', justifyContent: 'center', pointerEvents: 'none' }}>
      <svg
        viewBox="0 0 400 200"
        width={width}
        height={aspectH}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="masjidGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity={opacity * 1.5} />
            <stop offset="100%" stopColor={color} stopOpacity={opacity * 0.5} />
          </linearGradient>
        </defs>

        {/* Main central dome */}
        <path
          d="M140,200 L140,120 Q140,55 200,40 Q260,55 260,120 L260,200"
          fill="url(#masjidGrad)"
          stroke={color}
          strokeWidth="1"
          opacity={opacity}
        />

        {/* Central dome highlight arc */}
        <path
          d="M155,120 Q155,65 200,50 Q245,65 245,120"
          fill="none"
          stroke={color}
          strokeWidth="0.8"
          opacity={opacity * 1.5}
        />

        {/* Finial (crescent) on central dome */}
        <line x1="200" y1="40" x2="200" y2="28" stroke={color} strokeWidth="1.2" opacity={opacity * 2} />
        <circle cx="200" cy="24" r="5" fill="none" stroke={color} strokeWidth="1" opacity={opacity * 2} />
        <circle cx="203" cy="23" r="3.5" fill="currentColor" stroke="none" opacity="0.05" />

        {/* Left smaller dome */}
        <path
          d="M80,200 L80,145 Q80,110 120,100 Q140,110 140,145 L140,200"
          fill="url(#masjidGrad)"
          stroke={color}
          strokeWidth="0.8"
          opacity={opacity * 0.8}
        />
        {/* Left dome finial */}
        <line x1="110" y1="105" x2="110" y2="95" stroke={color} strokeWidth="0.8" opacity={opacity * 1.5} />
        <circle cx="110" cy="92" r="3" fill="none" stroke={color} strokeWidth="0.8" opacity={opacity * 1.5} />

        {/* Right smaller dome */}
        <path
          d="M260,200 L260,145 Q260,110 300,100 Q320,110 320,145 L320,200"
          fill="url(#masjidGrad)"
          stroke={color}
          strokeWidth="0.8"
          opacity={opacity * 0.8}
        />
        {/* Right dome finial */}
        <line x1="290" y1="105" x2="290" y2="95" stroke={color} strokeWidth="0.8" opacity={opacity * 1.5} />
        <circle cx="290" cy="92" r="3" fill="none" stroke={color} strokeWidth="0.8" opacity={opacity * 1.5} />

        {/* Left minaret */}
        <rect x="48" y="90" width="16" height="110" fill="url(#masjidGrad)" stroke={color} strokeWidth="0.8" opacity={opacity * 0.9} />
        {/* Minaret cap */}
        <path d="M46,90 L56,60 L66,90" fill="url(#masjidGrad)" stroke={color} strokeWidth="0.8" opacity={opacity} />
        {/* Minaret finial */}
        <line x1="56" y1="60" x2="56" y2="50" stroke={color} strokeWidth="0.8" opacity={opacity * 1.5} />
        <circle cx="56" cy="48" r="2.5" fill="none" stroke={color} strokeWidth="0.8" opacity={opacity * 1.5} />
        {/* Minaret balcony rings */}
        <line x1="46" y1="110" x2="66" y2="110" stroke={color} strokeWidth="1" opacity={opacity * 1.2} />
        <line x1="46" y1="140" x2="66" y2="140" stroke={color} strokeWidth="1" opacity={opacity * 1.2} />
        {/* Minaret windows */}
        <ellipse cx="56" cy="125" rx="3" ry="5" fill="none" stroke={color} strokeWidth="0.6" opacity={opacity * 1.5} />
        <ellipse cx="56" cy="155" rx="3" ry="5" fill="none" stroke={color} strokeWidth="0.6" opacity={opacity * 1.5} />

        {/* Right minaret */}
        <rect x="336" y="90" width="16" height="110" fill="url(#masjidGrad)" stroke={color} strokeWidth="0.8" opacity={opacity * 0.9} />
        <path d="M334,90 L344,60 L354,90" fill="url(#masjidGrad)" stroke={color} strokeWidth="0.8" opacity={opacity} />
        <line x1="344" y1="60" x2="344" y2="50" stroke={color} strokeWidth="0.8" opacity={opacity * 1.5} />
        <circle cx="344" cy="48" r="2.5" fill="none" stroke={color} strokeWidth="0.8" opacity={opacity * 1.5} />
        <line x1="334" y1="110" x2="354" y2="110" stroke={color} strokeWidth="1" opacity={opacity * 1.2} />
        <line x1="334" y1="140" x2="354" y2="140" stroke={color} strokeWidth="1" opacity={opacity * 1.2} />
        <ellipse cx="344" cy="125" rx="3" ry="5" fill="none" stroke={color} strokeWidth="0.6" opacity={opacity * 1.5} />
        <ellipse cx="344" cy="155" rx="3" ry="5" fill="none" stroke={color} strokeWidth="0.6" opacity={opacity * 1.5} />

        {/* Central arch doorway */}
        <path
          d="M180,200 L180,155 Q180,135 200,130 Q220,135 220,155 L220,200"
          fill="none"
          stroke={color}
          strokeWidth="1"
          opacity={opacity * 1.5}
        />
        {/* Arch inner detail */}
        <path
          d="M186,200 L186,158 Q186,142 200,138 Q214,142 214,158 L214,200"
          fill="none"
          stroke={color}
          strokeWidth="0.5"
          opacity={opacity}
        />

        {/* Side arch windows */}
        <path d="M100,180 L100,165 Q100,155 110,152 Q120,155 120,165 L120,180" fill="none" stroke={color} strokeWidth="0.6" opacity={opacity * 1.2} />
        <path d="M280,180 L280,165 Q280,155 290,152 Q300,155 300,165 L300,180" fill="none" stroke={color} strokeWidth="0.6" opacity={opacity * 1.2} />

        {/* Base line */}
        <line x1="30" y1="200" x2="370" y2="200" stroke={color} strokeWidth="1.5" opacity={opacity * 1.5} />

        {/* Wall connections */}
        <line x1="66" y1="200" x2="66" y2="160" stroke={color} strokeWidth="0.6" opacity={opacity * 0.7} />
        <line x1="80" y1="160" x2="66" y2="160" stroke={color} strokeWidth="0.6" opacity={opacity * 0.7} />
        <line x1="334" y1="200" x2="334" y2="160" stroke={color} strokeWidth="0.6" opacity={opacity * 0.7} />
        <line x1="320" y1="160" x2="334" y2="160" stroke={color} strokeWidth="0.6" opacity={opacity * 0.7} />
      </svg>
    </div>
  );
}


/* ═══════════════════════════════════════════════════════════════════════════
   FloralArchway — Arch frame with climbing floral vines & keystone rosette
   ═══════════════════════════════════════════════════════════════════════════ */
export function FloralArchway({ children, width = 420, height = 500, className = '' }) {
  return (
    <div
      className={className}
      style={{
        position: 'relative',
        width,
        minHeight: height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Archway SVG overlay */}
      <svg
        viewBox="0 0 420 500"
        width={width}
        height={height}
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="archGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5E6A3" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#B8960C" />
          </linearGradient>
          <radialGradient id="archRose" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#f0c0d0" />
            <stop offset="60%" stopColor="#e8a0b4" />
            <stop offset="100%" stopColor="#d4577a" />
          </radialGradient>
        </defs>

        {/* Main arch shape */}
        <path
          d="M50,490 L50,180 Q50,40 210,30 Q370,40 370,180 L370,490"
          fill="none"
          stroke="url(#archGold)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Inner arch line */}
        <path
          d="M65,490 L65,185 Q65,55 210,45 Q355,55 355,185 L355,490"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="1.5"
          opacity="0.5"
        />

        {/* Left climbing vine */}
        <path
          d="M55,480 Q40,440 55,400 Q70,360 50,320 Q35,280 55,240 Q70,200 55,170 Q45,140 60,110 Q75,85 100,65 Q130,48 160,40"
          fill="none" stroke="#4a7c31" strokeWidth="2" strokeLinecap="round" opacity="0.7"
        />
        {/* Left secondary vine */}
        <path
          d="M60,470 Q45,430 60,390 Q75,355 55,315 Q42,285 58,250 Q72,220 60,190"
          fill="none" stroke="#2d5016" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"
        />

        {/* Right climbing vine */}
        <path
          d="M365,480 Q380,440 365,400 Q350,360 370,320 Q385,280 365,240 Q350,200 365,170 Q375,140 360,110 Q345,85 320,65 Q290,48 260,40"
          fill="none" stroke="#4a7c31" strokeWidth="2" strokeLinecap="round" opacity="0.7"
        />
        {/* Right secondary vine */}
        <path
          d="M360,470 Q375,430 360,390 Q345,355 365,315 Q378,285 362,250 Q348,220 360,190"
          fill="none" stroke="#2d5016" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"
        />

        {/* Left leaves */}
        {[
          { x: 48, y: 440, r: -20 },
          { x: 62, y: 380, r: 25 },
          { x: 42, y: 320, r: -30 },
          { x: 58, y: 260, r: 15 },
          { x: 48, y: 210, r: -25 },
          { x: 60, y: 160, r: 20 },
          { x: 75, y: 115, r: 35 },
          { x: 100, y: 78, r: 50 },
          { x: 135, y: 52, r: 65 },
        ].map((l, i) => (
          <path
            key={`ll-${i}`}
            d="M0,-6 Q6,-6 8,0 Q6,6 0,6 Q-2,2 0,-6Z"
            fill={i % 2 === 0 ? '#4a7c31' : '#2d5016'}
            opacity={0.7}
            transform={`translate(${l.x}, ${l.y}) rotate(${l.r})`}
          />
        ))}

        {/* Right leaves */}
        {[
          { x: 372, y: 440, r: 20 },
          { x: 358, y: 380, r: -25 },
          { x: 378, y: 320, r: 30 },
          { x: 362, y: 260, r: -15 },
          { x: 372, y: 210, r: 25 },
          { x: 360, y: 160, r: -20 },
          { x: 345, y: 115, r: -35 },
          { x: 320, y: 78, r: -50 },
          { x: 285, y: 52, r: -65 },
        ].map((l, i) => (
          <path
            key={`rl-${i}`}
            d="M0,-6 Q6,-6 8,0 Q6,6 0,6 Q-2,2 0,-6Z"
            fill={i % 2 === 0 ? '#4a7c31' : '#2d5016'}
            opacity={0.7}
            transform={`translate(${l.x}, ${l.y}) rotate(${l.r})`}
          />
        ))}

        {/* Small roses along left vine */}
        {[
          { x: 55, y: 410, s: 0.7 },
          { x: 50, y: 290, s: 0.6 },
          { x: 60, y: 185, s: 0.65 },
          { x: 85, y: 95, s: 0.6 },
        ].map((r, i) => (
          <g key={`lr-${i}`} transform={`translate(${r.x}, ${r.y}) scale(${r.s})`}>
            <ellipse cx="0" cy="-5" rx="4" ry="6" fill="#e8a0b4" transform="rotate(0)" opacity="0.85" />
            <ellipse cx="0" cy="-5" rx="4" ry="6" fill="url(#archRose)" transform="rotate(72)" opacity="0.8" />
            <ellipse cx="0" cy="-5" rx="4" ry="6" fill="#e8a0b4" transform="rotate(144)" opacity="0.85" />
            <ellipse cx="0" cy="-5" rx="4" ry="6" fill="url(#archRose)" transform="rotate(216)" opacity="0.8" />
            <ellipse cx="0" cy="-5" rx="4" ry="6" fill="#e8a0b4" transform="rotate(288)" opacity="0.85" />
            <circle cx="0" cy="0" r="2.5" fill="#d4577a" />
            <circle cx="0" cy="0" r="1" fill="#D4AF37" opacity="0.7" />
          </g>
        ))}

        {/* Small roses along right vine */}
        {[
          { x: 365, y: 410, s: 0.7 },
          { x: 370, y: 290, s: 0.6 },
          { x: 360, y: 185, s: 0.65 },
          { x: 335, y: 95, s: 0.6 },
        ].map((r, i) => (
          <g key={`rr-${i}`} transform={`translate(${r.x}, ${r.y}) scale(${r.s})`}>
            <ellipse cx="0" cy="-5" rx="4" ry="6" fill="#e8a0b4" transform="rotate(0)" opacity="0.85" />
            <ellipse cx="0" cy="-5" rx="4" ry="6" fill="url(#archRose)" transform="rotate(72)" opacity="0.8" />
            <ellipse cx="0" cy="-5" rx="4" ry="6" fill="#e8a0b4" transform="rotate(144)" opacity="0.85" />
            <ellipse cx="0" cy="-5" rx="4" ry="6" fill="url(#archRose)" transform="rotate(216)" opacity="0.8" />
            <ellipse cx="0" cy="-5" rx="4" ry="6" fill="#e8a0b4" transform="rotate(288)" opacity="0.85" />
            <circle cx="0" cy="0" r="2.5" fill="#d4577a" />
            <circle cx="0" cy="0" r="1" fill="#D4AF37" opacity="0.7" />
          </g>
        ))}

        {/* Keystone rosette at arch top center */}
        <g transform="translate(210, 32)">
          {/* Outer large petals */}
          <ellipse cx="0" cy="-12" rx="8" ry="14" fill="url(#archRose)" transform="rotate(0)" opacity="0.9" />
          <ellipse cx="0" cy="-12" rx="8" ry="14" fill="url(#archRose)" transform="rotate(45)" opacity="0.85" />
          <ellipse cx="0" cy="-12" rx="8" ry="14" fill="url(#archRose)" transform="rotate(90)" opacity="0.8" />
          <ellipse cx="0" cy="-12" rx="8" ry="14" fill="url(#archRose)" transform="rotate(135)" opacity="0.85" />
          <ellipse cx="0" cy="-12" rx="8" ry="14" fill="url(#archRose)" transform="rotate(180)" opacity="0.9" />
          <ellipse cx="0" cy="-12" rx="8" ry="14" fill="url(#archRose)" transform="rotate(225)" opacity="0.85" />
          <ellipse cx="0" cy="-12" rx="8" ry="14" fill="url(#archRose)" transform="rotate(270)" opacity="0.8" />
          <ellipse cx="0" cy="-12" rx="8" ry="14" fill="url(#archRose)" transform="rotate(315)" opacity="0.85" />
          {/* Middle petals */}
          <ellipse cx="0" cy="-7" rx="5" ry="9" fill="#e8a0b4" transform="rotate(22)" opacity="0.9" />
          <ellipse cx="0" cy="-7" rx="5" ry="9" fill="#e8a0b4" transform="rotate(82)" opacity="0.85" />
          <ellipse cx="0" cy="-7" rx="5" ry="9" fill="#e8a0b4" transform="rotate(142)" opacity="0.9" />
          <ellipse cx="0" cy="-7" rx="5" ry="9" fill="#e8a0b4" transform="rotate(202)" opacity="0.85" />
          <ellipse cx="0" cy="-7" rx="5" ry="9" fill="#e8a0b4" transform="rotate(262)" opacity="0.9" />
          <ellipse cx="0" cy="-7" rx="5" ry="9" fill="#e8a0b4" transform="rotate(322)" opacity="0.85" />
          {/* Center */}
          <circle cx="0" cy="0" r="5" fill="#d4577a" />
          <circle cx="0" cy="0" r="2.5" fill="#D4AF37" opacity="0.85" />
        </g>

        {/* Gold accent dots at the keystone area */}
        <circle cx="185" cy="40" r="1.5" fill="#D4AF37" opacity="0.6" />
        <circle cx="235" cy="40" r="1.5" fill="#D4AF37" opacity="0.6" />
        <circle cx="170" cy="50" r="1" fill="#F5E6A3" opacity="0.5" />
        <circle cx="250" cy="50" r="1" fill="#F5E6A3" opacity="0.5" />

        {/* Gold leaf sprigs near keystone */}
        <path d="M190,38 Q195,30 200,36 Q196,42 190,38Z" fill="#4a7c31" opacity="0.65" />
        <path d="M230,38 Q225,30 220,36 Q224,42 230,38Z" fill="#4a7c31" opacity="0.65" />

        {/* Bottom decorative curl endpoints */}
        <path d="M50,490 Q38,485 35,478 Q33,470 40,470" fill="none" stroke="#D4AF37" strokeWidth="1.2" opacity="0.5" />
        <path d="M370,490 Q382,485 385,478 Q387,470 380,470" fill="none" stroke="#D4AF37" strokeWidth="1.2" opacity="0.5" />
      </svg>

      {/* Children content */}
      <div style={{ position: 'relative', zIndex: 2, padding: '60px 70px 40px', textAlign: 'center' }}>
        {children}
      </div>
    </div>
  );
}
