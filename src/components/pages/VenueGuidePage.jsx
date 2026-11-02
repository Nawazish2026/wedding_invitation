import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Phone, Car, Plane, Train, Copy, Check, ArrowRight, ArrowLeft, ExternalLink } from 'lucide-react';
import { FloralCorner, FloralDivider } from '../FloralOrnaments';

export const VenueGuidePage = ({ data, theme, onNext, onPrev, isMobile }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(data.venueGuide.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const mapQueryUrl = `https://maps.google.com/?q=${encodeURIComponent(data.venueGuide.primaryVenue + ' ' + data.venueGuide.fullAddress)}`;

  return (
    <div className="relative min-h-[100dvh] flex items-center justify-center px-3 py-6 sm:px-6 overflow-hidden">
      {/* Background with subtle glow & stars */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-moroccan-stars opacity-30" />
        <div 
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[350px] rounded-full blur-[130px]" 
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
          
          {/* Floral Corner Ornaments */}
          <FloralCorner position="top-left" size={90} className="opacity-70 sm:size-[130px]" />
          <FloralCorner position="top-right" size={90} className="opacity-70 sm:size-[130px]" />
          <FloralCorner position="bottom-left" size={90} className="opacity-70 sm:size-[130px]" />
          <FloralCorner position="bottom-right" size={90} className="opacity-70 sm:size-[130px]" />

          {/* Shimmer line */}
          <div className="absolute inset-0 animate-shimmer rounded-[24px] sm:rounded-[32px] pointer-events-none" />

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center mb-5 sm:mb-7"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/25 text-amber-300 text-[10px] sm:text-xs tracking-[0.2em] uppercase font-serif mb-2">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Guest Information & Location</span>
            </div>
            <h2 className="font-heading text-xl sm:text-3xl md:text-4xl font-bold text-stone-50 tracking-wide">
              Venue & Directions
            </h2>
            <p className="font-script text-xl sm:text-2xl text-amber-300/80 mt-1">
              Navigating to our celebrations
            </p>
          </motion.div>

          <FloralDivider width={260} className="mx-auto my-3 sm:my-4" />

          {/* Main Destination Hero Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="p-5 sm:p-7 rounded-2xl bg-gradient-to-br from-stone-900/90 via-stone-900/60 to-stone-950/80 border border-amber-400/30 shadow-[0_10px_30px_rgba(0,0,0,0.4)] relative overflow-hidden backdrop-blur-md mb-5"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1.5">
                <span className="inline-block text-[9px] uppercase tracking-[0.2em] text-amber-400 font-bold bg-amber-500/15 px-2.5 py-0.5 rounded-full border border-amber-400/30">
                  Primary Destination
                </span>
                <h3 className="font-heading text-lg sm:text-2xl font-bold text-stone-50 mt-1">
                  {data.venueGuide.primaryVenue}
                </h3>
                <p className="text-xs sm:text-sm text-stone-300/90 font-serif leading-relaxed max-w-lg">
                  {data.venueGuide.fullAddress}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 pt-2 md:pt-0 shrink-0">
                <button
                  onClick={handleCopyAddress}
                  className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-stone-800/90 hover:bg-stone-700 text-stone-200 text-xs font-serif transition-all border border-stone-700 active:scale-95"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Address Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-amber-400" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <a
                  href={mapQueryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-stone-950 font-heading font-bold text-xs tracking-wider uppercase shadow-[0_4px_18px_rgba(212,175,55,0.35)] hover:shadow-[0_4px_25px_rgba(212,175,55,0.5)] active:scale-95 transition-all"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Navigate</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Guest Advisory & Transit Cards:
              If isMobile: stacked as full-width comfortable cards
              If desktop: 3-column grid */}
          <div className={`grid ${isMobile ? 'grid-cols-1 gap-3' : 'grid-cols-1 md:grid-cols-3 gap-4'} my-4`}>
            
            {/* Valet */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="p-3.5 sm:p-4 rounded-xl bg-stone-900/60 border border-stone-800/80 shadow-md flex items-start gap-3"
            >
              <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-400/25 shrink-0 mt-0.5">
                <Car className="w-4 h-4 text-amber-400" />
              </div>
              <div>
                <span className="text-xs font-heading font-semibold text-amber-300 block mb-0.5">
                  Valet & Parking
                </span>
                <p className="text-xs text-stone-300/85 leading-relaxed font-serif">
                  {data.venueGuide.valetParking}
                </p>
              </div>
            </motion.div>

            {/* Airport */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48, duration: 0.4 }}
              className="p-3.5 sm:p-4 rounded-xl bg-stone-900/60 border border-stone-800/80 shadow-md flex items-start gap-3"
            >
              <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-400/25 shrink-0 mt-0.5">
                <Plane className="w-4 h-4 text-amber-400" />
              </div>
              <div>
                <span className="text-xs font-heading font-semibold text-amber-300 block mb-0.5">
                  Airport Transit
                </span>
                <p className="text-xs text-stone-300/85 leading-relaxed font-serif">
                  {data.venueGuide.nearbyAirport}
                </p>
              </div>
            </motion.div>

            {/* Railway */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.56, duration: 0.4 }}
              className="p-3.5 sm:p-4 rounded-xl bg-stone-900/60 border border-stone-800/80 shadow-md flex items-start gap-3"
            >
              <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-400/25 shrink-0 mt-0.5">
                <Train className="w-4 h-4 text-amber-400" />
              </div>
              <div>
                <span className="text-xs font-heading font-semibold text-amber-300 block mb-0.5">
                  Railway Stations
                </span>
                <p className="text-xs text-stone-300/85 leading-relaxed font-serif">
                  {data.venueGuide.nearbyStation}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Cultural & Seating Comfort Note */}
          <div className="p-3.5 rounded-xl bg-gradient-to-r from-amber-500/10 via-amber-400/15 to-amber-500/10 border border-amber-400/30 my-4 text-center shadow-inner">
            <span className="text-xs font-serif text-amber-200 font-medium">
              ✨ {data.venueGuide.seatingAdvisory}
            </span>
          </div>

          {/* Family Event Coordinators Helpdesk */}
          <div className="my-4">
            <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-amber-400/80 font-bold mb-2.5 text-center sm:text-left">
              ✦ &nbsp; Family Coordinators & Helpdesk &nbsp; ✦
            </p>

            <div className={`grid ${isMobile ? 'grid-cols-1 gap-2' : 'grid-cols-1 md:grid-cols-3 gap-3'}`}>
              {data.venueGuide.contactPersons.map((contact, idx) => (
                <div 
                  key={idx}
                  className="p-3 rounded-xl bg-stone-900/70 border border-stone-800/90 flex items-center justify-between shadow-sm hover:border-amber-400/30 transition-colors"
                >
                  <div className="min-w-0 pr-2">
                    <p className="text-xs font-bold text-stone-100 font-serif truncate">
                      {contact.name}
                    </p>
                    <p className="text-[11px] text-amber-300/90 mt-0.5 font-mono">
                      {contact.phone}
                    </p>
                  </div>
                  <a
                    href={`tel:${contact.phone.replace(/[^0-9+]/g, '')}`}
                    className="p-2 rounded-full bg-amber-500/15 hover:bg-amber-500/30 text-amber-300 border border-amber-400/30 transition-colors shrink-0 active:scale-95"
                    title={`Call ${contact.name}`}
                  >
                    <Phone className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          <FloralDivider width={240} className="mx-auto my-3 sm:my-4" />

          {/* Page Navigation */}
          <div className="flex items-center justify-between pt-4 border-t border-stone-700/30 text-xs mt-3">
            <button
              onClick={onPrev}
              className="flex items-center gap-1 text-stone-400 hover:text-amber-200 transition-colors font-serif py-2 px-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Ceremonies</span>
            </button>
            <button
              onClick={onNext}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 font-heading font-bold text-[11px] sm:text-xs tracking-wider uppercase shadow-[0_4px_20px_rgba(212,175,55,0.3)] active:scale-95 transition-all"
            >
              <span>RSVP & Blessings</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </motion.div>
    </div>
  );
};
