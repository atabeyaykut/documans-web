export default function WhyUs() {
  return (
    <section className="my-12">
      <div className="grid gap-6 grid-rows-[1fr_2fr] md:grid-rows-1 md:grid-cols-[1fr_2fr] items-stretch">
        {/* Left: Image */}
        <div
          className="relative w-full rounded-xl overflow-hidden bg-muted-bg border border-border"
          style={{ aspectRatio: "3 / 4" }}
        >
          <img
            src="https://picsum.photos/seed/whyus/1200/1200"
            alt="Why Us illustration"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            decoding="async"
            fetchPriority="low"
          />
        </div>

        {/* Right: Text */}
        <div className="flex flex-col justify-center items-start">
          <h2 className="text-3xl font-bold mb-4">Neden Biz?</h2>
          <p className="text-muted mb-4">
            İşinizi büyütmek ve operasyonlarınızı hızlandırmak için modern, güvenilir ve ölçeklenebilir
            çözümler üretiyoruz. Sizi dinleyip, ihtiyaca özel sonuçlar sunuyoruz.
          </p>

          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="mt-1">✅</span>
              <div>
                <p className="font-medium">Hızlı teslimat</p>
                <p className="text-muted">Çevik süreçler ile kısa sürede canlıya çıkış.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1">✅</span>
              <div>
                <p className="font-medium">Ölçeklenebilir mimari</p>
                <p className="text-muted">Büyüyen iş yüklerine sorunsuz uyum.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1">✅</span>
              <div>
                <p className="font-medium">Şeffaf iletişim</p>
                <p className="text-muted">Düzenli raporlama ve net yol haritası.</p>
              </div>
            </li>
          </ul>

          {/* Mission & Vision */}
          <div className="my-6 space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Misyonumuz</h3>
              <p className="text-muted">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam vel modi, maiores rerum voluptates molestias repellendus sunt accusamus reprehenderit tempore ullam deserunt natus distinctio dolor omnis dicta quasi asperiores earum!
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Vizyonumuz</h3>
              <p className="text-muted">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam vel modi, maiores rerum voluptates molestias repellendus sunt accusamus reprehenderit tempore ullam deserunt natus distinctio dolor omnis dicta quasi asperiores earum!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
