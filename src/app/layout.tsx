import "./globals.css";
import Header from "@/components/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        <Header />
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
