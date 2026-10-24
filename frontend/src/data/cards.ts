export type Faction = "Babi Ngepet" | "Warga";
export type CardType = "Unit" | "Support" | "Spell" | "Energy";

export interface GameCard {
  id: string;
  code: string;
  name: string;
  svgPath: string;
  elementIcon: string;
  faction: Faction;
  type: CardType;
  hp?: number;
  skillName?: string;
  damage?: number;
  effect: {
    id: string;
    en: string;
  };
  lore: {
    id: string;
    en: string;
  };
  roleTag: string;
}

export const CARDS_DATA: GameCard[] = [
  {
    id: "babi-ngepet",
    code: "BN-01",
    name: "Babi Ngepet",
    svgPath: "/cards/Babi%20Ngepet.svg",
    elementIcon: "/cards/Dark%20Element.svg",
    faction: "Babi Ngepet",
    type: "Unit",
    hp: 100,
    skillName: "Mencuri Kekayaan",
    damage: 40,
    effect: {
      id: "Mencuri Kekayaan (40 DMG): Mengambil 1 poin energi lawan saat menyerang dari slot aktif.",
      en: "Steal Wealth (40 DMG): Drains 1 Energy point from the opponent when attacking from the active slot.",
    },
    lore: {
      id: "Babi Ngepet merupakan wujud Pak Karta di malam hari yang digunakan untuk mencuri kekayaan warga desa.",
      en: "Babi Ngepet is Pak Karta's nocturnal form used to siphon the wealth of the village residents.",
    },
    roleTag: "Active Shifter • Energy Drain",
  },
  {
    id: "siluman-babi",
    code: "BN-02",
    name: "Siluman Babi",
    svgPath: "/cards/Siluman%20Babi.svg",
    elementIcon: "/cards/Dark%20Element.svg",
    faction: "Babi Ngepet",
    type: "Unit",
    hp: 200,
    skillName: "Hilang Kemanusiaan",
    damage: 100,
    effect: {
      id: "Hilang Kemanusiaan (100 DMG): Wujud puncak dengan daya hancur masif selama Mbok Sumi tetap bertahan di bench.",
      en: "Lost Humanity (100 DMG): Apex form dealing massive damage while Mbok Sumi remains alive on the bench.",
    },
    lore: {
      id: "Wujud Babi Ngepet yang sudah meninggalkan seluruh kemanusiaannya.",
      en: "The monstrous form of Babi Ngepet after forsaking every trace of its humanity.",
    },
    roleTag: "Apex Transformation • Heavy Finisher",
  },
  {
    id: "pak-karta",
    code: "BN-03",
    name: "Pak Karta",
    svgPath: "/cards/Pak%20Karta.svg",
    elementIcon: "/cards/Dark%20Element.svg",
    faction: "Babi Ngepet",
    type: "Unit",
    hp: 150,
    skillName: "Pikiran Jahat",
    damage: 20,
    effect: {
      id: "Pikiran Jahat (20 DMG): Wujud dasar manusia. Dapat berubah menjadi Babi Ngepet atau Siluman Babi jika Mbok Sumi berada di bench.",
      en: "Dark Intent (20 DMG): Base human form. Can transform into Babi Ngepet or Siluman Babi while Mbok Sumi is on the bench.",
    },
    lore: {
      id: "Pak Karta adalah seorang petani miskin yang mencari cara bagaimana cara mendapatkan kekayaan mudah.",
      en: "Pak Karta is an impoverished farmer searching for a shortcut to effortless wealth.",
    },
    roleTag: "Base Unit • Human Vessel",
  },
  {
    id: "mbok-sumi",
    code: "BN-04",
    name: "Mbok Sumi",
    svgPath: "/cards/Mbok%20Sumi.svg",
    elementIcon: "/cards/Dark%20Element.svg",
    faction: "Babi Ngepet",
    type: "Support",
    hp: 50,
    skillName: "[Pasif] Mendukung",
    effect: {
      id: "Pasif — Mendukung: Selama Mbok Sumi berada dalam bench, Pak Karta dapat berubah menjadi wujud apapun.",
      en: "Passive — Candle Vigil: While Mbok Sumi is on the bench, Pak Karta can freely shapeshift into any form.",
    },
    lore: {
      id: "Mbok Sumi adalah istri dari Pak Karta yang ditugaskan untuk menjaga lilin yang digunakan untuk perubahan wujud Pak Karta.",
      en: "Mbok Sumi is Pak Karta's wife, tasked with guarding the ritual candle that sustains his transformation.",
    },
    roleTag: "Bench Anchor • Candle Guardian",
  },
  {
    id: "tumbal-anak",
    code: "BN-05",
    name: "Tumbal Anak",
    svgPath: "/cards/Anak.svg",
    elementIcon: "/cards/Dark%20Element.svg",
    faction: "Babi Ngepet",
    type: "Spell",
    effect: {
      id: "Babi Ngepet tidak akan terkena damage dari skill jika kartu ini berada didalam tangan.",
      en: "Babi Ngepet takes zero skill damage from opposing attacks while this card is held in your hand.",
    },
    lore: {
      id: "Anak Pak Karta yang menerima tumbal aksi pencuriannya demi memperoleh kekayaan.",
      en: "Pak Karta's child, bearing the dark sacrifice of his father's greed for wealth.",
    },
    roleTag: "Hand Shield • Dark Pact",
  },
  {
    id: "warga-desa",
    code: "WG-01",
    name: "Warga Desa",
    svgPath: "/cards/Warga%20Evo%201.svg",
    elementIcon: "/cards/Fire%20Element.svg",
    faction: "Warga",
    type: "Unit",
    hp: 150,
    skillName: "Serang Balik",
    damage: 30,
    effect: {
      id: "Serang Balik (30 DMG): Unit tahap pertama Warga. Dapat berevolusi menjadi Pasukan Obor (Tahap 2).",
      en: "Counter Strike (30 DMG): Stage 1 Warga unit. Can evolve into Pasukan Obor (Stage 2).",
    },
    lore: {
      id: "Warga desa hidup sederhana dalam kebersamaan. Bagi mereka, hari esok hanyalah tentang melanjutkan hidup seperti biasa.",
      en: "The villagers live simply in tight-knit harmony. For them, tomorrow is just about carrying on together.",
    },
    roleTag: "Evo Stage 1 • Frontline",
  },
  {
    id: "pasukan-obor",
    code: "WG-02",
    name: "Pasukan Obor",
    svgPath: "/cards/Warga%20Evo%202.svg",
    elementIcon: "/cards/Fire%20Element.svg",
    faction: "Warga",
    type: "Unit",
    hp: 200,
    skillName: "Obor Api",
    damage: 45,
    effect: {
      id: "Obor Api (45 DMG): Evolusi Tahap 2 dari Warga Desa. Meningkatkan ketahanan dan daya serang patroli malam.",
      en: "Torch Flame (45 DMG): Stage 2 evolution of Warga Desa. Boosts patrol durability and night strike power.",
    },
    lore: {
      id: "Warga desa merasakan pencurian sedang terjadi di desa mereka, obor-obor api mulai menyala di malam hari.",
      en: "Sensing a wave of midnight thefts across their village, the residents ignite their torches into the night.",
    },
    roleTag: "Evo Stage 2 • Night Patrol",
  },
  {
    id: "amukan-warga",
    code: "WG-03",
    name: "Amukan Warga",
    svgPath: "/cards/Warga%20Evo%203.svg",
    elementIcon: "/cards/Fire%20Element.svg",
    faction: "Warga",
    type: "Unit",
    hp: 220,
    skillName: "Balas Dendam",
    damage: 75,
    effect: {
      id: "Balas Dendam (75 DMG): Evolusi Tahap 3 puncak Warga. Menghasilkan 125 DMG jika dikombinasikan dengan Punarma Jumat Legi.",
      en: "Vengeance (75 DMG): Stage 3 apex Warga evolution. Deals 125 DMG when amplified by Punarma Jumat Legi.",
    },
    lore: {
      id: "Warga desa telah menemukan pelaku pencurian di desa mereka dan siap untuk menyerang pelaku tersebut.",
      en: "Having cornered the culprit behind the village thefts, the townsfolk unite to strike back.",
    },
    roleTag: "Evo Stage 3 • Apex Vanguard",
  },
  {
    id: "kucing-liar",
    code: "WG-04",
    name: "Kucing Liar",
    svgPath: "/cards/Kucing.svg",
    elementIcon: "/cards/Fire%20Element.svg",
    faction: "Warga",
    type: "Spell",
    damage: 40,
    effect: {
      id: "Menyerang Mbok Sumi yang berada dalam bench lawan sebanyak 40 damage (mengabaikan slot aktif).",
      en: "Strikes Mbok Sumi on the opponent's bench directly for 40 damage, bypassing the active slot.",
    },
    lore: {
      id: "Kucing liar yang menyelinap lewat jendela kamar untuk mengganggu penjaga lilin di malam hari.",
      en: "A stray cat slipping through the window frame to disrupt the candle guardian in the dead of night.",
    },
    roleTag: "Bench Sniper • Anti-Support",
  },
  {
    id: "punarma-jumat-legi",
    code: "WG-05",
    name: "Punarma Jumat Legi",
    svgPath: "/cards/Punarma.svg",
    elementIcon: "/cards/Fire%20Element.svg",
    faction: "Warga",
    type: "Spell",
    damage: 50,
    effect: {
      id: "Menaikkan serangan Warga berikutnya sebanyak 50 damage. Hanya dapat digunakan ketika Babi Ngepet berada di slot aktif lawan.",
      en: "Increases the next Warga attack by +50 damage. Can only be played while Babi Ngepet is in the opponent's active slot.",
    },
    lore: {
      id: "Malam Jumat Legi dimana Pak Karta menerima konsekuensi aksi pencuriannya.",
      en: "The fateful Friday Legi full moon night when Pak Karta faces the reckoning for his thefts.",
    },
    roleTag: "Burst Amplifier • Conditional",
  },
  {
    id: "dark-element",
    code: "EL-01",
    name: "Elemen Malam (Dark)",
    svgPath: "/cards/Dark%20Element.svg",
    elementIcon: "/cards/Dark%20Element.svg",
    faction: "Babi Ngepet",
    type: "Energy",
    effect: {
      id: "Sumber poin energi kubu Babi Ngepet untuk mengaktifkan skill Pikiran Jahat, Mencuri Kekayaan, dan Hilang Kemanusiaan.",
      en: "Primary Dark Energy resource for the Babi Ngepet faction to power shapeshifting and wealth-draining skills.",
    },
    lore: {
      id: "Sinar purnama tertutup kabut kelam yang mengalirkan kekuatan gaib pada ritual Pak Karta.",
      en: "A moon veiled in dark mist channeling occult energy into Pak Karta's midnight ritual.",
    },
    roleTag: "Resource • Dark Energy",
  },
  {
    id: "fire-element",
    code: "EL-02",
    name: "Elemen Obor (Fire)",
    svgPath: "/cards/Fire%20Element.svg",
    elementIcon: "/cards/Fire%20Element.svg",
    faction: "Warga",
    type: "Energy",
    effect: {
      id: "Sumber poin energi kubu Warga untuk menaikkan tahap Evolusi (Warga Desa → Pasukan Obor → Amukan Warga) dan menyerang.",
      en: "Primary Fire Energy resource for the Warga faction to fuel Evolution stages and torch-lit counterattacks.",
    },
    lore: {
      id: "Nyala obor bambu yang menyatukan keberanian warga desa menembus pekatnya malam.",
      en: "The bamboo torch flame uniting the courage of the village against the midnight dark.",
    },
    roleTag: "Resource • Fire Energy",
  },
];
