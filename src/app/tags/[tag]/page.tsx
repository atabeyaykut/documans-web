type Props = { params: { tag: string } };

export default function TagPage({ params }: Props) {
  const { tag } = params;
  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      <h1 className="text-2xl font-bold">Tag: #{tag}</h1>
      <p className="text-zinc-500">Bu etikete ait postlar listelenecek.</p>
    </main>
  );
}
