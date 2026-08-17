export type CategorySlug = "air-conditioner" | "refrigerator" | "washing-machine" | "tv";

export interface Category {
  slug: CategorySlug;
  name: string;
  shortName: string;
  description: string;
  icon: string;
  keywords: string[];
  hubIntro: string;
}

export const categories: Category[] = [
  {
    slug: "air-conditioner",
    name: "冷氣",
    shortName: "冷氣",
    description: "變頻冷氣推薦、坪數計算、安裝與省電攻略",
    icon: "❄️",
    keywords: ["變頻冷氣", "冷氣坪數", "冷氣推薦", "分離式冷氣", "冷氣噸數"],
    hubIntro:
      "從坪數計算到變頻 vs 定頻，幫你選對冷氣噸數、看懂能效標章，夏天吹得涼又省電。",
  },
  {
    slug: "refrigerator",
    name: "冰箱",
    shortName: "冰箱",
    description: "容量選擇、對開 vs 上下門、省電冰箱推薦",
    icon: "🧊",
    keywords: ["冰箱推薦", "冰箱容量", "對開冰箱", "小冰箱", "變頻冰箱"],
    hubIntro:
      "依家庭人數選容量、比較對開與上下門優缺點，找到最適合你廚房與生活習慣的冰箱。",
  },
  {
    slug: "washing-machine",
    name: "洗衣機",
    shortName: "洗衣機",
    description: "滾筒 vs 直立、洗烘一體、容量與省水攻略",
    icon: "🫧",
    keywords: ["洗衣機推薦", "滾筒洗衣機", "洗烘一體", "10kg洗衣機", "洗衣機容量"],
    hubIntro:
      "滾筒還是直立？要不要烘衣？從容量、省水標章到常見故障，一次搞懂洗衣機選購。",
  },
  {
    slug: "tv",
    name: "電視",
    shortName: "電視",
    description: "尺寸選擇、OLED vs QLED、65吋電視推薦",
    icon: "📺",
    keywords: ["電視推薦", "65吋電視", "OLED", "QLED", "電視尺寸"],
    hubIntro:
      "看距離決定吋數、面板類型怎麼選，從小坪數到家庭劇院，找到最適合的電視。",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
