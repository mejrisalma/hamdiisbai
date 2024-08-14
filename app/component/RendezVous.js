import React from 'react';

function RendezVous() {
  return (
    <div>
      <div className='mb-6 flex flex-col items-center mt-6'>
        <img src='/image/besmellah.png' alt='Besmellah' />
        <img src='/image/logo2.png' alt='Logo2' />
        <img src='/image/rd.png' alt='Titre2' />
      </div>
      <div className='flex mx-8'>
      <div className='w-1/2 bg-[#FCF3D1] border-2 border-[#FBC50B] mb-44'>
        <div className='mx-10 mt-6'>
          <h1 className='font-bold text-center text-3xl mt-11 text-[#666666]'>
            لديك أسئلة أو تريد الاتصال بنا؟
          </h1>
          <h1 className='text-2xl mt-4 text-[#666666] text-center'>
            املأ نموذج الاتصال الخاص بنا.
          </h1>
          <div className='mt-8 flex flex-col gap-4 md:flex-row md:gap-6'>
          <input 
            type='text'
            placeholder='البريد الإلكتروني'
            className='bg-white text-[#757575] p-2 border border-[#e0e0e0] flex-1'
          />
          <input 
            type='text'
            placeholder='الاسم'
            className='bg-white text-[#757575] p-2 border border-[#e0e0e0] flex-1'
          />
        </div>
        <div className='mt-8 flex flex-col gap-4 md:flex-row md:gap-6'>
          <input 
            type='text'
            placeholder='موضوع'
            className='bg-white text-[#757575] p-2 border border-[#e0e0e0] flex-1'
          />
          <input 
            type='text'
            placeholder='رقم الهاتف'
            className='bg-white text-[#757575] p-2 border border-[#e0e0e0] flex-1'
          />
        </div>
        
          <div className='mt-4'>
            <textarea
              className='bg-white text-[#757575] p-2 border border-[#e0e0e0] rounded w-full'
              id='message'
              rows='5'
              placeholder='رسالتك'
            />
          </div>
          <div className='mt-6 text-center '>
            <button className='bg-[#FBC50B] text-[#000000] py-2 px-4 rounded-lg font-bold'>
              أرسل رسالة
            </button>
          </div>
        </div>
      </div>

      <div className='mb-8 '>
      <img 
      src="./image/kiteb.png" 
      alt="kiteb"
className='h-svh mx-6 pb-36'
     
    />
      </div>
     
  
    
      </div>
    </div>
  );
}

export default RendezVous;
