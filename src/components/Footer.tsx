import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-border bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-none min-w-[1440px] px-10 py-12 grid grid-cols-12 gap-8">
        {/* Top-left logo */}
        <div className="col-span-3">
          <Link href="/" aria-label="Anasayfa">
            <img
              src="https://picsum.photos/200/56"
              alt="Documans logo"
              className="h-14 w-auto rounded-md border border-border/60 bg-card/60 object-contain"
            />
          </Link>
          <p className="mt-4 text-sm text-secondary-foreground/80 leading-relaxed">
            Belgelerinizi akıllı şekilde yönetin. Güvenli, ölçeklenebilir ve kullanıcı dostu iş çözümleri.
          </p>
        </div>

        {/* Middle navigation columns */}
        <nav className="col-span-7 grid grid-cols-4 gap-8">
          <div>
            <h4 className="text-sm font-semibold tracking-wide uppercase text-secondary-foreground/90">Kurumsal</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link className="hover:text-primary transition-colors" href="/about">Hakkımızda</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/portfolio">Referanslar / Portföy</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/careers">Kariyer</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/contact">İletişim</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wide uppercase text-secondary-foreground/90">Ürünler</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link className="hover:text-primary transition-colors" href="/solutions/document-management">Döküman Yönetimi</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/solutions/workflows">İş Akışları</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/solutions/integrations">Entegrasyonlar</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/pricing">Fiyatlandırma</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wide uppercase text-secondary-foreground/90">Kaynaklar</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link className="hover:text-primary transition-colors" href="/blog">Blog</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/docs">Dokümantasyon</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/faq">SSS</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/support">Destek</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wide uppercase text-secondary-foreground/90">Yasal</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link className="hover:text-primary transition-colors" href="/legal/privacy">Gizlilik</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/legal/terms">Kullanım Koşulları</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/legal/cookies">Çerez Politikası</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/legal/security">Güvenlik</Link></li>
            </ul>
          </div>
        </nav>

        {/* Rightmost contact column */}
        <div className="col-span-2">
          <h4 className="text-sm font-semibold tracking-wide uppercase text-secondary-foreground/90">İletişim</h4>
          <ul className="mt-4 space-y-3 text-sm">
            {/* Address */}
            <li className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 flex-none text-primary" fill="currentColor" aria-hidden="true">
                <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"/>
              </svg>
              <span className="text-secondary-foreground/90 leading-relaxed">İstanbul, Türkiye</span>
            </li>
            {/* Phone */}
            <li className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 flex-none text-primary" fill="currentColor" aria-hidden="true">
                <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.11.37 2.3.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C11.4 21 3 12.6 3 2a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.28.2 2.47.57 3.58a1 1 0 0 1-.24 1.01l-2.21 2.2Z"/>
              </svg>
              <a href="tel:+902121234567" className="hover:text-primary transition-colors">+90 (212) 123 45 67</a>
            </li>
            {/* Mail */}
            <li className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 flex-none text-primary" fill="currentColor" aria-hidden="true">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"/>
              </svg>
              <a href="mailto:info@documans.com" className="hover:text-primary transition-colors">info@documans.com</a>
            </li>
          </ul>

          {/* Bottom-right social icons inside contact column */}
          <div className="mt-6 flex items-center gap-3">
            <Link
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer noopener"
              className="transition-colors text-secondary-foreground/70 hover:text-[#E4405F]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403.61.212 1.045.466 1.503.924.458.458.712.893.924 1.503.163.46.349 1.26.403 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.43a3.92 3.92 0 0 1-.924 1.503 3.92 3.92 0 0 1-1.503.924c-.46.163-1.26.349-2.43.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.403a3.92 3.92 0 0 1-1.503-.924 3.92 3.92 0 0 1-.924-1.503c-.163-.46-.349-1.26-.403-2.43C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.43.212-.61.466-1.045.924-1.503.458-.458.893-.712 1.503-.924.46-.163 1.26-.349 2.43-.403C8.416 2.175 8.796 2.163 12 2.163Zm0 1.622c-3.153 0-3.524.011-4.768.069-1.027.047-1.585.218-1.956.363-.492.19-.84.416-1.208.784a2.544 2.544 0 0 0-.784 1.208c-.145.371-.316.929-.363 1.956-.058 1.244-.069 1.615-.069 4.768s.011 3.524.069 4.768c.047 1.027.218 1.585.363 1.956.19.492.416.84.784 1.208.368.368.716.594 1.208.784.371.145.929.316 1.956.363 1.244.058 1.615.069 4.768.069s3.524-.011 4.768-.069c1.027-.047 1.585-.218 1.956-.363.492-.19.84-.416 1.208-.784.368-.368.594-.716.784-1.208.145-.371.316-.929.363-1.956.058-1.244.069-1.615.069-4.768s-.011-3.524-.069-4.768c-.047-1.027-.218-1.585-.363-1.956a2.544 2.544 0 0 0-.784-1.208 2.544 2.544 0 0 0-1.208-.784c-.371-.145-.929-.316-1.956-.363-1.244-.058-1.615-.069-4.768-.069Zm0 3.351a4.864 4.864 0 1 1 0 9.728 4.864 4.864 0 0 1 0-9.728Zm0 1.622a3.242 3.242 0 1 0 0 6.484 3.242 3.242 0 0 0 0-6.484Zm5.99-2.202a1.134 1.134 0 1 1 0 2.268 1.134 1.134 0 0 1 0-2.268Z"/>
              </svg>
            </Link>
            <Link
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer noopener"
              className="transition-colors text-secondary-foreground/70 hover:text-[#1877F2]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24h11.49v-9.294H9.691V11.01h3.125V8.41c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.798.143v3.24l-1.922.001c-1.506 0-1.797.716-1.797 1.767v2.319h3.592l-.467 3.696h-3.125V24h6.127C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z"/>
              </svg>
            </Link>
            <Link
              href="https://linkedin.com"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer noopener"
              className="transition-colors text-secondary-foreground/70 hover:text-[#0A66C2]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.038-1.852-3.038-1.853 0-2.136 1.447-2.136 2.944v5.663H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.368-1.852 3.602 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433c-1.144 0-2.069-.927-2.069-2.07 0-1.144.925-2.07 2.069-2.07 1.144 0 2.07.926 2.07 2.07 0 1.143-.926 2.07-2.07 2.07zM6.814 20.452H3.861V9h2.953v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
              </svg>
            </Link>
            <Link
              href="https://x.com"
              aria-label="X"
              target="_blank"
              rel="noreferrer noopener"
              className="transition-colors text-secondary-foreground/70 hover:text-[#000000]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.362l-7.336 8.39 8.598 10.86H16.09l-5.137-6.29-5.87 6.29H1.72l7.78-8.336L1.18 2.25h6.64l4.65 5.74 5.774-5.74Zm-1.176 18.3h1.864L7.01 3.69H5.03l12.038 16.86Z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/60 bg-secondary/60">
        <div className="mx-auto max-w-none min-w-[1440px] px-10 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-secondary-foreground/80">© {year} Documans. Tüm hakları saklıdır.</p>
          <div className="text-sm">
            <Link className="hover:text-primary transition-colors" href="/sitemap.xml">Site Haritası</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
