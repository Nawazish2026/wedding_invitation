import React, { useState } from 'react';
import { X, SlidersHorizontal, User, Calendar, MapPin, Palette, Sparkles, Copy, Check, Printer, RefreshCw } from 'lucide-react';
import { THEMES, QURANIC_VERSES, INITIAL_INVITATION_DATA } from '../data/defaultInvitation';

export const CustomizerDrawer = ({
  isOpen,
  onClose,
  data,
  setData,
  currentTheme,
  onSelectTheme
}) => {
  const [activeTab, setActiveTab] = useState('couple');
  const [copiedText, setCopiedText] = useState(false);

  if (!isOpen) return null;

  // Helpers to update nested state
  const updateGroom = (field, val) => {
    setData(prev => ({
      ...prev,
      groom: { ...prev.groom, [field]: val }
    }));
  };

  const updateBride = (field, val) => {
    setData(prev => ({
      ...prev,
      bride: { ...prev.bride, [field]: val }
    }));
  };

  const updateEvent = (index, field, val) => {
    setData(prev => {
      const updatedEvents = [...prev.events];
      updatedEvents[index] = { ...updatedEvents[index], [field]: val };
      return { ...prev, events: updatedEvents };
    });
  };

  const updateVenueGuide = (field, val) => {
    setData(prev => ({
      ...prev,
      venueGuide: { ...prev.venueGuide, [field]: val }
    }));
  };

  const updateParentIntro = (field, val) => {
    setData(prev => ({
      ...prev,
      hostIntro: { ...prev.hostIntro, [field]: val }
    }));
  };

  const handleReset = () => {
    if (window.confirm('Reset all invitation text & details to original template?')) {
      setData(INITIAL_INVITATION_DATA);
    }
  };

  const handleCopyWhatsAppInvite = () => {
    const groomName = data.groom.fullName;
    const brideName = data.bride.fullName;
    const nikahEvent = data.events.find(e => e.id === 'nikah') || data.events[0];
    const walimaEvent = data.events.find(e => e.id === 'walima') || data.events[1];

    const message = `✨ *Bismillahir Rahmanir Raheem* ✨

Under the heavenly grace of Allah SWT, you and your family are cordially invited to celebrate the auspicious Nikah & Walima of:

🤵 *${groomName}*
(S/o ${data.hostIntro.groomParents})
&
👰 *${brideName}*
(D/o ${data.hostIntro.brideParents})

🗓 *Nikah Ceremony:*
Date: ${nikahEvent.date}
Time: ${nikahEvent.time}
Venue: ${nikahEvent.venue}

🍽 *Dawat-e-Walima:*
Date: ${walimaEvent.date}
Time: ${walimaEvent.time}
Venue: ${walimaEvent.venue}

📍 *Location & Map:*
${data.venueGuide.fullAddress}

📞 *RSVP Contacts:*
${data.venueGuide.contactPersons[0].name} (${data.venueGuide.contactPersons[0].phone})

With best compliments from the *Baig & Syed* Families.
Please remember the couple in your sincere duas!`;

    navigator.clipboard.writeText(message);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-stone-950/70 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer Container */}
      <div className="relative w-full max-w-lg bg-stone-900 border-l border-[#D4AF37]/30 shadow-2xl h-full flex flex-col z-10 text-stone-100 overflow-hidden animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="p-4 border-b border-stone-800 flex items-center justify-between bg-stone-950/80">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30">
              <SlidersHorizontal className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-heading text-sm font-bold text-stone-100">
                Invitation Customizer
              </h3>
              <p className="text-[11px] text-stone-400">
                Live edit names, dates, ceremonies & addresses
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-stone-800 text-stone-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-stone-800 bg-stone-950/50 overflow-x-auto no-scrollbar text-xs">
          {[
            { id: 'couple', label: 'Bride & Groom', icon: User },
            { id: 'events', label: 'Ceremonies', icon: Calendar },
            { id: 'venue', label: 'Venue & RSVP', icon: MapPin },
            { id: 'theme', label: 'Theme & Verse', icon: Palette },
          ].map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-4 py-2.5 whitespace-nowrap font-serif transition-colors border-b-2 ${
                  activeTab === tab.id
                    ? 'border-amber-400 text-amber-300 font-semibold bg-stone-900'
                    : 'border-transparent text-stone-400 hover:text-stone-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Form Body Scroll Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6 text-xs font-serif">
          
          {/* TAB 1: BRIDE & GROOM */}
          {activeTab === 'couple' && (
            <div className="space-y-5">
              
              {/* Couple Initials & Hashtag */}
              <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-stone-950/60 border border-stone-800">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-amber-400 font-bold mb-1">
                    Monogram Initials
                  </label>
                  <input
                    type="text"
                    value={data.monogram}
                    onChange={(e) => setData({ ...data, monogram: e.target.value })}
                    className="w-full px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-700 text-stone-100"
                    placeholder="e.g. Z & F"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-amber-400 font-bold mb-1">
                    Wedding Hashtag
                  </label>
                  <input
                    type="text"
                    value={data.weddingHashtag}
                    onChange={(e) => setData({ ...data, weddingHashtag: e.target.value })}
                    className="w-full px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-700 text-stone-100"
                    placeholder="e.g. #ZeeshanWedsFatima"
                  />
                </div>
              </div>

              {/* Groom Details */}
              <div className="p-4 rounded-xl bg-stone-950/60 border border-stone-800 space-y-3">
                <span className="font-heading text-xs font-bold text-amber-300 uppercase tracking-wider block">
                  The Groom
                </span>
                <div>
                  <label className="text-[10px] text-stone-400">Full Name</label>
                  <input
                    type="text"
                    value={data.groom.fullName}
                    onChange={(e) => updateGroom('fullName', e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-700 text-stone-100 mt-0.5"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-stone-400">Credentials / Designation</label>
                  <input
                    type="text"
                    value={data.groom.title}
                    onChange={(e) => updateGroom('title', e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-700 text-stone-100 mt-0.5"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-stone-400">Son of (Parents)</label>
                  <input
                    type="text"
                    value={data.groom.parentage}
                    onChange={(e) => updateGroom('parentage', e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-700 text-stone-100 mt-0.5"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-stone-400">Grandparents / Lineage</label>
                  <input
                    type="text"
                    value={data.groom.grandParentage}
                    onChange={(e) => updateGroom('grandParentage', e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-700 text-stone-100 mt-0.5"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-stone-400">Photo URL</label>
                  <input
                    type="text"
                    value={data.groom.photo}
                    onChange={(e) => updateGroom('photo', e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-700 text-stone-100 mt-0.5"
                  />
                </div>
              </div>

              {/* Bride Details */}
              <div className="p-4 rounded-xl bg-stone-950/60 border border-stone-800 space-y-3">
                <span className="font-heading text-xs font-bold text-amber-300 uppercase tracking-wider block">
                  The Bride
                </span>
                <div>
                  <label className="text-[10px] text-stone-400">Full Name</label>
                  <input
                    type="text"
                    value={data.bride.fullName}
                    onChange={(e) => updateBride('fullName', e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-700 text-stone-100 mt-0.5"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-stone-400">Credentials / Designation</label>
                  <input
                    type="text"
                    value={data.bride.title}
                    onChange={(e) => updateBride('title', e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-700 text-stone-100 mt-0.5"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-stone-400">Daughter of (Parents)</label>
                  <input
                    type="text"
                    value={data.bride.parentage}
                    onChange={(e) => updateBride('parentage', e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-700 text-stone-100 mt-0.5"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-stone-400">Grandparents / Lineage</label>
                  <input
                    type="text"
                    value={data.bride.grandParentage}
                    onChange={(e) => updateBride('grandParentage', e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-700 text-stone-100 mt-0.5"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-stone-400">Photo URL</label>
                  <input
                    type="text"
                    value={data.bride.photo}
                    onChange={(e) => updateBride('photo', e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-700 text-stone-100 mt-0.5"
                  />
                </div>
              </div>

              {/* Parents Invitation greeting */}
              <div className="p-4 rounded-xl bg-stone-950/60 border border-stone-800 space-y-3">
                <span className="font-heading text-xs font-bold text-amber-300 uppercase tracking-wider block">
                  Parent Names for Invitation Card
                </span>
                <div>
                  <label className="text-[10px] text-stone-400">Groom's Parents</label>
                  <input
                    type="text"
                    value={data.hostIntro.groomParents}
                    onChange={(e) => updateParentIntro('groomParents', e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-700 text-stone-100 mt-0.5"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-stone-400">Bride's Parents</label>
                  <input
                    type="text"
                    value={data.hostIntro.brideParents}
                    onChange={(e) => updateParentIntro('brideParents', e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-700 text-stone-100 mt-0.5"
                  />
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: CEREMONIES & TIMINGS */}
          {activeTab === 'events' && (
            <div className="space-y-5">
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-amber-400 font-bold mb-1">
                  Nikah Countdown Target Date
                </label>
                <input
                  type="datetime-local"
                  value={data.nikahDate ? data.nikahDate.substring(0, 16) : ''}
                  onChange={(e) => setData({ ...data, nikahDate: e.target.value })}
                  className="w-full px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-700 text-stone-100"
                />
              </div>

              {data.events.map((event, idx) => (
                <div key={event.id} className="p-4 rounded-xl bg-stone-950/60 border border-stone-800 space-y-3">
                  <div className="flex items-center justify-between border-b border-stone-800 pb-2">
                    <span className="font-heading text-xs font-bold text-amber-300 uppercase tracking-wider">
                      Function #{idx + 1}: {event.name.split(' ')[0]}
                    </span>
                  </div>

                  <div>
                    <label className="text-[10px] text-stone-400">Ceremony Title</label>
                    <input
                      type="text"
                      value={event.name}
                      onChange={(e) => updateEvent(idx, 'name', e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-700 text-stone-100 mt-0.5"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] text-stone-400">Date</label>
                      <input
                        type="text"
                        value={event.date}
                        onChange={(e) => updateEvent(idx, 'date', e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-700 text-stone-100 mt-0.5"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-stone-400">Time</label>
                      <input
                        type="text"
                        value={event.time}
                        onChange={(e) => updateEvent(idx, 'time', e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-700 text-stone-100 mt-0.5"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] text-stone-400">Venue</label>
                    <textarea
                      rows={2}
                      value={event.venue}
                      onChange={(e) => updateEvent(idx, 'venue', e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-700 text-stone-100 mt-0.5 resize-none"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] text-stone-400">Dress Code</label>
                    <input
                      type="text"
                      value={event.dressCode}
                      onChange={(e) => updateEvent(idx, 'dressCode', e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-700 text-stone-100 mt-0.5"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: VENUE & RSVP */}
          {activeTab === 'venue' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-stone-950/60 border border-stone-800 space-y-3">
                <span className="font-heading text-xs font-bold text-amber-300 uppercase tracking-wider block">
                  Main Destination Address
                </span>
                <div>
                  <label className="text-[10px] text-stone-400">Venue Name</label>
                  <input
                    type="text"
                    value={data.venueGuide.primaryVenue}
                    onChange={(e) => updateVenueGuide('primaryVenue', e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-700 text-stone-100 mt-0.5"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-stone-400">Full Address</label>
                  <textarea
                    rows={2}
                    value={data.venueGuide.fullAddress}
                    onChange={(e) => updateVenueGuide('fullAddress', e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-700 text-stone-100 mt-0.5 resize-none"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-stone-400">Valet & Parking Information</label>
                  <input
                    type="text"
                    value={data.venueGuide.valetParking}
                    onChange={(e) => updateVenueGuide('valetParking', e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-700 text-stone-100 mt-0.5"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-stone-400">Cultural & Seating Comfort Note</label>
                  <input
                    type="text"
                    value={data.venueGuide.seatingAdvisory}
                    onChange={(e) => updateVenueGuide('seatingAdvisory', e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-700 text-stone-100 mt-0.5"
                  />
                </div>
              </div>

              {/* Family Compliments */}
              <div className="p-4 rounded-xl bg-stone-950/60 border border-stone-800 space-y-3">
                <span className="font-heading text-xs font-bold text-amber-300 uppercase tracking-wider block">
                  Family Compliments & Elders
                </span>
                <div>
                  <label className="text-[10px] text-stone-400">With Compliments From</label>
                  <textarea
                    rows={2}
                    value={data.familyCompliments.withCompliments}
                    onChange={(e) => setData({
                      ...data,
                      familyCompliments: { ...data.familyCompliments, withCompliments: e.target.value }
                    })}
                    className="w-full px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-700 text-stone-100 mt-0.5 resize-none"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-stone-400">Blessings Of Late Elders</label>
                  <input
                    type="text"
                    value={data.familyCompliments.blessingsFrom}
                    onChange={(e) => setData({
                      ...data,
                      familyCompliments: { ...data.familyCompliments, blessingsFrom: e.target.value }
                    })}
                    className="w-full px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-700 text-stone-100 mt-0.5"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: THEMES & VERSES */}
          {activeTab === 'theme' && (
            <div className="space-y-4">
              {/* Theme presets */}
              <div className="p-4 rounded-xl bg-stone-950/60 border border-stone-800 space-y-3">
                <span className="font-heading text-xs font-bold text-amber-300 uppercase tracking-wider block">
                  Luxury Theme Palettes
                </span>
                <div className="grid grid-cols-1 gap-2.5">
                  {Object.values(THEMES).map(themeItem => (
                    <button
                      key={themeItem.id}
                      onClick={() => onSelectTheme(themeItem.id)}
                      className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                        currentTheme.id === themeItem.id
                          ? 'border-amber-400 bg-amber-500/15 shadow-md'
                          : 'border-stone-800 bg-stone-900/60 hover:bg-stone-800'
                      }`}
                    >
                      <div>
                        <p className="text-xs font-bold text-stone-100">
                          {themeItem.name}
                        </p>
                        <p className="text-[10px] text-stone-400">
                          {themeItem.badge}
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span 
                          className="w-5 h-5 rounded-full border border-white/20 shadow-sm"
                          style={{ backgroundColor: themeItem.accent }}
                        />
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quranic Verse Picker */}
              <div className="p-4 rounded-xl bg-stone-950/60 border border-stone-800 space-y-3">
                <span className="font-heading text-xs font-bold text-amber-300 uppercase tracking-wider block">
                  Select Quranic Verse for Invitation
                </span>
                <div className="space-y-2">
                  {QURANIC_VERSES.map(verse => (
                    <button
                      key={verse.id}
                      onClick={() => setData({ ...data, selectedVerseId: verse.id })}
                      className={`w-full p-3 rounded-xl border text-left transition-all ${
                        data.selectedVerseId === verse.id
                          ? 'border-amber-400 bg-amber-500/15'
                          : 'border-stone-800 bg-stone-900/60 hover:bg-stone-800'
                      }`}
                    >
                      <p className="text-xs font-bold text-amber-300 font-serif mb-1">
                        {verse.surah}
                      </p>
                      <p className="text-[11px] text-stone-300 italic mb-1">
                        {verse.translation}
                      </p>
                      <p className="text-[10px] text-stone-500">
                        {verse.meaning}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer Quick Actions */}
        <div className="p-4 border-t border-stone-800 bg-stone-950/90 space-y-2">
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyWhatsAppInvite}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs transition-colors shadow-sm"
            >
              {copiedText ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Copied WhatsApp Invite!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy WhatsApp Text</span>
                </>
              )}
            </button>

            <button
              onClick={() => window.print()}
              className="py-2 px-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 text-xs transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={handleReset}
              className="py-2 px-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-700 text-xs transition-colors"
              title="Reset to default template"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

