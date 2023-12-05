"use client";

import { useRouter } from "next/navigation";
import Button from "@/Components/Ui/Button";
import CardProjects from "@/Components/Ui/CardProjects";
import Container from "@/Components/Ui/Container";
import Title from "@/Components/Ui/Title";

const ProjectSection = () => {
  const router = useRouter();

  return (
    <section id="Project" className="border-b border-gray-500/30 py-6">
      <Container>
        <Title title="Proyectos destacados" />
        <div className="grid gap-6 mb-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <CardProjects
            href="/featured-1"
            image="/1.jpg"
            category="E-commerce"
            title="Shop Tech"
          />
          <CardProjects
            href="/featured-1"
            image="/2.jpg"
            category="Galery"
            title="Gallery Photos"
          />
          <CardProjects
            href="/featured-1"
            image="/3.jpg"
            category="Website"
            title="Loud & Proud"
          />
        </div>
        <Button
          label="Todos los proyectos"
          onClick={() => router.push("/work")}
        />
      </Container>
    </section>
  );
};

export default ProjectSection;
