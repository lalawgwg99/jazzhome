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
  { name: string; tagBg: string; tagText: string }
> = {
  momo: { name: "Momo 購物網", tagBg: "bg-[#D80064]/10", tagText: "text-[#D80064]" },
  pchome: { name: "PChome 24h", tagBg: "bg-[#DF0000]/10", tagText: "text-[#DF0000]" },
  shopee: { name: "蝦皮商城", tagBg: "bg-[#EE4D2D]/10", tagText: "text-[#EE4D2D]" },
};

export const affiliateLinks = {
  momo: process.env.NEXT_PUBLIC_AFFILIATE_MOMO ?? "",
  pchome: process.env.NEXT_PUBLIC_AFFILIATE_PCHOME ?? "",
  shopee: process.env.NEXT_PUBLIC_AFFILIATE_SHOPEE ?? "",
} as const;

export const lineUrl =
  process.env.NEXT_PUBLIC_LINE_URL ?? "https://line.me/R/ti/p/@jazzhome";

export const monetization = {
  lineConsultTitle: "現場條件不確定？直接傳照片諮詢",
  lineConsultDesc:
    "噸數、室外機散熱、洗洞與排水路徑，看型錄往往不夠。拍下現場格局或施工位置傳到 LINE，依真實條件為您評估。",

  affiliateDisclosure:
    "本站部分商品連結為聯盟行銷分潤連結。若您透過連結購買，我們可能獲得微薄分潤支持持續維護，絕不影響您的購買價格與客觀評測標準。",

  paidConsultTitle: "簽約前圖面與報價審核",
  paidConsultDesc:
    "購買前將室外機動線、排水坡度、銅管超長明細與保固條款對過一遍，杜絕施工當天爭議與坐地起價。LINE 留下「想審圖」即可。",
} as const;
