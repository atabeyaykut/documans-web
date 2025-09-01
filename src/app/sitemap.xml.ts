export const dynamic = 'force-dynamic';

export async function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n` +
`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
`  <url><loc>${process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3001'}/</loc></url>\n` +
`</urlset>`;
  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
