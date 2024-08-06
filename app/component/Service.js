import React from 'react'

function Service({ imageSrc, title }) {

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img
        className="w-full h-48 object-cover"
        src={imageSrc}
        alt={title}
      />
      <div className="px-6 py-4">
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
    </div>
  )
}

export default Service
