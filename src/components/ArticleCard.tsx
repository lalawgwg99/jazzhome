import Link from "next/link";
import type { Article } from "@/lib/articles";
import { getCategoryBySlug } from "@/lib/categories";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const category = getCategoryBySlug(article.category);

  return (
    <article className="rounded-xl border border-zinc-200 bg-white p-5 transition-shadow hover:shadow-md">
      <div className="mb-2 flex items-center gap-2 text-xs text-zinc-500">
        <span>{category?.icon}</span>
        <Link
          href={`/topics/${article.category}`}
          className="hover:text-zinc-800"
        >
          {category?.name}
        </Link>
        <span>·</span>
        <time dateTime={article.publishedAt}>{article.publishedAt}</time>
        <span>·</span>
        <span>{article.readingMinutes} 分鐘</span>
      </div>
      <h2 className="text-lg font-semibold leading-snug text-zinc-900">
        <Link href={`/blog/${article.slug}`} className="hover:underline">
          {article.title}
        </Link>
      </h2>
      <p className="mt-2 line-clamp-2 text-sm leading-6 text-zinc-600">
        {article.description}
      </p>
    </article>
  );
}
