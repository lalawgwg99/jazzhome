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
    <div className="skm-card overflow-hidden bg-white p-5 sm:p-6 shadow-sm border border-[#A67C52]/25">
      {/* Top Segmented Tab */}
      <div className="flex rounded-lg bg-[#FAF9F8] p-1 border border-black/[0.06]">
        <button
          type="button"
          onClick={() => setTab("ac")}
          className={`skm-btn flex-1 rounded-md py-1.5 text-xs font-semibold tracking-wide transition-all ${
            tab === "ac"
              ? "bg-[#111111] text-white shadow-xs"
              : "text-[#666666] hover:text-[#111111]"
          }`}
        >
          ❄️ 空調噸數精密試算
        </button>
        <button
          type="button"
          onClick={() => setTab("fridge")}
          className={`skm-btn flex-1 rounded-md py-1.5 text-xs font-semibold tracking-wide transition-all ${
            tab === "fridge"
              ? "bg-[#111111] text-white shadow-xs"
              : "text-[#666666] hover:text-[#111111]"
          }`}
        >
          🧊 冰箱容量美學換算
        </button>
      </div>

      {tab === "ac" ? (
        <div className="mt-5 space-y-4">
          {/* Ping selection */}
          <div>
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-[#111111] tracking-wide">空間實坪數：</span>
              <span className="font-mono text-sm font-bold text-[#A67C52] bg-[#FAF9F8] px-2 py-0.5 rounded border border-[#A67C52]/20">
                {pings} 坪
              </span>
            </div>

            <div className="mt-2.5 flex gap-1.5">
              {[3.5, 5, 7, 10, 14].map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPings(p)}
                  className={`skm-btn flex-1 rounded py-1.5 text-xs font-mono transition-all ${
                    pings === p
                      ? "bg-[#111111] text-white font-bold"
                      : "bg-[#FAF9F8] text-[#666666] hover:bg-black/[0.05] border border-black/[0.04]"
                  }`}
                >
                  {p}坪
                </button>
              ))}
            </div>
          </div>

          {/* Environment toggles */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <label className="flex items-center gap-2 rounded-lg bg-[#FAF9F8] p-2 text-xs text-[#444444] cursor-pointer border border-black/[0.04]">
              <input
                type="checkbox"
                checked={isWestSun}
                onChange={(e) => setIsWestSun(e.target.checked)}
                className="rounded accent-[#A67C52]"
              />
              <span>西曬 / 落地窗</span>
            </label>
            <label className="flex items-center gap-2 rounded-lg bg-[#FAF9F8] p-2 text-xs text-[#444444] cursor-pointer border border-black/[0.04]">
              <input
                type="checkbox"
                checked={isTopFloor}
                onChange={(e) => setIsTopFloor(e.target.checked)}
                className="rounded accent-[#A67C52]"
              />
              <span>頂樓 / 挑高</span>
            </label>
          </div>

          {/* Result Card - SKM Luxury Dark */}
          <div className="rounded-xl bg-[#111111] p-4.5 text-white border border-[#A67C52]/30 shadow-sm">
            <div className="flex items-baseline justify-between">
              <div>
                <p className="text-[11px] text-[#A67C52] font-mono uppercase tracking-wider">
                  RECOMMENDED COOLING CAPACITY
                </p>
                <p className="text-2xl font-bold font-mono tracking-tight text-white mt-0.5">
                  {acKw} <span className="text-sm font-sans font-normal text-stone-300">kW</span>
                </p>
              </div>
              <div className="text-right">
                <p className="text-[11px] text-stone-400 font-mono">台灣標準噸數</p>
                <p className="text-sm font-bold font-mono text-[#D4AF37]">
                  約 {acTons} 噸
                </p>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2.5 text-xs">
              <span className="text-[#D4AF37] font-medium flex items-center gap-1">
                <span>✦</span> 2026 節能補助特企
              </span>
              <span className="font-bold font-mono text-[#D4AF37]">
                最高現折 NT$ {acSubsidy.toLocaleString()}
              </span>
            </div>
          </div>

          <Link
            href="/tools/ac-calculator"
            className="skm-btn flex w-full items-center justify-center gap-1.5 rounded-lg bg-[#FAF9F8] py-2.5 text-xs font-semibold text-[#111111] border border-black/[0.08] hover:border-[#A67C52]/60 hover:bg-[#F7F3EE]"
          >
            <span>展開長寬精準換算與電費分析</span>
            <span className="font-mono text-xs">→</span>
          </Link>
        </div>
      ) : (
        <div className="mt-5 space-y-4">
          {/* Fridge people selection */}
          <div>
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-[#111111] tracking-wide">家庭同住人數：</span>
              <span className="font-mono text-sm font-bold text-[#A67C52] bg-[#FAF9F8] px-2 py-0.5 rounded border border-[#A67C52]/20">
                {persons} 人
              </span>
            </div>

            <div className="mt-2.5 flex gap-1.5">
              {[1, 2, 3, 4, 5].map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPersons(p)}
                  className={`skm-btn flex-1 rounded py-1.5 text-xs font-mono transition-all ${
                    persons === p
                      ? "bg-[#111111] text-white font-bold"
                      : "bg-[#FAF9F8] text-[#666666] hover:bg-black/[0.05] border border-black/[0.04]"
                  }`}
                >
                  {p}人
                </button>
              ))}
            </div>
          </div>

          {/* Costco toggle */}
          <div className="pt-1">
            <label className="flex items-center justify-between rounded-lg bg-[#FAF9F8] p-2.5 text-xs text-[#444444] cursor-pointer border border-black/[0.04]">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={isCostco}
                  onChange={(e) => setIsCostco(e.target.checked)}
                  className="rounded accent-[#A67C52]"
                />
                <span>好市多 Costco 採購習慣（大冷凍室）</span>
              </div>
              <span className="text-[11px] font-mono text-[#A67C52]">+140L</span>
            </label>
          </div>

          {/* Fridge Result */}
          <div className="rounded-xl bg-[#111111] p-4.5 text-white border border-[#A67C52]/30 shadow-sm">
            <div className="flex items-baseline justify-between">
              <div>
                <p className="text-[11px] text-[#A67C52] font-mono uppercase tracking-wider">
                  RECOMMENDED REFRIGERATOR VOLUME
                </p>
                <p className="text-2xl font-bold font-mono tracking-tight text-white mt-0.5">
                  {fridgeLiters} <span className="text-sm font-sans font-normal text-stone-300">L (公升)</span>
                </p>
              </div>
              <div className="text-right">
                <p className="text-[11px] text-stone-400 font-mono">推薦格局</p>
                <p className="text-xs font-bold text-[#D4AF37]">
                  {isCostco || fridgeLiters >= 500 ? "日系多門 / 法式四門" : "雙門 / 三門窄身"}
                </p>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2.5 text-xs">
              <span className="text-[#D4AF37] font-medium flex items-center gap-1">
                <span>✦</span> 2026 貨物稅減徵退稅
              </span>
              <span className="font-bold font-mono text-[#D4AF37]">
                可退 NT$ {fridgeTaxRefund.toLocaleString()}
              </span>
            </div>
          </div>

          <Link
            href="/tools/refrigerator-calculator"
            className="skm-btn flex w-full items-center justify-center gap-1.5 rounded-lg bg-[#FAF9F8] py-2.5 text-xs font-semibold text-[#111111] border border-black/[0.08] hover:border-[#A67C52]/60 hover:bg-[#F7F3EE]"
          >
            <span>展開廚房門寬與搬運動線避坑報告</span>
            <span className="font-mono text-xs">→</span>
          </Link>
        </div>
      )}
    </div>
  );
}
