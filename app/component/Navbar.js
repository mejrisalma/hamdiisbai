
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image from next/image

function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-center h-16">
          <div className="flex-1 flex items-center justify-center sm:justify-center">
            <div className="flex items-center space-x-4">
              <div className="bg-custom-background p-4 text-left">
                <Link href="/" className="font-andalus text-40px font-normal leading-61 text-black">
                  الرئيسية
                </Link>
              </div>

            

              <div className="bg-custom-background p-20 text-left ">
                <Link href="/Service" className="font-andalus text-40px font-normal leading-61 text-black">
                  الخدمات
                </Link>
              </div>
                {/* Logo Image */}
                <div className="  mt-1 ">
                <img
                  src="image/logo.png" // Path to your logo image
                  alt="Logo"
                  width={100} // Adjust width as needed
                  height={40} // Adjust height as needed
                  className="object-contain"
                />
            </div>
              <div className="bg-custom-background p-20 text-left">
                <Link href="/blogs" className="font-andalus text-40px font-normal leading-61 text-black">
                  المقالات
                </Link>
              </div>
              <div className="bg-custom-background p-4 text-left">
                <Link href="/contactUs" className="font-andalus text-40px font-normal leading-61 text-black">
                  الاتصال
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
