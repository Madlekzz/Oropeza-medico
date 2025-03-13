import {
  IconMail,
  IconBrandInstagram,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import { Image } from "@mantine/core";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#89c00f] text-white p-2 text-xl flex items-center justify-between">
        <div className="uppercase font-bold text-5xl ml-24 mr-14 p-0 w-96">
          <Image src="/src/assets/LOGO BLANCO.png" />
        </div>
        <div className="flex flex-col border-r-2 border-l-2 px-40 mr-40">
          <h1 className="font-bold uppercase text-2xl">Contáctanos</h1>
          <div className="flex flex-row">
            <IconMail size={24} className="mt-1 mr-2" />
            <span>Medidev@gmail.com</span>
          </div>
          <div className="flex flex-row">
            <IconBrandInstagram size={24} className="mt-1 mr-2" />
            <span>@Medidev</span>
          </div>
          <div className="flex flex-row">
            <IconBrandWhatsapp size={24} className="mt-1 mr-2" />
            <span>+58 444-44-44</span>
          </div>
        </div>
        <div className="mr-16">
          <NavLink className="uppercase font-bold text-3xl cursor-pointer">
            Manual de usuario
          </NavLink>
        </div>
      </footer>
    </>
  );
};

export default Footer;
