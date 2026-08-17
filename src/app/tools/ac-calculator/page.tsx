import Link from "next/link";
import { AcCalculator } from "@/components/tools/AcCalculator";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "冷氣坪數計算器",
  description:
    "免費線上冷氣坪數計算器。輸入房間坪數、頂樓、西曬條件，快速估算建議冷氣噸數。",
  path: "/tools/ac-calculator",
  keywords: ["冷氣坪數計算", "冷氣噸數", "1坪幾噸冷氣", "冷氣容量計算"],
});

export default function AcCalculatorPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <nav className="text-sm text-zinc-500">
        <Link href="/tools" className="hover:text-zinc-800">
          工具
        </Link>
        <span className="mx-2">/</span>
        <span className="text-zinc-800">冷氣坪數計算器</span>
      </nav>
      <h1 className="mt-6 text-3xl font-bold text-zinc-900">
        冷氣坪數計算器
      </h1>
      <p className="mt-4 text-zinc-600">
        依台灣常見估算方式（1 坪 ≈ 0.05 噸）快速計算，並依環境條件調整。
      </p>
      <div className="mt-8">
        <AcCalculator />
      </div>
      <p className="mt-8 text-sm text-zinc-500">
        延伸閱讀：
        <Link
          href="/blog/air-conditioner-tonnage-guide"
          className="ml-1 text-blue-600 hover:underline"
        >
          冷氣坪數怎麼算？完整選購指南
        </Link>
      </p>
    </div>
  );
}
