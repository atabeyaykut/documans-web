"use client";
import React, { useEffect, useMemo, useRef, useState } from 'react';

export type ProgressBarProps = {
  label: string;
  value: number; // 0 - 100
  durationMs?: number; // animation duration
  colorStops?: [string, string, string]; // start, mid, end colors (HEX or rgb(a))
  heightClassName?: string; // Tailwind height class e.g. 'h-3'
  className?: string; // container extra classes
  showPercent?: boolean;
  roundedClassName?: string; // e.g. 'rounded-full'
};

// Utility: parse hex or rgb(a) to {r,g,b}
function parseColorToRGB(color: string): { r: number; g: number; b: number } {
  const hexMatch = color.replace('#', '');
  if (/^[0-9a-fA-F]{6}$/.test(hexMatch)) {
    const r = parseInt(hexMatch.slice(0, 2), 16);
    const g = parseInt(hexMatch.slice(2, 4), 16);
    const b = parseInt(hexMatch.slice(4, 6), 16);
    return { r, g, b };
  }
  const rgbMatch = color.match(/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i);
  if (rgbMatch) {
    return { r: Number(rgbMatch[1]), g: Number(rgbMatch[2]), b: Number(rgbMatch[3]) };
  }
  // Fallback to emerald if parsing fails
  return { r: 16, g: 185, b: 129 };
}

function interpolate(a: number, b: number, t: number) {
  return Math.round(a + (b - a) * t);
}

function mixColors(c1: string, c2: string, t: number): string {
  const col1 = parseColorToRGB(c1);
  const col2 = parseColorToRGB(c2);
  const r = interpolate(col1.r, col2.r, t);
  const g = interpolate(col1.g, col2.g, t);
  const b = interpolate(col1.b, col2.b, t);
  return `rgb(${r}, ${g}, ${b})`;
}

const clamp = (n: number, min = 0, max = 100) => Math.min(Math.max(n, min), max);

export const ProgressBar: React.FC<ProgressBarProps> = ({
  label,
  value,
  durationMs = 1800,
  colorStops = ['#ef4444', '#f59e0b', '#22c55e'], // red-500 -> amber-500 -> green-500
  heightClassName = 'h-3',
  className = '',
  showPercent = true,
  roundedClassName = 'rounded-full',
}) => {
  const target = clamp(value);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  // Animate from 0 to target on mount
  useEffect(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setProgress(0);
    startRef.current = null;

    const animate = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const t = Math.min(elapsed / durationMs, 1);
      // Ease-out cubic for nicer motion
      const eased = 1 - Math.pow(1 - t, 3);
      const current = Math.floor(eased * target);
      setProgress(current);
      if (t < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, durationMs]);

  // Determine dynamic color along stops
  const fillColor = useMemo(() => {
    const p = clamp(progress, 0, 100) / 100;
    const [c0, c1, c2] = colorStops;
    if (p <= 0.5) {
      const t = p / 0.5; // 0..1 from c0->c1
      return mixColors(c0, c1, t);
    }
    const t = (p - 0.5) / 0.5; // 0..1 from c1->c2
    return mixColors(c1, c2, t);
  }, [progress, colorStops]);

  // Subtle shimmer gradient overlay for "wow" effect
  const shimmerStyle = useMemo(() => ({
    background: `linear-gradient(90deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.35) 50%, rgba(255,255,255,0.1) 100%)`,
  }), []);

  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-end justify-between mb-2">
        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{label}</span>
        {showPercent && (
          <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">{progress}%</span>
        )}
      </div>
      <div className={`relative w-full bg-gray-200/70 dark:bg-gray-700/50 ${roundedClassName} overflow-hidden ${heightClassName} shadow-inner`}
           aria-label={label}
           role="progressbar"
           aria-valuemin={0}
           aria-valuemax={100}
           aria-valuenow={progress}
      >
        {/* Glow backdrop */}
        <div
          className={`absolute inset-0 ${roundedClassName}`}
          style={{
            boxShadow: `inset 0 0 12px rgba(0,0,0,0.15)`,
          }}
        />
        {/* Fill */}
        <div
          className={`absolute left-0 top-0 h-full ${roundedClassName} will-change-[width,background-color]`}
          style={{
            width: `${progress}%`,
            backgroundColor: fillColor,
            transition: 'width 80ms linear, background-color 120ms linear',
            filter: 'saturate(1.05)',
          }}
        >
          {/* Shimmer overlay moving with width */}
          <div
            className="h-full w-full mix-blend-soft-light opacity-60"
            style={shimmerStyle}
          />
        </div>
        {/* Subtle stripes for depth */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.20]"
             style={{
               backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.12) 0, rgba(255,255,255,0.12) 6px, transparent 6px, transparent 12px)'
             }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
