'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import PostCard from '@/components/PostCard';

interface Category {
  id: number;
  name: string;
  post_count: number;
  created_at: string;
  created_by_username: string;
}

interface Post {
  id: number;
  title: string;
  slug: string;
  created_at: string;
  categories: { id: number; name: string }[];
}

type Props = { params: { id: string } };

export default function CategoryByIdPage({ params }: Props) {
  const [category, setCategory] = useState<Category | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const categoryName = decodeURIComponent(params.id);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const response = await fetch(`/api/categories/${encodeURIComponent(categoryName)}`);
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Kategori bulunamadı');
          }
          throw new Error('Kategori verileri yüklenemedi');
        }
        const data = await response.json();
        setCategory(data.category);
        setPosts(data.posts || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Bir hata oluştu');
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryData();
  }, [categoryName]);

  if (loading) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-10">
        <div className="flex items-center justify-center min-h-[200px]">
          <div className="text-lg text-muted-foreground">Kategori yükleniyor...</div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-10">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Kategori</h1>
          <div className="text-red-500 bg-red-50 p-4 rounded-lg mb-4">
            Hata: {error}
          </div>
          <Link 
            href="/kategoriler"
            className="text-primary hover:underline"
          >
            ← Tüm kategorilere dön
          </Link>
        </div>
      </main>
    );
  }

  if (!category) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-10">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Kategori Bulunamadı</h1>
          <p className="text-muted-foreground mb-4">
            Aradığınız kategori mevcut değil.
          </p>
          <Link 
            href="/kategoriler"
            className="text-primary hover:underline"
          >
            ← Tüm kategorilere dön
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      <div className="mb-8">
        <Link 
          href="/kategoriler"
          className="text-primary hover:underline mb-4 inline-block"
        >
          ← Tüm kategoriler
        </Link>
        <h1 className="text-3xl font-bold mb-2">{category.name}</h1>
        <div className="flex items-center gap-4 text-muted-foreground">
          <span>{category.post_count} yazı</span>
          <span>•</span>
          <span>Oluşturan: {category.created_by_username}</span>
          <span>•</span>
          <span>{new Date(category.created_at).toLocaleDateString('tr-TR')}</span>
        </div>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-muted-foreground text-lg">
            Bu kategoride henüz yazı bulunmuyor.
          </div>
        </div>
      ) : (
        <div className="grid gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </main>
  );
}
