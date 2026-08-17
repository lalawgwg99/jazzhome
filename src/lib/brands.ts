export type BrandTier = "flagship_japan" | "smart_korean" | "value_taiwan";
export type AcType = "split" | "window" | "both";

export interface BrandInfo {
  id: string;
  name: string;
  chineseName: string;
  tier: BrandTier;
  tierLabel: string;
  tierColor: { bg: string; text: string; border: string };
  logoText: string;
  origin: string;
  warranty: { compressor: string; allParts: string };
  typesSupported: AcType;
  splitSeries: { name: string; level: string; feature: string }[];
  windowSeries?: { name: string; feature: string }[];
  pros: string[];
  cons: string[];
  bestFor: string;
  marketPriceRange: string;
  cspfRating: string;
}

export const AC_BRANDS: BrandInfo[] = [
  {
    id: "daikin",
    name: "Daikin",
    chineseName: "大金空調",
    tier: "flagship_japan",
    tierLabel: "日系旗艦",
    tierColor: { bg: "bg-[#0071E3]/10", text: "text-[#0071E3]", border: "border-[#0071E3]/20" },
    logoText: "DAIKIN",
    origin: "泰國 / 馬來西亞 (日本技術)",
    warranty: { compressor: "10年", allParts: "7年" },
    typesSupported: "split",
    splitSeries: [
      { name: "橫綱 V 系列 (RXV)", level: "頂級旗艦", feature: "溫濕雙控 (Hybrid Cooling)、閃流放電抑菌、極低頻運轉 19dB" },
      { name: "大關 V 系列 (FTXV)", level: "中高階款", feature: "3D 氣流、防霉運轉、一級能效高 CSPF" },
      { name: "經典 V 系列 (RKV)", level: "入門變頻", feature: "搖擺式壓縮機、基本恆溫靜音、小資進口首選" },
    ],
    pros: ["溫濕雙控體感不濕冷", "低頻運轉極度穩定", "室內機運轉極安靜 (19dB)"],
    cons: ["室外機體積較大，陽台需量空間", "售價偏中高", "無窗型機種"],
    bestFor: "淺眠怕吵臥室、極度重視體感溫濕度與舒適度的家庭",
    marketPriceRange: "$26,000 ～ $68,000+",
    cspfRating: "1級能效 (CSPF 最高 6.88)",
  },
  {
    id: "panasonic",
    name: "Panasonic",
    chineseName: "國際牌",
    tier: "flagship_japan",
    tierLabel: "日系旗艦",
    tierColor: { bg: "bg-[#0071E3]/10", text: "text-[#0071E3]", border: "border-[#0071E3]/20" },
    logoText: "Panasonic",
    origin: "台灣組裝 (原廠關鍵零件)",
    warranty: { compressor: "10年", allParts: "7年" },
    typesSupported: "both",
    splitSeries: [
      { name: "RX 頂級旗艦系列", level: "頂級旗艦", feature: "nanoeX 48兆微粒子、乾燥防霉自體淨、極致 CSPF 能效" },
      { name: "UX 旗艦系列", level: "中高階款", feature: "nanoeX 抑菌除臭、銀離子抗菌濾網、內建智慧 APP" },
      { name: "QX / LJ 精緻系列", level: "國民熱銷", feature: "一級能效、基本乾燥防霉、全台銷量冠軍" },
    ],
    windowSeries: [
      { name: "CW 變頻窗型系列", feature: "一級能效變頻窗型、右吹/左吹齊全、nanoeX 抑菌" },
      { name: "CW 定頻窗型系列", feature: "耐操耐用、租屋與傳統老屋窗型孔專用" },
    ],
    pros: ["CSPF 省電能效市場頂尖", "全台灣維修據點最多、叫修最快", "分離式與窗型選擇最齊全"],
    cons: ["部分入門款需注意出風風切聲調校", "外型較為標準大眾化"],
    bestFor: "重視長期省電電費、過敏體質家庭、全台各縣市售後維修便利首選",
    marketPriceRange: "$22,000 ～ $62,000",
    cspfRating: "1級能效 (CSPF 最高 7.42)",
  },
  {
    id: "hitachi",
    name: "Hitachi",
    chineseName: "日立冷氣",
    tier: "flagship_japan",
    tierLabel: "日系旗艦",
    tierColor: { bg: "bg-[#0071E3]/10", text: "text-[#0071E3]", border: "border-[#0071E3]/20" },
    logoText: "HITACHI",
    origin: "台灣組裝 / 日本原裝 (特定旗艦)",
    warranty: { compressor: "10年", allParts: "7年" },
    typesSupported: "both",
    splitSeries: [
      { name: "尊榮系列 (NX/RX)", level: "頂級旗艦", feature: "凍結洗淨 3.0+ (熱烘除菌)、銅管防腐蝕、日本製壓縮機" },
      { name: "頂級系列 (NK/RK)", level: "中高階款", feature: "凍結洗淨 2.0、體感舒適科技、防霉風扇" },
      { name: "旗艦 / 標準系列", level: "國民熱賣", feature: "一級能效變頻、成熟耐用、在地經銷指名度高" },
    ],
    windowSeries: [
      { name: "RA 變頻雙吹/側吹窗型", feature: "一級能效變頻窗型、雙吹廣角送風、自體防霉" },
      { name: "RA 定頻窗型系列", feature: "超耐操金屬外殼、租屋套房熱門" },
    ],
    pros: ["凍結洗淨熱烘技術成熟", "台灣深耕多年，老師傅最熟悉好修", "窗型變頻機種選擇多元"],
    cons: ["高階系列價格與進口大金相當", "選購需分清頂級款與入門款用料差異"],
    bestFor: "長輩最信賴品牌、重視鰭片自動清潔除霉、窗型冷氣升級變頻者",
    marketPriceRange: "$24,000 ～ $65,000",
    cspfRating: "1級能效 (CSPF 最高 7.15)",
  },
  {
    id: "mitsubishi_heavy",
    name: "Mitsubishi Heavy",
    chineseName: "三菱重工",
    tier: "flagship_japan",
    tierLabel: "日系旗艦",
    tierColor: { bg: "bg-[#0071E3]/10", text: "text-[#0071E3]", border: "border-[#0071E3]/20" },
    logoText: "MHI",
    origin: "泰國 (日本原廠重工技術)",
    warranty: { compressor: "15年", allParts: "7年" },
    typesSupported: "split",
    splitSeries: [
      { name: "ZSXT 旗艦系列", level: "頂級旗艦", feature: "JET 航太噴射氣流、3D Auto 廣角、送風達 17 米、極致能效" },
      { name: "ZST 經典系列", level: "中高階款", feature: "航太氣流科技、快速冷房、耐操耐用" },
      { name: "ZRT 大坪數專用", level: "商用/大客廳", feature: "大風量長距送風、超大空間秒涼" },
    ],
    pros: ["超長距離噴射送風 (12~17m)", "冷房降溫速度市場第一", "重工業級壓縮機極度耐操 (保固15年)"],
    cons: ["一般大賣場較少展示，以專門經銷商為主", "無窗型機種", "售價偏高階"],
    bestFor: "長型客餐廳、挑高大坪數客廳、追求快速冷房與工業級耐用度者",
    marketPriceRange: "$28,000 ～ $72,000+",
    cspfRating: "1級能效 (CSPF 最高 7.20)",
  },
  {
    id: "fujitsu",
    name: "Fujitsu",
    chineseName: "富士通",
    tier: "flagship_japan",
    tierLabel: "日系旗艦",
    tierColor: { bg: "bg-[#0071E3]/10", text: "text-[#0071E3]", border: "border-[#0071E3]/20" },
    logoText: "FUJITSU",
    origin: "泰國 / 中國 (日本富士通技術)",
    warranty: { compressor: "10年", allParts: "7年" },
    typesSupported: "split",
    splitSeries: [
      { name: "nocria Z 系列", level: "頂級旗艦", feature: "自動濾網打掃機器人、雙重加熱除菌、熱交換器洗淨" },
      { name: "nocria X 系列", level: "頂級雙吹", feature: "左右側置雙氣流風扇、室內無溫差死角" },
      { name: "優級 / 美級系列", level: "超值變頻", feature: "一級能效、小巧機身、靜音運轉" },
    ],
    pros: ["獨家自動清濾網機器人 (nocria Z)", "左右側吹雙風扇專利 (nocria X)", "全機保固條款誠意充足"],
    cons: ["旗艦款機身較厚實", "在台市佔率略低於大金日立國際"],
    bestFor: "懶得手動洗濾網、重視客廳無死角對流氣流的科技族群",
    marketPriceRange: "$23,000 ～ $60,000",
    cspfRating: "1級能效 (CSPF 最高 6.80)",
  },
  {
    id: "lg",
    name: "LG",
    chineseName: "台灣樂金",
    tier: "smart_korean",
    tierLabel: "韓系智慧",
    tierColor: { bg: "bg-[#5856D6]/10", text: "text-[#5856D6]", border: "border-[#5856D6]/20" },
    logoText: "LG",
    origin: "泰國 / 韓國 (LG 雙迴轉壓縮機)",
    warranty: { compressor: "10年 (雙迴轉變頻)", allParts: "7年" },
    typesSupported: "split",
    splitSeries: [
      { name: "DUALCOOL 頂級 WiFi (UV抑菌)", level: "頂級智慧", feature: "雙迴轉壓縮機省電 70%、UVnano 紫外線殺菌、LG ThinQ App" },
      { name: "DUALCOOL 豪華客廳款", level: "中高階款", feature: "快速冷房、四段省電模式、安靜低震動" },
      { name: "DUALCOOL 經典系列", level: "美型入門", feature: "極簡純白外觀、內建 WiFi 遠端開關機" },
    ],
    pros: ["ThinQ 智慧家電生態整合最好 (手機隨時開冷氣)", "外觀美型俐落現代感", "雙迴轉壓縮機省電降噪表現優異"],
    cons: ["傳統冷氣師傅對韓系電路較不熟悉", "無窗型機種"],
    bestFor: "智慧家庭愛好者、裝潢重視極簡美感、習慣回家前先開冷氣者",
    marketPriceRange: "$24,000 ～ $55,000",
    cspfRating: "1級能效 (CSPF 最高 6.70)",
  },
  {
    id: "heran",
    name: "Heran",
    chineseName: "禾聯家電",
    tier: "value_taiwan",
    tierLabel: "台灣國民首選",
    tierColor: { bg: "bg-[#10B981]/10", text: "text-[#059669]", border: "border-[#10B981]/20" },
    logoText: "HERAN",
    origin: "台灣組裝",
    warranty: { compressor: "10年", allParts: "7年" },
    typesSupported: "both",
    splitSeries: [
      { name: "GF / SK 頂級變頻系列", level: "頂級一級", feature: "一級能效、沼氣防護塗層、自體防霉、芬多精清淨" },
      { name: "GA / GP 國民熱賣款", level: "實惠變頻", feature: "高性價比、抗沼氣防鏽、全台銷量龐大" },
    ],
    windowSeries: [
      { name: "HW 變頻窗型冷暖/單冷", feature: "台灣窗型市佔霸主、右吹左吹雙吹齊全、一級變頻超省電" },
      { name: "HW 定頻超值窗型", feature: "出租套房專用、價格極親民、安裝簡便" },
    ],
    pros: ["性價比無敵 (同 kW 比日系便宜 1~2 萬)", "窗型冷氣規格與機型全台最齊全", "全機抗沼氣防腐蝕塗層適合台灣潮濕環境"],
    cons: ["壓縮機運轉聲與精緻度不及日系高階款", "內裝塑料質感較為一般"],
    bestFor: "房東租屋套房、小資成家、預算有限且需汰舊換新補助 5,000 元者",
    marketPriceRange: "$14,000 ～ $38,000",
    cspfRating: "1級能效 (CSPF 最高 6.20)",
  },
  {
    id: "teco",
    name: "TECO",
    chineseName: "東元家電",
    tier: "value_taiwan",
    tierLabel: "台灣老字號",
    tierColor: { bg: "bg-[#10B981]/10", text: "text-[#059669]", border: "border-[#10B981]/20" },
    logoText: "TECO",
    origin: "台灣組裝 (東元重電馬達背景)",
    warranty: { compressor: "10年", allParts: "7年" },
    typesSupported: "both",
    splitSeries: [
      { name: "HS 頂級旗艦系列", level: "頂級一級", feature: "CSPF 超一級能效、燦金防鏽鋁鰭片、自體淨防霉" },
      { name: "GA / HS2 國民系列", level: "熱銷變頻", feature: "重電馬達耐操、藍波防鏽、性價比極高" },
    ],
    windowSeries: [
      { name: "MW 變頻一級窗型", feature: "東元馬達耐操、變頻省電、窗型冷暖" },
      { name: "MW 定頻窗型系列", feature: "結構耐用單純、出租房首選" },
    ],
    pros: ["東元重電馬達背景，核心組件耐操", "全台維修體系成熟", "價格平實，補助後極為划算"],
    cons: ["外觀設計較為傳統保守", "極低頻溫控微調細膩度略遜日系一線"],
    bestFor: "重視耐用馬達、老家客廳更換、支持台灣本土老牌製造者",
    marketPriceRange: "$15,000 ～ $40,000",
    cspfRating: "1級能效 (CSPF 最高 6.30)",
  },
  {
    id: "sampo",
    name: "SAMPO",
    chineseName: "聲寶家電",
    tier: "value_taiwan",
    tierLabel: "台灣國民老牌",
    tierColor: { bg: "bg-[#10B981]/10", text: "text-[#059669]", border: "border-[#10B981]/20" },
    logoText: "SAMPO",
    origin: "台灣組裝",
    warranty: { compressor: "10年", allParts: "7年" },
    typesSupported: "both",
    splitSeries: [
      { name: "PF / NF 旗艦系列", level: "頂級一級", feature: "Pico Pure 水離子抑菌、防鏽塗層、一級能效變頻" },
      { name: "PC / NC 菁英系列", level: "國民熱賣", feature: "全機強化防鏽、快速冷房、價格親民" },
    ],
    windowSeries: [
      { name: "AW 變頻/定頻窗型系列", feature: "左右雙吹、全機防鏽、傳統孔洞無痛升級" },
    ],
    pros: ["全省服務站密集、叫修容易", "價格實惠親民", "窗型與分離式皆有一級能效補助款"],
    cons: ["高風速時風切聲略明顯", "高階科技功能不如日系新潮"],
    bestFor: "中小家庭換機、長輩房、預算 2 萬元左右追求耐用一級能效者",
    marketPriceRange: "$14,500 ～ $39,000",
    cspfRating: "1級能效 (CSPF 最高 6.15)",
  },
  {
    id: "chimei",
    name: "CHIMEI",
    chineseName: "奇美家電",
    tier: "value_taiwan",
    tierLabel: "台灣美型超值",
    tierColor: { bg: "bg-[#10B981]/10", text: "text-[#059669]", border: "border-[#10B981]/20" },
    logoText: "CHIMEI",
    origin: "台灣組裝",
    warranty: { compressor: "10年", allParts: "7年" },
    typesSupported: "split",
    splitSeries: [
      { name: "星鑽 / 星爵系列", level: "美型旗艦", feature: "全直流變頻、一級節能、自體防霉、金鋁防腐蝕" },
      { name: "極光系列", level: "超值入門", feature: "簡約時尚外觀、靜音舒眠、CSPF 1 級能效" },
    ],
    pros: ["面板外觀設計年輕時尚", "價格透明親民", "全機防鏽塗層適應台灣海島氣候"],
    cons: ["無窗型機種", "冷氣產品線相比電視較新，經銷安裝點較集中"],
    bestFor: "年輕首購族、重視機身外觀顏值、預算導向的一級能效分離式冷氣",
    marketPriceRange: "$15,000 ～ $37,000",
    cspfRating: "1級能效 (CSPF 最高 6.25)",
  },
];

export function getBrandById(id: string): BrandInfo | undefined {
  return AC_BRANDS.find((b) => b.id === id);
}

export function getBrandsByType(type: "split" | "window"): BrandInfo[] {
  if (type === "split") {
    return AC_BRANDS.filter((b) => b.typesSupported === "split" || b.typesSupported === "both");
  }
  return AC_BRANDS.filter((b) => b.typesSupported === "window" || b.typesSupported === "both");
}
