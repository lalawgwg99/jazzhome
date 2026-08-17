export type CategorySlug = "air-conditioner" | "refrigerator" | "washing-machine" | "tv";

export interface Category {
  slug: CategorySlug;
  name: string;
  shortName: string;
  description: string;
  icon: string;
  keywords: string[];
  hubIntro: string;
  highlights: string[];
}

export const categories: Category[] = [
  {
    slug: "air-conditioner",
    name: "冷氣空調",
    shortName: "冷氣",
    description: "變頻冷氣選購、坪數噸數計算、施工避坑與省電 CSPF 原廠實證",
    icon: "❄️",
    keywords: ["變頻冷氣", "冷氣坪數", "冷氣推薦", "分離式冷氣", "冷氣噸數", "冷氣安裝"],
    hubIntro:
      "從坪數噸數計算、西曬頂樓加成，到室外機散熱與排水防漏，幫你選對冷氣噸數，吹得涼爽又極度省電。",
    highlights: ["依坪數與環境試算噸數", "室外機散熱與排水檢核", "CSPF 省電能效真實驗證"],
  },
  {
    slug: "refrigerator",
    name: "電冰箱",
    shortName: "冰箱",
    description: "家庭人數容量換算、對開與多門格局比較、進場動線避坑",
    icon: "🧊",
    keywords: ["冰箱推薦", "冰箱容量", "對開冰箱", "多門冰箱", "小冰箱", "變頻冰箱"],
    hubIntro:
      "依同住人數與採買囤貨習慣計算公升數，比較日系多門、法式對開與上下雙門優劣，避開廚房門寬與散熱死角。",
    highlights: ["依人數與備餐習慣算公升數", "日系多門 vs 對開優缺點", "搬運進門通道寬度核算"],
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
    highlights: ["公斤數容量與床包清洗對照", "洗脫烘 vs 熱泵乾衣實務分析", "陽台水電與散熱空間規劃"],
  },
  {
    slug: "tv",
    name: "智慧電視",
    shortName: "電視",
    description: "觀看距離與 4K 最佳吋數、OLED / Mini-LED 面板特性、客廳劇院規劃",
    icon: "📺",
    keywords: ["電視推薦", "65吋電視", "75吋電視", "OLED電視", "Mini-LED", "電視觀看距離"],
    hubIntro:
      "依沙發與電視牆距離科學計算最佳吋數，解析 OLED 極致純黑與 Mini-LED 高亮度抗反光差異，打造零疲勞觀影體驗。",
    highlights: ["4K UHD 最佳視角深度試算", "OLED vs Mini-LED 面板選擇", "壁掛 vs 電視櫃安裝注意事項"],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
