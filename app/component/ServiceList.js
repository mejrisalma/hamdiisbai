'use client';
import React, { useState } from 'react';
import Service from './Service';
import ServiceModal from './ServiceModal'; 

const cardData = [
  { imageSrc: '/image/wes.png', title: 'علاج الوسواس القهري', 
  description: ' : الوسواس القهري هو اضطراب نفسي يتميز بأفكار متكررة وغير مرغوب فيها وسلوكيات قهرية يشعر الشخص بأنه مضطر لأدائها  الأعراض : تشمل غسل اليدين المفرط، التدقيق المتكرر، الأفكار المتكررة عن النظافة أو النظام، والشعور بالقلق المستمر.' },
  { imageSrc: '/image/s2.png', title: 'علاج الوسواس النفسي', description: 'تعريف : الوسواس النفسي هو اضطراب يؤدي إلى أفكار متكررة وغير مرغوب فيها تتسبب في القلق والتوتر. الأعراض : تشمل القلق المستمر، الأفكار المتكررة والغير مرغوب فيها، والتوتر الزائد في الحياة اليومية.' },
  { imageSrc: '/image/s3.png', title: ' علاج السحر', description: 'تعريف : السحر هو استخدام القوى الخارقة للطبيعة للتأثير على الشخص أو حياته بطرق سلبية. الأعراض : الشعور بالضيق المفاجئ، تغيرات غير مبررة في السلوك، الشعور بالتعب والإرهاق بدون سبب، والرؤى المزعجة في المنام'},
  { imageSrc: '/image/s4.png', title: 'علاج سحر العقول', description: 'تعريف : سحر العقول هو نوع من السحر يستهدف التأثير على العقل وتفكير الشخص. الأعراض : ضعف التركيز، الأفكار المربكة والمشوشة، الشعور بالضياع، وصعوبة اتخاذ القرارات.' },
  { imageSrc: '/image/s5.png', title: ' علاج سحر تفرق بين الأزواج', description: 'تعريف : هذا النوع من السحر يهدف إلى خلق الخلافات والمشاكل بين الأزواج ليفرق بينهم. الأعراض : تزايد الخلافات الزوجية، الشعور بعدم الراحة في المنزل، فقدان الحب والانسجام بين الزوجين.' },
  { imageSrc: '/image/s6.png', title: 'علاج سحر تفرق بين الأزواج', description: 'تعريف : سحر الأرحام هو سحر يستهدف النساء ويؤثر على قدرتهن على الحمل والإنجاب. الأعراض : مشاكل في الحمل بدون أسباب طبية واضحة، الإجهاض المتكرر، الشعور بالألم في منطقة البطن بدون سبب طبي.' },
  { imageSrc: '/image/s7.png', title: 'علاج سحر العقم', description: 'تعريف : سحر العقم هو نوع من السحر يهدف إلى منع الإنجاب عند الرجال والنساء. الأعراض :  العقم بدون سبب طبي واضح، الفشل المتكرر في محاولات الحمل، الشعور بالضيق والحزن المستمر.' },
  { imageSrc: '/image/s8.png', title: 'علاج الأمراض الخبيثة', description: 'تعريف : الأمراض الخبيثة تشمل السرطان وغيرها من الأمراض التي تؤثر بشكل خطير على صحة الإنسان. الأعراض : ظهور كتل أو أورام، فقدان الوزن بدون سبب، التعب والإرهاق المستمر، تغييرات غير مبررة في الجسم.' },
  { imageSrc: '/image/s9.png', title: 'علاج المس', description: 'تعريف : المس هو دخول الجن إلى جسم الإنسان والتأثير عليه بطرق مختلفة. الأعراض : الشعور بالضيق المفاجئ، تغييرات غير مبررة في السلوك، الشعور بالتعب والإرهاق بدون سبب، و الرؤى المزعجة في المنام.' },
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

  const [serviceModalOpen, setServiceModalOpen] = useState(false);
  const [serviceData, setServiceData] = useState({});

  const openModal = (service) => () => {
    setServiceData(service);
    setServiceModalOpen(true);
  };

  const handleClose = () => {
    setServiceModalOpen(false);
  };

  return (
    <div style={backgroundStyle}>
      <div className="flex justify-center">
        <img src='./image/titre.png' alt="Title" className="mb-10" />
      </div>

      <div className="flex flex-wrap justify-center gap-6 mx-4 md:mx-20 mt-10">
        {cardData.map((service, index) => (
          <div
            onClick={openModal(service)}
            key={index}
            className="cursor-pointer w-full sm:w-1/2 lg:w-1/4 mt-10"
          >
            <Service
              imageSrc={service.imageSrc}
              title={service.title}
              description={service.description}
            />
          </div>
        ))}
      </div>

      <ServiceModal
        open={serviceModalOpen}
        onClose={handleClose}
        service={serviceData}
      />
    </div>
  );
}

export default ServiceList;
