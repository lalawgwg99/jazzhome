import { LineCta } from "./LineCta";
import { monetization } from "@/lib/monetization";

export function MonetizationFunnel() {
  return (
    <section className="border-t border-zinc-200 bg-white px-4 py-14">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold text-zinc-900">選購協助</h2>
        <p className="mt-2 text-zinc-600">
          從免費諮詢到專業配置，依你的需求選擇
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="rounded-xl border-2 border-[#06C755] bg-[#06C755]/5 p-6">
            <span className="rounded-full bg-[#06C755] px-2.5 py-0.5 text-xs font-medium text-white">
              初期 · 導流
            </span>
            <h3 className="mt-3 font-semibold text-zinc-900">LINE 免費諮詢</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              線下門市 / 線上客製轉單。一對一評估冷氣坪數、冰箱容量，可配合安裝。
            </p>
            <div className="mt-4">
              <LineCta variant="compact" />
            </div>
          </div>

          <div className="rounded-xl border border-zinc-200 p-6">
            <span className="rounded-full bg-zinc-200 px-2.5 py-0.5 text-xs font-medium text-zinc-700">
              中期 · 聯盟
            </span>
            <h3 className="mt-3 font-semibold text-zinc-900">電商導購比價</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              文章推薦清單附 Momo、PChome、蝦皮 Affiliate 連結，一鍵比價購買。
            </p>
            <p className="mt-4 text-xs text-zinc-400">
              推薦連結陸續更新中
            </p>
          </div>

          <div className="rounded-xl border border-zinc-200 p-6">
            <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
              長期 · 付費
            </span>
            <h3 className="mt-3 font-semibold text-zinc-900">
              {monetization.paidConsultTitle}
            </h3>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              {monetization.paidConsultDesc}
            </p>
            <p className="mt-4 text-sm font-medium text-blue-700">
              {monetization.paidConsultPrice}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
