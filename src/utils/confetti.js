import confetti from 'canvas-confetti';

export const triggerRosePetalShower = () => {
  // Burst 1: Crimson & Rose Red Petals
  confetti({
    particleCount: 50,
    spread: 70,
    origin: { y: 0.15 },
    colors: ['#e11d48', '#fb7185', '#be123c', '#fda4af', '#f43f5e'],
    shapes: ['circle'],
    scalar: 1.4,
    ticks: 250,
    gravity: 0.7,
  });

  // Burst 2: Gold Shimmer Foil
  setTimeout(() => {
    confetti({
      particleCount: 45,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.3 },
      colors: ['#ffd700', '#f59e0b', '#d97706', '#fef08a'],
      scalar: 1.1,
      ticks: 200,
    });
    confetti({
      particleCount: 45,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.3 },
      colors: ['#ffd700', '#f59e0b', '#d97706', '#fef08a'],
      scalar: 1.1,
      ticks: 200,
    });
  }, 200);
};

export const triggerMarigoldShower = () => {
  confetti({
    particleCount: 65,
    spread: 90,
    origin: { y: 0.2 },
    colors: ['#f59e0b', '#d97706', '#fbbf24', '#fde047'],
    shapes: ['circle'],
    scalar: 1.5,
    gravity: 0.8,
  });
};

