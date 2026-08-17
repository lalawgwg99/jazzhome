import type { AffiliateProduct } from "@/lib/monetization";
import { affiliatePlatforms } from "@/lib/monetization";
import { AffiliateDisclosure } from "./AffiliateDisclosure";

interface ProductRecommendationsProps {
  products: AffiliateProduct[];
  title?: string;
}

export function ProductRecommendations({
  products,
  title = "規格對照商品與購買通路",
}: ProductRecommendationsProps) {
  const activeProducts = products.filter((p) => p.url);
  if (activeProducts.length === 0) return null;

  return (
    <section className="mt-10">
      <h3 className="text-base font-bold text-[#111111]">{title}</h3>
      <AffiliateDisclosure className="mt-2" />
      <div className="mt-4 space-y-3">
        {activeProducts.map((product) => {
          const platform = affiliatePlatforms[product.platform];
          return (
            <div
              key={`${product.platform}-${product.name}`}
              className="skm-card flex flex-col gap-3 p-5 border border-black/[0.08] bg-white sm:flex-row sm:items-center sm:justify-between shadow-2xs"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span
                    className={`rounded px-2 py-0.5 text-xs font-semibold ${platform.tagBg} ${platform.tagText}`}
                  >
                    {platform.name}
                  </span>
                  <p className="font-bold text-[#111111]">{product.name}</p>
                </div>
                {product.note && (
                  <p className="text-xs text-[#555555]">{product.note}</p>
                )}
                {product.price && (
                  <p className="text-xs font-mono font-medium text-[#111111]">
                    參考售價：{product.price}
                  </p>
                )}
              </div>
              <AffiliateButton
                href={product.url}
                platform={product.platform}
                label={platform.name}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

function AffiliateButton({
  href,
  platform,
  label,
}: {
  href: string;
  platform: string;
  label: string;
}) {
  if (!href) {
    return (
      <span className="text-xs text-[#777777] font-mono">通路連結整理中</span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      data-affiliate={platform}
      className="skm-btn inline-flex shrink-0 items-center justify-center gap-1.5 rounded-md bg-[#111111] px-4 py-2 text-xs font-semibold text-[#D4AF37] border border-[#A67C52]/40 shadow-xs hover:bg-black"
    >
      <span>前往 {label} 查看 ↗</span>
    </a>
  );
}
