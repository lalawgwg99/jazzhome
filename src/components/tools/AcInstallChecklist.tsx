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
    label: "1. 坪數與冷房 kW 已加成核算",
    detail: "包含頂樓、西曬、挑高空間與廚房連通等熱源加成，確認型錄額定能力足夠。",
    stage: "before",
  },
  {
    id: "outdoor_space",
    label: "2. 室外機通風與安裝位置已確認",
    detail: "左右至少留 20~30cm、後方進風 15cm，前方無格柵遮蔽，確保散熱不跳機。",
    stage: "before",
  },
  {
    id: "pipe_length",
    label: "3. 銅管長度與洗洞路徑已勘查",
    detail: "確認是否超過原廠標準 5 米配管；洗洞避開主要結構樑柱與鋼筋。",
    stage: "before",
  },
  {
    id: "power_supply",
    label: "4. 專用電壓（220V）與安培數核實",
    detail: "確認冷氣專用迴路無與其他大功率電器共用，接地線確實配置。",
    stage: "before",
  },

  // Phase 2: During
  {
    id: "vacuum_done",
    label: "5. 真空泵抽真空達 15～20 分鐘以上",
    detail: "新冷媒（R32/R410A）嚴禁以冷媒排空取代抽真空，並需靜置測漏確認壓力無回升。",
    stage: "during",
  },
  {
    id: "flaring_lock",
    label: "6. 銅管喇叭口與接頭扭力鎖附",
    detail: "擴管平整無毛刺，使用扭力扳手標準鎖緊，防止 1~2 年後慢速漏冷媒。",
    stage: "during",
  },
  {
    id: "drain_slope",
    label: "7. 排水管斜度確保（至少 1/100 坡度）",
    detail: "冷凝水順重力自然排出，無凹陷蓄水彎折，避免日後回堵滴水滲入裝潢。",
    stage: "during",
  },

  // Phase 3: After
  {
    id: "water_test",
    label: "8. 室內機集水盤注水防漏測試",
    detail: "師傅完工時倒入 500cc~1000cc 清水，親眼確認室外端順暢排水、機體周邊無滲水。",
    stage: "after",
  },
  {
    id: "run_30min",
    label: "9. 強力冷房試機 30 分鐘與出風溫差",
    detail: "出風口與進風口溫差應達 8°C~10°C 以上，擺葉、遙控器、靜音模式運作正常。",
    stage: "after",
  },
  {
    id: "warranty_docs",
    label: "10. 原廠保固卡與店家施工保固單留存",
    detail: "核對室內外機機身序號與發票一致，取得施工廠商之安裝保固章與聯絡電話。",
    stage: "after",
  },
];

const STAGE_CONFIG = {
  before: { name: "第一階段：簽約購機前確認", badge: "購機前" },
  during: { name: "第二階段：安裝當日施工監工", badge: "施工中" },
  after: { name: "第三階段：完工交機防漏驗收", badge: "驗收時" },
};

export function AcInstallChecklist() {
  const [checkedIds, setCheckedIds] = useState<Set<string>>(new Set());
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

    const summary = `【JazzHome 冷氣安裝避坑檢核進度 (${checkedIds.size}/${CHECKLIST_ITEMS.length} - ${progressPercent}%)】\n\n` + lines.join("\n");
    navigator.clipboard.writeText(summary).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="space-y-6">
      {/* Inset Group: Progress Bar & Actions */}
      <div className="apple-card border border-black/[0.05] bg-white p-6 sm:p-7">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0071E3]">
              安裝施工查核進度
            </span>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-3xl font-bold tracking-tight text-[#1C1C1E]">
                {progressPercent}%
              </span>
              <span className="text-sm font-medium text-[#8E8E93]">
                （已核對 {checkedIds.size} / {CHECKLIST_ITEMS.length} 項）
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleSelectAll}
              className="apple-btn-active rounded-full bg-[#F2F2F7] px-3.5 py-1.5 text-xs font-semibold text-[#48484A] hover:bg-black/[0.08]"
            >
              {checkedIds.size === CHECKLIST_ITEMS.length ? "重設清單" : "全選"}
            </button>
            <button
              type="button"
              onClick={handleCopySummary}
              className="apple-btn-active inline-flex items-center gap-1.5 rounded-full bg-[#0071E3] px-4 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-[#0077ED]"
            >
              {copied ? (
                <>
                  <span className="text-white">✓</span>
                  <span>已複製清單文字</span>
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

        {/* Apple Style Progress Bar */}
        <div className="mt-4 h-2.5 w-full overflow-hidden rounded-full bg-[#E5E5EA]">
          <div
            className="h-full rounded-full bg-[#34C759] transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Checklist Sections by Stage */}
      {(["before", "during", "after"] as const).map((stage) => {
        const stageItems = CHECKLIST_ITEMS.filter((i) => i.stage === stage);
        const stageConfig = STAGE_CONFIG[stage];

        return (
          <div key={stage} className="apple-card overflow-hidden border border-black/[0.05] bg-white">
            <div className="border-b border-black/[0.04] bg-[#F9F9FB] px-6 py-3.5 flex items-center justify-between">
              <h3 className="text-sm font-bold text-[#1C1C1E]">{stageConfig.name}</h3>
              <span className="rounded-md bg-black/[0.05] px-2 py-0.5 text-[11px] font-semibold text-[#636366]">
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
                        ? "bg-[#34C759]/[0.04]"
                        : "hover:bg-black/[0.02]"
                    }`}
                  >
                    {/* iOS Animated Round Checkmark */}
                    <div className="pt-0.5">
                      <button
                        type="button"
                        onClick={() => toggleItem(item.id)}
                        className={`flex h-5 w-5 items-center justify-center rounded-full border transition-all ${
                          isChecked
                            ? "border-[#34C759] bg-[#34C759] text-white"
                            : "border-[#C7C7CC] bg-white hover:border-[#8E8E93]"
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
                        className={`text-sm font-semibold transition-colors ${
                          isChecked ? "text-[#248A3D] line-through decoration-black/30" : "text-[#1C1C1E]"
                        }`}
                      >
                        {item.label}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-[#636366]">
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
        title={
          progressPercent === 100
            ? "10 大查核已全部確認！還有特殊結構疑慮？"
            : "有項目現場無法判斷？拍照傳來免費幫你看"
        }
        description="室外機懸空掛壁架、冷媒超長收費標準、大樓管委會指定管線位置。有任何現場爭議，拍下照片傳到 LINE 諮詢。"
      />
    </div>
  );
}
