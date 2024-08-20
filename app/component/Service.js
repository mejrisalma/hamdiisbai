'use client';

import React, { useState } from 'react';
import Popup from './Popup'; 

function Service({ imageSrc, title, description }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative max-w-sm rounded overflow-hidden shadow-lg bg-white cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        className="w-full h-48 object-cover"
        src={imageSrc}
        alt={title}
      />
      <div className="px-6 py-4">
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      
    
      {isHovered && (
        <Popup
          imageSrc={imageSrc}
          title={title}
          description={description}
          onClose={() => setIsHovered(false)} 
        />
      )}
    </div>
  );
}

export default Service;
