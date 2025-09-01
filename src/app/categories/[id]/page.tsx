type Props = { params: { id: string } };

export default function CategoryByIdPage({ params }: Props) {
  const { id } = params;
  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      <h1 className="text-2xl font-bold">Category: {id}</h1>
      <p className="text-zinc-500">Bu kategoriye ait postlar listelenecek.</p>
    </main>
  );
}
