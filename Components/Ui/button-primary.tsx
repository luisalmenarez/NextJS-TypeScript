import { cn } from "@/libs/utils";

interface ButtonProps {
  type?: "button" | "submit";
  label: string;
  className?: string;
  onClick: () => void;
}

const Button = ({
  type = "button",
  label,
  className,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "py-2 px-4 border border-primary/20 w-full rounded-lg text-primary hover:bg-primary/10 transition-all duration-500 font-light",
        className
      )}>
      {label}
    </button>
  );
};

export default Button;
