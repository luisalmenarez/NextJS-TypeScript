import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/libs/utils";

import {
  RiHome3Line,
  RiShapeLine,
  RiBriefcase2Line,
  RiFileList2Line,
  RiUserAddLine,
  RiMailSendLine,
} from "react-icons/ri";

export const MainMenu = () => {
  const routes = [
    {
      label: "Inicio",
      icon: RiHome3Line,
      href: "/",
    },
    {
      label: "Proyectos",
      icon: RiShapeLine,
      href: "/work",
    },
    {
      label: "Tecnologías",
      icon: RiBriefcase2Line,
      href: "/ventures",
    },
    {
      label: "Sobre mi",
      icon: RiUserAddLine,
      href: "/about",
    },
    {
      label: "Contacto",
      icon: RiMailSendLine,
      href: "/contact",
    },
  ];

  const pathname = usePathname();

  return (
    <ul>
      <li>
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "flex items-center py-5 px-10 gap-2 text-sm text-gray-400 border-b border-gray-500/30 transition-all duration-300 hover:bg-gray-500/5 hover:text-primary",
              pathname === route.href && "text-primary"
            )}>
            <route.icon size={20} />
            {route.label}
          </Link>
        ))}
      </li>
    </ul>
  );
};
