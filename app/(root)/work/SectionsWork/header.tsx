"use client";

import Button from "@/Components/Ui/Button";
import Container from "@/Components/Ui/Container";
import Title from "@/Components/Ui/Title";
import Image from "next/image";

const Header = () => {
  return (
    <section
      id="SectionHeader"
      className="space-y-6 border-b border-gray-500/30 py-4">
      <Container>
        <Title title="Shop Tech" className="mb-5" />
        <p className="text-gray-500 w-5/6">
          Esta es una tienda de tenología realizada con HTML, SCSS y JavaScript
          puro. Hice uso de la metodología BEM y modularicé tanto el SCSS como
          el JS para llevar una estructura mucho más organizada del proyecto con
          el fin de que sea lo más escalable posible.
        </p>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mt-5 gap-4">
          <Button
            type="button"
            label="Vista previa"
            className="w-auto"
            onClick={() => {}}
          />
          <ul className="space-y-2 mb-6 ml-6">
            <li className="relative before:absolute before:w-2 before:h-2 before:border before:border-primary before:rounded-sm before:-left-4 before:top-1/2 before:-translate-y-1/2">
              Industry: Tech
            </li>
            <li className="relative before:absolute before:w-2 before:h-2 before:border before:border-primary before:rounded-sm before:-left-4 before:top-1/2 before:-translate-y-1/2">
              Timeline: 1 Month
            </li>
            <li className="relative before:absolute before:w-2 before:h-2 before:border before:border-primary before:rounded-sm before:-left-4 before:top-1/2 before:-translate-y-1/2">
              Product Design
            </li>
          </ul>
        </div>
        <div className="relative w-full h-96 sm:h-[400px] lg:h-[750px] rounded-xl">
          <Image
            src="/Projects/1.jpg"
            alt="Image"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </Container>
    </section>
  );
};

export default Header;
