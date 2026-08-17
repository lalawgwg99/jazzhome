import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { MonetizationFunnel } from "@/components/MonetizationFunnel";
import { HeroMiniCalculator } from "@/components/tools/HeroMiniCalculator";
import { categories } from "@/lib/categories";
import { getLatestArticles } from "@/lib/articles";
import { faqs } from "@/lib/faq";
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

      {/* Hero Section - Option A: Japanese Architectural Editorial Two-Column */}
      <section className="border-b border-stone-200/80 bg-[#F6F6F3] py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left Column (Editorial Typography) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 font-mono text-[11px] text-stone-500 bg-white px-2.5 py-1 rounded border border-stone-200/80 shadow-2xs">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                <span>2026 台灣家電生活決策手帳 · 補助進行中</span>
              </div>

              <h1 className="text-2xl font-extrabold tracking-tight text-[#1C1917] sm:text-4xl sm:leading-[1.25]">
                買冷氣、算冰箱、看施工。
                <br />
                把台灣複雜的規格與加價規則，
                <br className="hidden sm:inline" />
                變成 3 秒就能比較的答案。
              </h1>

              <p className="text-xs sm:text-sm leading-relaxed text-stone-600">
                免登入，算式在瀏覽器即時運算。整合 2026 經濟部汰舊換新補助 NT$ 3,000 + 貨物稅退稅最高 NT$ 2,000 元，以及台灣第一線安裝加價行情避坑。
              </p>

              {/* Quick Jump Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  { name: "冷氣坪數試算", link: "/tools/ac-calculator" },
                  { name: "安裝加價行情表", link: "/tools/ac-install-checklist" },
                  { name: "10大品牌庫", link: "/tools/ac-brand-matrix" },
                  { name: "好市多冰箱容量", link: "/tools/refrigerator-calculator" },
                ].map((tag) => (
                  <Link
                    key={tag.name}
                    href={tag.link}
                    className="craft-btn rounded bg-white px-2.5 py-1 text-xs font-medium text-stone-700 border border-stone-200/80 hover:border-stone-400 hover:text-[#1C1917]"
                  >
                    {tag.name} ↗
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Column (Live Interactive Hero Calculator) */}
            <div className="lg:col-span-5">
              <HeroMiniCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Navigation ("你現在卡在哪一題？") */}
      <section className="border-b border-stone-200/80 bg-white py-12 sm:py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <h2 className="text-lg font-bold text-[#1C1917]">
              你現在卡在哪一題？
            </h2>
            <p className="text-xs font-mono text-stone-500">
              DECISION TOOLKIT · 依問題直接切入
            </p>
          </div>

          <div className="mt-6 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                idx: "01",
                title: "冷氣坪數與噸數試算",
                problem: "房間 5 坪有西曬，到底要裝 2.8kW 還是 3.6kW？",
                tag: "長寬公尺換算 · 2026補助試算",
                link: "/tools/ac-calculator",
              },
              {
                idx: "02",
                title: "冷氣安裝現場加價檢核",
                problem: "師傅到場說銅管超長、要洗洞，收費多少才合理？",
                tag: "銅管/洗洞/鐵架加價行情",
                link: "/tools/ac-install-checklist",
              },
              {
                idx: "03",
                title: "10 大冷氣品牌選型庫",
                problem: "大金、國際、日立、三菱、禾聯，哪台符合預算？",
                tag: "分離式 vs 窗型 · 最新世代",
                link: "/tools/ac-brand-matrix",
              },
              {
                idx: "04",
                title: "冰箱容量與好市多囤貨",
                problem: "好市多大採購肉品冷凍放不下？廚房大門會卡住嗎？",
                tag: "大冷凍公升數 · 搬運動線檢核",
                link: "/tools/refrigerator-calculator",
              },
              {
                idx: "05",
                title: "洗衣機公斤數與洗脫烘",
                problem: "洗床單被套要買幾公斤？買洗脫烘還是熱泵乾衣？",
                tag: "洗量評估 · 陽台通風決策",
                link: "/tools/washing-machine-calculator",
              },
              {
                idx: "06",
                title: "電視觀看距離與尺寸",
                problem: "沙發到電視牆 2.8 公尺，買 65 吋還是 75 吋？",
                tag: "4K UHD 最佳視角換算",
                link: "/tools/tv-distance",
              },
            ].map((item) => (
              <Link
                key={item.idx}
                href={item.link}
                className="craft-card group p-4.5 bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-stone-400">
                    <span>{item.idx}</span>
                    <span className="font-bold text-[#1C1917] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-2 text-sm font-bold text-[#1C1917] group-hover:text-[#1E40AF] transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs text-stone-600 leading-relaxed font-sans">
                    {item.problem}
                  </p>
                </div>

                <div className="mt-4 pt-2.5 border-t border-stone-100 flex items-center justify-between text-[11px] font-mono text-stone-500">
                  <span>{item.tag}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 2026 Taiwan 10-Brand Verified Benchmark */}
      <section className="border-b border-stone-200/80 bg-[#F6F6F3] py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-stone-500">
                BENCHMARK · 2026
              </p>
              <h2 className="mt-1 text-xl font-extrabold tracking-tight text-[#1C1917] sm:text-2xl">
                台灣 10 大冷氣品牌最新世代規格速查
              </h2>
            </div>
            <Link
              href="/tools/ac-brand-matrix"
              className="text-xs font-semibold text-[#1C1917] hover:underline"
            >
              檢索 10 大品牌分離式/窗型規格庫 ↗
            </Link>
          </div>

          <div className="mt-6 overflow-hidden rounded-xl border border-stone-200/90 bg-white shadow-2xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="border-b border-stone-200/80 bg-[#FBFBFA] font-mono text-[11px] text-stone-500">
                  <tr>
                    <th className="px-4 py-3">品牌</th>
                    <th className="px-4 py-3">2025/2026 現行主力系列</th>
                    <th className="px-4 py-3">型態支援</th>
                    <th className="px-4 py-3">核心技術特色</th>
                    <th className="px-4 py-3">最推薦使用場景</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-[#27272A]">
                  {AC_BRANDS.slice(0, 8).map((b) => (
                    <tr key={b.id} className="hover:bg-[#FBFBFA] transition-colors">
                      <td className="px-4 py-3.5 font-bold text-[#1C1917] whitespace-nowrap">
                        {b.chineseName}
                      </td>
                      <td className="px-4 py-3.5 font-mono text-[11px] text-[#1C1917]">
                        {b.splitSeries[0]?.name || b.currentGenTag}
                      </td>
                      <td className="px-4 py-3.5 whitespace-nowrap font-mono text-[10px]">
                        {b.typesSupported === "both" ? "分離式 + 窗型" : "僅分離式"}
                      </td>
                      <td className="px-4 py-3.5 text-stone-600 max-w-xs truncate">
                        {b.pros[0]}
                      </td>
                      <td className="px-4 py-3.5 text-stone-700 font-medium">
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

      {/* Category Handbooks */}
      <section className="border-b border-stone-200/80 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex items-baseline justify-between">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-stone-500">
                CATEGORY HANDBOOKS
              </p>
              <h2 className="mt-1 text-xl font-extrabold tracking-tight text-[#1C1917] sm:text-2xl">
                四大品類選購研究手帳
              </h2>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {categories.map((cat, idx) => (
              <Link
                key={cat.slug}
                href={`/topics/${cat.slug}`}
                className="craft-card group p-5 bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-stone-400">
                    <span>0{idx + 1}</span>
                    <span className="font-bold text-[#1C1917] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                      ↗
                    </span>
                  </div>

                  <div className="mt-2.5 flex items-center gap-2">
                    <span className="text-2xl">{cat.icon}</span>
                    <h3 className="text-base font-bold text-[#1C1917] group-hover:text-[#1E40AF] transition-colors">
                      {cat.name}選購手帳
                    </h3>
                  </div>

                  <p className="mt-2 text-xs leading-relaxed text-stone-600">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-stone-100 font-mono text-[11px]">
                  {cat.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded bg-[#F6F6F3] px-2 py-0.5 text-stone-600"
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
      <section className="border-b border-stone-200/80 bg-[#F6F6F3] py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex items-baseline justify-between">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-stone-500">
                EDITORIAL NOTES
              </p>
              <h2 className="mt-1 text-xl font-extrabold tracking-tight text-[#1C1917] sm:text-2xl">
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
