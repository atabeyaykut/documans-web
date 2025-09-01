import { notFound } from "next/navigation";
import Section from "@/components/Section";
import type { Section as SectionType, Post } from "@/lib/api";
import { api } from "@/lib/api";

type Params = { params: { slug: string } };

async function getPostAndSections(slug: string): Promise<{ post: Post; sections: SectionType[] } | null> {
  // If slug is numeric, treat as ID.
  if (/^\d+$/.test(slug)) {
    const id = Number(slug);
    const [post, sections] = await Promise.all([
      api.getPostById(id),
      api.getSectionsByPostId(id),
    ]);
    return { post, sections };
  }

  // Otherwise, try to find by slug via list (backend does not expose GET /posts/slug/:slug)
  const posts = await api.listPosts();
  const found = posts.find((p) => p.slug === slug);
  if (!found) return null;
  const [post, sections] = await Promise.all([
    api.getPostById(found.id),
    api.getSectionsByPostId(found.id),
  ]);
  return { post, sections };
}

export async function generateMetadata({ params }: Params) {
  const data = await getPostAndSections(params.slug);
  if (!data) return { title: "Yazı bulunamadı" };
  const { post } = data;
  const desc = post.excerpt || post.summary || "";
  return {
    title: `${post.title} – Blog`,
    description: desc,
    openGraph: {
      title: post.title,
      description: desc,
      images: post.cover_url ? [post.cover_url] : [],
    },
  };
}

export default async function PostPage({ params }: Params) {
  const data = await getPostAndSections(params.slug);
  if (!data) return notFound();
  const { post, sections } = data;

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <div className="mt-1 text-sm text-zinc-500">
        {post.created_at ? new Date(post.created_at).toLocaleDateString("tr-TR", { year: "numeric", month: "short", day: "2-digit" }) : null}
      </div>
      <article className="prose prose-zinc mt-6 dark:prose-invert">
        {sections.map((s) => (
          <Section key={s.id} section={s} />
        ))}
      </article>
    </main>
  );
}
