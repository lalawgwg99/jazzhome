import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { MonetizationFunnel } from "@/components/MonetizationFunnel";
import { HeroMiniCalculator } from "@/components/tools/HeroMiniCalculator";
import {
  AcIcon,
  RefrigeratorIcon,
  WasherIcon,
  TvIcon,
  ChecklistIcon,
  BoutiqueIcon,
} from "@/components/Icons";
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

      {/* Hero Section */}
      <section className="border-b border-black/[0.08] bg-[#FAF9F8] py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 font-mono text-[11px] text-[#8C6438] bg-[#F7F3EE] px-3 py-1 rounded-full border border-[#A67C52]/30 shadow-2xs">
                <span>✦</span>
                <span className="font-semibold">2026 節能家電特企 · 汰舊換新+退稅最高折抵 NT$ 5,000</span>
              </div>

              <h1 className="text-2xl font-extrabold tracking-tight text-[#111111] sm:text-4xl sm:leading-[1.25]">
                選對頂級家電規格，
                <br />
                避開現場施工加價爭議。
                <br className="hidden sm:inline" />
                把台灣複雜的工程規則化為精準答案。
              </h1>

              <p className="text-xs sm:text-sm leading-relaxed text-[#555555]">
                免登入，算式在瀏覽器即時運算。匯整 2026 經濟部汰舊換新補助 NT$ 3,000 + 貨物稅退稅最高 NT$ 2,000 元，以及台灣第一線標準安裝加價收費透明行情。
              </p>

              {/* Quick Jump Links */}
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  { name: "冷氣噸數試算", link: "/tools/ac-calculator" },
                  { name: "標準安裝加價表", link: "/tools/ac-install-checklist" },
                  { name: "10大冷氣品牌庫", link: "/tools/ac-brand-matrix" },
                  { name: "好市多冰箱容量", link: "/tools/refrigerator-calculator" },
                ].map((tag) => (
                  <Link
                    key={tag.name}
                    href={tag.link}
                    className="skm-btn rounded-md bg-white px-3 py-1.5 text-xs font-medium text-[#111111] border border-black/[0.08] hover:border-[#A67C52]/60 hover:text-[#A67C52] shadow-2xs"
                  >
                    {tag.name} ↗
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-5">
              <HeroMiniCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* Decision Cards ("你現在卡在哪一題？") */}
      <section className="border-b border-black/[0.08] bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <div className="flex items-center gap-2">
              <span className="text-[#A67C52] text-sm">✦</span>
              <h2 className="text-lg font-bold text-[#111111] tracking-wide">
                你現在卡在哪一題？
              </h2>
            </div>
            <p className="text-xs font-mono text-[#777777]">
              DECISION TOOLKIT · 依核心痛點快速切入
            </p>
          </div>

          <div className="mt-6 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                category: "冷氣噸數",
                icon: <AcIcon size={20} className="text-[#A67C52]" />,
                title: "冷氣坪數與噸數試算",
                problem: "客廳 9 坪有西曬，到底要買 5.0kW 還是 6.3kW？",
                tag: "長寬公尺換算 · 2026補助試算",
                link: "/tools/ac-calculator",
              },
              {
                category: "安裝避坑",
                icon: <ChecklistIcon size={20} className="text-[#A67C52]" />,
                title: "冷氣安裝現場加價檢核",
                problem: "師傅到場說銅管超長、要洗洞，收費多少才合理？",
                tag: "銅管/洗洞/鐵架加價行情",
                link: "/tools/ac-install-checklist",
              },
              {
                category: "品牌選型",
                icon: <BoutiqueIcon size={20} className="text-[#A67C52]" />,
                title: "10 大冷氣品牌選型庫",
                problem: "大金、國際、日立、三菱、禾聯，哪台符合預算？",
                tag: "分離式 vs 窗型 · 2026最新世代",
                link: "/tools/ac-brand-matrix",
              },
              {
                category: "冰箱容量",
                icon: <RefrigeratorIcon size={20} className="text-[#A67C52]" />,
                title: "冰箱容量與好市多囤貨",
                problem: "好市多大採購肉品冷凍放不下？廚房門會卡住嗎？",
                tag: "大冷凍公升數 · 搬運動線檢核",
                link: "/tools/refrigerator-calculator",
              },
              {
                category: "洗衣洗量",
                icon: <WasherIcon size={20} className="text-[#A67C52]" />,
                title: "洗衣機公斤數與洗脫烘",
                problem: "洗床單被套要買幾公斤？買洗脫烘還是熱泵乾衣？",
                tag: "洗量評估 · 陽台通風決策",
                link: "/tools/washing-machine-calculator",
              },
              {
                category: "電視視距",
                icon: <TvIcon size={20} className="text-[#A67C52]" />,
                title: "電視觀看距離與尺寸",
                problem: "沙發到電視牆 2.8 公尺，買 65 吋還是 75 吋？",
                tag: "4K UHD 最佳視角換算",
                link: "/tools/tv-distance",
              },
            ].map((item, idx) => (
              <Link
                key={idx}
                href={item.link}
                className="skm-card group p-5 bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#777777]">
                    <div className="flex items-center gap-2">
                      <span className="rounded bg-[#FAF9F8] px-2 py-0.5 font-bold text-[#A67C52] border border-[#A67C52]/20 font-sans">
                        {item.category}
                      </span>
                      <span>{item.icon}</span>
                    </div>
                    <span className="font-bold text-[#111111] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-3 text-sm font-bold text-[#111111] group-hover:text-[#A67C52] transition-colors tracking-wide">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs text-[#555555] leading-relaxed font-sans">
                    {item.problem}
                  </p>
                </div>

                <div className="mt-4 pt-2.5 border-t border-black/[0.05] flex items-center justify-between text-[11px] font-mono text-[#777777]">
                  <span>{item.tag}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 2026 Taiwan 10-Brand Benchmark */}
      <section className="border-b border-black/[0.08] bg-[#FAF9F8] py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[#A67C52] text-sm">✦</span>
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#A67C52]">
                  BRAND BENCHMARK · 2026
                </p>
              </div>
              <h2 className="mt-1 text-xl font-extrabold tracking-tight text-[#111111] sm:text-2xl">
                台灣 10 大冷氣品牌最新世代規格速查
              </h2>
            </div>
            <Link
              href="/tools/ac-brand-matrix"
              className="text-xs font-semibold text-[#111111] hover:text-[#A67C52] hover:underline"
            >
              開啟 10 大品牌規格庫 ↗
            </Link>
          </div>

          <div className="mt-6 overflow-hidden rounded-xl border border-black/[0.08] bg-white shadow-2xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="border-b border-black/[0.08] bg-[#FAF9F8] font-mono text-[11px] text-[#777777]">
                  <tr>
                    <th className="px-4 py-3.5">品牌</th>
                    <th className="px-4 py-3.5">2025/2026 現行主力旗艦</th>
                    <th className="px-4 py-3.5">型態支援</th>
                    <th className="px-4 py-3.5">核心技術特色</th>
                    <th className="px-4 py-3.5">最推薦使用場景</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/[0.04] text-[#222222]">
                  {AC_BRANDS.slice(0, 8).map((b) => (
                    <tr key={b.id} className="hover:bg-[#FAF9F8] transition-colors">
                      <td className="px-4 py-3.5 font-bold text-[#111111] whitespace-nowrap">
                        {b.chineseName}
                      </td>
                      <td className="px-4 py-3.5 font-mono text-[11px] text-[#111111]">
                        {b.splitSeries[0]?.name || b.currentGenTag}
                      </td>
                      <td className="px-4 py-3.5 whitespace-nowrap font-mono text-[10px]">
                        {b.typesSupported === "both" ? "分離式 + 窗型" : "僅分離式"}
                      </td>
                      <td className="px-4 py-3.5 text-[#555555] max-w-xs truncate">
                        {b.pros[0]}
                      </td>
                      <td className="px-4 py-3.5 text-[#111111] font-medium">
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
      <section className="border-b border-black/[0.08] bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex items-baseline justify-between">
            <div className="flex items-center gap-2">
              <span className="text-[#A67C52] text-sm">✦</span>
              <h2 className="text-xl font-extrabold tracking-tight text-[#111111] sm:text-2xl">
                四大品類家電選購研究
              </h2>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {categories.map((cat) => {
              const IconComp =
                cat.slug === "air-conditioner"
                  ? AcIcon
                  : cat.slug === "refrigerator"
                  ? RefrigeratorIcon
                  : cat.slug === "washing-machine"
                  ? WasherIcon
                  : TvIcon;

              const spaceTag =
                cat.slug === "air-conditioner"
                  ? "空間溫控"
                  : cat.slug === "refrigerator"
                  ? "食材保鮮"
                  : cat.slug === "washing-machine"
                  ? "衣物洗護"
                  : "客廳影音";

              return (
                <Link
                  key={cat.slug}
                  href={`/topics/${cat.slug}`}
                  className="skm-card group p-6 bg-white flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-[#777777]">
                      <span className="rounded bg-[#FAF9F8] px-2 py-0.5 font-bold text-[#A67C52] border border-[#A67C52]/20 font-sans">
                        {spaceTag}
                      </span>
                      <span className="font-bold text-[#111111] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                        ↗
                      </span>
                    </div>

                    <div className="mt-3.5 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FAF9F8] border border-black/[0.06] shadow-2xs group-hover:border-[#A67C52]/40 transition-colors">
                        <IconComp size={22} className="text-[#A67C52]" />
                      </div>
                      <h3 className="text-base font-bold text-[#111111] group-hover:text-[#A67C52] transition-colors tracking-wide">
                        {cat.name}選購指南
                      </h3>
                    </div>

                    <p className="mt-2.5 text-xs leading-relaxed text-[#555555]">
                      {cat.description}
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-black/[0.05] font-mono text-[11px]">
                    {cat.highlights.map((h) => (
                      <span
                        key={h}
                        className="rounded bg-[#FAF9F8] px-2 py-0.5 text-[#555555] border border-black/[0.04]"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest Editorial Articles */}
      <section className="border-b border-black/[0.08] bg-[#FAF9F8] py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex items-baseline justify-between">
            <div className="flex items-center gap-2">
              <span className="text-[#A67C52] text-sm">✦</span>
              <h2 className="text-xl font-extrabold tracking-tight text-[#111111] sm:text-2xl">
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
