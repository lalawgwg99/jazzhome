import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { CategoryCard } from "@/components/CategoryCard";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { MonetizationFunnel } from "@/components/MonetizationFunnel";
import { TrustPillars } from "@/components/TrustPillars";
import { categories } from "@/lib/categories";
import { getLatestArticles } from "@/lib/articles";
import { faqs } from "@/lib/faq";
import { tools } from "@/lib/tools";
import { buildFaqJsonLd, buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    "冷氣推薦",
    "冷氣坪數計算",
    "冷氣補助2026",
    "冰箱推薦",
    "好市多冰箱",
    "洗衣機推薦",
    "電視觀看距離",
    "家電選購指南",
  ],
});

export default function HomePage() {
  const latestArticles = getLatestArticles(6);

  return (
    <>
      <JsonLd data={buildFaqJsonLd(faqs)} />

      {/* Hero Section - Apple Ambient Glass Glow */}
      <section className="relative overflow-hidden border-b border-black/[0.05] bg-white apple-glow-hero py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0071E3]/[0.08] px-3.5 py-1 text-xs font-semibold text-[#0071E3] border border-[#0071E3]/20 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-[#0071E3] animate-pulse" />
              <span>原廠型錄核實 · 2026 政府補助試算 · 現場實務避坑</span>
            </div>

            <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-[#1C1C1E] sm:text-5xl sm:leading-[1.15]">
              把規格、補助與施工講清楚，
              <br className="hidden sm:inline" />
              再決定要不要買。
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#636366]">
              {siteConfig.description}
            </p>

            {/* Quick Interactive Tool Launchers */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              {tools.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="apple-btn-active inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#1C1C1E] shadow-sm border border-black/[0.06] hover:border-[#0071E3]/40 hover:text-[#0071E3]"
                >
                  <span>{tool.icon}</span>
                  <span>{tool.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2026 Taiwan Subsidy Highlights Banner */}
      <section className="border-b border-black/[0.04] bg-[#F9F9FB] py-4">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-[#248A3D] font-bold">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#34C759]/20 text-xs">
              💰
            </span>
            <span>2026 台灣冷氣/冰箱節能補助進行中：汰舊換新 $3,000 + 貨物稅退稅最高 $2,000</span>
          </div>
          <Link
            href="/blog/ac-2026-subsidies-and-tax-refund"
            className="font-semibold text-[#0071E3] hover:underline shrink-0"
          >
            查看 5,000 元補助申請教學 →
          </Link>
        </div>
      </section>

      {/* Interactive Tools Section */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#0071E3]/10 px-3 py-0.5 text-xs font-semibold text-[#0071E3]">
                <span>⚡</span>
                <span>即開即用 · 台灣算式</span>
              </div>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#1C1C1E] sm:text-3xl">
                智慧選購與施工評估工具
              </h2>
            </div>
            <Link
              href="/tools"
              className="text-xs font-semibold text-[#0071E3] hover:underline"
            >
              查看全部工具庫 →
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="apple-card apple-btn-active group flex flex-col justify-between p-6 bg-white hover:border-[#0071E3]/30"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{tool.icon}</span>
                    {tool.badge && (
                      <span className="rounded-full bg-[#0071E3]/10 px-2.5 py-0.5 text-[11px] font-bold text-[#0071E3]">
                        {tool.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 font-bold text-[#1C1C1E] group-hover:text-[#0071E3] transition-colors">
                    {tool.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#636366]">
                    {tool.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-black/[0.04] pt-3 text-[11px]">
                  <span className="text-[#8E8E93]">{tool.summary}</span>
                  <span className="font-semibold text-[#0071E3] group-hover:translate-x-0.5 transition-transform">
                    立即試算 ›
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Four Appliance Categories */}
      <section className="py-14 sm:py-16 bg-white border-y border-black/[0.05]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#5856D6]/10 px-3 py-0.5 text-xs font-semibold text-[#5856D6]">
              <span>📚</span>
              <span>權威指南</span>
            </div>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#1C1C1E] sm:text-3xl">
              四大品類選購研究
            </h2>
            <p className="mt-2 text-sm text-[#636366]">
              型錄規格核實 · 台灣第一線施工避坑 · 拒絕照抄業配文
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {categories.map((cat) => (
              <CategoryCard key={cat.slug} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Pillars */}
      <TrustPillars />

      {/* Latest Articles Section */}
      <section className="py-14 sm:py-16 bg-white border-y border-black/[0.05]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#0071E3]/10 px-3 py-0.5 text-xs font-semibold text-[#0071E3]">
                <span>📰</span>
                <span>家電專欄</span>
              </div>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#1C1C1E] sm:text-3xl">
                最新家電研究與新品評析
              </h2>
            </div>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
