import Link from "next/link";

interface PostCardProps {
  post: {
    id: number;
    title: string;
    slug: string;
    categories: { id: number; name: string }[];
    created_at: string;
  };
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition bg-card border-[var(--color-border)]">
      <Link href={`/posts/${post.slug}`}>
        <h2 className="text-xl font-bold mb-2 text-[var(--color-foreground)] hover:text-primary transition-colors">{post.title}</h2>
      </Link>
      <p className="text-sm mb-2 text-[var(--color-muted)]">
        {new Date(post.created_at).toLocaleDateString()}
      </p>
      <div className="flex gap-2">
        {post.categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/categories/${cat.name}`}
            className="text-primary hover:underline text-sm"
          >
            {cat.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
