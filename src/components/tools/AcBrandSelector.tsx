"use client";

import { useState } from "react";
import Link from "next/link";
import { AC_BRANDS, type BrandTier } from "@/lib/brands";
import { lineUrl } from "@/lib/monetization";

export function AcBrandSelector() {
  const [typeFilter, setTypeFilter] = useState<"all" | "split" | "window">("all");
  const [tierFilter, setTierFilter] = useState<"all" | BrandTier>("all");
  const [expandedBrandId, setExpandedBrandId] = useState<string | null>("daikin");

  const filteredBrands = AC_BRANDS.filter((brand) => {
    // Type filter
    if (typeFilter === "split" && brand.typesSupported === "window") return false;
    if (typeFilter === "window" && brand.typesSupported === "split") return false;
    // Tier filter
    if (tierFilter !== "all" && brand.tier !== tierFilter) return false;
    return true;
  });

  return (
    <div className="space-y-8">
      {/* Split vs Window Decision Guide Pill */}
      <div className="skm-card border border-black/[0.08] bg-white p-6 sm:p-7 shadow-2xs">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#A67C52] font-mono">
              型態選購決策
            </span>
            <h3 className="mt-1 text-base font-bold text-[#111111]">
              分離式 vs 窗型冷氣：你家適合哪種？
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-[#555555]">
              分離式極度靜音且能效最高；窗型冷氣結構耐用、免拉長銅管，適合老屋已有窗型孔或大樓無外機平台空間。
            </p>
          </div>

          <div className="flex rounded-lg bg-[#FAF9F8] p-1 shrink-0 border border-black/[0.06]">
            <button
              type="button"
              onClick={() => setTypeFilter("all")}
              className={`skm-btn rounded-md px-3.5 py-1.5 text-xs font-semibold transition-all ${
                typeFilter === "all"
                  ? "bg-white text-[#111111] shadow-2xs border border-black/[0.08]"
                  : "text-[#777777] hover:text-[#111111]"
              }`}
            >
              全部 (10大品牌)
            </button>
            <button
              type="button"
              onClick={() => setTypeFilter("split")}
              className={`skm-btn rounded-md px-3.5 py-1.5 text-xs font-semibold transition-all ${
                typeFilter === "split"
                  ? "bg-white text-[#111111] shadow-2xs border border-black/[0.08]"
                  : "text-[#777777] hover:text-[#111111]"
              }`}
            >
              分離式 (10品牌)
            </button>
            <button
              type="button"
              onClick={() => setTypeFilter("window")}
              className={`skm-btn rounded-md px-3.5 py-1.5 text-xs font-semibold transition-all ${
                typeFilter === "window"
                  ? "bg-white text-[#111111] shadow-2xs border border-black/[0.08]"
                  : "text-[#777777] hover:text-[#111111]"
              }`}
            >
              窗型冷氣 (5大品牌)
            </button>
          </div>
        </div>

        {/* Tier Filter Tabs */}
        <div className="mt-5 flex flex-wrap gap-2 border-t border-black/[0.05] pt-4">
          <span className="text-xs font-medium text-[#777777] self-center mr-1 font-mono">品牌級距：</span>
          {[
            { id: "all", label: "全部級距" },
            { id: "flagship_japan", label: "日系一線頂級 (大金/國際/日立/三菱重工/富士通)" },
            { id: "smart_korean", label: "韓系美型智慧 (LG)" },
            { id: "value_taiwan", label: "台灣國民超值 (禾聯/東元/聲寶/奇美)" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setTierFilter(tab.id as "all" | BrandTier)}
              className={`skm-btn rounded-md px-3 py-1 text-xs font-semibold transition-all ${
                tierFilter === tab.id
                  ? "bg-[#111111] text-[#D4AF37] border border-[#A67C52]/40"
                  : "bg-[#FAF9F8] text-[#555555] border border-black/[0.06] hover:text-[#111111]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Brands Grid & Interactive Inspector */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <p className="text-xs font-bold text-[#777777] uppercase tracking-wider font-mono">
            共篩選出 {filteredBrands.length} 個台灣主流品牌
          </p>
          <span className="text-xs text-[#777777]">點擊卡片展開系列型號與優缺點</span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {filteredBrands.map((brand) => {
            const isExpanded = expandedBrandId === brand.id;
            return (
              <div
                key={brand.id}
                className={`skm-card overflow-hidden transition-all bg-white border ${
                  isExpanded ? "border-[#A67C52]/50 shadow-sm" : "border-black/[0.08]"
                }`}
              >
                {/* Brand Header */}
                <button
                  type="button"
                  onClick={() => setExpandedBrandId(isExpanded ? null : brand.id)}
                  className="flex w-full items-start justify-between p-5 text-left transition-colors hover:bg-[#FAF9F8]"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap font-mono">
                      <span
                        className="rounded-md px-2 py-0.5 text-xs font-bold bg-[#FAF9F8] text-[#8C6438] border border-[#A67C52]/30"
                      >
                        {brand.tierLabel}
                      </span>
                      <span className="rounded bg-black/[0.04] px-1.5 py-0.5 text-[11px] font-semibold text-[#111111]">
                        {brand.currentGenTag}
                      </span>
                      <span className="text-[11px] font-medium text-[#777777]">
                        {brand.origin}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-[#111111]">
                      {brand.chineseName}{" "}
                      <span className="text-sm font-normal text-[#777777]">
                        ({brand.name})
                      </span>
                    </h4>

                    <p className="text-xs text-[#555555] line-clamp-1">
                      {brand.bestFor}
                    </p>
                  </div>

                  <div className="text-right shrink-0 pl-3">
                    <span className="text-xs font-bold font-mono text-[#A67C52] block">
                      {brand.marketPriceRange}
                    </span>
                    <span className="text-[11px] text-[#777777]">
                      保固 {brand.warranty.compressor}
                    </span>
                    <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#FAF9F8] border border-black/[0.08] text-[10px] font-bold text-[#777777] ml-auto">
                      {isExpanded ? "▲" : "▼"}
                    </span>
                  </div>
                </button>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="border-t border-black/[0.05] bg-[#FAF9F8] p-5 space-y-4 text-xs">
                    {/* Types Available Badge */}
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-[#111111]">提供型態：</span>
                      {brand.typesSupported === "both" ? (
                        <>
                          <span className="rounded bg-white border border-[#A67C52]/30 px-2 py-0.5 font-bold text-[#8C6438]">
                            分離式冷氣
                          </span>
                          <span className="rounded bg-white border border-black/[0.1] px-2 py-0.5 font-bold text-[#111111]">
                            窗型冷氣
                          </span>
                        </>
                      ) : brand.typesSupported === "split" ? (
                        <span className="rounded bg-white border border-[#A67C52]/30 px-2 py-0.5 font-bold text-[#8C6438]">
                          僅分離式機種
                        </span>
                      ) : (
                        <span className="rounded bg-white border border-black/[0.1] px-2 py-0.5 font-bold text-[#111111]">
                          僅窗型機種
                        </span>
                      )}
                      <span className="text-[#777777] ml-auto font-mono">{brand.cspfRating}</span>
                    </div>

                    {/* Split Series List */}
                    <div>
                      <p className="font-bold text-[#111111]">
                        【分離式主力系列】：
                      </p>
                      <div className="mt-2 space-y-1.5">
                        {brand.splitSeries.map((s, idx) => (
                          <div
                            key={idx}
                            className="rounded-lg bg-white p-2.5 border border-black/[0.06] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 shadow-2xs"
                          >
                            <div>
                              <span className="font-bold text-[#111111] mr-2">
                                {s.name}
                              </span>
                              <span className="rounded bg-[#FAF9F8] px-1.5 py-0.5 text-[10px] font-medium text-[#555555]">
                                {s.level}
                              </span>
                            </div>
                            <span className="text-[11px] text-[#555555]">
                              {s.feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Window Series List if exists */}
                    {brand.windowSeries && (
                      <div>
                        <p className="font-bold text-[#111111]">
                          【窗型冷氣主力系列】：
                        </p>
                        <div className="mt-2 space-y-1.5">
                          {brand.windowSeries.map((w, idx) => (
                            <div
                              key={idx}
                              className="rounded-lg bg-white p-2.5 border border-black/[0.06] shadow-2xs"
                            >
                              <p className="font-bold text-[#111111]">{w.name}</p>
                              <p className="text-[11px] text-[#555555] mt-0.5">
                                {w.feature}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Pros & Cons */}
                    <div className="grid gap-3 sm:grid-cols-2 pt-2 border-t border-black/[0.05]">
                      <div className="rounded-lg bg-white p-3 border border-[#047857]/30 shadow-2xs">
                        <p className="font-bold text-[#047857] mb-1">
                          ✓ 核心優點
                        </p>
                        <ul className="space-y-1 text-[#065F46] text-[11px]">
                          {brand.pros.map((p, idx) => (
                            <li key={idx}>• {p}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-lg bg-white p-3 border border-[#B45309]/30 shadow-2xs">
                        <p className="font-bold text-[#B45309] mb-1">
                          ⚠️ 購買注意點
                        </p>
                        <ul className="space-y-1 text-[#92400E] text-[11px]">
                          {brand.cons.map((c, idx) => (
                            <li key={idx}>• {c}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom CTA for brand */}
                    <div className="flex items-center justify-between pt-2">
                      <Link
                        href="/tools/ac-calculator"
                        className="font-bold text-[#111111] hover:text-[#A67C52] transition-colors"
                      >
                        試算此品牌建議噸數與補助 →
                      </Link>

                      <a
                        href={lineUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="skm-btn rounded-md bg-[#111111] px-3.5 py-1.5 text-xs font-semibold text-[#D4AF37] border border-[#A67C52]/40 shadow-xs hover:bg-black"
                      >
                        LINE 諮詢 {brand.chineseName} 報價
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Split vs Window Comparison Table */}
      <div className="skm-card overflow-hidden border border-black/[0.08] bg-white p-6 sm:p-7 shadow-2xs">
        <div className="max-w-xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#A67C52] font-mono">
            深入解析
          </span>
          <h3 className="mt-1 text-base font-bold text-[#111111]">
            分離式 vs 窗型冷氣 完整實務對照
          </h3>
          <p className="mt-1 text-xs text-[#555555]">
            從運轉噪音、省電 CSPF、安裝難度到老屋孔洞限制全盤比較
          </p>
        </div>

        <div className="mt-5 overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="border-b border-black/[0.08] bg-[#FAF9F8] text-xs font-bold text-[#111111] font-mono">
              <tr>
                <th className="px-4 py-3">比較項目</th>
                <th className="px-4 py-3 text-[#A67C52]">分離式冷氣 (一對一 / 一對多)</th>
                <th className="px-4 py-3 text-[#111111]">窗型冷氣 (變頻 / 定頻)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/[0.04] text-[#444444]">
              <tr className="hover:bg-[#FAF9F8]">
                <td className="px-4 py-3 font-bold text-[#111111]">室內運轉噪音</td>
                <td className="px-4 py-3 font-semibold text-[#A67C52]">極度安靜 (約 19 ～ 26 dB，壓縮機在外牆)</td>
                <td className="px-4 py-3 text-[#555555]">壓縮機在同機身，稍有運轉聲 (約 38 ～ 48 dB)</td>
              </tr>
              <tr className="hover:bg-[#FAF9F8]">
                <td className="px-4 py-3 font-bold text-[#111111]">省電能效 CSPF</td>
                <td className="px-4 py-3 font-semibold text-[#A67C52]">最高 (CSPF 達 6.5 ～ 7.42 一級能效)</td>
                <td className="px-4 py-3 text-[#555555]">變頻一級約 CSPF 5.0 ～ 6.0，定頻較耗電</td>
              </tr>
              <tr className="hover:bg-[#FAF9F8]">
                <td className="px-4 py-3 font-bold text-[#111111]">施工與安裝要求</td>
                <td className="px-4 py-3 text-[#555555]">需室外機陽台平台、洗洞、拉銅管與抽真空</td>
                <td className="px-4 py-3 font-semibold text-[#111111]">只要有窗型冷氣孔，塞入固定封板即可</td>
              </tr>
              <tr className="hover:bg-[#FAF9F8]">
                <td className="px-4 py-3 font-bold text-[#111111]">故障與漏水風險</td>
                <td className="px-4 py-3 text-[#555555]">排水管需確保下坡斜度，否則室內滲水</td>
                <td className="px-4 py-3 font-semibold text-[#111111]">冷凝水直接流向戶外，機體結構極為耐操</td>
              </tr>
              <tr className="hover:bg-[#FAF9F8]">
                <td className="px-4 py-3 font-bold text-[#111111]">推薦適用空間</td>
                <td className="px-4 py-3 font-medium text-[#111111]">新成屋、臥室睡眠空間、客餐廳、大樓住宅</td>
                <td className="px-4 py-3 font-medium text-[#111111]">老公寓無外機平台、租屋套房、舊窗型孔無痛換新</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
