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
      <div className="apple-card border border-black/[0.05] bg-white p-6 sm:p-7">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0071E3]">
              型態選購決策
            </span>
            <h3 className="mt-1 text-base font-bold text-[#1C1C1E]">
              分離式 vs 窗型冷氣：你家適合哪種？
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-[#636366]">
              分離式極度靜音且能效最高；窗型冷氣結構耐用、免拉長銅管，適合老屋已有窗型孔或大樓無外機平台空間。
            </p>
          </div>

          <div className="flex rounded-full bg-[#F2F2F7] p-1 shrink-0">
            <button
              type="button"
              onClick={() => setTypeFilter("all")}
              className={`apple-btn-active rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                typeFilter === "all"
                  ? "bg-white text-[#1C1C1E] shadow-sm"
                  : "text-[#8E8E93] hover:text-[#1C1C1E]"
              }`}
            >
              全部 (10大品牌)
            </button>
            <button
              type="button"
              onClick={() => setTypeFilter("split")}
              className={`apple-btn-active rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                typeFilter === "split"
                  ? "bg-white text-[#1C1C1E] shadow-sm"
                  : "text-[#8E8E93] hover:text-[#1C1C1E]"
              }`}
            >
              分離式 (10品牌)
            </button>
            <button
              type="button"
              onClick={() => setTypeFilter("window")}
              className={`apple-btn-active rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                typeFilter === "window"
                  ? "bg-white text-[#1C1C1E] shadow-sm"
                  : "text-[#8E8E93] hover:text-[#1C1C1E]"
              }`}
            >
              窗型冷氣 (5大品牌)
            </button>
          </div>
        </div>

        {/* Tier Filter Tabs */}
        <div className="mt-5 flex flex-wrap gap-2 border-t border-black/[0.04] pt-4">
          <span className="text-xs font-medium text-[#8E8E93] self-center mr-1">品牌級距：</span>
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
              className={`apple-btn-active rounded-full px-3 py-1 text-xs font-medium transition-all ${
                tierFilter === tab.id
                  ? "bg-[#1C1C1E] text-white"
                  : "bg-[#F2F2F7] text-[#636366] hover:bg-black/[0.06]"
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
          <p className="text-xs font-bold text-[#8E8E93] uppercase tracking-wider">
            共篩選出 {filteredBrands.length} 個台灣主流品牌
          </p>
          <span className="text-xs text-[#8E8E93]">點擊卡片展開系列型號與優缺點</span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {filteredBrands.map((brand) => {
            const isExpanded = expandedBrandId === brand.id;
            return (
              <div
                key={brand.id}
                className={`apple-card overflow-hidden transition-all bg-white border ${
                  isExpanded ? "border-[#0071E3]/40 shadow-md" : "border-black/[0.05]"
                }`}
              >
                {/* Brand Header */}
                <button
                  type="button"
                  onClick={() => setExpandedBrandId(isExpanded ? null : brand.id)}
                  className="flex w-full items-start justify-between p-5 text-left transition-colors hover:bg-[#F9F9FB]"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span
                        className={`rounded-md px-2 py-0.5 text-xs font-bold ${brand.tierColor.bg} ${brand.tierColor.text} border ${brand.tierColor.border}`}
                      >
                        {brand.tierLabel}
                      </span>
                      <span className="text-xs font-medium text-[#8E8E93]">
                        {brand.origin}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-[#1C1C1E]">
                      {brand.chineseName}{" "}
                      <span className="text-sm font-normal text-[#8E8E93]">
                        ({brand.name})
                      </span>
                    </h4>

                    <p className="text-xs text-[#636366] line-clamp-1">
                      {brand.bestFor}
                    </p>
                  </div>

                  <div className="text-right shrink-0 pl-3">
                    <span className="text-xs font-bold text-[#0071E3] block">
                      {brand.marketPriceRange}
                    </span>
                    <span className="text-[11px] text-[#8E8E93]">
                      壓縮機保固 {brand.warranty.compressor}
                    </span>
                    <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#F2F2F7] text-[10px] font-bold text-[#8E8E93] ml-auto">
                      {isExpanded ? "▲" : "▼"}
                    </span>
                  </div>
                </button>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="border-t border-black/[0.04] bg-[#F9F9FB] p-5 space-y-4 text-xs">
                    {/* Types Available Badge */}
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-[#1C1C1E]">提供型態：</span>
                      {brand.typesSupported === "both" ? (
                        <>
                          <span className="rounded bg-[#0071E3]/10 px-2 py-0.5 font-bold text-[#0071E3]">
                            分離式冷氣
                          </span>
                          <span className="rounded bg-[#5856D6]/10 px-2 py-0.5 font-bold text-[#5856D6]">
                            窗型冷氣
                          </span>
                        </>
                      ) : brand.typesSupported === "split" ? (
                        <span className="rounded bg-[#0071E3]/10 px-2 py-0.5 font-bold text-[#0071E3]">
                          僅分離式機種
                        </span>
                      ) : (
                        <span className="rounded bg-[#5856D6]/10 px-2 py-0.5 font-bold text-[#5856D6]">
                          僅窗型機種
                        </span>
                      )}
                      <span className="text-[#8E8E93] ml-auto">{brand.cspfRating}</span>
                    </div>

                    {/* Split Series List */}
                    <div>
                      <p className="font-bold text-[#1C1C1E]">
                        【分離式主力系列】：
                      </p>
                      <div className="mt-2 space-y-1.5">
                        {brand.splitSeries.map((s, idx) => (
                          <div
                            key={idx}
                            className="rounded-lg bg-white p-2.5 border border-black/[0.04] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1"
                          >
                            <div>
                              <span className="font-bold text-[#1C1C1E] mr-2">
                                {s.name}
                              </span>
                              <span className="rounded bg-[#F2F2F7] px-1.5 py-0.5 text-[10px] font-medium text-[#636366]">
                                {s.level}
                              </span>
                            </div>
                            <span className="text-[11px] text-[#636366]">
                              {s.feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Window Series List if exists */}
                    {brand.windowSeries && (
                      <div>
                        <p className="font-bold text-[#1C1C1E]">
                          【窗型冷氣主力系列】：
                        </p>
                        <div className="mt-2 space-y-1.5">
                          {brand.windowSeries.map((w, idx) => (
                            <div
                              key={idx}
                              className="rounded-lg bg-white p-2.5 border border-black/[0.04]"
                            >
                              <p className="font-bold text-[#5856D6]">{w.name}</p>
                              <p className="text-[11px] text-[#636366] mt-0.5">
                                {w.feature}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Pros & Cons */}
                    <div className="grid gap-3 sm:grid-cols-2 pt-2 border-t border-black/[0.04]">
                      <div className="rounded-lg bg-[#ECFDF5] p-3 border border-[#10B981]/20">
                        <p className="font-bold text-[#059669] mb-1">
                          ✓ 核心優點
                        </p>
                        <ul className="space-y-1 text-[#065F46] text-[11px]">
                          {brand.pros.map((p, idx) => (
                            <li key={idx}>• {p}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-lg bg-[#FFFBEB] p-3 border border-[#F59E0B]/20">
                        <p className="font-bold text-[#D97706] mb-1">
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
                        className="font-semibold text-[#0071E3] hover:underline"
                      >
                        試算此品牌建議噸數與補助 →
                      </Link>

                      <a
                        href={lineUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="apple-btn-active rounded-full bg-[#1C1C1E] px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-black"
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
      <div className="apple-card overflow-hidden border border-black/[0.05] bg-white p-6 sm:p-7">
        <div className="max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0071E3]">
            深入解析
          </span>
          <h3 className="mt-1 text-base font-bold text-[#1C1C1E]">
            分離式 vs 窗型冷氣 完整實務對照
          </h3>
          <p className="mt-1 text-xs text-[#636366]">
            從運轉噪音、省電 CSPF、安裝難度到老屋孔洞限制全盤比較
          </p>
        </div>

        <div className="mt-5 overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="border-b border-black/[0.06] bg-[#F9F9FB] text-xs font-bold text-[#1C1C1E]">
              <tr>
                <th className="px-4 py-3">比較項目</th>
                <th className="px-4 py-3 text-[#0071E3]">分離式冷氣 (一對一 / 一對多)</th>
                <th className="px-4 py-3 text-[#5856D6]">窗型冷氣 (變頻 / 定頻)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/[0.04] text-[#48484A]">
              <tr className="hover:bg-[#F9F9FB]">
                <td className="px-4 py-3 font-bold text-[#1C1C1E]">室內運轉噪音</td>
                <td className="px-4 py-3 font-semibold text-[#0071E3]">極度安靜 (約 19 ～ 26 dB，壓縮機在外牆)</td>
                <td className="px-4 py-3 text-[#636366]">壓縮機在同機身，稍有運轉聲 (約 38 ～ 48 dB)</td>
              </tr>
              <tr className="hover:bg-[#F9F9FB]">
                <td className="px-4 py-3 font-bold text-[#1C1C1E]">省電能效 CSPF</td>
                <td className="px-4 py-3 font-semibold text-[#0071E3]">最高 (CSPF 達 6.5 ～ 7.42 一級能效)</td>
                <td className="px-4 py-3 text-[#636366]">變頻一級約 CSPF 5.0 ～ 6.0，定頻較耗電</td>
              </tr>
              <tr className="hover:bg-[#F9F9FB]">
                <td className="px-4 py-3 font-bold text-[#1C1C1E]">施工與安裝要求</td>
                <td className="px-4 py-3 text-[#636366]">需室外機陽台平台、洗洞、拉銅管與抽真空</td>
                <td className="px-4 py-3 font-semibold text-[#5856D6]">只要有窗型冷氣孔，塞入固定封板即可</td>
              </tr>
              <tr className="hover:bg-[#F9F9FB]">
                <td className="px-4 py-3 font-bold text-[#1C1C1E]">故障與漏水風險</td>
                <td className="px-4 py-3 text-[#636366]">排水管需確保下坡斜度，否則室內滲水</td>
                <td className="px-4 py-3 font-semibold text-[#5856D6]">冷凝水直接流向戶外，機體結構極為耐操</td>
              </tr>
              <tr className="hover:bg-[#F9F9FB]">
                <td className="px-4 py-3 font-bold text-[#1C1C1E]">推薦適用空間</td>
                <td className="px-4 py-3 font-medium text-[#1C1C1E]">新成屋、臥室睡眠空間、客餐廳、大樓住宅</td>
                <td className="px-4 py-3 font-medium text-[#1C1C1E]">老公寓無外機平台、租屋套房、舊窗型孔無痛換新</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
