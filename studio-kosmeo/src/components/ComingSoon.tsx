'use client';

import Image from 'next/image';


export function ComingSoon() {

  return(
    <div>
      
      
      <div className='flex items-center justify-center'>
        {/* <Image 
          src="/KosmeoLogoOptions-Idea_6-Option3.1-completoSemFundo.PNG" 
          alt="Kosmeo Logo" 
          width={300}  
          height={300} /> */}
      </div>
      <h1 className='text-secondary font-extrabold text-4xl flex items-center justify-center font-comfortaa'>
        COMING SOON
      </h1>
      <h2 className='text-secondary font-bold flex items-center justify-center font-comfortaa'>
        jewelry • handcrafted with heart, designed by soul
      </h2>
      
    </div>
  )
}