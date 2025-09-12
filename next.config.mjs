/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable experimental features for better performance
  experimental: {
    // Disabled to avoid requiring 'critters' in environments where it's not installed (e.g., Amplify build)
    optimizeCss: false,
  },
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
  },
  
  // Compression
  compress: true,
  
  // Performance optimizations
  
  // Headers for better caching and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Redirects for Turkish-friendly URLs and route consolidation
  async redirects() {
    return [
      // Primary: English to Turkish where Turkish page exists
      { source: '/services', destination: '/kategoriler', permanent: true },
      { source: '/categories', destination: '/kategoriler', permanent: true },

      // Turkish aliases pointing to existing English pages (until Turkish pages exist)
      { source: '/hakkimizda', destination: '/about', permanent: true },
      { source: '/iletisim', destination: '/contact', permanent: true },
      { source: '/gizlilik', destination: '/privacy', permanent: true },
      { source: '/kullanim-sartlari', destination: '/terms', permanent: true },
      { source: '/referanslar', destination: '/testimonials', permanent: true },
      { source: '/portfolyo', destination: '/portfolio', permanent: true },
      { source: '/arama', destination: '/search', permanent: true },
      { source: '/yazilar/:slug', destination: '/posts/:slug', permanent: true },
      { source: '/etiketler/:tag', destination: '/tags/:tag', permanent: true },
      { source: '/kategoriler/:id', destination: '/categories/:id', permanent: true },
    ];
  },
};

export default nextConfig;
