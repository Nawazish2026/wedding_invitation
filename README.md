# Royal Muslim Indian Wedding Invitation Web App 🕌✨

A luxury, interactive multipage digital wedding invitation web application crafted with React.js, Tailwind CSS, Framer Motion, and Web Audio API. Inspired by modern digital wedding card collections (Utsavy Floral Knot & Pinterest aesthetics).

---

## 🌸 Key Features

- **Pinterest-Inspired Floral Wallpaper Aesthetic**:
  - Seamless botanical tapestry background with blooming garden roses, jasmine buds, eucalyptus leaves, and gold vine tendrils.
  - 4 luxury color palettes:
    1. *Dusty Rose & Sage Garden* (Default)
    2. *Mughal Emerald & Peach Blossom*
    3. *Sunset Terracotta & Rose Gold*
    4. *Pearl Ivory & Sage Botanical*
- **Multipage Storybook Card Flow**:
  - **Page 1: Royal Wax Seal & Envelope**: Interactive wax seal stamp with "Tap to Unseal" animation.
  - **Page 2: Bismillah & Sacred Union**: Arabic calligraphy, Quranic verse (*Surah Ar-Rum 30:21*), formal parental invitation, and a live ticking countdown clock to the Nikah.
  - **Page 3: The Royal Couple**: Illustrated profiles of Bride & Groom with lineage, designations, quotes, and a mobile-friendly segmented toggle (`[ Groom ]`, `[ Bride ]`, `[ Both ]`).
  - **Page 4: Ceremonial Itinerary**: Manjha/Haldi, Mehndi Ki Raat, Sacred Nikah, and Dawat-e-Walima with dress code palettes, highlights, Google Maps buttons, and `.ICS` calendar downloads.
  - **Page 5: Venue & Directions**: Main venue card with one-click copy address, Google Maps link, valet & transit guide, and family coordinator speed dial.
  - **Page 6: RSVP & Guest Duas**: Interactive RSVP form, live guestbook wall with prayers, and WhatsApp confirmation export.
- **Mobile-First & Touch-Friendly**:
  - Native touch-swipe card flipping (`onTouchStart` / `onTouchEnd`).
  - High-end iPhone mockup preview mode toggle.
  - Full-width legible layouts that never squish on narrow screens.
- **Live "✨ Customize" Studio (Drawer)**:
  - Edit names, qualifications, parents, and grandparents.
  - Customize event titles, dates, timings, venues, and dress codes.
  - Switch color themes and pick Quranic verses.
  - Export instant WhatsApp invitation text.
- **Royal Soundscape**:
  - Built-in Web Audio API synthesizer producing an ambient acoustic Santoor & Tanpura chord progression in Raag Yaman with zero external audio dependencies.
  - Celebratory rose and marigold petal showers via Canvas Confetti.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or newer)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/Nawazish2026/wedding_invitation.git
cd wedding_invitation

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production
```bash
npm run build
```

---

## ☁️ Deployment on Vercel

This repository includes a preconfigured `vercel.json` for seamless zero-config deployment.

1. Import the repository in [Vercel](https://vercel.com/new).
2. Framework Preset will be automatically detected as **Vite**.
3. Click **Deploy**.
