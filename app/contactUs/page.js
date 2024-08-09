import React from 'react'

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

  <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <img src="./image/logocontact.png"/>
  <h1>مساعدتك وإرشادك.</h1>
  <h1>
    نسأل الله أن يمن علينا وعليكم<br></br> بالشفاء والعافية.
  </h1>
</div>
</div>
  )
}

export default page