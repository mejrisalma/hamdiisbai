import React from 'react'
import Blogs from './Blogs';
const blogData = [
    { imageSrc: '/image/blogm.png', titre: 'سحر التفريق بين الأزواج', description:' سحر التفريق هو نوع من السحر يُستخدم لإحداث الفُرقة والشقاق بين الزوجين، مما يؤدي إلى تدهور العلاقة الزوجية وانتهاءها. يُعتقد أن هذا النوع من السحر يُستخدم بواسطة بعض الأشخاص ذوي النوايا السيئة لتدمير حياة الآخرين العائلية وإثارة النزاعات بين الأزواج...'},
    { imageSrc: '/image/blog1.png', titre: ' السحر: تعريفه وأعراضه ', description:'السحر هو استخدام قوى خارقة للطبيعة للتأثير على حياة الأفراد بطرق سلبية. يُعتبر السحر من الظواهر التي أثارت الفضول والقلق عبر العصور، حيث يسعى البعض لاستخدام هذه القوى لتحقيق مصالح شخصية أو إلحاق الضرر بالآخرين. يتم تنفيذ السحر بطرق متنوعة، سواء باستخدام طلاسم،...' },
    { imageSrc: '/image/blog1.png', titre: ' الوسواس النفسي: فهمه وأعراضه    ', description:'الوسواس النفسي هو اضطراب نفسي يتمثل في أفكار ملحة ومتكررة، تؤدي إلى القلق والتوتر لدى الشخص المصاب. يشعر الفرد الذي يعاني من الوسواس النفسي بأنه غير قادر على التخلص من هذه الأفكار أو السيطرة عليها، حتى وإن كان يدرك أنها غير منطقية أو مبالغ فيها....' }
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
        <div key={index} className="w-full  lg:w-1/4 mt-10">
          <Blogs imageSrc={blog.imageSrc} titre={blog.titre} description={blog.description} source={blog.source}/>
        </div>
      ))}
    </div>
  </div>
  )
}

export default BlogsList