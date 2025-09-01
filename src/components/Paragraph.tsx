export default function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="mb-3 leading-7 text-zinc-800 dark:text-zinc-200">{children}</p>;
}
