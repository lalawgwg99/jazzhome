import { faqs } from "@/lib/faq";

export function FaqSection() {
  return (
    <section className="py-14 sm:py-16 border-b border-black/[0.08] bg-white" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] text-[#8C6438] bg-[#F7F3EE] px-3 py-1 rounded-full border border-[#A67C52]/30 shadow-2xs">
            <span>✦</span>
            <span>FAQ & VERIFICATION · 選購與避坑常見問題</span>
          </div>
          <h2 id="faq-heading" className="mt-3 text-2xl font-extrabold tracking-tight text-[#111111] sm:text-3xl">
            台灣家電選購與施工避坑問答
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#555555]">
            匯整台灣消費者在挑選規格、冷房能力、電壓配線與安裝施工時最常遭遇的關鍵疑惑
          </p>
        </div>

        <div className="mt-8 space-y-3">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="skm-card group overflow-hidden border border-black/[0.08] bg-white transition-all shadow-2xs"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-4.5 font-bold text-[#111111] transition-colors hover:text-[#A67C52] [&::-webkit-details-marker]:hidden">
                <span className="text-sm sm:text-base">{item.question}</span>
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FAF9F8] border border-black/[0.08] text-xs font-bold text-[#777777] transition-transform duration-200 group-open:rotate-45 font-mono">
                  +
                </span>
              </summary>
              <div className="border-t border-black/[0.05] bg-[#FAF9F8]/50 px-6 pt-3.5 pb-5 text-xs sm:text-sm leading-relaxed text-[#555555]">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
