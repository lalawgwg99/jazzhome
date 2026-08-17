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
    description: "輸入房間坪數、頂樓、西曬與空間特性，精準試算建議冷房能力（kW/噸數）與 CSPF 能效選購指引。",
    category: "air-conditioner",
    icon: "❄️",
    badge: "熱門工具",
    summary: "空間坪數 × 環境係數試算",
  },
  {
    slug: "ac-install-checklist",
    name: "冷氣安裝避坑檢核表",
    shortName: "安裝檢核",
    description: "購前確認、安裝當日、完工驗收 10 大施工核心查核清單。第一線現場避坑，可逐項核對並複製。",
    category: "air-conditioner",
    icon: "🔧",
    badge: "必備清單",
    summary: "室外機散熱、排水走管、驗收核對",
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
  {
    slug: "refrigerator-calculator",
    name: "冰箱容量與格局試算器",
    shortName: "冰箱容量",
    description: "依同住人數、開伙備餐習慣與廚房門寬動線，計算建議公升數（L）與多門/對開格局配置。",
    category: "refrigerator",
    icon: "🧊",
    badge: "新品上線",
    summary: "人口數 × 備餐習慣 × 門寬進場",
  },
  {
    slug: "washing-machine-calculator",
    name: "洗衣機容量與洗脫烘決策器",
    shortName: "洗衣機決策",
    description: "依家庭人數、被單清洗頻率、陽台通風環境，評估建議公斤數（kg）及直立變頻 vs 滾筒洗脫烘選擇。",
    category: "washing-machine",
    icon: "🫧",
    badge: "新品上線",
    summary: "洗量公斤數 × 洗脫烘 vs 直立式",
  },
];

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}

export function getToolsByCategory(category: CategorySlug): Tool[] {
  return tools.filter((t) => t.category === category);
}
