import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { ClerkProvider } from "@clerk/nextjs";

import { poppins } from "@/components/fonts";
import { frFR } from "@clerk/localizations";

export const metadata: Metadata = {
  title: "E-katicket",
  description: "Acheter vos tickets en ligne",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider localization={frFR}>
      <html lang="fr" className="antialiased">
        <body className={`${poppins.className}  antialiased`}>
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
