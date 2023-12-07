"use client";

import { ReactNode, useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { Sidebar } from "@/Components/Shared/Sidebar";
import ButtonIcon from "@/Components/Ui/ButtonIcon";
import Footer from "@/Components/Shared/Footer";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <section>
      <Sidebar showMenu={showMenu} onClose={() => setShowMenu(false)} />
      <ButtonIcon
        icon={RiMenu2Fill}
        onClick={() => setShowMenu(true)}
        className="text-black text-xl mt-4 lg:hidden fixed right-3 z-30 bg-primary p-2 rounded-full"
      />
      {children}
      <Footer />
    </section>
  );
};

export default MainLayout;
