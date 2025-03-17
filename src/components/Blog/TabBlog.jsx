import React, { useMemo, useState } from 'react';
import ContainerSection from '@/components/UI/Containers/ContainerSection';
import CardPost from '@/components/UI/CardPost/CardPost';
import postlistEn from '@/assets/posts/postsEn.json';
import postlistEs from '@/assets/posts/postsEs.json';
import { useTranslation } from 'next-i18next';
import { ButtonIcon } from '../UI/Buttons/Buttons';

function TabBlog() {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const postlist = lang === 'en' ? postlistEn : postlistEs;

  const [visibleCount, setVisibleCount] = useState(9); // Inicia mostrando 9 artículos

  // Memoiza la lista de resúmenes de contenido
  const excerptList = useMemo(() => postlist.map(post => {
    return post.content.split(" ").slice(0, 18).join(" ") + "...";
  }), [postlist]);

  // Función para cargar más artículos
  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 9);
  };

  return (
    <div className='-bg-primary'>
      <ContainerSection>
        <div className="row justify-content-center">
          {
            postlist.slice(0, visibleCount).map((post, i) => (
              <CardPost 
                key={i} 
                image={post.imglink}
                title={post.title}
                read={post.read}
                date={post.date}
                url={post.url}
                content={excerptList[i]} 
              />
            ))
          }
        </div>
        
        {/* Botón para cargar más artículos */}
        {visibleCount < postlist.length && (
          <ButtonIcon 
            className="align-items-center mt-5" 
            link="" 
            text="Ver más artículos" 
            onClick={handleLoadMore}
          /> 
        )}
      </ContainerSection>
    </div>
  );
}

export default TabBlog;
