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
      <div className="skm-card border border-black/[0.08] bg-white p-6 sm:p-7 shadow-2xs">
        <div className="flex items-center justify-between">
          <label className="text-sm font-bold text-[#111111]">
            同住家庭人數
          </label>
          <span className="rounded bg-[#FAF9F8] px-3 py-1 text-sm font-bold font-mono text-[#A67C52] border border-[#A67C52]/30">
            {familyMembers} 人
          </span>
        </div>

        {/* Number Buttons */}
        <div className="mt-3.5 flex gap-2">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <button
              key={num}
              type="button"
              onClick={() => setFamilyMembers(num)}
              className={`skm-btn flex-1 rounded-md py-2 text-xs font-semibold transition-all ${
                familyMembers === num
                  ? "bg-[#111111] text-[#D4AF37] border border-[#A67C52]/40"
                  : "bg-[#FAF9F8] text-[#555555] border border-black/[0.06] hover:text-[#111111]"
              }`}
            >
              {num >= 6 ? "6人+" : `${num}人`}
            </button>
          ))}
        </div>

        <div className="mt-6 border-t border-black/[0.05] pt-5">
          <label className="text-sm font-bold text-[#111111]">
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
                className={`skm-btn rounded-xl p-3 text-left border transition-all ${
                  beddingType === item.id
                    ? "border-[#A67C52] bg-[#F7F3EE] text-[#8C6438] shadow-2xs"
                    : "border-black/[0.06] bg-white text-[#555555] hover:bg-[#FAF9F8]"
                }`}
              >
                <p className="text-xs font-bold text-[#111111]">{item.label}</p>
                <p className="mt-1 text-[11px] text-[#777777] leading-snug">{item.desc}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 border-t border-black/[0.05] pt-5">
          <label className="text-sm font-bold text-[#111111]">
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
                className={`skm-btn rounded-xl p-3 text-left border transition-all ${
                  balconySun === env.id
                    ? "border-[#A67C52] bg-[#F7F3EE] text-[#8C6438] shadow-2xs"
                    : "border-black/[0.06] bg-white text-[#555555] hover:bg-[#FAF9F8]"
                }`}
              >
                <p className="text-xs font-bold text-[#111111]">{env.label}</p>
                <p className="mt-1 text-[11px] text-[#777777] leading-snug">{env.desc}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 border-t border-black/[0.05] pt-5">
          <label className="text-sm font-bold text-[#111111]">
            衣物材質與護衣需求
          </label>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {[
              { id: "standard" as const, label: "一般棉質與日常休閒服", desc: "追求洗程快速、洗淨力強即可" },
              { id: "delicate" as const, label: "襯衫、針織、絲質高階衣物", desc: "極需溫水洗淨、防打結防變形功能" },
            ].map((care) => (
              <button
                key={care.id}
                type="button"
                onClick={() => setFabricCare(care.id)}
                className={`skm-btn rounded-xl p-3 text-left border transition-all ${
                  fabricCare === care.id
                    ? "border-[#A67C52] bg-[#F7F3EE] text-[#8C6438] shadow-2xs"
                    : "border-black/[0.06] bg-white text-[#555555] hover:bg-[#FAF9F8]"
                }`}
              >
                <p className="text-xs font-bold text-[#111111]">{care.label}</p>
                <p className="mt-1 text-[11px] text-[#777777] leading-snug">{care.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Inset Group 2: Output */}
      <div className="skm-card overflow-hidden border border-[#A67C52]/30 bg-white p-6 sm:p-8 shadow-2xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#A67C52] text-sm">✦</span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#111111] font-mono">
              洗衣機規格試算結果
            </span>
          </div>
          <button
            type="button"
            onClick={handleCopy}
            className="skm-btn inline-flex items-center gap-1.5 rounded-md bg-[#FAF9F8] px-3 py-1 text-xs font-semibold text-[#111111] border border-black/[0.08] hover:border-[#A67C52]/50"
          >
            {copied ? (
              <>
                <span className="text-[#047857]">✓</span>
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

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-[#FAF9F8] p-5 border border-black/[0.06]">
            <p className="text-xs font-medium text-[#777777]">建議洗衣容量（公斤）</p>
            <p className="mt-1 text-3xl font-bold tracking-tight text-[#A67C52] font-mono">
              {recommendedKg} <span className="text-base font-sans text-[#777777]">kg 以上</span>
            </p>
            <p className="mt-2 text-xs leading-relaxed text-[#555555]">
              符合 {familyMembers} 人家庭連續 2~3 天換洗衣物與床包清洗之安全餘裕
            </p>
          </div>

          <div className="rounded-xl bg-[#FAF9F8] p-5 border border-black/[0.06]">
            <p className="text-xs font-medium text-[#777777]">推薦機型型態</p>
            <p className="mt-1 text-sm font-bold text-[#111111] leading-snug">
              {decisionTitle}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-[#555555]">
              {decisionDesc}
            </p>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-[#FAF9F8] p-4 border border-black/[0.06] text-xs text-[#555555]">
          ✦ <strong>陽台水電安裝提醒：</strong>
          購買滾筒洗脫烘前，請確認陽台供電為 110V 還是 220V（歐美熱泵乾衣機多為 220V 需專用插座）。落水孔建議換裝「專用防溢泡沫落水接頭」防止瞬時大排水溢流。
        </div>
      </div>

      <LineCta
        variant="banner"
        title="陽台水電格局特殊？不確定能不能裝洗脫烘？"
        description="拍下陽台水龍頭、插座與落水孔照片傳到 LINE，由專業水電技師免費為您評估電壓、排水與堆疊施工條件。"
      />
    </div>
  );
}
