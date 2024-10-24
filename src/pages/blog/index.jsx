// pages/blog/index.jsx
import Link from 'next/link';
import postlistEn from '../../assets/posts/postsEn.json';
import postlistEs from '../../assets/posts/postsEs.json';
import { useTranslation } from 'next-i18next';

const Blog = () => {

  const { i18n } = useTranslation();
  const lang = i18n.language;
  const posts = lang === 'en' ? postlistEn : postlistEs;

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.url}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
