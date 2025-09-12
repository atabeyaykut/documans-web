import { NextRequest, NextResponse } from 'next/server';
import { getCategoryByName, getPostsByCategory } from '@/lib/mockData';

const USE_MOCK_DATA = process.env.USE_MOCK_DATA === 'true' || process.env.NODE_ENV === 'development';
const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:3001';

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ name: string }> }
) {
  const { name } = await context.params;
  const categoryName = decodeURIComponent(name);

  // Use mock data if enabled or in development mode
  if (USE_MOCK_DATA) {
    try {
      // Simulate network delay for realistic testing
      await new Promise(resolve => setTimeout(resolve, 150));
      
      const category = getCategoryByName(categoryName);
      if (!category) {
        return NextResponse.json(
          { message: 'Category not found' },
          { status: 404 }
        );
      }

      const posts = getPostsByCategory(categoryName);
      
      return NextResponse.json({
        category,
        posts
      });
    } catch {
      return NextResponse.json(
        { message: 'Failed to fetch mock category data' },
        { status: 500 }
      );
    }
  }

  // Use real backend API
  try {
    const response = await fetch(`${BACKEND_URL}/api/categories/${encodeURIComponent(categoryName)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        return NextResponse.json(
          { message: 'Category not found' },
          { status: 404 }
        );
      }
      throw new Error(`Backend responded with status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch {
    // Fallback to mock data if backend fails
    const category = getCategoryByName(categoryName);
    if (!category) {
      return NextResponse.json(
        { message: 'Category not found' },
        { status: 404 }
      );
    }

    const posts = getPostsByCategory(categoryName);
    return NextResponse.json({
      category,
      posts
    });
  }
}
