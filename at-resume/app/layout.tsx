import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navBarComponents/nav";
import ContactButtons from "./components/navBarComponents/contactButtons";
import { NameHeader } from "./components/navBarComponents/nameHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anthony Trankiem's Resume",
  description: "Anthony Trankiem's Resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-0 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">

          <div className="flex justify-between items-center">
            <NameHeader/>           
            <ContactButtons/>
          </div>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
