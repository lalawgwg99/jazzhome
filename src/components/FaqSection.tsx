import { faqs } from "@/lib/faq";

export function FaqSection() {
  return (
    <section className="border-t border-zinc-200 bg-zinc-50 px-4 py-14" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-5xl">
        <h2 id="faq-heading" className="text-2xl font-bold text-zinc-900">
          ❓ 常見問題
        </h2>
        <div className="mt-8 space-y-3">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl border border-blue-100 bg-white open:border-blue-200"
            >
              <summary className="cursor-pointer list-none px-5 py-4 font-semibold text-blue-800 marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.question}
                  <span className="shrink-0 text-lg font-normal text-blue-600 group-open:hidden">
                    +
                  </span>
                  <span className="hidden shrink-0 text-lg font-normal text-blue-600 group-open:inline">
                    –
                  </span>
                </span>
              </summary>
              <p className="px-5 pb-4 leading-7 text-zinc-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
