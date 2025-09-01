import Link from "next/link";

export default function AdminHome() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      <h1 className="mb-6 text-2xl font-bold">Admin</h1>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <Link className="text-blue-600 hover:underline" href="/admin/posts">
            Posts
          </Link>
        </li>
        <li>
          <Link className="text-blue-600 hover:underline" href="/admin/categories">
            Categories
          </Link>
        </li>
      </ul>
    </main>
  );
}
