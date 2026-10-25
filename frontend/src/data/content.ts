import type { Faction } from "./cards";

export interface StoryChapter {
  id: string;
  chapterCode: string;
  perspective: Faction;
  featuredCardId: string;
  title: { id: string; en: string };
  subtitle: { id: string; en: string };
  paragraphs: { id: string[]; en: string[] };
  visualSpec: string;
}

export interface GuideStep {
  stepNumber: string;
  phaseLabel: { id: string; en: string };
  title: { id: string; en: string };
  summary: { id: string; en: string };
  bullets: { id: string[]; en: string[] };
  visualSlot: {
    aspect: string;
    annotation: { id: string; en: string };
    spec: { id: string; en: string };
  };
}

export const STORY_CHAPTERS: StoryChapter[] = [
  {
    id: "bab-1",
    chapterCode: "BAB 01 • KEPUTUSASAAN",
    perspective: "Babi Ngepet",
    featuredCardId: "pak-karta",
    title: {
      id: "Jalan Pintas Pak Karta & Tumbal Keluarga",
      en: "Pak Karta's Shortcut & The Family Sacrifice",
    },
    subtitle: {
      id: "Seorang petani miskin yang menukar kemanusiaan dan anaknya demi kekayaan instan.",
      en: "An impoverished farmer who traded his humanity and his own child for instant wealth.",
    },
    paragraphs: {
      id: [
        "Pak Karta hanyalah seorang petani miskin yang terhimpit kemiskinan dari musim ke musim. Ketika kerja keras di sawah tak lagi mencukupi, pikiran jahat mulai merasukinya: mencari jalan pintas menuju kekayaan mudah melalui ritual terlarang Babi Ngepet.",
        "Harga dari perjanjian gelap itu sangat mengerikan. Anak kandung Pak Karta sendiri harus menjadi Tumbal Anak agar sang ayah kebal dari serangan saat menyusup di kegelapan malam, sementara istrinya, Mbok Sumi, ditugaskan berjaga di balik pintu tertutup mengawasi nyala lilin sakral.",
      ],
      en: [
        "Pak Karta was a struggling farmer crushed by season after season of poverty. When honest labor in the fields was no longer enough, dark thoughts consumed him: seeking an effortless shortcut to wealth through the forbidden Babi Ngepet ritual.",
        "The price of the pact was harrowing. Pak Karta's own child became the Tumbal Anak sacrifice to shield him in the dark, while his wife Mbok Sumi was stationed indoors to guard the sacred candle flame.",
      ],
    },
    visualSpec:
      "Ilustrasi 16:9 • Pak Karta memegang jubah ritual sementara Mbok Sumi menyalakan lilin di kamar kayu.",
  },
  {
    id: "bab-2",
    chapterCode: "BAB 02 • PENJAGAAN LILIN",
    perspective: "Babi Ngepet",
    featuredCardId: "mbok-sumi",
    title: {
      id: "Nyala Lilin Mbok Sumi & Kutukan Siluman Babi",
      en: "Mbok Sumi's Candle Vigil & The Siluman Curse",
    },
    subtitle: {
      id: "Selama Mbok Sumi bertahan di persembunyian, Pak Karta dapat berubah wujud—namun perlahan kehilangan kemanusiaannya.",
      en: "So long as Mbok Sumi holds the bench, Pak Karta can shapeshift—yet slowly loses his humanity.",
    },
    paragraphs: {
      id: [
        "Setiap malam tiba, selama Mbok Sumi menjaga lilin tetap menyala dari bangku persembunyian (Bench), Pak Karta dapat berubah wujud menjadi Babi Ngepet untuk menguras kekayaan dan energi lawan dari rumah ke rumah.",
        "Namun semakin sering ia berubah wujud, kutukan itu kian menggerogoti jiwanya. Ketika batas terakhir dilanggar, Pak Karta tak lagi sekadar menyamar—ia berubah menjadi Siluman Babi seutuhnya yang telah meninggalkan seluruh kemanusiaannya.",
      ],
      en: [
        "Each night, so long as Mbok Sumi keeps the candle burning from the Bench, Pak Karta can transform into Babi Ngepet to drain wealth and energy from household to household.",
        "Yet every transformation erodes what remains of his soul. Cross the final threshold, and Pak Karta ceases to be a man in disguise—mutating into the ruthless Siluman Babi that has forsaken all humanity.",
      ],
    },
    visualSpec:
      "Ilustrasi 16:9 • Bingkai terbelah antara Mbok Sumi yang menjaga nyala lilin dan wujud Siluman Babi di kegelapan malam.",
  },
  {
    id: "bab-3",
    chapterCode: "BAB 03 • PURNAMA JUMAT LEGI",
    perspective: "Warga",
    featuredCardId: "amukan-warga",
    title: {
      id: "Obor Menyala & Amukan Warga di Malam Jumat Legi",
      en: "Torches Ignited & The Warga Uprising on Friday Legi",
    },
    subtitle: {
      id: "Dari warga sederhana menjadi Pasukan Obor hingga Amukan Warga yang menuntut balas.",
      en: "From peaceful neighbors to Torch Patrols and a full-scale village uprising.",
    },
    paragraphs: {
      id: [
        "Warga Desa semula hidup sederhana dalam kebersamaan. Namun ketika harta benda mereka terus raib secara misterius, kecurigaan berubah menjadi kesiagaan. Obor-obor api mulai dinyalakan di setiap gang, membentuk Pasukan Obor yang menyisir kegelapan malam.",
        "Puncaknya terjadi tepat pada malam Purnama Jumat Legi. Seekor Kucing Liar menyelinap mengganggu penjagaan Mbok Sumi di ruang lilin, sementara di jalan utama, Amukan Warga mengepung sang pencuri untuk memberikan konsekuensi terakhir.",
      ],
      en: [
        "The villagers once lived simply in quiet solidarity. But as their hard-earned savings vanished night after night, suspicion hardened into vigilance. Bamboo torches blazed across every alley as the Pasukan Obor mobilized.",
        "The climax arrived under the Purnama Jumat Legi full moon. A stray Kucing Liar slipped inside to disrupt Mbok Sumi's candle vigil, while outside, the full Amukan Warga cornered the culprit for his final reckoning.",
      ],
    },
    visualSpec:
      "Ilustrasi 16:9 • Warga Desa berevolusi menjadi Pasukan Obor dan Amukan Warga di bawah kalender Purnama Jumat Legi.",
  },
];

