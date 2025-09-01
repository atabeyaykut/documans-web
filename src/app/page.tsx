import HeroSection from "@/components/HeroSection";
import PostCard from "@/components/PostCard";
import References from "@/components/References";

async function fetchPosts() {
  const res = await fetch("http://localhost:3002/api/posts", { cache: "no-store" });
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
  const posts = await fetchPosts();

  return (
    <main className="container mx-auto p-4">
      <HeroSection />
      <References references={demoReferences} />
      <h2 className="text-3xl font-bold my-6">Tüm Postlar</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.length > 0 ? (
          posts.map((post: any) => <PostCard key={post.id} post={post} />)
        ) : (
          <p>Henüz post bulunmamaktadır.</p>
        )}
      </div>

    </main>
  );
}
