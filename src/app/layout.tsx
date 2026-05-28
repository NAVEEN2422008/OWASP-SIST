import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "OWASP SIST Student Chapter",
  description: "Building the next generation of cybersecurity leaders through OWASP training and campus community engagement.",
  keywords: ["OWASP", "Cybersecurity", "SIST", "Student Chapter", "CTF", "Security"],
  authors: [{ name: "OWASP SIST" }],
  creator: "OWASP SIST",
  openGraph: {
    title: "OWASP SIST Student Chapter",
    description: "Building the next generation of cybersecurity leaders through OWASP training and campus community engagement.",
    url: "https://sist.owasp.org",
    siteName: "OWASP SIST Student Chapter",
    locale: "en_US",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

import ClientLayout from './layoutClient';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-bg-primary text-text-primary overflow-x-hidden">
        <Header />
        <ClientLayout>
          <main className="grow">{children}</main>
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
