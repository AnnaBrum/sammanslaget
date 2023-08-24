import Navbar from "../components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SAMMANSLAGET",
  description: "Generated by students",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen">
          <Navbar />
          {children}
          <footer className="bg-white mt-8 h-40 mt-10">
            <Link
              className="text-black hover:font-bold"
              href="
          https://www.yrgo.se/"
            >
              Yrgos hemsida
            </Link>
          </footer>
        </div>
      </body>
    </html>
  );
}
