export type BrandTier = "flagship_japan" | "smart_korean" | "value_taiwan";
export type AcType = "split" | "window" | "both";

export interface BrandInfo {
  id: string;
  name: string;
  chineseName: string;
  currentGenTag: string; // 2025/2026 現行最新世代標籤
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
  verifiedDate: string;
}

export const AC_BRANDS: BrandInfo[] = [
  {
    id: "daikin",
    name: "Daikin",
    chineseName: "大金空調",
    currentGenTag: "2025/2026 最新世代 (橫綱Z/Y世代)",
    tier: "flagship_japan",
    tierLabel: "日系頂級旗艦",
    tierColor: { bg: "bg-[#0071E3]/10", text: "text-[#0071E3]", border: "border-[#0071E3]/20" },
    logoText: "DAIKIN",
    origin: "泰國 / 馬來西亞 (日本大金原廠技術)",
    warranty: { compressor: "10年", allParts: "7年" },
    typesSupported: "split",
    splitSeries: [
      { name: "橫綱 Z 系列 (RXM-Z) / 橫綱 Y 系列", level: "頂級旗艦", feature: "現行最新旗艦（取代舊橫綱X/V）。溫濕雙控 (Hybrid Cooling)、閃流放電主動除菌、康達效應氣流、19dB 極低頻靜音運轉" },
      { name: "大關 Z 系列 (FTXM-Z) / 大關 U 系列", level: "中高階主力", feature: "搭載閃流放電、3D 立體氣流、一級能效高 CSPF、性價比極高" },
      { name: "經典 Z 系列 / 經典 V 系列", level: "超值入門", feature: "航太搖擺式壓縮機、基本恆溫靜音、大金進口變頻門檻款" },
    ],
    pros: ["溫濕雙控 (冷房除濕同時維持舒適溫度，夏天不濕黏)", "低頻運轉極度穩定，無起停溫差", "夜間極致靜音僅 19dB (臥室首選)"],
    cons: ["室外機體積與寬度偏大，陽台需預留安裝空間", "定價偏高", "無窗型機種 (僅分離式與多聯式)"],
    bestFor: "淺眠怕吵臥室、極度重視體感溫濕度與恆溫舒適度的家庭",
    marketPriceRange: "$28,000 ～ $72,000+",
    cspfRating: "1級能效 (CSPF 最高達 7.00+)",
    verifiedDate: "2026年最新型錄核實",
  },
  {
    id: "panasonic",
    name: "Panasonic",
    chineseName: "國際牌",
    currentGenTag: "2025/2026 最新世代 (VX極致旗艦 / UJ新精緻)",
    tier: "flagship_japan",
    tierLabel: "日系頂級旗艦",
    tierColor: { bg: "bg-[#0071E3]/10", text: "text-[#0071E3]", border: "border-[#0071E3]/20" },
    logoText: "Panasonic",
    origin: "台灣組裝製造 (原廠核心零件)",
    warranty: { compressor: "10年", allParts: "7年" },
    typesSupported: "both",
    splitSeries: [
      { name: "VX 極致旗艦系列 (2025/2026 最新頂級)", level: "頂級旗艦", feature: "最新世代旗艦（UX進階版）。離線智能聲控 (免WiFi直接講話操作)、舒適冷房濕度 60% 控制、動態彩色 LCM 液晶濕度面板、nanoe™ X 48兆微粒子" },
      { name: "UX 高效旗艦系列", level: "高階旗艦", feature: "CSPF 能效市場頂尖、nanoe™ X 抑菌、新增 14kW/16kW 大坪數機種" },
      { name: "UJ 精緻系列 (取代舊LJ/QX系列)", level: "國民熱銷", feature: "2025/2026 全新升級款！全面導入 nanoe™ X、24小時防霉監控、銀離子水盤、全新質感外觀" },
      { name: "K 標準系列", level: "入門實用", feature: "一級能效、基本自體淨防霉、預算首選" },
    ],
    windowSeries: [
      { name: "CW-R / CW-P 變頻一級窗型系列", feature: "一級能效變頻窗型、nanoe™ X 抑菌、左吹/右吹/雙吹規格齊全" },
      { name: "CW-N 定頻窗型系列", feature: "傳統老屋孔洞專用、超耐操金屬機身" },
    ],
    pros: ["CSPF 省電能效全台頂尖 (年省電費極高)", "全台灣維修服務站最多、零件齊全叫修最快", "分離式與窗型冷氣規格最完整"],
    cons: ["部分入門款需注意出風風切聲調校", "外觀較為大眾化"],
    bestFor: "重視省電電費、過敏兒家庭、重視全台售後維修極速便利者",
    marketPriceRange: "$23,000 ～ $68,000",
    cspfRating: "1級能效 (CSPF 最高 7.42 全台前段班)",
    verifiedDate: "2026年最新型錄核實",
  },
  {
    id: "hitachi",
    name: "Hitachi",
    chineseName: "日立冷氣",
    currentGenTag: "2025/2026 最新世代 (凍結洗淨3.0+ / iWarm暖房)",
    tier: "flagship_japan",
    tierLabel: "日系頂級旗艦",
    tierColor: { bg: "bg-[#0071E3]/10", text: "text-[#0071E3]", border: "border-[#0071E3]/20" },
    logoText: "HITACHI",
    origin: "台灣組裝 (日本製核心壓縮機) / 日本原裝 (特定機型)",
    warranty: { compressor: "10年", allParts: "7年" },
    typesSupported: "both",
    splitSeries: [
      { name: "尊榮系列 (RAS-NK/PK 世代)", level: "頂級旗艦", feature: "凍結洗淨 3.0⁺ (室內外機油污加熱軟化+電離淨化)、iWarm 智控暖房 (-5℃~24℃)、iDry 智控除濕、AI 雲端三段省電 APP" },
      { name: "頂級系列 (RAS-QK 世代)", level: "高階款", feature: "自動開闔面板、凍結洗淨 2.0、日本製壓縮機、體感舒適科技" },
      { name: "旗艦系列 / 精品系列", level: "國民熱賣", feature: "固定面板、成熟耐用、在地經銷指名度極高" },
    ],
    windowSeries: [
      { name: "RA 變頻雙吹/側吹窗型 (一級能效)", feature: "一級能效變頻窗型、雙吹廣角送風、自體防霉" },
      { name: "RA 定頻耐操窗型系列", feature: "老舊公寓熱銷、金屬外殼極耐操" },
    ],
    pros: ["凍結洗淨 3.0+ 軟化油污自體清潔技術成熟", "台灣深耕多年，水電冷氣師傅最熟悉、好修耐用", "窗型變頻機種性能優異"],
    cons: ["尊榮旗艦系列定價與進口大金相當", "頂級與入門款產地與用料需注意區分"],
    bestFor: "長輩最信賴品牌、重視鋁鰭片自動清潔、老舊窗型孔升級變頻一級者",
    marketPriceRange: "$24,500 ～ $68,000",
    cspfRating: "1級能效 (CSPF 最高 7.15)",
    verifiedDate: "2026年最新型錄核實",
  },
  {
    id: "mitsubishi_heavy",
    name: "Mitsubishi Heavy",
    chineseName: "三菱重工",
    currentGenTag: "2025/2026 最新世代 (晴空ZST2 / 朝日ZTLT2)",
    tier: "flagship_japan",
    tierLabel: "日系頂級旗艦",
    tierColor: { bg: "bg-[#0071E3]/10", text: "text-[#0071E3]", border: "border-[#0071E3]/20" },
    logoText: "MHI",
    origin: "泰國 (日本原廠三菱重工航太技術)",
    warranty: { compressor: "15年 (業界最長)", allParts: "7年" },
    typesSupported: "split",
    splitSeries: [
      { name: "晴空系列 (ZST2 / ZSXT 頂級旗艦)", level: "頂級旗艦", feature: "JETFLOW 航太噴射氣流、3D Auto 廣角超長送風達 17 米、降溫速度市場第一、溫控極度精確" },
      { name: "朝日系列 (ZTLT2 經典變頻)", level: "中高階主力", feature: "變頻冷暖高能效、航太環流溫控、安靜耐操" },
      { name: "ZRT 大坪數專用系列", level: "大客廳/商用", feature: "大風量長距送風、客餐廳開放格局秒涼" },
    ],
    pros: ["超長距離噴射送風 (12~17m，狹長客餐廳首選)", "重工業級壓縮機極度耐操 (原廠保固達 15 年)", "冷房速度快，無死角對流"],
    cons: ["大賣場展示較少，以專業冷調經銷商為主", "無窗型機種", "售價偏中高階"],
    bestFor: "長型客餐廳、挑高大坪數客廳、追求快速均溫與超長壓縮機壽命者",
    marketPriceRange: "$28,500 ～ $75,000+",
    cspfRating: "1級能效 (CSPF 最高 7.20)",
    verifiedDate: "2026年最新型錄核實",
  },
  {
    id: "fujitsu",
    name: "Fujitsu / GENERAL",
    chineseName: "富士通 (日本將軍空調)",
    currentGenTag: "2025/2026 最新世代 (全機10年保固 / nocria Z)",
    tier: "flagship_japan",
    tierLabel: "日系頂級旗艦",
    tierColor: { bg: "bg-[#0071E3]/10", text: "text-[#0071E3]", border: "border-[#0071E3]/20" },
    logoText: "GENERAL",
    origin: "泰國 / 中國 (日本富士通將軍技術)",
    warranty: { compressor: "10年", allParts: "10年全機保固 (業界領先)" },
    typesSupported: "split",
    splitSeries: [
      { name: "nocria Z 旗艦系列", level: "頂級旗艦", feature: "自動濾網打掃機器人、世界初潔淨風科技、0.5℃ 精細微調溫、雙重加熱除菌" },
      { name: "nocria X 側吹雙氣流系列", level: "頂級雙吹", feature: "左右側置雙氣流獨立風扇、室內完全零溫差" },
      { name: "高級系列 / 優級系列 / 美級系列", level: "超值變頻", feature: "全線符合 2025/2026 最新 CSPF 能效、小巧美型機身" },
    ],
    pros: ["全機 10 年保固 (含主機板、馬達、零件，保障最強)", "nocria Z 獨家自動清潔濾網機器人", "0.5℃ 精密溫控體感細膩"],
    cons: ["旗艦款機身較厚實", "在台名稱自 2026 正式整合為『日本將軍空調』，部分舊經銷稱富士通"],
    bestFor: "懶得手動爬梯拆洗濾網、極度重視全機保固年限的消費者",
    marketPriceRange: "$23,000 ～ $62,000",
    cspfRating: "1級能效 (CSPF 最高 6.85)",
    verifiedDate: "2026年最新型錄核實",
  },
  {
    id: "lg",
    name: "LG",
    chineseName: "台灣樂金",
    currentGenTag: "2025/2026 最新世代 (DUALCOOL AI 2.0 / UVnano)",
    tier: "smart_korean",
    tierLabel: "韓系智慧",
    tierColor: { bg: "bg-[#5856D6]/10", text: "text-[#5856D6]", border: "border-[#5856D6]/20" },
    logoText: "LG",
    origin: "泰國 / 韓國 (LG 雙迴轉壓縮機)",
    warranty: { compressor: "10年 (雙迴轉變頻)", allParts: "7年" },
    typesSupported: "split",
    splitSeries: [
      { name: "DUALCOOL AI 2.0 (極智 / 極淨系列)", level: "頂級智慧", feature: "AI 氣流溫濕智控、AI 凍潔淨化、雙迴轉變頻壓縮機省電 70%、UVnano 紫外線殺菌、Plasmaster 800萬離子" },
      { name: "DUALCOOL 極適系列 / 極效系列", level: "中高階款", feature: "『舒適風+』柔和間接氣流避免直吹、四段能耗管理、LG ThinQ App 雲端操控" },
      { name: "DUALCOOL 經典 WiFi 系列", level: "美型入門", feature: "極簡現代純白面板、全系列標配 WiFi 遠端操控" },
    ],
    pros: ["LG ThinQ 智慧家電生態整合業界第一 (手機隨時看耗電開機)", "雙迴轉變頻壓縮機低震動且省電 70%", "極簡現代美型外觀，與現代裝潢百搭"],
    cons: ["部分老一輩冷氣師傅對韓系電路較不熟悉", "無窗型機種"],
    bestFor: "智慧家庭愛好者、重視裝潢外觀、習慣出門在外遠端開關冷氣者",
    marketPriceRange: "$24,000 ～ $56,000",
    cspfRating: "1級能效 (CSPF 最高 6.70)",
    verifiedDate: "2026年最新型錄核實",
  },
  {
    id: "heran",
    name: "Heran",
    chineseName: "禾聯家電",
    currentGenTag: "2025/2026 最新世代 (沼氣防護 2.0 / SL尊榮系列)",
    tier: "value_taiwan",
    tierLabel: "台灣國民首選",
    tierColor: { bg: "bg-[#10B981]/10", text: "text-[#059669]", border: "border-[#10B981]/20" },
    logoText: "HERAN",
    origin: "台灣組裝製造",
    warranty: { compressor: "10年", allParts: "7年" },
    typesSupported: "both",
    splitSeries: [
      { name: "SL 尊榮系列 (2025/2026 最新旗艦)", level: "頂級一級", feature: "高效沼氣防護 2.0 (抵抗排水管硫化氫腐蝕)、超越 2025/2026 新能效一級、芬多精清淨" },
      { name: "AT 奢華系列 / JT 旗艦系列", level: "熱銷變頻", feature: "耀金沼氣防護、R32 變頻一級能效、自體防霉" },
      { name: "GF / SK / GA 國民系列", level: "超值入門", feature: "全台銷量龐大、抗腐蝕防鏽、性價比極高" },
    ],
    windowSeries: [
      { name: "HW 變頻一級窗型系列 (全台窗型霸主)", feature: "台灣窗型市佔第一！右吹/左吹/雙吹規格最齊、一級能效變頻冷暖超省電" },
      { name: "HW 定頻超值窗型系列", feature: "出租套房專用、價格極親民、耐操易裝" },
    ],
    pros: ["性價比無敵 (同 kW 冷房能力比日系便宜 1~2 萬)", "窗型冷氣規格全台灣最齊全 (左吹右吹無死角)", "沼氣防護 2.0 特殊塗層，抗排水管沼氣鏽蝕最專業"],
    cons: ["高轉速時壓縮機運轉音與精緻度不及日系高階款", "內裝塑料質感較為一般"],
    bestFor: "房東租屋套房、小資成家、老屋窗型更換、預算有限想拿滿 5,000 元補助者",
    marketPriceRange: "$14,000 ～ $39,000",
    cspfRating: "1級能效 (CSPF 最高 6.25)",
    verifiedDate: "2026年最新型錄核實",
  },
  {
    id: "teco",
    name: "TECO",
    chineseName: "東元家電",
    currentGenTag: "2025/2026 最新世代 (HS8頂級變頻 / 燦金防鏽)",
    tier: "value_taiwan",
    tierLabel: "台灣老字號",
    tierColor: { bg: "bg-[#10B981]/10", text: "text-[#059669]", border: "border-[#10B981]/20" },
    logoText: "TECO",
    origin: "台灣組裝 (東元重電馬達技術)",
    warranty: { compressor: "10年", allParts: "7年" },
    typesSupported: "both",
    splitSeries: [
      { name: "HS8 頂級旗艦系列 (2025/2026 最新)", level: "頂級一級", feature: "R32 頂級變頻、CSPF 超一級能效、燦金防鏽鋁鰭片、自體淨除霉、馬達極致耐操" },
      { name: "HS / GA 系列", level: "國民熱賣", feature: "重電級馬達技術、藍波防鏽、性價比極高" },
    ],
    windowSeries: [
      { name: "MW 變頻一級窗型系列", feature: "東元耐用馬達、變頻一級省電、窗型冷暖" },
      { name: "MW 定頻耐操窗型", feature: "結構單純超耐用、老舊公寓首選" },
    ],
    pros: ["東元重電工業馬達背景，核心組件極度耐操", "全台灣維修體系成熟老牌", "定價平實，補助後取得成本極低"],
    cons: ["外觀設計較為傳統保守", "極低頻運轉微調細膩度略遜日系一線"],
    bestFor: "重視耐用度、老家更換、支持台灣本土重電製造品牌者",
    marketPriceRange: "$15,000 ～ $42,000",
    cspfRating: "1級能效 (CSPF 最高 6.35)",
    verifiedDate: "2026年最新型錄核實",
  },
  {
    id: "sampo",
    name: "SAMPO",
    chineseName: "聲寶家電",
    currentGenTag: "2025/2026 最新世代 (VF新經典 / 七大金級防鏽)",
    tier: "value_taiwan",
    tierLabel: "台灣國民老牌",
    tierColor: { bg: "bg-[#10B981]/10", text: "text-[#059669]", border: "border-[#10B981]/20" },
    logoText: "SAMPO",
    origin: "台灣組裝製造",
    warranty: { compressor: "10年", allParts: "7年" },
    typesSupported: "both",
    splitSeries: [
      { name: "VF 新經典系列 / JF 旗艦系列 (最新款)", level: "頂級一級", feature: "七大金級防鏽科技 (炫金散熱片 + U型銅管防鏽處理 + 控制盒保護)、Pico Pure 水離子抑菌、一級變頻冷暖" },
      { name: "PF / NF / PC 系列", level: "國民熱賣", feature: "全機強化防鏽、快速冷房、價格親民好入手" },
    ],
    windowSeries: [
      { name: "AW 變頻/定頻窗型系列", feature: "左右雙吹送風、七大防鏽保護、傳統孔洞無痛升級" },
    ],
    pros: ["七大金級防鏽技術，特別針對台灣海島高濕氣候保護", "全省服務站密集、叫修容易", "價格實惠親民"],
    cons: ["高風速運轉時風切聲略明顯", "高階科技功能不如日系新潮"],
    bestFor: "中小家庭換機、長輩房、預算 2 萬元左右追求耐用一級能效者",
    marketPriceRange: "$14,500 ～ $39,500",
    cspfRating: "1級能效 (CSPF 最高 6.20)",
    verifiedDate: "2026年最新型錄核實",
  },
  {
    id: "chimei",
    name: "CHIMEI",
    chineseName: "奇美家電",
    currentGenTag: "2025/2026 最新世代 (星鑽星爵 / 5重防鏽)",
    tier: "value_taiwan",
    tierLabel: "台灣美型超值",
    tierColor: { bg: "bg-[#10B981]/10", text: "text-[#059669]", border: "border-[#10B981]/20" },
    logoText: "CHIMEI",
    origin: "台灣組裝製造",
    warranty: { compressor: "10年", allParts: "7年" },
    typesSupported: "split",
    splitSeries: [
      { name: "星鑽系列 / 星爵系列", level: "美型旗艦", feature: "5 重防鏽效果 (耐腐蝕鍍鋅鋼板+粉體烤漆+陽極底盤+防潮電路漆)、全直流變頻、自體防霉" },
      { name: "極光系列 (RB-S / RC-S)", level: "超值入門", feature: "簡約時尚極窄面板、靜音舒眠模式、CSPF 1 級能效" },
    ],
    pros: ["面板外觀設計年輕時尚質感好", "價格透明親民", "5 重防鏽處理適應海島氣候防潮防蟲"],
    cons: ["無窗型機種 (僅分離式)", "冷氣線路經銷相較電視較為集中"],
    bestFor: "年輕首購族、重視冷氣機身外觀顏值、預算導向的一級能效分離式冷氣",
    marketPriceRange: "$15,000 ～ $38,000",
    cspfRating: "1級能效 (CSPF 最高 6.28)",
    verifiedDate: "2026年最新型錄核實",
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
