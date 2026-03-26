import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Outfit,
  Instrument_Serif,
} from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "1322 Customs | Custom Software & AI Solutions — Charleston, SC",
  description:
    "1322 Customs LLC builds custom AI systems, distributed software, and smart automation solutions. Based in Charleston, South Carolina — where lowcountry craft meets cutting-edge technology.",
  keywords: [
    "custom software development",
    "AI solutions",
    "Charleston SC",
    "software company",
    "artificial intelligence",
    "cloud infrastructure",
    "smart automation",
  ],
  authors: [{ name: "1322 Customs LLC" }],
  openGraph: {
    title: "1322 Customs | Custom Software & AI Solutions",
    description:
      "Where lowcountry craft meets cutting-edge technology. Custom AI, software, and automation solutions from Charleston, SC.",
    url: "https://1322customs.com",
    siteName: "1322 Customs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "1322 Customs | Custom Software & AI Solutions",
    description:
      "Where lowcountry craft meets cutting-edge technology. Custom AI, software, and automation solutions from Charleston, SC.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${outfit.variable} ${instrumentSerif.variable}`}
    >
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </head>
      <body className="font-body bg-ocean-950 text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
