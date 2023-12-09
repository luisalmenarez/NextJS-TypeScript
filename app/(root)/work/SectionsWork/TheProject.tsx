import Container from "@/Components/Ui/Container";
import SubTitle from "@/Components/Ui/Subtitle";
import Image from "next/image";

const TheProject = () => {
  return (
    <section
      id="SectionHeader"
      className="space-y-6 border-b border-gray-500/30 py-10">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-start sm:justify-between mb-10">
          <SubTitle subtitle="Proyecto" className="my-0 mb-5" />
          <ul className="space-y-8">
            <li className="max-w-2xl">
              <h4 className="text-xl text-white font-medium">Challenge</h4>
              <p className="text-sm text-gray-500 font-light">
                One of the significant challenges was to strike a balance
                between presenting a vast variety of content and maintaining a
                clean, uncluttered interface. The challenge was to enhance
                content discoverability while ensuring that users were not
                overwhelmed by choices.
              </p>
            </li>
            <li className="max-w-2xl">
              <h4 className="text-xl text-white font-medium">Outcome</h4>
              <p className="text-sm text-gray-500 font-light">
                The collaborative efforts and strategic design decisions
                resulted in a successful outcome — average session duration and
                articles read per session saw an impressive increase of 50%
                within the first two months post-launch.
              </p>
            </li>
          </ul>
        </div>
        <div className="relative w-full h-96 sm:h-[400px] lg:h-[750px] rounded-xl mb-10">
          <Image
            src="/Projects/1.2.jpg"
            alt="Image"
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="relative w-full h-96 sm:h-[400px] lg:h-[750px] rounded-xl">
            <Image
              src="/Projects/1.3.png"
              alt="Imagen"
              fill
              className="object-cover rounded-xl"
            />
          </div>
          <div className="relative w-full h-96 sm:h-[400px] lg:h-[750px] rounded-xl">
            <Image
              src="/Projects/1.4.png"
              alt="Imagen"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TheProject;
