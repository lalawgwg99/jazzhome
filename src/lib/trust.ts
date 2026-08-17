export const trustPillars = [
  {
    title: "原廠型錄逐項核實",
    description:
      "不照抄業配文。每一項規格對照原廠型錄確認，抓出網路錯誤資訊，只給可驗證的判斷。",
    icon: "✓",
  },
  {
    title: "第一線安裝實務",
    description:
      "懂施工限制、客訴痛點、門市運作邏輯。現場避坑心得轉成檢核表，AI 和內容農場寫不出來。",
    icon: "🔧",
  },
  {
    title: "信任驅動轉換",
    description:
      "先解決「不知道怎麼挑」與「怕被坑」的焦慮，再導向 LINE 諮詢、安裝配合或電商比價。",
    icon: "🤝",
  },
] as const;

export type VerificationLevel = "spec-verified" | "field-tested" | "myth-busted";

export interface ArticleVerification {
  levels: VerificationLevel[];
  specSource?: string;
  lastVerified?: string;
  note?: string;
}

export const verificationLabels: Record<
  VerificationLevel,
  { label: string; color: string }
> = {
  "spec-verified": {
    label: "型錄核實",
    color: "bg-emerald-100 text-emerald-800",
  },
  "field-tested": {
    label: "現場實務",
    color: "bg-blue-100 text-blue-800",
  },
  "myth-busted": {
    label: "迷思破解",
    color: "bg-amber-100 text-amber-800",
  },
};
