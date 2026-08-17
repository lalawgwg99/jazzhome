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
    "冷氣安裝避坑",
    "冰箱推薦",
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

      {/* Hero Section - Apple Pure Elegance */}
      <section className="relative overflow-hidden border-b border-black/[0.05] bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-black/[0.04] px-3.5 py-1 text-xs font-semibold text-[#1C1C1E] border border-black/[0.06]">
              <span className="flex h-2 w-2 rounded-full bg-[#0071E3]" />
              <span>原廠型錄核實 · 現場實務避坑</span>
            </div>

            <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-[#1C1C1E] sm:text-5xl sm:leading-[1.15]">
              把規格與施工講清楚，
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
                  className="apple-btn-active inline-flex items-center gap-2 rounded-full bg-[#F2F2F7] px-4 py-2 text-xs font-semibold text-[#1C1C1E] hover:bg-[#E5E5EA]"
                >
                  <span>{tool.icon}</span>
                  <span>{tool.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tools Section */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#0071E3]">
                即開即用
              </p>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#1C1C1E] sm:text-3xl">
                互動選購評估工具
              </h2>
            </div>
            <Link
              href="/tools"
              className="text-xs font-semibold text-[#0071E3] hover:underline"
            >
              查看全部工具 →
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="apple-card apple-btn-active group flex flex-col justify-between p-6 border border-black/[0.05] bg-white hover:border-[#0071E3]/30"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{tool.icon}</span>
                    {tool.badge && (
                      <span className="rounded-full bg-[#0071E3]/10 px-2.5 py-0.5 text-[11px] font-semibold text-[#0071E3]">
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
                  <span className="font-semibold text-[#0071E3]">試算 ›</span>
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
            <p className="text-xs font-semibold uppercase tracking-wider text-[#0071E3]">
              權威指南
            </p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#1C1C1E] sm:text-3xl">
              四大品類選購研究
            </h2>
            <p className="mt-2 text-sm text-[#636366]">
              型錄規格核實 · 第一線施工避坑 · 拒絕照抄業配文
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
              <p className="text-xs font-semibold uppercase tracking-wider text-[#0071E3]">
                精選文章
              </p>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#1C1C1E] sm:text-3xl">
                最新家電研究指南
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
