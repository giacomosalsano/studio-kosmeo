import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";

export const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Studio Kosmeo",
  description: "Studio Kosmeo Jewelry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebas.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
