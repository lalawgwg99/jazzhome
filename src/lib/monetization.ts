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

export const affiliateLinks = {
  momo: process.env.NEXT_PUBLIC_AFFILIATE_MOMO ?? "",
  pchome: process.env.NEXT_PUBLIC_AFFILIATE_PCHOME ?? "",
  shopee: process.env.NEXT_PUBLIC_AFFILIATE_SHOPEE ?? "",
} as const;

export const lineUrl =
  process.env.NEXT_PUBLIC_LINE_URL ?? "https://line.me/R/ti/p/@jazzhome";

export const monetization = {
  lineConsultTitle: "安裝前不確定？把現場條件傳來",
  lineConsultDesc:
    "噸數、室外機位置、排水路徑，這些看文章不夠。把格局圖或現況照片傳到 LINE，依施工條件回你。",

  affiliateDisclosure:
    "本站部分連結為電商聯盟行銷連結，透過連結購買可能獲得分潤，但不增加你的購買成本。",

  paidConsultTitle: "安裝前審圖",
  paidConsultDesc:
    "簽約前把室外機位置、排水、管長、保固範圍對過一遍，避免現場加價。在 LINE 說「要審圖」即可。",
} as const;
