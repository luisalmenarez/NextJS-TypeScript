import Image from "next/image";

interface CardLearningProps {
  message: string;
  image: string;
  name: string;
  position: string;
}

const CardLearning = ({
  message,
  image,
  name,
  position,
}: CardLearningProps) => {
  return (
    <blockquote className="p-6 rounded-xl border border-gray-500/30">
      <p className="mb-6 text-gray-300 font-medium">{message}</p>
      <figure className="flex items-center gap-2">
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image
            src={image}
            alt="Imagen"
            fill
            className="object-cover w-full h-full"
          />
        </div>
        <figcaption>
          <h3 className="text-white font-medium text-sm"> {name} </h3>
          <h5 className="text-gray-500 tracking-widest text-xs">{position}</h5>
        </figcaption>
      </figure>
    </blockquote>
  );
};

export default CardLearning;
