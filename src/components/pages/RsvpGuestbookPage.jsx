import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { triggerRosePetalShower } from '../../utils/confetti';
import { Send, Heart, CheckCircle2, MessageCircle, Sparkles, ArrowLeft, RotateCcw, Check, Gift } from 'lucide-react';
import { FloralCorner, FloralDivider } from '../FloralOrnaments';

export const RsvpGuestbookPage = ({ data, theme, onPrev, onResetToStart, isMobile }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guestsCount: '2',
    attendance: 'attending',
    functions: ['Nikah', 'Walima'],
    duaMessage: ''
  });

  const [activeTab, setActiveTab] = useState('form'); // 'form' | 'duas'
  const [submitted, setSubmitted] = useState(false);
  const [duasWall, setDuasWall] = useState([
    {
      name: 'Janab Tariq Baig & Family',
      message: 'Barakallahu lakuma wa baraka alaikuma wa jama\'a bainakuma fee khair! Heartfelt congratulations to both families.',
      date: 'Just now'
    },
    {
      name: 'Dr. Aslam & Farzana',
      message: 'So thrilled to celebrate Zeeshan and Fatima! Wishing the lovely couple eternal bliss, prosperity, and endless affection.',
      date: '2 hours ago'
    },
    {
      name: 'Salman & Ayesha',
      message: 'May Allah SWT shower your home with tranquility, happiness, and pious progeny. Looking forward to the Nikah!',
      date: 'Yesterday'
    }
  ]);

  const handleFunctionToggle = (funcName) => {
    setFormData(prev => {
      const exists = prev.functions.includes(funcName);
      if (exists) {
        return { ...prev, functions: prev.functions.filter(f => f !== funcName) };
      } else {
        return { ...prev, functions: [...prev.functions, funcName] };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    if (formData.duaMessage.trim()) {
      setDuasWall([
        {
          name: formData.name,
          message: formData.duaMessage,
          date: 'Just now'
        },
        ...duasWall
      ]);
    }

    setSubmitted(true);
    triggerRosePetalShower();
  };

  const getWhatsAppRsvpUrl = () => {
    const text = `Assalamu Alaikum! RSVP Response from ${formData.name || 'Guest'}:
• Attendance: ${formData.attendance === 'attending' ? 'Yes, with family (Joyfully Attending)' : 'Regretfully Unable to Attend'}
• Guest Count: ${formData.guestsCount}
• Functions: ${formData.functions.join(', ')}
• Dua for Couple: ${formData.duaMessage || 'Heartfelt congratulations & best wishes!'}`;

    const hostPhone = (data.venueGuide.contactPersons[0]?.phone || '+91 98765 43210').replace(/[^0-9]/g, '');
    return `https://wa.me/${hostPhone}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="relative min-h-[100dvh] flex items-center justify-center px-3 py-6 sm:px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-jaali opacity-30" />
        <div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[140px]" 
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

          <div className="absolute inset-0 animate-shimmer rounded-[24px] sm:rounded-[32px] pointer-events-none" />

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center mb-4 sm:mb-6"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-400/20 text-rose-300 text-[10px] sm:text-xs tracking-[0.2em] uppercase font-serif mb-2">
              <Heart className="w-3 h-3 fill-rose-400 text-rose-400" />
              <span>Blessings & Attendance</span>
            </div>
            <h2 className="font-heading text-xl sm:text-3xl md:text-4xl font-bold text-stone-50 tracking-wide">
              RSVP & Guest Duas
            </h2>
            <p className="font-script text-xl sm:text-2xl text-amber-300/80 mt-1">
              Your prayers mean the world to us
            </p>
          </motion.div>

          <FloralDivider width={260} className="mx-auto my-3" />

          {/* Segmented Switcher on mobile/compact view */}
          {isMobile && (
            <div className="flex items-center justify-center p-1 rounded-full bg-stone-900/80 border border-amber-400/30 max-w-xs mx-auto shadow-inner mb-4">
              <button
                onClick={() => setActiveTab('form')}
                className={`flex-1 py-1.5 px-3 rounded-full text-xs font-serif transition-all ${
                  activeTab === 'form'
                    ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 font-bold shadow-md'
                    : 'text-stone-300 hover:text-amber-200'
                }`}
              >
                Submit RSVP
              </button>
              <button
                onClick={() => setActiveTab('duas')}
                className={`flex-1 py-1.5 px-3 rounded-full text-xs font-serif transition-all ${
                  activeTab === 'duas'
                    ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 font-bold shadow-md'
                    : 'text-stone-300 hover:text-amber-200'
                }`}
              >
                Duas Wall ({duasWall.length})
              </button>
            </div>
          )}

          {/* Content Layout:
              If isMobile: conditional tab (form or duas) full width!
              If desktop: side by side 2 columns */}
          <div className={`grid ${isMobile ? 'grid-cols-1 gap-4' : 'grid-cols-1 md:grid-cols-2 gap-6'} my-3`}>
            
            {/* Left Card: Interactive RSVP Form */}
            {(!isMobile || activeTab === 'form') && (
              <div className="p-4 sm:p-6 rounded-2xl bg-stone-900/60 border border-amber-400/20 shadow-lg backdrop-blur-sm">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="submitted-state"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="py-6 sm:py-8 text-center space-y-4"
                    >
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 mx-auto flex items-center justify-center shadow-[0_0_20px_rgba(52,211,153,0.3)]">
                        <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
                      </div>
                      <h3 className="font-heading text-lg sm:text-xl text-stone-50 font-bold">
                        Jazakallah Khair!
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-300/90 font-serif max-w-xs mx-auto leading-relaxed">
                        Thank you for confirming your presence and blessing our newlyweds with your prayers.
                      </p>

                      <div className="pt-3 flex flex-col gap-2.5 max-w-xs mx-auto">
                        <a
                          href={getWhatsAppRsvpUrl()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-semibold text-xs tracking-wider uppercase shadow-md transition-all active:scale-95"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>Send to Host on WhatsApp</span>
                        </a>

                        <button
                          onClick={() => setSubmitted(false)}
                          className="text-xs text-stone-400 hover:text-amber-300 transition-colors font-serif underline py-1"
                        >
                          Edit RSVP details
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <div>
                        <label className="block text-[9px] uppercase tracking-[0.18em] text-amber-400/80 font-bold mb-1">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Farhan & Family"
                          className="w-full px-3 py-2 rounded-xl bg-stone-950/80 border border-stone-700/80 text-stone-100 text-xs focus:outline-none focus:border-amber-400 transition-colors"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-2.5">
                        <div>
                          <label className="block text-[9px] uppercase tracking-[0.18em] text-amber-400/80 font-bold mb-1">
                            Attendance
                          </label>
                          <select
                            value={formData.attendance}
                            onChange={(e) => setFormData({ ...formData, attendance: e.target.value })}
                            className="w-full px-2.5 py-2 rounded-xl bg-stone-950/80 border border-stone-700/80 text-stone-100 text-xs focus:outline-none focus:border-amber-400"
                          >
                            <option value="attending">Joyfully Attending</option>
                            <option value="regret">Regretfully Unable</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-[9px] uppercase tracking-[0.18em] text-amber-400/80 font-bold mb-1">
                            Total Guests
                          </label>
                          <input
                            type="number"
                            min="1"
                            max="12"
                            value={formData.guestsCount}
                            onChange={(e) => setFormData({ ...formData, guestsCount: e.target.value })}
                            className="w-full px-2.5 py-2 rounded-xl bg-stone-950/80 border border-stone-700/80 text-stone-100 text-xs focus:outline-none focus:border-amber-400"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[9px] uppercase tracking-[0.18em] text-amber-400/80 font-bold mb-1.5">
                          Ceremonies Attending
                        </label>
                        <div className="grid grid-cols-2 gap-1.5 text-xs">
                          {['Haldi', 'Mehndi', 'Nikah', 'Walima'].map((func) => {
                            const isSelected = formData.functions.includes(func);
                            return (
                              <button
                                type="button"
                                key={func}
                                onClick={() => handleFunctionToggle(func)}
                                className={`px-2.5 py-1.5 rounded-lg border text-left text-xs transition-all flex items-center justify-between ${
                                  isSelected
                                    ? 'bg-amber-500/20 border-amber-400/60 text-amber-300 font-semibold shadow-sm'
                                    : 'bg-stone-950/50 border-stone-800 text-stone-400 hover:text-stone-300'
                                }`}
                              >
                                <span>{func}</span>
                                {isSelected && <Check className="w-3 h-3 text-amber-400" />}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <label className="block text-[9px] uppercase tracking-[0.18em] text-amber-400/80 font-bold mb-1">
                          Your Heartfelt Dua & Blessing
                        </label>
                        <textarea
                          rows={2}
                          value={formData.duaMessage}
                          onChange={(e) => setFormData({ ...formData, duaMessage: e.target.value })}
                          placeholder="Write a sincere prayer or warm wish for the couple..."
                          className="w-full px-3 py-2 rounded-xl bg-stone-950/80 border border-stone-700/80 text-stone-100 text-xs focus:outline-none focus:border-amber-400 resize-none transition-colors"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-stone-950 font-heading font-bold text-xs tracking-wider uppercase shadow-[0_4px_20px_rgba(212,175,55,0.35)] hover:shadow-[0_4px_25px_rgba(212,175,55,0.5)] active:scale-95 transition-all"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Confirm RSVP & Send Dua</span>
                      </button>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* Right Card: Dua Wall & Warm Blessings */}
            {(!isMobile || activeTab === 'duas') && (
              <div className="p-4 sm:p-6 rounded-2xl bg-stone-900/60 border border-amber-400/20 shadow-lg backdrop-blur-sm flex flex-col">
                <div className="flex items-center justify-between pb-2.5 border-b border-stone-800/80 mb-3">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <h3 className="font-heading text-xs sm:text-sm font-bold text-stone-100 uppercase tracking-wider">
                      Duas & Guestbook Wall
                    </h3>
                  </div>
                  <span className="text-[10px] text-amber-300/70 font-serif">
                    {duasWall.length} Duas
                  </span>
                </div>

                {/* Messages List */}
                <div className="space-y-2.5 max-h-[260px] sm:max-h-[300px] overflow-y-auto no-scrollbar pr-1">
                  {duasWall.map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 rounded-xl bg-stone-950/60 border border-stone-800/80 text-left shadow-sm"
                    >
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-heading font-semibold text-amber-300 text-[11px] sm:text-xs">
                          {item.name}
                        </span>
                        <span className="text-[9px] text-stone-500 font-serif">
                          {item.date}
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-stone-300/85 font-serif leading-relaxed italic">
                        “{item.message}”
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Quick Petal Shower Trigger */}
                <button
                  onClick={triggerRosePetalShower}
                  className="mt-auto pt-3 flex items-center justify-center gap-1.5 text-xs text-amber-300 hover:text-amber-200 transition-colors font-serif"
                >
                  <span>🌹 Shower Celebratory Rose Petals</span>
                </button>
              </div>
            )}

          </div>

          <FloralDivider width={260} className="mx-auto my-3" />

          {/* Family Compliments & Cultural Courtesy Note */}
          <div className="text-center my-3 sm:my-4 space-y-1.5">
            <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-amber-400 font-bold">
              With Compliments & Sincere Regards
            </p>
            <p className="text-xs sm:text-sm text-stone-200 font-serif font-medium">
              {data.familyCompliments.withCompliments}
            </p>
            <p className="text-[10px] sm:text-[11px] text-stone-400 font-serif italic">
              Seeking blessings of: {data.familyCompliments.blessingsFrom}
            </p>
            <div className="pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900/80 border border-stone-800 text-[10px] sm:text-[11px] text-amber-200/80 font-serif">
                <Gift className="w-3 h-3 text-amber-400" />
                <span>{data.familyCompliments.specialNote}</span>
              </span>
            </div>
          </div>

          {/* Page Footer Navigation */}
          <div className="flex items-center justify-between pt-4 border-t border-stone-700/30 text-xs mt-3">
            <button
              onClick={onPrev}
              className="flex items-center gap-1 text-stone-400 hover:text-amber-200 transition-colors font-serif py-2 px-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Venue Guide</span>
            </button>
            <button
              onClick={onResetToStart}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-stone-800/80 hover:bg-stone-700 text-amber-300 border border-amber-400/30 transition-colors font-serif"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Back to Cover</span>
            </button>
          </div>

        </div>
      </motion.div>
    </div>
  );
};
