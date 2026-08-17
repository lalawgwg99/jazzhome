"use client";

import { useState } from "react";
import { LineCta } from "@/components/LineCta";

interface CheckItem {
  id: string;
  label: string;
  detail: string;
  stage: "before" | "during" | "after";
}

const CHECKLIST_ITEMS: CheckItem[] = [
  // Phase 1: Before
  {
    id: "tonnage_verified",
    label: "1. 坪數與冷房 kW 已含熱源加成計算",
    detail: "頂樓、西曬、挑高空間與客餐廳連通已核算，確認原廠型錄額定能力足夠，避免下午吹不涼。",
    stage: "before",
  },
  {
    id: "outdoor_space",
    label: "2. 室外機通風與大樓管委會位置確認",
    detail: "左右留 20~30cm、後方進風 15cm，前方無格柵阻擋；符合社區大樓室外機統一吊掛規定。",
    stage: "before",
  },
  {
    id: "extra_fee_sheet",
    label: "3. 施工廠商超長加價明細表已索取確認",
    detail: "確認銅管超出 5 米單價、洗洞費、室外機鐵架費用，避免施工當天現場漫天要價。",
    stage: "before",
  },
  {
    id: "power_supply",
    label: "4. 冷氣專用迴路（220V）與接地線核實",
    detail: "確認電箱內有獨立無熔絲開關（NFB），未與微波爐、電熱水器共用迴路。",
    stage: "before",
  },

  // Phase 2: During
  {
    id: "vacuum_done",
    label: "5. 真空泵抽真空達 15～20 分鐘並測漏",
    detail: "R32/R410A 新冷媒嚴禁以冷媒排空取代抽真空，需靜置 5 分鐘確認指針無回升。",
    stage: "during",
  },
  {
    id: "flaring_lock",
    label: "6. 銅管喇叭口擴管平整與扭力鎖附",
    detail: "喇叭口無毛刺與裂痕，使用扭力扳手依原廠標準磅數鎖緊，防止慢速漏冷媒。",
    stage: "during",
  },
  {
    id: "drain_slope",
    label: "7. 排水管斜度確保（至少 1/100 下坡）",
    detail: "冷凝水順重力自然排出，無凹陷積水彎，無法自然洩水處評估加裝排水器。",
    stage: "during",
  },

  // Phase 3: After
  {
    id: "water_test",
    label: "8. 室內機集水盤注水防漏實測",
    detail: "師傅完工時倒入 500cc~1000cc 清水，親眼確認室外排水順暢、機體及牆面無滲漏。",
    stage: "after",
  },
  {
    id: "run_30min",
    label: "9. 強力冷房運轉 30 分鐘與出風溫差",
    detail: "進出風口溫差應達 8°C~10°C 以上，測試擺葉上下左右、定時與靜音模式正常。",
    stage: "after",
  },
  {
    id: "subsidy_docs",
    label: "10. 發票打上詳細型號 + 廢四機回收單第三聯",
    detail: "發票打齊室內外機型號以利申請補助，舊機回收索取『廢四機聯單第三聯』現省 5,000 元。",
    stage: "after",
  },
];

const TAIWAN_EXTRA_FEES = [
  { item: "超出標準銅管 (2分3分)", spec: "適用 2.2kW ~ 3.6kW", price: "約 $400 ～ $500 / 米" },
  { item: "超出標準銅管 (2分4分/5分)", spec: "適用 4.1kW ~ 7.1kW+", price: "約 $550 ～ $700 / 米" },
  { item: "室外機安裝架 (鍍鋅/白鐵)", spec: "標準 A 架 / 豪華懸臂架", price: "約 $1,200 ～ $2,500 / 組" },
  { item: "RC 鋼筋水泥洗洞", spec: "厚度 15~20cm 內", price: "約 $1,000 ～ $1,500 / 洞" },
  { item: "加裝微電腦排水泵浦", spec: "含電源線與排水軟管", price: "約 $1,800 ～ $2,500 / 台" },
  { item: "外牆危險施工費", spec: "外牆無站立點/需吊掛", price: "約 $1,500 ～ $4,000 / 次" },
];

const STAGE_CONFIG = {
  before: { name: "第一階段：簽約購機前確認", badge: "購機前" },
  during: { name: "第二階段：安裝當日施工監工", badge: "施工中" },
  after: { name: "第三階段：完工交機防漏與補助單據", badge: "驗收與補助" },
};

