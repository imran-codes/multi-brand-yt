import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { brandThemes, getActiveBrand } from "@/utils/brands";

const inter = Inter({ subsets: ["latin"] });

const activeBrand = getActiveBrand();
const theme = brandThemes[activeBrand];

export const metadata: Metadata = {
  title: theme.name,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-full ${
          theme.name === "Ballers Boutique"
            ? "bg-red-700 text-white"
            : "bg-green-500 text-white"
        }`}
      >
        <Header theme={theme} />
        {children}
      </body>
    </html>
  );
}
