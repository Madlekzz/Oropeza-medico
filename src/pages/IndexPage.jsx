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
      <div className="flex items-center justify-between p-3 w-screen">
        <div className="flex flex-col gap-3 ml-12 w-full">
          <h1 className="text-teal-400 font-bold text-3xl text-center">
            ¿Quienes Somos?
          </h1>
          <p className="text-justify max-w-120 ml-8 font-bold">
            En Medidev, somos un equipo apasionado y comprometido con la
            innovación en el sector médico. Fundada con la misión de mejorar la
            calidad de vida de las personas, nuestra empresa se especializa en
            el desarrollo de soluciones médicas avanzadas que integran
            tecnología y atención personalizada. <br />
            <br />
            Con un enfoque centrado en el paciente, trabajamos para ofrecer
            productos y servicios que no solo satisfacen las necesidades del
            sector salud, sino que también promueven el bienestar y la
            prevención. Nuestro equipo multidisciplinario de profesionales
            incluye médicos, ingenieros y expertos en tecnología, quienes
            colaboran para crear soluciones efectivas y accesibles.
          </p>
        </div>
        <div className="border-r-2 border-l-2 border-[#89c00f] flex flex-col gap-3 w-full">
          <h1 className="text-teal-400 font-bold text-3xl text-center">
            Visión
          </h1>
          <p className="text-justify max-w-150 mx-5 font-bold mb-3">
            En Medidev, aspiramos a ser la empresa líder en innovación médica a
            nivel global, reconocida por transformar el cuidado de la salud a
            través de soluciones tecnológicas accesibles y efectivas. Nuestra
            visión es crear un futuro en el que cada persona tenga acceso a
            herramientas y recursos que promuevan su bienestar, mejoren su
            calidad de vida y faciliten un diagnóstico y tratamiento más
            preciso.
            <br />
            <br />
            Nos comprometemos a ser pioneros en el desarrollo de tecnologías que
            no solo respondan a las necesidades actuales del sector salud, sino
            que también anticipen y se adapten a los desafíos del mañana. A
            través de la colaboración, la ética y el respeto por la vida humana,
            buscamos inspirar un cambio positivo en la atención médica, donde la
            innovación y la compasión vayan de la mano.
          </p>
        </div>
        <div className="mr-12 flex flex-col gap-3 w-full">
          <h1 className="text-teal-400 font-bold text-3xl text-center">
            Misión
          </h1>
          <p className="text-justify max-w-120 ml-20 font-bold">
            En Medidev, nuestra misión es desarrollar soluciones médicas
            innovadoras que mejoren la calidad de vida de las personas. Nos
            dedicamos a crear productos y servicios accesibles que integren
            tecnología avanzada y atención centrada en el paciente. A través de
            la investigación, la colaboración y un compromiso inquebrantable con
            la ética, trabajamos para hacer que la atención médica sea más
            efectiva, segura y humana.
            <br />
            <br />
            Nos esforzamos por ser un referente en el sector salud, impulsando
            la innovación y promoviendo un enfoque proactivo hacia el bienestar.
            Nuestro objetivo es empoderar a los profesionales de la salud y a
            los pacientes con herramientas que faciliten diagnósticos precisos y
            tratamientos adecuados, contribuyendo así a un sistema de salud más
            eficiente.
          </p>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
