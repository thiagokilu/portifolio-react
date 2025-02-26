import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-inter',
})



export const metadata: Metadata = {
  title: "Portifólio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`${inter.variable} ${inter.variable} bg-[#f5f5f7]`}>
        {children}
      </body>
    </html>
  );
}
