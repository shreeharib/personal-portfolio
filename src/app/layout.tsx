import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const title = "Shree Hari B — Product Manager | AI/ML & Growth";
const description =
  "AI-savvy Product Manager delivering user-centered outcomes, research-backed features, and measurable growth.";
const url = "https://shree-showcase.com"; // Replace with actual domain

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    url: url,
    images: [
      {
        url: `${url}/og-image.png`, // Assuming an og-image is in /public
        width: 1200,
        height: 630,
        alt: "Shree Hari B - Product Manager Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${url}/og-image.png`],
  },
  metadataBase: new URL(url),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shree Hari B",
    jobTitle: "Product Manager",
    url: url,
    sameAs: [
      "https://www.linkedin.com/in/shreeharib",
      "https://github.com/shreeharib",
      "https://www.youtube.com/@shreeharib",
    ],
  };

  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
