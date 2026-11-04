export type Locale = "id" | "en";

// Set to false to remove the English UI toggle and lock the entire site to Bahasa Indonesia.
export const ENABLE_LANGUAGE_TOGGLE = false;
export const DEFAULT_LOCALE: Locale = "id";

export interface Dictionary {
  nav: {
    home: string;
    cards: string;
    story: string;
    guide: string;
    demo: string;
    langLabel: string;
  };
  landing: {
    titleLine1: string;
    titleLine2: string;
    lead: string;
    ctaCards: string;
    ctaGuide: string;
    ctaDemo: string;
    stripLabel: string;
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
    purposeHeading: string;
    purposeSubheading: string;
    purposeCards: Array<{
      title: string;
      body: string;
    }>;
  };
  cardsPage: {
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
    wujudLabel: string;
    passiveLabel: string;
    skillLabel: string;
    dmgLabel: string;
    effectLabel: string;
    loreLabel: string;
    roleLabel: string;
    closeModal: string;
    clickToInspect: string;
  };
  storyPage: {
    title: string;
  };
  guidePage: {
    title: string;
    subtitle: string;
    openPdfCta: string;
  };
  demoPage: {
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
      langLabel: "Bahasa UI",
    },
    landing: {
      titleLine1: "KISATARA",
      titleLine2: "Game Kartu Babi Ngepet",
      lead: "KISATARA adalah game kartu dua pemain yang berdasarkan legenda Babi Ngepet. Satu sisi berjuang mencuri kekayaan dalam gelap. Sisi lainnya berjuang melindungi desa.",
      ctaCards: "Jelajahi Daftar Kartu",
      ctaGuide: "Buku Aturan KISATARA",
      ctaDemo: "Arena Demo",
      stripLabel: "ATURAN INTI PERMAINAN KISATARA",
      aboutHeading: "Dua Sisi Tetap: Sisi Babi Ngepet vs Sisi Warga",
      aboutSubheading:
        "Setiap pemain memainkan sisi yang tetap berisi 20 kartu (5 kartu unik dengan 4 salinan dari setiap kartu).",
      tabs: [
        {
          id: "shifter",
          label: "Sisi Babi Ngepet (Pencuri)",
          heading: "Perubahan Wujud Pak Karta & Penjagaan Lilin Mbok Sumi",
          body: "Selama Mbok Sumi (50 HP) ada di Cadangan menjaga nyala lilin, Pak Karta (Wujud 1, 150 HP) dapat berubah wujud menjadi Babi Ngepet (Wujud 2, 200 HP) atau Siluman Babi (Wujud 3, 300 HP).",
          bullets: [
            "Pak Karta (Wujud 1, 150 HP): Skill Ingin Kaya (20 Damage) sekaligus mengambil 1 kartu dari draw pile.",
            "Babi Ngepet (Wujud 2, 200 HP): Skill Mencuri Kekayaan (80 Damage) — lempar koin, jika hasilnya gambar, curi 1 Energi dari lawan.",
            "Siluman Babi (Wujud 3, 300 HP): Skill Hilang Kemanusiaan (120 Damage) yang juga memberikan 30 damage kepada diri sendiri.",
            "Mbok Sumi (50 HP) & Tumbal Anak (Kartu Item): Pasif Mendukung membuka perubahan wujud dari Cadangan, sedangkan Tumbal Anak memastikan serangan Babi Ngepet selanjutnya pasti mencuri energi.",
          ],
          cardIds: ["pak-karta", "babi-ngepet", "siluman-babi"],
        },
        {
          id: "warga",
          label: "Sisi Warga (Desa)",
          heading: "Tiga Wujud Warga Desa & Serangan ke Cadangan",
          body: "Sisi Warga berjuang melindungi desa melalui perubahan wujud bertahap dari Warga Desa (Wujud 1, 150 HP), naik ke Pasukan Obor (Wujud 2, 200 HP), hingga Amukan Warga (Wujud 3, 220 HP).",
          bullets: [
            "Warga Desa (Wujud 1, 150 HP) & Pasukan Obor (Wujud 2, 200 HP): Serang Balik (30 Damage) lalu Obor Api (45 Damage) yang sekaligus mendapatkan 1 energi.",
            "Amukan Warga (Wujud 3, 220 HP): Pasif Amarah menyembuhkan darah sebanyak 20 HP setiap giliran, dan Skill Balas Dendam (75 Damage) juga memberikan 20 damage kepada Mbok Sumi di Cadangan lawan.",
            "Kucing Liar (Kartu Item): Menyerang Mbok Sumi yang berada dalam Cadangan lawan sebanyak 40 damage.",
            "Purnama Jumat Legi (Kartu Item): Menaikkan serangan Warga berikutnya sebanyak 50 damage ketika Babi Ngepet berada di dalam slot aktif lawan.",
          ],
          cardIds: ["warga-desa", "pasukan-obor", "amukan-warga"],
        },
      ],
      purposeHeading: "Untuk Apa KISATARA Dibuat?",
      purposeSubheading:
        "Menghidupkan legenda Babi Ngepet ke dalam pertarungan kartu dua pemain yang taktis.",
      purposeCards: [
        {
          title: "Adaptasi Legenda Pak Karta & Warga Desa",
          body: "Setiap kartu menerjemahkan cerita asli Babi Ngepet: lilin penjaga nyawa Mbok Sumi menjadi Pasif di Cadangan, kucing liar yang menyenggol lilin menjadi Kartu Item pengincar Cadangan, dan malam Jumat Legi menjadi penentu serangan.",
        },
        {
          title: "Deck Tetap & Kolam Energi Bersama",
          body: "Tanpa pembuatan deck bebas, kedua sisi langsung bertarung seimbang dengan 20 kartu (5 kartu unik × 4 salinan), mengelola Kolam Energi bersama (batas 10 energi), serta mengatur 1 Posisi Aktif dan hingga 3 Cadangan tanpa bisa mundur.",
        },
        {
          title: "Perebutan 3 Poin Kemenangan",
          body: "Setiap karakter lawan yang mencapai 0 HP (KO) memberikan 1 poin. Pemain menang saat mencapai 3 poin, saat lawan tidak punya karakter lagi di arena, atau saat lawan tidak bisa menarik kartu di awal gilirannya.",
        },
      ],
    },
    cardsPage: {
      title: "Daftar Kartu",
      subtitle:
        "Telusuri 10 kartu unik KISATARA (Kartu Karakter & Kartu Item dari Sisi Babi Ngepet dan Sisi Warga). Arahkan kursor untuk efek pop-up dan klik kartu untuk melihat detail ukuran penuh.",
      searchPlaceholder: "Cari nama kartu (mis. Babi Ngepet, Mbok Sumi, Warga, Kucing)…",
      allFactions: "Semua Sisi",
      allTypes: "Semua Jenis",
      showingCount: "Menampilkan kartu",
      clearFilters: "Atur Ulang Filter",
      emptyStateTitle: "Tidak ada kartu yang cocok",
      emptyStateDesc: "Coba kata kunci nama kartu lain atau atur ulang filter.",
      hpLabel: "HP (Darah)",
      wujudLabel: "Wujud",
      passiveLabel: "Skill Pasif",
      skillLabel: "Skill Serangan",
      dmgLabel: "Damage",
      effectLabel: "Deskripsi Skill & Efek",
      loreLabel: "Teks Cerita",
      roleLabel: "Jenis Kartu",
      closeModal: "Tutup (Esc)",
      clickToInspect: "Perbesar kartu",
    },
    storyPage: {
      title: "Babi Ngepet",
    },
    guidePage: {
      title: "Buku Aturan KISATARA",
      subtitle:
        "KISATARA adalah game kartu dua pemain yang berdasarkan legenda Babi Ngepet. Satu sisi berjuang mencuri kekayaan dalam gelap. Sisi lainnya berjuang melindungi desa.",
      openPdfCta: "Buka Buku Aturan KISATARA (PDF)",
    },
    demoPage: {
      title: "Demo Permainan Web (1 Pertandingan)",
      subtitle:
        "Ekspansi masa depan: simulasi pertandingan tunggal langsung di dalam website menggunakan dek bawaan tanpa pencatatan riwayat tanding.",
      constraints: [
        { label: "CAKUPAN MODE", value: "1 Pertandingan Selesai (Single Match)" },
        { label: "ATURAN DEK", value: "Dek Bawaan Tetap (Default Deck)" },
        { label: "PENYIMPANAN", value: "Tanpa Riwayat Pertandingan (Stateless)" },
      ],
      boardPreviewTitle: "Pratinjau Workspace Arena Pertandingan",
      opponentZone: "CADANGAN LAWAN • MBOK SUMI (50 HP) + TANGAN LAWAN",
      activeArenaLabel: "POSISI AKTIF PERTARUNGAN (1 VS 1)",
      benchZoneLabel: "CADANGAN & KOLAM ENERGI",
      playerHand: "TANGAN PEMAIN • DEK BAWAAN (TUMBAL ANAK, KUCING LIAR, PURNAMA)",
      defaultDeckTitle: "Komposisi Kartu Dek Bawaan Demo",
      defaultDeckNote: "Mode demo akan langsung memuat 10 kartu unik KISATARA untuk 1 babak permainan instan.",
    },
    footer: {
      projectNote: "KISATARA — Game Kartu Babi Ngepet",
      folkloreNote: "Permainan kartu dua pemain berdasarkan legenda Babi Ngepet.",
    },
  },
  en: {
    nav: {
      home: "Home",
      cards: "Card List",
      story: "Lore",
      guide: "Rules",
      demo: "Demo",
      langLabel: "UI Language",
    },
    landing: {
      titleLine1: "KISATARA",
      titleLine2: "Game Kartu Babi Ngepet",
      lead: "KISATARA is a two-player card game based on the legend of Babi Ngepet. One side fights to steal wealth in the dark. The other side fights to protect the village.",
      ctaCards: "Explore Card List",
      ctaGuide: "KISATARA Rulebook",
      ctaDemo: "Demo Arena",
      stripLabel: "CORE KISATARA GAME RULES",
      aboutHeading: "Two Fixed Sides: Babi Ngepet vs Warga",
      aboutSubheading:
        "Each player plays a fixed 20-card deck (5 unique cards with 4 copies of each card).",
      tabs: [
        {
          id: "shifter",
          label: "Babi Ngepet Side (Thief)",
          heading: "Pak Karta's Transformation & Mbok Sumi's Candle Vigil",
          body: "While Mbok Sumi (50 HP) remains in the Reserve (Cadangan) guarding the candle, Pak Karta (Wujud 1, 150 HP) can transform into Babi Ngepet (Wujud 2, 200 HP) or Siluman Babi (Wujud 3, 300 HP).",
          bullets: [
            "Pak Karta (Wujud 1, 150 HP): Skill Ingin Kaya (20 Damage) and draw 1 card from your draw pile.",
            "Babi Ngepet (Wujud 2, 200 HP): Skill Mencuri Kekayaan (80 Damage) — flip a coin, if tails, steal 1 Energy from the opponent.",
            "Siluman Babi (Wujud 3, 300 HP): Skill Hilang Kemanusiaan (120 Damage) which also deals 30 damage to itself.",
            "Mbok Sumi (50 HP) & Tumbal Anak (Item Card): Passive Mendukung enables shapeshifting from Reserve, while Tumbal Anak guarantees Babi Ngepet's next attack steals energy.",
          ],
          cardIds: ["pak-karta", "babi-ngepet", "siluman-babi"],
        },
        {
          id: "warga",
          label: "Warga Side (Village)",
          heading: "Three Warga Forms & Reserve Sniping",
          body: "The Warga side defends the village through three forms starting from Warga Desa (Wujud 1, 150 HP), advancing to Pasukan Obor (Wujud 2, 200 HP), and culminating in Amukan Warga (Wujud 3, 220 HP).",
          bullets: [
            "Warga Desa (Wujud 1, 150 HP) & Pasukan Obor (Wujud 2, 200 HP): Serang Balik (30 Damage) and Obor Api (45 Damage) which also grants 1 energy.",
            "Amukan Warga (Wujud 3, 220 HP): Passive Amarah heals 20 HP every turn, and Skill Balas Dendam (75 Damage) also deals 20 damage to Mbok Sumi in the opponent's Reserve.",
            "Kucing Liar (Item Card): Attacks Mbok Sumi in the opponent's Reserve (Cadangan) for 40 damage.",
            "Purnama Jumat Legi (Item Card): Increases the next Warga attack by 50 damage while Babi Ngepet is in the opponent's Active slot.",
          ],
          cardIds: ["warga-desa", "pasukan-obor", "amukan-warga"],
        },
      ],
      purposeHeading: "What KISATARA Is Built For",
      purposeSubheading:
        "Bringing the Babi Ngepet legend to life in a tactical two-player card duel.",
      purposeCards: [
        {
          title: "Folklore Adapted Into Card Mechanics",
          body: "Every card reflects the Babi Ngepet story: Mbok Sumi's life-guarding candle becomes a Reserve Passive, the stray cat knocking over the candle becomes a Reserve-targeting Item card, and Friday Legi becomes the decisive burst card.",
        },
        {
          title: "Fixed Decks & Shared Energy Pool",
          body: "With no free deckbuilding, both sides duel with balanced 20-card decks (5 unique cards × 4 copies), a shared Energy Pool (up to 10 energy), 1 Active Position, and up to 3 Reserves with no retreating.",
        },
        {
          title: "Race to 3 Victory Points",
          body: "Every opposing character reduced to 0 HP (KO) awards 1 point. Win by reaching 3 points, clearing all opposing characters from the arena, or when your opponent cannot draw at the start of their turn.",
        },
      ],
    },
    cardsPage: {
      title: "Card List",
      subtitle:
        "Browse all 10 unique KISATARA cards (Character Cards & Item Cards from the Babi Ngepet and Warga sides). Hover for a pop-up effect and click any card to inspect full details.",
      searchPlaceholder: "Search by card name (e.g. Babi Ngepet, Mbok Sumi, Warga, Kucing)…",
      allFactions: "All Sides",
      allTypes: "All Types",
      showingCount: "Showing cards",
      clearFilters: "Reset Filters",
      emptyStateTitle: "No matching cards found",
      emptyStateDesc: "Try another card name query or reset the filter.",
      hpLabel: "HP (Health)",
      wujudLabel: "Form (Wujud)",
      passiveLabel: "Passive Skill",
      skillLabel: "Attack Skill",
      dmgLabel: "Damage",
      effectLabel: "Skill & Effect Description",
      loreLabel: "Lore Text",
      roleLabel: "Card Type",
      closeModal: "Close (Esc)",
      clickToInspect: "Inspect card",
    },
    storyPage: {
      title: "Babi Ngepet",
    },
    guidePage: {
      title: "KISATARA Rulebook",
      subtitle:
        "KISATARA is a two-player card game based on the legend of Babi Ngepet. One side fights to steal wealth in the dark. The other side fights to protect the village.",
      openPdfCta: "Open KISATARA Rulebook (PDF)",
    },
    demoPage: {
      title: "In-Browser Demo Game (1-Game Match)",
      subtitle:
        "Planned future expansion: an embedded 1-game playable match inside the website using a fixed default deck with no persistent battle records.",
      constraints: [
        { label: "MATCH SCOPE", value: "Single 1-Game Gameplay" },
        { label: "DECK RULES", value: "Pre-Built Default Deck Only" },
        { label: "PERSISTENCE", value: "Stateless • No Battle Records" },
      ],
      boardPreviewTitle: "Match Arena Workspace Preview",
      opponentZone: "OPPONENT RESERVE • MBOK SUMI (50 HP) + OPPONENT HAND",
      activeArenaLabel: "ACTIVE COMBAT POSITION (1 VS 1)",
      benchZoneLabel: "RESERVE & ENERGY POOL",
      playerHand: "PLAYER HAND • DEFAULT DECK (TUMBAL ANAK, KUCING LIAR, PURNAMA)",
      defaultDeckTitle: "Default Demo Deck Roster",
      defaultDeckNote: "When released, this mode loads the 10 core KISATARA cards directly for a single quick match.",
    },
    footer: {
      projectNote: "KISATARA — Game Kartu Babi Ngepet",
      folkloreNote: "Two-player card game based on the legend of Babi Ngepet.",
    },
  },
};
