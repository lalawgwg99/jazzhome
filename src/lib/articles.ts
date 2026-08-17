import type { CategorySlug } from "./categories";
import type { AffiliateProduct } from "./monetization";
import type { ArticleVerification } from "./trust";

export interface Article {
  slug: string;
  title: string;
  description: string;
  category: CategorySlug;
  keywords: string[];
  publishedAt: string;
  updatedAt?: string;
  readingMinutes: number;
  content: string[];
  affiliateProducts?: AffiliateProduct[];
  verification?: ArticleVerification;
}

export const articles: Article[] = [
  {
    slug: "air-conditioner-tonnage-guide",
    title: "冷氣坪數怎麼算？1 坪要幾噸冷氣一次搞懂",
    description:
      "用台灣常見坪數對照表，教你估算冷氣噸數。西曬、頂樓、開放式空間要加多少，附實用選購建議。",
    category: "air-conditioner",
    keywords: ["冷氣坪數", "冷氣噸數", "1坪幾噸冷氣", "冷氣容量"],
    publishedAt: "2026-08-01",
    readingMinutes: 6,
    verification: {
      levels: ["spec-verified", "field-tested"],
      specSource: "各品牌原廠型錄 CSPF / 噸數規格",
      lastVerified: "2026-08-01",
      note: "坪數估算法為台灣安裝實務常用公式，非業配文案。",
    },
    content: [
      "買冷氣最常問的就是「這個房間要幾噸？」台灣一般估算方式是：每坪約需 600 BTU，換算下來 1 坪約 0.05 噸（即 500 BTU/坪的簡化算法，實務常以 1 坪 = 0.05～0.06 噸估算）。",
      "例如 4 坪臥室，基礎需求約 2.0～2.4 噸（2 噸機種最常見）。若為頂樓、西曬嚴重或窗戶大，建議加 10%～20%。",
      "除了噸數，變頻與定頻、能效標章（CSPF 越高越省電）、室內機噪音與室外機位置也要一併考量。",
      "建議使用本站「冷氣坪數計算器」快速估算，再對照各品牌 2 噸、2.5 噸、3 噸機種規格做最終決定。",
    ],
    affiliateProducts: [
      {
        name: "日立 2 噸變頻冷氣（示例）",
        platform: "momo",
        url: process.env.NEXT_PUBLIC_AFFILIATE_MOMO ?? "",
        price: "依平台活動價為準",
        note: "2 噸 · 適合 3～4 坪",
      },
      {
        name: "國際 2 噸變頻冷氣（示例）",
        platform: "pchome",
        url: process.env.NEXT_PUBLIC_AFFILIATE_PCHOME ?? "",
        note: "CSPF 4 以上機種",
      },
    ],
  },
  {
    slug: "ac-install-pitfalls",
    title: "冷氣安裝 7 大避坑：排水、管線、保固必查項目",
    description:
      "第一線安裝實務整理。室外機位置、排水路徑、施工保固、紙本單據核對——業配文不會告訴你的現場細節。",
    category: "air-conditioner",
    keywords: ["冷氣安裝", "冷氣避坑", "冷氣施工", "冷氣排水"],
    publishedAt: "2026-08-17",
    readingMinutes: 8,
    verification: {
      levels: ["field-tested", "myth-busted"],
      lastVerified: "2026-08-17",
      note: "內容來自門市現場客訴與施工經驗，非網路拼凑。",
    },
    content: [
      "冷氣安裝最常出問題的不是機器本身，而是施工細節。以下 7 項是現場第一線最常遇到的坑，購買前和安裝當天都該確認。",
      "① 室外機散熱空間：左右各留 30 公分以上，前方不可遮擋。散熱不良會導致效率下降、壓縮機過早故障，且不在原廠保固範圍。",
      "② 排水路徑：冷凝水必須有明確排水方向，不可隨意滴在牆面或鄰居陽台。這是客訴第一名，安裝前就要確認走管方式。",
      "③ 管線長度：超過原廠規範的配管長度需補充冷媒，費用另計。簽約前確認室內外機距離，避免現場加價爭議。",
      "④ 保固範圍釐清：原廠保固（壓縮機、零件）和安裝商保固（施工品質）是兩回事，紙本單據上都要載明。",
      "⑤ 試機時間：安裝完成後至少試機 30 分鐘，確認冷房效果、遙控器功能、定時設定，不要師傅一走就簽名。",
      "⑥ 型號序號核對：室內外機型號必須與合約一致，保固卡上的序號拍照留存。",
      "⑦ 使用本站「冷氣安裝避坑檢核表」逐項勾選，複雜現場條件建議加 LINE 一對一評估。",
    ],
  },
  {
    slug: "inverter-vs-fixed-ac",
    title: "變頻冷氣 vs 定頻冷氣：省電差多少？怎麼選？",
    description:
      "變頻冷氣真的比較省電嗎？從 CSPF、使用習慣、初始售價到長期電費，完整比較兩種冷氣的優缺點。",
    category: "air-conditioner",
    keywords: ["變頻冷氣", "定頻冷氣", "CSPF", "冷氣省電"],
    publishedAt: "2026-08-05",
    readingMinutes: 7,
    verification: {
      levels: ["spec-verified", "myth-busted"],
      specSource: "經濟部能效標章 CSPF 數據",
      lastVerified: "2026-08-05",
      note: "破解「變頻一定省電」迷思，依使用時數判斷。",
    },
    content: [
      "變頻冷氣能依室溫調整壓縮機轉速，長時間運轉時通常比定頻更省電；定頻則是全開或全關，適合短時間使用、預算有限的情境。",
      "台灣能效標章以 CSPF（Cooling Seasonal Performance Factor）衡量，數值越高代表整季冷房效率越好。選購時優先挑 CSPF 4 以上機種。",
      "若每天開 8 小時以上、整季使用，變頻的電費優勢通常在 2～3 年回本；若只是偶爾開，定頻也可能夠用。",
    ],
  },
  {
    slug: "refrigerator-capacity-guide",
    title: "冰箱容量怎麼選？依家庭人數與生活習慣對照表",
    description:
      "2 人、4 人家庭該買幾公升冰箱？對開、上下門、三門款容量與佔空間比較，附選購 Checklist。",
    category: "refrigerator",
    keywords: ["冰箱容量", "冰箱公升", "冰箱推薦", "對開冰箱"],
    publishedAt: "2026-08-08",
    readingMinutes: 5,
    content: [
      "一般建議：單人 100～150L、兩人 200～300L、三口之家 300～400L、四人以上 400L 以上。常囤貨、愛料理者建議往上抓一階。",
      "對開冰箱視覺大氣、取放方便，但佔空間且部分機種能耗較高；上下門省空間、價格親民，適合小廚房。",
      "選購時量好門寬、通道深度，確認冰箱能順利進門；另外注意散熱空間（左右各留 5～10 公分較理想）。",
    ],
  },
  {
    slug: "washing-machine-drum-vs-top",
    title: "滾筒洗衣機 vs 直立洗衣機：優缺點完整比較",
    description:
      "滾筒真的比較省水？直立真的比較傷衣服？從洗淨力、空間、價格到烘衣需求，幫你選對洗衣機類型。",
    category: "washing-machine",
    keywords: ["滾筒洗衣機", "直立洗衣機", "洗衣機推薦", "洗烘一體"],
    publishedAt: "2026-08-10",
    readingMinutes: 8,
    content: [
      "直立洗衣機：價格較低、洗程短、開蓋可加衣，適合長輩、小空間；缺點是較耗水、衣物易糾結。",
      "滾筒洗衣機：省水省 detergent、對衣物較溫和，可洗烘一體；缺點是價格高、洗程長、需彎腰操作。",
      "若常烘衣且空間足夠，洗烘一體滾筒很適合梅雨季；若預算有限、重視洗程速度，直立仍是好選擇。",
    ],
  },
  {
    slug: "tv-size-distance-guide",
    title: "電視幾吋才適合？客廳觀看距離對照表",
    description:
      "65 吋、75 吋電視要坐多遠？依 4K 觀看距離公式與客廳深度，附尺寸建議與常見錯誤。",
    category: "tv",
    keywords: ["電視尺寸", "電視幾吋", "65吋電視", "觀看距離"],
    publishedAt: "2026-08-12",
    readingMinutes: 5,
    content: [
      "4K 電視的舒適觀看距離約為螢幕對角線的 1.2～1.5 倍。65 吋（約 165 cm）建議距離約 2.0～2.5 公尺。",
      "小坪數客廳不必硬上 75 吋，視野過滿反而容易暈；大客廳則可考慮 75～85 吋營造沉浸感。",
      "面板類型：OLED 對比與黑位佳，適合暗室观影；QLED/mini-LED 亮度高，適合明亮客廳。",
    ],
  },
  {
    slug: "tv-oled-vs-qled",
    title: "OLED vs QLED 電視差在哪？2026 選購指南",
    description:
      "OLED 會 burn-in 嗎？QLED 亮度一定比較高？從畫質、壽命、價格到遊戲需求，一次搞懂兩種面板。",
    category: "tv",
    keywords: ["OLED", "QLED", "mini-LED", "電視面板"],
    publishedAt: "2026-08-15",
    readingMinutes: 7,
    content: [
      "OLED 每個像素自發光，黑位純粹、對比極高，適合電影與 HDR 內容；長時間靜態畫面（如新聞台標）需注意 burn-in 風險。",
      "QLED 本質是 LCD + 量子點，搭配 mini-LED 背光後亮度可達 1000 nits 以上，白天客廳觀看更清楚。",
      "若常玩 PS5/Xbox，兩者都支援 120Hz 與 VRR 的機種不少；OLED 反應快適合競技，QLED 高亮度適合 HDR 遊戲。",
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: CategorySlug): Article[] {
  return articles.filter((a) => a.category === category);
}

export function getLatestArticles(limit = 6): Article[] {
  return [...articles]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, limit);
}
