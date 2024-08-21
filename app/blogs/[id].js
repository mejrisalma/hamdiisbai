// pages/blogs/[id].js
import { useRouter } from 'next/router';
import React from 'react';

const fetchBlogData = (id) => {
  const blogData = [
    { id: '1', imageSrc: '/image/blogm.png', titre: 'سحر التفريق بين الأزواج', description:' سحر التفريق هو نوع من السحر يُستخدم لإحداث الفُرقة والشقاق بين الزوجين, ...' },
    { id: '2', imageSrc: '/image/blog1.png', titre: ' السحر: تعريفه وأعراضه ', description:'السحر هو استخدام قوى خارقة للطبيعة للتأثير على حياة الأفراد بطرق سلبية, ...' },
    { id: '3', imageSrc: '/image/blog1.png', titre: ' الوسواس النفسي: فهمه وأعراضه    ', description:'الوسواس النفسي هو اضطراب نفسي يتمثل في أفكار ملحة ومتكررة, ...' }
  ];
  return blogData.find(blog => blog.id === id );
};

const BlogPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const blog = fetchBlogData(id);

  if (!blog) return <div>Blog not found</div>;

  return (
    <div>
      <h1>{blog.titre}</h1>
      <img src={blog.imageSrc} alt={blog.titre} />
      <p>{blog.description}</p>
    </div>
  );
};

export default BlogPage;
