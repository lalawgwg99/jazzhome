import { notFound } from "next/navigation";
import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { JsonLd } from "@/components/JsonLd";
import { LineCta } from "@/components/LineCta";
import { AcBrandSelector } from "@/components/tools/AcBrandSelector";
import { AcCalculator } from "@/components/tools/AcCalculator";
import { RefrigeratorCalculator } from "@/components/tools/RefrigeratorCalculator";
import { WashingMachineCalculator } from "@/components/tools/WashingMachineCalculator";
import { TvDistanceCalculator } from "@/components/tools/TvDistanceCalculator";
import { getCategoryBySlug, categories } from "@/lib/categories";
import { getArticlesByCategory } from "@/lib/articles";
import { getToolsByCategory } from "@/lib/tools";
import { buildMetadata, buildBreadcrumbJsonLd } from "@/lib/seo";

interface TopicPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: TopicPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};

  return buildMetadata({
    title: `${category.name}選購與避坑生活決策手帳`,
    description: category.hubIntro,
    path: `/topics/${slug}`,
    keywords: category.keywords,
  });
}

export default async function TopicPage({ params }: TopicPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const categoryArticles = getArticlesByCategory(category.slug);
  const categoryTools = getToolsByCategory(category.slug);

  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "首頁", path: "/" },
    { name: `${category.name}專題`, path: `/topics/${slug}` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />

      {/* Header Banner - TaiCalc Warm Editorial Style */}
      <section className="border-b border-black/[0.08] bg-[#F9F9F8] py-10 sm:py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <nav className="flex items-center gap-1.5 font-mono text-xs text-[#71717A]">
            <Link href="/" className="hover:text-[#18181B] transition-colors">
              首頁
            </Link>
            <span>/</span>
            <span className="text-[#18181B] font-semibold">{category.name}專題手帳</span>
          </nav>

          <div className="mt-4 flex items-baseline gap-3">
            <span className="text-3xl">{category.icon}</span>
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#71717A]">
                TOPIC TOOLKIT · 2026
              </p>
              <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-[#18181B] sm:text-4xl">
                {category.name}選購、規格與施工避坑決策
              </h1>
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-[#52525B] max-w-3xl">
            {category.hubIntro}
          </p>

          <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-black/[0.06]">
            <span className="font-mono text-xs text-[#71717A] self-center mr-1">
              決策焦點：
            </span>
            {category.highlights.map((h) => (
              <span
                key={h}
                className="rounded bg-white px-2.5 py-1 text-xs font-mono text-[#27272A] border border-black/[0.08] shadow-2xs"
              >
                {h}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 space-y-16">
        {/* Section 1: Embedded Interactive Core Calculator */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-6">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#71717A]">
                INTERACTIVE CALCULATOR
              </p>
              <h2 className="mt-1 text-xl font-extrabold tracking-tight text-[#18181B] sm:text-2xl">
                {category.slug === "air-conditioner" && "冷氣坪數與噸數即時試算"}
                {category.slug === "refrigerator" && "冰箱容量與公升數即時試算"}
                {category.slug === "washing-machine" && "洗衣機公斤數與洗脫烘決策"}
                {category.slug === "tv" && "電視觀賞距離與黃金吋數試算"}
              </h2>
            </div>
            <span className="font-mono text-xs text-[#71717A]">
              免跳頁 · 即時在線運算
            </span>
          </div>

          {category.slug === "air-conditioner" && <AcCalculator />}
          {category.slug === "refrigerator" && <RefrigeratorCalculator />}
          {category.slug === "washing-machine" && <WashingMachineCalculator />}
          {category.slug === "tv" && <TvDistanceCalculator />}
        </section>

        {/* Section 2: If AC, show 10-Brand Selector directly */}
        {category.slug === "air-conditioner" && (
          <section className="border-t border-black/[0.08] pt-12">
            <div className="mb-6">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#71717A]">
                BRAND BENCHMARK · 2026
              </p>
              <h2 className="mt-1 text-xl font-extrabold tracking-tight text-[#18181B] sm:text-2xl">
                台灣 10 大冷氣品牌最新規格庫（分離式 vs 窗型）
              </h2>
              <p className="mt-1 text-xs text-[#71717A]">
                大金、國際、日立、富士通、LG、禾聯、東元、聲寶、三菱重工、奇美 2025/2026 最新世代型錄核實
              </p>
            </div>

            <AcBrandSelector />
          </section>
        )}

        {/* Section 3: Dedicated Tools Cards Grid */}
        <section className="border-t border-black/[0.08] pt-12">
          <div className="flex items-baseline justify-between mb-6">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#71717A]">
                TOOLKIT
              </p>
              <h2 className="mt-1 text-xl font-extrabold tracking-tight text-[#18181B] sm:text-2xl">
                {category.name}專屬工具庫
              </h2>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categoryTools.map((tool, idx) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="taicalc-card group p-5 bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#71717A]">
                    <span>0{idx + 1}</span>
                    <span className="font-bold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#18181B]">
                      ↗
                    </span>
                  </div>

                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-xl">{tool.icon}</span>
                    <h3 className="text-sm font-bold text-[#18181B] group-hover:text-[#1D4ED8] transition-colors">
                      {tool.name}
                    </h3>
                  </div>

                  <p className="mt-2 text-xs leading-relaxed text-[#52525B]">
                    {tool.description}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-black/[0.06] pt-2.5 text-[11px] font-mono text-[#71717A]">
                  <span>{tool.summary}</span>
                  <span className="font-sans font-bold text-[#18181B]">開啟</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Section 4: Category Research Articles */}
        <section className="border-t border-black/[0.08] pt-12">
          <div className="mb-6">
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#71717A]">
              DEEP DIVES
            </p>
            <h2 className="mt-1 text-xl font-extrabold tracking-tight text-[#18181B] sm:text-2xl">
              {category.name}深度專欄與避坑指南
            </h2>
          </div>

          {categoryArticles.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {categoryArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <div className="taicalc-card p-8 text-center text-xs text-[#71717A]">
              專題文章持續整理中。
            </div>
          )}
        </section>

        {/* LINE CTA */}
        <div className="border-t border-black/[0.08] pt-8">
          <LineCta
            variant="banner"
            title={`看完${category.name}專題仍有疑問？`}
            description="空間格局特殊、尺寸對不起來或怕被施工加價？拍下現場照片傳至 LINE，由專業技師免費為您評估。"
          />
        </div>
      </div>
    </>
  );
}
