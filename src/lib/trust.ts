export const trustPillars = [
  {
    title: "規格對照原廠型錄",
    description:
      "不照抄業配文。能核對的數字會寫出來源與日期，對不上的不寫。",
    icon: "✓",
  },
  {
    title: "第一線安裝實務",
    description:
      "室外機、排水、管長、保固是現場最常出事的地方。客訴整理成檢核表，安裝當天可以勾。",
    icon: "🔧",
  },
  {
    title: "先講清楚再決定",
    description:
      "先解決「不知道怎麼挑」和「怕被坑」。需要看現場再加 LINE，不急著推型號。",
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
