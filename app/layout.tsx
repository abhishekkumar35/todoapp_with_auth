import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/lib/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NotesApp | Simple Note Taking",
  description: "A simple, elegant note-taking application to organize your thoughts",
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" }
    ],
    apple: { url: "/logo.svg", type: "image/svg+xml" }
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="container flex flex-col mx-auto min-h-screen w-full px-0 sm:px-2 md:px-4 overflow-x-hidden">
          <AuthProvider>
            <Navbar />
            <main className="flex-grow w-full">
              {children}
            </main>
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}


