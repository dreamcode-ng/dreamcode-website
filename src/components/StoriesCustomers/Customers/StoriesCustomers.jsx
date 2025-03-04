import React from "react";
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import style from '@/components/StoriesCustomers/stories.module.css'
import { Pagination } from "swiper/modules";
import Image from "next/image";

export default function Stories() {

    const section = [
      {
          "title": "Target",
          "subtitle": "Business Dream: Connected Commerce  PAM",
          "text": "We developed a software platform that allows Target Corp. to sell connected services (mobile phone plans, streaming video subscriptions, and cable TV) both in-store and online in an agile and seamless way, providing a frictionless experience for shoppers. The PAM (Provisioning and Activation Management) module enables Target to integrate with service providers through cutting-edge technologies like APIs. Today, Target Corp. is a leader in the segment thanks to the innovation of this platform, generating over $40M in revenue every Black Friday.",
          "image": "target_logo.svg",
          "isSlider": false
      },
      {
          "title": "SquareTrade",
          "subtitle": "Business Dream: SourceRoot migration to microservice architecture",
          "text": "SquareTrade is the global leader in mobile device insurance, providing extended warranty services to 140 million customers worldwide. DreamCode has agile teams for the development of the SRE (SourceRoot Retirement) project, which aims to generate an additional 20% annual revenue. We integrate interdisciplinary engineering teams by combining software development with quality certification to migrate the architecture supporting SquareTrade’s operations from its legacy system to integrated microservices, thus maintaining operations while completely decommissioning the monolithic legacy system.",
          "image": "squaretrade_logo.svg",
          "isSlider": false
      },
      {
          "title": "Seguros Bolívar",
          "paragraph": [
              {
                  "subtitle": "Business Dream: SmartCore - Rebuilding the Insurance Core",
                  "text": "Seguros Bolívar's goal was to rebuild a core system with more than 25 years of evolution using modern software technologies and practices such as cloud computing, microservices, analytics, and design thinking, all focused on driving its digital transformation as one of the largest insurers in Colombia and advancing as a 100% digital market-leading company,"
              },
              {
                  "subtitle": "Business Dream: SuperApp Bolívar Conmigo",
                  "text": "We developed an application that helps Seguros Bolívar customers and non-customers with emergency assistance for car travelers, health advice and monitoring, and home solutions, a digital platform that centralizes services based on new cloud-oriented architectures and integration with Seguros Bolívar's legacy on-premise system. This entire project was carried out through a team of experts in user experience design and digital products in software development. "
              }
          ],
          "image": "segurosbolivar_logo.svg",
          "isSlider": true
      },
      {
          "title": "Sequoia",
          "subtitle": "Business Dream: Apple Trade-In Platform",
          "text": "We developed a trading platform that enables the delivery of mobile phones provided by Apple customers as part of payment for their new devices. Through this platform, the phones are tested and evaluated for resale in various markets around the world. The platform integrates with Apple to support the complex process of mobile device commercialization (device receipt notifications, shipping, reconciliation, billing, testing, and resale), using technologies such as cloud computing and data analytics. Today, Sequoia operates in multiple countries across four continents.",
          "image": "sequoia_logo.svg",
          "isSlider": false
      },
      {
        "title": "Falabella",
        "subtitle": "Business Dream: Apple Trade-In Platform",
        "text": "We developed a trading platform that enables the delivery of mobile phones provided by Apple customers as part of payment for their new devices. Through this platform, the phones are tested and evaluated for resale in various markets around the world. The platform integrates with Apple to support the complex process of mobile device commercialization (device receipt notifications, shipping, reconciliation, billing, testing, and resale), using technologies such as cloud computing and data analytics. Today, Sequoia operates in multiple countries across four continents.",
        "image": "sequoia_logo.svg",
        "isSlider": false
    }
  ]


  const { t } = useTranslation('common'); // Asegúrate de que 'common' sea el namespace correcto
  const customerStories = t('customers_stories');

  return (
    <section className={`sec_pad ${style.stories_customers} -bg-dark line-break`}>
      <div className="container">
        <div className="text-center pb-3">
          <h2 className="text-center m_color f-lg-30 f_600 mb-4">
            {t('stories.subtitle_stories')}
          </h2>
        </div> 

        { 
          section.map((section, index) => (
            <ContentSection
              key={index}
              title={section.title}
              subtitle={section.subtitle}
              text={section.text}
              image={section.image}
              isSlider={section.isSlider}
              paragraph={section.paragraph || []}
            />
          ))
        }
      </div>
    </section>
  );
}

function ContentSection ({ title, subtitle, text, image, isSlider, paragraph} ) {

  return (

        <div className={`${style.item_storie} row align-items-center line-break`}>
          <div className="col-lg-6">
            <h2 className="m_color">{title}</h2>
            <h3><strong>{subtitle}</strong></h3>
            {isSlider ? (
              <Swiper            
                loop={true}
                pagination={{ clickable: true, }}
                modules={[Pagination]}
                className="text-start"
              >
              {
                paragraph.map((paragraphs, index) => (
                <SwiperSlide key={index}>
                  <h3>{paragraphs.subtitle}</h3>
                  <p className="text-start">{paragraphs.text}</p>
                </SwiperSlide>
              ))}             
              </Swiper> 
              ) : (
              <>
                <p className="text-start">{text}</p>
              </>
            )}
          </div>
          <div className={`col-lg-6 text-center ${style.logo_container} `}>
            <Image src={`/img/stories-customers/${image}`} alt="" width={350} height={100}/>
            <div className="light-effect"></div>
          </div>
        </div>

  )
}
