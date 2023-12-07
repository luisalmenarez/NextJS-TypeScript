const Footer = () => {
  return (
    <footer className="flex gap-1 justify-center p-4 text-xs md:text-base">
      <p>Desarrollado con ❤️ por</p>
      <a
        href="https://github.com/luisalmenarez"
        target="_blank"
        className="hover:text-primary transition-all duration-300">
        Luis Almenarez
      </a>
    </footer>
  );
};

export default Footer;
