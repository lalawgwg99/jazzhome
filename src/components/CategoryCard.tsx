import Link from "next/link";
import type { Category } from "@/lib/categories";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const { theme } = category;

  return (
    <Link
      href={`/topics/${category.slug}`}
      className={`apple-card apple-btn-active group flex flex-col justify-between p-6 sm:p-7 bg-white ${theme.hoverGlow}`}
    >
      <div>
        <div className="flex items-center justify-between">
          <span
            className={`flex h-13 w-13 items-center justify-center rounded-2xl text-2xl sm:text-3xl shadow-sm ${theme.bgLight} border ${theme.borderLight}`}
          >
            {category.icon}
          </span>
          <span
            className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition-all ${theme.bgLight} ${theme.badgeText} group-hover:scale-110`}
          >
            →
          </span>
        </div>

        <h3 className="mt-4 text-xl font-bold tracking-tight text-[#1C1C1E] transition-colors group-hover:text-[#0071E3]">
          {category.name}選購指南
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[#636366]">
          {category.description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-black/[0.04]">
        <div className="flex flex-wrap gap-1.5">
          {category.highlights.map((h) => (
            <span
              key={h}
              className={`rounded-md px-2.5 py-1 text-xs font-medium ${theme.bgLight} ${theme.badgeText}`}
            >
              {h}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
