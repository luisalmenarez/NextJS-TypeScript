"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import Title from "@/components/ui/title";
import ListFeaturedWork from "@/components/list-featured-works";

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
