"use client";

import { useState } from "react";
import { LineCta } from "@/components/LineCta";

const COMMON_TV_SIZES = [43, 50, 55, 65, 75, 85, 98];

export function TvDistanceCalculator() {
  const [mode, setMode] = useState<"size" | "distance">("size");
  const [tvSize, setTvSize] = useState(65);
  const [distance, setDistance] = useState(2.4);
  const [copied, setCopied] = useState(false);

  const calculateDistances = (size: number) => {
    const screenWidthCm = size * 2.54 * 0.8716; // 16:9 width
    const thxM = Math.round((size * 2.54 * 3.0) / 10) / 10;
    const smpteM = Math.round((size * 2.54 * 3.8) / 10) / 10;
    return {
      cinema: thxM,
      everyday: smpteM,
      widthCm: Math.round(screenWidthCm),
    };
  };

  const calculateSizes = (distM: number) => {
    const idealCinemaInches = Math.round((distM * 100) / (2.54 * 3.0));
    const idealEverydayInches = Math.round((distM * 100) / (2.54 * 3.8));

    const closestSize = COMMON_TV_SIZES.reduce((prev, curr) =>
      Math.abs(curr - idealCinemaInches) < Math.abs(prev - idealCinemaInches) ? curr : prev
    );

    return {
      cinemaInches: idealCinemaInches,
      everydayInches: idealEverydayInches,
      recommendedSize: closestSize,
    };
  };

  const distResult = calculateDistances(tvSize);
  const sizeResult = calculateSizes(distance);

  const handleCopy = () => {
    const text =
      mode === "size"
        ? `【JazzHome 電視觀看距離試算】\n電視尺寸：${tvSize} 吋 (螢幕寬約 ${distResult.widthCm} cm)\nTHX 4K 劇院沉浸距離：${distResult.cinema} 公尺\nSMPTE 日常舒適距離：${distResult.everyday} 公尺\n選購建議：客廳沙發淨距離約 ${distResult.cinema}～${distResult.everyday} 米為最佳觀看範圍。`
        : `【JazzHome 客廳深度電視推薦】\n沙發觀看距離：${distance} 公尺\n推薦電視尺寸：${sizeResult.recommendedSize} 吋\n4K 沉浸視野：${sizeResult.cinemaInches} 吋\n選購建議：只要客廳淨距達 ${distance} 米，推薦直上 ${sizeResult.recommendedSize} 吋 4K 電視享受絕佳畫質。`;

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="space-y-6">
      {/* Inset Group 1: Segmented Control & Input */}
      <div className="skm-card border border-black/[0.08] bg-white p-6 sm:p-7 shadow-2xs">
        {/* Segmented Control */}
        <div className="flex rounded-lg bg-[#FAF9F8] p-1 border border-black/[0.06]">
          <button
            type="button"
            onClick={() => setMode("size")}
            className={`skm-btn flex-1 rounded-md py-2 text-xs font-semibold transition-all ${
              mode === "size"
                ? "bg-white text-[#111111] shadow-2xs border border-black/[0.08]"
                : "text-[#777777] hover:text-[#111111]"
            }`}
          >
            已知電視尺寸（算客廳距離）
          </button>
          <button
            type="button"
            onClick={() => setMode("distance")}
            className={`skm-btn flex-1 rounded-md py-2 text-xs font-semibold transition-all ${
              mode === "distance"
                ? "bg-white text-[#111111] shadow-2xs border border-black/[0.08]"
                : "text-[#777777] hover:text-[#111111]"
            }`}
          >
            已知客廳深度（算建議吋數）
          </button>
        </div>

        <div className="mt-6">
          {mode === "size" ? (
            <div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-[#111111]">
                  選擇電視吋數
                </label>
                <span className="rounded bg-[#FAF9F8] px-3 py-1 text-sm font-bold font-mono text-[#A67C52] border border-[#A67C52]/30">
                  {tvSize} 吋
                </span>
              </div>

              {/* Quick Select TV Size Pills */}
              <div className="mt-3.5 flex flex-wrap gap-2">
                {COMMON_TV_SIZES.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setTvSize(s)}
                    className={`skm-btn rounded-md px-3.5 py-1.5 text-xs font-semibold transition-all ${
                      tvSize === s
                        ? "bg-[#111111] text-[#D4AF37] border border-[#A67C52]/40"
                        : "bg-[#FAF9F8] text-[#555555] border border-black/[0.06] hover:text-[#111111]"
                    }`}
                  >
                    {s} 吋
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="distance-slider" className="text-sm font-bold text-[#111111]">
                  沙發至電視牆「淨距離」
                </label>
                <span className="rounded bg-[#FAF9F8] px-3 py-1 text-sm font-bold font-mono text-[#A67C52] border border-[#A67C52]/30">
                  {distance} 公尺
                </span>
              </div>

              <div className="mt-4">
                <input
                  id="distance-slider"
                  type="range"
                  min={1.2}
                  max={5.0}
                  step={0.1}
                  value={distance}
                  onChange={(e) => setDistance(Number(e.target.value))}
                  className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-[#E5E5EA] accent-[#A67C52]"
                />
                <div className="mt-2 flex justify-between text-xs font-mono text-[#777777]">
                  <span>1.2 m (臥室小空間)</span>
                  <span>2.5 m (一般客廳)</span>
                  <span>5.0 m (大客廳豪宅)</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Inset Group 2: Output Display */}
      <div className="skm-card overflow-hidden border border-[#A67C52]/30 bg-white p-6 sm:p-8 shadow-2xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#A67C52] text-sm">✦</span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#111111] font-mono">
              4K UHD 最佳觀賞分析結果
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

        {mode === "size" ? (
          <div className="mt-5 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-[#FAF9F8] p-5 border border-black/[0.06]">
                <p className="text-xs font-medium text-[#777777]">THX 4K 劇院沉浸距離 (40°視角)</p>
                <p className="mt-1 text-3xl font-bold tracking-tight text-[#A67C52] font-mono">
                  {distResult.cinema} <span className="text-base font-sans text-[#777777]">公尺</span>
                </p>
                <p className="mt-1 text-xs text-[#555555]">
                  觀賞 4K 電影、Netflix、PS5 遊戲最震撼
                </p>
              </div>

              <div className="rounded-xl bg-[#FAF9F8] p-5 border border-black/[0.06]">
                <p className="text-xs font-medium text-[#777777]">SMPTE 日常通用距離 (30°視角)</p>
                <p className="mt-1 text-3xl font-bold tracking-tight text-[#111111] font-mono">
                  {distResult.everyday} <span className="text-base font-sans text-[#777777]">公尺</span>
                </p>
                <p className="mt-1 text-xs text-[#555555]">
                  看新聞、YouTube、綜藝節目眼睛不疲勞
                </p>
              </div>
            </div>

            <div className="rounded-lg bg-[#FAF9F8] p-4 text-xs leading-relaxed text-[#555555] border border-black/[0.04]">
              📏 <strong>尺寸參考：</strong> {tvSize} 吋電視的螢幕本體寬度約為 <strong>{distResult.widthCm} 公分</strong>。購買前請確認電視櫃或預計壁掛牆面寬度是否充足。
            </div>
          </div>
        ) : (
          <div className="mt-5 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-[#FAF9F8] p-5 border border-black/[0.06]">
                <p className="text-xs font-medium text-[#777777]">市售最推薦尺寸</p>
                <p className="mt-1 text-3xl font-bold tracking-tight text-[#A67C52] font-mono">
                  {sizeResult.recommendedSize} <span className="text-base font-sans text-[#777777]">吋</span>
                </p>
                <p className="mt-1 text-xs text-[#555555]">
                  對應 {distance} 米客廳深度之黃金比例
                </p>
              </div>

              <div className="rounded-xl bg-[#FAF9F8] p-5 border border-black/[0.06]">
                <p className="text-xs font-medium text-[#777777]">極致劇院沉浸尺寸</p>
                <p className="mt-1 text-3xl font-bold tracking-tight text-[#111111] font-mono">
                  {sizeResult.cinemaInches} <span className="text-base font-sans text-[#777777]">吋</span>
                </p>
                <p className="mt-1 text-xs text-[#555555]">
                  可考慮直上大一階機型獲得劇院享受
                </p>
              </div>
            </div>

            <div className="rounded-lg bg-[#FAF9F8] p-4 text-xs leading-relaxed text-[#555555] border border-black/[0.04]">
              ✦ <strong>丈量技巧：</strong> 請務必將客廳總寬度扣除「沙發背枕深度（約 80~90cm）」與「電視櫃深度（約 40~50cm）」，兩者扣除後的實際眼距才是真實觀看距離。
            </div>
          </div>
        )}
      </div>

      <LineCta
        variant="banner"
        title="客廳採光強？猶豫 OLED 還是 Mini-LED？"
        description="大落地窗怕反光、還是暗室看電影要極致黑位？拍下客廳採光與格局傳到 LINE，為您精準分析面板與壁掛施工方案。"
      />
    </div>
  );
}
