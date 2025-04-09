import Navbar from "./_components/Navbar";
import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";

export const metadata: Metadata = {
  title: "CSULB SAE Racing Team",
  description: "Official website of the CSULB Formula SAE Racing Team. Join us in building innovative race cars and showcasing student talent in motorsports.",
  keywords: ["CSULB", "Elbee racing", "Society of Automotive Engineers", "Formula SAE", "Racing", "Student Engineering", "Motorsports Sponsors"],
  openGraph: {
    title: "CSULB SAE Racing Team",
    description: "Discover CSULB’s Formula SAE Racing Team. Support student innovation and engineering excellence in motorsports.",
    url: "https://sae-website-delta.vercel.app/",
    images: "/elbee_racing.png",
    siteName: "CSULB SAE Racing Team",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

        {/* seo stuff */}
        <meta name="description" content="Official website of the CSULB Formula SAE Racing Team. Join us in building innovative race cars and showcasing student talent in motorsports." />
        <meta name="keywords" content="CSULB, Elbee racing, Society of Automotive Engineers, Formula SAE, Racing, Student Engineering, Motorsports Sponsors" />

        {/* ssm embedded link */}
        <meta property="og:title" content="CSULB SAE Racing Team" />
        <meta property="og:description" content="Discover CSULB’s Formula SAE Racing Team. Support student innovation and engineering excellence in motorsports." />
        <meta property="og:url" content="https://sae-website-delta.vercel.app/" />
        <meta property="og:image" content="/elbee_racing.png" />
        <meta property="og:site_name" content="CSULB SAE Racing Team" />

        {/* twitter embedded */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CSULB SAE Racing Team" />
        <meta name="twitter:description" content="Discover CSULB’s Formula SAE Racing Team. Support student innovation and engineering excellence in motorsports." />
        <meta name="twitter:image" content="/elbee_racing.png" />

      </Head>
      <body className="pt-32 p-5">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
