import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import FloatingNavbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Quotastic",
  description: ". . .",
};

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} min-h-screen`}
      >
        <FloatingNavbar />
        {children}
      </body>
    </html>
  );
}
