import Header from "../SectionsWork/header";
import { Metadata } from "next";
import LearningWork from "../SectionsWork/LearningWork";
import TheProject from "../SectionsWork/TheProject";

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
