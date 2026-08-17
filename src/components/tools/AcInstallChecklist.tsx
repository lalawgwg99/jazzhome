"use client";

import { useState } from "react";
import { LineCta } from "@/components/LineCta";

interface CheckItem {
  id: string;
  label: string;
  detail: string;
  category: "before-buy" | "install" | "after";
}

const checklist: CheckItem[] = [
  {
    id: "tonnage",
    label: "冷氣噸數已用坪數計算器確認",
    detail: "含頂樓、西曬、開放式空間加成",
    category: "before-buy",
  },
  {
    id: "cspf",
    label: "CSPF 能效標章 ≥ 4",
    detail: "對照原廠型錄，非業配文案",
    category: "before-buy",
  },
  {
    id: "outdoor-space",
    label: "室外機位置已實地確認",
    detail: "散熱空間、排水、管線長度、鄰居距離",
    category: "install",
  },
  {
    id: "drain",
    label: "排水方式與路徑已確認",
    detail: "避免日後壁面滲水客訴",
    category: "install",
  },
  {
    id: "warranty",
    label: "保固範圍與施工保固已釐清",
    detail: "原廠保固 vs 安裝商保固分開記",
    category: "install",
  },
  {
    id: "invoice",
    label: "紙本單據與型號序號已核對",
    detail: "室內外機型號、安裝日期、保固卡",
    category: "after",
  },
  {
    id: "test-run",
    label: "試機 30 分鐘以上，確認冷房效果",
    detail: "含遙控器、定時、靜音模式測試",
    category: "after",
  },
];

const categoryLabels = {
  "before-buy": "購買前",
  install: "安裝當天",
  after: "驗收後",
};

export function AcInstallChecklist() {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const progress = Math.round((checked.size / checklist.length) * 100);
  const categories = ["before-buy", "install", "after"] as const;

  return (
    <div>
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm">
          <span className="text-zinc-600">完成進度</span>
          <span className="font-semibold text-zinc-900">
            {checked.size}/{checklist.length}（{progress}%）
          </span>
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-zinc-200">
          <div
            className="h-full rounded-full bg-emerald-500 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="space-y-8">
        {categories.map((cat) => (
          <div key={cat}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
              {categoryLabels[cat]}
            </h3>
            <ul className="mt-3 space-y-2">
              {checklist
                .filter((item) => item.category === cat)
                .map((item) => (
                  <li key={item.id}>
                    <label className="flex cursor-pointer gap-3 rounded-lg border border-zinc-200 bg-white p-4 transition-colors hover:border-emerald-300">
                      <input
                        type="checkbox"
                        checked={checked.has(item.id)}
                        onChange={() => toggle(item.id)}
                        className="mt-0.5 rounded"
                      />
                      <div>
                        <p className="font-medium text-zinc-900">{item.label}</p>
                        <p className="mt-0.5 text-sm text-zinc-500">
                          {item.detail}
                        </p>
                      </div>
                    </label>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <LineCta
          variant="banner"
          title={
            progress === 100
              ? "項目都勾完了，還有現場條件不確定？"
              : "有項目勾不下去？先問再裝"
          }
          description="室外機位置、排水路徑、管線超長、特殊牆面，這些看照片比較準。傳到 LINE，我們依施工條件回你。"
        />
      </div>
    </div>
  );
}
