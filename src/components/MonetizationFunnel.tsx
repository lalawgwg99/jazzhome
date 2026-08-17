import { LineCta } from "./LineCta";
import { monetization } from "@/lib/monetization";

export function MonetizationFunnel() {
  return (
    <section className="py-14 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="space-y-6">
          <LineCta
            variant="banner"
            title={monetization.lineConsultTitle}
            description={monetization.lineConsultDesc}
          />

          <div className="apple-card border border-black/[0.05] bg-white p-6 sm:p-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-[#5856D6]/10 px-2 py-0.5 text-xs font-semibold text-[#5856D6]">
                    專家服務
                  </span>
                  <h3 className="text-base font-semibold text-[#1C1C1E]">
                    {monetization.paidConsultTitle}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-[#636366]">
                  {monetization.paidConsultDesc}
                </p>
              </div>

              <div className="shrink-0">
                <span className="inline-flex items-center text-xs font-medium text-[#8E8E93]">
                  於 LINE 留言「審圖」專人接洽
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
