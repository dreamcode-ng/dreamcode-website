import React, { useMemo } from 'react';
import style from './home.module.css';
import { ButtonIcon } from '@/components/UI/Buttons/Buttons';
import postlistEn from "@/assets/posts/postsEn.json"
import postlistEs from "@/assets/posts/postsEs.json"
import { useTranslation } from 'react-i18next';
import Markdown from 'markdown-to-jsx';
import Image from 'next/image';
import Link from 'next/link';



function CardDos ( { image, title, read, date, url, content}) {

  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div  className={`${style.cardPost} w-100 h-auto`}>
        <Image className="w-100 h-100" src={`/img/posts/${image}`} width={460} height={259}/>
        <div className={`${style.cardContent} d-flex align-items-center justify-content-start flex-column`} >
            <div>
                <h3 className='w_color f-lg-25 f_500' >
                  <Link href={`/blog/${url}`} className='w_color f-lg-25 f_500'>{title}</Link>
                </h3>
                <div className={`${style.cardTags}`} >
                    <div className="-bg-secondary d-flex ">
                        <div className="text-center p_color f_300 f-lg-12">
                          Location: {read}</div>
                    </div>
                    <div className="-bg-secondary d-flex ">
                        <div className="text-center p_color f_300 f-lg-12">
                          {date}
                        </div>
                    </div>
                </div>
            </div>
            <Markdown className='p_color f-lg-18 f_300 text-start'>
              {content}
            </Markdown>
        </div>
      </div>
    </div> 
  )
}
export default function BlogHome() {

  const { t , i18n} = useTranslation();
  let lng = i18n.language;
  let postlist = null;

  lng === 'en' ? postlist = postlistEn : postlist = postlistEs
   
  const excerptList = useMemo(() => postlist.map(post => {
      return post.content.split(" ").slice(0, 18).join(" ") + "...";
  }), [postlist]);


  return (
    <div className="container-dc container position-relative py-5">
          <h2 className='m_color f-lg-40 text-start'>
            DreamBlog
          </h2>
          <p className='p_color f-lg-20 text-start mb-5'>Quédate en el futuro</p>
      <div className="row justify-content-center">
        {
          postlist.slice(0, 3).map((post, i) => {
            return (
              <CardDos key={i} 
                image={post.imglink}
                title={post.title}
                read={post.read}
                date={post.date}
                url={post.url}
                content={excerptList[i]} 

              />
            )
          })
        }
      </div>            
      <ButtonIcon className="align-items-center" link="/blog" text="Ver más +" />
      

    </div>
    
  )
}

