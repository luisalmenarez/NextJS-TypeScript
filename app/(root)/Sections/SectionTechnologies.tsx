import ListTechnologies from "@/Components/ListTechnologies";
import CardTechnologies from "@/Components/Ui/CardTechnologies";
import Container from "@/Components/Ui/Container";
import Title from "@/Components/Ui/Title";

const SectionTechnologies = () => {
  return (
    <section id="Technologies" className="border border-gray-500/30 py-6">
      <Container>
        <Title title="Tecnologías más usadas" />
        <ListTechnologies />
      </Container>
    </section>
  );
};

export default SectionTechnologies;
