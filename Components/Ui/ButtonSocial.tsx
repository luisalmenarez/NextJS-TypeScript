import { IconType } from "react-icons";

interface ButtonSocialProps {
  icon: IconType;
  href: string;
}

const ButtonSocial = ({ icon: Icon, href }: ButtonSocialProps) => {
  return (
    <a
      href={href}
      target="_blank"
      className="w-10 h-10 flex items-center justify-center border border-gray-400/20 rounded-lg text-gray-500/30 hover:text-primary transition-all duration-500 hover:bg-gray-500/10">
      <Icon size={20} />
    </a>
  );
};

export default ButtonSocial;
