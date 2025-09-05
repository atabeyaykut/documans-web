import React from 'react';
import CircularProgress from './CircularProgress';

export type CircularItem = {
  label: string;
  value: number;
  durationMs?: number;
  colorStops?: [string, string, string];
  size?: number;
  strokeWidth?: number;
};

export type CircularProgressShowcaseProps = {
  title?: string;
  subtitle?: string;
  items?: CircularItem[];
  className?: string;
};

const defaultItems: CircularItem[] = [
  { label: 'Client', value: 95 },
  { label: 'Project Success', value: 65 },
  { label: 'Business Projects', value: 70 },
];

const CircularProgressShowcase: React.FC<CircularProgressShowcaseProps> = ({
  title = 'Our Performance',
  subtitle = 'Animated circular progress with smooth color transitions',
  items = defaultItems,
  className = '',
}) => {
  const renderIcon = (label: string) => {
    const common = 'w-7 h-7 sm:w-8 sm:h-8';
    if (/client/i.test(label)) {
      // Users icon
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M16 11c1.657 0 3-1.79 3-4s-1.343-4-3-4-3 1.79-3 4 1.343 4 3 4Zm-8 0c1.657 0 3-1.79 3-4S9.657 3 8 3 5 4.79 5 7s1.343 4 3 4Zm0 2c-2.761 0-5 1.79-5 4v1a1 1 0 0 0 1 1h8.055A5.98 5.98 0 0 1 8 17Zm8 0c-.855 0-1.67.154-2.418.431A5.99 5.99 0 0 1 20 19v1a1 1 0 0 1-1 1h-6.055A5.98 5.98 0 0 1 16 17Z" />
        </svg>
      );
    }
    if (/project\s*success/i.test(label)) {
      // Check badge icon
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2 3 6v6c0 5.25 3.438 10.125 9 11 5.562-.875 9-5.75 9-11V6l-9-4Zm-1 14-4-4 1.414-1.414L11 12.172l5.586-5.586L18 8l-7 8Z" />
        </svg>
      );
    }
    // Business Projects -> briefcase icon
    return (
      <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M14 6V4h-4v2H4a2 2 0 0 0-2 2v2h20V8a2 2 0 0 0-2-2h-6Zm8 6H2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6Zm-9 5h-2v-2h2v2Z" />
      </svg>
    );
  };

  return (
    <section className={`w-full ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-300">
              {subtitle}
            </p>
          )}
        </div>

        <div className="rounded-2xl bg-white/70 dark:bg-gray-900/40 backdrop-blur shadow-lg ring-1 ring-black/5 dark:ring-white/10 p-4 sm:p-6">
          <div className="grid gap-6 md:grid-cols-3">
            {items.map((it, idx) => (
              <div
                key={`${it.label}-${idx}`}
                className={`flex flex-row items-center gap-4 sm:gap-6 ${idx < items.length - 1 ? 'md:border-r md:border-gray-200/70 dark:md:border-white/10 md:pr-6' : ''}`}
              >
                <div className="shrink-0">
                  <CircularProgress
                    label={it.label}
                    value={it.value}
                    durationMs={it.durationMs ?? 1800 + idx * 150}
                    colorStops={it.colorStops}
                    size={it.size ?? 140}
                    strokeWidth={it.strokeWidth ?? 10}
                    icon={<span className="text-gray-900 dark:text-white">{renderIcon(it.label)}</span>}
                  />
                </div>
                <div className="text-left">
                  <div className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                    {it.label}
                  </div>
                  {/* Optional: Add description/subtext here */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CircularProgressShowcase;
