import type { CategorySlug } from "./categories";

export interface Tool {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  category: CategorySlug;
  icon: string;
  badge?: string;
  summary: string;
}

export const tools: Tool[] = [
  {
    slug: "ac-calculator",
    name: "冷氣坪數與噸數計算器",
    shortName: "冷氣噸數",
    description: "輸入房間實坪或長寬公尺、頂樓西曬加成，試算建議 kW 與 2026 補助退稅最高 5,000 元。",
    category: "air-conditioner",
    icon: "❄️",
    badge: "熱門工具",
    summary: "實坪/公尺換算 × 熱源加成 × 補助試算",
  },
  {
    slug: "ac-install-checklist",
    name: "冷氣安裝避坑與加價檢核表",
    shortName: "安裝檢核",
    description: "10 大施工避坑清單 + 台灣標準安裝現場加價收費行情表（銅管超長/洗洞/鐵架）。",
    category: "air-conditioner",
    icon: "🔧",
    badge: "必備行情",
    summary: "10大查核 × 現場加價行情表",
  },
  {
    slug: "ac-brand-matrix",
    name: "台灣十大冷氣品牌與型態選型庫",
    shortName: "品牌型態",
    description: "大金、國際、日立、富士通、LG、禾聯、東元、聲寶、三菱重工、奇美 10 大品牌分離式與窗型深度對照。",
    category: "air-conditioner",
    icon: "🏷️",
    badge: "10大品牌",
    summary: "分離式 vs 窗型 × 10大品牌規格速查",
  },
  {
    slug: "refrigerator-calculator",
    name: "冰箱容量與格局試算器",
    shortName: "冰箱容量",
    description: "依同住人數、好市多 Costco 大採購囤貨、廚房預留寬度，計算公升數與進門通道避坑。",
    category: "refrigerator",
    icon: "🧊",
    badge: "好市多必備",
    summary: "人口數 × Costco大冷凍 × 搬運動線",
  },
  {
    slug: "washing-machine-calculator",
    name: "洗衣機容量與選型決策器",
    shortName: "洗衣機決策",
    description: "依家庭人數、被單清洗頻率、陽台通風環境，評估建議公斤數（kg）及直立變頻 vs 滾筒洗脫烘選擇。",
    category: "washing-machine",
    icon: "🫧",
    badge: "公斤數試算",
    summary: "洗量公斤數 × 洗脫烘 vs 直立式",
  },
  {
    slug: "tv-distance",
    name: "電視觀看距離與尺寸計算器",
    shortName: "電視距離",
    description: "依客廳沙發深度或預計購買尺寸，計算 4K UHD 最佳沈浸觀賞距離（40° 視野）與日常視角範圍。",
    category: "tv",
    icon: "📺",
    summary: "客廳深度與 4K 最佳吋數對照",
  },
];

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}

export function getToolsByCategory(category: CategorySlug): Tool[] {
  return tools.filter((t) => t.category === category);
}
