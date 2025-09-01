type Props = { params: { id: string } };

export default function AdminEditCategoryPage({ params }: Props) {
  const { id } = params;
  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-2xl font-bold">Edit Category #{id}</h1>
      <p className="text-zinc-500">Kategori düzenleme formu burada olacak.</p>
    </main>
  );
}
