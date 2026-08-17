import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { MonetizationFunnel } from "@/components/MonetizationFunnel";
import { categories } from "@/lib/categories";
import { getLatestArticles } from "@/lib/articles";
import { faqs } from "@/lib/faq";
import { tools } from "@/lib/tools";
import { buildFaqJsonLd, buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { AC_BRANDS } from "@/lib/brands";

export const metadata = buildMetadata({
  title: `${siteConfig.name}｜冷氣坪數噸數、安裝加價避坑、冰箱容量生活決策`,
  description: siteConfig.description,
  keywords: [
    "冷氣推薦",
    "冷氣坪數計算",
    "冷氣補助2026",
    "冷氣安裝費用",
    "冰箱推薦",
    "好市多冰箱",
    "洗衣機推薦",
    "電視觀看距離",
  ],
});

export default function HomePage() {
  const latestArticles = getLatestArticles(6);

  return (
    <>
      <JsonLd data={buildFaqJsonLd(faqs)} />

      {/* Hero Section - TaiCalc Editorial Style */}
      <section className="border-b border-black/[0.08] bg-[#F9F9F8] py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#71717A]">
              Taiwan appliance toolkit · 2026
            </p>

            <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-[#18181B] sm:text-4xl sm:leading-[1.25]">
              冷氣要買幾 kW、現場會不會被加價、這台冰箱進不進得去。
              <br className="hidden sm:inline" />
              把台灣家電規格與工程規則，翻成你能立刻比較的答案。
            </h1>

            <p className="mt-4 text-sm leading-relaxed text-[#52525B]">
              免登入，算式主要在本機運算。涵蓋 2026 節能補助退稅最高 5,000 元、台灣老屋施工避坑與 10 大品牌最新世代型錄。
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#decision-tools"
                className="apple-btn-active inline-flex items-center gap-1.5 rounded-full bg-[#18181B] px-5 py-2.5 text-xs font-semibold text-white shadow-xs hover:bg-black"
              >
                <span>選一個問題開始</span>
                <span>↓</span>
              </a>
              <Link
                href="/tools"
                className="apple-btn-active inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-[#18181B] border border-black/[0.1] shadow-2xs hover:bg-black/[0.02]"
              >
                <span>看全部 6 大計算器</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Problem Launchers - "你現在卡在哪一題？" */}
      <section className="border-b border-black/[0.08] bg-white py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <h2 className="text-lg font-bold text-[#18181B]">
              你現在卡在哪一題？
            </h2>
            <p className="text-xs text-[#71717A]">
              從最常見的台灣空間與施工決策開始
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                idx: "01",
                title: "冷氣坪數與噸數試算",
                sub: "房間長寬公尺換算、西曬頂樓加成、2026補助試算",
                link: "/tools/ac-calculator",
              },
              {
                idx: "02",
                title: "冷氣安裝現場加價檢核",
                sub: "銅管超長每米、洗洞、鐵架行情，避免被開天價",
                link: "/tools/ac-install-checklist",
              },
              {
                idx: "03",
                title: "10 大冷氣品牌選型庫",
                sub: "大金/國際/日立/三菱/LG/禾聯 分離式 vs 窗型對照",
                link: "/tools/ac-brand-matrix",
              },
              {
                idx: "04",
                title: "冰箱容量與好市多囤貨",
                sub: "依同住人數、Costco大冷凍、廚房大門淨寬避坑",
                link: "/tools/refrigerator-calculator",
              },
              {
                idx: "05",
                title: "洗衣機公斤數與洗脫烘",
                sub: "家庭人數、床單被套公斤數、陽台通風環境決策",
                link: "/tools/washing-machine-calculator",
              },
              {
                idx: "06",
                title: "電視觀看距離與尺寸",
                sub: "沙發到電視牆深度，計算 4K UHD 黃金沉浸吋數",
                link: "/tools/tv-distance",
              },
            ].map((item) => (
              <Link
                key={item.idx}
                href={item.link}
                className="taicalc-card group p-4.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#71717A]">
                    <span>{item.idx}</span>
                    <span className="font-bold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#18181B]">
                      ↗
                    </span>
                  </div>
                  <h3 className="mt-2 text-sm font-bold text-[#18181B] group-hover:text-[#1D4ED8] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#52525B] leading-relaxed">
                    {item.sub}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Toolkit Section (TaiCalc All Calculators Style) */}
      <section id="decision-tools" className="py-14 sm:py-16 bg-[#F9F9F8]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#71717A]">
                ALL CALCULATORS
              </p>
              <h2 className="mt-1 text-xl font-extrabold tracking-tight text-[#18181B] sm:text-2xl">
                台灣家電生活決策計算器
              </h2>
            </div>
            <p className="text-xs text-[#71717A]">
              不只算公升與噸數，把電費、補助與安裝現場風險一次算清。
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool, idx) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="taicalc-card group flex flex-col justify-between p-6 bg-white"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#71717A]">
                      0{idx + 1}
                    </span>
                    <span className="font-mono text-xs font-bold text-[#18181B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                      ↗
                    </span>
                  </div>

                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-xl">{tool.icon}</span>
                    <h3 className="text-base font-bold text-[#18181B] group-hover:text-[#1D4ED8] transition-colors">
                      {tool.name}
                    </h3>
                  </div>

                  <p className="mt-2 text-xs leading-relaxed text-[#52525B]">
                    {tool.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-black/[0.06] pt-3 text-[11px] font-mono text-[#71717A]">
                  <span>{tool.summary}</span>
                  <span className="font-sans font-bold text-[#18181B]">試算</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 2026 Taiwan 10-Brand Verified Matrix (TaiCalc Spec Table Style) */}
      <section className="border-t border-black/[0.08] bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#71717A]">
                SPEC BENCHMARK · 2026
              </p>
              <h2 className="mt-1 text-xl font-extrabold tracking-tight text-[#18181B] sm:text-2xl">
                台灣 10 大冷氣品牌最新世代規格速查
              </h2>
            </div>
            <Link
              href="/tools/ac-brand-matrix"
              className="text-xs font-semibold text-[#18181B] hover:underline"
            >
              開啟 10 大品牌完整選型庫 ↗
            </Link>
          </div>

          <div className="mt-6 overflow-hidden rounded-xl border border-black/[0.08] bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="border-b border-black/[0.08] bg-[#F9F9F8] font-mono text-[11px] text-[#71717A]">
                  <tr>
                    <th className="px-4 py-3">品牌</th>
                    <th className="px-4 py-3">2025/2026 現行最新世代</th>
                    <th className="px-4 py-3">型態支援</th>
                    <th className="px-4 py-3">核心技術</th>
                    <th className="px-4 py-3">最適合空間</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/[0.05] text-[#27272A]">
                  {AC_BRANDS.slice(0, 7).map((b) => (
                    <tr key={b.id} className="hover:bg-[#F9F9F8] transition-colors">
                      <td className="px-4 py-3 font-bold text-[#18181B] whitespace-nowrap">
                        {b.chineseName}
                      </td>
                      <td className="px-4 py-3 font-mono text-[11px] text-[#18181B]">
                        {b.splitSeries[0]?.name || b.currentGenTag}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        {b.typesSupported === "both" ? (
                          <span className="rounded bg-black/[0.04] px-1.5 py-0.5 text-[10px] font-mono">
                            分離式 + 窗型
                          </span>
                        ) : (
                          <span className="rounded bg-black/[0.04] px-1.5 py-0.5 text-[10px] font-mono">
                            分離式
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-[#52525B] max-w-xs truncate">
                        {b.pros[0]}
                      </td>
                      <td className="px-4 py-3 text-[#52525B]">
                        {b.bestFor}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Category Deep Dives */}
      <section className="border-t border-black/[0.08] bg-[#F9F9F8] py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex items-baseline justify-between">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#71717A]">
                CATEGORY GUIDES
              </p>
              <h2 className="mt-1 text-xl font-extrabold tracking-tight text-[#18181B] sm:text-2xl">
                四大品類選購研究
              </h2>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {categories.map((cat, idx) => (
              <Link
                key={cat.slug}
                href={`/topics/${cat.slug}`}
                className="taicalc-card group p-6 bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#71717A]">
                    <span>0{idx + 1}</span>
                    <span className="font-bold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#18181B]">
                      ↗
                    </span>
                  </div>

                  <div className="mt-3 flex items-center gap-2.5">
                    <span className="text-2xl">{cat.icon}</span>
                    <h3 className="text-base font-bold text-[#18181B] group-hover:text-[#1D4ED8] transition-colors">
                      {cat.name}選購手帳
                    </h3>
                  </div>

                  <p className="mt-2 text-xs leading-relaxed text-[#52525B]">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-1.5 pt-3 border-t border-black/[0.06]">
                  {cat.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded bg-[#F4F4F5] px-2 py-0.5 text-[11px] text-[#52525B]"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="border-t border-black/[0.08] bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex items-baseline justify-between">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#71717A]">
                EDITORIAL NOTES
              </p>
              <h2 className="mt-1 text-xl font-extrabold tracking-tight text-[#18181B] sm:text-2xl">
                專欄研究與避坑指南
              </h2>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {latestArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection />

      {/* Monetization Funnel */}
      <MonetizationFunnel />
    </>
  );
}
