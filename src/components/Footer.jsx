import {
  IconMail,
  IconBrandInstagram,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#89c00f] text-white p-2 text-xl flex items-center justify-between">
        <div className="uppercase font-bold text-5xl ml-24 mr-14">Medidev</div>
        <div className="flex flex-col border-r-2 border-l-2 px-40">
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
          <span className="uppercase font-bold text-2xl">
            Políticas de privacidad
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
