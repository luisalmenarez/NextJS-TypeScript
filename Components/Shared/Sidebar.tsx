"use client";
import Link from "next/link";
import { MainMenu } from "@/Components/Shared/main-menu";
import { useState } from "react";

export const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <aside className="fixed bg-dark w-[70vw] md:w-[30vw]  lg:w-[15vw] h-full border-r border-gray-500/30">
      <section className="p-10 border-b border-gray-500/30">
        <Link
          href="/"
          className="text-xl text-white transition-all duration-300 hover:text-primary">
          Luis Almenarez
        </Link>
        <h3 className="text-sm text-gray-400 font-light">Frontend Developer</h3>
      </section>
      <section>
        <MainMenu />
      </section>
    </aside>
  );
};
