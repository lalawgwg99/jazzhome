import Link from "next/link";
import { tools } from "@/lib/tools";
import { JsonLd } from "@/components/JsonLd";
import {
  AcIcon,
  RefrigeratorIcon,
  WasherIcon,
  TvIcon,
  ChecklistIcon,
  BoutiqueIcon,
} from "@/components/Icons";
import { buildMetadata, buildBreadcrumbJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "家電選購與施工評估計算器手帳",
  description:
    "冷氣坪數噸數試算、10大施工檢核表、電視觀看距離、冰箱容量公升數、洗衣機公斤數選型決策器。免登入，解決選購家電不知怎麼挑的焦慮。",
  path: "/tools",
  keywords: ["家電計算器", "冷氣坪數計算", "電視距離計算", "冰箱容量試算", "洗衣機公斤數", "施工檢核表"],
});

export default function ToolsPage() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "首頁", path: "/" },
    { name: "選購計算器", path: "/tools" },
  ]);

  const toolIcons: Record<string, React.ReactNode> = {
    "ac-calculator": <AcIcon size={24} className="text-[#A67C52]" />,
    "ac-install-checklist": <ChecklistIcon size={24} className="text-[#A67C52]" />,
    "ac-brand-matrix": <BoutiqueIcon size={24} className="text-[#A67C52]" />,
    "refrigerator-calculator": <RefrigeratorIcon size={24} className="text-[#A67C52]" />,
    "washing-machine-calculator": <WasherIcon size={24} className="text-[#A67C52]" />,
    "tv-distance": <TvIcon size={24} className="text-[#A67C52]" />,
  };

  return (
    <>
      <JsonLd data={breadcrumb} />

      {/* Header Banner */}
      <section className="border-b border-black/[0.08] bg-[#FAF9F8] py-10 sm:py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <nav className="flex items-center gap-1.5 font-mono text-xs text-[#777777]">
            <Link href="/" className="hover:text-[#111111] transition-colors">
              首頁
            </Link>
            <span>/</span>
            <span className="text-[#111111] font-semibold">選購計算器總覽</span>
          </nav>

          <div className="mt-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] text-[#8C6438] bg-[#F7F3EE] px-3 py-1 rounded-full border border-[#A67C52]/30 shadow-2xs">
              <span>✦</span>
              <span className="font-semibold">ALL DECISION TOOLKITS · 2026</span>
            </div>

            <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-[#111111] sm:text-4xl">
              家電選購與施工評估計算器
            </h1>

            <p className="mt-3 text-sm leading-relaxed text-[#555555]">
              買家電不靠感覺。先用計算器精準試算規格與 2026 政府節能補助，再用檢核表核對安裝加價行情，把預算精準花在刀口上。
            </p>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, idx) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="skm-card group flex flex-col justify-between p-6 bg-white"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#FAF9F8] border border-black/[0.06] shadow-2xs group-hover:border-[#A67C52]/40 transition-colors">
                    {toolIcons[tool.slug] || <AcIcon size={24} className="text-[#A67C52]" />}
                  </div>
                  <span className="font-mono text-xs text-[#777777]">
                    0{idx + 1} ↗
                  </span>
                </div>

                <h2 className="mt-4 text-base font-bold tracking-wide text-[#111111] group-hover:text-[#A67C52] transition-colors">
                  {tool.name}
                </h2>

                <p className="mt-2 text-xs leading-relaxed text-[#555555]">
                  {tool.description}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-black/[0.05] pt-3.5 text-xs font-mono">
                <span className="text-[11px] text-[#777777]">{tool.summary}</span>
                <span className="font-sans font-bold text-[#111111] group-hover:text-[#A67C52] group-hover:translate-x-0.5 transition-all text-xs">
                  開啟試算 →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
