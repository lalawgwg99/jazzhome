"use client";

import { useState } from "react";
import { LineCta } from "@/components/LineCta";

export function AcCalculator() {
  const [ping, setPing] = useState(4);
  const [isTopFloor, setIsTopFloor] = useState(false);
  const [isWestFacing, setIsWestFacing] = useState(false);
  const [isOpenSpace, setIsOpenSpace] = useState(false);

  let baseTons = ping * 0.05;
  if (isTopFloor) baseTons *= 1.1;
  if (isWestFacing) baseTons *= 1.15;
  if (isOpenSpace) baseTons *= 1.1;

  const recommended = Math.ceil(baseTons * 10) / 10;
  const commonSizes = [1.8, 2.0, 2.5, 3.0, 3.5, 4.0];
  const suggested =
    commonSizes.find((s) => s >= recommended) ?? commonSizes[commonSizes.length - 1];

  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-6">
      <div className="space-y-5">
        <div>
          <label htmlFor="ping" className="block text-sm font-medium text-zinc-700">
            房間坪數
          </label>
          <div className="mt-2 flex items-center gap-4">
            <input
              id="ping"
              type="range"
              min={1}
              max={15}
              step={0.5}
              value={ping}
              onChange={(e) => setPing(Number(e.target.value))}
              className="w-full"
            />
            <span className="w-16 text-right font-semibold text-zinc-900">
              {ping} 坪
            </span>
          </div>
        </div>

        <fieldset className="space-y-3">
          <legend className="text-sm font-medium text-zinc-700">環境條件</legend>
          <label className="flex items-center gap-2 text-sm text-zinc-600">
            <input
              type="checkbox"
              checked={isTopFloor}
              onChange={(e) => setIsTopFloor(e.target.checked)}
              className="rounded"
            />
            頂樓或熱傳導強（+10%）
          </label>
          <label className="flex items-center gap-2 text-sm text-zinc-600">
            <input
              type="checkbox"
              checked={isWestFacing}
              onChange={(e) => setIsWestFacing(e.target.checked)}
              className="rounded"
            />
            西曬嚴重（+15%）
          </label>
          <label className="flex items-center gap-2 text-sm text-zinc-600">
            <input
              type="checkbox"
              checked={isOpenSpace}
              onChange={(e) => setIsOpenSpace(e.target.checked)}
              className="rounded"
            />
            開放式空間（+10%）
          </label>
        </fieldset>
      </div>

      <div className="mt-8 rounded-lg bg-blue-50 p-5">
        <p className="text-sm text-blue-800">估算結果</p>
        <p className="mt-1 text-3xl font-bold text-blue-900">
          建議 {recommended} 噸
        </p>
        <p className="mt-2 text-sm text-blue-700">
          市售常見機種建議選 <strong>{suggested} 噸</strong>（略大於估算值，冷房效果較穩定）
        </p>
        <p className="mt-3 text-xs text-blue-600">
          * 此為快速估算，實際仍需考量窗戶數、人數、熱源設備等因素。室外機位置與排水對了，噸數才有意義。
        </p>
      </div>

      <div className="mt-6">
        <LineCta
          variant="banner"
          title="這個噸數適不適合你的現場？"
          description={`目前估算約 ${recommended} 噸，市售可選 ${suggested} 噸。把房間照片或格局圖傳到 LINE，我們幫你看室外機與排水能不能這樣裝。`}
        />
      </div>
    </div>
  );
}
