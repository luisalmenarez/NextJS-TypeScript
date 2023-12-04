import { cn } from "@/libs/utils";
import { ReactNode } from "react";

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: String;
}) => {
  return (
    <div className={cn("container mx-auto px-10", className)}> {children} </div>
  );
};

export default Container;
