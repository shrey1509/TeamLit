import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TeamLit",
  description: "A place for cool teams to hangout",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-black flex h-screen`}>
        <nav className="">
          <Navbar/>
        </nav>
        <main className="w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
