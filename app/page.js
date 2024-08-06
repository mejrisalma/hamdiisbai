import React from 'react'
import ServiceList from './component/ServiceList';
import Koran from './component/Koran';

function page() {
  return (
    
   <div className="relative inline-block">
    <img src="/image/fond.png" className="w-full h-auto" alt="Fond" />
    <h1 className="font-poppins text-[48px] font-bold leading-[33px] text-amber-400 text-right my-10 px-11">
      معلومات عن المعالج
    </h1>
    <div className="flex items-start">
      {/* Texte aligné à gauche */}
      <div className="flex-1 mr-4">
        <div className="space-y-6">
          <div className='mt-0'>
            <h2 className="text-2xl font-semibold ">منهجنا</h2>
            <p>يعتمد المعالج حمدي صبي في علاجاته على تلاوة الآيات القرآنية والأدعية الصحيحة<br></br>، مستندين إلى السنة النبوية الشريفة. نهدف إلى نشر الوعي بأهمية <br></br>العلاج بالقرآن الكريم وتعزيز الثقة بالله تعالى كأفضل علاج لجميع المشاكل الصحية والروحانية.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">رؤيتنا</h2>
            <p>نسعى إلى أن نكون ملاذًا آمنًا لكل من يبحث عن الشفاء بالقرآن الكريم. نؤمن بأن <br></br>القرآن الكريم يحمل الشفاء لكل داء، ونحرص على تقديم خدماتنا بروح من الرحمة <br></br>والتفاني.</p>
          </div>
        </div>
      </div>
    
      <img src="/image/koran.png" className="w-1/3 h-auto max-w-lg rounded-lg shadow-lg mx-20" alt="Image du Koran" />
       
    </div>
    <ServiceList/>
    <Koran/>
  </div>
);
}

export default page