import React from 'react'
import Service from './Service';


const cardData = [
    { imageSrc: '/image/service1.png', title: 'علاج الوسواس القهري' },
    { imageSrc: '/image/s2.png', title: 'علاج الوسواس النفسي' },
    { imageSrc: '/image/s3.png', title: 'علاج السحر' },
    { imageSrc: '/image/s4.png', title: 'علاج سحر العقول' },
    { imageSrc: '/image/s5.png', title: 'علاج سحر تفرق بين الأزواج' },
    { imageSrc: '/image/s6.png', title: 'علاج سحر الأرحام' },
    { imageSrc: '/image/s7.png', title: ' علاج سحر العقم ' },
    { imageSrc: '/image/s8.png', title: 'علاج الأمراض الخبيثة  ' },
    { imageSrc: '/image/s9.png', title: 'علاج المس  ' },


  ];

function ServiceList() {
    const backgroundStyle = {
        backgroundImage: 'url(/image/fondService.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '20px',
        minHeight: '100vh',
      };
  return (
    <div style={backgroundStyle}>
    <div className="flex flex-wrap justify-center gap-6 mx-20">
      {cardData.map((service, index) => (
        <div key={index} className="w-full sm:w-1/4 lg:w-1/4 mt-10">
          <Service imageSrc={service.imageSrc} title={service.title} />
        </div>
      ))}
    </div>
  </div>

  )
}

export default ServiceList