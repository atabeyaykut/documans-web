import { NextRequest, NextResponse } from 'next/server';
import { mockCategories } from '@/lib/mockData';

const USE_MOCK_DATA = process.env.USE_MOCK_DATA === 'true' || process.env.NODE_ENV === 'development';
const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:3001';

export async function GET(request: NextRequest) {
  // Use mock data if enabled or in development mode
  if (USE_MOCK_DATA) {
    try {
      // Simulate network delay for realistic testing
      await new Promise(resolve => setTimeout(resolve, 200));
      return NextResponse.json(mockCategories);
    } catch (error) {
      console.error('Error with mock categories:', error);
      return NextResponse.json(
        { message: 'Failed to fetch mock categories' },
        { status: 500 }
      );
    }
  }

  // Use real backend API
  try {
    const response = await fetch(`${BACKEND_URL}/api/categories`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Backend responded with status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching categories from backend:', error);
    // Fallback to mock data if backend fails
    console.log('Falling back to mock data...');
    return NextResponse.json(mockCategories);
  }
}
