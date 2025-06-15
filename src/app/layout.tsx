import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/custom/Header";
import Footer from "@/components/custom/Footer";
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "600", "700"], // you can customize weights you want
  style: ["normal"],
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TokenVault",
  description:
    "Explore a premier NFT marketplace to discover, collect, and trade rare digital art, collectibles, and assets from top creators around the world. TokenVault makes it easy to own and invest in NFTs securely.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
     <body
  className={`${montserrat.variable} ${inter.variable} font-sans antialiased relative min-h-screen scrollbar-thin`}
>

        <div className="absolute inset-0 -z-10 main-gradient" />
        <div className="absolute inset-0 -z-10 bg-black/50" />

        <Header />
        <main className="overflow-y-auto scroll-smooth ease-transition padding">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
