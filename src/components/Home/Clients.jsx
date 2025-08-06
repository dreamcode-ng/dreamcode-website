"use client";
import ContainerSection from '@/components/UI/Containers/ContainerSection'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import style from "@/components/Home/home.module.css";
import Image from "next/image";
import { useTranslation } from 'next-i18next';


// Lista de logos
const clientLogos = [
  "falabella",
  "listo-seguro",
  "bolivar",
  "arity",
  "pycca",
  "global-networks",
  "phonecheck",
  "square-trade",
  "target",
  "movizzon",
  "constructora-bolivar"
];

// Componente para mostrar los logos
const ClientsLogo = ({ image }) => (
    <figure className="h-auto w-100 position-relative">
        <Image
          src={`/img/clients/logo-${image}.png`}
          title={`Our client ${image} of DreamCode Software Developers Colombia`} 
          alt={`Logo of ${image}`} 
          width={200}
          height={100}
          loading="lazy"
        />
    </figure>
);

// Componente de slider reutilizable
const ClientsSlider = ({ reverse }) => (
  <Swiper
    spaceBetween={50}
    slidesPerView={3}
    allowTouchMove={false}
    autoHeight={true}
    breakpoints={{
      1024: {
        slidesPerView: 7,
        spaceBetween: 50,
      },
    }}
    effect="slide"
    speed={2000}
    loop={true}
    className={`${style.clientsSlider}`}
    autoplay={{
      delay: 2000,
      disableOnInteraction: false,
      reverseDirection: reverse, 
    }}
    navigation={false}
    pagination={false}
    modules={[Autoplay]}
  >
    {clientLogos.map((logo) => (
      <SwiperSlide key={logo}>
        <ClientsLogo image={logo} />
      </SwiperSlide>
    ))}
  </Swiper>
);

// Componente principal con ambos sliders
export default function Clients() {

  const { t } = useTranslation('home');


  return (
    <ContainerSection>
      <div className={`${style.clients}`}>
          <div className="pb-4">
              <h2 className="f-lg-40 f-sm-25 w_color text-center">{t('client_slider')}</h2>
          </div>
          <div className="mt-5">
              <ClientsSlider reverse={false} />
          </div>
          <div className="mt-5">
              <ClientsSlider reverse={true} />
          </div>
      </div>
    </ContainerSection>
  );
}
