import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./globals.css";

const incon = Inconsolata({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Subir Imagenes",
  description: "Subir imagenes a el sitio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={incon.className}>{children}</body>
    </html>
  );
}
