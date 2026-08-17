export interface Tool {
  slug: string;
  name: string;
  description: string;
  category: "air-conditioner" | "tv";
  icon: string;
}

export const tools: Tool[] = [
  {
    slug: "ac-install-checklist",
    name: "冷氣安裝避坑檢核表",
    description: "購買前、安裝當天、驗收後 7 項必查。第一線實務整理，逐項勾選。",
    category: "air-conditioner",
    icon: "🔧",
  },
  {
    slug: "ac-calculator",
    name: "冷氣坪數計算器",
    description: "輸入房間坪數、樓層與西曬條件，估算建議冷氣噸數。",
    category: "air-conditioner",
    icon: "❄️",
  },
  {
    slug: "tv-distance",
    name: "電視觀看距離計算器",
    description: "依客廳深度或電視吋數，計算最適合的觀看距離與尺寸。",
    category: "tv",
    icon: "📺",
  },
];

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}
