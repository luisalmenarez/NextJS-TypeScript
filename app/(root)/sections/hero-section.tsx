import ButtonSocial from "@/components/ui/button-social";
import Container from "@/components/ui/container";
import { information } from "@/assets/data";
import Image from "next/image";

import React from "react";

const HeroSection = () => {
  return (
    <section id="Home" className="space-y-6 border-b border-gray-500/30 py-4">
      <Container>
        <div className="relative w-24 h-24">
          <Image
            src="/user.jpg"
            alt="Profile Image"
            fill
            className="object-cover rounded-sm"
          />
        </div>
        <div className="max-w-2xl">
          <h1 className="text-3xl text-white mb-6">{information.title}</h1>
          <p className="text-gray-400 text-sm mb-6">{information.about}</p>
        </div>
        <div className="flex items-center gap-4">
          {information.socialMedia.map((social) => (
            <ButtonSocial
              key={social.href}
              icon={social.icon}
              href={social.href}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
