import Container from "@/Components/Ui/Container";
import SubTitle from "@/Components/Ui/Subtitle";
import Image from "next/image";

const LearningWork = () => {
  return (
    <section
      id="SectionHeader"
      className="space-y-6 border-b border-gray-500/30 py-10">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-start sm:justify-between mb-10">
          <SubTitle subtitle="Retos" className="my-0 mb-5" />
          <ul className="space-y-8">
            <li className="max-w-2xl">
              <h4 className="text-xl text-white font-medium">
                Responsibilities
              </h4>
              <p className="text-sm text-gray-500 font-light">
                As the lead Product Designer, my responsibilities encompassed
                the entire design lifecycle from user research to visual design
                and user experience.
              </p>
            </li>
            <li className="max-w-2xl">
              <h4 className="text-xl text-white font-medium">Collaboration</h4>
              <p className="text-sm text-gray-500 font-light">
                Collaboration was vital in creating a cohesive and successful
                product. I worked closely with developers, product managers, and
                content creators.
              </p>
            </li>
          </ul>
        </div>
        <div className="relative w-full h-96 sm:h-[400px] lg:h-[750px] rounded-xl">
          <Image
            src="/Projects/1.1.jpg"
            alt="Image"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </Container>
    </section>
  );
};

export default LearningWork;
