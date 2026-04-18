import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alaganandha Pradeep — AI Engineer & Developer",
  description: "Final-year B.Tech AI & Data Science student at RSET Kochi. Building end-to-end ML systems and polished frontends.",
  openGraph: {
    title: "Alaganandha Pradeep — Portfolio",
    description: "AI Engineer & Developer. RSET Kochi.",
    url: "https://alaganandhapradeepportfolio.netlify.app",
    siteName: "Alaganandha Pradeep",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Alaganandha Pradeep — Portfolio",
    description: "AI Engineer & Developer. RSET Kochi.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
