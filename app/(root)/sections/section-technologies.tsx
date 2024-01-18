import ListTechnologies from "@/components/list-technologies";
import CardTechnologies from "@/components/ui/card-technologies";
import Container from "@/components/ui/container";
import Title from "@/components/ui/title";

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
