import { faqs } from "@/lib/faq";

export function FaqSection() {
  return (
    <section className="py-14 sm:py-16" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#0071E3]">
            答疑解惑
          </p>
          <h2 id="faq-heading" className="mt-2 text-2xl font-bold tracking-tight text-[#1C1C1E] sm:text-3xl">
            選購常見問題
          </h2>
          <p className="mt-2 text-sm text-[#636366]">
            整理大家在買家電時最容易猶豫與困惑的關鍵問題
          </p>
        </div>

        <div className="mt-8 space-y-3">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="apple-card group overflow-hidden border border-black/[0.05] bg-white transition-all open:shadow-[0_4px_16px_rgba(0,0,0,0.04)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-4.5 font-semibold text-[#1C1C1E] transition-colors hover:text-[#0071E3] [&::-webkit-details-marker]:hidden">
                <span className="text-base font-medium">{item.question}</span>
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F2F2F7] text-xs font-bold text-[#8E8E93] transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="border-t border-black/[0.04] px-6 pt-3 pb-5 text-sm leading-relaxed text-[#636366]">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
