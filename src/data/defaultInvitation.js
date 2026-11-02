export const THEMES = {
  dusty_rose: {
    id: 'dusty_rose',
    name: 'Dusty Rose & Sage Garden',
    badge: 'Pinterest Botanical Romance',
    bgPrimary: 'bg-[#180812]',
    bgSecondary: 'bg-[#220c1a]',
    bgCard: 'bg-[#260f1e]/85',
    accent: '#E28498',
    accentHover: '#F2A2B4',
    textGold: 'text-[#FAD2DC]',
    borderGold: 'border-[#E28498]/40',
    headerGradient: 'from-[#FAD2DC] via-[#FFEBF0] to-[#E28498]',
    cardBorder: 'rgba(226, 132, 152, 0.35)',
    glow: 'rgba(226, 132, 152, 0.28)',
    floralHue: 'dusty_rose',
  },
  mughal_gulzar: {
    id: 'mughal_gulzar',
    name: 'Mughal Emerald & Peach Blossom',
    badge: 'Heritage Royal Palace',
    bgPrimary: 'bg-[#051f18]',
    bgSecondary: 'bg-[#0a2e24]',
    bgCard: 'bg-[#0e3b2e]/85',
    accent: '#D4AF37',
    accentHover: '#E5C158',
    textGold: 'text-[#FCE38A]',
    borderGold: 'border-[#D4AF37]/40',
    headerGradient: 'from-[#F4A290] via-[#FFF3B0] to-[#D4AF37]',
    cardBorder: 'rgba(212, 175, 55, 0.35)',
    glow: 'rgba(212, 175, 55, 0.25)',
    floralHue: 'mughal_gulzar',
  },
  terracotta: {
    id: 'terracotta',
    name: 'Sunset Terracotta & Rose Gold',
    badge: 'Andalusian Warm Boho',
    bgPrimary: 'bg-[#1e0c08]',
    bgSecondary: 'bg-[#2a130c]',
    bgCard: 'bg-[#351610]/85',
    accent: '#E07A5F',
    accentHover: '#F4A261',
    textGold: 'text-[#FFD3B6]',
    borderGold: 'border-[#E07A5F]/40',
    headerGradient: 'from-[#FFD3B6] via-[#FFE3D1] to-[#E07A5F]',
    cardBorder: 'rgba(224, 122, 95, 0.35)',
    glow: 'rgba(224, 122, 95, 0.25)',
    floralHue: 'terracotta',
  },
  ivory_sage: {
    id: 'ivory_sage',
    name: 'Pearl Ivory & Sage Botanical',
    badge: 'Minimalist Modern Nikah',
    bgPrimary: 'bg-[#121815]',
    bgSecondary: 'bg-[#1c2420]',
    bgCard: 'bg-[#222c27]/85',
    accent: '#7CA982',
    accentHover: '#98C29D',
    textGold: 'text-[#E8F0EA]',
    borderGold: 'border-[#7CA982]/40',
    headerGradient: 'from-[#E8F0EA] via-[#FFFFFF] to-[#7CA982]',
    cardBorder: 'rgba(124, 169, 130, 0.35)',
    glow: 'rgba(124, 169, 130, 0.25)',
    floralHue: 'ivory_sage',
  }
};

export const QURANIC_VERSES = [
  {
    id: 'love_mercy',
    arabic: 'وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً',
    surah: 'Surah Ar-Rum [30:21]',
    translation: '“And among His signs is that He created for you mates from among yourselves, that you may dwell in tranquility with them; and He has put love and mercy between your hearts.”',
    meaning: 'Celebrating peace, mutual mercy, and divine tranquility in the bond of marriage.'
  },
  {
    id: 'pairs',
    arabic: 'وَخَلَقْنَاكُمْ أَزْوَاجًا',
    surah: 'Surah An-Naba [78:8]',
    translation: '“And We created you in pairs.”',
    meaning: 'A divine affirmation that companionship and sacred union are blessed directly by Allah SWT.'
  },
  {
    id: 'garments',
    arabic: 'هُنَّ لِبَاسٌ لَّكُمْ وَأَنتُمْ لِبَاسٌ لَّهُنَّ',
    surah: 'Surah Al-Baqarah [2:187]',
    translation: '“They are clothing for you and you are clothing for them.”',
    meaning: 'Signifying ultimate comfort, modesty, protection, and mutual honor in matrimony.'
  }
];

