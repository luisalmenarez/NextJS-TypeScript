import CardProjects from "@/Components/Ui/CardProjects";
import Container from "@/Components/Ui/Container";
import Title from "@/Components/Ui/Title";

const ProjectSection = () => {
  return (
    <Container>
      <section id="Project">
        <Title title="Proyectos" />
        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <CardProjects
            href="/featured-1"
            image="/1.jpg"
            category="Blogging"
            title="Mindful Blog Mobile App"
          />
          <CardProjects
            href="/featured-1"
            image="/1.jpg"
            category="Blogging"
            title="Mindful Blog Mobile App"
          />
          <CardProjects
            href="/featured-1"
            image="/1.jpg"
            category="Blogging"
            title="Mindful Blog Mobile App"
          />
        </div>
      </section>
    </Container>
  );
};

export default ProjectSection;
