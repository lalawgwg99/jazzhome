"use client";

import { useState } from "react";

const TV_SIZES = [32, 43, 50, 55, 65, 75, 85];

export function TvDistanceCalculator() {
  const [mode, setMode] = useState<"size" | "distance">("size");
  const [tvSize, setTvSize] = useState(65);
  const [distance, setDistance] = useState(2.5);

  const sizeToDistance = (size: number) => {
    const cm = size * 2.54;
    return {
      min: Math.round((cm * 1.2) / 100 * 10) / 10,
      max: Math.round((cm * 1.5) / 100 * 10) / 10,
    };
  };

  const distanceToSize = (m: number) => {
    const cm = (m * 100) / 1.35;
    const inches = Math.round(cm / 2.54);
    const closest = TV_SIZES.reduce((prev, curr) =>
      Math.abs(curr - inches) < Math.abs(prev - inches) ? curr : prev,
    );
    return { ideal: inches, closest };
  };

  const range = sizeToDistance(tvSize);
  const sizeResult = distanceToSize(distance);

  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-6">
      <div className="mb-6 flex gap-2">
        <button
          type="button"
          onClick={() => setMode("size")}
          className={`rounded-lg px-4 py-2 text-sm font-medium ${
            mode === "size"
              ? "bg-zinc-900 text-white"
              : "bg-zinc-100 text-zinc-600"
          }`}
        >
          已知電視吋數
        </button>
        <button
          type="button"
          onClick={() => setMode("distance")}
          className={`rounded-lg px-4 py-2 text-sm font-medium ${
            mode === "distance"
              ? "bg-zinc-900 text-white"
              : "bg-zinc-100 text-zinc-600"
          }`}
        >
          已知觀看距離
        </button>
      </div>

      {mode === "size" ? (
        <div>
          <label htmlFor="tvSize" className="block text-sm font-medium text-zinc-700">
            電視吋數
          </label>
          <select
            id="tvSize"
            value={tvSize}
            onChange={(e) => setTvSize(Number(e.target.value))}
            className="mt-2 w-full rounded-lg border border-zinc-300 px-3 py-2 text-zinc-900"
          >
            {TV_SIZES.map((s) => (
              <option key={s} value={s}>
                {s} 吋
              </option>
            ))}
          </select>
          <div className="mt-8 rounded-lg bg-blue-50 p-5">
            <p className="text-sm text-blue-800">4K 舒適觀看距離</p>
            <p className="mt-1 text-3xl font-bold text-blue-900">
              {range.min}～{range.max} 公尺
            </p>
            <p className="mt-2 text-sm text-blue-700">
              {tvSize} 吋電視建議沙發距離在此範圍內，視野最舒適。
            </p>
          </div>
        </div>
      ) : (
        <div>
          <label htmlFor="distance" className="block text-sm font-medium text-zinc-700">
            觀看距離（公尺）
          </label>
          <div className="mt-2 flex items-center gap-4">
            <input
              id="distance"
              type="range"
              min={1.5}
              max={4}
              step={0.1}
              value={distance}
              onChange={(e) => setDistance(Number(e.target.value))}
              className="w-full"
            />
            <span className="w-16 text-right font-semibold text-zinc-900">
              {distance} m
            </span>
          </div>
          <div className="mt-8 rounded-lg bg-blue-50 p-5">
            <p className="text-sm text-blue-800">建議電視吋數</p>
            <p className="mt-1 text-3xl font-bold text-blue-900">
              {sizeResult.closest} 吋
            </p>
            <p className="mt-2 text-sm text-blue-700">
              依 {distance} 公尺距離，理想約 {sizeResult.ideal}{" "}
              吋，市售常見 {sizeResult.closest} 吋最相近。
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
