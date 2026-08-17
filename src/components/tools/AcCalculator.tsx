"use client";

import { useState } from "react";
import { LineCta } from "@/components/LineCta";

const ROOM_PRESETS = [
  { label: "小雅房", ping: 3 },
  { label: "主臥房", ping: 5 },
  { label: "一般客廳", ping: 8 },
  { label: "大客廳/客餐廳", ping: 12 },
  { label: "頂樓大空間", ping: 16 },
];

export function AcCalculator() {
  const [ping, setPing] = useState(4.5);
  const [isTopFloor, setIsTopFloor] = useState(false);
  const [isWestFacing, setIsWestFacing] = useState(false);
  const [isOpenSpace, setIsOpenSpace] = useState(false);
  const [hasHighCeiling, setHasHighCeiling] = useState(false);
  const [copied, setCopied] = useState(false);

  // Base: 0.58 kW per ping (approx 500 kcal/h)
  let kwRequirement = ping * 0.58;

  let multiplier = 1.0;
  if (isTopFloor) multiplier += 0.15;
  if (isWestFacing) multiplier += 0.15;
  if (isOpenSpace) multiplier += 0.10;
  if (hasHighCeiling) multiplier += 0.10;

  kwRequirement *= multiplier;

  // Round up to nearest 0.1 kW
  const calculatedKw = Math.round(kwRequirement * 10) / 10;
  // Convert to Taiwanese tons (1 噸 ≈ 2.5 kW / 2200 kcal/h)
  const calculatedTons = Math.round((calculatedKw / 2.3) * 10) / 10;

  // Common market nominal cooling sizes in kW
  const standardKwOptions = [2.2, 2.8, 3.6, 4.1, 5.0, 6.3, 7.1, 8.5, 9.0, 10.0];
  const suggestedKw =
    standardKwOptions.find((s) => s >= calculatedKw) ?? standardKwOptions[standardKwOptions.length - 1];

  const handleCopy = () => {
    const text = `【JazzHome 冷氣坪數試算結果】\n房間坪數：${ping} 坪\n環境條件：${[
      isTopFloor && "頂樓/鐵皮",
      isWestFacing && "西曬嚴重",
      isOpenSpace && "客餐廳開放式",
      hasHighCeiling && "挑高空間",
    ]
      .filter(Boolean)
      .join("、") || "一般室內"}\n建議冷房能力：${calculatedKw} kW（約 ${calculatedTons} 噸）\n市售建議選購：${suggestedKw} kW 機種\nCSPF 建議：一級能效（CSPF ≥ 5.5）`;

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="space-y-6">
      {/* Inset Group 1: Room Area Input & Presets */}
      <div className="apple-card border border-black/[0.05] bg-white p-6 sm:p-7">
        <div className="flex items-center justify-between">
          <label htmlFor="ping-slider" className="text-sm font-semibold text-[#1C1C1E]">
            房間室內實坪
          </label>
          <span className="rounded-full bg-[#0071E3]/10 px-3 py-1 text-sm font-bold text-[#0071E3]">
            {ping} 坪
          </span>
        </div>

        {/* Preset Pills */}
        <div className="mt-3 flex flex-wrap gap-2">
          {ROOM_PRESETS.map((preset) => (
            <button
              key={preset.label}
              type="button"
              onClick={() => setPing(preset.ping)}
              className={`apple-btn-active rounded-full px-3 py-1 text-xs font-medium transition-all ${
                ping === preset.ping
                  ? "bg-[#1C1C1E] text-white"
                  : "bg-[#F2F2F7] text-[#636366] hover:bg-black/[0.08]"
              }`}
            >
              {preset.label} ({preset.ping}坪)
            </button>
          ))}
        </div>

        {/* Range Slider */}
        <div className="mt-5">
          <input
            id="ping-slider"
            type="range"
            min={1}
            max={25}
            step={0.5}
            value={ping}
            onChange={(e) => setPing(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-[#E5E5EA]"
          />
          <div className="mt-2 flex justify-between text-xs text-[#8E8E93]">
            <span>1 坪 (套房小空間)</span>
            <span>12 坪 (一般客廳)</span>
            <span>25 坪 (透天大格局)</span>
          </div>
        </div>
      </div>

      {/* Inset Group 2: Environment Toggles */}
      <div className="apple-card border border-black/[0.05] bg-white p-6 sm:p-7">
        <h3 className="text-sm font-semibold text-[#1C1C1E]">
          環境熱源加成（選填）
        </h3>
        <p className="mt-1 text-xs text-[#8E8E93]">
          若有高熱源條件，系統將自動依工程安全係數加成冷房能力
        </p>

        <div className="mt-4 divide-y divide-black/[0.04]">
          <ToggleRow
            label="頂樓加蓋 / 頂樓戶"
            desc="天花板吸熱嚴重，午後熱傳導強 (+15%)"
            checked={isTopFloor}
            onChange={setIsTopFloor}
          />
          <ToggleRow
            label="西曬嚴重 / 落地大窗"
            desc="午後陽光直射房間，熱輻射累積 (+15%)"
            checked={isWestFacing}
            onChange={setIsWestFacing}
          />
          <ToggleRow
            label="客餐廳連通 / 開放式空間"
            desc="無隔間阻隔，冷氣擴散範圍大 (+10%)"
            checked={isOpenSpace}
            onChange={setIsOpenSpace}
          />
          <ToggleRow
            label="室內挑高 (> 3.2 米) 或多電器熱源"
            desc="空間體積大或常備電腦伺服器 (+10%)"
            checked={hasHighCeiling}
            onChange={setHasHighCeiling}
          />
        </div>
      </div>

      {/* Inset Group 3: Realtime Calculated Result */}
      <div className="apple-card overflow-hidden border border-[#0071E3]/20 bg-gradient-to-b from-[#0071E3]/[0.03] to-white p-6 sm:p-8">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0071E3]">
            建議冷房規格試算
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
            <p className="text-xs font-medium text-[#8E8E93]">建議冷房能力需求</p>
            <p className="mt-1 text-3xl font-bold tracking-tight text-[#1C1C1E]">
              {calculatedKw} <span className="text-lg font-semibold text-[#636366]">kW</span>
            </p>
            <p className="mt-1 text-xs text-[#8E8E93]">
              約合台灣俗稱 <strong>{calculatedTons} 噸</strong> 冷氣
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 border border-black/[0.04] shadow-sm">
            <p className="text-xs font-medium text-[#8E8E93]">推薦市售對應機種</p>
            <p className="mt-1 text-3xl font-bold tracking-tight text-[#0071E3]">
              {suggestedKw} <span className="text-lg font-semibold text-[#0071E3]/80">kW 機種</span>
            </p>
            <p className="mt-1 text-xs text-[#636366]">
              挑選 <strong>CSPF 一級能效（≥ 5.5）</strong> 最省電
            </p>
          </div>
        </div>

        <div className="mt-4 rounded-xl bg-[#F2F2F7]/70 p-4 text-xs leading-relaxed text-[#636366]">
          💡 <strong>專家選購叮嚀：</strong>
          市售冷氣規格通常為 2.2kW、2.8kW、3.6kW、4.1kW、5.0kW、6.3kW、7.1kW 等。
          {multiplier > 1.0
            ? " 由於您的房間有環境熱源加成，建議選購略高於基本需求的規格，避免盛夏午後壓縮機長時間超頻耗電。"
            : " 若無特殊熱源，選擇建議 kW 即可達到最佳恆溫與能效表現。"}
        </div>
      </div>

      {/* LINE Consultation CTA */}
      <LineCta
        variant="banner"
        title="不確定室外機位置與排水怎麼走？"
        description={`已為您試算需約 ${suggestedKw} kW（${calculatedTons} 噸）。安裝現場的銅管走線、室外機通風與排水才是關鍵，可將現場照片傳到 LINE 免費評估。`}
      />
    </div>
  );
}

function ToggleRow({
  label,
  desc,
  checked,
  onChange,
}: {
  label: string;
  desc: string;
  checked: boolean;
  onChange: (val: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between py-3">
      <div className="pr-4">
        <p className="text-sm font-medium text-[#1C1C1E]">{label}</p>
        <p className="text-xs text-[#8E8E93]">{desc}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
          checked ? "bg-[#0071E3]" : "bg-[#E5E5EA]"
        }`}
      >
        <span
          className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
            checked ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}
