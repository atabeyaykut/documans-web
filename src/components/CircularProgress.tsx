"use client";
import React, { useEffect, useMemo, useRef, useState } from 'react';

export type CircularProgressProps = {
  label?: string; // kept for aria-label but not rendered inside
  value: number; // 0 - 100
  size?: number; // px
  strokeWidth?: number; // px
  durationMs?: number;
  colorStops?: [string, string, string];
  showPercent?: boolean;
  icon?: React.ReactNode; // icon rendered inside circle below percent
  className?: string;
};

function parseColorToRGB(color: string): { r: number; g: number; b: number } {
  const hex = color.replace('#', '');
  if (/^[0-9a-fA-F]{6}$/.test(hex)) {
    return {
      r: parseInt(hex.slice(0, 2), 16),
      g: parseInt(hex.slice(2, 4), 16),
      b: parseInt(hex.slice(4, 6), 16),
    };
  }
  const m = color.match(/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i);
  if (m) {
    return { r: +m[1], g: +m[2], b: +m[3] };
  }
  return { r: 16, g: 185, b: 129 };
}
function lerp(a: number, b: number, t: number) { return Math.round(a + (b - a) * t); }
function mix(c1: string, c2: string, t: number) {
  const a = parseColorToRGB(c1);
  const b = parseColorToRGB(c2);
  return `rgb(${lerp(a.r, b.r, t)}, ${lerp(a.g, b.g, t)}, ${lerp(a.b, b.b, t)})`;
}
const clamp = (n: number, min = 0, max = 100) => Math.min(Math.max(n, min), max);

const CircularProgress: React.FC<CircularProgressProps> = ({
  label,
  value,
  size = 140,
  strokeWidth = 10,
  durationMs = 1800,
  colorStops = ['#ef4444', '#f59e0b', '#22c55e'],
  showPercent = true,
  icon,
  className = '',
}) => {
  const target = clamp(value);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setProgress(0);
    startRef.current = null;

    const animate = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      const t = Math.min((ts - startRef.current) / durationMs, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.floor(eased * target));
      if (t < 1) rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [target, durationMs]);

  const percent = clamp(progress, 0, 100);
  const [c0, c1, c2] = colorStops;
  const strokeColor = useMemo(() => {
    const p = percent / 100;
    if (p <= 0.5) return mix(c0, c1, p / 0.5);
    return mix(c1, c2, (p - 0.5) / 0.5);
  }, [percent, c0, c1, c2]);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const dash = (percent / 100) * circumference;

  return (
    <div className={`flex flex-col items-center ${className}`} aria-label={label}
    >
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="block">
          {/* Track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(148,163,184,0.35)" // slate-400/35
            strokeWidth={strokeWidth}
            fill="none"
          />
          {/* Progress */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={`${dash} ${circumference - dash}`}
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
            style={{
              transition: 'stroke 120ms linear',
              filter: 'drop-shadow(0 1px 4px rgba(0,0,0,0.15)) saturate(1.05)',
            }}
          />
          {/* Shimmer arc overlay */}
          <defs>
            <linearGradient id="gp-shimmer" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.25)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.5)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
            </linearGradient>
          </defs>
        </svg>
        {/* Center content: percent above icon */}
        <div className="absolute inset-0 flex flex-col items-center justify-center select-none gap-2">
          {showPercent && (
            <span className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-none">
              {percent}%
            </span>
          )}
          {icon && (
            <span className="mt-1 text-gray-800 dark:text-gray-100 flex items-center justify-center">
              {icon}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CircularProgress;
