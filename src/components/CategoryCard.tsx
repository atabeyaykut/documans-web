import Link from "next/link";

interface CategoryCardProps {
  category: {
    id: number;
    name: string;
  };
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/categories/${category.name}`}
      className="group block rounded-lg border border-border bg-card p-5 shadow-sm transition hover:shadow-md"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {category.name}
        </h3>
        <span className="text-sm text-muted">Hizmet</span>
      </div>
    </Link>
  );
}
