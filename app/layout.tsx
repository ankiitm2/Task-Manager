import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/sideBar/Sidebar";
import GlobalStyledProvider from "./providers/GlobalStyledProvider";
import ContextProvider from "./context/ContextProvider";

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
        <ContextProvider>
          <GlobalStyledProvider>
            <Sidebar />
            {children}
          </GlobalStyledProvider>
        </ContextProvider>
      </body>
    </html>
  );
}
