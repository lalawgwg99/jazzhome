import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { CategoryCard } from "@/components/CategoryCard";
import { LineCta } from "@/components/LineCta";
import { MonetizationFunnel } from "@/components/MonetizationFunnel";
import { TrustPillars } from "@/components/TrustPillars";
import { categories } from "@/lib/categories";
import { getLatestArticles } from "@/lib/articles";
import { tools } from "@/lib/tools";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    "冷氣推薦",
    "冰箱推薦",
    "洗衣機推薦",
    "電視推薦",
    "家電選購",
  ],
});

export default function HomePage() {
  const latestArticles = getLatestArticles(6);

  return (
    <>
      <section className="border-b border-zinc-200 bg-gradient-to-b from-emerald-50 to-white px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-medium text-emerald-700">
            {siteConfig.tagline}
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            JazzHome 家電研究室
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600">
            {siteConfig.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {tools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
              >
                {tool.icon} {tool.name}
              </Link>
            ))}
            <LineCta variant="compact" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14">
        <h2 className="text-2xl font-bold text-zinc-900">互動評估工具</h2>
        <p className="mt-2 text-zinc-600">
          可直接使用的計算器與檢核表，解決「不知道怎麼挑」的焦慮
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="rounded-xl border border-zinc-200 bg-white p-5 transition-shadow hover:shadow-md"
            >
              <span className="text-2xl">{tool.icon}</span>
              <h3 className="mt-2 font-semibold text-zinc-900">{tool.name}</h3>
              <p className="mt-1 text-sm leading-6 text-zinc-600">
                {tool.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14">
        <h2 className="text-2xl font-bold text-zinc-900">四大品類</h2>
        <p className="mt-2 text-zinc-600">
          原廠型錄核實 · 現場實務避坑 · 不照抄業配文
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {categories.map((cat) => (
            <CategoryCard key={cat.slug} category={cat} />
          ))}
        </div>
      </section>

      <TrustPillars />

      <MonetizationFunnel />

      <section className="bg-zinc-50 px-4 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-zinc-900">最新文章</h2>
          <p className="mt-2 text-zinc-600">型錄核實 · 現場實務 · 首發於本站</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {latestArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
