"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [categories, setCategories] = useState<Array<{ id: number; name: string }>>([]);
  const fetchedRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const openMenu = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
    if (!fetchedRef.current) {
      setLoading(true);
      fetch("http://localhost:3002/api/categories", { cache: "no-store" })
        .then(async (res) => {
          if (!res.ok) throw new Error("Kategori alınamadı");
          return res.json();
        })
        .then((data) => {
          setCategories(Array.isArray(data) ? data : []);
          fetchedRef.current = true;
          setError(null);
        })
        .catch((e) => setError(e.message || "Hata"))
        .finally(() => setLoading(false));
    }
  };

  const closeMenu = () => {
    // küçük gecikme ile flicker'ı azalt
    timeoutRef.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  return (
    <header className="bg-primary text-primary-foreground p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link href="/">Placeholder</Link>
        </h1>

        <nav className="flex items-center gap-4">
          {/* Kategoriler dropdown */}
          <div
            className="relative z-10"
            onMouseEnter={openMenu}
            onMouseLeave={closeMenu}
          >
            <button
              className="px-2 py-1 rounded hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-haspopup="menu"
              aria-expanded={open}
            >
              Kategoriler
            </button>

            {open && (
              <div
                role="menu"
                aria-label="Kategoriler menüsü"
                className="absolute left-[-100%] mt-2 w-auto min-w-[18rem] max-w-none rounded-md border border-border bg-card text-foreground shadow-lg"
                onMouseEnter={() => timeoutRef.current && clearTimeout(timeoutRef.current)}
              >
                <div className="p-4 max-h-80 overflow-auto grid [grid-template-columns:max-content] md:[grid-template-columns:max-content_max-content] gap-2">
                  {loading && <div className="px-3 py-2 text-sm text-muted">Yükleniyor...</div>}
                  {error && <div className="px-3 py-2 text-sm text-error">{error}</div>}
                  {!loading && !error && categories.length === 0 && (
                    <div className="px-3 py-2 text-sm text-muted">Kategori yok</div>
                  )}
                  {!loading && !error && categories.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/categories/${cat.name}`}
                      className="block rounded px-3 py-2 text-sm hover:bg-muted-bg hover:text-primary transition-colors whitespace-nowrap leading-snug"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Diğer linkler */}
          <Link href="/about" className="hover:text-accent transition-colors">Hakkımızda</Link>
          <Link href="/contact" className="hover:text-accent transition-colors">İletişim</Link>
        </nav>
      </div>
    </header>
  );
}
