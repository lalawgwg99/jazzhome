import Link from "next/link";
import { tools } from "@/lib/tools";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "選購工具",
  description:
    "冷氣坪數計算器、電視觀看距離計算器。免費線上工具，協助快速估算家電規格。",
  path: "/tools",
  keywords: ["冷氣坪數計算", "電視觀看距離", "家電工具"],
});

export default function ToolsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-bold text-zinc-900">選購工具</h1>
      <p className="mt-4 max-w-2xl text-lg text-zinc-600">
        先用計算器估規格，再用檢核表對施工。數字對不上再把現場條件傳到 LINE。
      </p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {tools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="rounded-xl border border-zinc-200 bg-white p-6 transition-shadow hover:shadow-md"
          >
            <span className="text-3xl">{tool.icon}</span>
            <h2 className="mt-3 text-xl font-semibold text-zinc-900">
              {tool.name}
            </h2>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              {tool.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
