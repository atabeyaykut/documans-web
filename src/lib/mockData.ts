// Mock data for development and testing purposes
export interface MockCategory {
  id: number;
  name: string;
  post_count: number;
  created_at: string;
  created_by_username: string;
  background_image?: string;
}

export interface MockPost {
  id: number;
  title: string;
  slug: string;
  published: boolean;
  created_at: string;
  updated_at: string;
  categories: { id: number; name: string }[];
  sections?: MockSection[];
}

export interface MockSection {
  id: number;
  post_id: number;
  parent_id?: number;
  heading: string;
  sort_order: number;
  paragraphs: MockParagraph[];
}

export interface MockParagraph {
  id: number;
  section_id: number;
  content: string;
  sort_order: number;
}

export const mockCategories: MockCategory[] = [
  {
    id: 1,
    name: "Teknoloji",
    post_count: 15,
    created_at: "2024-01-15T10:30:00Z",
    created_by_username: "admin",
    background_image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop&crop=center"
  },
  {
    id: 2,
    name: "Web Geliştirme",
    post_count: 23,
    created_at: "2024-01-20T14:15:00Z",
    created_by_username: "admin",
    background_image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=400&fit=crop&crop=center"
  },
  {
    id: 3,
    name: "JavaScript",
    post_count: 18,
    created_at: "2024-02-01T09:45:00Z",
    created_by_username: "editor",
    background_image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&h=400&fit=crop&crop=center"
  },
  {
    id: 4,
    name: "React",
    post_count: 12,
    created_at: "2024-02-05T16:20:00Z",
    created_by_username: "admin",
    background_image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop&crop=center"
  },
  {
    id: 5,
    name: "Node.js",
    post_count: 9,
    created_at: "2024-02-10T11:30:00Z",
    created_by_username: "editor",
    background_image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop&crop=center"
  },
  {
    id: 6,
    name: "Database",
    post_count: 7,
    created_at: "2024-02-15T13:45:00Z",
    created_by_username: "admin",
    background_image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=400&fit=crop&crop=center"
  },
  {
    id: 7,
    name: "DevOps",
    post_count: 5,
    created_at: "2024-02-20T08:15:00Z",
    created_by_username: "editor",
    background_image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=400&fit=crop&crop=center"
  },
  {
    id: 8,
    name: "UI/UX",
    post_count: 11,
    created_at: "2024-02-25T15:30:00Z",
    created_by_username: "admin",
    background_image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop&crop=center"
  },
  {
    id: 9,
    name: "Mobil Geliştirme",
    post_count: 6,
    created_at: "2024-03-01T12:00:00Z",
    created_by_username: "editor",
    background_image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop&crop=center"
  },
  {
    id: 10,
    name: "Yapay Zeka",
    post_count: 4,
    created_at: "2024-03-05T17:45:00Z",
    created_by_username: "admin",
    background_image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop&crop=center"
  }
];

export const mockPosts: MockPost[] = [
  {
    id: 1,
    title: "Modern Web Geliştirme Teknikleri",
    slug: "modern-web-gelistirme-teknikleri",
    published: true,
    created_at: "2024-03-01T10:00:00Z",
    updated_at: "2024-03-01T10:00:00Z",
    categories: [
      { id: 1, name: "Teknoloji" },
      { id: 2, name: "Web Geliştirme" }
    ]
  },
  {
    id: 2,
    title: "React Hooks ile State Yönetimi",
    slug: "react-hooks-ile-state-yonetimi",
    published: true,
    created_at: "2024-03-02T14:30:00Z",
    updated_at: "2024-03-02T14:30:00Z",
    categories: [
      { id: 3, name: "JavaScript" },
      { id: 4, name: "React" }
    ]
  },
  {
    id: 3,
    title: "Node.js ile RESTful API Geliştirme",
    slug: "nodejs-ile-restful-api-gelistirme",
    published: true,
    created_at: "2024-03-03T09:15:00Z",
    updated_at: "2024-03-03T09:15:00Z",
    categories: [
      { id: 5, name: "Node.js" },
      { id: 2, name: "Web Geliştirme" }
    ]
  },
  {
    id: 4,
    title: "PostgreSQL Veritabanı Optimizasyonu",
    slug: "postgresql-veritabani-optimizasyonu",
    published: true,
    created_at: "2024-03-04T16:45:00Z",
    updated_at: "2024-03-04T16:45:00Z",
    categories: [
      { id: 6, name: "Database" }
    ]
  },
  {
    id: 5,
    title: "Docker ile Konteyner Yönetimi",
    slug: "docker-ile-konteyner-yonetimi",
    published: true,
    created_at: "2024-03-05T11:20:00Z",
    updated_at: "2024-03-05T11:20:00Z",
    categories: [
      { id: 7, name: "DevOps" }
    ]
  }
];

export const mockAdmins = [
  {
    id: 1,
    username: "admin",
    email: "admin@example.com",
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 2,
    username: "editor",
    email: "editor@example.com",
    created_at: "2024-01-02T00:00:00Z"
  }
];

// Helper functions for mock data
export const getCategoryById = (id: number): MockCategory | undefined => {
  return mockCategories.find(cat => cat.id === id);
};

export const getCategoryByName = (name: string): MockCategory | undefined => {
  return mockCategories.find(cat => cat.name.toLowerCase() === name.toLowerCase());
};

export const getPostsByCategory = (categoryName: string): MockPost[] => {
  return mockPosts.filter(post => 
    post.categories.some(cat => cat.name.toLowerCase() === categoryName.toLowerCase())
  );
};

export const getPublishedPosts = (): MockPost[] => {
  return mockPosts.filter(post => post.published);
};

export const getPostBySlug = (slug: string): MockPost | undefined => {
  return mockPosts.find(post => post.slug === slug);
};