export function AcInstallChecklist() {
  const [checkedIds, setCheckedIds] = useState<Set<string>>(new Set());
  const [showFeeTable, setShowFeeTable] = useState(false);
  const [copied, setCopied] = useState(false);

  const toggleItem = (id: string) => {
    setCheckedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleSelectAll = () => {
    if (checkedIds.size === CHECKLIST_ITEMS.length) {
      setCheckedIds(new Set());
    } else {
      setCheckedIds(new Set(CHECKLIST_ITEMS.map((i) => i.id)));
    }
  };

  const progressPercent = Math.round((checkedIds.size / CHECKLIST_ITEMS.length) * 100);

  const handleCopySummary = () => {
    const lines = CHECKLIST_ITEMS.map((item) => {
      const isChecked = checkedIds.has(item.id);
      return `[${isChecked ? "✓" : " "}] ${item.label} (${item.detail})`;
    });

    const summary = `【JazzHome 台灣冷氣安裝避坑檢核進度 (${checkedIds.size}/${CHECKLIST_ITEMS.length} - ${progressPercent}%)】\n\n` + lines.join("\n");
    navigator.clipboard.writeText(summary).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="space-y-6">
      {/* Inset Group: Progress Bar & Actions */}
      <div className="skm-card border border-black/[0.08] bg-white p-6 sm:p-7 shadow-2xs">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#A67C52] font-mono">
              施工監工與避坑進度
            </span>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-3xl font-bold tracking-tight text-[#111111] font-mono">
                {progressPercent}%
              </span>
              <span className="text-sm font-medium text-[#777777]">
                （已查核 {checkedIds.size} / {CHECKLIST_ITEMS.length} 項）
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleSelectAll}
              className="skm-btn rounded-md bg-[#FAF9F8] px-3.5 py-1.5 text-xs font-semibold text-[#555555] border border-black/[0.06] hover:text-[#111111]"
            >
              {checkedIds.size === CHECKLIST_ITEMS.length ? "重設清單" : "全選"}
            </button>
            <button
              type="button"
              onClick={handleCopySummary}
              className="skm-btn inline-flex items-center gap-1.5 rounded-md bg-[#111111] px-4 py-1.5 text-xs font-semibold text-[#D4AF37] border border-[#A67C52]/40 shadow-xs hover:bg-black"
            >
              {copied ? (
                <>
                  <span className="text-[#D4AF37]">✓</span>
                  <span>已複製文字</span>
                </>
              ) : (
                <>
                  <span>📋</span>
                  <span>複製檢核表</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4 h-2.5 w-full overflow-hidden rounded-full bg-[#FAF9F8] border border-black/[0.06]">
          <div
            className="h-full rounded-full bg-[#A67C52] transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Taiwan Installation Extra Fees Collapsible Card */}
      <div className="skm-card overflow-hidden border border-black/[0.08] bg-white shadow-2xs">
        <button
          type="button"
          onClick={() => setShowFeeTable(!showFeeTable)}
          className="flex w-full items-center justify-between bg-[#FAF9F8] px-6 py-4 text-left transition-colors hover:bg-black/[0.02]"
        >
          <div className="flex items-center gap-2.5">
            <span className="text-lg">💰</span>
            <div>
              <p className="text-sm font-bold text-[#111111]">
                台灣冷氣標準安裝「常見現場加價收費行情表」
              </p>
              <p className="text-xs text-[#777777]">
                銅管超長、洗洞、室外機鐵架公會行情，避免現場被漫天開價
              </p>
            </div>
          </div>
          <span className="text-xs font-semibold text-[#A67C52]">
            {showFeeTable ? "收起行情" : "查看行情 ›"}
          </span>
        </button>

        {showFeeTable && (
          <div className="border-t border-black/[0.05] p-4 sm:p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="border-b border-black/[0.08] bg-[#FAF9F8] text-xs font-bold text-[#111111] font-mono">
                  <tr>
                    <th className="px-4 py-3">加價項目</th>
                    <th className="px-4 py-3">規格說明</th>
                    <th className="px-4 py-3 whitespace-nowrap">台灣常態行情 (新台幣)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/[0.04] text-[#444444]">
                  {TAIWAN_EXTRA_FEES.map((fee, idx) => (
                    <tr key={idx} className="hover:bg-[#FAF9F8]">
                      <td className="px-4 py-3 font-semibold text-[#111111]">{fee.item}</td>
                      <td className="px-4 py-3 text-[#555555]">{fee.spec}</td>
                      <td className="px-4 py-3 font-bold font-mono text-[#A67C52]">{fee.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-[#777777]">
              * 註：行情價依各地區、施工難度與樓層可能略有浮動，簽約前請務必請店家註明超長收費標準。
            </p>
          </div>
        )}
      </div>

      {/* Checklist Sections by Stage */}
      {(["before", "during", "after"] as const).map((stage) => {
        const stageItems = CHECKLIST_ITEMS.filter((i) => i.stage === stage);
        const stageConfig = STAGE_CONFIG[stage];

        return (
          <div key={stage} className="skm-card overflow-hidden border border-black/[0.08] bg-white shadow-2xs">
            <div className="border-b border-black/[0.05] bg-[#FAF9F8] px-6 py-3.5 flex items-center justify-between">
              <h3 className="text-sm font-bold text-[#111111]">{stageConfig.name}</h3>
              <span className="rounded-md bg-white px-2 py-0.5 text-[11px] font-semibold text-[#555555] border border-black/[0.06]">
                {stageConfig.badge}
              </span>
            </div>

            <div className="divide-y divide-black/[0.04] p-2">
              {stageItems.map((item) => {
                const isChecked = checkedIds.has(item.id);
                return (
                  <label
                    key={item.id}
                    className={`flex cursor-pointer items-start gap-3.5 rounded-xl p-3.5 transition-all ${
                      isChecked
                        ? "bg-[#FAF9F8]"
                        : "hover:bg-black/[0.02]"
                    }`}
                  >
                    <div className="pt-0.5">
                      <button
                        type="button"
                        onClick={() => toggleItem(item.id)}
                        className={`flex h-5 w-5 items-center justify-center rounded-full border transition-all ${
                          isChecked
                            ? "border-[#A67C52] bg-[#A67C52] text-white"
                            : "border-black/[0.2] bg-white hover:border-[#A67C52]"
                        }`}
                      >
                        {isChecked && (
                          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </button>
                    </div>

                    <div className="flex-1 select-none">
                      <p
                        className={`text-sm font-bold transition-colors ${
                          isChecked ? "text-[#A67C52] line-through decoration-black/30" : "text-[#111111]"
                        }`}
                      >
                        {item.label}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-[#555555]">
                        {item.detail}
                      </p>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>
        );
      })}

      {/* LINE Banner CTA */}
      <LineCta
        variant="banner"
        title="師傅報價超出預期？把報價單傳來幫您看"
        description="銅管超長計價、室外機鐵架收費或特殊洗洞位置。若現場施工報價有疑慮，傳至 LINE 免費為您把關合理行情。"
      />
    </div>
  );
}
