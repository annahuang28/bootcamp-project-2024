import type { Metadata } from "next"; // Object to set metadata
import { Inter } from "next/font/google"; // You can change the font to anything you want.
import localFont from "next/font/local"; // Import the localFont function
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer"

// Load the Inter font (Google font)
const inter = Inter({ subsets: ["latin"] });

// Load custom local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",  // Path to your custom font file
  variable: "--font-geist-sans", // CSS variable for the font
  weight: "100 900", // Define font weights range
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff", // Path to your custom mono font file
  variable: "--font-geist-mono",  // CSS variable for the font
  weight: "100 900", // Define font weights range
});

export const metadata: Metadata = {
  title: "Anna Huang Personal Website",
  description: "A personal website for Anna Huang.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${geistSans.variable} ${geistMono.variable}`}>
        <Navbar/>
        <main style={{ paddingBottom: "40px" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
