import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = "https://thiagodev.site";
  const isPt = locale === "pt";

  const title = isPt
    ? "Thiago Dev | Desenvolvedor Front-end"
    : "Thiago Dev | Front-end Developer";
  const description = isPt
    ? "Portfólio de Thiago Alexandre — Desenvolvedor Front-end especializado em criar interfaces modernas, rápidas e acessíveis com React, Next.js e TypeScript."
    : "Thiago Alexandre's Portfolio — Front-end Developer specialized in creating modern, fast and accessible interfaces with React, Next.js and TypeScript.";

  return {
    title,
    description,
    keywords: isPt
      ? [
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
        ]
      : [
          "Thiago Alexandre",
          "Thiago Dev",
          "Front-end Developer",
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "UI/UX",
          "Portfolio",
          "Web Developer",
        ],
    authors: [{ name: "Thiago Alexandre" }],
    creator: "Thiago Alexandre",
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        pt: `${baseUrl}/pt`,
        en: `${baseUrl}/en`,
        "x-default": `${baseUrl}/pt`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}`,
      siteName: "Thiago Dev",
      images: [
        {
          url: `${baseUrl}/imagens/perfil.png`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: isPt ? "pt_BR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/imagens/perfil.png`],
      creator: "@thiagokilu",
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
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();
  const baseUrl = "https://thiagodev.site";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Thiago Alexandre",
    jobTitle: locale === "pt" ? "Desenvolvedor Front-end" : "Front-end Developer",
    url: `${baseUrl}/${locale}`,
    image: `${baseUrl}/imagens/perfil.png`,
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
      name: locale === "pt" ? "Gestão em Tecnologia da Informação" : "Information Technology Management",
    },
  };

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
