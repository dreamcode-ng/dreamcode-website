import MetaDecorator from '@/components/MetaDatos/MetaDecorator';
import { useRouter } from 'next/router';
import postlistEn from '@/assets/posts/postsEn.json';
import postlistEs from '@/assets/posts/postsEs.json';
import { useTranslation } from 'react-i18next';
import Markdown from 'markdown-to-jsx';
import NotFound from './../404';
import style from "@/components/Blog/blog.module.css";
import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Breadcrumb from '@/components/UI/Breadcrumb/Breadcrumb';

export default function Post({ post }) {
  const router = useRouter();

  // Manejo de fallback: mostrar "Cargando..." mientras se genera la página
  if (router.isFallback) {
    return <p>Cargando...</p>;
  }

  // Si el post no existe, mostramos la página 404
  if (!post) {
    
    return <NotFound />;
  }

  return (   
    <>
      <MetaDecorator 
        title={post.title}
        description={post.description || "Artículo del blog"}
        url={`/blog/${post.url}`} 
      />
      <article className="">
        <figure className={style.post_img}>
          <Image 
            className="img-fluid w-100" 
            src={`/img/posts/${post.imglink}`} 
            width={1200}
            height={600}
            alt={post.title} 
            title={post.title} 
            loading="lazy" 
          />
        </figure>
        <div className="container">
          <div className="row">
            <div className="col-lg-1 col-sm-12"></div>
            <div className="col-lg-10">
              <Breadcrumb 
                sectionClass='mb-4'
                url='/blog'
                inicio='Dreamblog'
                namePage={post.title}
              />
              <div className="mb_50">
                <div className={style.post_content}>
                  <h1 className="f_p f-lg-40 f_600 m_color mt-3">{post.title}</h1>
                  <div className={`${style.entry_post_info} mb-2 text-capitalize`}>
                    <code>{post.date}</code>
                    <code>{post.read}</code>
                    <code>{post.category}</code>                                                        
                  </div>
                  <div className="mt-4 f_p"> 
                    <Markdown
                      options={{
                        overrides: {
                          a: {
                            component: ({ children, ...props }) => (
                              <a {...props} target="_blank" rel="noopener noreferrer">
                                {children}
                              </a>
                            ),
                          },
                        },
                      }}
                    >
                      {post.content}
                    </Markdown>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1"></div>
          </div>
        </div>
      </article>  
    </>
  );
}

// 🔹 Define las rutas que deben ser pre-generadas
export const getStaticPaths = async () => {
  const postlistEs = require('@/assets/posts/postsEs.json');
  const postlistEn = require('@/assets/posts/postsEn.json');

  // Unimos los posts de ambos idiomas
  const allPosts = [...postlistEs, ...postlistEn];

  const paths = allPosts.map(post => ({
    params: { postId: post.url }, // Asegúrate de que 'post.url' coincide con la URL dinámica
  }));

  return {
    paths,
    fallback: true, // O 'blocking' si quieres SSR en nuevas rutas
  };
};

// 🔹 Obtiene los datos del post basado en la URL
export const getStaticProps = async ({ params, locale }) => {
  const postlistEs = require('@/assets/posts/postsEs.json');
  const postlistEn = require('@/assets/posts/postsEn.json');

  // Detectar idioma
  const posts = locale === 'en' ? postlistEn : postlistEs;

  // Buscar el post por URL
  const post = posts.find(post => post.url === params.postId) || null;

  return {
    props: {
      post,
      ...(await serverSideTranslations(locale, ['posts', 'layout', 'form'])),
    },
    revalidate: 10, // ISR para regenerar la página cada 10s
  };
};
