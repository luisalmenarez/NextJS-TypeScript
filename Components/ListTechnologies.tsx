import { cn } from "@/libs/utils";
import CardTechnologies from "./Ui/CardTechnologies";

interface ListTechnologiesProps {
  className?: string;
}

const ListTechnologies = ({ className }: ListTechnologiesProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
        className
      )}>
      <CardTechnologies
        href="/technologies"
        image="/Technologies/js.png"
        title="JavaScript"
        description="Es quien me convierte en el mago detrás de la interactividad en la web. Con JavaScript, hago que las cosas sucedan y las páginas cobren vida."
      />
      <CardTechnologies
        href="/technologies"
        image="/Technologies/react.png"
        title="React JS"
        description="La herramienta para construir aplicaciones web impresionantes. Con ReactJS, creo interfaces interactivas que sorprenden a quienes ven mis proyectos."
      />
      <CardTechnologies
        href="/technologies"
        image="/Technologies/next.png"
        title="Next JS"
        description="Hace mis aplicaciones web rápidas y eficientes. Next.js es como tener un asistente personal para construir experiencias web impactantes."
      />
    </div>
  );
};

export default ListTechnologies;
