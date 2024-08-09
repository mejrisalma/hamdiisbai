import React from 'react'
import RendezVous from '../component/RendezVous'
import Koran from '../component/Koran'

function page() {
  return (
    <div> <div className="relative inline-block mb-20">
    <img
      src="/image/fontfiltre.png"
      className="block w-full h-auto"
    />
    <img
      src="/image/filtre.png"
      className="absolute top-0 left-0 w-full h-auto opacity-50"
    />
  </div>
  <RendezVous/>
  <Koran/>
  </div>
  )
}

export default page