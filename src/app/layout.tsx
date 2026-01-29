import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { MusicPlayerWrapper } from "@/components/MusicPlayerWrapper";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Way of Kings | Stormlight Archive Fan Cast",
  description: "A fan-made tribute to Brandon Sanderson's The Stormlight Archive featuring The Black Piper's incredible soundtrack.",
  keywords: ["Stormlight Archive", "Way of Kings", "Brandon Sanderson", "Fan Cast", "The Black Piper"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${cinzel.variable} ${inter.variable} antialiased font-sans`}
      >
        <ThemeProvider>
          <MusicPlayerWrapper>
            {children}
          </MusicPlayerWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
