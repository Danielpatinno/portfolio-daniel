import { Header } from "@/components/home/header";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

const inter = Quicksand({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfólio Daniel",
  description: "Porfólio Daniel, conheça um pouco sobre min.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
