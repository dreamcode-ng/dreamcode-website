import React from "react";
import { useTranslation } from 'next-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import style from '@/components/StoriesCustomers/stories.module.css'
import { Pagination } from "swiper/modules";
import Image from "next/image";
import Markdown from 'markdown-to-jsx';

export default function Stories() {

  const { t } = useTranslation('stories');

  const storieslist = t('customers_stories', { returnObjects: true })

  return (
    <section className={`${style.stories_customers} customers_stories line-break`}>
      <div className="container">
        <div className="text-center pb-3">
          <h2 className="text-center m_color f-lg-30 f_600 mb-4">
            {t('subtitle_stories')}
          </h2>
        </div>

        {
          storieslist.map((section, index) => (
            <ContentSection
              key={index}
              title={section.title}
              subtitle={section.subtitle}
              industry={section.industry}
              solutionType={section.solutionType}
              context={section.context}
              challenge={section.challenge}
              solution={section.solution}
              impact={section.impact}
              implemented={section.implemented}
              image={section.image}
              t={t}
            />
          ))
        }
      </div>
    </section>
  );
}

function ContentSection({ title, subtitle, industry, solutionType, context, challenge, solution, impact, implemented, image, t }) {

  return (

    <div className={`${style.item_storie} row align-items-center`}>

      {/* ===== ROW 1 ===== */}
      <div className="row">
        {/* ===== IMAGE COL ===== */}
        <div className={`col-lg-6 text-center order-1 order-lg-2 ${style.logo_container} `}>
          <Image src={`/img/stories-customers/${image}`}
            alt="Stories of Customers - DreamCode Software Colombia"
            style={{ objectFit: 'contain' }}
            width={350} height={200} />
        </div>
        {/* ===== PROJECT INFO COL ===== */}
        <div className="col-lg-6 order-2 order-lg-1">
          <div className="row">
            <h2 className="m_color f-lg-30 mb-3">{title}</h2>
            <h3 className="f-lg-20 mb-3"><strong>{subtitle}</strong></h3>
          </div>
          <div className="row">
            {/* ===== Industry COL ===== */}
            <div className="col-lg-6">
              <h4 className="m_color">{t('labels.industry')}</h4>
              <p className="text-start f-lg-18">
                <ul>
                  {industry.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </p>
            </div>
            {/* ===== Solution Type COL ===== */}
            <div className="col-lg-6">
              <h4 className="m_color">{t('labels.solution_type')}</h4>
              <p className="text-start f-lg-18">
                <ul>
                  {solutionType.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== ROW 2 ===== */}
      <div className="row">
        {/* ===== CONTEXT & CHALLENGE & SOLUTION COL ===== */}
        <div className="col-lg-6">
          <p className="text-start f-lg-18">
            <h4 className="m_color">{t('labels.context')}</h4>
            <Markdown>{context}</Markdown>
          </p>
          <p className="text-start f-lg-18">
            <h4 className="m_color">{t('labels.challenge')}</h4>
            <Markdown>{challenge}</Markdown>
          </p>
          <p className="text-start f-lg-18">
            <h4 className="m_color">{t('labels.solution')}</h4>
            <Markdown>{solution.description}</Markdown>
          </p>
        </div>
        {/* ===== IMPACT & WHAT WE IMPLEMENTED COL ===== */}
        <div className="col-lg-6">
          <p className="text-start f-lg-18">
            <h4 className="m_color">{t('labels.impact')}</h4>
            <Markdown>{impact}</Markdown>
          </p>
          <p className="text-start f-lg-18 mb-4">
            <h4 className="text-start mb-4">{t('labels.implemented')}</h4>
            {implemented.map((item, i) => (
              <p key={i} className="mb-4"><Markdown>{item}</Markdown></p>
            ))}
          </p>
        </div>
      </div>
    </div >

  )
}