export const GUIDE_STEPS: GuideStep[] = [
  {
    stepNumber: "01",
    phaseLabel: {
      id: "Tata Letak Meja • Slot Aktif & Bench",
      en: "Arena Layout • Active Slot & Bench",
    },
    title: {
      id: "Struktur Arena: Slot Aktif & Bench",
      en: "Arena Structure: Active Slot & Bench",
    },
    summary: {
      id: "Setiap pemain memiliki 1 Slot Aktif untuk bertarung di garis depan dan area Bench untuk menyimpan unit pendukung seperti Mbok Sumi.",
      en: "Each player controls 1 Active Slot for frontline combat and a Bench zone for support units like Mbok Sumi.",
    },
    bullets: {
      id: [
        "Slot Aktif: Hanya kartu Unit di Slot Aktif yang dapat melancarkan serangan utama dan menerima serangan langsung.",
        "Zona Bench: Kartu Mbok Sumi (50 HP) ditempatkan di Bench untuk mengaktifkan efek Pasif [Mendukung] bagi Pak Karta.",
        "Ancaman Bench: Waspadai kartu Spell seperti Kucing Liar yang dapat menyerang Mbok Sumi langsung di Bench sebesar 40 DMG.",
      ],
      en: [
        "Active Slot: Only the Unit stationed in the Active Slot can execute primary attacks and absorb standard combat hits.",
        "Bench Zone: Mbok Sumi (50 HP) sits on the Bench to keep her Passive [Mendukung] active for Pak Karta.",
        "Bench Threat: Watch out for Spell cards like Kucing Liar that snipe Mbok Sumi directly on the Bench for 40 DMG.",
      ],
    },
    visualSlot: {
      aspect: "Diagram Arena 16:9",
      annotation: {
        id: "Diagram tata letak meja permainan",
        en: "Tabletop board layout diagram",
      },
      spec: {
        id: "Tampilan atas meja permainan: posisi Slot Aktif, Zona Bench, Kartu Tangan, dan Cadangan Energi.",
        en: "Top-down tabletop layout: Active Slot, Bench Zone, Hand Zone, and Energy Pool.",
      },
    },
  },
  {
    stepNumber: "02",
    phaseLabel: {
      id: "Mekanika Kubu • Perubahan Wujud vs Evolusi",
      en: "Faction Engine • Transformation vs Evolution",
    },
    title: {
      id: "Perubahan Wujud Pak Karta vs Evolusi Warga",
      en: "Pak Karta's Transformation vs Warga Evolution",
    },
    summary: {
      id: "Kubu Babi Ngepet mengandalkan perubahan wujud fleksibel berbasis Bench, sedangkan kubu Warga memperkuat diri lewat 3 tahap Evolusi.",
      en: "Babi Ngepet relies on Bench-enabled shapeshifting, whereas Warga scales through a 3-stage Evolution line.",
    },
    bullets: {
      id: [
        "Jalur Babi Ngepet: Pak Karta (150 HP, 20 DMG), berubah ke Babi Ngepet (100 HP, 40 DMG + curi 1 Energi), hingga Siluman Babi (200 HP, 100 DMG).",
        "Syarat Mutlak: Perubahan wujud Pak Karta hanya bisa dilakukan selama Mbok Sumi masih bertahan hidup di dalam Bench.",
        "Jalur Evolusi Warga: Warga Desa (Evo 1: 150 HP, 30 DMG), naik ke Pasukan Obor (Evo 2: 200 HP, 45 DMG), hingga Amukan Warga (Evo 3: 220 HP, 75 DMG).",
      ],
      en: [
        "Babi Ngepet Line: Pak Karta (150 HP, 20 DMG), shifting to Babi Ngepet (100 HP, 40 DMG + steal 1 Energy), up to Siluman Babi (200 HP, 100 DMG).",
        "Candle Requirement: Pak Karta can only shapeshift while Mbok Sumi remains alive on the Bench.",
        "Warga Evolution Line: Warga Desa (Evo 1: 150 HP, 30 DMG), evolving into Pasukan Obor (Evo 2: 200 HP, 45 DMG), up to Amukan Warga (Evo 3: 220 HP, 75 DMG).",
      ],
    },
    visualSlot: {
      aspect: "Alur Karakter 16:9",
      annotation: {
        id: "Bagan alur perubahan wujud & evolusi",
        en: "Transformation & Evolution flow diagram",
      },
      spec: {
        id: "Perbandingan berdampingan antara syarat perubahan wujud Pak Karta dan tahapan Evolusi 1–2–3 Warga.",
        en: "Side-by-side comparison of Pak Karta's shapeshift condition vs Warga Evo 1–2–3 progression.",
      },
    },
  },
  {
    stepNumber: "03",
    phaseLabel: {
      id: "Manajemen Taktis • Energi & Kartu Spell",
      en: "Tactical Timing • Energy & Hand Spells",
    },
    title: {
      id: "Manajemen Energi & Kartu Spell Tangan",
      en: "Energy Economy & Hand Spell Counters",
    },
    summary: {
      id: "Pasangkan kartu Elemen Malam (Dark) atau Elemen Obor (Fire) untuk menyerang, dan simpan kartu Spell untuk membalikkan keadaan.",
      en: "Attach Dark or Fire Element energy to power skills, and time your Spell cards for decisive swings.",
    },
    bullets: {
      id: [
        "Mencuri Kekayaan: Serangan Babi Ngepet mencuri 1 poin energi lawan, memperlambat evolusi dan serangan balasan Warga.",
        "Tumbal Anak (Pertahanan Tangan): Selama kartu ini disimpan di dalam tangan, Babi Ngepet kebal terhadap damage dari skill lawan.",
        "Punarma Jumat Legi (Burst Warga): Saat Babi Ngepet berada di Slot Aktif lawan, aktifkan kartu ini untuk memberi +50 DMG pada serangan Warga berikutnya.",
      ],
      en: [
        "Steal Wealth: Babi Ngepet's attack drains 1 opponent Energy point, stalling Warga evolutions.",
        "Tumbal Anak (Hand Shield): While held in your hand, Babi Ngepet takes zero damage from opposing skills.",
        "Punarma Jumat Legi (Warga Burst): Play when Babi Ngepet is in the opponent's Active Slot to grant +50 DMG to the next Warga attack.",
      ],
    },
    visualSlot: {
      aspect: "Interaksi Spell 16:9",
      annotation: {
        id: "Ilustrasi interaksi kartu Spell & Energi",
        en: "Visual guide for Spell & Energy interactions",
      },
      spec: {
        id: "Ilustrasi perlindungan tangan Tumbal Anak, serangan Kucing Liar ke Bench, serta kombo +50 DMG Punarma Jumat Legi.",
        en: "Diagram showing Tumbal Anak hand protection, Kucing Liar bench snipe, and Punarma +50 DMG combo.",
      },
    },
  },
  {
    stepNumber: "04",
    phaseLabel: {
      id: "Penentuan Akhir • Syarat Kemenangan",
      en: "Endgame • Victory Conditions",
    },
    title: {
      id: "Cara Meraih Kemenangan",
      en: "How to Win the Match",
    },
    summary: {
      id: "Kalahkan unit utama lawan hingga HP mencapai 0 atau lumpuhkan kunci strategi mereka di tengah permainan.",
      en: "Reduce the opposing core units to 0 HP or dismantle their strategic engine mid-match.",
    },
    bullets: {
      id: [
        "Kemenangan Babi Ngepet: Kuras energi Warga dengan Babi Ngepet, lindungi Mbok Sumi di Bench, lalu habisi barisan Warga dengan Siluman Babi (100 DMG).",
        "Kemenangan Warga: Lumpuhkan Mbok Sumi di Bench (50 HP) menggunakan Kucing Liar untuk mengunci perubahan wujud Pak Karta, atau tumbangkan Babi Ngepet dengan kombo Amukan Warga + Punarma Jumat Legi (125 DMG).",
      ],
      en: [
        "Babi Ngepet Victory: Drain Warga energy with Babi Ngepet, keep Mbok Sumi safe on the Bench, and sweep with Siluman Babi (100 DMG).",
        "Warga Victory: Eliminate Mbok Sumi on the Bench (50 HP) with Kucing Liar to lock Pak Karta out of transforming, or burst Babi Ngepet down with Amukan Warga + Punarma Jumat Legi (125 DMG).",
      ],
    },
    visualSlot: {
      aspect: "Ringkasan Akhir 16:9",
      annotation: {
        id: "Infografik jalur kemenangan kedua kubu",
        en: "Endgame win condition graphic",
      },
      spec: {
        id: "Ringkasan visual dua jalur kemenangan asimetris beserta ambang serangan penentu.",
        en: "Visual summary of the two asymmetric victory paths and lethal damage thresholds.",
      },
    },
  },
];
