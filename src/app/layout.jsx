import Navbar from "../components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";


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
        </div>
      </body>
    </html>
  );
}