import React from 'react'
import RendezVous from '../component/RendezVous'
import Koran from '../component/Koran'

function page() {
  return (
    <div> 
    <div className="relative inline-block mb-20">
    <img
      src="/image/fontfiltre.png"
      className="block w-full h-auto"
    />
    <img
      src="/image/filtre.png"
      className="absolute top-0 left-0 w-full h-auto opacity-50"
    />
  </div>
  <div className="flex justify-center">
  <img src='./image/logooo.png'></img>
  </div>
  <div className="flex justify-center">
  <img src='./image/douaa.png'></img></div>
  <div className='flex mx-8 my-10'>
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
<div className='mx-8 space-x-6'>
<img src='./image/info1.png'></img>
<img src='./image/info2.png'></img>
<img src='./image/info3.png'></img>
</div>
  </div>
  <Koran/>


  </div>
  )
}

export default page