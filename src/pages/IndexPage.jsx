import {
  IconReportMedical,
  IconCalendarCheck,
  IconBell,
} from "@tabler/icons-react";
import { Image } from "@mantine/core";
import ImageSlider from "../components/ImageSlider";
import { useRef } from "react";

const IndexPage = () => {
  const securityRef = useRef(null);

  return (
    <>
      <div className="h-full">
        <Image src="/src/assets/mama italo.png" className="w-full relative" />
        <Image
          src="/src/assets/LOGO.png"
          className="absolute top-[20%] left-[2%]"
          w={"50%"}
        />
        <div className="flex items-center justify-center w-full gap-8">
          <div className="absolute top-[90%] left-[15%] flex flex-col items-center justify-center bg-white border-[3px] border-[#89c00f] rounded-2xl w-[22%] h-[25%] mt-2 shadow-2xl">
            <IconReportMedical size={50} color="#89c00f" />
            <span className="text-[#89c00f] text-center text-2xl font-bold">
              Lleva tu historia médica siempre contigo
            </span>
          </div>
          <div className="absolute top-[90%] left-[40%] flex flex-col items-center justify-center bg-white border-[3px] border-[#89c00f] rounded-2xl w-[22%] h-[25%] mt-2 shadow-2xl">
            <IconCalendarCheck size={50} color="#89c00f" />
            <span className="text-[#89c00f] text-center text-2xl font-bold">
              Agenda tu cita automáticamente
            </span>
          </div>
          <div className="absolute top-[90%] left-[65%] flex flex-col items-center justify-center bg-white border-[3px] border-[#89c00f] rounded-2xl w-[22%] h-[25%] mt-2 shadow-2xl">
            <IconBell size={50} color="#89c00f" />
            <span className="text-[#89c00f] text-center text-2xl font-bold">
              Recibe recordatorios en tu celular y correo
            </span>
          </div>
        </div>
      </div>
      <div>
        <ImageSlider />
      </div>
      <div ref={securityRef}>
        <Image src="/src/assets/doctor.png" className="w-full relative" />
      </div>
      <div className="flex items-center justify-between p-3">
        <div className="ml-12">
          <h1 className="text-teal-400 font-bold text-3xl text-center">
            ¿Quienes Somos?
          </h1>
          <p className="max-w-96 font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta alias
            aliquid maiores fugiat illo ab, eveniet nostrum eaque voluptatibus
            sit, error quia quasi maxime eos quod accusamus blanditiis delectus
            officiis. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Commodi quidem illo soluta earum quisquam similique necessitatibus
            blanditiis, perspiciatis neque! Hic aliquid tempore dicta magni
            suscipit doloremque alias, at sunt id.
          </p>
        </div>
        <div className="border-r-2 border-l-2 border-[#89c00f] px-20">
          <h1 className="text-teal-400 font-bold text-3xl text-center">
            Visión
          </h1>
          <p className="max-w-96 font-bold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
            consequuntur dolore nisi commodi aliquam accusamus sapiente, ducimus
            ab perspiciatis iusto itaque eos autem. Placeat, consequatur itaque
            expedita dolore voluptate unde? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Tenetur natus vel dicta minima
            assumenda, alias pariatur earum adipisci eum harum nihil provident
            quis, deleniti quaerat rem. Ratione aspernatur dolor nisi.
          </p>
        </div>
        <div className="mr-12">
          <h1 className="text-teal-400 font-bold text-3xl text-center">
            Misión
          </h1>
          <p className="max-w-96 font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto
            neque quia corporis eos labore voluptas. Consectetur incidunt eaque
            neque. Fugit molestias ipsam non nam repellat blanditiis fuga
            praesentium quae? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Possimus ipsum eaque facere repellendus aspernatur nostrum
            ipsam architecto velit accusantium. Maxime culpa blanditiis fugit
            sequi officia qui fuga ut dicta consequuntur.
          </p>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
