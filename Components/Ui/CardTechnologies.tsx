import Image from "next/image";

interface CardTechnologiesProps {
  href: string;
  image: string;
  title: string;
  description: string;
}

const CardTechnologies = ({
  href,
  image,
  title,
  description,
}: CardTechnologiesProps) => {
  return (
    <a href={href} target="_blank" className="block group">
      <div className="relative w-14 h-14 rounded-xl mb-5">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-xl"
        />
      </div>
      <h3 className="text-white text-xl mb-2 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-500 text-sm">{description}</p>
    </a>
  );
};

export default CardTechnologies;
