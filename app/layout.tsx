import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat, Oswald, Roboto } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SmoothScroll } from "@/components/smooth-scroll";
import { CustomCursor } from "@/components/custom-cursor";

const clonoid = localFont({
  src: "../public/Clonoid-W01-Bold.ttf",
  variable: "--font-clonoid",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "TwinArc Motion",
  description: "Creating Cinematic Universes from the Heart of Northeast India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased md:cursor-none",
          montserrat.variable,
          oswald.variable,
          roboto.variable,
          clonoid.variable
        )}
      >
        <CustomCursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
