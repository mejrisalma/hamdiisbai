import React from 'react'
import ServiceList from './component/ServiceList';
import Koran from './component/Koran';
import BlogsList from './component/BlogsList';
import RendezVous from './component/RendezVous';

function page() {
  return (
   <div>
   <div className="w-full h-screen bg-cover bg-center flex flex-col lg:flex-row items-center justify-between text-white p-4 lg:p-6" style={{ backgroundImage: "url('/image/fondhome.png')" }}>
   <div className="flex flex-col items-start justify-center w-full lg:w-1/2 p-4 lg:p-6">
     <h1 className="text-4xl lg:text-[96px] font-bold mb-6 lg:mb-11 text-right lg:my-40 lg:mx-40 font-scheherazade">
       معالج رباني في  <br></br><br /><br></br>سبيل الله
     </h1>

     <span className="text-base lg:text-lg text-right lg:mx-40">
       مرحبًا بكم في الموقع الرسمي لمعالج رباني في سبيل الله. هنا تجدون العلاج<br />
       بالقرآن الكريم فقط، موجهًا لكل من يعاني من مشاكل صحية وروحانية. نسعى<br />
       لخدمة الناس في سبيل الله وتقديم الدعم الروحي والعلاج بآيات الله الكريمة.
     </span>
     <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-x-4 lg:space-y-0 my-6 lg:my-10 lg:mx-40">
       <a
         href="https://wa.me/0021628412908?text=Bonjour,%20je%20souhaite%20rester%20en%20contact."
         target="_blank"
         rel="noopener noreferrer"
         className="py-2 px-4 lg:py-2 lg:px-8 text-white font-semibold rounded-md bg-gradient-to-r from-[#FBC50B] to-[#D2973B] shadow-md border-none"
       >
         ابقى على تواصل
       </a>
       <span className="text-white text-base lg:text-lg py-2 lg:py-8 px-4 lg:px-6">
         21628412908+
       </span>
     </div>
   </div>
   <div className="flex items-center justify-center lg:justify-start w-full lg:w-1/2 px-4 lg:px-36 pt-12 lg:pt-24">
     <img src="/image/cadre.png" alt="Cadre" className="w-auto h-auto" />
   </div>
</div>
<div className='mt-32 mr-10'>   
 <h1 className="font-poppins text-[48px] font-bold leading-[33px] text-amber-400 text-right mx-36  my-10">
معلومات عن المعالج
</h1>
<div className="flex items-start mb-20">
<div className="flex-1 mr-28">
  <div className="space-y-6 mt-0">
    <div>
      <h2 className="text-2xl font-semibold mx-8 text-[#4D4D4D]">منهجنا</h2>
      <p className='mx-8 text-[#4D4D4D]'>يعتمد المعالج حمدي صبي في علاجاته على تلاوة الآيات القرآنية والأدعية الصحيحة<br></br>، مستندين إلى السنة النبوية الشريفة. نهدف إلى نشر الوعي بأهمية <br></br>العلاج بالقرآن الكريم وتعزيز الثقة بالله تعالى كأفضل علاج لجميع المشاكل الصحية والروحانية.</p>
    </div>
    <div>
      <h2 className="text-2xl font-semibold mx-8 text-[#4D4D4D]">رؤيتنا</h2>
      <p className='mx-8 text-[#4D4D4D]'>نسعى إلى أن نكون ملاذًا آمنًا لكل من يبحث عن الشفاء بالقرآن الكريم. نؤمن بأن <br></br>القرآن الكريم يحمل الشفاء لكل داء، ونحرص على تقديم خدماتنا بروح من الرحمة <br></br>والتفاني.</p>
    </div>
  </div>
</div>
<img src="/image/koraan.png" className="ml-11" alt="Image du Koran" />
</div>
</div>

    <ServiceList/>
    <Koran/>
    <BlogsList/>
    <RendezVous/>
  </div>
);
}

export default page