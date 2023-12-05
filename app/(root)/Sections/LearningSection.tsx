import CardLearning from "@/Components/Ui/CardLearning";
import Container from "@/Components/Ui/Container";
import Title from "@/Components/Ui/Title";
import { information } from "@/assets/data";

const LearningSection = () => {
  const firstLearning = information.Learning[0];

  return (
    <section id="Learning" className="border border-gray-500/30 py-6">
      <Container>
        <Title title="Aprendisajes" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CardLearning
            message={firstLearning.message}
            image={firstLearning.image}
            name={firstLearning.name}
            position={firstLearning.position}
          />
          <CardLearning
            message={firstLearning.message}
            image={firstLearning.image}
            name={firstLearning.name}
            position={firstLearning.position}
          />
          <CardLearning
            message={firstLearning.message}
            image={firstLearning.image}
            name={firstLearning.name}
            position={firstLearning.position}
          />
          <CardLearning
            message={firstLearning.message}
            image={firstLearning.image}
            name={firstLearning.name}
            position={firstLearning.position}
          />
        </div>
      </Container>
    </section>
  );
};

export default LearningSection;
