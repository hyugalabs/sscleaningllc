import type { Metadata, Viewport } from "next";
import { Archivo, Nanum_Pen_Script } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

const pen = Nanum_Pen_Script({
  variable: "--font-pen-script",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

const description =
  "Residential, commercial, and post-construction cleaning in Portage, Summit & Stark County, Ohio. Owner-run by Shellie Kiser out of Atwater. Insured, workers' comp, BBB A+, 5.0 on Google. Call 234-233-0504 for a quote.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "SS Cleaning LLC | House, Office & Post-Construction Cleaning in Northeast Ohio",
  description,
  keywords: [
    "cleaning service Atwater OH",
    "house cleaning Portage County",
    "office cleaning Summit County",
    "post construction cleaning Stark County",
    "commercial cleaning Northeast Ohio",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "SS Cleaning LLC",
    title: "SS Cleaning LLC: Cleaning for homes, offices & job sites in Northeast Ohio",
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SS Cleaning LLC",
    description,
  },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: "#102746",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${archivo.variable} ${pen.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
