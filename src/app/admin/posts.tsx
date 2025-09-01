import PostCard from "@/components/PostCard";
import { api } from "@/lib/api";

export const dynamic = "force-dynamic"; // avoid caching during dev

export default async function AdminPostsPage() {
  const posts = await api.listPosts();
  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="mb-6 text-2xl font-bold">Posts</h1>
      {posts.length === 0 ? (
        <p className="text-zinc-500">Henüz yazı yok.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {posts.map((p) => (
            <PostCard key={p.id} post={p} />
          ))}
        </div>
      )}
    </main>
  );
}
