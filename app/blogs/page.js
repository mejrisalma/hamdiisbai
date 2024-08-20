import React from 'react'
import BlogsList from '../component/BlogsList'
import Koran from '../component/Koran'

function page() {
  return (
    <div>
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
    <div className="min-h-screen bg-gray-200 p-8">
    <BlogsList />
    <Koran/>
</div></div>

  
export default page
