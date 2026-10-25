export type Locale = "id" | "en";

// Set to false to remove the English UI toggle and lock the entire site to Bahasa Indonesia.
export const ENABLE_LANGUAGE_TOGGLE = true;
export const DEFAULT_LOCALE: Locale = "id";

export interface Dictionary {
  nav: {
    home: string;
    cards: string;
    story: string;
    guide: string;
    demo: string;
    tbaBadge: string;
    langLabel: string;
  };
  landing: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    lead: string;
    ctaCards: string;
    ctaGuide: string;
    ctaDemo: string;
    annotationHero: string;
    stripLabel: string;
    aboutTag: string;
    aboutHeading: string;
    aboutSubheading: string;
    tabs: Array<{
      id: string;
      label: string;
      heading: string;
      body: string;
      bullets: string[];
      cardIds: string[];
    }>;
    purposeTag: string;
    purposeHeading: string;
    purposeSubheading: string;
    purposeCards: Array<{
      code: string;
      title: string;
      body: string;
    }>;
  };
  cardsPage: {
    badge: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    allFactions: string;
    allTypes: string;
    showingCount: string;
    clearFilters: string;
    emptyStateTitle: string;
    emptyStateDesc: string;
    hpLabel: string;
    skillLabel: string;
    dmgLabel: string;
    effectLabel: string;
    loreLabel: string;
    roleLabel: string;
    closeModal: string;
    clickToInspect: string;
  };
  storyPage: {
    badge: string;
    title: string;
    subtitle: string;
    perspectiveAll: string;
    visualPlaceholderTag: string;
    designerNote: string;
  };
  guidePage: {
    badge: string;
    title: string;
    subtitle: string;
    visualSlotHeader: string;
    visualSlotNote: string;
    winCondHeading: string;
    babiWinTitle: string;
    babiWinDesc: string;
    wargaWinTitle: string;
    wargaWinDesc: string;
  };
  demoPage: {
    badge: string;
    title: string;
    subtitle: string;
    constraints: Array<{ label: string; value: string }>;
    boardPreviewTitle: string;
    opponentZone: string;
    activeArenaLabel: string;
    benchZoneLabel: string;
    playerHand: string;
    defaultDeckTitle: string;
    defaultDeckNote: string;
  };
  footer: {
    projectNote: string;
    folkloreNote: string;
  };
}

