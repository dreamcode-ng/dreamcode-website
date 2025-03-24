// pages/blog/[postId].jsx
import { useRouter } from 'next/router';
import postlistEn from '@/assets/posts/postsEn.json';
import postlistEs from '@/assets/posts/postsEs.json';
import { useTranslation } from 'react-i18next';
import Markdown from 'markdown-to-jsx';
import NotFound from './../404';
import style from "@/components/Blog/blog.module.css"
import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Breadcrumb from '@/components/UI/Breadcrumb/Breadcrumb';

export default function Post () {
  const router = useRouter();
  const { postId } = router.query; // Obtiene el postId de la URL

  const { i18n } = useTranslation();
  const lang = i18n.language;
  const posts = lang === 'en' ? postlistEn : postlistEs;

  const post = posts.find((p) => p.url === postId); // Busca el post por su URL

  if (!post) return <NotFound />;

  return (   
    <article className="">
      <figure className={style.post_img}>
          <Image 
            className="img-fluid" 
            src={(`/img/posts/${post.imglink}`)} 
            width={1200}
            height={600}
            alt={post.title} title={post.title} 
            loading="lazy" />
      </figure>
      <div className="container">
          <div className="row">
              <div className="col-lg-1 col-sm-12"></div>
              <div className="col-lg-10">
                <Breadcrumb 
                  sectionClass='mb-4'
                  url='/blog'
                  inicio='Dreamblog'
                  namePage={post.title}/>

                  <div className="mb_50">
                      <div className={style.post_content}>
                          <h1 className="f_p f-lg-40 f_600 m_color mt-3">{post.title}</h1>
                          <div className={`${style.entry_post_info} mb-2 text-capitalize`}>
                              <code>{post.date}</code>
                              <code>{post.read}</code>
                              <code>{post.category}</code>                                                        
                          </div>
                          <div className="mt-4 f_p"> 
                            <Markdown>{post.content}</Markdown> 
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
              <div className="col-lg-1">
              </div>
          </div>
      </div>
    </article>  
  );
};

export const getStaticProps = async ({ locale }) => {
  
  return {
    props: {
      ...(await serverSideTranslations(locale, ['posts' , 'layout', 'form'])),
    },
  };
};
