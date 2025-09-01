// src/components/Header.tsx
import Link from "next/link";

async function getCategories() {
    const res = await fetch("http://localhost:3002/api/categories"); // Backend URL
    return res.json();
}

export default async function Header() {
    const categories = await getCategories();

    return (
        <header className="bg-primary text-primary-foreground p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">
                    <Link href="/">Placeholder</Link>
                </h1>

                <nav className="space-x-4">
                    {categories.length > 0
                        ? categories.map((cat: any) => (
                            <Link key={cat.id} href={`/categories/${cat.name}`}>
                                {cat.name}
                            </Link>
                        ))
                        : null}
                    <Link href="/tags/all">Kategoriler</Link>
                    <Link href="/about">Hakkımızda</Link>
                    <Link href="/contact">İletişim</Link>
                </nav>
            </div>
        </header>
    );
}

