import type { AffiliateProduct } from "@/lib/monetization";
import { affiliatePlatforms } from "@/lib/monetization";
import { AffiliateDisclosure } from "./AffiliateDisclosure";

interface ProductRecommendationsProps {
  products: AffiliateProduct[];
  title?: string;
}

export function ProductRecommendations({
  products,
  title = "推薦購買連結",
}: ProductRecommendationsProps) {
  const activeProducts = products.filter((p) => p.url);
  if (activeProducts.length === 0) return null;

  return (
    <section className="mt-10">
      <h2 className="text-lg font-semibold text-zinc-900">{title}</h2>
      <AffiliateDisclosure className="mt-2" />
      <div className="mt-4 space-y-3">
        {activeProducts.map((product) => {
          const platform = affiliatePlatforms[product.platform];
          return (
            <div
              key={`${product.platform}-${product.name}`}
              className="flex flex-col gap-3 rounded-xl border border-zinc-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="font-medium text-zinc-900">{product.name}</p>
                {product.note && (
                  <p className="mt-1 text-sm text-zinc-500">{product.note}</p>
                )}
                {product.price && (
                  <p className="mt-1 text-sm font-medium text-zinc-700">
                    {product.price}
                  </p>
                )}
              </div>
              <AffiliateButton
                href={product.url}
                platform={product.platform}
                label={platform.name}
                colorClass={platform.color}
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
  colorClass,
}: {
  href: string;
  platform: string;
  label: string;
  colorClass: string;
}) {
  if (!href) {
    return (
      <span className="text-xs text-zinc-400">連結設定中</span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      data-affiliate={platform}
      className={`inline-flex shrink-0 items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors ${colorClass}`}
    >
      前往 {label} →
    </a>
  );
}
