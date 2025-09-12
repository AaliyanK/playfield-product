import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const instrumentSans = localFont({
  src: [
    {
      path: "../../public/fonts/InstrumentSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/InstrumentSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/InstrumentSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-instrument-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Playfield - Generate Agentic Workflows and Internal Apps",
  description:
    "Generate agentic workflows and internal apps that take actions over your existing systems. AI-powered automation for enterprise.",
  keywords: [
    "AI",
    "automation",
    "workflows",
    "enterprise",
    "agentic",
    "internal apps",
  ],
  authors: [{ name: "Playfield" }],
  openGraph: {
    title: "Playfield - Generate Agentic Workflows and Internal Apps",
    description:
      "Generate agentic workflows and internal apps that take actions over your existing systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Playfield - Generate Agentic Workflows and Internal Apps",
    description:
      "Generate agentic workflows and internal apps that take actions over your existing systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
