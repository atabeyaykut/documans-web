"use client";

import { useEffect, useRef, useState } from "react";

interface Reference {
    id: number;
    name: string;
    logoUrl: string;
    link?: string;
}

interface ReferencesProps {
    references: Reference[];
}

export default function References({ references }: ReferencesProps) {
    if (!references || references.length === 0) return null;

    // Build a base sequence that repeats the list once, then duplicate that sequence again.
    // Result: 4x items where the first half == second half, ensuring translateX(-50%) aligns perfectly
    // and the total length is long enough to cover wide viewports without gaps.
    const base = [...references, ...references];
    const duplicatedItems = [...base, ...base];

    // Pause animation when offscreen to save CPU/GPU
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (!wrapperRef.current || typeof IntersectionObserver === "undefined") return;
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                setIsVisible(entry.isIntersecting);
            },
            { root: null, threshold: 0.01 }
        );
        observer.observe(wrapperRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        // Full-bleed section: span entire viewport width even inside containers
        <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden bg-[var(--color-muted-bg)] py-10">
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="text-3xl font-bold mb-8 text-[var(--color-foreground)] text-center">Referanslar</h2>
            </div>
            
            {/* Infinite scroll container */}
            <div ref={wrapperRef} className={`infinite-scroll-wrapper${isVisible ? "" : " is-paused"}`}>
                <div className="infinite-scroll-track">
                    {duplicatedItems.map((ref, index) => (
                        <div
                            key={`${ref.id}-${index}`}
                            className="infinite-scroll-item"
                        >
                            {ref.link ? (
                                <a href={ref.link} target="_blank" rel="noreferrer noopener" aria-label={ref.name}>
                                    <div className="logo-container">
                                        <img
                                            src={ref.logoUrl}
                                            alt={ref.name}
                                            className="logo-image"
                                            loading="lazy"
                                            decoding="async"
                                            fetchPriority="low"
                                            width={240}
                                            height={120}
                                            sizes="(max-width: 480px) 140px, (max-width: 768px) 160px, 240px"
                                            draggable={false}
                                        />
                                    </div>
                                </a>
                            ) : (
                                <div className="logo-container">
                                    <img
                                        src={ref.logoUrl}
                                        alt={ref.name}
                                        className="logo-image"
                                        loading="lazy"
                                        decoding="async"
                                        fetchPriority="low"
                                        width={240}
                                        height={120}
                                        sizes="(max-width: 480px) 140px, (max-width: 768px) 160px, 240px"
                                        draggable={false}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
