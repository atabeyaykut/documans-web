'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CategoriesPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /kategoriler
    router.replace('/kategoriler');
  }, [router]);

  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="text-lg text-muted-foreground">Kategoriler sayfasına yönlendiriliyor...</div>
      </div>
    </main>
  );
}
