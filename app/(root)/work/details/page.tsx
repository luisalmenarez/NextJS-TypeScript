import Header from "../sections-work/header";
import { Metadata } from "next";
import LearningWork from "../sections-work/learning-work";
import TheProject from "../sections-work/the-project";

export const metadata: Metadata = {
  title: "Luis Almenarez | Details",
  description: "Detalles de proyecto",
};

const WorkDetails = () => {
  return (
    <main>
      <Header />
      <LearningWork />
      <TheProject />
    </main>
  );
};

export default WorkDetails;
