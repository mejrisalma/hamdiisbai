import React from 'react'
import Service from '../component/Service'
import ServiceList from '../component/ServiceList'
import Koran from '../component/Koran'
import BlogsList from '../component/BlogsList'

function page() {
  return (
    <div >
    <div className="relative inline-block">
    <img
      src="/image/fontfiltre.png"
      className="block w-full h-auto"
    />
    <img
      src="/image/filtre.png"
      className="absolute top-0 left-0 w-full h-auto opacity-50"
    />
  </div>

  <div className="min-h-screen bg-gray-100">
  <div className="container mx-auto p-4">
  <div className="flex justify-center mb-10">
</div>
    <ServiceList />
  </div>
  <Koran/>
</div>
<BlogsList/>
  </div>

  )
}

export default page