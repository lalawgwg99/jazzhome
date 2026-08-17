"use client";

import { useState } from "react";
import { LineCta } from "@/components/LineCta";

type BeddingType = "light" | "double" | "heavy";
type BalconySun = "sunny" | "humid";
type FabricCare = "standard" | "delicate";

export function WashingMachineCalculator() {
  const [familyMembers, setFamilyMembers] = useState(3);
  const [beddingType, setBeddingType] = useState<BeddingType>("double");
  const [balconySun, setBalconySun] = useState<BalconySun>("sunny");
  const [fabricCare, setFabricCare] = useState<FabricCare>("standard");
  const [copied, setCopied] = useState(false);

  // Capacity calculation (kg): (members * 1.5kg * 2.5 days) + safety
  let baseKg = familyMembers * 3.0 + 2.0;
  if (beddingType === "double") baseKg = Math.max(baseKg, 12);
  if (beddingType === "heavy") baseKg = Math.max(baseKg, 15);

  const recommendedKg = Math.min(20, Math.max(9, Math.round(baseKg)));

  // Drum vs Top-load decision
  const isDrumRecommended =
    balconySun === "humid" || fabricCare === "delicate" || familyMembers <= 4;

  const decisionTitle = isDrumRecommended
    ? "推薦：滾筒洗衣機（或洗脫烘一體 / 熱泵乾衣組合）"
    : "推薦：直立式變頻洗衣機（大容量超值）";

  const decisionDesc = isDrumRecommended
    ? "摔打式洗滌省水 50% 且極致保護衣物不打結，搭配溫水加熱洗滌去皮脂油垢；若陽台潮濕無日照，洗脫烘能徹底解決曬衣困擾。"
    : "洗程快速（約 35~45 分鐘），可隨時掀蓋加衣，大水流沖刷適合日常運動服與泥沙清潔，性價比極高。";

  const handleCopy = () => {
    const text = `【JazzHome 洗衣機容量與選型試算】\n同住人數：${familyMembers} 人\n床包清洗需求：${
      beddingType === "light"
        ? "單人被單/薄涼被"
        : beddingType === "double"
        ? "一般雙人床包組"
        : "雙人加大厚被/冬被"
    }\n建議洗衣容量：${recommendedKg} kg 以上\n推薦機型：${decisionTitle}\n${decisionDesc}\n安裝提醒：確認陽台水龍頭距離、110V/220V 電壓與排水孔暢通。`;

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="space-y-6">
      {/* Inset Group 1: Inputs */}
      <div className="apple-card border border-black/[0.05] bg-white p-6 sm:p-7">
        <div className="flex items-center justify-between">
          <label className="text-sm font-semibold text-[#1C1C1E]">
            同住家庭人數
          </label>
          <span className="rounded-full bg-[#0071E3]/10 px-3 py-1 text-sm font-bold text-[#0071E3]">
            {familyMembers} 人
          </span>
        </div>

        {/* Number Buttons */}
        <div className="mt-3 flex gap-2">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <button
              key={num}
              type="button"
              onClick={() => setFamilyMembers(num)}
              className={`apple-btn-active flex-1 rounded-full py-1.5 text-xs font-semibold transition-all ${
                familyMembers === num
                  ? "bg-[#1C1C1E] text-white"
                  : "bg-[#F2F2F7] text-[#636366] hover:bg-black/[0.08]"
              }`}
            >
              {num >= 6 ? "6人+" : `${num}人`}
            </button>
          ))}
        </div>

        <div className="mt-6 border-t border-black/[0.04] pt-5">
          <label className="text-sm font-semibold text-[#1C1C1E]">
            被單與床包清洗需求
          </label>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            {[
              { id: "light" as const, label: "單人薄被 / 涼被", desc: "日常衣物為主，床包偶爾送洗" },
              { id: "double" as const, label: "雙人床包組", desc: "定期自行清洗雙人床包與薄被套" },
              { id: "heavy" as const, label: "雙人加大厚被 / 冬被", desc: "常洗加厚兩用被、天絲冬被或窗簾" },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setBeddingType(item.id)}
                className={`apple-btn-active rounded-xl p-3 text-left border transition-all ${
                  beddingType === item.id
                    ? "border-[#0071E3] bg-[#0071E3]/[0.04] text-[#0071E3]"
                    : "border-black/[0.06] bg-white text-[#48484A] hover:bg-[#F2F2F7]"
                }`}
              >
                <p className="text-xs font-bold">{item.label}</p>
                <p className="mt-1 text-[11px] text-[#8E8E93] leading-snug">{item.desc}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 border-t border-black/[0.04] pt-5">
          <label className="text-sm font-semibold text-[#1C1C1E]">
            陽台通風與曬衣環境
          </label>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {[
              { id: "sunny" as const, label: "陽台通風採光佳", desc: "日常曬衣容易乾，不強制依賴烘衣功能" },
              { id: "humid" as const, label: "無日照 / 潮濕或無陽台", desc: "北部梅雨季曬不乾，極需洗脫烘一體或乾衣機" },
            ].map((env) => (
              <button
                key={env.id}
                type="button"
                onClick={() => setBalconySun(env.id)}
                className={`apple-btn-active rounded-xl p-3 text-left border transition-all ${
                  balconySun === env.id
                    ? "border-[#0071E3] bg-[#0071E3]/[0.04] text-[#0071E3]"
                    : "border-black/[0.06] bg-white text-[#48484A] hover:bg-[#F2F2F7]"
                }`}
              >
                <p className="text-xs font-bold">{env.label}</p>
                <p className="mt-1 text-[11px] text-[#8E8E93] leading-snug">{env.desc}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 border-t border-black/[0.04] pt-5">
          <label className="text-sm font-semibold text-[#1C1C1E]">
            衣物保養偏好
          </label>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {[
              { id: "standard" as const, label: "日常耐洗棉質為主", desc: "重視洗程快速、泥沙沖洗力與實惠耐用" },
              { id: "delicate" as const, label: "常穿襯衫/羊毛/怕拉扯", desc: "重視防打結、不傷高級衣料、溫水抑菌洗" },
            ].map((care) => (
              <button
                key={care.id}
                type="button"
                onClick={() => setFabricCare(care.id)}
                className={`apple-btn-active rounded-xl p-3 text-left border transition-all ${
                  fabricCare === care.id
                    ? "border-[#0071E3] bg-[#0071E3]/[0.04] text-[#0071E3]"
                    : "border-black/[0.06] bg-white text-[#48484A] hover:bg-[#F2F2F7]"
                }`}
              >
                <p className="text-xs font-bold">{care.label}</p>
                <p className="mt-1 text-[11px] text-[#8E8E93] leading-snug">{care.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Inset Group 2: Output Analysis */}
      <div className="apple-card overflow-hidden border border-[#0071E3]/20 bg-gradient-to-b from-[#0071E3]/[0.03] to-white p-6 sm:p-8">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0071E3]">
            建議洗衣容量與選型分析
          </span>
          <button
            type="button"
            onClick={handleCopy}
            className="apple-btn-active inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#0071E3] shadow-sm border border-black/[0.06] hover:bg-[#F2F2F7]"
          >
            {copied ? (
              <>
                <span className="text-[#34C759]">✓</span>
                <span>已複製結果</span>
              </>
            ) : (
              <>
                <span>📋</span>
                <span>複製評估報告</span>
              </>
            )}
          </button>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-white p-5 border border-black/[0.04] shadow-sm">
            <p className="text-xs font-medium text-[#8E8E93]">建議最低洗衣容量</p>
            <p className="mt-1 text-3xl font-bold tracking-tight text-[#0071E3]">
              {recommendedKg} <span className="text-lg font-semibold text-[#0071E3]/80">kg</span>
            </p>
            <p className="mt-1 text-xs text-[#636366]">
              滿足 {familyMembers} 人日常換洗與
              {beddingType === "heavy"
                ? " 雙人厚被單翻滾清洗"
                : beddingType === "double"
                ? " 雙人床包清洗"
                : " 單人被單清洗"}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 border border-black/[0.04] shadow-sm">
            <p className="text-xs font-medium text-[#8E8E93]">推薦機型架構</p>
            <p className="mt-1 text-base font-bold text-[#1C1C1E]">
              {isDrumRecommended ? "滾筒式洗衣機 / 洗脫烘" : "直立式變頻洗衣機"}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-[#636366]">
              {decisionDesc}
            </p>
          </div>
        </div>

        <div className="mt-4 rounded-xl bg-[#F2F2F7]/70 p-4 text-xs leading-relaxed text-[#636366]">
          💡 <strong>烘衣容量叮嚀：</strong>
          若選購「洗脫烘一體機」，原廠標示的烘乾容量通常為洗衣容量的 60%（例如洗 12kg、烘 8kg）。建議日常洗衣可裝 8 分滿，若需當次直接烘乾則放 6 分滿，烘乾效果最蓬鬆且無皺痕。
        </div>
      </div>

      <LineCta
        variant="banner"
        title="陽台空間狹窄？不知道選洗脫烘還是一體機？"
        description="拍下陽台水龍頭、排水孔與預留放置寬度傳到 LINE，免費協助評估動線與堆疊安裝可行性。"
      />
    </div>
  );
}
