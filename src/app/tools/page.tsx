import Link from "next/link";
import { tools } from "@/lib/tools";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, buildBreadcrumbJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "家電選購與施工評估工具庫",
  description:
    "冷氣坪數噸數試算、10大施工檢核表、電視觀看距離、冰箱容量公升數、洗衣機公斤數選型決策器。免費線上工具，解決選購家電不知怎麼挑的焦慮。",
  path: "/tools",
  keywords: ["家電計算器", "冷氣坪數計算", "電視距離計算", "冰箱容量試算", "洗衣機公斤數", "施工檢核表"],
});

export default function ToolsPage() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "首頁", path: "/" },
    { name: "選購工具", path: "/tools" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#0071E3]/10 px-3 py-1 text-xs font-semibold text-[#0071E3]">
            <span>􀎞</span>
            <span>科學計算 · 現場實務 · 即開即用</span>
          </div>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#1C1C1E] sm:text-4xl">
            互動選購評估工具
          </h1>
          <p className="mt-3 text-base leading-relaxed text-[#636366]">
            買家電不靠感覺。先用計算器精準試算規格，再用檢核表核對施工，把每一分預算都花在刀口上。
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {tools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="apple-card apple-btn-active group flex flex-col justify-between p-6 sm:p-7 border border-black/[0.05] bg-white hover:border-[#0071E3]/30"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F2F2F7] text-2xl">
                    {tool.icon}
                  </span>
                  {tool.badge && (
                    <span className="rounded-full bg-[#0071E3]/10 px-2.5 py-0.5 text-xs font-semibold text-[#0071E3]">
                      {tool.badge}
                    </span>
                  )}
                </div>

                <h2 className="mt-4 text-lg font-bold tracking-tight text-[#1C1C1E] group-hover:text-[#0071E3] transition-colors">
                  {tool.name}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[#636366]">
                  {tool.description}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-black/[0.04] pt-4 text-xs">
                <span className="font-medium text-[#8E8E93]">{tool.summary}</span>
                <span className="font-semibold text-[#0071E3] group-hover:translate-x-0.5 transition-transform">
                  立即試算 →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
