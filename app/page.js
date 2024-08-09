import React from 'react'
import ServiceList from './component/ServiceList';
import Koran from './component/Koran';
import BlogsList from './component/BlogsList';
import RendezVous from './component/RendezVous';


function page() {
  return (
   <div className="relative inline-block">
    <img src="/image/fond.png" className="w-full h-auto" alt="Fond" />
    <h1 className="font-poppins text-[48px] font-bold leading-[33px] text-amber-400 text-right my-10 px-11">
      معلومات عن المعالج
    </h1>
    <div className="flex items-start mb-28">
      <div className="flex-1 mr-4">
        <div className="space-y-6">
          <div className='mt-0'>
            <h2 className="text-2xl font-semibold mx-8 ">منهجنا</h2>
            <p className='mx-8'>يعتمد المعالج حمدي صبي في علاجاته على تلاوة الآيات القرآنية والأدعية الصحيحة<br></br>، مستندين إلى السنة النبوية الشريفة. نهدف إلى نشر الوعي بأهمية <br></br>العلاج بالقرآن الكريم وتعزيز الثقة بالله تعالى كأفضل علاج لجميع المشاكل الصحية والروحانية.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mx-8">رؤيتنا</h2>
            <p className='mx-8'>نسعى إلى أن نكون ملاذًا آمنًا لكل من يبحث عن الشفاء بالقرآن الكريم. نؤمن بأن <br></br>القرآن الكريم يحمل الشفاء لكل داء، ونحرص على تقديم خدماتنا بروح من الرحمة <br></br>والتفاني.</p>
          </div>
        </div>
      </div>
    
      <img src="/image/koran.png" className="w-1/3 h-auto max-w-lg rounded-lg shadow-lg mx-20" alt="Image du Koran" />
       
    </div>
    <ServiceList/>
    <Koran/>
    <BlogsList/>
    <RendezVous/>
  </div>
);
}

export default page