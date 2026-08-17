import Link from "next/link";
import { TvDistanceCalculator } from "@/components/tools/TvDistanceCalculator";
import { LineCta } from "@/components/LineCta";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "電視觀看距離計算器",
  description:
    "免費電視觀看距離計算器。依 4K 電視吋數或客廳深度，計算最舒適的觀看距離與建議尺寸。",
  path: "/tools/tv-distance",
  keywords: ["電視觀看距離", "電視幾吋", "65吋距離", "電視尺寸計算"],
});

export default function TvDistancePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <nav className="text-sm text-zinc-500">
        <Link href="/tools" className="hover:text-zinc-800">
          工具
        </Link>
        <span className="mx-2">/</span>
        <span className="text-zinc-800">電視觀看距離計算器</span>
      </nav>
      <h1 className="mt-6 text-3xl font-bold text-zinc-900">
        電視觀看距離計算器
      </h1>
      <p className="mt-4 text-zinc-600">
        4K 電視舒適距離約為螢幕對角線的 1.2～1.5 倍，用此工具快速換算。
      </p>
      <div className="mt-8">
        <TvDistanceCalculator />
      </div>
      <div className="mt-8">
        <LineCta
          variant="banner"
          title="客廳深度或牆面有限制？"
          description="電視吋數可以先算。若要連冷氣室外機、排水一起看格局，把照片傳到 LINE。"
        />
      </div>
      <p className="mt-8 text-sm text-zinc-500">
        延伸閱讀：
        <Link
          href="/blog/tv-size-distance-guide"
          className="ml-1 text-blue-600 hover:underline"
        >
          電視幾吋才適合？客廳觀看距離對照表
        </Link>
      </p>
    </div>
  );
}
