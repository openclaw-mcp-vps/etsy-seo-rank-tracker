import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Etsy SEO Rank Tracker – Monitor Your Listing Rankings",
  description: "Track Etsy search rankings for your products, monitor competitors, and get actionable SEO recommendations to grow your handmade business."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d27c4aff-55ef-4334-bdb5-e26f16cedaa1"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
