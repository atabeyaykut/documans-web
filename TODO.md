# Frontend TODO (Blog)

> Yaklaşım: Vanilla JS + çok sayfalı (index.html, post.html). Backend API'leri: `GET /posts`, `GET /posts/:id`, `GET /sections/post/:postId`, `GET /categories`.

## 1) İskelet ve Altyapı
- [ ] `frontend/` klasör yapısı
  - [ ] `pages/index.html`, `pages/post.html`
  - [ ] `assets/css/main.css`
  - [ ] `assets/js/api.js`, `assets/js/main.js`, `assets/js/post.js`, `assets/js/utils.js`
- [ ] Geliştirme için basit static server ayarı (örn. `npx serve frontend` veya Live Server)

Kabul Kriterleri:
- [ ] Dosyalar oluşturuldu, sayfalar tarayıcıda boş da olsa açılıyor.

## 2) Liste Sayfası (index.html)
- [ ] `GET /posts` ile yazıların çekilmesi
- [ ] Kart/grid listeleme (başlık, özet/snippet, tarih, kategori rozetleri)
- [ ] Kart tıklayınca `post.html?id=POST_ID`
- [ ] Basit arama kutusu (title içinde filtreleme) [opsiyonel]
- [ ] Kategori filtresi için UI [opsiyonel]

Kabul Kriterleri:
- [ ] Yazılar başarıyla listeleniyor ve linkler detay sayfasına gidiyor.

## 3) Detay Sayfası (post.html)
- [ ] Query param `id` okuma (`?id=`)
- [ ] `GET /posts/:id` ile başlık/kapak/meta verilerin gösterimi
- [ ] `GET /sections/post/:postId` ile section + paragraphs render
- [ ] İçindekiler (TOC) [opsiyonel]

Kabul Kriterleri:
- [ ] Başlık ve içerik eksiksiz görünüyor; paragraf sırası doğru.

## 4) Kategoriler
- [ ] `GET /categories` ile kategori listesinin çekilmesi
- [ ] Liste sayfasında kategori filtreleme [opsiyonel]

Kabul Kriterleri:
- [ ] En azından kategoriler UI'da görüntüleniyor veya basit bir filtre çalışıyor.

## 5) Stil ve UI
- [ ] Tipografi, renk paleti ve spacing (CSS)
- [ ] Responsive grid (mobil/desktop)
- [ ] Dark mode [opsiyonel]

Kabul Kriterleri:
- [ ] Mobil ve masaüstünde düzen bozulmadan okunabilir.

## 6) SEO ve Meta
- [ ] `post.html` yüklenince `document.title` ve `meta[name="description"]` güncelle
- [ ] Open Graph (`og:title`, `og:description`, `og:image`) dinamik güncelle
- [ ] `sitemap.xml` [opsiyonel]

Kabul Kriterleri:
- [ ] Sayfa kaynağında doğru meta etiketleri görünüyor.

## 7) Performans ve Erişilebilirlik
- [ ] Görseller için `loading="lazy"`
- [ ] Temel `aria-*` etiketleri ve kontrast kontrolü

Kabul Kriterleri:
- [ ] Lighthouse temel skorları (Perf/SEO/A11y) makul seviyede.

## 8) Test
- [ ] Basit e2e smoke test: ana sayfa yüklenir, liste görünür, bir yazı detayına gidilir
  - Araç: Playwright veya Cypress [opsiyonel]

Kabul Kriterleri:
- [ ] Smoke test lokal ortamda sorunsuz çalışır.

## 9) Build/Deploy
- [ ] (Opsiyonel) Vite dev server entegrasyonu
- [ ] Statik hosting (Netlify/Vercel) veya Nginx ile serve

Kabul Kriterleri:
- [ ] Build/serve adımları README'de yer alıyor ve uygulanabilir.

---

Notlar:
- API Base URL `.env` veya `api.js` içinde yapılandırılabilir.
- Güvenlik: Herhangi bir token/sır frontend'e gömülmemeli.
