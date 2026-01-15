import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thiagodev.site/"),
  title: {
    default: "Thiago Dev | Front-end Developer",
    template: "%s | Thiago Dev",
  },
  description:
    "Portfólio de Thiago Alexandre — Desenvolvedor Front-end focado em criar interfaces modernas, rápidas e acessíveis.",
  keywords: [
    "Thiago Alexandre",
    "Thiago Dev",
    "Desenvolvedor Front-end",
    "React",
    "Next.js",
    "JavaScript",
    "UI/UX",
    "Portfolio",
  ],
  authors: [{ name: "Thiago Alexandre" }],
  creator: "Thiago Alexandre",
  openGraph: {
    title: "Thiago Dev | Portfólio",
    description:
      "Desenvolvedor Front-end especializado em criar experiências modernas e acessíveis.",
    url: "https://thiagodev.site/",
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
      "Portfólio de Thiago Alexandre — Projetos, habilidades e contato.",
    images: ["/imagens/perfil.png"],
  },
  icons: {
    icon: "/favicon.ico",
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
    </html>
  );
}
