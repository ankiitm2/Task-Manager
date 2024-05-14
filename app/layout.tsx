import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/sideBar/Sidebar";
import GlobalStyledProvider from "./providers/GlobalStyledProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task Manager",
  description: "Manage all the Tasks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalStyledProvider>
          <Sidebar />
          {children}
        </GlobalStyledProvider>
      </body>
    </html>
  );
}
