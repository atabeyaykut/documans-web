import React from 'react';
import ProgressBar from './ProgressBar';

export type ProgressItem = {
  label: string;
  value: number; // 0 - 100
  durationMs?: number;
  colorStops?: [string, string, string];
};

export type ProgressShowcaseProps = {
  title?: string;
  subtitle?: string;
  items?: ProgressItem[];
  className?: string;
};

const defaultItems: ProgressItem[] = [
  { label: 'Client', value: 95 },
  { label: 'Project Success', value: 65 },
  { label: 'Business Projects', value: 70 },
];

const ProgressShowcase: React.FC<ProgressShowcaseProps> = ({
  title = 'Our Performance',
  subtitle = 'Dynamic, animated progress with smooth color transitions',
  items = defaultItems,
  className = '',
}) => {
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

        <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
          {items.map((it, idx) => (
            <div
              key={`${it.label}-${idx}`}
              className="p-4 sm:p-5 rounded-xl bg-white/70 dark:bg-gray-900/40 backdrop-blur shadow-md ring-1 ring-black/5 dark:ring-white/10 h-full"
            >
              <ProgressBar
                label={it.label}
                value={it.value}
                durationMs={it.durationMs ?? 1800 + idx * 150}
                colorStops={it.colorStops}
                heightClassName="h-4 md:h-5"
                roundedClassName="rounded-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgressShowcase;
