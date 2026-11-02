// Web Audio API Ambient Indian / Sufi Wedding Soundscape Synthesizer
// Produces an ethereal acoustic Santoor & Tanpura chord progression in Raag Yaman
class WeddingAudioSynthesizer {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.timer = null;
    this.gainNode = null;
    this.volume = 0.35;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.setValueAtTime(this.volume, this.ctx.currentTime);
      this.gainNode.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playNote(frequency, duration, type = 'sine', decay = 3.0, detune = 0) {
    if (!this.ctx || !this.isPlaying) return;

    try {
      const osc = this.ctx.createOscillator();
      const noteGain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(frequency, this.ctx.currentTime);
      osc.detune.setValueAtTime(detune, this.ctx.currentTime);

      const now = this.ctx.currentTime;
      noteGain.gain.setValueAtTime(0.001, now);
      noteGain.gain.exponentialRampToValueAtTime(0.2, now + 0.08);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, now + decay);

      osc.connect(noteGain);
      noteGain.connect(this.gainNode);

      osc.start(now);
      osc.stop(now + decay);
    } catch {
      // Audio fallback handling
    }
  }

  startDrone() {
    // Tanpura Sa & Pa fundamental drone
    const droneFreqs = [146.83, 220.00, 293.66]; // D3, A3, D4
    droneFreqs.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const droneGain = this.ctx.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      
      const now = this.ctx.currentTime;
      droneGain.gain.setValueAtTime(0.02, now);
      
      // subtle LFO vibrato
      const lfo = this.ctx.createOscillator();
      lfo.frequency.setValueAtTime(0.2 + idx * 0.1, now);
      const lfoGain = this.ctx.createGain();
      lfoGain.gain.setValueAtTime(1.5, now);
      lfo.connect(lfoGain);
      lfoGain.connect(osc.frequency);
      lfo.start(now);

      osc.connect(droneGain);
      droneGain.connect(this.gainNode);
      osc.start(now);
      this.droneOscs = this.droneOscs || [];
      this.droneOscs.push({ osc, lfo, droneGain });
    });
  }

  stopDrone() {
    if (this.droneOscs) {
      this.droneOscs.forEach(({ osc, lfo }) => {
        try {
          osc.stop();
          lfo.stop();
        } catch {}
      });
      this.droneOscs = [];
    }
  }

  start() {
    this.init();
    if (this.isPlaying) return;
    this.isPlaying = true;
    this.startDrone();

    // Raag Yaman notes (Santoor scale: D, E, F#, G#, A, B, C#)
    const yamanScale = [
      293.66, // D4
      329.63, // E4
      369.99, // F#4
      415.30, // G#4
      440.00, // A4
      493.88, // B4
      554.37, // C#5
      587.33, // D5
      659.25  // E5
    ];

    let step = 0;
    const melodyLoop = () => {
      if (!this.isPlaying) return;
      const freq = yamanScale[step % yamanScale.length];
      
      // Santoor chime
      this.playNote(freq, 2.8, 'sine', 2.8, (Math.random() - 0.5) * 8);
      
      // Harmonizing fifth occasionally
      if (step % 3 === 0) {
        this.playNote(freq * 1.5, 2.2, 'triangle', 2.2);
      }

      const nextIntervals = [700, 1100, 900, 1400, 600, 1600];
      const nextDelay = nextIntervals[step % nextIntervals.length];
      
      // melodic phrase progression
      step = (step + (Math.random() > 0.4 ? 1 : 2)) % yamanScale.length;
      this.timer = setTimeout(melodyLoop, nextDelay);
    };

    melodyLoop();
  }

  stop() {
    this.isPlaying = false;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    this.stopDrone();
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }
}

export const weddingAudio = new WeddingAudioSynthesizer();

