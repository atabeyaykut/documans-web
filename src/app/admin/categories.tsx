import { api } from "@/lib/api";

export const dynamic = "force-dynamic"; // avoid caching during dev

export default async function AdminCategoriesPage() {
  const categories = await api.listCategories();
  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="mb-6 text-2xl font-bold">Categories</h1>
      {categories.length === 0 ? (
        <p className="text-zinc-500">Henüz kategori yok.</p>
      ) : (
        <ul className="list-disc space-y-2 pl-6">
          {categories.map((c) => (
            <li key={c.id} className="text-zinc-800 dark:text-zinc-200">
              {c.name}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
