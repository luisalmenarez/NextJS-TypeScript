import Image from "next/image";
import Link from "next/link";

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
    <Link href={href} className="block group mb-5">
      <div className="relative w-16 h-16 rounded-xl mb-2">
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
      <p className="text-gray-500 text-sm w-4/5">{description}</p>
    </Link>
  );
};

export default CardTechnologies;
