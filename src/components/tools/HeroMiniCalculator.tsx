"use client";

import { useState } from "react";
import Link from "next/link";

export function HeroMiniCalculator() {
  const [tab, setTab] = useState<"ac" | "fridge">("ac");

  // AC States
  const [pings, setPings] = useState(5);
  const [isWestSun, setIsWestSun] = useState(false);
  const [isTopFloor, setIsTopFloor] = useState(false);

  // Fridge States
  const [persons, setPersons] = useState(3);
  const [isCostco, setIsCostco] = useState(true);

  // AC Calculation
  let kwPerPing = 0.55;
  if (isWestSun) kwPerPing += 0.1;
  if (isTopFloor) kwPerPing += 0.1;
  const acKw = Math.round(pings * kwPerPing * 10) / 10;
  const acTons = (acKw / 2.3).toFixed(1);
  const acSubsidy = 3000 + (acKw >= 3.6 ? 2000 : 1600);

  // Fridge Calculation
  const fridgeLiters = persons * 70 + 100 + (isCostco ? 140 : 0);
  const fridgeTaxRefund = fridgeLiters >= 400 ? 2000 : 1200;

  return (
    <div className="craft-card overflow-hidden bg-white p-5 sm:p-6 shadow-sm border border-stone-200/80">
      {/* Top Segmented Tab */}
      <div className="flex rounded-lg bg-[#F6F6F3] p-1 border border-stone-200/60">
        <button
          type="button"
          onClick={() => setTab("ac")}
          className={`craft-btn flex-1 rounded-md py-1.5 text-xs font-semibold transition-all ${
            tab === "ac"
              ? "bg-white text-[#1C1917] shadow-xs"
              : "text-[#78716C] hover:text-[#1C1917]"
          }`}
        >
          ❄️ 冷氣 kW 試算
        </button>
        <button
          type="button"
          onClick={() => setTab("fridge")}
          className={`craft-btn flex-1 rounded-md py-1.5 text-xs font-semibold transition-all ${
            tab === "fridge"
              ? "bg-white text-[#1C1917] shadow-xs"
              : "text-[#78716C] hover:text-[#1C1917]"
          }`}
        >
          🧊 冰箱容量試算
        </button>
      </div>

      {tab === "ac" ? (
        <div className="mt-5 space-y-4">
          {/* Ping selection */}
          <div>
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-[#1C1917]">房間實坪：</span>
              <span className="font-mono text-sm font-bold text-[#1C1917] bg-[#F6F6F3] px-2 py-0.5 rounded border border-stone-200/60">
                {pings} 坪
              </span>
            </div>

            <div className="mt-2.5 flex gap-1.5">
              {[3.5, 5, 7, 10, 14].map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPings(p)}
                  className={`craft-btn flex-1 rounded py-1 text-xs font-mono transition-all ${
                    pings === p
                      ? "bg-[#1C1917] text-white"
                      : "bg-[#F6F6F3] text-[#78716C] hover:bg-stone-200"
                  }`}
                >
                  {p}坪
                </button>
              ))}
            </div>
          </div>

          {/* Environment toggles */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <label className="flex items-center gap-2 rounded-lg bg-[#F6F6F3] p-2 text-xs text-[#44403C] cursor-pointer border border-stone-200/40">
              <input
                type="checkbox"
                checked={isWestSun}
                onChange={(e) => setIsWestSun(e.target.checked)}
                className="rounded accent-[#1C1917]"
              />
              <span>西曬 / 大落地窗</span>
            </label>
            <label className="flex items-center gap-2 rounded-lg bg-[#F6F6F3] p-2 text-xs text-[#44403C] cursor-pointer border border-stone-200/40">
              <input
                type="checkbox"
                checked={isTopFloor}
                onChange={(e) => setIsTopFloor(e.target.checked)}
                className="rounded accent-[#1C1917]"
              />
              <span>頂樓 / 鐵皮加蓋</span>
            </label>
          </div>

          {/* Result Card */}
          <div className="rounded-xl bg-[#1C1917] p-4 text-white">
            <div className="flex items-baseline justify-between">
              <div>
                <p className="text-[11px] text-stone-400 font-mono">建議冷房能力</p>
                <p className="text-2xl font-bold font-mono tracking-tight text-white">
                  {acKw} <span className="text-sm font-sans font-normal text-stone-300">kW</span>
                </p>
              </div>
              <div className="text-right">
                <p className="text-[11px] text-stone-400 font-mono">約等於台灣噸數</p>
                <p className="text-base font-bold font-mono text-stone-200">
                  約 {acTons} 噸
                </p>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2 text-xs">
              <span className="text-emerald-400 font-medium">💰 2026 汰舊換新+退稅</span>
              <span className="font-bold font-mono text-emerald-400">
                最高省 NT$ {acSubsidy.toLocaleString()}
              </span>
            </div>
          </div>

          <Link
            href="/tools/ac-calculator"
            className="craft-btn flex w-full items-center justify-center gap-1 rounded-lg bg-[#F6F6F3] py-2 text-xs font-semibold text-[#1C1917] border border-stone-200/80 hover:bg-stone-200/80"
          >
            <span>開啟完整長寬換算與電費評估報告</span>
            <span>→</span>
          </Link>
        </div>
      ) : (
        <div className="mt-5 space-y-4">
          {/* Fridge people selection */}
          <div>
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-[#1C1917]">家庭同住人數：</span>
              <span className="font-mono text-sm font-bold text-[#1C1917] bg-[#F6F6F3] px-2 py-0.5 rounded border border-stone-200/60">
                {persons} 人
              </span>
            </div>

            <div className="mt-2.5 flex gap-1.5">
              {[1, 2, 3, 4, 5].map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPersons(p)}
                  className={`craft-btn flex-1 rounded py-1 text-xs font-mono transition-all ${
                    persons === p
                      ? "bg-[#1C1917] text-white"
                      : "bg-[#F6F6F3] text-[#78716C] hover:bg-stone-200"
                  }`}
                >
                  {p}人
                </button>
              ))}
            </div>
          </div>

          {/* Costco toggle */}
          <div className="pt-1">
            <label className="flex items-center justify-between rounded-lg bg-[#F6F6F3] p-2.5 text-xs text-[#44403C] cursor-pointer border border-stone-200/40">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={isCostco}
                  onChange={(e) => setIsCostco(e.target.checked)}
                  className="rounded accent-[#1C1917]"
                />
                <span>好市多 Costco 常客（需大量冷凍生鮮空間）</span>
              </div>
              <span className="text-[11px] font-mono text-[#78716C]">+140L</span>
            </label>
          </div>

          {/* Fridge Result */}
          <div className="rounded-xl bg-[#1C1917] p-4 text-white">
            <div className="flex items-baseline justify-between">
              <div>
                <p className="text-[11px] text-stone-400 font-mono">建議總容量</p>
                <p className="text-2xl font-bold font-mono tracking-tight text-white">
                  {fridgeLiters} <span className="text-sm font-sans font-normal text-stone-300">公升 (L)</span>
                </p>
              </div>
              <div className="text-right">
                <p className="text-[11px] text-stone-400 font-mono">推薦格局</p>
                <p className="text-xs font-bold text-stone-200">
                  {isCostco || fridgeLiters >= 500 ? "日系多門 / 法式四門" : "雙門 / 三門窄身"}
                </p>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2 text-xs">
              <span className="text-emerald-400 font-medium">💰 2026 貨物稅退稅</span>
              <span className="font-bold font-mono text-emerald-400">
                可退 NT$ {fridgeTaxRefund.toLocaleString()}
              </span>
            </div>
          </div>

          <Link
            href="/tools/refrigerator-calculator"
            className="craft-btn flex w-full items-center justify-center gap-1 rounded-lg bg-[#F6F6F3] py-2 text-xs font-semibold text-[#1C1917] border border-stone-200/80 hover:bg-stone-200/80"
          >
            <span>開啟廚房門寬與搬運動線避坑報告</span>
            <span>→</span>
          </Link>
        </div>
      )}
    </div>
  );
}
