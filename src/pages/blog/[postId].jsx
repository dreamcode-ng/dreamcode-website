// pages/blog/[postId].jsx
import { useRouter } from 'next/router';
import postlistEn from '../../assets/posts/postsEn.json';
import postlistEs from '../../assets/posts/postsEs.json';
import { useTranslation } from 'next-i18next';
import Markdown from 'markdown-to-jsx';
import NotFound from './../404'

const Post = () => {
  const router = useRouter();
  const { postId } = router.query; // Obtiene el postId de la URL

  const { i18n } = useTranslation();
  const lang = i18n.language;
  const posts = lang === 'en' ? postlistEn : postlistEs;

  const post = posts.find((p) => p.url === postId); // Busca el post por su URL

  if (!post) return <NotFound />;

  return (
    <main>
      <h1>{post.title}</h1>
      
      <Markdown>{post.content}</Markdown>

    </main>
  );
};

export default Post;
