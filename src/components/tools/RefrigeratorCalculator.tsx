"use client";

import { useState } from "react";
import { LineCta } from "@/components/LineCta";

type CookingHabit = "eating_out" | "regular" | "heavy_stock";
type KitchenWidth = "narrow" | "standard" | "wide";

export function RefrigeratorCalculator() {
  const [persons, setPersons] = useState(3);
  const [cookingHabit, setCookingHabit] = useState<CookingHabit>("regular");
  const [kitchenWidth, setKitchenWidth] = useState<KitchenWidth>("standard");
  const [copied, setCopied] = useState(false);

  // Base calculation: (persons * 70L) + reserve (100L)
  let baseLiters = persons * 70 + 100;
  if (cookingHabit === "eating_out") baseLiters -= 50;
  if (cookingHabit === "heavy_stock") baseLiters += 120;

  // Round up to nearest 10L
  const recommendedLiters = Math.max(150, Math.round(baseLiters / 10) * 10);

  // Recommended door layout
  let doorType = "雙門上下門（簡約耐用）";
  let doorDesc = "適合空間精簡、重視性價比與基本冷凍冷藏需求。";

  if (kitchenWidth === "narrow") {
    doorType = "日系窄身五門 / 六門（高空間利用率）";
    doorDesc = "寬度約 60~65cm，具備獨立蔬果室與獨立自動製冰，完全不混味。";
  } else if (recommendedLiters >= 550 || cookingHabit === "heavy_stock") {
    doorType = "法式十字四門 / 美式對開大容量";
    doorDesc = "大寬幅冷藏可平放整鍋大湯鍋與大蛋糕，冷凍抽屜分區大容量。";
  } else if (recommendedLiters >= 400) {
    doorType = "日系五門 / 三門變頻冰箱";
    doorDesc = "兼顧冷藏、蔬果與冷凍獨立溫層，保鮮效果極佳且省電。";
  }

  const freezLiters = Math.round(recommendedLiters * 0.32);
  const fridgeLiters = recommendedLiters - freezLiters;

  const handleCopy = () => {
    const habitMap = {
      eating_out: "外食為主，偶爾簡易料理",
      regular: "每週採買 1~2 次，平日開伙",
      heavy_stock: "天天煮，常備好市多/冷凍生鮮大囤貨",
    };

    const text = `【JazzHome 冰箱容量與格局試算】\n同住人數：${persons} 人\n採買習慣：${habitMap[cookingHabit]}\n建議容量：約 ${recommendedLiters} 公升 (冷藏約 ${fridgeLiters}L / 冷凍約 ${freezLiters}L)\n推薦格局：${doorType}\n${doorDesc}\n散熱提醒：左右各預留 2~5cm，大門與電梯淨寬需大於本體寬度 5cm 以上。`;

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="space-y-6">
      {/* Inset Group 1: Persons & Habits */}
      <div className="apple-card border border-black/[0.05] bg-white p-6 sm:p-7">
        <div className="flex items-center justify-between">
          <label className="text-sm font-semibold text-[#1C1C1E]">
            同住家庭人數
          </label>
          <span className="rounded-full bg-[#0071E3]/10 px-3 py-1 text-sm font-bold text-[#0071E3]">
            {persons} 人
          </span>
        </div>

        {/* Stepper Pills */}
        <div className="mt-3 flex gap-2">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <button
              key={num}
              type="button"
              onClick={() => setPersons(num)}
              className={`apple-btn-active flex-1 rounded-full py-1.5 text-xs font-semibold transition-all ${
                persons === num
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
            日常開伙與採買囤貨習慣
          </label>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            {[
              { id: "eating_out" as const, label: "外食居多", desc: "僅冰飲料、水果與少量食材" },
              { id: "regular" as const, label: "正常開伙", desc: "每週採買 1~2 次，常備生鮮" },
              { id: "heavy_stock" as const, label: "常囤貨/天天煮", desc: "常買好市多、大量冷凍肉品" },
            ].map((habit) => (
              <button
                key={habit.id}
                type="button"
                onClick={() => setCookingHabit(habit.id)}
                className={`apple-btn-active rounded-xl p-3 text-left border transition-all ${
                  cookingHabit === habit.id
                    ? "border-[#0071E3] bg-[#0071E3]/[0.04] text-[#0071E3]"
                    : "border-black/[0.06] bg-white text-[#48484A] hover:bg-[#F2F2F7]"
                }`}
              >
                <p className="text-xs font-bold">{habit.label}</p>
                <p className="mt-1 text-[11px] text-[#8E8E93] leading-snug">{habit.desc}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 border-t border-black/[0.04] pt-5">
          <label className="text-sm font-semibold text-[#1C1C1E]">
            廚房預留放置寬度
          </label>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            {[
              { id: "narrow" as const, label: "窄幅空間 (< 65cm)", desc: "都會小廚房，需挑選日系窄身機" },
              { id: "standard" as const, label: "標準空間 (65~75cm)", desc: "一般住宅廚房，適合多數多門款式" },
              { id: "wide" as const, label: "寬敞空間 (> 75cm)", desc: "大空間，可選大型對開或法式四門" },
            ].map((w) => (
              <button
                key={w.id}
                type="button"
                onClick={() => setKitchenWidth(w.id)}
                className={`apple-btn-active rounded-xl p-3 text-left border transition-all ${
                  kitchenWidth === w.id
                    ? "border-[#0071E3] bg-[#0071E3]/[0.04] text-[#0071E3]"
                    : "border-black/[0.06] bg-white text-[#48484A] hover:bg-[#F2F2F7]"
                }`}
              >
                <p className="text-xs font-bold">{w.label}</p>
                <p className="mt-1 text-[11px] text-[#8E8E93] leading-snug">{w.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Inset Group 2: Results */}
      <div className="apple-card overflow-hidden border border-[#0071E3]/20 bg-gradient-to-b from-[#0071E3]/[0.03] to-white p-6 sm:p-8">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0071E3]">
            建議冰箱容量與門型規格
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
            <p className="text-xs font-medium text-[#8E8E93]">建議總容量（公升）</p>
            <p className="mt-1 text-3xl font-bold tracking-tight text-[#0071E3]">
              {recommendedLiters} <span className="text-lg font-semibold text-[#0071E3]/80">L</span>
            </p>
            <div className="mt-2 flex items-center gap-3 text-xs text-[#636366]">
              <span>冷藏約 <strong>{fridgeLiters}L</strong></span>
              <span>·</span>
              <span>冷凍約 <strong>{freezLiters}L</strong> (佔比 ~32%)</span>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 border border-black/[0.04] shadow-sm">
            <p className="text-xs font-medium text-[#8E8E93]">推薦門型格局</p>
            <p className="mt-1 text-base font-bold text-[#1C1C1E]">
              {doorType}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-[#636366]">
              {doorDesc}
            </p>
          </div>
        </div>

        <div className="mt-4 rounded-xl bg-[#F2F2F7]/70 p-4 text-xs leading-relaxed text-[#636366]">
          ⚠️ <strong>進門避坑提醒：</strong>
          購買前請務必丈量「電梯門淨寬」、「大門內框淨寬」與「廚房門淨寬」。通道淨寬需比冰箱機身寬度<strong>多出 5 公分以上</strong>，師傅才能安全搬運轉彎進屋！
        </div>
      </div>

      <LineCta
        variant="banner"
        title="廚房空間有限？不確定冰箱能不能順利進門？"
        description="拍下廚房預留位置與大門動線傳到 LINE，免費幫你核對機型外型尺寸與散熱預留。"
      />
    </div>
  );
}
