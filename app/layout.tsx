import type { Metadata } from "next";
import { DM_Sans, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSansBody = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "1322 Customs | Modern Websites for Trades & Marine — Charleston, SC",
  description:
    "1322 Customs modernizes outdated websites for trade businesses and marine companies. Fast turnaround, modern design, SEO built in. Based in Charleston, South Carolina.",
  keywords: [
    "website modernization",
    "trade business website",
    "marine industry website",
    "Charleston SC web design",
    "HVAC website",
    "plumber website",
    "marina website",
    "boat dealer website",
    "small business web design",
  ],
  authors: [{ name: "1322 Customs LLC" }],
  openGraph: {
    title: "1322 Customs | Modern Websites for Trades & Marine",
    description:
      "We modernize outdated websites for trade businesses and marine companies. Fast turnaround, built to convert. Charleston, SC.",
    url: "https://1322customs.com",
    siteName: "1322 Customs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "1322 Customs | Modern Websites for Trades & Marine",
    description:
      "We modernize outdated websites for trade businesses and marine companies. Fast turnaround, built to convert. Charleston, SC.",
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
      className={`${dmSans.variable} ${dmSansBody.variable} ${sourceSerif.variable}`}
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
