"use client";

import Link from "next/link";
import { MainMenu } from "@/Components/Shared/Main-menu";
import { cn } from "@/libs/utils";

interface SidebarProps {
  showMenu: boolean;
  onClose: () => void;
}

export const Sidebar = ({ showMenu, onClose }: SidebarProps) => {
  return (
    <>
      <aside
        className={cn(
          "fixed top-0 lg:left-0 bg-dark w-[70vw] md:w-[30vw] lg:w-[15vw] h-full border-r border-gray-500/30 transition-all duration-500 ease-out z-50",
          showMenu ? "left-0" : "-left-full"
        )}>
        <section className="group px-8 py-10 border-b border-gray-500/30">
          <Link
            href="/"
            className="text-lg text-white transition-all duration-300 group-hover:text-primary">
            Luis Almenarez
          </Link>
          <h3 className="text-sm text-gray-400 font-light">
            Frontend Developer
          </h3>
        </section>
        <section>
          <MainMenu />
        </section>
      </aside>
      <div
        onClick={onClose}
        className={cn(
          "fixed bg-black/10 z-40 left-0 top-0 w-full h-full",
          showMenu ? "block" : "hidden"
        )}
      />
    </>
  );
};
