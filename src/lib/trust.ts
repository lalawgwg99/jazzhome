export const trustPillars = [
  {
    title: "原廠型錄數據核實",
    description:
      "拒絕照抄業配文。所有冷房 kW、CSPF 能效、公升數與視角距離，皆對照原廠技術手冊與能源署官方標章。",
    icon: "􀇺", // Apple SF Symbol representation / checkmark
    emoji: "✓",
  },
  {
    title: "第一線施工避坑整理",
    description:
      "室外機散熱死角、排水坡度滲漏、銅管超長加價、洗洞避樑柱。將第一線爭議化為隨身檢核表，現場一對一勾選。",
    icon: "􀙥",
    emoji: "🔧",
  },
  {
    title: "客觀評估，絕不盲推",
    description:
      "先算清楚規格、再看現場條件。不急著推薦特定品牌型號，只提供最符合你預算與居住環境的科學決策依據。",
    icon: "􀎸",
    emoji: "🤝",
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
  { label: string; bg: string; text: string; border: string }
> = {
  "spec-verified": {
    label: "原廠型錄核實",
    bg: "bg-[#34C759]/10",
    text: "text-[#248A3D]",
    border: "border-[#34C759]/20",
  },
  "field-tested": {
    label: "第一線實務驗證",
    bg: "bg-[#007AFF]/10",
    text: "text-[#0051A8]",
    border: "border-[#007AFF]/20",
  },
  "myth-busted": {
    label: "選購迷思破解",
    bg: "bg-[#FF9500]/10",
    text: "text-[#B25000]",
    border: "border-[#FF9500]/20",
  },
};
