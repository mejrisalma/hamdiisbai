import React from 'react';

function Footer() {
  return (
    <div className='bg-black text-white p-4 pt-10'>
      <div className='text-center'>
        <img src='./image/hamdi.png' className='m-auto' alt='Logo' />
        <div className='py-4'>
          <h1 className='text-sm'>
            هنا تجدون العلاج بالقرآن الكريم فقط، موجهًا لكل من يعاني من مشاكل صحية وروحانية. نسعى لخدمة الناس في سبيل 
            <br />
            الله وتقديم الدعم الروحي والعلاج بالآيات الكريمة.
          </h1>
        </div>
        
        <hr className='border-white mr-40 ml-40' />
        <a href="https://dundill.com/" className='py-4 text-smhp'>
        <h1>©2024 DUNDILL. كل الحقوق محفوظة.</h1>
      </a>
      </div>
    </div>
  );
}

export default Footer;
