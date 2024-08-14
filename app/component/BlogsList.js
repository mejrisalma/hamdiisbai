import React from 'react'
import Blogs from './Blogs';
const blogData = [
    { imageSrc: '/image/blog1.png', titre: 'احتجاج على قانون الحجاب', description:'Lorem ipsum dolor sit amet, consectetur adipisci motempor incididunt ut labore et dolore magna minimveniam, quis nostrud exercitation' ,source:'by source'},
    { imageSrc: '/image/blog1.png', titre: 'احتجاج على قانون الحجاب  ', description:'',source:'by source' },
    { imageSrc: '/image/blog1.png', titre: 'احتجاج على قانون الحجاب  ', description:'write blog',source:'by source' }
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
      {blogData.map((blog, index) => (
        <div key={index} className="w-full sm:w-1/4 lg:w-1/4 mt-10">
          <Blogs imageSrc={blog.imageSrc} titre={blog.titre} description={blog.description} source={blog.source}/>
        </div>
      ))}
    </div>
  </div>
  )
}

export default BlogsList