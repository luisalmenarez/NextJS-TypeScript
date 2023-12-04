import Image from "next/image";
import Link from "next/link";

interface CardProjectsProps {
  href: string;
  image: string;
  category: string;
  title: string;
}

const CardProjects = ({ href, image, category, title }: CardProjectsProps) => {
  return (
    <Link href={href} className="p-5 group ">
      <div className="relative w-full h-72 mb-5 overflow-hidden rounded-lg">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover rounded-lg group-hover:scale-105 transition-all duration-300"
        />
      </div>
      <h5 className="text-gray-500 uppercase font-medium tracking-widest">
        {category}
      </h5>
      <h3 className="text-xl text-white group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
    </Link>
  );
};

export default CardProjects;
