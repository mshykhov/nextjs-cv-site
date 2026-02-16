import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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
  title: "Myron Shykhov — Senior Backend Engineer",
  description:
    "Backend Software Engineer with 5+ years of experience specializing in Kotlin, Java, and Spring ecosystem.",
  keywords: ["Myron Shykhov", "Backend Engineer", "Kotlin", "Java", "Spring Boot"],
  authors: [{ name: "Myron Shykhov" }],
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Myron Shykhov — Senior Backend Engineer",
    description:
      "Backend Software Engineer with 5+ years of experience specializing in Kotlin, Java, and Spring ecosystem.",
    url: "https://mshykhov.com",
    siteName: "Myron Shykhov",
    locale: "en_US",
    type: "website",
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
