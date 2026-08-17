import { LineCta } from "./LineCta";
import { monetization } from "@/lib/monetization";

export function MonetizationFunnel() {
  return (
    <section className="py-14 sm:py-16 bg-[#FAF9F8]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="space-y-6">
          <LineCta
            variant="banner"
            title={monetization.lineConsultTitle}
            description={monetization.lineConsultDesc}
          />

          <div className="skm-card border border-black/[0.08] bg-white p-6 sm:p-7 shadow-2xs">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-[#FAF9F8] px-2.5 py-0.5 text-xs font-semibold text-[#8C6438] border border-[#A67C52]/30">
                    專人審核
                  </span>
                  <h3 className="text-base font-bold text-[#111111]">
                    {monetization.paidConsultTitle}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-[#555555]">
                  {monetization.paidConsultDesc}
                </p>
              </div>

              <div className="shrink-0">
                <span className="inline-flex items-center text-xs font-mono text-[#777777]">
                  於 LINE 留言「審圖」專人接洽 ↗
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
