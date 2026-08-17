import { LineCta } from "./LineCta";
import { monetization } from "@/lib/monetization";

export function MonetizationFunnel() {
  return (
    <section className="border-t border-zinc-200 bg-white px-4 py-14">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold text-zinc-900">
          {monetization.lineConsultTitle}
        </h2>
        <p className="mt-2 max-w-2xl text-zinc-600">
          {monetization.lineConsultDesc}
        </p>

        <div className="mt-8">
          <LineCta variant="banner" />
        </div>

        <div className="mt-6 rounded-xl border border-zinc-200 bg-zinc-50 p-6">
          <h3 className="font-semibold text-zinc-900">
            {monetization.paidConsultTitle}
          </h3>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            {monetization.paidConsultDesc}
          </p>
        </div>
      </div>
    </section>
  );
}
