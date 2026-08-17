import Link from "next/link";
import type { Category } from "@/lib/categories";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/topics/${category.slug}`}
      className="group rounded-xl border border-zinc-200 bg-white p-6 transition-all hover:border-blue-200 hover:shadow-md"
    >
      <span className="text-3xl">{category.icon}</span>
      <h2 className="mt-3 text-xl font-semibold text-zinc-900 group-hover:text-blue-700">
        {category.name}
      </h2>
      <p className="mt-2 text-sm leading-6 text-zinc-600">
        {category.description}
      </p>
      <p className="mt-3 text-xs text-zinc-400">
        {category.keywords.slice(0, 3).join(" · ")}
      </p>
    </Link>
  );
}
