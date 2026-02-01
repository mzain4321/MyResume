import { Geist, Geist_Mono } from "next/font/google";
import "@/app/lib/fontawesome";
import "./globals.css";
import CustomCursor from "./components/modern/CustomCursor";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zain Imran - MERN Stack Developer",
  description: "Full-Stack Web Developer | Next.js, MongoDB, MERN Stack Enthusiast",
  openGraph: {
    title: "Zain Imran - MERN Stack Developer",
    description: "Full-Stack Web Developer | Next.js, MongoDB, MERN Stack Enthusiast",
    url: "https://zain-imran-resume.vercel.app",
    siteName: "Zain Imran",
    images: [
      {
        url: "https://zain-imran-resume.vercel.app/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Zain Imran - Resume",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zain Imran - MERN Stack Developer",
    description: "Full-Stack Web Developer | Next.js, MongoDB, MERN Stack Enthusiast",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <a href="#main-content" className="skip-link">Skip to content</a>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
