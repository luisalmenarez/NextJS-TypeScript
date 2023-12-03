import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { Sidebar } from "@/Components/Shared/Sidebar";
import { cn } from "@/libs/utils";

const font = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luis Almenarez | Frontend Dev",
  description: "Portfolio Web",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className={cn("bg-dark text-gray-300", font.className)}>
        <Sidebar />
        <main className="container mx-auto py-5 lg:py-10 pl-[15vw]">
          {children}
        </main>
      </body>
    </html>
  );
}
