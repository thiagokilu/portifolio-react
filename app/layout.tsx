import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thiagodev.site"),
  title: {
    default: "Thiago Dev | Desenvolvedor Front-end",
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
    "Desenvolvedor Front-end",
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
    title: "Thiago Dev | Desenvolvedor Front-end",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Thiago Alexandre",
    jobTitle: "Desenvolvedor Front-end",
    url: "https://thiagodev.site",
    image: "https://thiagodev.site/imagens/perfil.png",
    sameAs: [
      "https://github.com/thiagokilu",
      "https://www.linkedin.com/in/thiago-alexandre-cavalcante/",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Front-end Development",
      "UI/UX",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Gestão em Tecnologia da Informação",
    },
  };

  return (
    <html lang="pt-BR" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <meta
          name="google-site-verification"
          content="UFjQxjA8G3WGGYaHktuobl0fkekKd5OKaK5877Bw8H4"
        />
      </head>
      <body className={`${inter.variable} ${sora.variable} antialiased`}>
        {children}
        <GoogleAnalytics gaId="G-4G55N5WQYM" />
        <GoogleTagManager gtmId="G-4G55N5WQYM" />
      </body>
    </html>
  );
}
