"use client";

import { useRouter } from "next/navigation";
import Button from "@/Components/Ui/Button";
import CardOtherSection from "@/Components/Ui/CardOtherSection";
import Container from "@/Components/Ui/Container";
import Title from "@/Components/Ui/Title";

const OtherSection = () => {
  const router = useRouter();

  return (
    <section id="Other" className="border border-gray-500/30 py-6">
      <Container>
        <Title title="Other Section" />
        <div className="space-y-5">
          <CardOtherSection
            href="/other-1"
            image="/Other/other.jpg"
            category="Design"
            title="What's the Difference Between UX and UI?"
            ago="4 Min"
          />
          <CardOtherSection
            href="/other-1"
            image="/Other/other2.jpg"
            category="Productivity"
            title="Take It one Step At a Time"
            ago="3 Min"
          />
          <CardOtherSection
            href="/other-1"
            image="/Other/other3.jpg"
            category="Design"
            title="How Do I Design a Website?"
            ago="4 Min"
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

export default OtherSection;
