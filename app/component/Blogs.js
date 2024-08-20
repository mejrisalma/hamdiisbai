import React from 'react'

function Blogs({imageSrc,titre,description,source}) {
  return (
<div>
    <div className="relative  p-4 rounded-none shadow-none">
      <img src={imageSrc} className="w-full h-auto mb-4 rounded-none" />
      <h2 className="text-xl font-bold mb-2 mx-6 text-[#D2973B]">{titre}</h2>
      <p className="text-gray-700 mb-2 mx-6">{description}</p>
      <span className="text-gray-500 mx-6">{source}</span>
    </div>
  </div>
  
  )
}

export default Blogs