import { cn } from "@/libs/utils";
import Link from "next/link";
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
      label: "Home",
      icon: RiHome3Line,
      href: "/",
    },
    {
      label: "Work",
      icon: RiShapeLine,
      href: "/work",
    },
    {
      label: "Ventures",
      icon: RiBriefcase2Line,
      href: "/ventures",
    },
    {
      label: "Blog",
      icon: RiFileList2Line,
      href: "/blog",
    },
    {
      label: "About",
      icon: RiUserAddLine,
      href: "/about",
    },
    {
      label: "Contact",
      icon: RiMailSendLine,
      href: "/contact",
    },
  ];

  return (
    <ul>
      <li>
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "flex items-center py-5 px-10 gap-2 text-sm text-gray-400 border-b border-gray-500/30 transition-all duration-300 hover:bg-gray-500/5 hover:text-white"
            )}>
            <route.icon size={20} />
            {route.label}
          </Link>
        ))}
      </li>
    </ul>
  );
};
