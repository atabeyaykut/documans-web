'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Category {
  id: number;
  name: string;
  post_count: number;
  created_at: string;
  created_by_username: string;
  background_image?: string;
}

export default function KategorilerPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('/api/categories');
        if (!response.ok) {
          throw new Error('Kategoriler yüklenemedi');
        }
        const data = await response.json();
        setCategories(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Bir hata oluştu');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-10">
        <div className="flex items-center justify-center min-h-[200px]">
          <div className="text-lg text-muted-foreground">Kategoriler yükleniyor...</div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-10">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Kategoriler</h1>
          <div className="text-red-500 bg-red-50 p-4 rounded-lg">
            Hata: {error}
          </div>
        </div>
      </main>
    );
  }

  return (
    <div className="bg-gray-50">
    <main className="mx-auto max-w-7xl px-6 py-14">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-3 tracking-tight text-gray-900">Kategoriler</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          İlgi alanına göre kategorileri keşfet, yeni içerikleri yakala ve koleksiyonları incele.
        </p>
      </div>

      {categories.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-muted-foreground text-lg">
            Henüz hiç kategori eklenmemiş.
          </div>
        </div>
      ) : (
        <div className="grid gap-8 grid-cols-2">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${encodeURIComponent(category.name)}`}
              className="group block relative h-44 rounded-2xl overflow-hidden bg-white border border-gray-200 hover:border-blue-500/60 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Hover Background Image (hidden by default) */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  backgroundImage: `url(${category.background_image ? category.background_image : 'https://picsum.photos/seed/' + encodeURIComponent(category.name) + '/800/400'})`,
                }}
              />

              {/* Dark overlay only on hover for readability */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Brand gradient tint on hover to match homepage */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 to-cyan-500/40 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Gradient glow on hover */}
              <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                   style={{
                     background: 'linear-gradient(135deg, rgba(37,99,235,0.35), rgba(6,182,212,0.35))'
                   }}
              />

              {/* Foreground content */}
              <div className="relative z-10 h-full flex items-center p-6">
                <div className="flex w-full items-center gap-6">
                  {/* Icon area - 1/4 width */}
                  <div className="basis-1/4 shrink-0 flex items-center justify-center">
                    <div className="size-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/20">
                      {/* Folder icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-7"
                      >
                        <path d="M9.707 4.293A1 1 0 0 0 9 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7a1 1 0 0 1-.707-.293l-1.586-1.586Z" />
                      </svg>
                    </div>
                  </div>

                  {/* Text area - 3/4 width */}
                  <div className="basis-3/4">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h2 className="text-xl font-semibold text-gray-900 group-hover:text-white transition-colors">
                          {category.name}
                        </h2>
                        <p className="mt-1 text-sm text-gray-600 group-hover:text-white/80 transition-colors">
                          {category.post_count} yazı
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
