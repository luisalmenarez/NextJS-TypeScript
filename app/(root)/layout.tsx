"use client";

import { ReactNode, useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { Sidebar } from "@/Components/Shared/Sidebar";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <section>
      <Sidebar showMenu={showMenu} onClose={() => setShowMenu(false)} />
      <button type="button" className="mt-4 lg:hidden">
        <RiMenu2Fill onClick={() => setShowMenu(true)} size={22} />
      </button>
      {children}
    </section>
  );
};

export default MainLayout;
