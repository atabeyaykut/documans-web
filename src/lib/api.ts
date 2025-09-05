// NOTE: Real API requests are commented out temporarily and replaced with mock data
// so the frontend can run without the backend.
//
// export const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:3000/api';
//
// async function get<T>(path: string, init?: RequestInit): Promise<T> {
//   const res = await fetch(`${API_BASE}${path}`, {
//     // For public pages we can enable ISR if needed via route options.
//     // Default: no-store during early dev to avoid caching issues.
//     cache: 'no-store',
//     ...init,
//     headers: {
//       'Accept': 'application/json',
//       ...(init?.headers || {}),
//     },
//   });
//   if (!res.ok) {
//     const text = await res.text().catch(() => '');
//     throw new Error(`GET ${path} failed: ${res.status} ${text}`);
//   }
//   return res.json();
// }

// --- Mock helpers ---
function delay(ms = 200): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
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
  // listPosts: () => get<Post[]>('/posts'),
  // getPostById: (id: number | string) => get<Post>(`/posts/${id}`),
  // getSectionsByPostId: (id: number | string) => get<Section[]>(`/sections/post/${id}`),
  // listCategories: () => get<Category[]>('/categories'),

  // --- Mock implementations ---
  async listPosts(): Promise<Post[]> {
    await delay();
    return [
      {
        id: 1,
        title: 'Getting Started with Documans',
        slug: 'getting-started-documans',
        excerpt: 'Quick intro and setup guide',
        summary: 'A short summary of the post.',
        created_at: new Date().toISOString(),
        categories: [
          { id: 10, name: 'guides' },
          { id: 11, name: 'docs' },
        ],
        cover_url: null,
      },
      {
        id: 2,
        title: 'Advanced Tips',
        // slug intentionally omitted to mimic optional data from API
        excerpt: 'Improve your workflow with tips',
        created_at: new Date(Date.now() - 86400000).toISOString(),
        categories: [{ id: 12, name: 'tips' }],
      },
    ];
  },

  async getPostById(id: number | string): Promise<Post> {
    await delay();
    return {
      id: Number(id),
      title: `Post #${id}`,
      slug: `post-${id}`,
      summary: 'Detailed post content summary.',
      created_at: new Date().toISOString(),
      categories: [{ id: 10, name: 'guides' }],
      cover_url: null,
    };
  },

  async getSectionsByPostId(id: number | string): Promise<Section[]> {
    await delay();
    return [
      {
        id: 100,
        post_id: Number(id),
        heading: 'Introduction',
        sort_order: 1,
        paragraphs: [
          { content: 'Welcome to the guide.', sort_order: 1 },
          { content: 'This section explains the basics.', sort_order: 2 },
        ],
      },
      {
        id: 101,
        post_id: Number(id),
        heading: 'Next Steps',
        sort_order: 2,
        paragraphs: [
          { content: 'Explore advanced features.', sort_order: 1 },
        ],
      },
    ];
  },

  async listCategories(): Promise<Category[]> {
    await delay();
    return [
      { id: 10, name: 'guides' },
      { id: 11, name: 'docs' },
      { id: 12, name: 'tips' },
    ];
  },
};

