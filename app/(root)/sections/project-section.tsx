"use client";

import { useRouter } from "next/navigation";
import Button from "@/Components/Ui/Button";
import Container from "@/Components/Ui/Container";
import Title from "@/Components/Ui/Title";
import ListFeaturedWork from "@/Components/ListFeaturedWork";

const ProjectSection = () => {
  const router = useRouter();

  return (
    <section id="Project" className="border-b border-gray-500/30 py-6">
      <Container>
        <Title title="Proyectos destacados" />
        <ListFeaturedWork />
        <Button
          label="Todos los proyectos"
          onClick={() => router.push("/work")}
        />
      </Container>
    </section>
  );
};

export default ProjectSection;
