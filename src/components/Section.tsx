export type Paragraph = { content: string; sort_order?: number };
export type SectionType = {
  id: number;
  post_id: number;
  parent_id?: number | null;
  heading?: string | null;
  sort_order?: number;
  paragraphs?: Paragraph[];
};

export default function Section({ section }: { section: SectionType }) {
  return (
    <section className="my-6">
      {section.heading ? (
        <h2 className="mt-4 mb-2 text-xl font-semibold">{section.heading}</h2>
      ) : null}
      {(section.paragraphs || []).map((p, idx) => (
        <p key={idx} className="mb-3 leading-7 text-zinc-800 dark:text-zinc-200">
          {p.content}
        </p>
      ))}
    </section>
  );
}
