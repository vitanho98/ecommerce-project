import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { InfoTopBar } from "@/components/UI/InfoTopBar";
import { NavBar } from "@/components/Navigation/NavBar";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ecommerce",
  description: "Projeto de e-commerce para estudo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased`}>
        <InfoTopBar />
        <NavBar />

        {children}
      </body>
    </html>
  );
}
