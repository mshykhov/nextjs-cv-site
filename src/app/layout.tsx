import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import config from "@/data/resume";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(config.meta.url),
  title: config.meta.title,
  description: config.meta.description,
  keywords: config.meta.keywords,
  authors: [{ name: config.personal.name }],
  openGraph: {
    title: config.meta.title,
    description: config.meta.description,
    url: config.meta.url,
    siteName: config.personal.name,
    locale: config.meta.locale,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: config.meta.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: config.meta.title,
    description: config.meta.description,
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

const themeScript = `
(function() {
  var stored = localStorage.getItem('theme');
  var dark = stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches);
  if (dark) document.documentElement.classList.add('dark');
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