export const DICTIONARY: Record<Locale, Dictionary> = {
  id: {
    nav: {
      home: "Beranda",
      cards: "Daftar Kartu",
      story: "Cerita",
      guide: "Panduan",
      demo: "Demo",
      tbaBadge: "TBA",
      langLabel: "Bahasa UI",
    },
    landing: {
      badge: "Tactical Folklore TCG • 12 Kartu Prototipe Resmi",
      titleLine1: "Babi Ngepet vs Warga",
      titleLine2: "Pertarungan malam di atas meja taktis",
      lead: "Satu pihak menjaga lilin Mbok Sumi di Bench agar Pak Karta dapat berubah wujud dan mencuri energi desa, sementara pihak lain menyalakan obor Warga hingga puncak Purnama Jumat Legi.",
      ctaCards: "Jelajahi Daftar Kartu",
      ctaGuide: "Pelajari Mekanika",
      ctaDemo: "Arena Demo (TBA)",
      annotationHero: "Klik kartu di daftar untuk zoom ukuran penuh!",
      stripLabel: "KOMPONEN INTI PERMAINAN KARTU",
      aboutTag: "TENTANG PERMAINAN",
      aboutHeading: "Mekanika Asimetris: Perubahan Wujud vs Evolusi",
      aboutSubheading:
        "Dua kubu dengan cara bermain, sumber energi, dan syarat kemenangan yang sepenuhnya berbeda.",
      tabs: [
        {
          id: "shifter",
          label: "Kubu Babi Ngepet (Dark)",
          heading: "Perubahan Wujud Pak Karta & Penjagaan Lilin Mbok Sumi",
          body: "Kubu Babi Ngepet mengandalkan sinergi antara Slot Aktif dan Bench. Selama Mbok Sumi (50 HP) tetap hidup di Bench menjaga nyala lilin, Pak Karta dapat berubah menjadi Babi Ngepet untuk mencuri energi lawan atau berubah menjadi Siluman Babi (200 HP, 100 DMG).",
          bullets: [
            "Mencuri Kekayaan (40 DMG): Mengambil 1 poin energi lawan setiap kali Babi Ngepet menyerang.",
            "Pasif Mbok Sumi: Kunci utama perubahan wujud Pak Karta dari Bench.",
            "Tumbal Anak: Melindungi Babi Ngepet dari seluruh damage skill selama kartu ini disimpan di tangan.",
          ],
          cardIds: ["pak-karta", "babi-ngepet", "mbok-sumi"],
        },
        {
          id: "warga",
          label: "Kubu Warga (Fire)",
          heading: "Evolusi Tiga Tahap & Serangan Balik Purnama",
          body: "Kubu Warga membangun kekuatan secara bertahap menggunakan Elemen Obor (Fire). Dimulai dari Warga Desa (150 HP), berevolusi menjadi Pasukan Obor (200 HP), hingga mencapai wujud puncak Amukan Warga (220 HP, 75 DMG).",
          bullets: [
            "Jalur Evolusi Konsisten: 150 HP ke 200 HP hingga 220 HP dengan peningkatan serangan bertahap.",
            "Kucing Liar (40 DMG): Menyerang Mbok Sumi langsung di Bench lawan untuk memutus lilin perubahan wujud.",
            "Punarma Jumat Legi (+50 DMG): Menggandakan daya hancur Warga saat Babi Ngepet berada di Slot Aktif.",
          ],
          cardIds: ["warga-desa", "pasukan-obor", "amukan-warga"],
        },
      ],
      purposeTag: "TUJUAN PROYEK",
      purposeHeading: "Untuk Apa Proyek Ini Dibuat?",
      purposeSubheading:
        "Mengangkat mitos urban Nusantara ke dalam format permainan kartu strategi modern.",
      purposeCards: [
        {
          code: "01",
          title: "Adaptasi Cerita Rakyat ke Mekanika Kartu",
          body: "Setiap aturan kartu menerjemahkan elemen cerita asli: lilin Mbok Sumi menjadi mekanika Bench Support, sedangkan malam Jumat Legi menjadi kartu kombo penentu.",
        },
        {
          code: "02",
          title: "Kedalaman Taktis 1-Lawan-1",
          body: "Menciptakan tarik-ulur antara mencuri poin energi lawan di Slot Aktif, menahan kartu pelindung di tangan, atau mengincar unit pendukung di Bench.",
        },
        {
          code: "03",
          title: "Pusat Arsip Kartu & Pratinjau Web",
          body: "Website ini dirancang sebagai katalog kartu interaktif, dokumentasi cerita dan panduan bermain, serta fondasi untuk mode demo 1-pertandingan.",
        },
      ],
    },
    cardsPage: {
      badge: "KATALOG KARTU • 12 ASET PROTOTIPE",
      title: "Daftar Kartu Permainan",
      subtitle:
        "Telusuri seluruh kartu karakter, evolusi, spell, dan elemen. Arahkan kursor untuk efek pop-up dan klik kartu untuk membuka pratinjau ukuran penuh.",
      searchPlaceholder: "Cari nama kartu (mis. Babi Ngepet, Mbok Sumi, Warga, Kucing)…",
      allFactions: "Semua Kubu",
      allTypes: "Semua Tipe",
      showingCount: "Menampilkan kartu",
      clearFilters: "Atur Ulang Filter",
      emptyStateTitle: "Tidak ada kartu yang cocok",
      emptyStateDesc: "Coba kata kunci nama kartu lain atau atur ulang filter kubu.",
      hpLabel: "Ketahanan (HP)",
      skillLabel: "Nama Skill",
      dmgLabel: "Damage",
      effectLabel: "Efek & Mekanika Kartu",
      loreLabel: "Kutipan Cerita Kartu",
      roleLabel: "Peran Taktis",
      closeModal: "Tutup (Esc)",
      clickToInspect: "Perbesar kartu",
    },
    storyPage: {
      badge: "ARSIP CERITA • KRONIK DESA",
      title: "Cerita di Balik Babi Ngepet vs Warga",
      subtitle:
        "Kisah keputusasaan Pak Karta, kesetiaan Mbok Sumi menjaga lilin, dan bangkitnya amarah Warga Desa pada malam Jumat Legi.",
      perspectiveAll: "Semua Bab",
      visualPlaceholderTag: "SLOT ILUSTRASI ADEGAN",
      designerNote: "Bingkai visual tambahan untuk ilustrasi bab oleh desainer game.",
    },
    guidePage: {
      badge: "BUKU PANDUAN • CARA BERMAIN",
      title: "Panduan Cara Bermain",
      subtitle:
        "Pelajari tata letak meja (Slot Aktif & Bench), syarat perubahan wujud Pak Karta, tahapan evolusi Warga, serta penggunaan kartu Spell.",
      visualSlotHeader: "Slot Diagram Desainer Game",
      visualSlotNote: "Diagram visual langkah permainan akan ditempatkan pada panel ini.",
      winCondHeading: "Ringkasan Syarat Kemenangan",
      babiWinTitle: "Kemenangan Kubu Babi Ngepet",
      babiWinDesc:
        "Jaga Mbok Sumi tetap hidup di Bench, gunakan Babi Ngepet untuk menguras energi lawan, dan habisi unit aktif Warga menggunakan Siluman Babi (100 DMG).",
      wargaWinTitle: "Kemenangan Kubu Warga",
      wargaWinDesc:
        "Gunakan Kucing Liar untuk mengeliminasi Mbok Sumi di Bench (50 HP) agar Pak Karta kehilangan wujud silumannya, atau tumbangkan Babi Ngepet di Slot Aktif dengan kombo Amukan Warga + Punarma Jumat Legi.",
    },
    demoPage: {
      badge: "TBA • EKSPANSI MENDATANG",
      title: "Demo Permainan Web (1 Pertandingan)",
      subtitle:
        "Ekspansi masa depan: simulasi pertandingan tunggal langsung di dalam website menggunakan dek bawaan tanpa pencatatan riwayat tanding.",
      constraints: [
        { label: "CAKUPAN MODE", value: "1 Pertandingan Selesai (Single Match)" },
        { label: "ATURAN DEK", value: "Dek Bawaan Tetap (Default Deck)" },
        { label: "PENYIMPANAN", value: "Tanpa Riwayat Pertandingan (Stateless)" },
      ],
      boardPreviewTitle: "Pratinjau Workspace Arena Pertandingan",
      opponentZone: "BENCH LAWAN • MBOK SUMI (50 HP) + TANGAN LAWAN",
      activeArenaLabel: "SLOT AKTIF PERTARUNGAN (1 VS 1)",
      benchZoneLabel: "ZONA BENCH & CADANGAN ENERGI",
      playerHand: "TANGAN PEMAIN • DEK BAWAAN (TUMBAL ANAK, KUCING LIAR, PUNARMA)",
      defaultDeckTitle: "Komposisi Kartu Dek Bawaan Demo",
      defaultDeckNote: "Mode demo akan langsung memuat 12 kartu prototipe di atas untuk 1 babak permainan instan.",
    },
    footer: {
      projectNote: "Babi Ngepet vs Warga — Proyek Permainan Kartu Taktis Nusantara",
      folkloreNote: "Desain antarmuka mengikuti spesifikasi Neon Obsidian & palet gradien ungu alami.",
    },
  },
  en: {
    nav: {
      home: "Home",
      cards: "Card List",
      story: "Story",
      guide: "Guide",
      demo: "Demo",
      tbaBadge: "TBA",
      langLabel: "UI Language",
    },
    landing: {
      badge: "Tactical Folklore TCG • 12 Official Prototype Cards",
      titleLine1: "Babi Ngepet vs Warga",
      titleLine2: "Midnight folklore on a tactical grid",
      lead: "One side protects Mbok Sumi's candle on the Bench so Pak Karta can shapeshift and drain village energy, while the other ignites Warga torches toward the Friday Legi full moon reckoning.",
      ctaCards: "Explore Card List",
      ctaGuide: "Read How to Play",
      ctaDemo: "Demo Arena (TBA)",
      annotationHero: "Click any card in the compendium to zoom!",
      stripLabel: "CORE TACTICAL GAMEPLAY PILLARS",
      aboutTag: "WHAT THE GAME IS ABOUT",
      aboutHeading: "Asymmetric Mechanics: Shapeshifting vs Evolution",
      aboutSubheading:
        "Two opposing factions with distinct energy engines, bench rules, and victory conditions.",
      tabs: [
        {
          id: "shifter",
          label: "Babi Ngepet Faction (Dark)",
          heading: "Pak Karta's Transformation & Mbok Sumi's Bench Vigil",
          body: "The Babi Ngepet faction revolves around Active Slot and Bench synergy. So long as Mbok Sumi (50 HP) survives on the Bench guarding the ritual candle, Pak Karta can transform into Babi Ngepet to steal opponent energy or unleash Siluman Babi (200 HP, 100 DMG).",
          bullets: [
            "Mencuri Kekayaan (40 DMG): Steals 1 Energy point from the opponent on every attack.",
            "Mbok Sumi Passive: Enables Pak Karta to shapeshift freely while she holds the Bench.",
            "Tumbal Anak: Negates all incoming skill damage to Babi Ngepet while held in your hand.",
          ],
          cardIds: ["pak-karta", "babi-ngepet", "mbok-sumi"],
        },
        {
          id: "warga",
          label: "Warga Faction (Fire)",
          heading: "Three-Stage Evolution & Full Moon Counterattack",
          body: "The Warga faction scales steadily using Fire Element energy. Starting from Warga Desa (150 HP), units evolve into Pasukan Obor (200 HP) and culminate in Amukan Warga (220 HP, 75 DMG).",
          bullets: [
            "Steady Evolution Line: 150 HP to 200 HP up to 220 HP with escalating attack damage.",
            "Kucing Liar (40 DMG): Snipes Mbok Sumi directly on the opponent's Bench to sever the candle link.",
            "Punarma Jumat Legi (+50 DMG): Massively amplifies the next Warga attack when Babi Ngepet is in the Active Slot.",
          ],
          cardIds: ["warga-desa", "pasukan-obor", "amukan-warga"],
        },
      ],
      purposeTag: "WHAT THE PROJECT IS FOR",
      purposeHeading: "Why This Game Project Was Created",
      purposeSubheading:
        "Translating iconic Indonesian urban folklore into a competitive tabletop and digital card game.",
      purposeCards: [
        {
          code: "01",
          title: "Folklore-Driven Card Mechanics",
          body: "Every card rule mirrors the legend: Mbok Sumi's candle becomes a Bench Support mechanic, while Friday Legi becomes a high-impact conditional burst card.",
        },
        {
          code: "02",
          title: "1v1 Asymmetric Tactical Depth",
          body: "Creates tight mind games between draining energy in the Active Slot, holding defensive cards in hand, and sniping key support units on the Bench.",
        },
        {
          code: "03",
          title: "Interactive Compendium & Demo Hub",
          body: "Built as the central card database, lore archive, rulebook, and foundation for the upcoming single-match web demo.",
        },
      ],
    },
    cardsPage: {
      badge: "CARD COMPENDIUM • 12 PROTOTYPE ASSETS",
      title: "Game Card List",
      subtitle:
        "Browse all character, evolution, spell, and element cards. Hover for a popping lift animation and click any card to inspect the high-resolution zoomed view.",
      searchPlaceholder: "Search by card name (e.g. Babi Ngepet, Mbok Sumi, Warga, Kucing)…",
      allFactions: "All Factions",
      allTypes: "All Types",
      showingCount: "Showing cards",
      clearFilters: "Reset Filters",
      emptyStateTitle: "No matching cards found",
      emptyStateDesc: "Try another card name query or reset the faction filter.",
      hpLabel: "Health (HP)",
      skillLabel: "Skill Name",
      dmgLabel: "Damage",
      effectLabel: "Card Rule & Effect",
      loreLabel: "Card Lore Text",
      roleLabel: "Tactical Role",
      closeModal: "Close (Esc)",
      clickToInspect: "Inspect card",
    },
    storyPage: {
      badge: "LORE ARCHIVE • DESA CHRONICLES",
      title: "The Story of Babi Ngepet vs Warga",
      subtitle:
        "The chronicle of Pak Karta's desperation, Mbok Sumi's candle vigil, and the villagers' uprising on Friday Legi night.",
      perspectiveAll: "All Acts",
      visualPlaceholderTag: "SCENE ILLUSTRATION SLOT",
      designerNote: "Reserved frame for upcoming chapter illustrations by the game designer.",
    },
    guidePage: {
      badge: "RULEBOOK • HOW TO PLAY",
      title: "How to Play Guide",
      subtitle:
        "Master the arena layout (Active Slot & Bench), Pak Karta's transformation condition, the Warga evolution chain, and tactical Spell counters.",
      visualSlotHeader: "Game Designer Diagram Slot",
      visualSlotNote: "Step-by-step board visuals will be embedded in this frame by the game designer.",
      winCondHeading: "Asymmetric Victory Conditions",
      babiWinTitle: "Babi Ngepet Victory",
      babiWinDesc:
        "Protect Mbok Sumi on the Bench, drain Warga energy with Babi Ngepet, and overwhelm the frontline with Siluman Babi (100 DMG).",
      wargaWinTitle: "Warga Victory",
      wargaWinDesc:
        "Use Kucing Liar to eliminate Mbok Sumi on the Bench (50 HP) and lock Pak Karta out of shapeshifting, or burst Babi Ngepet in the Active Slot with Amukan Warga + Punarma Jumat Legi.",
    },
    demoPage: {
      badge: "TBA • FUTURE EXPANSION",
      title: "In-Browser Demo Game (1-Game Match)",
      subtitle:
        "Planned future expansion: an embedded 1-game playable match inside the website using a fixed default deck with no persistent battle records.",
      constraints: [
        { label: "MATCH SCOPE", value: "Single 1-Game Gameplay" },
        { label: "DECK RULES", value: "Pre-Built Default Deck Only" },
        { label: "PERSISTENCE", value: "Stateless • No Battle Records" },
      ],
      boardPreviewTitle: "Match Arena Workspace Preview",
      opponentZone: "OPPONENT BENCH • MBOK SUMI (50 HP) + OPPONENT HAND",
      activeArenaLabel: "ACTIVE COMBAT SLOT (1 VS 1)",
      benchZoneLabel: "BENCH ZONE & ENERGY POOL",
      playerHand: "PLAYER HAND • DEFAULT DECK (TUMBAL ANAK, KUCING LIAR, PUNARMA)",
      defaultDeckTitle: "Default Demo Deck Roster",
      defaultDeckNote: "When released, this mode loads the 12 core prototype cards directly for a single quick match.",
    },
    footer: {
      projectNote: "Babi Ngepet vs Warga — Tactical Folklore Card Game Project",
      folkloreNote: "Engineered with the Neon Obsidian design system & natural purple gradient.",
    },
  },
};
