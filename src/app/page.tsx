import HeroSection from "@/components/HeroSection";
import References from "@/components/References";
import CategoryCard from "@/components/CategoryCard";
import WhyUs from "@/components/WhyUs";

async function fetchCategories() {
  const res = await fetch("http://localhost:3002/api/categories", { cache: "no-store" });
  if (!res.ok) return [];
  try {
    return await res.json();
  } catch (err) {
    console.error("JSON parse error:", err);
    return [];
  }
}

const demoReferences = [
  { id: 1, name: "Company A", logoUrl: "https://picsum.photos/id/237/1000/1500" },
  { id: 2, name: "Company B", logoUrl: "https://picsum.photos/id/242/1000/1000" },
  { id: 3, name: "Company C", logoUrl: "https://picsum.photos/id/258/1000/1000" },
  { id: 4, name: "Company D", logoUrl: "https://picsum.photos/id/212/1000/1500" },
  { id: 5, name: "Company E", logoUrl: "https://picsum.photos/id/342/1000/1000" },
  { id: 6, name: "Company F", logoUrl: "https://picsum.photos/id/428/1000/1000" }
];

export default async function HomePage() {
  const categories = await fetchCategories();

  return (
    <main className="container mx-auto p-4">
      <HeroSection />
      <References references={demoReferences} />
      <h2 className="text-3xl font-bold my-6">Hizmetler</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {categories.length > 0 ? (
          categories.map((cat: any) => <CategoryCard key={cat.id} category={cat} />)
        ) : (
          <p>Henüz kategori bulunmamaktadır.</p>
        )}
      </div>
      <WhyUs />
    </main>
  );
}
