import Image from "next/image";
import Link from "next/link";

interface CardOtherSectionProps {
  href: string;
  image: string;
  title: string;
  category: string;
  ago: string;
}

const CardOtherSection = ({
  href,
  image,
  title,
  category,
  ago,
}: CardOtherSectionProps) => {
  return (
    <Link
      href={href}
      className="flex flex-col md:flex-row group gap-4 items-center">
      <div className="relative w-56 h-40 overflow-hidden rounded-xl mb-5">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-xl group-hover:scale-105 transition-all duration-300"
        />
      </div>
      <div className="space-y-2">
        <p className="text-xs uppercase font-semibold tracking-widest text-gray-500">
          {category}
        </p>
        <h3 className="text-white text-xl group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-xs uppercase font-semibold tracking-widest text-gray-500">
          {ago}
        </p>
      </div>
    </Link>
  );
};

export default CardOtherSection;
