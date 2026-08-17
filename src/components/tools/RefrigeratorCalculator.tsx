"use client";

import { useState } from "react";
import { LineCta } from "@/components/LineCta";

type CookingHabit = "eating_out" | "supermarket" | "costco_heavy";
type KitchenWidth = "narrow_60" | "standard_68" | "wide_80";

export function RefrigeratorCalculator() {
  const [persons, setPersons] = useState(3);
  const [cookingHabit, setCookingHabit] = useState<CookingHabit>("costco_heavy");
  const [kitchenWidth, setKitchenWidth] = useState<KitchenWidth>("standard_68");
  const [needIceMaker, setNeedIceMaker] = useState(true);
  const [needVeggieCenter, setNeedVeggieCenter] = useState(true);
  const [copied, setCopied] = useState(false);

  // Base calculation: (persons * 70L) + reserve (100L)
  let baseLiters = persons * 70 + 100;
  if (cookingHabit === "eating_out") baseLiters -= 60;
  if (cookingHabit === "costco_heavy") baseLiters += 140;

  // Round up to nearest 10L
  const recommendedLiters = Math.max(160, Math.round(baseLiters / 10) * 10);

  // Freezer calculation (Costco needs 35%+ freezer)
  const freezerRatio = cookingHabit === "costco_heavy" ? 0.36 : 0.28;
  const freezLiters = Math.round(recommendedLiters * freezerRatio);
  const fridgeLiters = recommendedLiters - freezLiters;

  // Door layout recommendation logic
  let doorType = "日系五門 / 六門變頻冰箱 (窄身大容量)";
  let doorDesc = "兼顧獨立蔬果室、獨立製冰與大冷凍，完全不混味且省電。";
  let brandRecommendations = "Panasonic 國際牌 / Hitachi 日立 / Mitsubishi 三菱電機 (日本原裝)";

  if (kitchenWidth === "narrow_60") {
    doorType = "日系 60cm 窄身五門 / 三門款式";
    doorDesc = "專為台灣都會小廚房設計，寬度僅 60 公分卻有 400L~500L 大容量。";
    brandRecommendations = "Panasonic 鋼板五門 / 日立窄身多門 / 三菱小六門";
  } else if (kitchenWidth === "wide_80" && (cookingHabit === "costco_heavy" || recommendedLiters >= 580)) {
    doorType = "法式十字四門 / 美式對開大容量";
    doorDesc = "橫向超大寬幅，好市多大披薩、整隻烤雞、大湯鍋直接平放。";
    brandRecommendations = "LG 敲敲門四門 / Samsung 雙循環對開 / 惠而浦大冷凍";
  }

  // 2026 Taiwan Tax refund for Refrigerator (1st/2nd energy efficiency tier)
  // < 400L refund $1200, >= 400L refund $2000
  const taxRefund = recommendedLiters >= 400 ? 2000 : 1200;

  const handleCopy = () => {
    const habitMap = {
      eating_out: "外食為主，僅冰飲料與簡易水果",
      supermarket: "全聯/傳統市場常備生鮮，每週煮 2~4 次",
      costco_heavy: "好市多 Costco 大採購、大量冷凍生鮮肉品囤貨",
    };

    const text = `【JazzHome 台灣冰箱選購與容量試算報告】\n同住人數：${persons} 人\n採買生活習慣：${habitMap[cookingHabit]}\n廚房預留寬度：${
      kitchenWidth === "narrow_60"
        ? "窄身小廚房 (<60cm)"
        : kitchenWidth === "standard_68"
        ? "標準空間 (65~68.5cm)"
        : "寬敞空間 (>80cm)"
    }\n建議總容量：約 ${recommendedLiters} 公升 (冷藏約 ${fridgeLiters}L / 冷凍約 ${freezLiters}L)\n推薦門型格局：${doorType}\n推薦品牌方向：${brandRecommendations}\n2026 貨物稅退稅：最高退 NT$ ${taxRefund} 元\n進門動線提醒：電梯門、大門與廚房門淨寬需大於機身寬度 5cm 以上。`;

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="space-y-6">
      {/* Inset Group 1: Family Members & Habits */}
      <div className="skm-card border border-black/[0.08] bg-white p-6 sm:p-7 shadow-2xs">
        <span className="text-xs font-bold uppercase tracking-wider text-[#A67C52] font-mono">
          步驟一：人數與生活型態
        </span>
        <div className="mt-2 flex items-center justify-between">
          <label className="text-base font-bold text-[#111111]">
            同住家庭人數
          </label>
          <span className="rounded bg-[#FAF9F8] px-3.5 py-1 text-sm font-bold font-mono text-[#A67C52] border border-[#A67C52]/30">
            {persons} 人
          </span>
        </div>

        {/* Stepper Pills */}
        <div className="mt-3.5 flex gap-2">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <button
              key={num}
              type="button"
              onClick={() => setPersons(num)}
              className={`skm-btn flex-1 rounded-md py-2 text-xs font-semibold transition-all ${
                persons === num
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
            台灣家庭採買囤貨習慣
          </label>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            {[
              {
                id: "eating_out" as const,
                label: "外食/外送居多",
                desc: "常備手搖飲、水果、零食，少量自煮食材",
              },
              {
                id: "supermarket" as const,
                label: "全聯/傳統市場常客",
                desc: "每週採買 1~2 次新鮮蔬菜、肉品與常備蛋奶",
              },
              {
                id: "costco_heavy" as const,
                label: "好市多 Costco 大囤貨",
                desc: "整箱牛肉片、鮭魚、大包水餃炸物，需超大冷凍庫",
              },
            ].map((habit) => (
              <button
                key={habit.id}
                type="button"
                onClick={() => setCookingHabit(habit.id)}
                className={`skm-btn rounded-xl p-3.5 text-left border transition-all ${
                  cookingHabit === habit.id
                    ? "border-[#A67C52] bg-[#F7F3EE] text-[#8C6438] shadow-2xs"
                    : "border-black/[0.06] bg-white text-[#555555] hover:bg-[#FAF9F8]"
                }`}
              >
                <p className="text-xs font-bold text-[#111111]">{habit.label}</p>
                <p className="mt-1 text-[11px] text-[#777777] leading-snug">{habit.desc}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 border-t border-black/[0.05] pt-5">
          <label className="text-sm font-bold text-[#111111]">
            廚房預留寬度（含散熱）
          </label>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            {[
              {
                id: "narrow_60" as const,
                label: "窄幅空間 (< 65cm)",
                desc: "都會小公寓廚房，需日系窄身 60cm 旗艦機",
              },
              {
                id: "standard_68" as const,
                label: "標準空間 (65~75cm)",
                desc: "台灣主流大樓尺寸，適合 68.5cm 日系多門",
              },
              {
                id: "wide_80" as const,
                label: "寬敞空間 (> 80cm)",
                desc: "大坪數或開放式廚房，可放法式對開大機種",
              },
            ].map((w) => (
              <button
                key={w.id}
                type="button"
                onClick={() => setKitchenWidth(w.id)}
                className={`skm-btn rounded-xl p-3.5 text-left border transition-all ${
                  kitchenWidth === w.id
                    ? "border-[#A67C52] bg-[#F7F3EE] text-[#8C6438] shadow-2xs"
                    : "border-black/[0.06] bg-white text-[#555555] hover:bg-[#FAF9F8]"
                }`}
              >
                <p className="text-xs font-bold text-[#111111]">{w.label}</p>
                <p className="mt-1 text-[11px] text-[#777777] leading-snug">{w.desc}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Feature Toggles */}
        <div className="mt-6 border-t border-black/[0.05] pt-4 divide-y divide-black/[0.04]">
          <div className="flex items-center justify-between py-2.5">
            <div>
              <p className="text-xs font-semibold text-[#111111]">需要「獨立自動製冰」且管路可全拆洗</p>
              <p className="text-[11px] text-[#777777]">冰塊不吸附海鮮肉品臭味，夏天喝冰飲必備</p>
            </div>
            <input
              type="checkbox"
              checked={needIceMaker}
              onChange={(e) => setNeedIceMaker(e.target.checked)}
              className="h-4 w-4 rounded accent-[#A67C52]"
            />
          </div>

          <div className="flex items-center justify-between py-2.5">
            <div>
              <p className="text-xs font-semibold text-[#111111]">需要「蔬果室在中間」免彎腰好拿菜</p>
              <p className="text-[11px] text-[#777777]">常煮飯拿高麗菜、葉菜類不用頻繁蹲下</p>
            </div>
            <input
              type="checkbox"
              checked={needVeggieCenter}
              onChange={(e) => setNeedVeggieCenter(e.target.checked)}
              className="h-4 w-4 rounded accent-[#A67C52]"
            />
          </div>
        </div>
      </div>

      {/* Inset Group 2: Results & Taiwan Refund */}
      <div className="skm-card overflow-hidden border border-[#A67C52]/30 bg-white p-6 sm:p-8 shadow-2xs">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[#A67C52] text-sm">✦</span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#111111] font-mono">
                試算結果報告
              </span>
            </div>
            <h3 className="mt-1 text-xl font-extrabold tracking-tight text-[#111111]">
              建議冰箱容量與門型規格
            </h3>
          </div>
          <button
            type="button"
            onClick={handleCopy}
            className="skm-btn inline-flex items-center gap-1.5 rounded-md bg-[#FAF9F8] px-3.5 py-1.5 text-xs font-semibold text-[#111111] border border-black/[0.08] hover:border-[#A67C52]/50"
          >
            {copied ? (
              <>
                <span className="text-[#047857]">✓</span>
                <span>已複製報告</span>
              </>
            ) : (
              <>
                <span>📋</span>
                <span>一鍵複製報告</span>
              </>
            )}
          </button>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-[#FAF9F8] p-4.5 border border-black/[0.06]">
            <p className="text-xs font-medium text-[#777777]">建議總容量（公升）</p>
            <p className="mt-1 text-3xl font-bold tracking-tight text-[#A67C52] font-mono">
              {recommendedLiters} <span className="text-base font-sans text-[#777777]">L</span>
            </p>
            <div className="mt-2 space-y-0.5 text-xs text-[#555555]">
              <p>冷藏室：約 <strong>{fridgeLiters} L</strong></p>
              <p>大冷凍室：約 <strong>{freezLiters} L</strong> ({Math.round(freezerRatio * 100)}%)</p>
            </div>
          </div>

          <div className="rounded-xl bg-[#FAF9F8] p-4.5 border border-black/[0.06]">
            <p className="text-xs font-medium text-[#777777]">推薦門型格局</p>
            <p className="mt-1 text-sm font-bold text-[#111111] leading-snug">
              {doorType}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-[#555555]">
              {doorDesc}
            </p>
          </div>

          <div className="rounded-xl bg-[#F7F3EE] p-4.5 border border-[#A67C52]/30">
            <p className="text-xs font-medium text-[#8C6438] font-mono">2026 貨物稅退稅</p>
            <p className="mt-1 text-3xl font-bold tracking-tight text-[#8C6438] font-mono">
              NT$ {taxRefund.toLocaleString()}
            </p>
            <p className="mt-2 text-xs text-[#555555]">
              {recommendedLiters >= 400 ? "≥ 400L 退稅 2,000 元" : "< 400L 退稅 1,200 元"}
            </p>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-[#FAF9F8] p-4 border border-black/[0.06] text-xs text-[#444444]">
          <p className="font-bold text-[#111111]">🏆 推薦台灣主流品牌系列：</p>
          <p className="mt-1 text-[#555555]">{brandRecommendations}</p>
        </div>

        {/* Clearance Warning */}
        <div className="mt-4 rounded-lg bg-[#FFFBEB] p-4 text-xs leading-relaxed text-[#92400E] border border-[#B45309]/30">
          ⚠️ <strong>台灣搬運退貨第一名避坑提醒：</strong>
          購買前請務必丈量「電梯大門淨寬」、「住家大門淨寬」與「廚房門淨寬」。通道淨寬需比冰箱機身寬度<strong>多出 5~8 公分以上</strong>（老舊公寓樓梯轉角需多 10 公分），避免師傅到場進不去退貨！
        </div>
      </div>

      <LineCta
        variant="banner"
        title="廚房空間有限？不確定冰箱能不能順利進門？"
        description="拍下廚房預留位置與大門通道照片傳到 LINE，由專業師傅免費幫您核對尺寸、散熱與搬運動線。"
      />
    </div>
  );
}
