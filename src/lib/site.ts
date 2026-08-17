export const siteConfig = {
  name: "JazzHome 家電研究室",
  tagline: "只說真話 · 實務核實 · 互動評估",
  description:
    "冷氣、冰箱、洗衣機、電視選購攻略。原廠型錄核實、第一線安裝實務、互動評估工具，解決資訊不對稱與安裝風險焦慮。",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://jazzhome.pages.dev",
  locale: "zh-TW",
  author: "JazzHome 家電研究室",
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? "G-C6ERB7BXRR",
} as const;
