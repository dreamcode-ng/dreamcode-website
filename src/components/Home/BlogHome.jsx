import React, { useMemo } from 'react';
import { ButtonIcon } from '@/components/UI/Buttons/Buttons';
import postlistEn from "@/assets/posts/postsEn.json"
import postlistEs from "@/assets/posts/postsEs.json"
import { useTranslation } from 'react-i18next';
import CardPost from '../UI/CardPost/CardPost';
import ContainerSection from '../UI/Containers/ContainerSection';

export default function BlogHome() {

  const { t , i18n} = useTranslation();
  let lang = i18n.language;
  const postlist = lang === 'en' ? postlistEn : postlistEs;

   
  const excerptList = useMemo(() => postlist.map(post => {
      return post.content.split(" ").slice(0, 18).join(" ") + "...";
  }), [postlist]);


  return (
    <ContainerSection>
        <h2 className='m_color f-lg-40 text-start'>DreamBlog</h2>
        <p className='p_color f-lg-20 text-start mb-5'>Quédate en el futuro</p>
        <div className="row justify-content-center">
          {
            postlist.slice(0, 3).map((post, i) => {
              return (
                <CardPost key={i} 
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
        <ButtonIcon className="align-items-center mt-5" link="/blog" text="Ver más +" />
    </ContainerSection>
    
  )
}

