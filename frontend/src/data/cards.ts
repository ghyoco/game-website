export type Faction = "Babi Ngepet" | "Warga";
export type CardType = "Kartu Karakter" | "Kartu Item";

export interface GameCard {
  id: string;
  code: string;
  name: string;
  svgPath: string;
  elementIcon: string;
  faction: Faction;
  type: CardType;
  wujud?: string;
  hp?: number;
  passiveName?: string;
  passiveDesc?: {
    id: string;
    en: string;
  };
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
    id: "pak-karta",
    code: "BN-01",
    name: "Pak Karta",
    svgPath: "/cards/Pak%20Karta.svg",
    elementIcon: "/cards/Dark%20Element.svg",
    faction: "Babi Ngepet",
    type: "Kartu Karakter",
    wujud: "Wujud 1",
    hp: 150,
    skillName: "Ingin Kaya",
    damage: 20,
    effect: {
      id: "Ingin Kaya (20 Damage): Ambil 1 kartu dari draw pile.",
      en: "Ingin Kaya (20 Damage): Draw 1 card from your draw pile.",
    },
    lore: {
      id: "Pak Karta adalah seorang petani miskin yang mencari cara bagaimana cara mendapatkan kekayaan mudah.",
      en: "Pak Karta adalah seorang petani miskin yang mencari cara bagaimana cara mendapatkan kekayaan mudah.",
    },
    roleTag: "Kartu Karakter • Wujud 1 (Basic)",
  },
  {
    id: "babi-ngepet",
    code: "BN-02",
    name: "Babi Ngepet",
    svgPath: "/cards/Babi%20Ngepet.svg",
    elementIcon: "/cards/Dark%20Element.svg",
    faction: "Babi Ngepet",
    type: "Kartu Karakter",
    wujud: "Wujud 2",
    hp: 200,
    skillName: "Mencuri Kekayaan",
    damage: 80,
    effect: {
      id: "Mencuri Kekayaan (80 Damage): Lempar koin. Jika hasilnya gambar, curi 1 Energi dari lawan.",
      en: "Mencuri Kekayaan (80 Damage): Flip a coin. If tails, steal 1 Energy from the opponent.",
    },
    lore: {
      id: "Babi Ngepet merupakan wujud Pak Karta di malam hari yang digunakan untuk mencuri kekayaan warga desa.",
      en: "Babi Ngepet merupakan wujud Pak Karta di malam hari yang digunakan untuk mencuri kekayaan warga desa.",
    },
    roleTag: "Kartu Karakter • Wujud 2",
  },
  {
    id: "siluman-babi",
    code: "BN-03",
    name: "Siluman Babi",
    svgPath: "/cards/Siluman%20Babi.svg",
    elementIcon: "/cards/Dark%20Element.svg",
    faction: "Babi Ngepet",
    type: "Kartu Karakter",
    wujud: "Wujud 3",
    hp: 300,
    skillName: "Hilang Kemanusiaan",
    damage: 120,
    effect: {
      id: "Hilang Kemanusiaan (120 Damage): Serangan ini juga memberikan 30 damage kepada diri sendiri.",
      en: "Hilang Kemanusiaan (120 Damage): This attack also deals 30 damage to itself.",
    },
    lore: {
      id: "Wujud Babi Ngepet yang sudah meninggalkan seluruh kemanusiaannya.",
      en: "Wujud Babi Ngepet yang sudah meninggalkan seluruh kemanusiaannya.",
    },
    roleTag: "Kartu Karakter • Wujud 3",
  },
  {
    id: "mbok-sumi",
    code: "BN-04",
    name: "Mbok Sumi",
    svgPath: "/cards/Mbok%20Sumi.svg",
    elementIcon: "/cards/Dark%20Element.svg",
    faction: "Babi Ngepet",
    type: "Kartu Karakter",
    wujud: "Basic",
    hp: 50,
    passiveName: "Mendukung",
    passiveDesc: {
      id: "Selama Mbok Sumi ada di Cadangan, Pak Karta dapat berubah wujud menjadi apa pun.",
      en: "While Mbok Sumi is in the Reserve (Cadangan), Pak Karta can transform into any form.",
    },
    effect: {
      id: "Pasif — Mendukung: Selama Mbok Sumi ada di Cadangan, Pak Karta dapat berubah wujud menjadi apa pun.",
      en: "Passive — Mendukung: While Mbok Sumi is in the Reserve (Cadangan), Pak Karta can transform into any form.",
    },
    lore: {
      id: "Mbok Sumi adalah istri dari Pak Karta yang ditugaskan untuk menjaga lilin yang digunakan untuk perubahan wujud Pak Karta.",
      en: "Mbok Sumi adalah istri dari Pak Karta yang ditugaskan untuk menjaga lilin yang digunakan untuk perubahan wujud Pak Karta.",
    },
    roleTag: "Kartu Karakter • Basic",
  },
  {
    id: "tumbal-anak",
    code: "BN-05",
    name: "Tumbal Anak",
    svgPath: "/cards/Anak.svg",
    elementIcon: "/cards/Dark%20Element.svg",
    faction: "Babi Ngepet",
    type: "Kartu Item",
    effect: {
      id: "Serangan Babi Ngepet selanjutnya pasti mencuri energi",
      en: "Babi Ngepet's next attack is guaranteed to steal energy.",
    },
    lore: {
      id: "Anak Pak Karta yang menerima tumbal aksi pencuriannya demi memperoleh kekayaan.",
      en: "Anak Pak Karta yang menerima tumbal aksi pencuriannya demi memperoleh kekayaan.",
    },
    roleTag: "Kartu Item • Sisi Babi Ngepet",
  },
  {
    id: "warga-desa",
    code: "WG-01",
    name: "Warga Desa",
    svgPath: "/cards/Warga%20Evo%201.svg",
    elementIcon: "/cards/Fire%20Element.svg",
    faction: "Warga",
    type: "Kartu Karakter",
    wujud: "Wujud 1",
    hp: 150,
    skillName: "Serang Balik",
    damage: 30,
    effect: {
      id: "Serang Balik (30 Damage).",
      en: "Serang Balik (30 Damage).",
    },
    lore: {
      id: "Warga desa hidup sederhana dalam kebersamaan. Bagi mereka, hari esok hanyalah tentang melanjutkan hidup seperti biasa.",
      en: "Warga desa hidup sederhana dalam kebersamaan. Bagi mereka, hari esok hanyalah tentang melanjutkan hidup seperti biasa.",
    },
    roleTag: "Kartu Karakter • Wujud 1 (Basic)",
  },
  {
    id: "pasukan-obor",
    code: "WG-02",
    name: "Pasukan Obor",
    svgPath: "/cards/Warga%20Evo%202.svg",
    elementIcon: "/cards/Fire%20Element.svg",
    faction: "Warga",
    type: "Kartu Karakter",
    wujud: "Wujud 2",
    hp: 200,
    skillName: "Obor Api",
    damage: 45,
    effect: {
      id: "Obor Api (45 Damage): Dapatkan 1 energi.",
      en: "Obor Api (45 Damage): Gain 1 energy.",
    },
    lore: {
      id: "Warga desa merasakan pencurian sedang terjadi di desa mereka, obor-obor api mulai menyala di malam hari.",
      en: "Warga desa merasakan pencurian sedang terjadi di desa mereka, obor-obor api mulai menyala di malam hari.",
    },
    roleTag: "Kartu Karakter • Wujud 2",
  },
  {
    id: "amukan-warga",
    code: "WG-03",
    name: "Amukan Warga",
    svgPath: "/cards/Warga%20Evo%203.svg",
    elementIcon: "/cards/Fire%20Element.svg",
    faction: "Warga",
    type: "Kartu Karakter",
    wujud: "Wujud 3",
    hp: 220,
    passiveName: "Amarah",
    passiveDesc: {
      id: "Menyembuhkan darah sebanyak 20 HP setiap giliran.",
      en: "Heals 20 HP every turn.",
    },
    skillName: "Balas Dendam",
    damage: 75,
    effect: {
      id: "Balas Dendam (75 Damage): Serangan ini juga memberikan 20 damage kepada Mbok Sumi di Cadangan lawan.",
      en: "Balas Dendam (75 Damage): This attack also deals 20 damage to Mbok Sumi in the opponent's Reserve (Cadangan).",
    },
    lore: {
      id: "Warga desa telah menemukan pelaku pencurian di desa mereka dan siap untuk menyerang pelaku tersebut.",
      en: "Warga desa telah menemukan pelaku pencurian di desa mereka dan siap untuk menyerang pelaku tersebut.",
    },
    roleTag: "Kartu Karakter • Wujud 3",
  },
  {
    id: "kucing-liar",
    code: "WG-04",
    name: "Kucing Liar",
    svgPath: "/cards/Kucing.svg",
    elementIcon: "/cards/Fire%20Element.svg",
    faction: "Warga",
    type: "Kartu Item",
    damage: 40,
    effect: {
      id: "Menyerang Mbok Sumi yang berada dalam Cadangan lawan sebanyak 40 damage.",
      en: "Attacks Mbok Sumi in the opponent's Reserve (Cadangan) for 40 damage.",
    },
    lore: {
      id: "Wujud Babi Ngepet yang sudah meninggalkan seluruh kemanusiaannya.",
      en: "Wujud Babi Ngepet yang sudah meninggalkan seluruh kemanusiaannya.",
    },
    roleTag: "Kartu Item • Sisi Warga",
  },
  {
    id: "purnama-jumat-legi",
    code: "WG-05",
    name: "Purnama Jumat Legi",
    svgPath: "/cards/Punarma.svg",
    elementIcon: "/cards/Fire%20Element.svg",
    faction: "Warga",
    type: "Kartu Item",
    damage: 50,
    effect: {
      id: "Menaikkan serangan Warga berikutnya sebanyak 50 damage. Kartu ini hanya dapat digunakan ketika Babi Ngepet berada didalam slot aktif lawan.",
      en: "Increases the next Warga attack by 50 damage. Can only be used when Babi Ngepet is in the opponent's Active slot.",
    },
    lore: {
      id: "Malam jumat legi dimana Pak Karta menerima konsekuensi aksi pencuriannya.",
      en: "Malam jumat legi dimana Pak Karta menerima konsekuensi aksi pencuriannya.",
    },
    roleTag: "Kartu Item • Sisi Warga",
  },
];
