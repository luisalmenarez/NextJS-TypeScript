import CardTechnologies from "@/Components/Ui/CardTechnologies";
import Container from "@/Components/Ui/Container";
import Title from "@/Components/Ui/Title";

const SectionTechnologies = () => {
  return (
    <section id="Technologies" className="border border-gray-500/30 py-6">
      <Container>
        <Title title="Tecnologías" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CardTechnologies
            href="/"
            image="/js.png"
            title="JavaScript"
            description="Creating Framer templates for designers, agencies, and content creators."
          />
          <CardTechnologies
            href="/"
            image="/react.png"
            title="React JS"
            description="Creating Framer templates for designers, agencies, and content creators."
          />
          <CardTechnologies
            href="/"
            image="/next.png"
            title="Next JS"
            description="Creating Framer templates for designers, agencies, and content creators."
          />
        </div>
      </Container>
    </section>
  );
};

export default SectionTechnologies;
