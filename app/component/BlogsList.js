import React from 'react';
import Link from 'next/link';
import Blogs from './Blogs';

const blogData = [
  { id: '1', imageSrc: '/image/blogm.png', titre: 'سحر التفريق بين الأزواج', description:' سحر التفريق هو نوع من السحر يُستخدم لإحداث الفُرقة والشقاق بين الزوجين, ...' },
  { id: '2', imageSrc: '/image/blog1.png', titre: ' السحر: تعريفه وأعراضه ', description:'السحر هو استخدام قوى خارقة للطبيعة للتأثير على حياة الأفراد بطرق سلبية, ...' },
  { id: '3', imageSrc: '/image/blog1.png', titre: ' الوسواس النفسي: فهمه وأعراضه    ', description:'الوسواس النفسي هو اضطراب نفسي يتمثل في أفكار ملحة ومتكررة, ...' }
];

function BlogsList() {
  const backgroundStyle = {
    backgroundImage: 'url(/image/fondBlogs.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '20px',
    minHeight: '100vh',
  };

  return (
    <div className="relative" style={backgroundStyle}>
      <div className='flex flex-col items-center mt-10 space-y-3'>
        <img src='/image/besmellah.png' alt='Besmellah' />
        <img src='/image/logo2.png' alt='Logo2' />
        <img src='/image/titre2.png' alt='Titre2' />
      </div>
      <div className="flex flex-wrap justify-center gap-6 mx-20 mt-10">
        {blogData.map((blog) => (
          <Link key={blog.id} href={`/blogs/${blog.id}`} passHref>
            <div className="w-full lg:w-1/4 mt-10 cursor-pointer">
              <Blogs imageSrc={blog.imageSrc} titre={blog.titre} description={blog.description} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BlogsList;
