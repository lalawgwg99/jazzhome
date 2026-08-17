export type CategorySlug = "air-conditioner" | "refrigerator" | "washing-machine" | "tv";

export interface CategoryTheme {
  primary: string;
  bgLight: string;
  borderLight: string;
  badgeText: string;
  hoverGlow: string;
}

export interface Category {
  slug: CategorySlug;
  name: string;
  shortName: string;
  description: string;
  icon: string;
  keywords: string[];
  hubIntro: string;
  highlights: string[];
  theme: CategoryTheme;
}

export const categories: Category[] = [
  {
    slug: "air-conditioner",
    name: "冷氣空調",
    shortName: "冷氣",
    description: "變頻冷氣選購、坪數噸數計算、施工避坑與 2026 節能補助退稅",
    icon: "❄️",
    keywords: ["變頻冷氣", "冷氣坪數", "冷氣推薦", "分離式冷氣", "冷氣噸數", "冷氣安裝", "冷氣補助2026"],
    hubIntro:
      "從坪數噸數計算、西曬頂樓加成，到室外機散熱與排水防漏，幫你選對冷氣噸數，吹得涼爽又極度省電。",
    highlights: ["室內實坪 × 環境熱源加成", "2026 補助退稅最高 5,000 元", "室外機散熱與加價避坑"],
    theme: {
      primary: "#0071E3",
      bgLight: "bg-[#0071E3]/[0.08]",
      borderLight: "border-[#0071E3]/20",
      badgeText: "text-[#0071E3]",
      hoverGlow: "cat-glow-ac",
    },
  },
  {
    slug: "refrigerator",
    name: "電冰箱",
    shortName: "冰箱",
    description: "家庭人數容量換算、好市多大冷凍挑選、日系多門 vs 對開優劣",
    icon: "🧊",
    keywords: ["冰箱推薦", "冰箱容量", "好市多冰箱", "對開冰箱", "日系多門", "變頻冰箱", "冰箱退稅"],
    hubIntro:
      "依同住人數與好市多囤貨習慣計算公升數，比較日系多門、法式對開與上下雙門優劣，避開廚房門寬與散熱死角。",
    highlights: ["好市多大冷凍室容量換算", "日系多門 vs 法式對開對決", "大門與電梯進門尺寸檢核"],
    theme: {
      primary: "#5856D6",
      bgLight: "bg-[#5856D6]/[0.08]",
      borderLight: "border-[#5856D6]/20",
      badgeText: "text-[#5856D6]",
      hoverGlow: "cat-glow-fridge",
    },
  },
  {
    slug: "washing-machine",
    name: "洗衣機",
    shortName: "洗衣機",
    description: "滾筒 vs 直立式全方位對比、洗脫烘決策、被單公斤數推薦",
    icon: "🫧",
    keywords: ["洗衣機推薦", "滾筒洗衣機", "直立洗衣機", "洗脫烘一體", "熱泵乾衣機", "洗衣機容量"],
    hubIntro:
      "滾筒還是直立？洗脫烘還是獨立乾衣機？從洗淨力、衣物保護、用水量到陽台空間限制，一次搞懂洗衣機選購。",
    highlights: ["同住人數與床包公斤數試算", "洗脫烘 vs 熱泵乾衣實務分析", "陽台排水與水電規格避坑"],
    theme: {
      primary: "#00A3A6",
      bgLight: "bg-[#00A3A6]/[0.08]",
      borderLight: "border-[#00A3A6]/20",
      badgeText: "text-[#00A3A6]",
      hoverGlow: "cat-glow-washer",
    },
  },
  {
    slug: "tv",
    name: "智慧電視",
    shortName: "電視",
    description: "客廳觀看距離與 4K 黃金吋數、OLED / Mini-LED 面板選購全指南",
    icon: "📺",
    keywords: ["電視推薦", "65吋電視", "75吋電視", "OLED電視", "Mini-LED", "電視觀看距離"],
    hubIntro:
      "依沙發與電視牆距離科學計算最佳吋數，解析 OLED 極致純黑與 Mini-LED 高亮度抗反光差異，打造零疲勞觀影體驗。",
    highlights: ["THX 4K 劇院沉浸視野試算", "OLED vs Mini-LED 客廳採光選型", "壁掛 vs 電視櫃安裝注意事項"],
    theme: {
      primary: "#8644A2",
      bgLight: "bg-[#8644A2]/[0.08]",
      borderLight: "border-[#8644A2]/20",
      badgeText: "text-[#8644A2]",
      hoverGlow: "cat-glow-tv",
    },
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
