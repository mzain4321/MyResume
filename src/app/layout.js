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
  description: "Full-Stack Web Developer | Next.js, MongoDB, MERN Stack Enthusiast"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
