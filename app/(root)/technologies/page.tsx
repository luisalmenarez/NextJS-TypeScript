import ListTechnologies from "@/components/list-technologies";
import CardTechnologies from "@/components/ui/card-technologies";
import Container from "@/components/ui/container";
import Title from "@/components/ui/title";

const TechnologiesPage = () => {
  return (
    <main className="border-b border-gray-500/30">
      <Container>
        <Title title="Stack Tecnologías" />
      </Container>
      <hr className="border-gray-500/30 mb-4" />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-10">
        <Container>
          <CardTechnologies
            image="/Technologies/html5.png"
            href=""
            title="HTML"
            description="El lenguaje base para construir páginas web. Con HTML, doy forma y estructura a la información en la web"
          />
        </Container>
        <hr className="border-gray-500/30 mb-4" />
        <Container>
          <CardTechnologies
            image="/Technologies/css.png"
            href=""
            title="CSS"
            description="Agrego estilo y diseño a las páginas web. Gracias a CSS, puedo hacer que todo luzca increíble y coherente"
          />
        </Container>
        <hr className="border-gray-500/30 mb-4" />
        <Container>
          <CardTechnologies
            image="/Technologies/sass.png"
            href=""
            title="SASS"
            description="Una versión mejorada de CSS que facilita la creación y mantenimiento de estilos. Es como tener un súper poder para hacer que todo se vea perfecto."
          />
        </Container>
        <hr className="border-gray-500/30 mb-4" />
        <Container>
          <CardTechnologies
            image="/Technologies/tailwind.png"
            href=""
            title="TAILWIND"
            description="Una caja de herramientas de estilos para crear diseñor únicos y atractivos. Es como tener un kit de LEGO para diseñar cualquier interfaz."
          />
        </Container>
        <hr className="border-gray-500/30 mb-4" />
        <Container>
          <CardTechnologies
            image="/Technologies/js.png"
            href=""
            title="JavaScript"
            description="Es quien me convierte en el mago detrás de la interactividad en la web. Con JavaScript, hago que las cosas sucedan y las páginas cobren vida."
          />
        </Container>
        <hr className="border-gray-500/30 mb-4" />
        <Container>
          <CardTechnologies
            image="/Technologies/typescript.png"
            href=""
            title="TypeScript"
            description="Es como tener un GPS para mi código en JavaScript. Con TypeScript, navego por mi proyecto con mayor claridad, evitando callejones sin salida y llegando más rápido a mi destino final."
          />
        </Container>
        <hr className="border-gray-500/30 mb-4" />
        <Container>
          <CardTechnologies
            image="/Technologies/git.png"
            href=""
            title="Git"
            description="Es como tener un historial detallado de todos los cambios en mi código. Con Git, puedo viajar en el tiempo para corregir errores y explorar cómo evolucionó mi proyecto."
          />
        </Container>
        <hr className="border-gray-500/30 mb-4" />
        <Container>
          <CardTechnologies
            image="/Technologies/github.png"
            href=""
            title="GitHub"
            description="Imagina un espacio digital donde mi equipo y yo nos reunimos para colaborar en el código. GitHub es como la sala de reuniones virtual donde trabajamos juntos, compartimos ideas y hacemos que nuestro proyecto crezca."
          />
        </Container>
        <hr className="border-gray-500/30 mb-4" />
        <Container>
          <CardTechnologies
            image="/Technologies/react.png"
            href=""
            title="React JS"
            description="La herramienta para construir aplicaciones web impresionantes. Con ReactJS, creo interfaces interactivas que sorprenden a quienes ven mis proyectos."
          />
        </Container>
        <hr className="border-gray-500/30 mb-4" />
        <Container>
          <CardTechnologies
            image="/Technologies/next.png"
            href=""
            title="Next JS"
            description="Hace mis aplicaciones web rápidas y eficientes. Next.js es como tener un asistente personal para construir experiencias web impactantes."
          />
        </Container>
      </div>
    </main>
  );
};

export default TechnologiesPage;
