"use client";

import { useState } from "react";
import { LineCta } from "@/components/LineCta";

const TAIWAN_ROOM_PRESETS = [
  { label: "小臥室/書房", ping: 3.5 },
  { label: "一般主臥房", ping: 5 },
  { label: "主臥加衛浴", ping: 7 },
  { label: "一般客廳", ping: 9 },
  { label: "客餐廳開放格局", ping: 12 },
  { label: "透天大客廳/頂樓", ping: 16 },
];

export function AcCalculator() {
  const [inputMode, setInputMode] = useState<"ping" | "meters">("ping");
  const [ping, setPing] = useState(5.0);
  const [lengthM, setLengthM] = useState(4.0);
  const [widthM, setWidthM] = useState(4.0);

  // Taiwan environmental factors
  const [isTopFloor, setIsTopFloor] = useState(false);
  const [isWestFacing, setIsWestFacing] = useState(false);
  const [isOpenSpace, setIsOpenSpace] = useState(false);
  const [hasHighCeiling, setHasHighCeiling] = useState(false);
  const [hasHeavyHeat, setHasHeavyHeat] = useState(false);

  const [hasOldAcToScrap, setHasOldAcToScrap] = useState(true);
  const [copied, setCopied] = useState(false);

  // Effective Ping
  const currentPing =
    inputMode === "meters"
      ? Math.round(((lengthM * widthM) / 3.3058) * 10) / 10
      : ping;

  // Base cooling: 0.58 kW / ping (approx 500 kcal/h)
  let kwRequirement = currentPing * 0.58;

  let multiplier = 1.0;
  if (isTopFloor) multiplier += 0.20;
  if (isWestFacing) multiplier += 0.20;
  if (isOpenSpace) multiplier += 0.15;
  if (hasHighCeiling) multiplier += 0.15;
  if (hasHeavyHeat) multiplier += 0.10;

  kwRequirement *= multiplier;

  const calculatedKw = Math.round(kwRequirement * 10) / 10;
  // Taiwan traditional ton = 2.3 kW / 2000 kcal
  const calculatedTons = Math.round((calculatedKw / 2.3) * 10) / 10;

  // Standard market kW sizes
  const standardKwOptions = [2.2, 2.8, 3.6, 4.1, 5.0, 6.3, 7.1, 8.0, 9.0, 10.0];
  const suggestedKw =
    standardKwOptions.find((s) => s >= calculatedKw) ?? standardKwOptions[standardKwOptions.length - 1];

  // 2026 Taiwan Subsidies Calculation
  const scrapSubsidy = hasOldAcToScrap ? 3000 : 0;
  const taxRefund = suggestedKw >= 3.6 ? 2000 : 1600;
  const totalGovSavings = scrapSubsidy + taxRefund;

  // Yearly Summer Electricity savings estimate (vs old fixed-speed tier 4/5)
  const yearlyPowerSavings = Math.round(120 * 8 * (suggestedKw * 0.38) * 4.5);

  const handleCopy = () => {
    const text = `【JazzHome 台灣冷氣選購與補助試算報告】\n房間實坪：${currentPing} 坪\n環境熱源條件：${[
      isTopFloor && "頂樓/鐵皮(+20%)",
      isWestFacing && "西曬/落地大窗(+20%)",
      isOpenSpace && "客餐廳開放格局(+15%)",
      hasHighCeiling && "挑高空間(+15%)",
      hasHeavyHeat && "多人/電器熱源(+10%)",
    ]
      .filter(Boolean)
      .join("、") || "一般標準室內"}\n建議冷房能力：${calculatedKw} kW（約 ${calculatedTons} 台灣噸）\n推薦市售規格：${suggestedKw} kW 機種\n2026 預估政府補助退稅：NT$ ${totalGovSavings.toLocaleString()} 元（汰舊換新 $3,000 + 貨物稅退稅 $${taxRefund}）\n預估年省電費：約 NT$ ${yearlyPowerSavings.toLocaleString()} 元 / 夏季`;

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="space-y-6">
      {/* Inset Group 1: Area Input & Method Toggle */}
      <div className="skm-card border border-black/[0.08] bg-white p-6 sm:p-7 shadow-2xs">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#A67C52] font-mono">
              步驟一：空間大小輸入
            </span>
            <p className="text-base font-bold text-[#111111]">室內實際坪數丈量</p>
          </div>

          {/* Segmented Control for input method */}
          <div className="flex rounded-lg bg-[#FAF9F8] p-1 border border-black/[0.06]">
            <button
              type="button"
              onClick={() => setInputMode("ping")}
              className={`skm-btn rounded-md px-3.5 py-1 text-xs font-semibold transition-all ${
                inputMode === "ping"
                  ? "bg-white text-[#111111] shadow-2xs border border-black/[0.08]"
                  : "text-[#777777] hover:text-[#111111]"
              }`}
            >
              直接選坪數
            </button>
            <button
              type="button"
              onClick={() => setInputMode("meters")}
              className={`skm-btn rounded-md px-3.5 py-1 text-xs font-semibold transition-all ${
                inputMode === "meters"
                  ? "bg-white text-[#111111] shadow-2xs border border-black/[0.08]"
                  : "text-[#777777] hover:text-[#111111]"
              }`}
            >
              長寬公尺換算
            </button>
          </div>
        </div>

        {inputMode === "ping" ? (
          <div className="mt-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#555555]">滑動微調坪數：</span>
              <span className="rounded bg-[#FAF9F8] px-3.5 py-1 text-sm font-bold font-mono text-[#A67C52] border border-[#A67C52]/30">
                {ping} 坪
              </span>
            </div>

            <input
              type="range"
              min={1.5}
              max={25}
              step={0.5}
              value={ping}
              onChange={(e) => setPing(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-[#E5E5EA] accent-[#A67C52]"
            />

            {/* Quick Presets */}
            <div className="flex flex-wrap gap-2 pt-1">
              {TAIWAN_ROOM_PRESETS.map((preset) => (
                <button
                  key={preset.label}
                  type="button"
                  onClick={() => setPing(preset.ping)}
                  className={`skm-btn rounded-md px-3 py-1.5 text-xs font-semibold transition-all ${
                    ping === preset.ping
                      ? "bg-[#111111] text-[#D4AF37] border border-[#A67C52]/40"
                      : "bg-[#FAF9F8] text-[#555555] border border-black/[0.06] hover:text-[#111111]"
                  }`}
                >
                  {preset.label} ({preset.ping}坪)
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-5 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-[#FAF9F8] p-3.5 border border-black/[0.06]">
                <label className="text-xs font-medium text-[#777777]">房間長度 (公尺 m)</label>
                <div className="mt-1 flex items-center justify-between">
                  <input
                    type="number"
                    step="0.1"
                    min="1"
                    max="20"
                    value={lengthM}
                    onChange={(e) => setLengthM(Math.max(1, Number(e.target.value)))}
                    className="w-24 rounded-lg border border-black/[0.1] bg-white px-2.5 py-1 text-base font-bold text-[#111111]"
                  />
                  <span className="text-xs text-[#777777]">公尺</span>
                </div>
              </div>

              <div className="rounded-xl bg-[#FAF9F8] p-3.5 border border-black/[0.06]">
                <label className="text-xs font-medium text-[#777777]">房間寬度 (公尺 m)</label>
                <div className="mt-1 flex items-center justify-between">
                  <input
                    type="number"
                    step="0.1"
                    min="1"
                    max="20"
                    value={widthM}
                    onChange={(e) => setWidthM(Math.max(1, Number(e.target.value)))}
                    className="w-24 rounded-lg border border-black/[0.1] bg-white px-2.5 py-1 text-base font-bold text-[#111111]"
                  />
                  <span className="text-xs text-[#777777]">公尺</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-xl bg-[#FAF9F8] px-4 py-2.5 text-xs text-[#8C6438] border border-[#A67C52]/20 font-mono">
              <span>換算結果：{lengthM}m × {widthM}m = {(lengthM * widthM).toFixed(1)} 平方公尺</span>
              <span className="font-bold text-sm">約 {currentPing} 坪</span>
            </div>
          </div>
        )}
      </div>

      {/* Inset Group 2: Taiwan Climate & Structure Factors */}
      <div className="skm-card border border-black/[0.08] bg-white p-6 sm:p-7 shadow-2xs">
        <span className="text-xs font-bold uppercase tracking-wider text-[#A67C52] font-mono">
          步驟二：台灣建築環境加成
        </span>
        <h3 className="mt-1 text-base font-bold text-[#111111]">
          環境熱源加成（精確避開下午吹不涼）
        </h3>
        <p className="mt-1 text-xs text-[#777777]">
          台灣夏季悶熱，若有頂樓或西曬熱源，系統將自動依甲級工程規範上調安全能力
        </p>

        <div className="mt-4 divide-y divide-black/[0.04]">
          <ToggleRow
            label="頂樓加蓋 / 頂樓無遮蔽戶"
            desc="天花板全日受烈日曝曬蓄熱 (+20%)"
            checked={isTopFloor}
            onChange={setIsTopFloor}
          />
          <ToggleRow
            label="嚴重西曬 / 大面積落地玻璃窗"
            desc="午後陽光直射房間，熱輻射累積快速 (+20%)"
            checked={isWestFacing}
            onChange={setIsWestFacing}
          />
          <ToggleRow
            label="客餐廳連通 / 開放式廚房格局"
            desc="無隔間冷氣易擴散至走廊，並受瓦斯爐熱源影響 (+15%)"
            checked={isOpenSpace}
            onChange={setIsOpenSpace}
          />
          <ToggleRow
            label="室內挑高 (> 3.2 米)"
            desc="空間體積立方米較大，需要更大冷房循環量 (+15%)"
            checked={hasHighCeiling}
            onChange={setHasHighCeiling}
          />
          <ToggleRow
            label="常備多台電腦/伺服器/多人聚會"
            desc="電器散熱量大或常駐 4 人以上 (+10%)"
            checked={hasHeavyHeat}
            onChange={setHasHeavyHeat}
          />
        </div>
      </div>

      {/* Inset Group 3: Realtime Calculated Results + Subsidies + Electricity */}
      <div className="skm-card overflow-hidden border border-[#A67C52]/30 bg-white p-6 sm:p-8 shadow-2xs">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[#A67C52] text-sm">✦</span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#111111] font-mono">
                試算結果
              </span>
            </div>
            <h3 className="mt-1 text-xl font-extrabold tracking-tight text-[#111111]">
              冷房規格與 2026 補助試算
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

        {/* 4-Card Spec & Subsidy Matrix */}
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl bg-[#FAF9F8] p-4.5 border border-black/[0.06]">
            <p className="text-xs font-medium text-[#777777]">建議精確冷房能力</p>
            <p className="mt-1 text-2xl font-bold tracking-tight text-[#111111] font-mono">
              {calculatedKw} <span className="text-sm font-sans font-normal text-[#777777]">kW</span>
            </p>
            <p className="mt-1 text-[11px] text-[#777777]">
              約合 <strong>{calculatedTons} 台灣噸</strong>
            </p>
          </div>

          <div className="rounded-xl bg-[#FAF9F8] p-4.5 border border-[#A67C52]/30">
            <p className="text-xs font-medium text-[#8C6438] font-mono">推薦市售對應機種</p>
            <p className="mt-1 text-2xl font-bold tracking-tight text-[#A67C52] font-mono">
              {suggestedKw} <span className="text-sm font-sans font-normal text-[#777777]">kW</span>
            </p>
            <p className="mt-1 text-[11px] text-[#555555]">
              選 <strong>CSPF 1 級能效</strong> 最省電
            </p>
          </div>

          <div className="rounded-xl bg-[#F7F3EE] p-4.5 border border-[#A67C52]/30">
            <p className="text-xs font-medium text-[#8C6438] font-mono">2026 政府補助退稅</p>
            <p className="mt-1 text-2xl font-bold tracking-tight text-[#8C6438] font-mono">
              NT$ {totalGovSavings.toLocaleString()}
            </p>
            <p className="mt-1 text-[11px] text-[#555555]">
              汰舊換新 $3,000 + 退稅 ${taxRefund}
            </p>
          </div>

          <div className="rounded-xl bg-[#FAF9F8] p-4.5 border border-black/[0.06]">
            <p className="text-xs font-medium text-[#777777]">夏季電費年省預估</p>
            <p className="mt-1 text-2xl font-bold tracking-tight text-[#111111] font-mono">
              約 NT$ {yearlyPowerSavings.toLocaleString()}
            </p>
            <p className="mt-1 text-[11px] text-[#777777]">
              比老舊 4 級定頻每年省
            </p>
          </div>
        </div>

        {/* Subsidy Toggle */}
        <div className="mt-4 flex items-center justify-between rounded-xl bg-white p-3.5 border border-black/[0.06]">
          <div className="flex items-center gap-2">
            <input
              id="scrap-check"
              type="checkbox"
              checked={hasOldAcToScrap}
              onChange={(e) => setHasOldAcToScrap(e.target.checked)}
              className="h-4 w-4 rounded accent-[#A67C52]"
            />
            <label htmlFor="scrap-check" className="text-xs font-medium text-[#111111] cursor-pointer">
              我有舊冷氣需請師傅回收報廢（享有 3,000 元汰舊換新補助 + 廢四機回收單）
            </label>
          </div>
          <span className="text-xs font-semibold text-[#A67C52] hidden sm:inline font-mono">
            {hasOldAcToScrap ? "最高可領 $5,000" : `可領退稅 $${taxRefund}`}
          </span>
        </div>

        <div className="mt-4 rounded-lg bg-[#FAF9F8] p-4 text-xs leading-relaxed text-[#555555] border border-black/[0.04]">
          ✦ <strong>台灣選購建議：</strong>
          市售主力機型為 2.2kW (約3-4坪)、2.8kW (約4-5坪)、3.6kW (約6-7坪)、4.1kW (約7-8坪)、5.0kW (約8-10坪)、6.3kW (約10-12坪)、7.1kW (約12-14坪)。
          若房間有頂樓或西曬，請務必按照加成後的 <strong>{suggestedKw} kW</strong> 選購，避免壓縮機在夏日午後長時間超頻運轉損耗。
        </div>
      </div>

      {/* LINE Banner */}
      <LineCta
        variant="banner"
        title="不確定室外機散熱空間與洗洞位置？"
        description={`已為您試算需約 ${suggestedKw} kW（${calculatedTons} 噸）。把大樓陽台照片或格局圖傳到 LINE，幫您免費看室外機能不能裝、會不會產生額外施工加價。`}
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
        <p className="text-sm font-bold text-[#111111]">{label}</p>
        <p className="text-xs text-[#777777]">{desc}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
          checked ? "bg-[#111111]" : "bg-[#E5E5EA]"
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
