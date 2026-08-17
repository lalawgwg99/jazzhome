import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { CategoryCard } from "@/components/CategoryCard";
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
      <section className="border-b border-zinc-200 bg-gradient-to-b from-blue-50 to-white px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            JazzHome 家電研究室
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600">
            冷氣、冰箱、洗衣機、電視選購攻略與比較。用關鍵字研究驅動內容，首發於本站，掌握
            SEO 與 GA4 數據主導權。
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
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14">
        <h2 className="text-2xl font-bold text-zinc-900">四大品類</h2>
        <p className="mt-2 text-zinc-600">
          依主題聚類建立 Topical Authority，搶下 Google 長尾流量
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {categories.map((cat) => (
            <CategoryCard key={cat.slug} category={cat} />
          ))}
        </div>
      </section>

      <section className="bg-zinc-50 px-4 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-zinc-900">最新文章</h2>
          <p className="mt-2 text-zinc-600">首發於本站，方格子同步摘要版</p>
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