export const INITIAL_INVITATION_DATA = {
  theme: 'dusty_rose',
  monogram: 'Z & F',
  weddingHashtag: '#ZeeshanWedsFatima',
  selectedVerseId: 'love_mercy',
  
  hostIntro: {
    bismillahText: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
    bismillahEnglish: 'In the name of Allah, the Most Gracious, the Most Merciful',
    invitationGreeting: 'With the heavenly blessings of the Almighty Allah and in the gracious presence of our elders, we cordially invite you and your family to celebrate the blessed union of our beloved children.',
    groomParents: 'Janab Mirza Farooq Baig & Mohtarma Nuzhat Baig',
    brideParents: 'Janab Syed Mansoor Ahmed & Mohtarma Shabana Ahmed',
  },

  groom: {
    fullName: 'Mirza Zeeshan Baig',
    title: 'B.Tech, MS (Software Architect)',
    parentage: 'Beloved Son of Janab Mirza Farooq Baig & Mohtarma Nuzhat Baig',
    grandParentage: 'Paternal Grandson of Late Nawab Mirza Qasim Baig',
    city: 'Hyderabad, India',
    bio: 'A passionate visionary and grounded soul who treasures family warmth, faith, and poetry.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80',
  },

  bride: {
    fullName: 'Syeda Fatima Al-Zehra',
    title: 'M.Arch (Urban Heritage Designer)',
    parentage: 'Beloved Daughter of Janab Syed Mansoor Ahmed & Mohtarma Shabana Ahmed',
    grandParentage: 'Maternal Granddaughter of Late Janab Syed Mukhtar Hussain',
    city: 'Hyderabad, India',
    bio: 'An artistic spirit, devoted to timeless architecture, calligraphy, and compassionate values.',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80',
  },

  nikahDate: '2026-12-14T17:00:00', // Countdown target

  events: [
    {
      id: 'manjha',
      name: 'Manjha & Haldi Ceremony',
      subheading: 'Rasme-e-Haldi • The Golden Glow',
      date: 'Thursday, 12th December 2026',
      time: '11:00 AM onwards',
      venue: 'The Courtyard, Jasmine Palace, Road No. 10, Banjara Hills, Hyderabad',
      dressCode: 'Sunny Mustard, Bright Yellow & Gota Patti Florals',
      palette: ['#FFD700', '#FFA500', '#FFF8DC'],
      description: 'An auspicious morning of fragrant turmeric paste, cheerful dholak beats, traditional sitiyara songs, and heartfelt blessings.',
      highlights: ['Traditional Haldi Ubtan', 'Dholak & Tappe Rhythms', 'Deccani High Tea & Snacks'],
      mapUrl: 'https://maps.google.com/?q=Banjara+Hills+Hyderabad',
    },
    {
      id: 'mehndi',
      name: 'Mehndi Ki Raat & Sangeet',
      subheading: 'Hues of Henna • Jashn-e-Bahaar',
      date: 'Friday, 13th December 2026',
      time: '07:30 PM onwards',
      venue: 'Mughal Lawns, Taj Enclave Pavilion, Road No. 1, Banjara Hills, Hyderabad',
      dressCode: 'Emerald Henna Green, Pistachio & Shimmering Mirror Work',
      palette: ['#0f5132', '#20c997', '#D4AF37'],
      description: 'A magical moonlit evening adorned with intricate bridal henna patterns, enchanting Sufi melodies, and joyful family performances.',
      highlights: ['Artisan Bridal Henna Artists', 'Live Sufi Ghazal Ensemble', 'Lavish Royal Chaat & Kebab Counters'],
      mapUrl: 'https://maps.google.com/?q=Taj+Krishna+Banjara+Hills+Hyderabad',
    },
    {
      id: 'nikah',
      name: 'The Sacred Nikah Ceremony',
      subheading: 'Ijab-o-Qubool • The Sunnah Union',
      date: 'Saturday, 14th December 2026',
      time: '05:00 PM (Asr Prayer onwards, Nikah Khutbah at 05:45 PM)',
      venue: 'The Royal Shahi Dewan, Grand Imperial Palace, Financial District, Hyderabad',
      dressCode: 'Regal Ivory, Champagne Gold, Sherwanis & Royal Pastels',
      palette: ['#F3E5AB', '#D4AF37', '#0A3528'],
      description: 'The sacred solemnization of marriage as ordained by Allah SWT and the Sunnah of Prophet Muhammad (PBUH), followed by Dawat-e-Khaas.',
      highlights: ['Nikah Khutbah & Auspicious Dua', 'Badam Nuqti & Shahi Sharbat', 'Authentic Hyderabadi Dum Biryani Feast'],
      mapUrl: 'https://maps.google.com/?q=Gachibowli+Hyderabad',
    },
    {
      id: 'walima',
      name: 'Dawat-e-Walima (Grand Reception)',
      subheading: 'The Royal Banquet • Celebratory Welcome',
      date: 'Sunday, 15th December 2026',
      time: '08:00 PM onwards',
      venue: 'The Crystal Oasis Convention Centre, Main Boulevard, Jubilee Hills, Hyderabad',
      dressCode: 'Royal Velvet Burgundy, Tuxedos & Heavy Embroidered Zardozi',
      palette: ['#441127', '#E8A598', '#F3E5AB'],
      description: 'A grand celebration hosted by the groom’s family to formally welcome the radiant bride into our hearts and family tree.',
      highlights: ['Red Carpet Couple Entry', 'Grand Royal Hyderabadi Dastarkhwan', 'Photo Memoirs & Blessing Stage'],
      mapUrl: 'https://maps.google.com/?q=Jubilee+Hills+Hyderabad',
    }
  ],

  venueGuide: {
    primaryVenue: 'Grand Imperial Palace, Hyderabad',
    fullAddress: 'Plot 42, Financial District Expressway, Near ORR Junction, Gachibowli, Hyderabad - 500032',
    valetParking: 'Complimentary Valet Parking available at Gate 1 & 2',
    seatingAdvisory: 'Separate designated comfortable seating available for Gents & Ladies as per preference',
    nearbyAirport: 'Rajiv Gandhi International Airport (RGIA) - 25 mins drive',
    nearbyStation: 'Secunderabad / Nampally Railway Station - 35 mins drive',
    contactPersons: [
      { name: 'Mirza Farooq Baig (Groom Father)', phone: '+91 98765 43210' },
      { name: 'Syed Mansoor Ahmed (Bride Father)', phone: '+91 91234 56789' },
      { name: 'Mirza Tariq Baig (Event Coordinator)', phone: '+91 98490 11223' }
    ]
  },

  familyCompliments: {
    withCompliments: 'All Elders, Brothers, Sisters & Well-Wishers of Baig and Syed Families',
    blessingsFrom: 'Late Nawab Mirza Qasim Baig & Late Begum Mumtaz Unnisa | Late Syed Mukhtar Hussain & Begum Bilqees Fatima',
    specialNote: 'No gifts please, only your heartfelt presence and precious duas for the newlyweds are requested.'
  }
};
