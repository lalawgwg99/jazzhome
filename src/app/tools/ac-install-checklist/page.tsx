import Link from "next/link";
import { AcInstallChecklist } from "@/components/tools/AcInstallChecklist";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, buildBreadcrumbJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "冷氣安裝 10 大施工避坑檢核表",
  description:
    "冷氣購買前、安裝當日、完工驗收 10 大施工核心查核清單。第一線現場實務整理，可逐項核對並一鍵複製。",
  path: "/tools/ac-install-checklist",
  keywords: ["冷氣安裝檢核表", "冷氣施工避坑", "冷氣抽真空", "冷氣排水測試", "冷氣保固核對"],
});

export default function AcInstallChecklistPage() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "首頁", path: "/" },
    { name: "選購工具", path: "/tools" },
    { name: "冷氣安裝 10 大施工避坑檢核表", path: "/tools/ac-install-checklist" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
        <nav className="flex items-center gap-1.5 text-xs text-[#8E8E93]">
          <Link href="/" className="hover:text-[#0071E3] transition-colors">
            首頁
          </Link>
          <span>/</span>
          <Link href="/tools" className="hover:text-[#0071E3] transition-colors">
            選購工具
          </Link>
          <span>/</span>
          <span className="text-[#1C1C1E] font-medium">冷氣安裝檢核</span>
        </nav>

        <div className="mt-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] text-[#8C6438] bg-[#F7F3EE] px-3 py-1 rounded-full border border-[#A67C52]/30 shadow-2xs">
            <span>✦</span>
            <span className="font-semibold">INSTALLATION CHECKLIST · 2026</span>
          </div>
          <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-[#111111] sm:text-3xl">
            冷氣安裝施工避坑與加價檢核表
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-[#555555]">
            冷氣「七分靠安裝」。涵蓋銅管超長、洗洞、室外機鐵架加價行情，以及現場施工 10 大爭議查核清單。
          </p>
        </div>

        <div className="mt-8">
          <AcInstallChecklist />
        </div>

        <div className="mt-10 border-t border-black/[0.06] pt-6 flex flex-wrap gap-4 text-xs text-[#636366]">
          <span>延伸閱讀指南：</span>
          <Link
            href="/blog/ac-install-pitfalls"
            className="text-[#0071E3] font-semibold hover:underline"
          >
            冷氣安裝 10 大避坑指南：室外機、排水、管線與驗收清單 →
          </Link>
        </div>
      </div>
    </>
  );
}
