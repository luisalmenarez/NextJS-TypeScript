import Container from "@/Components/Ui/Container";
import Title from "@/Components/Ui/Title";
import Image from "next/image";
import ButtonAbout from "./utils/ButtonAbout";

const AboutPage = () => {
  return (
    <main className="border-b border-gray-500/30 pb-10">
      <Container>
        <Title title="Sobre mí" />
        <div className="relative w-full h-[500px] rounded-xl">
          <Image
            src="/Other/other.jpg"
            alt="Imagen"
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="grid place-items-center mt-10 mb-5 space-y-10">
          <p className="text-gray-500">
            Apasionado por el desarrollo web, con un enfoque centrado en
            tecnologías como ReactJS, mi travesía en el mundo del diseño y la
            creación de experiencias digitales ha sido un viaje emocionante. Mi
            dedicación al perfeccionamiento de la unión entre la estética y la
            funcionalidad, respaldada por mi conocimiento profundo del
            comportamiento del usuario, ha sido la piedra angular de mi carrera.
          </p>
          <p className="text-gray-500">
            Lo que me distingue es mi habilidad para traducir conceptos
            complejos en productos intuitivos y visualmente atractivos,
            respaldado por mi experiencia en el desarrollo de aplicaciones web
            con HTML, CSS, y JavaScript, y mi aprendizaje continuo en ReactJS.
            Mi compromiso con la creación de experiencias web significativas se
            refleja en cada línea de código que escribo.
          </p>
          <p className="text-gray-500">
            Si bien soy un apasionado defensor del desarrollo sin código, no
            dejo de lado las raíces del desarrollo web tradicional. Creo en la
            combinación de las mejores herramientas para lograr soluciones
            eficientes y efectivas. Mi capacidad para navegar entre el diseño y
            la implementación, junto con mi dominio de diversas tecnologías, me
            permite crear productos web que no solo cumplen sino que superan las
            expectativas.
          </p>
          <p className="text-gray-500">
            Te invito a explorar mi portfolio, donde encontrarás una colección
            de proyectos que destacan mi habilidad para fusionar la estética del
            diseño con la potencia del desarrollo web. Desde aplicaciones
            interactivas hasta interfaces dinámicas, cada proyecto refleja mi
            pasión por el desarrollo web y la creación de experiencias digitales
            impactantes.
          </p>
        </div>
        <ButtonAbout />
      </Container>
    </main>
  );
};

export default AboutPage;
