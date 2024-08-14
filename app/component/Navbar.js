import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <div className='bg-white w-full h-[116px] flex items-center'>
      <div className='flex items-center justify-between w-full max-w-screen-lg mx-auto px-4'>
        <div className='flex-1 flex justify-center'>
        <div className='flex-1 flex justify-around'>
        <Link href="/" className="font-andalus text-4xl font-normal leading-12 text-black hover:text-yellow-600">
          الرئيسية
        </Link>
        <Link href="/Service" className="font-andalus text-4xl font-normal leading-12 text-black hover:text-yellow-600">
          الخدمات
        </Link>
        <img src='/image/logo.png' alt='Logo' className='h-16' />
        <Link href="/blogs" className="font-andalus text-4xl font-normal leading-12 text-black hover:text-yellow-600">
          المقالات
        </Link>
        <Link href="/contactUs" className="font-andalus text-4xl font-normal leading-12 text-black hover:text-yellow-600">
          الاتصال
        </Link>
      </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
