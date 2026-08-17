import Link from "next/link";
import { AcInstallChecklist } from "@/components/tools/AcInstallChecklist";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "冷氣安裝避坑檢核表",
  description:
    "第一線安裝實務整理：購買前、安裝當天、驗收後 7 項必查。現場施工細節，AI 和內容農場寫不出來的避坑清單。",
  path: "/tools/ac-install-checklist",
  keywords: ["冷氣安裝", "冷氣避坑", "冷氣施工", "冷氣驗收"],
});

export default function AcInstallChecklistPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <nav className="text-sm text-zinc-500">
        <Link href="/tools" className="hover:text-zinc-800">
          工具
        </Link>
        <span className="mx-2">/</span>
        <span className="text-zinc-800">冷氣安裝避坑檢核表</span>
      </nav>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
          現場實務
        </span>
        <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800">
          互動檢核
        </span>
      </div>
      <h1 className="mt-4 text-3xl font-bold text-zinc-900">
        冷氣安裝避坑檢核表
      </h1>
      <p className="mt-4 text-zinc-600">
        從門市第一線整理的施工細節：購買前確認噸數與 CSPF、安裝當天盯排水與保固、驗收後核對單據。
        逐項勾選，確保不被坑。
      </p>
      <div className="mt-8">
        <AcInstallChecklist />
      </div>
      <p className="mt-8 text-sm text-zinc-500">
        延伸閱讀：
        <Link
          href="/blog/air-conditioner-tonnage-guide"
          className="ml-1 text-blue-600 hover:underline"
        >
          冷氣坪數怎麼算？
        </Link>
        ·
        <Link
          href="/tools/ac-calculator"
          className="ml-1 text-blue-600 hover:underline"
        >
          冷氣坪數計算器
        </Link>
      </p>
    </div>
  );
}
