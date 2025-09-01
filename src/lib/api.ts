export const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:3000/api';

async function get<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    // For public pages we can enable ISR if needed via route options.
    // Default: no-store during early dev to avoid caching issues.
    cache: 'no-store',
    ...init,
    headers: {
      'Accept': 'application/json',
      ...(init?.headers || {}),
    },
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`GET ${path} failed: ${res.status} ${text}`);
  }
  return res.json();
}

export type Category = { id: number; name: string };
export type Paragraph = { content: string; sort_order?: number };
export type Section = {
  id: number;
  post_id: number;
  parent_id?: number | null;
  heading?: string | null;
  sort_order?: number;
  paragraphs?: Paragraph[];
};
export type Post = {
  id: number;
  title: string;
  slug?: string;
  excerpt?: string;
  summary?: string;
  created_at?: string;
  categories?: Category[];
  cover_url?: string | null;
};

export const api = {
  listPosts: () => get<Post[]>('/posts'),
  getPostById: (id: number | string) => get<Post>(`/posts/${id}`),
  getSectionsByPostId: (id: number | string) => get<Section[]>(`/sections/post/${id}`),
  listCategories: () => get<Category[]>('/categories'),
};
