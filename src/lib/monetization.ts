export type AffiliatePlatform = "momo" | "pchome" | "shopee";

export interface AffiliateProduct {
  name: string;
  platform: AffiliatePlatform;
  url: string;
  price?: string;
  note?: string;
}

export const affiliatePlatforms: Record<
  AffiliatePlatform,
  { name: string; color: string }
> = {
  momo: { name: "Momo 購物網", color: "bg-pink-600 hover:bg-pink-700" },
  pchome: { name: "PChome 24h", color: "bg-red-600 hover:bg-red-700" },
  shopee: { name: "蝦皮購物", color: "bg-orange-500 hover:bg-orange-600" },
};

/** 中期：各平台 Affiliate 連結（取得後填入環境變數或此處） */
export const affiliateLinks = {
  momo: process.env.NEXT_PUBLIC_AFFILIATE_MOMO ?? "",
  pchome: process.env.NEXT_PUBLIC_AFFILIATE_PCHOME ?? "",
  shopee: process.env.NEXT_PUBLIC_AFFILIATE_SHOPEE ?? "",
} as const;

/** 初期：LINE 官方帳號連結 */
export const lineUrl =
  process.env.NEXT_PUBLIC_LINE_URL ?? "https://line.me/R/ti/p/@jazzhome";

export const monetization = {
  /** 初期：免費家電選購諮詢 */
  lineConsultTitle: "免費家電選購諮詢",
  lineConsultDesc:
    "冷氣坪數、冰箱容量、洗衣機類型不確定？加 LINE 一對一評估，可協助配合安裝與門市轉單。",

  /** 中期：聯盟行銷聲明 */
  affiliateDisclosure:
    "本站部分連結為電商聯盟行銷連結，透過連結購買可能獲得分潤，但不增加你的購買成本。",

  /** 長期：付費諮詢 */
  paidConsultTitle: "全屋家電配置諮詢",
  paidConsultDesc:
    "新成屋、裝潢案一次配齊冷氣、冰箱、洗衣機、電視？提供付費評估與採購清單審稿服務。",
  paidConsultPrice: "NT$ 1,500 起",
} as const;
