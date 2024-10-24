// pages/404.jsx
import React from 'react';
import Link from 'next/link'

const Custom404 = () => {
  return (
    <div>
      <h2>Not Found: 404 </h2>
      <p>Could not find requested resource</p>
      <p>
        View <Link href="/blog">all posts</Link>
      </p>
    </div>
  );
};

export default Custom404;
