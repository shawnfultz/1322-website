import type { Metadata } from "next";
import { DM_Sans, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import LeadModalProvider from "@/components/LeadModalProvider";
import LeadModal from "@/components/LeadModal";
import StructuredData from "@/components/StructuredData";

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
  title: "Web Design Charleston SC | Modern Websites | 1322 Customs",
  description:
    "Charleston SC web design and website modernization for small businesses. Fast turnaround, mobile-friendly, SEO built in. Serving Charleston, Summerville, Mount Pleasant & the Lowcountry.",
  keywords: [
    "web design Charleston SC",
    "website design Charleston",
    "Charleston web developer",
    "website modernization",
    "small business website Charleston",
    "HVAC website design",
    "plumber website",
    "marina website design",
    "Summerville web design",
    "Mount Pleasant web design",
    "SEO Charleston SC",
  ],
  authors: [{ name: "1322 Customs LLC" }],
  metadataBase: new URL("https://1322customs.com"),
  alternates: {
    canonical: "https://1322customs.com",
  },
  openGraph: {
    title: "Web Design Charleston SC | 1322 Customs",
    description:
      "Modern websites for small businesses. Fast turnaround, mobile-friendly, SEO built in. Serving the greater Charleston, SC area.",
    url: "https://1322customs.com",
    siteName: "1322 Customs",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "1322 Customs — Web Design Charleston SC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Charleston SC | 1322 Customs",
    description:
      "Modern websites for small businesses. Fast turnaround, mobile-friendly, SEO built in. Charleston, SC.",
    images: ["/og-image.png"],
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
        <StructuredData />
      </head>
      <body className="font-body bg-ocean-950 text-white antialiased overflow-x-hidden">
        <LeadModalProvider>
          {children}
          <LeadModal />
        </LeadModalProvider>
      </body>
    </html>
  );
}
