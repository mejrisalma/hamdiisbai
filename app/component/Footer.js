import React from 'react';

function Footer() {
  return (
    <div className='bg-black text-white p-4 pt-10'>
      <div className='text-center'>
        <img src='./image/hamdi.png' className='m-auto max-w-full h-auto' alt='Logo' />
        <div className='py-4'>
          <h1 className='text-xs sm:text-sm md:text-base'>
            هنا تجدون العلاج بالقرآن الكريم فقط، موجهًا لكل من يعاني من مشاكل صحية وروحانية. نسعى لخدمة الناس في سبيل 
            <br />
            الله وتقديم الدعم الروحي والعلاج بالآيات الكريمة.
          </h1>
        </div>
        
        <hr className='border-white mx-auto my-4 w-3/4 md:w-1/2' />
        
        <a href="https://dundill.com/" className='block py-4 text-xs sm:text-sm'>
          <h1>©2024 DUNDILL. كل الحقوق محفوظة.</h1>
        </a>
      </div>
    </div>
  );
}

export default Footer;
