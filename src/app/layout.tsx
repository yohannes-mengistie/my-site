import type { Metadata } from "next";
import { Geist_Mono, Outfit, Syne } from "next/font/google";
import AmbientBackground from "@/components/AmbientBackground";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/components/ThemeProvider";
import { site } from "@/data/site";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${site.name} · ${site.title}`,
  description: `${site.summary} ${site.tagline}`,
  keywords: [
    "Yohannes Mengistie",
    "Software Engineer",
    "Backend Developer",
    "Next.js",
    "Laravel",
    "Addis Ababa",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} · ${site.title}`,
    description: site.tagline,
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${syne.variable} ${outfit.variable} ${geistMono.variable} antialiased`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(localStorage.getItem('ym-theme')==='light')document.documentElement.classList.remove('dark')}catch(e){}",
          }}
        />
        <ThemeProvider>
          <AmbientBackground />
          <CustomCursor />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
