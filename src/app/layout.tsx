import type { Metadata } from "next";
import { Bungee, Bangers, Comic_Neue } from "next/font/google";
import "./globals.css";

const bungee = Bungee({
  weight: "400",
  variable: "--font-bungee",
  subsets: ["latin"],
});

const bangers = Bangers({
  weight: "400",
  variable: "--font-bangers",
  subsets: ["latin"],
});

const comicNeue = Comic_Neue({
  weight: ["300", "400", "700"],
  variable: "--font-comic-neue",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fiction Writer - Create Epic Stories & Worlds",
  description: "The ultimate SaaS platform for fiction writers. Build interconnected worlds, create stunning timelines, and craft epic stories that captivate readers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bungee.variable} ${bangers.variable} ${comicNeue.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
