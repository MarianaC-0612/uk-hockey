import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MenuIcon } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UK Hockey",
  description: "Generated by Mariana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <header className="bg-secondary text-primary py-4 px-6 md:px-10 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold" prefetch={false}>
          UK Hockey
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/player" className="hover:underline" prefetch={false}>
            Player
          </Link>
          <Link href="/teams" className="hover:underline" prefetch={false}>
            Teams
          </Link>
          <Link href="/wall-of-fame" className="hover:underline" prefetch={false}>
            Wall of Fame
          </Link>
          <Link href="/contact-us" className="hover:underline" prefetch={false}>
            Contact Us
          </Link>

          <Button variant="default">
            Sign In
          </Button>
        </nav>
        <Button variant="outline" size="icon" className="md:hidden">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation</span>
        </Button>
      </header>
      {children}
      <footer className="bg-muted text-muted-foreground py-6 px-6 md:px-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <p>&copy; 2024 Hockey Website</p>
          <nav className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Privacy
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Terms
            </Link>
          </nav>
        </div>
      </footer>
      </body>
    </html>
  );
}
