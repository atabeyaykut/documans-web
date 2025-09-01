export default function HeroSection() {
  return (
    // Full-bleed section: span entire viewport width even inside containers
    <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-x-clip bg-primary">
      <div className="mx-auto max-w-5xl px-4 py-20 text-center text-primary-foreground">
        <h1 className="mb-4 text-4xl font-bold">Documans Blog</h1>
        <p className="mx-auto max-w-xl text-lg">
          En güncel yazılar ve kategorilerle teknoloji, yapay zeka ve bilim dünyasına dair içerikler.
        </p>
      </div>
    </section>
  );
}
