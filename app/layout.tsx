import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thiagodev.site"),
  title: {
    default: "Thiago Dev | Front-end Developer",
    template: "%s | Thiago Dev",
  },
  description:
    "Portfólio de Thiago Alexandre — Desenvolvedor Front-end especializado em criar interfaces modernas, rápidas e acessíveis com React, Next.js e TypeScript.",
  keywords: [
    "Thiago Alexandre",
    "Thiago Dev",
    "Desenvolvedor Front-end",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "UI/UX",
    "Portfolio",
    "Desenvolvedor Web",
    "Front-end Developer",
  ],
  authors: [{ name: "Thiago Alexandre" }],
  creator: "Thiago Alexandre",
  publisher: "Thiago Alexandre",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://thiagodev.site",
    languages: {
      pt: "https://thiagodev.site/pt",
      en: "https://thiagodev.site/en",
      "x-default": "https://thiagodev.site/pt",
    },
  },
  openGraph: {
    title: "Thiago Dev | Desenvolvedor Front-end",
    description:
      "Desenvolvedor Front-end especializado em criar experiências modernas e acessíveis com React, Next.js e TypeScript.",
    url: "https://thiagodev.site",
    siteName: "Thiago Dev",
    images: [
      {
        url: "/imagens/perfil.png",
        width: 1200,
        height: 630,
        alt: "Thiago Dev Portfolio",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thiago Dev | Front-end Developer",
    description:
      "Portfólio de Thiago Alexandre — Desenvolvedor Front-end especializado em criar interfaces modernas, rápidas e acessíveis.",
    images: ["/imagens/perfil.png"],
    creator: "@thiagokilu",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Adicione seu código de verificação do Google Search Console
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="dark" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>{children}</body>
      <GoogleAnalytics gaId="G-4G55N5WQYM" />
      <GoogleTagManager gtmId="G-4G55N5WQYM" />
    </html>
  );
}
