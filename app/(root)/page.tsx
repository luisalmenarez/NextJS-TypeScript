import ButtonSocial from "@/Components/Ui/ButtonSocial";
import Image from "next/image";
import {
  RiInstagramLine,
  RiTwitterXFill,
  RiLinkedinBoxFill,
  RiGithubFill,
} from "react-icons/ri";

export default function Home() {
  const socialMedia = [
    {
      socialMedia: "Github",
      icon: RiGithubFill,
      href: "https://github.com/luisalmenarez",
    },
    {
      socialMedia: "Linkedin",
      icon: RiLinkedinBoxFill,
      href: "https://www.linkedin.com/in/luisalmenarez/",
    },
    {
      socialMedia: "Twitter",
      icon: RiTwitterXFill,
      href: "https://twitter.com/_luisalmenarez",
    },
    {
      socialMedia: "Instagram",
      icon: RiInstagramLine,
      href: "https://www.instagram.com/_luisalmenarez/",
    },
  ];

  return (
    <section className="space-y-6">
      <div className="relative w-24 h-24">
        <Image
          src="/Profile.jpg"
          alt="Profile Image"
          fill
          className="object-cover rounded-sm"
        />
      </div>
      <div className="max-w-2xl">
        <h1 className="text-3xl text-white mb-6">
          {"Hola! soy Luis Almenarez — Un experto Desarrollador web Frontend"}
        </h1>
        <p className="text-gray-400 text-sm">
          Soy un desarrollador Frontend con amplia experiencia en proyectos
          individuales y colaborativos. Mi especialización se centra en
          tecnologías de vanguardia, donde permanezco al tanto de las últimas
          tendencias y frameworks para ofrecer soluciones modernas y eficientes.
          No solo me dedico a la tecnología, sino que también valoro la
          colaboración efectiva. Disfruto trabajando en equipo, comunicándome de
          manera clara y resolviendo desafíos de forma conjunta.
        </p>
      </div>
      <div className="flex items-center gap-4">
        {socialMedia.map((social) => (
          <ButtonSocial
            key={social.href}
            icon={social.icon}
            href={social.href}
          />
        ))}
      </div>
    </section>
  );
}
