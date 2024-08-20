import React from 'react';

function Popup({ imageSrc, title, description, onClose }) {
  return (
    <div
      className="absolute inset-0 bg-[#D9D9D9] flex flex-col items-center justify-center text-black p-6 rounded-2xl border border-gray-300 "
      style={{ zIndex: 10 }}
      onClick={onClose} 
    >
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-2/3 object-cover mb-4 rounded-2xl"
      />
      <h3 className="text-3xl font-semibold mb-4 text-[#D2973B]">{title}</h3>
      <p className="text-lg font-bold text-center">{description}</p>
    </div>
  );
}

export default Popup;
