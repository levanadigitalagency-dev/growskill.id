import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Growskill - Platform Pembelajaran Online Terbaik | Kursus Skills & Content Creation",
  description: "Belajar skills, content creation, public speaking & editing untuk hasilkan income. Bergabung dengan ribuan member VIP Growskill sekarang juga.",
  keywords: ["kursus online", "content creation", "public speaking", "skill development", "earn income", "digital marketing"],
  authors: [{ name: "Growskill" }],
  creator: "Growskill",
  publisher: "Growskill",
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
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://growskill.id",
    siteName: "Growskill",
    title: "Growskill - Platform Pembelajaran Online Terbaik",
    description: "Belajar skills, content creation, public speaking & editing untuk hasilkan income.",
    images: [
      {
        url: "https://growskill.id/og-image.png",
        width: 1200,
        height: 630,
        alt: "Growskill - Learn Skills Earn Income",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Growskill - Platform Pembelajaran Online Terbaik",
    description: "Belajar skills, content creation, public speaking & editing untuk hasilkan income.",
    images: ["https://growskill.id/og-image.png"],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Growskill",
  },
  formatDetection: {
    telephone: false,
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="canonical" href="https://growskill.id" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Growskill",
              url: "https://growskill.id",
              logo: "https://growskill.id/logonav.svg",
              description: "Platform pembelajaran online untuk skill development dan income generation",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Support",
                email: "support@growskill.id",
              },
              sameAs: [
                "https://facebook.com/growskill",
                "https://instagram.com/growskill",
                "https://twitter.com/growskill",
              ],
            }),
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Growskill",
              url: "https://growskill.id",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://growskill.id/search?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
