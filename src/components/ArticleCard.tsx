import Link from "next/link";
import type { Article } from "@/lib/articles";
import { getCategoryBySlug } from "@/lib/categories";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const category = getCategoryBySlug(article.category);

  return (
    <article className="taicalc-card group flex flex-col justify-between p-5 bg-white transition-all">
      <div>
        <div className="flex items-center justify-between text-xs font-mono text-[#71717A]">
          <span className="rounded bg-black/[0.04] px-2 py-0.5 text-[11px] font-sans font-medium text-[#18181B]">
            {category?.name}
          </span>
          <span>{article.readingMinutes} min</span>
        </div>

        <h3 className="mt-3 text-sm sm:text-base font-bold leading-snug tracking-tight text-[#18181B] group-hover:text-[#1D4ED8] transition-colors">
          <Link href={`/blog/${article.slug}`} className="focus:outline-none">
            {article.title}
          </Link>
        </h3>

        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-[#52525B]">
          {article.description}
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between pt-3 border-t border-black/[0.05] text-[11px]">
        <time dateTime={article.publishedAt} className="font-mono text-[#71717A]">
          {article.publishedAt}
        </time>

        <Link
          href={`/blog/${article.slug}`}
          className="font-bold text-[#18181B] group-hover:text-[#1D4ED8] inline-flex items-center gap-0.5"
        >
          <span>閱讀</span>
          <span>↗</span>
        </Link>
      </div>
    </article>
  );
}
