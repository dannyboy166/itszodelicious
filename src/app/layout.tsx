import type { Metadata } from "next";
import { Poppins, Great_Vibes, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "It's Zo Delicious | Homemade Cupcakes & Cakes - Northern Beaches Sydney",
  description:
    "Homemade cupcakes, cakes and sweet treats made on Sydney's Northern Beaches. Every order is baked fresh and customised to suit your celebration.",
  keywords: [
    "cupcakes",
    "cakes",
    "Northern Beaches",
    "Sydney",
    "custom cupcakes",
    "birthday cupcakes",
    "homemade",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${greatVibes.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
