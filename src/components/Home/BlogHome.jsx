import React from 'react'
import style from './home.module.css';
import { ButtonIcon } from '../Buttons/Buttons';
import postlistEn from "@/assets/posts/postsEn.json"
import postlistEs from "@/assets/posts/postsEs.json"
import { useTranslation } from 'react-i18next';
import Markdown from 'markdown-to-jsx';
import Image from 'next/image';

function Card () {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className={style.cardPost}>
        <Image src={'/images/blog.jpg'} alt="blog" width={400} height={300} />
        <h3>Titulo</h3>
      </div>
    </div>
  )
}


function CardDos () {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div  className={`${style.cardPost} w-100 h-auto`}>
        <img className="w-100" src="https://placehold.co/461x259" />
        <div className={`${style.cardContent} d-flex align-items-center justify-content-start flex-column`} >
            <div >
                <h3 className='w_color f-lg-25 f_500' >
                  ReactJS o React Native, ¿cuál elegir para tu proyecto?</h3>
                <div className={`${style.cardTags}`} >
                    <div className="bg_secondary d-flex ">
                        <div className="text-center p_color f_300 f-lg-12">
                          Location: 5 min</div>
                    </div>
                    <div className="bg_secondary d-flex ">
                        <div className="text-center p_color f_300 f-lg-12">
                          Diciembre 8, 2023</div>
                    </div>
                </div>
            </div>
            <p className='p_color f-lg-18 f_300 text-start'>
              Cuando emprendes la iniciativa de desarrollar una aplicación, la evaluación de la tecnología adecuada es una etapa fundamental para asegurar...</p>
        </div>
      </div>
    </div> 
  )
}
export default function BlogHome() {

const { i18n } = useTranslation();
//const postlist = i18n.language === 'en' ? postlistEn : postlistEs;


  return (
    <div className="container-dc container position-relative py-5">
          <h2 className='m_color f-lg-40 text-start'>
            DreamBlog
          </h2>
          <p className='p_color f-lg-20 text-start mb-5'>Quédate en el futuro</p>
      <div className="row justify-content-center">
          <CardDos />
          <CardDos />
          <CardDos />
      </div>            
      <ButtonIcon className="text-center" link="/blog" text="Ver más +" />
      

    </div>
    
  )
}

