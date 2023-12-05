import {
  RiInstagramLine,
  RiTwitterXFill,
  RiLinkedinBoxFill,
  RiGithubFill,
} from "react-icons/ri";

export const information = {
  title: `Hola! soy Luis Almenarez — Un experto Desarrollador web Frontend`,
  about: `Soy un desarrollador Frontend con amplia experiencia en proyectos
    individuales y colaborativos. Mi especialización se centra en
    tecnologías de vanguardia, donde permanezco al tanto de las últimas
    tendencias y frameworks para ofrecer soluciones modernas y eficientes.
    No solo me dedico a la tecnología, sino que también valoro la
    colaboración efectiva. Disfruto trabajando en equipo, comunicándome de
    manera clara y resolviendo desafíos de forma conjunta`,

  socialMedia: [
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
  ],

  Learning: [
    {
      message: ` "Luis tradujo sin esfuerzo nuestros conceptos en diseños visualmente
      impresionantes que no sólo captaban la esencia de nuestra marca, sino
      que también resonaban con nuestro público objetivo. Su atención al
      detalle y su pensamiento innovador le hicieron destacar." `,
      image: "/user.jpg",
      name: "Luis Almenarez",
      position: "Frontend Developer",
    },
  ],
};
