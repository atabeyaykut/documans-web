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
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Kategoriler</h1>
        <p className="text-muted-foreground">
          Tüm kategoriler ve her kategorideki yazı sayıları
        </p>
      </div>

      {categories.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-muted-foreground text-lg">
            Henüz hiç kategori eklenmemiş.
          </div>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${encodeURIComponent(category.name)}`}
              className="group block relative h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${category.background_image || 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop&crop=center'})`
                }}
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300" />
              
              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-8 text-white">
                <div className="flex items-start justify-between">
                  <h2 className="text-4xl font-bold text-white drop-shadow-lg">
                    {category.name}
                  </h2>
                  <span className="bg-white/20 backdrop-blur-sm text-white px-5 py-3 rounded-full text-lg font-medium">
                    {category.post_count} yazı
                  </span>
                </div>
                
                {/* Bottom gradient for better text readability */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
